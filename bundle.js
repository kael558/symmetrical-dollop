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
    Convocated: {
      type: REPORT_NODE,
      description: 'The number of students that have convocated.'
    },
    Enrolled: {
      type: REPORT_NODE,
      description: 'The number of students that are enrolled.'
    },
    Faculty: {
      parents: ['Convocated','Enrolled'],
      collectedValues: ['STEM', 'Non-STEM', 'Engineering & Design', 'Science', 'Public Affairs', 'Business', 'Arts & Social Sciences'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'Department and faculty are mapped from student degree and major or majors.'
    },
    'Academic Year': {
      parents: ['Convocated','Enrolled'],
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
      description: 'Academic Year is made up of three terms (Summer, Fall, Winter).'
    },
    Degree: {
      parents: ['Convocated','Enrolled'],
      collectedValues: ['Bachelors',
        'Masters',
        'Ph.D.'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'Level of study of a student.'
    },
   
    'Study Status': {
      parents: ['Enrolled'],
      collectedValues: ['Part-time',
        'Full-time',
        'Co-op'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'A full-time student is enrolled in 3 or more credits across the Fall and Winter terms whereas a part-time student is enrolled in less.'
    },
    'Citizenship Status': {
      parents: ['Enrolled'],
      collectedValues: ['Domestic',
        'International'],
    	uncollectedValues: [],
      type: EDI_ATTRIBUTE_NODE,
      description: 'Students are categorized based on whether they are charged domestic or international fees.'
    },
    Age: {
      parents: ['Enrolled'],
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
      description: 'The age ranges of students.'
    },
    Sex: {
      parents: ['Convocated','Enrolled'],
      collectedValues: ['Female', 'Male'],
    	uncollectedValues: ['Non-binary'],
      type: EDI_ATTRIBUTE_NODE,
      description: 'This is mislabeled by the university. The correct label should be \'Gender\' and all genders should be collected.'
  	},
    Race: {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the race of a student.'
  	},
    'Religion/Spirituality': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the religion/spirituality of a student.'
    },
    'Regional Identity': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the regional identity of a student.'
    },
    'Dis/ability': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the dis/ability of a student.'
    },
    Indigeneity: {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: ['First Nations', 'Metis', 'Inuit'],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the indigeneity of a student.'
    },
    'First Language': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the first language of a student.'
    },
    'Other Language': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the other language of a student.'
    },
    'Ethnicity': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the ethnicity of a student.'
    },
    'Nation': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect the nation of origin of a student.'
    },
  };

  const colors = {
    Transparent: {"red":255,"green":255,"blue":255,"alpha":0},
    White: {"red":255,"green":255,"blue":255,"alpha":1},
    Blue: {"red":0,"green":0,"blue":255,"alpha":1},
    Black: {"red":0,"green":0,"blue":0,"alpha":1},
    Grey: {"red":141,"green":160,"blue":203,"alpha":1},
  	Green: {"red":102,"green":194,"blue":165,"alpha":1},
    Orange: {"red":252,"green":141,"blue":98,"alpha": 1},
    Slate_Grey : {"red":61,"green":72,"blue":73,"alpha":1},
    Button: {"red":100,"green":100,"blue":100,"alpha":1},
    Disabled: {"red":100,"green":100,"blue":100,"alpha":0.2},
    Disabled_Text: {"red":255,"green":255,"blue":255,"alpha":0.2},
  };

  const sizes = {
  	Large: {width: 270, height: 70},
    Medium: {width: 280, height: 70},
  	Small: {width: 330, height: 70}
  };

  const borderWidth = 5;
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
      backgroundColor: colors.Black,
      textColor: colors.White,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: true
    },
    [UNCOLLECTED_ATTRIBUTE_NODE] : {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Black,
      backgroundColor: colors.Grey,
      textColor: colors.White,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: false
    },
    [ACADEMIC_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Black,
      backgroundColor: colors.Orange,
      textColor: colors.White,
      connectorLineColor: colors.Black,
      expandable: true,
      clickable: true
    },
    [EDI_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      backgroundColor: colors.Green,
      borderColor: colors.Black,
      textColor: colors.White,
      connectorLineColor: colors.Black,
      expandable: true,
      clickable: true
    },
    [VALUE_NODE]: {
    	width: sizes.Small.width,
      height: sizes.Small.height,
      borderColor: colors.Black,
      textColor: colors.White,
      backgroundColor: colors.White,
      expandable: false,
      clickable: true
    },
    [UNCOLLECTED_VALUE_NODE]: {
    	width: sizes.Small.width,
      height: sizes.Small.height,
      borderColor: colors.Black,
      backgroundColor: colors.Grey,
      textColor: colors.White,
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
      node.backgroundColor = nodeDimensions[parentNodeType].backgroundColor; 
    	//node.borderColor = nodeDimensions[parentNodeType].borderColor; 
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
        backgroundColor: this.rgbaObjToColor(colors.Slate_Grey),
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
        numExpanded: 0,
        unclickedWidth: 5,
        clickedWidth: 15,
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
      

  		this.renderLegend();
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

    renderLegend(){
      //hierarchial tree legend
      const legend = d3.select('#node-legend');
      const width = 12, height = 12;
      const rectBuilder = (x, y, color) => {
      	  legend 
            .append('rect')
            .attr('x', x)
            .attr('y', y)
            .attr('width', width)
            .attr('height', height)
            .style('fill', this.rgbaObjToColor(color))
        		.style('stroke', 'black');
      };
      
      const textBuilder = (x, y, text, size) => {
            legend
              .append('text')
              .attr('x', x)
              .attr('y', y)
              .text(text)
              .style('font-size', size)
        			.style('fill', 'white')
              .attr('alignment-baseline', 'middle');
      };
      
      textBuilder(60, 10, 'LEGEND', '20px');
      rectBuilder(20, 34, colors.Grey);
      rectBuilder(20, 64, colors.Green);
      rectBuilder(20, 94, colors.Orange);
      textBuilder(40, 40, 'Uncollected Attributes', '15px');
      textBuilder(40, 70, 'Diversity Attributes', '15px');
   		textBuilder(40, 100, 'Academic Attributes', '15px');
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
      calc.chartTopMargin = attrs.marginTop + 50;
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
      calc.centerX = calc.chartWidth / 2 - 80;

      //********************  LAYOUTS  ***********************
      const layouts = {
        treemap: null,
      };
      attrs.layouts = layouts;

      // Generate tree layout function
      layouts.treemap = d3
        .tree()
        .separation(function(a, b) { 
        
        	if (a.parent.id === b.parent.id){
            if (a.data.width === 280){ //attribute
            	return 0.9; 
            } 
          } else {
          	return 1.2; 
          }
        	return 1;
      	})
        .size([calc.chartWidth, calc.chartHeight])
        .nodeSize([
          calc.nodeMaxWidth+10,
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


      //Define title
      d3.select('#node-div').append('text')
      			.attr('class', 'title')
      			.text('Visualizing Carleton University Students Collected \& Missing Demographics Data');
      
      //Define div for tooltip
      attrs.tooltipDiv = d3.select('#node-div')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);
      
      // Display tree contenrs
      this.update(attrs.root);

      return this;
    }



    // This function basically redraws visible graph, based on nodes state
    update({ x0, y0, x, y }) {
      const attrs = this.getChartState();
      const calc = attrs.calc;
  	
      //  Assigns the x and y position for the nodes
      const treeData = attrs.layouts.treemap(attrs.root);

      const isNotAttributeNode = (id) => (id === 'Root' || id === 'Convocated' || id === 'Enrolled');
      
      let expanded = 0;
      for (const index in attrs.nodes){
        const node = attrs.nodes[index];
        if (isNotAttributeNode(node.id))
          continue;
        if (node.children)
          expanded++;

      }
      

      // Get tree nodes and links and attach some properties
      const nodes = treeData.descendants().map((d) => {
        // If at least one property is already set, then we don't want to reset other properties

        // Declare properties with deffault values
        let borderColor = 'steelblue';
        let backgroundColor = 'steelblue';
        let textColor = 'black';
        let width = d.data.width;
        let height = d.data.height;
  			let description =  d.data.description;

      	let depth = d.depth;

        if (expanded > 1 && attrs.numExpanded < expanded && depth > 2){
          console.log("increase");
          depth +=1;
        }
        
     		
        
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
          depth,
        });
      });
      
      // Save num expanded
      attrs.numExpanded = expanded;
      

      // Save nodes for click
      attrs.nodes = nodes;

      // Get all links
      const links = treeData.descendants().slice(1);

      // Set constant depth for each node

      nodes.forEach((d) => {
        			d.y = d.depth * attrs.depth; 
              //console.log(d.y + " " + d.depth);
      });

      // --------------------------  LINKS ----------------------
      // Get links selection
      const linkSelection = attrs.centerG
        .selectAll('path.link')
        .data(links, ({ id }) => id);
      
       
      const linkEnter = linkSelection
        .enter()
        .insert('path', 'g')
        .attr('class', 'link')
        .attr('d', (d) => {
          const o = {
            x: d.x,
            y: d.y,
          };
          return this.diagonal(o, [o, o]);
        });
      
  		const linkUpdate = linkEnter.merge(linkSelection);
      
       linkUpdate
        .attr('fill', 'none')
        .attr('stroke-width',({ data }) => data.connectorLineWidth || 2)
        .attr('stroke', ({ data }) => data.connectorLineColor ? this.rgbaObjToColor(data.connectorLineColor) : 'green')
        .attr('stroke-dasharray', ({ data }) =>  data.dataArray || '');

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
            x: d.parent.x || 0,
            y: d.parent.y || 0,
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
            if (attrs.diversityValues[data.parentNodeIds[0]]
            ) {
              const index = attrs.diversityValues[
                data.parentNodeIds[0]
              ].indexOf(data.nodeId);
              if (index > -1) {
                attrs.diversityValues[
                  data.parentNodeIds[0]
                ].splice(index, 1);
                data.borderWidth = attrs.unclickedWidth;
              } else {
                attrs.diversityValues[
                  data.parentNodeIds[0]
                ].push(data.nodeId);
                data.borderWidth = attrs.clickedWidth;
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
                data.borderWidth = attrs.unclickedWidth;
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
                    'WARNING: Adding more academic attributes may result in low visibility in the visualization.'
                  );
                }
              }
            } else {
              data.borderWidth =
                data.borderWidth == attrs.unclickedWidth ? attrs.clickedWidth : attrs.unclickedWidth;
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
          if (d.description && (attrs.tooltipDiv.style('opacity') != 0.9 || d.description !== attrs.tooltipDiv._groups[0][0].innerHTML)) {
            attrs.tooltipDiv
              .transition()
              .duration(100)
              .style('opacity', 0.9);
            attrs.tooltipDiv
              .html(d.description)
            	.style("left", (d3.event.pageX - d.data.width/2) + "px")		
              .style("top", (d3.event.pageY - 60) + "px");	              
          }
        })
        .on('mouseout', (d) => {
          if (d3.event.toElement.className.baseVal === 'svg-chart-container') {
            attrs.tooltipDiv.transition().duration(500).style('opacity', 0);
          }
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

      // Add text element inside group
      nodeUpdate.patternify({
        tag: 'text',
        selector: 'node-foreign-object-div',
        data: (d) => [d],
      });
      
       // Add select all/deselect all button inside group
      nodeUpdate.patternify({
        tag: 'i',
        selector: 'fa fa-check-square-o',
        data: (d) => [d],
      }).attr('click', d => this.onSelectAll(d));
      
      //Move select all icon to side
      nodeUpdate.select('.fa-check-square-o')
      						.style('aria-hidden', 'true')
      						.style('color', 'white')
                 .style('font-size', '5px');

      this.restyleForeignObjectElements();
      
      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .attr('opacity', 0)
        .duration(attrs.duration)
        .attr(
          'transform',
          ({ x, y }) => `translate(${x || 0},${y || 0})`
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
        .attr('transform', (d) => {console.log(d);})
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

      /*
      attrs.svg
        .selectAll('.node-foreign-object')
        .attr('width', ({ width }) => width)
        .attr('height', ({ height }) => height)
        .attr('x', ({ width }) => -width / 2)
        .attr('y', ({ height }) => -height / 2);
        
            <rect x="0" y="0" width="100" height="100" fill="red"></rect>
      <text x="0" y="50" font-family="Verdana" font-size="35" fill="blue">Hello</text>
        */

      
       attrs.svg
        .selectAll('.node-foreign-object-div')
      	.attr('dy', '10px')
        .style('text-anchor', 'middle')
      	.style('fill', ({ textColor }) =>textColor || 'black')
        .style('font-size', '30px')
        .html(({ data }) => data.nodeId);
      /*
      attrs.svgtext-align: center;
        .selectAll('.node-foreign-object-div')
        .style('width', ({ width }) => `${width}px`)
        .style('height', ({ height }) => `${height}px`)
        .style('color', ({ textColor }) =>
          textColor ? textColor : 'black'
        )
        .style('text-align', 'center')
        .style('margin-top', '50px')
        .style('font-size', '40px')
        .html(({ data }) => data.nodeId);*/
    }

     onSelectAll(d) {
       
     }
    
    // Toggle children on click.
    onButtonClick(d) {
      // If childrens are expanded
      if (d.children) {
        if (d.id === 'Convocated') {
          const demographicNode = d.parent.children[1];
          if (demographicNode.children) {
            return;
          }
        } 
        
        //Collapse them
        d._children = d.children;
        d.children = null;

        if (d.id === 'Enrolled'){  
          const convocationNode = d.parent.children[0];
          if (convocationNode.data.borderWidth === 2){
            this.onButtonClick(convocationNode);
          }
        }
        
        // Set descendants expanded property to false
        this.setExpansionFlagToChildren(d, false);
      } else {
        if (d.id === 'Enrolled') {
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
        backgroundColor: this.rgbaObjToColor(colors.Slate_Grey),
        placeholderInnerText1: 'Category',
        placeholderInnerText2: '# of Students',
        placeholderInnerText3: '% in Group',
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

    rgbaObjToColor({ red, green, blue, alpha }) {
      return `rgba(${red},${green},${blue},${alpha})`;
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
      let svg = d3.select(attrs.container)
  								.style('background-color', attrs.backgroundColor);
      
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
        
        // disable compare mode if only 1 slice
        if (Object.keys(values).length === 1){
          document.getElementById('compare-button').disabled = true;
          document.getElementById('compare-button').style.backgroundColor =this.rgbaObjToColor(colors.Disabled);
          document.getElementById('compare-button').style.color =this.rgbaObjToColor(colors.Disabled_Text);
        } else {
          document.getElementById('compare-button').disabled = false;
          document.getElementById('compare-button').style.backgroundColor = this.rgbaObjToColor(colors.Button);
  				document.getElementById('compare-button').style.color ='white';
        }
        
        this.renderSunburst(values);
      } else {
        document.getElementById('compare-button').style.backgroundColor = 'red';
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
        .text( attrs.placeholderInnerText1)
        .attr('opacity', '.5');

      let textCircle2 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '0.5em')
        .style('text-anchor', 'middle')
        .style('font-size', innerTextSize)
        .text( attrs.placeholderInnerText2)
        .attr('opacity', '.5');

      let textCircle3 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '1.5em')
        .style('text-anchor', 'middle')
        .style('font-size', innerTextSize)
        .text(attrs.placeholderInnerText3)
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
        	.style('fill', 'white')
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
              .text(attrs.placeholderInnerText1)
              .attr('opacity', '.5');
            textCircle2.text(attrs.placeholderInnerText2).attr('opacity', '.5');
            textCircle3.text(attrs.placeholderInnerText3).attr('opacity', '.5');
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
        	.style('fill', 'white')
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
      
      let x = 20;
      let y = 10;
      legend.append('text')
            .attr('x', x + 20)
            .attr('y', y + 6)
            .text('LEGEND')
            .style('font-size', '20px')
      			.style('fill', 'white')
            .attr('alignment-baseline', 'middle');
      
       y += 20;
      
      let firstSlice = Object.values(values)[0];
      for (const attr in firstSlice) {
        const array = Object.keys(firstSlice[attr]);
        legend
          .append('text')
          .attr('x', x)
          .attr('y', y + 6)
          .text(attr)
          .style('font-size', '15px')
          .style('fill', 'white')
          .attr('alignment-baseline', 'middle');
  			 y += 20;
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
            .style('font-size', '14px')
          	.style('fill', 'white')
            .attr('alignment-baseline', 'middle');
          y += 20;
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
   	document.getElementById('info-open-button').onclick = displayInfo;
    document.getElementById('info-div').onclick = hideInfo;
    document.getElementById('info-close-button').onclick = hideInfo;
    
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
    
    function displayInfo(){
      document.getElementById('info-div').style.display = 'block';
    }
    
    function hideInfo(){
       document.getElementById('info-div').style.display = 'none';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBST09UX05PREUgPSAnUk9PVCc7XG5jb25zdCBSRVBPUlRfTk9ERSA9ICdSRVBPUlQnO1xuXG5jb25zdCBFRElfQVRUUklCVVRFX05PREUgPSAnRURJX0FUVFJJQlVURSc7XG5jb25zdCBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSA9ICdPVEhFUl9BVFRSSUJVVEUnO1xuY29uc3QgVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUgPSAnVU5DT0xMRUNURURfQVRUUklCVVRFJztcblxuY29uc3QgVkFMVUVfTk9ERSA9ICdWQUxVRSc7XG5jb25zdCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFID0gJ1VOQ09MTEVDVEVEX1ZBTFVFJztcblxuXG5cbmNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgQ29udm9jYXRlZDoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGhhdmUgY29udm9jYXRlZC4nXG4gIH0sXG4gIEVucm9sbGVkOiB7XG4gICAgdHlwZTogUkVQT1JUX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgbnVtYmVyIG9mIHN0dWRlbnRzIHRoYXQgYXJlIGVucm9sbGVkLidcbiAgfSxcbiAgRmFjdWx0eToge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRlZCcsJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ1NURU0nLCAnTm9uLVNURU0nLCAnRW5naW5lZXJpbmcgJiBEZXNpZ24nLCAnU2NpZW5jZScsICdQdWJsaWMgQWZmYWlycycsICdCdXNpbmVzcycsICdBcnRzICYgU29jaWFsIFNjaWVuY2VzJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVwYXJ0bWVudCBhbmQgZmFjdWx0eSBhcmUgbWFwcGVkIGZyb20gc3R1ZGVudCBkZWdyZWUgYW5kIG1ham9yIG9yIG1ham9ycy4nXG4gIH0sXG4gICdBY2FkZW1pYyBZZWFyJzoge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRlZCcsJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJzIwMTMvMTQnLFxuICAgICAgJzIwMTQvMTUnLFxuICAgICAgJzIwMTUvMTYnLFxuICAgICAgJzIwMTYvMTcnLFxuICAgICAgJzIwMTcvMTgnLFxuICAgICAgJzIwMTgvMTknLFxuICAgICAgJzIwMTkvMjAnLFxuICAgICAgJzIwMjAvMjEnLF0sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnQWNhZGVtaWMgWWVhciBpcyBtYWRlIHVwIG9mIHRocmVlIHRlcm1zIChTdW1tZXIsIEZhbGwsIFdpbnRlcikuJ1xuICB9LFxuICBEZWdyZWU6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0ZWQnLCdFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydCYWNoZWxvcnMnLFxuICAgICAgJ01hc3RlcnMnLFxuICAgICAgJ1BoLkQuJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnTGV2ZWwgb2Ygc3R1ZHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiBcbiAgJ1N0dWR5IFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ1BhcnQtdGltZScsXG4gICAgICAnRnVsbC10aW1lJyxcbiAgICAgICdDby1vcCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZnVsbC10aW1lIHN0dWRlbnQgaXMgZW5yb2xsZWQgaW4gMyBvciBtb3JlIGNyZWRpdHMgYWNyb3NzIHRoZSBGYWxsIGFuZCBXaW50ZXIgdGVybXMgd2hlcmVhcyBhIHBhcnQtdGltZSBzdHVkZW50IGlzIGVucm9sbGVkIGluIGxlc3MuJ1xuICB9LFxuICAnQ2l0aXplbnNoaXAgU3RhdHVzJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnRG9tZXN0aWMnLFxuICAgICAgJ0ludGVybmF0aW9uYWwnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnU3R1ZGVudHMgYXJlIGNhdGVnb3JpemVkIGJhc2VkIG9uIHdoZXRoZXIgdGhleSBhcmUgY2hhcmdlZCBkb21lc3RpYyBvciBpbnRlcm5hdGlvbmFsIGZlZXMuJ1xuICB9LFxuICBBZ2U6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbXG4gICAgICAnPD0xNycsXG4gICAgICAnMTgtMjAnLFxuICAgICAgJzIxLTI1JyxcbiAgICAgICcyNi0zMCcsXG4gICAgICAnMzEtMzUnLFxuICAgICAgJzM2LTQ1JyxcbiAgICAgICc0Ni01NScsXG4gICAgICAnNTUrJyxcbiAgICBdLFxuICAgIHVuY29sbGVjdGVkVmFsdWVzOiBbJzU1LTU5JywnNjAtNjQnLCc2NS02OScsICc3MC03NCcsICc3NS03OScsICc4MCsnXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgYWdlIHJhbmdlcyBvZiBzdHVkZW50cy4nXG4gIH0sXG4gIFNleDoge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRlZCcsJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0ZlbWFsZScsICdNYWxlJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnTm9uLWJpbmFyeSddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbWlzbGFiZWxlZCBieSB0aGUgdW5pdmVyc2l0eS4gVGhlIGNvcnJlY3QgbGFiZWwgc2hvdWxkIGJlIFxcJ0dlbmRlclxcJyBhbmQgYWxsIGdlbmRlcnMgc2hvdWxkIGJlIGNvbGxlY3RlZC4nXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIHJhY2Ugb2YgYSBzdHVkZW50Lidcblx0fSxcbiAgJ1JlbGlnaW9uL1NwaXJpdHVhbGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIHJlbGlnaW9uL3NwaXJpdHVhbGl0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICAnUmVnaW9uYWwgSWRlbnRpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSByZWdpb25hbCBpZGVudGl0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICAnRGlzL2FiaWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSBkaXMvYWJpbGl0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICBJbmRpZ2VuZWl0eToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ0ZpcnN0IE5hdGlvbnMnLCAnTWV0aXMnLCAnSW51aXQnXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgaW5kaWdlbmVpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0ZpcnN0IExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgZmlyc3QgbGFuZ3VhZ2Ugb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ090aGVyIExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgb3RoZXIgbGFuZ3VhZ2Ugb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0V0aG5pY2l0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGV0aG5pY2l0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICAnTmF0aW9uJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgbmF0aW9uIG9mIG9yaWdpbiBvZiBhIHN0dWRlbnQuJ1xuICB9LFxufVxuXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xuICBUcmFuc3BhcmVudDoge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjowfSxcbiAgV2hpdGU6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsdWU6IHtcInJlZFwiOjAsXCJncmVlblwiOjAsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjoxfSxcbiAgQmxhY2s6IHtcInJlZFwiOjAsXCJncmVlblwiOjAsXCJibHVlXCI6MCxcImFscGhhXCI6MX0sXG4gIEdyZXk6IHtcInJlZFwiOjE0MSxcImdyZWVuXCI6MTYwLFwiYmx1ZVwiOjIwMyxcImFscGhhXCI6MX0sXG5cdEdyZWVuOiB7XCJyZWRcIjoxMDIsXCJncmVlblwiOjE5NCxcImJsdWVcIjoxNjUsXCJhbHBoYVwiOjF9LFxuICBPcmFuZ2U6IHtcInJlZFwiOjI1MixcImdyZWVuXCI6MTQxLFwiYmx1ZVwiOjk4LFwiYWxwaGFcIjogMX0sXG4gIFNsYXRlX0dyZXkgOiB7XCJyZWRcIjo2MSxcImdyZWVuXCI6NzIsXCJibHVlXCI6NzMsXCJhbHBoYVwiOjF9LFxuICBCdXR0b246IHtcInJlZFwiOjEwMCxcImdyZWVuXCI6MTAwLFwiYmx1ZVwiOjEwMCxcImFscGhhXCI6MX0sXG4gIERpc2FibGVkOiB7XCJyZWRcIjoxMDAsXCJncmVlblwiOjEwMCxcImJsdWVcIjoxMDAsXCJhbHBoYVwiOjAuMn0sXG4gIERpc2FibGVkX1RleHQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MC4yfSxcbn1cblxuY29uc3Qgc2l6ZXMgPSB7XG5cdExhcmdlOiB7d2lkdGg6IDI3MCwgaGVpZ2h0OiA3MH0sXG4gIE1lZGl1bToge3dpZHRoOiAyODAsIGhlaWdodDogNzB9LFxuXHRTbWFsbDoge3dpZHRoOiAzMzAsIGhlaWdodDogNzB9XG59XG5cbmNvbnN0IGJvcmRlcldpZHRoID0gNVxuY29uc3QgYm9yZGVyUmFkaXVzID0gNVxuY29uc3QgY29ubmVjdG9yTGluZVdpZHRoID0gNVxuXG5jb25zdCBub2RlRGltZW5zaW9ucyA9IHtcbiAgW1JPT1RfTk9ERV0gOiB7XG4gICAgd2lkdGg6IHNpemVzLkxhcmdlLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTGFyZ2UuaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgdGV4dENvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgY2xpY2thYmxlOiBmYWxzZVxuICB9LFxuXHRbUkVQT1JUX05PREVdIDoge1xuICBcdHdpZHRoOiBzaXplcy5MYXJnZS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLkxhcmdlLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIFtVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERV0gOiB7XG4gICAgd2lkdGg6IHNpemVzLk1lZGl1bS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLk1lZGl1bS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5HcmV5LFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgY2xpY2thYmxlOiBmYWxzZVxuICB9LFxuICBbQUNBREVNSUNfQVRUUklCVVRFX05PREVdOiB7XG4gICAgd2lkdGg6IHNpemVzLk1lZGl1bS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLk1lZGl1bS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5PcmFuZ2UsXG4gICAgdGV4dENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW0VESV9BVFRSSUJVVEVfTk9ERV06IHtcbiAgICB3aWR0aDogc2l6ZXMuTWVkaXVtLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTWVkaXVtLmhlaWdodCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5HcmVlbixcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIFtWQUxVRV9OT0RFXToge1xuICBcdHdpZHRoOiBzaXplcy5TbWFsbC53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLlNtYWxsLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5HcmV5LFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuXHRcdGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLkdyZXksXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgY2xpY2thYmxlOiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IG1ha2VOb2RlID0gKG5vZGVJZCwgcGFyZW50Tm9kZUlkcywgbm9kZVR5cGUsIHBhcmVudE5vZGVUeXBlKSA9PiB7XG5cdGxldCBub2RlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShub2RlRGltZW5zaW9uc1tub2RlVHlwZV0pKTtcbiAgbm9kZS5ub2RlSWQgPSBub2RlSWQ7XG4gIG5vZGUucGFyZW50Tm9kZUlkcyA9IHBhcmVudE5vZGVJZHM7XG5cdG5vZGUuZXhwYW5kZWQgPSBmYWxzZTtcbiAgbm9kZS5ib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoO1xuICBub2RlLmJvcmRlclJhZGl1cyA9IGJvcmRlclJhZGl1cztcbiAgbm9kZS5jb25uZWN0b3JMaW5lV2lkdGggPSBjb25uZWN0b3JMaW5lV2lkdGg7XG4gXHRpZiAoaW5pdGlhbE5vZGVzW25vZGVJZF0pXG4gICAgXHRub2RlLmRlc2NyaXB0aW9uID0gXCJcIiB8fCBpbml0aWFsTm9kZXNbbm9kZUlkXS5kZXNjcmlwdGlvbjtcbiAgXG4gIGlmIChub2RlVHlwZSA9PSBWQUxVRV9OT0RFKXtcbiAgICBub2RlLmJhY2tncm91bmRDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5iYWNrZ3JvdW5kQ29sb3I7IFxuICBcdC8vbm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgXG4gICAgbm9kZS5jb25uZWN0b3JMaW5lQ29sb3IgPSBub2RlRGltZW5zaW9uc1twYXJlbnROb2RlVHlwZV0uYm9yZGVyQ29sb3I7IFxuICAgIGlmIChub2RlSWQgPT09ICdTVEVNJyl7XG4gICAgXHRub2RlLmRlc2NyaXB0aW9uID0gJ0FnZ3JlZ2F0aW9uIG9mIGZhY3VsdHkgb2YgU2NpZW5jZSwgRW5naW5lZXJpbmcgJiBEZXNpZ24gYW5kIE1hdGhlbWF0aWNzJ1xuICAgIH0gZWxzZSBpZiAobm9kZUlkID09PSAnTm9uLVNURU0nKXtcbiAgICAgIG5vZGUuZGVzY3JpcHRpb24gPSAnQWdncmVnYXRpb24gb2YgYWxsIG5vbi1TVEVNIGZhY3VsdGllcydcbiAgICB9IFxuICB9IGVsc2UgaWYgKG5vZGVUeXBlID09PSBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFKXtcbiAgIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgIFxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBwb3B1bGF0ZU5vZGVzID0gKG5vZGVzLCBpbml0aWFsTm9kZXMpID0+IHtcblx0Zm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbE5vZGVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IGluaXRpYWxOb2Rlc1trZXldO1xuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gUkVQT1JUX05PREUpe1xuICAgIFx0XHRub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgWydSb290J10sIFJFUE9SVF9OT0RFKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShrZXksIG5vZGUucGFyZW50cywgbm9kZS50eXBlKSk7IC8vbGluayB0byBmaXJzdCBwYXJlbnRcbiAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIG5vZGUuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS51bmNvbGxlY3RlZFZhbHVlcylcbiAgICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGxpbmssIFtrZXldLCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFLCBub2RlLnR5cGUpKTtcbiAgICB9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IG5vZGVzID0gW21ha2VOb2RlKCdSb290JywgW251bGxdLCBST09UX05PREUpXTtcbnBvcHVsYXRlTm9kZXMobm9kZXMsIGluaXRpYWxOb2Rlcyk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbm9kZXMsIGNvbG9ycyB9IGZyb20gJy4vbm9kZXMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBFeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgc3ZnV2lkdGg6IDgwMCxcbiAgICAgIHN2Z0hlaWdodDogNjAwLFxuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBkZWZhdWx0VGV4dEZpbGw6ICcjMkMzRTUwJyxcbiAgICAgIG5vZGVUZXh0RmlsbDogJ3doaXRlJyxcbiAgICAgIGRlZmF1bHRGb250OiAnSGVsdmV0aWNhJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSksXG4gICAgICBkYXRhOiBub2RlcyxcbiAgICAgIG5vZGVzOiBudWxsLFxuICAgICAgY29ubmVjdG9yTGV2ZWxzOiAyLFxuICAgICAgZGVwdGg6IDE4MCxcbiAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgYWNhZGVtaWNWYWx1ZXM6IHtcbiAgICAgICAgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICBGYWN1bHR5OiBbJ1RvdGFsJ10sXG4gICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ10sXG4gICAgICB9LFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzOiB7XG4gICAgICAgIEFnZTogW10sXG4gICAgICAgIFNleDogW10sXG4gICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbXSxcbiAgICAgIH0sXG4gICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIHRvb2x0aXBEaXY6IG51bGwsXG4gICAgICBudW1FeHBhbmRlZDogMCxcbiAgICAgIHVuY2xpY2tlZFdpZHRoOiA1LFxuICAgICAgY2xpY2tlZFdpZHRoOiAxNSxcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDaGFydFN0YXRlID0gKCkgPT4gYXR0cnM7XG5cbiAgICAvLyBEeW5hbWljYWxseSBzZXQgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zIGZvciBDaGFydCBjbGFzc1xuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdGhpc1trZXldID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IGBhdHRyc1snJHtrZXl9J10gPSBfYDtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWwoYGF0dHJzWycke2tleX0nXTtgKTtcbiAgICAgICAgfVxuICAgICAgICBldmFsKHN0cmluZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBcblxuXHRcdHRoaXMucmVuZGVyTGVnZW5kKCk7XG4gICAgdGhpcy5pbml0aWFsaXplRW50ZXJFeGl0VXBkYXRlUGF0dGVybigpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUVudGVyRXhpdFVwZGF0ZVBhdHRlcm4oKSB7XG4gICAgZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5wYXR0ZXJuaWZ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXM7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBwYXJhbXMuc2VsZWN0b3I7XG4gICAgICB2YXIgZWxlbWVudFRhZyA9IHBhcmFtcy50YWc7XG4gICAgICB2YXIgZGF0YSA9IHBhcmFtcy5kYXRhIHx8IFtzZWxlY3Rvcl07XG5cbiAgICAgIC8vIFBhdHRlcm4gaW4gYWN0aW9uXG4gICAgICB2YXIgc2VsZWN0aW9uID0gY29udGFpbmVyXG4gICAgICAgIC5zZWxlY3RBbGwoJy4nICsgc2VsZWN0b3IpXG4gICAgICAgIC5kYXRhKGRhdGEsIChkLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKGQuaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9KTtcbiAgICAgIHNlbGVjdGlvbi5leGl0KCkucmVtb3ZlKCk7XG4gICAgICBzZWxlY3Rpb24gPSBzZWxlY3Rpb25cbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChlbGVtZW50VGFnKVxuICAgICAgICAubWVyZ2Uoc2VsZWN0aW9uKTtcbiAgICAgIHNlbGVjdGlvbi5hdHRyKCdjbGFzcycsIHNlbGVjdG9yKTtcbiAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlckxlZ2VuZCgpe1xuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBjb25zdCBsZWdlbmQgPSBkMy5zZWxlY3QoJyNub2RlLWxlZ2VuZCcpO1xuICAgIGNvbnN0IHdpZHRoID0gMTIsIGhlaWdodCA9IDEyO1xuICAgIGNvbnN0IHJlY3RCdWlsZGVyID0gKHgsIHksIGNvbG9yKSA9PiB7XG4gICAgXHQgIGxlZ2VuZCBcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcikpXG4gICAgICBcdFx0LnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoeCwgeSwgdGV4dCwgc2l6ZSkgPT4ge1xuICAgICAgICAgIGxlZ2VuZFxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgICAudGV4dCh0ZXh0KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBzaXplKVxuICAgICAgXHRcdFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgfVxuICAgIFxuICAgIHRleHRCdWlsZGVyKDYwLCAxMCwgJ0xFR0VORCcsICcyMHB4Jyk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDM0LCBjb2xvcnMuR3JleSk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDY0LCBjb2xvcnMuR3JlZW4pO1xuICAgIHJlY3RCdWlsZGVyKDIwLCA5NCwgY29sb3JzLk9yYW5nZSk7XG4gICAgdGV4dEJ1aWxkZXIoNDAsIDQwLCAnVW5jb2xsZWN0ZWQgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gICAgdGV4dEJ1aWxkZXIoNDAsIDcwLCAnRGl2ZXJzaXR5IEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuIFx0XHR0ZXh0QnVpbGRlcig0MCwgMTAwLCAnQWNhZGVtaWMgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gIH1cbiAgXG4gIFxuICAvLyBUaGlzIG1ldGhvZCByZXRyaWV2ZXMgcGFzc2VkIG5vZGUncyBjaGlsZHJlbiBJRCdzIChpbmNsdWRpbmcgbm9kZSlcbiAgZ2V0Tm9kZUNoaWxkcmVuSWRzKFxuICAgIHsgZGF0YSwgY2hpbGRyZW4sIF9jaGlsZHJlbiB9LFxuICAgIG5vZGVJZHNTdG9yZVxuICApIHtcbiAgICAvLyBTdG9yZSBjdXJyZW50IG5vZGUgSURcbiAgICBub2RlSWRzU3RvcmUucHVzaChkYXRhLm5vZGVJZCk7XG5cbiAgICAvLyBMb29wIG92ZXIgY2hpbGRyZW4gYW5kIHJlY3Vyc2l2ZWx5IHN0b3JlIGRlc2NlbmRhbnRzIGlkIChleHBhbmRlZCBub2RlcylcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgdGhpcy5nZXROb2RlQ2hpbGRyZW5JZHMoZCwgbm9kZUlkc1N0b3JlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExvb3Agb3ZlciBfY2hpbGRyZW4gYW5kIHJlY3Vyc2l2ZWx5IHN0b3JlIGRlc2NlbmRhbnRzIGlkIChjb2xsYXBzZWQgbm9kZXMpXG4gICAgaWYgKF9jaGlsZHJlbikge1xuICAgICAgX2NoaWxkcmVuLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgdGhpcy5nZXROb2RlQ2hpbGRyZW5JZHMoZCwgbm9kZUlkc1N0b3JlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiByZXN1bHRcbiAgICByZXR1cm4gbm9kZUlkc1N0b3JlO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgY2FuIGJlIGludm9rZWQgdmlhIGNoYXJ0LnNldFpvb21GYWN0b3IgQVBJLCBpdCB6b29tcyB0byBwYXJ0aWN1bGF0IHNjYWxlXG4gIHNldFpvb21GYWN0b3Ioem9vbUxldmVsKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBjYWxjID0gYXR0cnMuY2FsYztcblxuICAgIC8vIFN0b3JlIHBhc3NlZCB6b29tIGxldmVsXG4gICAgYXR0cnMuaW5pdGlhbFpvb20gPSB6b29tTGV2ZWw7XG5cbiAgICAvLyBSZXNjYWxlIGNvbnRhaW5lciBlbGVtZW50IGFjY29yZGluZ2x5XG4gICAgYXR0cnMuY2VudGVyRy5hdHRyKFxuICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICBgIHRyYW5zbGF0ZSgke2NhbGMuY2VudGVyWH0sICR7XG4gICAgICAgIGNhbGMubm9kZU1heEhlaWdodCAvIDJcbiAgICAgIH0pIHNjYWxlKCR7YXR0cnMuaW5pdGlhbFpvb219KWBcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vSW5uZXJGdW5jdGlvbnMgd2hpY2ggd2lsbCB1cGRhdGUgdmlzdWFsc1xuXG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCB0aGlzT2JqUmVmID0gdGhpcztcblxuICAgIC8vRHJhd2luZyBjb250YWluZXJzXG4gICAgY29uc3QgY29udGFpbmVyID0gZDMuc2VsZWN0KGF0dHJzLmNvbnRhaW5lcik7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lclxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChjb250YWluZXJSZWN0LndpZHRoID4gMClcbiAgICAgIGF0dHJzLnN2Z1dpZHRoID0gY29udGFpbmVyUmVjdC53aWR0aDtcblxuXG4gICAgLy9DYWxjdWxhdGVkIHByb3BlcnRpZXNcbiAgICBjb25zdCBjYWxjID0ge1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBjaGFydFRvcE1hcmdpbjogbnVsbCxcbiAgICAgIGNoYXJ0TGVmdE1hcmdpbjogbnVsbCxcbiAgICAgIGNoYXJ0V2lkdGg6IG51bGwsXG4gICAgICBjaGFydEhlaWdodDogbnVsbCxcbiAgICB9O1xuICAgIGNhbGMuaWQgPSBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWA7IC8vIGlkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICBjYWxjLmNoYXJ0TGVmdE1hcmdpbiA9IGF0dHJzLm1hcmdpbkxlZnQ7XG4gICAgY2FsYy5jaGFydFRvcE1hcmdpbiA9IGF0dHJzLm1hcmdpblRvcCArIDUwO1xuICAgIGNhbGMuY2hhcnRXaWR0aCA9XG4gICAgICBhdHRycy5zdmdXaWR0aCAtXG4gICAgICBhdHRycy5tYXJnaW5SaWdodCAtXG4gICAgICBjYWxjLmNoYXJ0TGVmdE1hcmdpbjtcbiAgICBjYWxjLmNoYXJ0SGVpZ2h0ID1cbiAgICAgIGF0dHJzLnN2Z0hlaWdodCAtXG4gICAgICBhdHRycy5tYXJnaW5Cb3R0b20gLVxuICAgICAgY2FsYy5jaGFydFRvcE1hcmdpbjtcbiAgICBhdHRycy5jYWxjID0gY2FsYztcblxuICAgIC8vIEdldCBtYXhpbXVtIG5vZGUgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbGMubm9kZU1heFdpZHRoID0gZDMubWF4KFxuICAgICAgYXR0cnMuZGF0YSxcbiAgICAgICh7IHdpZHRoIH0pID0+IHdpZHRoXG4gICAgKTtcbiAgICBjYWxjLm5vZGVNYXhIZWlnaHQgPSBkMy5tYXgoXG4gICAgICBhdHRycy5kYXRhLFxuICAgICAgKHsgaGVpZ2h0IH0pID0+IGhlaWdodFxuICAgICk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbWF4IG5vZGUgZGVwdGggKGl0J3MgbmVlZGVkIGZvciBsYXlvdXQgaGVpZ2h0cyBjYWxjdWxhdGlvbilcbiAgICBhdHRycy5kZXB0aCA9IGNhbGMubm9kZU1heEhlaWdodCArIDEwMDtcbiAgICBjYWxjLmNlbnRlclggPSBjYWxjLmNoYXJ0V2lkdGggLyAyIC0gODA7XG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKioqICBMQVlPVVRTICAqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIGNvbnN0IGxheW91dHMgPSB7XG4gICAgICB0cmVlbWFwOiBudWxsLFxuICAgIH07XG4gICAgYXR0cnMubGF5b3V0cyA9IGxheW91dHM7XG5cbiAgICAvLyBHZW5lcmF0ZSB0cmVlIGxheW91dCBmdW5jdGlvblxuICAgIGxheW91dHMudHJlZW1hcCA9IGQzXG4gICAgICAudHJlZSgpXG4gICAgICAuc2VwYXJhdGlvbihmdW5jdGlvbihhLCBiKSB7IFxuICAgICAgXG4gICAgICBcdGlmIChhLnBhcmVudC5pZCA9PT0gYi5wYXJlbnQuaWQpe1xuICAgICAgICAgIGlmIChhLmRhdGEud2lkdGggPT09IDI4MCl7IC8vYXR0cmlidXRlXG4gICAgICAgICAgXHRyZXR1cm4gMC45OyBcbiAgICAgICAgICB9IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBcdHJldHVybiAxLjI7IFxuICAgICAgICB9XG4gICAgICBcdHJldHVybiAxO1xuICAgIFx0fSlcbiAgICAgIC5zaXplKFtjYWxjLmNoYXJ0V2lkdGgsIGNhbGMuY2hhcnRIZWlnaHRdKVxuICAgICAgLm5vZGVTaXplKFtcbiAgICAgICAgY2FsYy5ub2RlTWF4V2lkdGgrMTAsXG4gICAgICAgIGNhbGMubm9kZU1heEhlaWdodCArIGF0dHJzLmRlcHRoLFxuICAgICAgXSk7XG5cblxuICAgIFxuICAgIC8vICoqKioqKioqKioqKioqKioqKiogQkVIQVZJT1JTIC4gKioqKioqKioqKioqKioqKioqKioqKlxuICAgIGNvbnN0IGJlaGF2aW9ycyA9IHtcbiAgICAgIHpvb206IG51bGwsXG4gICAgfTtcblxuICAgIC8vIEdldCB6b29taW5nIGZ1bmN0aW9uXG4gICAgYmVoYXZpb3JzLnpvb20gPSBkM1xuICAgICAgLnpvb20oKVxuICAgICAgLm9uKCd6b29tJywgKGQpID0+IHRoaXMuem9vbWVkKGQpKTtcblxuICAgIC8vKioqKioqKioqKioqKioqKioqIFJPT1Qgbm9kZSB3b3JrICoqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLy8gQ29udmVydCBmbGF0IGRhdGEgdG8gaGllcmFyY2hpY2FsXG4gICAgYXR0cnMucm9vdCA9IGQzXG4gICAgICAuc3RyYXRpZnkoKVxuICAgICAgLmlkKCh7IG5vZGVJZCB9KSA9PiBub2RlSWQpXG4gICAgICAucGFyZW50SWQoKHsgcGFyZW50Tm9kZUlkcyB9KSA9PiBwYXJlbnROb2RlSWRzWzBdKShcbiAgICAgIGF0dHJzLmRhdGFcbiAgICApO1xuXG4gICAgLy8gU2V0IGNoaWxkIG5vZGVzIGVudGVyIGFwcGVhcmFuY2UgcG9zaXRpb25zXG4gICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgYXR0cnMucm9vdC55MCA9IDA7XG5cbiAgICAvKiogR2V0IGFsbCBub2RlcyBhcyBhcnJheSAod2l0aCBleHRlbmRlZCBwYXJlbnQgJiBjaGlsZHJlbiBwcm9wZXJ0aWVzIHNldClcbiAgICAgICAgICBUaGlzIHdheSB3ZSBjYW4gYWNjZXNzIGFueSBub2RlJ3MgcGFyZW50IGRpcmVjdGx5IHVzaW5nIG5vZGUucGFyZW50IC0gcHJldHR5IGNvb2wsIGh1aD9cbiAgICAgICovXG4gICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzXG4gICAgICAudHJlZW1hcChhdHRycy5yb290KVxuICAgICAgLmRlc2NlbmRhbnRzKCk7XG5cbiAgICAvLyBDb2xsYXBzZSBhbGwgY2hpbGRyZW4gYXQgZmlyc3RcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBleHBhbmQgc29tZSBub2Rlcywgd2hpY2ggaGF2ZSBgZXhwYW5kZWRgIHByb3BlcnR5IHNldFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpXG4gICAgKTtcblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKiogIERSQVdJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvL0FkZCBzdmdcbiAgICBjb25zdCBzdmcgPSBjb250YWluZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnc3ZnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdzdmctY2hhcnQtY29udGFpbmVyJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5zdmdXaWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBhdHRycy5zdmdIZWlnaHQpXG4gICAgICAuYXR0cignZm9udC1mYW1pbHknLCBhdHRycy5kZWZhdWx0Rm9udClcbiAgICAgIC5jYWxsKGJlaGF2aW9ycy56b29tKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdtb3ZlJylcbiAgICAgIC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcik7XG4gICAgYXR0cnMuc3ZnID0gc3ZnO1xuXG4gICAgLy9BZGQgY29udGFpbmVyIGcgZWxlbWVudFxuICAgIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNoYXJ0TGVmdE1hcmdpbn0sJHtjYWxjLmNoYXJ0VG9wTWFyZ2lufSlgXG4gICAgICApO1xuXG4gICAgLy8gQWRkIG9uZSBtb3JlIGNvbnRhaW5lciBnIGVsZW1lbnQsIGZvciBiZXR0ZXIgcG9zaXRpb25pbmcgY29udHJvbHNcbiAgICBhdHRycy5jZW50ZXJHID0gY2hhcnRcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIHNlbGVjdG9yOiAnY2VudGVyLWdyb3VwJyxcbiAgICAgIH0pXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCR7XG4gICAgICAgICAgY2FsYy5ub2RlTWF4SGVpZ2h0IC8gMlxuICAgICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgICApO1xuXG4gICAgYXR0cnMuY2hhcnQgPSBjaGFydDtcblxuXG4gICAgLy9EZWZpbmUgdGl0bGVcbiAgICBkMy5zZWxlY3QoJyNub2RlLWRpdicpLmFwcGVuZCgndGV4dCcpXG4gICAgXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3RpdGxlJylcbiAgICBcdFx0XHQudGV4dCgnVmlzdWFsaXppbmcgQ2FybGV0b24gVW5pdmVyc2l0eSBTdHVkZW50cyBDb2xsZWN0ZWQgXFwmIE1pc3NpbmcgRGVtb2dyYXBoaWNzIERhdGEnKTtcbiAgICBcbiAgICAvL0RlZmluZSBkaXYgZm9yIHRvb2x0aXBcbiAgICBhdHRycy50b29sdGlwRGl2ID0gZDMuc2VsZWN0KCcjbm9kZS1kaXYnKVxuICAgICAgLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xuICAgIFxuICAgIC8vIERpc3BsYXkgdHJlZSBjb250ZW5yc1xuICAgIHRoaXMudXBkYXRlKGF0dHJzLnJvb3QpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuXG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBiYXNpY2FsbHkgcmVkcmF3cyB2aXNpYmxlIGdyYXBoLCBiYXNlZCBvbiBub2RlcyBzdGF0ZVxuICB1cGRhdGUoeyB4MCwgeTAsIHgsIHkgfSkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2FsYyA9IGF0dHJzLmNhbGM7XG5cdFxuICAgIC8vICBBc3NpZ25zIHRoZSB4IGFuZCB5IHBvc2l0aW9uIGZvciB0aGUgbm9kZXNcbiAgICBjb25zdCB0cmVlRGF0YSA9IGF0dHJzLmxheW91dHMudHJlZW1hcChhdHRycy5yb290KTtcblxuICAgIGNvbnN0IGlzTm90QXR0cmlidXRlTm9kZSA9IChpZCkgPT4gKGlkID09PSAnUm9vdCcgfHwgaWQgPT09ICdDb252b2NhdGVkJyB8fCBpZCA9PT0gJ0Vucm9sbGVkJylcbiAgICBcbiAgICBsZXQgZXhwYW5kZWQgPSAwO1xuICAgIGZvciAoY29uc3QgaW5kZXggaW4gYXR0cnMubm9kZXMpe1xuICAgICAgY29uc3Qgbm9kZSA9IGF0dHJzLm5vZGVzW2luZGV4XTtcbiAgICAgIGlmIChpc05vdEF0dHJpYnV0ZU5vZGUobm9kZS5pZCkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pXG4gICAgICAgIGV4cGFuZGVkKys7XG5cbiAgICB9XG4gICAgXG5cbiAgICAvLyBHZXQgdHJlZSBub2RlcyBhbmQgbGlua3MgYW5kIGF0dGFjaCBzb21lIHByb3BlcnRpZXNcbiAgICBjb25zdCBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkubWFwKChkKSA9PiB7XG4gICAgICAvLyBJZiBhdCBsZWFzdCBvbmUgcHJvcGVydHkgaXMgYWxyZWFkeSBzZXQsIHRoZW4gd2UgZG9uJ3Qgd2FudCB0byByZXNldCBvdGhlciBwcm9wZXJ0aWVzXG5cbiAgICAgIC8vIERlY2xhcmUgcHJvcGVydGllcyB3aXRoIGRlZmZhdWx0IHZhbHVlc1xuICAgICAgbGV0IGJvcmRlckNvbG9yID0gJ3N0ZWVsYmx1ZSc7XG4gICAgICBsZXQgYmFja2dyb3VuZENvbG9yID0gJ3N0ZWVsYmx1ZSc7XG4gICAgICBsZXQgdGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICAgIGxldCB3aWR0aCA9IGQuZGF0YS53aWR0aDtcbiAgICAgIGxldCBoZWlnaHQgPSBkLmRhdGEuaGVpZ2h0O1xuXHRcdFx0bGV0IGRlc2NyaXB0aW9uID0gJycgfHwgZC5kYXRhLmRlc2NyaXB0aW9uO1xuXG4gICAgXHRsZXQgZGVwdGggPSBkLmRlcHRoO1xuXG4gICAgICBpZiAoZXhwYW5kZWQgPiAxICYmIGF0dHJzLm51bUV4cGFuZGVkIDwgZXhwYW5kZWQgJiYgZGVwdGggPiAyKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmNyZWFzZVwiKTtcbiAgICAgICAgZGVwdGggKz0xO1xuICAgICAgfVxuICAgICAgXG4gICBcdFx0XG4gICAgICBcbiAgICAgIGlmIChkLmRhdGEuYm9yZGVyQ29sb3IpIHtcbiAgICAgICAgYm9yZGVyQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgIGQuZGF0YS5ib3JkZXJDb2xvclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGQuZGF0YS5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihcbiAgICAgICAgICBkLmRhdGEuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZC5kYXRhLnRleHRDb2xvcikge1xuICAgICAgICB0ZXh0Q29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKGQuZGF0YS50ZXh0Q29sb3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBFeHRlbmQgbm9kZSBvYmplY3Qgd2l0aCBjYWxjdWxhdGVkIHByb3BlcnRpZXNcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGQsIHtcbiAgICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgdGV4dENvbG9yLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGVwdGgsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBTYXZlIG51bSBleHBhbmRlZFxuICAgIGF0dHJzLm51bUV4cGFuZGVkID0gZXhwYW5kZWQ7XG4gICAgXG5cbiAgICAvLyBTYXZlIG5vZGVzIGZvciBjbGlja1xuICAgIGF0dHJzLm5vZGVzID0gbm9kZXM7XG5cbiAgICAvLyBHZXQgYWxsIGxpbmtzXG4gICAgY29uc3QgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgLy8gU2V0IGNvbnN0YW50IGRlcHRoIGZvciBlYWNoIG5vZGVcblxuICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIFx0XHRcdGQueSA9IGQuZGVwdGggKiBhdHRycy5kZXB0aDsgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGQueSArIFwiIFwiICsgZC5kZXB0aCk7XG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTElOS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEdldCBsaW5rcyBzZWxlY3Rpb25cbiAgICBjb25zdCBsaW5rU2VsZWN0aW9uID0gYXR0cnMuY2VudGVyR1xuICAgICAgLnNlbGVjdEFsbCgncGF0aC5saW5rJylcbiAgICAgIC5kYXRhKGxpbmtzLCAoeyBpZCB9KSA9PiBpZCk7XG4gICAgXG4gICAgIFxuICAgIGNvbnN0IGxpbmtFbnRlciA9IGxpbmtTZWxlY3Rpb25cbiAgICAgIC5lbnRlcigpXG4gICAgICAuaW5zZXJ0KCdwYXRoJywgJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xuICAgICAgICBjb25zdCBvID0ge1xuICAgICAgICAgIHg6IGQueCxcbiAgICAgICAgICB5OiBkLnksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKG8sIFtvLCBvXSk7XG4gICAgICB9KTtcbiAgICBcblx0XHRjb25zdCBsaW5rVXBkYXRlID0gbGlua0VudGVyLm1lcmdlKGxpbmtTZWxlY3Rpb24pO1xuICAgIFxuICAgICBsaW5rVXBkYXRlXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCh7IGRhdGEgfSkgPT4gZGF0YS5jb25uZWN0b3JMaW5lV2lkdGggfHwgMilcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAoeyBkYXRhIH0pID0+IGRhdGEuY29ubmVjdG9yTGluZUNvbG9yID8gdGhpcy5yZ2JhT2JqVG9Db2xvcihkYXRhLmNvbm5lY3RvckxpbmVDb2xvcikgOiAnZ3JlZW4nKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1kYXNoYXJyYXknLCAoeyBkYXRhIH0pID0+ICBkYXRhLmRhdGFBcnJheSB8fCAnJyk7XG5cbiAgICAvLyBUcmFuc2l0aW9uIGJhY2sgdG8gdGhlIHBhcmVudCBlbGVtZW50IHBvc2l0aW9uXG4gICAgbGlua1VwZGF0ZVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRzID0gZC5kYXRhLnBhcmVudE5vZGVJZHMubWFwKFxuICAgICAgICAgIChwYXJlbnROb2RlSWQpID0+XG4gICAgICAgICAgICBub2Rlcy5maW5kKChub2RlKSA9PiBub2RlLmlkID09PSBwYXJlbnROb2RlSWQpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKGQsIHBhcmVudHMpO1xuICAgICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgYW55ICBsaW5rcyB3aGljaCBpcyBleGl0aW5nIGFmdGVyIGFuaW1hdGlvblxuICAgIGNvbnN0IGxpbmtFeGl0ID0gbGlua1NlbGVjdGlvblxuICAgICAgLmV4aXQoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xuICAgICAgICBjb25zdCBvID0ge1xuICAgICAgICAgIHg6IGQucGFyZW50LnggfHwgMCxcbiAgICAgICAgICB5OiBkLnBhcmVudC55IHx8IDAsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBkaWFnID0gdGhpcy5kaWFnb25hbChvLCBbb10pO1xuICAgICAgICByZXR1cm4gZGlhZztcbiAgICAgIH0pXG4gICAgICAucmVtb3ZlKCk7XG4gICAgXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE5PREVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gICAgLy8gR2V0IG5vZGVzIHNlbGVjdGlvblxuICAgIGNvbnN0IG5vZGVzU2VsZWN0aW9uID0gYXR0cnMuY2VudGVyR1xuICAgICAgLnNlbGVjdEFsbCgnZy5ub2RlJylcbiAgICAgIC5kYXRhKG5vZGVzLCAoeyBpZCB9KSA9PiBpZCk7XG5cbiAgICBsZXQgaHQgPSB0aGlzO1xuICAgIC8vIEVudGVyIGFueSBuZXcgbm9kZXMgYXQgdGhlIHBhcmVudCdzIHByZXZpb3VzIHBvc2l0aW9uLlxuICAgIGNvbnN0IG5vZGVFbnRlciA9IG5vZGVzU2VsZWN0aW9uXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHt4MH0sJHt5MH0pYClcbiAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAub24oJ2NsaWNrJywgKHsgZGF0YSB9KSA9PiB7IFxuICAgICAgICBpZiAoZGF0YS5jbGlja2FibGUpIHtcbiAgICAgICAgICBpZiAoYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV1cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW1xuICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgIF0uaW5kZXhPZihkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbXG4gICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgIF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IGF0dHJzLnVuY2xpY2tlZFdpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW1xuICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICBdLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMuY2xpY2tlZFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgIF0uaW5kZXhPZihkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tcbiAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMudW5jbGlja2VkV2lkdGg7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dXG4gICAgICAgICAgICAgICAgICAubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9pZiBlbXB0eVxuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgICAgZGF0YS5wYXJlbnROb2RlSWRzWzBdXG4gICAgICAgICAgICAgICAgXS5wdXNoKCdUb3RhbCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXVxuICAgICAgICAgICAgICAgICAgLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgICBdWzBdID09ICdUb3RhbCdcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9pZiAnVG90YWwnXG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbXG4gICAgICAgICAgICAgICAgICBkYXRhLnBhcmVudE5vZGVJZHNbMF1cbiAgICAgICAgICAgICAgICBdLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW1xuICAgICAgICAgICAgICAgIGRhdGEucGFyZW50Tm9kZUlkc1swXVxuICAgICAgICAgICAgICBdLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gMTA7XG5cbiAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmFjYWRlbWljVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKj0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0b3RhbCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAnV0FSTklORzogQWRkaW5nIG1vcmUgYWNhZGVtaWMgYXR0cmlidXRlcyBtYXkgcmVzdWx0IGluIGxvdyB2aXNpYmlsaXR5IGluIHRoZSB2aXN1YWxpemF0aW9uLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPVxuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID09IGF0dHJzLnVuY2xpY2tlZFdpZHRoID8gYXR0cnMuY2xpY2tlZFdpZHRoIDogYXR0cnMudW5jbGlja2VkV2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuZXhwYW5kYWJsZSkge1xuICAgICAgICAgIGxldCBub2RlQ2xpY2tlZCA9IG5vZGVzLmZpbmQoXG4gICAgICAgICAgICAobm9kZSkgPT4gbm9kZS5pZCA9PT0gZGF0YS5ub2RlSWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGh0Lm9uQnV0dG9uQ2xpY2sobm9kZUNsaWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGh0LnVwZGF0ZShkYXRhKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3ZlcicsIChkKSA9PiB7XG4gICAgICAgIGlmIChkLmRlc2NyaXB0aW9uICYmIChhdHRycy50b29sdGlwRGl2LnN0eWxlKCdvcGFjaXR5JykgIT0gMC45IHx8IGQuZGVzY3JpcHRpb24gIT09IGF0dHJzLnRvb2x0aXBEaXYuX2dyb3Vwc1swXVswXS5pbm5lckhUTUwpKSB7XG4gICAgICAgICAgYXR0cnMudG9vbHRpcERpdlxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDAuOSk7XG4gICAgICAgICAgYXR0cnMudG9vbHRpcERpdlxuICAgICAgICAgICAgLmh0bWwoZC5kZXNjcmlwdGlvbilcbiAgICAgICAgICBcdC5zdHlsZShcImxlZnRcIiwgKGQzLmV2ZW50LnBhZ2VYIC0gZC5kYXRhLndpZHRoLzIpICsgXCJweFwiKVx0XHRcbiAgICAgICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSA2MCkgKyBcInB4XCIpO1x0ICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCAoZCkgPT4ge1xuICAgICAgICBpZiAoZDMuZXZlbnQudG9FbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsID09PSAnc3ZnLWNoYXJ0LWNvbnRhaW5lcicpIHtcbiAgICAgICAgICBhdHRycy50b29sdGlwRGl2LnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLnN0eWxlKCdvcGFjaXR5JywgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gQWRkIGJhY2tncm91bmQgcmVjdGFuZ2xlIGZvciB0aGUgbm9kZXNcbiAgICBub2RlRW50ZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAncmVjdCcsXG4gICAgICAgIHNlbGVjdG9yOiAnbm9kZS1yZWN0JyxcbiAgICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoeyBfY2hpbGRyZW4gfSkgPT5cbiAgICAgICAgX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6ICcjZmZmJ1xuICAgICAgKTtcblxuICAgIC8vIE5vZGUgdXBkYXRlIHN0eWxlc1xuICAgIGNvbnN0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXJcbiAgICAgIC5tZXJnZShub2Rlc1NlbGVjdGlvbilcbiAgICAgIC5zdHlsZSgnZm9udCcsICcxMnB4IHNhbnMtc2VyaWYnKTtcblxuICAgIC8vIEFkZCB0ZXh0IGVsZW1lbnQgaW5zaWRlIGdyb3VwXG4gICAgbm9kZVVwZGF0ZS5wYXR0ZXJuaWZ5KHtcbiAgICAgIHRhZzogJ3RleHQnLFxuICAgICAgc2VsZWN0b3I6ICdub2RlLWZvcmVpZ24tb2JqZWN0LWRpdicsXG4gICAgICBkYXRhOiAoZCkgPT4gW2RdLFxuICAgIH0pO1xuICAgIFxuICAgICAvLyBBZGQgc2VsZWN0IGFsbC9kZXNlbGVjdCBhbGwgYnV0dG9uIGluc2lkZSBncm91cFxuICAgIG5vZGVVcGRhdGUucGF0dGVybmlmeSh7XG4gICAgICB0YWc6ICdpJyxcbiAgICAgIHNlbGVjdG9yOiAnZmEgZmEtY2hlY2stc3F1YXJlLW8nLFxuICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICB9KS5hdHRyKCdjbGljaycsIGQgPT4gdGhpcy5vblNlbGVjdEFsbChkKSk7XG4gICAgXG4gICAgLy9Nb3ZlIHNlbGVjdCBhbGwgaWNvbiB0byBzaWRlXG4gICAgbm9kZVVwZGF0ZS5zZWxlY3QoJy5mYS1jaGVjay1zcXVhcmUtbycpXG4gICAgXHRcdFx0XHRcdFx0LnN0eWxlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICBcdFx0XHRcdFx0XHQuc3R5bGUoJ2NvbG9yJywgJ3doaXRlJylcbiAgICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzVweCcpXG5cbiAgICB0aGlzLnJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKTtcbiAgICBcbiAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24gZm9yIHRoZSBub2RlXG4gICAgbm9kZVVwZGF0ZVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAoeyB4LCB5IH0pID0+IGB0cmFuc2xhdGUoJHt4IHx8IDB9LCR7eSB8fCAwfSlgXG4gICAgICApXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpO1xuXG4gICAgLy8gU3R5bGUgbm9kZSByZWN0YW5nbGVzXG4gICAgbm9kZVVwZGF0ZVxuICAgICAgLnNlbGVjdCgnLm5vZGUtcmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAoeyBkYXRhIH0pID0+IGRhdGEud2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgKHsgZGF0YSB9KSA9PiBkYXRhLmhlaWdodClcbiAgICAgIC5hdHRyKCd4JywgKHsgZGF0YSB9KSA9PiAtZGF0YS53aWR0aCAvIDIpXG4gICAgICAuYXR0cigneScsICh7IGRhdGEgfSkgPT4gLWRhdGEuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdyeCcsICh7IGRhdGEgfSkgPT4gZGF0YS5ib3JkZXJSYWRpdXMgfHwgMClcbiAgICAgIC5hdHRyKFxuICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLmJvcmRlcldpZHRoIHx8IGF0dHJzLnN0cm9rZVdpZHRoXG4gICAgICApXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICh7IGJvcmRlckNvbG9yIH0pID0+IGJvcmRlckNvbG9yKVxuICAgICAgLnN0eWxlKFxuICAgICAgICAnZmlsbCcsXG4gICAgICAgICh7IGJhY2tncm91bmRDb2xvciB9KSA9PiBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICk7XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbm9kZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICAgIGNvbnN0IG5vZGVFeGl0VHJhbnNpdGlvbiA9IG5vZGVzU2VsZWN0aW9uXG4gICAgICAuZXhpdCgpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtjb25zb2xlLmxvZyhkKTtgdHJhbnNsYXRlKCR7LTMwMH0sJHszMDB9KWB9KVxuICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApO1xuXG4gICAgLy8gT24gZXhpdCByZWR1Y2UgdGhlIG5vZGUgcmVjdHMgc2l6ZSB0byAwXG4gICAgbm9kZUV4aXRUcmFuc2l0aW9uXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1yZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKTtcblxuICAgIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxuICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQueDAgPSBkLng7XG4gICAgICBkLnkwID0gZC55O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkZXRlY3RzIHdoZXRoZXIgY3VycmVudCBicm93c2VyIGlzIGVkZ2VcbiAgaXNFZGdlKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnRWRnZScpO1xuICB9XG5cbiAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGN1c3RvbSBkaWFnb25hbCAtIHBsYXkgd2l0aCBpdCBoZXJlIC0gaHR0cHM6Ly90by5seS8xemhUS1xuICBkaWFnb25hbChzLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgLmNlbnRlckcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsICdncm91cE9mUGF0aHMnKTtcbiAgICBsZXQgaGVpZ2h0TXVsdGlwbGllciA9IHBhcmVudHMubGVuZ3RoID09IDIgPyAwLjYgOiAwLjQ7XG4gICAgXG4gICAgZm9yIChjb25zdCB0IG9mIHBhcmVudHMpIHtcbiAgICAgIGxldCBoZWlnaHQgPSBzLnkgLSB0Lnk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBzb21lIHZhcmlhYmxlcyBiYXNlZCBvbiBzb3VyY2UgYW5kIHRhcmdldCAocyx0KSBjb29yZGluYXRlc1xuICAgICAgbGV0IHggPSBzLng7XG4gICAgICBsZXQgeSA9IHMueTtcbiAgICAgIGxldCBleCA9IHQueDtcbiAgICAgIGxldCBleSA9IHQueTtcbiAgICAgIGxldCB4cnZzID0gZXggLSB4IDwgMCA/IC0xIDogMTtcbiAgICAgIGxldCB5cnZzID0gLTE7XG4gICAgICBsZXQgcmRlZiA9IDA7XG4gICAgICBsZXQgckluaXRpYWwgPSBNYXRoLmFicyhleCAtIHgpIC8gMiA8IHJkZWYgPyBNYXRoLmFicyhleCAtIHgpIC8gMiA6IHJkZWY7XG4gICAgICBsZXQgciA9IE1hdGguYWJzKGV5IC0geSkgLyAyIDwgckluaXRpYWwgPyBNYXRoLmFicyhleSAtIHkpIC8gMiA6IHJJbml0aWFsO1xuICAgICAgbGV0IGggPSBNYXRoLmFicyhleSAtIHkpICogaGVpZ2h0TXVsdGlwbGllciAtIHI7XG4gICAgICBsZXQgdyA9IE1hdGguYWJzKGV4IC0geCkgLSByICogMjtcblxuICAgICAgbGV0IHBhdGggPSBgXG4gICAgICAgICAgICAgTSAke3h9ICR7eX1cbiAgICAgICAgICAgICBMICR7eH0gJHt5ICsgaCAqIHlydnN9XG4gICAgICAgICAgICAgTCAke3ggKyB3ICogeHJ2cyArIHIgKiB4cnZzfSAke3kgKyBoICogeXJ2cyArIHIgKiB5cnZzfVxuICAgICAgICAgICAgIEwgJHtleH0gJHtleX1cbiAgICAgICAgICAgYDtcbiAgICAgIGdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBsZXQgY29tYmluZWREID0gJyc7XG4gICAgZ3JvdXAuc2VsZWN0QWxsKCdwYXRoJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2QnKSlcbiAgICAgICAgY29tYmluZWREICs9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkJyk7XG4gICAgfSk7XG4gICAgZ3JvdXAucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGNvbWJpbmVkRDtcbiAgfVxuXG4gIHJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8qXG4gICAgYXR0cnMuc3ZnXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1mb3JlaWduLW9iamVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAoeyB3aWR0aCB9KSA9PiB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0KVxuICAgICAgLmF0dHIoJ3gnLCAoeyB3aWR0aCB9KSA9PiAtd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ3knLCAoeyBoZWlnaHQgfSkgPT4gLWhlaWdodCAvIDIpO1xuICAgICAgXG4gICAgICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgZmlsbD1cInJlZFwiPjwvcmVjdD5cbiAgICA8dGV4dCB4PVwiMFwiIHk9XCI1MFwiIGZvbnQtZmFtaWx5PVwiVmVyZGFuYVwiIGZvbnQtc2l6ZT1cIjM1XCIgZmlsbD1cImJsdWVcIj5IZWxsbzwvdGV4dD5cbiAgICAgICovXG5cbiAgICBcbiAgICAgYXR0cnMuc3ZnXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1mb3JlaWduLW9iamVjdC1kaXYnKVxuICAgIFx0LmF0dHIoJ2R5JywgJzEwcHgnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgIFx0LnN0eWxlKCdmaWxsJywgKHsgdGV4dENvbG9yIH0pID0+dGV4dENvbG9yIHx8ICdibGFjaycpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICczMHB4JylcbiAgICAgIC5odG1sKCh7IGRhdGEgfSkgPT4gZGF0YS5ub2RlSWQpO1xuICAgIC8qXG4gICAgYXR0cnMuc3ZndGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLnNlbGVjdEFsbCgnLm5vZGUtZm9yZWlnbi1vYmplY3QtZGl2JylcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCAoeyB3aWR0aCB9KSA9PiBgJHt3aWR0aH1weGApXG4gICAgICAuc3R5bGUoJ2hlaWdodCcsICh7IGhlaWdodCB9KSA9PiBgJHtoZWlnaHR9cHhgKVxuICAgICAgLnN0eWxlKCdjb2xvcicsICh7IHRleHRDb2xvciB9KSA9PlxuICAgICAgICB0ZXh0Q29sb3IgPyB0ZXh0Q29sb3IgOiAnYmxhY2snXG4gICAgICApXG4gICAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcbiAgICAgIC5zdHlsZSgnbWFyZ2luLXRvcCcsICc1MHB4JylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzQwcHgnKVxuICAgICAgLmh0bWwoKHsgZGF0YSB9KSA9PiBkYXRhLm5vZGVJZCk7Ki9cbiAgfVxuXG4gICBvblNlbGVjdEFsbChkKSB7XG4gICAgIFxuICAgfVxuICBcbiAgLy8gVG9nZ2xlIGNoaWxkcmVuIG9uIGNsaWNrLlxuICBvbkJ1dHRvbkNsaWNrKGQpIHtcbiAgICAvLyBJZiBjaGlsZHJlbnMgYXJlIGV4cGFuZGVkXG4gICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgIGlmIChkLmlkID09PSAnQ29udm9jYXRlZCcpIHtcbiAgICAgICAgY29uc3QgZGVtb2dyYXBoaWNOb2RlID0gZC5wYXJlbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGlmIChkZW1vZ3JhcGhpY05vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgICBcbiAgICAgIC8vQ29sbGFwc2UgdGhlbVxuICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG5cbiAgICAgIGlmIChkLmlkID09PSAnRW5yb2xsZWQnKXsgIFxuICAgICAgICBjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGNvbnZvY2F0aW9uTm9kZS5kYXRhLmJvcmRlcldpZHRoID09PSAyKXtcbiAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soY29udm9jYXRpb25Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBTZXQgZGVzY2VuZGFudHMgZXhwYW5kZWQgcHJvcGVydHkgdG8gZmFsc2VcbiAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZC5pZCA9PT0gJ0Vucm9sbGVkJykge1xuICAgICAgICBjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGNvbnZvY2F0aW9uTm9kZS5jaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGNvbnZvY2F0aW9uTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRXhwYW5kIGNoaWxkcmVuXG4gICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAvLyBTZXQgZWFjaCBjaGlsZHJlbiBhcyBleHBhbmRlZFxuXHRcdFx0aWYgKGQuY2hpbGRyZW4pXG4gICAgICAgIGQuY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgICAgICAoeyBkYXRhIH0pID0+IChkYXRhLmV4cGFuZGVkID0gdHJ1ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZWRyYXcgR3JhcGhcbiAgICB0aGlzLnVwZGF0ZShkKTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2hhbmdlcyBgZXhwYW5kZWRgIHByb3BlcnR5IHRvIGRlc2NlbmRhbnRzXG4gIHNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKFxuICAgIHsgZGF0YSwgY2hpbGRyZW4sIF9jaGlsZHJlbiB9LFxuICAgIGZsYWdcbiAgKSB7XG4gICAgLy8gU2V0IGZsYWcgdG8gdGhlIGN1cnJlbnQgcHJvcGVydHlcbiAgICBkYXRhLmV4cGFuZGVkID0gZmxhZztcblxuICAgIC8vIExvb3Agb3ZlciBhbmQgcmVjdXJzaXZlbHkgdXBkYXRlIGV4cGFuZGVkIGNoaWxkcmVuJ3MgZGVzY2VuZGFudHNcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmbGFnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExvb3Agb3ZlciBhbmQgcmVjdXJzaXZlbHkgdXBkYXRlIGNvbGxhcHNlZCBjaGlsZHJlbidzIGRlc2NlbmRhbnRzXG4gICAgaWYgKF9jaGlsZHJlbikge1xuICAgICAgX2NoaWxkcmVuLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmbGFnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIGludm9rZWQgdmlhIGNoYXJ0LnNldEV4cGFuZGVkIEFQSSwgaXQgZXhwYW5kcyBvciBjb2xsYXBzZXMgcGFydGljdWxhciBub2RlXG4gIHNldEV4cGFuZGVkKGlkLCBleHBhbmRlZEZsYWcpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIC8vIFJldHJpZXZlIG5vZGUgYnkgbm9kZSBJZFxuICAgIGNvbnN0IG5vZGUgPSBhdHRycy5hbGxOb2Rlcy5maWx0ZXIoXG4gICAgICAoeyBkYXRhIH0pID0+IGRhdGEubm9kZUlkID09IGlkXG4gICAgKVswXTtcblxuICAgIC8vIElmIG5vZGUgZXhpc3RzLCBzZXQgZXhwYW5zaW9uIGZsYWdcbiAgICBpZiAobm9kZSkgbm9kZS5kYXRhLmV4cGFuZGVkID0gZXhwYW5kZWRGbGFnO1xuXG4gICAgLy8gRmlyc3QgZXhwYW5kIGFsbCBub2Rlc1xuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4gdGhpcy5leHBhbmQoZCkpO1xuXG4gICAgLy8gVGhlbiBjb2xsYXBzZSBhbGwgbm9kZXNcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBleHBhbmQgb25seSB0aGUgbm9kZXMsIHdoaWNoIHdlcmUgcHJldmlvdXNseSBleHBhbmRlZCwgb3IgaGF2ZSBhbiBleHBhbmQgZmxhZyBzZXRcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+XG4gICAgICB0aGlzLmV4cGFuZFNvbWVOb2RlcyhkKVxuICAgICk7XG5cbiAgICAvLyBSZWRyYXcgZ3JhcGhcbiAgICB0aGlzLnVwZGF0ZShhdHRycy5yb290KTtcbiAgfVxuXG4gIC8vIE1ldGhvZCB3aGljaCBvbmx5IGV4cGFuZHMgbm9kZXMsIHdoaWNoIGhhdmUgcHJvcGVydHkgc2V0IFwiZXhwYW5kZWQ9dHJ1ZVwiXG4gIGV4cGFuZFNvbWVOb2RlcyhkKSB7XG4gICAgLy8gSWYgbm9kZSBoYXMgZXhwYW5kZWQgcHJvcGVydHkgc2V0XG4gICAgaWYgKGQuZGF0YS5leHBhbmRlZCkge1xuICAgICAgLy8gUmV0cmlldmUgbm9kZSdzIHBhcmVudFxuICAgICAgbGV0IHBhcmVudCA9IGQucGFyZW50O1xuXG4gICAgICAvLyBXaGlsZSB3ZSBjYW4gZ28gdXBcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgLy8gRXhwYW5kIGFsbCBjdXJyZW50IHBhcmVudCdzIGNoaWxkcmVuXG4gICAgICAgIGlmIChwYXJlbnQuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gcGFyZW50Ll9jaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgY3VycmVudCBwYXJlbnQgaG9sZGluZyBvYmplY3RcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmVsbHkgZG8gdGhlIHNhbWUgZm9yIGNvbGxhcHNlZCBub2Rlc1xuICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKSk7XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBleHBhbmRlZCBub2Rlc1xuICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICBkLmNoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmV4cGFuZFNvbWVOb2RlcyhjaCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyBub2RlcyBzdGF0ZSBhbmQgcmVkcmF3cyBncmFwaCwgdXN1YWxseSBhZnRlciBkYXRhIGNoYW5nZVxuICB1cGRhdGVOb2Rlc1N0YXRlKCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgLy8gU3RvcmUgbmV3IHJvb3QgYnkgY29udmVydGluZyBmbGF0IGRhdGEgdG8gaGllcmFyY2h5XG4gICAgYXR0cnMucm9vdCA9IGQzXG4gICAgICAuc3RyYXRpZnkoKVxuICAgICAgLmlkKCh7IG5vZGVJZCB9KSA9PiBub2RlSWQpXG4gICAgICAucGFyZW50SWQoKHsgcGFyZW50Tm9kZUlkcyB9KSA9PiBwYXJlbnROb2RlSWRzWzBdKShcbiAgICAgIGF0dHJzLmRhdGFcbiAgICApO1xuXG4gICAgLy8gU3RvcmUgcG9zaXRpb25zLCB3aGVyZSBjaGlsZHJlbiBhcHBlYXIgZHVyaW5nIHRoZWlyIGVudGVyIGFuaW1hdGlvblxuICAgIGF0dHJzLnJvb3QueDAgPSAwO1xuICAgIGF0dHJzLnJvb3QueTAgPSAwO1xuXG4gICAgLy8gU3RvcmUgYWxsIG5vZGVzIGluIGZsYXQgZm9ybWF0IChhbHRob3VnaCwgbm93IHdlIGNhbiBicm93c2UgcGFyZW50LCBzZWUgZGVwdGggZS50LmMuIClcbiAgICBhdHRycy5hbGxOb2RlcyA9IGF0dHJzLmxheW91dHNcbiAgICAgIC50cmVlbWFwKGF0dHJzLnJvb3QpXG4gICAgICAuZGVzY2VuZGFudHMoKTtcblxuICAgIC8vIFN0b3JlIGRpcmVjdCBhbmQgdG90YWwgZGVzY2VuZGFudHMgY291bnRcbiAgICBhdHRycy5hbGxOb2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKGQuZGF0YSwge1xuICAgICAgICBkaXJlY3RTdWJvcmRpbmF0ZXM6IGQuY2hpbGRyZW5cbiAgICAgICAgICA/IGQuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgOiAwLFxuICAgICAgICB0b3RhbFN1Ym9yZGluYXRlczogZC5kZXNjZW5kYW50cygpLmxlbmd0aCAtIDEsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEV4cGFuZCBhbGwgbm9kZXMgZmlyc3RcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2godGhpcy5leHBhbmQpO1xuXG4gICAgLy8gVGhlbiBjb2xsYXBzZSB0aGVtIGFsbFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4gdGhpcy5jb2xsYXBzZShkKSk7XG5cbiAgICAvLyBUaGVuIG9ubHkgZXhwYW5kIG5vZGVzLCB3aGljaCBoYXZlIGV4cGFuZGVkIHByb3BydHkgc2V0IHRvIHRydWVcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGNoKSA9PlxuICAgICAgdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpXG4gICAgKTtcblxuICAgIC8vIFJlZHJhdyBHcmFwaHNcbiAgICB0aGlzLnVwZGF0ZShhdHRycy5yb290KTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHdoaWNoIGNvbGxhcHNlcyBwYXNzZWQgbm9kZSBhbmQgaXQncyBkZXNjZW5kYW50c1xuICBjb2xsYXBzZShkKSB7XG4gICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmNvbGxhcHNlKGNoKSk7XG4gICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB3aGljaCBleHBhbmRzIHBhc3NlZCBub2RlIGFuZCBpdCdzIGRlc2NlbmRhbnRzXG4gIGV4cGFuZChkKSB7XG4gICAgaWYgKGQuX2NoaWxkcmVuKSB7XG4gICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICBkLmNoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmV4cGFuZChjaCkpO1xuICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIFpvb20gaGFuZGxlciBmdW5jdGlvblxuICB6b29tZWQoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBjaGFydCA9IGF0dHJzLmNoYXJ0O1xuXG4gICAgLy8gR2V0IGQzIGV2ZW50J3MgdHJhbnNmb3JtIG9iamVjdFxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGQzLmV2ZW50LnRyYW5zZm9ybTtcblxuICAgIC8vIFN0b3JlIGl0XG4gICAgYXR0cnMubGFzdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgIC8vIFJlcG9zaXRpb24gYW5kIHJlc2NhbGUgY2hhcnQgYWNjb3JkaW5nbHlcbiAgICBjaGFydC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xuXG4gICAgLy8gQXBwbHkgbmV3IHN0eWxlcyB0byB0aGUgZm9yZWlnbiBvYmplY3QgZWxlbWVudFxuICAgIGlmICh0aGlzLmlzRWRnZSgpKSB7XG4gICAgICB0aGlzLnJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vbm9kZXMnO1xuXG5leHBvcnQgY2xhc3MgU3VuYnVyc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL0V4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogMzAwMCxcbiAgICAgIHN2Z0hlaWdodDogMzAwMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGV4dGVuZGVkTGluZUxlbmd0aDogNDAsXG4gICAgICB0ZXh0RGlzdGFuY2U6IDE1LFxuICAgICAgb3V0ZXJUZXh0U2l6ZTogJzIwcHgnLFxuICAgICAgYXR0cmlidXRlSW5kZXg6IG51bGwsXG4gICAgICBoaXN0b3J5OiBbXSxcbiAgICAgIGRpc3BsYXlOb2RlczogbnVsbCxcbiAgICAgIHZhbHVlczogbnVsbCxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBNYWxlOiAnI2ZjOGQ1OScsXG4gICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICBJbnRlcm5hdGlvbmFsOiAnIzk5OGVjMycsXG4gICAgICAgIERvbWVzdGljOiAnI2YxYTM0MCcsXG4gICAgICAgICc8PTE3JzogJyNmN2ZjZjUnLFxuICAgICAgICAnMTgtMjAnOiAnI2U1ZjVlMCcsXG4gICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgJzI2LTMwJzogJyNhMWQ5OWInLFxuICAgICAgICAnMzEtMzUnOiAnIzc0YzQ3NicsXG4gICAgICAgICczNi00NSc6ICcjNDFhYjVkJyxcbiAgICAgICAgJzQ2LTU1JzogJyMyMzhiNDUnLFxuICAgICAgICAnNTUrJzogJyMwMDZkMmMnLFxuICAgICAgICAwOiAnIzk4OTg5OCcsXG4gICAgICB9LFxuICAgICAgdGV4dENpcmNsZXNDb3VudDogW10sXG4gICAgICB0ZXh0Q2lyY2xlc1BlcmNlbnQ6IFtdLFxuICAgICAgY2VudGVyVGV4dDogbnVsbCxcbiAgICAgIGNlbnRlclRleHRTaXplOiAnNDBweCcsXG4gICAgICBjZW50ZXJUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGNvbXBhcmVNb2RlOiBmYWxzZSxcbiAgICAgIGxlZ2VuZFdpZHRoOiAxNTAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQxOiAnQ2F0ZWdvcnknLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQyOiAnIyBvZiBTdHVkZW50cycsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDM6ICclIGluIEdyb3VwJyxcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyogUmVtb3ZlcyBhbGwgZWxlbWVudHMgaW4gc3ZnICovXG4gIHJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUoKS5zdmcuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gIH1cblxuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgLyogQ29udmVydHMgb2JqZWN0cyB0byBzbGljZXMgd2l0aCBxdWVyaWVzICovXG4gIGdldFZhbHVlcyhhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAvL3ByZXBhcmluZyBzbGljZXNcbiAgICBjb25zdCBjYXJ0ZXNpYW4gPSAoLi4uYSkgPT5cbiAgICAgIGEucmVkdWNlKChhLCBiKSA9PlxuICAgICAgICBhLmZsYXRNYXAoKGQpID0+IGIubWFwKChlKSA9PiBbZCwgZV0uZmxhdCgpKSlcbiAgICAgICk7XG4gICAgbGV0IHNsaWNlcyA9IGNhcnRlc2lhbihcbiAgICAgIGFjYWRlbWljVmFsdWVzWydBY2FkZW1pYyBZZWFyJ10sXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5EZWdyZWUsXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5GYWN1bHR5LFxuICAgICAgYWNhZGVtaWNWYWx1ZXNbJ1N0dWR5IFN0YXR1cyddXG4gICAgKTtcblxuICAgIGNvbnN0IG1ha2VRdWVyeSA9IChzbGljZSwgZGl2ZXJzaXR5QXR0ciwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBxdWVyeSA9IFsuLi5zbGljZV07XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChwcm9wICE9PSBkaXZlcnNpdHlBdHRyKSB7XG4gICAgICAgICAgcXVlcnkucHVzaCgnVG90YWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH07XG5cbiAgICAvL2NvbnZlcnQgc2xpY2VzIHRvIGtleSBmb3JtYXRcblxuICAgIGxldCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBzbGljZSBvZiBzbGljZXMpIHtcbiAgICAgIGxldCBzdHIgPSBzbGljZS50b1N0cmluZygpO1xuICAgICAgdmFsdWVzW3N0cl0gPSB7fTtcbiAgICAgIGZvciAobGV0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09IDApIGNvbnRpbnVlO1xuICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXSA9IHt9O1xuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBkaXZlcnNpdHlWYWx1ZXNbYXR0cl0pIHtcbiAgICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXVt2YWx1ZV0gPSBtYWtlUXVlcnkoXG4gICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIC8qIEdpdmVuIHNjcmVlbiB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2YgYXJjcywgcmV0dXJuIGFyYyB3aWR0aCwgaW5uZXJyYWRpdXMgYW5kIHRleHQgc2l6ZSovXG4gIGNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoeCwgeSwgbnVtQXJjcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgbGV0IHRleHRIZWlnaHRPZmZzZXQgPSA1MDtcblxuICAgIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5IC0gdGV4dEhlaWdodE9mZnNldCk7XG4gICAgbGV0IGFyY1dpZHRoID0gbWluIC8gKDIgKiBudW1BcmNzICsgNyk7IC8vbWluID0gMipudW1BcmNzKmFyY1dpZHRoICsgMippbm5lclJhZGl1cywgaW5uZXJSYWRpdXMgPSAzKmFyY1dpZHRoXG4gICAgbGV0IGlubmVyUmFkaXVzID0gMyAqIGFyY1dpZHRoO1xuXG4gICAgbGV0IG11bHRpcGxpZXIgPSAxLjU7XG4gICAgbGV0IG4gPSAxMzsgLy8naW50ZXJuYXRpb25hbCcgd2l0aCAxMyBsZXR0ZXJzIGlzIGxvbmdlc3Qgd29yZCBpbiBkaXZlcnNpdHkgYXR0cmlidXRlc1xuICAgIGxldCBpbm5lclRleHRTaXplID1cbiAgICAgIChtdWx0aXBsaWVyICogKDIgKiBpbm5lclJhZGl1cykpIC8gbiArICdweCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFyY1dpZHRoOiBhcmNXaWR0aCxcbiAgICAgIGlubmVyUmFkaXVzOiBpbm5lclJhZGl1cyxcbiAgICAgIGlubmVyVGV4dFNpemU6IGlubmVyVGV4dFNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qIEdpdmVuIHNjcmVlbiB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2Ygc3F1YXJlcywgcmV0dXJuIHJvd3MsIGNvbHVtbnMgYW5kIHNxdWFyZSBzaXplICovXG4gIGNvbXB1dGVDb21wYXJlRGltZW5zaW9ucyh4LCB5LCBuKSB7XG4gICAgLy8gQ29tcHV0ZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucywgYW5kIGNlbGwgc2l6ZVxuICAgIGxldCByYXRpbyA9IHggLyB5O1xuICAgIGxldCBuY29sc19mbG9hdCA9IE1hdGguc3FydChuICogcmF0aW8pO1xuICAgIGxldCBucm93c19mbG9hdCA9IG4gLyBuY29sc19mbG9hdDtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgaGVpZ2h0XG4gICAgbGV0IG5yb3dzMSA9IE1hdGguY2VpbChucm93c19mbG9hdCk7XG4gICAgbGV0IG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB3aGlsZSAobnJvd3MxICogcmF0aW8gPCBuY29sczEpIHtcbiAgICAgIG5yb3dzMSsrO1xuICAgICAgbmNvbHMxID0gTWF0aC5jZWlsKG4gLyBucm93czEpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMSA9IHkgLyBucm93czE7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIHdpZHRoXG4gICAgbGV0IG5jb2xzMiA9IE1hdGguY2VpbChuY29sc19mbG9hdCk7XG4gICAgbGV0IG5yb3dzMiA9IE1hdGguY2VpbChuIC8gbmNvbHMyKTtcbiAgICB3aGlsZSAobmNvbHMyIDwgbnJvd3MyICogcmF0aW8pIHtcbiAgICAgIG5jb2xzMisrO1xuICAgICAgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMiA9IHggLyBuY29sczI7XG5cbiAgICAvLyBGaW5kIHRoZSBiZXN0IHZhbHVlc1xuICAgIGxldCBucm93cywgbmNvbHMsIGNlbGxfc2l6ZTtcbiAgICBpZiAoY2VsbF9zaXplMSA8IGNlbGxfc2l6ZTIpIHtcbiAgICAgIG5yb3dzID0gbnJvd3MyO1xuICAgICAgbmNvbHMgPSBuY29sczI7XG4gICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUyO1xuICAgIH0gZWxzZSB7XG4gICAgICBucm93cyA9IG5yb3dzMTtcbiAgICAgIG5jb2xzID0gbmNvbHMxO1xuICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzaXplOiBjZWxsX3NpemUsIHJvd3M6IG5yb3dzLCBjb2xzOiBuY29scyB9O1xuICB9XG5cbiAgLyogRmV0Y2hpbmcgZGF0YSBhbmQgc2V0dGluZyB1cCBzdmcgY29udGFpbmVyICovXG4gIGFzeW5jIHNldHVwKHVybCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvL2xvYWQgZGF0YSBzeW5jaHJvbm91c2x5XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGQzLmNzdih1cmwpO1xuXG4gICAgYXR0cnMuYXR0cmlidXRlSW5kZXggPSBkYXRhLmNvbHVtbnM7XG5cbiAgICAvL2NvbnZlcnQgZGF0YSB0byBvYmplY3QgZm9ybWF0XG4gICAgYXR0cnMuZGF0YSA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG9iaiwgaSkge1xuICAgICAgbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcblxuICAgICAgdmFsdWVzLnBvcCgpO1xuXG4gICAgICBtYXBbJycuY29uY2F0KHZhbHVlcyldID0gb2JqLkNvdW50O1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG5cbiAgICAvLyBjcmVhdGUgY29udGFpbmVyXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICBcbiAgICAvLyBzZXR0aW5nIHVwIGNvbXBhcmUgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQ29tcGFyZSA9ICgpID0+IHtcbiAgICAgIGF0dHJzLmNvbXBhcmVNb2RlID0gIWF0dHJzLmNvbXBhcmVNb2RlO1xuICAgICAgc2IucmVuZGVyKGF0dHJzLnZhbHVlcyk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICdjb21wYXJlLWJ1dHRvbidcbiAgICApLm9uY2xpY2sgPSB0b2dnbGVDb21wYXJlO1xuXG4gICAgYXR0cnMuc3ZnID0gc3ZnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogQ29udmVydGluZyBpbnB1dCBvYmplY3RzIHRvIHZhbHVlcyBmb3IgZGlzcGxheSAqL1xuICBpbml0aWFsUmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcyhcbiAgICAgIGFjYWRlbWljVmFsdWVzLFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzXG4gICAgKTtcblxuICAgIHRoaXMucmVuZGVyKHZhbHVlcyk7XG4gIH1cblxuICAvKiBSZWN1cnJpbmcgcmVuZGVyICovXG4gIHJlbmRlcih2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy8gU2V0dGluZyB2YWx1ZXMgc28gdmFsdWVzIGlzIHN0aWxsIGFjY2Vzc2libGUgd2hlbiBjb21wYXJlIGlzIHRvZ2dsZWRcbiAgICBhdHRycy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgICAvLyByZXB1cnBvc2luZyBiYWNrIGJ1dHRvbiBpZiBuZWNlc3NhcnlcbiAgICBpZiAoYXR0cnMuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBiYWNrID0gKCkgPT4gc2IucmVuZGVyKGF0dHJzLmhpc3RvcnkucG9wKCkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPVxuICAgICAgICBhdHRycy5kaXNwbGF5Tm9kZXM7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBlbGVtZW50cyBpbiBzdmdcbiAgICB0aGlzLnJlbW92ZUFsbCgpO1xuXG4gICAgLy8gcmUtY3JlYXRlIHRoZSBuZXcgZWxlbWVudHNcbiAgICBpZiAoIWF0dHJzLmNvbXBhcmVNb2RlKSB7IFxuICAgICAgXG4gICAgICAvLyBkaXNhYmxlIGNvbXBhcmUgbW9kZSBpZiBvbmx5IDEgc2xpY2VcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID10aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmNvbG9yID10aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQnV0dG9uKTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuY29sb3IgPSd3aGl0ZSc7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMucmVuZGVyU3VuYnVyc3QodmFsdWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICB0aGlzLnJlbmRlckNvbXBhcmUodmFsdWVzKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJMZWdlbmQodmFsdWVzKTtcbiAgfVxuXG4gIC8vIHJlbmRlciB0aGUgc3VuYnVyc3RcbiAgcmVuZGVyU3VuYnVyc3QodmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgbGV0IHNiID0gdGhpcztcblxuICAgIC8vSGVscGVyIHZhbHVlc1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pXG4gICAgICAubGVuZ3RoO1xuICAgIGNvbnN0IGV4dGVuZGVkTGluZUxlbmd0aCA9IGF0dHJzLmV4dGVuZGVkTGluZUxlbmd0aDtcbiAgICBjb25zdCBoYWxmU2xpY2VSYWRpYW5zID0gTWF0aC5QSSAvIG51bVNsaWNlcztcbiAgICBjb25zdCB0ZXh0RGlzdGFuY2UgPSBhdHRycy50ZXh0RGlzdGFuY2U7XG4gICAgY29uc3QgYXJjTGVuZ3RoID0gKDIgKiBNYXRoLlBJKSAvIG51bVNsaWNlcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcblxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodDtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gYXR0cnMubGVnZW5kV2lkdGg7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG51bUFyY3NcbiAgICApO1xuICAgIGNvbnN0IGFyY1dpZHRoID0gcGFyYW1zLmFyY1dpZHRoO1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcGFyYW1zLmlubmVyUmFkaXVzO1xuICAgIGNvbnN0IGlubmVyVGV4dFNpemUgPSBwYXJhbXMuaW5uZXJUZXh0U2l6ZTtcblxuICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgYXR0cnMuc3ZnV2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgYXR0cnMuc3ZnSGVpZ2h0KVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlKCR7d2lkdGggLyAyfSwke2hlaWdodCAvIDJ9KWBcbiAgICAgICk7XG5cbiAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NlbnRlci1ncm91cCcpO1xuICAgIGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ2lkJywgJ2NlbnRlci1jaXJjbGUnKVxuICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAuYXR0cigncicsIGlubmVyUmFkaXVzKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJy0wLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dCggYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcwLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dCggYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQyKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMyA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcxLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDMpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAvL0hlbHBlciBtZXRob2RzXG4gICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBjb25zdCBnZXRDaXJjbGVZID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuXG4gICAgY29uc3QgZ2V0VGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHdvcmRzLmZpbHRlcihcbiAgICAgICAgKHdvcmQpID0+IHdvcmQgIT09ICdUb3RhbCdcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8vbGluZSBidWlsZGVyXG4gICAgY29uc3QgbGluZUJ1aWxkZXIgPSAoc2xpY2VDb3VudCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPSAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcztcbiAgICAgIGlmIChudW1TbGljZXMgJSAyID09IDEpIHJhZGlhbnMgKz0gTWF0aC5QSTtcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgnbGluZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCA1KVxuICAgICAgICAuYXR0cigneDEnLCBnZXRDaXJjbGVYKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgLmF0dHIoJ3kxJywgZ2V0Q2lyY2xlWShyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICd4MicsXG4gICAgICAgICAgZ2V0Q2lyY2xlWChcbiAgICAgICAgICAgIHJhZGlhbnMsXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArXG4gICAgICAgICAgICAgIG51bUFyY3MgKiBhcmNXaWR0aCArXG4gICAgICAgICAgICAgIGV4dGVuZGVkTGluZUxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneTInLFxuICAgICAgICAgIGdldENpcmNsZVkoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vdGV4dCBidWlsZGVyXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoc2xpY2UsIHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID1cbiAgICAgICAgKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXMgK1xuICAgICAgICBoYWxmU2xpY2VSYWRpYW5zO1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0KHNsaWNlKTtcbiAgICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgICB0ZXh0ID0gJ1RvdGFsJztcbiAgICAgIH1cbiAgICAgIGxldCByYWRpdXMgPVxuICAgICAgICBpbm5lclJhZGl1cyArIG51bUFyY3MgKiBhcmNXaWR0aCArIHRleHREaXN0YW5jZTtcbiAgICAgIGxldCB4ID0gZ2V0Q2lyY2xlWChyYWRpYW5zLCByYWRpdXMpO1xuICAgICAgbGV0IHkgPSAtZ2V0Q2lyY2xlWShyYWRpYW5zLCByYWRpdXMpO1xuXG4gICAgICBpZiAoeCA8IC0xKSB4IC09IHRleHQubGVuZ3RoICogOTtcbiAgICAgIC8vbGVmdCBzaWRlIGFkanVzdFxuICAgICAgZWxzZSBpZiAoeCA8IDEpIHggLT0gdGV4dC5sZW5ndGggKiA1OyAvL21pZGRsZSB0ZXh0IGFkanVzdFxuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5vdXRlclRleHRTaXplKVxuICAgICAgXHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAudGV4dCh0ZXh0KTtcbiAgICB9O1xuXG4gICAgLy9hcmMgYnVpbGRlclxuICAgIGNvbnN0IGFyY0J1aWxkZXIgPSAoXG4gICAgICBhcmMsXG4gICAgICBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUsXG4gICAgICBzbGljZSxcbiAgICAgIGF0dHIsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNvdW50LFxuICAgICAgcGVyY2VudFxuICAgICkgPT4ge1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKHtcbiAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSlcbiAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgdmFsdWUgKyBcInJlY3QnXVwiKS5zdHlsZShcbiAgICAgICAgICAgICdzdHJva2Utd2lkdGgnLFxuICAgICAgICAgICAgM1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdBZ2UnKSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUxXG4gICAgICAgICAgICAgICAgLnRleHQoYXR0ciArICc6ICcgKyB2YWx1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KHZhbHVlKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KCc8NScpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dChjb3VudCkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRleHRDaXJjbGUzXG4gICAgICAgICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgICAgIE51bWJlcigocGVyY2VudCAqIDEwMCkudG9GaXhlZCgxKSkgKyAnJSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQoJycpO1xuICAgICAgICAgICAgdGV4dENpcmNsZTJcbiAgICAgICAgICAgICAgLnRleHQoJ05vIFN0dWRlbnRzJylcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgdGV4dENpcmNsZTMudGV4dCgnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuXG4gICAgICAgICAgdGV4dENpcmNsZTFcbiAgICAgICAgICAgIC50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MSlcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgdGV4dENpcmNsZTIudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDIpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICB0ZXh0Q2lyY2xlMy50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MykuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyB2YWx1ZSArIFwicmVjdCddXCIpLnN0eWxlKFxuICAgICAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobnVtQXJjcyA9PSAxKSB7XG4gICAgICAgICAgICBhbGVydCgnVW5hYmxlIHRvIHByb3ZpZGUgYW55IG1vcmUgZGV0YWlsJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdTbGljZSA9IHNsaWNlICsgJywnICsgdmFsdWU7XG4gICAgICAgICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgW25ld1NsaWNlXTogSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlc1tzbGljZV0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhdHRycy5hdHRyaWJ1dGVJbmRleC5pbmRleE9mKFxuICAgICAgICAgICAgICAgIGF0dHJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIxIGluIG5ld1ZhbHVlc1tuZXdTbGljZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cjEgPT09IGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXVtcbiAgICAgICAgICAgICAgICAgICAgYXR0cjFcbiAgICAgICAgICAgICAgICAgIF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV1bdmFsdWUxXVtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICBdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWVzKTtcblxuICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9idWlsZCBhcmNzXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gc2xpY2VDb3VudCAqIGFyY0xlbmd0aDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPT0gMCkge1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlICsgYXJjTGVuZ3RoLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICcwJyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG5cbiAgICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgIHBlcmNlbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXJjQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKG51bVNsaWNlcyA9PSAxKSB0ZXh0QnVpbGRlcihzbGljZSwgMC41KTtcbiAgICAgIGVsc2UgdGV4dEJ1aWxkZXIoc2xpY2UsIHNsaWNlQ291bnQpO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cblxuICAgIC8vYnVpbGQgbGluZXMgYWZ0ZXIgc28gdGhleSBhcmUgb24gdG9wXG4gICAgZm9yIChcbiAgICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICAgIHNsaWNlQ291bnQgPCBudW1TbGljZXMgJiYgbnVtU2xpY2VzID4gMTtcbiAgICAgIHNsaWNlQ291bnQrK1xuICAgICkge1xuICAgICAgbGluZUJ1aWxkZXIoc2xpY2VDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVZhbHVlcyh2YWx1ZXMsIHNlbGVjdGVkVmFsdWUsIGF0dHIpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGlmIChhdHRyID09PSAnQWdlJylcbiAgICAgIGF0dHJzLmNlbnRlclRleHQudGV4dCgnQWdlOiAnICsgc2VsZWN0ZWRWYWx1ZSk7XG4gICAgZWxzZSBhdHRycy5jZW50ZXJUZXh0LnRleHQoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3NlbGVjdGVkVmFsdWVdXVxuICAgICAgICApO1xuICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dCgnPDUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJ05vJyk7XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICAnU3R1ZGVudHMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgICAvL2QzLnNlbGVjdChcInRleHRbaWQ9J2VsZW1lbnQuaWQud2l0aC5kb3RzJ11cIik7XG4gICAgY29uc3QgaWQgPSBzZWxlY3RlZFZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWVzKHZhbHVlKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBhdHRycy5jZW50ZXJUZXh0LnRleHQoJycpO1xuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc0NvdW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IHZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICB9XG5cbiAgcmVuZGVyQ29tcGFyZSh2YWx1ZXMpIHtcbiAgICAvL0hlbHBlciB2YWx1ZXNcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcblxuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDsgLy9taW51cyBiZWNhdXNlIG9mIGxlZ2VuZFxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodCAtIGF0dHJzLmNlbnRlclRleHRIZWlnaHQ7XG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHNiLmNvbXB1dGVDb21wYXJlRGltZW5zaW9ucyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtU2xpY2VzXG4gICAgKTsgLy9yb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZVxuICAgIGNvbnN0IGFyY0xlbmd0aCA9IDIgKiBNYXRoLlBJO1xuXG4gICAgY29uc3Qgcm93cyA9IGRpbWVuc2lvbnMucm93cztcbiAgICBjb25zdCBjb2xzID0gZGltZW5zaW9ucy5jb2xzO1xuICAgIGNvbnN0IHNpemUgPSBkaW1lbnNpb25zLnNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZVdpZHRoID0gd2lkdGggLSBjb2xzICogc2l6ZTtcbiAgICBjb25zdCB3aGl0ZXNwYWNlSGVpZ2h0ID0gaGVpZ2h0IC0gcm93cyAqIHNpemU7XG5cbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKVxuICAgICAgLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemUsXG4gICAgICBudW1BcmNzXG4gICAgKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgICBjb25zdCBpbm5lclRleHRTaXplID0gcGFyYW1zLmlubmVyVGV4dFNpemU7XG5cbiAgICAvKiBIZWxwZXIgbWV0aG9kcyAqL1xuXG4gICAgLy8gQ29udmVydGluZyBzbGljZSBuYW1lIHRvIHRleHRcbiAgICBjb25zdCBnZXRUZXh0ID0gKHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKFxuICAgICAgICAod29yZCkgPT4gd29yZCAhPT0gJ1RvdGFsJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oJ1xcclxcbicpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZExvbmdlc3RTbGljZSA9IChhcnJheSkgPT4ge1xuICAgICAgbGV0IGxvbmdlc3RXb3JkID0gJyc7XG4gICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA+IGxvbmdlc3RXb3JkLmxlbmd0aCkge1xuICAgICAgICAgIGxvbmdlc3RXb3JkID0gd29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbG9uZ2VzdFdvcmQ7XG4gICAgfTtcbiAgICBjb25zdCBsb25nZXN0U2xpY2VUZXh0TGVuZ3RoID0gZ2V0VGV4dChcbiAgICAgIGZpbmRMb25nZXN0U2xpY2UoT2JqZWN0LmtleXModmFsdWVzKSlcbiAgICApLmxlbmd0aDtcblxuICAgIC8vdGV4dCBidWlsZGVyXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoXG4gICAgICBzbGljZSxcbiAgICAgIHNsaWNlQ291bnQsXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgKSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeSA9IC1yYWRpdXM7XG5cbiAgICAgIGxldCBzaXplTXVsdGlwbGllciA9IDEuODtcbiAgICAgIGxldCBvdXRlclRleHRTaXplID0gTWF0aC5taW4oXG4gICAgICAgIChzaXplTXVsdGlwbGllciAqICgyICogcmFkaXVzKSkgL1xuICAgICAgICAgIGxvbmdlc3RTbGljZVRleHRMZW5ndGgsXG4gICAgICAgIDUwXG4gICAgICApO1xuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBvdXRlclRleHRTaXplICsgJ3B4JylcbiAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKFxuICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgIGFyYyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHNsaWNlLFxuICAgICAgYXR0cixcbiAgICAgIHZhbHVlXG4gICAgKSA9PiB7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICAgIHNiLmRpc3BsYXlWYWx1ZXModmFsdWVzLCB2YWx1ZSwgYXR0cik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgICAgc2IucmVtb3ZlVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG51bUFyY3MgPT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBwcm92aWRlIGFueSBtb3JlIGRldGFpbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoXG4gICAgICAgICAgICAgICAgYXR0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsaWNlMSBpbiBuZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2xpY2UgPSBzbGljZTEgKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgT2JqZWN0LmFzc2lnbihuZXdWYWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgIFtuZXdTbGljZV06IG5ld1ZhbHVlc1tzbGljZTFdLFxuICAgICAgICAgICAgICAgIH0pW3NsaWNlMV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXR0cjEgPT09IGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWNlXG4gICAgICAgICAgICAgICAgICAgIF1bYXR0cjFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV1bdmFsdWUxXVtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWVzKTtcblxuICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ2xlYXIgdGV4dENpcmNsZSBsaXN0c1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblxuICAgIGF0dHJzLmNlbnRlclRleHQgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cigneScsIDE1ICsgYXR0cnMuY2VudGVyVGV4dEhlaWdodCAvIDIpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLmNlbnRlclRleHRTaXplKVxuICAgICAgLnRleHQoJycpO1xuXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoc2xpY2VDb3VudCAvIGNvbHMpO1xuICAgICAgbGV0IGNvbCA9IHNsaWNlQ291bnQgJSBjb2xzO1xuXG4gICAgICBsZXQgdHJhbnNsYXRlWCA9XG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgY29sICogc2l6ZSArXG4gICAgICAgICgoY29sICsgMSkgKiB3aGl0ZXNwYWNlV2lkdGgpIC8gKGNvbHMgKyAxKTtcbiAgICAgIGxldCB0cmFuc2xhdGVZID1cbiAgICAgICAgYXR0cnMuY2VudGVyVGV4dEhlaWdodCArXG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgcm93ICogc2l6ZSArXG4gICAgICAgICgocm93ICsgMSkgKiB3aGl0ZXNwYWNlSGVpZ2h0KSAvIChyb3dzICsgMSk7XG5cbiAgICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNpemUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzaXplKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlgXG4gICAgICAgICk7XG4gICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMGVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUyID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudC5wdXNoKHRleHRDaXJjbGUxKTtcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudC5wdXNoKHRleHRDaXJjbGUyKTtcblxuICAgICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VtID09IDApIHtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSArIGFyY0xlbmd0aCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgJzAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG4gICAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgICBzdW5idXJzdEdyb3VwLFxuICAgICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG4gICAgICB0ZXh0QnVpbGRlcihzbGljZSwgLTAuNSwgc3VuYnVyc3RHcm91cCk7XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTGVnZW5kKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgIGxldCBsZWdlbmQgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWxlZ2VuZCcpXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5sZWdlbmRXaWR0aCk7XG4gICAgbGVnZW5kLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIFxuICAgIGxldCB4ID0gMjA7XG4gICAgbGV0IHkgPSAxMDtcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KCdMRUdFTkQnKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzIwcHgnKVxuICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcbiAgICAgeSArPSAyMDtcbiAgICBcbiAgICBsZXQgZmlyc3RTbGljZSA9IE9iamVjdC52YWx1ZXModmFsdWVzKVswXTtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZmlyc3RTbGljZSkge1xuICAgICAgY29uc3QgYXJyYXkgPSBPYmplY3Qua2V5cyhmaXJzdFNsaWNlW2F0dHJdKTtcbiAgICAgIGxlZ2VuZFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAudGV4dChhdHRyKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcblx0XHRcdCB5ICs9IDIwO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSk7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIHZhbHVlICsgJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeCArIDIwKVxuICAgICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgICAgLnRleHQodmFsdWUpXG4gICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTRweCcpXG4gICAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgICAgICB5ICs9IDIwO1xuICAgICAgfVxuICAgICAgeSArPSAxMDtcbiAgICBcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9jaGFydHMtY2xhc3MnO1xuaW1wb3J0IHsgU3VuYnVyc3QgfSBmcm9tICcuL3N1bmJ1cnN0LWNsYXNzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXHQvL3N1bmJ1cnN0IFxuICBsZXQgc2I7IFxuXG5cdC8vU2V0IG5vZGUgYW5kIE1haW4gdml6IFNQQSB1cHNcbiAgZGlzcGxheU5vZGVzKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUtYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlWaXo7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Tm9kZXM7XG4gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1vcGVuLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5SW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykub25jbGljayA9IGhpZGVJbmZvO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1jbG9zZS1idXR0b24nKS5vbmNsaWNrID0gaGlkZUluZm87XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Tm9kZXMoKXtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Vml6KCl7XG4gICAgICBsZXQgdGVzdCA9IGZhbHNlO1xuICAgIFx0bGV0IGFjYWRlbWljVmFsdWVzVGVzdCA9IHtcbiAgICAgICAgICAgXHQgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgICAgICAgRGVncmVlOiBbJ0JhY2hlbG9ycycsICdNYXN0ZXJzJywgJ1BoLkQuJ10sXG4gICAgICAgICAgICAgRmFjdWx0eTogWydCdXNpbmVzcyddLFxuICAgICAgICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1BhcnQtdGltZScsICdDby1vcCddXG4gICAgICAgICAgfTtcbiAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzVGVzdCA9IHsgICAgIFxuICAgICAgICAgICAgICBBZ2U6IFsnPD0xNycsICcxOC0yMCcsICcyNi0zMCcsICc1NSsnXSxcbiAgICAgICAgICAgICAgU2V4OiAgWydNYWxlJywgJ0ZlbWFsZSddLFxuICAgICAgICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogWydJbnRlcm5hdGlvbmFsJywgJ0RvbWVzdGljJ11cbiAgICAgICB9XG5cbiAgICBcdGlmIChzYil7XG4gICAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzID0gdGVzdD9kaXZlcnNpdHlWYWx1ZXNUZXN0OiBodC5kaXZlcnNpdHlWYWx1ZXMoKTtcbiAgICAgICAgIGxldCBhY2FkZW1pY1ZhbHVlcyA9IHRlc3Q/YWNhZGVtaWNWYWx1ZXNUZXN0OiBodC5hY2FkZW1pY1ZhbHVlcygpO1xuXG4gICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICAgIFx0IGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgaWYgKCF2YWxpZCl7XG4gICAgICAgIFx0XHRhbGVydCgnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgZGl2ZXJzaXR5IGF0dHJpYnV0ZScpOyAgXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBcdCBcdFx0IHNiLmluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWxlcnQoJ1BsZWFzZSB3YWl0IGZvciB0aGUgZGF0YSB0byBmaW5pc2ggbG9hZGluZycpO1xuICAgICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5SW5mbygpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG4gIFxuICBmdW5jdGlvbiBoaWRlSW5mbygpe1xuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBsZXQgaHQgPSBuZXcgQ2hhcnQoKVxuICAgICAuY29udGFpbmVyKCcjY2hhcnQnKVxuICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5pbml0aWFsWm9vbSgwLjMpXG4gICAgIC5yZW5kZXIoKVxuXG4gIG5ldyBTdW5idXJzdCgpXG4gICAgICAgICAuY29udGFpbmVyKCcjc3VuYnVyc3QnKVxuICAgICAgICAgLnN2Z1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgXHRcdFx0IC5kaXNwbGF5Tm9kZXMoZGlzcGxheU5vZGVzKVxuICAgIFx0XHQgLnNldHVwKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZWw1NTgvN2QyY2I1MjU4OTIxMTE5ZGY1ODg0Y2M5MDkwMmU4NGQvcmF3LzAwODI3YjlkNTMyODgzMzQzMTkxZjYxNDRkNDFkMGEwYmJhZDVkZjgvZmFsbC5jc3YnKVxuXHRcdFx0XHQgLnRoZW4odmFsdWUgPT4gc2IgPSB2YWx1ZSk7XG59KTtcblxuXG5cblxuXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUFBLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUN6QixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDN0I7RUFDQSxNQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztFQUMzQyxNQUFNLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDO0VBQ2xELE1BQU0sMEJBQTBCLEdBQUcsdUJBQXVCLENBQUM7QUFDM0Q7RUFDQSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7RUFDM0IsTUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztBQUNuRDtBQUNBO0FBQ0E7RUFDQSxNQUFNLFlBQVksR0FBRztFQUNyQixFQUFFLFVBQVUsRUFBRTtFQUNkLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsSUFBSSxXQUFXLEVBQUUsOENBQThDO0VBQy9ELEdBQUc7RUFDSCxFQUFFLFFBQVEsRUFBRTtFQUNaLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsSUFBSSxXQUFXLEVBQUUsMkNBQTJDO0VBQzVELEdBQUc7RUFDSCxFQUFFLE9BQU8sRUFBRTtFQUNYLElBQUksT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztFQUN0QyxJQUFJLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztFQUNwSSxHQUFHLGlCQUFpQixFQUFFLEVBQUU7RUFDeEIsSUFB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QUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3BELENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRCxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDdEQsRUFBRSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3hELEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUN0RCxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7RUFDMUQsRUFBRSxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0VBQy9ELEVBQUM7QUFDRDtFQUNBLE1BQU0sS0FBSyxHQUFHO0VBQ2QsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFF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