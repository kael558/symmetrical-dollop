(function () {
  'use strict';

  const INVISIBLE_NODE = 'INVISIBLE';
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
    Report_Node_Fill: {"red":31,"green":120,"blue":180,"alpha":1},
    Diversity_Node_Fill: {"red":51,"green":160,"blue":44,"alpha":1},
    Academic_Node_Fill: {"red":166,"green":206,"blue":227,"alpha":1},
    Uncollected_Node_Fill: {"red":128,"green":128,"blue":128,"alpha":1},
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
    [INVISIBLE_NODE] : {
      width: sizes.Large.width,
      height: sizes.Large.height,
      borderColor: colors.Transparent,
      backgroundColor: colors.Transparent,
      textColor: colors.Transparent,
      connectorLineColor: colors.Black,
      expandable: false,
      clickable: false
    },
  	[REPORT_NODE] : {
    	width: sizes.Large.width,
      height: sizes.Large.height,
      borderColor: colors.Black,
      backgroundColor: colors.Report_Node_Fill,
      textColor: colors.Black,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: true
    },
    [UNCOLLECTED_ATTRIBUTE_NODE] : {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Black,
      backgroundColor: colors.Uncollected_Node_Fill,
      textColor: colors.Black,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: false
    },
    [ACADEMIC_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Black,
      backgroundColor: colors.Academic_Node_Fill,
      textColor: colors.Black,
      connectorLineColor: colors.Black,
      expandable: true,
      clickable: true
    },
    [EDI_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      backgroundColor: colors.Diversity_Node_Fill,
      borderColor: colors.Black,
      textColor: colors.Black,
      connectorLineColor: colors.Black,
      expandable: true,
      clickable: true
    },
    [VALUE_NODE]: {
    	width: sizes.Small.width,
      height: sizes.Small.height,
      borderColor: colors.Black,
      textColor: colors.Black,
      backgroundColor: colors.White,
      expandable: false,
      clickable: true
    },
    [UNCOLLECTED_VALUE_NODE]: {
    	width: sizes.Small.width,
      height: sizes.Small.height,
      borderColor: colors.Black,
      backgroundColor: colors.Uncollected_Node_Fill,
      textColor: colors.Black,
  		connectorLineColor: colors.Uncollected_Node_Fill,
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
      node.connectorLineColor = nodeDimensions[parentNodeType].backgroundColor; 
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
        	//let invisibleID = 'invisible'+key;
        	//nodes.push(makeNode(invisibleID, [key], INVISIBLE_NODE, node.type));
          for (const link of node.collectedValues)
            nodes.push(makeNode(link, [key], VALUE_NODE, node.type));
          for (const link of node.uncollectedValues)
            nodes.push(makeNode(link, [key], UNCOLLECTED_VALUE_NODE, node.type));
      }
  	}
  };

  const nodes = [makeNode('Root', [null], INVISIBLE_NODE)];
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
        centerX: 0,
        centerY: 0,
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
      rectBuilder(20, 34, colors.Uncollected_Node_Fill);
      rectBuilder(20, 64, colors.Diversity_Node_Fill);
      rectBuilder(20, 94, colors.Academic_Node_Fill);
      textBuilder(40, 40, 'Uncollected Attributes', '15px');
      textBuilder(40, 70, 'Diversity Attributes', '15px');
   		textBuilder(40, 100, 'Academic Attributes', '15px');
    }
    
    renderSelectedAttributes(){
      	const attrs = this.getChartState();

    	   const sel = d3.select('#selected-attributes');
      	 sel.selectAll('*').remove();
      
    		 const textBuilder = (x, y, text, size) => {
            sel
              .append('text')
              .attr('x', x)
              .attr('y', y)
              .text(text)
              .style('font-size', size)
        			.style('fill', 'white')
              .attr('alignment-baseline', 'middle');
      	};
         
        let y = 10;
      	let x = 50;
        textBuilder(x-40, y, 'SELECTED CATEGORIES', '15px');
      	y+=30;
        for (const attr in attrs.academicValues){
        	if (attrs.academicValues[attr].length > 1 || (attrs.academicValues[attr].length === 1 && attrs.academicValues[attr][0] !== 'Total')){
          	textBuilder(x, y, '- ' + attr, '15px');
            y+=30;
          }
        }
        
        for (const attr in attrs.diversityValues){
        	if (attrs.diversityValues[attr].length > 0){
           textBuilder(x, y, '- ' + attr, '15px');
            y+=30;
          }
        }
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
  		attrs.centerX = calc.centerX;
  		attrs.centerY = calc.nodeMaxHeight / 2;
      
      //Define title
      d3.select('#node-div').append('text')
      			.attr('class', 'title')
      			.text('Carleton University Students Collected \& Missing Demographics Data');
      
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
  	
      // render selected attributes
      this.renderSelectedAttributes();
      
      //  Assigns the x and y position for the nodes
      const treeData = attrs.layouts.treemap(attrs.root);

      const isAttributeNode = (node) => {
        return node && node.parent && (node.parent.id === 'Convocated' || node.parent.id === 'Enrolled')
      };
      
      let parentID = null;
      let count = 2;

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
        if (isAttributeNode(d.parent)){
        	if (d.parent.id !== parentID){
          	count+=1;
          }
          parentID = d.parent.id;
          depth = count;
        } else {
         	if (d.parent){
          	depth = d.parent.depth+1; 
          }
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
        
        //set depth
        let y = depth*attrs.depth;

        // Extend node object with calculated properties
        return Object.assign(d, {
          borderColor,
          backgroundColor,
          textColor,
          width,
          height,
          description,
          depth,
          y,
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
        .on('click', (d) => { 
          
          if (isAttributeNode(d) && [...d3.event.srcElement.classList].includes('node-button-circle')) {
              return;
          }
         
            ht.onButtonClick(d);
        	})
        .on('mouseover', (d) => {
          if (d.description && (attrs.tooltipDiv.style('opacity') != 0.9 || d.description !== attrs.tooltipDiv._groups[0][0].innerHTML)) {
            attrs.tooltipDiv
              .transition()
              .duration(100)
              .style('opacity', 0.9);
            
            let lines = d.description.length / 46 + 1;
            
            attrs.tooltipDiv
              .html(d.description)
            	.style("left", (d3.event.pageX - d.data.width/2) + "px")		
              .style("top", (d3.event.pageY - 20*lines) + "px");	    
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
        selector: 'node-text',
        data: (d) => [d],
      });
      
      	nodeUpdate
              .patternify({
                  tag: 'circle',
                  selector: 'node-button-circle',
                  data: d => [d]
              })
              .on('click', d => this.onSelectAll(d) );
      
        nodeUpdate.select('.node-button-circle')
              .attr('transform', ({
                  data
              }) => `translate(0,${data.height / 2})`)
              .attr('opacity', (d) => {
                  if (isAttributeNode(d)) {
                      return 1;
                  }
                  return 0;
              })
      				.attr('r', 16)
              .attr('stroke-width', ({
                  data
              }) => data.borderWidth || attrs.strokeWidth)
              .attr('fill', (d) => {
          			const clicked = (child) => child.data.borderWidth == attrs.clickedWidth || !child.data.clickable;
          			console.log(d);
          			console.log('fill');
          			if (isAttributeNode(d)){
                  return (d.children && d.children.every(clicked)) || (d._children && d._children.every(clicked)) ? this.rgbaObjToColor(colors.White) : attrs.backgroundColor;
                } else {
                  console.log('is not attribute');
                  return attrs.backgroundColor;
                }
        			})
              .attr('stroke', ({
                  borderColor
              }) => borderColor)
      				.style("visibility", (d) => isAttributeNode(d) && d.data.clickable ? "visible" : "hidden");
      
     
      this.restyleForeignObjectElements();
      
      // Transition to the proper position for the node
      nodeUpdate
        .transition()
        .attr('opacity', 0)
        .duration(attrs.duration)
        .attr('transform',({x, y}) => `translate(${x},${y})`)
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
        .attr('transform',({parent}) => `translate(${parent.x},${parent.y})`)
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


       attrs.svg
        .selectAll('.node-text')
      	.attr('dy', '10px')
        .style('text-anchor', 'middle')
      	.style('fill', ({ textColor }) =>textColor || 'black')
        .style('font-size', '30px')
        .html(({ data }) => data.nodeId);

    }

     onSelectAll(d) {
  		 const attrs = this.getChartState();
       const clicked = (child) => child.data.borderWidth == attrs.clickedWidth || !child.data.clickable;
       const allSelected = (d.children || d._children).every(clicked);
       
       (d.children || d._children).forEach((d) => this.onButtonClick(d, !allSelected, allSelected, false, false));
       this.onButtonClick(d, true, false, true);
     }
    
    
    // Toggle children on click.
    onButtonClick(d, selectOption, compressOption, updateOption, warningOption) {
      const defaultToTrue = (bool) => typeof bool === 'undefined' ? true : bool;

      const compress = defaultToTrue(compressOption); //defaults to true
      
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
              if (deselect){
                attrs.diversityValues[parent].splice(index, 1);
              	data.borderWidth = attrs.unclickedWidth;
              }
            } else {
              if (select){
                attrs.diversityValues[parent].push(data.nodeId);
                data.borderWidth = attrs.clickedWidth;
              }
            }
          } else if (attrs.academicValues[parent]) {
            const index = attrs.academicValues[parent].indexOf(data.nodeId);
            if (index > -1) {
              if (deselect){
                attrs.academicValues[parent].splice(index, 1);
              	data.borderWidth = attrs.unclickedWidth;
                 
                if (attrs.academicValues[data.parentNodeIds[0]].length == 0) {//if empty
                  attrs.academicValues[data.parentNodeIds[0]].push('Total');
                }
              }
            } else {
              if (select){
                 if (attrs.academicValues[data.parentNodeIds[0]].length == 1 &&
                  attrs.academicValues[data.parentNodeIds[0]][0] == 'Total') {
                  //if 'Total'
                  attrs.academicValues[data.parentNodeIds[0]].pop();
                }
                
                attrs.academicValues[parent].push(data.nodeId);
                data.borderWidth = attrs.clickedWidth;

                if (warning){
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
              }
            }
        } else {
          if (data.borderWidth === attrs.unclickedWidth && select){ //unclicked
            data.borderWidth = attrs.clickedWidth;
          } else if (compress){
             data.borderWidth = attrs.unclickedWidth;
          }
        }
      }
      
      // If childrens are expanded
      if (d.children) {
        if (compress){
          if (d.id === 'Convocated') {
            const demographicNode = d.parent.children[1];
            if (demographicNode.children) {
              this.update(d);
              return;
            }
          } 

          //Collapse them
          d._children = d.children;
          d.children = null;

          if (d.id === 'Enrolled'){  
            const convocationNode = d.parent.children[0];
            if (convocationNode.data.borderWidth === attrs.unclickedWidth){
              this.onButtonClick(convocationNode, false);

            }
          }

          // Set descendants expanded property to false
          this.setExpansionFlagToChildren(d, false);
        }
      } else {
        if (d.id === 'Enrolled') {
          const convocationNode = d.parent.children[0];
          if (convocationNode.children == null) {
            this.onButtonClick(convocationNode, false);
          }
        }

        // Expand children
        d.children = d._children;
        d._children = null;
        // Set each children as expanded
  			if (d.children){
          d.children.forEach(
            ({ data }) => (data.expanded = true)
          );
        } 
      }

      // Redraw Graph
      if (update)
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
        textDistance: 25,
        outerTextSize: '25px',
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
        textCirclesCategory: [],
        textCirclesCount: [],
        textCirclesPercent: [],
        titleTextSize: '25px',
        titleTextHeight: 60,
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

      // Sorting age
      let order = {'<=17': 0,
          '18-20': 1,
          '21-25': 2,
          '26-30': 3,
          '31-35': 4,
          '36-45': 5,
          '46-55': 6,
          '55+' : 7};
      diversityValues.Age.sort((e1, e2) => (order[e1] - order[e2]));
   		
      //Sorting year
      academicValues['Academic Year'].sort((e1, e2) => (Number(e1.substring(0, 4)) - Number(e2.substring(0, 4) )));
      
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

      
      const titleBuilder = (academicValues, diversityValues) => {
        let list = [];
        
        const getAttrAsTitle = (attr) => {
           if (attr === 'Academic Year'){
             	return ' 2013-2021';
            } else if (attr === 'Degree'){
             	  return ' all degrees';
            } else if (attr === 'Faculty'){
             	  return ' all faculties';
            } else if (attr === 'Study Status'){
             	  return ' all study statuses';
            } else if (attr === 'Age'){
             	  return ' all ages';
            } else if (attr === 'Sex'){
             	  return ' all sexes';
            } else if (attr === 'Citizenship Status'){
             	  return ' all citizenship statuses';
            }
        };

        for (const attr in academicValues){
        	if (academicValues[attr].length === 1 && academicValues[attr][0] === 'Total'){
          	list.push(getAttrAsTitle(attr));
          }
        }
        
        for (const attr in diversityValues){
        	if (diversityValues[attr].length === 0){
          	list.push(getAttrAsTitle(attr));
          }
        }

        if (list.length == 0)
          return '';
        
  			if (list.length == 1)
         	return 'Students across ' + list.pop() + '.'; 
        
  			return 'Students across ' + list.slice(0, -1).join() + ' and ' + list.pop() + '.';
      };
       
      const width = d3
        .select('#sunburst')
        .node()
        .getBoundingClientRect().width - attrs.legendWidth;
      
      let title = d3
        .select('#title-text')
        .style('font-size', attrs.titleTextSize)
        .text(titleBuilder(academicValues, diversityValues));
      
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
        document.getElementById('compare-button').innerHTML = 'Compare';
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
        document.getElementById('compare-button').style.backgroundColor =  this.rgbaObjToColor(colors.Button);
        document.getElementById('compare-button').innerHTML = 'Conjoin';
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

      const container = d3
        .select('#sunburst')
        .node()
        .getBoundingClientRect();
      const containerHeight = +container.height;
      const containerWidth = +container.width;

      const height = containerHeight-attrs.titleTextHeight;
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
        .attr('width', width)
        .attr('height', height)
        .attr(
          'transform',
          `translate(${width / 2},${height/ 2  + attrs.titleTextHeight})`
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
          if (attr === 'Age')
            	attrs.textCirclesCategory[sliceCount].text('Age: ' + selectedValue);
            else
              attrs.textCirclesCategory[sliceCount].text(selectedValue);
          
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
      for (const textCircle of attrs.textCirclesCategory) {
        textCircle.text('');
      }
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
      const height = containerHeight - attrs.titleTextHeight;
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
          30
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

                attrs.history.push(values);
                sb.render(newValues);
              }
            }
          });
      };

      // Clear textCircle lists
      attrs.textCirclesCategory = [];
      attrs.textCirclesCount = [];
      attrs.textCirclesPercent = [];
  	

      let sliceCount = 0;
      for (const slice in values) {
        let row = parseInt(sliceCount / cols);
        let col = sliceCount % cols;

        let translateX =
          size / 2 +
          col * size +
          ((col + 1) * whitespaceWidth) / (cols + 1);
        let translateY =
          attrs.titleTextHeight +
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
          .attr('dy', '-0.5em')
          .style('text-anchor', 'middle')
          .style('font-size', innerTextSize)
          .text('');
        
        let textCircle2 = centerGroup
          .append('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('dy', '0.5em')
          .style('text-anchor', 'middle')
          .style('font-size', innerTextSize)
          .text('');

        let textCircle3 = centerGroup
          .append('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('dy', '1.5em')
          .style('text-anchor', 'middle')
          .style('font-size', innerTextSize)
          .text('');

        attrs.textCirclesCategory.push(textCircle1);
        attrs.textCirclesCount.push(textCircle2);
        attrs.textCirclesPercent.push(textCircle3);

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
             	console.log(diversityValues);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTlZJU0lCTEVfTk9ERSA9ICdJTlZJU0lCTEUnO1xuY29uc3QgUkVQT1JUX05PREUgPSAnUkVQT1JUJztcblxuY29uc3QgRURJX0FUVFJJQlVURV9OT0RFID0gJ0VESV9BVFRSSUJVVEUnO1xuY29uc3QgQUNBREVNSUNfQVRUUklCVVRFX05PREUgPSAnT1RIRVJfQVRUUklCVVRFJztcbmNvbnN0IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFID0gJ1VOQ09MTEVDVEVEX0FUVFJJQlVURSc7XG5cbmNvbnN0IFZBTFVFX05PREUgPSAnVkFMVUUnO1xuY29uc3QgVU5DT0xMRUNURURfVkFMVUVfTk9ERSA9ICdVTkNPTExFQ1RFRF9WQUxVRSc7XG5cblxuXG5jb25zdCBpbml0aWFsTm9kZXMgPSB7XG4gIENvbnZvY2F0ZWQ6IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBudW1iZXIgb2Ygc3R1ZGVudHMgdGhhdCBoYXZlIGNvbnZvY2F0ZWQuJ1xuICB9LFxuICBFbnJvbGxlZDoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGFyZSBlbnJvbGxlZC4nXG4gIH0sXG4gIEZhY3VsdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0ZWQnLCdFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydTVEVNJywgJ05vbi1TVEVNJywgJ0VuZ2luZWVyaW5nICYgRGVzaWduJywgJ1NjaWVuY2UnLCAnUHVibGljIEFmZmFpcnMnLCAnQnVzaW5lc3MnLCAnQXJ0cyAmIFNvY2lhbCBTY2llbmNlcyddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0RlcGFydG1lbnQgYW5kIGZhY3VsdHkgYXJlIG1hcHBlZCBmcm9tIHN0dWRlbnQgZGVncmVlIGFuZCBtYWpvciBvciBtYWpvcnMuJ1xuICB9LFxuICAnQWNhZGVtaWMgWWVhcic6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0ZWQnLCdFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWycyMDEzLzE0JyxcbiAgICAgICcyMDE0LzE1JyxcbiAgICAgICcyMDE1LzE2JyxcbiAgICAgICcyMDE2LzE3JyxcbiAgICAgICcyMDE3LzE4JyxcbiAgICAgICcyMDE4LzE5JyxcbiAgICAgICcyMDE5LzIwJyxcbiAgICAgICcyMDIwLzIxJyxdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0FjYWRlbWljIFllYXIgaXMgbWFkZSB1cCBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsLCBXaW50ZXIpLidcbiAgfSxcbiAgRGVncmVlOiB7XG4gICAgcGFyZW50czogWydDb252b2NhdGVkJywnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnQmFjaGVsb3JzJyxcbiAgICAgICdNYXN0ZXJzJyxcbiAgICAgICdQaC5ELiddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0xldmVsIG9mIHN0dWR5IG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydQYXJ0LXRpbWUnLFxuICAgICAgJ0Z1bGwtdGltZScsXG4gICAgICAnQ28tb3AnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdBIGZ1bGwtdGltZSBzdHVkZW50IGlzIGVucm9sbGVkIGluIDMgb3IgbW9yZSBjcmVkaXRzIGFjcm9zcyB0aGUgRmFsbCBhbmQgV2ludGVyIHRlcm1zIHdoZXJlYXMgYSBwYXJ0LXRpbWUgc3R1ZGVudCBpcyBlbnJvbGxlZCBpbiBsZXNzLidcbiAgfSxcbiAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0RvbWVzdGljJyxcbiAgICAgICdJbnRlcm5hdGlvbmFsJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1N0dWRlbnRzIGFyZSBjYXRlZ29yaXplZCBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgYXJlIGNoYXJnZWQgZG9tZXN0aWMgb3IgaW50ZXJuYXRpb25hbCBmZWVzLidcbiAgfSxcbiAgQWdlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogW1xuICAgICAgJzw9MTcnLFxuICAgICAgJzE4LTIwJyxcbiAgICAgICcyMS0yNScsXG4gICAgICAnMjYtMzAnLFxuICAgICAgJzMxLTM1JyxcbiAgICAgICczNi00NScsXG4gICAgICAnNDYtNTUnLFxuICAgICAgJzU1KycsXG4gICAgXSxcbiAgICB1bmNvbGxlY3RlZFZhbHVlczogWyc1NS01OScsJzYwLTY0JywnNjUtNjknLCAnNzAtNzQnLCAnNzUtNzknLCAnODArJ10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGFnZSByYW5nZXMgb2Ygc3R1ZGVudHMuJ1xuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0ZWQnLCdFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydGZW1hbGUnLCAnTWFsZSddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ05vbi1iaW5hcnknXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIG1pc2xhYmVsZWQgYnkgdGhlIHVuaXZlcnNpdHkuIFRoZSBjb3JyZWN0IGxhYmVsIHNob3VsZCBiZSBcXCdHZW5kZXJcXCcgYW5kIGFsbCBnZW5kZXJzIHNob3VsZCBiZSBjb2xsZWN0ZWQuJ1xuXHR9LFxuICBSYWNlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSByYWNlIG9mIGEgc3R1ZGVudC4nXG5cdH0sXG4gICdSZWxpZ2lvbi9TcGlyaXR1YWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSByZWxpZ2lvbi9zcGlyaXR1YWxpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ1JlZ2lvbmFsIElkZW50aXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgcmVnaW9uYWwgaWRlbnRpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0Rpcy9hYmlsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgZGlzL2FiaWxpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgSW5kaWdlbmVpdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydGaXJzdCBOYXRpb25zJywgJ01ldGlzJywgJ0ludWl0J10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGluZGlnZW5laXR5IG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdGaXJzdCBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGZpcnN0IGxhbmd1YWdlIG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdPdGhlciBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIG90aGVyIGxhbmd1YWdlIG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdFdGhuaWNpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSBldGhuaWNpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ05hdGlvbic6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIG5hdGlvbiBvZiBvcmlnaW4gb2YgYSBzdHVkZW50LidcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgUmVwb3J0X05vZGVfRmlsbDoge1wicmVkXCI6MzEsXCJncmVlblwiOjEyMCxcImJsdWVcIjoxODAsXCJhbHBoYVwiOjF9LFxuICBEaXZlcnNpdHlfTm9kZV9GaWxsOiB7XCJyZWRcIjo1MSxcImdyZWVuXCI6MTYwLFwiYmx1ZVwiOjQ0LFwiYWxwaGFcIjoxfSxcbiAgQWNhZGVtaWNfTm9kZV9GaWxsOiB7XCJyZWRcIjoxNjYsXCJncmVlblwiOjIwNixcImJsdWVcIjoyMjcsXCJhbHBoYVwiOjF9LFxuICBVbmNvbGxlY3RlZF9Ob2RlX0ZpbGw6IHtcInJlZFwiOjEyOCxcImdyZWVuXCI6MTI4LFwiYmx1ZVwiOjEyOCxcImFscGhhXCI6MX0sXG4gIFRyYW5zcGFyZW50OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjB9LFxuICBXaGl0ZToge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjoxfSxcbiAgQmx1ZToge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbGFjazoge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjowLFwiYWxwaGFcIjoxfSxcbiAgR3JleToge1wicmVkXCI6MTQxLFwiZ3JlZW5cIjoxNjAsXCJibHVlXCI6MjAzLFwiYWxwaGFcIjoxfSxcblx0R3JlZW46IHtcInJlZFwiOjEwMixcImdyZWVuXCI6MTk0LFwiYmx1ZVwiOjE2NSxcImFscGhhXCI6MX0sXG4gIE9yYW5nZToge1wicmVkXCI6MjUyLFwiZ3JlZW5cIjoxNDEsXCJibHVlXCI6OTgsXCJhbHBoYVwiOiAxfSxcbiAgU2xhdGVfR3JleSA6IHtcInJlZFwiOjYxLFwiZ3JlZW5cIjo3MixcImJsdWVcIjo3MyxcImFscGhhXCI6MX0sXG4gIEJ1dHRvbjoge1wicmVkXCI6MTAwLFwiZ3JlZW5cIjoxMDAsXCJibHVlXCI6MTAwLFwiYWxwaGFcIjoxfSxcbiAgRGlzYWJsZWQ6IHtcInJlZFwiOjEwMCxcImdyZWVuXCI6MTAwLFwiYmx1ZVwiOjEwMCxcImFscGhhXCI6MC4yfSxcbiAgRGlzYWJsZWRfVGV4dDoge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjowLjJ9LFxufVxuXG5jb25zdCBzaXplcyA9IHtcblx0TGFyZ2U6IHt3aWR0aDogMjcwLCBoZWlnaHQ6IDcwfSxcbiAgTWVkaXVtOiB7d2lkdGg6IDI4MCwgaGVpZ2h0OiA3MH0sXG5cdFNtYWxsOiB7d2lkdGg6IDMzMCwgaGVpZ2h0OiA3MH1cbn1cblxuY29uc3QgYm9yZGVyV2lkdGggPSA1XG5jb25zdCBib3JkZXJSYWRpdXMgPSA1XG5jb25zdCBjb25uZWN0b3JMaW5lV2lkdGggPSA1XG5cbmNvbnN0IG5vZGVEaW1lbnNpb25zID0ge1xuICBbSU5WSVNJQkxFX05PREVdIDoge1xuICAgIHdpZHRoOiBzaXplcy5MYXJnZS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLkxhcmdlLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIHRleHRDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcblx0W1JFUE9SVF9OT0RFXSA6IHtcbiAgXHR3aWR0aDogc2l6ZXMuTGFyZ2Uud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5MYXJnZS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5SZXBvcnRfTm9kZV9GaWxsLFxuICAgIHRleHRDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLlRyYW5zcGFyZW50LFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIFtVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERV0gOiB7XG4gICAgd2lkdGg6IHNpemVzLk1lZGl1bS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLk1lZGl1bS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgdGV4dENvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IGZhbHNlXG4gIH0sXG4gIFtBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERV06IHtcbiAgICB3aWR0aDogc2l6ZXMuTWVkaXVtLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTWVkaXVtLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICB0ZXh0Q29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbRURJX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICB0ZXh0Q29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICB0ZXh0Q29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1VOQ09MTEVDVEVEX1ZBTFVFX05PREVdOiB7XG4gIFx0d2lkdGg6IHNpemVzLlNtYWxsLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuU21hbGwuaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgIHRleHRDb2xvcjogY29sb3JzLkJsYWNrLFxuXHRcdGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBjbGlja2FibGU6IGZhbHNlXG4gIH1cbn1cblxuY29uc3QgbWFrZU5vZGUgPSAobm9kZUlkLCBwYXJlbnROb2RlSWRzLCBub2RlVHlwZSwgcGFyZW50Tm9kZVR5cGUpID0+IHtcblx0bGV0IG5vZGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vZGVEaW1lbnNpb25zW25vZGVUeXBlXSkpO1xuICBub2RlLm5vZGVJZCA9IG5vZGVJZDtcbiAgbm9kZS5wYXJlbnROb2RlSWRzID0gcGFyZW50Tm9kZUlkcztcblx0bm9kZS5leHBhbmRlZCA9IGZhbHNlO1xuICBub2RlLmJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGg7XG4gIG5vZGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzO1xuICBub2RlLmNvbm5lY3RvckxpbmVXaWR0aCA9IGNvbm5lY3RvckxpbmVXaWR0aDtcbiBcdGlmIChpbml0aWFsTm9kZXNbbm9kZUlkXSlcbiAgICBcdG5vZGUuZGVzY3JpcHRpb24gPSBcIlwiIHx8IGluaXRpYWxOb2Rlc1tub2RlSWRdLmRlc2NyaXB0aW9uO1xuICBcbiAgaWYgKG5vZGVUeXBlID09IFZBTFVFX05PREUpe1xuICAgIG5vZGUuYmFja2dyb3VuZENvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJhY2tncm91bmRDb2xvcjsgXG4gIFx0Ly9ub2RlLmJvcmRlckNvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJvcmRlckNvbG9yOyBcbiAgICBub2RlLmNvbm5lY3RvckxpbmVDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5iYWNrZ3JvdW5kQ29sb3I7IFxuICAgIGlmIChub2RlSWQgPT09ICdTVEVNJyl7XG4gICAgXHRub2RlLmRlc2NyaXB0aW9uID0gJ0FnZ3JlZ2F0aW9uIG9mIGZhY3VsdHkgb2YgU2NpZW5jZSwgRW5naW5lZXJpbmcgJiBEZXNpZ24gYW5kIE1hdGhlbWF0aWNzJ1xuICAgIH0gZWxzZSBpZiAobm9kZUlkID09PSAnTm9uLVNURU0nKXtcbiAgICAgIG5vZGUuZGVzY3JpcHRpb24gPSAnQWdncmVnYXRpb24gb2YgYWxsIG5vbi1TVEVNIGZhY3VsdGllcydcbiAgICB9IFxuICB9IGVsc2UgaWYgKG5vZGVUeXBlID09PSBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFKXtcbiAgIFx0bm9kZS5ib3JkZXJDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgIFxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5jb25zdCBwb3B1bGF0ZU5vZGVzID0gKG5vZGVzLCBpbml0aWFsTm9kZXMpID0+IHtcblx0Zm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbE5vZGVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IGluaXRpYWxOb2Rlc1trZXldO1xuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gUkVQT1JUX05PREUpe1xuICAgIFx0XHRub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgWydSb290J10sIFJFUE9SVF9OT0RFKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShrZXksIG5vZGUucGFyZW50cywgbm9kZS50eXBlKSk7IC8vbGluayB0byBmaXJzdCBwYXJlbnRcbiAgICAgIFx0Ly9sZXQgaW52aXNpYmxlSUQgPSAnaW52aXNpYmxlJytrZXk7XG4gICAgICBcdC8vbm9kZXMucHVzaChtYWtlTm9kZShpbnZpc2libGVJRCwgW2tleV0sIElOVklTSUJMRV9OT0RFLCBub2RlLnR5cGUpKTtcbiAgICAgICAgZm9yIChjb25zdCBsaW5rIG9mIG5vZGUuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS51bmNvbGxlY3RlZFZhbHVlcylcbiAgICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGxpbmssIFtrZXldLCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFLCBub2RlLnR5cGUpKTtcbiAgICB9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IG5vZGVzID0gW21ha2VOb2RlKCdSb290JywgW251bGxdLCBJTlZJU0lCTEVfTk9ERSldO1xucG9wdWxhdGVOb2Rlcyhub2RlcywgaW5pdGlhbE5vZGVzKTtcblxuXG5cblxuXG4iLCJpbXBvcnQgeyBub2RlcywgY29sb3JzIH0gZnJvbSAnLi9ub2Rlcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEV4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogODAwLFxuICAgICAgc3ZnSGVpZ2h0OiA2MDAsXG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRlZmF1bHRUZXh0RmlsbDogJyMyQzNFNTAnLFxuICAgICAgbm9kZVRleHRGaWxsOiAnd2hpdGUnLFxuICAgICAgZGVmYXVsdEZvbnQ6ICdIZWx2ZXRpY2EnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSxcbiAgICAgIGRhdGE6IG5vZGVzLFxuICAgICAgbm9kZXM6IG51bGwsXG4gICAgICBjb25uZWN0b3JMZXZlbHM6IDIsXG4gICAgICBkZXB0aDogMTgwLFxuICAgICAgZHVyYXRpb246IDYwMCxcbiAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgaW5pdGlhbFpvb206IDEsXG4gICAgICBhY2FkZW1pY1ZhbHVlczoge1xuICAgICAgICAnQWNhZGVtaWMgWWVhcic6IFsnVG90YWwnXSxcbiAgICAgICAgRGVncmVlOiBbJ1RvdGFsJ10sXG4gICAgICAgIEZhY3VsdHk6IFsnVG90YWwnXSxcbiAgICAgICAgJ1N0dWR5IFN0YXR1cyc6IFsnVG90YWwnXSxcbiAgICAgIH0sXG4gICAgICBkaXZlcnNpdHlWYWx1ZXM6IHtcbiAgICAgICAgQWdlOiBbXSxcbiAgICAgICAgU2V4OiBbXSxcbiAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFtdLFxuICAgICAgfSxcbiAgICAgIG9uTm9kZUNsaWNrOiBudWxsLFxuICAgICAgdG9vbHRpcERpdjogbnVsbCxcbiAgICAgIG51bUV4cGFuZGVkOiAwLFxuICAgICAgdW5jbGlja2VkV2lkdGg6IDUsXG4gICAgICBjbGlja2VkV2lkdGg6IDE1LFxuICAgICAgY2VudGVyWDogMCxcbiAgICAgIGNlbnRlclk6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy8gRHluYW1pY2FsbHkgc2V0IGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgQ2hhcnQgY2xhc3NcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gICAgXG5cblx0XHR0aGlzLnJlbmRlckxlZ2VuZCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUVudGVyRXhpdFVwZGF0ZVBhdHRlcm4oKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCkge1xuICAgIGQzLnNlbGVjdGlvbi5wcm90b3R5cGUucGF0dGVybmlmeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzO1xuICAgICAgdmFyIHNlbGVjdG9yID0gcGFyYW1zLnNlbGVjdG9yO1xuICAgICAgdmFyIGVsZW1lbnRUYWcgPSBwYXJhbXMudGFnO1xuICAgICAgdmFyIGRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbc2VsZWN0b3JdO1xuXG4gICAgICAvLyBQYXR0ZXJuIGluIGFjdGlvblxuICAgICAgdmFyIHNlbGVjdGlvbiA9IGNvbnRhaW5lclxuICAgICAgICAuc2VsZWN0QWxsKCcuJyArIHNlbGVjdG9yKVxuICAgICAgICAuZGF0YShkYXRhLCAoZCwgaSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChkLmlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSk7XG4gICAgICBzZWxlY3Rpb24uZXhpdCgpLnJlbW92ZSgpO1xuICAgICAgc2VsZWN0aW9uID0gc2VsZWN0aW9uXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoZWxlbWVudFRhZylcbiAgICAgICAgLm1lcmdlKHNlbGVjdGlvbik7XG4gICAgICBzZWxlY3Rpb24uYXR0cignY2xhc3MnLCBzZWxlY3Rvcik7XG4gICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH07XG4gIH1cblxuICByZW5kZXJMZWdlbmQoKXtcbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgY29uc3QgbGVnZW5kID0gZDMuc2VsZWN0KCcjbm9kZS1sZWdlbmQnKTtcbiAgICBjb25zdCB3aWR0aCA9IDEyLCBoZWlnaHQgPSAxMjtcbiAgICBjb25zdCByZWN0QnVpbGRlciA9ICh4LCB5LCBjb2xvcikgPT4ge1xuICAgIFx0ICBsZWdlbmQgXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3IpKVxuICAgICAgXHRcdC5zdHlsZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHgsIHksIHRleHQsIHNpemUpID0+IHtcbiAgICAgICAgICBsZWdlbmRcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc2l6ZSlcbiAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB0ZXh0QnVpbGRlcig2MCwgMTAsICdMRUdFTkQnLCAnMjBweCcpO1xuICAgIHJlY3RCdWlsZGVyKDIwLCAzNCwgY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDY0LCBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDk0LCBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNDAsICdVbmNvbGxlY3RlZCBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNzAsICdEaXZlcnNpdHkgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gXHRcdHRleHRCdWlsZGVyKDQwLCAxMDAsICdBY2FkZW1pYyBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgfVxuICBcbiAgcmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKCl7XG4gICAgXHRjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gIFx0ICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KCcjc2VsZWN0ZWQtYXR0cmlidXRlcycpO1xuICAgIFx0IHNlbC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICBcbiAgXHRcdCBjb25zdCB0ZXh0QnVpbGRlciA9ICh4LCB5LCB0ZXh0LCBzaXplKSA9PiB7XG4gICAgICAgICAgc2VsXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAgIC50ZXh0KHRleHQpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHNpemUpXG4gICAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcdH1cbiAgICAgICBcbiAgICAgIGxldCB5ID0gMTA7XG4gICAgXHRsZXQgeCA9IDUwO1xuICAgICAgdGV4dEJ1aWxkZXIoeC00MCwgeSwgJ1NFTEVDVEVEIENBVEVHT1JJRVMnLCAnMTVweCcpO1xuICAgIFx0eSs9MzA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuYWNhZGVtaWNWYWx1ZXMpe1xuICAgICAgXHRpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMSB8fCAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAxICYmIGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdWzBdICE9PSAnVG90YWwnKSl7XG4gICAgICAgIFx0dGV4dEJ1aWxkZXIoeCwgeSwgJy0gJyArIGF0dHIsICcxNXB4Jyk7XG4gICAgICAgICAgeSs9MzA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICBcdGlmIChhdHRycy5kaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICB0ZXh0QnVpbGRlcih4LCB5LCAnLSAnICsgYXR0ciwgJzE1cHgnKTtcbiAgICAgICAgICB5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLy8gVGhpcyBtZXRob2QgcmV0cmlldmVzIHBhc3NlZCBub2RlJ3MgY2hpbGRyZW4gSUQncyAoaW5jbHVkaW5nIG5vZGUpXG4gIGdldE5vZGVDaGlsZHJlbklkcyhcbiAgICB7IGRhdGEsIGNoaWxkcmVuLCBfY2hpbGRyZW4gfSxcbiAgICBub2RlSWRzU3RvcmVcbiAgKSB7XG4gICAgLy8gU3RvcmUgY3VycmVudCBub2RlIElEXG4gICAgbm9kZUlkc1N0b3JlLnB1c2goZGF0YS5ub2RlSWQpO1xuXG4gICAgLy8gTG9vcCBvdmVyIGNoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoZXhwYW5kZWQgbm9kZXMpXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgX2NoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoY29sbGFwc2VkIG5vZGVzKVxuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIG5vZGVJZHNTdG9yZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRab29tRmFjdG9yIEFQSSwgaXQgem9vbXMgdG8gcGFydGljdWxhdCBzY2FsZVxuICBzZXRab29tRmFjdG9yKHpvb21MZXZlbCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2FsYyA9IGF0dHJzLmNhbGM7XG5cbiAgICAvLyBTdG9yZSBwYXNzZWQgem9vbSBsZXZlbFxuICAgIGF0dHJzLmluaXRpYWxab29tID0gem9vbUxldmVsO1xuXG4gICAgLy8gUmVzY2FsZSBjb250YWluZXIgZWxlbWVudCBhY2NvcmRpbmdseVxuICAgIGF0dHJzLmNlbnRlckcuYXR0cihcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgYCB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCAke1xuICAgICAgICBjYWxjLm5vZGVNYXhIZWlnaHQgLyAyXG4gICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvL0lubmVyRnVuY3Rpb25zIHdoaWNoIHdpbGwgdXBkYXRlIHZpc3VhbHNcblxuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgdGhpc09ialJlZiA9IHRoaXM7XG5cbiAgICAvL0RyYXdpbmcgY29udGFpbmVyc1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXJcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoY29udGFpbmVyUmVjdC53aWR0aCA+IDApXG4gICAgICBhdHRycy5zdmdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG5cblxuICAgIC8vQ2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgY29uc3QgY2FsYyA9IHtcbiAgICAgIGlkOiBudWxsLFxuICAgICAgY2hhcnRUb3BNYXJnaW46IG51bGwsXG4gICAgICBjaGFydExlZnRNYXJnaW46IG51bGwsXG4gICAgICBjaGFydFdpZHRoOiBudWxsLFxuICAgICAgY2hhcnRIZWlnaHQ6IG51bGwsXG4gICAgfTtcbiAgICBjYWxjLmlkID0gYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gOyAvLyBpZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgY2FsYy5jaGFydExlZnRNYXJnaW4gPSBhdHRycy5tYXJnaW5MZWZ0O1xuICAgIGNhbGMuY2hhcnRUb3BNYXJnaW4gPSBhdHRycy5tYXJnaW5Ub3AgKyA1MDtcbiAgICBjYWxjLmNoYXJ0V2lkdGggPVxuICAgICAgYXR0cnMuc3ZnV2lkdGggLVxuICAgICAgYXR0cnMubWFyZ2luUmlnaHQgLVxuICAgICAgY2FsYy5jaGFydExlZnRNYXJnaW47XG4gICAgY2FsYy5jaGFydEhlaWdodCA9XG4gICAgICBhdHRycy5zdmdIZWlnaHQgLVxuICAgICAgYXR0cnMubWFyZ2luQm90dG9tIC1cbiAgICAgIGNhbGMuY2hhcnRUb3BNYXJnaW47XG4gICAgYXR0cnMuY2FsYyA9IGNhbGM7XG5cbiAgICAvLyBHZXQgbWF4aW11bSBub2RlIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBjYWxjLm5vZGVNYXhXaWR0aCA9IGQzLm1heChcbiAgICAgIGF0dHJzLmRhdGEsXG4gICAgICAoeyB3aWR0aCB9KSA9PiB3aWR0aFxuICAgICk7XG4gICAgY2FsYy5ub2RlTWF4SGVpZ2h0ID0gZDMubWF4KFxuICAgICAgYXR0cnMuZGF0YSxcbiAgICAgICh7IGhlaWdodCB9KSA9PiBoZWlnaHRcbiAgICApO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG1heCBub2RlIGRlcHRoIChpdCdzIG5lZWRlZCBmb3IgbGF5b3V0IGhlaWdodHMgY2FsY3VsYXRpb24pXG4gICAgYXR0cnMuZGVwdGggPSBjYWxjLm5vZGVNYXhIZWlnaHQgKyAxMDA7XG4gICAgY2FsYy5jZW50ZXJYID0gY2FsYy5jaGFydFdpZHRoIC8gMiAtIDgwO1xuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKiAgTEFZT1VUUyAgKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBjb25zdCBsYXlvdXRzID0ge1xuICAgICAgdHJlZW1hcDogbnVsbCxcbiAgICB9O1xuICAgIGF0dHJzLmxheW91dHMgPSBsYXlvdXRzO1xuXG4gICAgLy8gR2VuZXJhdGUgdHJlZSBsYXlvdXQgZnVuY3Rpb25cbiAgICBsYXlvdXRzLnRyZWVtYXAgPSBkM1xuICAgICAgLnRyZWUoKVxuICAgICAgLnNlcGFyYXRpb24oZnVuY3Rpb24oYSwgYikgeyBcbiAgICAgIFxuICAgICAgXHRpZiAoYS5wYXJlbnQuaWQgPT09IGIucGFyZW50LmlkKXtcbiAgICAgICAgICBpZiAoYS5kYXRhLndpZHRoID09PSAyODApeyAvL2F0dHJpYnV0ZVxuICAgICAgICAgIFx0cmV0dXJuIDAuOTsgXG4gICAgICAgICAgfSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgXHRyZXR1cm4gMS4yOyBcbiAgICAgICAgfVxuICAgICAgXHRyZXR1cm4gMTtcbiAgICBcdH0pXG4gICAgICAuc2l6ZShbY2FsYy5jaGFydFdpZHRoLCBjYWxjLmNoYXJ0SGVpZ2h0XSlcbiAgICAgIC5ub2RlU2l6ZShbXG4gICAgICAgIGNhbGMubm9kZU1heFdpZHRoKzEwLFxuICAgICAgICBjYWxjLm5vZGVNYXhIZWlnaHQgKyBhdHRycy5kZXB0aCxcbiAgICAgIF0pO1xuXG5cbiAgICBcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqIEJFSEFWSU9SUyAuICoqKioqKioqKioqKioqKioqKioqKipcbiAgICBjb25zdCBiZWhhdmlvcnMgPSB7XG4gICAgICB6b29tOiBudWxsLFxuICAgIH07XG5cbiAgICAvLyBHZXQgem9vbWluZyBmdW5jdGlvblxuICAgIGJlaGF2aW9ycy56b29tID0gZDNcbiAgICAgIC56b29tKClcbiAgICAgIC5vbignem9vbScsIChkKSA9PiB0aGlzLnpvb21lZChkKSk7XG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKiBST09UIG5vZGUgd29yayAqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vIENvbnZlcnQgZmxhdCBkYXRhIHRvIGhpZXJhcmNoaWNhbFxuICAgIGF0dHJzLnJvb3QgPSBkM1xuICAgICAgLnN0cmF0aWZ5KClcbiAgICAgIC5pZCgoeyBub2RlSWQgfSkgPT4gbm9kZUlkKVxuICAgICAgLnBhcmVudElkKCh7IHBhcmVudE5vZGVJZHMgfSkgPT4gcGFyZW50Tm9kZUlkc1swXSkoXG4gICAgICBhdHRycy5kYXRhXG4gICAgKTtcblxuICAgIC8vIFNldCBjaGlsZCBub2RlcyBlbnRlciBhcHBlYXJhbmNlIHBvc2l0aW9uc1xuICAgIGF0dHJzLnJvb3QueDAgPSAwO1xuICAgIGF0dHJzLnJvb3QueTAgPSAwO1xuXG4gICAgLyoqIEdldCBhbGwgbm9kZXMgYXMgYXJyYXkgKHdpdGggZXh0ZW5kZWQgcGFyZW50ICYgY2hpbGRyZW4gcHJvcGVydGllcyBzZXQpXG4gICAgICAgICAgVGhpcyB3YXkgd2UgY2FuIGFjY2VzcyBhbnkgbm9kZSdzIHBhcmVudCBkaXJlY3RseSB1c2luZyBub2RlLnBhcmVudCAtIHByZXR0eSBjb29sLCBodWg/XG4gICAgICAqL1xuICAgIGF0dHJzLmFsbE5vZGVzID0gYXR0cnMubGF5b3V0c1xuICAgICAgLnRyZWVtYXAoYXR0cnMucm9vdClcbiAgICAgIC5kZXNjZW5kYW50cygpO1xuXG4gICAgLy8gQ29sbGFwc2UgYWxsIGNoaWxkcmVuIGF0IGZpcnN0XG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgIC8vIFRoZW4gZXhwYW5kIHNvbWUgbm9kZXMsIHdoaWNoIGhhdmUgYGV4cGFuZGVkYCBwcm9wZXJ0eSBzZXRcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+XG4gICAgICB0aGlzLmV4cGFuZFNvbWVOb2RlcyhkKVxuICAgICk7XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqICBEUkFXSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy9BZGQgc3ZnXG4gICAgY29uc3Qgc3ZnID0gY29udGFpbmVyXG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ3N2ZycsXG4gICAgICAgIHNlbGVjdG9yOiAnc3ZnLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgYXR0cnMuc3ZnV2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgYXR0cnMuc3ZnSGVpZ2h0KVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgYXR0cnMuZGVmYXVsdEZvbnQpXG4gICAgICAuY2FsbChiZWhhdmlvcnMuem9vbSlcbiAgICAgIC5hdHRyKCdjdXJzb3InLCAnbW92ZScpXG4gICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgIGF0dHJzLnN2ZyA9IHN2ZztcblxuICAgIC8vQWRkIGNvbnRhaW5lciBnIGVsZW1lbnRcbiAgICBjb25zdCBjaGFydCA9IHN2Z1xuICAgICAgLnBhdHRlcm5pZnkoe1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdjaGFydCcsXG4gICAgICB9KVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlKCR7Y2FsYy5jaGFydExlZnRNYXJnaW59LCR7Y2FsYy5jaGFydFRvcE1hcmdpbn0pYFxuICAgICAgKTtcblxuICAgIC8vIEFkZCBvbmUgbW9yZSBjb250YWluZXIgZyBlbGVtZW50LCBmb3IgYmV0dGVyIHBvc2l0aW9uaW5nIGNvbnRyb2xzXG4gICAgYXR0cnMuY2VudGVyRyA9IGNoYXJ0XG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBzZWxlY3RvcjogJ2NlbnRlci1ncm91cCcsXG4gICAgICB9KVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlKCR7Y2FsYy5jZW50ZXJYfSwke1xuICAgICAgICAgIGNhbGMubm9kZU1heEhlaWdodCAvIDJcbiAgICAgICAgfSkgc2NhbGUoJHthdHRycy5pbml0aWFsWm9vbX0pYFxuICAgICAgKTtcblxuICAgIGF0dHJzLmNoYXJ0ID0gY2hhcnQ7XG5cdFx0YXR0cnMuY2VudGVyWCA9IGNhbGMuY2VudGVyWDtcblx0XHRhdHRycy5jZW50ZXJZID0gY2FsYy5ub2RlTWF4SGVpZ2h0IC8gMjtcbiAgICBcbiAgICAvL0RlZmluZSB0aXRsZVxuICAgIGQzLnNlbGVjdCgnI25vZGUtZGl2JykuYXBwZW5kKCd0ZXh0JylcbiAgICBcdFx0XHQuYXR0cignY2xhc3MnLCAndGl0bGUnKVxuICAgIFx0XHRcdC50ZXh0KCdDYXJsZXRvbiBVbml2ZXJzaXR5IFN0dWRlbnRzIENvbGxlY3RlZCBcXCYgTWlzc2luZyBEZW1vZ3JhcGhpY3MgRGF0YScpO1xuICAgIFxuICAgIC8vRGVmaW5lIGRpdiBmb3IgdG9vbHRpcFxuICAgIGF0dHJzLnRvb2x0aXBEaXYgPSBkMy5zZWxlY3QoJyNub2RlLWRpdicpXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMCk7XG4gICAgXG4gICAgLy8gRGlzcGxheSB0cmVlIGNvbnRlbnJzXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGJhc2ljYWxseSByZWRyYXdzIHZpc2libGUgZ3JhcGgsIGJhc2VkIG9uIG5vZGVzIHN0YXRlXG4gIHVwZGF0ZSh7IHgwLCB5MCwgeCwgeSB9KSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBjYWxjID0gYXR0cnMuY2FsYztcblx0XG4gICAgLy8gcmVuZGVyIHNlbGVjdGVkIGF0dHJpYnV0ZXNcbiAgICB0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgXG4gICAgLy8gIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICAgIGNvbnN0IHRyZWVEYXRhID0gYXR0cnMubGF5b3V0cy50cmVlbWFwKGF0dHJzLnJvb3QpO1xuXG4gICAgY29uc3QgaXNBdHRyaWJ1dGVOb2RlID0gKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlICYmIG5vZGUucGFyZW50ICYmIChub2RlLnBhcmVudC5pZCA9PT0gJ0NvbnZvY2F0ZWQnIHx8IG5vZGUucGFyZW50LmlkID09PSAnRW5yb2xsZWQnKVxuICAgIH1cbiAgICBcbiAgICBsZXQgcGFyZW50SUQgPSBudWxsO1xuICAgIGxldCBjb3VudCA9IDI7XG5cbiAgICAvLyBHZXQgdHJlZSBub2RlcyBhbmQgbGlua3MgYW5kIGF0dGFjaCBzb21lIHByb3BlcnRpZXNcbiAgICBjb25zdCBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkubWFwKChkKSA9PiB7XG4gICAgICAvLyBJZiBhdCBsZWFzdCBvbmUgcHJvcGVydHkgaXMgYWxyZWFkeSBzZXQsIHRoZW4gd2UgZG9uJ3Qgd2FudCB0byByZXNldCBvdGhlciBwcm9wZXJ0aWVzXG5cbiAgICAgIC8vIERlY2xhcmUgcHJvcGVydGllcyB3aXRoIGRlZmZhdWx0IHZhbHVlc1xuICAgICAgbGV0IGJvcmRlckNvbG9yID0gJ3N0ZWVsYmx1ZSc7XG4gICAgICBsZXQgYmFja2dyb3VuZENvbG9yID0gJ3N0ZWVsYmx1ZSc7XG4gICAgICBsZXQgdGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICAgIGxldCB3aWR0aCA9IGQuZGF0YS53aWR0aDtcbiAgICAgIGxldCBoZWlnaHQgPSBkLmRhdGEuaGVpZ2h0O1xuXHRcdFx0bGV0IGRlc2NyaXB0aW9uID0gJycgfHwgZC5kYXRhLmRlc2NyaXB0aW9uO1xuXG4gICAgICBsZXQgZGVwdGggPSBkLmRlcHRoO1xuICAgICAgaWYgKGlzQXR0cmlidXRlTm9kZShkLnBhcmVudCkpe1xuICAgICAgXHRpZiAoZC5wYXJlbnQuaWQgIT09IHBhcmVudElEKXtcbiAgICAgICAgXHRjb3VudCs9MTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnRJRCA9IGQucGFyZW50LmlkO1xuICAgICAgICBkZXB0aCA9IGNvdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICBcdGlmIChkLnBhcmVudCl7XG4gICAgICAgIFx0ZGVwdGggPSBkLnBhcmVudC5kZXB0aCsxOyBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZC5kYXRhLmJvcmRlckNvbG9yKSB7XG4gICAgICAgIGJvcmRlckNvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihcbiAgICAgICAgICBkLmRhdGEuYm9yZGVyQ29sb3JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChkLmRhdGEuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoXG4gICAgICAgICAgZC5kYXRhLmJhY2tncm91bmRDb2xvclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGQuZGF0YS50ZXh0Q29sb3IpIHtcbiAgICAgICAgdGV4dENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihkLmRhdGEudGV4dENvbG9yKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy9zZXQgZGVwdGhcbiAgICAgIGxldCB5ID0gZGVwdGgqYXR0cnMuZGVwdGg7XG5cbiAgICAgIC8vIEV4dGVuZCBub2RlIG9iamVjdCB3aXRoIGNhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICB0ZXh0Q29sb3IsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgeSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuXG4gICAgLy8gU2F2ZSBub2RlcyBmb3IgY2xpY2tcbiAgICBhdHRycy5ub2RlcyA9IG5vZGVzO1xuXHRcdC8vY29uc29sZS5sb2coYXR0cnMubm9kZXMpO1xuICAgIFxuICAgIC8vIEdldCBhbGwgbGlua3NcbiAgICBjb25zdCBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTElOS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEdldCBsaW5rcyBzZWxlY3Rpb25cbiAgICBjb25zdCBsaW5rU2VsZWN0aW9uID0gYXR0cnMuY2VudGVyR1xuICAgICAgLnNlbGVjdEFsbCgncGF0aC5saW5rJylcbiAgICAgIC5kYXRhKGxpbmtzLCAoeyBpZCB9KSA9PiBpZCk7XG4gICAgXG4gICAgIFxuICAgIGNvbnN0IGxpbmtFbnRlciA9IGxpbmtTZWxlY3Rpb25cbiAgICAgIC5lbnRlcigpXG4gICAgICAuaW5zZXJ0KCdwYXRoJywgJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xuICAgICAgICBjb25zdCBvID0ge1xuICAgICAgICAgIHg6IGQueCxcbiAgICAgICAgICB5OiBkLnksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKG8sIFtvLCBvXSk7XG4gICAgICB9KTtcbiAgICBcblx0XHRjb25zdCBsaW5rVXBkYXRlID0gbGlua0VudGVyLm1lcmdlKGxpbmtTZWxlY3Rpb24pO1xuICAgIFxuICAgICBsaW5rVXBkYXRlXG4gICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCh7IGRhdGEgfSkgPT4gZGF0YS5jb25uZWN0b3JMaW5lV2lkdGggfHwgMilcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAoeyBkYXRhIH0pID0+IGRhdGEuY29ubmVjdG9yTGluZUNvbG9yID8gdGhpcy5yZ2JhT2JqVG9Db2xvcihkYXRhLmNvbm5lY3RvckxpbmVDb2xvcikgOiAnZ3JlZW4nKVxuICAgICAgLmF0dHIoJ3N0cm9rZS1kYXNoYXJyYXknLCAoeyBkYXRhIH0pID0+ICBkYXRhLmRhdGFBcnJheSB8fCAnJyk7XG5cbiAgICAvLyBUcmFuc2l0aW9uIGJhY2sgdG8gdGhlIHBhcmVudCBlbGVtZW50IHBvc2l0aW9uXG4gICAgbGlua1VwZGF0ZVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRzID0gZC5kYXRhLnBhcmVudE5vZGVJZHMubWFwKFxuICAgICAgICAgIChwYXJlbnROb2RlSWQpID0+XG4gICAgICAgICAgICBub2Rlcy5maW5kKChub2RlKSA9PiBub2RlLmlkID09PSBwYXJlbnROb2RlSWQpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKGQsIHBhcmVudHMpO1xuICAgICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgYW55ICBsaW5rcyB3aGljaCBpcyBleGl0aW5nIGFmdGVyIGFuaW1hdGlvblxuICAgIGNvbnN0IGxpbmtFeGl0ID0gbGlua1NlbGVjdGlvblxuICAgICAgLmV4aXQoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xuICAgICAgICBjb25zdCBvID0ge1xuICAgICAgICAgIHg6IGQucGFyZW50LnggfHwgMCxcbiAgICAgICAgICB5OiBkLnBhcmVudC55IHx8IDAsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBkaWFnID0gdGhpcy5kaWFnb25hbChvLCBbb10pO1xuICAgICAgICByZXR1cm4gZGlhZztcbiAgICAgIH0pXG4gICAgICAucmVtb3ZlKCk7XG4gICAgXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE5PREVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gICAgLy8gR2V0IG5vZGVzIHNlbGVjdGlvblxuICAgIGNvbnN0IG5vZGVzU2VsZWN0aW9uID0gYXR0cnMuY2VudGVyR1xuICAgICAgLnNlbGVjdEFsbCgnZy5ub2RlJylcbiAgICAgIC5kYXRhKG5vZGVzLCAoeyBpZCB9KSA9PiBpZCk7XG5cbiAgICBsZXQgaHQgPSB0aGlzO1xuICAgIC8vIEVudGVyIGFueSBuZXcgbm9kZXMgYXQgdGhlIHBhcmVudCdzIHByZXZpb3VzIHBvc2l0aW9uLlxuICAgIGNvbnN0IG5vZGVFbnRlciA9IG5vZGVzU2VsZWN0aW9uXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZScpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IGB0cmFuc2xhdGUoJHt4MH0sJHt5MH0pYClcbiAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAub24oJ2NsaWNrJywgKGQpID0+IHsgXG4gICAgICAgIFxuICAgICAgICBpZiAoaXNBdHRyaWJ1dGVOb2RlKGQpICYmIFsuLi5kMy5ldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ25vZGUtYnV0dG9uLWNpcmNsZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgICBodC5vbkJ1dHRvbkNsaWNrKGQpO1xuICAgICAgXHR9KVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCAoZCkgPT4ge1xuICAgICAgICBpZiAoZC5kZXNjcmlwdGlvbiAmJiAoYXR0cnMudG9vbHRpcERpdi5zdHlsZSgnb3BhY2l0eScpICE9IDAuOSB8fCBkLmRlc2NyaXB0aW9uICE9PSBhdHRycy50b29sdGlwRGl2Ll9ncm91cHNbMF1bMF0uaW5uZXJIVE1MKSkge1xuICAgICAgICAgIGF0dHJzLnRvb2x0aXBEaXZcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwLjkpO1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCBsaW5lcyA9IGQuZGVzY3JpcHRpb24ubGVuZ3RoIC8gNDYgKyAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGF0dHJzLnRvb2x0aXBEaXZcbiAgICAgICAgICAgIC5odG1sKGQuZGVzY3JpcHRpb24pXG4gICAgICAgICAgXHQuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCAtIGQuZGF0YS53aWR0aC8yKSArIFwicHhcIilcdFx0XG4gICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZIC0gMjAqbGluZXMpICsgXCJweFwiKTtcdCAgICBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdXQnLCAoZCkgPT4ge1xuICAgICAgICBpZiAoZDMuZXZlbnQudG9FbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsID09PSAnc3ZnLWNoYXJ0LWNvbnRhaW5lcicpIHtcbiAgICAgICAgICBhdHRycy50b29sdGlwRGl2LnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLnN0eWxlKCdvcGFjaXR5JywgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gQWRkIGJhY2tncm91bmQgcmVjdGFuZ2xlIGZvciB0aGUgbm9kZXNcbiAgICBub2RlRW50ZXJcbiAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgdGFnOiAncmVjdCcsXG4gICAgICAgIHNlbGVjdG9yOiAnbm9kZS1yZWN0JyxcbiAgICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoeyBfY2hpbGRyZW4gfSkgPT5cbiAgICAgICAgX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6ICcjZmZmJ1xuICAgICAgKTtcblxuICAgIC8vIE5vZGUgdXBkYXRlIHN0eWxlc1xuICAgIGNvbnN0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXJcbiAgICAgIC5tZXJnZShub2Rlc1NlbGVjdGlvbilcbiAgICAgIC5zdHlsZSgnZm9udCcsICcxMnB4IHNhbnMtc2VyaWYnKTtcblxuICAgIC8vIEFkZCB0ZXh0IGVsZW1lbnQgaW5zaWRlIGdyb3VwXG4gICAgbm9kZVVwZGF0ZS5wYXR0ZXJuaWZ5KHtcbiAgICAgIHRhZzogJ3RleHQnLFxuICAgICAgc2VsZWN0b3I6ICdub2RlLXRleHQnLFxuICAgICAgZGF0YTogKGQpID0+IFtkXSxcbiAgICB9KTtcbiAgICBcbiAgICBcdG5vZGVVcGRhdGVcbiAgICAgICAgICAgIC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbm9kZS1idXR0b24tY2lyY2xlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkID0+IFtkXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBkID0+IHRoaXMub25TZWxlY3RBbGwoZCkgKVxuICAgIFxuICAgICAgbm9kZVVwZGF0ZS5zZWxlY3QoJy5ub2RlLWJ1dHRvbi1jaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICh7XG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSkgPT4gYHRyYW5zbGF0ZSgwLCR7ZGF0YS5oZWlnaHQgLyAyfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0F0dHJpYnV0ZU5vZGUoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSlcbiAgICBcdFx0XHRcdC5hdHRyKCdyJywgMTYpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgKHtcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KSA9PiBkYXRhLmJvcmRlcldpZHRoIHx8IGF0dHJzLnN0cm9rZVdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAoZCkgPT4ge1xuICAgICAgICBcdFx0XHRjb25zdCBjbGlja2VkID0gKGNoaWxkKSA9PiBjaGlsZC5kYXRhLmJvcmRlcldpZHRoID09IGF0dHJzLmNsaWNrZWRXaWR0aCB8fCAhY2hpbGQuZGF0YS5jbGlja2FibGU7XG4gICAgICAgIFx0XHRcdGNvbnNvbGUubG9nKGQpO1xuICAgICAgICBcdFx0XHRjb25zb2xlLmxvZygnZmlsbCcpO1xuICAgICAgICBcdFx0XHRpZiAoaXNBdHRyaWJ1dGVOb2RlKGQpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGQuY2hpbGRyZW4gJiYgZC5jaGlsZHJlbi5ldmVyeShjbGlja2VkKSkgfHwgKGQuX2NoaWxkcmVuICYmIGQuX2NoaWxkcmVuLmV2ZXJ5KGNsaWNrZWQpKSA/IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSA6IGF0dHJzLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXMgbm90IGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRycy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFx0XHRcdH0pXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgKHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvclxuICAgICAgICAgICAgfSkgPT4gYm9yZGVyQ29sb3IpXG4gICAgXHRcdFx0XHQuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIChkKSA9PiBpc0F0dHJpYnV0ZU5vZGUoZCkgJiYgZC5kYXRhLmNsaWNrYWJsZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIik7XG4gICAgXG4gICBcbiAgICB0aGlzLnJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKTtcbiAgICBcbiAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24gZm9yIHRoZSBub2RlXG4gICAgbm9kZVVwZGF0ZVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsKHt4LCB5fSkgPT4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYClcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSk7XG5cbiAgICAvLyBTdHlsZSBub2RlIHJlY3RhbmdsZXNcbiAgICBub2RlVXBkYXRlXG4gICAgICAuc2VsZWN0KCcubm9kZS1yZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsICh7IGRhdGEgfSkgPT4gZGF0YS53aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAoeyBkYXRhIH0pID0+IGRhdGEuaGVpZ2h0KVxuICAgICAgLmF0dHIoJ3gnLCAoeyBkYXRhIH0pID0+IC1kYXRhLndpZHRoIC8gMilcbiAgICAgIC5hdHRyKCd5JywgKHsgZGF0YSB9KSA9PiAtZGF0YS5oZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ3J4JywgKHsgZGF0YSB9KSA9PiBkYXRhLmJvcmRlclJhZGl1cyB8fCAwKVxuICAgICAgLmF0dHIoXG4gICAgICAgICdzdHJva2Utd2lkdGgnLFxuICAgICAgICAoeyBkYXRhIH0pID0+IGRhdGEuYm9yZGVyV2lkdGggfHwgYXR0cnMuc3Ryb2tlV2lkdGhcbiAgICAgIClcbiAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAuYXR0cignc3Ryb2tlJywgKHsgYm9yZGVyQ29sb3IgfSkgPT4gYm9yZGVyQ29sb3IpXG4gICAgICAuc3R5bGUoXG4gICAgICAgICdmaWxsJyxcbiAgICAgICAgKHsgYmFja2dyb3VuZENvbG9yIH0pID0+IGJhY2tncm91bmRDb2xvclxuICAgICAgKTtcblxuICAgIC8vIFJlbW92ZSBhbnkgZXhpdGluZyBub2RlcyBhZnRlciB0cmFuc2l0aW9uXG4gICAgY29uc3Qgbm9kZUV4aXRUcmFuc2l0aW9uID0gbm9kZXNTZWxlY3Rpb25cbiAgICAgIC5leGl0KClcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCh7cGFyZW50fSkgPT4gYHRyYW5zbGF0ZSgke3BhcmVudC54fSwke3BhcmVudC55fSlgKVxuICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApO1xuXG4gICAgLy8gT24gZXhpdCByZWR1Y2UgdGhlIG5vZGUgcmVjdHMgc2l6ZSB0byAwXG4gICAgbm9kZUV4aXRUcmFuc2l0aW9uXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1yZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKTtcblxuICAgIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxuICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQueDAgPSBkLng7XG4gICAgICBkLnkwID0gZC55O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkZXRlY3RzIHdoZXRoZXIgY3VycmVudCBicm93c2VyIGlzIGVkZ2VcbiAgaXNFZGdlKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnRWRnZScpO1xuICB9XG5cbiAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGN1c3RvbSBkaWFnb25hbCAtIHBsYXkgd2l0aCBpdCBoZXJlIC0gaHR0cHM6Ly90by5seS8xemhUS1xuICBkaWFnb25hbChzLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgLmNlbnRlckcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsICdncm91cE9mUGF0aHMnKTtcbiAgICBsZXQgaGVpZ2h0TXVsdGlwbGllciA9IHBhcmVudHMubGVuZ3RoID09IDIgPyAwLjYgOiAwLjQ7XG4gICAgXG4gICAgZm9yIChjb25zdCB0IG9mIHBhcmVudHMpIHtcbiAgICAgIGxldCBoZWlnaHQgPSBzLnkgLSB0Lnk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBzb21lIHZhcmlhYmxlcyBiYXNlZCBvbiBzb3VyY2UgYW5kIHRhcmdldCAocyx0KSBjb29yZGluYXRlc1xuICAgICAgbGV0IHggPSBzLng7XG4gICAgICBsZXQgeSA9IHMueTtcbiAgICAgIGxldCBleCA9IHQueDtcbiAgICAgIGxldCBleSA9IHQueTtcbiAgICAgIGxldCB4cnZzID0gZXggLSB4IDwgMCA/IC0xIDogMTtcbiAgICAgIGxldCB5cnZzID0gLTE7XG4gICAgICBsZXQgcmRlZiA9IDA7XG4gICAgICBsZXQgckluaXRpYWwgPSBNYXRoLmFicyhleCAtIHgpIC8gMiA8IHJkZWYgPyBNYXRoLmFicyhleCAtIHgpIC8gMiA6IHJkZWY7XG4gICAgICBsZXQgciA9IE1hdGguYWJzKGV5IC0geSkgLyAyIDwgckluaXRpYWwgPyBNYXRoLmFicyhleSAtIHkpIC8gMiA6IHJJbml0aWFsO1xuICAgICAgbGV0IGggPSBNYXRoLmFicyhleSAtIHkpICogaGVpZ2h0TXVsdGlwbGllciAtIHI7XG4gICAgICBsZXQgdyA9IE1hdGguYWJzKGV4IC0geCkgLSByICogMjtcblxuICAgICAgbGV0IHBhdGggPSBgXG4gICAgICAgICAgICAgTSAke3h9ICR7eX1cbiAgICAgICAgICAgICBMICR7eH0gJHt5ICsgaCAqIHlydnN9XG4gICAgICAgICAgICAgTCAke3ggKyB3ICogeHJ2cyArIHIgKiB4cnZzfSAke3kgKyBoICogeXJ2cyArIHIgKiB5cnZzfVxuICAgICAgICAgICAgIEwgJHtleH0gJHtleX1cbiAgICAgICAgICAgYDtcbiAgICAgIGdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBsZXQgY29tYmluZWREID0gJyc7XG4gICAgZ3JvdXAuc2VsZWN0QWxsKCdwYXRoJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2QnKSlcbiAgICAgICAgY29tYmluZWREICs9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkJyk7XG4gICAgfSk7XG4gICAgZ3JvdXAucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGNvbWJpbmVkRDtcbiAgfVxuXG4gIHJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuXG4gICAgIGF0dHJzLnN2Z1xuICAgICAgLnNlbGVjdEFsbCgnLm5vZGUtdGV4dCcpXG4gICAgXHQuYXR0cignZHknLCAnMTBweCcpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoJ2ZpbGwnLCAoeyB0ZXh0Q29sb3IgfSkgPT50ZXh0Q29sb3IgfHwgJ2JsYWNrJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzMwcHgnKVxuICAgICAgLmh0bWwoKHsgZGF0YSB9KSA9PiBkYXRhLm5vZGVJZCk7XG5cbiAgfVxuXG4gICBvblNlbGVjdEFsbChkKSB7XG5cdFx0IGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgIGNvbnN0IGNsaWNrZWQgPSAoY2hpbGQpID0+IGNoaWxkLmRhdGEuYm9yZGVyV2lkdGggPT0gYXR0cnMuY2xpY2tlZFdpZHRoIHx8ICFjaGlsZC5kYXRhLmNsaWNrYWJsZTtcbiAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSAoZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbikuZXZlcnkoY2xpY2tlZCk7XG4gICAgIFxuICAgICAoZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbikuZm9yRWFjaCgoZCkgPT4gdGhpcy5vbkJ1dHRvbkNsaWNrKGQsICFhbGxTZWxlY3RlZCwgYWxsU2VsZWN0ZWQsIGZhbHNlLCBmYWxzZSkpO1xuICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZCwgdHJ1ZSwgZmFsc2UsIHRydWUpO1xuICAgfVxuICBcbiAgXG4gIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgb25CdXR0b25DbGljayhkLCBzZWxlY3RPcHRpb24sIGNvbXByZXNzT3B0aW9uLCB1cGRhdGVPcHRpb24sIHdhcm5pbmdPcHRpb24pIHtcbiAgICBjb25zdCBkZWZhdWx0VG9UcnVlID0gKGJvb2wpID0+IHR5cGVvZiBib29sID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBib29sO1xuXG4gICAgY29uc3QgY29tcHJlc3MgPSBkZWZhdWx0VG9UcnVlKGNvbXByZXNzT3B0aW9uKTsgLy9kZWZhdWx0cyB0byB0cnVlXG5cdFx0Y29uc3QgZXhwYW5kID0gIWNvbXByZXNzO1xuICAgIFxuICAgIGNvbnN0IHNlbGVjdCA9IGRlZmF1bHRUb1RydWUoc2VsZWN0T3B0aW9uKTtcbiAgICBjb25zdCBkZXNlbGVjdCA9IGRlZmF1bHRUb1RydWUoIXNlbGVjdE9wdGlvbik7XG4gICAgXG4gICAgY29uc3QgdXBkYXRlID0gZGVmYXVsdFRvVHJ1ZSh1cGRhdGVPcHRpb24pO1xuICAgIFxuICAgIGNvbnN0IHdhcm5pbmcgPSBkZWZhdWx0VG9UcnVlKHdhcm5pbmdPcHRpb24pO1xuICAgXG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBkYXRhID0gZC5kYXRhO1xuICAgIGlmIChkYXRhLmNsaWNrYWJsZSkge1xuICAgICAgICBsZXQgcGFyZW50ID0gZGF0YS5wYXJlbnROb2RlSWRzWzBdO1xuICAgICAgICBpZiAoYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudF0pIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnRdLmluZGV4T2YoZGF0YS5ub2RlSWQpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBpZiAoZGVzZWxlY3Qpe1xuICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgXHRkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMudW5jbGlja2VkV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Qpe1xuICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50XS5wdXNoKGRhdGEubm9kZUlkKTtcbiAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IGF0dHJzLmNsaWNrZWRXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50XSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50XS5pbmRleE9mKGRhdGEubm9kZUlkKTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgaWYgKGRlc2VsZWN0KXtcbiAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgXHRkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMudW5jbGlja2VkV2lkdGg7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0ubGVuZ3RoID09IDApIHsvL2lmIGVtcHR5XG4gICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5wdXNoKCdUb3RhbCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Qpe1xuICAgICAgICAgICAgICAgaWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0ubGVuZ3RoID09IDEgJiZcbiAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dWzBdID09ICdUb3RhbCcpIHtcbiAgICAgICAgICAgICAgICAvL2lmICdUb3RhbCdcbiAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnRdLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMuY2xpY2tlZFdpZHRoO1xuXG4gICAgICAgICAgICAgIGlmICh3YXJuaW5nKXtcbiAgICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMTtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCAqPSBhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodG90YWwgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAnV0FSTklORzogQWRkaW5nIG1vcmUgYWNhZGVtaWMgYXR0cmlidXRlcyBtYXkgcmVzdWx0IGluIGxvdyB2aXNpYmlsaXR5IGluIHRoZSB2aXN1YWxpemF0aW9uLidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkYXRhLmJvcmRlcldpZHRoID09PSBhdHRycy51bmNsaWNrZWRXaWR0aCAmJiBzZWxlY3QpeyAvL3VuY2xpY2tlZFxuICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSBhdHRycy5jbGlja2VkV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcHJlc3Mpe1xuICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMudW5jbGlja2VkV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSWYgY2hpbGRyZW5zIGFyZSBleHBhbmRlZFxuICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICBpZiAoY29tcHJlc3Mpe1xuICAgICAgICBpZiAoZC5pZCA9PT0gJ0NvbnZvY2F0ZWQnKSB7XG4gICAgICAgICAgY29uc3QgZGVtb2dyYXBoaWNOb2RlID0gZC5wYXJlbnQuY2hpbGRyZW5bMV07XG4gICAgICAgICAgaWYgKGRlbW9ncmFwaGljTm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIC8vQ29sbGFwc2UgdGhlbVxuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgICAgIGlmIChkLmlkID09PSAnRW5yb2xsZWQnKXsgIFxuICAgICAgICAgIGNvbnN0IGNvbnZvY2F0aW9uTm9kZSA9IGQucGFyZW50LmNoaWxkcmVuWzBdO1xuICAgICAgICAgIGlmIChjb252b2NhdGlvbk5vZGUuZGF0YS5ib3JkZXJXaWR0aCA9PT0gYXR0cnMudW5jbGlja2VkV2lkdGgpe1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGNvbnZvY2F0aW9uTm9kZSwgZmFsc2UpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGRlc2NlbmRhbnRzIGV4cGFuZGVkIHByb3BlcnR5IHRvIGZhbHNlXG4gICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZC5pZCA9PT0gJ0Vucm9sbGVkJykge1xuICAgICAgICBjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGNvbnZvY2F0aW9uTm9kZS5jaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGNvbnZvY2F0aW9uTm9kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEV4cGFuZCBjaGlsZHJlblxuICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgLy8gU2V0IGVhY2ggY2hpbGRyZW4gYXMgZXhwYW5kZWRcblx0XHRcdGlmIChkLmNoaWxkcmVuKXtcbiAgICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKFxuICAgICAgICAgICh7IGRhdGEgfSkgPT4gKGRhdGEuZXhwYW5kZWQgPSB0cnVlKVxuICAgICAgICApO1xuICAgICAgfSBcbiAgICB9XG5cbiAgICAvLyBSZWRyYXcgR3JhcGhcbiAgICBpZiAodXBkYXRlKVxuICAgIFx0dGhpcy51cGRhdGUoZCk7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGNoYW5nZXMgYGV4cGFuZGVkYCBwcm9wZXJ0eSB0byBkZXNjZW5kYW50c1xuICBzZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihcbiAgICB7IGRhdGEsIGNoaWxkcmVuLCBfY2hpbGRyZW4gfSxcbiAgICBmbGFnXG4gICkge1xuICAgIC8vIFNldCBmbGFnIHRvIHRoZSBjdXJyZW50IHByb3BlcnR5XG4gICAgZGF0YS5leHBhbmRlZCA9IGZsYWc7XG5cbiAgICAvLyBMb29wIG92ZXIgYW5kIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBleHBhbmRlZCBjaGlsZHJlbidzIGRlc2NlbmRhbnRzXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmxhZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgYW5kIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjb2xsYXBzZWQgY2hpbGRyZW4ncyBkZXNjZW5kYW50c1xuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmxhZyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRFeHBhbmRlZCBBUEksIGl0IGV4cGFuZHMgb3IgY29sbGFwc2VzIHBhcnRpY3VsYXIgbm9kZVxuICBzZXRFeHBhbmRlZChpZCwgZXhwYW5kZWRGbGFnKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAvLyBSZXRyaWV2ZSBub2RlIGJ5IG5vZGUgSWRcbiAgICBjb25zdCBub2RlID0gYXR0cnMuYWxsTm9kZXMuZmlsdGVyKFxuICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLm5vZGVJZCA9PSBpZFxuICAgIClbMF07XG5cbiAgICAvLyBJZiBub2RlIGV4aXN0cywgc2V0IGV4cGFuc2lvbiBmbGFnXG4gICAgaWYgKG5vZGUpIG5vZGUuZGF0YS5leHBhbmRlZCA9IGV4cGFuZGVkRmxhZztcblxuICAgIC8vIEZpcnN0IGV4cGFuZCBhbGwgbm9kZXNcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuZXhwYW5kKGQpKTtcblxuICAgIC8vIFRoZW4gY29sbGFwc2UgYWxsIG5vZGVzXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgIC8vIFRoZW4gZXhwYW5kIG9ubHkgdGhlIG5vZGVzLCB3aGljaCB3ZXJlIHByZXZpb3VzbHkgZXhwYW5kZWQsIG9yIGhhdmUgYW4gZXhwYW5kIGZsYWcgc2V0XG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PlxuICAgICAgdGhpcy5leHBhbmRTb21lTm9kZXMoZClcbiAgICApO1xuXG4gICAgLy8gUmVkcmF3IGdyYXBoXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG4gIH1cblxuICAvLyBNZXRob2Qgd2hpY2ggb25seSBleHBhbmRzIG5vZGVzLCB3aGljaCBoYXZlIHByb3BlcnR5IHNldCBcImV4cGFuZGVkPXRydWVcIlxuICBleHBhbmRTb21lTm9kZXMoZCkge1xuICAgIC8vIElmIG5vZGUgaGFzIGV4cGFuZGVkIHByb3BlcnR5IHNldFxuICAgIGlmIChkLmRhdGEuZXhwYW5kZWQpIHtcbiAgICAgIC8vIFJldHJpZXZlIG5vZGUncyBwYXJlbnRcbiAgICAgIGxldCBwYXJlbnQgPSBkLnBhcmVudDtcblxuICAgICAgLy8gV2hpbGUgd2UgY2FuIGdvIHVwXG4gICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIC8vIEV4cGFuZCBhbGwgY3VycmVudCBwYXJlbnQncyBjaGlsZHJlblxuICAgICAgICBpZiAocGFyZW50Ll9jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IHBhcmVudC5fY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcGFyZW50IGhvbGRpbmcgb2JqZWN0XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBjb2xsYXBzZWQgbm9kZXNcbiAgICBpZiAoZC5fY2hpbGRyZW4pIHtcbiAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmV4cGFuZFNvbWVOb2RlcyhjaCkpO1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2l2ZWxseSBkbyB0aGUgc2FtZSBmb3IgZXhwYW5kZWQgbm9kZXNcbiAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgbm9kZXMgc3RhdGUgYW5kIHJlZHJhd3MgZ3JhcGgsIHVzdWFsbHkgYWZ0ZXIgZGF0YSBjaGFuZ2VcbiAgdXBkYXRlTm9kZXNTdGF0ZSgpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIC8vIFN0b3JlIG5ldyByb290IGJ5IGNvbnZlcnRpbmcgZmxhdCBkYXRhIHRvIGhpZXJhcmNoeVxuICAgIGF0dHJzLnJvb3QgPSBkM1xuICAgICAgLnN0cmF0aWZ5KClcbiAgICAgIC5pZCgoeyBub2RlSWQgfSkgPT4gbm9kZUlkKVxuICAgICAgLnBhcmVudElkKCh7IHBhcmVudE5vZGVJZHMgfSkgPT4gcGFyZW50Tm9kZUlkc1swXSkoXG4gICAgICBhdHRycy5kYXRhXG4gICAgKTtcblxuICAgIC8vIFN0b3JlIHBvc2l0aW9ucywgd2hlcmUgY2hpbGRyZW4gYXBwZWFyIGR1cmluZyB0aGVpciBlbnRlciBhbmltYXRpb25cbiAgICBhdHRycy5yb290LngwID0gMDtcbiAgICBhdHRycy5yb290LnkwID0gMDtcblxuICAgIC8vIFN0b3JlIGFsbCBub2RlcyBpbiBmbGF0IGZvcm1hdCAoYWx0aG91Z2gsIG5vdyB3ZSBjYW4gYnJvd3NlIHBhcmVudCwgc2VlIGRlcHRoIGUudC5jLiApXG4gICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzXG4gICAgICAudHJlZW1hcChhdHRycy5yb290KVxuICAgICAgLmRlc2NlbmRhbnRzKCk7XG5cbiAgICAvLyBTdG9yZSBkaXJlY3QgYW5kIHRvdGFsIGRlc2NlbmRhbnRzIGNvdW50XG4gICAgYXR0cnMuYWxsTm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgT2JqZWN0LmFzc2lnbihkLmRhdGEsIHtcbiAgICAgICAgZGlyZWN0U3Vib3JkaW5hdGVzOiBkLmNoaWxkcmVuXG4gICAgICAgICAgPyBkLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgIDogMCxcbiAgICAgICAgdG90YWxTdWJvcmRpbmF0ZXM6IGQuZGVzY2VuZGFudHMoKS5sZW5ndGggLSAxLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBFeHBhbmQgYWxsIG5vZGVzIGZpcnN0XG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKHRoaXMuZXhwYW5kKTtcblxuICAgIC8vIFRoZW4gY29sbGFwc2UgdGhlbSBhbGxcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBvbmx5IGV4cGFuZCBub2Rlcywgd2hpY2ggaGF2ZSBleHBhbmRlZCBwcm9wcnR5IHNldCB0byB0cnVlXG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT5cbiAgICAgIHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKVxuICAgICk7XG5cbiAgICAvLyBSZWRyYXcgR3JhcGhzXG4gICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdCk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB3aGljaCBjb2xsYXBzZXMgcGFzc2VkIG5vZGUgYW5kIGl0J3MgZGVzY2VuZGFudHNcbiAgY29sbGFwc2UoZCkge1xuICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5jb2xsYXBzZShjaCkpO1xuICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggZXhwYW5kcyBwYXNzZWQgbm9kZSBhbmQgaXQncyBkZXNjZW5kYW50c1xuICBleHBhbmQoZCkge1xuICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKChjaCkgPT4gdGhpcy5leHBhbmQoY2gpKTtcbiAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBab29tIGhhbmRsZXIgZnVuY3Rpb25cbiAgem9vbWVkKCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2hhcnQgPSBhdHRycy5jaGFydDtcblxuICAgIC8vIEdldCBkMyBldmVudCdzIHRyYW5zZm9ybSBvYmplY3RcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBkMy5ldmVudC50cmFuc2Zvcm07XG5cbiAgICAvLyBTdG9yZSBpdFxuICAgIGF0dHJzLmxhc3RUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAvLyBSZXBvc2l0aW9uIGFuZCByZXNjYWxlIGNoYXJ0IGFjY29yZGluZ2x5XG4gICAgY2hhcnQuYXR0cigndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcblxuICAgIC8vIEFwcGx5IG5ldyBzdHlsZXMgdG8gdGhlIGZvcmVpZ24gb2JqZWN0IGVsZW1lbnRcbiAgICBpZiAodGhpcy5pc0VkZ2UoKSkge1xuICAgICAgdGhpcy5yZXN0eWxlRm9yZWlnbk9iamVjdEVsZW1lbnRzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIFN1bmJ1cnN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9FeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgc3ZnV2lkdGg6IDMwMDAsXG4gICAgICBzdmdIZWlnaHQ6IDMwMDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBleHRlbmRlZExpbmVMZW5ndGg6IDQwLFxuICAgICAgdGV4dERpc3RhbmNlOiAyNSxcbiAgICAgIG91dGVyVGV4dFNpemU6ICcyNXB4JyxcbiAgICAgIGF0dHJpYnV0ZUluZGV4OiBudWxsLFxuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBkaXNwbGF5Tm9kZXM6IG51bGwsXG4gICAgICB2YWx1ZXM6IG51bGwsXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIHRleHRDaXJjbGVzQ2F0ZWdvcnk6IFtdLFxuICAgICAgdGV4dENpcmNsZXNDb3VudDogW10sXG4gICAgICB0ZXh0Q2lyY2xlc1BlcmNlbnQ6IFtdLFxuICAgICAgdGl0bGVUZXh0U2l6ZTogJzI1cHgnLFxuICAgICAgdGl0bGVUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGNvbXBhcmVNb2RlOiBmYWxzZSxcbiAgICAgIGxlZ2VuZFdpZHRoOiAxNTAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQxOiAnQ2F0ZWdvcnknLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQyOiAnIyBvZiBTdHVkZW50cycsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDM6ICclIGluIEdyb3VwJyxcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyogUmVtb3ZlcyBhbGwgZWxlbWVudHMgaW4gc3ZnICovXG4gIHJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUoKS5zdmcuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gIH1cblxuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgLyogQ29udmVydHMgb2JqZWN0cyB0byBzbGljZXMgd2l0aCBxdWVyaWVzICovXG4gIGdldFZhbHVlcyhhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAvLyBTb3J0aW5nIGFnZVxuICAgIGxldCBvcmRlciA9IHsnPD0xNyc6IDAsXG4gICAgICAgICcxOC0yMCc6IDEsXG4gICAgICAgICcyMS0yNSc6IDIsXG4gICAgICAgICcyNi0zMCc6IDMsXG4gICAgICAgICczMS0zNSc6IDQsXG4gICAgICAgICczNi00NSc6IDUsXG4gICAgICAgICc0Ni01NSc6IDYsXG4gICAgICAgICc1NSsnIDogN307XG4gICAgZGl2ZXJzaXR5VmFsdWVzLkFnZS5zb3J0KChlMSwgZTIpID0+IChvcmRlcltlMV0gLSBvcmRlcltlMl0pKTtcbiBcdFx0XG4gICAgLy9Tb3J0aW5nIHllYXJcbiAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLnNvcnQoKGUxLCBlMikgPT4gKE51bWJlcihlMS5zdWJzdHJpbmcoMCwgNCkpIC0gTnVtYmVyKGUyLnN1YnN0cmluZygwLCA0KSApKSk7XG4gICAgXG4gICAgLy9wcmVwYXJpbmcgc2xpY2VzXG4gICAgY29uc3QgY2FydGVzaWFuID0gKC4uLmEpID0+XG4gICAgICBhLnJlZHVjZSgoYSwgYikgPT5cbiAgICAgICAgYS5mbGF0TWFwKChkKSA9PiBiLm1hcCgoZSkgPT4gW2QsIGVdLmZsYXQoKSkpXG4gICAgICApO1xuICAgIGxldCBzbGljZXMgPSBjYXJ0ZXNpYW4oXG4gICAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRGVncmVlLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRmFjdWx0eSxcbiAgICAgIGFjYWRlbWljVmFsdWVzWydTdHVkeSBTdGF0dXMnXVxuICAgICk7XG5cbiAgICBjb25zdCBtYWtlUXVlcnkgPSAoc2xpY2UsIGRpdmVyc2l0eUF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgcXVlcnkgPSBbLi4uc2xpY2VdO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAocHJvcCAhPT0gZGl2ZXJzaXR5QXR0cikge1xuICAgICAgICAgIHF1ZXJ5LnB1c2goJ1RvdGFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnkucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9O1xuXG4gICAgLy9jb252ZXJ0IHNsaWNlcyB0byBrZXkgZm9ybWF0XG5cbiAgICBsZXQgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgc2xpY2Ugb2Ygc2xpY2VzKSB7XG4gICAgICBsZXQgc3RyID0gc2xpY2UudG9TdHJpbmcoKTtcbiAgICAgIHZhbHVlc1tzdHJdID0ge307XG4gICAgICBmb3IgKGxldCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl0gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgZGl2ZXJzaXR5VmFsdWVzW2F0dHJdKSB7XG4gICAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl1bdmFsdWVdID0gbWFrZVF1ZXJ5KFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIGFyY3MsIHJldHVybiBhcmMgd2lkdGgsIGlubmVycmFkaXVzIGFuZCB0ZXh0IHNpemUqL1xuICBjb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHgsIHksIG51bUFyY3MpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB0ZXh0SGVpZ2h0T2Zmc2V0ID0gNTA7XG5cbiAgICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSAtIHRleHRIZWlnaHRPZmZzZXQpO1xuICAgIGxldCBhcmNXaWR0aCA9IG1pbiAvICgyICogbnVtQXJjcyArIDcpOyAvL21pbiA9IDIqbnVtQXJjcyphcmNXaWR0aCArIDIqaW5uZXJSYWRpdXMsIGlubmVyUmFkaXVzID0gMyphcmNXaWR0aFxuICAgIGxldCBpbm5lclJhZGl1cyA9IDMgKiBhcmNXaWR0aDtcblxuICAgIGxldCBtdWx0aXBsaWVyID0gMS41O1xuICAgIGxldCBuID0gMTM7IC8vJ2ludGVybmF0aW9uYWwnIHdpdGggMTMgbGV0dGVycyBpcyBsb25nZXN0IHdvcmQgaW4gZGl2ZXJzaXR5IGF0dHJpYnV0ZXNcbiAgICBsZXQgaW5uZXJUZXh0U2l6ZSA9XG4gICAgICAobXVsdGlwbGllciAqICgyICogaW5uZXJSYWRpdXMpKSAvIG4gKyAncHgnO1xuICAgIHJldHVybiB7XG4gICAgICBhcmNXaWR0aDogYXJjV2lkdGgsXG4gICAgICBpbm5lclJhZGl1czogaW5uZXJSYWRpdXMsXG4gICAgICBpbm5lclRleHRTaXplOiBpbm5lclRleHRTaXplLFxuICAgIH07XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIHNxdWFyZXMsIHJldHVybiByb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZSAqL1xuICBjb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoeCwgeSwgbikge1xuICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMsIGFuZCBjZWxsIHNpemVcbiAgICBsZXQgcmF0aW8gPSB4IC8geTtcbiAgICBsZXQgbmNvbHNfZmxvYXQgPSBNYXRoLnNxcnQobiAqIHJhdGlvKTtcbiAgICBsZXQgbnJvd3NfZmxvYXQgPSBuIC8gbmNvbHNfZmxvYXQ7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIGhlaWdodFxuICAgIGxldCBucm93czEgPSBNYXRoLmNlaWwobnJvd3NfZmxvYXQpO1xuICAgIGxldCBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgd2hpbGUgKG5yb3dzMSAqIHJhdGlvIDwgbmNvbHMxKSB7XG4gICAgICBucm93czErKztcbiAgICAgIG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTEgPSB5IC8gbnJvd3MxO1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSB3aWR0aFxuICAgIGxldCBuY29sczIgPSBNYXRoLmNlaWwobmNvbHNfZmxvYXQpO1xuICAgIGxldCBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgd2hpbGUgKG5jb2xzMiA8IG5yb3dzMiAqIHJhdGlvKSB7XG4gICAgICBuY29sczIrKztcbiAgICAgIG5yb3dzMiA9IE1hdGguY2VpbChuIC8gbmNvbHMyKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTIgPSB4IC8gbmNvbHMyO1xuXG4gICAgLy8gRmluZCB0aGUgYmVzdCB2YWx1ZXNcbiAgICBsZXQgbnJvd3MsIG5jb2xzLCBjZWxsX3NpemU7XG4gICAgaWYgKGNlbGxfc2l6ZTEgPCBjZWxsX3NpemUyKSB7XG4gICAgICBucm93cyA9IG5yb3dzMjtcbiAgICAgIG5jb2xzID0gbmNvbHMyO1xuICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbnJvd3MgPSBucm93czE7XG4gICAgICBuY29scyA9IG5jb2xzMTtcbiAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2l6ZTogY2VsbF9zaXplLCByb3dzOiBucm93cywgY29sczogbmNvbHMgfTtcbiAgfVxuXG4gIC8qIEZldGNoaW5nIGRhdGEgYW5kIHNldHRpbmcgdXAgc3ZnIGNvbnRhaW5lciAqL1xuICBhc3luYyBzZXR1cCh1cmwpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy9sb2FkIGRhdGEgc3luY2hyb25vdXNseVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkMy5jc3YodXJsKTtcblxuICAgIGF0dHJzLmF0dHJpYnV0ZUluZGV4ID0gZGF0YS5jb2x1bW5zO1xuXG4gICAgLy9jb252ZXJ0IGRhdGEgdG8gb2JqZWN0IGZvcm1hdFxuICAgIGF0dHJzLmRhdGEgPSBkYXRhLnJlZHVjZShmdW5jdGlvbiAobWFwLCBvYmosIGkpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iaik7XG5cbiAgICAgIHZhbHVlcy5wb3AoKTtcblxuICAgICAgbWFwWycnLmNvbmNhdCh2YWx1ZXMpXSA9IG9iai5Db3VudDtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcik7XG4gICAgXG4gICAgLy8gc2V0dGluZyB1cCBjb21wYXJlIGJ1dHRvblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBhcmUgPSAoKSA9PiB7XG4gICAgICBhdHRycy5jb21wYXJlTW9kZSA9ICFhdHRycy5jb21wYXJlTW9kZTtcbiAgICAgIHNiLnJlbmRlcihhdHRycy52YWx1ZXMpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAnY29tcGFyZS1idXR0b24nXG4gICAgKS5vbmNsaWNrID0gdG9nZ2xlQ29tcGFyZTtcblxuICAgIGF0dHJzLnN2ZyA9IHN2ZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qIENvbnZlcnRpbmcgaW5wdXQgb2JqZWN0cyB0byB2YWx1ZXMgZm9yIGRpc3BsYXkgKi9cbiAgaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoXG4gICAgICBhY2FkZW1pY1ZhbHVlcyxcbiAgICAgIGRpdmVyc2l0eVZhbHVlc1xuICAgICk7XG5cbiAgICBcbiAgICBjb25zdCB0aXRsZUJ1aWxkZXIgPSAoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykgPT4ge1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIFxuICAgICAgY29uc3QgZ2V0QXR0ckFzVGl0bGUgPSAoYXR0cikgPT4ge1xuICAgICAgICAgaWYgKGF0dHIgPT09ICdBY2FkZW1pYyBZZWFyJyl7XG4gICAgICAgICAgIFx0cmV0dXJuICcgMjAxMy0yMDIxJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdEZWdyZWUnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBkZWdyZWVzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdGYWN1bHR5Jyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgZmFjdWx0aWVzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdTdHVkeSBTdGF0dXMnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBzdHVkeSBzdGF0dXNlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnQWdlJyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgYWdlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnU2V4Jyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgc2V4ZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0NpdGl6ZW5zaGlwIFN0YXR1cycpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIGNpdGl6ZW5zaGlwIHN0YXR1c2VzJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhY2FkZW1pY1ZhbHVlcyl7XG4gICAgICBcdGlmIChhY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPT09IDEgJiYgYWNhZGVtaWNWYWx1ZXNbYXR0cl1bMF0gPT09ICdUb3RhbCcpe1xuICAgICAgICBcdGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICBcdGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAwKXtcbiAgICAgICAgXHRsaXN0LnB1c2goZ2V0QXR0ckFzVGl0bGUoYXR0cikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICBcblx0XHRcdGlmIChsaXN0Lmxlbmd0aCA9PSAxKVxuICAgICAgIFx0cmV0dXJuICdTdHVkZW50cyBhY3Jvc3MgJyArIGxpc3QucG9wKCkgKyAnLic7IFxuICAgICAgXG5cdFx0XHRyZXR1cm4gJ1N0dWRlbnRzIGFjcm9zcyAnICsgbGlzdC5zbGljZSgwLCAtMSkuam9pbigpICsgJyBhbmQgJyArIGxpc3QucG9wKCkgKyAnLic7XG4gICAgfTtcbiAgICAgXG4gICAgY29uc3Qgd2lkdGggPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0JylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoO1xuICAgIFxuICAgIGxldCB0aXRsZSA9IGQzXG4gICAgICAuc2VsZWN0KCcjdGl0bGUtdGV4dCcpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLnRpdGxlVGV4dFNpemUpXG4gICAgICAudGV4dCh0aXRsZUJ1aWxkZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykpO1xuICAgIFxuICAgIHRoaXMucmVuZGVyKHZhbHVlcyk7XG4gIH1cblxuICAvKiBSZWN1cnJpbmcgcmVuZGVyICovXG4gIHJlbmRlcih2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy8gU2V0dGluZyB2YWx1ZXMgc28gdmFsdWVzIGlzIHN0aWxsIGFjY2Vzc2libGUgd2hlbiBjb21wYXJlIGlzIHRvZ2dsZWRcbiAgICBhdHRycy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgICBcbiAgICAvLyByZXB1cnBvc2luZyBiYWNrIGJ1dHRvbiBpZiBuZWNlc3NhcnlcbiAgICBpZiAoYXR0cnMuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBiYWNrID0gKCkgPT4gc2IucmVuZGVyKGF0dHJzLmhpc3RvcnkucG9wKCkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPVxuICAgICAgICBhdHRycy5kaXNwbGF5Tm9kZXM7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBlbGVtZW50cyBpbiBzdmdcbiAgICB0aGlzLnJlbW92ZUFsbCgpO1xuXG4gICAgLy8gcmUtY3JlYXRlIHRoZSBuZXcgZWxlbWVudHNcbiAgICBpZiAoIWF0dHJzLmNvbXBhcmVNb2RlKSB7IFxuICAgICAgXG4gICAgICAvLyBkaXNhYmxlIGNvbXBhcmUgbW9kZSBpZiBvbmx5IDEgc2xpY2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmlubmVySFRNTCA9ICdDb21wYXJlJztcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID10aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmNvbG9yID10aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQnV0dG9uKTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuY29sb3IgPSd3aGl0ZSc7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMucmVuZGVyU3VuYnVyc3QodmFsdWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJ1dHRvbik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5pbm5lckhUTUwgPSAnQ29uam9pbic7XG4gICAgICB0aGlzLnJlbmRlckNvbXBhcmUodmFsdWVzKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJMZWdlbmQodmFsdWVzKTtcbiAgfVxuXG4gIC8vIHJlbmRlciB0aGUgc3VuYnVyc3RcbiAgcmVuZGVyU3VuYnVyc3QodmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgbGV0IHNiID0gdGhpcztcblxuICAgIFxuICAgIC8vSGVscGVyIHZhbHVlc1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuICAgIGNvbnN0IGFyY0xlbmd0aCA9ICgyICogTWF0aC5QSSkgLyBudW1TbGljZXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0JylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSArY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICtjb250YWluZXIud2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQtYXR0cnMudGl0bGVUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtQXJjc1xuICAgICk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICAgY29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgbGV0IHN2ZyA9IGF0dHJzLnN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCR7aGVpZ2h0LyAyICArIGF0dHJzLnRpdGxlVGV4dEhlaWdodH0pYFxuICAgICAgKTtcblxuICAgIGxldCBjZW50ZXJHcm91cCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2VudGVyLWdyb3VwJyk7XG4gICAgY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZScpXG4gICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJyk7XG5cbiAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgIFxuICAgIGxldCB0ZXh0Q2lyY2xlMSA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICctMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoIGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MSlcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoIGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MilcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTMgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnMS41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQzKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgLy9IZWxwZXIgbWV0aG9kc1xuICAgIGNvbnN0IGdldENpcmNsZVggPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgY29uc3QgZ2V0Q2lyY2xlWSA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cztcblxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvL2xpbmUgYnVpbGRlclxuICAgIGNvbnN0IGxpbmVCdWlsZGVyID0gKHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXM7XG4gICAgICBpZiAobnVtU2xpY2VzICUgMiA9PSAxKSByYWRpYW5zICs9IE1hdGguUEk7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ3gxJywgZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKCd5MScsIGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneDInLFxuICAgICAgICAgIGdldENpcmNsZVgoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3kyJyxcbiAgICAgICAgICBnZXRDaXJjbGVZKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHNsaWNlLCBzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeCA9IGdldENpcmNsZVgocmFkaWFucywgcmFkaXVzKTtcbiAgICAgIGxldCB5ID0gLWdldENpcmNsZVkocmFkaWFucywgcmFkaXVzKTtcblxuICAgICAgaWYgKHggPCAtMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDk7XG4gICAgICAvL2xlZnQgc2lkZSBhZGp1c3RcbiAgICAgIGVsc2UgaWYgKHggPCAxKSB4IC09IHRleHQubGVuZ3RoICogNTsgLy9taWRkbGUgdGV4dCBhZGp1c3RcblxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMub3V0ZXJUZXh0U2l6ZSlcbiAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKFxuICAgICAgYXJjLFxuICAgICAgc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlLFxuICAgICAgc2xpY2UsXG4gICAgICBhdHRyLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3VudCxcbiAgICAgIHBlcmNlbnRcbiAgICApID0+IHtcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bSh7XG4gICAgICAgICAgc3RhcnRBbmdsZTogc3RhcnRBbmdsZSxcbiAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pXG4gICAgICAgIC5hdHRyKCdkJywgYXJjKVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIHZhbHVlICsgXCJyZWN0J11cIikuc3R5bGUoXG4gICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgICAgIDNcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICAgIGlmIChhdHRyID09PSAnQWdlJykge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMVxuICAgICAgICAgICAgICAgIC50ZXh0KGF0dHIgKyAnOiAnICsgdmFsdWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCh2YWx1ZSkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dCgnPDUnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoY291bnQpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXh0Q2lyY2xlM1xuICAgICAgICAgICAgICAudGV4dChcbiAgICAgICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KCcnKTtcbiAgICAgICAgICAgIHRleHRDaXJjbGUyXG4gICAgICAgICAgICAgIC50ZXh0KCdObyBTdHVkZW50cycpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgIHRleHRDaXJjbGUxXG4gICAgICAgICAgICAudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDEpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQyKS5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgdGV4dENpcmNsZTMudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDMpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgdmFsdWUgKyBcInJlY3QnXVwiKS5zdHlsZShcbiAgICAgICAgICAgICdzdHJva2Utd2lkdGgnLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG51bUFyY3MgPT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBwcm92aWRlIGFueSBtb3JlIGRldGFpbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgICAgICBsZXQgbmV3U2xpY2UgPSBzbGljZSArICcsJyArIHZhbHVlO1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVzID0ge1xuICAgICAgICAgICAgICAgIFtuZXdTbGljZV06IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXNbc2xpY2VdKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYXR0cnMuYXR0cmlidXRlSW5kZXguaW5kZXhPZihcbiAgICAgICAgICAgICAgICBhdHRyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIxID09PSBhdHRyKSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUxIGluIG5ld1ZhbHVlc1tuZXdTbGljZV1bXG4gICAgICAgICAgICAgICAgICAgIGF0dHIxXG4gICAgICAgICAgICAgICAgICBdKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdW3ZhbHVlMV1bXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlcyk7XG5cbiAgICAgICAgICAgICAgYXR0cnMuaGlzdG9yeS5wdXNoKHZhbHVlcyk7XG4gICAgICAgICAgICAgIHNiLnJlbmRlcihuZXdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFxuICBcbiAgICAvL2J1aWxkIGFyY3NcbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBhdHRybG9vcDogZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IGFyYyA9IGQzXG4gICAgICAgICAgLmFyYygpXG4gICAgICAgICAgLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiBhcmNDb3VudClcbiAgICAgICAgICAub3V0ZXJSYWRpdXMoXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArIGFyY1dpZHRoICogKGFyY0NvdW50ICsgMSlcbiAgICAgICAgICApO1xuXG4gICAgICAgIGxldCBzbGljZVN0YXJ0QW5nbGUgPSBzbGljZUNvdW50ICogYXJjTGVuZ3RoO1xuXG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICBzdW0gKz0gTnVtYmVyKFxuICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1bSA9PSAwKSB7XG4gICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgKyBhcmNMZW5ndGgsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgJzAnLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gY291bnQgLyBzdW07XG4gICAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgYXJjTGVuZ3RoICogcGVyY2VudCxcbiAgICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcblxuICAgICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgICAgYXJjLFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgcGVyY2VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAobnVtU2xpY2VzID09IDEpIHRleHRCdWlsZGVyKHNsaWNlLCAwLjUpO1xuICAgICAgZWxzZSB0ZXh0QnVpbGRlcihzbGljZSwgc2xpY2VDb3VudCk7XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuXG4gICAgLy9idWlsZCBsaW5lcyBhZnRlciBzbyB0aGV5IGFyZSBvbiB0b3BcbiAgICBmb3IgKFxuICAgICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgICAgc2xpY2VDb3VudCA8IG51bVNsaWNlcyAmJiBudW1TbGljZXMgPiAxO1xuICAgICAgc2xpY2VDb3VudCsrXG4gICAgKSB7XG4gICAgICBsaW5lQnVpbGRlcihzbGljZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5VmFsdWVzKHZhbHVlcywgc2VsZWN0ZWRWYWx1ZSwgYXR0cikge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3Qgc2IgPSB0aGlzO1xuXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZXNbc2xpY2VdW2F0dHJdW3NlbGVjdGVkVmFsdWVdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKFxuICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVtzZWxlY3RlZFZhbHVlXV1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgaWYgKGF0dHIgPT09ICdBZ2UnKVxuICAgICAgICAgIFx0YXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeVtzbGljZUNvdW50XS50ZXh0KCdBZ2U6ICcgKyBzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5W3NsaWNlQ291bnRdLnRleHQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dCgnPDUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJ05vJyk7XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICAnU3R1ZGVudHMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgICAvL2QzLnNlbGVjdChcInRleHRbaWQ9J2VsZW1lbnQuaWQud2l0aC5kb3RzJ11cIik7XG4gICAgY29uc3QgaWQgPSBzZWxlY3RlZFZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWVzKHZhbHVlKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeSkge1xuICAgICAgdGV4dENpcmNsZS50ZXh0KCcnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0ZXh0Q2lyY2xlIG9mIGF0dHJzLnRleHRDaXJjbGVzQ291bnQpIHtcbiAgICAgIHRleHRDaXJjbGUudGV4dCgnJyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQpIHtcbiAgICAgIHRleHRDaXJjbGUudGV4dCgnJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGlkID0gdmFsdWUgKyAncmVjdCc7XG4gICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIGlkICsgXCInXVwiKS5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gIH1cblxuICByZW5kZXJDb21wYXJlKHZhbHVlcykge1xuICAgIC8vSGVscGVyIHZhbHVlc1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3Qgc2IgPSB0aGlzO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdCcpXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gK2NvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSArY29udGFpbmVyLndpZHRoO1xuXG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoOyAvL21pbnVzIGJlY2F1c2Ugb2YgbGVnZW5kXG4gICAgY29uc3QgaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0IC0gYXR0cnMudGl0bGVUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBzYi5jb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG51bVNsaWNlc1xuICAgICk7IC8vcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemVcbiAgICBjb25zdCBhcmNMZW5ndGggPSAyICogTWF0aC5QSTtcblxuICAgIGNvbnN0IHJvd3MgPSBkaW1lbnNpb25zLnJvd3M7XG4gICAgY29uc3QgY29scyA9IGRpbWVuc2lvbnMuY29scztcbiAgICBjb25zdCBzaXplID0gZGltZW5zaW9ucy5zaXplO1xuICAgIGNvbnN0IHdoaXRlc3BhY2VXaWR0aCA9IHdpZHRoIC0gY29scyAqIHNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZUhlaWdodCA9IGhlaWdodCAtIHJvd3MgKiBzaXplO1xuXG4gICAgY29uc3QgbnVtQXJjcyA9IE9iamVjdC5rZXlzKE9iamVjdC52YWx1ZXModmFsdWVzKVswXSlcbiAgICAgIC5sZW5ndGg7XG4gICAgY29uc3QgZXh0ZW5kZWRMaW5lTGVuZ3RoID0gYXR0cnMuZXh0ZW5kZWRMaW5lTGVuZ3RoO1xuICAgIGNvbnN0IGhhbGZTbGljZVJhZGlhbnMgPSBNYXRoLlBJIC8gbnVtU2xpY2VzO1xuICAgIGNvbnN0IHRleHREaXN0YW5jZSA9IGF0dHJzLnRleHREaXN0YW5jZTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhcbiAgICAgIHNpemUsXG4gICAgICBzaXplLFxuICAgICAgbnVtQXJjc1xuICAgICk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICAgY29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgLyogSGVscGVyIG1ldGhvZHMgKi9cblxuICAgIC8vIENvbnZlcnRpbmcgc2xpY2UgbmFtZSB0byB0ZXh0XG4gICAgY29uc3QgZ2V0VGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHdvcmRzLmZpbHRlcihcbiAgICAgICAgKHdvcmQpID0+IHdvcmQgIT09ICdUb3RhbCdcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRMb25nZXN0U2xpY2UgPSAoYXJyYXkpID0+IHtcbiAgICAgIGxldCBsb25nZXN0V29yZCA9ICcnO1xuICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICBpZiAod29yZC5sZW5ndGggPiBsb25nZXN0V29yZC5sZW5ndGgpIHtcbiAgICAgICAgICBsb25nZXN0V29yZCA9IHdvcmQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxvbmdlc3RXb3JkO1xuICAgIH07XG4gICAgY29uc3QgbG9uZ2VzdFNsaWNlVGV4dExlbmd0aCA9IGdldFRleHQoXG4gICAgICBmaW5kTG9uZ2VzdFNsaWNlKE9iamVjdC5rZXlzKHZhbHVlcykpXG4gICAgKS5sZW5ndGg7XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKFxuICAgICAgc2xpY2UsXG4gICAgICBzbGljZUNvdW50LFxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPVxuICAgICAgICAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcyArXG4gICAgICAgIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHQoc2xpY2UpO1xuICAgICAgbGV0IHJhZGl1cyA9XG4gICAgICAgIGlubmVyUmFkaXVzICsgbnVtQXJjcyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHkgPSAtcmFkaXVzO1xuXG4gICAgICBsZXQgc2l6ZU11bHRpcGxpZXIgPSAxLjg7XG4gICAgICBsZXQgb3V0ZXJUZXh0U2l6ZSA9IE1hdGgubWluKFxuICAgICAgICAoc2l6ZU11bHRpcGxpZXIgKiAoMiAqIHJhZGl1cykpIC9cbiAgICAgICAgICBsb25nZXN0U2xpY2VUZXh0TGVuZ3RoLFxuICAgICAgICAzMFxuICAgICAgKTtcblxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgb3V0ZXJUZXh0U2l6ZSArICdweCcpXG4gICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICAvL2FyYyBidWlsZGVyXG4gICAgY29uc3QgYXJjQnVpbGRlciA9IChcbiAgICAgIHN1bmJ1cnN0R3JvdXAsXG4gICAgICBhcmMsXG4gICAgICBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUsXG4gICAgICBzbGljZSxcbiAgICAgIGF0dHIsXG4gICAgICB2YWx1ZVxuICAgICkgPT4ge1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKHtcbiAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSlcbiAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuXG4gICAgICAgICAgICBzYi5kaXNwbGF5VmFsdWVzKHZhbHVlcywgdmFsdWUsIGF0dHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG5cbiAgICAgICAgICAgIHNiLnJlbW92ZVZhbHVlcyh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChudW1BcmNzID09IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gcHJvdmlkZSBhbnkgbW9yZSBkZXRhaWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhdHRycy5hdHRyaWJ1dGVJbmRleC5pbmRleE9mKFxuICAgICAgICAgICAgICAgIGF0dHJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGljZTEgaW4gbmV3VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NsaWNlID0gc2xpY2UxICsgJywnICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE9iamVjdC5hc3NpZ24obmV3VmFsdWVzLCB7XG4gICAgICAgICAgICAgICAgICBbbmV3U2xpY2VdOiBuZXdWYWx1ZXNbc2xpY2UxXSxcbiAgICAgICAgICAgICAgICB9KVtzbGljZTFdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cjEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGF0dHIxID09PSBhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUxIGluIG5ld1ZhbHVlc1tcbiAgICAgICAgICAgICAgICAgICAgICBuZXdTbGljZVxuICAgICAgICAgICAgICAgICAgICBdW2F0dHIxXSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdW3ZhbHVlMV1bXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGF0dHJzLmhpc3RvcnkucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBDbGVhciB0ZXh0Q2lyY2xlIGxpc3RzXG4gICAgYXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeSA9IFtdO1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblx0XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChzbGljZUNvdW50IC8gY29scyk7XG4gICAgICBsZXQgY29sID0gc2xpY2VDb3VudCAlIGNvbHM7XG5cbiAgICAgIGxldCB0cmFuc2xhdGVYID1cbiAgICAgICAgc2l6ZSAvIDIgK1xuICAgICAgICBjb2wgKiBzaXplICtcbiAgICAgICAgKChjb2wgKyAxKSAqIHdoaXRlc3BhY2VXaWR0aCkgLyAoY29scyArIDEpO1xuICAgICAgbGV0IHRyYW5zbGF0ZVkgPVxuICAgICAgICBhdHRycy50aXRsZVRleHRIZWlnaHQgK1xuICAgICAgICBzaXplIC8gMiArXG4gICAgICAgIHJvdyAqIHNpemUgK1xuICAgICAgICAoKHJvdyArIDEpICogd2hpdGVzcGFjZUhlaWdodCkgLyAocm93cyArIDEpO1xuXG4gICAgICBsZXQgc3ZnID0gYXR0cnMuc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCBzaXplKVxuICAgICAgICAuYXR0cignaGVpZ2h0Jywgc2l6ZSlcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pYFxuICAgICAgICApO1xuICAgICAgbGV0IGNlbnRlckdyb3VwID0gc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2VudGVyLWdyb3VwJyk7XG4gICAgICBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZScpXG4gICAgICAgIC5hdHRyKCdjeCcsIDApXG4gICAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJyk7XG5cbiAgICAgIGxldCB0ZXh0Q2lyY2xlMSA9IGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgJy0wLjVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG4gICAgICBcbiAgICAgIGxldCB0ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgJzAuNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUzID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMS41ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuXG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5LnB1c2godGV4dENpcmNsZTEpO1xuICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudC5wdXNoKHRleHRDaXJjbGUyKTtcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudC5wdXNoKHRleHRDaXJjbGUzKTtcblxuICAgICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYgKHN1bSA9PSAwKSB7XG4gICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgKyBhcmNMZW5ndGgsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgIHN1bmJ1cnN0R3JvdXAsXG4gICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICcwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gJ1RvdGFsJykgY29udGludWU7XG4gICAgICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gc2xpY2VTdGFydEFuZ2xlO1xuICAgICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBhcmNMZW5ndGggKiBwZXJjZW50LFxuICAgICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgICAgICAgICAgYXJjLFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuICAgICAgdGV4dEJ1aWxkZXIoc2xpY2UsIC0wLjUsIHN1bmJ1cnN0R3JvdXApO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckxlZ2VuZCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBsZXQgbGVnZW5kID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdC1sZWdlbmQnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgYXR0cnMubGVnZW5kV2lkdGgpO1xuICAgIGxlZ2VuZC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICBcbiAgICBsZXQgeCA9IDIwO1xuICAgIGxldCB5ID0gMTA7XG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4ICsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgICAudGV4dCgnTEVHRU5EJylcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcyMHB4JylcbiAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgXG4gICAgIHkgKz0gMjA7XG4gICAgXG4gICAgbGV0IGZpcnN0U2xpY2UgPSBPYmplY3QudmFsdWVzKHZhbHVlcylbMF07XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGZpcnN0U2xpY2UpIHtcbiAgICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoZmlyc3RTbGljZVthdHRyXSk7XG4gICAgICBsZWdlbmRcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgLnRleHQoYXR0cilcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG5cdFx0XHQgeSArPSAyMDtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgbGVnZW5kXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2lkJywgdmFsdWUgKyAncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KHZhbHVlKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICAgICAgeSArPSAyMDtcbiAgICAgIH1cbiAgICAgIHkgKz0gMTA7XG4gICAgXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDaGFydCB9IGZyb20gJy4vY2hhcnRzLWNsYXNzJztcbmltcG9ydCB7IFN1bmJ1cnN0IH0gZnJvbSAnLi9zdW5idXJzdC1jbGFzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcblx0Ly9zdW5idXJzdCBcbiAgbGV0IHNiOyBcblxuXHQvL1NldCBub2RlIGFuZCBNYWluIHZpeiBTUEEgdXBzXG4gIGRpc3BsYXlOb2RlcygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Vml6O1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheU5vZGVzO1xuIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tb3Blbi1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheUluZm87XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLm9uY2xpY2sgPSBoaWRlSW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tY2xvc2UtYnV0dG9uJykub25jbGljayA9IGhpZGVJbmZvO1xuICBcbiAgZnVuY3Rpb24gZGlzcGxheU5vZGVzKCl7XG4gICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gZGlzcGxheVZpeigpe1xuICAgICAgbGV0IHRlc3QgPSBmYWxzZTtcbiAgICBcdGxldCBhY2FkZW1pY1ZhbHVlc1Rlc3QgPSB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICAgICAgIERlZ3JlZTogWydCYWNoZWxvcnMnLCAnTWFzdGVycycsICdQaC5ELiddLFxuICAgICAgICAgICAgIEZhY3VsdHk6IFsnQnVzaW5lc3MnXSxcbiAgICAgICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydQYXJ0LXRpbWUnLCAnQ28tb3AnXVxuICAgICAgICAgIH07XG4gICAgICAgbGV0IGRpdmVyc2l0eVZhbHVlc1Rlc3QgPSB7ICAgICBcbiAgICAgICAgICAgICAgQWdlOiBbJzw9MTcnLCAnMTgtMjAnLCAnMjYtMzAnLCAnNTUrJ10sXG4gICAgICAgICAgICAgIFNleDogIFsnTWFsZScsICdGZW1hbGUnXSxcbiAgICAgICAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFsnSW50ZXJuYXRpb25hbCcsICdEb21lc3RpYyddXG4gICAgICAgfVxuXG4gICAgXHRpZiAoc2Ipe1xuICAgICAgICAgbGV0IGRpdmVyc2l0eVZhbHVlcyA9IHRlc3Q/ZGl2ZXJzaXR5VmFsdWVzVGVzdDogaHQuZGl2ZXJzaXR5VmFsdWVzKCk7XG4gICAgICAgICBsZXQgYWNhZGVtaWNWYWx1ZXMgPSB0ZXN0P2FjYWRlbWljVmFsdWVzVGVzdDogaHQuYWNhZGVtaWNWYWx1ZXMoKTtcblxuICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICBcdCBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIGlmICghdmFsaWQpe1xuICAgICAgICAgICBcdGNvbnNvbGUubG9nKGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgIFx0XHRhbGVydCgnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgZGl2ZXJzaXR5IGF0dHJpYnV0ZScpOyAgXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBcdCBcdFx0IHNiLmluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWxlcnQoJ1BsZWFzZSB3YWl0IGZvciB0aGUgZGF0YSB0byBmaW5pc2ggbG9hZGluZycpO1xuICAgICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5SW5mbygpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG4gIFxuICBmdW5jdGlvbiBoaWRlSW5mbygpe1xuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBsZXQgaHQgPSBuZXcgQ2hhcnQoKVxuICAgICAuY29udGFpbmVyKCcjY2hhcnQnKVxuICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5pbml0aWFsWm9vbSgwLjMpXG4gICAgIC5yZW5kZXIoKVxuXG4gIG5ldyBTdW5idXJzdCgpXG4gICAgICAgICAuY29udGFpbmVyKCcjc3VuYnVyc3QnKVxuICAgICAgICAgLnN2Z1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgXHRcdFx0IC5kaXNwbGF5Tm9kZXMoZGlzcGxheU5vZGVzKVxuICAgIFx0XHQgLnNldHVwKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZWw1NTgvN2QyY2I1MjU4OTIxMTE5ZGY1ODg0Y2M5MDkwMmU4NGQvcmF3LzAwODI3YjlkNTMyODgzMzQzMTkxZjYxNDRkNDFkMGEwYmJhZDVkZjgvZmFsbC5jc3YnKVxuXHRcdFx0XHQgLnRoZW4odmFsdWUgPT4gc2IgPSB2YWx1ZSk7XG59KTtcblxuXG5cblxuXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUFBLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQztFQUNuQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDN0I7RUFDQSxNQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztFQUMzQyxNQUFNLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDO0VBQ2xELE1BQU0sMEJBQTBCLEdBQUcsdUJBQXVCLENBQUM7QUFDM0Q7RUFDQSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7RUFDM0IsTUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztBQUNuRDtBQUNBO0FBQ0E7RUFDQSxNQUFNLFlBQVksR0FBRztFQUNyQixFQUFFLFVBQVUsRUFBRTtFQUNkLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsSUFBSSxXQUFXLEVBQUUsOENBQThDO0VBQy9ELEdBQUc7RUFDSCxFQUFFLFFBQVEsRUFBRTtFQUNaLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsSUFBSSxXQUFXLEVBQUUsMkNBQTJDO0VBQzVELEdBQUc7RUFDSCxFQUFFLE9BQU8sRUFBRTtFQUNYLElBQUksT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztFQUN0QyxJQUFJLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztFQUNwSSxHQUFHLGlCQUFpQixFQUFFLEVBQUU7RUFDeEIsSUFBSSxJQUFJLEVBQUUsdUJBQXVCO0VBQ2pDLElBQUksV0FBVyxFQUFFLDRFQUE0RTtFQUM3RixHQUFHO0VBQ0gsRUFBRSxlQUFlLEVBQUU7RUFDbkIsSUFBSSxPQUFPLEVB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LFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDM0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3JELEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNoRCxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3BELENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRCxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDdEQsRUFBRSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3hELEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxD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SUFBSSxFQUFFO0VBQ3JDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNUO0VBQ0E7RUFDQSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztBQUNoRDtFQUNBO0VBQ0EsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZEO0VBQ0E7RUFDQSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekQ7RUFDQTtFQUNBLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNsQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0VBQzdCLEtBQUssQ0FBQztBQUNOO0VBQ0E7RUFDQSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVCLEdBQUc7QUFDSDtFQUNBO0VBQ0EsRUFBRSxlQUFlLENBQUMsQ0FBQyxFQUFFO0VBQ3JCO0VBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0VBQ3pCO0VBQ0EsTUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzVCO0VBQ0E7RUFDQSxNQUFNLE9BQU8sTUFBTSxFQUFFO0VBQ3JCO0VBQ0EsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7RUFDOUIsVUFBVSxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDN0MsU0FBUztBQUNUO0VBQ0E7RUFDQSxRQUFRLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQy9CLE9BQU87RUFDUCxL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