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
        outerTextSize: "20px",
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
          '0': '#989898'
        },
        textCirclesCount: [],
        textCirclesPercent: [],
        centerText: null,
        centerTextSize: "40px",
        centerTextHeight: 60,
        compareMode: false,
        legendWidth: 150
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
    computeSunburstParameters(x, y, numArcs){
      let attrs = this.getChartState();
  		
      let textHeightOffset = 50;
      
      let min = Math.min(x, y-textHeightOffset); 
      let arcWidth = (min/(2*numArcs + 7)); //min = 2*numArcs*arcWidth + 2*innerRadius, innerRadius = 3*arcWidth
      let innerRadius = 3*arcWidth;
      
      let multiplier = 1.5;
      let n = 13; //'international' with 13 letters is longest word in diversity attributes 
      let innerTextSize = multiplier*(2*innerRadius)/n + "px";
      return {arcWidth: arcWidth, innerRadius: innerRadius, innerTextSize: innerTextSize};
    }
    
    /* Given screen width, height and number of squares, return rows, columns and square size */
    computeCompareDimensions(x, y, n){
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
      
      return {size: cell_size, rows: nrows, cols: ncols};
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
      document.getElementById('compare-button').onclick = toggleCompare;
      
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
    render(values){
      let attrs = this.getChartState();
  		let sb = this;
     
      // Setting values so values is still accessible when compare is toggled 
      attrs.values = values; 
      
      // repurposing back button if necessary
      if (attrs.history.length > 0) {
        document.getElementById('compare-button').disabled = true;
        const back = () => sb.render(attrs.history.pop());
        document.getElementById('back-button').onclick = back;
      } else {
        document.getElementById('compare-button').disabled = false;
        document.getElementById('back-button').onclick = attrs.displayNodes;
      }

      // remove all elements in svg
  		this.removeAll();
      
      // re-create the new elements
      if (!attrs.compareMode){
         document.getElementById('compare-button').style.backgroundColor = "white";
         this.renderSunburst(values);
         // disable compare mode if only 1 slice
         if (Object.keys(values).length === 1)
           document.getElementById('compare-button').disabled = true;
      }else {
         document.getElementById('compare-button').style.backgroundColor = "red";
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
      const numArcs = Object.keys(Object.values(values)[0]).length;
      const extendedLineLength = attrs.extendedLineLength;
      const halfSliceRadians = Math.PI / numSlices;
      const textDistance = attrs.textDistance;
      const arcLength = (2 * Math.PI) / numSlices;
     
      const container = d3.select("#sunburst").node().getBoundingClientRect();
      const containerHeight = +container.height;
      const containerWidth = +container.width;
     
     	const height = containerHeight;
      const width = containerWidth - attrs.legendWidth;
     
    	const params = this.computeSunburstParameters(width, height, numArcs);
      const arcWidth = params.arcWidth;
      const innerRadius = params.innerRadius;
     	const innerTextSize = params.innerTextSize;
     
      let svg = attrs.svg
        .append('g')
        .attr('width', attrs.svgWidth)
        .attr('height', attrs.svgHeight)
        .attr('transform', `translate(${width/2},${height/2})`);

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
      	.style("font-size", innerTextSize)
        .text('Category')
      	.attr('opacity', '.5');

      let textCircle2 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '0.5em')
        .style('text-anchor', 'middle')
      	.style("font-size", innerTextSize)
        .text('Count')
      	.attr('opacity', '.5');

      let textCircle3 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '1.5em')
        .style('text-anchor', 'middle')
      	.style("font-size", innerTextSize)
        .text('Percent')
      	.attr('opacity', '.5');

      let sunburstGroup = svg.append('g').attr('class', 'sunburst-group');

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
        if (text === ''){
        	text = 'Total'; 
        }
        let radius =
          innerRadius + numArcs * arcWidth + textDistance;
        let x = getCircleX(radians, radius);
        let y = -getCircleY(radians, radius);

        if (x < -1) x -= text.length * 9; //left side adjust
        else if (x < 1) x -= text.length * 5; //middle text adjust

        sunburstGroup
          .append('text')
          .attr('x', x)
          .attr('y', y)
        	.style("font-size", attrs.outerTextSize)
          .text(text);
      };



     	//arc builder
      const arcBuilder = (arc, startAngle, endAngle, slice, attr, value, count, percent) => {	

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

      					d3.select("[id=\'" +  value + "rect\']").style('stroke-width', 3);
           
  							if (count!=0){
                  if (attr === 'Age'){
                     textCircle1.text(attr + ": " + value).attr('opacity', '1');
                  } else {
                      textCircle1.text(value).attr('opacity', '1');
                  }
                 
                  if (count < 5){
                    textCircle2.text('<5').attr('opacity', '1');
                  } else {
                    textCircle2.text(count).attr('opacity', '1');
                  }
                  
                  
                  textCircle3.text(
                    Number((percent * 100).toFixed(1)) + '%'
                  ).attr('opacity', '1');
                } else {
                   textCircle1.text('');
                  	textCircle2.text('No Students').attr('opacity', '1');
                  	textCircle3.text('');
                }
              })
              .on('mouseout', function (d, i) {
                d3.select(this)
                  .transition()
                  .duration('50')
                  .attr('opacity', '1');

                textCircle1.text('Category').attr('opacity', '.5');
                textCircle2.text('Count').attr('opacity', '.5');
                textCircle3.text('Percent').attr('opacity', '.5');
           			d3.select("[id=\'" +  value + "rect\']").style('stroke-width', 1);
              })
              .on('click', function () {
           			if (count!=0){
                  let newValues = {
                    [slice]: JSON.parse(
                      JSON.stringify(values[slice])
                    ),
                  };

                  let index = attrs.attributeIndex.indexOf(attr);

                  for (const attr1 in newValues[slice]){
                     for (const value1 in newValues[slice][attr1]){
                        if (attr1 === attr && value1!=value){
                          delete newValues[slice][attr1][value1];
                        } else {
                          newValues[slice][attr1][value1][index] = value; 
                        } 
                     }
                  }
                  attrs.history.push(values);
                  sb.render(newValues);
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
            sum+=Number(attrs.data[values[slice][attr][value]]);
          }

          if (sum == 0){
            console.log(slice + " : " + attr);
            let endAngle = Math.min(
              sliceStartAngle + arcLength,
              2 * Math.PI
            );
            arcBuilder(arc, sliceStartAngle, endAngle, slice, attr, '0', 0, 0);
          } else {
            for (const value in values[slice][attr]) {
              let count = Number(attrs.data[values[slice][attr][value]]);
              let percent = count / sum;
              let startAngle = sliceStartAngle;
              let endAngle = Math.min(
                startAngle + arcLength * percent,
                2 * Math.PI
              );
              sliceStartAngle = endAngle;

              arcBuilder(arc, startAngle, endAngle, slice, attr, value, count, percent);
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
    
  	displayValues(values, selectedValue, attr){
      const attrs = this.getChartState();
      
      if (attr === 'Age')
      	attrs.centerText.text('Age: ' + selectedValue);
      else 
        attrs.centerText.text(selectedValue);
        
    	let sliceCount = 0;
      for (const slice in values) {
        for (const attr in values[slice]) {
          let sum = 0;
          for (const value in values[slice][attr]) {
            sum+=Number(attrs.data[values[slice][attr][value]]);
          }
          if (!values[slice][attr][selectedValue]){
          	continue;
          }
          let count = Number(attrs.data[values[slice][attr][selectedValue]]);
          let percent = count / sum;
          if (count != 0){
            if (count < 5){
              attrs.textCirclesCount[sliceCount].text('<5');
            } else {
              attrs.textCirclesCount[sliceCount].text(count);
            }
      			attrs.textCirclesPercent[sliceCount].text(Number((percent * 100).toFixed(1)) + '%');
          } else {
            attrs.textCirclesCount[sliceCount].text('No');
      			attrs.textCirclesPercent[sliceCount].text('Students');
          }
        }
        sliceCount++;
      }
      //d3.select("text[id='element.id.with.dots']");
      const id = selectedValue + 'rect';
      d3.select("[id=\'" + id + "\']").style('stroke-width', 3);
    }
      
    removeValues(value){
      const attrs = this.getChartState();
      attrs.centerText.text('');
    	for (const textCircle of attrs.textCirclesCount){
      	textCircle.text(''); 
      }
      for (const textCircle of attrs.textCirclesPercent){
      	textCircle.text(''); 
      }
      const id = value + 'rect';
       d3.select("[id=\'" + id + "\']").style('stroke-width', 1);
    }
      
   
    renderCompare(values){
      //Helper values
    	const attrs = this.getChartState();
      const sb = this;

      const container = d3.select("#sunburst").node().getBoundingClientRect();
      const containerHeight = +container.height;
      const containerWidth = +container.width;
      
      const width = containerWidth - attrs.legendWidth; //minus because of legend
      const height = containerHeight - attrs.centerTextHeight;
      const numSlices = Object.keys(values).length;
      const dimensions = sb.computeCompareDimensions(width, height, numSlices); //rows, columns and square size
  		const arcLength = 2 * Math.PI;
      
      const rows = dimensions.rows;
      const cols = dimensions.cols;
      const size = dimensions.size;
    	const whitespaceWidth = width - cols * size;
      const whitespaceHeight = height - rows * size;
      
      const numArcs = Object.keys(Object.values(values)[0]).length;
      const extendedLineLength = attrs.extendedLineLength;
      const textDistance = attrs.textDistance;


  		const params = this.computeSunburstParameters(size, size, numArcs);
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
        let longestWord = "";
        array.forEach(function(word) {
          if(word.length > longestWord.length) {
            longestWord = word;
          }
        });
        return longestWord;
      };
      const longestSliceTextLength = getText(findLongestSlice(Object.keys(values))).length;
      
      //text builder
      const textBuilder = (slice, sliceCount, sunburstGroup) => {
        let text = getText(slice);
        let radius = innerRadius + numArcs * arcWidth + textDistance;
        let y = -radius;

        let sizeMultiplier = 1.8;
      	let outerTextSize = Math.min(sizeMultiplier*(2*radius)/longestSliceTextLength, 60);

        sunburstGroup
          .append('text')
          .attr('y', y)
        	.style("text-anchor", "middle")
        	.style('font-size', outerTextSize + "px")
          .text(text);
      };
      
      
      //arc builder
      const arcBuilder = (sunburstGroup, arc, startAngle, endAngle, value, attr) => {
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
                if (value !== '0'){
                  d3.select(this)
                    .transition()
                    .duration('50')
                    .attr('opacity', '.85');

                  sb.displayValues(values, value, attr);
                }
              })
              .on('mouseout', function (d, i) {
              	if (value !== '0'){
                  d3.select(this)
                    .transition()
                    .duration('50')
                    .attr('opacity', '1');

                  sb.removeValues(value);
                }
              });
      };
      
      // Clear textCircle lists
      attrs.textCirclesCount = [];
      attrs.textCirclesPercent = [];

      attrs.centerText = attrs.svg
        .append('text')
        .attr('x', width/2)
        .attr('y', 15+attrs.centerTextHeight/2)
        .style('text-anchor', 'middle')
      	.style("font-size", attrs.centerTextSize)
        .text('');
      
      let sliceCount = 0;
      for (const slice in values) {
        let row = parseInt(sliceCount/cols);
        let col = sliceCount%cols;
        
        let translateX = size/2 + col*size+(col+1)*whitespaceWidth/(cols+1);
        let translateY = attrs.centerTextHeight + size/2 + row*size+(row+1)*whitespaceHeight/(rows+1);

        let svg = attrs.svg
          .append('g')
          .attr('width', size)
          .attr('height', size)
          .attr('transform', `translate(${translateX},${translateY})`);
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
          .style("font-size", innerTextSize)
          .text('');

      	let textCircle2 = centerGroup
          .append('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('dy', '1em')
          .style('text-anchor', 'middle')
          .style("font-size", innerTextSize)
          .text('');
        
        attrs.textCirclesCount.push(textCircle1);
        attrs.textCirclesPercent.push(textCircle2);
        
        let sunburstGroup = svg.append('g').attr('class', 'sunburst-group');

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
            sum+=Number(attrs.data[values[slice][attr][value]]);
          }
          
          if (sum == 0){
            let endAngle = Math.min(
              sliceStartAngle + arcLength,
              2 * Math.PI
            );
            arcBuilder(sunburstGroup, arc, sliceStartAngle, endAngle, '0', attr);
          } else {
             for (const value in values[slice][attr]) {
                if (value == 'Total') continue;
                let count = Number(attrs.data[values[slice][attr][value]]);
                let percent = count / sum;
                let startAngle = sliceStartAngle;
                let endAngle = Math.min(
                  startAngle + arcLength * percent,
                  2 * Math.PI
                );
                sliceStartAngle = endAngle;
                arcBuilder(sunburstGroup, arc, startAngle, endAngle, value, attr);
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
      let legend = d3.select('#sunburst-legend').attr('width', attrs.legendWidth);
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
          	.attr("id", value + "rect")
            .attr('x', x)
            .attr('y', y)
            .attr('width', 12)
            .attr('height', 12)
          	.attr('stroke', 'black')
            .style('stroke-width', 1)
            .style('fill', attrs.colors[value]);
          legend
            .append('text')
          	.attr("id", value + "text")
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
             	 console.log('Valid');
              
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBST09UX05PREUgPSAnUk9PVCc7XG5jb25zdCBSRVBPUlRfTk9ERSA9ICdSRVBPUlQnO1xuXG5jb25zdCBFRElfQVRUUklCVVRFX05PREUgPSAnRURJX0FUVFJJQlVURSc7XG5jb25zdCBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSA9ICdPVEhFUl9BVFRSSUJVVEUnO1xuY29uc3QgVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUgPSAnVU5DT0xMRUNURURfQVRUUklCVVRFJztcblxuY29uc3QgVkFMVUVfTk9ERSA9ICdWQUxVRSc7XG5jb25zdCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFID0gJ1VOQ09MTEVDVEVEX1ZBTFVFJztcblxuXG5cbmNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgQ29udm9jYXRpb246IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBudW1iZXIgb2Ygc3R1ZGVudHMgdGhhdCBoYXZlIGNvbnZvY2F0ZWQnXG4gIH0sXG4gIERlbW9ncmFwaGljczoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGFyZSBlbnJvbGxlZCdcbiAgfSxcbiAgRmFjdWx0eToge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRpb24nLCdEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnU1RFTScsICdOb24tU1RFTScsICdFbmdpbmVlcmluZyAmIERlc2lnbicsICdTY2llbmNlJywgJ1B1YmxpYyBBZmZhaXJzJywgJ0J1c2luZXNzJywgJ0FydHMgJiBTb2NpYWwgU2NpZW5jZXMnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdEZXBhcnRtZW50IGFuZCBmYWN1bHR5IGFyZSBtYXBwZWQgZnJvbSBzdHVkZW50IGRlZ3JlZSBhbmQgbWFqb3Igb3IgbWFqb3JzLidcbiAgfSxcbiAgJ0FjYWRlbWljIFllYXInOiB7XG4gICAgcGFyZW50czogWydDb252b2NhdGlvbicsJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWycyMDEzLzE0JyxcbiAgICAgICcyMDE0LzE1JyxcbiAgICAgICcyMDE1LzE2JyxcbiAgICAgICcyMDE2LzE3JyxcbiAgICAgICcyMDE3LzE4JyxcbiAgICAgICcyMDE4LzE5JyxcbiAgICAgICcyMDE5LzIwJyxcbiAgICAgICcyMDIwLzIxJyxdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0FjYWRlbWljIFllYXIgaXMgbWFkZSB1cCBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsLCBXaW50ZXIpJ1xuICB9LFxuICBEZWdyZWU6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0JhY2hlbG9ycycsXG4gICAgICAnTWFzdGVycycsXG4gICAgICAnUGguRC4nXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdMZXZlbCBvZiBzdHVkeSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBmdWxsLXRpbWUgc3R1ZGVudCBpcyBlbnJvbGxlZCBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciB0ZXJtcyB3aGVyZWFzIGEgcGFydC10aW1lIHN0dWRlbnQgaXMgZW5yb2xsZWQgaW4gbGVzcydcbiAgfSxcbiAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydEb21lc3RpYycsXG4gICAgICAnSW50ZXJuYXRpb25hbCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdTdHVkZW50cyBhcmUgY2F0ZWdvcml6ZWQgYmFzZWQgb24gd2hldGhlciB0aGV5IGFyZSBjaGFyZ2VkIGRvbWVzdGljIG9yIGludGVybmF0aW9uYWwgZmVlcydcbiAgfSxcbiAgQWdlOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFtcbiAgICAgICc8PTE3JyxcbiAgICAgICcxOC0yMCcsXG4gICAgICAnMjEtMjUnLFxuICAgICAgJzI2LTMwJyxcbiAgICAgICczMS0zNScsXG4gICAgICAnMzYtNDUnLFxuICAgICAgJzQ2LTU1JyxcbiAgICAgICc1NSsnLFxuICAgIF0sXG4gICAgdW5jb2xsZWN0ZWRWYWx1ZXM6IFsnNTUtNTknLCc2MC02NCcsJzY1LTY5JywgJzcwLTc0JywgJzc1LTc5JywgJzgwKyddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBhZ2UgcmFuZ2VzIG9mIHN0dWRlbnRzJ1xuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ01hbGUnLCAnRmVtYWxlJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnTm9uLWJpbmFyeSddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ01pc2xhYmVsZWQuIFRoZSBjb3JyZWN0IGxhYmVsIHNob3VsZCBiZSBcXCdHZW5kZXJcXCcgYW5kIGFsbCBnZW5kZXJzIHNob3VsZCBiZSBjb2xsZWN0ZWQnXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHJhY2Ugb2YgYSBzdHVkZW50J1xuXHR9LFxuICAnUmVsaWdpb24vU3Bpcml0dWFsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgcmVsaWdpb24vc3Bpcml0dWFsaXR5IG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0dlb2dyYXBoaWMgSWRlbnRpdHknOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBnZW9ncmFwaGljIGlkZW50aXR5IG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0Rpcy9hYmlsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgZGlzL2FiaWxpdHkgb2YgYSBzdHVkZW50J1xuICB9LFxuICBJbmRpZ2VudWl0eToge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydGaXJzdCBOYXRpb25zJywgJ01ldGlzJywgJ0ludWl0J10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgaW5kaWdlbnVpdHkgb2YgYSBzdHVkZW50J1xuICB9LFxuICAnRmlyc3QgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBmaXJzdCBsYW5ndWFnZSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gICdPdGhlciBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG90aGVyIGxhbmd1YWdlIG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0V0aG5pY2l0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGV0aG5pY2l0eSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gICdOYXRpb24nOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBuYXRpb24gb2Ygb3JpZ2luIG9mIGEgc3R1ZGVudCdcbiAgfSxcbn1cblxuXG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgVHJhbnNwYXJlbnQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MH0sXG4gIFdoaXRlOiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBHcmV5OiB7XCJyZWRcIjoxMjgsXCJncmVlblwiOjEyOCxcImJsdWVcIjoxMjgsXCJhbHBoYVwiOjF9LFxuXHRHcmVlbjoge1wicmVkXCI6MCxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9LFxuICBCbHVlOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsYWNrOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9XG59XG5cbmNvbnN0IHNpemVzID0ge1xuXHRMYXJnZToge3dpZHRoOiAzNDIsIGhlaWdodDogMTQ2fSxcbiAgTWVkaXVtOiB7d2lkdGg6IDMzMSwgaGVpZ2h0OiAxNDZ9LFxuXHRTbWFsbDoge3dpZHRoOiAzMTAsIGhlaWdodDogMTQ2fVxufVxuXG5jb25zdCBib3JkZXJXaWR0aCA9IDJcbmNvbnN0IGJvcmRlclJhZGl1cyA9IDVcbmNvbnN0IGNvbm5lY3RvckxpbmVXaWR0aCA9IDVcblxuY29uc3Qgbm9kZURpbWVuc2lvbnMgPSB7XG4gIFtST09UX05PREVdIDoge1xuICAgIHdpZHRoOiBzaXplcy5MYXJnZS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLkxhcmdlLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIHRleHRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcblx0W1JFUE9SVF9OT0RFXSA6IHtcbiAgXHR3aWR0aDogc2l6ZXMuTGFyZ2Uud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5MYXJnZS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfQVRUUklCVVRFX05PREVdIDoge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcbiAgW0FDQURFTUlDX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmx1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbRURJX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1ZBTFVFX05PREVdOiB7XG4gIFx0d2lkdGg6IHNpemVzLlNtYWxsLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuU21hbGwuaGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcblx0XHRjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5HcmV5LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfVxufVxuXG5jb25zdCBtYWtlTm9kZSA9IChub2RlSWQsIHBhcmVudE5vZGVJZHMsIG5vZGVUeXBlLCBwYXJlbnROb2RlVHlwZSkgPT4ge1xuXHRsZXQgbm9kZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZURpbWVuc2lvbnNbbm9kZVR5cGVdKSk7XG4gIG5vZGUubm9kZUlkID0gbm9kZUlkO1xuICBub2RlLnBhcmVudE5vZGVJZHMgPSBwYXJlbnROb2RlSWRzO1xuXHRub2RlLmV4cGFuZGVkID0gZmFsc2U7XG4gIG5vZGUuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgbm9kZS5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXM7XG4gIG5vZGUuY29ubmVjdG9yTGluZVdpZHRoID0gY29ubmVjdG9yTGluZVdpZHRoO1xuIFx0aWYgKGluaXRpYWxOb2Rlc1tub2RlSWRdKVxuICAgIFx0bm9kZS5kZXNjcmlwdGlvbiA9IFwiXCIgfHwgaW5pdGlhbE5vZGVzW25vZGVJZF0uZGVzY3JpcHRpb247XG4gIFxuICBpZiAobm9kZVR5cGUgPT0gVkFMVUVfTk9ERSl7XG4gIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgXG4gICAgbm9kZS5jb25uZWN0b3JMaW5lQ29sb3IgPSBub2RlRGltZW5zaW9uc1twYXJlbnROb2RlVHlwZV0uYm9yZGVyQ29sb3I7IFxuICAgIGlmIChub2RlSWQgPT09ICdTVEVNJyl7XG4gICAgXHRub2RlLmRlc2NyaXB0aW9uID0gJ0FnZ3JlZ2F0aW9uIG9mIGZhY3VsdHkgb2YgU2NpZW5jZSwgRW5naW5lZXJpbmcgJiBEZXNpZ24gYW5kIE1hdGhlbWF0aWNzJ1xuICAgIH0gZWxzZSBpZiAobm9kZUlkID09PSAnTm9uLVNURU0nKXtcbiAgICAgIG5vZGUuZGVzY3JpcHRpb24gPSAnQWdncmVnYXRpb24gb2YgYWxsIG5vbi1TVEVNIGZhY3VsdGllcydcbiAgICB9IFxuICB9IGVsc2UgaWYgKG5vZGVUeXBlID09PSBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFKXtcbiAgIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgIFxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBwb3B1bGF0ZU5vZGVzID0gKG5vZGVzLCBpbml0aWFsTm9kZXMpID0+IHtcblx0Zm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbE5vZGVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IGluaXRpYWxOb2Rlc1trZXldO1xuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gUkVQT1JUX05PREUpe1xuICAgIFx0XHRub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgWydSb290J10sIFJFUE9SVF9OT0RFKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShrZXksIG5vZGUucGFyZW50cywgbm9kZS50eXBlKSk7IC8vbGluayB0byBmaXJzdCBwYXJlbnRcbiAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIG5vZGUuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS51bmNvbGxlY3RlZFZhbHVlcylcbiAgICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGxpbmssIFtrZXldLCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFLCBub2RlLnR5cGUpKTtcbiAgICB9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IG5vZGVzID0gW21ha2VOb2RlKCdSb290JywgW251bGxdLCBST09UX05PREUpXTtcbnBvcHVsYXRlTm9kZXMobm9kZXMsIGluaXRpYWxOb2Rlcyk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbm9kZXMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiA4MDAsXG4gICAgICBzdmdIZWlnaHQ6IDYwMCxcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGVmYXVsdFRleHRGaWxsOiAnIzJDM0U1MCcsXG4gICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICBkZWZhdWx0Rm9udDogJ0hlbHZldGljYScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkYXRhOiBub2RlcyxcbiAgICAgIG5vZGVzOiBudWxsLFxuICAgICAgY29ubmVjdG9yTGV2ZWxzOiAyLFxuICAgICAgZGVwdGg6IDE4MCxcbiAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgYWNhZGVtaWNWYWx1ZXM6IHtcbiAgICAgICAgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICBGYWN1bHR5OiBbJ1RvdGFsJ10sXG4gICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ10sXG4gICAgICB9LFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzOiB7XG4gICAgICAgIEFnZTogW10sXG4gICAgICAgIFNleDogW10sXG4gICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbXSxcbiAgICAgIH0sXG4gICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIHRvb2x0aXBEaXY6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy8gRHluYW1pY2FsbHkgc2V0IGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgQ2hhcnQgY2xhc3NcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdCgnI25vZGUtbGVnZW5kJyk7XG4gICAgc3ZnXG4gICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgMjApXG4gICAgICAuYXR0cigneScsIDI0KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTIpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnZ3JleScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIDIwKVxuICAgICAgLmF0dHIoJ3knLCA1NClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEyKVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCAnZ3JlZW4nKTtcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCAyMClcbiAgICAgIC5hdHRyKCd5JywgODQpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ2JsdWUnKTtcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCA0MClcbiAgICAgIC5hdHRyKCd5JywgMzApXG4gICAgICAudGV4dCgnVW5jb2xsZWN0ZWQnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDQwKVxuICAgICAgLmF0dHIoJ3knLCA2MClcbiAgICAgIC50ZXh0KCdEaXZlcnNpdHknKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDQwKVxuICAgICAgLmF0dHIoJ3knLCA5MClcbiAgICAgIC50ZXh0KCdBY2FkZW1pYycpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG5cbiAgICB0aGlzLmluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCk7XG4gIH1cblxuICBpbml0aWFsaXplRW50ZXJFeGl0VXBkYXRlUGF0dGVybigpIHtcbiAgICBkMy5zZWxlY3Rpb24ucHJvdG90eXBlLnBhdHRlcm5pZnkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcztcbiAgICAgIHZhciBzZWxlY3RvciA9IHBhcmFtcy5zZWxlY3RvcjtcbiAgICAgIHZhciBlbGVtZW50VGFnID0gcGFyYW1zLnRhZztcbiAgICAgIHZhciBkYXRhID0gcGFyYW1zLmRhdGEgfHwgW3NlbGVjdG9yXTtcblxuICAgICAgLy8gUGF0dGVybiBpbiBhY3Rpb25cbiAgICAgIHZhciBzZWxlY3Rpb24gPSBjb250YWluZXJcbiAgICAgICAgLnNlbGVjdEFsbCgnLicgKyBzZWxlY3RvcilcbiAgICAgICAgLmRhdGEoZGF0YSwgKGQsIGkpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoZC5pZCkge1xuICAgICAgICAgICAgICByZXR1cm4gZC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pO1xuICAgICAgc2VsZWN0aW9uLmV4aXQoKS5yZW1vdmUoKTtcbiAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdGlvblxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKGVsZW1lbnRUYWcpXG4gICAgICAgIC5tZXJnZShzZWxlY3Rpb24pO1xuICAgICAgc2VsZWN0aW9uLmF0dHIoJ2NsYXNzJywgc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgcmV0cmlldmVzIHBhc3NlZCBub2RlJ3MgY2hpbGRyZW4gSUQncyAoaW5jbHVkaW5nIG5vZGUpXG4gIGdldE5vZGVDaGlsZHJlbklkcyhcbiAgICB7IGRhdGEsIGNoaWxkcmVuLCBfY2hpbGRyZW4gfSxcbiAgICBub2RlSWRzU3RvcmVcbiAgKSB7XG4gICAgLy8gU3RvcmUgY3VycmVudCBub2RlIElEXG4gICAgbm9kZUlkc1N0b3JlLnB1c2goZGF0YS5ub2RlSWQpO1xuXG4gICAgLy8gTG9vcCBvdmVyIGNoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoZXhwYW5kZWQgbm9kZXMpXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgX2NoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoY29sbGFwc2VkIG5vZGVzKVxuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIG5vZGVJZHNTdG9yZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRab29tRmFjdG9yIEFQSSwgaXQgem9vbXMgdG8gcGFydGljdWxhdCBzY2FsZVxuICBzZXRab29tRmFjdG9yKHpvb21MZXZlbCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2FsYyA9IGF0dHJzLmNhbGM7XG5cbiAgICAvLyBTdG9yZSBwYXNzZWQgem9vbSBsZXZlbFxuICAgIGF0dHJzLmluaXRpYWxab29tID0gem9vbUxldmVsO1xuXG4gICAgLy8gUmVzY2FsZSBjb250YWluZXIgZWxlbWVudCBhY2NvcmRpbmdseVxuICAgIGF0dHJzLmNlbnRlckcuYXR0cihcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgYCB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCAke1xuICAgICAgICBjYWxjLm5vZGVNYXhIZWlnaHQgLyAyXG4gICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvL0lubmVyRnVuY3Rpb25zIHdoaWNoIHdpbGwgdXBkYXRlIHZpc3VhbHNcblxuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgdGhpc09ialJlZiA9IHRoaXM7XG5cbiAgICAvL0RyYXdpbmcgY29udGFpbmVyc1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXJcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoY29udGFpbmVyUmVjdC53aWR0aCA+IDApXG4gICAgICBhdHRycy5zdmdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG5cbiAgICAvL0F0dGFjaCBkcm9wIHNoYWRvdyBpZCB0byBhdHRycyBvYmplY3RcbiAgICB0aGlzLnNldERyb3BTaGFkb3dJZChhdHRycyk7XG5cbiAgICAvL0NhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgIGNvbnN0IGNhbGMgPSB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGNoYXJ0VG9wTWFyZ2luOiBudWxsLFxuICAgICAgY2hhcnRMZWZ0TWFyZ2luOiBudWxsLFxuICAgICAgY2hhcnRXaWR0aDogbnVsbCxcbiAgICAgIGNoYXJ0SGVpZ2h0OiBudWxsLFxuICAgIH07XG4gICAgY2FsYy5pZCA9IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YDsgLy8gaWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgIGNhbGMuY2hhcnRMZWZ0TWFyZ2luID0gYXR0cnMubWFyZ2luTGVmdDtcbiAgICBjYWxjLmNoYXJ0VG9wTWFyZ2luID0gYXR0cnMubWFyZ2luVG9wO1xuICAgIGNhbGMuY2hhcnRXaWR0aCA9XG4gICAgICBhdHRycy5zdmdXaWR0aCAtXG4gICAgICBhdHRycy5tYXJnaW5SaWdodCAtXG4gICAgICBjYWxjLmNoYXJ0TGVmdE1hcmdpbjtcbiAgICBjYWxjLmNoYXJ0SGVpZ2h0ID1cbiAgICAgIGF0dHJzLnN2Z0hlaWdodCAtXG4gICAgICBhdHRycy5tYXJnaW5Cb3R0b20gLVxuICAgICAgY2FsYy5jaGFydFRvcE1hcmdpbjtcbiAgICBhdHRycy5jYWxjID0gY2FsYztcblxuICAgIC8vIEdldCBtYXhpbXVtIG5vZGUgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbGMubm9kZU1heFdpZHRoID0gZDMubWF4KFxuICAgICAgYXR0cnMuZGF0YSxcbiAgICAgICh7IHdpZHRoIH0pID0+IHdpZHRoXG4gICAgKTtcbiAgICBjYWxjLm5vZGVNYXhIZWlnaHQgPSBkMy5tYXgoXG4gICAgICBhdHRycy5kYXRhLFxuICAgICAgKHsgaGVpZ2h0IH0pID0+IGhlaWdodFxuICAgICk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbWF4IG5vZGUgZGVwdGggKGl0J3MgbmVlZGVkIGZvciBsYXlvdXQgaGVpZ2h0cyBjYWxjdWxhdGlvbilcbiAgICBhdHRycy5kZXB0aCA9IGNhbGMubm9kZU1heEhlaWdodCArIDEwMDtcbiAgICBjYWxjLmNlbnRlclggPSBjYWxjLmNoYXJ0V2lkdGggLyAyO1xuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKiAgTEFZT1VUUyAgKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBjb25zdCBsYXlvdXRzID0ge1xuICAgICAgdHJlZW1hcDogbnVsbCxcbiAgICB9O1xuICAgIGF0dHJzLmxheW91dHMgPSBsYXlvdXRzO1xuXG4gICAgLy8gR2VuZXJhdGUgdHJlZSBsYXlvdXQgZnVuY3Rpb25cbiAgICBsYXlvdXRzLnRyZWVtYXAgPSBkM1xuICAgICAgLnRyZWUoKVxuICAgICAgLnNpemUoW2NhbGMuY2hhcnRXaWR0aCwgY2FsYy5jaGFydEhlaWdodF0pXG4gICAgICAubm9kZVNpemUoW1xuICAgICAgICBjYWxjLm5vZGVNYXhXaWR0aCArIDEwMCxcbiAgICAgICAgY2FsYy5ub2RlTWF4SGVpZ2h0ICsgYXR0cnMuZGVwdGgsXG4gICAgICBdKTtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKiogQkVIQVZJT1JTIC4gKioqKioqKioqKioqKioqKioqKioqKlxuICAgIGNvbnN0IGJlaGF2aW9ycyA9IHtcbiAgICAgIHpvb206IG51bGwsXG4gICAgfTtcblxuICAgIC8vIEdldCB6b29taW5nIGZ1bmN0aW9uXG4gICAgYmVoYXZpb3JzLnpvb20gPSBkM1xuICAgICAgLnpvb20oKVxuICAgICAgLm9uKCd6b29tJywgKGQpID0+IHRoaXMuem9vbWVkKGQpKTtcblxuICAgIC8vKioqKioqKioqKioqKioqKioqIFJPT1Qgbm9kZSB3b3JrICoqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLy8gQ29udmVydCBmbGF0IGRhdGEgdG8gaGllcmFyY2hpY2FsXG4gICAgYXR0cnMucm9vdCA9IGQzXG4gICAgICAuc3RyYXRpZnkoKVxuICAgICAgLmlkKCh7IG5vZGVJZCB9KSA9PiBub2RlSWQpXG4gICAgICAucGFyZW50SWQoKHsgcGFyZW50Tm9kZUlkcyB9KSA9PiBwYXJlbnROb2RlSWRzWzBdKShcbiAgICAgIGF0dHJzLmRhdGFcbiAgICApO1xuXG4gICAgLy8gU2V0IGNoaWxkIG5vZGVzIGVudGVyIGFwcGVhcmFuY2UgcG9zaXRpb25zXG4gICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgYXR0cnMucm9vdC55MCA9IDA7XG5cbiAgICAvKiogR2V0IGFsbCBub2RlcyBhcyBhcnJheSAod2l0aCBleHRlbmRlZCBwYXJlbnQgJiBjaGlsZHJlbiBwcm9wZXJ0aWVzIHNldClcbiAgICAgICAgICBUaGlzIHdheSB3ZSBjYW4gYWNjZXNzIGFueSBub2RlJ3MgcGFyZW50IGRpcmVjdGx5IHVzaW5nIG5vZGUucGFyZW50IC0gcHJldHR5IGNvb2wsIGh1aD9cbiAgICAgICovXG4gICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzXG4gICAgICAudHJlZW1hcChhdHRycy5yb290KVxuICAgICAgLmRlc2NlbmRhbnRzKCk7XG5cbiAgICAvLyBDb2xsYXBzZSBhbGwgY2hpbGRyZW4gYXQgZmlyc3RcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBleHBhbmQgc29tZSBub2Rlcywgd2hpY2ggaGF2ZSBgZXhwYW5kZWRgIHByb3BlcnR5IHNldFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpXG4gICAgKTtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKiogIERSQVdJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvL0FkZCBzdmdcbiAgICBjb25zdCBzdmcgPSBjb250YWluZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnc3ZnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdzdmctY2hhcnQtY29udGFpbmVyJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5zdmdXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBhdHRycy5zdmdIZWlnaHQpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBhdHRycy5kZWZhdWx0Rm9udClcbiAgICAgIC5jYWxsKGJlaGF2aW9ycy56b29tKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdtb3ZlJylcbiAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcik7XG4gICAgYXR0cnMuc3ZnID0gc3ZnO1xuXG4gICAgLy9BZGQgY29udGFpbmVyIGcgZWxlbWVudFxuICAgIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNoYXJ0TGVmdE1hcmdpbn0sJHtjYWxjLmNoYXJ0VG9wTWFyZ2lufSlgXG4gICAgICApO1xuXG4gICAgLy8gQWRkIG9uZSBtb3JlIGNvbnRhaW5lciBnIGVsZW1lbnQsIGZvciBiZXR0ZXIgcG9zaXRpb25pbmcgY29udHJvbHNcbiAgICBhdHRycy5jZW50ZXJHID0gY2hhcnRcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIHNlbGVjdG9yOiAnY2VudGVyLWdyb3VwJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCR7XG4gICAgICAgICAgY2FsYy5ub2RlTWF4SGVpZ2h0IC8gMlxuICAgICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgICApO1xuXG4gICAgYXR0cnMuY2hhcnQgPSBjaGFydDtcblxuICAgIFxuICAgIC8vRGVmaW5lIGRpdiBmb3IgdG9vbHRpcFxuICAgIGF0dHJzLnRvb2x0aXBEaXYgPSBkM1xuICAgICAgLnNlbGVjdCgnYm9keScpXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XG4gICAgXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKiogUk9VTkRFRCBBTkQgU0hBRE9XIElNQUdFICBXT1JLIFVTSU5HIFNWRyBGSUxURVJTICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vQWRkaW5nIGRlZnMgZWxlbWVudCBmb3Igcm91bmRlZCBpbWFnZVxuICAgIGF0dHJzLmRlZnMgPSBzdmcucGF0dGVybmlmeSh7XG4gICAgICB0YWc6ICdkZWZzJyxcbiAgICAgIHNlbGVjdG9yOiAnaW1hZ2UtZGVmcycsXG4gICAgfSk7XG5cbiAgICAvLyBBZGRpbmcgZGVmcyBlbGVtZW50IGZvciBpbWFnZSdzIHNoYWRvd1xuICAgIGNvbnN0IGZpbHRlckRlZnMgPSBzdmcucGF0dGVybmlmeSh7XG4gICAgICB0YWc6ICdkZWZzJyxcbiAgICAgIHNlbGVjdG9yOiAnZmlsdGVyLWRlZnMnLFxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGxheSB0cmVlIGNvbnRlbnJzXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyBkcm9wIHNoYWRvdyBJRCB0byB0aGUgcGFzc2VkIG9iamVjdFxuICBzZXREcm9wU2hhZG93SWQoZCkge1xuICAgIC8vIElmIGl0J3MgYWxyZWFkeSBzZXQsIHRoZW4gcmV0dXJuXG4gICAgaWYgKGQuZHJvcFNoYWRvd0lkKSByZXR1cm47XG5cbiAgICAvLyBHZW5lcmF0ZSBkcm9wIHNoYWRvdyBJRFxuICAgIGxldCBpZCA9IGAke2QuaWR9LWRyb3Atc2hhZG93YDtcblxuICAgIC8vIElmIERPTSBvYmplY3QgaXMgYXZhaWxhYmxlLCB0aGVuIHVzZSBVSUQgbWV0aG9kIHRvIGdlbmVyYXRlZCBzaGFkb3cgaWRcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIERPTSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZCA9IERPTS51aWQoZC5pZCkuaWQ7XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIHBhc3NlZCBvYmplY3Qgd2l0aCBkcm9wIHNoYWRvdyBJRFxuICAgIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgZHJvcFNoYWRvd0lkOiBpZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IHJlZHJhd3MgdmlzaWJsZSBncmFwaCwgYmFzZWQgb24gbm9kZXMgc3RhdGVcbiAgdXBkYXRlKHsgeDAsIHkwLCB4LCB5IH0pIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IGNhbGMgPSBhdHRycy5jYWxjO1xuXG4gICAgLy8gIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICAgIGNvbnN0IHRyZWVEYXRhID0gYXR0cnMubGF5b3V0cy50cmVlbWFwKGF0dHJzLnJvb3QpO1xuXG4gICAgLy8gR2V0IHRyZWUgbm9kZXMgYW5kIGxpbmtzIGFuZCBhdHRhY2ggc29tZSBwcm9wZXJ0aWVzXG4gICAgY29uc3Qgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLm1hcCgoZCkgPT4ge1xuICAgICAgLy8gSWYgYXQgbGVhc3Qgb25lIHByb3BlcnR5IGlzIGFscmVhZHkgc2V0LCB0aGVuIHdlIGRvbid0IHdhbnQgdG8gcmVzZXQgb3RoZXIgcHJvcGVydGllc1xuICAgICAgaWYgKGQud2lkdGgpIHJldHVybiBkO1xuXG4gICAgICAvLyBEZWNsYXJlIHByb3BlcnRpZXMgd2l0aCBkZWZmYXVsdCB2YWx1ZXNcbiAgICAgIGxldCBib3JkZXJDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgbGV0IHRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICBsZXQgd2lkdGggPSBkLmRhdGEud2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gZC5kYXRhLmhlaWdodDtcblx0XHRcdGxldCBkZXNjcmlwdGlvbiA9ICcnIHx8IGQuZGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgIFxuICAgICAgaWYgKGQuZGF0YS5ib3JkZXJDb2xvcikge1xuICAgICAgICBib3JkZXJDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoXG4gICAgICAgICAgZC5kYXRhLmJvcmRlckNvbG9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZC5kYXRhLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgIGQuZGF0YS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChkLmRhdGEudGV4dENvbG9yKSB7XG4gICAgICAgIHRleHRDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLnRleHRDb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dGVuZCBub2RlIG9iamVjdCB3aXRoIGNhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICB0ZXh0Q29sb3IsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIG5vZGVzIGZvciBjbGlja1xuICAgIGF0dHJzLm5vZGVzID0gbm9kZXM7XG5cbiAgICAvLyBHZXQgYWxsIGxpbmtzXG4gICAgY29uc3QgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgLy8gU2V0IGNvbnN0YW50IGRlcHRoIGZvciBlYWNoIG5vZGVzXG4gICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4gKGQueSA9IGQuZGVwdGggKiBhdHRycy5kZXB0aCkpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExJTktTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBHZXQgbGlua3Mgc2VsZWN0aW9uXG4gICAgY29uc3QgbGlua1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckdcbiAgICAgIC5zZWxlY3RBbGwoJ3BhdGgubGluaycpXG4gICAgICAuZGF0YShsaW5rcywgKHsgaWQgfSkgPT4gaWQpO1xuXG4gICAgLy8gRW50ZXIgYW55IG5ldyBsaW5rcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXG4gICAgY29uc3QgbGlua0VudGVyID0gbGlua1NlbGVjdGlvblxuICAgICAgLmVudGVyKClcbiAgICAgIC5pbnNlcnQoJ3BhdGgnLCAnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogeDAsXG4gICAgICAgICAgeTogeTAsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKG8sIFtvXSk7XG4gICAgICB9KTtcblxuICAgIC8vIEdldCBsaW5rcyB1cGRhdGUgc2VsZWN0aW9uXG4gICAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rU2VsZWN0aW9uKTtcblxuICAgIC8vIFN0eWxpbmcgbGlua3NcbiAgICBsaW5rVXBkYXRlXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKFxuICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLmNvbm5lY3RvckxpbmVXaWR0aCB8fCAyXG4gICAgICApXG4gICAgICAuYXR0cignc3Ryb2tlJywgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmNvbm5lY3RvckxpbmVDb2xvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgICAgZGF0YS5jb25uZWN0b3JMaW5lQ29sb3JcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnZ3JlZW4nO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmRhc2hBcnJheSkge1xuICAgICAgICAgIHJldHVybiBkYXRhLmRhc2hBcnJheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KTtcblxuICAgIC8vIFRyYW5zaXRpb24gYmFjayB0byB0aGUgcGFyZW50IGVsZW1lbnQgcG9zaXRpb25cbiAgICBsaW5rVXBkYXRlXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudHMgPSBkLmRhdGEucGFyZW50Tm9kZUlkcy5tYXAoXG4gICAgICAgICAgKHBhcmVudE5vZGVJZCkgPT5cbiAgICAgICAgICAgIG5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IHBhcmVudE5vZGVJZClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhZ29uYWwoZCwgcGFyZW50cyk7XG4gICAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBhbnkgIGxpbmtzIHdoaWNoIGlzIGV4aXRpbmcgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgY29uc3QgbGlua0V4aXQgPSBsaW5rU2VsZWN0aW9uXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogeCA/IHggOiAwLFxuICAgICAgICAgIHk6IHkgPyB5IDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRpYWcgPSB0aGlzLmRpYWdvbmFsKG8sIFtvXSk7XG4gICAgICAgIHJldHVybiBkaWFnO1xuICAgICAgfSlcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBOT0RFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vIEdldCBub2RlcyBzZWxlY3Rpb25cbiAgICBjb25zdCBub2Rlc1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckdcbiAgICAgIC5zZWxlY3RBbGwoJ2cubm9kZScpXG4gICAgICAuZGF0YShub2RlcywgKHsgaWQgfSkgPT4gaWQpO1xuXG4gICAgbGV0IGh0ID0gdGhpcztcbiAgICAvLyBFbnRlciBhbnkgbmV3IG5vZGVzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cbiAgICBjb25zdCBub2RlRW50ZXIgPSBub2Rlc1NlbGVjdGlvblxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7eDB9LCR7eTB9KWApXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLm9uKCdjbGljaycsICh7IGRhdGEgfSkgPT4geyBcbiAgICAgICAgaWYgKGRhdGEuY2xpY2thYmxlKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW1xuICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgIF0uaW5kZXhPZihkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbXG4gICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgIF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbXG4gICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgIF0ucHVzaChkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhdHRycy5hY2FkZW1pY1ZhbHVlc1tcbiAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICBdLmluZGV4T2YoZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgIF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IDI7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9pZiBlbXB0eVxuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgICAgXS5wdXNoKCdUb3RhbCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgICBdWzBdID09ICdUb3RhbCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9pZiAnVG90YWwnXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgICBdLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICBdLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gMTA7XG5cbiAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmFjYWRlbWljVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKj0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0b3RhbCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAnV0FSTklORzogQWRkaW5nIG1vcmUgYWNhZGVtaWMgYXR0cmlidXRlcyBtYXkgcmVzdWx0IGluIGxvdyB2aXNpYmlsaXR5IGluIHRoZSB2aXN1YWxpemF0aW9uIG9yIGNyYXNoaW5nJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9XG4gICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPT0gMiA/IDEwIDogMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5leHBhbmRhYmxlKSB7XG4gICAgICAgICAgbGV0IG5vZGVDbGlja2VkID0gbm9kZXMuZmluZChcbiAgICAgICAgICAgIChub2RlKSA9PiBub2RlLmlkID09PSBkYXRhLm5vZGVJZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaHQub25CdXR0b25DbGljayhub2RlQ2xpY2tlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBodC51cGRhdGUoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoZCkgPT4ge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGQzLmV2ZW50KTtcbiAgICAgICAgaWYgKGQuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICBhdHRycy50b29sdGlwRGl2XG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMC45KTtcbiAgICAgICAgICBhdHRycy50b29sdGlwRGl2XG4gICAgICAgICAgICAuaHRtbChkLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGF0dHJzLnRvb2x0aXBEaXYudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCkuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gQWRkIGJhY2tncm91bmQgcmVjdGFuZ2xlIGZvciB0aGUgbm9kZXNcbiAgICBub2RlRW50ZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAncmVjdCcsXG4gICAgICAgIHNlbGVjdG9yOiAnbm9kZS1yZWN0JyxcbiAgICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoeyBfY2hpbGRyZW4gfSkgPT5cbiAgICAgICAgX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6ICcjZmZmJ1xuICAgICAgKTtcblxuICAgIC8vIE5vZGUgdXBkYXRlIHN0eWxlc1xuICAgIGNvbnN0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXJcbiAgICAgIC5tZXJnZShub2Rlc1NlbGVjdGlvbilcbiAgICAgIC5zdHlsZSgnZm9udCcsICcxMnB4IHNhbnMtc2VyaWYnKTtcblxuICAgIC8vIEFkZCBmb3JlaWduT2JqZWN0IGVsZW1lbnQgaW5zaWRlIHJlY3RhbmdsZVxuICAgIGNvbnN0IGZvID0gbm9kZVVwZGF0ZS5wYXR0ZXJuaWZ5KHtcbiAgICAgIHRhZzogJ2ZvcmVpZ25PYmplY3QnLFxuICAgICAgc2VsZWN0b3I6ICdub2RlLWZvcmVpZ24tb2JqZWN0JyxcbiAgICAgIGRhdGE6IChkKSA9PiBbZF0sXG4gICAgfSk7XG5cbiAgICAvLyBBZGQgZm9yZWlnbiBvYmplY3RcbiAgICBmby5wYXR0ZXJuaWZ5KHtcbiAgICAgIHRhZzogJ3hodG1sOmRpdicsXG4gICAgICBzZWxlY3RvcjogJ25vZGUtZm9yZWlnbi1vYmplY3QtZGl2JyxcbiAgICAgIGRhdGE6IChkKSA9PiBbZF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKTtcblxuICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIHByb3BlciBwb3NpdGlvbiBmb3IgdGhlIG5vZGVcbiAgICBub2RlVXBkYXRlXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICh7IHgsIHkgfSkgPT4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYFxuICAgICAgKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKTtcblxuICAgIC8vIFN0eWxlIG5vZGUgcmVjdGFuZ2xlc1xuICAgIG5vZGVVcGRhdGVcbiAgICAgIC5zZWxlY3QoJy5ub2RlLXJlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgKHsgZGF0YSB9KSA9PiBkYXRhLndpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsICh7IGRhdGEgfSkgPT4gZGF0YS5oZWlnaHQpXG4gICAgICAuYXR0cigneCcsICh7IGRhdGEgfSkgPT4gLWRhdGEud2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ3knLCAoeyBkYXRhIH0pID0+IC1kYXRhLmhlaWdodCAvIDIpXG4gICAgICAuYXR0cigncngnLCAoeyBkYXRhIH0pID0+IGRhdGEuYm9yZGVyUmFkaXVzIHx8IDApXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICh7IGRhdGEgfSkgPT4gZGF0YS5ib3JkZXJXaWR0aCB8fCBhdHRycy5zdHJva2VXaWR0aFxuICAgICAgKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAoeyBib3JkZXJDb2xvciB9KSA9PiBib3JkZXJDb2xvcilcbiAgICAgIC5zdHlsZShcbiAgICAgICAgJ2ZpbGwnLFxuICAgICAgICAoeyBiYWNrZ3JvdW5kQ29sb3IgfSkgPT4gYmFja2dyb3VuZENvbG9yXG4gICAgICApO1xuXG4gICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzIGFmdGVyIHRyYW5zaXRpb25cbiAgICBjb25zdCBub2RlRXhpdFRyYW5zaXRpb24gPSBub2Rlc1NlbGVjdGlvblxuICAgICAgLmV4aXQoKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgKVxuICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApO1xuXG4gICAgLy8gT24gZXhpdCByZWR1Y2UgdGhlIG5vZGUgcmVjdHMgc2l6ZSB0byAwXG4gICAgbm9kZUV4aXRUcmFuc2l0aW9uXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1yZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKTtcblxuICAgIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxuICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQueDAgPSBkLng7XG4gICAgICBkLnkwID0gZC55O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkZXRlY3RzIHdoZXRoZXIgY3VycmVudCBicm93c2VyIGlzIGVkZ2VcbiAgaXNFZGdlKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnRWRnZScpO1xuICB9XG5cbiAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGN1c3RvbSBkaWFnb25hbCAtIHBsYXkgd2l0aCBpdCBoZXJlIC0gaHR0cHM6Ly90by5seS8xemhUS1xuICBkaWFnb25hbChzLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgLmNlbnRlckcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsICdncm91cE9mUGF0aHMnKTtcbiAgICBsZXQgaGVpZ2h0TXVsdGlwbGllciA9XG4gICAgICBwYXJlbnRzLmxlbmd0aCA9PSAyID8gMC41NzUgOiAwLjQyNTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgcGFyZW50cykge1xuICAgICAgbGV0IGhlaWdodCA9IHMueSAtIHQueTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHNvbWUgdmFyaWFibGVzIGJhc2VkIG9uIHNvdXJjZSBhbmQgdGFyZ2V0IChzLHQpIGNvb3JkaW5hdGVzXG4gICAgICBsZXQgeCA9IHMueDtcbiAgICAgIGxldCB5ID0gcy55O1xuICAgICAgbGV0IGV4ID0gdC54O1xuICAgICAgbGV0IGV5ID0gdC55O1xuICAgICAgbGV0IHhydnMgPSBleCAtIHggPCAwID8gLTEgOiAxO1xuICAgICAgbGV0IHlydnMgPSAtMTtcbiAgICAgIGxldCByZGVmID0gMzU7XG4gICAgICBsZXQgckluaXRpYWwgPVxuICAgICAgICBNYXRoLmFicyhleCAtIHgpIC8gMiA8IHJkZWZcbiAgICAgICAgICA/IE1hdGguYWJzKGV4IC0geCkgLyAyXG4gICAgICAgICAgOiByZGVmO1xuICAgICAgbGV0IHIgPVxuICAgICAgICBNYXRoLmFicyhleSAtIHkpIC8gMiA8IHJJbml0aWFsXG4gICAgICAgICAgPyBNYXRoLmFicyhleSAtIHkpIC8gMlxuICAgICAgICAgIDogckluaXRpYWw7XG4gICAgICBsZXQgaCA9IE1hdGguYWJzKGV5IC0geSkgKiBoZWlnaHRNdWx0aXBsaWVyIC0gcjtcbiAgICAgIGxldCB3ID0gTWF0aC5hYnMoZXggLSB4KSAtIHIgKiAyO1xuXG4gICAgICBsZXQgcGF0aCA9IGBcbiAgICAgICAgICAgICBNICR7eH0gJHt5fVxuICAgICAgICAgICAgIEwgJHt4fSAke3kgKyBoICogeXJ2c31cbiAgICAgICAgICAgICBDICR7eH0gJHt5ICsgaCAqIHlydnMgKyByICogeXJ2c30gJHt4fSAke1xuICAgICAgICB5ICsgaCAqIHlydnMgKyByICogeXJ2c1xuICAgICAgfSAke3ggKyByICogeHJ2c30gJHt5ICsgaCAqIHlydnMgKyByICogeXJ2c31cbiAgICAgICAgICAgICBMICR7eCArIHcgKiB4cnZzICsgciAqIHhydnN9ICR7XG4gICAgICAgIHkgKyBoICogeXJ2cyArIHIgKiB5cnZzXG4gICAgICB9XG4gICAgICAgICAgICAgQyAke2V4fSAke3kgKyBoICogeXJ2cyArIHIgKiB5cnZzfSAke2V4fSAke1xuICAgICAgICB5ICsgaCAqIHlydnMgKyByICogeXJ2c1xuICAgICAgfSAke2V4fSAke2V5IC0gaCAqIHlydnN9XG4gICAgICAgICAgICAgTCAke2V4fSAke2V5fVxuICAgICAgICAgICBgO1xuICAgICAgZ3JvdXBcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpO1xuICAgIH1cblxuICAgIGxldCBjb21iaW5lZEQgPSAnJztcbiAgICBncm91cC5zZWxlY3RBbGwoJ3BhdGgnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkMy5zZWxlY3QodGhpcykuYXR0cignZCcpKVxuICAgICAgICBjb21iaW5lZEQgKz0gZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2QnKTtcbiAgICB9KTtcbiAgICBncm91cC5yZW1vdmUoKTtcbiAgICByZXR1cm4gY29tYmluZWREO1xuICB9XG5cbiAgcmVzdHlsZUZvcmVpZ25PYmplY3RFbGVtZW50cygpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgYXR0cnMuc3ZnXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1mb3JlaWduLW9iamVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAoeyB3aWR0aCB9KSA9PiB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0KVxuICAgICAgLmF0dHIoJ3gnLCAoeyB3aWR0aCB9KSA9PiAtd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ3knLCAoeyBoZWlnaHQgfSkgPT4gLWhlaWdodCAvIDIpO1xuICAgIGF0dHJzLnN2Z1xuICAgICAgLnNlbGVjdEFsbCgnLm5vZGUtZm9yZWlnbi1vYmplY3QtZGl2JylcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCAoeyB3aWR0aCB9KSA9PiBgJHt3aWR0aH1weGApXG4gICAgICAuc3R5bGUoJ2hlaWdodCcsICh7IGhlaWdodCB9KSA9PiBgJHtoZWlnaHR9cHhgKVxuICAgICAgLnN0eWxlKCdjb2xvcicsICh7IHRleHRDb2xvciB9KSA9PlxuICAgICAgICB0ZXh0Q29sb3IgPyB0ZXh0Q29sb3IgOiAnYmxhY2snXG4gICAgICApXG4gICAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcbiAgICAgIC5zdHlsZSgnbWFyZ2luLXRvcCcsICc1MHB4JylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzQwcHgnKVxuICAgICAgLmh0bWwoKHsgZGF0YSB9KSA9PiBkYXRhLm5vZGVJZCk7XG4gIH1cblxuICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gIG9uQnV0dG9uQ2xpY2soZCkge1xuICAgIC8vIElmIGNoaWxkcmVucyBhcmUgZXhwYW5kZWRcbiAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgaWYgKGQuaWQgPT09ICdDb252b2NhdGlvbicpIHtcbiAgICAgICAgY29uc3QgZGVtb2dyYXBoaWNOb2RlID0gZC5wYXJlbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGlmIChkZW1vZ3JhcGhpY05vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vQ29sbGFwc2UgdGhlbVxuICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG5cbiAgICAgIC8vIFNldCBkZXNjZW5kYW50cyBleHBhbmRlZCBwcm9wZXJ0eSB0byBmYWxzZVxuICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkLmlkID09PSAnRGVtb2dyYXBoaWNzJykge1xuICAgICAgICBjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcblxuICAgICAgICBpZiAoY29udm9jYXRpb25Ob2RlLmNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soY29udm9jYXRpb25Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFeHBhbmQgY2hpbGRyZW5cbiAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgIC8vIFNldCBlYWNoIGNoaWxkcmVuIGFzIGV4cGFuZGVkXG5cdFx0XHRpZiAoZC5jaGlsZHJlbilcbiAgICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKFxuICAgICAgICAgICh7IGRhdGEgfSkgPT4gKGRhdGEuZXhwYW5kZWQgPSB0cnVlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlZHJhdyBHcmFwaFxuICAgIHRoaXMudXBkYXRlKGQpO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjaGFuZ2VzIGBleHBhbmRlZGAgcHJvcGVydHkgdG8gZGVzY2VuZGFudHNcbiAgc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oXG4gICAgeyBkYXRhLCBjaGlsZHJlbiwgX2NoaWxkcmVuIH0sXG4gICAgZmxhZ1xuICApIHtcbiAgICAvLyBTZXQgZmxhZyB0byB0aGUgY3VycmVudCBwcm9wZXJ0eVxuICAgIGRhdGEuZXhwYW5kZWQgPSBmbGFnO1xuXG4gICAgLy8gTG9vcCBvdmVyIGFuZCByZWN1cnNpdmVseSB1cGRhdGUgZXhwYW5kZWQgY2hpbGRyZW4ncyBkZXNjZW5kYW50c1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICB0aGlzLnNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKGQsIGZsYWcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCBvdmVyIGFuZCByZWN1cnNpdmVseSB1cGRhdGUgY29sbGFwc2VkIGNoaWxkcmVuJ3MgZGVzY2VuZGFudHNcbiAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICBfY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICB0aGlzLnNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKGQsIGZsYWcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgaW52b2tlZCB2aWEgY2hhcnQuc2V0RXhwYW5kZWQgQVBJLCBpdCBleHBhbmRzIG9yIGNvbGxhcHNlcyBwYXJ0aWN1bGFyIG5vZGVcbiAgc2V0RXhwYW5kZWQoaWQsIGV4cGFuZGVkRmxhZykge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgLy8gUmV0cmlldmUgbm9kZSBieSBub2RlIElkXG4gICAgY29uc3Qgbm9kZSA9IGF0dHJzLmFsbE5vZGVzLmZpbHRlcihcbiAgICAgICh7IGRhdGEgfSkgPT4gZGF0YS5ub2RlSWQgPT0gaWRcbiAgICApWzBdO1xuXG4gICAgLy8gSWYgbm9kZSBleGlzdHMsIHNldCBleHBhbnNpb24gZmxhZ1xuICAgIGlmIChub2RlKSBub2RlLmRhdGEuZXhwYW5kZWQgPSBleHBhbmRlZEZsYWc7XG5cbiAgICAvLyBGaXJzdCBleHBhbmQgYWxsIG5vZGVzXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmV4cGFuZChkKSk7XG5cbiAgICAvLyBUaGVuIGNvbGxhcHNlIGFsbCBub2Rlc1xuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4gdGhpcy5jb2xsYXBzZShkKSk7XG5cbiAgICAvLyBUaGVuIGV4cGFuZCBvbmx5IHRoZSBub2Rlcywgd2hpY2ggd2VyZSBwcmV2aW91c2x5IGV4cGFuZGVkLCBvciBoYXZlIGFuIGV4cGFuZCBmbGFnIHNldFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpXG4gICAgKTtcblxuICAgIC8vIFJlZHJhdyBncmFwaFxuICAgIHRoaXMudXBkYXRlKGF0dHJzLnJvb3QpO1xuICB9XG5cbiAgLy8gTWV0aG9kIHdoaWNoIG9ubHkgZXhwYW5kcyBub2Rlcywgd2hpY2ggaGF2ZSBwcm9wZXJ0eSBzZXQgXCJleHBhbmRlZD10cnVlXCJcbiAgZXhwYW5kU29tZU5vZGVzKGQpIHtcbiAgICAvLyBJZiBub2RlIGhhcyBleHBhbmRlZCBwcm9wZXJ0eSBzZXRcbiAgICBpZiAoZC5kYXRhLmV4cGFuZGVkKSB7XG4gICAgICAvLyBSZXRyaWV2ZSBub2RlJ3MgcGFyZW50XG4gICAgICBsZXQgcGFyZW50ID0gZC5wYXJlbnQ7XG5cbiAgICAgIC8vIFdoaWxlIHdlIGNhbiBnbyB1cFxuICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAvLyBFeHBhbmQgYWxsIGN1cnJlbnQgcGFyZW50J3MgY2hpbGRyZW5cbiAgICAgICAgaWYgKHBhcmVudC5fY2hpbGRyZW4pIHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuX2NoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwbGFjZSBjdXJyZW50IHBhcmVudCBob2xkaW5nIG9iamVjdFxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZWxseSBkbyB0aGUgc2FtZSBmb3IgY29sbGFwc2VkIG5vZGVzXG4gICAgaWYgKGQuX2NoaWxkcmVuKSB7XG4gICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmVsbHkgZG8gdGhlIHNhbWUgZm9yIGV4cGFuZGVkIG5vZGVzXG4gICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgIGQuY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIG5vZGVzIHN0YXRlIGFuZCByZWRyYXdzIGdyYXBoLCB1c3VhbGx5IGFmdGVyIGRhdGEgY2hhbmdlXG4gIHVwZGF0ZU5vZGVzU3RhdGUoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAvLyBTdG9yZSBuZXcgcm9vdCBieSBjb252ZXJ0aW5nIGZsYXQgZGF0YSB0byBoaWVyYXJjaHlcbiAgICBhdHRycy5yb290ID0gZDNcbiAgICAgIC5zdHJhdGlmeSgpXG4gICAgICAuaWQoKHsgbm9kZUlkIH0pID0+IG5vZGVJZClcbiAgICAgIC5wYXJlbnRJZCgoeyBwYXJlbnROb2RlSWRzIH0pID0+IHBhcmVudE5vZGVJZHNbMF0pKFxuICAgICAgYXR0cnMuZGF0YVxuICAgICk7XG5cbiAgICAvLyBTdG9yZSBwb3NpdGlvbnMsIHdoZXJlIGNoaWxkcmVuIGFwcGVhciBkdXJpbmcgdGhlaXIgZW50ZXIgYW5pbWF0aW9uXG4gICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgYXR0cnMucm9vdC55MCA9IDA7XG5cbiAgICAvLyBTdG9yZSBhbGwgbm9kZXMgaW4gZmxhdCBmb3JtYXQgKGFsdGhvdWdoLCBub3cgd2UgY2FuIGJyb3dzZSBwYXJlbnQsIHNlZSBkZXB0aCBlLnQuYy4gKVxuICAgIGF0dHJzLmFsbE5vZGVzID0gYXR0cnMubGF5b3V0c1xuICAgICAgLnRyZWVtYXAoYXR0cnMucm9vdClcbiAgICAgIC5kZXNjZW5kYW50cygpO1xuXG4gICAgLy8gU3RvcmUgZGlyZWN0IGFuZCB0b3RhbCBkZXNjZW5kYW50cyBjb3VudFxuICAgIGF0dHJzLmFsbE5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZC5kYXRhLCB7XG4gICAgICAgIGRpcmVjdFN1Ym9yZGluYXRlczogZC5jaGlsZHJlblxuICAgICAgICAgID8gZC5jaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICA6IDAsXG4gICAgICAgIHRvdGFsU3Vib3JkaW5hdGVzOiBkLmRlc2NlbmRhbnRzKCkubGVuZ3RoIC0gMSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRXhwYW5kIGFsbCBub2RlcyBmaXJzdFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCh0aGlzLmV4cGFuZCk7XG5cbiAgICAvLyBUaGVuIGNvbGxhcHNlIHRoZW0gYWxsXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgIC8vIFRoZW4gb25seSBleHBhbmQgbm9kZXMsIHdoaWNoIGhhdmUgZXhwYW5kZWQgcHJvcHJ0eSBzZXQgdG8gdHJ1ZVxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+XG4gICAgICB0aGlzLmV4cGFuZFNvbWVOb2RlcyhjaClcbiAgICApO1xuXG4gICAgLy8gUmVkcmF3IEdyYXBoc1xuICAgIHRoaXMudXBkYXRlKGF0dHJzLnJvb3QpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggY29sbGFwc2VzIHBhc3NlZCBub2RlIGFuZCBpdCdzIGRlc2NlbmRhbnRzXG4gIGNvbGxhcHNlKGQpIHtcbiAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuY29sbGFwc2UoY2gpKTtcbiAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHdoaWNoIGV4cGFuZHMgcGFzc2VkIG5vZGUgYW5kIGl0J3MgZGVzY2VuZGFudHNcbiAgZXhwYW5kKGQpIHtcbiAgICBpZiAoZC5fY2hpbGRyZW4pIHtcbiAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgIGQuY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuZXhwYW5kKGNoKSk7XG4gICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gWm9vbSBoYW5kbGVyIGZ1bmN0aW9uXG4gIHpvb21lZCgpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IGNoYXJ0ID0gYXR0cnMuY2hhcnQ7XG5cbiAgICAvLyBHZXQgZDMgZXZlbnQncyB0cmFuc2Zvcm0gb2JqZWN0XG4gICAgY29uc3QgdHJhbnNmb3JtID0gZDMuZXZlbnQudHJhbnNmb3JtO1xuXG4gICAgLy8gU3RvcmUgaXRcbiAgICBhdHRycy5sYXN0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgLy8gUmVwb3NpdGlvbiBhbmQgcmVzY2FsZSBjaGFydCBhY2NvcmRpbmdseVxuICAgIGNoYXJ0LmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG5cbiAgICAvLyBBcHBseSBuZXcgc3R5bGVzIHRvIHRoZSBmb3JlaWduIG9iamVjdCBlbGVtZW50XG4gICAgaWYgKHRoaXMuaXNFZGdlKCkpIHtcbiAgICAgIHRoaXMucmVzdHlsZUZvcmVpZ25PYmplY3RFbGVtZW50cygpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN1bmJ1cnN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9FeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgc3ZnV2lkdGg6IDMwMDAsXG4gICAgICBzdmdIZWlnaHQ6IDMwMDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBleHRlbmRlZExpbmVMZW5ndGg6IDQwLFxuICAgICAgdGV4dERpc3RhbmNlOiAxNSxcbiAgICAgIG91dGVyVGV4dFNpemU6IFwiMjBweFwiLFxuICAgICAgYXR0cmlidXRlSW5kZXg6IG51bGwsXG4gICAgICBoaXN0b3J5OiBbXSxcbiAgICAgIGRpc3BsYXlOb2RlczogbnVsbCxcbiAgICAgIHZhbHVlczogbnVsbCxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBNYWxlOiAnI2ZjOGQ1OScsXG4gICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICBJbnRlcm5hdGlvbmFsOiAnIzk5OGVjMycsXG4gICAgICAgIERvbWVzdGljOiAnI2YxYTM0MCcsXG4gICAgICAgICc8PTE3JzogJyNmN2ZjZjUnLFxuICAgICAgICAnMTgtMjAnOiAnI2U1ZjVlMCcsXG4gICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgJzI2LTMwJzogJyNhMWQ5OWInLFxuICAgICAgICAnMzEtMzUnOiAnIzc0YzQ3NicsXG4gICAgICAgICczNi00NSc6ICcjNDFhYjVkJyxcbiAgICAgICAgJzQ2LTU1JzogJyMyMzhiNDUnLFxuICAgICAgICAnNTUrJzogJyMwMDZkMmMnLFxuICAgICAgICAnMCc6ICcjOTg5ODk4J1xuICAgICAgfSxcbiAgICAgIHRleHRDaXJjbGVzQ291bnQ6IFtdLFxuICAgICAgdGV4dENpcmNsZXNQZXJjZW50OiBbXSxcbiAgICAgIGNlbnRlclRleHQ6IG51bGwsXG4gICAgICBjZW50ZXJUZXh0U2l6ZTogXCI0MHB4XCIsXG4gICAgICBjZW50ZXJUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGNvbXBhcmVNb2RlOiBmYWxzZSxcbiAgICAgIGxlZ2VuZFdpZHRoOiAxNTBcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIFxuICAvKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBpbiBzdmcgKi9cbiAgcmVtb3ZlQWxsKCkge1xuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpLnN2Zy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgfVxuICBcbiAgLyogQ29udmVydHMgb2JqZWN0cyB0byBzbGljZXMgd2l0aCBxdWVyaWVzICovXG4gIGdldFZhbHVlcyhhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAvL3ByZXBhcmluZyBzbGljZXNcbiAgICBjb25zdCBjYXJ0ZXNpYW4gPSAoLi4uYSkgPT5cbiAgICAgIGEucmVkdWNlKChhLCBiKSA9PlxuICAgICAgICBhLmZsYXRNYXAoKGQpID0+IGIubWFwKChlKSA9PiBbZCwgZV0uZmxhdCgpKSlcbiAgICAgICk7XG4gICAgbGV0IHNsaWNlcyA9IGNhcnRlc2lhbihcbiAgICAgIGFjYWRlbWljVmFsdWVzWydBY2FkZW1pYyBZZWFyJ10sXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5EZWdyZWUsXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5GYWN1bHR5LFxuICAgICAgYWNhZGVtaWNWYWx1ZXNbJ1N0dWR5IFN0YXR1cyddXG4gICAgKTtcblxuICAgIGNvbnN0IG1ha2VRdWVyeSA9IChzbGljZSwgZGl2ZXJzaXR5QXR0ciwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBxdWVyeSA9IFsuLi5zbGljZV07XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChwcm9wICE9PSBkaXZlcnNpdHlBdHRyKSB7XG4gICAgICAgICAgcXVlcnkucHVzaCgnVG90YWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH07XG5cbiAgICAvL2NvbnZlcnQgc2xpY2VzIHRvIGtleSBmb3JtYXRcbiAgIFxuICAgIGxldCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBzbGljZSBvZiBzbGljZXMpIHtcbiAgICAgIGxldCBzdHIgPSBzbGljZS50b1N0cmluZygpO1xuICAgICAgdmFsdWVzW3N0cl0gPSB7fTtcbiAgICAgIGZvciAobGV0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09IDApIGNvbnRpbnVlO1xuICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXSA9IHt9O1xuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBkaXZlcnNpdHlWYWx1ZXNbYXR0cl0pIHtcbiAgICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXVt2YWx1ZV0gPSBtYWtlUXVlcnkoXG4gICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuICBcbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBhcmNzLCByZXR1cm4gYXJjIHdpZHRoLCBpbm5lcnJhZGl1cyBhbmQgdGV4dCBzaXplKi9cbiAgY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyh4LCB5LCBudW1BcmNzKXtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblx0XHRcbiAgICBsZXQgdGV4dEhlaWdodE9mZnNldCA9IDUwO1xuICAgIFxuICAgIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5LXRleHRIZWlnaHRPZmZzZXQpOyBcbiAgICBsZXQgYXJjV2lkdGggPSAobWluLygyKm51bUFyY3MgKyA3KSk7IC8vbWluID0gMipudW1BcmNzKmFyY1dpZHRoICsgMippbm5lclJhZGl1cywgaW5uZXJSYWRpdXMgPSAzKmFyY1dpZHRoXG4gICAgbGV0IGlubmVyUmFkaXVzID0gMyphcmNXaWR0aDtcbiAgICBcbiAgICBsZXQgbXVsdGlwbGllciA9IDEuNTtcbiAgICBsZXQgbiA9IDEzOyAvLydpbnRlcm5hdGlvbmFsJyB3aXRoIDEzIGxldHRlcnMgaXMgbG9uZ2VzdCB3b3JkIGluIGRpdmVyc2l0eSBhdHRyaWJ1dGVzIFxuICAgIGxldCBpbm5lclRleHRTaXplID0gbXVsdGlwbGllciooMippbm5lclJhZGl1cykvbiArIFwicHhcIjtcbiAgICByZXR1cm4ge2FyY1dpZHRoOiBhcmNXaWR0aCwgaW5uZXJSYWRpdXM6IGlubmVyUmFkaXVzLCBpbm5lclRleHRTaXplOiBpbm5lclRleHRTaXplfTtcbiAgfVxuICBcbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBzcXVhcmVzLCByZXR1cm4gcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemUgKi9cbiAgY29tcHV0ZUNvbXBhcmVEaW1lbnNpb25zKHgsIHksIG4pe1xuICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMsIGFuZCBjZWxsIHNpemVcbiAgICBsZXQgcmF0aW8gPSB4IC8geTtcbiAgICBsZXQgbmNvbHNfZmxvYXQgPSBNYXRoLnNxcnQobiAqIHJhdGlvKTtcbiAgICBsZXQgbnJvd3NfZmxvYXQgPSBuIC8gbmNvbHNfZmxvYXQ7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIGhlaWdodFxuICAgIGxldCBucm93czEgPSBNYXRoLmNlaWwobnJvd3NfZmxvYXQpO1xuICAgIGxldCBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgd2hpbGUgKG5yb3dzMSAqIHJhdGlvIDwgbmNvbHMxKSB7XG4gICAgICAgIG5yb3dzMSsrO1xuICAgICAgICBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUxID0geSAvIG5yb3dzMTtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgd2lkdGhcbiAgICBsZXQgbmNvbHMyID0gTWF0aC5jZWlsKG5jb2xzX2Zsb2F0KTtcbiAgICBsZXQgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIHdoaWxlIChuY29sczIgPCBucm93czIgKiByYXRpbykge1xuICAgICAgICBuY29sczIrKztcbiAgICAgICAgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMiA9IHggLyBuY29sczI7XG5cbiAgICAvLyBGaW5kIHRoZSBiZXN0IHZhbHVlc1xuICAgIGxldCBucm93cywgbmNvbHMsIGNlbGxfc2l6ZTtcbiAgICBpZiAoY2VsbF9zaXplMSA8IGNlbGxfc2l6ZTIpIHtcbiAgICAgICAgbnJvd3MgPSBucm93czI7XG4gICAgICAgIG5jb2xzID0gbmNvbHMyO1xuICAgICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5yb3dzID0gbnJvd3MxO1xuICAgICAgICBuY29scyA9IG5jb2xzMTtcbiAgICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtzaXplOiBjZWxsX3NpemUsIHJvd3M6IG5yb3dzLCBjb2xzOiBuY29sc307XG4gIH1cbiAgXG4gIC8qIEZldGNoaW5nIGRhdGEgYW5kIHNldHRpbmcgdXAgc3ZnIGNvbnRhaW5lciAqL1xuICBhc3luYyBzZXR1cCh1cmwpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblx0XHRsZXQgc2IgPSB0aGlzO1xuICAgIFxuICAgIC8vbG9hZCBkYXRhIHN5bmNocm9ub3VzbHlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZDMuY3N2KHVybCk7XG5cbiAgICBhdHRycy5hdHRyaWJ1dGVJbmRleCA9IGRhdGEuY29sdW1ucztcblxuICAgIC8vY29udmVydCBkYXRhIHRvIG9iamVjdCBmb3JtYXRcbiAgICBhdHRycy5kYXRhID0gZGF0YS5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgb2JqLCBpKSB7XG4gICAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmopO1xuXG4gICAgICB2YWx1ZXMucG9wKCk7XG5cbiAgICAgIG1hcFsnJy5jb25jYXQodmFsdWVzKV0gPSBvYmouQ291bnQ7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcblxuICAgIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KGF0dHJzLmNvbnRhaW5lcik7XG5cbiAgICAvLyBzZXR0aW5nIHVwIGNvbXBhcmUgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQ29tcGFyZSA9ICgpID0+IHtcbiAgICAgIGF0dHJzLmNvbXBhcmVNb2RlID0gIWF0dHJzLmNvbXBhcmVNb2RlO1xuICAgICAgc2IucmVuZGVyKGF0dHJzLnZhbHVlcyk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5vbmNsaWNrID0gdG9nZ2xlQ29tcGFyZTtcbiAgICBcbiAgICBhdHRycy5zdmcgPSBzdmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBcbiAgIC8qIENvbnZlcnRpbmcgaW5wdXQgb2JqZWN0cyB0byB2YWx1ZXMgZm9yIGRpc3BsYXkgKi9cbiAgaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoXG4gICAgICBhY2FkZW1pY1ZhbHVlcyxcbiAgICAgIGRpdmVyc2l0eVZhbHVlc1xuICAgICk7XG5cbiAgICB0aGlzLnJlbmRlcih2YWx1ZXMpO1xuICB9XG4gIFxuICBcbiAgLyogUmVjdXJyaW5nIHJlbmRlciAqL1xuICByZW5kZXIodmFsdWVzKXtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblx0XHRsZXQgc2IgPSB0aGlzO1xuICAgXG4gICAgLy8gU2V0dGluZyB2YWx1ZXMgc28gdmFsdWVzIGlzIHN0aWxsIGFjY2Vzc2libGUgd2hlbiBjb21wYXJlIGlzIHRvZ2dsZWQgXG4gICAgYXR0cnMudmFsdWVzID0gdmFsdWVzOyBcbiAgICBcbiAgICAvLyByZXB1cnBvc2luZyBiYWNrIGJ1dHRvbiBpZiBuZWNlc3NhcnlcbiAgICBpZiAoYXR0cnMuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBjb25zdCBiYWNrID0gKCkgPT4gc2IucmVuZGVyKGF0dHJzLmhpc3RvcnkucG9wKCkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYXR0cnMuZGlzcGxheU5vZGVzO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgZWxlbWVudHMgaW4gc3ZnXG5cdFx0dGhpcy5yZW1vdmVBbGwoKTtcbiAgICBcbiAgICAvLyByZS1jcmVhdGUgdGhlIG5ldyBlbGVtZW50c1xuICAgIGlmICghYXR0cnMuY29tcGFyZU1vZGUpe1xuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICB0aGlzLnJlbmRlclN1bmJ1cnN0KHZhbHVlcyk7XG4gICAgICAgLy8gZGlzYWJsZSBjb21wYXJlIG1vZGUgaWYgb25seSAxIHNsaWNlXG4gICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID09PSAxKVxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgdGhpcy5yZW5kZXJDb21wYXJlKHZhbHVlcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyTGVnZW5kKHZhbHVlcyk7XG4gIH1cbiAgXG4gIC8vIHJlbmRlciB0aGUgc3VuYnVyc3RcbiByZW5kZXJTdW5idXJzdCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgbnVtQXJjcyA9IE9iamVjdC5rZXlzKE9iamVjdC52YWx1ZXModmFsdWVzKVswXSkubGVuZ3RoO1xuICAgIGNvbnN0IGV4dGVuZGVkTGluZUxlbmd0aCA9IGF0dHJzLmV4dGVuZGVkTGluZUxlbmd0aDtcbiAgICBjb25zdCBoYWxmU2xpY2VSYWRpYW5zID0gTWF0aC5QSSAvIG51bVNsaWNlcztcbiAgICBjb25zdCB0ZXh0RGlzdGFuY2UgPSBhdHRycy50ZXh0RGlzdGFuY2U7XG4gICAgY29uc3QgYXJjTGVuZ3RoID0gKDIgKiBNYXRoLlBJKSAvIG51bVNsaWNlcztcbiAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNzdW5idXJzdFwiKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gK2NvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSArY29udGFpbmVyLndpZHRoO1xuICAgXG4gICBcdGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodDtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gYXR0cnMubGVnZW5kV2lkdGg7XG4gICBcbiAgXHRjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMod2lkdGgsIGhlaWdodCwgbnVtQXJjcyk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICBcdGNvbnN0IGlubmVyVGV4dFNpemUgPSBwYXJhbXMuaW5uZXJUZXh0U2l6ZTtcbiAgIFxuICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgYXR0cnMuc3ZnV2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgYXR0cnMuc3ZnSGVpZ2h0KVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt3aWR0aC8yfSwke2hlaWdodC8yfSlgKTtcblxuICAgIGxldCBjZW50ZXJHcm91cCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2VudGVyLWdyb3VwJyk7XG4gICAgY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZScpXG4gICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTEgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnLTAuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICBcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoJ0NhdGVnb3J5JylcbiAgICBcdC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dCgnQ291bnQnKVxuICAgIFx0LmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMyA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcxLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCdQZXJjZW50JylcbiAgICBcdC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgc3VuYnVyc3RHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgLy9IZWxwZXIgbWV0aG9kc1xuICAgIGNvbnN0IGdldENpcmNsZVggPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgY29uc3QgZ2V0Q2lyY2xlWSA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cztcblxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvL2xpbmUgYnVpbGRlclxuICAgIGNvbnN0IGxpbmVCdWlsZGVyID0gKHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXM7XG4gICAgICBpZiAobnVtU2xpY2VzICUgMiA9PSAxKSByYWRpYW5zICs9IE1hdGguUEk7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ3gxJywgZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKCd5MScsIGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneDInLFxuICAgICAgICAgIGdldENpcmNsZVgoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3kyJyxcbiAgICAgICAgICBnZXRDaXJjbGVZKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHNsaWNlLCBzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBpZiAodGV4dCA9PT0gJycpe1xuICAgICAgXHR0ZXh0ID0gJ1RvdGFsJzsgXG4gICAgICB9XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeCA9IGdldENpcmNsZVgocmFkaWFucywgcmFkaXVzKTtcbiAgICAgIGxldCB5ID0gLWdldENpcmNsZVkocmFkaWFucywgcmFkaXVzKTtcblxuICAgICAgaWYgKHggPCAtMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDk7IC8vbGVmdCBzaWRlIGFkanVzdFxuICAgICAgZWxzZSBpZiAoeCA8IDEpIHggLT0gdGV4dC5sZW5ndGggKiA1OyAvL21pZGRsZSB0ZXh0IGFkanVzdFxuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIGF0dHJzLm91dGVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cblxuXG4gICBcdC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKGFyYywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIHNsaWNlLCBhdHRyLCB2YWx1ZSwgY291bnQsIHBlcmNlbnQpID0+IHtcdFxuXG4gICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKTtcblxuICAgIFx0XHRcdFx0XHRkMy5zZWxlY3QoXCJbaWQ9XFwnXCIgKyAgdmFsdWUgKyBcInJlY3RcXCddXCIpLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAzKTtcbiAgICAgICAgIFxuXHRcdFx0XHRcdFx0XHRpZiAoY291bnQhPTApe1xuICAgICAgICAgICAgICAgIGlmIChhdHRyID09PSAnQWdlJyl7XG4gICAgICAgICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dChhdHRyICsgXCI6IFwiICsgdmFsdWUpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQodmFsdWUpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IDUpe1xuICAgICAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dCgnPDUnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dChjb3VudCkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoXG4gICAgICAgICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgICAgICAgKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCgnJyk7XG4gICAgICAgICAgICAgICAgXHR0ZXh0Q2lyY2xlMi50ZXh0KCdObyBTdHVkZW50cycpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgIFx0dGV4dENpcmNsZTMudGV4dCgnJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KCdDYXRlZ29yeScpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dCgnQ291bnQnKS5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoJ1BlcmNlbnQnKS5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICBcdFx0XHRkMy5zZWxlY3QoXCJbaWQ9XFwnXCIgKyAgdmFsdWUgKyBcInJlY3RcXCddXCIpLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgXHRcdFx0aWYgKGNvdW50IT0wKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVzID0ge1xuICAgICAgICAgICAgICAgICAgW3NsaWNlXTogSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzW3NsaWNlXSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoYXR0cilcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cjEgaW4gbmV3VmFsdWVzW3NsaWNlXSl7XG4gICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW3NsaWNlXVthdHRyMV0pe1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyMSA9PT0gYXR0ciAmJiB2YWx1ZTEhPXZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNbc2xpY2VdW2F0dHIxXVt2YWx1ZTFdO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbc2xpY2VdW2F0dHIxXVt2YWx1ZTFdW2luZGV4XSA9IHZhbHVlOyBcbiAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0cnMuaGlzdG9yeS5wdXNoKHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgIFxuICAgIC8vYnVpbGQgYXJjc1xuICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IHNsaWNlIGluIHZhbHVlcykge1xuICAgICAgbGV0IGFyY0NvdW50ID0gMDtcbiAgICAgIGF0dHJsb29wOlxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IGFyYyA9IGQzXG4gICAgICAgICAgLmFyYygpXG4gICAgICAgICAgLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiBhcmNDb3VudClcbiAgICAgICAgICAub3V0ZXJSYWRpdXMoXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArIGFyY1dpZHRoICogKGFyY0NvdW50ICsgMSlcbiAgICAgICAgICApO1xuXG4gICAgICAgIGxldCBzbGljZVN0YXJ0QW5nbGUgPSBzbGljZUNvdW50ICogYXJjTGVuZ3RoO1xuXG5cbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSs9TnVtYmVyKGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPT0gMCl7XG4gICAgICAgICAgY29uc29sZS5sb2coc2xpY2UgKyBcIiA6IFwiICsgYXR0cik7XG4gICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgKyBhcmNMZW5ndGgsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgYXJjQnVpbGRlcihhcmMsIHNsaWNlU3RhcnRBbmdsZSwgZW5kQW5nbGUsIHNsaWNlLCBhdHRyLCAnMCcsIDAsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dKTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gY291bnQgLyBzdW07XG4gICAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgYXJjTGVuZ3RoICogcGVyY2VudCxcbiAgICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcblxuICAgICAgICAgICAgYXJjQnVpbGRlcihhcmMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBzbGljZSwgYXR0ciwgdmFsdWUsIGNvdW50LCBwZXJjZW50KTtcbiAgICAgICAgXHR9XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgYXJjQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKG51bVNsaWNlcyA9PSAxKSB0ZXh0QnVpbGRlcihzbGljZSwgMC41KTtcbiAgICAgIGVsc2UgdGV4dEJ1aWxkZXIoc2xpY2UsIHNsaWNlQ291bnQpO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cblxuICAgIC8vYnVpbGQgbGluZXMgYWZ0ZXIgc28gdGhleSBhcmUgb24gdG9wXG4gICAgZm9yIChcbiAgICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICAgIHNsaWNlQ291bnQgPCBudW1TbGljZXMgJiYgbnVtU2xpY2VzID4gMTtcbiAgICAgIHNsaWNlQ291bnQrK1xuICAgICkge1xuICAgICAgbGluZUJ1aWxkZXIoc2xpY2VDb3VudCk7XG4gICAgfVxuICB9XG4gIFxuXHRkaXNwbGF5VmFsdWVzKHZhbHVlcywgc2VsZWN0ZWRWYWx1ZSwgYXR0cil7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBzYiA9IHRoaXM7XG4gICAgXG4gICAgaWYgKGF0dHIgPT09ICdBZ2UnKVxuICAgIFx0YXR0cnMuY2VudGVyVGV4dC50ZXh0KCdBZ2U6ICcgKyBzZWxlY3RlZFZhbHVlKTtcbiAgICBlbHNlIFxuICAgICAgYXR0cnMuY2VudGVyVGV4dC50ZXh0KHNlbGVjdGVkVmFsdWUpO1xuICAgICAgXG4gIFx0bGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSs9TnVtYmVyKGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pe1xuICAgICAgICBcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IE51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV1dKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgaWYgKGNvdW50ICE9IDApe1xuICAgICAgICAgIGlmIChjb3VudCA8IDUpe1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KCc8NScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoY291bnQpO1xuICAgICAgICAgIH1cbiAgICBcdFx0XHRhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnRbc2xpY2VDb3VudF0udGV4dChOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJ05vJyk7XG4gICAgXHRcdFx0YXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoJ1N0dWRlbnRzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG4gICAgLy9kMy5zZWxlY3QoXCJ0ZXh0W2lkPSdlbGVtZW50LmlkLndpdGguZG90cyddXCIpO1xuICAgIGNvbnN0IGlkID0gc2VsZWN0ZWRWYWx1ZSArICdyZWN0JztcbiAgICBkMy5zZWxlY3QoXCJbaWQ9XFwnXCIgKyBpZCArIFwiXFwnXVwiKS5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMyk7XG4gIH1cbiAgICBcbiAgcmVtb3ZlVmFsdWVzKHZhbHVlKXtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGF0dHJzLmNlbnRlclRleHQudGV4dCgnJyk7XG4gIFx0Zm9yIChjb25zdCB0ZXh0Q2lyY2xlIG9mIGF0dHJzLnRleHRDaXJjbGVzQ291bnQpe1xuICAgIFx0dGV4dENpcmNsZS50ZXh0KCcnKTsgXG4gICAgfVxuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQpe1xuICAgIFx0dGV4dENpcmNsZS50ZXh0KCcnKTsgXG4gICAgfVxuICAgIGNvbnN0IGlkID0gdmFsdWUgKyAncmVjdCc7XG4gICAgIGQzLnNlbGVjdChcIltpZD1cXCdcIiArIGlkICsgXCJcXCddXCIpLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgfVxuICAgIFxuIFxuICByZW5kZXJDb21wYXJlKHZhbHVlcyl7XG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gIFx0Y29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBzYiA9IHRoaXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkMy5zZWxlY3QoXCIjc3VuYnVyc3RcIikubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcbiAgICBcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gYXR0cnMubGVnZW5kV2lkdGg7IC8vbWludXMgYmVjYXVzZSBvZiBsZWdlbmRcbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQgLSBhdHRycy5jZW50ZXJUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBzYi5jb21wdXRlQ29tcGFyZURpbWVuc2lvbnMod2lkdGgsIGhlaWdodCwgbnVtU2xpY2VzKTsgLy9yb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZVxuXHRcdGNvbnN0IGFyY0xlbmd0aCA9IDIgKiBNYXRoLlBJO1xuICAgIFxuICAgIGNvbnN0IHJvd3MgPSBkaW1lbnNpb25zLnJvd3M7XG4gICAgY29uc3QgY29scyA9IGRpbWVuc2lvbnMuY29scztcbiAgICBjb25zdCBzaXplID0gZGltZW5zaW9ucy5zaXplO1xuICBcdGNvbnN0IHdoaXRlc3BhY2VXaWR0aCA9IHdpZHRoIC0gY29scyAqIHNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZUhlaWdodCA9IGhlaWdodCAtIHJvd3MgKiBzaXplO1xuICAgIFxuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuXG5cblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoc2l6ZSwgc2l6ZSwgbnVtQXJjcyk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICBcdGNvbnN0IGlubmVyVGV4dFNpemUgPSBwYXJhbXMuaW5uZXJUZXh0U2l6ZTtcblxuICAgIC8qIEhlbHBlciBtZXRob2RzICovXG5cbiAgICAvLyBDb252ZXJ0aW5nIHNsaWNlIG5hbWUgdG8gdGV4dFxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZmluZExvbmdlc3RTbGljZSA9IChhcnJheSkgPT4ge1xuICAgICAgbGV0IGxvbmdlc3RXb3JkID0gXCJcIjtcbiAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24od29yZCkge1xuICAgICAgICBpZih3b3JkLmxlbmd0aCA+IGxvbmdlc3RXb3JkLmxlbmd0aCkge1xuICAgICAgICAgIGxvbmdlc3RXb3JkID0gd29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbG9uZ2VzdFdvcmQ7XG4gICAgfVxuICAgIGNvbnN0IGxvbmdlc3RTbGljZVRleHRMZW5ndGggPSBnZXRUZXh0KGZpbmRMb25nZXN0U2xpY2UoT2JqZWN0LmtleXModmFsdWVzKSkpLmxlbmd0aDtcbiAgICBcbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHNsaWNlLCBzbGljZUNvdW50LCBzdW5idXJzdEdyb3VwKSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID0gaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeSA9IC1yYWRpdXM7XG5cbiAgICAgIGxldCBzaXplTXVsdGlwbGllciA9IDEuODtcbiAgICBcdGxldCBvdXRlclRleHRTaXplID0gTWF0aC5taW4oc2l6ZU11bHRpcGxpZXIqKDIqcmFkaXVzKS9sb25nZXN0U2xpY2VUZXh0TGVuZ3RoLCA2MCk7XG5cbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgIFx0LnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIFx0LnN0eWxlKCdmb250LXNpemUnLCBvdXRlclRleHRTaXplICsgXCJweFwiKVxuICAgICAgICAudGV4dCh0ZXh0KTtcbiAgICB9O1xuICAgIFxuICAgIFxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKHN1bmJ1cnN0R3JvdXAsIGFyYywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIHZhbHVlLCBhdHRyKSA9PiB7XG4gICAgICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICAgICAgICBzYi5kaXNwbGF5VmFsdWVzKHZhbHVlcywgdmFsdWUsIGF0dHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICBcdGlmICh2YWx1ZSAhPT0gJzAnKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuXG4gICAgICAgICAgICAgICAgc2IucmVtb3ZlVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgLy8gQ2xlYXIgdGV4dENpcmNsZSBsaXN0c1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblxuICAgIGF0dHJzLmNlbnRlclRleHQgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aC8yKVxuICAgICAgLmF0dHIoJ3knLCAxNSthdHRycy5jZW50ZXJUZXh0SGVpZ2h0LzIpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgYXR0cnMuY2VudGVyVGV4dFNpemUpXG4gICAgICAudGV4dCgnJyk7XG4gICAgXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoc2xpY2VDb3VudC9jb2xzKTtcbiAgICAgIGxldCBjb2wgPSBzbGljZUNvdW50JWNvbHM7XG4gICAgICBcbiAgICAgIGxldCB0cmFuc2xhdGVYID0gc2l6ZS8yICsgY29sKnNpemUrKGNvbCsxKSp3aGl0ZXNwYWNlV2lkdGgvKGNvbHMrMSk7XG4gICAgICBsZXQgdHJhbnNsYXRlWSA9IGF0dHJzLmNlbnRlclRleHRIZWlnaHQgKyBzaXplLzIgKyByb3cqc2l6ZSsocm93KzEpKndoaXRlc3BhY2VIZWlnaHQvKHJvd3MrMSk7XG5cbiAgICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNpemUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzaXplKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pYCk7XG4gICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcbiAgICAgIFxuICAgICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMGVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuXG4gICAgXHRsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCdkeScsICcxZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG4gICAgICBcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQucHVzaCh0ZXh0Q2lyY2xlMSk7XG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQucHVzaCh0ZXh0Q2lyY2xlMik7XG4gICAgICBcbiAgICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBhdHRybG9vcDpcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICBcdFx0bGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgICBzdW0rPU51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzdW0gPT0gMCl7XG4gICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgKyBhcmNMZW5ndGgsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgYXJjQnVpbGRlcihzdW5idXJzdEdyb3VwLCBhcmMsIHNsaWNlU3RhcnRBbmdsZSwgZW5kQW5nbGUsICcwJywgYXR0cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJ1RvdGFsJykgY29udGludWU7XG4gICAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXSk7XG4gICAgICAgICAgICAgIGxldCBwZXJjZW50ID0gY291bnQgLyBzdW07XG4gICAgICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gc2xpY2VTdGFydEFuZ2xlO1xuICAgICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgYXJjTGVuZ3RoICogcGVyY2VudCxcbiAgICAgICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcbiAgICAgICAgICAgICAgYXJjQnVpbGRlcihzdW5idXJzdEdyb3VwLCBhcmMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCB2YWx1ZSwgYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJjQ291bnQrKztcbiAgICAgIH1cblx0XHRcdHRleHRCdWlsZGVyKHNsaWNlLCAtMC41LCBzdW5idXJzdEdyb3VwKVxuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyTGVnZW5kKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgIGxldCBsZWdlbmQgPSBkMy5zZWxlY3QoJyNzdW5idXJzdC1sZWdlbmQnKS5hdHRyKCd3aWR0aCcsIGF0dHJzLmxlZ2VuZFdpZHRoKTtcbiAgICBsZWdlbmQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgbGV0IHkgPSAyNDtcbiAgICBsZXQgeCA9IDIwO1xuXG4gICAgbGV0IGZpcnN0U2xpY2UgPSBPYmplY3QudmFsdWVzKHZhbHVlcylbMF07XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGZpcnN0U2xpY2UpIHtcbiAgICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoZmlyc3RTbGljZVthdHRyXSk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFycmF5KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1RvdGFsJykgY29udGludWU7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICBcdC5hdHRyKFwiaWRcIiwgdmFsdWUgKyBcInJlY3RcIilcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgICAgXHQuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSk7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICBcdC5hdHRyKFwiaWRcIiwgdmFsdWUgKyBcInRleHRcIilcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KHZhbHVlKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE1cHgnKVxuICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgICAgIHkgKz0gMzA7XG4gICAgICB9XG4gICAgICB5ICs9IDEwO1xuICAgIH1cbiAgfVxuXG4gXG4gXG5cbn1cbiIsImltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9jaGFydHMtY2xhc3MnO1xuaW1wb3J0IHsgU3VuYnVyc3QgfSBmcm9tICcuL3N1bmJ1cnN0LWNsYXNzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXHQvL3N1bmJ1cnN0IFxuICBsZXQgc2I7IFxuXG5cdC8vU2V0IG5vZGUgYW5kIE1haW4gdml6IFNQQSB1cHNcbiAgZGlzcGxheU5vZGVzKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUtYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlWaXo7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Tm9kZXM7XG4gXHRcbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlOb2Rlcygpe1xuICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6LWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlWaXooKXtcbiAgICAgIGxldCB0ZXN0ID0gZmFsc2U7XG4gICAgXHRsZXQgYWNhZGVtaWNWYWx1ZXNUZXN0ID0ge1xuICAgICAgICAgICBcdCAnQWNhZGVtaWMgWWVhcic6IFsnVG90YWwnXSxcbiAgICAgICAgICAgICBEZWdyZWU6IFsnQmFjaGVsb3JzJywgJ01hc3RlcnMnLCAnUGguRC4nXSxcbiAgICAgICAgICAgICBGYWN1bHR5OiBbJ0J1c2luZXNzJ10sXG4gICAgICAgICAgICAgJ1N0dWR5IFN0YXR1cyc6IFsnUGFydC10aW1lJywgJ0NvLW9wJ11cbiAgICAgICAgICB9O1xuICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXNUZXN0ID0geyAgICAgXG4gICAgICAgICAgICAgIEFnZTogWyc8PTE3JywgJzE4LTIwJywgJzI2LTMwJywgJzU1KyddLFxuICAgICAgICAgICAgICBTZXg6ICBbJ01hbGUnLCAnRmVtYWxlJ10sXG4gICAgICAgICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbJ0ludGVybmF0aW9uYWwnLCAnRG9tZXN0aWMnXVxuICAgICAgIH1cblxuICAgIFx0aWYgKHNiKXtcbiAgICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXMgPSB0ZXN0P2RpdmVyc2l0eVZhbHVlc1Rlc3Q6IGh0LmRpdmVyc2l0eVZhbHVlcygpO1xuICAgICAgICAgbGV0IGFjYWRlbWljVmFsdWVzID0gdGVzdD9hY2FkZW1pY1ZhbHVlc1Rlc3Q6IGh0LmFjYWRlbWljVmFsdWVzKCk7XG5cbiAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgICAgXHQgaWYgKGRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICBpZiAoIXZhbGlkKXtcbiAgICAgICAgXHRcdGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBkaXZlcnNpdHkgYXR0cmlidXRlJyk7ICBcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFx0IGNvbnNvbGUubG9nKCdWYWxpZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgIFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIFx0IFx0XHQgc2IuaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBhbGVydCgnUGxlYXNlIHdhaXQgZm9yIHRoZSBkYXRhIHRvIGZpbmlzaCBsb2FkaW5nJyk7XG4gICAgICB9XG4gIH1cbiAgXG4gIGxldCBodCA9IG5ldyBDaGFydCgpXG4gICAgIC5jb250YWluZXIoJyNjaGFydCcpXG4gICAgIC5zdmdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLmluaXRpYWxab29tKDAuMylcbiAgICAgLnJlbmRlcigpXG5cbiAgbmV3IFN1bmJ1cnN0KClcbiAgICAgICAgIC5jb250YWluZXIoJyNzdW5idXJzdCcpXG4gICAgICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAuc3ZnSGVpZ2h0KHdpbmRvdy5pbm5lcldpZHRoKVxuICBcdFx0XHQgLmRpc3BsYXlOb2RlcyhkaXNwbGF5Tm9kZXMpXG4gICAgXHRcdCAuc2V0dXAoJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20va2FlbDU1OC83ZDJjYjUyNTg5MjExMTlkZjU4ODRjYzkwOTAyZTg0ZC9yYXcvMDA4MjdiOWQ1MzI4ODMzNDMxOTFmNjE0NGQ0MWQwYTBiYmFkNWRmOC9mYWxsLmNzdicpXG5cdFx0XHRcdCAudGhlbih2YWx1ZSA9PiBzYiA9IHZhbHVlKTtcbn0pO1xuXG5cblxuXG5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBQUEsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDO0VBQ3pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM3QjtFQUNBLE1BQU0sa0JBQWtCLEdBQUcsZUFBZSxDQUFDO0VBQzNDLE1BQU0sdUJBQXVCLEdBQUcsaUJBQWlCLENBQUM7RUFDbEQsTUFBTSwwQkFBMEIsR0FBRyx1QkFBdUIsQ0FBQztBQUMzRDtFQUNBLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztFQUMzQixNQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDO0FBQ25EO0FBQ0E7QUFDQTtFQUNBLE1BQU0sWUFBWSxHQUFHO0VBQ3JCLEVBQUUsV0FBVyxFQUFFO0VBQ2YsSUFBSSxJQUFJLEVBQUUsV0FBVztFQUNyQixJQUFJLFdBQVcsRUFBRSw2Q0FBNkM7RUFDOUQsR0FBRztFQUNILEVBQUUsWUFBWSxFQUFFO0VBQ2hCLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsSUFBSSxXQUFXLEVBQUUsMENBQTBDO0VBQzNELEdBQUc7RUFDSCxFQUFFLE9BQU8sRUFBRTtF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