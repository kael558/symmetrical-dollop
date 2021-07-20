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
    },
    Demographics: {
      type: REPORT_NODE,
    },
    Faculty: {
      parents: ['Convocation','Demographics'],
      collectedValues: ['STEM', 'Non-STEM', 'Engineering & Design', 'Science', 'Public Affairs', 'Business', 'Arts & Social Sciences'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE
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
      type: ACADEMIC_ATTRIBUTE_NODE
    },
    Degree: {
      parents: ['Convocation','Demographics'],
      collectedValues: ['Bachelors',
        'Masters',
        'Ph.D.'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE
    },
   
    'Study Status': {
      parents: ['Demographics'],
      collectedValues: ['Part-time',
        'Full-time',
        'Co-op'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE
    },
    'Citizenship Status': {
      parents: ['Demographics'],
      collectedValues: ['Domestic',
        'International'],
    	uncollectedValues: [],
      type: EDI_ATTRIBUTE_NODE
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
    },
    Sex: {
      parents: ['Convocation','Demographics'],
      collectedValues: ['Male', 'Female'],
    	uncollectedValues: ['Non-binary'],
      type: EDI_ATTRIBUTE_NODE
  	},
    Race: {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
  	},
    'Religion/Spirituality': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
    },
    'Geographic Identity': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
    },
    'Dis/ability': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
    },
    Indigenuity: {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: ['First Nations', 'Metis', 'Inuit'],
      type: UNCOLLECTED_ATTRIBUTE_NODE
    },
    'First Language': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
    },
    'Other Language': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
    },
    'Ethnicity': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
    },
    'Nation': {
      parents: ['Demographics'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE
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
      clickable: true
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

    if (nodeType == VALUE_NODE){
    	node.borderColor = nodeDimensions[parentNodeType].borderColor; 
      node.connectorLineColor = nodeDimensions[parentNodeType].borderColor; 
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
               'Study Status': ['Total']
            },
          	diversityValues: {     
                Age: ['Total'],
                Sex:  ['Total'],
                'Citizenship Status': ['Total']
            },
            onNodeClick: null,
        };

        this.getChartState = () => attrs;

        // Dynamically set getter and setter functions for Chart class
        Object.keys(attrs).forEach((key) => {
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

        //hierarchial tree legend
        let svg = d3.select("#node-legend");
        svg.append("rect").attr("x",20).attr("y",24).attr("width", 12).attr("height", 12).style("fill", "grey");
        svg.append("rect").attr("x",20).attr("y",54).attr("width", 12).attr("height", 12).style("fill", "none").style("stroke", "green");
        svg.append("rect").attr("x",20).attr("y",84).attr("width", 12).attr("height", 12).style("fill", "none").style("stroke", "blue");
        svg.append("text").attr("x", 40).attr("y", 30).text("Uncollected").style("font-size", "15px").attr("alignment-baseline","middle");
        svg.append("text").attr("x", 40).attr("y", 60).text("Diversity").style("font-size", "15px").attr("alignment-baseline","middle");
        svg.append("text").attr("x", 40).attr("y", 90).text("Academic").style("font-size", "15px").attr("alignment-baseline","middle");

        this.initializeEnterExitUpdatePattern();
    }

    initializeEnterExitUpdatePattern() {
        d3.selection.prototype.patternify = function(params) {
            var container = this;
            var selector = params.selector;
            var elementTag = params.tag;
            var data = params.data || [selector];

            // Pattern in action
            var selection = container.selectAll('.' + selector).data(data, (d, i) => {
                if (typeof d === 'object') {
                    if (d.id) {
                        return d.id;
                    }
                }
                return i;
            });
            selection.exit().remove();
            selection = selection.enter().append(elementTag).merge(selection);
            selection.attr('class', selector);
            return selection;
        };
    }

    // This method retrieves passed node's children ID's (including node)      
    getNodeChildrenIds({
        data,
        children,
        _children
    }, nodeIdsStore) {

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
        attrs.centerG.attr('transform', ` translate(${calc.centerX}, ${calc.nodeMaxHeight/2}) scale(${attrs.initialZoom})`);
    }

    render() {
        //InnerFunctions which will update visuals

        const attrs = this.getChartState();

        //Drawing containers
        const container = d3.select(attrs.container);
        const containerRect = container.node().getBoundingClientRect();
        if (containerRect.width > 0) attrs.svgWidth = containerRect.width;

        //Attach drop shadow id to attrs object
        this.setDropShadowId(attrs);

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
        calc.chartTopMargin = attrs.marginTop;
        calc.chartWidth = attrs.svgWidth - attrs.marginRight - calc.chartLeftMargin;
        calc.chartHeight = attrs.svgHeight - attrs.marginBottom - calc.chartTopMargin;
        attrs.calc = calc;

        // Get maximum node width and height
        calc.nodeMaxWidth = d3.max(attrs.data, ({
            width
        }) => width);
        calc.nodeMaxHeight = d3.max(attrs.data, ({
            height
        }) => height);

        // Calculate max node depth (it's needed for layout heights calculation)
        attrs.depth = calc.nodeMaxHeight + 100;
        calc.centerX = calc.chartWidth / 2;

        //********************  LAYOUTS  ***********************
        const layouts = {
            treemap: null
        };
        attrs.layouts = layouts;

        // Generate tree layout function
        layouts.treemap = d3.tree().size([calc.chartWidth, calc.chartHeight])
            .nodeSize([calc.nodeMaxWidth + 100, calc.nodeMaxHeight + attrs.depth]);

        // ******************* BEHAVIORS . **********************
        const behaviors = {
            zoom: null
        };

        // Get zooming function 
        behaviors.zoom = d3.zoom().on("zoom", d => this.zoomed(d));

        //****************** ROOT node work ************************

        // Convert flat data to hierarchical
        attrs.root = d3.stratify()
            .id(({
                nodeId
            }) => nodeId)
            .parentId(({
                parentNodeIds
            }) => parentNodeIds[0])
            (attrs.data);

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
                tag: 'svg',
                selector: 'svg-chart-container'
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
                selector: 'chart'
            })
            .attr('transform', `translate(${calc.chartLeftMargin},${calc.chartTopMargin})`);

        // Add one more container g element, for better positioning controls
        attrs.centerG = chart.patternify({
                tag: 'g',
                selector: 'center-group'
            })
            .attr('transform', `translate(${calc.centerX},${calc.nodeMaxHeight/2}) scale(${attrs.initialZoom})`);

        attrs.chart = chart;

        // ************************** ROUNDED AND SHADOW IMAGE  WORK USING SVG FILTERS **********************

        //Adding defs element for rounded image
        attrs.defs = svg.patternify({
            tag: 'defs',
            selector: 'image-defs'
        });

        // Adding defs element for image's shadow
        const filterDefs = svg.patternify({
            tag: 'defs',
            selector: 'filter-defs'
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
            dropShadowId: id
        });
    }

    // This function basically redraws visible graph, based on nodes state
    update({
        x0,
        y0,
        x,
        y
    }) {

        const attrs = this.getChartState();
        const calc = attrs.calc;

        //  Assigns the x and y position for the nodes
        const treeData = attrs.layouts.treemap(attrs.root);

        // Get tree nodes and links and attach some properties 
        const nodes = treeData.descendants()
            .map(d => {
                // If at least one property is already set, then we don't want to reset other properties
                if (d.width) return d;

                // Declare properties with deffault values
                let borderColor = 'steelblue';
                let backgroundColor = 'steelblue';
              	let textColor = 'black';
                let width = d.data.width;
                let height = d.data.height;
              
                if (d.data.borderColor) {
                    borderColor = this.rgbaObjToColor(d.data.borderColor);
                }
                if (d.data.backgroundColor) {
                    backgroundColor = this.rgbaObjToColor(d.data.backgroundColor);
                }
              	if (d.data.textColor){
                	 textColor = this.rgbaObjToColor(d.data.textColor);
                }
               
                // Extend node object with calculated properties
                return Object.assign(d, {
                    borderColor,
                    backgroundColor,
                  	textColor,
                    width,
                    height,
                });
            });
      	
      	// Save nodes for click
       	attrs.nodes = nodes;
      
        // Get all links
        const links = treeData.descendants().slice(1);

        // Set constant depth for each nodes
        nodes.forEach(d => d.y = d.depth * attrs.depth);

        // --------------------------  LINKS ----------------------
        // Get links selection
        const linkSelection = attrs.centerG.selectAll('path.link')
            .data(links, ({
                id
            }) => id);

        // Enter any new links at the parent's previous position.
        const linkEnter = linkSelection.enter()
            .insert('path', "g")
            .attr("class", "link")
            .attr('d', d => {
                const o = {
                    x: x0,
                    y: y0
                };
                return this.diagonal(o, [o])
            });	
      

        // Get links update selection
        const linkUpdate = linkEnter.merge(linkSelection);

        // Styling links
        linkUpdate
            .attr("fill", "none")
            .attr("stroke-width", ({
                data
            }) => data.connectorLineWidth || 2)
            .attr('stroke', ({
                data
            }) => {
                if (data.connectorLineColor) {
                    return this.rgbaObjToColor(data.connectorLineColor);
                }
                return 'green';
            })
            .attr('stroke-dasharray', ({
                data
            }) => {
                if (data.dashArray) {
                    return data.dashArray;
                }
                return '';
            });

        // Transition back to the parent element position
        linkUpdate.transition()
            .duration(attrs.duration)
            .attr('d', d => {
          		const parents = d.data.parentNodeIds.map(parentNodeId => nodes.find(node => node.id===parentNodeId));
          		return this.diagonal(d, parents)
        		});

        // Remove any  links which is exiting after animation
        const linkExit = linkSelection.exit().transition()
            .duration(attrs.duration)
            .attr('d', d => {
                const o = {
                    x: x ? x : 0,
                    y: y ? y : 0
                };
              	let diag = this.diagonal(o, [o]);
                return diag
            })
            .remove();

        // --------------------------  NODES ----------------------
        // Get nodes selection
        const nodesSelection = attrs.centerG.selectAll('g.node')
            .data(nodes, ({
                id
            }) => id);

        let ht = this;
        // Enter any new nodes at the parent's previous position.
        const nodeEnter = nodesSelection.enter().append('g')
            .attr('class', 'node')
            .attr("transform", d => `translate(${x0},${y0})`)
            .attr('cursor', 'pointer')
            .on('click', ({
                data
            }) => {
                if ([...d3.event.srcElement.classList].includes('node-button-circle')) {
                    return;
                }
              	//console.log(data);
              	if (data.clickable){
                  if (attrs.diversityValues[data.parentNodeIds[0]]){
                     const index = attrs.diversityValues[data.parentNodeIds[0]].indexOf(data.nodeId);
                     if (index > -1) {
                        attrs.diversityValues[data.parentNodeIds[0]].splice(index, 1);
                        data.borderWidth = 2;
                     } else {
                       attrs.diversityValues[data.parentNodeIds[0]].splice(0, 0, data.nodeId);
                       data.borderWidth = 10;
                     }
                  } else if (attrs.academicValues[data.parentNodeIds[0]]){
                    const index = attrs.academicValues[data.parentNodeIds[0]].indexOf(data.nodeId);
                    if (index > -1) {
                        attrs.academicValues[data.parentNodeIds[0]].splice(index, 1);
                        data.borderWidth = 2;
                        if (attrs.academicValues[data.parentNodeIds[0]].length == 0){ //if empty
                           attrs.academicValues[data.parentNodeIds[0]].push('Total');
                        }
                     } else {
                        if (attrs.academicValues[data.parentNodeIds[0]].length == 1 &&
                            attrs.academicValues[data.parentNodeIds[0]][0] == 'Total'){ //if 'Total'
                           attrs.academicValues[data.parentNodeIds[0]].pop();
                        }
                        attrs.academicValues[data.parentNodeIds[0]].push(data.nodeId);
                        data.borderWidth = 10;
                     }  
                  } else {
                    data.borderWidth = (data.borderWidth == 2) ? 10 : 2;
                  }
                }
  		
              	if (data.expandable){
                  let nodeClicked = nodes.find(node => node.id === data.nodeId);
              		ht.onButtonClick(nodeClicked);
                }
              	
  							ht.update(data);
            });

        // Add background rectangle for the nodes 
        nodeEnter
            .patternify({
                tag: 'rect',
                selector: 'node-rect',
                data: d => [d]
            })
            .style("fill", ({
                _children
            }) => _children ? "lightsteelblue" : "#fff");


        // Node update styles
        const nodeUpdate = nodeEnter.merge(nodesSelection)
            .style('font', '12px sans-serif');


        // Add foreignObject element inside rectangle
        const fo = nodeUpdate
            .patternify({
                tag: 'foreignObject',
                selector: 'node-foreign-object',
                data: d => [d]
            });


        // Add foreign object 
        fo.patternify({
            tag: 'xhtml:div',
            selector: 'node-foreign-object-div',
            data: d => [d]
        });

        this.restyleForeignObjectElements();

        // Transition to the proper position for the node
        nodeUpdate.transition()
            .attr('opacity', 0)
            .duration(attrs.duration)
            .attr("transform", ({
                x,
                y
            }) => `translate(${x},${y})`)
            .attr('opacity', 1);

        // Style node rectangles
        nodeUpdate.select('.node-rect')
            .attr('width', ({
                data
            }) => data.width)
            .attr('height', ({
                data
            }) => data.height)
            .attr('x', ({
                data
            }) => -data.width / 2)
            .attr('y', ({
                data
            }) => -data.height / 2)
            .attr('rx', ({
                data
            }) => data.borderRadius || 0)
            .attr('stroke-width', ({
                data
            }) => data.borderWidth || attrs.strokeWidth)
            .attr('cursor', 'pointer')
            .attr('stroke', ({
                borderColor
            }) => borderColor)
            .style("fill", ({
                backgroundColor
            }) => backgroundColor);

      

        // Remove any exiting nodes after transition
        const nodeExitTransition = nodesSelection.exit()
            .attr('opacity', 1)
            .transition()
            .duration(attrs.duration)
            .attr("transform", d => `translate(${x},${y})`)
            .on('end', function() {
                d3.select(this).remove();
            })
            .attr('opacity', 0);

        // On exit reduce the node rects size to 0
        nodeExitTransition.selectAll('.node-rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('x', 0)
            .attr('y', 0);

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
    rgbaObjToColor({
        red,
        green,
        blue,
        alpha
    }) {
        return `rgba(${red},${green},${blue},${alpha})`;
    }

    // Generate custom diagonal - play with it here - https://to.ly/1zhTK
    diagonal(s, parents) {
      	const group = this.getChartState().centerG
        					.append("g")
                  .attr("id", "groupOfPaths"); 
      	let heightMultiplier = parents.length == 2 ? 0.575 : 0.425;
      	for (const t of parents){
          	let height = s.y - t.y;
          
            // Calculate some variables based on source and target (s,t) coordinates
            let x = s.x;
            let y = s.y;
            let ex = t.x;
            let ey = t.y;
            let xrvs = ex - x < 0 ? -1 : 1;
            let yrvs = -1;
            let rdef = 35;
            let rInitial = Math.abs(ex - x) / 2 < rdef ? Math.abs(ex - x) / 2 : rdef;
            let r = Math.abs(ey - y) / 2 < rInitial ? Math.abs(ey - y) / 2 : rInitial;
            let h = Math.abs(ey - y) * heightMultiplier - r;
            let w = Math.abs(ex - x) - r * 2;
          
            let path = `
             M ${x} ${y}
             L ${x} ${y+h*yrvs}
             C ${x} ${y+h*yrvs+r*yrvs} ${x} ${y+h*yrvs+r*yrvs} ${x+r*xrvs} ${y+h*yrvs+r*yrvs}
             L ${x+w*xrvs+r*xrvs} ${y+h*yrvs+r*yrvs}
             C ${ex} ${y+h*yrvs+r*yrvs} ${ex} ${y+h*yrvs+r*yrvs} ${ex} ${ey-h*yrvs}
             L ${ex} ${ey}
           `;
          	group.append("path")
          			.attr("d", path)
          			.attr("fill", "none");
        }

      	let combinedD = "";
      	group.selectAll("path").each(function() { 
          if (d3.select(this).attr("d"))
          	combinedD += d3.select(this).attr("d"); 
        });
      	group.remove();
        return combinedD;
    }

    restyleForeignObjectElements() {
        const attrs = this.getChartState();

        attrs.svg.selectAll('.node-foreign-object')
            .attr('width', ({
                width
            }) => width)
            .attr('height', ({
                height
            }) => height)
            .attr('x', ({
                width
            }) => -width / 2)
            .attr('y', ({
                height
            }) => -height / 2);
        attrs.svg.selectAll('.node-foreign-object-div')
            .style('width', ({
                width
            }) => `${width}px`)
            .style('height', ({
                height
            }) => `${height}px`)
            .style('color', ({
          		textColor
        		}) => textColor? textColor: 'black')
      			.style('text-align', 'center')
      			.style('margin-top', '50px')
      			.style('font-size', '40px')
            .html(({
                data
            }) => data.nodeId);
    }

    // Toggle children on click.
    onButtonClick(d) {

        // If childrens are expanded
        if (d.children) {
  					if (d.id === 'Convocation'){
              const demographicNode = d.parent.children[1];
              if (demographicNode.children){
              	 return;
              }
            }
            //Collapse them
            d._children = d.children;
            d.children = null;

            // Set descendants expanded property to false
            this.setExpansionFlagToChildren(d, false);
        } else {
          	if (d.id ==='Demographics'){
            	const convocationNode = d.parent.children[0];
              
              if (convocationNode.children == null){
              	this.onButtonClick(convocationNode);
              }
            }
          
            // Expand children
            d.children = d._children;
            d._children = null;

            // Set each children as expanded
            d.children.forEach(({
                data
            }) => data.expanded = true);
        }

        // Redraw Graph 
        this.update(d);
    }

    // This function changes `expanded` property to descendants
    setExpansionFlagToChildren({
        data,
        children,
        _children
    }, flag) {

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
        const node = attrs.allNodes.filter(({
            data
        }) => data.nodeId == id)[0];

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
        attrs.root = d3.stratify()
            .id(({
                nodeId
            }) => nodeId)
            .parentId(({
                parentNodeIds
            }) => parentNodeIds[0])
            (attrs.data);

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
            backgroundColor: '#fafafa',
            data: null,
            depth: 180,
            duration: 600,
            strokeWidth: 3,
            onNodeClick: d => d,
            arcWidth: 25,
            innerRadius: 75,
          	extendedLineLength: 40,
          	textDistance: 10,
          	textCircle1: null,
          	textCircle2: null,
            dynamic: null,
          	attributeIndex: null,
          	history: [],
          	displayNodes: null,
          	colors :{
              Male: '#fc8d59',
              Female: '#91bfdb',
              International: '#998ec3',
              Domestic: '#f1a340',
              '<=17':  '#f7fcf5',
              '18-20': '#e5f5e0',
              '21-25': '#c7e9c0',
              '26-30': '#a1d99b',
              '31-35' : '#74c476',
              '36-45' : '#41ab5d',
              '46-55' : '#238b45',
              '55+' : '#006d2c',
            }
        };
      
        //get attributes method
        this.getChartState = () => attrs;
  			
       //getter & setter 
      	Object.keys(attrs).forEach((key) => {
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
    }
    async setup(url){
      let attrs = this.getChartState();
      
      //load data synchronously
      const data = await d3.csv(url);
  			
      attrs.attributeIndex = data.columns;

      //convert data to object format
      attrs.data = data.reduce(function(map, obj, i) {
        let values = Object.values(obj);
        
        values.pop();

        map["".concat(values)] = obj.Count;
        return map;
      }, {}); 

      // create static part
      let svg = d3.select(attrs.container)
                    .patternify({
                        tag: 'svg',
                        selector: 'svg-sunburst-container'
                    })
                    .attr('width', attrs.svgWidth)
                    .attr('height', attrs.svgHeight)
                  .append("g")
                    .attr('transform', `translate(${attrs.svgWidth/2},${attrs.svgHeight/4})`);
      let centerGroup = svg.append('g');
      centerGroup.append('circle')
      	.attr('id', 'center-circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', attrs.innerRadius)
        .attr('stroke', 'black')
      	.style('stroke-width', 5)
        .attr('fill', 'white');
      
      attrs.textCircle1 = centerGroup.append('text')
       	.attr("x", 0)
      	.attr("y", 0)
      	.attr("dy", "0em")
      	.style("text-anchor", "middle")
      	.text('');
      
      attrs.textCircle2 = centerGroup.append('text')
       	.attr("x", 0)
      	.attr("y", 0)
      	.attr("dy", "1em")
      	.style("text-anchor", "middle")
      	.text('');
      
      // dynamic part of svg
      svg.append('g')
      		.attr('id', 'dynamic');
      
      attrs.svg = svg;
      return this;
    }

    render(academicValues, diversityValues){
        let attrs = this.getChartState();
      
      	//hierarchial tree legend
        let legend = d3.select("#sunburst-legend");
     		legend.selectAll("*").remove();
        let y = 24;
      	let x = 20;
        for (const array of Object.values(diversityValues)){
        	for (const value of array){
          	if (value === 'Total')
              continue;
            legend.append("rect").attr("x",x).attr("y",y).attr("width", 12).attr("height", 12).style("fill", attrs.colors[value]);
            legend.append("text").attr("x", x+20).attr("y", y+6).text(value).style("font-size", "15px").attr("alignment-baseline","middle");
          	y+=30;
          }
          y+=10;
        }

      	//repurposing back button if necessary
      	let sb = this;
      	if (attrs.history.length > 0){
          console.log(attrs.history);
  				const back = () => {
          	let x = attrs.history.pop();
            sb.render(x[0], x[1]);
          };
        	document.getElementById('back-button').onclick = back;
        } else {
          document.getElementById('back-button').onclick = attrs.displayNodes;
        }
      
      	//preparing slices
  			const cartesian = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));
        let slices = cartesian(academicValues['Academic Year'], academicValues.Degree, academicValues.Faculty, academicValues['Study Status']);
  			
      	const makeQuery = (slice, diversityAttr, value) => {
           let query = slice.toString();
            for (const prop in diversityValues){
              if (prop !== diversityAttr){
                  query = query.concat(',Total');  
              } else {
                  query = query.concat(',', value);  
              }
            }
            return query
        };
        //convert slices to key format
        let values = {};
        for (let slice of slices){
          values[slice.toString()] = {};
          for (let attr in diversityValues){
            if (diversityValues[attr].length == 1)
              continue;

            values[slice.toString()][attr] = {};
            for (let value of diversityValues[attr]){
               values[slice.toString()][attr][value] = makeQuery(slice, attr, value);
            } 
          }
        }

      
        //query to get the values
        for (const slice in values){
          for (const attr in values[slice]){
            let sum = 0;
            for (const value in values[slice][attr]){
              if (value==='Total'){
                values[slice][attr][value] = sum;
              } else {
                values[slice][attr][value] = attrs.data[values[slice][attr][value]];
                sum+=Number(values[slice][attr][value]);
              } 
            }
          }
        }

      d3.select('#dynamic').remove();
      let svg = attrs.svg.append('g')
      									    .attr('id', 'dynamic');

      //Helper methods
      const getCircleX = (radians, radius) => Math.sin(radians) * radius;
  		const getCircleY = (radians, radius) => Math.cos(radians) * radius;
      
      const getText = string => {
        const words = string.split(',');
        const filtered = words.filter(word => word !== 'Total');
        const result = filtered.join("\r\n");
        return result;
      };
      
      //Helper values
      const numSlices = Object.keys(values).length;
      const numArcs = Object.keys(Object.values(values)[0]).length;
      const extendedLineLength = attrs.extendedLineLength;
      const halfSliceRadians = Math.PI/numSlices;
      const textDistance = attrs.textDistance;
    	const arcWidth = attrs.arcWidth;
      const innerRadius = attrs.innerRadius;
      const arcLength = 2*Math.PI/slices.length;
      
      //line builder
      const lineBuilder = (sliceCount) => {
        let radians = 2*Math.PI*sliceCount/numSlices;
        svg.append('line')
          .style("stroke", "black")
          .style("stroke-width", 5)
          .attr("x1", getCircleX(radians, innerRadius))
          .attr("y1", getCircleY(radians, innerRadius))
          .attr("x2", getCircleX(radians, innerRadius+numArcs*arcWidth+extendedLineLength))
          .attr("y2", getCircleY(radians, innerRadius+numArcs*arcWidth+extendedLineLength)); 
      };

      //text builder
      const textBuilder = (slice, sliceCount) => {
        let radians = 2*Math.PI*sliceCount/numSlices + halfSliceRadians;
        let text = getText(slice);
        let radius = innerRadius+numArcs*arcWidth+	textDistance;
        let x = getCircleX(radians, radius );
        let y = -getCircleY(radians, radius);

        if (x < -1)
          x-= text.length * 7;
  			else if (x < 1)
          x-=text.length * 3.5;

        svg.append('text')
          .attr("x", x)
          .attr("y", y)
        	.text(text); 
      };
   
      //build arcs
      let sliceCount = 0;
      for (const slice in values){
        let arcCount = 0;

        for (const attr in values[slice]){
          let arc = d3.arc()
                    .innerRadius(innerRadius+(arcWidth*arcCount))
                    .outerRadius(innerRadius+(arcWidth*(arcCount+1)));

          let sliceStartAngle = sliceCount*arcLength;
          for (const value in values[slice][attr]){
            if (value=='Total')
              continue;
            let count = values[slice][attr][value];
            let percent = count/values[slice][attr]['Total'];
            let startAngle = sliceStartAngle;
            let endAngle = Math.min(startAngle + (arcLength*percent), 2*Math.PI);
            sliceStartAngle = endAngle;

            
            svg.append("path")
              .datum({startAngle: startAngle,endAngle: endAngle})
            	.attr('stroke', 'black')
      				.style('stroke-width', 1)
              .style("fill", attrs.colors[value])
              .attr("d", arc)
            	.on('mouseover', function (d, i) {
            				d3.select(this).transition()
                     .duration('50')
                     .attr('opacity', '.85');
              		
              			attrs.textCircle1.text(Number((percent*100).toFixed(1)) + "%");
              			attrs.textCircle2.text(count);
            	})
              .on('mouseout', function (d, i) {
                  d3.select(this).transition()
                      .duration('50')
              				.attr('opacity', '1');
              
              		attrs.textCircle1.text('');
              		attrs.textCircle2.text('');
            	})
            	.on('click', function() {
              	//this.render();
              	let newDiversityValues = JSON.parse(JSON.stringify(diversityValues));
              	
              	let acadAttr = slice.split(',');
              	let newAcademicValues = {};
              	for (let i in acadAttr){
                  newAcademicValues[attrs.attributeIndex[i]] = [acadAttr[i]];
                }
              	newDiversityValues[attr] = [value, 'Total'];
              	attrs.history.push([academicValues, diversityValues]);
              	sb.render(newAcademicValues, newDiversityValues);
            	});
          }
          arcCount++;
        }
        
        if (numSlices == 1)
          textBuilder(slice, 0.5);
        else 
          textBuilder(slice, sliceCount);
        sliceCount++;
      }
      
      //build lines after so they are on top
      for (let sliceCount = 0; sliceCount <  numSlices && numSlices > 1; sliceCount++){
      	lineBuilder(sliceCount);
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
    		document.getElementById('node-div').style.display = 'none';
  			document.getElementById('viz-div').style.display = 'block';
        
      /*let academicValues = {
             	 'Academic Year': ['2013/14'],
               Degree: ['Total'],
               Faculty: ['Business', 'Science'],
               'Study Status': ['Part-time', 'Full-time']
            };
         let diversityValues = {     
                Age: ['<=17', '18-20', '26-30', '55+','Total'],
                Sex:  ['Male', 'Female', 'Total'],
                'Citizenship Status': ['International', 'Domestic', 'Total']
            }
            */  
              
      	if (sb){
           //sb.render(academicValues, diversityValues);
        	 sb.render(ht.academicValues(), ht.diversityValues());
        } else {
           alert('Please wait for the data to finish loading');
        }
    }
    
    let ht = new Chart()
       .container('#chart')
       .svgWidth(window.innerWidth)
       .svgHeight(window.innerWidth)
       .initialZoom(0.3)
       .onNodeClick(d=> console.log(d))
       .render();

    new Sunburst()
           .container('#sunburst')
           .svgWidth(window.innerWidth)
           .svgHeight(window.innerWidth)
    			 .displayNodes(displayNodes)
      		 .setup('https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/7580dc4942733e364cef06711e8c850d51da13b9/fall.csv')
  				 .then(value => sb = value);
  });

}());

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBST09UX05PREUgPSAnUk9PVCc7XG5jb25zdCBSRVBPUlRfTk9ERSA9ICdSRVBPUlQnO1xuXG5jb25zdCBFRElfQVRUUklCVVRFX05PREUgPSAnRURJX0FUVFJJQlVURSc7XG5jb25zdCBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSA9ICdPVEhFUl9BVFRSSUJVVEUnO1xuY29uc3QgVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUgPSAnVU5DT0xMRUNURURfQVRUUklCVVRFJztcblxuY29uc3QgVkFMVUVfTk9ERSA9ICdWQUxVRSc7XG5jb25zdCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFID0gJ1VOQ09MTEVDVEVEX1ZBTFVFJztcblxuXG5cbmNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgQ29udm9jYXRpb246IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgfSxcbiAgRGVtb2dyYXBoaWNzOiB7XG4gICAgdHlwZTogUkVQT1JUX05PREUsXG4gIH0sXG4gIEZhY3VsdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ1NURU0nLCAnTm9uLVNURU0nLCAnRW5naW5lZXJpbmcgJiBEZXNpZ24nLCAnU2NpZW5jZScsICdQdWJsaWMgQWZmYWlycycsICdCdXNpbmVzcycsICdBcnRzICYgU29jaWFsIFNjaWVuY2VzJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gICdBY2FkZW1pYyBZZWFyJzoge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRpb24nLCdEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnMjAxMy8xNCcsXG4gICAgICAnMjAxNC8xNScsXG4gICAgICAnMjAxNS8xNicsXG4gICAgICAnMjAxNi8xNycsXG4gICAgICAnMjAxNy8xOCcsXG4gICAgICAnMjAxOC8xOScsXG4gICAgICAnMjAxOS8yMCcsXG4gICAgICAnMjAyMC8yMScsXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREVcbiAgfSxcbiAgRGVncmVlOiB7XG4gICAgcGFyZW50czogWydDb252b2NhdGlvbicsJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydCYWNoZWxvcnMnLFxuICAgICAgJ01hc3RlcnMnLFxuICAgICAgJ1BoLkQuJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gICdDaXRpemVuc2hpcCBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnRG9tZXN0aWMnLFxuICAgICAgJ0ludGVybmF0aW9uYWwnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gIEFnZToge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbXG4gICAgICAnPD0xNycsXG4gICAgICAnMTgtMjAnLFxuICAgICAgJzIxLTI1JyxcbiAgICAgICcyNi0zMCcsXG4gICAgICAnMzEtMzUnLFxuICAgICAgJzM2LTQ1JyxcbiAgICAgICc0Ni01NScsXG4gICAgICAnNTUrJyxcbiAgICBdLFxuICAgIHVuY29sbGVjdGVkVmFsdWVzOiBbJzU1LTU5JywnNjAtNjQnLCc2NS02OScsICc3MC03NCcsICc3NS03OScsICc4MCsnXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gIH0sXG4gIFNleDoge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRpb24nLCdEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnTWFsZScsICdGZW1hbGUnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydOb24tYmluYXJ5J10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG5cdH0sXG4gICdSZWxpZ2lvbi9TcGlyaXR1YWxpdHknOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnR2VvZ3JhcGhpYyBJZGVudGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gICdEaXMvYWJpbGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gIEluZGlnZW51aXR5OiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ0ZpcnN0IE5hdGlvbnMnLCAnTWV0aXMnLCAnSW51aXQnXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnRmlyc3QgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnT3RoZXIgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnRXRobmljaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREVcbiAgfSxcbiAgJ05hdGlvbic6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG4gIH0sXG59XG5cblxuXG5jb25zdCBjb2xvcnMgPSB7XG4gIFRyYW5zcGFyZW50OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjB9LFxuICBXaGl0ZToge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjoxfSxcbiAgR3JleToge1wicmVkXCI6MTI4LFwiZ3JlZW5cIjoxMjgsXCJibHVlXCI6MTI4LFwiYWxwaGFcIjoxfSxcblx0R3JlZW46IHtcInJlZFwiOjAsXCJncmVlblwiOjI1NSxcImJsdWVcIjowLFwiYWxwaGFcIjoxfSxcbiAgQmx1ZToge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbGFjazoge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjowLFwiYWxwaGFcIjoxfVxufVxuXG5jb25zdCBzaXplcyA9IHtcblx0TGFyZ2U6IHt3aWR0aDogMzQyLCBoZWlnaHQ6IDE0Nn0sXG4gIE1lZGl1bToge3dpZHRoOiAzMzEsIGhlaWdodDogMTQ2fSxcblx0U21hbGw6IHt3aWR0aDogMzEwLCBoZWlnaHQ6IDE0Nn1cbn1cblxuY29uc3QgYm9yZGVyV2lkdGggPSAyXG5jb25zdCBib3JkZXJSYWRpdXMgPSA1XG5jb25zdCBjb25uZWN0b3JMaW5lV2lkdGggPSA1XG5cbmNvbnN0IG5vZGVEaW1lbnNpb25zID0ge1xuICBbUk9PVF9OT0RFXSA6IHtcbiAgICB3aWR0aDogc2l6ZXMuTGFyZ2Uud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5MYXJnZS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICB0ZXh0Q29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBjbGlja2FibGU6IGZhbHNlXG4gIH0sXG5cdFtSRVBPUlRfTk9ERV0gOiB7XG4gIFx0d2lkdGg6IHNpemVzLkxhcmdlLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTGFyZ2UuaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1VOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXSA6IHtcbiAgICB3aWR0aDogc2l6ZXMuTWVkaXVtLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTWVkaXVtLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkdyZWVuLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLkdyZXksXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW0FDQURFTUlDX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmx1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbRURJX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1ZBTFVFX05PREVdOiB7XG4gIFx0d2lkdGg6IHNpemVzLlNtYWxsLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuU21hbGwuaGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcblx0XHRjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5HcmV5LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfVxufVxuXG5jb25zdCBtYWtlTm9kZSA9IChub2RlSWQsIHBhcmVudE5vZGVJZHMsIG5vZGVUeXBlLCBwYXJlbnROb2RlVHlwZSkgPT4ge1xuXHRsZXQgbm9kZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZURpbWVuc2lvbnNbbm9kZVR5cGVdKSk7XG4gIG5vZGUubm9kZUlkID0gbm9kZUlkO1xuICBub2RlLnBhcmVudE5vZGVJZHMgPSBwYXJlbnROb2RlSWRzO1xuXHRub2RlLmV4cGFuZGVkID0gZmFsc2U7XG4gIG5vZGUuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgbm9kZS5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXM7XG4gIG5vZGUuY29ubmVjdG9yTGluZVdpZHRoID0gY29ubmVjdG9yTGluZVdpZHRoO1xuXG4gIGlmIChub2RlVHlwZSA9PSBWQUxVRV9OT0RFKXtcbiAgXHRub2RlLmJvcmRlckNvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJvcmRlckNvbG9yOyBcbiAgICBub2RlLmNvbm5lY3RvckxpbmVDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgXG4gIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IFVOQ09MTEVDVEVEX1ZBTFVFX05PREUpe1xuICAgXHRub2RlLmJvcmRlckNvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJvcmRlckNvbG9yOyAgXG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmNvbnN0IHBvcHVsYXRlTm9kZXMgPSAobm9kZXMsIGluaXRpYWxOb2RlcykgPT4ge1xuXHRmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsTm9kZXMpIHtcbiAgICBjb25zdCBub2RlID0gaW5pdGlhbE5vZGVzW2tleV07XG5cbiAgICBpZiAobm9kZS50eXBlID09PSBSRVBPUlRfTk9ERSl7XG4gICAgXHRcdG5vZGVzLnB1c2gobWFrZU5vZGUoa2V5LCBbJ1Jvb3QnXSwgUkVQT1JUX05PREUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgbm9kZS5wYXJlbnRzLCBub2RlLnR5cGUpKTsgLy9saW5rIHRvIGZpcnN0IHBhcmVudFxuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5jb2xsZWN0ZWRWYWx1ZXMpXG4gICAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShsaW5rLCBba2V5XSwgVkFMVUVfTk9ERSwgbm9kZS50eXBlKSk7XG4gICAgICAgIGZvciAoY29uc3QgbGluayBvZiBub2RlLnVuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFVOQ09MTEVDVEVEX1ZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgIH1cblx0fVxufVxuXG5leHBvcnQgY29uc3Qgbm9kZXMgPSBbbWFrZU5vZGUoJ1Jvb3QnLCBbbnVsbF0sIFJPT1RfTk9ERSldO1xucG9wdWxhdGVOb2Rlcyhub2RlcywgaW5pdGlhbE5vZGVzKTtcblxuXG5cblxuXG4iLCJpbXBvcnQgeyBub2RlcyB9IGZyb20gJy4vbm9kZXMnXG5cbmV4cG9ydCBjbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgICAgICBzdmdXaWR0aDogODAwLFxuICAgICAgICAgIHN2Z0hlaWdodDogNjAwLFxuICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICBkZWZhdWx0VGV4dEZpbGw6ICcjMkMzRTUwJyxcbiAgICAgICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgZGVmYXVsdEZvbnQ6ICdIZWx2ZXRpY2EnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBkYXRhOiBub2RlcyxcbiAgICAgICAgICBub2RlczogbnVsbCxcbiAgICAgICAgXHRjb25uZWN0b3JMZXZlbHM6IDIsXG4gICAgICAgICAgZGVwdGg6IDE4MCxcbiAgICAgICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgICBcdGFjYWRlbWljVmFsdWVzOiB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICAgICAgIEZhY3VsdHk6IFsnVG90YWwnXSxcbiAgICAgICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydUb3RhbCddXG4gICAgICAgICAgfSxcbiAgICAgICAgXHRkaXZlcnNpdHlWYWx1ZXM6IHsgICAgIFxuICAgICAgICAgICAgICBBZ2U6IFsnVG90YWwnXSxcbiAgICAgICAgICAgICAgU2V4OiAgWydUb3RhbCddLFxuICAgICAgICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogWydUb3RhbCddXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgICAvLyBEeW5hbWljYWxseSBzZXQgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zIGZvciBDaGFydCBjbGFzc1xuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgICAgICAgICAgdmFyIHN0cmluZyA9IGBhdHRyc1snJHtrZXl9J10gPSBfYDtcbiAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI25vZGUtbGVnZW5kXCIpXG4gICAgICBzdmcuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLDIwKS5hdHRyKFwieVwiLDI0KS5hdHRyKFwid2lkdGhcIiwgMTIpLmF0dHIoXCJoZWlnaHRcIiwgMTIpLnN0eWxlKFwiZmlsbFwiLCBcImdyZXlcIilcbiAgICAgIHN2Zy5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ4XCIsMjApLmF0dHIoXCJ5XCIsNTQpLmF0dHIoXCJ3aWR0aFwiLCAxMikuYXR0cihcImhlaWdodFwiLCAxMikuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKS5zdHlsZShcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICBzdmcuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLDIwKS5hdHRyKFwieVwiLDg0KS5hdHRyKFwid2lkdGhcIiwgMTIpLmF0dHIoXCJoZWlnaHRcIiwgMTIpLnN0eWxlKFwiZmlsbFwiLCBcIm5vbmVcIikuc3R5bGUoXCJzdHJva2VcIiwgXCJibHVlXCIpXG4gICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCA0MCkuYXR0cihcInlcIiwgMzApLnRleHQoXCJVbmNvbGxlY3RlZFwiKS5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE1cHhcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG4gICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCA0MCkuYXR0cihcInlcIiwgNjApLnRleHQoXCJEaXZlcnNpdHlcIikuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNXB4XCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuICAgICAgc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgNDApLmF0dHIoXCJ5XCIsIDkwKS50ZXh0KFwiQWNhZGVtaWNcIikuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNXB4XCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuXG4gICAgICB0aGlzLmluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCk7XG4gIH1cblxuICBpbml0aWFsaXplRW50ZXJFeGl0VXBkYXRlUGF0dGVybigpIHtcbiAgICAgIGQzLnNlbGVjdGlvbi5wcm90b3R5cGUucGF0dGVybmlmeSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzO1xuICAgICAgICAgIHZhciBzZWxlY3RvciA9IHBhcmFtcy5zZWxlY3RvcjtcbiAgICAgICAgICB2YXIgZWxlbWVudFRhZyA9IHBhcmFtcy50YWc7XG4gICAgICAgICAgdmFyIGRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbc2VsZWN0b3JdO1xuXG4gICAgICAgICAgLy8gUGF0dGVybiBpbiBhY3Rpb25cbiAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gY29udGFpbmVyLnNlbGVjdEFsbCgnLicgKyBzZWxlY3RvcikuZGF0YShkYXRhLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGVjdGlvbi5leGl0KCkucmVtb3ZlKCk7XG4gICAgICAgICAgc2VsZWN0aW9uID0gc2VsZWN0aW9uLmVudGVyKCkuYXBwZW5kKGVsZW1lbnRUYWcpLm1lcmdlKHNlbGVjdGlvbik7XG4gICAgICAgICAgc2VsZWN0aW9uLmF0dHIoJ2NsYXNzJywgc2VsZWN0b3IpO1xuICAgICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgcmV0cmlldmVzIHBhc3NlZCBub2RlJ3MgY2hpbGRyZW4gSUQncyAoaW5jbHVkaW5nIG5vZGUpICAgICAgXG4gIGdldE5vZGVDaGlsZHJlbklkcyh7XG4gICAgICBkYXRhLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBfY2hpbGRyZW5cbiAgfSwgbm9kZUlkc1N0b3JlKSB7XG5cbiAgICAgIC8vIFN0b3JlIGN1cnJlbnQgbm9kZSBJRFxuICAgICAgbm9kZUlkc1N0b3JlLnB1c2goZGF0YS5ub2RlSWQpO1xuXG4gICAgICAvLyBMb29wIG92ZXIgY2hpbGRyZW4gYW5kIHJlY3Vyc2l2ZWx5IHN0b3JlIGRlc2NlbmRhbnRzIGlkIChleHBhbmRlZCBub2RlcylcbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSlcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBMb29wIG92ZXIgX2NoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoY29sbGFwc2VkIG5vZGVzKVxuICAgICAgaWYgKF9jaGlsZHJlbikge1xuICAgICAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmdldE5vZGVDaGlsZHJlbklkcyhkLCBub2RlSWRzU3RvcmUpXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHJlc3VsdFxuICAgICAgcmV0dXJuIG5vZGVJZHNTdG9yZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRab29tRmFjdG9yIEFQSSwgaXQgem9vbXMgdG8gcGFydGljdWxhdCBzY2FsZVxuICBzZXRab29tRmFjdG9yKHpvb21MZXZlbCkge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGNhbGMgPSBhdHRycy5jYWxjO1xuXG4gICAgICAvLyBTdG9yZSBwYXNzZWQgem9vbSBsZXZlbFxuICAgICAgYXR0cnMuaW5pdGlhbFpvb20gPSB6b29tTGV2ZWw7XG5cbiAgICAgIC8vIFJlc2NhbGUgY29udGFpbmVyIGVsZW1lbnQgYWNjb3JkaW5nbHlcbiAgICAgIGF0dHJzLmNlbnRlckcuYXR0cigndHJhbnNmb3JtJywgYCB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCAke2NhbGMubm9kZU1heEhlaWdodC8yfSkgc2NhbGUoJHthdHRycy5pbml0aWFsWm9vbX0pYClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAgIC8vSW5uZXJGdW5jdGlvbnMgd2hpY2ggd2lsbCB1cGRhdGUgdmlzdWFsc1xuXG4gICAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgICAgY29uc3QgdGhpc09ialJlZiA9IHRoaXM7XG5cbiAgICAgIC8vRHJhd2luZyBjb250YWluZXJzXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgaWYgKGNvbnRhaW5lclJlY3Qud2lkdGggPiAwKSBhdHRycy5zdmdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG5cbiAgICAgIC8vQXR0YWNoIGRyb3Agc2hhZG93IGlkIHRvIGF0dHJzIG9iamVjdFxuICAgICAgdGhpcy5zZXREcm9wU2hhZG93SWQoYXR0cnMpO1xuXG4gICAgICAvL0NhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgY29uc3QgY2FsYyA9IHtcbiAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICBjaGFydFRvcE1hcmdpbjogbnVsbCxcbiAgICAgICAgICBjaGFydExlZnRNYXJnaW46IG51bGwsXG4gICAgICAgICAgY2hhcnRXaWR0aDogbnVsbCxcbiAgICAgICAgICBjaGFydEhlaWdodDogbnVsbFxuICAgICAgfTtcbiAgICAgIGNhbGMuaWQgPSBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWA7IC8vIGlkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIGNhbGMuY2hhcnRMZWZ0TWFyZ2luID0gYXR0cnMubWFyZ2luTGVmdDtcbiAgICAgIGNhbGMuY2hhcnRUb3BNYXJnaW4gPSBhdHRycy5tYXJnaW5Ub3A7XG4gICAgICBjYWxjLmNoYXJ0V2lkdGggPSBhdHRycy5zdmdXaWR0aCAtIGF0dHJzLm1hcmdpblJpZ2h0IC0gY2FsYy5jaGFydExlZnRNYXJnaW47XG4gICAgICBjYWxjLmNoYXJ0SGVpZ2h0ID0gYXR0cnMuc3ZnSGVpZ2h0IC0gYXR0cnMubWFyZ2luQm90dG9tIC0gY2FsYy5jaGFydFRvcE1hcmdpbjtcbiAgICAgIGF0dHJzLmNhbGMgPSBjYWxjO1xuXG4gICAgICAvLyBHZXQgbWF4aW11bSBub2RlIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgIGNhbGMubm9kZU1heFdpZHRoID0gZDMubWF4KGF0dHJzLmRhdGEsICh7XG4gICAgICAgICAgd2lkdGhcbiAgICAgIH0pID0+IHdpZHRoKTtcbiAgICAgIGNhbGMubm9kZU1heEhlaWdodCA9IGQzLm1heChhdHRycy5kYXRhLCAoe1xuICAgICAgICAgIGhlaWdodFxuICAgICAgfSkgPT4gaGVpZ2h0KTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIG1heCBub2RlIGRlcHRoIChpdCdzIG5lZWRlZCBmb3IgbGF5b3V0IGhlaWdodHMgY2FsY3VsYXRpb24pXG4gICAgICBhdHRycy5kZXB0aCA9IGNhbGMubm9kZU1heEhlaWdodCArIDEwMDtcbiAgICAgIGNhbGMuY2VudGVyWCA9IGNhbGMuY2hhcnRXaWR0aCAvIDI7XG5cbiAgICAgIC8vKioqKioqKioqKioqKioqKioqKiogIExBWU9VVFMgICoqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICBjb25zdCBsYXlvdXRzID0ge1xuICAgICAgICAgIHRyZWVtYXA6IG51bGxcbiAgICAgIH1cbiAgICAgIGF0dHJzLmxheW91dHMgPSBsYXlvdXRzO1xuXG4gICAgICAvLyBHZW5lcmF0ZSB0cmVlIGxheW91dCBmdW5jdGlvblxuICAgICAgbGF5b3V0cy50cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2NhbGMuY2hhcnRXaWR0aCwgY2FsYy5jaGFydEhlaWdodF0pXG4gICAgICAgICAgLm5vZGVTaXplKFtjYWxjLm5vZGVNYXhXaWR0aCArIDEwMCwgY2FsYy5ub2RlTWF4SGVpZ2h0ICsgYXR0cnMuZGVwdGhdKVxuXG4gICAgICAvLyAqKioqKioqKioqKioqKioqKioqIEJFSEFWSU9SUyAuICoqKioqKioqKioqKioqKioqKioqKipcbiAgICAgIGNvbnN0IGJlaGF2aW9ycyA9IHtcbiAgICAgICAgICB6b29tOiBudWxsXG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB6b29taW5nIGZ1bmN0aW9uIFxuICAgICAgYmVoYXZpb3JzLnpvb20gPSBkMy56b29tKCkub24oXCJ6b29tXCIsIGQgPT4gdGhpcy56b29tZWQoZCkpXG5cbiAgICAgIC8vKioqKioqKioqKioqKioqKioqIFJPT1Qgbm9kZSB3b3JrICoqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgICAvLyBDb252ZXJ0IGZsYXQgZGF0YSB0byBoaWVyYXJjaGljYWxcbiAgICAgIGF0dHJzLnJvb3QgPSBkMy5zdHJhdGlmeSgpXG4gICAgICAgICAgLmlkKCh7XG4gICAgICAgICAgICAgIG5vZGVJZFxuICAgICAgICAgIH0pID0+IG5vZGVJZClcbiAgICAgICAgICAucGFyZW50SWQoKHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZUlkc1xuICAgICAgICAgIH0pID0+IHBhcmVudE5vZGVJZHNbMF0pXG4gICAgICAgICAgKGF0dHJzLmRhdGEpXG5cbiAgICAgIC8vIFNldCBjaGlsZCBub2RlcyBlbnRlciBhcHBlYXJhbmNlIHBvc2l0aW9uc1xuICAgICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgICBhdHRycy5yb290LnkwID0gMDtcblxuICAgICAgLyoqIEdldCBhbGwgbm9kZXMgYXMgYXJyYXkgKHdpdGggZXh0ZW5kZWQgcGFyZW50ICYgY2hpbGRyZW4gcHJvcGVydGllcyBzZXQpXG4gICAgICAgICAgVGhpcyB3YXkgd2UgY2FuIGFjY2VzcyBhbnkgbm9kZSdzIHBhcmVudCBkaXJlY3RseSB1c2luZyBub2RlLnBhcmVudCAtIHByZXR0eSBjb29sLCBodWg/XG4gICAgICAqL1xuICAgICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzLnRyZWVtYXAoYXR0cnMucm9vdCkuZGVzY2VuZGFudHMoKVxuXG4gICAgICAvLyBDb2xsYXBzZSBhbGwgY2hpbGRyZW4gYXQgZmlyc3RcbiAgICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaChkID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgICAvLyBUaGVuIGV4cGFuZCBzb21lIG5vZGVzLCB3aGljaCBoYXZlIGBleHBhbmRlZGAgcHJvcGVydHkgc2V0XG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmV4cGFuZFNvbWVOb2RlcyhkKSk7XG5cbiAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKiogIERSQVdJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgIC8vQWRkIHN2Z1xuICAgICAgY29uc3Qgc3ZnID0gY29udGFpbmVyXG4gICAgICAgICAgLnBhdHRlcm5pZnkoe1xuICAgICAgICAgICAgICB0YWc6ICdzdmcnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ3N2Zy1jaGFydC1jb250YWluZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5zdmdXaWR0aClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYXR0cnMuc3ZnSGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGF0dHJzLmRlZmF1bHRGb250KVxuICAgICAgICAgIC5jYWxsKGJlaGF2aW9ycy56b29tKVxuICAgICAgICAgIC5hdHRyKCdjdXJzb3InLCAnbW92ZScpXG4gICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgIGF0dHJzLnN2ZyA9IHN2ZztcblxuICAgICAgLy9BZGQgY29udGFpbmVyIGcgZWxlbWVudFxuICAgICAgY29uc3QgY2hhcnQgPSBzdmdcbiAgICAgICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgICAgICAgIHRhZzogJ2cnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2NoYXJ0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjYWxjLmNoYXJ0TGVmdE1hcmdpbn0sJHtjYWxjLmNoYXJ0VG9wTWFyZ2lufSlgKTtcblxuICAgICAgLy8gQWRkIG9uZSBtb3JlIGNvbnRhaW5lciBnIGVsZW1lbnQsIGZvciBiZXR0ZXIgcG9zaXRpb25pbmcgY29udHJvbHNcbiAgICAgIGF0dHJzLmNlbnRlckcgPSBjaGFydC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgICAgICAgdGFnOiAnZycsXG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnY2VudGVyLWdyb3VwJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCR7Y2FsYy5ub2RlTWF4SGVpZ2h0LzJ9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgKTtcblxuICAgICAgYXR0cnMuY2hhcnQgPSBjaGFydDtcblxuICAgICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKiogUk9VTkRFRCBBTkQgU0hBRE9XIElNQUdFICBXT1JLIFVTSU5HIFNWRyBGSUxURVJTICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgICAgLy9BZGRpbmcgZGVmcyBlbGVtZW50IGZvciByb3VuZGVkIGltYWdlXG4gICAgICBhdHRycy5kZWZzID0gc3ZnLnBhdHRlcm5pZnkoe1xuICAgICAgICAgIHRhZzogJ2RlZnMnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnaW1hZ2UtZGVmcydcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGRpbmcgZGVmcyBlbGVtZW50IGZvciBpbWFnZSdzIHNoYWRvd1xuICAgICAgY29uc3QgZmlsdGVyRGVmcyA9IHN2Zy5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgICB0YWc6ICdkZWZzJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ2ZpbHRlci1kZWZzJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERpc3BsYXkgdHJlZSBjb250ZW5yc1xuICAgICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdClcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgZHJvcCBzaGFkb3cgSUQgdG8gdGhlIHBhc3NlZCBvYmplY3RcbiAgc2V0RHJvcFNoYWRvd0lkKGQpIHtcblxuICAgICAgLy8gSWYgaXQncyBhbHJlYWR5IHNldCwgdGhlbiByZXR1cm4gXG4gICAgICBpZiAoZC5kcm9wU2hhZG93SWQpIHJldHVybjtcblxuICAgICAgLy8gR2VuZXJhdGUgZHJvcCBzaGFkb3cgSURcbiAgICAgIGxldCBpZCA9IGAke2QuaWR9LWRyb3Atc2hhZG93YDtcblxuICAgICAgLy8gSWYgRE9NIG9iamVjdCBpcyBhdmFpbGFibGUsIHRoZW4gdXNlIFVJRCBtZXRob2QgdG8gZ2VuZXJhdGVkIHNoYWRvdyBpZFxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAodHlwZW9mIERPTSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIGlkID0gRE9NLnVpZChkLmlkKS5pZDtcbiAgICAgIH1cblxuICAgICAgLy8gRXh0ZW5kIHBhc3NlZCBvYmplY3Qgd2l0aCBkcm9wIHNoYWRvdyBJRFxuICAgICAgT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgICAgZHJvcFNoYWRvd0lkOiBpZFxuICAgICAgfSlcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IHJlZHJhd3MgdmlzaWJsZSBncmFwaCwgYmFzZWQgb24gbm9kZXMgc3RhdGVcbiAgdXBkYXRlKHtcbiAgICAgIHgwLFxuICAgICAgeTAsXG4gICAgICB4LFxuICAgICAgeVxuICB9KSB7XG5cbiAgICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgICBjb25zdCBjYWxjID0gYXR0cnMuY2FsYztcblxuICAgICAgLy8gIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICAgICAgY29uc3QgdHJlZURhdGEgPSBhdHRycy5sYXlvdXRzLnRyZWVtYXAoYXR0cnMucm9vdCk7XG5cbiAgICAgIC8vIEdldCB0cmVlIG5vZGVzIGFuZCBsaW5rcyBhbmQgYXR0YWNoIHNvbWUgcHJvcGVydGllcyBcbiAgICAgIGNvbnN0IG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKVxuICAgICAgICAgIC5tYXAoZCA9PiB7XG4gICAgICAgICAgICAgIC8vIElmIGF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBpcyBhbHJlYWR5IHNldCwgdGhlbiB3ZSBkb24ndCB3YW50IHRvIHJlc2V0IG90aGVyIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgaWYgKGQud2lkdGgpIHJldHVybiBkO1xuXG4gICAgICAgICAgICAgIC8vIERlY2xhcmUgcHJvcGVydGllcyB3aXRoIGRlZmZhdWx0IHZhbHVlc1xuICAgICAgICAgICAgICBsZXQgYm9yZGVyQ29sb3IgPSAnc3RlZWxibHVlJztcbiAgICAgICAgICAgICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgICAgICAgXHRsZXQgdGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgbGV0IHdpZHRoID0gZC5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gZC5kYXRhLmhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoZC5kYXRhLmJvcmRlckNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLmJvcmRlckNvbG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZC5kYXRhLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihkLmRhdGEuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXHRpZiAoZC5kYXRhLnRleHRDb2xvcil7XG4gICAgICAgICAgICAgIFx0IHRleHRDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLnRleHRDb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gRXh0ZW5kIG5vZGUgb2JqZWN0IHdpdGggY2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGQsIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgIFx0dGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIFx0XG4gICAgXHQvLyBTYXZlIG5vZGVzIGZvciBjbGlja1xuICAgICBcdGF0dHJzLm5vZGVzID0gbm9kZXM7XG4gICAgXG4gICAgICAvLyBHZXQgYWxsIGxpbmtzXG4gICAgICBjb25zdCBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIC8vIFNldCBjb25zdGFudCBkZXB0aCBmb3IgZWFjaCBub2Rlc1xuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiBhdHRycy5kZXB0aCk7XG5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMSU5LUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZXQgbGlua3Mgc2VsZWN0aW9uXG4gICAgICBjb25zdCBsaW5rU2VsZWN0aW9uID0gYXR0cnMuY2VudGVyRy5zZWxlY3RBbGwoJ3BhdGgubGluaycpXG4gICAgICAgICAgLmRhdGEobGlua3MsICh7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgfSkgPT4gaWQpO1xuXG4gICAgICAvLyBFbnRlciBhbnkgbmV3IGxpbmtzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cbiAgICAgIGNvbnN0IGxpbmtFbnRlciA9IGxpbmtTZWxlY3Rpb24uZW50ZXIoKVxuICAgICAgICAgIC5pbnNlcnQoJ3BhdGgnLCBcImdcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGlua1wiKVxuICAgICAgICAgIC5hdHRyKCdkJywgZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgICAgICAgICB4OiB4MCxcbiAgICAgICAgICAgICAgICAgIHk6IHkwXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKG8sIFtvXSlcbiAgICAgICAgICB9KTtcdFxuICAgIFxuXG4gICAgICAvLyBHZXQgbGlua3MgdXBkYXRlIHNlbGVjdGlvblxuICAgICAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rU2VsZWN0aW9uKTtcblxuICAgICAgLy8gU3R5bGluZyBsaW5rc1xuICAgICAgbGlua1VwZGF0ZVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gZGF0YS5jb25uZWN0b3JMaW5lV2lkdGggfHwgMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEuY29ubmVjdG9yTGluZUNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZ2JhT2JqVG9Db2xvcihkYXRhLmNvbm5lY3RvckxpbmVDb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICdncmVlbic7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLWRhc2hhcnJheScsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLmRhc2hBcnJheSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZGFzaEFycmF5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9KVxuXG4gICAgICAvLyBUcmFuc2l0aW9uIGJhY2sgdG8gdGhlIHBhcmVudCBlbGVtZW50IHBvc2l0aW9uXG4gICAgICBsaW5rVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAuYXR0cignZCcsIGQgPT4ge1xuICAgICAgICBcdFx0Y29uc3QgcGFyZW50cyA9IGQuZGF0YS5wYXJlbnROb2RlSWRzLm1hcChwYXJlbnROb2RlSWQgPT4gbm9kZXMuZmluZChub2RlID0+IG5vZGUuaWQ9PT1wYXJlbnROb2RlSWQpKTtcbiAgICAgICAgXHRcdHJldHVybiB0aGlzLmRpYWdvbmFsKGQsIHBhcmVudHMpXG4gICAgICBcdFx0fSk7XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgIGxpbmtzIHdoaWNoIGlzIGV4aXRpbmcgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgICBjb25zdCBsaW5rRXhpdCA9IGxpbmtTZWxlY3Rpb24uZXhpdCgpLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAuYXR0cignZCcsIGQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvID0ge1xuICAgICAgICAgICAgICAgICAgeDogeCA/IHggOiAwLFxuICAgICAgICAgICAgICAgICAgeTogeSA/IHkgOiAwXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcdGxldCBkaWFnID0gdGhpcy5kaWFnb25hbChvLCBbb10pXG4gICAgICAgICAgICAgIHJldHVybiBkaWFnXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBOT0RFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZXQgbm9kZXMgc2VsZWN0aW9uXG4gICAgICBjb25zdCBub2Rlc1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckcuc2VsZWN0QWxsKCdnLm5vZGUnKVxuICAgICAgICAgIC5kYXRhKG5vZGVzLCAoe1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgIH0pID0+IGlkKVxuXG4gICAgICBsZXQgaHQgPSB0aGlzO1xuICAgICAgLy8gRW50ZXIgYW55IG5ldyBub2RlcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXG4gICAgICBjb25zdCBub2RlRW50ZXIgPSBub2Rlc1NlbGVjdGlvbi5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGUnKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgke3gwfSwke3kwfSlgKVxuICAgICAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgICAgLm9uKCdjbGljaycsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChbLi4uZDMuZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3RdLmluY2x1ZGVzKCdub2RlLWJ1dHRvbi1jaXJjbGUnKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcdC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBcdGlmIChkYXRhLmNsaWNrYWJsZSl7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJzLmRpdmVyc2l0eVZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dKXtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmRpdmVyc2l0eVZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLmluZGV4T2YoZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gMjtcbiAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0uc3BsaWNlKDAsIDAsIGRhdGEubm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAxMDtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dKXtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5pbmRleE9mKGRhdGEubm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLmxlbmd0aCA9PSAwKXsgLy9pZiBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0ucHVzaCgnVG90YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dWzBdID09ICdUb3RhbCcpeyAvL2lmICdUb3RhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAxMDtcbiAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IChkYXRhLmJvcmRlcldpZHRoID09IDIpID8gMTAgOiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXHRcdFxuICAgICAgICAgICAgXHRpZiAoZGF0YS5leHBhbmRhYmxlKXtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUNsaWNrZWQgPSBub2Rlcy5maW5kKG5vZGUgPT4gbm9kZS5pZCA9PT0gZGF0YS5ub2RlSWQpXG4gICAgICAgICAgICBcdFx0aHQub25CdXR0b25DbGljayhub2RlQ2xpY2tlZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFx0XG5cdFx0XHRcdFx0XHRcdGh0LnVwZGF0ZShkYXRhKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgLy8gQWRkIGJhY2tncm91bmQgcmVjdGFuZ2xlIGZvciB0aGUgbm9kZXMgXG4gICAgICBub2RlRW50ZXJcbiAgICAgICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgICAgICAgIHRhZzogJ3JlY3QnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ25vZGUtcmVjdCcsXG4gICAgICAgICAgICAgIGRhdGE6IGQgPT4gW2RdXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsICh7XG4gICAgICAgICAgICAgIF9jaGlsZHJlblxuICAgICAgICAgIH0pID0+IF9jaGlsZHJlbiA/IFwibGlnaHRzdGVlbGJsdWVcIiA6IFwiI2ZmZlwiKVxuXG5cbiAgICAgIC8vIE5vZGUgdXBkYXRlIHN0eWxlc1xuICAgICAgY29uc3Qgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2Rlc1NlbGVjdGlvbilcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQnLCAnMTJweCBzYW5zLXNlcmlmJyk7XG5cblxuICAgICAgLy8gQWRkIGZvcmVpZ25PYmplY3QgZWxlbWVudCBpbnNpZGUgcmVjdGFuZ2xlXG4gICAgICBjb25zdCBmbyA9IG5vZGVVcGRhdGVcbiAgICAgICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgICAgICAgIHRhZzogJ2ZvcmVpZ25PYmplY3QnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ25vZGUtZm9yZWlnbi1vYmplY3QnLFxuICAgICAgICAgICAgICBkYXRhOiBkID0+IFtkXVxuICAgICAgICAgIH0pXG5cblxuICAgICAgLy8gQWRkIGZvcmVpZ24gb2JqZWN0IFxuICAgICAgZm8ucGF0dGVybmlmeSh7XG4gICAgICAgICAgdGFnOiAneGh0bWw6ZGl2JyxcbiAgICAgICAgICBzZWxlY3RvcjogJ25vZGUtZm9yZWlnbi1vYmplY3QtZGl2JyxcbiAgICAgICAgICBkYXRhOiBkID0+IFtkXVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yZXN0eWxlRm9yZWlnbk9iamVjdEVsZW1lbnRzKCk7XG5cbiAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIHByb3BlciBwb3NpdGlvbiBmb3IgdGhlIG5vZGVcbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxuICAgICAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoe1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICB5XG4gICAgICAgICAgfSkgPT4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYClcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXG5cbiAgICAgIC8vIFN0eWxlIG5vZGUgcmVjdGFuZ2xlc1xuICAgICAgbm9kZVVwZGF0ZS5zZWxlY3QoJy5ub2RlLXJlY3QnKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiBkYXRhLndpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gZGF0YS5oZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gLWRhdGEud2lkdGggLyAyKVxuICAgICAgICAgIC5hdHRyKCd5JywgKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IC1kYXRhLmhlaWdodCAvIDIpXG4gICAgICAgICAgLmF0dHIoJ3J4JywgKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IGRhdGEuYm9yZGVyUmFkaXVzIHx8IDApXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiBkYXRhLmJvcmRlcldpZHRoIHx8IGF0dHJzLnN0cm9rZVdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICh7XG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yXG4gICAgICAgICAgfSkgPT4gYm9yZGVyQ29sb3IpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCAoe1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9KSA9PiBiYWNrZ3JvdW5kQ29sb3IpXG5cbiAgICBcblxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzIGFmdGVyIHRyYW5zaXRpb25cbiAgICAgIGNvbnN0IG5vZGVFeGl0VHJhbnNpdGlvbiA9IG5vZGVzU2VsZWN0aW9uLmV4aXQoKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsIDApO1xuXG4gICAgICAvLyBPbiBleGl0IHJlZHVjZSB0aGUgbm9kZSByZWN0cyBzaXplIHRvIDBcbiAgICAgIG5vZGVFeGl0VHJhbnNpdGlvbi5zZWxlY3RBbGwoJy5ub2RlLXJlY3QnKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMClcbiAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgLmF0dHIoJ3knLCAwKTtcblxuICAgICAgLy8gU3RvcmUgdGhlIG9sZCBwb3NpdGlvbnMgZm9yIHRyYW5zaXRpb24uXG4gICAgICBub2Rlcy5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkZXRlY3RzIHdoZXRoZXIgY3VycmVudCBicm93c2VyIGlzIGVkZ2VcbiAgaXNFZGdlKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiRWRnZVwiKTtcbiAgfVxuXG4gIC8qIEZ1bmN0aW9uIGNvbnZlcnRzIHJnYmEgb2JqZWN0cyB0byByZ2JhIGNvbG9yIHN0cmluZyBcbiAgICB7cmVkOjExMCxncmVlbjoxNTAsYmx1ZToyNTUsYWxwaGE6MX0gID0+IHJnYmEoMTEwLDE1MCwyNTUsMSlcbiAgKi9cbiAgcmdiYU9ialRvQ29sb3Ioe1xuICAgICAgcmVkLFxuICAgICAgZ3JlZW4sXG4gICAgICBibHVlLFxuICAgICAgYWxwaGFcbiAgfSkge1xuICAgICAgcmV0dXJuIGByZ2JhKCR7cmVkfSwke2dyZWVufSwke2JsdWV9LCR7YWxwaGF9KWA7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBjdXN0b20gZGlhZ29uYWwgLSBwbGF5IHdpdGggaXQgaGVyZSAtIGh0dHBzOi8vdG8ubHkvMXpoVEtcbiAgZGlhZ29uYWwocywgcGFyZW50cykge1xuICAgIFx0Y29uc3QgZ3JvdXAgPSB0aGlzLmdldENoYXJ0U3RhdGUoKS5jZW50ZXJHXG4gICAgICBcdFx0XHRcdFx0LmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiZ3JvdXBPZlBhdGhzXCIpOyBcbiAgICBcdGxldCBoZWlnaHRNdWx0aXBsaWVyID0gcGFyZW50cy5sZW5ndGggPT0gMiA/IDAuNTc1IDogMC40MjVcbiAgICBcdGZvciAoY29uc3QgdCBvZiBwYXJlbnRzKXtcbiAgICAgICAgXHRsZXQgaGVpZ2h0ID0gcy55IC0gdC55O1xuICAgICAgICBcbiAgICAgICAgICAvLyBDYWxjdWxhdGUgc29tZSB2YXJpYWJsZXMgYmFzZWQgb24gc291cmNlIGFuZCB0YXJnZXQgKHMsdCkgY29vcmRpbmF0ZXNcbiAgICAgICAgICBsZXQgeCA9IHMueDtcbiAgICAgICAgICBsZXQgeSA9IHMueTtcbiAgICAgICAgICBsZXQgZXggPSB0Lng7XG4gICAgICAgICAgbGV0IGV5ID0gdC55O1xuICAgICAgICAgIGxldCB4cnZzID0gZXggLSB4IDwgMCA/IC0xIDogMTtcbiAgICAgICAgICBsZXQgeXJ2cyA9IC0xO1xuICAgICAgICAgIGxldCByZGVmID0gMzU7XG4gICAgICAgICAgbGV0IHJJbml0aWFsID0gTWF0aC5hYnMoZXggLSB4KSAvIDIgPCByZGVmID8gTWF0aC5hYnMoZXggLSB4KSAvIDIgOiByZGVmO1xuICAgICAgICAgIGxldCByID0gTWF0aC5hYnMoZXkgLSB5KSAvIDIgPCBySW5pdGlhbCA/IE1hdGguYWJzKGV5IC0geSkgLyAyIDogckluaXRpYWw7XG4gICAgICAgICAgbGV0IGggPSBNYXRoLmFicyhleSAtIHkpICogaGVpZ2h0TXVsdGlwbGllciAtIHI7XG4gICAgICAgICAgbGV0IHcgPSBNYXRoLmFicyhleCAtIHgpIC0gciAqIDI7XG4gICAgICAgIFxuICAgICAgICAgIGxldCBwYXRoID0gYFxuICAgICAgICAgICAgIE0gJHt4fSAke3l9XG4gICAgICAgICAgICAgTCAke3h9ICR7eStoKnlydnN9XG4gICAgICAgICAgICAgQyAke3h9ICR7eStoKnlydnMrcip5cnZzfSAke3h9ICR7eStoKnlydnMrcip5cnZzfSAke3grcip4cnZzfSAke3kraCp5cnZzK3IqeXJ2c31cbiAgICAgICAgICAgICBMICR7eCt3KnhydnMrcip4cnZzfSAke3kraCp5cnZzK3IqeXJ2c31cbiAgICAgICAgICAgICBDICR7ZXh9ICR7eStoKnlydnMrcip5cnZzfSAke2V4fSAke3kraCp5cnZzK3IqeXJ2c30gJHtleH0gJHtleS1oKnlydnN9XG4gICAgICAgICAgICAgTCAke2V4fSAke2V5fVxuICAgICAgICAgICBgO1xuICAgICAgICBcdGdyb3VwLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgXHRcdFx0LmF0dHIoXCJkXCIsIHBhdGgpXG4gICAgICAgIFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgICB9XG5cbiAgICBcdGxldCBjb21iaW5lZEQgPSBcIlwiO1xuICAgIFx0Z3JvdXAuc2VsZWN0QWxsKFwicGF0aFwiKS5lYWNoKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgaWYgKGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwiZFwiKSlcbiAgICAgICAgXHRjb21iaW5lZEQgKz0gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJkXCIpOyBcbiAgICAgIH0pO1xuICAgIFx0Z3JvdXAucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gY29tYmluZWREO1xuICB9XG5cbiAgcmVzdHlsZUZvcmVpZ25PYmplY3RFbGVtZW50cygpIHtcbiAgICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAgIGF0dHJzLnN2Zy5zZWxlY3RBbGwoJy5ub2RlLWZvcmVpZ24tb2JqZWN0JylcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAoe1xuICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0pID0+IHdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoe1xuICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9KSA9PiBoZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoe1xuICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0pID0+IC13aWR0aCAvIDIpXG4gICAgICAgICAgLmF0dHIoJ3knLCAoe1xuICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9KSA9PiAtaGVpZ2h0IC8gMilcbiAgICAgIGF0dHJzLnN2Zy5zZWxlY3RBbGwoJy5ub2RlLWZvcmVpZ24tb2JqZWN0LWRpdicpXG4gICAgICAgICAgLnN0eWxlKCd3aWR0aCcsICh7XG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgfSkgPT4gYCR7d2lkdGh9cHhgKVxuICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgKHtcbiAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgfSkgPT4gYCR7aGVpZ2h0fXB4YClcbiAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgKHtcbiAgICAgICAgXHRcdHRleHRDb2xvclxuICAgICAgXHRcdH0pID0+IHRleHRDb2xvcj8gdGV4dENvbG9yOiAnYmxhY2snKVxuICAgIFx0XHRcdC5zdHlsZSgndGV4dC1hbGlnbicsICdjZW50ZXInKVxuICAgIFx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICc1MHB4JylcbiAgICBcdFx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsICc0MHB4JylcbiAgICAgICAgICAuaHRtbCgoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gZGF0YS5ub2RlSWQpXG4gIH1cblxuICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gIG9uQnV0dG9uQ2xpY2soZCkge1xuXG4gICAgICAvLyBJZiBjaGlsZHJlbnMgYXJlIGV4cGFuZGVkXG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChkLmlkID09PSAnQ29udm9jYXRpb24nKXtcbiAgICAgICAgICAgIGNvbnN0IGRlbW9ncmFwaGljTm9kZSA9IGQucGFyZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgaWYgKGRlbW9ncmFwaGljTm9kZS5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdCByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vQ29sbGFwc2UgdGhlbVxuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcblxuICAgICAgICAgIC8vIFNldCBkZXNjZW5kYW50cyBleHBhbmRlZCBwcm9wZXJ0eSB0byBmYWxzZVxuICAgICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXHRpZiAoZC5pZCA9PT0nRGVtb2dyYXBoaWNzJyl7XG4gICAgICAgICAgXHRjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbnZvY2F0aW9uTm9kZS5jaGlsZHJlbiA9PSBudWxsKXtcbiAgICAgICAgICAgIFx0dGhpcy5vbkJ1dHRvbkNsaWNrKGNvbnZvY2F0aW9uTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAvLyBFeHBhbmQgY2hpbGRyZW5cbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgICAgICAgLy8gU2V0IGVhY2ggY2hpbGRyZW4gYXMgZXhwYW5kZWRcbiAgICAgICAgICBkLmNoaWxkcmVuLmZvckVhY2goKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IGRhdGEuZXhwYW5kZWQgPSB0cnVlKVxuICAgICAgfVxuXG4gICAgICAvLyBSZWRyYXcgR3JhcGggXG4gICAgICB0aGlzLnVwZGF0ZShkKTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2hhbmdlcyBgZXhwYW5kZWRgIHByb3BlcnR5IHRvIGRlc2NlbmRhbnRzXG4gIHNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKHtcbiAgICAgIGRhdGEsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIF9jaGlsZHJlblxuICB9LCBmbGFnKSB7XG5cbiAgICAgIC8vIFNldCBmbGFnIHRvIHRoZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICBkYXRhLmV4cGFuZGVkID0gZmxhZztcblxuICAgICAgLy8gTG9vcCBvdmVyIGFuZCByZWN1cnNpdmVseSB1cGRhdGUgZXhwYW5kZWQgY2hpbGRyZW4ncyBkZXNjZW5kYW50c1xuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmbGFnKVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIExvb3Agb3ZlciBhbmQgcmVjdXJzaXZlbHkgdXBkYXRlIGNvbGxhcHNlZCBjaGlsZHJlbidzIGRlc2NlbmRhbnRzXG4gICAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICAgICAgX2NoaWxkcmVuLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmxhZylcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgaW52b2tlZCB2aWEgY2hhcnQuc2V0RXhwYW5kZWQgQVBJLCBpdCBleHBhbmRzIG9yIGNvbGxhcHNlcyBwYXJ0aWN1bGFyIG5vZGVcbiAgc2V0RXhwYW5kZWQoaWQsIGV4cGFuZGVkRmxhZykge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIC8vIFJldHJpZXZlIG5vZGUgYnkgbm9kZSBJZFxuICAgICAgY29uc3Qgbm9kZSA9IGF0dHJzLmFsbE5vZGVzLmZpbHRlcigoe1xuICAgICAgICAgIGRhdGFcbiAgICAgIH0pID0+IGRhdGEubm9kZUlkID09IGlkKVswXVxuXG4gICAgICAvLyBJZiBub2RlIGV4aXN0cywgc2V0IGV4cGFuc2lvbiBmbGFnXG4gICAgICBpZiAobm9kZSkgbm9kZS5kYXRhLmV4cGFuZGVkID0gZXhwYW5kZWRGbGFnO1xuXG4gICAgICAvLyBGaXJzdCBleHBhbmQgYWxsIG5vZGVzXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmV4cGFuZChkKSk7XG5cbiAgICAgIC8vIFRoZW4gY29sbGFwc2UgYWxsIG5vZGVzXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgICAgLy8gVGhlbiBleHBhbmQgb25seSB0aGUgbm9kZXMsIHdoaWNoIHdlcmUgcHJldmlvdXNseSBleHBhbmRlZCwgb3IgaGF2ZSBhbiBleHBhbmQgZmxhZyBzZXRcbiAgICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaChkID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpKTtcblxuICAgICAgLy8gUmVkcmF3IGdyYXBoXG4gICAgICB0aGlzLnVwZGF0ZShhdHRycy5yb290KTtcbiAgfVxuXG4gIC8vIE1ldGhvZCB3aGljaCBvbmx5IGV4cGFuZHMgbm9kZXMsIHdoaWNoIGhhdmUgcHJvcGVydHkgc2V0IFwiZXhwYW5kZWQ9dHJ1ZVwiXG4gIGV4cGFuZFNvbWVOb2RlcyhkKSB7XG5cbiAgICAgIC8vIElmIG5vZGUgaGFzIGV4cGFuZGVkIHByb3BlcnR5IHNldFxuICAgICAgaWYgKGQuZGF0YS5leHBhbmRlZCkge1xuXG4gICAgICAgICAgLy8gUmV0cmlldmUgbm9kZSdzIHBhcmVudFxuICAgICAgICAgIGxldCBwYXJlbnQgPSBkLnBhcmVudDtcblxuICAgICAgICAgIC8vIFdoaWxlIHdlIGNhbiBnbyB1cCBcbiAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG5cbiAgICAgICAgICAgICAgLy8gRXhwYW5kIGFsbCBjdXJyZW50IHBhcmVudCdzIGNoaWxkcmVuXG4gICAgICAgICAgICAgIGlmIChwYXJlbnQuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuX2NoaWxkcmVuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUmVwbGFjZSBjdXJyZW50IHBhcmVudCBob2xkaW5nIG9iamVjdFxuICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBjb2xsYXBzZWQgbm9kZXNcbiAgICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBleHBhbmRlZCBub2RlcyBcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKGNoID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKSk7XG4gICAgICB9XG4gIH1cblxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyBub2RlcyBzdGF0ZSBhbmQgcmVkcmF3cyBncmFwaCwgdXN1YWxseSBhZnRlciBkYXRhIGNoYW5nZVxuICB1cGRhdGVOb2Rlc1N0YXRlKCkge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIC8vIFN0b3JlIG5ldyByb290IGJ5IGNvbnZlcnRpbmcgZmxhdCBkYXRhIHRvIGhpZXJhcmNoeVxuICAgICAgYXR0cnMucm9vdCA9IGQzLnN0cmF0aWZ5KClcbiAgICAgICAgICAuaWQoKHtcbiAgICAgICAgICAgICAgbm9kZUlkXG4gICAgICAgICAgfSkgPT4gbm9kZUlkKVxuICAgICAgICAgIC5wYXJlbnRJZCgoe1xuICAgICAgICAgICAgICBwYXJlbnROb2RlSWRzXG4gICAgICAgICAgfSkgPT4gcGFyZW50Tm9kZUlkc1swXSlcbiAgICAgICAgICAoYXR0cnMuZGF0YSlcblxuICAgICAgLy8gU3RvcmUgcG9zaXRpb25zLCB3aGVyZSBjaGlsZHJlbiBhcHBlYXIgZHVyaW5nIHRoZWlyIGVudGVyIGFuaW1hdGlvblxuICAgICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgICBhdHRycy5yb290LnkwID0gMDtcblxuICAgICAgLy8gU3RvcmUgYWxsIG5vZGVzIGluIGZsYXQgZm9ybWF0IChhbHRob3VnaCwgbm93IHdlIGNhbiBicm93c2UgcGFyZW50LCBzZWUgZGVwdGggZS50LmMuIClcbiAgICAgIGF0dHJzLmFsbE5vZGVzID0gYXR0cnMubGF5b3V0cy50cmVlbWFwKGF0dHJzLnJvb3QpLmRlc2NlbmRhbnRzKClcblxuICAgICAgLy8gU3RvcmUgZGlyZWN0IGFuZCB0b3RhbCBkZXNjZW5kYW50cyBjb3VudFxuICAgICAgYXR0cnMuYWxsTm9kZXMuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGQuZGF0YSwge1xuICAgICAgICAgICAgICBkaXJlY3RTdWJvcmRpbmF0ZXM6IGQuY2hpbGRyZW4gPyBkLmNoaWxkcmVuLmxlbmd0aCA6IDAsXG4gICAgICAgICAgICAgIHRvdGFsU3Vib3JkaW5hdGVzOiBkLmRlc2NlbmRhbnRzKCkubGVuZ3RoIC0gMVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICAvLyBFeHBhbmQgYWxsIG5vZGVzIGZpcnN0XG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2godGhpcy5leHBhbmQpO1xuXG4gICAgICAvLyBUaGVuIGNvbGxhcHNlIHRoZW0gYWxsXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgICAgLy8gVGhlbiBvbmx5IGV4cGFuZCBub2Rlcywgd2hpY2ggaGF2ZSBleHBhbmRlZCBwcm9wcnR5IHNldCB0byB0cnVlXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcblxuICAgICAgLy8gUmVkcmF3IEdyYXBoc1xuICAgICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdClcbiAgfVxuXG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggY29sbGFwc2VzIHBhc3NlZCBub2RlIGFuZCBpdCdzIGRlc2NlbmRhbnRzXG4gIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5jb2xsYXBzZShjaCkpO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggZXhwYW5kcyBwYXNzZWQgbm9kZSBhbmQgaXQncyBkZXNjZW5kYW50cyBcbiAgZXhwYW5kKGQpIHtcbiAgICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5leHBhbmQoY2gpKTtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gIH1cblxuICAvLyBab29tIGhhbmRsZXIgZnVuY3Rpb25cbiAgem9vbWVkKCkge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGNoYXJ0ID0gYXR0cnMuY2hhcnQ7XG5cbiAgICAgIC8vIEdldCBkMyBldmVudCdzIHRyYW5zZm9ybSBvYmplY3RcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGQzLmV2ZW50LnRyYW5zZm9ybTtcblxuICAgICAgLy8gU3RvcmUgaXRcbiAgICAgIGF0dHJzLmxhc3RUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAgIC8vIFJlcG9zaXRpb24gYW5kIHJlc2NhbGUgY2hhcnQgYWNjb3JkaW5nbHlcbiAgICAgIGNoYXJ0LmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG5cbiAgICAgIC8vIEFwcGx5IG5ldyBzdHlsZXMgdG8gdGhlIGZvcmVpZ24gb2JqZWN0IGVsZW1lbnRcbiAgICAgIGlmICh0aGlzLmlzRWRnZSgpKSB7XG4gICAgICAgICAgdGhpcy5yZXN0eWxlRm9yZWlnbk9iamVjdEVsZW1lbnRzKCk7XG4gICAgICB9XG5cbiAgfVxuXG59XG5cbiIsImV4cG9ydCBjbGFzcyBTdW5idXJzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy9FeHBvc2VkIHZhcmlhYmxlc1xuICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgICAgIHN2Z1dpZHRoOiA4MDAsXG4gICAgICAgICAgc3ZnSGVpZ2h0OiA2MDAsXG4gICAgICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgIGRlZmF1bHRUZXh0RmlsbDogJyMyQzNFNTAnLFxuICAgICAgICAgIG5vZGVUZXh0RmlsbDogJ3doaXRlJyxcbiAgICAgICAgICBkZWZhdWx0Rm9udDogJ0hlbHZldGljYScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZhZmFmYScsXG4gICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICBkZXB0aDogMTgwLFxuICAgICAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICAgICAgc3Ryb2tlV2lkdGg6IDMsXG4gICAgICAgICAgb25Ob2RlQ2xpY2s6IGQgPT4gZCxcbiAgICAgICAgICBhcmNXaWR0aDogMjUsXG4gICAgICAgICAgaW5uZXJSYWRpdXM6IDc1LFxuICAgICAgICBcdGV4dGVuZGVkTGluZUxlbmd0aDogNDAsXG4gICAgICAgIFx0dGV4dERpc3RhbmNlOiAxMCxcbiAgICAgICAgXHR0ZXh0Q2lyY2xlMTogbnVsbCxcbiAgICAgICAgXHR0ZXh0Q2lyY2xlMjogbnVsbCxcbiAgICAgICAgICBkeW5hbWljOiBudWxsLFxuICAgICAgICBcdGF0dHJpYnV0ZUluZGV4OiBudWxsLFxuICAgICAgICBcdGhpc3Rvcnk6IFtdLFxuICAgICAgICBcdGRpc3BsYXlOb2RlczogbnVsbCxcbiAgICAgICAgXHRjb2xvcnMgOntcbiAgICAgICAgICAgIE1hbGU6ICcjZmM4ZDU5JyxcbiAgICAgICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICAgICAgRG9tZXN0aWM6ICcjZjFhMzQwJyxcbiAgICAgICAgICAgICc8PTE3JzogICcjZjdmY2Y1JyxcbiAgICAgICAgICAgICcxOC0yMCc6ICcjZTVmNWUwJyxcbiAgICAgICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgICAgICczMS0zNScgOiAnIzc0YzQ3NicsXG4gICAgICAgICAgICAnMzYtNDUnIDogJyM0MWFiNWQnLFxuICAgICAgICAgICAgJzQ2LTU1JyA6ICcjMjM4YjQ1JyxcbiAgICAgICAgICAgICc1NSsnIDogJyMwMDZkMmMnLFxuICAgICAgICAgIH1cbiAgICAgIH07XG4gICAgXG4gICAgICAvL2dldCBhdHRyaWJ1dGVzIG1ldGhvZFxuICAgICAgdGhpcy5nZXRDaGFydFN0YXRlID0gKCkgPT4gYXR0cnM7XG5cdFx0XHRcbiAgICAgLy9nZXR0ZXIgJiBzZXR0ZXIgXG4gICAgXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgdGhpc1trZXldID0gZnVuY3Rpb24oXykge1xuICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9O1xuICAgICAgfSk7XG4gIH1cbiAgYXN5bmMgc2V0dXAodXJsKXtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBcbiAgICAvL2xvYWQgZGF0YSBzeW5jaHJvbm91c2x5XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGQzLmNzdih1cmwpO1xuXHRcdFx0XG4gICAgYXR0cnMuYXR0cmlidXRlSW5kZXggPSBkYXRhLmNvbHVtbnM7XG5cbiAgICAvL2NvbnZlcnQgZGF0YSB0byBvYmplY3QgZm9ybWF0XG4gICAgYXR0cnMuZGF0YSA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uKG1hcCwgb2JqLCBpKSB7XG4gICAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmopO1xuICAgICAgXG4gICAgICB2YWx1ZXMucG9wKCk7XG5cbiAgICAgIG1hcFtcIlwiLmNvbmNhdCh2YWx1ZXMpXSA9IG9iai5Db3VudDtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pOyBcblxuICAgIC8vIGNyZWF0ZSBzdGF0aWMgcGFydFxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKVxuICAgICAgICAgICAgICAgICAgLnBhdHRlcm5pZnkoe1xuICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3N2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzdmctc3VuYnVyc3QtY29udGFpbmVyJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGF0dHJzLnN2Z1dpZHRoKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGF0dHJzLnN2Z0hlaWdodClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHthdHRycy5zdmdXaWR0aC8yfSwke2F0dHJzLnN2Z0hlaWdodC80fSlgKTtcbiAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmcuYXBwZW5kKCdnJyk7XG4gICAgY2VudGVyR3JvdXAuYXBwZW5kKCdjaXJjbGUnKVxuICAgIFx0LmF0dHIoJ2lkJywgJ2NlbnRlci1jaXJjbGUnKVxuICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAuYXR0cigncicsIGF0dHJzLmlubmVyUmFkaXVzKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgXHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuICAgIFxuICAgIGF0dHJzLnRleHRDaXJjbGUxID0gY2VudGVyR3JvdXAuYXBwZW5kKCd0ZXh0JylcbiAgICAgXHQuYXR0cihcInhcIiwgMClcbiAgICBcdC5hdHRyKFwieVwiLCAwKVxuICAgIFx0LmF0dHIoXCJkeVwiLCBcIjBlbVwiKVxuICAgIFx0LnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICBcdC50ZXh0KCcnKTtcbiAgICBcbiAgICBhdHRycy50ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwLmFwcGVuZCgndGV4dCcpXG4gICAgIFx0LmF0dHIoXCJ4XCIsIDApXG4gICAgXHQuYXR0cihcInlcIiwgMClcbiAgICBcdC5hdHRyKFwiZHlcIiwgXCIxZW1cIilcbiAgICBcdC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgXHQudGV4dCgnJyk7XG4gICAgXG4gICAgLy8gZHluYW1pYyBwYXJ0IG9mIHN2Z1xuICAgIHN2Zy5hcHBlbmQoJ2cnKVxuICAgIFx0XHQuYXR0cignaWQnLCAnZHluYW1pYycpO1xuICAgIFxuICAgIGF0dHJzLnN2ZyA9IHN2ZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIFxuICAgIFx0Ly9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgICAgbGV0IGxlZ2VuZCA9IGQzLnNlbGVjdChcIiNzdW5idXJzdC1sZWdlbmRcIilcbiAgIFx0XHRsZWdlbmQuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcbiAgICAgIGxldCB5ID0gMjQ7XG4gICAgXHRsZXQgeCA9IDIwO1xuICAgICAgZm9yIChjb25zdCBhcnJheSBvZiBPYmplY3QudmFsdWVzKGRpdmVyc2l0eVZhbHVlcykpe1xuICAgICAgXHRmb3IgKGNvbnN0IHZhbHVlIG9mIGFycmF5KXtcbiAgICAgICAgXHRpZiAodmFsdWUgPT09ICdUb3RhbCcpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICBsZWdlbmQuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLHgpLmF0dHIoXCJ5XCIseSkuYXR0cihcIndpZHRoXCIsIDEyKS5hdHRyKFwiaGVpZ2h0XCIsIDEyKS5zdHlsZShcImZpbGxcIiwgYXR0cnMuY29sb3JzW3ZhbHVlXSlcbiAgICAgICAgICBsZWdlbmQuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCB4KzIwKS5hdHRyKFwieVwiLCB5KzYpLnRleHQodmFsdWUpLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTVweFwiKS5hdHRyKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsXCJtaWRkbGVcIilcbiAgICAgICAgXHR5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgICB5Kz0xMDtcbiAgICAgIH1cblxuICAgIFx0Ly9yZXB1cnBvc2luZyBiYWNrIGJ1dHRvbiBpZiBuZWNlc3NhcnlcbiAgICBcdGxldCBzYiA9IHRoaXM7XG4gICAgXHRpZiAoYXR0cnMuaGlzdG9yeS5sZW5ndGggPiAwKXtcbiAgICAgICAgY29uc29sZS5sb2coYXR0cnMuaGlzdG9yeSk7XG5cdFx0XHRcdGNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIFx0bGV0IHggPSBhdHRycy5oaXN0b3J5LnBvcCgpO1xuICAgICAgICAgIHNiLnJlbmRlcih4WzBdLCB4WzFdKTtcbiAgICAgICAgfVxuICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYmFjaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBhdHRycy5kaXNwbGF5Tm9kZXM7XG4gICAgICB9XG4gICAgXG4gICAgXHQvL3ByZXBhcmluZyBzbGljZXNcblx0XHRcdGNvbnN0IGNhcnRlc2lhbiA9ICguLi5hKSA9PiBhLnJlZHVjZSgoYSwgYikgPT4gYS5mbGF0TWFwKGQgPT4gYi5tYXAoZSA9PiBbZCwgZV0uZmxhdCgpKSkpO1xuICAgICAgbGV0IHNsaWNlcyA9IGNhcnRlc2lhbihhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLCBhY2FkZW1pY1ZhbHVlcy5EZWdyZWUsIGFjYWRlbWljVmFsdWVzLkZhY3VsdHksIGFjYWRlbWljVmFsdWVzWydTdHVkeSBTdGF0dXMnXSk7XG5cdFx0XHRcbiAgICBcdGNvbnN0IG1ha2VRdWVyeSA9IChzbGljZSwgZGl2ZXJzaXR5QXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgIGxldCBxdWVyeSA9IHNsaWNlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICAgICAgICBpZiAocHJvcCAhPT0gZGl2ZXJzaXR5QXR0cil7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS5jb25jYXQoJyxUb3RhbCcpOyAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkuY29uY2F0KCcsJywgdmFsdWUpOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgfVxuICAgICAgLy9jb252ZXJ0IHNsaWNlcyB0byBrZXkgZm9ybWF0XG4gICAgICBsZXQgdmFsdWVzID0ge307XG4gICAgICBmb3IgKGxldCBzbGljZSBvZiBzbGljZXMpe1xuICAgICAgICB2YWx1ZXNbc2xpY2UudG9TdHJpbmcoKV0gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICAgIGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgIHZhbHVlc1tzbGljZS50b1N0cmluZygpXVthdHRyXSA9IHt9O1xuICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIGRpdmVyc2l0eVZhbHVlc1thdHRyXSl7XG4gICAgICAgICAgICAgdmFsdWVzW3NsaWNlLnRvU3RyaW5nKCldW2F0dHJdW3ZhbHVlXSA9IG1ha2VRdWVyeShzbGljZSwgYXR0ciwgdmFsdWUpO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIFxuICAgICAgLy9xdWVyeSB0byBnZXQgdGhlIHZhbHVlc1xuICAgICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpe1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSl7XG4gICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKXtcbiAgICAgICAgICAgIGlmICh2YWx1ZT09PSdUb3RhbCcpe1xuICAgICAgICAgICAgICB2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXSA9IHN1bTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdID0gYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV07XG4gICAgICAgICAgICAgIHN1bSs9TnVtYmVyKHZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBkMy5zZWxlY3QoJyNkeW5hbWljJykucmVtb3ZlKCk7XG4gICAgbGV0IHN2ZyA9IGF0dHJzLnN2Zy5hcHBlbmQoJ2cnKVxuICAgIFx0XHRcdFx0XHRcdFx0XHRcdCAgICAuYXR0cignaWQnLCAnZHluYW1pYycpO1xuXG4gICAgLy9IZWxwZXIgbWV0aG9kc1xuICAgIGNvbnN0IGdldENpcmNsZVggPSAocmFkaWFucywgcmFkaXVzKSA9PiBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcblx0XHRjb25zdCBnZXRDaXJjbGVZID0gKHJhZGlhbnMsIHJhZGl1cykgPT4gTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXM7XG4gICAgXG4gICAgY29uc3QgZ2V0VGV4dCA9IHN0cmluZyA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIod29yZCA9PiB3b3JkICE9PSAnVG90YWwnKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oXCJcXHJcXG5cIilcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIFxuICAgIC8vSGVscGVyIHZhbHVlc1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkvbnVtU2xpY2VzXG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuICBcdGNvbnN0IGFyY1dpZHRoID0gYXR0cnMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBhdHRycy5pbm5lclJhZGl1cztcbiAgICBjb25zdCBhcmNMZW5ndGggPSAyKk1hdGguUEkvc2xpY2VzLmxlbmd0aDtcbiAgICBcbiAgICAvL2xpbmUgYnVpbGRlclxuICAgIGNvbnN0IGxpbmVCdWlsZGVyID0gKHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID0gMipNYXRoLlBJKnNsaWNlQ291bnQvbnVtU2xpY2VzO1xuICAgICAgc3ZnLmFwcGVuZCgnbGluZScpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCA1KVxuICAgICAgICAuYXR0cihcIngxXCIsIGdldENpcmNsZVgocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cihcInkxXCIsIGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cihcIngyXCIsIGdldENpcmNsZVgocmFkaWFucywgaW5uZXJSYWRpdXMrbnVtQXJjcyphcmNXaWR0aCtleHRlbmRlZExpbmVMZW5ndGgpKVxuICAgICAgICAuYXR0cihcInkyXCIsIGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMrbnVtQXJjcyphcmNXaWR0aCtleHRlbmRlZExpbmVMZW5ndGgpKTsgXG4gICAgfVxuXG4gICAgLy90ZXh0IGJ1aWxkZXJcbiAgICBjb25zdCB0ZXh0QnVpbGRlciA9IChzbGljZSwgc2xpY2VDb3VudCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPSAyKk1hdGguUEkqc2xpY2VDb3VudC9udW1TbGljZXMgKyBoYWxmU2xpY2VSYWRpYW5zO1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0KHNsaWNlKTtcbiAgICAgIGxldCByYWRpdXMgPSBpbm5lclJhZGl1cytudW1BcmNzKmFyY1dpZHRoK1x0dGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHggPSBnZXRDaXJjbGVYKHJhZGlhbnMsIHJhZGl1cyApXG4gICAgICBsZXQgeSA9IC1nZXRDaXJjbGVZKHJhZGlhbnMsIHJhZGl1cyk7XG5cbiAgICAgIGlmICh4IDwgLTEpXG4gICAgICAgIHgtPSB0ZXh0Lmxlbmd0aCAqIDc7XG5cdFx0XHRlbHNlIGlmICh4IDwgMSlcbiAgICAgICAgeC09dGV4dC5sZW5ndGggKiAzLjVcblxuICAgICAgc3ZnLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKFwieFwiLCB4KVxuICAgICAgICAuYXR0cihcInlcIiwgeSlcbiAgICAgIFx0LnRleHQodGV4dCk7IFxuICAgIH1cbiBcbiAgICAvL2J1aWxkIGFyY3NcbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpe1xuICAgICAgbGV0IGFyY0NvdW50ID0gMDtcblxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pe1xuICAgICAgICBsZXQgYXJjID0gZDMuYXJjKClcbiAgICAgICAgICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cysoYXJjV2lkdGgqYXJjQ291bnQpKVxuICAgICAgICAgICAgICAgICAgLm91dGVyUmFkaXVzKGlubmVyUmFkaXVzKyhhcmNXaWR0aCooYXJjQ291bnQrMSkpKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gc2xpY2VDb3VudCphcmNMZW5ndGg7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSl7XG4gICAgICAgICAgaWYgKHZhbHVlPT0nVG90YWwnKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgbGV0IGNvdW50ID0gdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV07XG4gICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudC92YWx1ZXNbc2xpY2VdW2F0dHJdWydUb3RhbCddO1xuICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gc2xpY2VTdGFydEFuZ2xlO1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKHN0YXJ0QW5nbGUgKyAoYXJjTGVuZ3RoKnBlcmNlbnQpLCAyKk1hdGguUEkpO1xuICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuXG4gICAgICAgICAgXG4gICAgICAgICAgc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5kYXR1bSh7c3RhcnRBbmdsZTogc3RhcnRBbmdsZSxlbmRBbmdsZTogZW5kQW5nbGV9KVxuICAgICAgICAgIFx0LmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgXHRcdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgYXJjKVxuICAgICAgICAgIFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIFx0XHRcdFx0ZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuICAgICAgICAgICAgXHRcdFxuICAgICAgICAgICAgXHRcdFx0YXR0cnMudGV4dENpcmNsZTEudGV4dChOdW1iZXIoKHBlcmNlbnQqMTAwKS50b0ZpeGVkKDEpKSArIFwiJVwiKTtcbiAgICAgICAgICAgIFx0XHRcdGF0dHJzLnRleHRDaXJjbGUyLnRleHQoY291bnQpO1xuICAgICAgICAgIFx0fSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICBcdFx0XHRcdC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXHRcdGF0dHJzLnRleHRDaXJjbGUxLnRleHQoJycpO1xuICAgICAgICAgICAgXHRcdGF0dHJzLnRleHRDaXJjbGUyLnRleHQoJycpO1xuICAgICAgICAgIFx0fSlcbiAgICAgICAgICBcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFx0Ly90aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgXHRsZXQgbmV3RGl2ZXJzaXR5VmFsdWVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkaXZlcnNpdHlWYWx1ZXMpKTtcbiAgICAgICAgICAgIFx0XG4gICAgICAgICAgICBcdGxldCBhY2FkQXR0ciA9IHNsaWNlLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBcdGxldCBuZXdBY2FkZW1pY1ZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgXHRmb3IgKGxldCBpIGluIGFjYWRBdHRyKXtcbiAgICAgICAgICAgICAgICBuZXdBY2FkZW1pY1ZhbHVlc1thdHRycy5hdHRyaWJ1dGVJbmRleFtpXV0gPSBbYWNhZEF0dHJbaV1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcdG5ld0RpdmVyc2l0eVZhbHVlc1thdHRyXSA9IFt2YWx1ZSwgJ1RvdGFsJ107XG4gICAgICAgICAgICBcdGF0dHJzLmhpc3RvcnkucHVzaChbYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlc10pO1xuICAgICAgICAgICAgXHRzYi5yZW5kZXIobmV3QWNhZGVtaWNWYWx1ZXMsIG5ld0RpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICAgXHR9KTtcbiAgICAgICAgfVxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAobnVtU2xpY2VzID09IDEpXG4gICAgICAgIHRleHRCdWlsZGVyKHNsaWNlLCAwLjUpXG4gICAgICBlbHNlIFxuICAgICAgICB0ZXh0QnVpbGRlcihzbGljZSwgc2xpY2VDb3VudClcbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG4gICAgXG4gICAgLy9idWlsZCBsaW5lcyBhZnRlciBzbyB0aGV5IGFyZSBvbiB0b3BcbiAgICBmb3IgKGxldCBzbGljZUNvdW50ID0gMDsgc2xpY2VDb3VudCA8ICBudW1TbGljZXMgJiYgbnVtU2xpY2VzID4gMTsgc2xpY2VDb3VudCsrKXtcbiAgICBcdGxpbmVCdWlsZGVyKHNsaWNlQ291bnQpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9jaGFydHMtY2xhc3MnO1xuaW1wb3J0IHsgU3VuYnVyc3QgfSBmcm9tICcuL3N1bmJ1cnN0LWNsYXNzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXHQvL3N1bmJ1cnN0IFxuICBsZXQgc2I7IFxuXG5cdC8vU2V0IG5vZGUgYW5kIE1haW4gdml6IFNQQSB1cHNcbiAgZGlzcGxheU5vZGVzKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUtYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlWaXo7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Tm9kZXM7XG4gXG4gIGZ1bmN0aW9uIGRpc3BsYXlOb2Rlcygpe1xuICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6LWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlWaXooKXtcbiAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6LWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgXG4gICAgLypsZXQgYWNhZGVtaWNWYWx1ZXMgPSB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWycyMDEzLzE0J10sXG4gICAgICAgICAgICAgRGVncmVlOiBbJ1RvdGFsJ10sXG4gICAgICAgICAgICAgRmFjdWx0eTogWydCdXNpbmVzcycsICdTY2llbmNlJ10sXG4gICAgICAgICAgICAgJ1N0dWR5IFN0YXR1cyc6IFsnUGFydC10aW1lJywgJ0Z1bGwtdGltZSddXG4gICAgICAgICAgfTtcbiAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzID0geyAgICAgXG4gICAgICAgICAgICAgIEFnZTogWyc8PTE3JywgJzE4LTIwJywgJzI2LTMwJywgJzU1KycsJ1RvdGFsJ10sXG4gICAgICAgICAgICAgIFNleDogIFsnTWFsZScsICdGZW1hbGUnLCAnVG90YWwnXSxcbiAgICAgICAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFsnSW50ZXJuYXRpb25hbCcsICdEb21lc3RpYycsICdUb3RhbCddXG4gICAgICAgICAgfVxuICAgICAgICAgICovICBcbiAgICAgICAgICAgIFxuICAgIFx0aWYgKHNiKXtcbiAgICAgICAgIC8vc2IucmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgXHQgc2IucmVuZGVyKGh0LmFjYWRlbWljVmFsdWVzKCksIGh0LmRpdmVyc2l0eVZhbHVlcygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBhbGVydCgnUGxlYXNlIHdhaXQgZm9yIHRoZSBkYXRhIHRvIGZpbmlzaCBsb2FkaW5nJyk7XG4gICAgICB9XG4gIH1cbiAgXG4gIGxldCBodCA9IG5ldyBDaGFydCgpXG4gICAgIC5jb250YWluZXIoJyNjaGFydCcpXG4gICAgIC5zdmdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLmluaXRpYWxab29tKDAuMylcbiAgICAgLm9uTm9kZUNsaWNrKGQ9PiBjb25zb2xlLmxvZyhkKSlcbiAgICAgLnJlbmRlcigpXG5cbiAgbmV3IFN1bmJ1cnN0KClcbiAgICAgICAgIC5jb250YWluZXIoJyNzdW5idXJzdCcpXG4gICAgICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAuc3ZnSGVpZ2h0KHdpbmRvdy5pbm5lcldpZHRoKVxuICBcdFx0XHQgLmRpc3BsYXlOb2RlcyhkaXNwbGF5Tm9kZXMpXG4gICAgXHRcdCAuc2V0dXAoJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20va2FlbDU1OC83ZDJjYjUyNTg5MjExMTlkZjU4ODRjYzkwOTAyZTg0ZC9yYXcvNzU4MGRjNDk0MjczM2UzNjRjZWYwNjcxMWU4Yzg1MGQ1MWRhMTNiOS9mYWxsLmNzdicpXG5cdFx0XHRcdCAudGhlbih2YWx1ZSA9PiBzYiA9IHZhbHVlKTtcbn0pO1xuXG5cblxuXG5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6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QUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZCLFVBQVUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QixVQUFVLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN6QyxVQUFVLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3hCLFVBQVUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0VBQ3hCLFVBQVUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQ25GLFVBQVUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO0VBQ3BGLFVBQVUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0VBQzFELFVBQVUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMzQztFQUNBLFVBQVUsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUN0QixlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEIsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDL0IsZUFBZSxFQUFFLENBQUMsQ0FB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