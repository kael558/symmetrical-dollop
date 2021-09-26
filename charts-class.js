import { nodes, colors } from "./nodes";

export class Chart {
  constructor() {
    // Exposed variables
    const attrs = {
      id: `ID${Math.floor(Math.random() * 1000000)}`, // Id for event handlings
      svgWidth: 800,
      svgHeight: 600,
      marginTop: 0,
      marginBottom: 0,
      marginRight: 0,
      marginLeft: 0,
      container: "body",
      defaultTextFill: "#2C3E50",
      nodeTextFill: "white",
      defaultFont: "Helvetica",
      backgroundColor: this.rgbaObjToColor(colors.Slate_Grey),
      data: nodes,
      nodes: null,
      connectorLevels: 2,
      depth: 180,
      duration: 600,
      strokeWidth: 3,
      initialZoom: 1,
      academicValues: {
        "Academic Year": ["Total"],
        Degree: ["Total"],
        Faculty: ["Total"],
        "Study Status": ["Total"]
      },
      diversityValues: {
        Age: [],
        Sex: [],
        "Citizenship Status": []
      },
      onNodeClick: null,
      tooltipDiv: null,
      numExpanded: 0,
      unclickedWidth: 5,
      clickedWidth: 15,
      centerX: 0,
      centerY: 0
    };

    this.getChartState = () => attrs;

    // Dynamically set getter and setter functions for Chart class
    Object.keys(attrs).forEach(key => {
      //@ts-ignore
      this[key] = function(_) {
        var string = `attrs['${key}'] = _`;
        if (!arguments.length) {
          return eval(`attrs['${key}'];`);
        }
        eval(string);
        return this;
      };
    });

    this.renderLegend();
    this.initializeEnterExitUpdatePattern();
  }

  initializeEnterExitUpdatePattern() {
    d3.selection.prototype.patternify = function(params) {
      var container = this;
      var selector = params.selector;
      var elementTag = params.tag;
      var data = params.data || [selector];

      // Pattern in action
      var selection = container.selectAll("." + selector).data(data, (d, i) => {
        if (typeof d === "object") {
          if (d.id) {
            return d.id;
          }
        }
        return i;
      });
      selection.exit().remove();
      selection = selection
        .enter()
        .append(elementTag)
        .merge(selection);
      selection.attr("class", selector);
      return selection;
    };
  }

  renderLegend() {
    //hierarchial tree legend
    const legend = d3.select("#node-legend");
    const width = 12,
      height = 12;
    const rectBuilder = (x, y, color) => {
      legend
        .append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", width)
        .attr("height", height)
        .style("fill", this.rgbaObjToColor(color))
        .style("stroke", "black");
    };

    const textBuilder = (x, y, text, size) => {
      legend
        .append("text")
        .attr("x", x)
        .attr("y", y)
        .text(text)
        .style("font-size", size)
        .style("fill", "white")
        .attr("alignment-baseline", "middle");
    };

    textBuilder(60, 10, "LEGEND", "20px");
    rectBuilder(20, 34, colors.Uncollected_Node_Fill);
    rectBuilder(20, 64, colors.Diversity_Node_Fill);
    rectBuilder(20, 94, colors.Academic_Node_Fill);
    textBuilder(40, 40, "Uncollected Attributes", "15px");
    textBuilder(40, 70, "Diversity Attributes", "15px");
    textBuilder(40, 100, "Academic Attributes", "15px");
  }

  renderSelectedAttributes() {
    const attrs = this.getChartState();

    const sel = d3.select("#selected-attributes");
    sel.selectAll("*").remove();

    const textBuilder = (x, y, text, size) => {
      sel
        .append("text")
        .attr("x", x)
        .attr("y", y)
        .text(text)
        .style("font-size", size)
        .style("fill", "white")
        .attr("alignment-baseline", "middle");
    };

    let y = 10;
    let x = 50;
    textBuilder(x - 40, y, "SELECTED CATEGORIES", "15px");
    y += 30;
    for (const attr in attrs.academicValues) {
      if (
        attrs.academicValues[attr].length > 1 ||
        (attrs.academicValues[attr].length === 1 &&
          attrs.academicValues[attr][0] !== "Total")
      ) {
        textBuilder(x, y, "- " + attr, "15px");
        y += 30;
      }
    }

    for (const attr in attrs.diversityValues) {
      if (attrs.diversityValues[attr].length > 0) {
        textBuilder(x, y, "- " + attr, "15px");
        y += 30;
      }
    }
  }

  // This method retrieves passed node's children ID's (including node)
  getNodeChildrenIds({ data, children, _children }, nodeIdsStore) {
    // Store current node ID
    nodeIdsStore.push(data.nodeId);

    // Loop over children and recursively store descendants id (expanded nodes)
    if (children) {
      children.forEach(d => {
        this.getNodeChildrenIds(d, nodeIdsStore);
      });
    }

    // Loop over _children and recursively store descendants id (collapsed nodes)
    if (_children) {
      _children.forEach(d => {
        this.getNodeChildrenIds(d, nodeIdsStore);
      });
    }

    // Return result
    return nodeIdsStore;
  }

  // This method can be invoked via chart.setZoomFactor API, it zooms to particulat scale
  setZoomFactor(zoomLevel) {
    const attrs = this.getChartState();
    const calc = attrs.calc;

    // Store passed zoom level
    attrs.initialZoom = zoomLevel;

    // Rescale container element accordingly
    attrs.centerG.attr(
      "transform",
      ` translate(${calc.centerX}, ${calc.nodeMaxHeight / 2}) scale(${
        attrs.initialZoom
      })`
    );
  }

  render() {
    //InnerFunctions which will update visuals

    const attrs = this.getChartState();
    const thisObjRef = this;

    //Drawing containers
    const container = d3.select(attrs.container);
    const containerRect = container.node().getBoundingClientRect();
    if (containerRect.width > 0) attrs.svgWidth = containerRect.width;

    //Calculated properties
    const calc = {
      id: null,
      chartTopMargin: null,
      chartLeftMargin: null,
      chartWidth: null,
      chartHeight: null
    };
    calc.id = `ID${Math.floor(Math.random() * 1000000)}`; // id for event handlings
    calc.chartLeftMargin = attrs.marginLeft;
    calc.chartTopMargin = attrs.marginTop + 50;
    calc.chartWidth = attrs.svgWidth - attrs.marginRight - calc.chartLeftMargin;
    calc.chartHeight =
      attrs.svgHeight - attrs.marginBottom - calc.chartTopMargin;
    attrs.calc = calc;

    // Get maximum node width and height
    calc.nodeMaxWidth = d3.max(attrs.data, ({ width }) => width);
    calc.nodeMaxHeight = d3.max(attrs.data, ({ height }) => height);

    // Calculate max node depth (it's needed for layout heights calculation)
    attrs.depth = calc.nodeMaxHeight + 100;
    calc.centerX = calc.chartWidth / 2 - 80;

    //********************  LAYOUTS  ***********************
    const layouts = {
      treemap: null
    };
    attrs.layouts = layouts;

    // Generate tree layout function
    layouts.treemap = d3
      .tree()
      .separation(function(a, b) {
        if (a.parent.id === b.parent.id) {
          if (a.data.width === 280) {
            //attribute
            return 0.9;
          }
        } else {
          return 1.2;
        }
        return 1;
      })
      .size([calc.chartWidth, calc.chartHeight])
      .nodeSize([calc.nodeMaxWidth + 10, calc.nodeMaxHeight + attrs.depth]);

    // ******************* BEHAVIORS . **********************
    const behaviors = {
      zoom: null
    };

    // Get zooming function
    behaviors.zoom = d3.zoom().on("zoom", d => this.zoomed(d));

    //****************** ROOT node work ************************

    // Convert flat data to hierarchical
    attrs.root = d3
      .stratify()
      .id(({ nodeId }) => nodeId)
      .parentId(({ parentNodeIds }) => parentNodeIds[0])(attrs.data);

    // Set child nodes enter appearance positions
    attrs.root.x0 = 0;
    attrs.root.y0 = 0;

    /** Get all nodes as array (with extended parent & children properties set)
          This way we can access any node's parent directly using node.parent - pretty cool, huh?
      */
    attrs.allNodes = attrs.layouts.treemap(attrs.root).descendants();

    // Collapse all children at first
    attrs.root.children.forEach(d => this.collapse(d));

    // Then expand some nodes, which have `expanded` property set
    attrs.root.children.forEach(d => this.expandSomeNodes(d));

    // *************************  DRAWING **************************
    //Add svg
    const svg = container
      .patternify({
        tag: "svg",
        selector: "svg-chart-container"
      })
      .attr("width", attrs.svgWidth)
      .attr("height", attrs.svgHeight)
      .attr("font-family", attrs.defaultFont)
      .call(behaviors.zoom)
      .attr("cursor", "move")
      .style("background-color", attrs.backgroundColor);
    attrs.svg = svg;

    //Add container g element
    const chart = svg
      .patternify({
        tag: "g",
        selector: "chart"
      })
      .attr(
        "transform",
        `translate(${calc.chartLeftMargin},${calc.chartTopMargin})`
      );

    // Add one more container g element, for better positioning controls
    attrs.centerG = chart
      .patternify({
        tag: "g",
        selector: "center-group"
      })
      .attr(
        "transform",
        `translate(${calc.centerX},${calc.nodeMaxHeight / 2}) scale(${
          attrs.initialZoom
        })`
      );

    attrs.chart = chart;
    attrs.centerX = calc.centerX;
    attrs.centerY = calc.nodeMaxHeight / 2;

    //Define title
    d3
      .select("#node-div")
      .append("text")
      .attr("class", "title")
      .text(
        "Carleton University Students Collected & Missing Demographics Data"
      );

    //Define div for tooltip
    attrs.tooltipDiv = d3
      .select("#node-div")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Display tree contenrs
    this.update(attrs.root);

    return this;
  }

  // This function basically redraws visible graph, based on nodes state
  update({ x0, y0, x, y }) {
    const attrs = this.getChartState();
    const calc = attrs.calc;

    // render selected attributes
    this.renderSelectedAttributes();

    //  Assigns the x and y position for the nodes
    const treeData = attrs.layouts.treemap(attrs.root);

    const isAttributeNode = node => {
      return (
        node &&
        node.parent &&
        (node.parent.id === "Convocated" || node.parent.id === "Enrolled")
      );
    };

    let parentID = null;
    let count = 2;

    // Get tree nodes and links and attach some properties
    const nodes = treeData.descendants().map(d => {
      // If at least one property is already set, then we don't want to reset other properties

      // Declare properties with deffault values
      let borderColor = "steelblue";
      let backgroundColor = "steelblue";
      let textColor = "black";
      let width = d.data.width;
      let height = d.data.height;
      let description = "" || d.data.description;

      let depth = d.depth;
      if (isAttributeNode(d.parent)) {
        if (d.parent.id !== parentID) {
          count += 1;
        }
        parentID = d.parent.id;
        depth = count;
      } else {
        if (d.parent) {
          depth = d.parent.depth + 1;
        }
      }

      if (d.data.borderColor) {
        borderColor = this.rgbaObjToColor(d.data.borderColor);
      }
      if (d.data.backgroundColor) {
        backgroundColor = this.rgbaObjToColor(d.data.backgroundColor);
      }
      if (d.data.textColor) {
        textColor = this.rgbaObjToColor(d.data.textColor);
      }

      //set depth
      let y = depth * attrs.depth;

      // Extend node object with calculated properties
      return Object.assign(d, {
        borderColor,
        backgroundColor,
        textColor,
        width,
        height,
        description,
        depth,
        y
      });
    });

    // Save nodes for click
    attrs.nodes = nodes;
    //console.log(attrs.nodes);

    // Get all links
    const links = treeData.descendants().slice(1);

    // --------------------------  LINKS ----------------------
    // Get links selection
    const linkSelection = attrs.centerG
      .selectAll("path.link")
      .data(links, ({ id }) => id);

    const linkEnter = linkSelection
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", d => {
        const o = {
          x: d.x,
          y: d.y
        };
        return this.diagonal(o, [o, o]);
      });

    const linkUpdate = linkEnter.merge(linkSelection);

    linkUpdate
      .attr("fill", "none")
      .attr("stroke-width", ({ data }) => data.connectorLineWidth || 2)
      .attr(
        "stroke",
        ({ data }) =>
          data.connectorLineColor
            ? this.rgbaObjToColor(data.connectorLineColor)
            : "green"
      )
      .attr("stroke-dasharray", ({ data }) => data.dataArray || "");

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(attrs.duration)
      .attr("d", d => {
        const parents = d.data.parentNodeIds.map(parentNodeId =>
          nodes.find(node => node.id === parentNodeId)
        );
        return this.diagonal(d, parents);
      });

    // Remove any  links which is exiting after animation
    const linkExit = linkSelection
      .exit()
      .transition()
      .duration(attrs.duration)
      .attr("d", d => {
        const o = {
          x: d.parent.x || 0,
          y: d.parent.y || 0
        };
        let diag = this.diagonal(o, [o]);
        return diag;
      })
      .remove();

    // --------------------------  NODES ----------------------

    // Get nodes selection
    const nodesSelection = attrs.centerG
      .selectAll("g.node")
      .data(nodes, ({ id }) => id);

    let ht = this;
    // Enter any new nodes at the parent's previous position.
    const nodeEnter = nodesSelection
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${x0},${y0})`)
      .attr("cursor", "pointer")
      .on("click", d => {
        if (
          isAttributeNode(d) &&
          [...d3.event.srcElement.classList].includes("node-button-circle")
        ) {
          return;
        }

        ht.onButtonClick(d);
      })
      .on("mouseover", d => {
        if (
          d.description &&
          (attrs.tooltipDiv.style("opacity") != 0.9 ||
            d.description !== attrs.tooltipDiv._groups[0][0].innerHTML)
        ) {
          attrs.tooltipDiv
            .transition()
            .duration(100)
            .style("opacity", 0.9);

          let lines = d.description.length / 46 + 1;

          attrs.tooltipDiv
            .html(d.description)
            .style("left", d3.event.pageX - d.data.width / 2 + "px")
            .style("top", d3.event.pageY - 20 * lines + "px");
        }
      })
      .on("mouseout", d => {
        if (d3.event.toElement.className.baseVal === "svg-chart-container") {
          attrs.tooltipDiv
            .transition()
            .duration(500)
            .style("opacity", 0);
        }
      });

    // Add background rectangle for the nodes
    nodeEnter
      .patternify({
        tag: "rect",
        selector: "node-rect",
        data: d => [d]
      })
      .style(
        "fill",
        ({ _children }) => (_children ? "lightsteelblue" : "#fff")
      );

    // Node update styles
    const nodeUpdate = nodeEnter
      .merge(nodesSelection)
      .style("font", "12px sans-serif");

    // Add text element inside group
    nodeUpdate.patternify({
      tag: "text",
      selector: "node-text",
      data: d => [d]
    });

    nodeUpdate
      .patternify({
        tag: "circle",
        selector: "node-button-circle",
        data: d => [d]
      })
      .on("click", d => this.onSelectAll(d));

    nodeUpdate
      .select(".node-button-circle")
      .attr("transform", ({ data }) => `translate(0,${data.height / 2})`)
      .attr("opacity", d => {
        if (isAttributeNode(d)) {
          return 1;
        }
        return 0;
      })
      .attr("r", 16)
      .attr("stroke-width", ({ data }) => data.borderWidth || attrs.strokeWidth)
      .attr("fill", d => {
        const clicked = child =>
          child.data.borderWidth == attrs.clickedWidth || !child.data.clickable;

        if (isAttributeNode(d)) {
          return (d.children && d.children.every(clicked)) ||
            (d._children && d._children.every(clicked))
            ? this.rgbaObjToColor(colors.White)
            : attrs.backgroundColor;
        } else {
          return attrs.backgroundColor;
        }
      })
      .attr("stroke", ({ borderColor }) => borderColor)
      .style(
        "visibility",
        d => (isAttributeNode(d) && d.data.clickable ? "visible" : "hidden")
      );

    this.restyleForeignObjectElements();

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .attr("opacity", 0)
      .duration(attrs.duration)
      .attr("transform", ({ x, y }) => `translate(${x},${y})`)
      .attr("opacity", 1);

    // Style node rectangles
    nodeUpdate
      .select(".node-rect")
      .attr("width", ({ data }) => data.width)
      .attr("height", ({ data }) => data.height)
      .attr("x", ({ data }) => -data.width / 2)
      .attr("y", ({ data }) => -data.height / 2)
      .attr("rx", ({ data }) => data.borderRadius || 0)
      .attr("stroke-width", ({ data }) => data.borderWidth || attrs.strokeWidth)
      .attr("cursor", "pointer")
      .attr("stroke", ({ borderColor }) => borderColor)
      .style("fill", ({ backgroundColor }) => backgroundColor);

    // Remove any exiting nodes after transition
    const nodeExitTransition = nodesSelection
      .exit()
      .attr("opacity", 1)
      .transition()
      .duration(attrs.duration)
      .attr("transform", ({ parent }) => `translate(${parent.x},${parent.y})`)
      .on("end", function() {
        d3.select(this).remove();
      })
      .attr("opacity", 0);

    // On exit reduce the node rects size to 0
    nodeExitTransition
      .selectAll(".node-rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("x", 0)
      .attr("y", 0);

    // Store the old positions for transition.
    nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // This function detects whether current browser is edge
  isEdge() {
    return window.navigator.userAgent.includes("Edge");
  }

  /* Function converts rgba objects to rgba color string 
    {red:110,green:150,blue:255,alpha:1}  => rgba(110,150,255,1)
  */
  rgbaObjToColor({ red, green, blue, alpha }) {
    return `rgba(${red},${green},${blue},${alpha})`;
  }

  // Generate custom diagonal - play with it here - https://to.ly/1zhTK
  diagonal(s, parents) {
    const group = this.getChartState()
      .centerG.append("g")
      .attr("id", "groupOfPaths");
    let heightMultiplier = parents.length == 2 ? 0.6 : 0.4;

    for (const t of parents) {
      let height = s.y - t.y;

      // Calculate some variables based on source and target (s,t) coordinates
      let x = s.x;
      let y = s.y;
      let ex = t.x;
      let ey = t.y;
      let xrvs = ex - x < 0 ? -1 : 1;
      let yrvs = -1;
      let rdef = 0;
      let rInitial = Math.abs(ex - x) / 2 < rdef ? Math.abs(ex - x) / 2 : rdef;
      let r = Math.abs(ey - y) / 2 < rInitial ? Math.abs(ey - y) / 2 : rInitial;
      let h = Math.abs(ey - y) * heightMultiplier - r;
      let w = Math.abs(ex - x) - r * 2;

      let path = `
             M ${x} ${y}
             L ${x} ${y + h * yrvs}
             L ${x + w * xrvs + r * xrvs} ${y + h * yrvs + r * yrvs}
             L ${ex} ${ey}
           `;
      group
        .append("path")
        .attr("d", path)
        .attr("fill", "none");
    }

    let combinedD = "";
    group.selectAll("path").each(function() {
      if (d3.select(this).attr("d")) combinedD += d3.select(this).attr("d");
    });
    group.remove();
    return combinedD;
  }

  restyleForeignObjectElements() {
    const attrs = this.getChartState();

    attrs.svg
      .selectAll(".node-text")
      .attr("dy", "10px")
      .style("text-anchor", "middle")
      .style("fill", ({ textColor }) => textColor || "black")
      .style("font-size", "30px")
      .html(({ data }) => data.nodeId);
  }

  onSelectAll(d) {
    const attrs = this.getChartState();
    const clicked = child =>
      child.data.borderWidth == attrs.clickedWidth || !child.data.clickable;
    const allSelected = (d.children || d._children).every(clicked);

    (d.children || d._children).forEach(d =>
      this.onButtonClick(d, !allSelected, allSelected, false, false)
    );
    this.onButtonClick(d, true, false, true);
  }

  // Toggle children on click.
  onButtonClick(d, selectOption, compressOption, updateOption, warningOption) {
    const defaultToTrue = bool => (typeof bool === "undefined" ? true : bool);

    const compress = defaultToTrue(compressOption); //defaults to true
    const expand = !compress;

    const select = defaultToTrue(selectOption);
    const deselect = defaultToTrue(!selectOption);

    const update = defaultToTrue(updateOption);

    const warning = defaultToTrue(warningOption);

    const attrs = this.getChartState();
    const data = d.data;
    if (data.clickable) {
      let parent = data.parentNodeIds[0];
      if (attrs.diversityValues[parent]) {
        const index = attrs.diversityValues[parent].indexOf(data.nodeId);
        if (index > -1) {
          if (deselect) {
            attrs.diversityValues[parent].splice(index, 1);
            data.borderWidth = attrs.unclickedWidth;
          }
        } else {
          if (select) {
            attrs.diversityValues[parent].push(data.nodeId);
            data.borderWidth = attrs.clickedWidth;
          }
        }
      } else if (attrs.academicValues[parent]) {
        const index = attrs.academicValues[parent].indexOf(data.nodeId);
        if (index > -1) {
          if (deselect) {
            attrs.academicValues[parent].splice(index, 1);
            data.borderWidth = attrs.unclickedWidth;

            if (attrs.academicValues[data.parentNodeIds[0]].length == 0) {
              //if empty
              attrs.academicValues[data.parentNodeIds[0]].push("Total");
            }
          }
        } else {
          if (select) {
            if (
              attrs.academicValues[data.parentNodeIds[0]].length == 1 &&
              attrs.academicValues[data.parentNodeIds[0]][0] == "Total"
            ) {
              //if 'Total'
              attrs.academicValues[data.parentNodeIds[0]].pop();
            }

            attrs.academicValues[parent].push(data.nodeId);
            data.borderWidth = attrs.clickedWidth;

            if (warning) {
              let total = 1;
              for (const attr in attrs.academicValues) {
                total *= attrs.academicValues[attr].length;
              }
              if (total > 15) {
                alert(
                  "WARNING: Adding more academic attributes may result in low visibility in the visualization."
                );
              }
            }
          }
        }
      } else {
        if (data.borderWidth === attrs.unclickedWidth && select) {
          //unclicked
          data.borderWidth = attrs.clickedWidth;
        } else if (compress) {
          data.borderWidth = attrs.unclickedWidth;
        }
      }
    }

    // If childrens are expanded
    if (d.children) {
      if (compress) {
        if (d.id === "Convocated") {
          const demographicNode = d.parent.children[1];
          if (demographicNode.children) {
            this.update(d);
            return;
          }
        }

        //Collapse them
        d._children = d.children;
        d.children = null;

        if (d.id === "Enrolled") {
          const convocationNode = d.parent.children[0];
          if (convocationNode.data.borderWidth === attrs.unclickedWidth) {
            this.onButtonClick(convocationNode, false);
          }
        }

        // Set descendants expanded property to false
        this.setExpansionFlagToChildren(d, false);
      }
    } else {
      if (d.id === "Enrolled") {
        const convocationNode = d.parent.children[0];
        if (convocationNode.children == null) {
          this.onButtonClick(convocationNode, false);
        }
      }

      // Expand children
      d.children = d._children;
      d._children = null;
      // Set each children as expanded
      if (d.children) {
        d.children.forEach(({ data }) => (data.expanded = true));
      }
    }

    // Redraw Graph
    if (update) this.update(d);
  }

  // This function changes `expanded` property to descendants
  setExpansionFlagToChildren({ data, children, _children }, flag) {
    // Set flag to the current property
    data.expanded = flag;

    // Loop over and recursively update expanded children's descendants
    if (children) {
      children.forEach(d => {
        this.setExpansionFlagToChildren(d, flag);
      });
    }

    // Loop over and recursively update collapsed children's descendants
    if (_children) {
      _children.forEach(d => {
        this.setExpansionFlagToChildren(d, flag);
      });
    }
  }

  // This function can be invoked via chart.setExpanded API, it expands or collapses particular node
  setExpanded(id, expandedFlag) {
    const attrs = this.getChartState();
    // Retrieve node by node Id
    const node = attrs.allNodes.filter(({ data }) => data.nodeId == id)[0];

    // If node exists, set expansion flag
    if (node) node.data.expanded = expandedFlag;

    // First expand all nodes
    attrs.root.children.forEach(d => this.expand(d));

    // Then collapse all nodes
    attrs.root.children.forEach(d => this.collapse(d));

    // Then expand only the nodes, which were previously expanded, or have an expand flag set
    attrs.root.children.forEach(d => this.expandSomeNodes(d));

    // Redraw graph
    this.update(attrs.root);
  }

  // Method which only expands nodes, which have property set "expanded=true"
  expandSomeNodes(d) {
    // If node has expanded property set
    if (d.data.expanded) {
      // Retrieve node's parent
      let parent = d.parent;

      // While we can go up
      while (parent) {
        // Expand all current parent's children
        if (parent._children) {
          parent.children = parent._children;
        }

        // Replace current parent holding object
        parent = parent.parent;
      }
    }

    // Recursivelly do the same for collapsed nodes
    if (d._children) {
      d._children.forEach(ch => this.expandSomeNodes(ch));
    }

    // Recursivelly do the same for expanded nodes
    if (d.children) {
      d.children.forEach(ch => this.expandSomeNodes(ch));
    }
  }

  // This function updates nodes state and redraws graph, usually after data change
  updateNodesState() {
    const attrs = this.getChartState();
    // Store new root by converting flat data to hierarchy
    attrs.root = d3
      .stratify()
      .id(({ nodeId }) => nodeId)
      .parentId(({ parentNodeIds }) => parentNodeIds[0])(attrs.data);

    // Store positions, where children appear during their enter animation
    attrs.root.x0 = 0;
    attrs.root.y0 = 0;

    // Store all nodes in flat format (although, now we can browse parent, see depth e.t.c. )
    attrs.allNodes = attrs.layouts.treemap(attrs.root).descendants();

    // Store direct and total descendants count
    attrs.allNodes.forEach(d => {
      Object.assign(d.data, {
        directSubordinates: d.children ? d.children.length : 0,
        totalSubordinates: d.descendants().length - 1
      });
    });

    // Expand all nodes first
    attrs.root.children.forEach(this.expand);

    // Then collapse them all
    attrs.root.children.forEach(d => this.collapse(d));

    // Then only expand nodes, which have expanded proprty set to true
    attrs.root.children.forEach(ch => this.expandSomeNodes(ch));

    // Redraw Graphs
    this.update(attrs.root);
  }

  // Function which collapses passed node and it's descendants
  collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(ch => this.collapse(ch));
      d.children = null;
    }
  }

  // Function which expands passed node and it's descendants
  expand(d) {
    if (d._children) {
      d.children = d._children;
      d.children.forEach(ch => this.expand(ch));
      d._children = null;
    }
  }

  // Zoom handler function
  zoomed() {
    const attrs = this.getChartState();
    const chart = attrs.chart;

    // Get d3 event's transform object
    const transform = d3.event.transform;

    // Store it
    attrs.lastTransform = transform;

    // Reposition and rescale chart accordingly
    chart.attr("transform", transform);

    // Apply new styles to the foreign object element
    if (this.isEdge()) {
      this.restyleForeignObjectElements();
    }
  }
}
