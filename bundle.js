(function () {
  'use strict';

  const ROOT_NODE = 'ROOT';
  const REPORT_NODE = 'REPORT';

  const EDI_ATTRIBUTE_NODE = 'EDI_ATTRIBUTE';
  const ACADEMIC_ATTRIBUTE_NODE = 'OTHER_ATTRIBUTE';
  const UNCOLLECTED_ATTRIBUTE_NODE = 'UNCOLLECTED_ATTRIBUTE';

  const VALUE_NODE = 'VALUE';
  const UNCOLLECTED_VALUE_NODE = 'UNCOLLECTED_VALUE';



  const initialNodes = {
    Convocation: {
      type: REPORT_NODE,
      description: 'The number of students that have convocated'
    },
    Demographics: {
      type: REPORT_NODE,
      description: 'The number of students that are enrolled'
    },
    Faculty: {
      parents: ['Convocation','Demographics'],
      collectedValues: ['STEM', 'Non-STEM', 'Engineering & Design', 'Science', 'Public Affairs', 'Business', 'Arts & Social Sciences'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'Department and faculty are mapped from student degree and major or majors.'
    },
    'Academic Year': {
      parents: ['Convocation','Demographics'],
      collectedValues: ['2013/14',
        '2014/15',
        '2015/16',
        '2016/17',
        '2017/18',
        '2018/19',
        '2019/20',
        '2020/21',],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'Academic Year is made up of three terms (Summer, Fall, Winter)'
    },
    Degree: {
      parents: ['Convocation','Demographics'],
      collectedValues: ['Bachelors',
        'Masters',
        'Ph.D.'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'Level of study of a student'
    },
   
    'Study Status': {
      parents: ['Demographics'],
      collectedValues: ['Part-time',
        'Full-time',
        'Co-op'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'A full-time student is enrolled in 3 or more credits across the Fall and Winter terms whereas a part-time student is enrolled in less'
    },
    'Citizenship Status': {
      parents: ['Demographics'],
      collectedValues: ['Domestic',
        'International'],
    	uncollectedValues: [],
      type: EDI_ATTRIBUTE_NODE,
      description: 'Students are categorized based on whether they are charged domestic or international fees'
    },
    Age: {
      parents: ['Demographics'],
      collectedValues: [
        '<=17',
        '18-20',
        '21-25',
        '26-30',
        '31-35',
        '36-45',
        '46-55',
        '55+',
      ],
      uncollectedValues: ['55-59','60-64','65-69', '70-74', '75-79', '80+'],
      type: EDI_ATTRIBUTE_NODE,
      description: 'The age ranges of students'
    },
    Sex: {
      parents: ['Convocation','Demographics'],
      collectedValues: ['Male', 'Female'],
    	uncollectedValues: ['Non-binary'],
      type: EDI_ATTRIBUTE_NODE,
      description: 'Mislabeled. The correct label should be \'Gender\' and all genders should be collected'
  	},
    Race: {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The race of a student'
  	},
    'Religion/Spirituality': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The religion/spirituality of a student'
    },
    'Geographic Identity': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The geographic identity of a student'
    },
    'Dis/ability': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The dis/ability of a student'
    },
    Indigenuity: {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: ['First Nations', 'Metis', 'Inuit'],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The indigenuity of a student'
    },
    'First Language': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The first language of a student'
    },
    'Other Language': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The other language of a student'
    },
    'Ethnicity': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The ethnicity of a student'
    },
    'Nation': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'The nation of origin of a student'
    },
  };



  const colors = {
    Transparent: {"red":255,"green":255,"blue":255,"alpha":0},
    White: {"red":255,"green":255,"blue":255,"alpha":1},
    Grey: {"red":128,"green":128,"blue":128,"alpha":1},
  	Green: {"red":0,"green":255,"blue":0,"alpha":1},
    Blue: {"red":0,"green":0,"blue":255,"alpha":1},
    Black: {"red":0,"green":0,"blue":0,"alpha":1}
  };

  const sizes = {
  	Large: {width: 342, height: 146},
    Medium: {width: 331, height: 146},
  	Small: {width: 310, height: 146}
  };

  const borderWidth = 2;
  const borderRadius = 5;
  const connectorLineWidth = 5;

  const nodeDimensions = {
    [ROOT_NODE] : {
      width: sizes.Large.width,
      height: sizes.Large.height,
      borderColor: colors.Transparent,
      backgroundColor: colors.Transparent,
      textColor: colors.Transparent,
      connectorLineColor: colors.Transparent,
      expandable: false,
      clickable: false
    },
  	[REPORT_NODE] : {
    	width: sizes.Large.width,
      height: sizes.Large.height,
      borderColor: colors.Black,
      backgroundColor: colors.White,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: true
    },
    [UNCOLLECTED_ATTRIBUTE_NODE] : {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Green,
      backgroundColor: colors.Grey,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: false
    },
    [ACADEMIC_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Blue,
      backgroundColor: colors.White,
      connectorLineColor: colors.Black,
      expandable: true,
      clickable: true
    },
    [EDI_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Green,
      backgroundColor: colors.White,
      connectorLineColor: colors.Black,
      expandable: true,
      clickable: true
    },
    [VALUE_NODE]: {
    	width: sizes.Small.width,
      height: sizes.Small.height,
      backgroundColor: colors.White,
      expandable: false,
      clickable: true
    },
    [UNCOLLECTED_VALUE_NODE]: {
    	width: sizes.Small.width,
      height: sizes.Small.height,
      backgroundColor: colors.Grey,
  		connectorLineColor: colors.Grey,
      expandable: false,
      clickable: false
    }
  };

  const makeNode = (nodeId, parentNodeIds, nodeType, parentNodeType) => {
  	let node = JSON.parse(JSON.stringify(nodeDimensions[nodeType]));
    node.nodeId = nodeId;
    node.parentNodeIds = parentNodeIds;
  	node.expanded = false;
    node.borderWidth = borderWidth;
    node.borderRadius = borderRadius;
    node.connectorLineWidth = connectorLineWidth;
   	if (initialNodes[nodeId])
      	node.description =  initialNodes[nodeId].description;
    
    if (nodeType == VALUE_NODE){
    	node.borderColor = nodeDimensions[parentNodeType].borderColor; 
      node.connectorLineColor = nodeDimensions[parentNodeType].borderColor; 
      if (nodeId === 'STEM'){
      	node.description = 'Aggregation of faculty of Science, Engineering & Design and Mathematics';
      } else if (nodeId === 'Non-STEM'){
        node.description = 'Aggregation of all non-STEM faculties';
      } 
    } else if (nodeType === UNCOLLECTED_VALUE_NODE){
     	node.borderColor = nodeDimensions[parentNodeType].borderColor;  
    }
    return node;
  };

  const populateNodes = (nodes, initialNodes) => {
  	for (const key in initialNodes) {
      const node = initialNodes[key];

      if (node.type === REPORT_NODE){
      		nodes.push(makeNode(key, ['Root'], REPORT_NODE));
      } else {
          nodes.push(makeNode(key, node.parents, node.type)); //link to first parent
          for (const link of node.collectedValues)
            nodes.push(makeNode(link, [key], VALUE_NODE, node.type));
          for (const link of node.uncollectedValues)
            nodes.push(makeNode(link, [key], UNCOLLECTED_VALUE_NODE, node.type));
      }
  	}
  };

  const nodes = [makeNode('Root', [null], ROOT_NODE)];
  populateNodes(nodes, initialNodes);

  class Chart {
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
        container: 'body',
        defaultTextFill: '#2C3E50',
        nodeTextFill: 'white',
        defaultFont: 'Helvetica',
        backgroundColor: 'transparent',
        data: nodes,
        nodes: null,
        connectorLevels: 2,
        depth: 180,
        duration: 600,
        strokeWidth: 3,
        initialZoom: 1,
        academicValues: {
          'Academic Year': ['Total'],
          Degree: ['Total'],
          Faculty: ['Total'],
          'Study Status': ['Total'],
        },
        diversityValues: {
          Age: [],
          Sex: [],
          'Citizenship Status': [],
        },
        onNodeClick: null,
        tooltipDiv: null,
      };

      this.getChartState = () => attrs;

      // Dynamically set getter and setter functions for Chart class
      Object.keys(attrs).forEach((key) => {
        //@ts-ignore
        this[key] = function (_) {
          var string = `attrs['${key}'] = _`;
          if (!arguments.length) {
            return eval(`attrs['${key}'];`);
          }
          eval(string);
          return this;
        };
      });

      //hierarchial tree legend
      let svg = d3.select('#node-legend');
      svg
        .append('rect')
        .attr('x', 20)
        .attr('y', 24)
        .attr('width', 12)
        .attr('height', 12)
        .style('fill', 'grey');
      svg
        .append('rect')
        .attr('x', 20)
        .attr('y', 54)
        .attr('width', 12)
        .attr('height', 12)
        .style('fill', 'none')
        .style('stroke', 'green');
      svg
        .append('rect')
        .attr('x', 20)
        .attr('y', 84)
        .attr('width', 12)
        .attr('height', 12)
        .style('fill', 'none')
        .style('stroke', 'blue');
      svg
        .append('text')
        .attr('x', 40)
        .attr('y', 30)
        .text('Uncollected')
        .style('font-size', '15px')
        .attr('alignment-baseline', 'middle');
      svg
        .append('text')
        .attr('x', 40)
        .attr('y', 60)
        .text('Diversity')
        .style('font-size', '15px')
        .attr('alignment-baseline', 'middle');
      svg
        .append('text')
        .attr('x', 40)
        .attr('y', 90)
        .text('Academic')
        .style('font-size', '15px')
        .attr('alignment-baseline', 'middle');

      this.initializeEnterExitUpdatePattern();
    }

    initializeEnterExitUpdatePattern() {
      d3.selection.prototype.patternify = function (params) {
        var container = this;
        var selector = params.selector;
        var elementTag = params.tag;
        var data = params.data || [selector];

        // Pattern in action
        var selection = container
          .selectAll('.' + selector)
          .data(data, (d, i) => {
            if (typeof d === 'object') {
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
        selection.attr('class', selector);
        return selection;
      };
    }

    // This method retrieves passed node's children ID's (including node)
    getNodeChildrenIds(
      { data, children, _children },
      nodeIdsStore
    ) {
      // Store current node ID
      nodeIdsStore.push(data.nodeId);

      // Loop over children and recursively store descendants id (expanded nodes)
      if (children) {
        children.forEach((d) => {
          this.getNodeChildrenIds(d, nodeIdsStore);
        });
      }

      // Loop over _children and recursively store descendants id (collapsed nodes)
      if (_children) {
        _children.forEach((d) => {
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
        'transform',
        ` translate(${calc.centerX}, ${
        calc.nodeMaxHeight / 2
      }) scale(${attrs.initialZoom})`
      );
    }

    render() {
      //InnerFunctions which will update visuals

      const attrs = this.getChartState();

      //Drawing containers
      const container = d3.select(attrs.container);
      const containerRect = container
        .node()
        .getBoundingClientRect();
      if (containerRect.width > 0)
        attrs.svgWidth = containerRect.width;

      //Attach drop shadow id to attrs object
      this.setDropShadowId(attrs);

      //Calculated properties
      const calc = {
        id: null,
        chartTopMargin: null,
        chartLeftMargin: null,
        chartWidth: null,
        chartHeight: null,
      };
      calc.id = `ID${Math.floor(Math.random() * 1000000)}`; // id for event handlings
      calc.chartLeftMargin = attrs.marginLeft;
      calc.chartTopMargin = attrs.marginTop;
      calc.chartWidth =
        attrs.svgWidth -
        attrs.marginRight -
        calc.chartLeftMargin;
      calc.chartHeight =
        attrs.svgHeight -
        attrs.marginBottom -
        calc.chartTopMargin;
      attrs.calc = calc;

      // Get maximum node width and height
      calc.nodeMaxWidth = d3.max(
        attrs.data,
        ({ width }) => width
      );
      calc.nodeMaxHeight = d3.max(
        attrs.data,
        ({ height }) => height
      );

      // Calculate max node depth (it's needed for layout heights calculation)
      attrs.depth = calc.nodeMaxHeight + 100;
      calc.centerX = calc.chartWidth / 2;

      //********************  LAYOUTS  ***********************
      const layouts = {
        treemap: null,
      };
      attrs.layouts = layouts;

      // Generate tree layout function
      layouts.treemap = d3
        .tree()
        .size([calc.chartWidth, calc.chartHeight])
        .nodeSize([
          calc.nodeMaxWidth + 100,
          calc.nodeMaxHeight + attrs.depth,
        ]);

      // ******************* BEHAVIORS . **********************
      const behaviors = {
        zoom: null,
      };

      // Get zooming function
      behaviors.zoom = d3
        .zoom()
        .on('zoom', (d) => this.zoomed(d));

      //****************** ROOT node work ************************

      // Convert flat data to hierarchical
      attrs.root = d3
        .stratify()
        .id(({ nodeId }) => nodeId)
        .parentId(({ parentNodeIds }) => parentNodeIds[0])(
        attrs.data
      );

      // Set child nodes enter appearance positions
      attrs.root.x0 = 0;
      attrs.root.y0 = 0;

      /** Get all nodes as array (with extended parent & children properties set)
            This way we can access any node's parent directly using node.parent - pretty cool, huh?
        */
      attrs.allNodes = attrs.layouts
        .treemap(attrs.root)
        .descendants();

      // Collapse all children at first
      attrs.root.children.forEach((d) => this.collapse(d));

      // Then expand some nodes, which have `expanded` property set
      attrs.root.children.forEach((d) =>
        this.expandSomeNodes(d)
      );

      // *************************  DRAWING **************************
      //Add svg
      const svg = container
        .patternify({
          tag: 'svg',
          selector: 'svg-chart-container',
        })
        .attr('width', attrs.svgWidth)
        .attr('height', attrs.svgHeight)
        .attr('font-family', attrs.defaultFont)
        .call(behaviors.zoom)
        .attr('cursor', 'move')
        .style('background-color', attrs.backgroundColor);
      attrs.svg = svg;

      //Add container g element
      const chart = svg
        .patternify({
          tag: 'g',
          selector: 'chart',
        })
        .attr(
          'transform',
          `translate(${calc.chartLeftMargin},${calc.chartTopMargin})`
        );

      // Add one more container g element, for better positioning controls
      attrs.centerG = chart
        .patternify({
          tag: 'g',
          selector: 'center-group',
        })
        .attr(
          'transform',
          `translate(${calc.centerX},${
          calc.nodeMaxHeight / 2
        }) scale(${attrs.initialZoom})`
        );

      attrs.chart = chart;

      
      //Define div for tooltip
      attrs.tooltipDiv = d3
        .select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);
      
      // ************************** ROUNDED AND SHADOW IMAGE  WORK USING SVG FILTERS **********************

      //Adding defs element for rounded image
      attrs.defs = svg.patternify({
        tag: 'defs',
        selector: 'image-defs',
      });

      // Adding defs element for image's shadow
      const filterDefs = svg.patternify({
        tag: 'defs',
        selector: 'filter-defs',
      });

      // Display tree contenrs
      this.update(attrs.root);

      return this;
    }

    // This function sets drop shadow ID to the passed object
    setDropShadowId(d) {
      // If it's already set, then return
      if (d.dropShadowId) return;

      // Generate drop shadow ID
      let id = `${d.id}-drop-shadow`;

      // If DOM object is available, then use UID method to generated shadow id
      //@ts-ignore
      if (typeof DOM != 'undefined') {
        //@ts-ignore
        id = DOM.uid(d.id).id;
      }

      // Extend passed object with drop shadow ID
      Object.assign(d, {
        dropShadowId: id,
      });
    }

    // This function basically redraws visible graph, based on nodes state
    update({ x0, y0, x, y }) {
      const attrs = this.getChartState();
      const calc = attrs.calc;

      //  Assigns the x and y position for the nodes
      const treeData = attrs.layouts.treemap(attrs.root);

      // Get tree nodes and links and attach some properties
      const nodes = treeData.descendants().map((d) => {
        // If at least one property is already set, then we don't want to reset other properties
        if (d.width) return d;

        // Declare properties with deffault values
        let borderColor = 'steelblue';
        let backgroundColor = 'steelblue';
        let textColor = 'black';
        let width = d.data.width;
        let height = d.data.height;
  			let description =  d.data.description;
        
        if (d.data.borderColor) {
          borderColor = this.rgbaObjToColor(
            d.data.borderColor
          );
        }
        if (d.data.backgroundColor) {
          backgroundColor = this.rgbaObjToColor(
            d.data.backgroundColor
          );
        }
        if (d.data.textColor) {
          textColor = this.rgbaObjToColor(d.data.textColor);
        }

        // Extend node object with calculated properties
        return Object.assign(d, {
          borderColor,
          backgroundColor,
          textColor,
          width,
          height,
          description,
        });
      });

      // Save nodes for click
      attrs.nodes = nodes;

      // Get all links
      const links = treeData.descendants().slice(1);

      // Set constant depth for each nodes
      nodes.forEach((d) => (d.y = d.depth * attrs.depth));

      // --------------------------  LINKS ----------------------
      // Get links selection
      const linkSelection = attrs.centerG
        .selectAll('path.link')
        .data(links, ({ id }) => id);

      // Enter any new links at the parent's previous position.
      const linkEnter = linkSelection
        .enter()
        .insert('path', 'g')
        .attr('class', 'link')
        .attr('d', (d) => {
          const o = {
            x: x0,
            y: y0,
          };
          return this.diagonal(o, [o]);
        });

      // Get links update selection
      const linkUpdate = linkEnter.merge(linkSelection);

      // Styling links
      linkUpdate
        .attr('fill', 'none')
        .attr(
          'stroke-width',
          ({ data }) => data.connectorLineWidth || 2
        )
        .attr('stroke', ({ data }) => {
          if (data.connectorLineColor) {
            return this.rgbaObjToColor(
              data.connectorLineColor
            );
          }
          return 'green';
        })
        .attr('stroke-dasharray', ({ data }) => {
          if (data.dashArray) {
            return data.dashArray;
          }
          return '';
        });

      // Transition back to the parent element position
      linkUpdate
        .transition()
        .duration(attrs.duration)
        .attr('d', (d) => {
          const parents = d.data.parentNodeIds.map(
            (parentNodeId) =>
              nodes.find((node) => node.id === parentNodeId)
          );
          return this.diagonal(d, parents);
        });

      // Remove any  links which is exiting after animation
      const linkExit = linkSelection
        .exit()
        .transition()
        .duration(attrs.duration)
        .attr('d', (d) => {
          const o = {
            x: x ? x : 0,
            y: y ? y : 0,
          };
          let diag = this.diagonal(o, [o]);
          return diag;
        })
        .remove();

      // --------------------------  NODES ----------------------


      // Get nodes selection
      const nodesSelection = attrs.centerG
        .selectAll('g.node')
        .data(nodes, ({ id }) => id);

      let ht = this;
      // Enter any new nodes at the parent's previous position.
      const nodeEnter = nodesSelection
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${x0},${y0})`)
        .attr('cursor', 'pointer')
        .on('click', ({ data }) => { 
          if (data.clickable) {
            if (
              attrs.diversityValues[data.parentNodeIds[0]]
            ) {
              const index = attrs.diversityValues[
                data.parentNodeIds[0]
              ].indexOf(data.nodeId);
              if (index > -1) {
                attrs.diversityValues[
                  data.parentNodeIds[0]
                ].splice(index, 1);
                data.borderWidth = 2;
              } else {
                attrs.diversityValues[
                  data.parentNodeIds[0]
                ].push(data.nodeId);
                data.borderWidth = 10;
              }
            } else if (
              attrs.academicValues[data.parentNodeIds[0]]
            ) {
              const index = attrs.academicValues[
                data.parentNodeIds[0]
              ].indexOf(data.nodeId);
              if (index > -1) {
                attrs.academicValues[
                  data.parentNodeIds[0]
                ].splice(index, 1);
                data.borderWidth = 2;
                if (
                  attrs.academicValues[data.parentNodeIds[0]]
                    .length == 0
                ) {
                  //if empty
                  attrs.academicValues[
                    data.parentNodeIds[0]
                  ].push('Total');
                }
              } else {
                if (
                  attrs.academicValues[data.parentNodeIds[0]]
                    .length == 1 &&
                  attrs.academicValues[
                    data.parentNodeIds[0]
                  ][0] == 'Total'
                ) {
                  //if 'Total'
                  attrs.academicValues[
                    data.parentNodeIds[0]
                  ].pop();
                }
                attrs.academicValues[
                  data.parentNodeIds[0]
                ].push(data.nodeId);
                data.borderWidth = 10;

                let total = 1;
                for (const attr in attrs.academicValues) {
                  total *= attrs.academicValues[attr].length;
                }
                if (total > 15) {
                  alert(
                    'WARNING: Adding more academic attributes may result in low visibility in the visualization or crashing'
                  );
                }
              }
            } else {
              data.borderWidth =
                data.borderWidth == 2 ? 10 : 2;
            }
          }

          if (data.expandable) {
            let nodeClicked = nodes.find(
              (node) => node.id === data.nodeId
            );
            ht.onButtonClick(nodeClicked);
          }

          ht.update(data);
        })
        .on('mouseover', (d) => {
         // console.log(d);
          //console.log(d3.event);
          if (d.description) {
            attrs.tooltipDiv
              .transition()
              .duration(200)
              .style('opacity', 0.9);
            attrs.tooltipDiv
              .html(d.description);
          }
        })
        .on('mouseout', () => {
          attrs.tooltipDiv.transition().duration(500).style('opacity', 0);
        });

      // Add background rectangle for the nodes
      nodeEnter
        .patternify({
          tag: 'rect',
          selector: 'node-rect',
          data: (d) => [d],
        })
        .style('fill', ({ _children }) =>
          _children ? 'lightsteelblue' : '#fff'
        );

      // Node update styles
      const nodeUpdate = nodeEnter
        .merge(nodesSelection)
        .style('font', '12px sans-serif');

      // Add foreignObject element inside rectangle
      const fo = nodeUpdate.patternify({
        tag: 'foreignObject',
        selector: 'node-foreign-object',
        data: (d) => [d],
      });

      // Add foreign object
      fo.patternify({
        tag: 'xhtml:div',
        selector: 'node-foreign-object-div',
        data: (d) => [d],
      });

      this.restyleForeignObjectElements();

      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .attr('opacity', 0)
        .duration(attrs.duration)
        .attr(
          'transform',
          ({ x, y }) => `translate(${x},${y})`
        )
        .attr('opacity', 1);

      // Style node rectangles
      nodeUpdate
        .select('.node-rect')
        .attr('width', ({ data }) => data.width)
        .attr('height', ({ data }) => data.height)
        .attr('x', ({ data }) => -data.width / 2)
        .attr('y', ({ data }) => -data.height / 2)
        .attr('rx', ({ data }) => data.borderRadius || 0)
        .attr(
          'stroke-width',
          ({ data }) => data.borderWidth || attrs.strokeWidth
        )
        .attr('cursor', 'pointer')
        .attr('stroke', ({ borderColor }) => borderColor)
        .style(
          'fill',
          ({ backgroundColor }) => backgroundColor
        );

      // Remove any exiting nodes after transition
      const nodeExitTransition = nodesSelection
        .exit()
        .attr('opacity', 1)
        .transition()
        .duration(attrs.duration)
        .attr('transform', (d) => `translate(${x},${y})`)
        .on('end', function () {
          d3.select(this).remove();
        })
        .attr('opacity', 0);

      // On exit reduce the node rects size to 0
      nodeExitTransition
        .selectAll('.node-rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('x', 0)
        .attr('y', 0);

      // Store the old positions for transition.
      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // This function detects whether current browser is edge
    isEdge() {
      return window.navigator.userAgent.includes('Edge');
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
        .centerG.append('g')
        .attr('id', 'groupOfPaths');
      let heightMultiplier =
        parents.length == 2 ? 0.575 : 0.425;
      for (const t of parents) {
        let height = s.y - t.y;

        // Calculate some variables based on source and target (s,t) coordinates
        let x = s.x;
        let y = s.y;
        let ex = t.x;
        let ey = t.y;
        let xrvs = ex - x < 0 ? -1 : 1;
        let yrvs = -1;
        let rdef = 35;
        let rInitial =
          Math.abs(ex - x) / 2 < rdef
            ? Math.abs(ex - x) / 2
            : rdef;
        let r =
          Math.abs(ey - y) / 2 < rInitial
            ? Math.abs(ey - y) / 2
            : rInitial;
        let h = Math.abs(ey - y) * heightMultiplier - r;
        let w = Math.abs(ex - x) - r * 2;

        let path = `
             M ${x} ${y}
             L ${x} ${y + h * yrvs}
             C ${x} ${y + h * yrvs + r * yrvs} ${x} ${
        y + h * yrvs + r * yrvs
      } ${x + r * xrvs} ${y + h * yrvs + r * yrvs}
             L ${x + w * xrvs + r * xrvs} ${
        y + h * yrvs + r * yrvs
      }
             C ${ex} ${y + h * yrvs + r * yrvs} ${ex} ${
        y + h * yrvs + r * yrvs
      } ${ex} ${ey - h * yrvs}
             L ${ex} ${ey}
           `;
        group
          .append('path')
          .attr('d', path)
          .attr('fill', 'none');
      }

      let combinedD = '';
      group.selectAll('path').each(function () {
        if (d3.select(this).attr('d'))
          combinedD += d3.select(this).attr('d');
      });
      group.remove();
      return combinedD;
    }

    restyleForeignObjectElements() {
      const attrs = this.getChartState();

      attrs.svg
        .selectAll('.node-foreign-object')
        .attr('width', ({ width }) => width)
        .attr('height', ({ height }) => height)
        .attr('x', ({ width }) => -width / 2)
        .attr('y', ({ height }) => -height / 2);
      attrs.svg
        .selectAll('.node-foreign-object-div')
        .style('width', ({ width }) => `${width}px`)
        .style('height', ({ height }) => `${height}px`)
        .style('color', ({ textColor }) =>
          textColor ? textColor : 'black'
        )
        .style('text-align', 'center')
        .style('margin-top', '50px')
        .style('font-size', '40px')
        .html(({ data }) => data.nodeId);
    }

    // Toggle children on click.
    onButtonClick(d) {
      // If childrens are expanded
      if (d.children) {
        if (d.id === 'Convocation') {
          const demographicNode = d.parent.children[1];
          if (demographicNode.children) {
            return;
          }
        }
        //Collapse them
        d._children = d.children;
        d.children = null;

        // Set descendants expanded property to false
        this.setExpansionFlagToChildren(d, false);
      } else {
        if (d.id === 'Demographics') {
          const convocationNode = d.parent.children[0];

          if (convocationNode.children == null) {
            this.onButtonClick(convocationNode);
          }
        }

        // Expand children
        d.children = d._children;
        d._children = null;
        // Set each children as expanded
  			if (d.children)
          d.children.forEach(
            ({ data }) => (data.expanded = true)
          );
      }

      // Redraw Graph
      this.update(d);
    }

    // This function changes `expanded` property to descendants
    setExpansionFlagToChildren(
      { data, children, _children },
      flag
    ) {
      // Set flag to the current property
      data.expanded = flag;

      // Loop over and recursively update expanded children's descendants
      if (children) {
        children.forEach((d) => {
          this.setExpansionFlagToChildren(d, flag);
        });
      }

      // Loop over and recursively update collapsed children's descendants
      if (_children) {
        _children.forEach((d) => {
          this.setExpansionFlagToChildren(d, flag);
        });
      }
    }

    // This function can be invoked via chart.setExpanded API, it expands or collapses particular node
    setExpanded(id, expandedFlag) {
      const attrs = this.getChartState();
      // Retrieve node by node Id
      const node = attrs.allNodes.filter(
        ({ data }) => data.nodeId == id
      )[0];

      // If node exists, set expansion flag
      if (node) node.data.expanded = expandedFlag;

      // First expand all nodes
      attrs.root.children.forEach((d) => this.expand(d));

      // Then collapse all nodes
      attrs.root.children.forEach((d) => this.collapse(d));

      // Then expand only the nodes, which were previously expanded, or have an expand flag set
      attrs.root.children.forEach((d) =>
        this.expandSomeNodes(d)
      );

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
        d._children.forEach((ch) => this.expandSomeNodes(ch));
      }

      // Recursivelly do the same for expanded nodes
      if (d.children) {
        d.children.forEach((ch) => this.expandSomeNodes(ch));
      }
    }

    // This function updates nodes state and redraws graph, usually after data change
    updateNodesState() {
      const attrs = this.getChartState();
      // Store new root by converting flat data to hierarchy
      attrs.root = d3
        .stratify()
        .id(({ nodeId }) => nodeId)
        .parentId(({ parentNodeIds }) => parentNodeIds[0])(
        attrs.data
      );

      // Store positions, where children appear during their enter animation
      attrs.root.x0 = 0;
      attrs.root.y0 = 0;

      // Store all nodes in flat format (although, now we can browse parent, see depth e.t.c. )
      attrs.allNodes = attrs.layouts
        .treemap(attrs.root)
        .descendants();

      // Store direct and total descendants count
      attrs.allNodes.forEach((d) => {
        Object.assign(d.data, {
          directSubordinates: d.children
            ? d.children.length
            : 0,
          totalSubordinates: d.descendants().length - 1,
        });
      });

      // Expand all nodes first
      attrs.root.children.forEach(this.expand);

      // Then collapse them all
      attrs.root.children.forEach((d) => this.collapse(d));

      // Then only expand nodes, which have expanded proprty set to true
      attrs.root.children.forEach((ch) =>
        this.expandSomeNodes(ch)
      );

      // Redraw Graphs
      this.update(attrs.root);
    }

    // Function which collapses passed node and it's descendants
    collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach((ch) => this.collapse(ch));
        d.children = null;
      }
    }

    // Function which expands passed node and it's descendants
    expand(d) {
      if (d._children) {
        d.children = d._children;
        d.children.forEach((ch) => this.expand(ch));
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
      chart.attr('transform', transform);

      // Apply new styles to the foreign object element
      if (this.isEdge()) {
        this.restyleForeignObjectElements();
      }
    }
  }

  class Sunburst {
    constructor() {
      //Exposed variables
      const attrs = {
        id: `ID${Math.floor(Math.random() * 1000000)}`, // Id for event handlings
        svgWidth: 3000,
        svgHeight: 3000,
        container: 'body',
        data: null,
        extendedLineLength: 40,
        textDistance: 15,
        outerTextSize: '20px',
        attributeIndex: null,
        history: [],
        displayNodes: null,
        values: null,
        colors: {
          Male: '#fc8d59',
          Female: '#91bfdb',
          International: '#998ec3',
          Domestic: '#f1a340',
          '<=17': '#f7fcf5',
          '18-20': '#e5f5e0',
          '21-25': '#c7e9c0',
          '26-30': '#a1d99b',
          '31-35': '#74c476',
          '36-45': '#41ab5d',
          '46-55': '#238b45',
          '55+': '#006d2c',
          0: '#989898',
        },
        textCirclesCount: [],
        textCirclesPercent: [],
        centerText: null,
        centerTextSize: '40px',
        centerTextHeight: 60,
        compareMode: false,
        legendWidth: 150,
      };

      //get attributes method
      this.getChartState = () => attrs;

      //getter & setter
      Object.keys(attrs).forEach((key) => {
        //@ts-ignore
        this[key] = function (_) {
          var string = `attrs['${key}'] = _`;
          if (!arguments.length) {
            return eval(`attrs['${key}'];`);
          }
          eval(string);
          return this;
        };
      });
    }

    /* Removes all elements in svg */
    removeAll() {
      this.getChartState().svg.selectAll('*').remove();
    }

    /* Converts objects to slices with queries */
    getValues(academicValues, diversityValues) {
      let attrs = this.getChartState();

      //preparing slices
      const cartesian = (...a) =>
        a.reduce((a, b) =>
          a.flatMap((d) => b.map((e) => [d, e].flat()))
        );
      let slices = cartesian(
        academicValues['Academic Year'],
        academicValues.Degree,
        academicValues.Faculty,
        academicValues['Study Status']
      );

      const makeQuery = (slice, diversityAttr, value) => {
        let query = [...slice];
        for (const prop in diversityValues) {
          if (prop !== diversityAttr) {
            query.push('Total');
          } else {
            query.push(value);
          }
        }
        return query;
      };

      //convert slices to key format

      let values = {};
      for (let slice of slices) {
        let str = slice.toString();
        values[str] = {};
        for (let attr in diversityValues) {
          if (diversityValues[attr].length == 0) continue;
          values[str][attr] = {};
          for (let value of diversityValues[attr]) {
            values[str][attr][value] = makeQuery(
              slice,
              attr,
              value
            );
          }
        }
      }
      return values;
    }

    /* Given screen width, height and number of arcs, return arc width, innerradius and text size*/
    computeSunburstParameters(x, y, numArcs) {
      let attrs = this.getChartState();

      let textHeightOffset = 50;

      let min = Math.min(x, y - textHeightOffset);
      let arcWidth = min / (2 * numArcs + 7); //min = 2*numArcs*arcWidth + 2*innerRadius, innerRadius = 3*arcWidth
      let innerRadius = 3 * arcWidth;

      let multiplier = 1.5;
      let n = 13; //'international' with 13 letters is longest word in diversity attributes
      let innerTextSize =
        (multiplier * (2 * innerRadius)) / n + 'px';
      return {
        arcWidth: arcWidth,
        innerRadius: innerRadius,
        innerTextSize: innerTextSize,
      };
    }

    /* Given screen width, height and number of squares, return rows, columns and square size */
    computeCompareDimensions(x, y, n) {
      // Compute number of rows and columns, and cell size
      let ratio = x / y;
      let ncols_float = Math.sqrt(n * ratio);
      let nrows_float = n / ncols_float;

      // Find best option filling the whole height
      let nrows1 = Math.ceil(nrows_float);
      let ncols1 = Math.ceil(n / nrows1);
      while (nrows1 * ratio < ncols1) {
        nrows1++;
        ncols1 = Math.ceil(n / nrows1);
      }
      let cell_size1 = y / nrows1;

      // Find best option filling the whole width
      let ncols2 = Math.ceil(ncols_float);
      let nrows2 = Math.ceil(n / ncols2);
      while (ncols2 < nrows2 * ratio) {
        ncols2++;
        nrows2 = Math.ceil(n / ncols2);
      }
      let cell_size2 = x / ncols2;

      // Find the best values
      let nrows, ncols, cell_size;
      if (cell_size1 < cell_size2) {
        nrows = nrows2;
        ncols = ncols2;
        cell_size = cell_size2;
      } else {
        nrows = nrows1;
        ncols = ncols1;
        cell_size = cell_size1;
      }

      return { size: cell_size, rows: nrows, cols: ncols };
    }

    /* Fetching data and setting up svg container */
    async setup(url) {
      let attrs = this.getChartState();
      let sb = this;

      //load data synchronously
      const data = await d3.csv(url);

      attrs.attributeIndex = data.columns;

      //convert data to object format
      attrs.data = data.reduce(function (map, obj, i) {
        let values = Object.values(obj);

        values.pop();

        map[''.concat(values)] = obj.Count;
        return map;
      }, {});

      // create container
      let svg = d3.select(attrs.container);

      // setting up compare button
      const toggleCompare = () => {
        attrs.compareMode = !attrs.compareMode;
        sb.render(attrs.values);
      };
      document.getElementById(
        'compare-button'
      ).onclick = toggleCompare;

      attrs.svg = svg;
      return this;
    }

    /* Converting input objects to values for display */
    initialRender(academicValues, diversityValues) {
      let attrs = this.getChartState();

      let values = this.getValues(
        academicValues,
        diversityValues
      );

      this.render(values);
    }

    /* Recurring render */
    render(values) {
      let attrs = this.getChartState();
      let sb = this;

      // Setting values so values is still accessible when compare is toggled
      attrs.values = values;

      // repurposing back button if necessary
      if (attrs.history.length > 0) {
        const back = () => sb.render(attrs.history.pop());
        document.getElementById('back-button').onclick = back;
      } else {
        document.getElementById('back-button').onclick =
          attrs.displayNodes;
      }

      // remove all elements in svg
      this.removeAll();

      // re-create the new elements
      if (!attrs.compareMode) {
        document.getElementById(
          'compare-button'
        ).style.backgroundColor = 'white';
        this.renderSunburst(values);
        // disable compare mode if only 1 slice
        document.getElementById('compare-button').disabled =
          Object.keys(values).length === 1;
      } else {
        document.getElementById(
          'compare-button'
        ).style.backgroundColor = 'red';
        this.renderCompare(values);
      }
      this.renderLegend(values);
    }

    // render the sunburst
    renderSunburst(values) {
      let attrs = this.getChartState();
      let sb = this;

      //Helper values
      const numSlices = Object.keys(values).length;
      const numArcs = Object.keys(Object.values(values)[0])
        .length;
      const extendedLineLength = attrs.extendedLineLength;
      const halfSliceRadians = Math.PI / numSlices;
      const textDistance = attrs.textDistance;
      const arcLength = (2 * Math.PI) / numSlices;

      const container = d3
        .select('#sunburst')
        .node()
        .getBoundingClientRect();
      const containerHeight = +container.height;
      const containerWidth = +container.width;

      const height = containerHeight;
      const width = containerWidth - attrs.legendWidth;

      const params = this.computeSunburstParameters(
        width,
        height,
        numArcs
      );
      const arcWidth = params.arcWidth;
      const innerRadius = params.innerRadius;
      const innerTextSize = params.innerTextSize;

      let svg = attrs.svg
        .append('g')
        .attr('width', attrs.svgWidth)
        .attr('height', attrs.svgHeight)
        .attr(
          'transform',
          `translate(${width / 2},${height / 2})`
        );

      let centerGroup = svg
        .append('g')
        .attr('class', 'center-group');
      centerGroup
        .append('circle')
        .attr('id', 'center-circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', innerRadius)
        .attr('stroke', 'black')
        .style('stroke-width', 5)
        .attr('fill', 'white');

      let textCircle1 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '-0.5em')
        .style('text-anchor', 'middle')
        .style('font-size', innerTextSize)
        .text('Category')
        .attr('opacity', '.5');

      let textCircle2 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '0.5em')
        .style('text-anchor', 'middle')
        .style('font-size', innerTextSize)
        .text('Count')
        .attr('opacity', '.5');

      let textCircle3 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '1.5em')
        .style('text-anchor', 'middle')
        .style('font-size', innerTextSize)
        .text('Percent')
        .attr('opacity', '.5');

      let sunburstGroup = svg
        .append('g')
        .attr('class', 'sunburst-group');

      //Helper methods
      const getCircleX = (radians, radius) =>
        Math.sin(radians) * radius;
      const getCircleY = (radians, radius) =>
        Math.cos(radians) * radius;

      const getText = (string) => {
        const words = string.split(',');
        const filtered = words.filter(
          (word) => word !== 'Total'
        );
        const result = filtered.join('\r\n');
        return result;
      };

      //line builder
      const lineBuilder = (sliceCount) => {
        let radians = (2 * Math.PI * sliceCount) / numSlices;
        if (numSlices % 2 == 1) radians += Math.PI;
        sunburstGroup
          .append('line')
          .style('stroke', 'black')
          .style('stroke-width', 5)
          .attr('x1', getCircleX(radians, innerRadius))
          .attr('y1', getCircleY(radians, innerRadius))
          .attr(
            'x2',
            getCircleX(
              radians,
              innerRadius +
                numArcs * arcWidth +
                extendedLineLength
            )
          )
          .attr(
            'y2',
            getCircleY(
              radians,
              innerRadius +
                numArcs * arcWidth +
                extendedLineLength
            )
          );
      };

      //text builder
      const textBuilder = (slice, sliceCount) => {
        let radians =
          (2 * Math.PI * sliceCount) / numSlices +
          halfSliceRadians;
        let text = getText(slice);
        if (text === '') {
          text = 'Total';
        }
        let radius =
          innerRadius + numArcs * arcWidth + textDistance;
        let x = getCircleX(radians, radius);
        let y = -getCircleY(radians, radius);

        if (x < -1) x -= text.length * 9;
        //left side adjust
        else if (x < 1) x -= text.length * 5; //middle text adjust

        sunburstGroup
          .append('text')
          .attr('x', x)
          .attr('y', y)
          .style('font-size', attrs.outerTextSize)
          .text(text);
      };

      //arc builder
      const arcBuilder = (
        arc,
        startAngle,
        endAngle,
        slice,
        attr,
        value,
        count,
        percent
      ) => {
        sunburstGroup
          .append('path')
          .datum({
            startAngle: startAngle,
            endAngle: endAngle,
          })
          .attr('stroke', 'black')
          .style('stroke-width', 1)
          .style('fill', attrs.colors[value])
          .attr('d', arc)
          .on('mouseover', function (d, i) {
            d3.select(this)
              .transition()
              .duration('50')
              .attr('opacity', '.85');

            d3.select("[id='" + value + "rect']").style(
              'stroke-width',
              3
            );

            if (count != 0) {
              if (attr === 'Age') {
                textCircle1
                  .text(attr + ': ' + value)
                  .attr('opacity', '1');
              } else {
                textCircle1.text(value).attr('opacity', '1');
              }

              if (count < 5) {
                textCircle2.text('<5').attr('opacity', '1');
              } else {
                textCircle2.text(count).attr('opacity', '1');
              }

              textCircle3
                .text(
                  Number((percent * 100).toFixed(1)) + '%'
                )
                .attr('opacity', '1');
            } else {
              textCircle1.text('');
              textCircle2
                .text('No Students')
                .attr('opacity', '1');
              textCircle3.text('');
            }
          })
          .on('mouseout', function (d, i) {
            d3.select(this)
              .transition()
              .duration('50')
              .attr('opacity', '1');

            textCircle1
              .text('Category')
              .attr('opacity', '.5');
            textCircle2.text('Count').attr('opacity', '.5');
            textCircle3.text('Percent').attr('opacity', '.5');
            d3.select("[id='" + value + "rect']").style(
              'stroke-width',
              1
            );
          })
          .on('click', function () {
            if (numArcs == 1) {
              alert('Unable to provide any more detail');
            } else {
              if (count != 0) {
                let newSlice = slice + ',' + value;
                let newValues = {
                  [newSlice]: JSON.parse(
                    JSON.stringify(values[slice])
                  ),
                };

                let index = attrs.attributeIndex.indexOf(
                  attr
                );
                console.log(index);
                for (const attr1 in newValues[newSlice]) {
                  if (attr1 === attr) {
                    delete newValues[newSlice][attr1];
                  } else {
                    for (const value1 in newValues[newSlice][
                      attr1
                    ]) {
                      newValues[newSlice][attr1][value1][
                        index
                      ] = value;
                    }
                  }
                }

                console.log(newValues);

                attrs.history.push(values);
                sb.render(newValues);
              }
            }
          });
      };

      //build arcs
      let sliceCount = 0;
      for (const slice in values) {
        let arcCount = 0;
         for (const attr in values[slice]) {
          let arc = d3
            .arc()
            .innerRadius(innerRadius + arcWidth * arcCount)
            .outerRadius(
              innerRadius + arcWidth * (arcCount + 1)
            );

          let sliceStartAngle = sliceCount * arcLength;

          let sum = 0;
          for (const value in values[slice][attr]) {
            sum += Number(
              attrs.data[values[slice][attr][value]]
            );
          }

          if (sum == 0) {
            let endAngle = Math.min(
              sliceStartAngle + arcLength,
              2 * Math.PI
            );
            arcBuilder(
              arc,
              sliceStartAngle,
              endAngle,
              slice,
              attr,
              '0',
              0,
              0
            );
          } else {
            for (const value in values[slice][attr]) {
              let count = Number(
                attrs.data[values[slice][attr][value]]
              );
              let percent = count / sum;
              let startAngle = sliceStartAngle;
              let endAngle = Math.min(
                startAngle + arcLength * percent,
                2 * Math.PI
              );
              sliceStartAngle = endAngle;

              arcBuilder(
                arc,
                startAngle,
                endAngle,
                slice,
                attr,
                value,
                count,
                percent
              );
            }
          }

          arcCount++;
        }

        if (numSlices == 1) textBuilder(slice, 0.5);
        else textBuilder(slice, sliceCount);
        sliceCount++;
      }

      //build lines after so they are on top
      for (
        let sliceCount = 0;
        sliceCount < numSlices && numSlices > 1;
        sliceCount++
      ) {
        lineBuilder(sliceCount);
      }
    }

    displayValues(values, selectedValue, attr) {
      const attrs = this.getChartState();

      if (attr === 'Age')
        attrs.centerText.text('Age: ' + selectedValue);
      else attrs.centerText.text(selectedValue);

      let sliceCount = 0;
      for (const slice in values) {
        for (const attr in values[slice]) {
          let sum = 0;
          for (const value in values[slice][attr]) {
            sum += Number(
              attrs.data[values[slice][attr][value]]
            );
          }
          if (!values[slice][attr][selectedValue]) {
            continue;
          }
          let count = Number(
            attrs.data[values[slice][attr][selectedValue]]
          );
          let percent = count / sum;
          if (count != 0) {
            if (count < 5) {
              attrs.textCirclesCount[sliceCount].text('<5');
            } else {
              attrs.textCirclesCount[sliceCount].text(count);
            }
            attrs.textCirclesPercent[sliceCount].text(
              Number((percent * 100).toFixed(1)) + '%'
            );
          } else {
            attrs.textCirclesCount[sliceCount].text('No');
            attrs.textCirclesPercent[sliceCount].text(
              'Students'
            );
          }
        }
        sliceCount++;
      }
      //d3.select("text[id='element.id.with.dots']");
      const id = selectedValue + 'rect';
      d3.select("[id='" + id + "']").style('stroke-width', 3);
    }

    removeValues(value) {
      const attrs = this.getChartState();
      attrs.centerText.text('');
      for (const textCircle of attrs.textCirclesCount) {
        textCircle.text('');
      }
      for (const textCircle of attrs.textCirclesPercent) {
        textCircle.text('');
      }
      const id = value + 'rect';
      d3.select("[id='" + id + "']").style('stroke-width', 1);
    }

    renderCompare(values) {
      //Helper values
      const attrs = this.getChartState();
      const sb = this;

      const container = d3
        .select('#sunburst')
        .node()
        .getBoundingClientRect();
      const containerHeight = +container.height;
      const containerWidth = +container.width;

      const width = containerWidth - attrs.legendWidth; //minus because of legend
      const height = containerHeight - attrs.centerTextHeight;
      const numSlices = Object.keys(values).length;
      const dimensions = sb.computeCompareDimensions(
        width,
        height,
        numSlices
      ); //rows, columns and square size
      const arcLength = 2 * Math.PI;

      const rows = dimensions.rows;
      const cols = dimensions.cols;
      const size = dimensions.size;
      const whitespaceWidth = width - cols * size;
      const whitespaceHeight = height - rows * size;

      const numArcs = Object.keys(Object.values(values)[0])
        .length;
      const extendedLineLength = attrs.extendedLineLength;
      const textDistance = attrs.textDistance;

      const params = this.computeSunburstParameters(
        size,
        size,
        numArcs
      );
      const arcWidth = params.arcWidth;
      const innerRadius = params.innerRadius;
      const innerTextSize = params.innerTextSize;

      /* Helper methods */

      // Converting slice name to text
      const getText = (string) => {
        const words = string.split(',');
        const filtered = words.filter(
          (word) => word !== 'Total'
        );
        const result = filtered.join('\r\n');
        return result;
      };

      const findLongestSlice = (array) => {
        let longestWord = '';
        array.forEach(function (word) {
          if (word.length > longestWord.length) {
            longestWord = word;
          }
        });
        return longestWord;
      };
      const longestSliceTextLength = getText(
        findLongestSlice(Object.keys(values))
      ).length;

      //text builder
      const textBuilder = (
        slice,
        sliceCount,
        sunburstGroup
      ) => {
        let text = getText(slice);
        let radius =
          innerRadius + numArcs * arcWidth + textDistance;
        let y = -radius;

        let sizeMultiplier = 1.8;
        let outerTextSize = Math.min(
          (sizeMultiplier * (2 * radius)) /
            longestSliceTextLength,
          50
        );

        sunburstGroup
          .append('text')
          .attr('y', y)
          .style('text-anchor', 'middle')
          .style('font-size', outerTextSize + 'px')
          .text(text);
      };

      //arc builder
      const arcBuilder = (
        sunburstGroup,
        arc,
        startAngle,
        endAngle,
        slice,
        attr,
        value
      ) => {
        sunburstGroup
          .append('path')
          .datum({
            startAngle: startAngle,
            endAngle: endAngle,
          })
          .attr('stroke', 'black')
          .style('stroke-width', 1)
          .style('fill', attrs.colors[value])
          .attr('d', arc)
          .on('mouseover', function (d, i) {
            if (value !== '0') {
              d3.select(this)
                .transition()
                .duration('50')
                .attr('opacity', '.85');

              sb.displayValues(values, value, attr);
            }
          })
          .on('mouseout', function (d, i) {
            if (value !== '0') {
              d3.select(this)
                .transition()
                .duration('50')
                .attr('opacity', '1');

              sb.removeValues(value);
            }
          })
          .on('click', function () {
            if (numArcs == 1) {
              alert('Unable to provide any more detail');
            } else {
              if (value !== '0') {
                let newValues = JSON.parse(
                  JSON.stringify(values)
                );
                let index = attrs.attributeIndex.indexOf(
                  attr
                );
                for (const slice1 in newValues) {
                  let newSlice = slice1 + ',' + value;
                  delete Object.assign(newValues, {
                    [newSlice]: newValues[slice1],
                  })[slice1];
                  for (const attr1 in newValues[newSlice]) {
                    if (attr1 === attr) {
                      delete newValues[newSlice][attr1];
                    } else {
                      for (const value1 in newValues[
                        newSlice
                      ][attr1]) {
                        newValues[newSlice][attr1][value1][
                          index
                        ] = value;
                      }
                    }
                  }
                }

                console.log(newValues);

                attrs.history.push(values);
                sb.render(newValues);
              }
            }
          });
      };

      // Clear textCircle lists
      attrs.textCirclesCount = [];
      attrs.textCirclesPercent = [];

      attrs.centerText = attrs.svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', 15 + attrs.centerTextHeight / 2)
        .style('text-anchor', 'middle')
        .style('font-size', attrs.centerTextSize)
        .text('');

      let sliceCount = 0;
      for (const slice in values) {
        let row = parseInt(sliceCount / cols);
        let col = sliceCount % cols;

        let translateX =
          size / 2 +
          col * size +
          ((col + 1) * whitespaceWidth) / (cols + 1);
        let translateY =
          attrs.centerTextHeight +
          size / 2 +
          row * size +
          ((row + 1) * whitespaceHeight) / (rows + 1);

        let svg = attrs.svg
          .append('g')
          .attr('width', size)
          .attr('height', size)
          .attr(
            'transform',
            `translate(${translateX},${translateY})`
          );
        let centerGroup = svg
          .append('g')
          .attr('class', 'center-group');
        centerGroup
          .append('circle')
          .attr('id', 'center-circle')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', innerRadius)
          .attr('stroke', 'black')
          .style('stroke-width', 5)
          .attr('fill', 'white');

        let textCircle1 = centerGroup
          .append('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('dy', '0em')
          .style('text-anchor', 'middle')
          .style('font-size', innerTextSize)
          .text('');

        let textCircle2 = centerGroup
          .append('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('dy', '1em')
          .style('text-anchor', 'middle')
          .style('font-size', innerTextSize)
          .text('');

        attrs.textCirclesCount.push(textCircle1);
        attrs.textCirclesPercent.push(textCircle2);

        let sunburstGroup = svg
          .append('g')
          .attr('class', 'sunburst-group');

        let arcCount = 0;
         for (const attr in values[slice]) {
          let arc = d3
            .arc()
            .innerRadius(innerRadius + arcWidth * arcCount)
            .outerRadius(
              innerRadius + arcWidth * (arcCount + 1)
            );

          let sliceStartAngle = 0;

          let sum = 0;
          for (const value in values[slice][attr]) {
            if (value == 'Total') continue;
            sum += Number(
              attrs.data[values[slice][attr][value]]
            );
          }

          if (sum == 0) {
            let endAngle = Math.min(
              sliceStartAngle + arcLength,
              2 * Math.PI
            );
            arcBuilder(
              sunburstGroup,
              arc,
              sliceStartAngle,
              endAngle,
              slice,
              attr,
              '0'
            );
          } else {
            for (const value in values[slice][attr]) {
              if (value == 'Total') continue;
              let count = Number(
                attrs.data[values[slice][attr][value]]
              );
              let percent = count / sum;
              let startAngle = sliceStartAngle;
              let endAngle = Math.min(
                startAngle + arcLength * percent,
                2 * Math.PI
              );
              sliceStartAngle = endAngle;
              arcBuilder(
                sunburstGroup,
                arc,
                startAngle,
                endAngle,
                slice,
                attr,
                value
              );
            }
          }
          arcCount++;
        }
        textBuilder(slice, -0.5, sunburstGroup);
        sliceCount++;
      }
    }

    renderLegend(values) {
      let attrs = this.getChartState();

      //hierarchial tree legend
      let legend = d3
        .select('#sunburst-legend')
        .attr('width', attrs.legendWidth);
      legend.selectAll('*').remove();
      let y = 24;
      let x = 20;

      let firstSlice = Object.values(values)[0];
      for (const attr in firstSlice) {
        const array = Object.keys(firstSlice[attr]);
        for (const value of array) {
          if (value === 'Total') continue;
          legend
            .append('rect')
            .attr('id', value + 'rect')
            .attr('x', x)
            .attr('y', y)
            .attr('width', 12)
            .attr('height', 12)
            .attr('stroke', 'black')
            .style('stroke-width', 1)
            .style('fill', attrs.colors[value]);
          legend
            .append('text')
            .attr('id', value + 'text')
            .attr('x', x + 20)
            .attr('y', y + 6)
            .text(value)
            .style('font-size', '15px')
            .attr('alignment-baseline', 'middle');
          y += 30;
        }
        y += 10;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', (event) => {
  	//sunburst 
    let sb; 

  	//Set node and Main viz SPA ups
    displayNodes();
    document.getElementById('visualize-button').onclick = displayViz;
  	document.getElementById('back-button').onclick = displayNodes;
   	
    
    function displayNodes(){
      	document.getElementById('node-div').style.display = 'block';
  			document.getElementById('viz-div').style.display = 'none';
    }
    
    function displayViz(){

      	if (sb){
           let diversityValues =  ht.diversityValues();
           let academicValues =  ht.academicValues();

           let valid = false;

           for (const attr in diversityValues){
          	 if (diversityValues[attr].length > 0){
               valid = true;
               break;
             }
           }
          
           if (!valid){
          		alert('Please select at least one diversity attribute');  
           } else {
             	 document.getElementById('node-div').style.display = 'none';
  						 document.getElementById('viz-div').style.display = 'block';
        	 		 sb.initialRender(academicValues, diversityValues);
           }
        } else {
           alert('Please wait for the data to finish loading');
        }
    }
    
    let ht = new Chart()
       .container('#chart')
       .svgWidth(window.innerWidth)
       .svgHeight(window.innerWidth)
       .initialZoom(0.3)
       .render();

    new Sunburst()
           .container('#sunburst')
           .svgWidth(window.innerWidth)
           .svgHeight(window.innerWidth)
    			 .displayNodes(displayNodes)
      		 .setup('https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/00827b9d532883343191f6144d41d0a0bbad5df8/fall.csv')
  				 .then(value => sb = value);
  });

}());

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBST09UX05PREUgPSAnUk9PVCc7XG5jb25zdCBSRVBPUlRfTk9ERSA9ICdSRVBPUlQnO1xuXG5jb25zdCBFRElfQVRUUklCVVRFX05PREUgPSAnRURJX0FUVFJJQlVURSc7XG5jb25zdCBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSA9ICdPVEhFUl9BVFRSSUJVVEUnO1xuY29uc3QgVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUgPSAnVU5DT0xMRUNURURfQVRUUklCVVRFJztcblxuY29uc3QgVkFMVUVfTk9ERSA9ICdWQUxVRSc7XG5jb25zdCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFID0gJ1VOQ09MTEVDVEVEX1ZBTFVFJztcblxuXG5cbmNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgQ29udm9jYXRpb246IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBudW1iZXIgb2Ygc3R1ZGVudHMgdGhhdCBoYXZlIGNvbnZvY2F0ZWQnXG4gIH0sXG4gIERlbW9ncmFwaGljczoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGFyZSBlbnJvbGxlZCdcbiAgfSxcbiAgRmFjdWx0eToge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRpb24nLCdEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnU1RFTScsICdOb24tU1RFTScsICdFbmdpbmVlcmluZyAmIERlc2lnbicsICdTY2llbmNlJywgJ1B1YmxpYyBBZmZhaXJzJywgJ0J1c2luZXNzJywgJ0FydHMgJiBTb2NpYWwgU2NpZW5jZXMnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdEZXBhcnRtZW50IGFuZCBmYWN1bHR5IGFyZSBtYXBwZWQgZnJvbSBzdHVkZW50IGRlZ3JlZSBhbmQgbWFqb3Igb3IgbWFqb3JzLidcbiAgfSxcbiAgJ0FjYWRlbWljIFllYXInOiB7XG4gICAgcGFyZW50czogWydDb252b2NhdGlvbicsJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWycyMDEzLzE0JyxcbiAgICAgICcyMDE0LzE1JyxcbiAgICAgICcyMDE1LzE2JyxcbiAgICAgICcyMDE2LzE3JyxcbiAgICAgICcyMDE3LzE4JyxcbiAgICAgICcyMDE4LzE5JyxcbiAgICAgICcyMDE5LzIwJyxcbiAgICAgICcyMDIwLzIxJyxdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0FjYWRlbWljIFllYXIgaXMgbWFkZSB1cCBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsLCBXaW50ZXIpJ1xuICB9LFxuICBEZWdyZWU6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0JhY2hlbG9ycycsXG4gICAgICAnTWFzdGVycycsXG4gICAgICAnUGguRC4nXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdMZXZlbCBvZiBzdHVkeSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBmdWxsLXRpbWUgc3R1ZGVudCBpcyBlbnJvbGxlZCBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciB0ZXJtcyB3aGVyZWFzIGEgcGFydC10aW1lIHN0dWRlbnQgaXMgZW5yb2xsZWQgaW4gbGVzcydcbiAgfSxcbiAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydEb21lc3RpYycsXG4gICAgICAnSW50ZXJuYXRpb25hbCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdTdHVkZW50cyBhcmUgY2F0ZWdvcml6ZWQgYmFzZWQgb24gd2hldGhlciB0aGV5IGFyZSBjaGFyZ2VkIGRvbWVzdGljIG9yIGludGVybmF0aW9uYWwgZmVlcydcbiAgfSxcbiAgQWdlOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFtcbiAgICAgICc8PTE3JyxcbiAgICAgICcxOC0yMCcsXG4gICAgICAnMjEtMjUnLFxuICAgICAgJzI2LTMwJyxcbiAgICAgICczMS0zNScsXG4gICAgICAnMzYtNDUnLFxuICAgICAgJzQ2LTU1JyxcbiAgICAgICc1NSsnLFxuICAgIF0sXG4gICAgdW5jb2xsZWN0ZWRWYWx1ZXM6IFsnNTUtNTknLCc2MC02NCcsJzY1LTY5JywgJzcwLTc0JywgJzc1LTc5JywgJzgwKyddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBhZ2UgcmFuZ2VzIG9mIHN0dWRlbnRzJ1xuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ01hbGUnLCAnRmVtYWxlJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnTm9uLWJpbmFyeSddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ01pc2xhYmVsZWQuIFRoZSBjb3JyZWN0IGxhYmVsIHNob3VsZCBiZSBcXCdHZW5kZXJcXCcgYW5kIGFsbCBnZW5kZXJzIHNob3VsZCBiZSBjb2xsZWN0ZWQnXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHJhY2Ugb2YgYSBzdHVkZW50J1xuXHR9LFxuICAnUmVsaWdpb24vU3Bpcml0dWFsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgcmVsaWdpb24vc3Bpcml0dWFsaXR5IG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0dlb2dyYXBoaWMgSWRlbnRpdHknOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBnZW9ncmFwaGljIGlkZW50aXR5IG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0Rpcy9hYmlsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgZGlzL2FiaWxpdHkgb2YgYSBzdHVkZW50J1xuICB9LFxuICBJbmRpZ2VudWl0eToge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydGaXJzdCBOYXRpb25zJywgJ01ldGlzJywgJ0ludWl0J10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgaW5kaWdlbnVpdHkgb2YgYSBzdHVkZW50J1xuICB9LFxuICAnRmlyc3QgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBmaXJzdCBsYW5ndWFnZSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gICdPdGhlciBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG90aGVyIGxhbmd1YWdlIG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0V0aG5pY2l0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGV0aG5pY2l0eSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gICdOYXRpb24nOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBuYXRpb24gb2Ygb3JpZ2luIG9mIGEgc3R1ZGVudCdcbiAgfSxcbn1cblxuXG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgVHJhbnNwYXJlbnQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MH0sXG4gIFdoaXRlOiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBHcmV5OiB7XCJyZWRcIjoxMjgsXCJncmVlblwiOjEyOCxcImJsdWVcIjoxMjgsXCJhbHBoYVwiOjF9LFxuXHRHcmVlbjoge1wicmVkXCI6MCxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9LFxuICBCbHVlOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsYWNrOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9XG59XG5cbmNvbnN0IHNpemVzID0ge1xuXHRMYXJnZToge3dpZHRoOiAzNDIsIGhlaWdodDogMTQ2fSxcbiAgTWVkaXVtOiB7d2lkdGg6IDMzMSwgaGVpZ2h0OiAxNDZ9LFxuXHRTbWFsbDoge3dpZHRoOiAzMTAsIGhlaWdodDogMTQ2fVxufVxuXG5jb25zdCBib3JkZXJXaWR0aCA9IDJcbmNvbnN0IGJvcmRlclJhZGl1cyA9IDVcbmNvbnN0IGNvbm5lY3RvckxpbmVXaWR0aCA9IDVcblxuY29uc3Qgbm9kZURpbWVuc2lvbnMgPSB7XG4gIFtST09UX05PREVdIDoge1xuICAgIHdpZHRoOiBzaXplcy5MYXJnZS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLkxhcmdlLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIHRleHRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcblx0W1JFUE9SVF9OT0RFXSA6IHtcbiAgXHR3aWR0aDogc2l6ZXMuTGFyZ2Uud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5MYXJnZS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfQVRUUklCVVRFX05PREVdIDoge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcbiAgW0FDQURFTUlDX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmx1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbRURJX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1ZBTFVFX05PREVdOiB7XG4gIFx0d2lkdGg6IHNpemVzLlNtYWxsLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuU21hbGwuaGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcblx0XHRjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5HcmV5LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfVxufVxuXG5jb25zdCBtYWtlTm9kZSA9IChub2RlSWQsIHBhcmVudE5vZGVJZHMsIG5vZGVUeXBlLCBwYXJlbnROb2RlVHlwZSkgPT4ge1xuXHRsZXQgbm9kZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZURpbWVuc2lvbnNbbm9kZVR5cGVdKSk7XG4gIG5vZGUubm9kZUlkID0gbm9kZUlkO1xuICBub2RlLnBhcmVudE5vZGVJZHMgPSBwYXJlbnROb2RlSWRzO1xuXHRub2RlLmV4cGFuZGVkID0gZmFsc2U7XG4gIG5vZGUuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgbm9kZS5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXM7XG4gIG5vZGUuY29ubmVjdG9yTGluZVdpZHRoID0gY29ubmVjdG9yTGluZVdpZHRoO1xuIFx0aWYgKGluaXRpYWxOb2Rlc1tub2RlSWRdKVxuICAgIFx0bm9kZS5kZXNjcmlwdGlvbiA9IFwiXCIgfHwgaW5pdGlhbE5vZGVzW25vZGVJZF0uZGVzY3JpcHRpb247XG4gIFxuICBpZiAobm9kZVR5cGUgPT0gVkFMVUVfTk9ERSl7XG4gIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgXG4gICAgbm9kZS5jb25uZWN0b3JMaW5lQ29sb3IgPSBub2RlRGltZW5zaW9uc1twYXJlbnROb2RlVHlwZV0uYm9yZGVyQ29sb3I7IFxuICAgIGlmIChub2RlSWQgPT09ICdTVEVNJyl7XG4gICAgXHRub2RlLmRlc2NyaXB0aW9uID0gJ0FnZ3JlZ2F0aW9uIG9mIGZhY3VsdHkgb2YgU2NpZW5jZSwgRW5naW5lZXJpbmcgJiBEZXNpZ24gYW5kIE1hdGhlbWF0aWNzJ1xuICAgIH0gZWxzZSBpZiAobm9kZUlkID09PSAnTm9uLVNURU0nKXtcbiAgICAgIG5vZGUuZGVzY3JpcHRpb24gPSAnQWdncmVnYXRpb24gb2YgYWxsIG5vbi1TVEVNIGZhY3VsdGllcydcbiAgICB9IFxuICB9IGVsc2UgaWYgKG5vZGVUeXBlID09PSBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFKXtcbiAgIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgIFxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBwb3B1bGF0ZU5vZGVzID0gKG5vZGVzLCBpbml0aWFsTm9kZXMpID0+IHtcblx0Zm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbE5vZGVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IGluaXRpYWxOb2Rlc1trZXldO1xuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gUkVQT1JUX05PREUpe1xuICAgIFx0XHRub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgWydSb290J10sIFJFUE9SVF9OT0RFKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShrZXksIG5vZGUucGFyZW50cywgbm9kZS50eXBlKSk7IC8vbGluayB0byBmaXJzdCBwYXJlbnRcbiAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIG5vZGUuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS51bmNvbGxlY3RlZFZhbHVlcylcbiAgICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGxpbmssIFtrZXldLCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFLCBub2RlLnR5cGUpKTtcbiAgICB9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IG5vZGVzID0gW21ha2VOb2RlKCdSb290JywgW251bGxdLCBST09UX05PREUpXTtcbnBvcHVsYXRlTm9kZXMobm9kZXMsIGluaXRpYWxOb2Rlcyk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbm9kZXMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiA4MDAsXG4gICAgICBzdmdIZWlnaHQ6IDYwMCxcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGVmYXVsdFRleHRGaWxsOiAnIzJDM0U1MCcsXG4gICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICBkZWZhdWx0Rm9udDogJ0hlbHZldGljYScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkYXRhOiBub2RlcyxcbiAgICAgIG5vZGVzOiBudWxsLFxuICAgICAgY29ubmVjdG9yTGV2ZWxzOiAyLFxuICAgICAgZGVwdGg6IDE4MCxcbiAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgYWNhZGVtaWNWYWx1ZXM6IHtcbiAgICAgICAgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICBGYWN1bHR5OiBbJ1RvdGFsJ10sXG4gICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ10sXG4gICAgICB9LFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzOiB7XG4gICAgICAgIEFnZTogW10sXG4gICAgICAgIFNleDogW10sXG4gICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbXSxcbiAgICAgIH0sXG4gICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIHRvb2x0aXBEaXY6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy8gRHluYW1pY2FsbHkgc2V0IGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgQ2hhcnQgY2xhc3NcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdCgnI25vZGUtbGVnZW5kJyk7XG4gICAgc3ZnXG4gICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgMjApXG4gICAgICAuYXR0cigneScsIDI0KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTIpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnZ3JleScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIDIwKVxuICAgICAgLmF0dHIoJ3knLCA1NClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEyKVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCAnZ3JlZW4nKTtcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCAyMClcbiAgICAgIC5hdHRyKCd5JywgODQpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ2JsdWUnKTtcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCA0MClcbiAgICAgIC5hdHRyKCd5JywgMzApXG4gICAgICAudGV4dCgnVW5jb2xsZWN0ZWQnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDQwKVxuICAgICAgLmF0dHIoJ3knLCA2MClcbiAgICAgIC50ZXh0KCdEaXZlcnNpdHknKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDQwKVxuICAgICAgLmF0dHIoJ3knLCA5MClcbiAgICAgIC50ZXh0KCdBY2FkZW1pYycpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG5cbiAgICB0aGlzLmluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCk7XG4gIH1cblxuICBpbml0aWFsaXplRW50ZXJFeGl0VXBkYXRlUGF0dGVybigpIHtcbiAgICBkMy5zZWxlY3Rpb24ucHJvdG90eXBlLnBhdHRlcm5pZnkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcztcbiAgICAgIHZhciBzZWxlY3RvciA9IHBhcmFtcy5zZWxlY3RvcjtcbiAgICAgIHZhciBlbGVtZW50VGFnID0gcGFyYW1zLnRhZztcbiAgICAgIHZhciBkYXRhID0gcGFyYW1zLmRhdGEgfHwgW3NlbGVjdG9yXTtcblxuICAgICAgLy8gUGF0dGVybiBpbiBhY3Rpb25cbiAgICAgIHZhciBzZWxlY3Rpb24gPSBjb250YWluZXJcbiAgICAgICAgLnNlbGVjdEFsbCgnLicgKyBzZWxlY3RvcilcbiAgICAgICAgLmRhdGEoZGF0YSwgKGQsIGkpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoZC5pZCkge1xuICAgICAgICAgICAgICByZXR1cm4gZC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pO1xuICAgICAgc2VsZWN0aW9uLmV4aXQoKS5yZW1vdmUoKTtcbiAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdGlvblxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKGVsZW1lbnRUYWcpXG4gICAgICAgIC5tZXJnZShzZWxlY3Rpb24pO1xuICAgICAgc2VsZWN0aW9uLmF0dHIoJ2NsYXNzJywgc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgcmV0cmlldmVzIHBhc3NlZCBub2RlJ3MgY2hpbGRyZW4gSUQncyAoaW5jbHVkaW5nIG5vZGUpXG4gIGdldE5vZGVDaGlsZHJlbklkcyhcbiAgICB7IGRhdGEsIGNoaWxkcmVuLCBfY2hpbGRyZW4gfSxcbiAgICBub2RlSWRzU3RvcmVcbiAgKSB7XG4gICAgLy8gU3RvcmUgY3VycmVudCBub2RlIElEXG4gICAgbm9kZUlkc1N0b3JlLnB1c2goZGF0YS5ub2RlSWQpO1xuXG4gICAgLy8gTG9vcCBvdmVyIGNoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoZXhwYW5kZWQgbm9kZXMpXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgX2NoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoY29sbGFwc2VkIG5vZGVzKVxuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIG5vZGVJZHNTdG9yZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRab29tRmFjdG9yIEFQSSwgaXQgem9vbXMgdG8gcGFydGljdWxhdCBzY2FsZVxuICBzZXRab29tRmFjdG9yKHpvb21MZXZlbCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2FsYyA9IGF0dHJzLmNhbGM7XG5cbiAgICAvLyBTdG9yZSBwYXNzZWQgem9vbSBsZXZlbFxuICAgIGF0dHJzLmluaXRpYWxab29tID0gem9vbUxldmVsO1xuXG4gICAgLy8gUmVzY2FsZSBjb250YWluZXIgZWxlbWVudCBhY2NvcmRpbmdseVxuICAgIGF0dHJzLmNlbnRlckcuYXR0cihcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgYCB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCAke1xuICAgICAgICBjYWxjLm5vZGVNYXhIZWlnaHQgLyAyXG4gICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvL0lubmVyRnVuY3Rpb25zIHdoaWNoIHdpbGwgdXBkYXRlIHZpc3VhbHNcblxuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgdGhpc09ialJlZiA9IHRoaXM7XG5cbiAgICAvL0RyYXdpbmcgY29udGFpbmVyc1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXJcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoY29udGFpbmVyUmVjdC53aWR0aCA+IDApXG4gICAgICBhdHRycy5zdmdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG5cbiAgICAvL0F0dGFjaCBkcm9wIHNoYWRvdyBpZCB0byBhdHRycyBvYmplY3RcbiAgICB0aGlzLnNldERyb3BTaGFkb3dJZChhdHRycyk7XG5cbiAgICAvL0NhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgIGNvbnN0IGNhbGMgPSB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGNoYXJ0VG9wTWFyZ2luOiBudWxsLFxuICAgICAgY2hhcnRMZWZ0TWFyZ2luOiBudWxsLFxuICAgICAgY2hhcnRXaWR0aDogbnVsbCxcbiAgICAgIGNoYXJ0SGVpZ2h0OiBudWxsLFxuICAgIH07XG4gICAgY2FsYy5pZCA9IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YDsgLy8gaWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgIGNhbGMuY2hhcnRMZWZ0TWFyZ2luID0gYXR0cnMubWFyZ2luTGVmdDtcbiAgICBjYWxjLmNoYXJ0VG9wTWFyZ2luID0gYXR0cnMubWFyZ2luVG9wO1xuICAgIGNhbGMuY2hhcnRXaWR0aCA9XG4gICAgICBhdHRycy5zdmdXaWR0aCAtXG4gICAgICBhdHRycy5tYXJnaW5SaWdodCAtXG4gICAgICBjYWxjLmNoYXJ0TGVmdE1hcmdpbjtcbiAgICBjYWxjLmNoYXJ0SGVpZ2h0ID1cbiAgICAgIGF0dHJzLnN2Z0hlaWdodCAtXG4gICAgICBhdHRycy5tYXJnaW5Cb3R0b20gLVxuICAgICAgY2FsYy5jaGFydFRvcE1hcmdpbjtcbiAgICBhdHRycy5jYWxjID0gY2FsYztcblxuICAgIC8vIEdldCBtYXhpbXVtIG5vZGUgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbGMubm9kZU1heFdpZHRoID0gZDMubWF4KFxuICAgICAgYXR0cnMuZGF0YSxcbiAgICAgICh7IHdpZHRoIH0pID0+IHdpZHRoXG4gICAgKTtcbiAgICBjYWxjLm5vZGVNYXhIZWlnaHQgPSBkMy5tYXgoXG4gICAgICBhdHRycy5kYXRhLFxuICAgICAgKHsgaGVpZ2h0IH0pID0+IGhlaWdodFxuICAgICk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbWF4IG5vZGUgZGVwdGggKGl0J3MgbmVlZGVkIGZvciBsYXlvdXQgaGVpZ2h0cyBjYWxjdWxhdGlvbilcbiAgICBhdHRycy5kZXB0aCA9IGNhbGMubm9kZU1heEhlaWdodCArIDEwMDtcbiAgICBjYWxjLmNlbnRlclggPSBjYWxjLmNoYXJ0V2lkdGggLyAyO1xuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKiAgTEFZT1VUUyAgKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBjb25zdCBsYXlvdXRzID0ge1xuICAgICAgdHJlZW1hcDogbnVsbCxcbiAgICB9O1xuICAgIGF0dHJzLmxheW91dHMgPSBsYXlvdXRzO1xuXG4gICAgLy8gR2VuZXJhdGUgdHJlZSBsYXlvdXQgZnVuY3Rpb25cbiAgICBsYXlvdXRzLnRyZWVtYXAgPSBkM1xuICAgICAgLnRyZWUoKVxuICAgICAgLnNpemUoW2NhbGMuY2hhcnRXaWR0aCwgY2FsYy5jaGFydEhlaWdodF0pXG4gICAgICAubm9kZVNpemUoW1xuICAgICAgICBjYWxjLm5vZGVNYXhXaWR0aCArIDEwMCxcbiAgICAgICAgY2FsYy5ub2RlTWF4SGVpZ2h0ICsgYXR0cnMuZGVwdGgsXG4gICAgICBdKTtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKiogQkVIQVZJT1JTIC4gKioqKioqKioqKioqKioqKioqKioqKlxuICAgIGNvbnN0IGJlaGF2aW9ycyA9IHtcbiAgICAgIHpvb206IG51bGwsXG4gICAgfTtcblxuICAgIC8vIEdldCB6b29taW5nIGZ1bmN0aW9uXG4gICAgYmVoYXZpb3JzLnpvb20gPSBkM1xuICAgICAgLnpvb20oKVxuICAgICAgLm9uKCd6b29tJywgKGQpID0+IHRoaXMuem9vbWVkKGQpKTtcblxuICAgIC8vKioqKioqKioqKioqKioqKioqIFJPT1Qgbm9kZSB3b3JrICoqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLy8gQ29udmVydCBmbGF0IGRhdGEgdG8gaGllcmFyY2hpY2FsXG4gICAgYXR0cnMucm9vdCA9IGQzXG4gICAgICAuc3RyYXRpZnkoKVxuICAgICAgLmlkKCh7IG5vZGVJZCB9KSA9PiBub2RlSWQpXG4gICAgICAucGFyZW50SWQoKHsgcGFyZW50Tm9kZUlkcyB9KSA9PiBwYXJlbnROb2RlSWRzWzBdKShcbiAgICAgIGF0dHJzLmRhdGFcbiAgICApO1xuXG4gICAgLy8gU2V0IGNoaWxkIG5vZGVzIGVudGVyIGFwcGVhcmFuY2UgcG9zaXRpb25zXG4gICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgYXR0cnMucm9vdC55MCA9IDA7XG5cbiAgICAvKiogR2V0IGFsbCBub2RlcyBhcyBhcnJheSAod2l0aCBleHRlbmRlZCBwYXJlbnQgJiBjaGlsZHJlbiBwcm9wZXJ0aWVzIHNldClcbiAgICAgICAgICBUaGlzIHdheSB3ZSBjYW4gYWNjZXNzIGFueSBub2RlJ3MgcGFyZW50IGRpcmVjdGx5IHVzaW5nIG5vZGUucGFyZW50IC0gcHJldHR5IGNvb2wsIGh1aD9cbiAgICAgICovXG4gICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzXG4gICAgICAudHJlZW1hcChhdHRycy5yb290KVxuICAgICAgLmRlc2NlbmRhbnRzKCk7XG5cbiAgICAvLyBDb2xsYXBzZSBhbGwgY2hpbGRyZW4gYXQgZmlyc3RcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBleHBhbmQgc29tZSBub2Rlcywgd2hpY2ggaGF2ZSBgZXhwYW5kZWRgIHByb3BlcnR5IHNldFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpXG4gICAgKTtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKiogIERSQVdJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvL0FkZCBzdmdcbiAgICBjb25zdCBzdmcgPSBjb250YWluZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnc3ZnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdzdmctY2hhcnQtY29udGFpbmVyJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5zdmdXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBhdHRycy5zdmdIZWlnaHQpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBhdHRycy5kZWZhdWx0Rm9udClcbiAgICAgIC5jYWxsKGJlaGF2aW9ycy56b29tKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdtb3ZlJylcbiAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcik7XG4gICAgYXR0cnMuc3ZnID0gc3ZnO1xuXG4gICAgLy9BZGQgY29udGFpbmVyIGcgZWxlbWVudFxuICAgIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNoYXJ0TGVmdE1hcmdpbn0sJHtjYWxjLmNoYXJ0VG9wTWFyZ2lufSlgXG4gICAgICApO1xuXG4gICAgLy8gQWRkIG9uZSBtb3JlIGNvbnRhaW5lciBnIGVsZW1lbnQsIGZvciBiZXR0ZXIgcG9zaXRpb25pbmcgY29udHJvbHNcbiAgICBhdHRycy5jZW50ZXJHID0gY2hhcnRcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIHNlbGVjdG9yOiAnY2VudGVyLWdyb3VwJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCR7XG4gICAgICAgICAgY2FsYy5ub2RlTWF4SGVpZ2h0IC8gMlxuICAgICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgICApO1xuXG4gICAgYXR0cnMuY2hhcnQgPSBjaGFydDtcblxuICAgIFxuICAgIC8vRGVmaW5lIGRpdiBmb3IgdG9vbHRpcFxuICAgIGF0dHJzLnRvb2x0aXBEaXYgPSBkM1xuICAgICAgLnNlbGVjdCgnYm9keScpXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XG4gICAgXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKiogUk9VTkRFRCBBTkQgU0hBRE9XIElNQUdFICBXT1JLIFVTSU5HIFNWRyBGSUxURVJTICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vQWRkaW5nIGRlZnMgZWxlbWVudCBmb3Igcm91bmRlZCBpbWFnZVxuICAgIGF0dHJzLmRlZnMgPSBzdmcucGF0dGVybmlmeSh7XG4gICAgICB0YWc6ICdkZWZzJyxcbiAgICAgIHNlbGVjdG9yOiAnaW1hZ2UtZGVmcycsXG4gICAgfSk7XG5cbiAgICAvLyBBZGRpbmcgZGVmcyBlbGVtZW50IGZvciBpbWFnZSdzIHNoYWRvd1xuICAgIGNvbnN0IGZpbHRlckRlZnMgPSBzdmcucGF0dGVybmlmeSh7XG4gICAgICB0YWc6ICdkZWZzJyxcbiAgICAgIHNlbGVjdG9yOiAnZmlsdGVyLWRlZnMnLFxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGxheSB0cmVlIGNvbnRlbnJzXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyBkcm9wIHNoYWRvdyBJRCB0byB0aGUgcGFzc2VkIG9iamVjdFxuICBzZXREcm9wU2hhZG93SWQoZCkge1xuICAgIC8vIElmIGl0J3MgYWxyZWFkeSBzZXQsIHRoZW4gcmV0dXJuXG4gICAgaWYgKGQuZHJvcFNoYWRvd0lkKSByZXR1cm47XG5cbiAgICAvLyBHZW5lcmF0ZSBkcm9wIHNoYWRvdyBJRFxuICAgIGxldCBpZCA9IGAke2QuaWR9LWRyb3Atc2hhZG93YDtcblxuICAgIC8vIElmIERPTSBvYmplY3QgaXMgYXZhaWxhYmxlLCB0aGVuIHVzZSBVSUQgbWV0aG9kIHRvIGdlbmVyYXRlZCBzaGFkb3cgaWRcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIERPTSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZCA9IERPTS51aWQoZC5pZCkuaWQ7XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIHBhc3NlZCBvYmplY3Qgd2l0aCBkcm9wIHNoYWRvdyBJRFxuICAgIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgZHJvcFNoYWRvd0lkOiBpZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IHJlZHJhd3MgdmlzaWJsZSBncmFwaCwgYmFzZWQgb24gbm9kZXMgc3RhdGVcbiAgdXBkYXRlKHsgeDAsIHkwLCB4LCB5IH0pIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IGNhbGMgPSBhdHRycy5jYWxjO1xuXG4gICAgLy8gIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICAgIGNvbnN0IHRyZWVEYXRhID0gYXR0cnMubGF5b3V0cy50cmVlbWFwKGF0dHJzLnJvb3QpO1xuXG4gICAgLy8gR2V0IHRyZWUgbm9kZXMgYW5kIGxpbmtzIGFuZCBhdHRhY2ggc29tZSBwcm9wZXJ0aWVzXG4gICAgY29uc3Qgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLm1hcCgoZCkgPT4ge1xuICAgICAgLy8gSWYgYXQgbGVhc3Qgb25lIHByb3BlcnR5IGlzIGFscmVhZHkgc2V0LCB0aGVuIHdlIGRvbid0IHdhbnQgdG8gcmVzZXQgb3RoZXIgcHJvcGVydGllc1xuICAgICAgaWYgKGQud2lkdGgpIHJldHVybiBkO1xuXG4gICAgICAvLyBEZWNsYXJlIHByb3BlcnRpZXMgd2l0aCBkZWZmYXVsdCB2YWx1ZXNcbiAgICAgIGxldCBib3JkZXJDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgbGV0IHRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICBsZXQgd2lkdGggPSBkLmRhdGEud2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gZC5kYXRhLmhlaWdodDtcblx0XHRcdGxldCBkZXNjcmlwdGlvbiA9ICcnIHx8IGQuZGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgIFxuICAgICAgaWYgKGQuZGF0YS5ib3JkZXJDb2xvcikge1xuICAgICAgICBib3JkZXJDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoXG4gICAgICAgICAgZC5kYXRhLmJvcmRlckNvbG9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZC5kYXRhLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgIGQuZGF0YS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChkLmRhdGEudGV4dENvbG9yKSB7XG4gICAgICAgIHRleHRDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLnRleHRDb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dGVuZCBub2RlIG9iamVjdCB3aXRoIGNhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICB0ZXh0Q29sb3IsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIG5vZGVzIGZvciBjbGlja1xuICAgIGF0dHJzLm5vZGVzID0gbm9kZXM7XG5cbiAgICAvLyBHZXQgYWxsIGxpbmtzXG4gICAgY29uc3QgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgLy8gU2V0IGNvbnN0YW50IGRlcHRoIGZvciBlYWNoIG5vZGVzXG4gICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4gKGQueSA9IGQuZGVwdGggKiBhdHRycy5kZXB0aCkpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExJTktTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBHZXQgbGlua3Mgc2VsZWN0aW9uXG4gICAgY29uc3QgbGlua1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckdcbiAgICAgIC5zZWxlY3RBbGwoJ3BhdGgubGluaycpXG4gICAgICAuZGF0YShsaW5rcywgKHsgaWQgfSkgPT4gaWQpO1xuXG4gICAgLy8gRW50ZXIgYW55IG5ldyBsaW5rcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXG4gICAgY29uc3QgbGlua0VudGVyID0gbGlua1NlbGVjdGlvblxuICAgICAgLmVudGVyKClcbiAgICAgIC5pbnNlcnQoJ3BhdGgnLCAnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogeDAsXG4gICAgICAgICAgeTogeTAsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKG8sIFtvXSk7XG4gICAgICB9KTtcblxuICAgIC8vIEdldCBsaW5rcyB1cGRhdGUgc2VsZWN0aW9uXG4gICAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rU2VsZWN0aW9uKTtcblxuICAgIC8vIFN0eWxpbmcgbGlua3NcbiAgICBsaW5rVXBkYXRlXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKFxuICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLmNvbm5lY3RvckxpbmVXaWR0aCB8fCAyXG4gICAgICApXG4gICAgICAuYXR0cignc3Ryb2tlJywgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmNvbm5lY3RvckxpbmVDb2xvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgICAgZGF0YS5jb25uZWN0b3JMaW5lQ29sb3JcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnZ3JlZW4nO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmRhc2hBcnJheSkge1xuICAgICAgICAgIHJldHVybiBkYXRhLmRhc2hBcnJheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KTtcblxuICAgIC8vIFRyYW5zaXRpb24gYmFjayB0byB0aGUgcGFyZW50IGVsZW1lbnQgcG9zaXRpb25cbiAgICBsaW5rVXBkYXRlXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudHMgPSBkLmRhdGEucGFyZW50Tm9kZUlkcy5tYXAoXG4gICAgICAgICAgKHBhcmVudE5vZGVJZCkgPT5cbiAgICAgICAgICAgIG5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IHBhcmVudE5vZGVJZClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhZ29uYWwoZCwgcGFyZW50cyk7XG4gICAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBhbnkgIGxpbmtzIHdoaWNoIGlzIGV4aXRpbmcgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgY29uc3QgbGlua0V4aXQgPSBsaW5rU2VsZWN0aW9uXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogeCA/IHggOiAwLFxuICAgICAgICAgIHk6IHkgPyB5IDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRpYWcgPSB0aGlzLmRpYWdvbmFsKG8sIFtvXSk7XG4gICAgICAgIHJldHVybiBkaWFnO1xuICAgICAgfSlcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBOT0RFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vIEdldCBub2RlcyBzZWxlY3Rpb25cbiAgICBjb25zdCBub2Rlc1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckdcbiAgICAgIC5zZWxlY3RBbGwoJ2cubm9kZScpXG4gICAgICAuZGF0YShub2RlcywgKHsgaWQgfSkgPT4gaWQpO1xuXG4gICAgbGV0IGh0ID0gdGhpcztcbiAgICAvLyBFbnRlciBhbnkgbmV3IG5vZGVzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cbiAgICBjb25zdCBub2RlRW50ZXIgPSBub2Rlc1NlbGVjdGlvblxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7eDB9LCR7eTB9KWApXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLm9uKCdjbGljaycsICh7IGRhdGEgfSkgPT4geyBcbiAgICAgICAgaWYgKGRhdGEuY2xpY2thYmxlKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW1xuICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgIF0uaW5kZXhPZihkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbXG4gICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgIF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbXG4gICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgIF0ucHVzaChkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhdHRycy5hY2FkZW1pY1ZhbHVlc1tcbiAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICBdLmluZGV4T2YoZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgIF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IDI7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9pZiBlbXB0eVxuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgICAgXS5wdXNoKCdUb3RhbCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgICBdWzBdID09ICdUb3RhbCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9pZiAnVG90YWwnXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgICBdLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICBdLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gMTA7XG5cbiAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmFjYWRlbWljVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKj0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0b3RhbCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAnV0FSTklORzogQWRkaW5nIG1vcmUgYWNhZGVtaWMgYXR0cmlidXRlcyBtYXkgcmVzdWx0IGluIGxvdyB2aXNpYmlsaXR5IGluIHRoZSB2aXN1YWxpemF0aW9uIG9yIGNyYXNoaW5nJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9XG4gICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPT0gMiA/IDEwIDogMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5leHBhbmRhYmxlKSB7XG4gICAgICAgICAgbGV0IG5vZGVDbGlja2VkID0gbm9kZXMuZmluZChcbiAgICAgICAgICAgIChub2RlKSA9PiBub2RlLmlkID09PSBkYXRhLm5vZGVJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaHQub25CdXR0b25DbGljayhub2RlQ2xpY2tlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBodC51cGRhdGUoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoZCkgPT4ge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGQzLmV2ZW50KTtcbiAgICAgICAgaWYgKGQuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICBhdHRycy50b29sdGlwRGl2XG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMC45KTtcbiAgICAgICAgICBhdHRycy50b29sdGlwRGl2XG4gICAgICAgICAgICAuaHRtbChkLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGF0dHJzLnRvb2x0aXBEaXYudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCkuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gQWRkIGJhY2tncm91bmQgcmVjdGFuZ2xlIGZvciB0aGUgbm9kZXNcbiAgICBub2RlRW50ZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAncmVjdCcsXG4gICAgICAgIHNlbGVjdG9yOiAnbm9kZS1yZWN0JyxcbiAgICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoeyBfY2hpbGRyZW4gfSkgPT5cbiAgICAgICAgX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6ICcjZmZmJ1xuICAgICAgKTtcblxuICAgIC8vIE5vZGUgdXBkYXRlIHN0eWxlc1xuICAgIGNvbnN0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXJcbiAgICAgIC5tZXJnZShub2Rlc1NlbGVjdGlvbilcbiAgICAgIC5zdHlsZSgnZm9udCcsICcxMnB4IHNhbnMtc2VyaWYnKTtcblxuICAgIC8vIEFkZCBmb3JlaWduT2JqZWN0IGVsZW1lbnQgaW5zaWRlIHJlY3RhbmdsZVxuICAgIGNvbnN0IGZvID0gbm9kZVVwZGF0ZS5wYXR0ZXJuaWZ5KHtcbiAgICAgIHRhZzogJ2ZvcmVpZ25PYmplY3QnLFxuICAgICAgc2VsZWN0b3I6ICdub2RlLWZvcmVpZ24tb2JqZWN0JyxcbiAgICAgIGRhdGE6IChkKSA9PiBbZF0sXG4gICAgfSk7XG5cbiAgICAvLyBBZGQgZm9yZWlnbiBvYmplY3RcbiAgICBmby5wYXR0ZXJuaWZ5KHtcbiAgICAgIHRhZzogJ3hodG1sOmRpdicsXG4gICAgICBzZWxlY3RvcjogJ25vZGUtZm9yZWlnbi1vYmplY3QtZGl2JyxcbiAgICAgIGRhdGE6IChkKSA9PiBbZF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKTtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIHByb3BlciBwb3NpdGlvbiBmb3IgdGhlIG5vZGVcbiAgICBub2RlVXBkYXRlXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICh7IHgsIHkgfSkgPT4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYFxuICAgICAgKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKTtcblxuICAgIC8vIFN0eWxlIG5vZGUgcmVjdGFuZ2xlc1xuICAgIG5vZGVVcGRhdGVcbiAgICAgIC5zZWxlY3QoJy5ub2RlLXJlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgKHsgZGF0YSB9KSA9PiBkYXRhLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsICh7IGRhdGEgfSkgPT4gZGF0YS5oZWlnaHQpXG4gICAgICAuYXR0cigneCcsICh7IGRhdGEgfSkgPT4gLWRhdGEud2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ3knLCAoeyBkYXRhIH0pID0+IC1kYXRhLmhlaWdodCAvIDIpXG4gICAgICAuYXR0cigncngnLCAoeyBkYXRhIH0pID0+IGRhdGEuYm9yZGVyUmFkaXVzIHx8IDApXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICh7IGRhdGEgfSkgPT4gZGF0YS5ib3JkZXJXaWR0aCB8fCBhdHRycy5zdHJva2VXaWR0aFxuICAgICAgKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAoeyBib3JkZXJDb2xvciB9KSA9PiBib3JkZXJDb2xvcilcbiAgICAgIC5zdHlsZShcbiAgICAgICAgJ2ZpbGwnLFxuICAgICAgICAoeyBiYWNrZ3JvdW5kQ29sb3IgfSkgPT4gYmFja2dyb3VuZENvbG9yXG4gICAgICApO1xuXG4gICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzIGFmdGVyIHRyYW5zaXRpb25cbiAgICBjb25zdCBub2RlRXhpdFRyYW5zaXRpb24gPSBub2Rlc1NlbGVjdGlvblxuICAgICAgLmV4aXQoKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgKVxuICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApO1xuXG4gICAgLy8gT24gZXhpdCByZWR1Y2UgdGhlIG5vZGUgcmVjdHMgc2l6ZSB0byAwXG4gICAgbm9kZUV4aXRUcmFuc2l0aW9uXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1yZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKTtcblxuICAgIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxuICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQueDAgPSBkLng7XG4gICAgICBkLnkwID0gZC55O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkZXRlY3RzIHdoZXRoZXIgY3VycmVudCBicm93c2VyIGlzIGVkZ2VcbiAgaXNFZGdlKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnRWRnZScpO1xuICB9XG5cbiAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGN1c3RvbSBkaWFnb25hbCAtIHBsYXkgd2l0aCBpdCBoZXJlIC0gaHR0cHM6Ly90by5seS8xemhUS1xuICBkaWFnb25hbChzLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgLmNlbnRlckcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsICdncm91cE9mUGF0aHMnKTtcbiAgICBsZXQgaGVpZ2h0TXVsdGlwbGllciA9XG4gICAgICBwYXJlbnRzLmxlbmd0aCA9PSAyID8gMC41NzUgOiAwLjQyNTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgcGFyZW50cykge1xuICAgICAgbGV0IGhlaWdodCA9IHMueSAtIHQueTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHNvbWUgdmFyaWFibGVzIGJhc2VkIG9uIHNvdXJjZSBhbmQgdGFyZ2V0IChzLHQpIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgeCA9IHMueDtcbiAgICAgIGxldCB5ID0gcy55O1xuICAgICAgbGV0IGV4ID0gdC54O1xuICAgICAgbGV0IGV5ID0gdC55O1xuICAgICAgbGV0IHhydnMgPSBleCAtIHggPCAwID8gLTEgOiAxO1xuICAgICAgbGV0IHlydnMgPSAtMTtcbiAgICAgIGxldCByZGVmID0gMzU7XG4gICAgICBsZXQgckluaXRpYWwgPVxuICAgICAgICBNYXRoLmFicyhleCAtIHgpIC8gMiA8IHJkZWZcbiAgICAgICAgICA/IE1hdGguYWJzKGV4IC0geCkgLyAyXG4gICAgICAgICAgOiByZGVmO1xuICAgICAgbGV0IHIgPVxuICAgICAgICBNYXRoLmFicyhleSAtIHkpIC8gMiA8IHJJbml0aWFsXG4gICAgICAgICAgPyBNYXRoLmFicyhleSAtIHkpIC8gMlxuICAgICAgICAgIDogckluaXRpYWw7XG4gICAgICBsZXQgaCA9IE1hdGguYWJzKGV5IC0geSkgKiBoZWlnaHRNdWx0aXBsaWVyIC0gcjtcbiAgICAgIGxldCB3ID0gTWF0aC5hYnMoZXggLSB4KSAtIHIgKiAyO1xuXG4gICAgICBsZXQgcGF0aCA9IGBcbiAgICAgICAgICAgICBNICR7eH0gJHt5fVxuICAgICAgICAgICAgIEwgJHt4fSAke3kgKyBoICogeXJ2c31cbiAgICAgICAgICAgICBDICR7eH0gJHt5ICsgaCAqIHlydnMgKyByICogeXJ2c30gJHt4fSAke1xuICAgICAgICB5ICsgaCAqIHlydnMgKyByICogeXJ2c1xuICAgICAgfSAke3ggKyByICogeHJ2c30gJHt5ICsgaCAqIHlydnMgKyByICogeXJ2c31cbiAgICAgICAgICAgICBMICR7eCArIHcgKiB4cnZzICsgciAqIHhydnN9ICR7XG4gICAgICAgIHkgKyBoICogeXJ2cyArIHIgKiB5cnZzXG4gICAgICB9XG4gICAgICAgICAgICAgQyAke2V4fSAke3kgKyBoICogeXJ2cyArIHIgKiB5cnZzfSAke2V4fSAke1xuICAgICAgICB5ICsgaCAqIHlydnMgKyByICogeXJ2c1xuICAgICAgfSAke2V4fSAke2V5IC0gaCAqIHlydnN9XG4gICAgICAgICAgICAgTCAke2V4fSAke2V5fVxuICAgICAgICAgICBgO1xuICAgICAgZ3JvdXBcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIH1cblxuICAgIGxldCBjb21iaW5lZEQgPSAnJztcbiAgICBncm91cC5zZWxlY3RBbGwoJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkMy5zZWxlY3QodGhpcykuYXR0cignZCcpKVxuICAgICAgICBjb21iaW5lZEQgKz0gZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2QnKTtcbiAgICB9KTtcbiAgICBncm91cC5yZW1vdmUoKTtcbiAgICByZXR1cm4gY29tYmluZWREO1xuICB9XG5cbiAgcmVzdHlsZUZvcmVpZ25PYmplY3RFbGVtZW50cygpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgYXR0cnMuc3ZnXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1mb3JlaWduLW9iamVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAoeyB3aWR0aCB9KSA9PiB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0KVxuICAgICAgLmF0dHIoJ3gnLCAoeyB3aWR0aCB9KSA9PiAtd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ3knLCAoeyBoZWlnaHQgfSkgPT4gLWhlaWdodCAvIDIpO1xuICAgIGF0dHJzLnN2Z1xuICAgICAgLnNlbGVjdEFsbCgnLm5vZGUtZm9yZWlnbi1vYmplY3QtZGl2JylcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCAoeyB3aWR0aCB9KSA9PiBgJHt3aWR0aH1weGApXG4gICAgICAuc3R5bGUoJ2hlaWdodCcsICh7IGhlaWdodCB9KSA9PiBgJHtoZWlnaHR9cHhgKVxuICAgICAgLnN0eWxlKCdjb2xvcicsICh7IHRleHRDb2xvciB9KSA9PlxuICAgICAgICB0ZXh0Q29sb3IgPyB0ZXh0Q29sb3IgOiAnYmxhY2snXG4gICAgICApXG4gICAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcbiAgICAgIC5zdHlsZSgnbWFyZ2luLXRvcCcsICc1MHB4JylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzQwcHgnKVxuICAgICAgLmh0bWwoKHsgZGF0YSB9KSA9PiBkYXRhLm5vZGVJZCk7XG4gIH1cblxuICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gIG9uQnV0dG9uQ2xpY2soZCkge1xuICAgIC8vIElmIGNoaWxkcmVucyBhcmUgZXhwYW5kZWRcbiAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgaWYgKGQuaWQgPT09ICdDb252b2NhdGlvbicpIHtcbiAgICAgICAgY29uc3QgZGVtb2dyYXBoaWNOb2RlID0gZC5wYXJlbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGlmIChkZW1vZ3JhcGhpY05vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vQ29sbGFwc2UgdGhlbVxuICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG5cbiAgICAgIC8vIFNldCBkZXNjZW5kYW50cyBleHBhbmRlZCBwcm9wZXJ0eSB0byBmYWxzZVxuICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkLmlkID09PSAnRGVtb2dyYXBoaWNzJykge1xuICAgICAgICBjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcblxuICAgICAgICBpZiAoY29udm9jYXRpb25Ob2RlLmNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soY29udm9jYXRpb25Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFeHBhbmQgY2hpbGRyZW5cbiAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgIC8vIFNldCBlYWNoIGNoaWxkcmVuIGFzIGV4cGFuZGVkXG5cdFx0XHRpZiAoZC5jaGlsZHJlbilcbiAgICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKFxuICAgICAgICAgICh7IGRhdGEgfSkgPT4gKGRhdGEuZXhwYW5kZWQgPSB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlZHJhdyBHcmFwaFxuICAgIHRoaXMudXBkYXRlKGQpO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjaGFuZ2VzIGBleHBhbmRlZGAgcHJvcGVydHkgdG8gZGVzY2VuZGFudHNcbiAgc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oXG4gICAgeyBkYXRhLCBjaGlsZHJlbiwgX2NoaWxkcmVuIH0sXG4gICAgZmxhZ1xuICApIHtcbiAgICAvLyBTZXQgZmxhZyB0byB0aGUgY3VycmVudCBwcm9wZXJ0eVxuICAgIGRhdGEuZXhwYW5kZWQgPSBmbGFnO1xuXG4gICAgLy8gTG9vcCBvdmVyIGFuZCByZWN1cnNpdmVseSB1cGRhdGUgZXhwYW5kZWQgY2hpbGRyZW4ncyBkZXNjZW5kYW50c1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICB0aGlzLnNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKGQsIGZsYWcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCBvdmVyIGFuZCByZWN1cnNpdmVseSB1cGRhdGUgY29sbGFwc2VkIGNoaWxkcmVuJ3MgZGVzY2VuZGFudHNcbiAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICBfY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICB0aGlzLnNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKGQsIGZsYWcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgaW52b2tlZCB2aWEgY2hhcnQuc2V0RXhwYW5kZWQgQVBJLCBpdCBleHBhbmRzIG9yIGNvbGxhcHNlcyBwYXJ0aWN1bGFyIG5vZGVcbiAgc2V0RXhwYW5kZWQoaWQsIGV4cGFuZGVkRmxhZykge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgLy8gUmV0cmlldmUgbm9kZSBieSBub2RlIElkXG4gICAgY29uc3Qgbm9kZSA9IGF0dHJzLmFsbE5vZGVzLmZpbHRlcihcbiAgICAgICh7IGRhdGEgfSkgPT4gZGF0YS5ub2RlSWQgPT0gaWRcbiAgICApWzBdO1xuXG4gICAgLy8gSWYgbm9kZSBleGlzdHMsIHNldCBleHBhbnNpb24gZmxhZ1xuICAgIGlmIChub2RlKSBub2RlLmRhdGEuZXhwYW5kZWQgPSBleHBhbmRlZEZsYWc7XG5cbiAgICAvLyBGaXJzdCBleHBhbmQgYWxsIG5vZGVzXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmV4cGFuZChkKSk7XG5cbiAgICAvLyBUaGVuIGNvbGxhcHNlIGFsbCBub2Rlc1xuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4gdGhpcy5jb2xsYXBzZShkKSk7XG5cbiAgICAvLyBUaGVuIGV4cGFuZCBvbmx5IHRoZSBub2Rlcywgd2hpY2ggd2VyZSBwcmV2aW91c2x5IGV4cGFuZGVkLCBvciBoYXZlIGFuIGV4cGFuZCBmbGFnIHNldFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpXG4gICAgKTtcblxuICAgIC8vIFJlZHJhdyBncmFwaFxuICAgIHRoaXMudXBkYXRlKGF0dHJzLnJvb3QpO1xuICB9XG5cbiAgLy8gTWV0aG9kIHdoaWNoIG9ubHkgZXhwYW5kcyBub2Rlcywgd2hpY2ggaGF2ZSBwcm9wZXJ0eSBzZXQgXCJleHBhbmRlZD10cnVlXCJcbiAgZXhwYW5kU29tZU5vZGVzKGQpIHtcbiAgICAvLyBJZiBub2RlIGhhcyBleHBhbmRlZCBwcm9wZXJ0eSBzZXRcbiAgICBpZiAoZC5kYXRhLmV4cGFuZGVkKSB7XG4gICAgICAvLyBSZXRyaWV2ZSBub2RlJ3MgcGFyZW50XG4gICAgICBsZXQgcGFyZW50ID0gZC5wYXJlbnQ7XG5cbiAgICAgIC8vIFdoaWxlIHdlIGNhbiBnbyB1cFxuICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAvLyBFeHBhbmQgYWxsIGN1cnJlbnQgcGFyZW50J3MgY2hpbGRyZW5cbiAgICAgICAgaWYgKHBhcmVudC5fY2hpbGRyZW4pIHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuX2NoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwbGFjZSBjdXJyZW50IHBhcmVudCBob2xkaW5nIG9iamVjdFxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZWxseSBkbyB0aGUgc2FtZSBmb3IgY29sbGFwc2VkIG5vZGVzXG4gICAgaWYgKGQuX2NoaWxkcmVuKSB7XG4gICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmVsbHkgZG8gdGhlIHNhbWUgZm9yIGV4cGFuZGVkIG5vZGVzXG4gICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgIGQuY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIG5vZGVzIHN0YXRlIGFuZCByZWRyYXdzIGdyYXBoLCB1c3VhbGx5IGFmdGVyIGRhdGEgY2hhbmdlXG4gIHVwZGF0ZU5vZGVzU3RhdGUoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAvLyBTdG9yZSBuZXcgcm9vdCBieSBjb252ZXJ0aW5nIGZsYXQgZGF0YSB0byBoaWVyYXJjaHlcbiAgICBhdHRycy5yb290ID0gZDNcbiAgICAgIC5zdHJhdGlmeSgpXG4gICAgICAuaWQoKHsgbm9kZUlkIH0pID0+IG5vZGVJZClcbiAgICAgIC5wYXJlbnRJZCgoeyBwYXJlbnROb2RlSWRzIH0pID0+IHBhcmVudE5vZGVJZHNbMF0pKFxuICAgICAgYXR0cnMuZGF0YVxuICAgICk7XG5cbiAgICAvLyBTdG9yZSBwb3NpdGlvbnMsIHdoZXJlIGNoaWxkcmVuIGFwcGVhciBkdXJpbmcgdGhlaXIgZW50ZXIgYW5pbWF0aW9uXG4gICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgYXR0cnMucm9vdC55MCA9IDA7XG5cbiAgICAvLyBTdG9yZSBhbGwgbm9kZXMgaW4gZmxhdCBmb3JtYXQgKGFsdGhvdWdoLCBub3cgd2UgY2FuIGJyb3dzZSBwYXJlbnQsIHNlZSBkZXB0aCBlLnQuYy4gKVxuICAgIGF0dHJzLmFsbE5vZGVzID0gYXR0cnMubGF5b3V0c1xuICAgICAgLnRyZWVtYXAoYXR0cnMucm9vdClcbiAgICAgIC5kZXNjZW5kYW50cygpO1xuXG4gICAgLy8gU3RvcmUgZGlyZWN0IGFuZCB0b3RhbCBkZXNjZW5kYW50cyBjb3VudFxuICAgIGF0dHJzLmFsbE5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZC5kYXRhLCB7XG4gICAgICAgIGRpcmVjdFN1Ym9yZGluYXRlczogZC5jaGlsZHJlblxuICAgICAgICAgID8gZC5jaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICA6IDAsXG4gICAgICAgIHRvdGFsU3Vib3JkaW5hdGVzOiBkLmRlc2NlbmRhbnRzKCkubGVuZ3RoIC0gMSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRXhwYW5kIGFsbCBub2RlcyBmaXJzdFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCh0aGlzLmV4cGFuZCk7XG5cbiAgICAvLyBUaGVuIGNvbGxhcHNlIHRoZW0gYWxsXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgIC8vIFRoZW4gb25seSBleHBhbmQgbm9kZXMsIHdoaWNoIGhhdmUgZXhwYW5kZWQgcHJvcHJ0eSBzZXQgdG8gdHJ1ZVxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+XG4gICAgICB0aGlzLmV4cGFuZFNvbWVOb2RlcyhjaClcbiAgICApO1xuXG4gICAgLy8gUmVkcmF3IEdyYXBoc1xuICAgIHRoaXMudXBkYXRlKGF0dHJzLnJvb3QpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggY29sbGFwc2VzIHBhc3NlZCBub2RlIGFuZCBpdCdzIGRlc2NlbmRhbnRzXG4gIGNvbGxhcHNlKGQpIHtcbiAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuY29sbGFwc2UoY2gpKTtcbiAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHdoaWNoIGV4cGFuZHMgcGFzc2VkIG5vZGUgYW5kIGl0J3MgZGVzY2VuZGFudHNcbiAgZXhwYW5kKGQpIHtcbiAgICBpZiAoZC5fY2hpbGRyZW4pIHtcbiAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgIGQuY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuZXhwYW5kKGNoKSk7XG4gICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gWm9vbSBoYW5kbGVyIGZ1bmN0aW9uXG4gIHpvb21lZCgpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IGNoYXJ0ID0gYXR0cnMuY2hhcnQ7XG5cbiAgICAvLyBHZXQgZDMgZXZlbnQncyB0cmFuc2Zvcm0gb2JqZWN0XG4gICAgY29uc3QgdHJhbnNmb3JtID0gZDMuZXZlbnQudHJhbnNmb3JtO1xuXG4gICAgLy8gU3RvcmUgaXRcbiAgICBhdHRycy5sYXN0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgLy8gUmVwb3NpdGlvbiBhbmQgcmVzY2FsZSBjaGFydCBhY2NvcmRpbmdseVxuICAgIGNoYXJ0LmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG5cbiAgICAvLyBBcHBseSBuZXcgc3R5bGVzIHRvIHRoZSBmb3JlaWduIG9iamVjdCBlbGVtZW50XG4gICAgaWYgKHRoaXMuaXNFZGdlKCkpIHtcbiAgICAgIHRoaXMucmVzdHlsZUZvcmVpZ25PYmplY3RFbGVtZW50cygpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN1bmJ1cnN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9FeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgc3ZnV2lkdGg6IDMwMDAsXG4gICAgICBzdmdIZWlnaHQ6IDMwMDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBleHRlbmRlZExpbmVMZW5ndGg6IDQwLFxuICAgICAgdGV4dERpc3RhbmNlOiAxNSxcbiAgICAgIG91dGVyVGV4dFNpemU6ICcyMHB4JyxcbiAgICAgIGF0dHJpYnV0ZUluZGV4OiBudWxsLFxuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBkaXNwbGF5Tm9kZXM6IG51bGwsXG4gICAgICB2YWx1ZXM6IG51bGwsXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIHRleHRDaXJjbGVzQ291bnQ6IFtdLFxuICAgICAgdGV4dENpcmNsZXNQZXJjZW50OiBbXSxcbiAgICAgIGNlbnRlclRleHQ6IG51bGwsXG4gICAgICBjZW50ZXJUZXh0U2l6ZTogJzQwcHgnLFxuICAgICAgY2VudGVyVGV4dEhlaWdodDogNjAsXG4gICAgICBjb21wYXJlTW9kZTogZmFsc2UsXG4gICAgICBsZWdlbmRXaWR0aDogMTUwLFxuICAgIH07XG5cbiAgICAvL2dldCBhdHRyaWJ1dGVzIG1ldGhvZFxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy9nZXR0ZXIgJiBzZXR0ZXJcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBpbiBzdmcgKi9cbiAgcmVtb3ZlQWxsKCkge1xuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpLnN2Zy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qIENvbnZlcnRzIG9iamVjdHMgdG8gc2xpY2VzIHdpdGggcXVlcmllcyAqL1xuICBnZXRWYWx1ZXMoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy9wcmVwYXJpbmcgc2xpY2VzXG4gICAgY29uc3QgY2FydGVzaWFuID0gKC4uLmEpID0+XG4gICAgICBhLnJlZHVjZSgoYSwgYikgPT5cbiAgICAgICAgYS5mbGF0TWFwKChkKSA9PiBiLm1hcCgoZSkgPT4gW2QsIGVdLmZsYXQoKSkpXG4gICAgICApO1xuICAgIGxldCBzbGljZXMgPSBjYXJ0ZXNpYW4oXG4gICAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRGVncmVlLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRmFjdWx0eSxcbiAgICAgIGFjYWRlbWljVmFsdWVzWydTdHVkeSBTdGF0dXMnXVxuICAgICk7XG5cbiAgICBjb25zdCBtYWtlUXVlcnkgPSAoc2xpY2UsIGRpdmVyc2l0eUF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgcXVlcnkgPSBbLi4uc2xpY2VdO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAocHJvcCAhPT0gZGl2ZXJzaXR5QXR0cikge1xuICAgICAgICAgIHF1ZXJ5LnB1c2goJ1RvdGFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnkucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9O1xuXG4gICAgLy9jb252ZXJ0IHNsaWNlcyB0byBrZXkgZm9ybWF0XG5cbiAgICBsZXQgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgc2xpY2Ugb2Ygc2xpY2VzKSB7XG4gICAgICBsZXQgc3RyID0gc2xpY2UudG9TdHJpbmcoKTtcbiAgICAgIHZhbHVlc1tzdHJdID0ge307XG4gICAgICBmb3IgKGxldCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl0gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgZGl2ZXJzaXR5VmFsdWVzW2F0dHJdKSB7XG4gICAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl1bdmFsdWVdID0gbWFrZVF1ZXJ5KFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIGFyY3MsIHJldHVybiBhcmMgd2lkdGgsIGlubmVycmFkaXVzIGFuZCB0ZXh0IHNpemUqL1xuICBjb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHgsIHksIG51bUFyY3MpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB0ZXh0SGVpZ2h0T2Zmc2V0ID0gNTA7XG5cbiAgICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSAtIHRleHRIZWlnaHRPZmZzZXQpO1xuICAgIGxldCBhcmNXaWR0aCA9IG1pbiAvICgyICogbnVtQXJjcyArIDcpOyAvL21pbiA9IDIqbnVtQXJjcyphcmNXaWR0aCArIDIqaW5uZXJSYWRpdXMsIGlubmVyUmFkaXVzID0gMyphcmNXaWR0aFxuICAgIGxldCBpbm5lclJhZGl1cyA9IDMgKiBhcmNXaWR0aDtcblxuICAgIGxldCBtdWx0aXBsaWVyID0gMS41O1xuICAgIGxldCBuID0gMTM7IC8vJ2ludGVybmF0aW9uYWwnIHdpdGggMTMgbGV0dGVycyBpcyBsb25nZXN0IHdvcmQgaW4gZGl2ZXJzaXR5IGF0dHJpYnV0ZXNcbiAgICBsZXQgaW5uZXJUZXh0U2l6ZSA9XG4gICAgICAobXVsdGlwbGllciAqICgyICogaW5uZXJSYWRpdXMpKSAvIG4gKyAncHgnO1xuICAgIHJldHVybiB7XG4gICAgICBhcmNXaWR0aDogYXJjV2lkdGgsXG4gICAgICBpbm5lclJhZGl1czogaW5uZXJSYWRpdXMsXG4gICAgICBpbm5lclRleHRTaXplOiBpbm5lclRleHRTaXplLFxuICAgIH07XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIHNxdWFyZXMsIHJldHVybiByb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZSAqL1xuICBjb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoeCwgeSwgbikge1xuICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMsIGFuZCBjZWxsIHNpemVcbiAgICBsZXQgcmF0aW8gPSB4IC8geTtcbiAgICBsZXQgbmNvbHNfZmxvYXQgPSBNYXRoLnNxcnQobiAqIHJhdGlvKTtcbiAgICBsZXQgbnJvd3NfZmxvYXQgPSBuIC8gbmNvbHNfZmxvYXQ7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIGhlaWdodFxuICAgIGxldCBucm93czEgPSBNYXRoLmNlaWwobnJvd3NfZmxvYXQpO1xuICAgIGxldCBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgd2hpbGUgKG5yb3dzMSAqIHJhdGlvIDwgbmNvbHMxKSB7XG4gICAgICBucm93czErKztcbiAgICAgIG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTEgPSB5IC8gbnJvd3MxO1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSB3aWR0aFxuICAgIGxldCBuY29sczIgPSBNYXRoLmNlaWwobmNvbHNfZmxvYXQpO1xuICAgIGxldCBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgd2hpbGUgKG5jb2xzMiA8IG5yb3dzMiAqIHJhdGlvKSB7XG4gICAgICBuY29sczIrKztcbiAgICAgIG5yb3dzMiA9IE1hdGguY2VpbChuIC8gbmNvbHMyKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTIgPSB4IC8gbmNvbHMyO1xuXG4gICAgLy8gRmluZCB0aGUgYmVzdCB2YWx1ZXNcbiAgICBsZXQgbnJvd3MsIG5jb2xzLCBjZWxsX3NpemU7XG4gICAgaWYgKGNlbGxfc2l6ZTEgPCBjZWxsX3NpemUyKSB7XG4gICAgICBucm93cyA9IG5yb3dzMjtcbiAgICAgIG5jb2xzID0gbmNvbHMyO1xuICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbnJvd3MgPSBucm93czE7XG4gICAgICBuY29scyA9IG5jb2xzMTtcbiAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2l6ZTogY2VsbF9zaXplLCByb3dzOiBucm93cywgY29sczogbmNvbHMgfTtcbiAgfVxuXG4gIC8qIEZldGNoaW5nIGRhdGEgYW5kIHNldHRpbmcgdXAgc3ZnIGNvbnRhaW5lciAqL1xuICBhc3luYyBzZXR1cCh1cmwpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy9sb2FkIGRhdGEgc3luY2hyb25vdXNseVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkMy5jc3YodXJsKTtcblxuICAgIGF0dHJzLmF0dHJpYnV0ZUluZGV4ID0gZGF0YS5jb2x1bW5zO1xuXG4gICAgLy9jb252ZXJ0IGRhdGEgdG8gb2JqZWN0IGZvcm1hdFxuICAgIGF0dHJzLmRhdGEgPSBkYXRhLnJlZHVjZShmdW5jdGlvbiAobWFwLCBvYmosIGkpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iaik7XG5cbiAgICAgIHZhbHVlcy5wb3AoKTtcblxuICAgICAgbWFwWycnLmNvbmNhdCh2YWx1ZXMpXSA9IG9iai5Db3VudDtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKTtcblxuICAgIC8vIHNldHRpbmcgdXAgY29tcGFyZSBidXR0b25cbiAgICBjb25zdCB0b2dnbGVDb21wYXJlID0gKCkgPT4ge1xuICAgICAgYXR0cnMuY29tcGFyZU1vZGUgPSAhYXR0cnMuY29tcGFyZU1vZGU7XG4gICAgICBzYi5yZW5kZXIoYXR0cnMudmFsdWVzKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgJ2NvbXBhcmUtYnV0dG9uJ1xuICAgICkub25jbGljayA9IHRvZ2dsZUNvbXBhcmU7XG5cbiAgICBhdHRycy5zdmcgPSBzdmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiBDb252ZXJ0aW5nIGlucHV0IG9iamVjdHMgdG8gdmFsdWVzIGZvciBkaXNwbGF5ICovXG4gIGluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKFxuICAgICAgYWNhZGVtaWNWYWx1ZXMsXG4gICAgICBkaXZlcnNpdHlWYWx1ZXNcbiAgICApO1xuXG4gICAgdGhpcy5yZW5kZXIodmFsdWVzKTtcbiAgfVxuXG4gIC8qIFJlY3VycmluZyByZW5kZXIgKi9cbiAgcmVuZGVyKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvLyBTZXR0aW5nIHZhbHVlcyBzbyB2YWx1ZXMgaXMgc3RpbGwgYWNjZXNzaWJsZSB3aGVuIGNvbXBhcmUgaXMgdG9nZ2xlZFxuICAgIGF0dHJzLnZhbHVlcyA9IHZhbHVlcztcblxuICAgIC8vIHJlcHVycG9zaW5nIGJhY2sgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgIGlmIChhdHRycy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJhY2sgPSAoKSA9PiBzYi5yZW5kZXIoYXR0cnMuaGlzdG9yeS5wb3AoKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9XG4gICAgICAgIGF0dHJzLmRpc3BsYXlOb2RlcztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGVsZW1lbnRzIGluIHN2Z1xuICAgIHRoaXMucmVtb3ZlQWxsKCk7XG5cbiAgICAvLyByZS1jcmVhdGUgdGhlIG5ldyBlbGVtZW50c1xuICAgIGlmICghYXR0cnMuY29tcGFyZU1vZGUpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAnY29tcGFyZS1idXR0b24nXG4gICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLnJlbmRlclN1bmJ1cnN0KHZhbHVlcyk7XG4gICAgICAvLyBkaXNhYmxlIGNvbXBhcmUgbW9kZSBpZiBvbmx5IDEgc2xpY2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmRpc2FibGVkID1cbiAgICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGggPT09IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAnY29tcGFyZS1idXR0b24nXG4gICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgdGhpcy5yZW5kZXJDb21wYXJlKHZhbHVlcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyTGVnZW5kKHZhbHVlcyk7XG4gIH1cblxuICAvLyByZW5kZXIgdGhlIHN1bmJ1cnN0XG4gIHJlbmRlclN1bmJ1cnN0KHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvL0hlbHBlciB2YWx1ZXNcbiAgICBjb25zdCBudW1TbGljZXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aDtcbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKVxuICAgICAgLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuICAgIGNvbnN0IGFyY0xlbmd0aCA9ICgyICogTWF0aC5QSSkgLyBudW1TbGljZXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0JylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSArY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICtjb250YWluZXIud2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQ7XG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBudW1BcmNzXG4gICAgKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgICBjb25zdCBpbm5lclRleHRTaXplID0gcGFyYW1zLmlubmVyVGV4dFNpemU7XG5cbiAgICBsZXQgc3ZnID0gYXR0cnMuc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGF0dHJzLnN2Z1dpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGF0dHJzLnN2Z0hlaWdodClcbiAgICAgIC5hdHRyKFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgYHRyYW5zbGF0ZSgke3dpZHRoIC8gMn0sJHtoZWlnaHQgLyAyfSlgXG4gICAgICApO1xuXG4gICAgbGV0IGNlbnRlckdyb3VwID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgIC5hdHRyKCdjeCcsIDApXG4gICAgICAuYXR0cignY3knLCAwKVxuICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCA1KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMSA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICctMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoJ0NhdGVnb3J5JylcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoJ0NvdW50JylcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTMgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnMS41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoJ1BlcmNlbnQnKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgLy9IZWxwZXIgbWV0aG9kc1xuICAgIGNvbnN0IGdldENpcmNsZVggPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgY29uc3QgZ2V0Q2lyY2xlWSA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cztcblxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvL2xpbmUgYnVpbGRlclxuICAgIGNvbnN0IGxpbmVCdWlsZGVyID0gKHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXM7XG4gICAgICBpZiAobnVtU2xpY2VzICUgMiA9PSAxKSByYWRpYW5zICs9IE1hdGguUEk7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ3gxJywgZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKCd5MScsIGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneDInLFxuICAgICAgICAgIGdldENpcmNsZVgoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3kyJyxcbiAgICAgICAgICBnZXRDaXJjbGVZKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHNsaWNlLCBzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBpZiAodGV4dCA9PT0gJycpIHtcbiAgICAgICAgdGV4dCA9ICdUb3RhbCc7XG4gICAgICB9XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeCA9IGdldENpcmNsZVgocmFkaWFucywgcmFkaXVzKTtcbiAgICAgIGxldCB5ID0gLWdldENpcmNsZVkocmFkaWFucywgcmFkaXVzKTtcblxuICAgICAgaWYgKHggPCAtMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDk7XG4gICAgICAvL2xlZnQgc2lkZSBhZGp1c3RcbiAgICAgIGVsc2UgaWYgKHggPCAxKSB4IC09IHRleHQubGVuZ3RoICogNTsgLy9taWRkbGUgdGV4dCBhZGp1c3RcblxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMub3V0ZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKFxuICAgICAgYXJjLFxuICAgICAgc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlLFxuICAgICAgc2xpY2UsXG4gICAgICBhdHRyLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3VudCxcbiAgICAgIHBlcmNlbnRcbiAgICApID0+IHtcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bSh7XG4gICAgICAgICAgc3RhcnRBbmdsZTogc3RhcnRBbmdsZSxcbiAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pXG4gICAgICAgIC5hdHRyKCdkJywgYXJjKVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIHZhbHVlICsgXCJyZWN0J11cIikuc3R5bGUoXG4gICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgICAgIDNcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICAgIGlmIChhdHRyID09PSAnQWdlJykge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMVxuICAgICAgICAgICAgICAgIC50ZXh0KGF0dHIgKyAnOiAnICsgdmFsdWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCh2YWx1ZSkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dCgnPDUnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoY291bnQpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXh0Q2lyY2xlM1xuICAgICAgICAgICAgICAudGV4dChcbiAgICAgICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KCcnKTtcbiAgICAgICAgICAgIHRleHRDaXJjbGUyXG4gICAgICAgICAgICAgIC50ZXh0KCdObyBTdHVkZW50cycpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgIHRleHRDaXJjbGUxXG4gICAgICAgICAgICAudGV4dCgnQ2F0ZWdvcnknKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KCdDb3VudCcpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICB0ZXh0Q2lyY2xlMy50ZXh0KCdQZXJjZW50JykuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyB2YWx1ZSArIFwicmVjdCddXCIpLnN0eWxlKFxuICAgICAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobnVtQXJjcyA9PSAxKSB7XG4gICAgICAgICAgICBhbGVydCgnVW5hYmxlIHRvIHByb3ZpZGUgYW55IG1vcmUgZGV0YWlsJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdTbGljZSA9IHNsaWNlICsgJywnICsgdmFsdWU7XG4gICAgICAgICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgW25ld1NsaWNlXTogSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlc1tzbGljZV0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhdHRycy5hdHRyaWJ1dGVJbmRleC5pbmRleE9mKFxuICAgICAgICAgICAgICAgIGF0dHJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIxIGluIG5ld1ZhbHVlc1tuZXdTbGljZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cjEgPT09IGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXVtcbiAgICAgICAgICAgICAgICAgICAgYXR0cjFcbiAgICAgICAgICAgICAgICAgIF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV1bdmFsdWUxXVtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICBdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWVzKTtcblxuICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9idWlsZCBhcmNzXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gc2xpY2VDb3VudCAqIGFyY0xlbmd0aDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPT0gMCkge1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlICsgYXJjTGVuZ3RoLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICcwJyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG5cbiAgICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgIHBlcmNlbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXJjQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKG51bVNsaWNlcyA9PSAxKSB0ZXh0QnVpbGRlcihzbGljZSwgMC41KTtcbiAgICAgIGVsc2UgdGV4dEJ1aWxkZXIoc2xpY2UsIHNsaWNlQ291bnQpO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cblxuICAgIC8vYnVpbGQgbGluZXMgYWZ0ZXIgc28gdGhleSBhcmUgb24gdG9wXG4gICAgZm9yIChcbiAgICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICAgIHNsaWNlQ291bnQgPCBudW1TbGljZXMgJiYgbnVtU2xpY2VzID4gMTtcbiAgICAgIHNsaWNlQ291bnQrK1xuICAgICkge1xuICAgICAgbGluZUJ1aWxkZXIoc2xpY2VDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVZhbHVlcyh2YWx1ZXMsIHNlbGVjdGVkVmFsdWUsIGF0dHIpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGlmIChhdHRyID09PSAnQWdlJylcbiAgICAgIGF0dHJzLmNlbnRlclRleHQudGV4dCgnQWdlOiAnICsgc2VsZWN0ZWRWYWx1ZSk7XG4gICAgZWxzZSBhdHRycy5jZW50ZXJUZXh0LnRleHQoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3NlbGVjdGVkVmFsdWVdXVxuICAgICAgICApO1xuICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dCgnPDUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJ05vJyk7XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICAnU3R1ZGVudHMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgICAvL2QzLnNlbGVjdChcInRleHRbaWQ9J2VsZW1lbnQuaWQud2l0aC5kb3RzJ11cIik7XG4gICAgY29uc3QgaWQgPSBzZWxlY3RlZFZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWVzKHZhbHVlKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBhdHRycy5jZW50ZXJUZXh0LnRleHQoJycpO1xuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc0NvdW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IHZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICB9XG5cbiAgcmVuZGVyQ29tcGFyZSh2YWx1ZXMpIHtcbiAgICAvL0hlbHBlciB2YWx1ZXNcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcblxuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDsgLy9taW51cyBiZWNhdXNlIG9mIGxlZ2VuZFxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodCAtIGF0dHJzLmNlbnRlclRleHRIZWlnaHQ7XG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHNiLmNvbXB1dGVDb21wYXJlRGltZW5zaW9ucyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtU2xpY2VzXG4gICAgKTsgLy9yb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZVxuICAgIGNvbnN0IGFyY0xlbmd0aCA9IDIgKiBNYXRoLlBJO1xuXG4gICAgY29uc3Qgcm93cyA9IGRpbWVuc2lvbnMucm93cztcbiAgICBjb25zdCBjb2xzID0gZGltZW5zaW9ucy5jb2xzO1xuICAgIGNvbnN0IHNpemUgPSBkaW1lbnNpb25zLnNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZVdpZHRoID0gd2lkdGggLSBjb2xzICogc2l6ZTtcbiAgICBjb25zdCB3aGl0ZXNwYWNlSGVpZ2h0ID0gaGVpZ2h0IC0gcm93cyAqIHNpemU7XG5cbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKVxuICAgICAgLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemUsXG4gICAgICBudW1BcmNzXG4gICAgKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgICBjb25zdCBpbm5lclRleHRTaXplID0gcGFyYW1zLmlubmVyVGV4dFNpemU7XG5cbiAgICAvKiBIZWxwZXIgbWV0aG9kcyAqL1xuXG4gICAgLy8gQ29udmVydGluZyBzbGljZSBuYW1lIHRvIHRleHRcbiAgICBjb25zdCBnZXRUZXh0ID0gKHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKFxuICAgICAgICAod29yZCkgPT4gd29yZCAhPT0gJ1RvdGFsJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oJ1xcclxcbicpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZExvbmdlc3RTbGljZSA9IChhcnJheSkgPT4ge1xuICAgICAgbGV0IGxvbmdlc3RXb3JkID0gJyc7XG4gICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA+IGxvbmdlc3RXb3JkLmxlbmd0aCkge1xuICAgICAgICAgIGxvbmdlc3RXb3JkID0gd29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbG9uZ2VzdFdvcmQ7XG4gICAgfTtcbiAgICBjb25zdCBsb25nZXN0U2xpY2VUZXh0TGVuZ3RoID0gZ2V0VGV4dChcbiAgICAgIGZpbmRMb25nZXN0U2xpY2UoT2JqZWN0LmtleXModmFsdWVzKSlcbiAgICApLmxlbmd0aDtcblxuICAgIC8vdGV4dCBidWlsZGVyXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoXG4gICAgICBzbGljZSxcbiAgICAgIHNsaWNlQ291bnQsXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgKSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeSA9IC1yYWRpdXM7XG5cbiAgICAgIGxldCBzaXplTXVsdGlwbGllciA9IDEuODtcbiAgICAgIGxldCBvdXRlclRleHRTaXplID0gTWF0aC5taW4oXG4gICAgICAgIChzaXplTXVsdGlwbGllciAqICgyICogcmFkaXVzKSkgL1xuICAgICAgICAgIGxvbmdlc3RTbGljZVRleHRMZW5ndGgsXG4gICAgICAgIDUwXG4gICAgICApO1xuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBvdXRlclRleHRTaXplICsgJ3B4JylcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKFxuICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgIGFyYyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHNsaWNlLFxuICAgICAgYXR0cixcbiAgICAgIHZhbHVlXG4gICAgKSA9PiB7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICAgIHNiLmRpc3BsYXlWYWx1ZXModmFsdWVzLCB2YWx1ZSwgYXR0cik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgICAgc2IucmVtb3ZlVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG51bUFyY3MgPT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBwcm92aWRlIGFueSBtb3JlIGRldGFpbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoXG4gICAgICAgICAgICAgICAgYXR0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsaWNlMSBpbiBuZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2xpY2UgPSBzbGljZTEgKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgT2JqZWN0LmFzc2lnbihuZXdWYWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgIFtuZXdTbGljZV06IG5ld1ZhbHVlc1tzbGljZTFdLFxuICAgICAgICAgICAgICAgIH0pW3NsaWNlMV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXR0cjEgPT09IGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWNlXG4gICAgICAgICAgICAgICAgICAgIF1bYXR0cjFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV1bdmFsdWUxXVtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWVzKTtcblxuICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ2xlYXIgdGV4dENpcmNsZSBsaXN0c1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblxuICAgIGF0dHJzLmNlbnRlclRleHQgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cigneScsIDE1ICsgYXR0cnMuY2VudGVyVGV4dEhlaWdodCAvIDIpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLmNlbnRlclRleHRTaXplKVxuICAgICAgLnRleHQoJycpO1xuXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoc2xpY2VDb3VudCAvIGNvbHMpO1xuICAgICAgbGV0IGNvbCA9IHNsaWNlQ291bnQgJSBjb2xzO1xuXG4gICAgICBsZXQgdHJhbnNsYXRlWCA9XG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgY29sICogc2l6ZSArXG4gICAgICAgICgoY29sICsgMSkgKiB3aGl0ZXNwYWNlV2lkdGgpIC8gKGNvbHMgKyAxKTtcbiAgICAgIGxldCB0cmFuc2xhdGVZID1cbiAgICAgICAgYXR0cnMuY2VudGVyVGV4dEhlaWdodCArXG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgcm93ICogc2l6ZSArXG4gICAgICAgICgocm93ICsgMSkgKiB3aGl0ZXNwYWNlSGVpZ2h0KSAvIChyb3dzICsgMSk7XG5cbiAgICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNpemUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzaXplKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlgXG4gICAgICAgICk7XG4gICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMGVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUyID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudC5wdXNoKHRleHRDaXJjbGUxKTtcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudC5wdXNoKHRleHRDaXJjbGUyKTtcblxuICAgICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VtID09IDApIHtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSArIGFyY0xlbmd0aCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgJzAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG4gICAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgICBzdW5idXJzdEdyb3VwLFxuICAgICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG4gICAgICB0ZXh0QnVpbGRlcihzbGljZSwgLTAuNSwgc3VuYnVyc3RHcm91cCk7XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTGVnZW5kKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgIGxldCBsZWdlbmQgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWxlZ2VuZCcpXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5sZWdlbmRXaWR0aCk7XG4gICAgbGVnZW5kLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIGxldCB5ID0gMjQ7XG4gICAgbGV0IHggPSAyMDtcblxuICAgIGxldCBmaXJzdFNsaWNlID0gT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdO1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBmaXJzdFNsaWNlKSB7XG4gICAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKGZpcnN0U2xpY2VbYXR0cl0pO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSk7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIHZhbHVlICsgJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeCArIDIwKVxuICAgICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgICAgLnRleHQodmFsdWUpXG4gICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICAgICAgeSArPSAzMDtcbiAgICAgIH1cbiAgICAgIHkgKz0gMTA7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDaGFydCB9IGZyb20gJy4vY2hhcnRzLWNsYXNzJztcbmltcG9ydCB7IFN1bmJ1cnN0IH0gZnJvbSAnLi9zdW5idXJzdC1jbGFzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcblx0Ly9zdW5idXJzdCBcbiAgbGV0IHNiOyBcblxuXHQvL1NldCBub2RlIGFuZCBNYWluIHZpeiBTUEEgdXBzXG4gIGRpc3BsYXlOb2RlcygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Vml6O1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheU5vZGVzO1xuIFx0XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Tm9kZXMoKXtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Vml6KCl7XG4gICAgICBsZXQgdGVzdCA9IGZhbHNlO1xuICAgIFx0bGV0IGFjYWRlbWljVmFsdWVzVGVzdCA9IHtcbiAgICAgICAgICAgXHQgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgICAgICAgRGVncmVlOiBbJ0JhY2hlbG9ycycsICdNYXN0ZXJzJywgJ1BoLkQuJ10sXG4gICAgICAgICAgICAgRmFjdWx0eTogWydCdXNpbmVzcyddLFxuICAgICAgICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1BhcnQtdGltZScsICdDby1vcCddXG4gICAgICAgICAgfTtcbiAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzVGVzdCA9IHsgICAgIFxuICAgICAgICAgICAgICBBZ2U6IFsnPD0xNycsICcxOC0yMCcsICcyNi0zMCcsICc1NSsnXSxcbiAgICAgICAgICAgICAgU2V4OiAgWydNYWxlJywgJ0ZlbWFsZSddLFxuICAgICAgICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogWydJbnRlcm5hdGlvbmFsJywgJ0RvbWVzdGljJ11cbiAgICAgICB9XG5cbiAgICBcdGlmIChzYil7XG4gICAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzID0gdGVzdD9kaXZlcnNpdHlWYWx1ZXNUZXN0OiBodC5kaXZlcnNpdHlWYWx1ZXMoKTtcbiAgICAgICAgIGxldCBhY2FkZW1pY1ZhbHVlcyA9IHRlc3Q/YWNhZGVtaWNWYWx1ZXNUZXN0OiBodC5hY2FkZW1pY1ZhbHVlcygpO1xuXG4gICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICAgIFx0IGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgaWYgKCF2YWxpZCl7XG4gICAgICAgIFx0XHRhbGVydCgnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgZGl2ZXJzaXR5IGF0dHJpYnV0ZScpOyAgXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBcdCBcdFx0IHNiLmluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWxlcnQoJ1BsZWFzZSB3YWl0IGZvciB0aGUgZGF0YSB0byBmaW5pc2ggbG9hZGluZycpO1xuICAgICAgfVxuICB9XG4gIFxuICBsZXQgaHQgPSBuZXcgQ2hhcnQoKVxuICAgICAuY29udGFpbmVyKCcjY2hhcnQnKVxuICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5pbml0aWFsWm9vbSgwLjMpXG4gICAgIC5yZW5kZXIoKVxuXG4gIG5ldyBTdW5idXJzdCgpXG4gICAgICAgICAuY29udGFpbmVyKCcjc3VuYnVyc3QnKVxuICAgICAgICAgLnN2Z1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgXHRcdFx0IC5kaXNwbGF5Tm9kZXMoZGlzcGxheU5vZGVzKVxuICAgIFx0XHQgLnNldHVwKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZWw1NTgvN2QyY2I1MjU4OTIxMTE5ZGY1ODg0Y2M5MDkwMmU4NGQvcmF3LzAwODI3YjlkNTMyODgzMzQzMTkxZjYxNDRkNDFkMGEwYmJhZDVkZjgvZmFsbC5jc3YnKVxuXHRcdFx0XHQgLnRoZW4odmFsdWUgPT4gc2IgPSB2YWx1ZSk7XG59KTtcblxuXG5cblxuXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUFBLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUN6QixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDN0I7RUFDQSxNQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztFQUMzQyxNQUFNLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDO0VBQ2xELE1BQU0sMEJBQTBCLEdBQUcsdUJBQXVCLENBQUM7QUFDM0Q7RUFDQSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7RUFDM0IsTUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztBQUNuRDtBQUNBO0FBQ0E7RUFDQSxNQUFNLFlBQVksR0FBRztFQUNyQixFQUFFLFdBQVcsRUFBRTtFQUNmLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsSUFBSSxXQUFXLEVBQUUsNkNBQTZDO0VBQzlELEdBQUc7RUFDSCxFQUFFLFlBQVksRUFBRTtFQUNoQixJQUFJLElBQUksRUFBRSxXQUFXO0VBQ3JCLElBQUksV0FBVyxFQUFFLDBDQUEwQztFQUMzRCxHQUFHO0VBQ0gsRUFBRSxPQUFPLEVBQUU7RUFDWCxJQUFJLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDM0MsSUFBSSxlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsd0JBQXdCLENBQUM7RUFDcEksR0FBRyxpQkFBaUIsRUFBRSxFQUFFO0VBQ3hCLElBQUksSUFBSSxFQUFFLHVCQUF1QjtFQUNqQyxJQUFJLFdBQVcsRUFBRSw0RUFBNEU7RUFDN0YsR0FBRztFQUNILEVBQUUsZUFBZSxFQUFFO0VBQ25CLElBQUksT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUMzQyxJQUFJLGVBQWUsRUFBRSxDQUFDLFNBQVM7RUFDL0IsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTLEVBQUU7RUFDakIsR0FBRyxpQkFBaUIsRUFBRSxFQUFFO0VBQ3hCLElBQUksSUFBSSxFQUFFLHVCQUF1QjtFQUNqQyxJQUFJLFdBQVcsRUFBRSxnRUFBZ0U7RUFDakYsR0FBRztFQUNILEVBQUUsTUFBTSxFQUFFO0VBQ1YsSUFBSSxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQzNDLElBQUksZUFBZSxFQUFFLENBQUMsV0FBVztFQUNqQyxNQUFNLFNBQVM7RUFDZixNQUFNLE9BQU8sQ0FBQztFQUNkLEdBQUcsaUJBQWlCLEVBQUUsRUFBRTtFQUN4QixJQUFJLElBQUksRUFBRSx1QkFBdUI7RUFDakMsSUFBSSxXQUFXLEVBQUUsNkJBQTZCO0VBQzlDLEdBQUc7RUFDSDtFQUNBLEVBQUUsY0FBYyxFQUFFO0VBQ2xCLElBQUksT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO0VBQzdCLElBQUksZUFBZSxFQUFFLENBQUMsV0FBVztFQUNqQyxNQUFNLFdBQVc7RUFDakIsTUFBTSxPQUFPLENBQUM7RUFDZCxHQUFHLGlCQUFpQixFQUFFLEVBQUU7RUFDeEIsSUFBSSxJQUFJLEVBQUUsdUJBQXVCO0VBQ2pDLElBQUksV0FBVyxFQUFFLHVJQUF1STtFQUN4SixHQUFHO0VBQ0gsRUFBRSxvQkFBb0IsRUFBRTtFQUN4QixJQUFJLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztFQUM3QixJQUFJLGVBQWUsRUFBRSxDQUFDLFVBQVU7RUFDaEMsTUFBTSxlQUFlLENBQUM7RUFDdEIsR0FBRyxpQkFBaUIsRUFBRSxFQUFFO0VBQ3hCLElBQUksSUFBSSxFQUFFLGtCQUFrQjtFQUM1QixJQUFJLFdBQVcsRUFBRSwyRkFBMkY7RUFDNUcsR0FBRztFQUNILEVBQUUsR0FBRyxFQUFFO0VBQ1AsSUFBSSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7RUFDN0IsSUFBSSxlQUFlLEVBQUU7RUFDckIsTUFBTSxNQUFNO0VBQ1osTUFBTSxPQUFPO0VBQ2IsTUFBTSxPQUFPO0VBQ2IsTUFBTSxPQUFPO0VBQ2IsTUFBTSxPQUFPO0VBQ2IsTUFBTSxPQUFPO0VBQ2IsTUFBTSxPQUFPO0VBQ2IsTUFBTSxLQUFLO0VBQ1gsS0FBSztFQUNMLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQztFQUN6RSxJQUFJLElBQUksRUFBRSxrQkFBa0I7RUFDNUIsSUFBSSxXQUFXLEVBQUUsNEJBQTRCO0VBQzdDLEdBQUc7RUFDSCxFQUFFLEdBQUcsRUFBRTtFQUNQLElBQUksT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUMzQyxJQUFJLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7RUFDdkMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztFQUNwQyxJQUFJLElBQUksRUFBRSxrQkFBa0I7RUFDNUIsSUFBSSxXQUFXLEVBQUUsd0ZBQXdGO0VBQ3pHLEVBQUU7RUFDRixFQUFFLElBQUksRUFBRTtFQUNSLElBQUksT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO0VBQzdCLEdBQUcsZUFBZSxFQUFFLEVBQUU7RUFDdEIsR0FBRyxpQkFBaUIsRUFBRSxFQUFFO0VBQ3hCLElBQUksSUFBSSxFQUFFLDBCQUEwQjtFQUNwQyxJQUFJLFdBQVcsRUFBRSx1QkFBdUI7RUFDeEMsRUFBRTtFQUNGLEVBQUUsdUJBQXVCLEVBQUU7RUFDM0IsSUFBSSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7RUFDN0IsR0FBRyxlQUFlLEVBQUUsRUFBRTtFQUN0QixHQUFHLGlCQUFpQixFQUFFLEVBQUU7RUFDeEIsSUFBSSxJQUFJLEVBQUUsMEJBQTBCO0VBQ3BDLElBQUksV0FBVyxFQUFFLHdDQUF3QztFQUN6RCxHQUFHO0VBQ0gsRUFBRSxxQkFBcUIsRUFBRTtFQUN6QixJQUFJLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztFQUM3QixHQUFHLGVBQWUsRUFBRSxFQUFFO0VBQ3RCLEdBQUcsaUJBQWlCLEVBQUUsRUFBRTtFQUN4QixJQUFJLElBQUksRUFBRSwwQkFBMEI7RUFDcEMsSUFBSSxXQUFXLEVBQUUsc0NBQXNDO0VBQ3ZELEdBQUc7RUFDSCxFQUFFLGFBQWEsRUFBRTtFQUNqQixJQUFJLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztFQUM3QixHQUFHLGVBQWUsRUFBRSxFQUFFO0VBQ3RCLEdBQUcsaUJBQWlCLEVBQUUsRUFBRTtFQUN4QixJQUFJLElBQUksRUFBRSwwQkFBMEI7RUFDcEMsSUFBSSxXQUFXLEVBQUUsOEJBQThCO0VBQy9DLEdBQUc7RUFDSCxFQUFFLFdBQVcsRUFBRTtFQUNmLElBQUksT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO0VBQzdCLEdBQUcsZUFBZSxFQUFFLEVBQUU7RUFDdEIsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0VBQ3pELElBQUksSUFBSSxFQUFFLDBCQUEwQjtFQUNwQyxJQUFJLFdBQVcsRUFBRSw4QkFBOEI7RUFDL0MsR0FBRztFQUNILEVBQUUsZ0JBQWdCLEVBQUU7RUFDcEIsSUFBSSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7RUFDN0IsR0FBRyxlQUFlLEVBQUUsRUFBRTtFQUN0QixHQUFHLGlCQUFpQixFQUFFLEVBQUU7RUFDeEIsSUFBSSxJQUFJLEVBQUUsMEJBQTBCO0VBQ3BDLElBQUksV0FBVyxFQUFFLGlDQUFpQztFQUNsRCxHQUFHO0VBQ0gsRUFBRSxnQkFBZ0IsRUFBRTtFQUNwQixJQUFJLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztFQUM3QixHQUFHLGVBQWUsRUFBRSxFQUFFO0VBQ3RCLEdBQUcsaUJBQWlCLEVBQUUsRUFBRTtFQUN4QixJQUFJLElBQUksRUFBRSwwQkFBMEI7RUFDcEMsSUFBSSxXQUFXLEVBQUUsaUNBQWlDO0VBQ2xELEdBQUc7RUFDSCxFQUFFLFdBQVcsRUFBRTtFQUNmLElBQUksT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO0VBQzdCLEdBQUcsZUFBZSxFQUFFLEVBQUU7RUFDdEIsR0FBRyxpQkFBaUIsRUFBRSxFQUFFO0VBQ3hCLElBQUksSUFBSSxFQUFFLDBCQUEwQjtFQUNwQyxJQUFJLFdBQVcsRUFBRSw0QkFBNEI7RUFDN0MsR0FBRztFQUNILEVBQUUsUUFBUSxFQUFFO0VBQ1osSUFBSSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7RUFDN0IsR0FBRyxlQUFlLEVBQUUsRUFBRTtFQUN0QixHQUFHLGlCQUFpQixFQUFFLEVBQUU7RUFDeEIsSUFBSSxJQUFJLEVBQUUsMEJBQTBCO0VBQ3BDLElBQUksV0FBVyxFQUFFLG1DQUFtQztFQUNwRCxHQUFHO0VBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtFQUNBLE1BQU0sTUFBTSxHQUFHO0VBQ2YsRUFBRSxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQzNELEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNyRCxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDcEQsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2hELEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNoRCxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0MsRUFBQztBQUNEO0VBQ0EsTUFBTSxLQUFLLEdBQUc7RUFDZCxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztFQUNqQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztFQUNuQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztFQUNqQyxFQUFDO0FBQ0Q7RUFDQSxNQUFNLFdBQVcsR0FBRyxFQUFDO0VBQ3JCLE1BQU0sWUFBWSxHQUFHLEVBQUM7RUFDdEIsTUFBTSxrQkFBa0IsR0FBRyxFQUFDO0FBQzVCO0VBQ0EsTUFBTSxjQUFjLEdBQUc7RUFDdkIsRUFBRSxDQUFDLFNBQVMsSUFBSTtFQUNoQixJQUFJLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7RUFDNUIsSUFBSSxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNO0VBQzlCLElBQUksV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0VBQ25DLElBQUksZUFBZSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0VBQ3ZDLElBQUksU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0VBQ2pDLElBQUksa0JBQWtCLEVBQUUsTUFBTSxDQUFDLFdBQVc7RUFDMUMsSUFBSSxVQUFVLEVBQUUsS0FBSztFQUNyQixJQUFJLFNBQVMsRUFBRSxLQUFLO0VBQ3BCLEdBQUc7RUFDSCxDQUFDLENBQUMsV0FBVyxJQUFJO0VBQ2pCLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSztFQUMzQixJQUFJLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU07RUFDOUIsSUFBSSxXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUs7RUFDN0IsSUFBSSxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUs7RUFDakMsSUFBSSxrQkFBa0IsRUFBRSxNQUFNLENBQUMsV0FBVztFQUMxQyxJQUFJLFVBQVUsRUFBRSxJQUFJO0VBQ3BCLElBQUksU0FBUyxFQUFFLElBQUk7RUFDbkIsR0FBRztFQUNILEVBQUUsQ0FBQywwQkFBMEIsSUFBSTtFQUNqQyxJQUFJLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7RUFDN0IsSUFBSSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO0VBQy9CLElBQUksV0FBVyxFQUFFLE1BQU0sQ0FBQyxLQUFLO0VBQzdCLElBQUksZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0VBQ2hDLElBQUksa0JBQWtCLEVBQUUsTUFBTSxDQUFDLFdBQVc7RUFDMUMsSUFBSSxVQUFVLEVBQUUsSUFBSTtFQUNwQixJQUFJLFNBQVMsRUFBRSxLQUFLO0VBQ3BCLEdBQUc7RUFDSCxFQUFFLENBQUMsdUJBQXVCLEdBQUc7RUFDN0IsSUFBSSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO0VBQzdCLElBQUksTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtFQUMvQixJQUFJLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSTtFQUM1QixJQUFJLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSztFQUNqQyxJQUFJLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxLQUFLO0VBQ3BDLElBQUksVUFBVSxFQUFFLElBQUk7RUFDcEIsSUFBSSxTQUFTLEVBQUUsSUFBSTtFQUNuQixHQUFHO0VBQ0gsRUFBRSxDQUFDLGtCQUFrQixHQUFHO0VBQ3hCLElBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztFQUM3QixJQUFJLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07RUFDL0IsSUFBSSxXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUs7RUFDN0IsSUFBSSxlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUs7RUFDakMsSUFBSSxrQkFBa0IsRUFBRSxNQUFNLENBQUMsS0FBSztFQUNwQyxJQUFJLFVBQVUsRUFBRSxJQUFJO0VBQ3BCLElBQUksU0FBUyxFQUFFLElBQUk7RUFDbkIsR0FBRztFQUNILEVBQUUsQ0FBQyxVQUFVLEdBQUc7RUFDaEIsR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLO0VBQzNCLElBQUksTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTtFQUM5QixJQUFJLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSztFQUNqQyxJQUFJLFVBQVUsRUFBRSxLQUFLO0VBQ3JCLElBQUksU0FBUyxFQUFFLElBQUk7RUFDbkIsR0FBRztFQUNILEVBQUUsQ0FBQyxzQkFBc0IsR0FBRztFQUM1QixHQUFHLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7RUFDM0IsSUFBSSxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNO0VBQzlCLElBQUksZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0VBQ2hDLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLElBQUk7RUFDakMsSUFBSSxVQUFVLEVBQUUsS0FBSztFQUNyQixJQUFJLFNBQVMsRUFBRSxLQUFLO0VBQ3BCLEdBQUc7RUFDSCxFQUFDO0FBQ0Q7RUFDQSxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsS0FBSztFQUN0RSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pFLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7RUFDdkIsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztFQUNyQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0VBQ3ZCLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7RUFDakMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztFQUNuQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztFQUMvQyxFQUFFLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQztFQUMxQixLQUFLLElBQUksQ0FBQyxXQUFXLElBQVMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztFQUMvRDtFQUNBLEVBQUUsSUFBSSxRQUFRLElBQUksVUFBVSxDQUFDO0VBQzdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDO0VBQ2pFLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUM7RUFDekUsSUFBSSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUM7RUFDMUIsS0FBSyxJQUFJLENBQUMsV0FBVyxHQUFHLDBFQUF5RTtFQUNqRyxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssVUFBVSxDQUFDO0VBQ3JDLE1BQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyx3Q0FBdUM7RUFDaEUsS0FBSztFQUNMLEdBQUcsTUFBTSxJQUFJLFFBQVEsS0FBSyxzQkFBc0IsQ0FBQztFQUNqRCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztFQUNsRSxHQUFHO0VBQ0gsRUFBRSxPQUFPLElBQUksQ0FBQztFQUNkLEVBQUM7QUFDRDtFQUNBLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksS0FBSztFQUMvQyxDQUFDLEtBQUssTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFO0VBQ2pDLElBQUksTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DO0VBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDO0VBQ2xDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUN2RCxLQUFLLE1BQU07RUFDWCxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQzNELFFBQVEsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZTtFQUMvQyxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNuRSxRQUFRLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLGlCQUFpQjtFQUNqRCxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQy9FLEtBQUs7RUFDTCxFQUFFO0VBQ0YsRUFBQztBQUNEO0VBQ08sTUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztFQUMzRCxhQUFhLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQzs7RUMxUjNCLE1BQU0sS0FBSyxDQUFDO0VBQ25CLEVBQUUsV0FBVyxHQUFHO0VBQ2hCO0VBQ0EsSUFBSSxNQUFNLEtBQUssR0FBRztFQUNsQixNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3BELE1BQU0sUUFBUSxFQUFFLEdBQUc7RUFDbkIsTUFBTSxTQUFTLEVBQUUsR0FBRztFQUNwQixNQUFNLFNBQVMsRUFBRSxDQUFDO0VBQ2xCLE1BQU0sWUFBWSxFQUFFLENBQUM7RUFDckIsTUFBTSxXQUFXLEVBQUUsQ0FBQztFQUNwQixNQUFNLFVBQVUsRUFBRSxDQUFDO0VBQ25CLE1BQU0sU0FBUyxFQUFFLE1BQU07RUFDdkIsTUFBTSxlQUFlLEVBQUUsU0FBUztFQUNoQyxNQUFNLFlBQVksRUFBRSxPQUFPO0VBQzNCLE1BQU0sV0FBVyxFQUFFLFdBQVc7RUFDOUIsTUFBTSxlQUFlLEVBQUUsYUFBYTtFQUNwQyxNQUFNLElBQUksRUFBRSxLQUFLO0VBQ2pCLE1BQU0sS0FBSyxFQUFFLElBQUk7RUFDakIsTUFBTSxlQUFlLEVBQUUsQ0FBQztFQUN4QixNQUFNLEtBQUssRUFBRSxHQUFHO0VBQ2hCLE1BQU0sUUFBUSxFQUFFLEdBQUc7RUFDbkIsTUFBTSxXQUFXLEVBQUUsQ0FBQztFQUNwQixNQUFNLFdBQVcsRUFBRSxDQUFDO0VBQ3BCLE1BQU0sY0FBYyxFQUFFO0VBQ3RCLFFBQVEsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDO0VBQ2xDLFFBQVEsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO0VBQ3pCLFFBQVEsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO0VBQzFCLFFBQVEsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDO0VBQ2pDLE9BQU87RUFDUCxNQUFNLGVBQWUsRUFBRTtFQUN2QixRQUFRLEdBQUcsRUFBRSxFQUFFO0VBQ2YsUUFBUSxHQUFHLEVBQUUsRUFBRTtFQUNmLFFBQVEsb0JBQW9CLEVBQUUsRUFBRTtFQUNoQyxPQUFPO0VBQ1AsTUFBTSxXQUFXLEVBQUUsSUFBSTtFQUN2QixNQUFNLFVBQVUsRUFBRSxJQUFJO0VBQ3RCLEtBQUssQ0FBQztBQUNOO0VBQ0EsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3JDO0VBQ0E7RUFDQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLO0VBQ3hDO0VBQ0EsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUU7RUFDL0IsUUFBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDM0MsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtFQUMvQixVQUFVLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzFDLFNBQVM7RUFDVCxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNyQixRQUFRLE9BQU8sSUFBSSxDQUFDO0VBQ3BCLE9BQU8sQ0FBQztFQUNSLEtBQUssQ0FBQyxDQUFDO0FBQ1A7RUFDQTtFQUNBLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztFQUN4QyxJQUFJLEdBQUc7RUFDUCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztFQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7RUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztFQUN6QixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDN0IsSUFBSSxHQUFHO0VBQ1AsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7RUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztFQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0VBQ3hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7RUFDekIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztFQUM1QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDaEMsSUFBSSxHQUFHO0VBQ1AsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7RUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztFQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0VBQ3hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7RUFDekIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztFQUM1QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7RUFDL0IsSUFBSSxHQUFHO0VBQ1AsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7RUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztFQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7RUFDMUIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztFQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztFQUM1QyxJQUFJLEdBQUc7RUFDUCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztFQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztFQUN4QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO0VBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0VBQzVDLElBQUksR0FBRztFQUNQLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ3BCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7RUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQ3ZCLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUM7RUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNUM7RUFDQSxJQUFJLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0VBQzVDLEdBQUc7QUFDSDtFQUNBLEVBQUUsZ0NBQWdDLEdBQUc7RUFDckMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxNQUFNLEVBQUU7RUFDMUQsTUFBTSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7RUFDM0IsTUFBTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ3JDLE1BQU0sSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztFQUNsQyxNQUFNLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQztFQUNBO0VBQ0EsTUFBTSxJQUFJLFNBQVMsR0FBRyxTQUFTO0VBQy9CLFNBQVMsU0FBUyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7RUFDbEMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSztFQUM5QixVQUFVLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO0VBQ3JDLFlBQVksSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFO0VBQ3RCLGNBQWMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQzFCLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVSxPQUFPLENBQUMsQ0FBQztFQUNuQixTQUFTLENBQUMsQ0FBQztFQUNYLE1BQU0sU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0VBQ2hDLE1BQU0sU0FBUyxHQUFHLFNBQVM7RUFDM0IsU0FBUyxLQUFLLEVBQUU7RUFDaEIsU0FBUyxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQzNCLFNBQVMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQzFCLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7RUFDeEMsTUFBTSxPQUFPLFNBQVMsQ0FBQztFQUN2QixLQUFLLENBQUM7RUFDTixHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsa0JBQWtCO0VBQ3BCLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtFQUNqQyxJQUFJLFlBQVk7RUFDaEIsSUFBSTtFQUNKO0VBQ0EsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQztFQUNBO0VBQ0EsSUFBSSxJQUFJLFFBQVEsRUFBRTtFQUNsQixNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUs7RUFDOUIsUUFBUSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0VBQ2pELE9BQU8sQ0FBQyxDQUFDO0VBQ1QsS0FBSztBQUNMO0VBQ0E7RUFDQSxJQUFJLElBQUksU0FBUyxFQUFFO0VBQ25CLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztFQUMvQixRQUFRLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7RUFDakQsT0FBTyxDQUFDLENBQUM7RUFDVCxLQUFLO0FBQ0w7RUFDQTtFQUNBLElBQUksT0FBTyxZQUFZLENBQUM7RUFDeEIsR0FBRztBQUNIO0VBQ0E7RUFDQSxFQUFFLGFBQWEsQ0FBQyxTQUFTLEVBQUU7RUFDM0IsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7RUFDdkMsSUFBSSxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzVCO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0FBQ2xDO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtFQUN0QixNQUFNLFdBQVc7RUFDakIsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDbkMsUUFBUSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUM7QUFDOUIsT0FBTyxRQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7RUFDckMsS0FBSyxDQUFDO0VBQ04sR0FBRztBQUNIO0VBQ0EsRUFBRSxNQUFNLEdBQUc7RUFDWDtBQUNBO0VBQ0EsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFdkM7RUFDQTtFQUNBLElBQUksTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDakQsSUFBSSxNQUFNLGFBQWEsR0FBRyxTQUFTO0VBQ25DLE9BQU8sSUFBSSxFQUFFO0VBQ2IsT0FBTyxxQkFBcUIsRUFBRSxDQUFDO0VBQy9CLElBQUksSUFBSSxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUM7RUFDL0IsTUFBTSxLQUFLLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDM0M7RUFDQTtFQUNBLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQztFQUNBO0VBQ0EsSUFBSSxNQUFNLElBQUksR0FBRztFQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJO0VBQ2QsTUFBTSxjQUFjLEVBQUUsSUFBSTtFQUMxQixNQUFNLGVBQWUsRUFBRSxJQUFJO0VBQzNCLE1BQU0sVUFBVSxFQUFFLElBQUk7RUFDdEIsTUFBTSxXQUFXLEVBQUUsSUFBSTtFQUN2QixLQUFLLENBQUM7RUFDTixJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3pELElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0VBQzVDLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0VBQzFDLElBQUksSUFBSSxDQUFDLFVBQVU7RUFDbkIsTUFBTSxLQUFLLENBQUMsUUFBUTtFQUNwQixNQUFNLEtBQUssQ0FBQyxXQUFXO0VBQ3ZCLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQztFQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXO0VBQ3BCLE1BQU0sS0FBSyxDQUFDLFNBQVM7RUFDckIsTUFBTSxLQUFLLENBQUMsWUFBWTtFQUN4QixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUM7RUFDMUIsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN0QjtFQUNBO0VBQ0EsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0VBQzlCLE1BQU0sS0FBSyxDQUFDLElBQUk7RUFDaEIsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssS0FBSztFQUMxQixLQUFLLENBQUM7RUFDTixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEdBQUc7RUFDL0IsTUFBTSxLQUFLLENBQUMsSUFBSTtFQUNoQixNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxNQUFNO0VBQzVCLEtBQUssQ0FBQztBQUNOO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7RUFDM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDO0VBQ0E7RUFDQSxJQUFJLE1BQU0sT0FBTyxHQUFHO0VBQ3BCLE1BQU0sT0FBTyxFQUFFLElBQUk7RUFDbkIsS0FBSyxDQUFDO0VBQ04sSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUM1QjtFQUNBO0VBQ0EsSUFBSSxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUU7RUFDeEIsT0FBTyxJQUFJLEVBQUU7RUFDYixPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBQ2hELE9BQU8sUUFBUSxDQUFDO0VBQ2hCLFFBQVEsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHO0VBQy9CLFFBQVEsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSztFQUN4QyxPQUFPLENBQUMsQ0FBQztBQUNUO0VBQ0E7RUFDQSxJQUFJLE1BQU0sU0FBUyxHQUFHO0VBQ3RCLE1BQU0sSUFBSSxFQUFFLElBQUk7RUFDaEIsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFO0VBQ3ZCLE9BQU8sSUFBSSxFQUFFO0VBQ2IsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QztFQUNBO0FBQ0E7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFO0VBQ25CLE9BQU8sUUFBUSxFQUFFO0VBQ2pCLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxNQUFNLENBQUM7RUFDakMsT0FBTyxRQUFRLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN4RCxNQUFNLEtBQUssQ0FBQyxJQUFJO0VBQ2hCLEtBQUssQ0FBQztBQUNOO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QjtFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTztFQUNsQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0VBQzFCLE9BQU8sV0FBVyxFQUFFLENBQUM7QUFDckI7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RDtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2xDLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDN0IsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBO0VBQ0EsSUFBSSxNQUFNLEdBQUcsR0FBRyxTQUFTO0VBQ3pCLE9BQU8sVUFBVSxDQUFDO0VBQ2xCLFFBQVEsR0FBRyxFQUFFLEtBQUs7RUFDbEIsUUFBUSxRQUFRLEVBQUUscUJBQXFCO0VBQ3ZDLE9BQU8sQ0FBQztFQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDO0VBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDO0VBQzdDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7RUFDM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztFQUM3QixPQUFPLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7RUFDeEQsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwQjtFQUNBO0VBQ0EsSUFBSSxNQUFNLEtBQUssR0FBRyxHQUFHO0VBQ3JCLE9BQU8sVUFBVSxDQUFDO0VBQ2xCLFFBQVEsR0FBRyxFQUFFLEdBQUc7RUFDaEIsUUFBUSxRQUFRLEVBQUUsT0FBTztFQUN6QixPQUFPLENBQUM7RUFDUixPQUFPLElBQUk7RUFDWCxRQUFRLFdBQVc7RUFDbkIsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztFQUNuRSxPQUFPLENBQUM7QUFDUjtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUs7RUFDekIsT0FBTyxVQUFVLENBQUM7RUFDbEIsUUFBUSxHQUFHLEVBQUUsR0FBRztFQUNoQixRQUFRLFFBQVEsRUFBRSxjQUFjO0VBQ2hDLE9BQU8sQ0FBQztFQUNSLE9BQU8sSUFBSTtFQUNYLFFBQVEsV0FBVztFQUNuQixRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxVQUFVLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztBQUNoQyxTQUFTLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUN2QyxPQUFPLENBQUM7QUFDUjtFQUNBLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDeEI7RUFDQTtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUU7RUFDekIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3JCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztFQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0VBQy9CLE9BQU8sS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUMzQjtFQUNBO0FBQ0E7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ2hDLE1BQU0sR0FBRyxFQUFFLE1BQU07RUFDakIsTUFBTSxRQUFRLEVBQUUsWUFBWTtFQUM1QixLQUFLLENBQUMsQ0FBQztBQUNQO0VBQ0E7RUFDQSxJQUFJLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDdEMsTUFBTSxHQUFHLEVBQUUsTUFBTTtFQUNqQixNQUFNLFFBQVEsRUFBRSxhQUFhO0VBQzdCLEtBQUssQ0FBQyxDQUFDO0FBQ1A7RUFDQTtFQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUI7RUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDO0VBQ2hCLEdBQUc7QUFDSDtFQUNBO0VBQ0EsRUFBRSxlQUFlLENBQUMsQ0FBQyxFQUFFO0VBQ3JCO0VBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsT0FBTztBQUMvQjtFQUNBO0VBQ0EsSUFBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuQztFQUNBO0VBQ0E7RUFDQSxJQUFJLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO0VBQ25DO0VBQ0EsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQzVCLEtBQUs7QUFDTDtFQUNBO0VBQ0EsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtFQUNyQixNQUFNLFlBQVksRUFBRSxFQUFFO0VBQ3RCLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRztBQUNIO0VBQ0E7RUFDQSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQzNCLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0VBQ3ZDLElBQUksTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUM1QjtFQUNBO0VBQ0EsSUFBSSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkQ7RUFDQTtFQUNBLElBQUksTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztFQUNwRDtFQUNBLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVCO0VBQ0E7RUFDQSxNQUFNLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQztFQUNwQyxNQUFNLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQztFQUN4QyxNQUFNLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQztFQUM5QixNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQy9CLE1BQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDakMsR0FBRyxJQUFJLFdBQVcsSUFBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztFQUM5QztFQUNBLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtFQUM5QixRQUFRLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYztFQUN6QyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztFQUM1QixTQUFTLENBQUM7RUFDVixPQUFPO0VBQ1AsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO0VBQ2xDLFFBQVEsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjO0VBQzdDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO0VBQ2hDLFNBQVMsQ0FBQztFQUNWLE9BQU87RUFDUCxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7RUFDNUIsUUFBUSxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQzFELE9BQU87QUFDUDtFQUNBO0VBQ0EsTUFBTSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO0VBQzlCLFFBQVEsV0FBVztFQUNuQixRQUFRLGVBQWU7RUFDdkIsUUFBUSxTQUFTO0VBQ2pCLFFBQVEsS0FBSztFQUNiLFFBQVEsTUFBTTtFQUNkLFFBQVEsV0FBVztFQUNuQixPQUFPLENBQUMsQ0FBQztFQUNULEtBQUssQ0FBQyxDQUFDO0FBQ1A7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDeEI7RUFDQTtFQUNBLElBQUksTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRDtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4RDtFQUNBO0VBQ0E7RUFDQSxJQUFJLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPO0VBQ3ZDLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQztFQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ25DO0VBQ0E7RUFDQSxJQUFJLE1BQU0sU0FBUyxHQUFHLGFBQWE7RUFDbkMsT0FBTyxLQUFLLEVBQUU7RUFDZCxPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0VBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7RUFDNUIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLO0VBQ3hCLFFBQVEsTUFBTSxDQUFDLEdBQUc7RUFDbEIsVUFBVSxDQUFDLEVBQUUsRUFBRTtFQUNmLFVBQVUsQ0FBQyxFQUFFLEVBQUU7RUFDZixTQUFTLENBQUM7RUFDVixRQUFRLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JDLE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7RUFDQTtFQUNBLElBQUksTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0RDtFQUNBO0VBQ0EsSUFBSSxVQUFVO0VBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztFQUMzQixPQUFPLElBQUk7RUFDWCxRQUFRLGNBQWM7RUFDdEIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUM7RUFDbEQsT0FBTztFQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUs7RUFDcEMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtFQUNyQyxVQUFVLE9BQU8sSUFBSSxDQUFDLGNBQWM7RUFDcEMsWUFBWSxJQUFJLENBQUMsa0JBQWtCO0VBQ25DLFdBQVcsQ0FBQztFQUNaLFNBQVM7RUFDVCxRQUFRLE9BQU8sT0FBTyxDQUFDO0VBQ3ZCLE9BQU8sQ0FBQztFQUNSLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSztFQUM5QyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtFQUM1QixVQUFVLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztFQUNoQyxTQUFTO0VBQ1QsUUFBUSxPQUFPLEVBQUUsQ0FBQztFQUNsQixPQUFPLENBQUMsQ0FBQztBQUNUO0VBQ0E7RUFDQSxJQUFJLFVBQVU7RUFDZCxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSztFQUN4QixRQUFRLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUc7RUFDaEQsVUFBVSxDQUFDLFlBQVk7RUFDdkIsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDO0VBQzFELFNBQVMsQ0FBQztFQUNWLFFBQVEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztFQUN6QyxPQUFPLENBQUMsQ0FBQztBQUNUO0VBQ0E7RUFDQSxJQUFJLE1BQU0sUUFBUSxHQUFHLGFBQWE7RUFDbEMsT0FBTyxJQUFJLEVBQUU7RUFDYixPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSztFQUN4QixRQUFRLE1BQU0sQ0FBQyxHQUFHO0VBQ2xCLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztFQUN0QixVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7RUFDdEIsU0FBUyxDQUFDO0VBQ1YsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDekMsUUFBUSxPQUFPLElBQUksQ0FBQztFQUNwQixPQUFPLENBQUM7RUFDUixPQUFPLE1BQU0sRUFBRSxDQUFDO0FBQ2hCO0VBQ0E7QUFDQTtBQUNBO0VBQ0E7RUFDQSxJQUFJLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPO0VBQ3hDLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQztFQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ25DO0VBQ0EsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7RUFDbEI7RUFDQSxJQUFJLE1BQU0sU0FBUyxHQUFHLGNBQWM7RUFDcEMsT0FBTyxLQUFLLEVBQUU7RUFDZCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7RUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDekQsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztFQUNoQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLO0VBQ2pDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0VBQzVCLFVBQVU7RUFDVixZQUFZLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN4RCxZQUFZO0VBQ1osWUFBWSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsZUFBZTtFQUMvQyxjQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQ25DLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ25DLFlBQVksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDNUIsY0FBYyxLQUFLLENBQUMsZUFBZTtFQUNuQyxnQkFBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7RUFDckMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDakMsY0FBYyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztFQUNuQyxhQUFhLE1BQU07RUFDbkIsY0FBYyxLQUFLLENBQUMsZUFBZTtFQUNuQyxnQkFBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7RUFDckMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDbEMsY0FBYyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztFQUNwQyxhQUFhO0VBQ2IsV0FBVyxNQUFNO0VBQ2pCLFlBQVksS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZELFlBQVk7RUFDWixZQUFZLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjO0VBQzlDLGNBQWMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7RUFDbkMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDbkMsWUFBWSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtFQUM1QixjQUFjLEtBQUssQ0FBQyxjQUFjO0VBQ2xDLGdCQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztFQUNyQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNqQyxjQUFjLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0VBQ25DLGNBQWM7RUFDZCxnQkFBZ0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNELG1CQUFtQixNQUFNLElBQUksQ0FBQztFQUM5QixnQkFBZ0I7RUFDaEI7RUFDQSxnQkFBZ0IsS0FBSyxDQUFDLGNBQWM7RUFDcEMsa0JBQWtCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNoQyxlQUFlO0VBQ2YsYUFBYSxNQUFNO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNELG1CQUFtQixNQUFNLElBQUksQ0FBQztFQUM5QixnQkFBZ0IsS0FBSyxDQUFDLGNBQWM7RUFDcEMsa0JBQWtCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQ3ZDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU87RUFDL0IsZ0JBQWdCO0VBQ2hCO0VBQ0EsZ0JBQWdCLEtBQUssQ0FBQyxjQUFjO0VBQ3BDLGtCQUFrQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztFQUN2QyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUN4QixlQUFlO0VBQ2YsY0FBYyxLQUFLLENBQUMsY0FBYztFQUNsQyxnQkFBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7RUFDckMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDbEMsY0FBYyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUNwQztFQUNBLGNBQWMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQzVCLGNBQWMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO0VBQ3ZELGdCQUFnQixLQUFLLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7RUFDM0QsZUFBZTtFQUNmLGNBQWMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO0VBQzlCLGdCQUFnQixLQUFLO0VBQ3JCLGtCQUFrQix3R0FBd0c7RUFDMUgsaUJBQWlCLENBQUM7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXLE1BQU07RUFDakIsWUFBWSxJQUFJLENBQUMsV0FBVztFQUM1QixjQUFjLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDN0MsV0FBVztFQUNYLFNBQVM7QUFDVDtFQUNBLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0VBQzdCLFVBQVUsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUk7RUFDdEMsWUFBWSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNO0VBQzdDLFdBQVcsQ0FBQztFQUNaLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUN4QyxTQUFTO0FBQ1Q7RUFDQSxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDeEIsT0FBTyxDQUFDO0VBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLO0VBQzlCO0VBQ0E7RUFDQSxRQUFRLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtFQUMzQixVQUFVLEtBQUssQ0FBQyxVQUFVO0VBQzFCLGFBQWEsVUFBVSxFQUFFO0VBQ3pCLGFBQWEsUUFBUSxDQUFDLEdBQUcsQ0FBQztFQUMxQixhQUFhLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDbkMsVUFBVSxLQUFLLENBQUMsVUFBVTtFQUMxQixhQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDakMsU0FBUztFQUNULE9BQU8sQ0FBQztFQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNO0VBQzVCLFFBQVEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4RSxPQUFPLENBQUMsQ0FBQztBQUNUO0VBQ0E7RUFDQSxJQUFJLFNBQVM7RUFDYixPQUFPLFVBQVUsQ0FBQztFQUNsQixRQUFRLEdBQUcsRUFBRSxNQUFNO0VBQ25CLFFBQVEsUUFBUSxFQUFFLFdBQVc7RUFDN0IsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDeEIsT0FBTyxDQUFDO0VBQ1IsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7RUFDbkMsUUFBUSxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsTUFBTTtFQUM3QyxPQUFPLENBQUM7QUFDUjtFQUNBO0VBQ0EsSUFBSSxNQUFNLFVBQVUsR0FBRyxTQUFTO0VBQ2hDLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQztFQUM1QixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUN4QztFQUNBO0VBQ0EsSUFBSSxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO0VBQ3JDLE1BQU0sR0FBRyxFQUFFLGVBQWU7RUFDMUIsTUFBTSxRQUFRLEVBQUUscUJBQXFCO0VBQ3JDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ3RCLEtBQUssQ0FBQyxDQUFDO0FBQ1A7RUFDQTtFQUNBLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztFQUNsQixNQUFNLEdBQUcsRUFBRSxXQUFXO0VBQ3RCLE1BQU0sUUFBUSxFQUFFLHlCQUF5QjtFQUN6QyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN0QixLQUFLLENBQUMsQ0FBQztBQUNQO0VBQ0EsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztBQUN4QztFQUNBO0VBQ0EsSUFBSSxVQUFVO0VBQ2QsT0FBTyxVQUFVLEVBQUU7RUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztFQUN6QixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQy9CLE9BQU8sSUFBSTtFQUNYLFFBQVEsV0FBVztFQUNuQixRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzVDLE9BQU87RUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUI7RUFDQTtFQUNBLElBQUksVUFBVTtFQUNkLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztFQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDOUMsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ2hELE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztFQUMvQyxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDaEQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztFQUN2RCxPQUFPLElBQUk7RUFDWCxRQUFRLGNBQWM7RUFDdEIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVztFQUMzRCxPQUFPO0VBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztFQUNoQyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLFdBQVcsQ0FBQztFQUN2RCxPQUFPLEtBQUs7RUFDWixRQUFRLE1BQU07RUFDZCxRQUFRLENBQUMsRUFBRSxlQUFlLEVBQUUsS0FBSyxlQUFlO0VBQ2hELE9BQU8sQ0FBQztBQUNSO0VBQ0E7RUFDQSxJQUFJLE1BQU0sa0JBQWtCLEdBQUcsY0FBYztFQUM3QyxPQUFPLElBQUksRUFBRTtFQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7RUFDekIsT0FBTyxVQUFVLEVBQUU7RUFDbkIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztFQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkQsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQVk7RUFDN0IsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0VBQ2pDLE9BQU8sQ0FBQztFQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQjtFQUNBO0VBQ0EsSUFBSSxrQkFBa0I7RUFDdEIsT0FBTyxTQUFTLENBQUMsWUFBWSxDQUFDO0VBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7RUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztFQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQjtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLO0VBQ3pCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pCLEtBQUssQ0FBQyxDQUFDO0VBQ1AsR0FBRztBQUNIO0VBQ0E7RUFDQSxFQUFFLE1BQU0sR0FBRztFQUNYLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDdkQsR0FBRztBQUNIO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsRUFBRSxjQUFjLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtFQUM5QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BELEdBQUc7QUFDSDtFQUNBO0VBQ0EsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRTtFQUN2QixJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7RUFDdEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztFQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7RUFDbEMsSUFBSSxJQUFJLGdCQUFnQjtFQUN4QixNQUFNLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7RUFDMUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtFQUM3QixNQUFNLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QjtFQUNBO0VBQ0EsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNsQixNQUFNLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkIsTUFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25CLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3JDLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDcEIsTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7RUFDcEIsTUFBTSxJQUFJLFFBQVE7RUFDbEIsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSTtFQUNuQyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7RUFDaEMsWUFBWSxJQUFJLENBQUM7RUFDakIsTUFBTSxJQUFJLENBQUM7RUFDWCxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRO0VBQ3ZDLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztFQUNoQyxZQUFZLFFBQVEsQ0FBQztFQUNyQixNQUFNLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLENBQUMsQ0FBQztFQUN0RCxNQUFNLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkM7RUFDQSxNQUFNLElBQUksSUFBSSxHQUFHLENBQUM7QUFDbEIsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ25DLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUk7QUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDbEQsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMxQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQy9CLE9BQU87QUFDUCxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0RCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQy9CLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDOUIsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQzFCLFdBQVcsQ0FBQyxDQUFDO0VBQ2IsTUFBTSxLQUFLO0VBQ1gsU0FBUyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3ZCLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7RUFDeEIsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0VBQzlCLEtBQUs7QUFDTDtFQUNBLElBQUksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0VBQ3ZCLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtFQUM3QyxNQUFNLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ25DLFFBQVEsU0FBUyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQy9DLEtBQUssQ0FBQyxDQUFDO0VBQ1AsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7RUFDbkIsSUFBSSxPQUFPLFNBQVMsQ0FBQztFQUNyQixHQUFHO0FBQ0g7RUFDQSxFQUFFLDRCQUE0QixHQUFHO0VBQ2pDLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3ZDO0VBQ0EsSUFBSSxLQUFLLENBQUMsR0FBRztFQUNiLE9BQU8sU0FBUyxDQUFDLHNCQUFzQixDQUFDO0VBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssS0FBSyxDQUFDO0VBQzFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssTUFBTSxDQUFDO0VBQzdDLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQzNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDOUMsSUFBSSxLQUFLLENBQUMsR0FBRztFQUNiLE9BQU8sU0FBUyxDQUFDLDBCQUEwQixDQUFDO0VBQzVDLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNsRCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDckQsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7RUFDcEMsUUFBUSxTQUFTLEdBQUcsU0FBUyxHQUFHLE9BQU87RUFDdkMsT0FBTztFQUNQLE9BQU8sS0FBSyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7RUFDcEMsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztFQUNsQyxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO0VBQ2pDLE9BQU8sSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDdkMsR0FBRztBQUNIO0VBQ0E7RUFDQSxFQUFFLGFBQWEsQ0FBQyxDQUFDLEVBQUU7RUFDbkI7RUFDQSxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtFQUNwQixNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxhQUFhLEVBQUU7RUFDbEMsUUFBUSxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyRCxRQUFRLElBQUksZUFBZSxDQUFDLFFBQVEsRUFBRTtFQUN0QyxVQUFVLE9BQU87RUFDakIsU0FBUztFQUNULE9BQU87RUFDUDtFQUNBLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0VBQy9CLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDeEI7RUFDQTtFQUNBLE1BQU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNoRCxLQUFLLE1BQU07RUFDWCxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxjQUFjLEVBQUU7RUFDbkMsUUFBUSxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRDtFQUNBLFFBQVEsSUFBSSxlQUFlLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtFQUM5QyxVQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7RUFDOUMsU0FBUztFQUNULE9BQU87QUFDUDtFQUNBO0VBQ0EsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7RUFDL0IsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztFQUN6QjtFQUNBLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUTtFQUNqQixRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTztFQUMxQixVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztFQUM5QyxTQUFTLENBQUM7RUFDVixLQUFLO0FBQ0w7RUFDQTtFQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuQixHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsMEJBQTBCO0VBQzVCLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtFQUNqQyxJQUFJLElBQUk7RUFDUixJQUFJO0VBQ0o7RUFDQSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3pCO0VBQ0E7RUFDQSxJQUFJLElBQUksUUFBUSxFQUFFO0VBQ2xCLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztFQUM5QixRQUFRLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDakQsT0FBTyxDQUFDLENBQUM7RUFDVCxLQUFLO0FBQ0w7RUFDQTtFQUNBLElBQUksSUFBSSxTQUFTLEVBQUU7RUFDbkIsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLO0VBQy9CLFFBQVEsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUNqRCxPQUFPLENBQUMsQ0FBQztFQUNULEtBQUs7RUFDTCxHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUU7RUFDaEMsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7RUFDdkM7RUFDQSxJQUFJLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTtFQUN0QyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUU7RUFDckMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1Q7RUFDQTtFQUNBLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO0FBQ2hEO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQ7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RDtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2xDLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDN0IsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUIsR0FBRztBQUNIO0VBQ0E7RUFDQSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEVBQUU7RUFDckI7RUFDQSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7RUFDekI7RUFDQSxNQUFNLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDNUI7RUFDQTtFQUNBLE1BQU0sT0FBTyxNQUFNLEVBQUU7RUFDckI7RUFDQSxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtFQUM5QixVQUFVLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUM3QyxTQUFTO0FBQ1Q7RUFDQTtFQUNBLFFBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDL0IsT0FBTztFQUNQLEtBQUs7QUFDTDtFQUNBO0VBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7RUFDckIsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDNUQsS0FBSztBQUNMO0VBQ0E7RUFDQSxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtFQUNwQixNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUMzRCxLQUFLO0VBQ0wsR0FBRztBQUNIO0VBQ0E7RUFDQSxFQUFFLGdCQUFnQixHQUFHO0VBQ3JCLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0VBQ3ZDO0VBQ0EsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUU7RUFDbkIsT0FBTyxRQUFRLEVBQUU7RUFDakIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLE1BQU0sQ0FBQztFQUNqQyxPQUFPLFFBQVEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3hELE1BQU0sS0FBSyxDQUFDLElBQUk7RUFDaEIsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ3RCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU87RUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztFQUMxQixPQUFPLFdBQVcsRUFBRSxDQUFDO0FBQ3JCO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLO0VBQ2xDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0VBQzVCLFFBQVEsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLFFBQVE7RUFDdEMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU07RUFDN0IsWUFBWSxDQUFDO0VBQ2IsUUFBUSxpQkFBaUIsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUM7RUFDckQsT0FBTyxDQUFDLENBQUM7RUFDVCxLQUFLLENBQUMsQ0FBQztBQUNQO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0M7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RDtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO0VBQ25DLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7RUFDOUIsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUIsR0FBRztBQUNIO0VBQ0E7RUFDQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7RUFDZCxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtFQUNwQixNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztFQUMvQixNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNyRCxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0VBQ3hCLEtBQUs7RUFDTCxHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRTtFQUNaLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO0VBQ3JCLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0VBQy9CLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2xELE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7RUFDekIsS0FBSztFQUNMLEdBQUc7QUFDSDtFQUNBO0VBQ0EsRUFBRSxNQUFNLEdBQUc7RUFDWCxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztFQUN2QyxJQUFJLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDOUI7RUFDQTtFQUNBLElBQUksTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDekM7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFDcEM7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdkM7RUFDQTtFQUNBLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7RUFDdkIsTUFBTSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztFQUMxQyxLQUFLO0VBQ0wsR0FBRztFQUNIOztFQ2orQk8sTUFBTSxRQUFRLENBQUM7RUFDdEIsRUFBRSxXQUFXLEdBQUc7RUFDaEI7RUFDQSxJQUFJLE1BQU0sS0FBSyxHQUFHO0VBQ2xCLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDcEQsTUFBTSxRQUFRLEVBQUUsSUFBSTtFQUNwQixNQUFNLFNBQVMsRUFBRSxJQUFJO0VBQ3JCLE1BQU0sU0FBUyxFQUFFLE1BQU07RUFDdkIsTUFBTSxJQUFJLEVBQUUsSUFBSTtFQUNoQixNQUFNLGtCQUFrQixFQUFFLEVBQUU7RUFDNUIsTUFBTSxZQUFZLEVBQUUsRUFBRTtFQUN0QixNQUFNLGFBQWEsRUFBRSxNQUFNO0VBQzNCLE1BQU0sY0FBYyxFQUFFLElBQUk7RUFDMUIsTUFBTSxPQUFPLEVBQUUsRUFBRTtFQUNqQixNQUFNLFlBQVksRUFBRSxJQUFJO0VBQ3hCLE1BQU0sTUFBTSxFQUFFLElBQUk7RUFDbEIsTUFBTSxNQUFNLEVBQUU7RUFDZCxRQUFRLElBQUksRUFBRSxTQUFTO0VBQ3ZCLFFBQVEsTUFBTSxFQUFFLFNBQVM7RUFDekIsUUFBUSxhQUFhLEVBQUUsU0FBUztFQUNoQyxRQUFRLFFBQVEsRUFBRSxTQUFTO0VBQzNCLFFBQVEsTUFBTSxFQUFFLFNBQVM7RUFDekIsUUFBUSxPQUFPLEVBQUUsU0FBUztFQUMxQixRQUFRLE9BQU8sRUFBRSxTQUFTO0VBQzFCLFFBQVEsT0FBTyxFQUFFLFNBQVM7RUFDMUIsUUFBUSxPQUFPLEVBQUUsU0FBUztFQUMxQixRQUFRLE9BQU8sRUFBRSxTQUFTO0VBQzFCLFFBQVEsT0FBTyxFQUFFLFNBQVM7RUFDMUIsUUFBUSxLQUFLLEVBQUUsU0FBUztFQUN4QixRQUFRLENBQUMsRUFBRSxTQUFTO0VBQ3BCLE9BQU87RUFDUCxNQUFNLGdCQUFnQixFQUFFLEVBQUU7RUFDMUIsTUFBTSxrQkFBa0IsRUFBRSxFQUFFO0VBQzVCLE1BQU0sVUFBVSxFQUFFLElBQUk7RUFDdEIsTUFBTSxjQUFjLEVBQUUsTUFBTTtFQUM1QixNQUFNLGdCQUFnQixFQUFFLEVBQUU7RUFDMUIsTUFBTSxXQUFXLEVBQUUsS0FBSztFQUN4QixNQUFNLFdBQVcsRUFBRSxHQUFHO0VBQ3RCLEtBQUssQ0FBQztBQUNOO0VBQ0E7RUFDQSxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDckM7RUFDQTtFQUNBLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUs7RUFDeEM7RUFDQSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRTtFQUMvQixRQUFRLElBQUksTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUMzQyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO0VBQy9CLFVBQVUsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDMUMsU0FBUztFQUNULFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3JCLFFBQVEsT0FBTyxJQUFJLENBQUM7RUFDcEIsT0FBTyxDQUFDO0VBQ1IsS0FBSyxDQUFDLENBQUM7RUFDUCxHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsU0FBUyxHQUFHO0VBQ2QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztFQUNyRCxHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsU0FBUyxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUU7RUFDN0MsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckM7RUFDQTtFQUNBLElBQUksTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUM7RUFDM0IsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDcEIsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNyRCxPQUFPLENBQUM7RUFDUixJQUFJLElBQUksTUFBTSxHQUFHLFNBQVM7RUFDMUIsTUFBTSxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQ3JDLE1BQU0sY0FBYyxDQUFDLE1BQU07RUFDM0IsTUFBTSxjQUFjLENBQUMsT0FBTztFQUM1QixNQUFNLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDcEMsS0FBSyxDQUFDO0FBQ047RUFDQSxJQUFJLE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEtBQUs7RUFDdkQsTUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7RUFDN0IsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLGVBQWUsRUFBRTtFQUMxQyxRQUFRLElBQUksSUFBSSxLQUFLLGFBQWEsRUFBRTtFQUNwQyxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDOUIsU0FBUyxNQUFNO0VBQ2YsVUFBVSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzVCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsTUFBTSxPQUFPLEtBQUssQ0FBQztFQUNuQixLQUFLLENBQUM7QUFDTjtFQUNBO0FBQ0E7RUFDQSxJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztFQUNwQixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO0VBQzlCLE1BQU0sSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0VBQ2pDLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUN2QixNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksZUFBZSxFQUFFO0VBQ3hDLFFBQVEsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxTQUFTO0VBQ3hELFFBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUMvQixRQUFRLEtBQUssSUFBSSxLQUFLLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO0VBQ2pELFVBQVUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVM7RUFDOUMsWUFBWSxLQUFLO0VBQ2pCLFlBQVksSUFBSTtFQUNoQixZQUFZLEtBQUs7RUFDakIsV0FBVyxDQUFDO0VBQ1osU0FBUztFQUNULE9BQU87RUFDUCxLQUFLO0VBQ0wsSUFBSSxPQUFPLE1BQU0sQ0FBQztFQUNsQixHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUU7RUFDM0MsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckM7RUFDQSxJQUFJLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzlCO0VBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztFQUNoRCxJQUFJLElBQUksUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzNDLElBQUksSUFBSSxXQUFXLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUNuQztFQUNBLElBQUksSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDO0VBQ3pCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0VBQ2YsSUFBSSxJQUFJLGFBQWE7RUFDckIsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztFQUNsRCxJQUFJLE9BQU87RUFDWCxNQUFNLFFBQVEsRUFBRSxRQUFRO0VBQ3hCLE1BQU0sV0FBVyxFQUFFLFdBQVc7RUFDOUIsTUFBTSxhQUFhLEVBQUUsYUFBYTtFQUNsQyxLQUFLLENBQUM7RUFDTixHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDcEM7RUFDQSxJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDdEIsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztFQUMzQyxJQUFJLElBQUksV0FBVyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDdEM7RUFDQTtFQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUN4QyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ3ZDLElBQUksT0FBTyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFBRTtFQUNwQyxNQUFNLE1BQU0sRUFBRSxDQUFDO0VBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7RUFDckMsS0FBSztFQUNMLElBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNoQztFQUNBO0VBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBQ3hDLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7RUFDdkMsSUFBSSxPQUFPLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxFQUFFO0VBQ3BDLE1BQU0sTUFBTSxFQUFFLENBQUM7RUFDZixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztFQUNyQyxLQUFLO0VBQ0wsSUFBSSxJQUFJLFVBQVUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ2hDO0VBQ0E7RUFDQSxJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUM7RUFDaEMsSUFBSSxJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUU7RUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDO0VBQ3JCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQztFQUNyQixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7RUFDN0IsS0FBSyxNQUFNO0VBQ1gsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDO0VBQ3JCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQztFQUNyQixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7RUFDN0IsS0FBSztBQUNMO0VBQ0EsSUFBSSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztFQUN6RCxHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO0VBQ25CLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0VBQ3JDLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2xCO0VBQ0E7RUFDQSxJQUFJLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQztFQUNBLElBQUksS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hDO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0VBQ3BELE1BQU0sSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QztFQUNBLE1BQU0sTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ25CO0VBQ0EsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDekMsTUFBTSxPQUFPLEdBQUcsQ0FBQztFQUNqQixLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWDtFQUNBO0VBQ0EsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QztFQUNBO0VBQ0EsSUFBSSxNQUFNLGFBQWEsR0FBRyxNQUFNO0VBQ2hDLE1BQU0sS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7RUFDN0MsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUM5QixLQUFLLENBQUM7RUFDTixJQUFJLFFBQVEsQ0FBQyxjQUFjO0VBQzNCLE1BQU0sZ0JBQWdCO0VBQ3RCLEtBQUssQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0FBQzlCO0VBQ0EsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztFQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDO0VBQ2hCLEdBQUc7QUFDSDtFQUNBO0VBQ0EsRUFBRSxhQUFhLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRTtFQUNqRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQztFQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7RUFDL0IsTUFBTSxjQUFjO0VBQ3BCLE1BQU0sZUFBZTtFQUNyQixLQUFLLENBQUM7QUFDTjtFQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUN4QixHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRTtFQUNqQixJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztFQUNyQyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNsQjtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMxQjtFQUNBO0VBQ0EsSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtFQUNsQyxNQUFNLE1BQU0sSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDeEQsTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDNUQsS0FBSyxNQUFNO0VBQ1gsTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU87RUFDcEQsUUFBUSxLQUFLLENBQUMsWUFBWSxDQUFDO0VBQzNCLEtBQUs7QUFDTDtFQUNBO0VBQ0EsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDckI7RUFDQTtFQUNBLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7RUFDNUIsTUFBTSxRQUFRLENBQUMsY0FBYztFQUM3QixRQUFRLGdCQUFnQjtFQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7RUFDeEMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ2xDO0VBQ0EsTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsUUFBUTtFQUN4RCxRQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztFQUN6QyxLQUFLLE1BQU07RUFDWCxNQUFNLFFBQVEsQ0FBQyxjQUFjO0VBQzdCLFFBQVEsZ0JBQWdCO0VBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztFQUN0QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDakMsS0FBSztFQUNMLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUM5QixHQUFHO0FBQ0g7RUFDQTtFQUNBLEVBQUUsY0FBYyxDQUFDLE1BQU0sRUFBRTtFQUN6QixJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztFQUNyQyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNsQjtFQUNBO0VBQ0EsSUFBSSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUNqRCxJQUFJLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6RCxPQUFPLE1BQU0sQ0FBQztFQUNkLElBQUksTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7RUFDeEQsSUFBSSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO0VBQ2pELElBQUksTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztFQUM1QyxJQUFJLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDO0FBQ2hEO0VBQ0EsSUFBSSxNQUFNLFNBQVMsR0FBRyxFQUFFO0VBQ3hCLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQztFQUMxQixPQUFPLElBQUksRUFBRTtFQUNiLE9BQU8scUJBQXFCLEVBQUUsQ0FBQztFQUMvQixJQUFJLE1BQU0sZUFBZSxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztFQUM5QyxJQUFJLE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUM1QztFQUNBLElBQUksTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDO0VBQ25DLElBQUksTUFBTSxLQUFLLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDckQ7RUFDQSxJQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUI7RUFDakQsTUFBTSxLQUFLO0VBQ1gsTUFBTSxNQUFNO0VBQ1osTUFBTSxPQUFPO0VBQ2IsS0FBSyxDQUFDO0VBQ04sSUFBSSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ3JDLElBQUksTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztFQUMzQyxJQUFJLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFDL0M7RUFDQSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHO0VBQ3ZCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztFQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQztFQUNwQyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQztFQUN0QyxPQUFPLElBQUk7RUFDWCxRQUFRLFdBQVc7RUFDbkIsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMvQyxPQUFPLENBQUM7QUFDUjtFQUNBLElBQUksSUFBSSxXQUFXLEdBQUcsR0FBRztFQUN6QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7RUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0VBQ3JDLElBQUksV0FBVztFQUNmLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDO0VBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7RUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO0VBQzdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7RUFDOUIsT0FBTyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztFQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0I7RUFDQSxJQUFJLElBQUksV0FBVyxHQUFHLFdBQVc7RUFDakMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztFQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO0VBQzNCLE9BQU8sS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7RUFDckMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztFQUN4QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7RUFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdCO0VBQ0EsSUFBSSxJQUFJLFdBQVcsR0FBRyxXQUFXO0VBQ2pDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztFQUMxQixPQUFPLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO0VBQ3JDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7RUFDeEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3QjtFQUNBLElBQUksSUFBSSxXQUFXLEdBQUcsV0FBVztFQUNqQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztFQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7RUFDMUIsT0FBTyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQztFQUNyQyxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO0VBQ3hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztFQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0I7RUFDQSxJQUFJLElBQUksYUFBYSxHQUFHLEdBQUc7RUFDM0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO0VBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3ZDO0VBQ0E7RUFDQSxJQUFJLE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDdkMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztFQUNqQyxJQUFJLE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDdkMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNqQztFQUNBLElBQUksTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUs7RUFDaEMsTUFBTSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDLE1BQU0sTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU07RUFDbkMsUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssT0FBTztFQUNsQyxPQUFPLENBQUM7RUFDUixNQUFNLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDM0MsTUFBTSxPQUFPLE1BQU0sQ0FBQztFQUNwQixLQUFLLENBQUM7QUFDTjtFQUNBO0VBQ0EsSUFBSSxNQUFNLFdBQVcsR0FBRyxDQUFDLFVBQVUsS0FBSztFQUN4QyxNQUFNLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxJQUFJLFNBQVMsQ0FBQztFQUMzRCxNQUFNLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDakQsTUFBTSxhQUFhO0VBQ25CLFNBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN2QixTQUFTLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0VBQ2pDLFNBQVMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7RUFDakMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7RUFDckQsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7RUFDckQsU0FBUyxJQUFJO0VBQ2IsVUFBVSxJQUFJO0VBQ2QsVUFBVSxVQUFVO0VBQ3BCLFlBQVksT0FBTztFQUNuQixZQUFZLFdBQVc7RUFDdkIsY0FBYyxPQUFPLEdBQUcsUUFBUTtFQUNoQyxjQUFjLGtCQUFrQjtFQUNoQyxXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVMsSUFBSTtFQUNiLFVBQVUsSUFBSTtFQUNkLFVBQVUsVUFBVTtFQUNwQixZQUFZLE9BQU87RUFDbkIsWUFBWSxXQUFXO0VBQ3ZCLGNBQWMsT0FBTyxHQUFHLFFBQVE7RUFDaEMsY0FBYyxrQkFBa0I7RUFDaEMsV0FBVztFQUNYLFNBQVMsQ0FBQztFQUNWLEtBQUssQ0FBQztBQUNOO0VBQ0E7RUFDQSxJQUFJLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBSztFQUMvQyxNQUFNLElBQUksT0FBTztFQUNqQixRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxJQUFJLFNBQVM7RUFDOUMsUUFBUSxnQkFBZ0IsQ0FBQztFQUN6QixNQUFNLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNoQyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtFQUN2QixRQUFRLElBQUksR0FBRyxPQUFPLENBQUM7RUFDdkIsT0FBTztFQUNQLE1BQU0sSUFBSSxNQUFNO0VBQ2hCLFFBQVEsV0FBVyxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsWUFBWSxDQUFDO0VBQ3hELE1BQU0sSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztFQUMxQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzQztFQUNBLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZDO0VBQ0EsV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNDO0VBQ0EsTUFBTSxhQUFhO0VBQ25CLFNBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN2QixTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ3JCLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDckIsU0FBUyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUM7RUFDaEQsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDcEIsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksTUFBTSxVQUFVLEdBQUc7RUFDdkIsTUFBTSxHQUFHO0VBQ1QsTUFBTSxVQUFVO0VBQ2hCLE1BQU0sUUFBUTtFQUNkLE1BQU0sS0FBSztFQUNYLE1BQU0sSUFBSTtFQUNWLE1BQU0sS0FBSztFQUNYLE1BQU0sS0FBSztFQUNYLE1BQU0sT0FBTztFQUNiLFNBQVM7RUFDVCxNQUFNLGFBQWE7RUFDbkIsU0FBUyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3ZCLFNBQVMsS0FBSyxDQUFDO0VBQ2YsVUFBVSxVQUFVLEVBQUUsVUFBVTtFQUNoQyxVQUFVLFFBQVEsRUFBRSxRQUFRO0VBQzVCLFNBQVMsQ0FBQztFQUNWLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7RUFDaEMsU0FBUyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztFQUNqQyxTQUFTLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUMzQyxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3ZCLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDekMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztFQUN6QixhQUFhLFVBQVUsRUFBRTtFQUN6QixhQUFhLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDM0IsYUFBYSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BDO0VBQ0EsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsS0FBSztFQUNyRCxZQUFZLGNBQWM7RUFDMUIsWUFBWSxDQUFDO0VBQ2IsV0FBVyxDQUFDO0FBQ1o7RUFDQSxVQUFVLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtFQUMxQixZQUFZLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtFQUNoQyxjQUFjLFdBQVc7RUFDekIsaUJBQWlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztFQUMxQyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN0QyxhQUFhLE1BQU07RUFDbkIsY0FBYyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDM0QsYUFBYTtBQUNiO0VBQ0EsWUFBWSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7RUFDM0IsY0FBYyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDMUQsYUFBYSxNQUFNO0VBQ25CLGNBQWMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQzNELGFBQWE7QUFDYjtFQUNBLFlBQVksV0FBVztFQUN2QixlQUFlLElBQUk7RUFDbkIsZ0JBQWdCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztFQUN4RCxlQUFlO0VBQ2YsZUFBZSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ3BDLFdBQVcsTUFBTTtFQUNqQixZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDakMsWUFBWSxXQUFXO0VBQ3ZCLGVBQWUsSUFBSSxDQUFDLGFBQWEsQ0FBQztFQUNsQyxlQUFlLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDcEMsWUFBWSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2pDLFdBQVc7RUFDWCxTQUFTLENBQUM7RUFDVixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3hDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDekIsYUFBYSxVQUFVLEVBQUU7RUFDekIsYUFBYSxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzNCLGFBQWEsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsQztFQUNBLFVBQVUsV0FBVztFQUNyQixhQUFhLElBQUksQ0FBQyxVQUFVLENBQUM7RUFDN0IsYUFBYSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ25DLFVBQVUsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzFELFVBQVUsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQzVELFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEtBQUs7RUFDckQsWUFBWSxjQUFjO0VBQzFCLFlBQVksQ0FBQztFQUNiLFdBQVcsQ0FBQztFQUNaLFNBQVMsQ0FBQztFQUNWLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ2pDLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO0VBQzVCLFlBQVksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7RUFDdkQsV0FBVyxNQUFNO0VBQ2pCLFlBQVksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0VBQzVCLGNBQWMsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7RUFDakQsY0FBYyxJQUFJLFNBQVMsR0FBRztFQUM5QixnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUs7RUFDdEMsa0JBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQy9DLGlCQUFpQjtFQUNqQixlQUFlLENBQUM7QUFDaEI7RUFDQSxjQUFjLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTztFQUN0RCxnQkFBZ0IsSUFBSTtFQUNwQixlQUFlLENBQUM7RUFDaEIsY0FBYyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2pDLGNBQWMsS0FBSyxNQUFNLEtBQUssSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7RUFDdkQsZ0JBQWdCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtFQUNwQyxrQkFBa0IsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDcEQsaUJBQWlCLE1BQU07RUFDdkIsa0JBQWtCLEtBQUssTUFBTSxNQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQztFQUMxRCxvQkFBb0IsS0FBSztFQUN6QixtQkFBbUIsRUFBRTtFQUNyQixvQkFBb0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUN0RCxzQkFBc0IsS0FBSztFQUMzQixxQkFBcUIsR0FBRyxLQUFLLENBQUM7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2Y7RUFDQSxjQUFjLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckM7RUFDQSxjQUFjLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3pDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztFQUNuQyxhQUFhO0VBQ2IsV0FBVztFQUNYLFNBQVMsQ0FBQyxDQUFDO0VBQ1gsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZCLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7RUFDaEMsTUFBTSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDdkIsT0FBZ0IsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7RUFDbEQsUUFBUSxJQUFJLEdBQUcsR0FBRyxFQUFFO0VBQ3BCLFdBQVcsR0FBRyxFQUFFO0VBQ2hCLFdBQVcsV0FBVyxDQUFDLFdBQVcsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO0VBQ3pELFdBQVcsV0FBVztFQUN0QixZQUFZLFdBQVcsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNuRCxXQUFXLENBQUM7QUFDWjtFQUNBLFFBQVEsSUFBSSxlQUFlLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUNyRDtFQUNBLFFBQVEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7RUFDakQsVUFBVSxHQUFHLElBQUksTUFBTTtFQUN2QixZQUFZLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ2xELFdBQVcsQ0FBQztFQUNaLFNBQVM7QUFDVDtFQUNBLFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO0VBQ3RCLFVBQVUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUc7RUFDakMsWUFBWSxlQUFlLEdBQUcsU0FBUztFQUN2QyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtFQUN2QixXQUFXLENBQUM7RUFDWixVQUFVLFVBQVU7RUFDcEIsWUFBWSxHQUFHO0VBQ2YsWUFBWSxlQUFlO0VBQzNCLFlBQVksUUFBUTtFQUNwQixZQUFZLEtBQUs7RUFDakIsWUFBWSxJQUFJO0VBQ2hCLFlBQVksR0FBRztFQUNmLFlBQVksQ0FBQztFQUNiLFlBQVksQ0FBQztFQUNiLFdBQVcsQ0FBQztFQUNaLFNBQVMsTUFBTTtFQUNmLFVBQVUsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7RUFDbkQsWUFBWSxJQUFJLEtBQUssR0FBRyxNQUFNO0VBQzlCLGNBQWMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDcEQsYUFBYSxDQUFDO0VBQ2QsWUFBWSxJQUFJLE9BQU8sR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ3RDLFlBQVksSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDO0VBQzdDLFlBQVksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUc7RUFDbkMsY0FBYyxVQUFVLEdBQUcsU0FBUyxHQUFHLE9BQU87RUFDOUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7RUFDekIsYUFBYSxDQUFDO0VBQ2QsWUFBWSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBQ3ZDO0VBQ0EsWUFBWSxVQUFVO0VBQ3RCLGNBQWMsR0FBRztFQUNqQixjQUFjLFVBQVU7RUFDeEIsY0FBYyxRQUFRO0VBQ3RCLGNBQWMsS0FBSztFQUNuQixjQUFjLElBQUk7RUFDbEIsY0FBYyxLQUFLO0VBQ25CLGNBQWMsS0FBSztFQUNuQixjQUFjLE9BQU87RUFDckIsYUFBYSxDQUFDO0VBQ2QsV0FBVztFQUNYLFNBQVM7QUFDVDtFQUNBLFFBQVEsUUFBUSxFQUFFLENBQUM7RUFDbkIsT0FBTztBQUNQO0VBQ0EsTUFBTSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztFQUNsRCxXQUFXLFdBQVcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7RUFDMUMsTUFBTSxVQUFVLEVBQUUsQ0FBQztFQUNuQixLQUFLO0FBQ0w7RUFDQTtFQUNBLElBQUk7RUFDSixNQUFNLElBQUksVUFBVSxHQUFHLENBQUM7RUFDeEIsTUFBTSxVQUFVLEdBQUcsU0FBUyxJQUFJLFNBQVMsR0FBRyxDQUFDO0VBQzdDLE1BQU0sVUFBVSxFQUFFO0VBQ2xCLE1BQU07RUFDTixNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUM5QixLQUFLO0VBQ0wsR0FBRztBQUNIO0VBQ0EsRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUU7RUFDN0MsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFdkM7RUFDQSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUs7RUFDdEIsTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUM7RUFDckQsU0FBUyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM5QztFQUNBLElBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZCLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7RUFFaEMsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtFQUN4QyxRQUFRLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztFQUNwQixRQUFRLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO0VBQ2pELFVBQVUsR0FBRyxJQUFJLE1BQU07RUFDdkIsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNsRCxXQUFXLENBQUM7RUFDWixTQUFTO0VBQ1QsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFO0VBQ2pELFVBQVUsU0FBUztFQUNuQixTQUFTO0VBQ1QsUUFBUSxJQUFJLEtBQUssR0FBRyxNQUFNO0VBQzFCLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7RUFDeEQsU0FBUyxDQUFDO0VBQ1YsUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xDLFFBQVEsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0VBQ3hCLFVBQVUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0VBQ3pCLFlBQVksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMxRCxXQUFXLE1BQU07RUFDakIsWUFBWSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzNELFdBQVc7RUFDWCxVQUFVLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJO0VBQ25ELFlBQVksTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0VBQ3BELFdBQVcsQ0FBQztFQUNaLFNBQVMsTUFBTTtFQUNmLFVBQVUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN4RCxVQUFVLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJO0VBQ25ELFlBQVksVUFBVTtFQUN0QixXQUFXLENBQUM7RUFDWixTQUFTO0VBQ1QsT0FBTztFQUNQLE1BQU0sVUFBVSxFQUFFLENBQUM7RUFDbkIsS0FBSztFQUNMO0VBQ0EsSUFBSSxNQUFNLEVBQUUsR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDO0VBQ3RDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDNUQsR0FBRztBQUNIO0VBQ0EsRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFO0VBQ3RCLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0VBQ3ZDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDOUIsSUFBSSxLQUFLLE1BQU0sVUFBVSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtFQUNyRCxNQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDMUIsS0FBSztFQUNMLElBQUksS0FBSyxNQUFNLFVBQVUsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEVBQUU7RUFDdkQsTUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzFCLEtBQUs7RUFDTCxJQUFJLE1BQU0sRUFBRSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7RUFDOUIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUM1RCxHQUFHO0FBQ0g7RUFDQSxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUU7RUFDeEI7RUFDQSxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztFQUN2QyxJQUFJLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztBQUNwQjtFQUNBLElBQUksTUFBTSxTQUFTLEdBQUcsRUFBRTtFQUN4QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDMUIsT0FBTyxJQUFJLEVBQUU7RUFDYixPQUFPLHFCQUFxQixFQUFFLENBQUM7RUFDL0IsSUFBSSxNQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7RUFDOUMsSUFBSSxNQUFNLGNBQWMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDNUM7RUFDQSxJQUFJLE1BQU0sS0FBSyxHQUFHLGNBQWMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0VBQ3JELElBQUksTUFBTSxNQUFNLEdBQUcsZUFBZSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztFQUM1RCxJQUFJLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0VBQ2pELElBQUksTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLHdCQUF3QjtFQUNsRCxNQUFNLEtBQUs7RUFDWCxNQUFNLE1BQU07RUFDWixNQUFNLFNBQVM7RUFDZixLQUFLLENBQUM7RUFDTixJQUFJLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ2xDO0VBQ0EsSUFBSSxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ2pDLElBQUksTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztFQUNqQyxJQUFJLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDakMsSUFBSSxNQUFNLGVBQWUsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztFQUNoRCxJQUFJLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEQ7RUFDQSxJQUFJLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6RCxPQUFPLE1BQU0sQ0FBQztFQUNkLElBQUksTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7RUFFeEQsSUFBSSxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO0FBQzVDO0VBQ0EsSUFBSSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMseUJBQXlCO0VBQ2pELE1BQU0sSUFBSTtFQUNWLE1BQU0sSUFBSTtFQUNWLE1BQU0sT0FBTztFQUNiLEtBQUssQ0FBQztFQUNOLElBQUksTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNyQyxJQUFJLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDM0MsSUFBSSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQy9DO0VBQ0E7QUFDQTtFQUNBO0VBQ0EsSUFBSSxNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSztFQUNoQyxNQUFNLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDdEMsTUFBTSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTTtFQUNuQyxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxPQUFPO0VBQ2xDLE9BQU8sQ0FBQztFQUNSLE1BQU0sTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUMzQyxNQUFNLE9BQU8sTUFBTSxDQUFDO0VBQ3BCLEtBQUssQ0FBQztBQUNOO0VBQ0EsSUFBSSxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBSyxLQUFLO0VBQ3hDLE1BQU0sSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0VBQzNCLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRTtFQUNwQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFO0VBQzlDLFVBQVUsV0FBVyxHQUFHLElBQUksQ0FBQztFQUM3QixTQUFTO0VBQ1QsT0FBTyxDQUFDLENBQUM7RUFDVCxNQUFNLE9BQU8sV0FBVyxDQUFDO0VBQ3pCLEtBQUssQ0FBQztFQUNOLElBQUksTUFBTSxzQkFBc0IsR0FBRyxPQUFPO0VBQzFDLE1BQU0sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUMzQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ2I7RUFDQTtFQUNBLElBQUksTUFBTSxXQUFXLEdBQUc7RUFDeEIsTUFBTSxLQUFLO0VBQ1gsTUFBTSxVQUFVO0VBQ2hCLE1BQU0sYUFBYTtFQUNuQixTQUFTO0VBSVQsTUFBTSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDaEMsTUFBTSxJQUFJLE1BQU07RUFDaEIsUUFBUSxXQUFXLEdBQUcsT0FBTyxHQUFHLFFBQVEsR0FBRyxZQUFZLENBQUM7RUFDeEQsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUN0QjtFQUNBLE1BQU0sSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDO0VBQy9CLE1BQU0sSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUc7RUFDbEMsUUFBUSxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0VBQ3RDLFVBQVUsc0JBQXNCO0VBQ2hDLFFBQVEsRUFBRTtFQUNWLE9BQU8sQ0FBQztBQUNSO0VBQ0EsTUFBTSxhQUFhO0VBQ25CLFNBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN2QixTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ3JCLFNBQVMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7RUFDdkMsU0FBUyxLQUFLLENBQUMsV0FBVyxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUM7RUFDakQsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDcEIsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksTUFBTSxVQUFVLEdBQUc7RUFDdkIsTUFBTSxhQUFhO0VBQ25CLE1BQU0sR0FBRztFQUNULE1BQU0sVUFBVTtFQUNoQixNQUFNLFFBQVE7RUFDZCxNQUFNLEtBQUs7RUFDWCxNQUFNLElBQUk7RUFDVixNQUFNLEtBQUs7RUFDWCxTQUFTO0VBQ1QsTUFBTSxhQUFhO0VBQ25CLFNBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN2QixTQUFTLEtBQUssQ0FBQztFQUNmLFVBQVUsVUFBVSxFQUFFLFVBQVU7RUFDaEMsVUFBVSxRQUFRLEVBQUUsUUFBUTtFQUM1QixTQUFTLENBQUM7RUFDVixTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0VBQ2hDLFNBQVMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7RUFDakMsU0FBUyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDM0MsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QixTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3pDLFVBQVUsSUFBSSxLQUFLLEtBQUssR0FBRyxFQUFFO0VBQzdCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDM0IsZUFBZSxVQUFVLEVBQUU7RUFDM0IsZUFBZSxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzdCLGVBQWUsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0QztFQUNBLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ2xELFdBQVc7RUFDWCxTQUFTLENBQUM7RUFDVixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3hDLFVBQVUsSUFBSSxLQUFLLEtBQUssR0FBRyxFQUFFO0VBQzdCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDM0IsZUFBZSxVQUFVLEVBQUU7RUFDM0IsZUFBZSxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQzdCLGVBQWUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQztFQUNBLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNuQyxXQUFXO0VBQ1gsU0FBUyxDQUFDO0VBQ1YsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDakMsVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7RUFDNUIsWUFBWSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztFQUN2RCxXQUFXLE1BQU07RUFDakIsWUFBWSxJQUFJLEtBQUssS0FBSyxHQUFHLEVBQUU7RUFDL0IsY0FBYyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSztFQUN4QyxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7RUFDdEMsZUFBZSxDQUFDO0VBQ2hCLGNBQWMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO0VBQ3RELGdCQUFnQixJQUFJO0VBQ3BCLGVBQWUsQ0FBQztFQUNoQixjQUFjLEtBQUssTUFBTSxNQUFNLElBQUksU0FBUyxFQUFFO0VBQzlDLGdCQUFnQixJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztFQUNwRCxnQkFBZ0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtFQUNoRCxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztFQUMvQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQzNCLGdCQUFnQixLQUFLLE1BQU0sS0FBSyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtFQUN6RCxrQkFBa0IsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0VBQ3RDLG9CQUFvQixPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUN0RCxtQkFBbUIsTUFBTTtFQUN6QixvQkFBb0IsS0FBSyxNQUFNLE1BQU0sSUFBSSxTQUFTO0VBQ2xELHNCQUFzQixRQUFRO0VBQzlCLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUFFO0VBQzlCLHNCQUFzQixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO0VBQ3hELHdCQUF3QixLQUFLO0VBQzdCLHVCQUF1QixHQUFHLEtBQUssQ0FBQztFQUNoQyxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2Y7RUFDQSxjQUFjLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckM7RUFDQSxjQUFjLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3pDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztFQUNuQyxhQUFhO0VBQ2IsV0FBVztFQUNYLFNBQVMsQ0FBQyxDQUFDO0VBQ1gsS0FBSyxDQUFDO0FBQ047RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztFQUNoQyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7QUFDbEM7RUFDQSxJQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUc7RUFDaEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQzNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztFQUNqRCxPQUFPLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO0VBQ3JDLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDO0VBQy9DLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hCO0VBQ0EsSUFBSSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7RUFDdkIsSUFBSSxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtFQUNoQyxNQUFNLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7RUFDNUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ2xDO0VBQ0EsTUFBTSxJQUFJLFVBQVU7RUFDcEIsUUFBUSxJQUFJLEdBQUcsQ0FBQztFQUNoQixRQUFRLEdBQUcsR0FBRyxJQUFJO0VBQ2xCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksZUFBZSxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNuRCxNQUFNLElBQUksVUFBVTtFQUNwQixRQUFRLEtBQUssQ0FBQyxnQkFBZ0I7RUFDOUIsUUFBUSxJQUFJLEdBQUcsQ0FBQztFQUNoQixRQUFRLEdBQUcsR0FBRyxJQUFJO0VBQ2xCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksZ0JBQWdCLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BEO0VBQ0EsTUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRztFQUN6QixTQUFTLE1BQU0sQ0FBQyxHQUFHLENBQUM7RUFDcEIsU0FBUyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztFQUM1QixTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0VBQzdCLFNBQVMsSUFBSTtFQUNiLFVBQVUsV0FBVztFQUNyQixVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztFQUNsRCxTQUFTLENBQUM7RUFDVixNQUFNLElBQUksV0FBVyxHQUFHLEdBQUc7RUFDM0IsU0FBUyxNQUFNLENBQUMsR0FBRyxDQUFDO0VBQ3BCLFNBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztFQUN2QyxNQUFNLFdBQVc7RUFDakIsU0FBUyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ3pCLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUM7RUFDcEMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUN0QixTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQ3RCLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7RUFDL0IsU0FBUyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztFQUNoQyxTQUFTLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0VBQ2pDLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQjtFQUNBLE1BQU0sSUFBSSxXQUFXLEdBQUcsV0FBVztFQUNuQyxTQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdkIsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztFQUNyQixTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ3JCLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7RUFDMUIsU0FBUyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQztFQUN2QyxTQUFTLEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO0VBQzFDLFNBQVMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCO0VBQ0EsTUFBTSxJQUFJLFdBQVcsR0FBRyxXQUFXO0VBQ25DLFNBQVMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN2QixTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ3JCLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDckIsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztFQUMxQixTQUFTLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO0VBQ3ZDLFNBQVMsS0FBSyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7RUFDMUMsU0FBUyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEI7RUFDQSxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDL0MsTUFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pEO0VBQ0EsTUFBTSxJQUFJLGFBQWEsR0FBRyxHQUFHO0VBQzdCLFNBQVMsTUFBTSxDQUFDLEdBQUcsQ0FBQztFQUNwQixTQUFTLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN6QztFQUNBLE1BQU0sSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZCLE9BQWdCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0VBQ2xELFFBQVEsSUFBSSxHQUFHLEdBQUcsRUFBRTtFQUNwQixXQUFXLEdBQUcsRUFBRTtFQUNoQixXQUFXLFdBQVcsQ0FBQyxXQUFXLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztFQUN6RCxXQUFXLFdBQVc7RUFDdEIsWUFBWSxXQUFXLEdBQUcsUUFBUSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDbkQsV0FBVyxDQUFDO0FBQ1o7RUFDQSxRQUFRLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQUNoQztFQUNBLFFBQVEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7RUFDakQsVUFBVSxJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUUsU0FBUztFQUN6QyxVQUFVLEdBQUcsSUFBSSxNQUFNO0VBQ3ZCLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDbEQsV0FBVyxDQUFDO0VBQ1osU0FBUztBQUNUO0VBQ0EsUUFBUSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7RUFDdEIsVUFBVSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRztFQUNqQyxZQUFZLGVBQWUsR0FBRyxTQUFTO0VBQ3ZDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO0VBQ3ZCLFdBQVcsQ0FBQztFQUNaLFVBQVUsVUFBVTtFQUNwQixZQUFZLGFBQWE7RUFDekIsWUFBWSxHQUFHO0VBQ2YsWUFBWSxlQUFlO0VBQzNCLFlBQVksUUFBUTtFQUNwQixZQUFZLEtBQUs7RUFDakIsWUFBWSxJQUFJO0VBQ2hCLFlBQVksR0FBRztFQUNmLFdBQVcsQ0FBQztFQUNaLFNBQVMsTUFBTTtFQUNmLFVBQVUsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7RUFDbkQsWUFBWSxJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUUsU0FBUztFQUMzQyxZQUFZLElBQUksS0FBSyxHQUFHLE1BQU07RUFDOUIsY0FBYyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUNwRCxhQUFhLENBQUM7RUFDZCxZQUFZLElBQUksT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7RUFDdEMsWUFBWSxJQUFJLFVBQVUsR0FBRyxlQUFlLENBQUM7RUFDN0MsWUFBWSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRztFQUNuQyxjQUFjLFVBQVUsR0FBRyxTQUFTLEdBQUcsT0FBTztFQUM5QyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtFQUN6QixhQUFhLENBQUM7RUFDZCxZQUFZLGVBQWUsR0FBRyxRQUFRLENBQUM7RUFDdkMsWUFBWSxVQUFVO0VBQ3RCLGNBQWMsYUFBYTtFQUMzQixjQUFjLEdBQUc7RUFDakIsY0FBYyxVQUFVO0VBQ3hCLGNBQWMsUUFBUTtFQUN0QixjQUFjLEtBQUs7RUFDbkIsY0FBYyxJQUFJO0VBQ2xCLGNBQWMsS0FBSztFQUNuQixhQUFhLENBQUM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVEsUUFBUSxFQUFFLENBQUM7RUFDbkIsT0FBTztFQUNQLE1BQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztFQUM5QyxNQUFNLFVBQVUsRUFBRSxDQUFDO0VBQ25CLEtBQUs7RUFDTCxHQUFHO0FBQ0g7RUFDQSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUU7RUFDdkIsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDckM7RUFDQTtFQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsRUFBRTtFQUNuQixPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztFQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBQ3hDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztFQUNuQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUNmLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2Y7RUFDQSxJQUFJLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtFQUNuQyxNQUFNLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDbEQsTUFBTSxLQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssRUFBRTtFQUNqQyxRQUFRLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRSxTQUFTO0VBQ3hDLFFBQVEsTUFBTTtFQUNkLFdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN6QixXQUFXLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQztFQUNyQyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ3ZCLFdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDdkIsV0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztFQUM1QixXQUFXLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0VBQzdCLFdBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7RUFDbEMsV0FBVyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztFQUNuQyxXQUFXLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzlDLFFBQVEsTUFBTTtFQUNkLFdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN6QixXQUFXLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQztFQUNyQyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUM1QixXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMzQixXQUFXLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDdEIsV0FBVyxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztFQUNyQyxXQUFXLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztFQUNoRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7RUFDaEIsT0FBTztFQUNQLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUNkLEtBQUs7RUFDTCxHQUFHO0VBQ0g7O0VDaGdDQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEtBQUs7RUFDekQ7RUFDQSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ1Q7RUFDQTtFQUNBLEVBQUUsWUFBWSxFQUFFLENBQUM7RUFDakIsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztFQUNuRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztFQUMvRDtFQUNBO0VBQ0EsRUFBRSxTQUFTLFlBQVksRUFBRTtFQUN6QixLQUFLLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7RUFDakUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0VBQzdELEdBQUc7RUFDSDtFQUNBLEVBQUUsU0FBUyxVQUFVLEVBQUU7QUFhdkI7RUFDQSxLQUFLLElBQUksRUFBRSxDQUFDO0VBQ1osU0FBUyxJQUFJLGVBQWUsSUFBNkIsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO0VBQzlFLFNBQVMsSUFBSSxjQUFjLElBQTRCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzRTtFQUNBLFNBQVMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzNCO0VBQ0EsU0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLGVBQWUsQ0FBQztFQUM1QyxVQUFVLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDL0MsYUFBYSxLQUFLLEdBQUcsSUFBSSxDQUFDO0VBQzFCLGFBQWEsTUFBTTtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWO0VBQ0EsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQ3BCLFVBQVUsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7RUFDbEUsVUFBVSxNQUFNO0VBQ2hCLGFBQWEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztFQUN4RSxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7RUFDbEUsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztFQUM3RCxVQUFVO0VBQ1YsT0FBTyxNQUFNO0VBQ2IsU0FBUyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztFQUM3RCxPQUFPO0VBQ1AsR0FBRztFQUNIO0VBQ0EsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRTtFQUN0QixNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUM7RUFDekIsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUNqQyxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQ2xDLE1BQU0sV0FBVyxDQUFDLEdBQUcsQ0FBQztFQUN0QixNQUFNLE1BQU0sR0FBRTtBQUNkO0VBQ0EsRUFBRSxJQUFJLFFBQVEsRUFBRTtFQUNoQixVQUFVLFNBQVMsQ0FBQyxXQUFXLENBQUM7RUFDaEMsVUFBVSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUNyQyxVQUFVLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQ3RDLE9BQU8sWUFBWSxDQUFDLFlBQVksQ0FBQztFQUNqQyxRQUFRLEtBQUssQ0FBQyxtSUFBbUksQ0FBQztFQUNsSixNQUFNLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ2hDLENBQUMsQ0FBQzs7OzsifQ==