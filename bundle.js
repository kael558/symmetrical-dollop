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
          console.log(data);
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
              console.log('change border');
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
    
  	displayValues(values, selectedValue){
      const attrs = this.getChartState();
      
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
        let x = 0;
        let y = -radius;

        let sizeMultiplier = 1.8;
      	let outerTextSize = sizeMultiplier*(2*radius)/longestSliceTextLength;
      
      	let xMultiplier = 0.21;
        x -= xMultiplier*text.length*outerTextSize; //middle text adjust
        
        sunburstGroup
          .append('text')
          .attr('x', x)
          .attr('y', y)
        	.style("font-size", outerTextSize + "px")
          .text(text);
      };
      
      
      //arc builder
      const arcBuilder = (sunburstGroup, arc, startAngle, endAngle, value) => {
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

                  sb.displayValues(values, value);
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
            console.log(slice);
            let endAngle = Math.min(
              sliceStartAngle + arcLength,
              2 * Math.PI
            );
            arcBuilder(sunburstGroup, arc, sliceStartAngle, endAngle, '0');
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
                arcBuilder(sunburstGroup, arc, startAngle, endAngle, value);
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
         console.log('clicked');
      	if (sb){
           let diversityValues = ht.diversityValues();
           let valid = false;
           console.log(diversityValues);
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
               let academicValues = ht.academicValues();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBST09UX05PREUgPSAnUk9PVCc7XG5jb25zdCBSRVBPUlRfTk9ERSA9ICdSRVBPUlQnO1xuXG5jb25zdCBFRElfQVRUUklCVVRFX05PREUgPSAnRURJX0FUVFJJQlVURSc7XG5jb25zdCBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSA9ICdPVEhFUl9BVFRSSUJVVEUnO1xuY29uc3QgVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUgPSAnVU5DT0xMRUNURURfQVRUUklCVVRFJztcblxuY29uc3QgVkFMVUVfTk9ERSA9ICdWQUxVRSc7XG5jb25zdCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFID0gJ1VOQ09MTEVDVEVEX1ZBTFVFJztcblxuXG5cbmNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgQ29udm9jYXRpb246IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBudW1iZXIgb2Ygc3R1ZGVudHMgdGhhdCBoYXZlIGNvbnZvY2F0ZWQnXG4gIH0sXG4gIERlbW9ncmFwaGljczoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGFyZSBlbnJvbGxlZCdcbiAgfSxcbiAgRmFjdWx0eToge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRpb24nLCdEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnU1RFTScsICdOb24tU1RFTScsICdFbmdpbmVlcmluZyAmIERlc2lnbicsICdTY2llbmNlJywgJ1B1YmxpYyBBZmZhaXJzJywgJ0J1c2luZXNzJywgJ0FydHMgJiBTb2NpYWwgU2NpZW5jZXMnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdEZXBhcnRtZW50IGFuZCBmYWN1bHR5IGFyZSBtYXBwZWQgZnJvbSBzdHVkZW50IGRlZ3JlZSBhbmQgbWFqb3Igb3IgbWFqb3JzLidcbiAgfSxcbiAgJ0FjYWRlbWljIFllYXInOiB7XG4gICAgcGFyZW50czogWydDb252b2NhdGlvbicsJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWycyMDEzLzE0JyxcbiAgICAgICcyMDE0LzE1JyxcbiAgICAgICcyMDE1LzE2JyxcbiAgICAgICcyMDE2LzE3JyxcbiAgICAgICcyMDE3LzE4JyxcbiAgICAgICcyMDE4LzE5JyxcbiAgICAgICcyMDE5LzIwJyxcbiAgICAgICcyMDIwLzIxJyxdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0FjYWRlbWljIFllYXIgaXMgbWFkZSB1cCBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsLCBXaW50ZXIpJ1xuICB9LFxuICBEZWdyZWU6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0JhY2hlbG9ycycsXG4gICAgICAnTWFzdGVycycsXG4gICAgICAnUGguRC4nXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdMZXZlbCBvZiBzdHVkeSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBmdWxsLXRpbWUgc3R1ZGVudCBpcyBlbnJvbGxlZCBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciB0ZXJtcyB3aGVyZWFzIGEgcGFydC10aW1lIHN0dWRlbnQgaXMgZW5yb2xsZWQgaW4gbGVzcydcbiAgfSxcbiAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydEb21lc3RpYycsXG4gICAgICAnSW50ZXJuYXRpb25hbCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdTdHVkZW50cyBhcmUgY2F0ZWdvcml6ZWQgYmFzZWQgb24gd2hldGhlciB0aGV5IGFyZSBjaGFyZ2VkIGRvbWVzdGljIG9yIGludGVybmF0aW9uYWwgZmVlcydcbiAgfSxcbiAgQWdlOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFtcbiAgICAgICc8PTE3JyxcbiAgICAgICcxOC0yMCcsXG4gICAgICAnMjEtMjUnLFxuICAgICAgJzI2LTMwJyxcbiAgICAgICczMS0zNScsXG4gICAgICAnMzYtNDUnLFxuICAgICAgJzQ2LTU1JyxcbiAgICAgICc1NSsnLFxuICAgIF0sXG4gICAgdW5jb2xsZWN0ZWRWYWx1ZXM6IFsnNTUtNTknLCc2MC02NCcsJzY1LTY5JywgJzcwLTc0JywgJzc1LTc5JywgJzgwKyddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBhZ2UgcmFuZ2VzIG9mIHN0dWRlbnRzJ1xuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ01hbGUnLCAnRmVtYWxlJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnTm9uLWJpbmFyeSddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ01pc2xhYmVsZWQuIFRoZSBjb3JyZWN0IGxhYmVsIHNob3VsZCBiZSBcXCdHZW5kZXJcXCcgYW5kIGFsbCBnZW5kZXJzIHNob3VsZCBiZSBjb2xsZWN0ZWQnXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHJhY2Ugb2YgYSBzdHVkZW50J1xuXHR9LFxuICAnUmVsaWdpb24vU3Bpcml0dWFsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgcmVsaWdpb24vc3Bpcml0dWFsaXR5IG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0dlb2dyYXBoaWMgSWRlbnRpdHknOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBnZW9ncmFwaGljIGlkZW50aXR5IG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0Rpcy9hYmlsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgZGlzL2FiaWxpdHkgb2YgYSBzdHVkZW50J1xuICB9LFxuICBJbmRpZ2VudWl0eToge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydGaXJzdCBOYXRpb25zJywgJ01ldGlzJywgJ0ludWl0J10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgaW5kaWdlbnVpdHkgb2YgYSBzdHVkZW50J1xuICB9LFxuICAnRmlyc3QgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBmaXJzdCBsYW5ndWFnZSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gICdPdGhlciBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG90aGVyIGxhbmd1YWdlIG9mIGEgc3R1ZGVudCdcbiAgfSxcbiAgJ0V0aG5pY2l0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGV0aG5pY2l0eSBvZiBhIHN0dWRlbnQnXG4gIH0sXG4gICdOYXRpb24nOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBuYXRpb24gb2Ygb3JpZ2luIG9mIGEgc3R1ZGVudCdcbiAgfSxcbn1cblxuXG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgVHJhbnNwYXJlbnQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MH0sXG4gIFdoaXRlOiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBHcmV5OiB7XCJyZWRcIjoxMjgsXCJncmVlblwiOjEyOCxcImJsdWVcIjoxMjgsXCJhbHBoYVwiOjF9LFxuXHRHcmVlbjoge1wicmVkXCI6MCxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9LFxuICBCbHVlOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsYWNrOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9XG59XG5cbmNvbnN0IHNpemVzID0ge1xuXHRMYXJnZToge3dpZHRoOiAzNDIsIGhlaWdodDogMTQ2fSxcbiAgTWVkaXVtOiB7d2lkdGg6IDMzMSwgaGVpZ2h0OiAxNDZ9LFxuXHRTbWFsbDoge3dpZHRoOiAzMTAsIGhlaWdodDogMTQ2fVxufVxuXG5jb25zdCBib3JkZXJXaWR0aCA9IDJcbmNvbnN0IGJvcmRlclJhZGl1cyA9IDVcbmNvbnN0IGNvbm5lY3RvckxpbmVXaWR0aCA9IDVcblxuY29uc3Qgbm9kZURpbWVuc2lvbnMgPSB7XG4gIFtST09UX05PREVdIDoge1xuICAgIHdpZHRoOiBzaXplcy5MYXJnZS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLkxhcmdlLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIHRleHRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcblx0W1JFUE9SVF9OT0RFXSA6IHtcbiAgXHR3aWR0aDogc2l6ZXMuTGFyZ2Uud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5MYXJnZS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfQVRUUklCVVRFX05PREVdIDoge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcbiAgW0FDQURFTUlDX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmx1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbRURJX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1ZBTFVFX05PREVdOiB7XG4gIFx0d2lkdGg6IHNpemVzLlNtYWxsLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuU21hbGwuaGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcblx0XHRjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5HcmV5LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfVxufVxuXG5jb25zdCBtYWtlTm9kZSA9IChub2RlSWQsIHBhcmVudE5vZGVJZHMsIG5vZGVUeXBlLCBwYXJlbnROb2RlVHlwZSkgPT4ge1xuXHRsZXQgbm9kZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZURpbWVuc2lvbnNbbm9kZVR5cGVdKSk7XG4gIG5vZGUubm9kZUlkID0gbm9kZUlkO1xuICBub2RlLnBhcmVudE5vZGVJZHMgPSBwYXJlbnROb2RlSWRzO1xuXHRub2RlLmV4cGFuZGVkID0gZmFsc2U7XG4gIG5vZGUuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgbm9kZS5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXM7XG4gIG5vZGUuY29ubmVjdG9yTGluZVdpZHRoID0gY29ubmVjdG9yTGluZVdpZHRoO1xuIFx0aWYgKGluaXRpYWxOb2Rlc1tub2RlSWRdKVxuICAgIFx0bm9kZS5kZXNjcmlwdGlvbiA9IFwiXCIgfHwgaW5pdGlhbE5vZGVzW25vZGVJZF0uZGVzY3JpcHRpb247XG4gIFxuICBpZiAobm9kZVR5cGUgPT0gVkFMVUVfTk9ERSl7XG4gIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgXG4gICAgbm9kZS5jb25uZWN0b3JMaW5lQ29sb3IgPSBub2RlRGltZW5zaW9uc1twYXJlbnROb2RlVHlwZV0uYm9yZGVyQ29sb3I7IFxuICAgIGlmIChub2RlSWQgPT09ICdTVEVNJyl7XG4gICAgXHRub2RlLmRlc2NyaXB0aW9uID0gJ0FnZ3JlZ2F0aW9uIG9mIGZhY3VsdHkgb2YgU2NpZW5jZSwgRW5naW5lZXJpbmcgJiBEZXNpZ24gYW5kIE1hdGhlbWF0aWNzJ1xuICAgIH0gZWxzZSBpZiAobm9kZUlkID09PSAnTm9uLVNURU0nKXtcbiAgICAgIG5vZGUuZGVzY3JpcHRpb24gPSAnQWdncmVnYXRpb24gb2YgYWxsIG5vbi1TVEVNIGZhY3VsdGllcydcbiAgICB9IFxuICB9IGVsc2UgaWYgKG5vZGVUeXBlID09PSBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFKXtcbiAgIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgIFxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBwb3B1bGF0ZU5vZGVzID0gKG5vZGVzLCBpbml0aWFsTm9kZXMpID0+IHtcblx0Zm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbE5vZGVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IGluaXRpYWxOb2Rlc1trZXldO1xuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gUkVQT1JUX05PREUpe1xuICAgIFx0XHRub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgWydSb290J10sIFJFUE9SVF9OT0RFKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShrZXksIG5vZGUucGFyZW50cywgbm9kZS50eXBlKSk7IC8vbGluayB0byBmaXJzdCBwYXJlbnRcbiAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIG5vZGUuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS51bmNvbGxlY3RlZFZhbHVlcylcbiAgICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGxpbmssIFtrZXldLCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFLCBub2RlLnR5cGUpKTtcbiAgICB9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IG5vZGVzID0gW21ha2VOb2RlKCdSb290JywgW251bGxdLCBST09UX05PREUpXTtcbnBvcHVsYXRlTm9kZXMobm9kZXMsIGluaXRpYWxOb2Rlcyk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbm9kZXMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiA4MDAsXG4gICAgICBzdmdIZWlnaHQ6IDYwMCxcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGVmYXVsdFRleHRGaWxsOiAnIzJDM0U1MCcsXG4gICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICBkZWZhdWx0Rm9udDogJ0hlbHZldGljYScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkYXRhOiBub2RlcyxcbiAgICAgIG5vZGVzOiBudWxsLFxuICAgICAgY29ubmVjdG9yTGV2ZWxzOiAyLFxuICAgICAgZGVwdGg6IDE4MCxcbiAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgYWNhZGVtaWNWYWx1ZXM6IHtcbiAgICAgICAgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICBGYWN1bHR5OiBbJ1RvdGFsJ10sXG4gICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ10sXG4gICAgICB9LFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzOiB7XG4gICAgICAgIEFnZTogW10sXG4gICAgICAgIFNleDogW10sXG4gICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbXSxcbiAgICAgIH0sXG4gICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIHRvb2x0aXBEaXY6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy8gRHluYW1pY2FsbHkgc2V0IGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgQ2hhcnQgY2xhc3NcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdCgnI25vZGUtbGVnZW5kJyk7XG4gICAgc3ZnXG4gICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4JywgMjApXG4gICAgICAuYXR0cigneScsIDI0KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTIpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAnZ3JleScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIDIwKVxuICAgICAgLmF0dHIoJ3knLCA1NClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEyKVxuICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCAnZ3JlZW4nKTtcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCAyMClcbiAgICAgIC5hdHRyKCd5JywgODQpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ2JsdWUnKTtcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCA0MClcbiAgICAgIC5hdHRyKCd5JywgMzApXG4gICAgICAudGV4dCgnVW5jb2xsZWN0ZWQnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDQwKVxuICAgICAgLmF0dHIoJ3knLCA2MClcbiAgICAgIC50ZXh0KCdEaXZlcnNpdHknKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIHN2Z1xuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDQwKVxuICAgICAgLmF0dHIoJ3knLCA5MClcbiAgICAgIC50ZXh0KCdBY2FkZW1pYycpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG5cbiAgICB0aGlzLmluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCk7XG4gIH1cblxuICBpbml0aWFsaXplRW50ZXJFeGl0VXBkYXRlUGF0dGVybigpIHtcbiAgICBkMy5zZWxlY3Rpb24ucHJvdG90eXBlLnBhdHRlcm5pZnkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gdGhpcztcbiAgICAgIHZhciBzZWxlY3RvciA9IHBhcmFtcy5zZWxlY3RvcjtcbiAgICAgIHZhciBlbGVtZW50VGFnID0gcGFyYW1zLnRhZztcbiAgICAgIHZhciBkYXRhID0gcGFyYW1zLmRhdGEgfHwgW3NlbGVjdG9yXTtcblxuICAgICAgLy8gUGF0dGVybiBpbiBhY3Rpb25cbiAgICAgIHZhciBzZWxlY3Rpb24gPSBjb250YWluZXJcbiAgICAgICAgLnNlbGVjdEFsbCgnLicgKyBzZWxlY3RvcilcbiAgICAgICAgLmRhdGEoZGF0YSwgKGQsIGkpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoZC5pZCkge1xuICAgICAgICAgICAgICByZXR1cm4gZC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pO1xuICAgICAgc2VsZWN0aW9uLmV4aXQoKS5yZW1vdmUoKTtcbiAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdGlvblxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKGVsZW1lbnRUYWcpXG4gICAgICAgIC5tZXJnZShzZWxlY3Rpb24pO1xuICAgICAgc2VsZWN0aW9uLmF0dHIoJ2NsYXNzJywgc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgcmV0cmlldmVzIHBhc3NlZCBub2RlJ3MgY2hpbGRyZW4gSUQncyAoaW5jbHVkaW5nIG5vZGUpXG4gIGdldE5vZGVDaGlsZHJlbklkcyhcbiAgICB7IGRhdGEsIGNoaWxkcmVuLCBfY2hpbGRyZW4gfSxcbiAgICBub2RlSWRzU3RvcmVcbiAgKSB7XG4gICAgLy8gU3RvcmUgY3VycmVudCBub2RlIElEXG4gICAgbm9kZUlkc1N0b3JlLnB1c2goZGF0YS5ub2RlSWQpO1xuXG4gICAgLy8gTG9vcCBvdmVyIGNoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoZXhwYW5kZWQgbm9kZXMpXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgX2NoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoY29sbGFwc2VkIG5vZGVzKVxuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIG5vZGVJZHNTdG9yZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRab29tRmFjdG9yIEFQSSwgaXQgem9vbXMgdG8gcGFydGljdWxhdCBzY2FsZVxuICBzZXRab29tRmFjdG9yKHpvb21MZXZlbCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2FsYyA9IGF0dHJzLmNhbGM7XG5cbiAgICAvLyBTdG9yZSBwYXNzZWQgem9vbSBsZXZlbFxuICAgIGF0dHJzLmluaXRpYWxab29tID0gem9vbUxldmVsO1xuXG4gICAgLy8gUmVzY2FsZSBjb250YWluZXIgZWxlbWVudCBhY2NvcmRpbmdseVxuICAgIGF0dHJzLmNlbnRlckcuYXR0cihcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgYCB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCAke1xuICAgICAgICBjYWxjLm5vZGVNYXhIZWlnaHQgLyAyXG4gICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvL0lubmVyRnVuY3Rpb25zIHdoaWNoIHdpbGwgdXBkYXRlIHZpc3VhbHNcblxuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgdGhpc09ialJlZiA9IHRoaXM7XG5cbiAgICAvL0RyYXdpbmcgY29udGFpbmVyc1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXJcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoY29udGFpbmVyUmVjdC53aWR0aCA+IDApXG4gICAgICBhdHRycy5zdmdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG5cbiAgICAvL0F0dGFjaCBkcm9wIHNoYWRvdyBpZCB0byBhdHRycyBvYmplY3RcbiAgICB0aGlzLnNldERyb3BTaGFkb3dJZChhdHRycyk7XG5cbiAgICAvL0NhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgIGNvbnN0IGNhbGMgPSB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGNoYXJ0VG9wTWFyZ2luOiBudWxsLFxuICAgICAgY2hhcnRMZWZ0TWFyZ2luOiBudWxsLFxuICAgICAgY2hhcnRXaWR0aDogbnVsbCxcbiAgICAgIGNoYXJ0SGVpZ2h0OiBudWxsLFxuICAgIH07XG4gICAgY2FsYy5pZCA9IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YDsgLy8gaWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgIGNhbGMuY2hhcnRMZWZ0TWFyZ2luID0gYXR0cnMubWFyZ2luTGVmdDtcbiAgICBjYWxjLmNoYXJ0VG9wTWFyZ2luID0gYXR0cnMubWFyZ2luVG9wO1xuICAgIGNhbGMuY2hhcnRXaWR0aCA9XG4gICAgICBhdHRycy5zdmdXaWR0aCAtXG4gICAgICBhdHRycy5tYXJnaW5SaWdodCAtXG4gICAgICBjYWxjLmNoYXJ0TGVmdE1hcmdpbjtcbiAgICBjYWxjLmNoYXJ0SGVpZ2h0ID1cbiAgICAgIGF0dHJzLnN2Z0hlaWdodCAtXG4gICAgICBhdHRycy5tYXJnaW5Cb3R0b20gLVxuICAgICAgY2FsYy5jaGFydFRvcE1hcmdpbjtcbiAgICBhdHRycy5jYWxjID0gY2FsYztcblxuICAgIC8vIEdldCBtYXhpbXVtIG5vZGUgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbGMubm9kZU1heFdpZHRoID0gZDMubWF4KFxuICAgICAgYXR0cnMuZGF0YSxcbiAgICAgICh7IHdpZHRoIH0pID0+IHdpZHRoXG4gICAgKTtcbiAgICBjYWxjLm5vZGVNYXhIZWlnaHQgPSBkMy5tYXgoXG4gICAgICBhdHRycy5kYXRhLFxuICAgICAgKHsgaGVpZ2h0IH0pID0+IGhlaWdodFxuICAgICk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbWF4IG5vZGUgZGVwdGggKGl0J3MgbmVlZGVkIGZvciBsYXlvdXQgaGVpZ2h0cyBjYWxjdWxhdGlvbilcbiAgICBhdHRycy5kZXB0aCA9IGNhbGMubm9kZU1heEhlaWdodCArIDEwMDtcbiAgICBjYWxjLmNlbnRlclggPSBjYWxjLmNoYXJ0V2lkdGggLyAyO1xuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKiAgTEFZT1VUUyAgKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBjb25zdCBsYXlvdXRzID0ge1xuICAgICAgdHJlZW1hcDogbnVsbCxcbiAgICB9O1xuICAgIGF0dHJzLmxheW91dHMgPSBsYXlvdXRzO1xuXG4gICAgLy8gR2VuZXJhdGUgdHJlZSBsYXlvdXQgZnVuY3Rpb25cbiAgICBsYXlvdXRzLnRyZWVtYXAgPSBkM1xuICAgICAgLnRyZWUoKVxuICAgICAgLnNpemUoW2NhbGMuY2hhcnRXaWR0aCwgY2FsYy5jaGFydEhlaWdodF0pXG4gICAgICAubm9kZVNpemUoW1xuICAgICAgICBjYWxjLm5vZGVNYXhXaWR0aCArIDEwMCxcbiAgICAgICAgY2FsYy5ub2RlTWF4SGVpZ2h0ICsgYXR0cnMuZGVwdGgsXG4gICAgICBdKTtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKiogQkVIQVZJT1JTIC4gKioqKioqKioqKioqKioqKioqKioqKlxuICAgIGNvbnN0IGJlaGF2aW9ycyA9IHtcbiAgICAgIHpvb206IG51bGwsXG4gICAgfTtcblxuICAgIC8vIEdldCB6b29taW5nIGZ1bmN0aW9uXG4gICAgYmVoYXZpb3JzLnpvb20gPSBkM1xuICAgICAgLnpvb20oKVxuICAgICAgLm9uKCd6b29tJywgKGQpID0+IHRoaXMuem9vbWVkKGQpKTtcblxuICAgIC8vKioqKioqKioqKioqKioqKioqIFJPT1Qgbm9kZSB3b3JrICoqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLy8gQ29udmVydCBmbGF0IGRhdGEgdG8gaGllcmFyY2hpY2FsXG4gICAgYXR0cnMucm9vdCA9IGQzXG4gICAgICAuc3RyYXRpZnkoKVxuICAgICAgLmlkKCh7IG5vZGVJZCB9KSA9PiBub2RlSWQpXG4gICAgICAucGFyZW50SWQoKHsgcGFyZW50Tm9kZUlkcyB9KSA9PiBwYXJlbnROb2RlSWRzWzBdKShcbiAgICAgIGF0dHJzLmRhdGFcbiAgICApO1xuXG4gICAgLy8gU2V0IGNoaWxkIG5vZGVzIGVudGVyIGFwcGVhcmFuY2UgcG9zaXRpb25zXG4gICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgYXR0cnMucm9vdC55MCA9IDA7XG5cbiAgICAvKiogR2V0IGFsbCBub2RlcyBhcyBhcnJheSAod2l0aCBleHRlbmRlZCBwYXJlbnQgJiBjaGlsZHJlbiBwcm9wZXJ0aWVzIHNldClcbiAgICAgICAgICBUaGlzIHdheSB3ZSBjYW4gYWNjZXNzIGFueSBub2RlJ3MgcGFyZW50IGRpcmVjdGx5IHVzaW5nIG5vZGUucGFyZW50IC0gcHJldHR5IGNvb2wsIGh1aD9cbiAgICAgICovXG4gICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzXG4gICAgICAudHJlZW1hcChhdHRycy5yb290KVxuICAgICAgLmRlc2NlbmRhbnRzKCk7XG5cbiAgICAvLyBDb2xsYXBzZSBhbGwgY2hpbGRyZW4gYXQgZmlyc3RcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBleHBhbmQgc29tZSBub2Rlcywgd2hpY2ggaGF2ZSBgZXhwYW5kZWRgIHByb3BlcnR5IHNldFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpXG4gICAgKTtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKiogIERSQVdJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvL0FkZCBzdmdcbiAgICBjb25zdCBzdmcgPSBjb250YWluZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnc3ZnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdzdmctY2hhcnQtY29udGFpbmVyJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5zdmdXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBhdHRycy5zdmdIZWlnaHQpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBhdHRycy5kZWZhdWx0Rm9udClcbiAgICAgIC5jYWxsKGJlaGF2aW9ycy56b29tKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdtb3ZlJylcbiAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcik7XG4gICAgYXR0cnMuc3ZnID0gc3ZnO1xuXG4gICAgLy9BZGQgY29udGFpbmVyIGcgZWxlbWVudFxuICAgIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNoYXJ0TGVmdE1hcmdpbn0sJHtjYWxjLmNoYXJ0VG9wTWFyZ2lufSlgXG4gICAgICApO1xuXG4gICAgLy8gQWRkIG9uZSBtb3JlIGNvbnRhaW5lciBnIGVsZW1lbnQsIGZvciBiZXR0ZXIgcG9zaXRpb25pbmcgY29udHJvbHNcbiAgICBhdHRycy5jZW50ZXJHID0gY2hhcnRcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIHNlbGVjdG9yOiAnY2VudGVyLWdyb3VwJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCR7XG4gICAgICAgICAgY2FsYy5ub2RlTWF4SGVpZ2h0IC8gMlxuICAgICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgICApO1xuXG4gICAgYXR0cnMuY2hhcnQgPSBjaGFydDtcblxuICAgIFxuICAgIC8vRGVmaW5lIGRpdiBmb3IgdG9vbHRpcFxuICAgIGF0dHJzLnRvb2x0aXBEaXYgPSBkM1xuICAgICAgLnNlbGVjdCgnYm9keScpXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XG4gICAgXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKiogUk9VTkRFRCBBTkQgU0hBRE9XIElNQUdFICBXT1JLIFVTSU5HIFNWRyBGSUxURVJTICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vQWRkaW5nIGRlZnMgZWxlbWVudCBmb3Igcm91bmRlZCBpbWFnZVxuICAgIGF0dHJzLmRlZnMgPSBzdmcucGF0dGVybmlmeSh7XG4gICAgICB0YWc6ICdkZWZzJyxcbiAgICAgIHNlbGVjdG9yOiAnaW1hZ2UtZGVmcycsXG4gICAgfSk7XG5cbiAgICAvLyBBZGRpbmcgZGVmcyBlbGVtZW50IGZvciBpbWFnZSdzIHNoYWRvd1xuICAgIGNvbnN0IGZpbHRlckRlZnMgPSBzdmcucGF0dGVybmlmeSh7XG4gICAgICB0YWc6ICdkZWZzJyxcbiAgICAgIHNlbGVjdG9yOiAnZmlsdGVyLWRlZnMnLFxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGxheSB0cmVlIGNvbnRlbnJzXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyBkcm9wIHNoYWRvdyBJRCB0byB0aGUgcGFzc2VkIG9iamVjdFxuICBzZXREcm9wU2hhZG93SWQoZCkge1xuICAgIC8vIElmIGl0J3MgYWxyZWFkeSBzZXQsIHRoZW4gcmV0dXJuXG4gICAgaWYgKGQuZHJvcFNoYWRvd0lkKSByZXR1cm47XG5cbiAgICAvLyBHZW5lcmF0ZSBkcm9wIHNoYWRvdyBJRFxuICAgIGxldCBpZCA9IGAke2QuaWR9LWRyb3Atc2hhZG93YDtcblxuICAgIC8vIElmIERPTSBvYmplY3QgaXMgYXZhaWxhYmxlLCB0aGVuIHVzZSBVSUQgbWV0aG9kIHRvIGdlbmVyYXRlZCBzaGFkb3cgaWRcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIERPTSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZCA9IERPTS51aWQoZC5pZCkuaWQ7XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIHBhc3NlZCBvYmplY3Qgd2l0aCBkcm9wIHNoYWRvdyBJRFxuICAgIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgZHJvcFNoYWRvd0lkOiBpZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IHJlZHJhd3MgdmlzaWJsZSBncmFwaCwgYmFzZWQgb24gbm9kZXMgc3RhdGVcbiAgdXBkYXRlKHsgeDAsIHkwLCB4LCB5IH0pIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IGNhbGMgPSBhdHRycy5jYWxjO1xuXG4gICAgLy8gIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICAgIGNvbnN0IHRyZWVEYXRhID0gYXR0cnMubGF5b3V0cy50cmVlbWFwKGF0dHJzLnJvb3QpO1xuXG4gICAgLy8gR2V0IHRyZWUgbm9kZXMgYW5kIGxpbmtzIGFuZCBhdHRhY2ggc29tZSBwcm9wZXJ0aWVzXG4gICAgY29uc3Qgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLm1hcCgoZCkgPT4ge1xuICAgICAgLy8gSWYgYXQgbGVhc3Qgb25lIHByb3BlcnR5IGlzIGFscmVhZHkgc2V0LCB0aGVuIHdlIGRvbid0IHdhbnQgdG8gcmVzZXQgb3RoZXIgcHJvcGVydGllc1xuICAgICAgaWYgKGQud2lkdGgpIHJldHVybiBkO1xuXG4gICAgICAvLyBEZWNsYXJlIHByb3BlcnRpZXMgd2l0aCBkZWZmYXVsdCB2YWx1ZXNcbiAgICAgIGxldCBib3JkZXJDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgbGV0IHRleHRDb2xvciA9ICdibGFjayc7XG4gICAgICBsZXQgd2lkdGggPSBkLmRhdGEud2lkdGg7XG4gICAgICBsZXQgaGVpZ2h0ID0gZC5kYXRhLmhlaWdodDtcblx0XHRcdGxldCBkZXNjcmlwdGlvbiA9ICcnIHx8IGQuZGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgIFxuICAgICAgaWYgKGQuZGF0YS5ib3JkZXJDb2xvcikge1xuICAgICAgICBib3JkZXJDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoXG4gICAgICAgICAgZC5kYXRhLmJvcmRlckNvbG9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZC5kYXRhLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgIGQuZGF0YS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChkLmRhdGEudGV4dENvbG9yKSB7XG4gICAgICAgIHRleHRDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLnRleHRDb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dGVuZCBub2RlIG9iamVjdCB3aXRoIGNhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICB0ZXh0Q29sb3IsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIG5vZGVzIGZvciBjbGlja1xuICAgIGF0dHJzLm5vZGVzID0gbm9kZXM7XG5cbiAgICAvLyBHZXQgYWxsIGxpbmtzXG4gICAgY29uc3QgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgLy8gU2V0IGNvbnN0YW50IGRlcHRoIGZvciBlYWNoIG5vZGVzXG4gICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4gKGQueSA9IGQuZGVwdGggKiBhdHRycy5kZXB0aCkpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExJTktTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBHZXQgbGlua3Mgc2VsZWN0aW9uXG4gICAgY29uc3QgbGlua1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckdcbiAgICAgIC5zZWxlY3RBbGwoJ3BhdGgubGluaycpXG4gICAgICAuZGF0YShsaW5rcywgKHsgaWQgfSkgPT4gaWQpO1xuXG4gICAgLy8gRW50ZXIgYW55IG5ldyBsaW5rcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXG4gICAgY29uc3QgbGlua0VudGVyID0gbGlua1NlbGVjdGlvblxuICAgICAgLmVudGVyKClcbiAgICAgIC5pbnNlcnQoJ3BhdGgnLCAnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogeDAsXG4gICAgICAgICAgeTogeTAsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKG8sIFtvXSk7XG4gICAgICB9KTtcblxuICAgIC8vIEdldCBsaW5rcyB1cGRhdGUgc2VsZWN0aW9uXG4gICAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rU2VsZWN0aW9uKTtcblxuICAgIC8vIFN0eWxpbmcgbGlua3NcbiAgICBsaW5rVXBkYXRlXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKFxuICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLmNvbm5lY3RvckxpbmVXaWR0aCB8fCAyXG4gICAgICApXG4gICAgICAuYXR0cignc3Ryb2tlJywgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmNvbm5lY3RvckxpbmVDb2xvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgICAgZGF0YS5jb25uZWN0b3JMaW5lQ29sb3JcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnZ3JlZW4nO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdzdHJva2UtZGFzaGFycmF5JywgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmRhc2hBcnJheSkge1xuICAgICAgICAgIHJldHVybiBkYXRhLmRhc2hBcnJheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KTtcblxuICAgIC8vIFRyYW5zaXRpb24gYmFjayB0byB0aGUgcGFyZW50IGVsZW1lbnQgcG9zaXRpb25cbiAgICBsaW5rVXBkYXRlXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudHMgPSBkLmRhdGEucGFyZW50Tm9kZUlkcy5tYXAoXG4gICAgICAgICAgKHBhcmVudE5vZGVJZCkgPT5cbiAgICAgICAgICAgIG5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IHBhcmVudE5vZGVJZClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhZ29uYWwoZCwgcGFyZW50cyk7XG4gICAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBhbnkgIGxpbmtzIHdoaWNoIGlzIGV4aXRpbmcgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgY29uc3QgbGlua0V4aXQgPSBsaW5rU2VsZWN0aW9uXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogeCA/IHggOiAwLFxuICAgICAgICAgIHk6IHkgPyB5IDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRpYWcgPSB0aGlzLmRpYWdvbmFsKG8sIFtvXSk7XG4gICAgICAgIHJldHVybiBkaWFnO1xuICAgICAgfSlcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBOT0RFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vIEdldCBub2RlcyBzZWxlY3Rpb25cbiAgICBjb25zdCBub2Rlc1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckdcbiAgICAgIC5zZWxlY3RBbGwoJ2cubm9kZScpXG4gICAgICAuZGF0YShub2RlcywgKHsgaWQgfSkgPT4gaWQpO1xuXG4gICAgbGV0IGh0ID0gdGhpcztcbiAgICAvLyBFbnRlciBhbnkgbmV3IG5vZGVzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cbiAgICBjb25zdCBub2RlRW50ZXIgPSBub2Rlc1NlbGVjdGlvblxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGUnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkKSA9PiBgdHJhbnNsYXRlKCR7eDB9LCR7eTB9KWApXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLm9uKCdjbGljaycsICh7IGRhdGEgfSkgPT4geyBcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLmNsaWNrYWJsZSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGF0dHJzLmRpdmVyc2l0eVZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmRpdmVyc2l0eVZhbHVlc1tcbiAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICBdLmluZGV4T2YoZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW1xuICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICBdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW1xuICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICBdLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgXS5pbmRleE9mKGRhdGEubm9kZUlkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICBdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAyO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vaWYgZW1wdHlcbiAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tcbiAgICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICAgIF0ucHVzaCgnVG90YWwnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV1cbiAgICAgICAgICAgICAgICAgIC5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgICAgXVswXSA9PSAnVG90YWwnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vaWYgJ1RvdGFsJ1xuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgICAgXS5wb3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tcbiAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgXS5wdXNoKGRhdGEubm9kZUlkKTtcbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IDEwO1xuXG4gICAgICAgICAgICAgIGxldCB0b3RhbCA9IDE7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcykge1xuICAgICAgICAgICAgICAgIHRvdGFsICo9IGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodG90YWwgPiAxNSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgJ1dBUk5JTkc6IEFkZGluZyBtb3JlIGFjYWRlbWljIGF0dHJpYnV0ZXMgbWF5IHJlc3VsdCBpbiBsb3cgdmlzaWJpbGl0eSBpbiB0aGUgdmlzdWFsaXphdGlvbiBvciBjcmFzaGluZydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UgYm9yZGVyJyk7XG4gICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID1cbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9PSAyID8gMTAgOiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmV4cGFuZGFibGUpIHtcbiAgICAgICAgICBsZXQgbm9kZUNsaWNrZWQgPSBub2Rlcy5maW5kKFxuICAgICAgICAgICAgKG5vZGUpID0+IG5vZGUuaWQgPT09IGRhdGEubm9kZUlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBodC5vbkJ1dHRvbkNsaWNrKG5vZGVDbGlja2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0LnVwZGF0ZShkYXRhKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3ZlcicsIChkKSA9PiB7XG4gICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZDMuZXZlbnQpO1xuICAgICAgICBpZiAoZC5kZXNjcmlwdGlvbikge1xuICAgICAgICAgIGF0dHJzLnRvb2x0aXBEaXZcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwLjkpO1xuICAgICAgICAgIGF0dHJzLnRvb2x0aXBEaXZcbiAgICAgICAgICAgIC5odG1sKGQuZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgYXR0cnMudG9vbHRpcERpdi50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKS5zdHlsZSgnb3BhY2l0eScsIDApO1xuICAgICAgfSk7XG5cbiAgICAvLyBBZGQgYmFja2dyb3VuZCByZWN0YW5nbGUgZm9yIHRoZSBub2Rlc1xuICAgIG5vZGVFbnRlclxuICAgICAgLnBhdHRlcm5pZnkoe1xuICAgICAgICB0YWc6ICdyZWN0JyxcbiAgICAgICAgc2VsZWN0b3I6ICdub2RlLXJlY3QnLFxuICAgICAgICBkYXRhOiAoZCkgPT4gW2RdLFxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsICh7IF9jaGlsZHJlbiB9KSA9PlxuICAgICAgICBfY2hpbGRyZW4gPyAnbGlnaHRzdGVlbGJsdWUnIDogJyNmZmYnXG4gICAgICApO1xuXG4gICAgLy8gTm9kZSB1cGRhdGUgc3R5bGVzXG4gICAgY29uc3Qgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlclxuICAgICAgLm1lcmdlKG5vZGVzU2VsZWN0aW9uKVxuICAgICAgLnN0eWxlKCdmb250JywgJzEycHggc2Fucy1zZXJpZicpO1xuXG4gICAgLy8gQWRkIGZvcmVpZ25PYmplY3QgZWxlbWVudCBpbnNpZGUgcmVjdGFuZ2xlXG4gICAgY29uc3QgZm8gPSBub2RlVXBkYXRlLnBhdHRlcm5pZnkoe1xuICAgICAgdGFnOiAnZm9yZWlnbk9iamVjdCcsXG4gICAgICBzZWxlY3RvcjogJ25vZGUtZm9yZWlnbi1vYmplY3QnLFxuICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICB9KTtcblxuICAgIC8vIEFkZCBmb3JlaWduIG9iamVjdFxuICAgIGZvLnBhdHRlcm5pZnkoe1xuICAgICAgdGFnOiAneGh0bWw6ZGl2JyxcbiAgICAgIHNlbGVjdG9yOiAnbm9kZS1mb3JlaWduLW9iamVjdC1kaXYnLFxuICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICB9KTtcblxuICAgIHRoaXMucmVzdHlsZUZvcmVpZ25PYmplY3RFbGVtZW50cygpO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgcHJvcGVyIHBvc2l0aW9uIGZvciB0aGUgbm9kZVxuICAgIG5vZGVVcGRhdGVcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcbiAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgIC5hdHRyKFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgKHsgeCwgeSB9KSA9PiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgXG4gICAgICApXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpO1xuXG4gICAgLy8gU3R5bGUgbm9kZSByZWN0YW5nbGVzXG4gICAgbm9kZVVwZGF0ZVxuICAgICAgLnNlbGVjdCgnLm5vZGUtcmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAoeyBkYXRhIH0pID0+IGRhdGEud2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgKHsgZGF0YSB9KSA9PiBkYXRhLmhlaWdodClcbiAgICAgIC5hdHRyKCd4JywgKHsgZGF0YSB9KSA9PiAtZGF0YS53aWR0aCAvIDIpXG4gICAgICAuYXR0cigneScsICh7IGRhdGEgfSkgPT4gLWRhdGEuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdyeCcsICh7IGRhdGEgfSkgPT4gZGF0YS5ib3JkZXJSYWRpdXMgfHwgMClcbiAgICAgIC5hdHRyKFxuICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLmJvcmRlcldpZHRoIHx8IGF0dHJzLnN0cm9rZVdpZHRoXG4gICAgICApXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICh7IGJvcmRlckNvbG9yIH0pID0+IGJvcmRlckNvbG9yKVxuICAgICAgLnN0eWxlKFxuICAgICAgICAnZmlsbCcsXG4gICAgICAgICh7IGJhY2tncm91bmRDb2xvciB9KSA9PiBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICk7XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbm9kZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICAgIGNvbnN0IG5vZGVFeGl0VHJhbnNpdGlvbiA9IG5vZGVzU2VsZWN0aW9uXG4gICAgICAuZXhpdCgpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHt4fSwke3l9KWApXG4gICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnJlbW92ZSgpO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMCk7XG5cbiAgICAvLyBPbiBleGl0IHJlZHVjZSB0aGUgbm9kZSByZWN0cyBzaXplIHRvIDBcbiAgICBub2RlRXhpdFRyYW5zaXRpb25cbiAgICAgIC5zZWxlY3RBbGwoJy5ub2RlLXJlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTApXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApO1xuXG4gICAgLy8gU3RvcmUgdGhlIG9sZCBwb3NpdGlvbnMgZm9yIHRyYW5zaXRpb24uXG4gICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgZC54MCA9IGQueDtcbiAgICAgIGQueTAgPSBkLnk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGRldGVjdHMgd2hldGhlciBjdXJyZW50IGJyb3dzZXIgaXMgZWRnZVxuICBpc0VkZ2UoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdFZGdlJyk7XG4gIH1cblxuICAvKiBGdW5jdGlvbiBjb252ZXJ0cyByZ2JhIG9iamVjdHMgdG8gcmdiYSBjb2xvciBzdHJpbmcgXG4gICAge3JlZDoxMTAsZ3JlZW46MTUwLGJsdWU6MjU1LGFscGhhOjF9ICA9PiByZ2JhKDExMCwxNTAsMjU1LDEpXG4gICovXG4gIHJnYmFPYmpUb0NvbG9yKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgfSkge1xuICAgIHJldHVybiBgcmdiYSgke3JlZH0sJHtncmVlbn0sJHtibHVlfSwke2FscGhhfSlgO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgY3VzdG9tIGRpYWdvbmFsIC0gcGxheSB3aXRoIGl0IGhlcmUgLSBodHRwczovL3RvLmx5LzF6aFRLXG4gIGRpYWdvbmFsKHMsIHBhcmVudHMpIHtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpXG4gICAgICAuY2VudGVyRy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgJ2dyb3VwT2ZQYXRocycpO1xuICAgIGxldCBoZWlnaHRNdWx0aXBsaWVyID1cbiAgICAgIHBhcmVudHMubGVuZ3RoID09IDIgPyAwLjU3NSA6IDAuNDI1O1xuICAgIGZvciAoY29uc3QgdCBvZiBwYXJlbnRzKSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gcy55IC0gdC55O1xuXG4gICAgICAvLyBDYWxjdWxhdGUgc29tZSB2YXJpYWJsZXMgYmFzZWQgb24gc291cmNlIGFuZCB0YXJnZXQgKHMsdCkgY29vcmRpbmF0ZXNcbiAgICAgIGxldCB4ID0gcy54O1xuICAgICAgbGV0IHkgPSBzLnk7XG4gICAgICBsZXQgZXggPSB0Lng7XG4gICAgICBsZXQgZXkgPSB0Lnk7XG4gICAgICBsZXQgeHJ2cyA9IGV4IC0geCA8IDAgPyAtMSA6IDE7XG4gICAgICBsZXQgeXJ2cyA9IC0xO1xuICAgICAgbGV0IHJkZWYgPSAzNTtcbiAgICAgIGxldCBySW5pdGlhbCA9XG4gICAgICAgIE1hdGguYWJzKGV4IC0geCkgLyAyIDwgcmRlZlxuICAgICAgICAgID8gTWF0aC5hYnMoZXggLSB4KSAvIDJcbiAgICAgICAgICA6IHJkZWY7XG4gICAgICBsZXQgciA9XG4gICAgICAgIE1hdGguYWJzKGV5IC0geSkgLyAyIDwgckluaXRpYWxcbiAgICAgICAgICA/IE1hdGguYWJzKGV5IC0geSkgLyAyXG4gICAgICAgICAgOiBySW5pdGlhbDtcbiAgICAgIGxldCBoID0gTWF0aC5hYnMoZXkgLSB5KSAqIGhlaWdodE11bHRpcGxpZXIgLSByO1xuICAgICAgbGV0IHcgPSBNYXRoLmFicyhleCAtIHgpIC0gciAqIDI7XG5cbiAgICAgIGxldCBwYXRoID0gYFxuICAgICAgICAgICAgIE0gJHt4fSAke3l9XG4gICAgICAgICAgICAgTCAke3h9ICR7eSArIGggKiB5cnZzfVxuICAgICAgICAgICAgIEMgJHt4fSAke3kgKyBoICogeXJ2cyArIHIgKiB5cnZzfSAke3h9ICR7XG4gICAgICAgIHkgKyBoICogeXJ2cyArIHIgKiB5cnZzXG4gICAgICB9ICR7eCArIHIgKiB4cnZzfSAke3kgKyBoICogeXJ2cyArIHIgKiB5cnZzfVxuICAgICAgICAgICAgIEwgJHt4ICsgdyAqIHhydnMgKyByICogeHJ2c30gJHtcbiAgICAgICAgeSArIGggKiB5cnZzICsgciAqIHlydnNcbiAgICAgIH1cbiAgICAgICAgICAgICBDICR7ZXh9ICR7eSArIGggKiB5cnZzICsgciAqIHlydnN9ICR7ZXh9ICR7XG4gICAgICAgIHkgKyBoICogeXJ2cyArIHIgKiB5cnZzXG4gICAgICB9ICR7ZXh9ICR7ZXkgLSBoICogeXJ2c31cbiAgICAgICAgICAgICBMICR7ZXh9ICR7ZXl9XG4gICAgICAgICAgIGA7XG4gICAgICBncm91cFxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKVxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJyk7XG4gICAgfVxuXG4gICAgbGV0IGNvbWJpbmVkRCA9ICcnO1xuICAgIGdyb3VwLnNlbGVjdEFsbCgncGF0aCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkJykpXG4gICAgICAgIGNvbWJpbmVkRCArPSBkMy5zZWxlY3QodGhpcykuYXR0cignZCcpO1xuICAgIH0pO1xuICAgIGdyb3VwLnJlbW92ZSgpO1xuICAgIHJldHVybiBjb21iaW5lZEQ7XG4gIH1cblxuICByZXN0eWxlRm9yZWlnbk9iamVjdEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICBhdHRycy5zdmdcbiAgICAgIC5zZWxlY3RBbGwoJy5ub2RlLWZvcmVpZ24tb2JqZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsICh7IHdpZHRoIH0pID0+IHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsICh7IGhlaWdodCB9KSA9PiBoZWlnaHQpXG4gICAgICAuYXR0cigneCcsICh7IHdpZHRoIH0pID0+IC13aWR0aCAvIDIpXG4gICAgICAuYXR0cigneScsICh7IGhlaWdodCB9KSA9PiAtaGVpZ2h0IC8gMik7XG4gICAgYXR0cnMuc3ZnXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1mb3JlaWduLW9iamVjdC1kaXYnKVxuICAgICAgLnN0eWxlKCd3aWR0aCcsICh7IHdpZHRoIH0pID0+IGAke3dpZHRofXB4YClcbiAgICAgIC5zdHlsZSgnaGVpZ2h0JywgKHsgaGVpZ2h0IH0pID0+IGAke2hlaWdodH1weGApXG4gICAgICAuc3R5bGUoJ2NvbG9yJywgKHsgdGV4dENvbG9yIH0pID0+XG4gICAgICAgIHRleHRDb2xvciA/IHRleHRDb2xvciA6ICdibGFjaydcbiAgICAgIClcbiAgICAgIC5zdHlsZSgndGV4dC1hbGlnbicsICdjZW50ZXInKVxuICAgICAgLnN0eWxlKCdtYXJnaW4tdG9wJywgJzUwcHgnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnNDBweCcpXG4gICAgICAuaHRtbCgoeyBkYXRhIH0pID0+IGRhdGEubm9kZUlkKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgb25CdXR0b25DbGljayhkKSB7XG4gICAgLy8gSWYgY2hpbGRyZW5zIGFyZSBleHBhbmRlZFxuICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICBpZiAoZC5pZCA9PT0gJ0NvbnZvY2F0aW9uJykge1xuICAgICAgICBjb25zdCBkZW1vZ3JhcGhpY05vZGUgPSBkLnBhcmVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgaWYgKGRlbW9ncmFwaGljTm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9Db2xsYXBzZSB0aGVtXG4gICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICBkLmNoaWxkcmVuID0gbnVsbDtcblxuICAgICAgLy8gU2V0IGRlc2NlbmRhbnRzIGV4cGFuZGVkIHByb3BlcnR5IHRvIGZhbHNlXG4gICAgICB0aGlzLnNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKGQsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGQuaWQgPT09ICdEZW1vZ3JhcGhpY3MnKSB7XG4gICAgICAgIGNvbnN0IGNvbnZvY2F0aW9uTm9kZSA9IGQucGFyZW50LmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIGlmIChjb252b2NhdGlvbk5vZGUuY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhjb252b2NhdGlvbk5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEV4cGFuZCBjaGlsZHJlblxuICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgLy8gU2V0IGVhY2ggY2hpbGRyZW4gYXMgZXhwYW5kZWRcblx0XHRcdGlmIChkLmNoaWxkcmVuKVxuICAgICAgICBkLmNoaWxkcmVuLmZvckVhY2goXG4gICAgICAgICAgKHsgZGF0YSB9KSA9PiAoZGF0YS5leHBhbmRlZCA9IHRydWUpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmVkcmF3IEdyYXBoXG4gICAgdGhpcy51cGRhdGUoZCk7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGNoYW5nZXMgYGV4cGFuZGVkYCBwcm9wZXJ0eSB0byBkZXNjZW5kYW50c1xuICBzZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihcbiAgICB7IGRhdGEsIGNoaWxkcmVuLCBfY2hpbGRyZW4gfSxcbiAgICBmbGFnXG4gICkge1xuICAgIC8vIFNldCBmbGFnIHRvIHRoZSBjdXJyZW50IHByb3BlcnR5XG4gICAgZGF0YS5leHBhbmRlZCA9IGZsYWc7XG5cbiAgICAvLyBMb29wIG92ZXIgYW5kIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBleHBhbmRlZCBjaGlsZHJlbidzIGRlc2NlbmRhbnRzXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmxhZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgYW5kIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjb2xsYXBzZWQgY2hpbGRyZW4ncyBkZXNjZW5kYW50c1xuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmxhZyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRFeHBhbmRlZCBBUEksIGl0IGV4cGFuZHMgb3IgY29sbGFwc2VzIHBhcnRpY3VsYXIgbm9kZVxuICBzZXRFeHBhbmRlZChpZCwgZXhwYW5kZWRGbGFnKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAvLyBSZXRyaWV2ZSBub2RlIGJ5IG5vZGUgSWRcbiAgICBjb25zdCBub2RlID0gYXR0cnMuYWxsTm9kZXMuZmlsdGVyKFxuICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLm5vZGVJZCA9PSBpZFxuICAgIClbMF07XG5cbiAgICAvLyBJZiBub2RlIGV4aXN0cywgc2V0IGV4cGFuc2lvbiBmbGFnXG4gICAgaWYgKG5vZGUpIG5vZGUuZGF0YS5leHBhbmRlZCA9IGV4cGFuZGVkRmxhZztcblxuICAgIC8vIEZpcnN0IGV4cGFuZCBhbGwgbm9kZXNcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuZXhwYW5kKGQpKTtcblxuICAgIC8vIFRoZW4gY29sbGFwc2UgYWxsIG5vZGVzXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgIC8vIFRoZW4gZXhwYW5kIG9ubHkgdGhlIG5vZGVzLCB3aGljaCB3ZXJlIHByZXZpb3VzbHkgZXhwYW5kZWQsIG9yIGhhdmUgYW4gZXhwYW5kIGZsYWcgc2V0XG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PlxuICAgICAgdGhpcy5leHBhbmRTb21lTm9kZXMoZClcbiAgICApO1xuXG4gICAgLy8gUmVkcmF3IGdyYXBoXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG4gIH1cblxuICAvLyBNZXRob2Qgd2hpY2ggb25seSBleHBhbmRzIG5vZGVzLCB3aGljaCBoYXZlIHByb3BlcnR5IHNldCBcImV4cGFuZGVkPXRydWVcIlxuICBleHBhbmRTb21lTm9kZXMoZCkge1xuICAgIC8vIElmIG5vZGUgaGFzIGV4cGFuZGVkIHByb3BlcnR5IHNldFxuICAgIGlmIChkLmRhdGEuZXhwYW5kZWQpIHtcbiAgICAgIC8vIFJldHJpZXZlIG5vZGUncyBwYXJlbnRcbiAgICAgIGxldCBwYXJlbnQgPSBkLnBhcmVudDtcblxuICAgICAgLy8gV2hpbGUgd2UgY2FuIGdvIHVwXG4gICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIC8vIEV4cGFuZCBhbGwgY3VycmVudCBwYXJlbnQncyBjaGlsZHJlblxuICAgICAgICBpZiAocGFyZW50Ll9jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IHBhcmVudC5fY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcGFyZW50IGhvbGRpbmcgb2JqZWN0XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBjb2xsYXBzZWQgbm9kZXNcbiAgICBpZiAoZC5fY2hpbGRyZW4pIHtcbiAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmV4cGFuZFNvbWVOb2RlcyhjaCkpO1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZWxseSBkbyB0aGUgc2FtZSBmb3IgZXhwYW5kZWQgbm9kZXNcbiAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgbm9kZXMgc3RhdGUgYW5kIHJlZHJhd3MgZ3JhcGgsIHVzdWFsbHkgYWZ0ZXIgZGF0YSBjaGFuZ2VcbiAgdXBkYXRlTm9kZXNTdGF0ZSgpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIC8vIFN0b3JlIG5ldyByb290IGJ5IGNvbnZlcnRpbmcgZmxhdCBkYXRhIHRvIGhpZXJhcmNoeVxuICAgIGF0dHJzLnJvb3QgPSBkM1xuICAgICAgLnN0cmF0aWZ5KClcbiAgICAgIC5pZCgoeyBub2RlSWQgfSkgPT4gbm9kZUlkKVxuICAgICAgLnBhcmVudElkKCh7IHBhcmVudE5vZGVJZHMgfSkgPT4gcGFyZW50Tm9kZUlkc1swXSkoXG4gICAgICBhdHRycy5kYXRhXG4gICAgKTtcblxuICAgIC8vIFN0b3JlIHBvc2l0aW9ucywgd2hlcmUgY2hpbGRyZW4gYXBwZWFyIGR1cmluZyB0aGVpciBlbnRlciBhbmltYXRpb25cbiAgICBhdHRycy5yb290LngwID0gMDtcbiAgICBhdHRycy5yb290LnkwID0gMDtcblxuICAgIC8vIFN0b3JlIGFsbCBub2RlcyBpbiBmbGF0IGZvcm1hdCAoYWx0aG91Z2gsIG5vdyB3ZSBjYW4gYnJvd3NlIHBhcmVudCwgc2VlIGRlcHRoIGUudC5jLiApXG4gICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzXG4gICAgICAudHJlZW1hcChhdHRycy5yb290KVxuICAgICAgLmRlc2NlbmRhbnRzKCk7XG5cbiAgICAvLyBTdG9yZSBkaXJlY3QgYW5kIHRvdGFsIGRlc2NlbmRhbnRzIGNvdW50XG4gICAgYXR0cnMuYWxsTm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgT2JqZWN0LmFzc2lnbihkLmRhdGEsIHtcbiAgICAgICAgZGlyZWN0U3Vib3JkaW5hdGVzOiBkLmNoaWxkcmVuXG4gICAgICAgICAgPyBkLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgIDogMCxcbiAgICAgICAgdG90YWxTdWJvcmRpbmF0ZXM6IGQuZGVzY2VuZGFudHMoKS5sZW5ndGggLSAxLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBFeHBhbmQgYWxsIG5vZGVzIGZpcnN0XG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKHRoaXMuZXhwYW5kKTtcblxuICAgIC8vIFRoZW4gY29sbGFwc2UgdGhlbSBhbGxcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBvbmx5IGV4cGFuZCBub2Rlcywgd2hpY2ggaGF2ZSBleHBhbmRlZCBwcm9wcnR5IHNldCB0byB0cnVlXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKVxuICAgICk7XG5cbiAgICAvLyBSZWRyYXcgR3JhcGhzXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB3aGljaCBjb2xsYXBzZXMgcGFzc2VkIG5vZGUgYW5kIGl0J3MgZGVzY2VuZGFudHNcbiAgY29sbGFwc2UoZCkge1xuICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5jb2xsYXBzZShjaCkpO1xuICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggZXhwYW5kcyBwYXNzZWQgbm9kZSBhbmQgaXQncyBkZXNjZW5kYW50c1xuICBleHBhbmQoZCkge1xuICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5leHBhbmQoY2gpKTtcbiAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBab29tIGhhbmRsZXIgZnVuY3Rpb25cbiAgem9vbWVkKCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2hhcnQgPSBhdHRycy5jaGFydDtcblxuICAgIC8vIEdldCBkMyBldmVudCdzIHRyYW5zZm9ybSBvYmplY3RcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBkMy5ldmVudC50cmFuc2Zvcm07XG5cbiAgICAvLyBTdG9yZSBpdFxuICAgIGF0dHJzLmxhc3RUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAvLyBSZXBvc2l0aW9uIGFuZCByZXNjYWxlIGNoYXJ0IGFjY29yZGluZ2x5XG4gICAgY2hhcnQuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcblxuICAgIC8vIEFwcGx5IG5ldyBzdHlsZXMgdG8gdGhlIGZvcmVpZ24gb2JqZWN0IGVsZW1lbnRcbiAgICBpZiAodGhpcy5pc0VkZ2UoKSkge1xuICAgICAgdGhpcy5yZXN0eWxlRm9yZWlnbk9iamVjdEVsZW1lbnRzKCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3VuYnVyc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL0V4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogMzAwMCxcbiAgICAgIHN2Z0hlaWdodDogMzAwMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGV4dGVuZGVkTGluZUxlbmd0aDogNDAsXG4gICAgICB0ZXh0RGlzdGFuY2U6IDE1LFxuICAgICAgb3V0ZXJUZXh0U2l6ZTogXCIyMHB4XCIsXG4gICAgICBhdHRyaWJ1dGVJbmRleDogbnVsbCxcbiAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgZGlzcGxheU5vZGVzOiBudWxsLFxuICAgICAgdmFsdWVzOiBudWxsLFxuICAgICAgY29sb3JzOiB7XG4gICAgICAgIE1hbGU6ICcjZmM4ZDU5JyxcbiAgICAgICAgRmVtYWxlOiAnIzkxYmZkYicsXG4gICAgICAgIEludGVybmF0aW9uYWw6ICcjOTk4ZWMzJyxcbiAgICAgICAgRG9tZXN0aWM6ICcjZjFhMzQwJyxcbiAgICAgICAgJzw9MTcnOiAnI2Y3ZmNmNScsXG4gICAgICAgICcxOC0yMCc6ICcjZTVmNWUwJyxcbiAgICAgICAgJzIxLTI1JzogJyNjN2U5YzAnLFxuICAgICAgICAnMjYtMzAnOiAnI2ExZDk5YicsXG4gICAgICAgICczMS0zNSc6ICcjNzRjNDc2JyxcbiAgICAgICAgJzM2LTQ1JzogJyM0MWFiNWQnLFxuICAgICAgICAnNDYtNTUnOiAnIzIzOGI0NScsXG4gICAgICAgICc1NSsnOiAnIzAwNmQyYycsXG4gICAgICAgICcwJzogJyM5ODk4OTgnXG4gICAgICB9LFxuICAgICAgdGV4dENpcmNsZXNDb3VudDogW10sXG4gICAgICB0ZXh0Q2lyY2xlc1BlcmNlbnQ6IFtdLFxuICAgICAgY2VudGVyVGV4dDogbnVsbCxcbiAgICAgIGNlbnRlclRleHRTaXplOiBcIjQwcHhcIixcbiAgICAgIGNlbnRlclRleHRIZWlnaHQ6IDYwLFxuICAgICAgY29tcGFyZU1vZGU6IGZhbHNlLFxuICAgICAgbGVnZW5kV2lkdGg6IDE1MFxuICAgIH07XG5cbiAgICAvL2dldCBhdHRyaWJ1dGVzIG1ldGhvZFxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy9nZXR0ZXIgJiBzZXR0ZXJcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qIFJlbW92ZXMgYWxsIGVsZW1lbnRzIGluIHN2ZyAqL1xuICByZW1vdmVBbGwoKSB7XG4gICAgdGhpcy5nZXRDaGFydFN0YXRlKCkuc3ZnLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICB9XG4gIFxuICAvKiBDb252ZXJ0cyBvYmplY3RzIHRvIHNsaWNlcyB3aXRoIHF1ZXJpZXMgKi9cbiAgZ2V0VmFsdWVzKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8vcHJlcGFyaW5nIHNsaWNlc1xuICAgIGNvbnN0IGNhcnRlc2lhbiA9ICguLi5hKSA9PlxuICAgICAgYS5yZWR1Y2UoKGEsIGIpID0+XG4gICAgICAgIGEuZmxhdE1hcCgoZCkgPT4gYi5tYXAoKGUpID0+IFtkLCBlXS5mbGF0KCkpKVxuICAgICAgKTtcbiAgICBsZXQgc2xpY2VzID0gY2FydGVzaWFuKFxuICAgICAgYWNhZGVtaWNWYWx1ZXNbJ0FjYWRlbWljIFllYXInXSxcbiAgICAgIGFjYWRlbWljVmFsdWVzLkRlZ3JlZSxcbiAgICAgIGFjYWRlbWljVmFsdWVzLkZhY3VsdHksXG4gICAgICBhY2FkZW1pY1ZhbHVlc1snU3R1ZHkgU3RhdHVzJ11cbiAgICApO1xuXG4gICAgY29uc3QgbWFrZVF1ZXJ5ID0gKHNsaWNlLCBkaXZlcnNpdHlBdHRyLCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHF1ZXJ5ID0gWy4uLnNsaWNlXTtcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICAgICAgaWYgKHByb3AgIT09IGRpdmVyc2l0eUF0dHIpIHtcbiAgICAgICAgICBxdWVyeS5wdXNoKCdUb3RhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfTtcblxuICAgIC8vY29udmVydCBzbGljZXMgdG8ga2V5IGZvcm1hdFxuICAgXG4gICAgbGV0IHZhbHVlcyA9IHt9O1xuICAgIGZvciAobGV0IHNsaWNlIG9mIHNsaWNlcykge1xuICAgICAgbGV0IHN0ciA9IHNsaWNlLnRvU3RyaW5nKCk7XG4gICAgICB2YWx1ZXNbc3RyXSA9IHt9O1xuICAgICAgZm9yIChsZXQgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICAgICAgaWYgKGRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPT0gMCkgY29udGludWU7XG4gICAgICAgIHZhbHVlc1tzdHJdW2F0dHJdID0ge307XG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIGRpdmVyc2l0eVZhbHVlc1thdHRyXSkge1xuICAgICAgICAgIHZhbHVlc1tzdHJdW2F0dHJdW3ZhbHVlXSA9IG1ha2VRdWVyeShcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG4gIFxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIGFyY3MsIHJldHVybiBhcmMgd2lkdGgsIGlubmVycmFkaXVzIGFuZCB0ZXh0IHNpemUqL1xuICBjb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHgsIHksIG51bUFyY3Mpe1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXHRcdFxuICAgIGxldCB0ZXh0SGVpZ2h0T2Zmc2V0ID0gNTA7XG4gICAgXG4gICAgbGV0IG1pbiA9IE1hdGgubWluKHgsIHktdGV4dEhlaWdodE9mZnNldCk7IFxuICAgIGxldCBhcmNXaWR0aCA9IChtaW4vKDIqbnVtQXJjcyArIDcpKTsgLy9taW4gPSAyKm51bUFyY3MqYXJjV2lkdGggKyAyKmlubmVyUmFkaXVzLCBpbm5lclJhZGl1cyA9IDMqYXJjV2lkdGhcbiAgICBsZXQgaW5uZXJSYWRpdXMgPSAzKmFyY1dpZHRoO1xuICAgIFxuICAgIGxldCBtdWx0aXBsaWVyID0gMS41O1xuICAgIGxldCBuID0gMTM7IC8vJ2ludGVybmF0aW9uYWwnIHdpdGggMTMgbGV0dGVycyBpcyBsb25nZXN0IHdvcmQgaW4gZGl2ZXJzaXR5IGF0dHJpYnV0ZXMgXG4gICAgbGV0IGlubmVyVGV4dFNpemUgPSBtdWx0aXBsaWVyKigyKmlubmVyUmFkaXVzKS9uICsgXCJweFwiO1xuICAgIHJldHVybiB7YXJjV2lkdGg6IGFyY1dpZHRoLCBpbm5lclJhZGl1czogaW5uZXJSYWRpdXMsIGlubmVyVGV4dFNpemU6IGlubmVyVGV4dFNpemV9O1xuICB9XG4gIFxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIHNxdWFyZXMsIHJldHVybiByb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZSAqL1xuICBjb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoeCwgeSwgbil7XG4gICAgLy8gQ29tcHV0ZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucywgYW5kIGNlbGwgc2l6ZVxuICAgIGxldCByYXRpbyA9IHggLyB5O1xuICAgIGxldCBuY29sc19mbG9hdCA9IE1hdGguc3FydChuICogcmF0aW8pO1xuICAgIGxldCBucm93c19mbG9hdCA9IG4gLyBuY29sc19mbG9hdDtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgaGVpZ2h0XG4gICAgbGV0IG5yb3dzMSA9IE1hdGguY2VpbChucm93c19mbG9hdCk7XG4gICAgbGV0IG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB3aGlsZSAobnJvd3MxICogcmF0aW8gPCBuY29sczEpIHtcbiAgICAgICAgbnJvd3MxKys7XG4gICAgICAgIG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTEgPSB5IC8gbnJvd3MxO1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSB3aWR0aFxuICAgIGxldCBuY29sczIgPSBNYXRoLmNlaWwobmNvbHNfZmxvYXQpO1xuICAgIGxldCBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgd2hpbGUgKG5jb2xzMiA8IG5yb3dzMiAqIHJhdGlvKSB7XG4gICAgICAgIG5jb2xzMisrO1xuICAgICAgICBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUyID0geCAvIG5jb2xzMjtcblxuICAgIC8vIEZpbmQgdGhlIGJlc3QgdmFsdWVzXG4gICAgbGV0IG5yb3dzLCBuY29scywgY2VsbF9zaXplO1xuICAgIGlmIChjZWxsX3NpemUxIDwgY2VsbF9zaXplMikge1xuICAgICAgICBucm93cyA9IG5yb3dzMjtcbiAgICAgICAgbmNvbHMgPSBuY29sczI7XG4gICAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbnJvd3MgPSBucm93czE7XG4gICAgICAgIG5jb2xzID0gbmNvbHMxO1xuICAgICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUxO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge3NpemU6IGNlbGxfc2l6ZSwgcm93czogbnJvd3MsIGNvbHM6IG5jb2xzfTtcbiAgfVxuICBcbiAgLyogRmV0Y2hpbmcgZGF0YSBhbmQgc2V0dGluZyB1cCBzdmcgY29udGFpbmVyICovXG4gIGFzeW5jIHNldHVwKHVybCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXHRcdGxldCBzYiA9IHRoaXM7XG4gICAgXG4gICAgLy9sb2FkIGRhdGEgc3luY2hyb25vdXNseVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkMy5jc3YodXJsKTtcblxuICAgIGF0dHJzLmF0dHJpYnV0ZUluZGV4ID0gZGF0YS5jb2x1bW5zO1xuXG4gICAgLy9jb252ZXJ0IGRhdGEgdG8gb2JqZWN0IGZvcm1hdFxuICAgIGF0dHJzLmRhdGEgPSBkYXRhLnJlZHVjZShmdW5jdGlvbiAobWFwLCBvYmosIGkpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iaik7XG5cbiAgICAgIHZhbHVlcy5wb3AoKTtcblxuICAgICAgbWFwWycnLmNvbmNhdCh2YWx1ZXMpXSA9IG9iai5Db3VudDtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKTtcblxuICAgIC8vIHNldHRpbmcgdXAgY29tcGFyZSBidXR0b25cbiAgICBjb25zdCB0b2dnbGVDb21wYXJlID0gKCkgPT4ge1xuICAgICAgYXR0cnMuY29tcGFyZU1vZGUgPSAhYXR0cnMuY29tcGFyZU1vZGU7XG4gICAgICBzYi5yZW5kZXIoYXR0cnMudmFsdWVzKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLm9uY2xpY2sgPSB0b2dnbGVDb21wYXJlO1xuICAgIFxuICAgIGF0dHJzLnN2ZyA9IHN2ZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIFxuICAgLyogQ29udmVydGluZyBpbnB1dCBvYmplY3RzIHRvIHZhbHVlcyBmb3IgZGlzcGxheSAqL1xuICBpbml0aWFsUmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcyhcbiAgICAgIGFjYWRlbWljVmFsdWVzLFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzXG4gICAgKTtcblxuICAgIHRoaXMucmVuZGVyKHZhbHVlcyk7XG4gIH1cbiAgXG4gIFxuICAvKiBSZWN1cnJpbmcgcmVuZGVyICovXG4gIHJlbmRlcih2YWx1ZXMpe1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXHRcdGxldCBzYiA9IHRoaXM7XG4gICBcbiAgICAvLyBTZXR0aW5nIHZhbHVlcyBzbyB2YWx1ZXMgaXMgc3RpbGwgYWNjZXNzaWJsZSB3aGVuIGNvbXBhcmUgaXMgdG9nZ2xlZCBcbiAgICBhdHRycy52YWx1ZXMgPSB2YWx1ZXM7IFxuICAgIFxuICAgIC8vIHJlcHVycG9zaW5nIGJhY2sgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgIGlmIChhdHRycy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGJhY2sgPSAoKSA9PiBzYi5yZW5kZXIoYXR0cnMuaGlzdG9yeS5wb3AoKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBhdHRycy5kaXNwbGF5Tm9kZXM7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBlbGVtZW50cyBpbiBzdmdcblx0XHR0aGlzLnJlbW92ZUFsbCgpO1xuICAgIFxuICAgIC8vIHJlLWNyZWF0ZSB0aGUgbmV3IGVsZW1lbnRzXG4gICAgaWYgKCFhdHRycy5jb21wYXJlTW9kZSl7XG4gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgIHRoaXMucmVuZGVyU3VuYnVyc3QodmFsdWVzKTtcbiAgICAgICAvLyBkaXNhYmxlIGNvbXBhcmUgbW9kZSBpZiBvbmx5IDEgc2xpY2VcbiAgICAgICBpZiAoT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGggPT09IDEpXG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICB0aGlzLnJlbmRlckNvbXBhcmUodmFsdWVzKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJMZWdlbmQodmFsdWVzKTtcbiAgfVxuICBcbiAgLy8gcmVuZGVyIHRoZSBzdW5idXJzdFxuIHJlbmRlclN1bmJ1cnN0KHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvL0hlbHBlciB2YWx1ZXNcbiAgICBjb25zdCBudW1TbGljZXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aDtcbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKS5sZW5ndGg7XG4gICAgY29uc3QgZXh0ZW5kZWRMaW5lTGVuZ3RoID0gYXR0cnMuZXh0ZW5kZWRMaW5lTGVuZ3RoO1xuICAgIGNvbnN0IGhhbGZTbGljZVJhZGlhbnMgPSBNYXRoLlBJIC8gbnVtU2xpY2VzO1xuICAgIGNvbnN0IHRleHREaXN0YW5jZSA9IGF0dHJzLnRleHREaXN0YW5jZTtcbiAgICBjb25zdCBhcmNMZW5ndGggPSAoMiAqIE1hdGguUEkpIC8gbnVtU2xpY2VzO1xuICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZDMuc2VsZWN0KFwiI3N1bmJ1cnN0XCIpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSArY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICtjb250YWluZXIud2lkdGg7XG4gICBcbiAgIFx0Y29uc3QgaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcbiAgIFxuICBcdGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyh3aWR0aCwgaGVpZ2h0LCBudW1BcmNzKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgIFx0Y29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuICAgXG4gICAgbGV0IHN2ZyA9IGF0dHJzLnN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5zdmdXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBhdHRycy5zdmdIZWlnaHQpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3dpZHRoLzJ9LCR7aGVpZ2h0LzJ9KWApO1xuXG4gICAgbGV0IGNlbnRlckdyb3VwID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgIC5hdHRyKCdjeCcsIDApXG4gICAgICAuYXR0cignY3knLCAwKVxuICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCA1KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMSA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICctMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dCgnQ2F0ZWdvcnknKVxuICAgIFx0LmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcwLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCdDb3VudCcpXG4gICAgXHQuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUzID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJzEuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICBcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoJ1BlcmNlbnQnKVxuICAgIFx0LmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAvL0hlbHBlciBtZXRob2RzXG4gICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBjb25zdCBnZXRDaXJjbGVZID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuXG4gICAgY29uc3QgZ2V0VGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHdvcmRzLmZpbHRlcihcbiAgICAgICAgKHdvcmQpID0+IHdvcmQgIT09ICdUb3RhbCdcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8vbGluZSBidWlsZGVyXG4gICAgY29uc3QgbGluZUJ1aWxkZXIgPSAoc2xpY2VDb3VudCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPSAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcztcbiAgICAgIGlmIChudW1TbGljZXMgJSAyID09IDEpIHJhZGlhbnMgKz0gTWF0aC5QSTtcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgnbGluZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCA1KVxuICAgICAgICAuYXR0cigneDEnLCBnZXRDaXJjbGVYKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgLmF0dHIoJ3kxJywgZ2V0Q2lyY2xlWShyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICd4MicsXG4gICAgICAgICAgZ2V0Q2lyY2xlWChcbiAgICAgICAgICAgIHJhZGlhbnMsXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArXG4gICAgICAgICAgICAgIG51bUFyY3MgKiBhcmNXaWR0aCArXG4gICAgICAgICAgICAgIGV4dGVuZGVkTGluZUxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneTInLFxuICAgICAgICAgIGdldENpcmNsZVkoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vdGV4dCBidWlsZGVyXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoc2xpY2UsIHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID1cbiAgICAgICAgKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXMgK1xuICAgICAgICBoYWxmU2xpY2VSYWRpYW5zO1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0KHNsaWNlKTtcbiAgICAgIGlmICh0ZXh0ID09PSAnJyl7XG4gICAgICBcdHRleHQgPSAnVG90YWwnOyBcbiAgICAgIH1cbiAgICAgIGxldCByYWRpdXMgPVxuICAgICAgICBpbm5lclJhZGl1cyArIG51bUFyY3MgKiBhcmNXaWR0aCArIHRleHREaXN0YW5jZTtcbiAgICAgIGxldCB4ID0gZ2V0Q2lyY2xlWChyYWRpYW5zLCByYWRpdXMpO1xuICAgICAgbGV0IHkgPSAtZ2V0Q2lyY2xlWShyYWRpYW5zLCByYWRpdXMpO1xuXG4gICAgICBpZiAoeCA8IC0xKSB4IC09IHRleHQubGVuZ3RoICogOTsgLy9sZWZ0IHNpZGUgYWRqdXN0XG4gICAgICBlbHNlIGlmICh4IDwgMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDU7IC8vbWlkZGxlIHRleHQgYWRqdXN0XG5cbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgYXR0cnMub3V0ZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuXG5cbiAgIFx0Ly9hcmMgYnVpbGRlclxuICAgIGNvbnN0IGFyY0J1aWxkZXIgPSAoYXJjLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgc2xpY2UsIGF0dHIsIHZhbHVlLCBjb3VudCwgcGVyY2VudCkgPT4ge1x0XG5cbiAgICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5kYXR1bSh7XG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pXG4gICAgICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuXG4gICAgXHRcdFx0XHRcdGQzLnNlbGVjdChcIltpZD1cXCdcIiArICB2YWx1ZSArIFwicmVjdFxcJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICAgICAgICAgXG5cdFx0XHRcdFx0XHRcdGlmIChjb3VudCE9MCl7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdBZ2UnKXtcbiAgICAgICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KGF0dHIgKyBcIjogXCIgKyB2YWx1ZSkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCh2YWx1ZSkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50IDwgNSl7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KCc8NScpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KGNvdW50KS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGV4dENpcmNsZTMudGV4dChcbiAgICAgICAgICAgICAgICAgIE51bWJlcigocGVyY2VudCAqIDEwMCkudG9GaXhlZCgxKSkgKyAnJSdcbiAgICAgICAgICAgICAgICApLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KCcnKTtcbiAgICAgICAgICAgICAgICBcdHRleHRDaXJjbGUyLnRleHQoJ05vIFN0dWRlbnRzJykuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgXHR0ZXh0Q2lyY2xlMy50ZXh0KCcnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuXG4gICAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQoJ0NhdGVnb3J5JykuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KCdDb3VudCcpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTMudGV4dCgnUGVyY2VudCcpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgIFx0XHRcdGQzLnNlbGVjdChcIltpZD1cXCdcIiArICB2YWx1ZSArIFwicmVjdFxcJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICBcdFx0XHRpZiAoY291bnQhPTApe1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgICBbc2xpY2VdOiBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXNbc2xpY2VdKVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYXR0cnMuYXR0cmlidXRlSW5kZXguaW5kZXhPZihhdHRyKVxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyMSBpbiBuZXdWYWx1ZXNbc2xpY2VdKXtcbiAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlMSBpbiBuZXdWYWx1ZXNbc2xpY2VdW2F0dHIxXSl7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHIxID09PSBhdHRyICYmIHZhbHVlMSE9dmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tzbGljZV1bYXR0cjFdW3ZhbHVlMV07XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tzbGljZV1bYXR0cjFdW3ZhbHVlMV1baW5kZXhdID0gdmFsdWU7IFxuICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgXG4gICAgLy9idWlsZCBhcmNzXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgYXJjID0gZDNcbiAgICAgICAgICAuYXJjKClcbiAgICAgICAgICAuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIGFyY0NvdW50KVxuICAgICAgICAgIC5vdXRlclJhZGl1cyhcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiAoYXJjQ291bnQgKyAxKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgbGV0IHNsaWNlU3RhcnRBbmdsZSA9IHNsaWNlQ291bnQgKiBhcmNMZW5ndGg7XG5cblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtKz1OdW1iZXIoYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1bSA9PSAwKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzbGljZSArIFwiIDogXCIgKyBhdHRyKTtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSArIGFyY0xlbmd0aCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhcmNCdWlsZGVyKGFyYywgc2xpY2VTdGFydEFuZ2xlLCBlbmRBbmdsZSwgc2xpY2UsIGF0dHIsICcwJywgMCwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV0pO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gc2xpY2VTdGFydEFuZ2xlO1xuICAgICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBhcmNMZW5ndGggKiBwZXJjZW50LFxuICAgICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuXG4gICAgICAgICAgICBhcmNCdWlsZGVyKGFyYywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIHNsaWNlLCBhdHRyLCB2YWx1ZSwgY291bnQsIHBlcmNlbnQpO1xuICAgICAgICBcdH1cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAobnVtU2xpY2VzID09IDEpIHRleHRCdWlsZGVyKHNsaWNlLCAwLjUpO1xuICAgICAgZWxzZSB0ZXh0QnVpbGRlcihzbGljZSwgc2xpY2VDb3VudCk7XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuXG4gICAgLy9idWlsZCBsaW5lcyBhZnRlciBzbyB0aGV5IGFyZSBvbiB0b3BcbiAgICBmb3IgKFxuICAgICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgICAgc2xpY2VDb3VudCA8IG51bVNsaWNlcyAmJiBudW1TbGljZXMgPiAxO1xuICAgICAgc2xpY2VDb3VudCsrXG4gICAgKSB7XG4gICAgICBsaW5lQnVpbGRlcihzbGljZUNvdW50KTtcbiAgICB9XG4gIH1cbiAgXG5cdGRpc3BsYXlWYWx1ZXModmFsdWVzLCBzZWxlY3RlZFZhbHVlKXtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcbiAgICBcbiAgICBhdHRycy5jZW50ZXJUZXh0LnRleHQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgXG4gIFx0bGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSs9TnVtYmVyKGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pe1xuICAgICAgICBcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IE51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV1dKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgaWYgKGNvdW50ICE9IDApe1xuICAgICAgICAgIGlmIChjb3VudCA8IDUpe1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KCc8NScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoY291bnQpO1xuICAgICAgICAgIH1cbiAgICBcdFx0XHRhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnRbc2xpY2VDb3VudF0udGV4dChOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJ05vJyk7XG4gICAgXHRcdFx0YXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoJ1N0dWRlbnRzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG4gICAgLy9kMy5zZWxlY3QoXCJ0ZXh0W2lkPSdlbGVtZW50LmlkLndpdGguZG90cyddXCIpO1xuICAgIGNvbnN0IGlkID0gc2VsZWN0ZWRWYWx1ZSArICdyZWN0JztcbiAgICBkMy5zZWxlY3QoXCJbaWQ9XFwnXCIgKyBpZCArIFwiXFwnXVwiKS5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMyk7XG4gIH1cbiAgICBcbiAgcmVtb3ZlVmFsdWVzKHZhbHVlKXtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGF0dHJzLmNlbnRlclRleHQudGV4dCgnJyk7XG4gIFx0Zm9yIChjb25zdCB0ZXh0Q2lyY2xlIG9mIGF0dHJzLnRleHRDaXJjbGVzQ291bnQpe1xuICAgIFx0dGV4dENpcmNsZS50ZXh0KCcnKTsgXG4gICAgfVxuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQpe1xuICAgIFx0dGV4dENpcmNsZS50ZXh0KCcnKTsgXG4gICAgfVxuICAgIGNvbnN0IGlkID0gdmFsdWUgKyAncmVjdCc7XG4gICAgIGQzLnNlbGVjdChcIltpZD1cXCdcIiArIGlkICsgXCJcXCddXCIpLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgfVxuICAgIFxuIFxuICByZW5kZXJDb21wYXJlKHZhbHVlcyl7XG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gIFx0Y29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBzYiA9IHRoaXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkMy5zZWxlY3QoXCIjc3VuYnVyc3RcIikubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcbiAgICBcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gYXR0cnMubGVnZW5kV2lkdGg7IC8vbWludXMgYmVjYXVzZSBvZiBsZWdlbmRcbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQgLSBhdHRycy5jZW50ZXJUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBzYi5jb21wdXRlQ29tcGFyZURpbWVuc2lvbnMod2lkdGgsIGhlaWdodCwgbnVtU2xpY2VzKTsgLy9yb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZVxuXHRcdGNvbnN0IGFyY0xlbmd0aCA9IDIgKiBNYXRoLlBJO1xuICAgIFxuICAgIGNvbnN0IHJvd3MgPSBkaW1lbnNpb25zLnJvd3M7XG4gICAgY29uc3QgY29scyA9IGRpbWVuc2lvbnMuY29scztcbiAgICBjb25zdCBzaXplID0gZGltZW5zaW9ucy5zaXplO1xuICBcdGNvbnN0IHdoaXRlc3BhY2VXaWR0aCA9IHdpZHRoIC0gY29scyAqIHNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZUhlaWdodCA9IGhlaWdodCAtIHJvd3MgKiBzaXplO1xuICAgIFxuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuXG5cblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoc2l6ZSwgc2l6ZSwgbnVtQXJjcyk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICBcdGNvbnN0IGlubmVyVGV4dFNpemUgPSBwYXJhbXMuaW5uZXJUZXh0U2l6ZTtcblxuICAgIC8qIEhlbHBlciBtZXRob2RzICovXG5cbiAgICAvLyBDb252ZXJ0aW5nIHNsaWNlIG5hbWUgdG8gdGV4dFxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZmluZExvbmdlc3RTbGljZSA9IChhcnJheSkgPT4ge1xuICAgICAgbGV0IGxvbmdlc3RXb3JkID0gXCJcIjtcbiAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24od29yZCkge1xuICAgICAgICBpZih3b3JkLmxlbmd0aCA+IGxvbmdlc3RXb3JkLmxlbmd0aCkge1xuICAgICAgICAgIGxvbmdlc3RXb3JkID0gd29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbG9uZ2VzdFdvcmQ7XG4gICAgfVxuICAgIGNvbnN0IGxvbmdlc3RTbGljZVRleHRMZW5ndGggPSBnZXRUZXh0KGZpbmRMb25nZXN0U2xpY2UoT2JqZWN0LmtleXModmFsdWVzKSkpLmxlbmd0aDtcbiAgICBcbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHNsaWNlLCBzbGljZUNvdW50LCBzdW5idXJzdEdyb3VwKSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID0gaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeCA9IDA7XG4gICAgICBsZXQgeSA9IC1yYWRpdXM7XG5cbiAgICAgIGxldCBzaXplTXVsdGlwbGllciA9IDEuODtcbiAgICBcdGxldCBvdXRlclRleHRTaXplID0gc2l6ZU11bHRpcGxpZXIqKDIqcmFkaXVzKS9sb25nZXN0U2xpY2VUZXh0TGVuZ3RoO1xuICAgIFxuICAgIFx0bGV0IHhNdWx0aXBsaWVyID0gMC4yMTtcbiAgICAgIHggLT0geE11bHRpcGxpZXIqdGV4dC5sZW5ndGgqb3V0ZXJUZXh0U2l6ZTsgLy9taWRkbGUgdGV4dCBhZGp1c3RcbiAgICAgIFxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICBcdC5zdHlsZShcImZvbnQtc2l6ZVwiLCBvdXRlclRleHRTaXplICsgXCJweFwiKVxuICAgICAgICAudGV4dCh0ZXh0KTtcbiAgICB9O1xuICAgIFxuICAgIFxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKHN1bmJ1cnN0R3JvdXAsIGFyYywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICAgICAgICBzYi5kaXNwbGF5VmFsdWVzKHZhbHVlcywgdmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICBcdGlmICh2YWx1ZSAhPT0gJzAnKXtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuXG4gICAgICAgICAgICAgICAgc2IucmVtb3ZlVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgLy8gQ2xlYXIgdGV4dENpcmNsZSBsaXN0c1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblxuICAgIGF0dHJzLmNlbnRlclRleHQgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aC8yKVxuICAgICAgLmF0dHIoJ3knLCAxNSthdHRycy5jZW50ZXJUZXh0SGVpZ2h0LzIpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgYXR0cnMuY2VudGVyVGV4dFNpemUpXG4gICAgICAudGV4dCgnJyk7XG4gICAgXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoc2xpY2VDb3VudC9jb2xzKTtcbiAgICAgIGxldCBjb2wgPSBzbGljZUNvdW50JWNvbHM7XG4gICAgICBcbiAgICAgIGxldCB0cmFuc2xhdGVYID0gc2l6ZS8yICsgY29sKnNpemUrKGNvbCsxKSp3aGl0ZXNwYWNlV2lkdGgvKGNvbHMrMSk7XG4gICAgICBsZXQgdHJhbnNsYXRlWSA9IGF0dHJzLmNlbnRlclRleHRIZWlnaHQgKyBzaXplLzIgKyByb3cqc2l6ZSsocm93KzEpKndoaXRlc3BhY2VIZWlnaHQvKHJvd3MrMSk7XG5cbiAgICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNpemUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzaXplKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pYCk7XG4gICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcbiAgICAgIFxuICAgICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMGVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuXG4gICAgXHRsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCdkeScsICcxZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG4gICAgICBcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQucHVzaCh0ZXh0Q2lyY2xlMSk7XG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQucHVzaCh0ZXh0Q2lyY2xlMik7XG4gICAgICBcbiAgICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBhdHRybG9vcDpcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICBcdFx0bGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgICBzdW0rPU51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzdW0gPT0gMCl7XG4gICAgICAgICAgY29uc29sZS5sb2coc2xpY2UpO1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlICsgYXJjTGVuZ3RoLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgIGFyY0J1aWxkZXIoc3VuYnVyc3RHcm91cCwgYXJjLCBzbGljZVN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCAnMCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV0pO1xuICAgICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG4gICAgICAgICAgICAgIGFyY0J1aWxkZXIoc3VuYnVyc3RHcm91cCwgYXJjLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG5cdFx0XHR0ZXh0QnVpbGRlcihzbGljZSwgLTAuNSwgc3VuYnVyc3RHcm91cClcbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlckxlZ2VuZCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBsZXQgbGVnZW5kID0gZDMuc2VsZWN0KCcjc3VuYnVyc3QtbGVnZW5kJykuYXR0cignd2lkdGgnLCBhdHRycy5sZWdlbmRXaWR0aCk7XG4gICAgbGVnZW5kLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIGxldCB5ID0gMjQ7XG4gICAgbGV0IHggPSAyMDtcblxuICAgIGxldCBmaXJzdFNsaWNlID0gT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdO1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBmaXJzdFNsaWNlKSB7XG4gICAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKGZpcnN0U2xpY2VbYXR0cl0pO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgXHQuYXR0cihcImlkXCIsIHZhbHVlICsgXCJyZWN0XCIpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAgIFx0LmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgXHQuYXR0cihcImlkXCIsIHZhbHVlICsgXCJ0ZXh0XCIpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4ICsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgICAudGV4dCh2YWx1ZSlcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgICAgICB5ICs9IDMwO1xuICAgICAgfVxuICAgICAgeSArPSAxMDtcbiAgICB9XG4gIH1cblxuIFxuIFxuXG59XG4iLCJpbXBvcnQgeyBDaGFydCB9IGZyb20gJy4vY2hhcnRzLWNsYXNzJztcbmltcG9ydCB7IFN1bmJ1cnN0IH0gZnJvbSAnLi9zdW5idXJzdC1jbGFzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcblx0Ly9zdW5idXJzdCBcbiAgbGV0IHNiOyBcblxuXHQvL1NldCBub2RlIGFuZCBNYWluIHZpeiBTUEEgdXBzXG4gIGRpc3BsYXlOb2RlcygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Vml6O1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheU5vZGVzO1xuIFx0XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Tm9kZXMoKXtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Vml6KCl7XG4gICAgXHRsZXQgYWNhZGVtaWNWYWx1ZXNUZXN0ID0ge1xuICAgICAgICAgICBcdCAnQWNhZGVtaWMgWWVhcic6IFsnVG90YWwnXSxcbiAgICAgICAgICAgICBEZWdyZWU6IFsnQmFjaGVsb3JzJywgJ01hc3RlcnMnLCAnUGguRC4nXSxcbiAgICAgICAgICAgICBGYWN1bHR5OiBbJ0J1c2luZXNzJ10sXG4gICAgICAgICAgICAgJ1N0dWR5IFN0YXR1cyc6IFsnUGFydC10aW1lJywgJ0NvLW9wJ11cbiAgICAgICAgICB9O1xuICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXNUZXN0ID0geyAgICAgXG4gICAgICAgICAgICAgIEFnZTogWyc8PTE3JywgJzE4LTIwJywgJzI2LTMwJywgJzU1KyddLFxuICAgICAgICAgICAgICBTZXg6ICBbJ01hbGUnLCAnRmVtYWxlJ10sXG4gICAgICAgICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbJ0ludGVybmF0aW9uYWwnLCAnRG9tZXN0aWMnXVxuICAgICAgIH1cbiAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgIFx0aWYgKHNiKXtcbiAgICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXMgPSBodC5kaXZlcnNpdHlWYWx1ZXMoKTtcbiAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgY29uc29sZS5sb2coZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICBcdCBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIGlmICghdmFsaWQpe1xuICAgICAgICBcdFx0YWxlcnQoJ1BsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIGRpdmVyc2l0eSBhdHRyaWJ1dGUnKTsgIFxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgXHQgY29uc29sZS5sb2coJ1ZhbGlkJyk7XG4gICAgICAgICAgICAgbGV0IGFjYWRlbWljVmFsdWVzID0gaHQuYWNhZGVtaWNWYWx1ZXMoKTtcbiAgICAgICAgICAgXHQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6LWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgXHQgXHRcdCBzYi5pbml0aWFsUmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugd2FpdCBmb3IgdGhlIGRhdGEgdG8gZmluaXNoIGxvYWRpbmcnKTtcbiAgICAgIH1cbiAgfVxuICBcbiAgbGV0IGh0ID0gbmV3IENoYXJ0KClcbiAgICAgLmNvbnRhaW5lcignI2NoYXJ0JylcbiAgICAgLnN2Z1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAuc3ZnSGVpZ2h0KHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAuaW5pdGlhbFpvb20oMC4zKVxuICAgICAucmVuZGVyKClcblxuICBuZXcgU3VuYnVyc3QoKVxuICAgICAgICAgLmNvbnRhaW5lcignI3N1bmJ1cnN0JylcbiAgICAgICAgIC5zdmdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gIFx0XHRcdCAuZGlzcGxheU5vZGVzKGRpc3BsYXlOb2RlcylcbiAgICBcdFx0IC5zZXR1cCgnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9rYWVsNTU4LzdkMmNiNTI1ODkyMTExOWRmNTg4NGNjOTA5MDJlODRkL3Jhdy8wMDgyN2I5ZDUzMjg4MzM0MzE5MWY2MTQ0ZDQxZDBhMGJiYWQ1ZGY4L2ZhbGwuY3N2Jylcblx0XHRcdFx0IC50aGVuKHZhbHVlID0+IHNiID0gdmFsdWUpO1xufSk7XG5cblxuXG5cblxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7RUFBQSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUM7RUFDekIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQzdCO0VBQ0EsTUFBTSxrQkFBa0IsR0FBRyxlQUFlLENBQUM7RUFDM0MsTUFBTSx1QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQztFQUNsRCxNQUFNLDBCQUEwQixHQUFHLHVCQUF1QixDQUFDO0FBQzNEO0VBQ0EsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDO0VBQzNCLE1BQU0sc0JBQXNCLEdBQUcsbUJBQW1CLENBQUM7QUFDbkQ7QUFDQTtBQUNBO0VBQ0EsTUFBTSxZQUFZLEdBQUc7RUFDckIsRUFBRSxXQUFXLEVBQUU7RUFDZixJQUFJLElBQUksRUFBRSxXQUFXO0VBQ3JCLElBQUksV0FBVyxFQUFFLDZDQUE2QztFQUM5RCxHQUFHO0VBQ0gsRUFBRSxZQUFZLEVBQUU7RUFDaEIsSUFBSSxJQUFJLEVBQUUsV0FBVztFQUNy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QztFQUN0RCxNQUFNLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkM7RUFDQSxNQUFNLElBQUksSUFBSSxHQUFHLENBQUM7QUFDbEIsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ25DLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUk7QUFDL0IsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDbEQsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMxQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQy9CLE9BQU87QUFDUCxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0RCxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQy9CLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDOUIs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