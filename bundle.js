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
    Uncollected_Node_Fill: {"red":178,"green":223,"blue":138,"alpha":1},
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
      textColor: colors.White,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: true
    },
    [UNCOLLECTED_ATTRIBUTE_NODE] : {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Black,
      backgroundColor: colors.Uncollected_Node_Fill,
      textColor: colors.White,
      connectorLineColor: colors.Transparent,
      expandable: true,
      clickable: false
    },
    [ACADEMIC_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      borderColor: colors.Black,
      backgroundColor: colors.Academic_Node_Fill,
      textColor: colors.White,
      connectorLineColor: colors.Black,
      expandable: true,
      clickable: true
    },
    [EDI_ATTRIBUTE_NODE]: {
      width: sizes.Medium.width,
      height: sizes.Medium.height,
      backgroundColor: colors.Diversity_Node_Fill,
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
      backgroundColor: colors.Uncollected_Node_Fill,
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
        textBuilder(40, y, 'ATTRIBUTES', '20px');
      	y+=30;
        for (const attr in attrs.academicValues){
        	if (attrs.academicValues[attr].length > 1 || (attrs.academicValues[attr].length === 1 && attrs.academicValues[attr][0] !== 'Total')){
          	textBuilder(50, y, attr, '15px');
            y+=30;
          }
        }
        
        for (const attr in attrs.diversityValues){
        	if (attrs.diversityValues[attr].length > 0){
           textBuilder(50, y, attr, '15px');
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
  	
      // render selected attributes
      this.renderSelectedAttributes();
      
      //  Assigns the x and y position for the nodes
      const treeData = attrs.layouts.treemap(attrs.root);

      const isAttributeNode = (node) => (node && node.parent && (node.parent.id === 'Convocated' || node.parent.id === 'Enrolled'));
      
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
        selector: 'node-text',
        data: (d) => [d],
      });
      
      	nodeEnter
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
          			if (isAttributeNode(d)){
                 	return (d.children && d.children.every(clicked)) || (d._children && d._children.every(clicked)) ? this.rgbaObjToColor(colors.White) : attrs.backgroundColor; 
                } else {
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
        .attr('transform', (d) => {})
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
       
       (d.children || d._children).forEach((d) => this.onButtonClick(d, !allSelected, allSelected, false));
       this.onButtonClick(d, false, false, true);
     }
    
    
    // Toggle children on click.
    onButtonClick(d, selectOption, compressOption, updateOption) {
      const defaultToTrue = (bool) => typeof bool === 'undefined' ? true : bool;

      const compress = defaultToTrue(compressOption); //defaults to true
      
      const select = defaultToTrue(selectOption);
      const deselect = defaultToTrue(!selectOption);
      
      const update = defaultToTrue(updateOption);
      
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
        } else {
          if (data.borderWidth === attrs.unclickedWidth){ //unclicked
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
        }
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
        centerTextSize: '25px',
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

  			return list.join();
      };
       
      const width = d3
        .select('#sunburst')
        .node()
        .getBoundingClientRect().width - attrs.legendWidth;
      
      let title = d3
        .select('#title-text')
        .style('font-size', attrs.centerTextSize)
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

      const height = containerHeight-attrs.centerTextHeight;
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
          `translate(${width / 2},${height/ 2  + attrs.centerTextHeight})`
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTlZJU0lCTEVfTk9ERSA9ICdJTlZJU0lCTEUnO1xuY29uc3QgUkVQT1JUX05PREUgPSAnUkVQT1JUJztcblxuY29uc3QgRURJX0FUVFJJQlVURV9OT0RFID0gJ0VESV9BVFRSSUJVVEUnO1xuY29uc3QgQUNBREVNSUNfQVRUUklCVVRFX05PREUgPSAnT1RIRVJfQVRUUklCVVRFJztcbmNvbnN0IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFID0gJ1VOQ09MTEVDVEVEX0FUVFJJQlVURSc7XG5cbmNvbnN0IFZBTFVFX05PREUgPSAnVkFMVUUnO1xuY29uc3QgVU5DT0xMRUNURURfVkFMVUVfTk9ERSA9ICdVTkNPTExFQ1RFRF9WQUxVRSc7XG5cblxuXG5jb25zdCBpbml0aWFsTm9kZXMgPSB7XG4gIENvbnZvY2F0ZWQ6IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBudW1iZXIgb2Ygc3R1ZGVudHMgdGhhdCBoYXZlIGNvbnZvY2F0ZWQuJ1xuICB9LFxuICBFbnJvbGxlZDoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGFyZSBlbnJvbGxlZC4nXG4gIH0sXG4gIEZhY3VsdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0ZWQnLCdFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydTVEVNJywgJ05vbi1TVEVNJywgJ0VuZ2luZWVyaW5nICYgRGVzaWduJywgJ1NjaWVuY2UnLCAnUHVibGljIEFmZmFpcnMnLCAnQnVzaW5lc3MnLCAnQXJ0cyAmIFNvY2lhbCBTY2llbmNlcyddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0RlcGFydG1lbnQgYW5kIGZhY3VsdHkgYXJlIG1hcHBlZCBmcm9tIHN0dWRlbnQgZGVncmVlIGFuZCBtYWpvciBvciBtYWpvcnMuJ1xuICB9LFxuICAnQWNhZGVtaWMgWWVhcic6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0ZWQnLCdFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWycyMDEzLzE0JyxcbiAgICAgICcyMDE0LzE1JyxcbiAgICAgICcyMDE1LzE2JyxcbiAgICAgICcyMDE2LzE3JyxcbiAgICAgICcyMDE3LzE4JyxcbiAgICAgICcyMDE4LzE5JyxcbiAgICAgICcyMDE5LzIwJyxcbiAgICAgICcyMDIwLzIxJyxdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0FjYWRlbWljIFllYXIgaXMgbWFkZSB1cCBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsLCBXaW50ZXIpLidcbiAgfSxcbiAgRGVncmVlOiB7XG4gICAgcGFyZW50czogWydDb252b2NhdGVkJywnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnQmFjaGVsb3JzJyxcbiAgICAgICdNYXN0ZXJzJyxcbiAgICAgICdQaC5ELiddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0xldmVsIG9mIHN0dWR5IG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydQYXJ0LXRpbWUnLFxuICAgICAgJ0Z1bGwtdGltZScsXG4gICAgICAnQ28tb3AnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdBIGZ1bGwtdGltZSBzdHVkZW50IGlzIGVucm9sbGVkIGluIDMgb3IgbW9yZSBjcmVkaXRzIGFjcm9zcyB0aGUgRmFsbCBhbmQgV2ludGVyIHRlcm1zIHdoZXJlYXMgYSBwYXJ0LXRpbWUgc3R1ZGVudCBpcyBlbnJvbGxlZCBpbiBsZXNzLidcbiAgfSxcbiAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0RvbWVzdGljJyxcbiAgICAgICdJbnRlcm5hdGlvbmFsJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1N0dWRlbnRzIGFyZSBjYXRlZ29yaXplZCBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgYXJlIGNoYXJnZWQgZG9tZXN0aWMgb3IgaW50ZXJuYXRpb25hbCBmZWVzLidcbiAgfSxcbiAgQWdlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogW1xuICAgICAgJzw9MTcnLFxuICAgICAgJzE4LTIwJyxcbiAgICAgICcyMS0yNScsXG4gICAgICAnMjYtMzAnLFxuICAgICAgJzMxLTM1JyxcbiAgICAgICczNi00NScsXG4gICAgICAnNDYtNTUnLFxuICAgICAgJzU1KycsXG4gICAgXSxcbiAgICB1bmNvbGxlY3RlZFZhbHVlczogWyc1NS01OScsJzYwLTY0JywnNjUtNjknLCAnNzAtNzQnLCAnNzUtNzknLCAnODArJ10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGFnZSByYW5nZXMgb2Ygc3R1ZGVudHMuJ1xuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0ZWQnLCdFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydGZW1hbGUnLCAnTWFsZSddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ05vbi1iaW5hcnknXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIG1pc2xhYmVsZWQgYnkgdGhlIHVuaXZlcnNpdHkuIFRoZSBjb3JyZWN0IGxhYmVsIHNob3VsZCBiZSBcXCdHZW5kZXJcXCcgYW5kIGFsbCBnZW5kZXJzIHNob3VsZCBiZSBjb2xsZWN0ZWQuJ1xuXHR9LFxuICBSYWNlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSByYWNlIG9mIGEgc3R1ZGVudC4nXG5cdH0sXG4gICdSZWxpZ2lvbi9TcGlyaXR1YWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSByZWxpZ2lvbi9zcGlyaXR1YWxpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ1JlZ2lvbmFsIElkZW50aXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgcmVnaW9uYWwgaWRlbnRpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0Rpcy9hYmlsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgZGlzL2FiaWxpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgSW5kaWdlbmVpdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydGaXJzdCBOYXRpb25zJywgJ01ldGlzJywgJ0ludWl0J10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGluZGlnZW5laXR5IG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdGaXJzdCBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGZpcnN0IGxhbmd1YWdlIG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdPdGhlciBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIG90aGVyIGxhbmd1YWdlIG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdFdGhuaWNpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSBldGhuaWNpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ05hdGlvbic6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIG5hdGlvbiBvZiBvcmlnaW4gb2YgYSBzdHVkZW50LidcbiAgfSxcbn1cblxuXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xuICBSZXBvcnRfTm9kZV9GaWxsOiB7XCJyZWRcIjozMSxcImdyZWVuXCI6MTIwLFwiYmx1ZVwiOjE4MCxcImFscGhhXCI6MX0sXG4gIERpdmVyc2l0eV9Ob2RlX0ZpbGw6IHtcInJlZFwiOjUxLFwiZ3JlZW5cIjoxNjAsXCJibHVlXCI6NDQsXCJhbHBoYVwiOjF9LFxuICBBY2FkZW1pY19Ob2RlX0ZpbGw6IHtcInJlZFwiOjE2NixcImdyZWVuXCI6MjA2LFwiYmx1ZVwiOjIyNyxcImFscGhhXCI6MX0sXG4gIFVuY29sbGVjdGVkX05vZGVfRmlsbDoge1wicmVkXCI6MTc4LFwiZ3JlZW5cIjoyMjMsXCJibHVlXCI6MTM4LFwiYWxwaGFcIjoxfSxcbiAgVHJhbnNwYXJlbnQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MH0sXG4gIFdoaXRlOiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbHVlOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsYWNrOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9LFxuICBHcmV5OiB7XCJyZWRcIjoxNDEsXCJncmVlblwiOjE2MCxcImJsdWVcIjoyMDMsXCJhbHBoYVwiOjF9LFxuXHRHcmVlbjoge1wicmVkXCI6MTAyLFwiZ3JlZW5cIjoxOTQsXCJibHVlXCI6MTY1LFwiYWxwaGFcIjoxfSxcbiAgT3JhbmdlOiB7XCJyZWRcIjoyNTIsXCJncmVlblwiOjE0MSxcImJsdWVcIjo5OCxcImFscGhhXCI6IDF9LFxuICBTbGF0ZV9HcmV5IDoge1wicmVkXCI6NjEsXCJncmVlblwiOjcyLFwiYmx1ZVwiOjczLFwiYWxwaGFcIjoxfSxcbiAgQnV0dG9uOiB7XCJyZWRcIjoxMDAsXCJncmVlblwiOjEwMCxcImJsdWVcIjoxMDAsXCJhbHBoYVwiOjF9LFxuICBEaXNhYmxlZDoge1wicmVkXCI6MTAwLFwiZ3JlZW5cIjoxMDAsXCJibHVlXCI6MTAwLFwiYWxwaGFcIjowLjJ9LFxuICBEaXNhYmxlZF9UZXh0OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjAuMn0sXG59XG5cbmNvbnN0IHNpemVzID0ge1xuXHRMYXJnZToge3dpZHRoOiAyNzAsIGhlaWdodDogNzB9LFxuICBNZWRpdW06IHt3aWR0aDogMjgwLCBoZWlnaHQ6IDcwfSxcblx0U21hbGw6IHt3aWR0aDogMzMwLCBoZWlnaHQ6IDcwfVxufVxuXG5jb25zdCBib3JkZXJXaWR0aCA9IDVcbmNvbnN0IGJvcmRlclJhZGl1cyA9IDVcbmNvbnN0IGNvbm5lY3RvckxpbmVXaWR0aCA9IDVcblxuY29uc3Qgbm9kZURpbWVuc2lvbnMgPSB7XG4gIFtJTlZJU0lCTEVfTk9ERV0gOiB7XG4gICAgd2lkdGg6IHNpemVzLkxhcmdlLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTGFyZ2UuaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgdGV4dENvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgY2xpY2thYmxlOiBmYWxzZVxuICB9LFxuXHRbUkVQT1JUX05PREVdIDoge1xuICBcdHdpZHRoOiBzaXplcy5MYXJnZS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLkxhcmdlLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLlJlcG9ydF9Ob2RlX0ZpbGwsXG4gICAgdGV4dENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1VOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXSA6IHtcbiAgICB3aWR0aDogc2l6ZXMuTWVkaXVtLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTWVkaXVtLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICB0ZXh0Q29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfSxcbiAgW0FDQURFTUlDX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIFtFRElfQVRUUklCVVRFX05PREVdOiB7XG4gICAgd2lkdGg6IHNpemVzLk1lZGl1bS53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLk1lZGl1bS5oZWlnaHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGNvbm5lY3RvckxpbmVDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIFtWQUxVRV9OT0RFXToge1xuICBcdHdpZHRoOiBzaXplcy5TbWFsbC53aWR0aCxcbiAgICBoZWlnaHQ6IHNpemVzLlNtYWxsLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkJsYWNrLFxuICAgIHRleHRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgdGV4dENvbG9yOiBjb2xvcnMuV2hpdGUsXG5cdFx0Y29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuR3JleSxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBjbGlja2FibGU6IGZhbHNlXG4gIH1cbn1cblxuY29uc3QgbWFrZU5vZGUgPSAobm9kZUlkLCBwYXJlbnROb2RlSWRzLCBub2RlVHlwZSwgcGFyZW50Tm9kZVR5cGUpID0+IHtcblx0bGV0IG5vZGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vZGVEaW1lbnNpb25zW25vZGVUeXBlXSkpO1xuICBub2RlLm5vZGVJZCA9IG5vZGVJZDtcbiAgbm9kZS5wYXJlbnROb2RlSWRzID0gcGFyZW50Tm9kZUlkcztcblx0bm9kZS5leHBhbmRlZCA9IGZhbHNlO1xuICBub2RlLmJvcmRlcldpZHRoID0gYm9yZGVyV2lkdGg7XG4gIG5vZGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzO1xuICBub2RlLmNvbm5lY3RvckxpbmVXaWR0aCA9IGNvbm5lY3RvckxpbmVXaWR0aDtcbiBcdGlmIChpbml0aWFsTm9kZXNbbm9kZUlkXSlcbiAgICBcdG5vZGUuZGVzY3JpcHRpb24gPSBcIlwiIHx8IGluaXRpYWxOb2Rlc1tub2RlSWRdLmRlc2NyaXB0aW9uO1xuICBcbiAgaWYgKG5vZGVUeXBlID09IFZBTFVFX05PREUpe1xuICAgIG5vZGUuYmFja2dyb3VuZENvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJhY2tncm91bmRDb2xvcjsgXG4gIFx0Ly9ub2RlLmJvcmRlckNvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJvcmRlckNvbG9yOyBcbiAgICBub2RlLmNvbm5lY3RvckxpbmVDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgXG4gICAgaWYgKG5vZGVJZCA9PT0gJ1NURU0nKXtcbiAgICBcdG5vZGUuZGVzY3JpcHRpb24gPSAnQWdncmVnYXRpb24gb2YgZmFjdWx0eSBvZiBTY2llbmNlLCBFbmdpbmVlcmluZyAmIERlc2lnbiBhbmQgTWF0aGVtYXRpY3MnXG4gICAgfSBlbHNlIGlmIChub2RlSWQgPT09ICdOb24tU1RFTScpe1xuICAgICAgbm9kZS5kZXNjcmlwdGlvbiA9ICdBZ2dyZWdhdGlvbiBvZiBhbGwgbm9uLVNURU0gZmFjdWx0aWVzJ1xuICAgIH0gXG4gIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IFVOQ09MTEVDVEVEX1ZBTFVFX05PREUpe1xuICAgXHRub2RlLmJvcmRlckNvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJvcmRlckNvbG9yOyAgXG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmNvbnN0IHBvcHVsYXRlTm9kZXMgPSAobm9kZXMsIGluaXRpYWxOb2RlcykgPT4ge1xuXHRmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsTm9kZXMpIHtcbiAgICBjb25zdCBub2RlID0gaW5pdGlhbE5vZGVzW2tleV07XG5cbiAgICBpZiAobm9kZS50eXBlID09PSBSRVBPUlRfTk9ERSl7XG4gICAgXHRcdG5vZGVzLnB1c2gobWFrZU5vZGUoa2V5LCBbJ1Jvb3QnXSwgUkVQT1JUX05PREUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgbm9kZS5wYXJlbnRzLCBub2RlLnR5cGUpKTsgLy9saW5rIHRvIGZpcnN0IHBhcmVudFxuICAgICAgXHQvL2xldCBpbnZpc2libGVJRCA9ICdpbnZpc2libGUnK2tleTtcbiAgICAgIFx0Ly9ub2Rlcy5wdXNoKG1ha2VOb2RlKGludmlzaWJsZUlELCBba2V5XSwgSU5WSVNJQkxFX05PREUsIG5vZGUudHlwZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5jb2xsZWN0ZWRWYWx1ZXMpXG4gICAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShsaW5rLCBba2V5XSwgVkFMVUVfTk9ERSwgbm9kZS50eXBlKSk7XG4gICAgICAgIGZvciAoY29uc3QgbGluayBvZiBub2RlLnVuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFVOQ09MTEVDVEVEX1ZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgIH1cblx0fVxufVxuXG5leHBvcnQgY29uc3Qgbm9kZXMgPSBbbWFrZU5vZGUoJ1Jvb3QnLCBbbnVsbF0sIElOVklTSUJMRV9OT0RFKV07XG5wb3B1bGF0ZU5vZGVzKG5vZGVzLCBpbml0aWFsTm9kZXMpO1xuXG5cblxuXG5cbiIsImltcG9ydCB7IG5vZGVzLCBjb2xvcnMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiA4MDAsXG4gICAgICBzdmdIZWlnaHQ6IDYwMCxcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGVmYXVsdFRleHRGaWxsOiAnIzJDM0U1MCcsXG4gICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICBkZWZhdWx0Rm9udDogJ0hlbHZldGljYScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgZGF0YTogbm9kZXMsXG4gICAgICBub2RlczogbnVsbCxcbiAgICAgIGNvbm5lY3RvckxldmVsczogMixcbiAgICAgIGRlcHRoOiAxODAsXG4gICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgc3Ryb2tlV2lkdGg6IDMsXG4gICAgICBpbml0aWFsWm9vbTogMSxcbiAgICAgIGFjYWRlbWljVmFsdWVzOiB7XG4gICAgICAgICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICBEZWdyZWU6IFsnVG90YWwnXSxcbiAgICAgICAgRmFjdWx0eTogWydUb3RhbCddLFxuICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydUb3RhbCddLFxuICAgICAgfSxcbiAgICAgIGRpdmVyc2l0eVZhbHVlczoge1xuICAgICAgICBBZ2U6IFtdLFxuICAgICAgICBTZXg6IFtdLFxuICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogW10sXG4gICAgICB9LFxuICAgICAgb25Ob2RlQ2xpY2s6IG51bGwsXG4gICAgICB0b29sdGlwRGl2OiBudWxsLFxuICAgICAgbnVtRXhwYW5kZWQ6IDAsXG4gICAgICB1bmNsaWNrZWRXaWR0aDogNSxcbiAgICAgIGNsaWNrZWRXaWR0aDogMTUsXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy8gRHluYW1pY2FsbHkgc2V0IGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgQ2hhcnQgY2xhc3NcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gICAgXG5cblx0XHR0aGlzLnJlbmRlckxlZ2VuZCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUVudGVyRXhpdFVwZGF0ZVBhdHRlcm4oKTtcbiAgfVxuXG4gIGluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCkge1xuICAgIGQzLnNlbGVjdGlvbi5wcm90b3R5cGUucGF0dGVybmlmeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzO1xuICAgICAgdmFyIHNlbGVjdG9yID0gcGFyYW1zLnNlbGVjdG9yO1xuICAgICAgdmFyIGVsZW1lbnRUYWcgPSBwYXJhbXMudGFnO1xuICAgICAgdmFyIGRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbc2VsZWN0b3JdO1xuXG4gICAgICAvLyBQYXR0ZXJuIGluIGFjdGlvblxuICAgICAgdmFyIHNlbGVjdGlvbiA9IGNvbnRhaW5lclxuICAgICAgICAuc2VsZWN0QWxsKCcuJyArIHNlbGVjdG9yKVxuICAgICAgICAuZGF0YShkYXRhLCAoZCwgaSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChkLmlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSk7XG4gICAgICBzZWxlY3Rpb24uZXhpdCgpLnJlbW92ZSgpO1xuICAgICAgc2VsZWN0aW9uID0gc2VsZWN0aW9uXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoZWxlbWVudFRhZylcbiAgICAgICAgLm1lcmdlKHNlbGVjdGlvbik7XG4gICAgICBzZWxlY3Rpb24uYXR0cignY2xhc3MnLCBzZWxlY3Rvcik7XG4gICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH07XG4gIH1cblxuICByZW5kZXJMZWdlbmQoKXtcbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgY29uc3QgbGVnZW5kID0gZDMuc2VsZWN0KCcjbm9kZS1sZWdlbmQnKTtcbiAgICBjb25zdCB3aWR0aCA9IDEyLCBoZWlnaHQgPSAxMjtcbiAgICBjb25zdCByZWN0QnVpbGRlciA9ICh4LCB5LCBjb2xvcikgPT4ge1xuICAgIFx0ICBsZWdlbmQgXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3IpKVxuICAgICAgXHRcdC5zdHlsZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHgsIHksIHRleHQsIHNpemUpID0+IHtcbiAgICAgICAgICBsZWdlbmRcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc2l6ZSlcbiAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB0ZXh0QnVpbGRlcig2MCwgMTAsICdMRUdFTkQnLCAnMjBweCcpO1xuICAgIHJlY3RCdWlsZGVyKDIwLCAzNCwgY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDY0LCBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDk0LCBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNDAsICdVbmNvbGxlY3RlZCBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNzAsICdEaXZlcnNpdHkgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gXHRcdHRleHRCdWlsZGVyKDQwLCAxMDAsICdBY2FkZW1pYyBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgfVxuICBcbiAgcmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKCl7XG4gICAgXHRjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gIFx0ICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KCcjc2VsZWN0ZWQtYXR0cmlidXRlcycpO1xuICAgIFx0IHNlbC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICBcbiAgXHRcdCBjb25zdCB0ZXh0QnVpbGRlciA9ICh4LCB5LCB0ZXh0LCBzaXplKSA9PiB7XG4gICAgICAgICAgc2VsXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAgIC50ZXh0KHRleHQpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHNpemUpXG4gICAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcdH1cbiAgICAgICBcbiAgICAgIGxldCB5ID0gMTA7XG4gICAgICB0ZXh0QnVpbGRlcig0MCwgeSwgJ0FUVFJJQlVURVMnLCAnMjBweCcpO1xuICAgIFx0eSs9MzA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuYWNhZGVtaWNWYWx1ZXMpe1xuICAgICAgXHRpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMSB8fCAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAxICYmIGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdWzBdICE9PSAnVG90YWwnKSl7XG4gICAgICAgIFx0dGV4dEJ1aWxkZXIoNTAsIHksIGF0dHIsICcxNXB4Jyk7XG4gICAgICAgICAgeSs9MzA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICBcdGlmIChhdHRycy5kaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICB0ZXh0QnVpbGRlcig1MCwgeSwgYXR0ciwgJzE1cHgnKTtcbiAgICAgICAgICB5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLy8gVGhpcyBtZXRob2QgcmV0cmlldmVzIHBhc3NlZCBub2RlJ3MgY2hpbGRyZW4gSUQncyAoaW5jbHVkaW5nIG5vZGUpXG4gIGdldE5vZGVDaGlsZHJlbklkcyhcbiAgICB7IGRhdGEsIGNoaWxkcmVuLCBfY2hpbGRyZW4gfSxcbiAgICBub2RlSWRzU3RvcmVcbiAgKSB7XG4gICAgLy8gU3RvcmUgY3VycmVudCBub2RlIElEXG4gICAgbm9kZUlkc1N0b3JlLnB1c2goZGF0YS5ub2RlSWQpO1xuXG4gICAgLy8gTG9vcCBvdmVyIGNoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoZXhwYW5kZWQgbm9kZXMpXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgX2NoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoY29sbGFwc2VkIG5vZGVzKVxuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIG5vZGVJZHNTdG9yZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRab29tRmFjdG9yIEFQSSwgaXQgem9vbXMgdG8gcGFydGljdWxhdCBzY2FsZVxuICBzZXRab29tRmFjdG9yKHpvb21MZXZlbCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgY2FsYyA9IGF0dHJzLmNhbGM7XG5cbiAgICAvLyBTdG9yZSBwYXNzZWQgem9vbSBsZXZlbFxuICAgIGF0dHJzLmluaXRpYWxab29tID0gem9vbUxldmVsO1xuXG4gICAgLy8gUmVzY2FsZSBjb250YWluZXIgZWxlbWVudCBhY2NvcmRpbmdseVxuICAgIGF0dHJzLmNlbnRlckcuYXR0cihcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgYCB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCAke1xuICAgICAgICBjYWxjLm5vZGVNYXhIZWlnaHQgLyAyXG4gICAgICB9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvL0lubmVyRnVuY3Rpb25zIHdoaWNoIHdpbGwgdXBkYXRlIHZpc3VhbHNcblxuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3QgdGhpc09ialJlZiA9IHRoaXM7XG5cbiAgICAvL0RyYXdpbmcgY29udGFpbmVyc1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpO1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXJcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoY29udGFpbmVyUmVjdC53aWR0aCA+IDApXG4gICAgICBhdHRycy5zdmdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG5cblxuICAgIC8vQ2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgY29uc3QgY2FsYyA9IHtcbiAgICAgIGlkOiBudWxsLFxuICAgICAgY2hhcnRUb3BNYXJnaW46IG51bGwsXG4gICAgICBjaGFydExlZnRNYXJnaW46IG51bGwsXG4gICAgICBjaGFydFdpZHRoOiBudWxsLFxuICAgICAgY2hhcnRIZWlnaHQ6IG51bGwsXG4gICAgfTtcbiAgICBjYWxjLmlkID0gYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gOyAvLyBpZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgY2FsYy5jaGFydExlZnRNYXJnaW4gPSBhdHRycy5tYXJnaW5MZWZ0O1xuICAgIGNhbGMuY2hhcnRUb3BNYXJnaW4gPSBhdHRycy5tYXJnaW5Ub3AgKyA1MDtcbiAgICBjYWxjLmNoYXJ0V2lkdGggPVxuICAgICAgYXR0cnMuc3ZnV2lkdGggLVxuICAgICAgYXR0cnMubWFyZ2luUmlnaHQgLVxuICAgICAgY2FsYy5jaGFydExlZnRNYXJnaW47XG4gICAgY2FsYy5jaGFydEhlaWdodCA9XG4gICAgICBhdHRycy5zdmdIZWlnaHQgLVxuICAgICAgYXR0cnMubWFyZ2luQm90dG9tIC1cbiAgICAgIGNhbGMuY2hhcnRUb3BNYXJnaW47XG4gICAgYXR0cnMuY2FsYyA9IGNhbGM7XG5cbiAgICAvLyBHZXQgbWF4aW11bSBub2RlIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBjYWxjLm5vZGVNYXhXaWR0aCA9IGQzLm1heChcbiAgICAgIGF0dHJzLmRhdGEsXG4gICAgICAoeyB3aWR0aCB9KSA9PiB3aWR0aFxuICAgICk7XG4gICAgY2FsYy5ub2RlTWF4SGVpZ2h0ID0gZDMubWF4KFxuICAgICAgYXR0cnMuZGF0YSxcbiAgICAgICh7IGhlaWdodCB9KSA9PiBoZWlnaHRcbiAgICApO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG1heCBub2RlIGRlcHRoIChpdCdzIG5lZWRlZCBmb3IgbGF5b3V0IGhlaWdodHMgY2FsY3VsYXRpb24pXG4gICAgYXR0cnMuZGVwdGggPSBjYWxjLm5vZGVNYXhIZWlnaHQgKyAxMDA7XG4gICAgY2FsYy5jZW50ZXJYID0gY2FsYy5jaGFydFdpZHRoIC8gMiAtIDgwO1xuXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKiAgTEFZT1VUUyAgKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBjb25zdCBsYXlvdXRzID0ge1xuICAgICAgdHJlZW1hcDogbnVsbCxcbiAgICB9O1xuICAgIGF0dHJzLmxheW91dHMgPSBsYXlvdXRzO1xuXG4gICAgLy8gR2VuZXJhdGUgdHJlZSBsYXlvdXQgZnVuY3Rpb25cbiAgICBsYXlvdXRzLnRyZWVtYXAgPSBkM1xuICAgICAgLnRyZWUoKVxuICAgICAgLnNlcGFyYXRpb24oZnVuY3Rpb24oYSwgYikgeyBcbiAgICAgIFxuICAgICAgXHRpZiAoYS5wYXJlbnQuaWQgPT09IGIucGFyZW50LmlkKXtcbiAgICAgICAgICBpZiAoYS5kYXRhLndpZHRoID09PSAyODApeyAvL2F0dHJpYnV0ZVxuICAgICAgICAgIFx0cmV0dXJuIDAuOTsgXG4gICAgICAgICAgfSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgXHRyZXR1cm4gMS4yOyBcbiAgICAgICAgfVxuICAgICAgXHRyZXR1cm4gMTtcbiAgICBcdH0pXG4gICAgICAuc2l6ZShbY2FsYy5jaGFydFdpZHRoLCBjYWxjLmNoYXJ0SGVpZ2h0XSlcbiAgICAgIC5ub2RlU2l6ZShbXG4gICAgICAgIGNhbGMubm9kZU1heFdpZHRoKzEwLFxuICAgICAgICBjYWxjLm5vZGVNYXhIZWlnaHQgKyBhdHRycy5kZXB0aCxcbiAgICAgIF0pO1xuXG5cbiAgICBcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqIEJFSEFWSU9SUyAuICoqKioqKioqKioqKioqKioqKioqKipcbiAgICBjb25zdCBiZWhhdmlvcnMgPSB7XG4gICAgICB6b29tOiBudWxsLFxuICAgIH07XG5cbiAgICAvLyBHZXQgem9vbWluZyBmdW5jdGlvblxuICAgIGJlaGF2aW9ycy56b29tID0gZDNcbiAgICAgIC56b29tKClcbiAgICAgIC5vbignem9vbScsIChkKSA9PiB0aGlzLnpvb21lZChkKSk7XG5cbiAgICAvLyoqKioqKioqKioqKioqKioqKiBST09UIG5vZGUgd29yayAqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vIENvbnZlcnQgZmxhdCBkYXRhIHRvIGhpZXJhcmNoaWNhbFxuICAgIGF0dHJzLnJvb3QgPSBkM1xuICAgICAgLnN0cmF0aWZ5KClcbiAgICAgIC5pZCgoeyBub2RlSWQgfSkgPT4gbm9kZUlkKVxuICAgICAgLnBhcmVudElkKCh7IHBhcmVudE5vZGVJZHMgfSkgPT4gcGFyZW50Tm9kZUlkc1swXSkoXG4gICAgICBhdHRycy5kYXRhXG4gICAgKTtcblxuICAgIC8vIFNldCBjaGlsZCBub2RlcyBlbnRlciBhcHBlYXJhbmNlIHBvc2l0aW9uc1xuICAgIGF0dHJzLnJvb3QueDAgPSAwO1xuICAgIGF0dHJzLnJvb3QueTAgPSAwO1xuXG4gICAgLyoqIEdldCBhbGwgbm9kZXMgYXMgYXJyYXkgKHdpdGggZXh0ZW5kZWQgcGFyZW50ICYgY2hpbGRyZW4gcHJvcGVydGllcyBzZXQpXG4gICAgICAgICAgVGhpcyB3YXkgd2UgY2FuIGFjY2VzcyBhbnkgbm9kZSdzIHBhcmVudCBkaXJlY3RseSB1c2luZyBub2RlLnBhcmVudCAtIHByZXR0eSBjb29sLCBodWg/XG4gICAgICAqL1xuICAgIGF0dHJzLmFsbE5vZGVzID0gYXR0cnMubGF5b3V0c1xuICAgICAgLnRyZWVtYXAoYXR0cnMucm9vdClcbiAgICAgIC5kZXNjZW5kYW50cygpO1xuXG4gICAgLy8gQ29sbGFwc2UgYWxsIGNoaWxkcmVuIGF0IGZpcnN0XG4gICAgYXR0cnMucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChkKSA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgIC8vIFRoZW4gZXhwYW5kIHNvbWUgbm9kZXMsIHdoaWNoIGhhdmUgYGV4cGFuZGVkYCBwcm9wZXJ0eSBzZXRcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+XG4gICAgICB0aGlzLmV4cGFuZFNvbWVOb2RlcyhkKVxuICAgICk7XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqICBEUkFXSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy9BZGQgc3ZnXG4gICAgY29uc3Qgc3ZnID0gY29udGFpbmVyXG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ3N2ZycsXG4gICAgICAgIHNlbGVjdG9yOiAnc3ZnLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgYXR0cnMuc3ZnV2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgYXR0cnMuc3ZnSGVpZ2h0KVxuICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgYXR0cnMuZGVmYXVsdEZvbnQpXG4gICAgICAuY2FsbChiZWhhdmlvcnMuem9vbSlcbiAgICAgIC5hdHRyKCdjdXJzb3InLCAnbW92ZScpXG4gICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgIGF0dHJzLnN2ZyA9IHN2ZztcblxuICAgIC8vQWRkIGNvbnRhaW5lciBnIGVsZW1lbnRcbiAgICBjb25zdCBjaGFydCA9IHN2Z1xuICAgICAgLnBhdHRlcm5pZnkoe1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdjaGFydCcsXG4gICAgICB9KVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlKCR7Y2FsYy5jaGFydExlZnRNYXJnaW59LCR7Y2FsYy5jaGFydFRvcE1hcmdpbn0pYFxuICAgICAgKTtcblxuICAgIC8vIEFkZCBvbmUgbW9yZSBjb250YWluZXIgZyBlbGVtZW50LCBmb3IgYmV0dGVyIHBvc2l0aW9uaW5nIGNvbnRyb2xzXG4gICAgYXR0cnMuY2VudGVyRyA9IGNoYXJ0XG4gICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBzZWxlY3RvcjogJ2NlbnRlci1ncm91cCcsXG4gICAgICB9KVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlKCR7Y2FsYy5jZW50ZXJYfSwke1xuICAgICAgICAgIGNhbGMubm9kZU1heEhlaWdodCAvIDJcbiAgICAgICAgfSkgc2NhbGUoJHthdHRycy5pbml0aWFsWm9vbX0pYFxuICAgICAgKTtcblxuICAgIGF0dHJzLmNoYXJ0ID0gY2hhcnQ7XG5cblxuICAgIC8vRGVmaW5lIHRpdGxlXG4gICAgZDMuc2VsZWN0KCcjbm9kZS1kaXYnKS5hcHBlbmQoJ3RleHQnKVxuICAgIFx0XHRcdC5hdHRyKCdjbGFzcycsICd0aXRsZScpXG4gICAgXHRcdFx0LnRleHQoJ1Zpc3VhbGl6aW5nIENhcmxldG9uIFVuaXZlcnNpdHkgU3R1ZGVudHMgQ29sbGVjdGVkIFxcJiBNaXNzaW5nIERlbW9ncmFwaGljcyBEYXRhJyk7XG4gICAgXG4gICAgLy9EZWZpbmUgZGl2IGZvciB0b29sdGlwXG4gICAgYXR0cnMudG9vbHRpcERpdiA9IGQzLnNlbGVjdCgnI25vZGUtZGl2JylcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgICBcbiAgICAvLyBEaXNwbGF5IHRyZWUgY29udGVucnNcbiAgICB0aGlzLnVwZGF0ZShhdHRycy5yb290KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cblxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IHJlZHJhd3MgdmlzaWJsZSBncmFwaCwgYmFzZWQgb24gbm9kZXMgc3RhdGVcbiAgdXBkYXRlKHsgeDAsIHkwLCB4LCB5IH0pIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IGNhbGMgPSBhdHRycy5jYWxjO1xuXHRcbiAgICAvLyByZW5kZXIgc2VsZWN0ZWQgYXR0cmlidXRlc1xuICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKClcbiAgICBcbiAgICAvLyAgQXNzaWducyB0aGUgeCBhbmQgeSBwb3NpdGlvbiBmb3IgdGhlIG5vZGVzXG4gICAgY29uc3QgdHJlZURhdGEgPSBhdHRycy5sYXlvdXRzLnRyZWVtYXAoYXR0cnMucm9vdCk7XG5cbiAgICBjb25zdCBpc0F0dHJpYnV0ZU5vZGUgPSAobm9kZSkgPT4gKG5vZGUgJiYgbm9kZS5wYXJlbnQgJiYgKG5vZGUucGFyZW50LmlkID09PSAnQ29udm9jYXRlZCcgfHwgbm9kZS5wYXJlbnQuaWQgPT09ICdFbnJvbGxlZCcpKVxuICAgIFxuICAgIGxldCBwYXJlbnRJRCA9IG51bGw7XG4gICAgbGV0IGNvdW50ID0gMjtcblxuICAgIC8vIEdldCB0cmVlIG5vZGVzIGFuZCBsaW5rcyBhbmQgYXR0YWNoIHNvbWUgcHJvcGVydGllc1xuICAgIGNvbnN0IG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5tYXAoKGQpID0+IHtcbiAgICAgIC8vIElmIGF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBpcyBhbHJlYWR5IHNldCwgdGhlbiB3ZSBkb24ndCB3YW50IHRvIHJlc2V0IG90aGVyIHByb3BlcnRpZXNcblxuICAgICAgLy8gRGVjbGFyZSBwcm9wZXJ0aWVzIHdpdGggZGVmZmF1bHQgdmFsdWVzXG4gICAgICBsZXQgYm9yZGVyQ29sb3IgPSAnc3RlZWxibHVlJztcbiAgICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnc3RlZWxibHVlJztcbiAgICAgIGxldCB0ZXh0Q29sb3IgPSAnYmxhY2snO1xuICAgICAgbGV0IHdpZHRoID0gZC5kYXRhLndpZHRoO1xuICAgICAgbGV0IGhlaWdodCA9IGQuZGF0YS5oZWlnaHQ7XG5cdFx0XHRsZXQgZGVzY3JpcHRpb24gPSAnJyB8fCBkLmRhdGEuZGVzY3JpcHRpb247XG5cbiAgICAgIGxldCBkZXB0aCA9IGQuZGVwdGg7XG4gICAgICBpZiAoaXNBdHRyaWJ1dGVOb2RlKGQucGFyZW50KSl7XG4gICAgICBcdGlmIChkLnBhcmVudC5pZCAhPT0gcGFyZW50SUQpe1xuICAgICAgICBcdGNvdW50Kz0xO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudElEID0gZC5wYXJlbnQuaWQ7XG4gICAgICAgIGRlcHRoID0gY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgIFx0aWYgKGQucGFyZW50KXtcbiAgICAgICAgXHRkZXB0aCA9IGQucGFyZW50LmRlcHRoKzE7IFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkLmRhdGEuYm9yZGVyQ29sb3IpIHtcbiAgICAgICAgYm9yZGVyQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKFxuICAgICAgICAgIGQuZGF0YS5ib3JkZXJDb2xvclxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGQuZGF0YS5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihcbiAgICAgICAgICBkLmRhdGEuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZC5kYXRhLnRleHRDb2xvcikge1xuICAgICAgICB0ZXh0Q29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKGQuZGF0YS50ZXh0Q29sb3IpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvL3NldCBkZXB0aFxuICAgICAgbGV0IHkgPSBkZXB0aCphdHRycy5kZXB0aDtcblxuICAgICAgLy8gRXh0ZW5kIG5vZGUgb2JqZWN0IHdpdGggY2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIHRleHRDb2xvcixcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRlcHRoLFxuICAgICAgICB5LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG5cbiAgICAvLyBTYXZlIG5vZGVzIGZvciBjbGlja1xuICAgIGF0dHJzLm5vZGVzID0gbm9kZXM7XG5cdFx0Ly9jb25zb2xlLmxvZyhhdHRycy5ub2Rlcyk7XG4gICAgXG4gICAgLy8gR2V0IGFsbCBsaW5rc1xuICAgIGNvbnN0IGxpbmtzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMSU5LUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gR2V0IGxpbmtzIHNlbGVjdGlvblxuICAgIGNvbnN0IGxpbmtTZWxlY3Rpb24gPSBhdHRycy5jZW50ZXJHXG4gICAgICAuc2VsZWN0QWxsKCdwYXRoLmxpbmsnKVxuICAgICAgLmRhdGEobGlua3MsICh7IGlkIH0pID0+IGlkKTtcbiAgICBcbiAgICAgXG4gICAgY29uc3QgbGlua0VudGVyID0gbGlua1NlbGVjdGlvblxuICAgICAgLmVudGVyKClcbiAgICAgIC5pbnNlcnQoJ3BhdGgnLCAnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogZC54LFxuICAgICAgICAgIHk6IGQueSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhZ29uYWwobywgW28sIG9dKTtcbiAgICAgIH0pO1xuICAgIFxuXHRcdGNvbnN0IGxpbmtVcGRhdGUgPSBsaW5rRW50ZXIubWVyZ2UobGlua1NlbGVjdGlvbik7XG4gICAgXG4gICAgIGxpbmtVcGRhdGVcbiAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsKHsgZGF0YSB9KSA9PiBkYXRhLmNvbm5lY3RvckxpbmVXaWR0aCB8fCAyKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICh7IGRhdGEgfSkgPT4gZGF0YS5jb25uZWN0b3JMaW5lQ29sb3IgPyB0aGlzLnJnYmFPYmpUb0NvbG9yKGRhdGEuY29ubmVjdG9yTGluZUNvbG9yKSA6ICdncmVlbicpXG4gICAgICAuYXR0cignc3Ryb2tlLWRhc2hhcnJheScsICh7IGRhdGEgfSkgPT4gIGRhdGEuZGF0YUFycmF5IHx8ICcnKTtcblxuICAgIC8vIFRyYW5zaXRpb24gYmFjayB0byB0aGUgcGFyZW50IGVsZW1lbnQgcG9zaXRpb25cbiAgICBsaW5rVXBkYXRlXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudHMgPSBkLmRhdGEucGFyZW50Tm9kZUlkcy5tYXAoXG4gICAgICAgICAgKHBhcmVudE5vZGVJZCkgPT5cbiAgICAgICAgICAgIG5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IHBhcmVudE5vZGVJZClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhZ29uYWwoZCwgcGFyZW50cyk7XG4gICAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBhbnkgIGxpbmtzIHdoaWNoIGlzIGV4aXRpbmcgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgY29uc3QgbGlua0V4aXQgPSBsaW5rU2VsZWN0aW9uXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cignZCcsIChkKSA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgeDogZC5wYXJlbnQueCB8fCAwLFxuICAgICAgICAgIHk6IGQucGFyZW50LnkgfHwgMCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRpYWcgPSB0aGlzLmRpYWdvbmFsKG8sIFtvXSk7XG4gICAgICAgIHJldHVybiBkaWFnO1xuICAgICAgfSlcbiAgICAgIC5yZW1vdmUoKTtcbiAgICBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTk9ERVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgICAvLyBHZXQgbm9kZXMgc2VsZWN0aW9uXG4gICAgY29uc3Qgbm9kZXNTZWxlY3Rpb24gPSBhdHRycy5jZW50ZXJHXG4gICAgICAuc2VsZWN0QWxsKCdnLm5vZGUnKVxuICAgICAgLmRhdGEobm9kZXMsICh7IGlkIH0pID0+IGlkKTtcblxuICAgIGxldCBodCA9IHRoaXM7XG4gICAgLy8gRW50ZXIgYW55IG5ldyBub2RlcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXG4gICAgY29uc3Qgbm9kZUVudGVyID0gbm9kZXNTZWxlY3Rpb25cbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCkgPT4gYHRyYW5zbGF0ZSgke3gwfSwke3kwfSlgKVxuICAgICAgLmF0dHIoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5vbignY2xpY2snLCAoZCkgPT4geyBcbiAgICAgICAgXG4gICAgICAgIGlmIChpc0F0dHJpYnV0ZU5vZGUoZCkgJiYgWy4uLmQzLmV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0XS5pbmNsdWRlcygnbm9kZS1idXR0b24tY2lyY2xlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAgIGh0Lm9uQnV0dG9uQ2xpY2soZCk7XG4gICAgICBcdH0pXG4gICAgICAub24oJ21vdXNlb3ZlcicsIChkKSA9PiB7XG4gICAgICAgIGlmIChkLmRlc2NyaXB0aW9uICYmIChhdHRycy50b29sdGlwRGl2LnN0eWxlKCdvcGFjaXR5JykgIT0gMC45IHx8IGQuZGVzY3JpcHRpb24gIT09IGF0dHJzLnRvb2x0aXBEaXYuX2dyb3Vwc1swXVswXS5pbm5lckhUTUwpKSB7XG4gICAgICAgICAgYXR0cnMudG9vbHRpcERpdlxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDAuOSk7XG4gICAgICAgICAgYXR0cnMudG9vbHRpcERpdlxuICAgICAgICAgICAgLmh0bWwoZC5kZXNjcmlwdGlvbilcbiAgICAgICAgICBcdC5zdHlsZShcImxlZnRcIiwgKGQzLmV2ZW50LnBhZ2VYIC0gZC5kYXRhLndpZHRoLzIpICsgXCJweFwiKVx0XHRcbiAgICAgICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSA2MCkgKyBcInB4XCIpO1x0ICAgIFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsIChkKSA9PiB7XG4gICAgICAgIGlmIChkMy5ldmVudC50b0VsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgPT09ICdzdmctY2hhcnQtY29udGFpbmVyJykge1xuICAgICAgICAgIGF0dHJzLnRvb2x0aXBEaXYudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCkuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBBZGQgYmFja2dyb3VuZCByZWN0YW5nbGUgZm9yIHRoZSBub2Rlc1xuICAgIG5vZGVFbnRlclxuICAgICAgLnBhdHRlcm5pZnkoe1xuICAgICAgICB0YWc6ICdyZWN0JyxcbiAgICAgICAgc2VsZWN0b3I6ICdub2RlLXJlY3QnLFxuICAgICAgICBkYXRhOiAoZCkgPT4gW2RdLFxuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsICh7IF9jaGlsZHJlbiB9KSA9PlxuICAgICAgICBfY2hpbGRyZW4gPyAnbGlnaHRzdGVlbGJsdWUnIDogJyNmZmYnXG4gICAgICApO1xuXG4gICAgLy8gTm9kZSB1cGRhdGUgc3R5bGVzXG4gICAgY29uc3Qgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlclxuICAgICAgLm1lcmdlKG5vZGVzU2VsZWN0aW9uKVxuICAgICAgLnN0eWxlKCdmb250JywgJzEycHggc2Fucy1zZXJpZicpO1xuXG4gICAgLy8gQWRkIHRleHQgZWxlbWVudCBpbnNpZGUgZ3JvdXBcbiAgICBub2RlVXBkYXRlLnBhdHRlcm5pZnkoe1xuICAgICAgdGFnOiAndGV4dCcsXG4gICAgICBzZWxlY3RvcjogJ25vZGUtdGV4dCcsXG4gICAgICBkYXRhOiAoZCkgPT4gW2RdLFxuICAgIH0pO1xuICAgIFxuICAgIFx0bm9kZUVudGVyXG4gICAgICAgICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgICAgICAgICAgdGFnOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ25vZGUtYnV0dG9uLWNpcmNsZScsXG4gICAgICAgICAgICAgICAgZGF0YTogZCA9PiBbZF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZCA9PiB0aGlzLm9uU2VsZWN0QWxsKGQpIClcbiAgICBcbiAgICBcbiAgICBcbiAgICAgIG5vZGVVcGRhdGUuc2VsZWN0KCcubm9kZS1idXR0b24tY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoe1xuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pID0+IGB0cmFuc2xhdGUoMCwke2RhdGEuaGVpZ2h0IC8gMn0pYClcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBdHRyaWJ1dGVOb2RlKGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pXG4gICAgXHRcdFx0XHQuYXR0cigncicsIDE2KVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICh7XG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfSkgPT4gZGF0YS5ib3JkZXJXaWR0aCB8fCBhdHRycy5zdHJva2VXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgKGQpID0+IHtcbiAgICAgICAgXHRcdFx0Y29uc3QgY2xpY2tlZCA9IChjaGlsZCkgPT4gY2hpbGQuZGF0YS5ib3JkZXJXaWR0aCA9PSBhdHRycy5jbGlja2VkV2lkdGggfHwgIWNoaWxkLmRhdGEuY2xpY2thYmxlO1xuICAgICAgICBcdFx0XHRpZiAoaXNBdHRyaWJ1dGVOb2RlKGQpKXtcbiAgICAgICAgICAgICAgIFx0cmV0dXJuIChkLmNoaWxkcmVuICYmIGQuY2hpbGRyZW4uZXZlcnkoY2xpY2tlZCkpIHx8IChkLl9jaGlsZHJlbiAmJiBkLl9jaGlsZHJlbi5ldmVyeShjbGlja2VkKSkgPyB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5XaGl0ZSkgOiBhdHRycy5iYWNrZ3JvdW5kQ29sb3I7IFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRycy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFx0XHRcdH0pXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgKHtcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvclxuICAgICAgICAgICAgfSkgPT4gYm9yZGVyQ29sb3IpXG4gICAgXHRcdFx0XHQuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIChkKSA9PiBpc0F0dHJpYnV0ZU5vZGUoZCkgJiYgZC5kYXRhLmNsaWNrYWJsZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIik7XG4gICAgXG4gICBcbiAgICB0aGlzLnJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKTtcbiAgICBcbiAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24gZm9yIHRoZSBub2RlXG4gICAgbm9kZVVwZGF0ZVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxuICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAoeyB4LCB5IH0pID0+IGB0cmFuc2xhdGUoJHt4IHx8IDB9LCR7eSB8fCAwfSlgXG4gICAgICApXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpO1xuXG4gICAgLy8gU3R5bGUgbm9kZSByZWN0YW5nbGVzXG4gICAgbm9kZVVwZGF0ZVxuICAgICAgLnNlbGVjdCgnLm5vZGUtcmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAoeyBkYXRhIH0pID0+IGRhdGEud2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgKHsgZGF0YSB9KSA9PiBkYXRhLmhlaWdodClcbiAgICAgIC5hdHRyKCd4JywgKHsgZGF0YSB9KSA9PiAtZGF0YS53aWR0aCAvIDIpXG4gICAgICAuYXR0cigneScsICh7IGRhdGEgfSkgPT4gLWRhdGEuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdyeCcsICh7IGRhdGEgfSkgPT4gZGF0YS5ib3JkZXJSYWRpdXMgfHwgMClcbiAgICAgIC5hdHRyKFxuICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgKHsgZGF0YSB9KSA9PiBkYXRhLmJvcmRlcldpZHRoIHx8IGF0dHJzLnN0cm9rZVdpZHRoXG4gICAgICApXG4gICAgICAuYXR0cignY3Vyc29yJywgJ3BvaW50ZXInKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICh7IGJvcmRlckNvbG9yIH0pID0+IGJvcmRlckNvbG9yKVxuICAgICAgLnN0eWxlKFxuICAgICAgICAnZmlsbCcsXG4gICAgICAgICh7IGJhY2tncm91bmRDb2xvciB9KSA9PiBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICk7XG5cbiAgICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbm9kZXMgYWZ0ZXIgdHJhbnNpdGlvblxuICAgIGNvbnN0IG5vZGVFeGl0VHJhbnNpdGlvbiA9IG5vZGVzU2VsZWN0aW9uXG4gICAgICAuZXhpdCgpXG4gICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQpID0+IHtgdHJhbnNsYXRlKCR7LTMwMH0sJHszMDB9KWB9KVxuICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgIH0pXG4gICAgICAuYXR0cignb3BhY2l0eScsIDApO1xuXG4gICAgLy8gT24gZXhpdCByZWR1Y2UgdGhlIG5vZGUgcmVjdHMgc2l6ZSB0byAwXG4gICAgbm9kZUV4aXRUcmFuc2l0aW9uXG4gICAgICAuc2VsZWN0QWxsKCcubm9kZS1yZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKTtcblxuICAgIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxuICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQueDAgPSBkLng7XG4gICAgICBkLnkwID0gZC55O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkZXRlY3RzIHdoZXRoZXIgY3VycmVudCBicm93c2VyIGlzIGVkZ2VcbiAgaXNFZGdlKCkge1xuICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnRWRnZScpO1xuICB9XG5cbiAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGN1c3RvbSBkaWFnb25hbCAtIHBsYXkgd2l0aCBpdCBoZXJlIC0gaHR0cHM6Ly90by5seS8xemhUS1xuICBkaWFnb25hbChzLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgLmNlbnRlckcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsICdncm91cE9mUGF0aHMnKTtcbiAgICBsZXQgaGVpZ2h0TXVsdGlwbGllciA9IHBhcmVudHMubGVuZ3RoID09IDIgPyAwLjYgOiAwLjQ7XG4gICAgXG4gICAgZm9yIChjb25zdCB0IG9mIHBhcmVudHMpIHtcbiAgICAgIGxldCBoZWlnaHQgPSBzLnkgLSB0Lnk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBzb21lIHZhcmlhYmxlcyBiYXNlZCBvbiBzb3VyY2UgYW5kIHRhcmdldCAocyx0KSBjb29yZGluYXRlc1xuICAgICAgbGV0IHggPSBzLng7XG4gICAgICBsZXQgeSA9IHMueTtcbiAgICAgIGxldCBleCA9IHQueDtcbiAgICAgIGxldCBleSA9IHQueTtcbiAgICAgIGxldCB4cnZzID0gZXggLSB4IDwgMCA/IC0xIDogMTtcbiAgICAgIGxldCB5cnZzID0gLTE7XG4gICAgICBsZXQgcmRlZiA9IDA7XG4gICAgICBsZXQgckluaXRpYWwgPSBNYXRoLmFicyhleCAtIHgpIC8gMiA8IHJkZWYgPyBNYXRoLmFicyhleCAtIHgpIC8gMiA6IHJkZWY7XG4gICAgICBsZXQgciA9IE1hdGguYWJzKGV5IC0geSkgLyAyIDwgckluaXRpYWwgPyBNYXRoLmFicyhleSAtIHkpIC8gMiA6IHJJbml0aWFsO1xuICAgICAgbGV0IGggPSBNYXRoLmFicyhleSAtIHkpICogaGVpZ2h0TXVsdGlwbGllciAtIHI7XG4gICAgICBsZXQgdyA9IE1hdGguYWJzKGV4IC0geCkgLSByICogMjtcblxuICAgICAgbGV0IHBhdGggPSBgXG4gICAgICAgICAgICAgTSAke3h9ICR7eX1cbiAgICAgICAgICAgICBMICR7eH0gJHt5ICsgaCAqIHlydnN9XG4gICAgICAgICAgICAgTCAke3ggKyB3ICogeHJ2cyArIHIgKiB4cnZzfSAke3kgKyBoICogeXJ2cyArIHIgKiB5cnZzfVxuICAgICAgICAgICAgIEwgJHtleH0gJHtleX1cbiAgICAgICAgICAgYDtcbiAgICAgIGdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBsZXQgY29tYmluZWREID0gJyc7XG4gICAgZ3JvdXAuc2VsZWN0QWxsKCdwYXRoJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2QnKSlcbiAgICAgICAgY29tYmluZWREICs9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkJyk7XG4gICAgfSk7XG4gICAgZ3JvdXAucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGNvbWJpbmVkRDtcbiAgfVxuXG4gIHJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuXG4gICAgIGF0dHJzLnN2Z1xuICAgICAgLnNlbGVjdEFsbCgnLm5vZGUtdGV4dCcpXG4gICAgXHQuYXR0cignZHknLCAnMTBweCcpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoJ2ZpbGwnLCAoeyB0ZXh0Q29sb3IgfSkgPT50ZXh0Q29sb3IgfHwgJ2JsYWNrJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzMwcHgnKVxuICAgICAgLmh0bWwoKHsgZGF0YSB9KSA9PiBkYXRhLm5vZGVJZCk7XG5cbiAgfVxuXG4gICBvblNlbGVjdEFsbChkKSB7XG5cblx0XHRjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgICBjb25zdCBjbGlja2VkID0gKGNoaWxkKSA9PiBjaGlsZC5kYXRhLmJvcmRlcldpZHRoID09IGF0dHJzLmNsaWNrZWRXaWR0aCB8fCAhY2hpbGQuZGF0YS5jbGlja2FibGU7XG4gICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gKGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4pLmV2ZXJ5KGNsaWNrZWQpO1xuICAgICBcbiAgICAgKGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4pLmZvckVhY2goKGQpID0+IHRoaXMub25CdXR0b25DbGljayhkLCAhYWxsU2VsZWN0ZWQsIGFsbFNlbGVjdGVkLCBmYWxzZSkpO1xuICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgIH1cbiAgXG4gIFxuICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gIG9uQnV0dG9uQ2xpY2soZCwgc2VsZWN0T3B0aW9uLCBjb21wcmVzc09wdGlvbiwgdXBkYXRlT3B0aW9uKSB7XG4gICAgY29uc3QgZGVmYXVsdFRvVHJ1ZSA9IChib29sKSA9PiB0eXBlb2YgYm9vbCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogYm9vbDtcblxuICAgIGNvbnN0IGNvbXByZXNzID0gZGVmYXVsdFRvVHJ1ZShjb21wcmVzc09wdGlvbik7IC8vZGVmYXVsdHMgdG8gdHJ1ZVxuXHRcdGNvbnN0IGV4cGFuZCA9ICFjb21wcmVzcztcbiAgICBcbiAgICBjb25zdCBzZWxlY3QgPSBkZWZhdWx0VG9UcnVlKHNlbGVjdE9wdGlvbik7XG4gICAgY29uc3QgZGVzZWxlY3QgPSBkZWZhdWx0VG9UcnVlKCFzZWxlY3RPcHRpb24pO1xuICAgIFxuICAgIGNvbnN0IHVwZGF0ZSA9IGRlZmF1bHRUb1RydWUodXBkYXRlT3B0aW9uKTtcbiAgICBcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IGRhdGEgPSBkLmRhdGE7XG4gICAgaWYgKGRhdGEuY2xpY2thYmxlKSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBkYXRhLnBhcmVudE5vZGVJZHNbMF07XG4gICAgICAgIGlmIChhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50XSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudF0uaW5kZXhPZihkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGlmIChkZXNlbGVjdCl7XG4gICAgICAgICAgICAgIGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBcdGRhdGEuYm9yZGVyV2lkdGggPSBhdHRycy51bmNsaWNrZWRXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNlbGVjdCl7XG4gICAgICAgICAgICAgIGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnRdLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMuY2xpY2tlZFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnRdKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnRdLmluZGV4T2YoZGF0YS5ub2RlSWQpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBpZiAoZGVzZWxlY3Qpe1xuICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBcdGRhdGEuYm9yZGVyV2lkdGggPSBhdHRycy51bmNsaWNrZWRXaWR0aDtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5sZW5ndGggPT0gMCkgey8vaWYgZW1wdHlcbiAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLnB1c2goJ1RvdGFsJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNlbGVjdCl7XG4gICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV1bMF0gPT0gJ1RvdGFsJykge1xuICAgICAgICAgICAgICAgIC8vaWYgJ1RvdGFsJ1xuICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0ucG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudF0ucHVzaChkYXRhLm5vZGVJZCk7XG4gICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSBhdHRycy5jbGlja2VkV2lkdGg7XG5cbiAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmFjYWRlbWljVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgKj0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0b3RhbCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAnV0FSTklORzogQWRkaW5nIG1vcmUgYWNhZGVtaWMgYXR0cmlidXRlcyBtYXkgcmVzdWx0IGluIGxvdyB2aXNpYmlsaXR5IGluIHRoZSB2aXN1YWxpemF0aW9uLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGEuYm9yZGVyV2lkdGggPT09IGF0dHJzLnVuY2xpY2tlZFdpZHRoKXsgLy91bmNsaWNrZWRcbiAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gYXR0cnMuY2xpY2tlZFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbXByZXNzKXtcbiAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IGF0dHJzLnVuY2xpY2tlZFdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGNoaWxkcmVucyBhcmUgZXhwYW5kZWRcbiAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgaWYgKGNvbXByZXNzKXtcbiAgICAgICAgICBpZiAoZC5pZCA9PT0gJ0NvbnZvY2F0ZWQnKSB7XG4gICAgICAgICAgY29uc3QgZGVtb2dyYXBoaWNOb2RlID0gZC5wYXJlbnQuY2hpbGRyZW5bMV07XG4gICAgICAgICAgaWYgKGRlbW9ncmFwaGljTm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICAvL0NvbGxhcHNlIHRoZW1cbiAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcblxuICAgICAgICBpZiAoZC5pZCA9PT0gJ0Vucm9sbGVkJyl7ICBcbiAgICAgICAgICBjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICBpZiAoY29udm9jYXRpb25Ob2RlLmRhdGEuYm9yZGVyV2lkdGggPT09IDIpe1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGNvbnZvY2F0aW9uTm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGRlc2NlbmRhbnRzIGV4cGFuZGVkIHByb3BlcnR5IHRvIGZhbHNlXG4gICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZC5pZCA9PT0gJ0Vucm9sbGVkJykge1xuICAgICAgICBjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgaWYgKGNvbnZvY2F0aW9uTm9kZS5jaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGNvbnZvY2F0aW9uTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRXhwYW5kIGNoaWxkcmVuXG4gICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAvLyBTZXQgZWFjaCBjaGlsZHJlbiBhcyBleHBhbmRlZFxuXHRcdFx0aWYgKGQuY2hpbGRyZW4pe1xuICAgICAgICBkLmNoaWxkcmVuLmZvckVhY2goXG4gICAgICAgICAgKHsgZGF0YSB9KSA9PiAoZGF0YS5leHBhbmRlZCA9IHRydWUpXG4gICAgICAgICk7XG4gICAgICB9IFxuICAgIH1cblxuICAgIC8vIFJlZHJhdyBHcmFwaFxuICAgIGlmICh1cGRhdGUpXG4gICAgXHR0aGlzLnVwZGF0ZShkKTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2hhbmdlcyBgZXhwYW5kZWRgIHByb3BlcnR5IHRvIGRlc2NlbmRhbnRzXG4gIHNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKFxuICAgIHsgZGF0YSwgY2hpbGRyZW4sIF9jaGlsZHJlbiB9LFxuICAgIGZsYWdcbiAgKSB7XG4gICAgLy8gU2V0IGZsYWcgdG8gdGhlIGN1cnJlbnQgcHJvcGVydHlcbiAgICBkYXRhLmV4cGFuZGVkID0gZmxhZztcblxuICAgIC8vIExvb3Agb3ZlciBhbmQgcmVjdXJzaXZlbHkgdXBkYXRlIGV4cGFuZGVkIGNoaWxkcmVuJ3MgZGVzY2VuZGFudHNcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmbGFnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExvb3Agb3ZlciBhbmQgcmVjdXJzaXZlbHkgdXBkYXRlIGNvbGxhcHNlZCBjaGlsZHJlbidzIGRlc2NlbmRhbnRzXG4gICAgaWYgKF9jaGlsZHJlbikge1xuICAgICAgX2NoaWxkcmVuLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmbGFnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2FuIGJlIGludm9rZWQgdmlhIGNoYXJ0LnNldEV4cGFuZGVkIEFQSSwgaXQgZXhwYW5kcyBvciBjb2xsYXBzZXMgcGFydGljdWxhciBub2RlXG4gIHNldEV4cGFuZGVkKGlkLCBleHBhbmRlZEZsYWcpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIC8vIFJldHJpZXZlIG5vZGUgYnkgbm9kZSBJZFxuICAgIGNvbnN0IG5vZGUgPSBhdHRycy5hbGxOb2Rlcy5maWx0ZXIoXG4gICAgICAoeyBkYXRhIH0pID0+IGRhdGEubm9kZUlkID09IGlkXG4gICAgKVswXTtcblxuICAgIC8vIElmIG5vZGUgZXhpc3RzLCBzZXQgZXhwYW5zaW9uIGZsYWdcbiAgICBpZiAobm9kZSkgbm9kZS5kYXRhLmV4cGFuZGVkID0gZXhwYW5kZWRGbGFnO1xuXG4gICAgLy8gRmlyc3QgZXhwYW5kIGFsbCBub2Rlc1xuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4gdGhpcy5leHBhbmQoZCkpO1xuXG4gICAgLy8gVGhlbiBjb2xsYXBzZSBhbGwgbm9kZXNcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgLy8gVGhlbiBleHBhbmQgb25seSB0aGUgbm9kZXMsIHdoaWNoIHdlcmUgcHJldmlvdXNseSBleHBhbmRlZCwgb3IgaGF2ZSBhbiBleHBhbmQgZmxhZyBzZXRcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGQpID0+XG4gICAgICB0aGlzLmV4cGFuZFNvbWVOb2RlcyhkKVxuICAgICk7XG5cbiAgICAvLyBSZWRyYXcgZ3JhcGhcbiAgICB0aGlzLnVwZGF0ZShhdHRycy5yb290KTtcbiAgfVxuXG4gIC8vIE1ldGhvZCB3aGljaCBvbmx5IGV4cGFuZHMgbm9kZXMsIHdoaWNoIGhhdmUgcHJvcGVydHkgc2V0IFwiZXhwYW5kZWQ9dHJ1ZVwiXG4gIGV4cGFuZFNvbWVOb2RlcyhkKSB7XG4gICAgLy8gSWYgbm9kZSBoYXMgZXhwYW5kZWQgcHJvcGVydHkgc2V0XG4gICAgaWYgKGQuZGF0YS5leHBhbmRlZCkge1xuICAgICAgLy8gUmV0cmlldmUgbm9kZSdzIHBhcmVudFxuICAgICAgbGV0IHBhcmVudCA9IGQucGFyZW50O1xuXG4gICAgICAvLyBXaGlsZSB3ZSBjYW4gZ28gdXBcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgLy8gRXhwYW5kIGFsbCBjdXJyZW50IHBhcmVudCdzIGNoaWxkcmVuXG4gICAgICAgIGlmIChwYXJlbnQuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuID0gcGFyZW50Ll9jaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2UgY3VycmVudCBwYXJlbnQgaG9sZGluZyBvYmplY3RcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWN1cnNpdmVsbHkgZG8gdGhlIHNhbWUgZm9yIGNvbGxhcHNlZCBub2Rlc1xuICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaCgoY2gpID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKSk7XG4gICAgfVxuXG4gICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBleHBhbmRlZCBub2Rlc1xuICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICBkLmNoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmV4cGFuZFNvbWVOb2RlcyhjaCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyBub2RlcyBzdGF0ZSBhbmQgcmVkcmF3cyBncmFwaCwgdXN1YWxseSBhZnRlciBkYXRhIGNoYW5nZVxuICB1cGRhdGVOb2Rlc1N0YXRlKCkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgLy8gU3RvcmUgbmV3IHJvb3QgYnkgY29udmVydGluZyBmbGF0IGRhdGEgdG8gaGllcmFyY2h5XG4gICAgYXR0cnMucm9vdCA9IGQzXG4gICAgICAuc3RyYXRpZnkoKVxuICAgICAgLmlkKCh7IG5vZGVJZCB9KSA9PiBub2RlSWQpXG4gICAgICAucGFyZW50SWQoKHsgcGFyZW50Tm9kZUlkcyB9KSA9PiBwYXJlbnROb2RlSWRzWzBdKShcbiAgICAgIGF0dHJzLmRhdGFcbiAgICApO1xuXG4gICAgLy8gU3RvcmUgcG9zaXRpb25zLCB3aGVyZSBjaGlsZHJlbiBhcHBlYXIgZHVyaW5nIHRoZWlyIGVudGVyIGFuaW1hdGlvblxuICAgIGF0dHJzLnJvb3QueDAgPSAwO1xuICAgIGF0dHJzLnJvb3QueTAgPSAwO1xuXG4gICAgLy8gU3RvcmUgYWxsIG5vZGVzIGluIGZsYXQgZm9ybWF0IChhbHRob3VnaCwgbm93IHdlIGNhbiBicm93c2UgcGFyZW50LCBzZWUgZGVwdGggZS50LmMuIClcbiAgICBhdHRycy5hbGxOb2RlcyA9IGF0dHJzLmxheW91dHNcbiAgICAgIC50cmVlbWFwKGF0dHJzLnJvb3QpXG4gICAgICAuZGVzY2VuZGFudHMoKTtcblxuICAgIC8vIFN0b3JlIGRpcmVjdCBhbmQgdG90YWwgZGVzY2VuZGFudHMgY291bnRcbiAgICBhdHRycy5hbGxOb2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKGQuZGF0YSwge1xuICAgICAgICBkaXJlY3RTdWJvcmRpbmF0ZXM6IGQuY2hpbGRyZW5cbiAgICAgICAgICA/IGQuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgOiAwLFxuICAgICAgICB0b3RhbFN1Ym9yZGluYXRlczogZC5kZXNjZW5kYW50cygpLmxlbmd0aCAtIDEsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEV4cGFuZCBhbGwgbm9kZXMgZmlyc3RcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2godGhpcy5leHBhbmQpO1xuXG4gICAgLy8gVGhlbiBjb2xsYXBzZSB0aGVtIGFsbFxuICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaCgoZCkgPT4gdGhpcy5jb2xsYXBzZShkKSk7XG5cbiAgICAvLyBUaGVuIG9ubHkgZXhwYW5kIG5vZGVzLCB3aGljaCBoYXZlIGV4cGFuZGVkIHByb3BydHkgc2V0IHRvIHRydWVcbiAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goKGNoKSA9PlxuICAgICAgdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpXG4gICAgKTtcblxuICAgIC8vIFJlZHJhdyBHcmFwaHNcbiAgICB0aGlzLnVwZGF0ZShhdHRycy5yb290KTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHdoaWNoIGNvbGxhcHNlcyBwYXNzZWQgbm9kZSBhbmQgaXQncyBkZXNjZW5kYW50c1xuICBjb2xsYXBzZShkKSB7XG4gICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmNvbGxhcHNlKGNoKSk7XG4gICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB3aGljaCBleHBhbmRzIHBhc3NlZCBub2RlIGFuZCBpdCdzIGRlc2NlbmRhbnRzXG4gIGV4cGFuZChkKSB7XG4gICAgaWYgKGQuX2NoaWxkcmVuKSB7XG4gICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICBkLmNoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB0aGlzLmV4cGFuZChjaCkpO1xuICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIFpvb20gaGFuZGxlciBmdW5jdGlvblxuICB6b29tZWQoKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBjaGFydCA9IGF0dHJzLmNoYXJ0O1xuXG4gICAgLy8gR2V0IGQzIGV2ZW50J3MgdHJhbnNmb3JtIG9iamVjdFxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGQzLmV2ZW50LnRyYW5zZm9ybTtcblxuICAgIC8vIFN0b3JlIGl0XG4gICAgYXR0cnMubGFzdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgIC8vIFJlcG9zaXRpb24gYW5kIHJlc2NhbGUgY2hhcnQgYWNjb3JkaW5nbHlcbiAgICBjaGFydC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xuXG4gICAgLy8gQXBwbHkgbmV3IHN0eWxlcyB0byB0aGUgZm9yZWlnbiBvYmplY3QgZWxlbWVudFxuICAgIGlmICh0aGlzLmlzRWRnZSgpKSB7XG4gICAgICB0aGlzLnJlc3R5bGVGb3JlaWduT2JqZWN0RWxlbWVudHMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vbm9kZXMnO1xuXG5leHBvcnQgY2xhc3MgU3VuYnVyc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL0V4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogMzAwMCxcbiAgICAgIHN2Z0hlaWdodDogMzAwMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGV4dGVuZGVkTGluZUxlbmd0aDogNDAsXG4gICAgICB0ZXh0RGlzdGFuY2U6IDE1LFxuICAgICAgb3V0ZXJUZXh0U2l6ZTogJzIwcHgnLFxuICAgICAgYXR0cmlidXRlSW5kZXg6IG51bGwsXG4gICAgICBoaXN0b3J5OiBbXSxcbiAgICAgIGRpc3BsYXlOb2RlczogbnVsbCxcbiAgICAgIHZhbHVlczogbnVsbCxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBNYWxlOiAnI2ZjOGQ1OScsXG4gICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICBJbnRlcm5hdGlvbmFsOiAnIzk5OGVjMycsXG4gICAgICAgIERvbWVzdGljOiAnI2YxYTM0MCcsXG4gICAgICAgICc8PTE3JzogJyNmN2ZjZjUnLFxuICAgICAgICAnMTgtMjAnOiAnI2U1ZjVlMCcsXG4gICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgJzI2LTMwJzogJyNhMWQ5OWInLFxuICAgICAgICAnMzEtMzUnOiAnIzc0YzQ3NicsXG4gICAgICAgICczNi00NSc6ICcjNDFhYjVkJyxcbiAgICAgICAgJzQ2LTU1JzogJyMyMzhiNDUnLFxuICAgICAgICAnNTUrJzogJyMwMDZkMmMnLFxuICAgICAgICAwOiAnIzk4OTg5OCcsXG4gICAgICB9LFxuICAgICAgdGV4dENpcmNsZXNDb3VudDogW10sXG4gICAgICB0ZXh0Q2lyY2xlc1BlcmNlbnQ6IFtdLFxuICAgICAgY2VudGVyVGV4dDogbnVsbCxcbiAgICAgIGNlbnRlclRleHRTaXplOiAnMjVweCcsXG4gICAgICBjZW50ZXJUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGNvbXBhcmVNb2RlOiBmYWxzZSxcbiAgICAgIGxlZ2VuZFdpZHRoOiAxNTAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQxOiAnQ2F0ZWdvcnknLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQyOiAnIyBvZiBTdHVkZW50cycsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDM6ICclIGluIEdyb3VwJyxcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyogUmVtb3ZlcyBhbGwgZWxlbWVudHMgaW4gc3ZnICovXG4gIHJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUoKS5zdmcuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gIH1cblxuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgLyogQ29udmVydHMgb2JqZWN0cyB0byBzbGljZXMgd2l0aCBxdWVyaWVzICovXG4gIGdldFZhbHVlcyhhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAvLyBTb3J0aW5nIGFnZVxuICAgIGxldCBvcmRlciA9IHsnPD0xNyc6IDAsXG4gICAgICAgICcxOC0yMCc6IDEsXG4gICAgICAgICcyMS0yNSc6IDIsXG4gICAgICAgICcyNi0zMCc6IDMsXG4gICAgICAgICczMS0zNSc6IDQsXG4gICAgICAgICczNi00NSc6IDUsXG4gICAgICAgICc0Ni01NSc6IDYsXG4gICAgICAgICc1NSsnIDogN307XG4gICAgZGl2ZXJzaXR5VmFsdWVzLkFnZS5zb3J0KChlMSwgZTIpID0+IChvcmRlcltlMV0gLSBvcmRlcltlMl0pKTtcbiBcbiAgICAvL3ByZXBhcmluZyBzbGljZXNcbiAgICBjb25zdCBjYXJ0ZXNpYW4gPSAoLi4uYSkgPT5cbiAgICAgIGEucmVkdWNlKChhLCBiKSA9PlxuICAgICAgICBhLmZsYXRNYXAoKGQpID0+IGIubWFwKChlKSA9PiBbZCwgZV0uZmxhdCgpKSlcbiAgICAgICk7XG4gICAgbGV0IHNsaWNlcyA9IGNhcnRlc2lhbihcbiAgICAgIGFjYWRlbWljVmFsdWVzWydBY2FkZW1pYyBZZWFyJ10sXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5EZWdyZWUsXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5GYWN1bHR5LFxuICAgICAgYWNhZGVtaWNWYWx1ZXNbJ1N0dWR5IFN0YXR1cyddXG4gICAgKTtcblxuICAgIGNvbnN0IG1ha2VRdWVyeSA9IChzbGljZSwgZGl2ZXJzaXR5QXR0ciwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBxdWVyeSA9IFsuLi5zbGljZV07XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChwcm9wICE9PSBkaXZlcnNpdHlBdHRyKSB7XG4gICAgICAgICAgcXVlcnkucHVzaCgnVG90YWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH07XG5cbiAgICAvL2NvbnZlcnQgc2xpY2VzIHRvIGtleSBmb3JtYXRcblxuICAgIGxldCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBzbGljZSBvZiBzbGljZXMpIHtcbiAgICAgIGxldCBzdHIgPSBzbGljZS50b1N0cmluZygpO1xuICAgICAgdmFsdWVzW3N0cl0gPSB7fTtcbiAgICAgIGZvciAobGV0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09IDApIGNvbnRpbnVlO1xuICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXSA9IHt9O1xuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBkaXZlcnNpdHlWYWx1ZXNbYXR0cl0pIHtcbiAgICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXVt2YWx1ZV0gPSBtYWtlUXVlcnkoXG4gICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIC8qIEdpdmVuIHNjcmVlbiB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2YgYXJjcywgcmV0dXJuIGFyYyB3aWR0aCwgaW5uZXJyYWRpdXMgYW5kIHRleHQgc2l6ZSovXG4gIGNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoeCwgeSwgbnVtQXJjcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgbGV0IHRleHRIZWlnaHRPZmZzZXQgPSA1MDtcblxuICAgIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5IC0gdGV4dEhlaWdodE9mZnNldCk7XG4gICAgbGV0IGFyY1dpZHRoID0gbWluIC8gKDIgKiBudW1BcmNzICsgNyk7IC8vbWluID0gMipudW1BcmNzKmFyY1dpZHRoICsgMippbm5lclJhZGl1cywgaW5uZXJSYWRpdXMgPSAzKmFyY1dpZHRoXG4gICAgbGV0IGlubmVyUmFkaXVzID0gMyAqIGFyY1dpZHRoO1xuXG4gICAgbGV0IG11bHRpcGxpZXIgPSAxLjU7XG4gICAgbGV0IG4gPSAxMzsgLy8naW50ZXJuYXRpb25hbCcgd2l0aCAxMyBsZXR0ZXJzIGlzIGxvbmdlc3Qgd29yZCBpbiBkaXZlcnNpdHkgYXR0cmlidXRlc1xuICAgIGxldCBpbm5lclRleHRTaXplID1cbiAgICAgIChtdWx0aXBsaWVyICogKDIgKiBpbm5lclJhZGl1cykpIC8gbiArICdweCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFyY1dpZHRoOiBhcmNXaWR0aCxcbiAgICAgIGlubmVyUmFkaXVzOiBpbm5lclJhZGl1cyxcbiAgICAgIGlubmVyVGV4dFNpemU6IGlubmVyVGV4dFNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qIEdpdmVuIHNjcmVlbiB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2Ygc3F1YXJlcywgcmV0dXJuIHJvd3MsIGNvbHVtbnMgYW5kIHNxdWFyZSBzaXplICovXG4gIGNvbXB1dGVDb21wYXJlRGltZW5zaW9ucyh4LCB5LCBuKSB7XG4gICAgLy8gQ29tcHV0ZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucywgYW5kIGNlbGwgc2l6ZVxuICAgIGxldCByYXRpbyA9IHggLyB5O1xuICAgIGxldCBuY29sc19mbG9hdCA9IE1hdGguc3FydChuICogcmF0aW8pO1xuICAgIGxldCBucm93c19mbG9hdCA9IG4gLyBuY29sc19mbG9hdDtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgaGVpZ2h0XG4gICAgbGV0IG5yb3dzMSA9IE1hdGguY2VpbChucm93c19mbG9hdCk7XG4gICAgbGV0IG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB3aGlsZSAobnJvd3MxICogcmF0aW8gPCBuY29sczEpIHtcbiAgICAgIG5yb3dzMSsrO1xuICAgICAgbmNvbHMxID0gTWF0aC5jZWlsKG4gLyBucm93czEpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMSA9IHkgLyBucm93czE7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIHdpZHRoXG4gICAgbGV0IG5jb2xzMiA9IE1hdGguY2VpbChuY29sc19mbG9hdCk7XG4gICAgbGV0IG5yb3dzMiA9IE1hdGguY2VpbChuIC8gbmNvbHMyKTtcbiAgICB3aGlsZSAobmNvbHMyIDwgbnJvd3MyICogcmF0aW8pIHtcbiAgICAgIG5jb2xzMisrO1xuICAgICAgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMiA9IHggLyBuY29sczI7XG5cbiAgICAvLyBGaW5kIHRoZSBiZXN0IHZhbHVlc1xuICAgIGxldCBucm93cywgbmNvbHMsIGNlbGxfc2l6ZTtcbiAgICBpZiAoY2VsbF9zaXplMSA8IGNlbGxfc2l6ZTIpIHtcbiAgICAgIG5yb3dzID0gbnJvd3MyO1xuICAgICAgbmNvbHMgPSBuY29sczI7XG4gICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUyO1xuICAgIH0gZWxzZSB7XG4gICAgICBucm93cyA9IG5yb3dzMTtcbiAgICAgIG5jb2xzID0gbmNvbHMxO1xuICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzaXplOiBjZWxsX3NpemUsIHJvd3M6IG5yb3dzLCBjb2xzOiBuY29scyB9O1xuICB9XG5cbiAgLyogRmV0Y2hpbmcgZGF0YSBhbmQgc2V0dGluZyB1cCBzdmcgY29udGFpbmVyICovXG4gIGFzeW5jIHNldHVwKHVybCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvL2xvYWQgZGF0YSBzeW5jaHJvbm91c2x5XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGQzLmNzdih1cmwpO1xuXG4gICAgYXR0cnMuYXR0cmlidXRlSW5kZXggPSBkYXRhLmNvbHVtbnM7XG5cbiAgICAvL2NvbnZlcnQgZGF0YSB0byBvYmplY3QgZm9ybWF0XG4gICAgYXR0cnMuZGF0YSA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG9iaiwgaSkge1xuICAgICAgbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcblxuICAgICAgdmFsdWVzLnBvcCgpO1xuXG4gICAgICBtYXBbJycuY29uY2F0KHZhbHVlcyldID0gb2JqLkNvdW50O1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG5cbiAgICAvLyBjcmVhdGUgY29udGFpbmVyXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICBcbiAgICAvLyBzZXR0aW5nIHVwIGNvbXBhcmUgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQ29tcGFyZSA9ICgpID0+IHtcbiAgICAgIGF0dHJzLmNvbXBhcmVNb2RlID0gIWF0dHJzLmNvbXBhcmVNb2RlO1xuICAgICAgc2IucmVuZGVyKGF0dHJzLnZhbHVlcyk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICdjb21wYXJlLWJ1dHRvbidcbiAgICApLm9uY2xpY2sgPSB0b2dnbGVDb21wYXJlO1xuXG4gICAgYXR0cnMuc3ZnID0gc3ZnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogQ29udmVydGluZyBpbnB1dCBvYmplY3RzIHRvIHZhbHVlcyBmb3IgZGlzcGxheSAqL1xuICBpbml0aWFsUmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcyhcbiAgICAgIGFjYWRlbWljVmFsdWVzLFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzXG4gICAgKTtcblxuICAgIFxuICAgIGNvbnN0IHRpdGxlQnVpbGRlciA9IChhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSA9PiB7XG4gICAgICBsZXQgbGlzdCA9IFtdO1xuICAgICAgXG4gICAgICBjb25zdCBnZXRBdHRyQXNUaXRsZSA9IChhdHRyKSA9PiB7XG4gICAgICAgICBpZiAoYXR0ciA9PT0gJ0FjYWRlbWljIFllYXInKXtcbiAgICAgICAgICAgXHRyZXR1cm4gJyAyMDEzLTIwMjEnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0RlZ3JlZScpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIGRlZ3JlZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0ZhY3VsdHknKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBmYWN1bHRpZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ1N0dWR5IFN0YXR1cycpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIHN0dWR5IHN0YXR1c2VzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdBZ2UnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBhZ2VzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdTZXgnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBzZXhlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnQ2l0aXplbnNoaXAgU3RhdHVzJyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgY2l0aXplbnNoaXAgc3RhdHVzZXMnO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGFjYWRlbWljVmFsdWVzKXtcbiAgICAgIFx0aWYgKGFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aCA9PT0gMSAmJiBhY2FkZW1pY1ZhbHVlc1thdHRyXVswXSA9PT0gJ1RvdGFsJyl7XG4gICAgICAgIFx0bGlzdC5wdXNoKGdldEF0dHJBc1RpdGxlKGF0dHIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgIFx0aWYgKGRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPT09IDApe1xuICAgICAgICBcdGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXHRcdFx0cmV0dXJuIGxpc3Quam9pbigpO1xuICAgIH07XG4gICAgIFxuICAgIGNvbnN0IHdpZHRoID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdCcpXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBkM1xuICAgICAgLnNlbGVjdCgnI3RpdGxlLXRleHQnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5jZW50ZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KHRpdGxlQnVpbGRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSk7XG4gICAgXG4gICAgdGhpcy5yZW5kZXIodmFsdWVzKTtcbiAgfVxuXG4gIC8qIFJlY3VycmluZyByZW5kZXIgKi9cbiAgcmVuZGVyKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvLyBTZXR0aW5nIHZhbHVlcyBzbyB2YWx1ZXMgaXMgc3RpbGwgYWNjZXNzaWJsZSB3aGVuIGNvbXBhcmUgaXMgdG9nZ2xlZFxuICAgIGF0dHJzLnZhbHVlcyA9IHZhbHVlcztcblxuICAgIFxuICAgIC8vIHJlcHVycG9zaW5nIGJhY2sgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgIGlmIChhdHRycy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJhY2sgPSAoKSA9PiBzYi5yZW5kZXIoYXR0cnMuaGlzdG9yeS5wb3AoKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9XG4gICAgICAgIGF0dHJzLmRpc3BsYXlOb2RlcztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGVsZW1lbnRzIGluIHN2Z1xuICAgIHRoaXMucmVtb3ZlQWxsKCk7XG5cbiAgICAvLyByZS1jcmVhdGUgdGhlIG5ldyBlbGVtZW50c1xuICAgIGlmICghYXR0cnMuY29tcGFyZU1vZGUpIHsgXG4gICAgICBcbiAgICAgIC8vIGRpc2FibGUgY29tcGFyZSBtb2RlIGlmIG9ubHkgMSBzbGljZVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID09PSAxKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPXRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuY29sb3IgPXRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkX1RleHQpO1xuICAgICAgfSBlbHNle1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5jb2xvciA9J3doaXRlJztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5yZW5kZXJTdW5idXJzdCh2YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgIHRoaXMucmVuZGVyQ29tcGFyZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckxlZ2VuZCh2YWx1ZXMpO1xuICB9XG5cbiAgLy8gcmVuZGVyIHRoZSBzdW5idXJzdFxuICByZW5kZXJTdW5idXJzdCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgXG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgbnVtQXJjcyA9IE9iamVjdC5rZXlzKE9iamVjdC52YWx1ZXModmFsdWVzKVswXSkubGVuZ3RoO1xuICAgIGNvbnN0IGV4dGVuZGVkTGluZUxlbmd0aCA9IGF0dHJzLmV4dGVuZGVkTGluZUxlbmd0aDtcbiAgICBjb25zdCBoYWxmU2xpY2VSYWRpYW5zID0gTWF0aC5QSSAvIG51bVNsaWNlcztcbiAgICBjb25zdCB0ZXh0RGlzdGFuY2UgPSBhdHRycy50ZXh0RGlzdGFuY2U7XG4gICAgY29uc3QgYXJjTGVuZ3RoID0gKDIgKiBNYXRoLlBJKSAvIG51bVNsaWNlcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcblxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodC1hdHRycy5jZW50ZXJUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtQXJjc1xuICAgICk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICAgY29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgbGV0IHN2ZyA9IGF0dHJzLnN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCR7aGVpZ2h0LyAyICArIGF0dHJzLmNlbnRlclRleHRIZWlnaHR9KWBcbiAgICAgICk7XG5cbiAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NlbnRlci1ncm91cCcpO1xuICAgIGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ2lkJywgJ2NlbnRlci1jaXJjbGUnKVxuICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAuYXR0cigncicsIGlubmVyUmFkaXVzKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuXG4gICBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICBcbiAgICBsZXQgdGV4dENpcmNsZTEgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnLTAuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDEpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUyID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJzAuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDIpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUzID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJzEuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MylcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgc3VuYnVyc3RHcm91cCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3VuYnVyc3QtZ3JvdXAnKTtcblxuICAgIC8vSGVscGVyIG1ldGhvZHNcbiAgICBjb25zdCBnZXRDaXJjbGVYID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIGNvbnN0IGdldENpcmNsZVkgPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXM7XG5cbiAgICBjb25zdCBnZXRUZXh0ID0gKHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKFxuICAgICAgICAod29yZCkgPT4gd29yZCAhPT0gJ1RvdGFsJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oJ1xcclxcbicpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLy9saW5lIGJ1aWxkZXJcbiAgICBjb25zdCBsaW5lQnVpbGRlciA9IChzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9ICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzO1xuICAgICAgaWYgKG51bVNsaWNlcyAlIDIgPT0gMSkgcmFkaWFucyArPSBNYXRoLlBJO1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAgIC5hdHRyKCd4MScsIGdldENpcmNsZVgocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cigneTEnLCBnZXRDaXJjbGVZKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3gyJyxcbiAgICAgICAgICBnZXRDaXJjbGVYKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICd5MicsXG4gICAgICAgICAgZ2V0Q2lyY2xlWShcbiAgICAgICAgICAgIHJhZGlhbnMsXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArXG4gICAgICAgICAgICAgIG51bUFyY3MgKiBhcmNXaWR0aCArXG4gICAgICAgICAgICAgIGV4dGVuZGVkTGluZUxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy90ZXh0IGJ1aWxkZXJcbiAgICBjb25zdCB0ZXh0QnVpbGRlciA9IChzbGljZSwgc2xpY2VDb3VudCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPVxuICAgICAgICAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcyArXG4gICAgICAgIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHQoc2xpY2UpO1xuICAgICAgbGV0IHJhZGl1cyA9XG4gICAgICAgIGlubmVyUmFkaXVzICsgbnVtQXJjcyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHggPSBnZXRDaXJjbGVYKHJhZGlhbnMsIHJhZGl1cyk7XG4gICAgICBsZXQgeSA9IC1nZXRDaXJjbGVZKHJhZGlhbnMsIHJhZGl1cyk7XG5cbiAgICAgIGlmICh4IDwgLTEpIHggLT0gdGV4dC5sZW5ndGggKiA5O1xuICAgICAgLy9sZWZ0IHNpZGUgYWRqdXN0XG4gICAgICBlbHNlIGlmICh4IDwgMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDU7IC8vbWlkZGxlIHRleHQgYWRqdXN0XG5cbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLm91dGVyVGV4dFNpemUpXG4gICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICAvL2FyYyBidWlsZGVyXG4gICAgY29uc3QgYXJjQnVpbGRlciA9IChcbiAgICAgIGFyYyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHNsaWNlLFxuICAgICAgYXR0cixcbiAgICAgIHZhbHVlLFxuICAgICAgY291bnQsXG4gICAgICBwZXJjZW50XG4gICAgKSA9PiB7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKTtcblxuICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyB2YWx1ZSArIFwicmVjdCddXCIpLnN0eWxlKFxuICAgICAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoYXR0ciA9PT0gJ0FnZScpIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTFcbiAgICAgICAgICAgICAgICAudGV4dChhdHRyICsgJzogJyArIHZhbHVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQodmFsdWUpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoJzw1JykuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KGNvdW50KS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGV4dENpcmNsZTNcbiAgICAgICAgICAgICAgLnRleHQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDEpKSArICclJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCgnJyk7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMlxuICAgICAgICAgICAgICAudGV4dCgnTm8gU3R1ZGVudHMnKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMy50ZXh0KCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG5cbiAgICAgICAgICB0ZXh0Q2lyY2xlMVxuICAgICAgICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MikuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQzKS5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIHZhbHVlICsgXCJyZWN0J11cIikuc3R5bGUoXG4gICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChudW1BcmNzID09IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gcHJvdmlkZSBhbnkgbW9yZSBkZXRhaWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1NsaWNlID0gc2xpY2UgKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICBbbmV3U2xpY2VdOiBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzW3NsaWNlXSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoXG4gICAgICAgICAgICAgICAgYXR0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cjEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyMSA9PT0gYXR0cikge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdW1xuICAgICAgICAgICAgICAgICAgICBhdHRyMVxuICAgICAgICAgICAgICAgICAgXSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXVt2YWx1ZTFdW1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZXMpO1xuXG4gICAgICAgICAgICAgIGF0dHJzLmhpc3RvcnkucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBcbiAgXG4gICAgLy9idWlsZCBhcmNzXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gc2xpY2VDb3VudCAqIGFyY0xlbmd0aDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPT0gMCkge1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlICsgYXJjTGVuZ3RoLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICcwJyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG5cbiAgICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgIHBlcmNlbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXJjQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKG51bVNsaWNlcyA9PSAxKSB0ZXh0QnVpbGRlcihzbGljZSwgMC41KTtcbiAgICAgIGVsc2UgdGV4dEJ1aWxkZXIoc2xpY2UsIHNsaWNlQ291bnQpO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cblxuICAgIC8vYnVpbGQgbGluZXMgYWZ0ZXIgc28gdGhleSBhcmUgb24gdG9wXG4gICAgZm9yIChcbiAgICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICAgIHNsaWNlQ291bnQgPCBudW1TbGljZXMgJiYgbnVtU2xpY2VzID4gMTtcbiAgICAgIHNsaWNlQ291bnQrK1xuICAgICkge1xuICAgICAgbGluZUJ1aWxkZXIoc2xpY2VDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVZhbHVlcyh2YWx1ZXMsIHNlbGVjdGVkVmFsdWUsIGF0dHIpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGlmIChhdHRyID09PSAnQWdlJylcbiAgICAgIGF0dHJzLmNlbnRlclRleHQudGV4dCgnQWdlOiAnICsgc2VsZWN0ZWRWYWx1ZSk7XG4gICAgZWxzZSBhdHRycy5jZW50ZXJUZXh0LnRleHQoc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3NlbGVjdGVkVmFsdWVdXVxuICAgICAgICApO1xuICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dCgnPDUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJ05vJyk7XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICAnU3R1ZGVudHMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgICAvL2QzLnNlbGVjdChcInRleHRbaWQ9J2VsZW1lbnQuaWQud2l0aC5kb3RzJ11cIik7XG4gICAgY29uc3QgaWQgPSBzZWxlY3RlZFZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWVzKHZhbHVlKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBhdHRycy5jZW50ZXJUZXh0LnRleHQoJycpO1xuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc0NvdW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IHZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICB9XG5cbiAgcmVuZGVyQ29tcGFyZSh2YWx1ZXMpIHtcbiAgICAvL0hlbHBlciB2YWx1ZXNcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcblxuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDsgLy9taW51cyBiZWNhdXNlIG9mIGxlZ2VuZFxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodCAtIGF0dHJzLmNlbnRlclRleHRIZWlnaHQ7XG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHNiLmNvbXB1dGVDb21wYXJlRGltZW5zaW9ucyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtU2xpY2VzXG4gICAgKTsgLy9yb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZVxuICAgIGNvbnN0IGFyY0xlbmd0aCA9IDIgKiBNYXRoLlBJO1xuXG4gICAgY29uc3Qgcm93cyA9IGRpbWVuc2lvbnMucm93cztcbiAgICBjb25zdCBjb2xzID0gZGltZW5zaW9ucy5jb2xzO1xuICAgIGNvbnN0IHNpemUgPSBkaW1lbnNpb25zLnNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZVdpZHRoID0gd2lkdGggLSBjb2xzICogc2l6ZTtcbiAgICBjb25zdCB3aGl0ZXNwYWNlSGVpZ2h0ID0gaGVpZ2h0IC0gcm93cyAqIHNpemU7XG5cbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKVxuICAgICAgLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemUsXG4gICAgICBudW1BcmNzXG4gICAgKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgICBjb25zdCBpbm5lclRleHRTaXplID0gcGFyYW1zLmlubmVyVGV4dFNpemU7XG5cbiAgICAvKiBIZWxwZXIgbWV0aG9kcyAqL1xuXG4gICAgLy8gQ29udmVydGluZyBzbGljZSBuYW1lIHRvIHRleHRcbiAgICBjb25zdCBnZXRUZXh0ID0gKHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKFxuICAgICAgICAod29yZCkgPT4gd29yZCAhPT0gJ1RvdGFsJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oJ1xcclxcbicpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZExvbmdlc3RTbGljZSA9IChhcnJheSkgPT4ge1xuICAgICAgbGV0IGxvbmdlc3RXb3JkID0gJyc7XG4gICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA+IGxvbmdlc3RXb3JkLmxlbmd0aCkge1xuICAgICAgICAgIGxvbmdlc3RXb3JkID0gd29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbG9uZ2VzdFdvcmQ7XG4gICAgfTtcbiAgICBjb25zdCBsb25nZXN0U2xpY2VUZXh0TGVuZ3RoID0gZ2V0VGV4dChcbiAgICAgIGZpbmRMb25nZXN0U2xpY2UoT2JqZWN0LmtleXModmFsdWVzKSlcbiAgICApLmxlbmd0aDtcblxuICAgIC8vdGV4dCBidWlsZGVyXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoXG4gICAgICBzbGljZSxcbiAgICAgIHNsaWNlQ291bnQsXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgKSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeSA9IC1yYWRpdXM7XG5cbiAgICAgIGxldCBzaXplTXVsdGlwbGllciA9IDEuODtcbiAgICAgIGxldCBvdXRlclRleHRTaXplID0gTWF0aC5taW4oXG4gICAgICAgIChzaXplTXVsdGlwbGllciAqICgyICogcmFkaXVzKSkgL1xuICAgICAgICAgIGxvbmdlc3RTbGljZVRleHRMZW5ndGgsXG4gICAgICAgIDMwXG4gICAgICApO1xuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBvdXRlclRleHRTaXplICsgJ3B4JylcbiAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKFxuICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgIGFyYyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHNsaWNlLFxuICAgICAgYXR0cixcbiAgICAgIHZhbHVlXG4gICAgKSA9PiB7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICAgIHNiLmRpc3BsYXlWYWx1ZXModmFsdWVzLCB2YWx1ZSwgYXR0cik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgICAgc2IucmVtb3ZlVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG51bUFyY3MgPT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBwcm92aWRlIGFueSBtb3JlIGRldGFpbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoXG4gICAgICAgICAgICAgICAgYXR0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsaWNlMSBpbiBuZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2xpY2UgPSBzbGljZTEgKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgT2JqZWN0LmFzc2lnbihuZXdWYWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgIFtuZXdTbGljZV06IG5ld1ZhbHVlc1tzbGljZTFdLFxuICAgICAgICAgICAgICAgIH0pW3NsaWNlMV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXR0cjEgPT09IGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWNlXG4gICAgICAgICAgICAgICAgICAgIF1bYXR0cjFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV1bdmFsdWUxXVtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWVzKTtcblxuICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ2xlYXIgdGV4dENpcmNsZSBsaXN0c1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblxuICAgIGF0dHJzLmNlbnRlclRleHQgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cigneScsIDE1ICsgYXR0cnMuY2VudGVyVGV4dEhlaWdodCAvIDIpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLmNlbnRlclRleHRTaXplKVxuICAgICAgLnRleHQoJycpO1xuXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoc2xpY2VDb3VudCAvIGNvbHMpO1xuICAgICAgbGV0IGNvbCA9IHNsaWNlQ291bnQgJSBjb2xzO1xuXG4gICAgICBsZXQgdHJhbnNsYXRlWCA9XG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgY29sICogc2l6ZSArXG4gICAgICAgICgoY29sICsgMSkgKiB3aGl0ZXNwYWNlV2lkdGgpIC8gKGNvbHMgKyAxKTtcbiAgICAgIGxldCB0cmFuc2xhdGVZID1cbiAgICAgICAgYXR0cnMuY2VudGVyVGV4dEhlaWdodCArXG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgcm93ICogc2l6ZSArXG4gICAgICAgICgocm93ICsgMSkgKiB3aGl0ZXNwYWNlSGVpZ2h0KSAvIChyb3dzICsgMSk7XG5cbiAgICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNpemUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzaXplKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlgXG4gICAgICAgICk7XG4gICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMGVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUyID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudC5wdXNoKHRleHRDaXJjbGUxKTtcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudC5wdXNoKHRleHRDaXJjbGUyKTtcblxuICAgICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VtID09IDApIHtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSArIGFyY0xlbmd0aCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgJzAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG4gICAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgICBzdW5idXJzdEdyb3VwLFxuICAgICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG4gICAgICB0ZXh0QnVpbGRlcihzbGljZSwgLTAuNSwgc3VuYnVyc3RHcm91cCk7XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTGVnZW5kKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgIGxldCBsZWdlbmQgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWxlZ2VuZCcpXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5sZWdlbmRXaWR0aCk7XG4gICAgbGVnZW5kLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIFxuICAgIGxldCB4ID0gMjA7XG4gICAgbGV0IHkgPSAxMDtcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KCdMRUdFTkQnKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzIwcHgnKVxuICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcbiAgICAgeSArPSAyMDtcbiAgICBcbiAgICBsZXQgZmlyc3RTbGljZSA9IE9iamVjdC52YWx1ZXModmFsdWVzKVswXTtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZmlyc3RTbGljZSkge1xuICAgICAgY29uc3QgYXJyYXkgPSBPYmplY3Qua2V5cyhmaXJzdFNsaWNlW2F0dHJdKTtcbiAgICAgIGxlZ2VuZFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAudGV4dChhdHRyKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcblx0XHRcdCB5ICs9IDIwO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSk7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIHZhbHVlICsgJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeCArIDIwKVxuICAgICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgICAgLnRleHQodmFsdWUpXG4gICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTRweCcpXG4gICAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgICAgICB5ICs9IDIwO1xuICAgICAgfVxuICAgICAgeSArPSAxMDtcbiAgICBcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9jaGFydHMtY2xhc3MnO1xuaW1wb3J0IHsgU3VuYnVyc3QgfSBmcm9tICcuL3N1bmJ1cnN0LWNsYXNzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXHQvL3N1bmJ1cnN0IFxuICBsZXQgc2I7IFxuXG5cdC8vU2V0IG5vZGUgYW5kIE1haW4gdml6IFNQQSB1cHNcbiAgZGlzcGxheU5vZGVzKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUtYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlWaXo7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Tm9kZXM7XG4gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1vcGVuLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5SW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykub25jbGljayA9IGhpZGVJbmZvO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1jbG9zZS1idXR0b24nKS5vbmNsaWNrID0gaGlkZUluZm87XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Tm9kZXMoKXtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Vml6KCl7XG4gICAgICBsZXQgdGVzdCA9IGZhbHNlO1xuICAgIFx0bGV0IGFjYWRlbWljVmFsdWVzVGVzdCA9IHtcbiAgICAgICAgICAgXHQgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgICAgICAgRGVncmVlOiBbJ0JhY2hlbG9ycycsICdNYXN0ZXJzJywgJ1BoLkQuJ10sXG4gICAgICAgICAgICAgRmFjdWx0eTogWydCdXNpbmVzcyddLFxuICAgICAgICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1BhcnQtdGltZScsICdDby1vcCddXG4gICAgICAgICAgfTtcbiAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzVGVzdCA9IHsgICAgIFxuICAgICAgICAgICAgICBBZ2U6IFsnPD0xNycsICcxOC0yMCcsICcyNi0zMCcsICc1NSsnXSxcbiAgICAgICAgICAgICAgU2V4OiAgWydNYWxlJywgJ0ZlbWFsZSddLFxuICAgICAgICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogWydJbnRlcm5hdGlvbmFsJywgJ0RvbWVzdGljJ11cbiAgICAgICB9XG5cbiAgICBcdGlmIChzYil7XG4gICAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzID0gdGVzdD9kaXZlcnNpdHlWYWx1ZXNUZXN0OiBodC5kaXZlcnNpdHlWYWx1ZXMoKTtcbiAgICAgICAgIGxldCBhY2FkZW1pY1ZhbHVlcyA9IHRlc3Q/YWNhZGVtaWNWYWx1ZXNUZXN0OiBodC5hY2FkZW1pY1ZhbHVlcygpO1xuXG4gICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICAgIFx0IGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgaWYgKCF2YWxpZCl7XG4gICAgICAgICAgIFx0Y29uc29sZS5sb2coZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgXHRcdGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBkaXZlcnNpdHkgYXR0cmlidXRlJyk7ICBcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIFx0IFx0XHQgc2IuaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBhbGVydCgnUGxlYXNlIHdhaXQgZm9yIHRoZSBkYXRhIHRvIGZpbmlzaCBsb2FkaW5nJyk7XG4gICAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlJbmZvKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGhpZGVJbmZvKCl7XG4gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgXG4gIGxldCBodCA9IG5ldyBDaGFydCgpXG4gICAgIC5jb250YWluZXIoJyNjaGFydCcpXG4gICAgIC5zdmdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLmluaXRpYWxab29tKDAuMylcbiAgICAgLnJlbmRlcigpXG5cbiAgbmV3IFN1bmJ1cnN0KClcbiAgICAgICAgIC5jb250YWluZXIoJyNzdW5idXJzdCcpXG4gICAgICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAuc3ZnSGVpZ2h0KHdpbmRvdy5pbm5lcldpZHRoKVxuICBcdFx0XHQgLmRpc3BsYXlOb2RlcyhkaXNwbGF5Tm9kZXMpXG4gICAgXHRcdCAuc2V0dXAoJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20va2FlbDU1OC83ZDJjYjUyNTg5MjExMTlkZjU4ODRjYzkwOTAyZTg0ZC9yYXcvMDA4MjdiOWQ1MzI4ODMzNDMxOTFmNjE0NGQ0MWQwYTBiYmFkNWRmOC9mYWxsLmNzdicpXG5cdFx0XHRcdCAudGhlbih2YWx1ZSA9PiBzYiA9IHZhbHVlKTtcbn0pO1xuXG5cblxuXG5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBQUEsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDO0VBQ25DLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM3QjtFQUNBLE1BQU0sa0JBQWtCLEdBQUcsZUFBZSxDQUFDO0VBQzNDLE1BQU0sdUJBQXVCLEdBQUcsaUJBQWlCLENBQUM7RUFDbEQsTUFBTSwwQkFBMEIsR0FBRyx1QkFBdUIsQ0FBQztBQUMzRDtFQUNBLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztFQUMzQixNQUFNLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDO0FBQ25EO0FBQ0E7QUFDQTtFQUNBLE1BQU0sWUFBWSxHQUFHO0VBQ3JCLEVBQUUsVUFB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Q08sTUFBTSxNQUFNLEdBQUc7RUFDdEIsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0QsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakUsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDbEUsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDckUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQzNELEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNyRCxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDaEQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQy9DLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRCxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDcEQsRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ3RELEVBQUUsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUN4RCxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDdEQsRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0VBQzFELEVBQUUsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztFQUMvRCxFQUFDO0FBQ0Q7RUFDQSxNQUFNLEtBQUssR0FBRztFQUNkLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDO0VBQ2hDLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDO0VBQ2xDLENBQUMsS0FBSyxF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