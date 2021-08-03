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
                Age: [],
                Sex:  [],
                'Citizenship Status': []
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
                      attrs.diversityValues[data.parentNodeIds[0]].push(data.nodeId);
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
        values[slice.toString()] = {};
        for (let attr in diversityValues) {
          if (diversityValues[attr].length == 1) continue;
          values[slice.toString()][attr] = {};
          for (let value of diversityValues[attr]) {
            values[slice.toString()][attr][value] = makeQuery(
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
      console.log(values);
      // Setting values so values is still accessible when compare is toggled 
      attrs.values = values; 
      
      // repurposing back button if necessary
      if (attrs.history.length > 0) {
        const back = () => sb.render(attrs.history.pop());
        document.getElementById('back-button').onclick = back;
      } else {
        document.getElementById('back-button').onclick = attrs.displayNodes;
      }

      // remove all elements in svg
  		this.removeAll();
      
      // re-create the new elements
      if (!attrs.compareMode){
         this.renderSunburst(values);
      }else {
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
        .text('');

      let textCircle2 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '0.5em')
        .style('text-anchor', 'middle')
      	.style("font-size", innerTextSize)
        .text('');

      let textCircle3 = centerGroup
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('dy', '1.5em')
        .style('text-anchor', 'middle')
      	.style("font-size", innerTextSize)
        .text('');

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

                textCircle1.text(value);
                textCircle2.text(
                  Number((percent * 100).toFixed(1)) + '%'
                );
                textCircle3.text(count);
              })
              .on('mouseout', function (d, i) {
                d3.select(this)
                  .transition()
                  .duration('50')
                  .attr('opacity', '1');

                textCircle1.text('');
                textCircle2.text('');
                textCircle3.text('');
              })
              .on('click', function () {
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
              });
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
          attrs.textCirclesCount[sliceCount].text(count);
      		attrs.textCirclesPercent[sliceCount].text(Number((percent * 100).toFixed(1)) + '%');
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
      const halfSliceRadians = Math.PI / numSlices;
      const textDistance = attrs.textDistance;

  		const params = this.computeSunburstParameters(size, size, numArcs);
      const arcWidth = params.arcWidth;
      const innerRadius = params.innerRadius;
     	const innerTextSize = params.innerTextSize;

      /* Helper methods */
      // Getting x value given radians and radius
      const getCircleX = (radians, radius) =>
        Math.sin(radians) * radius;
      
      // Getting y value given radians and radius
      const getCircleY = (radians, radius) =>
        Math.cos(radians) * radius;
      
      // Converting slice name to text
      const getText = (string) => {
        const words = string.split(',');
        const filtered = words.filter(
          (word) => word !== 'Total'
        );
        const result = filtered.join('\r\n');
        return result;
      };
      
      //text builder
      const textBuilder = (slice, sliceCount, sunburstGroup) => {
        let radians =
          (2 * Math.PI * sliceCount) / numSlices +
          halfSliceRadians;
        let text = getText(slice);
        let radius =
          innerRadius + numArcs * arcWidth + textDistance;
        let x = getCircleX(radians, radius);
        let y = -getCircleY(radians, radius);

        let multiplier = 1.8;
      	let outerTextSize = multiplier*(2*radius)/text.length;
      
        //console.log(text + " " + outerTextSize + " " + text.length);
        
        x-= (radius-textDistance);
        //x -= text.length*(multiplier+0.5); //middle text adjust
        
        sunburstGroup
          .append('text')
          .attr('x', x)
          .attr('y', y)
        	.style("font-size", outerTextSize + "px")
          .text(text);
      };
      
      // Clear textCircle lists
      attrs.textCirclesCount = [];
      attrs.textCirclesPercent = [];

      attrs.centerText = attrs.svg
        .append('text')
        .attr('x', width/2)
        .attr('y', attrs.centerTextHeight/2)
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
            sum+=Number(attrs.data[values[slice][attr][value]]);
          }
  			
          for (const value in values[slice][attr]) {
            let count = Number(attrs.data[values[slice][attr][value]]);
            let percent = count / sum;
            let startAngle = sliceStartAngle;
            let endAngle = Math.min(
              startAngle + arcLength * percent,
              2 * Math.PI
            );
            sliceStartAngle = endAngle;

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
  							sb.displayValues(values, value);
              })
              .on('mouseout', function (d, i) {
                d3.select(this)
                  .transition()
                  .duration('50')
                  .attr('opacity', '1');

                sb.removeValues(value);
              });
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
    		document.getElementById('node-div').style.display = 'none';
  			document.getElementById('viz-div').style.display = 'block';
        
      /*
      	let academicValues = {
             	 'Academic Year': ['Total'],
               Degree: ['Total'],
               Faculty: ['Business', 'Science', 'Public Affairs'],
               'Study Status': ['Total']
            };
         let diversityValues = {     
                Age: ['<=17', '18-20', '26-30', '55+'],
                Sex:  ['Male', 'Female'],
                'Citizenship Status': ['International', 'Domestic']
            }*/
      	if (sb){
           //sb.initialRender(academicValues, diversityValues);
        	 sb.initialRender(ht.academicValues(), ht.diversityValues());
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwiY2hhcnRzLWNsYXNzLmpzIiwic3VuYnVyc3QtY2xhc3MuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBST09UX05PREUgPSAnUk9PVCc7XG5jb25zdCBSRVBPUlRfTk9ERSA9ICdSRVBPUlQnO1xuXG5jb25zdCBFRElfQVRUUklCVVRFX05PREUgPSAnRURJX0FUVFJJQlVURSc7XG5jb25zdCBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSA9ICdPVEhFUl9BVFRSSUJVVEUnO1xuY29uc3QgVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUgPSAnVU5DT0xMRUNURURfQVRUUklCVVRFJztcblxuY29uc3QgVkFMVUVfTk9ERSA9ICdWQUxVRSc7XG5jb25zdCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFID0gJ1VOQ09MTEVDVEVEX1ZBTFVFJztcblxuXG5cbmNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgQ29udm9jYXRpb246IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgfSxcbiAgRGVtb2dyYXBoaWNzOiB7XG4gICAgdHlwZTogUkVQT1JUX05PREUsXG4gIH0sXG4gIEZhY3VsdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0NvbnZvY2F0aW9uJywnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ1NURU0nLCAnTm9uLVNURU0nLCAnRW5naW5lZXJpbmcgJiBEZXNpZ24nLCAnU2NpZW5jZScsICdQdWJsaWMgQWZmYWlycycsICdCdXNpbmVzcycsICdBcnRzICYgU29jaWFsIFNjaWVuY2VzJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gICdBY2FkZW1pYyBZZWFyJzoge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRpb24nLCdEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnMjAxMy8xNCcsXG4gICAgICAnMjAxNC8xNScsXG4gICAgICAnMjAxNS8xNicsXG4gICAgICAnMjAxNi8xNycsXG4gICAgICAnMjAxNy8xOCcsXG4gICAgICAnMjAxOC8xOScsXG4gICAgICAnMjAxOS8yMCcsXG4gICAgICAnMjAyMC8yMScsXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREVcbiAgfSxcbiAgRGVncmVlOiB7XG4gICAgcGFyZW50czogWydDb252b2NhdGlvbicsJ0RlbW9ncmFwaGljcyddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydCYWNoZWxvcnMnLFxuICAgICAgJ01hc3RlcnMnLFxuICAgICAgJ1BoLkQuJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gICdDaXRpemVuc2hpcCBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnRG9tZXN0aWMnLFxuICAgICAgJ0ludGVybmF0aW9uYWwnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gIEFnZToge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbXG4gICAgICAnPD0xNycsXG4gICAgICAnMTgtMjAnLFxuICAgICAgJzIxLTI1JyxcbiAgICAgICcyNi0zMCcsXG4gICAgICAnMzEtMzUnLFxuICAgICAgJzM2LTQ1JyxcbiAgICAgICc0Ni01NScsXG4gICAgICAnNTUrJyxcbiAgICBdLFxuICAgIHVuY29sbGVjdGVkVmFsdWVzOiBbJzU1LTU5JywnNjAtNjQnLCc2NS02OScsICc3MC03NCcsICc3NS03OScsICc4MCsnXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gIH0sXG4gIFNleDoge1xuICAgIHBhcmVudHM6IFsnQ29udm9jYXRpb24nLCdEZW1vZ3JhcGhpY3MnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnTWFsZScsICdGZW1hbGUnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydOb24tYmluYXJ5J10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG5cdH0sXG4gICdSZWxpZ2lvbi9TcGlyaXR1YWxpdHknOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnR2VvZ3JhcGhpYyBJZGVudGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gICdEaXMvYWJpbGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG4gIH0sXG4gIEluZGlnZW51aXR5OiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ0ZpcnN0IE5hdGlvbnMnLCAnTWV0aXMnLCAnSW51aXQnXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnRmlyc3QgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnT3RoZXIgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydEZW1vZ3JhcGhpY3MnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERVxuICB9LFxuICAnRXRobmljaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRGVtb2dyYXBoaWNzJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREVcbiAgfSxcbiAgJ05hdGlvbic6IHtcbiAgICBwYXJlbnRzOiBbJ0RlbW9ncmFwaGljcyddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXG4gIH0sXG59XG5cblxuXG5jb25zdCBjb2xvcnMgPSB7XG4gIFRyYW5zcGFyZW50OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjB9LFxuICBXaGl0ZToge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjoxfSxcbiAgR3JleToge1wicmVkXCI6MTI4LFwiZ3JlZW5cIjoxMjgsXCJibHVlXCI6MTI4LFwiYWxwaGFcIjoxfSxcblx0R3JlZW46IHtcInJlZFwiOjAsXCJncmVlblwiOjI1NSxcImJsdWVcIjowLFwiYWxwaGFcIjoxfSxcbiAgQmx1ZToge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbGFjazoge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjowLFwiYWxwaGFcIjoxfVxufVxuXG5jb25zdCBzaXplcyA9IHtcblx0TGFyZ2U6IHt3aWR0aDogMzQyLCBoZWlnaHQ6IDE0Nn0sXG4gIE1lZGl1bToge3dpZHRoOiAzMzEsIGhlaWdodDogMTQ2fSxcblx0U21hbGw6IHt3aWR0aDogMzEwLCBoZWlnaHQ6IDE0Nn1cbn1cblxuY29uc3QgYm9yZGVyV2lkdGggPSAyXG5jb25zdCBib3JkZXJSYWRpdXMgPSA1XG5jb25zdCBjb25uZWN0b3JMaW5lV2lkdGggPSA1XG5cbmNvbnN0IG5vZGVEaW1lbnNpb25zID0ge1xuICBbUk9PVF9OT0RFXSA6IHtcbiAgICB3aWR0aDogc2l6ZXMuTGFyZ2Uud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5MYXJnZS5oZWlnaHQsXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICB0ZXh0Q29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBjbGlja2FibGU6IGZhbHNlXG4gIH0sXG5cdFtSRVBPUlRfTk9ERV0gOiB7XG4gIFx0d2lkdGg6IHNpemVzLkxhcmdlLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTGFyZ2UuaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1VOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFXSA6IHtcbiAgICB3aWR0aDogc2l6ZXMuTWVkaXVtLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuTWVkaXVtLmhlaWdodCxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLkdyZWVuLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLkdyZXksXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW0FDQURFTUlDX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuQmx1ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5XaGl0ZSxcbiAgICBjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5CbGFjayxcbiAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbRURJX0FUVFJJQlVURV9OT0RFXToge1xuICAgIHdpZHRoOiBzaXplcy5NZWRpdW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5NZWRpdW0uaGVpZ2h0LFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuR3JlZW4sXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuV2hpdGUsXG4gICAgY29ubmVjdG9yTGluZUNvbG9yOiBjb2xvcnMuQmxhY2ssXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAgW1ZBTFVFX05PREVdOiB7XG4gIFx0d2lkdGg6IHNpemVzLlNtYWxsLndpZHRoLFxuICAgIGhlaWdodDogc2l6ZXMuU21hbGwuaGVpZ2h0LFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLldoaXRlLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICBbVU5DT0xMRUNURURfVkFMVUVfTk9ERV06IHtcbiAgXHR3aWR0aDogc2l6ZXMuU21hbGwud2lkdGgsXG4gICAgaGVpZ2h0OiBzaXplcy5TbWFsbC5oZWlnaHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuR3JleSxcblx0XHRjb25uZWN0b3JMaW5lQ29sb3I6IGNvbG9ycy5HcmV5LFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGNsaWNrYWJsZTogZmFsc2VcbiAgfVxufVxuXG5jb25zdCBtYWtlTm9kZSA9IChub2RlSWQsIHBhcmVudE5vZGVJZHMsIG5vZGVUeXBlLCBwYXJlbnROb2RlVHlwZSkgPT4ge1xuXHRsZXQgbm9kZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZURpbWVuc2lvbnNbbm9kZVR5cGVdKSk7XG4gIG5vZGUubm9kZUlkID0gbm9kZUlkO1xuICBub2RlLnBhcmVudE5vZGVJZHMgPSBwYXJlbnROb2RlSWRzO1xuXHRub2RlLmV4cGFuZGVkID0gZmFsc2U7XG4gIG5vZGUuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgbm9kZS5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXM7XG4gIG5vZGUuY29ubmVjdG9yTGluZVdpZHRoID0gY29ubmVjdG9yTGluZVdpZHRoO1xuXG4gIGlmIChub2RlVHlwZSA9PSBWQUxVRV9OT0RFKXtcbiAgXHRub2RlLmJvcmRlckNvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJvcmRlckNvbG9yOyBcbiAgICBub2RlLmNvbm5lY3RvckxpbmVDb2xvciA9IG5vZGVEaW1lbnNpb25zW3BhcmVudE5vZGVUeXBlXS5ib3JkZXJDb2xvcjsgXG4gIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IFVOQ09MTEVDVEVEX1ZBTFVFX05PREUpe1xuICAgXHRub2RlLmJvcmRlckNvbG9yID0gbm9kZURpbWVuc2lvbnNbcGFyZW50Tm9kZVR5cGVdLmJvcmRlckNvbG9yOyAgXG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmNvbnN0IHBvcHVsYXRlTm9kZXMgPSAobm9kZXMsIGluaXRpYWxOb2RlcykgPT4ge1xuXHRmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsTm9kZXMpIHtcbiAgICBjb25zdCBub2RlID0gaW5pdGlhbE5vZGVzW2tleV07XG5cbiAgICBpZiAobm9kZS50eXBlID09PSBSRVBPUlRfTk9ERSl7XG4gICAgXHRcdG5vZGVzLnB1c2gobWFrZU5vZGUoa2V5LCBbJ1Jvb3QnXSwgUkVQT1JUX05PREUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlcy5wdXNoKG1ha2VOb2RlKGtleSwgbm9kZS5wYXJlbnRzLCBub2RlLnR5cGUpKTsgLy9saW5rIHRvIGZpcnN0IHBhcmVudFxuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygbm9kZS5jb2xsZWN0ZWRWYWx1ZXMpXG4gICAgICAgICAgbm9kZXMucHVzaChtYWtlTm9kZShsaW5rLCBba2V5XSwgVkFMVUVfTk9ERSwgbm9kZS50eXBlKSk7XG4gICAgICAgIGZvciAoY29uc3QgbGluayBvZiBub2RlLnVuY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgIG5vZGVzLnB1c2gobWFrZU5vZGUobGluaywgW2tleV0sIFVOQ09MTEVDVEVEX1ZBTFVFX05PREUsIG5vZGUudHlwZSkpO1xuICAgIH1cblx0fVxufVxuXG5leHBvcnQgY29uc3Qgbm9kZXMgPSBbbWFrZU5vZGUoJ1Jvb3QnLCBbbnVsbF0sIFJPT1RfTk9ERSldO1xucG9wdWxhdGVOb2Rlcyhub2RlcywgaW5pdGlhbE5vZGVzKTtcblxuXG5cblxuXG4iLCJpbXBvcnQgeyBub2RlcyB9IGZyb20gJy4vbm9kZXMnXG5cbmV4cG9ydCBjbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgICAgICBzdmdXaWR0aDogODAwLFxuICAgICAgICAgIHN2Z0hlaWdodDogNjAwLFxuICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICBkZWZhdWx0VGV4dEZpbGw6ICcjMkMzRTUwJyxcbiAgICAgICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgZGVmYXVsdEZvbnQ6ICdIZWx2ZXRpY2EnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBkYXRhOiBub2RlcyxcbiAgICAgICAgICBub2RlczogbnVsbCxcbiAgICAgICAgXHRjb25uZWN0b3JMZXZlbHM6IDIsXG4gICAgICAgICAgZGVwdGg6IDE4MCxcbiAgICAgICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgICBcdGFjYWRlbWljVmFsdWVzOiB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICAgICAgIEZhY3VsdHk6IFsnVG90YWwnXSxcbiAgICAgICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydUb3RhbCddXG4gICAgICAgICAgfSxcbiAgICAgICAgXHRkaXZlcnNpdHlWYWx1ZXM6IHsgICAgIFxuICAgICAgICAgICAgICBBZ2U6IFtdLFxuICAgICAgICAgICAgICBTZXg6ICBbXSxcbiAgICAgICAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgICAvLyBEeW5hbWljYWxseSBzZXQgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zIGZvciBDaGFydCBjbGFzc1xuICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uKF8pIHtcbiAgICAgICAgICAgICAgdmFyIHN0cmluZyA9IGBhdHRyc1snJHtrZXl9J10gPSBfYDtcbiAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI25vZGUtbGVnZW5kXCIpXG4gICAgICBzdmcuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLDIwKS5hdHRyKFwieVwiLDI0KS5hdHRyKFwid2lkdGhcIiwgMTIpLmF0dHIoXCJoZWlnaHRcIiwgMTIpLnN0eWxlKFwiZmlsbFwiLCBcImdyZXlcIilcbiAgICAgIHN2Zy5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ4XCIsMjApLmF0dHIoXCJ5XCIsNTQpLmF0dHIoXCJ3aWR0aFwiLCAxMikuYXR0cihcImhlaWdodFwiLCAxMikuc3R5bGUoXCJmaWxsXCIsIFwibm9uZVwiKS5zdHlsZShcInN0cm9rZVwiLCBcImdyZWVuXCIpXG4gICAgICBzdmcuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwieFwiLDIwKS5hdHRyKFwieVwiLDg0KS5hdHRyKFwid2lkdGhcIiwgMTIpLmF0dHIoXCJoZWlnaHRcIiwgMTIpLnN0eWxlKFwiZmlsbFwiLCBcIm5vbmVcIikuc3R5bGUoXCJzdHJva2VcIiwgXCJibHVlXCIpXG4gICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCA0MCkuYXR0cihcInlcIiwgMzApLnRleHQoXCJVbmNvbGxlY3RlZFwiKS5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE1cHhcIikuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLFwibWlkZGxlXCIpXG4gICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKS5hdHRyKFwieFwiLCA0MCkuYXR0cihcInlcIiwgNjApLnRleHQoXCJEaXZlcnNpdHlcIikuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNXB4XCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuICAgICAgc3ZnLmFwcGVuZChcInRleHRcIikuYXR0cihcInhcIiwgNDApLmF0dHIoXCJ5XCIsIDkwKS50ZXh0KFwiQWNhZGVtaWNcIikuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNXB4XCIpLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIixcIm1pZGRsZVwiKVxuXG4gICAgICB0aGlzLmluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCk7XG4gIH1cblxuICBpbml0aWFsaXplRW50ZXJFeGl0VXBkYXRlUGF0dGVybigpIHtcbiAgICAgIGQzLnNlbGVjdGlvbi5wcm90b3R5cGUucGF0dGVybmlmeSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzO1xuICAgICAgICAgIHZhciBzZWxlY3RvciA9IHBhcmFtcy5zZWxlY3RvcjtcbiAgICAgICAgICB2YXIgZWxlbWVudFRhZyA9IHBhcmFtcy50YWc7XG4gICAgICAgICAgdmFyIGRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbc2VsZWN0b3JdO1xuXG4gICAgICAgICAgLy8gUGF0dGVybiBpbiBhY3Rpb25cbiAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gY29udGFpbmVyLnNlbGVjdEFsbCgnLicgKyBzZWxlY3RvcikuZGF0YShkYXRhLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGVjdGlvbi5leGl0KCkucmVtb3ZlKCk7XG4gICAgICAgICAgc2VsZWN0aW9uID0gc2VsZWN0aW9uLmVudGVyKCkuYXBwZW5kKGVsZW1lbnRUYWcpLm1lcmdlKHNlbGVjdGlvbik7XG4gICAgICAgICAgc2VsZWN0aW9uLmF0dHIoJ2NsYXNzJywgc2VsZWN0b3IpO1xuICAgICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgcmV0cmlldmVzIHBhc3NlZCBub2RlJ3MgY2hpbGRyZW4gSUQncyAoaW5jbHVkaW5nIG5vZGUpICAgICAgXG4gIGdldE5vZGVDaGlsZHJlbklkcyh7XG4gICAgICBkYXRhLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBfY2hpbGRyZW5cbiAgfSwgbm9kZUlkc1N0b3JlKSB7XG5cbiAgICAgIC8vIFN0b3JlIGN1cnJlbnQgbm9kZSBJRFxuICAgICAgbm9kZUlkc1N0b3JlLnB1c2goZGF0YS5ub2RlSWQpO1xuXG4gICAgICAvLyBMb29wIG92ZXIgY2hpbGRyZW4gYW5kIHJlY3Vyc2l2ZWx5IHN0b3JlIGRlc2NlbmRhbnRzIGlkIChleHBhbmRlZCBub2RlcylcbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZUNoaWxkcmVuSWRzKGQsIG5vZGVJZHNTdG9yZSlcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBMb29wIG92ZXIgX2NoaWxkcmVuIGFuZCByZWN1cnNpdmVseSBzdG9yZSBkZXNjZW5kYW50cyBpZCAoY29sbGFwc2VkIG5vZGVzKVxuICAgICAgaWYgKF9jaGlsZHJlbikge1xuICAgICAgICAgIF9jaGlsZHJlbi5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmdldE5vZGVDaGlsZHJlbklkcyhkLCBub2RlSWRzU3RvcmUpXG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHJlc3VsdFxuICAgICAgcmV0dXJuIG5vZGVJZHNTdG9yZTtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBpbnZva2VkIHZpYSBjaGFydC5zZXRab29tRmFjdG9yIEFQSSwgaXQgem9vbXMgdG8gcGFydGljdWxhdCBzY2FsZVxuICBzZXRab29tRmFjdG9yKHpvb21MZXZlbCkge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGNhbGMgPSBhdHRycy5jYWxjO1xuXG4gICAgICAvLyBTdG9yZSBwYXNzZWQgem9vbSBsZXZlbFxuICAgICAgYXR0cnMuaW5pdGlhbFpvb20gPSB6b29tTGV2ZWw7XG5cbiAgICAgIC8vIFJlc2NhbGUgY29udGFpbmVyIGVsZW1lbnQgYWNjb3JkaW5nbHlcbiAgICAgIGF0dHJzLmNlbnRlckcuYXR0cigndHJhbnNmb3JtJywgYCB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCAke2NhbGMubm9kZU1heEhlaWdodC8yfSkgc2NhbGUoJHthdHRycy5pbml0aWFsWm9vbX0pYClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAgIC8vSW5uZXJGdW5jdGlvbnMgd2hpY2ggd2lsbCB1cGRhdGUgdmlzdWFsc1xuXG4gICAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgICAgY29uc3QgdGhpc09ialJlZiA9IHRoaXM7XG5cbiAgICAgIC8vRHJhd2luZyBjb250YWluZXJzXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgaWYgKGNvbnRhaW5lclJlY3Qud2lkdGggPiAwKSBhdHRycy5zdmdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XG5cbiAgICAgIC8vQXR0YWNoIGRyb3Agc2hhZG93IGlkIHRvIGF0dHJzIG9iamVjdFxuICAgICAgdGhpcy5zZXREcm9wU2hhZG93SWQoYXR0cnMpO1xuXG4gICAgICAvL0NhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgY29uc3QgY2FsYyA9IHtcbiAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICBjaGFydFRvcE1hcmdpbjogbnVsbCxcbiAgICAgICAgICBjaGFydExlZnRNYXJnaW46IG51bGwsXG4gICAgICAgICAgY2hhcnRXaWR0aDogbnVsbCxcbiAgICAgICAgICBjaGFydEhlaWdodDogbnVsbFxuICAgICAgfTtcbiAgICAgIGNhbGMuaWQgPSBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWA7IC8vIGlkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIGNhbGMuY2hhcnRMZWZ0TWFyZ2luID0gYXR0cnMubWFyZ2luTGVmdDtcbiAgICAgIGNhbGMuY2hhcnRUb3BNYXJnaW4gPSBhdHRycy5tYXJnaW5Ub3A7XG4gICAgICBjYWxjLmNoYXJ0V2lkdGggPSBhdHRycy5zdmdXaWR0aCAtIGF0dHJzLm1hcmdpblJpZ2h0IC0gY2FsYy5jaGFydExlZnRNYXJnaW47XG4gICAgICBjYWxjLmNoYXJ0SGVpZ2h0ID0gYXR0cnMuc3ZnSGVpZ2h0IC0gYXR0cnMubWFyZ2luQm90dG9tIC0gY2FsYy5jaGFydFRvcE1hcmdpbjtcbiAgICAgIGF0dHJzLmNhbGMgPSBjYWxjO1xuXG4gICAgICAvLyBHZXQgbWF4aW11bSBub2RlIHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgIGNhbGMubm9kZU1heFdpZHRoID0gZDMubWF4KGF0dHJzLmRhdGEsICh7XG4gICAgICAgICAgd2lkdGhcbiAgICAgIH0pID0+IHdpZHRoKTtcbiAgICAgIGNhbGMubm9kZU1heEhlaWdodCA9IGQzLm1heChhdHRycy5kYXRhLCAoe1xuICAgICAgICAgIGhlaWdodFxuICAgICAgfSkgPT4gaGVpZ2h0KTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIG1heCBub2RlIGRlcHRoIChpdCdzIG5lZWRlZCBmb3IgbGF5b3V0IGhlaWdodHMgY2FsY3VsYXRpb24pXG4gICAgICBhdHRycy5kZXB0aCA9IGNhbGMubm9kZU1heEhlaWdodCArIDEwMDtcbiAgICAgIGNhbGMuY2VudGVyWCA9IGNhbGMuY2hhcnRXaWR0aCAvIDI7XG5cbiAgICAgIC8vKioqKioqKioqKioqKioqKioqKiogIExBWU9VVFMgICoqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICBjb25zdCBsYXlvdXRzID0ge1xuICAgICAgICAgIHRyZWVtYXA6IG51bGxcbiAgICAgIH1cbiAgICAgIGF0dHJzLmxheW91dHMgPSBsYXlvdXRzO1xuXG4gICAgICAvLyBHZW5lcmF0ZSB0cmVlIGxheW91dCBmdW5jdGlvblxuICAgICAgbGF5b3V0cy50cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2NhbGMuY2hhcnRXaWR0aCwgY2FsYy5jaGFydEhlaWdodF0pXG4gICAgICAgICAgLm5vZGVTaXplKFtjYWxjLm5vZGVNYXhXaWR0aCArIDEwMCwgY2FsYy5ub2RlTWF4SGVpZ2h0ICsgYXR0cnMuZGVwdGhdKVxuXG4gICAgICAvLyAqKioqKioqKioqKioqKioqKioqIEJFSEFWSU9SUyAuICoqKioqKioqKioqKioqKioqKioqKipcbiAgICAgIGNvbnN0IGJlaGF2aW9ycyA9IHtcbiAgICAgICAgICB6b29tOiBudWxsXG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB6b29taW5nIGZ1bmN0aW9uIFxuICAgICAgYmVoYXZpb3JzLnpvb20gPSBkMy56b29tKCkub24oXCJ6b29tXCIsIGQgPT4gdGhpcy56b29tZWQoZCkpXG5cbiAgICAgIC8vKioqKioqKioqKioqKioqKioqIFJPT1Qgbm9kZSB3b3JrICoqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgICAvLyBDb252ZXJ0IGZsYXQgZGF0YSB0byBoaWVyYXJjaGljYWxcbiAgICAgIGF0dHJzLnJvb3QgPSBkMy5zdHJhdGlmeSgpXG4gICAgICAgICAgLmlkKCh7XG4gICAgICAgICAgICAgIG5vZGVJZFxuICAgICAgICAgIH0pID0+IG5vZGVJZClcbiAgICAgICAgICAucGFyZW50SWQoKHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZUlkc1xuICAgICAgICAgIH0pID0+IHBhcmVudE5vZGVJZHNbMF0pXG4gICAgICAgICAgKGF0dHJzLmRhdGEpXG5cbiAgICAgIC8vIFNldCBjaGlsZCBub2RlcyBlbnRlciBhcHBlYXJhbmNlIHBvc2l0aW9uc1xuICAgICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgICBhdHRycy5yb290LnkwID0gMDtcblxuICAgICAgLyoqIEdldCBhbGwgbm9kZXMgYXMgYXJyYXkgKHdpdGggZXh0ZW5kZWQgcGFyZW50ICYgY2hpbGRyZW4gcHJvcGVydGllcyBzZXQpXG4gICAgICAgICAgVGhpcyB3YXkgd2UgY2FuIGFjY2VzcyBhbnkgbm9kZSdzIHBhcmVudCBkaXJlY3RseSB1c2luZyBub2RlLnBhcmVudCAtIHByZXR0eSBjb29sLCBodWg/XG4gICAgICAqL1xuICAgICAgYXR0cnMuYWxsTm9kZXMgPSBhdHRycy5sYXlvdXRzLnRyZWVtYXAoYXR0cnMucm9vdCkuZGVzY2VuZGFudHMoKVxuXG4gICAgICAvLyBDb2xsYXBzZSBhbGwgY2hpbGRyZW4gYXQgZmlyc3RcbiAgICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaChkID0+IHRoaXMuY29sbGFwc2UoZCkpO1xuXG4gICAgICAvLyBUaGVuIGV4cGFuZCBzb21lIG5vZGVzLCB3aGljaCBoYXZlIGBleHBhbmRlZGAgcHJvcGVydHkgc2V0XG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmV4cGFuZFNvbWVOb2RlcyhkKSk7XG5cbiAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKiogIERSQVdJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgIC8vQWRkIHN2Z1xuICAgICAgY29uc3Qgc3ZnID0gY29udGFpbmVyXG4gICAgICAgICAgLnBhdHRlcm5pZnkoe1xuICAgICAgICAgICAgICB0YWc6ICdzdmcnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ3N2Zy1jaGFydC1jb250YWluZXInXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5zdmdXaWR0aClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYXR0cnMuc3ZnSGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCdmb250LWZhbWlseScsIGF0dHJzLmRlZmF1bHRGb250KVxuICAgICAgICAgIC5jYWxsKGJlaGF2aW9ycy56b29tKVxuICAgICAgICAgIC5hdHRyKCdjdXJzb3InLCAnbW92ZScpXG4gICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgIGF0dHJzLnN2ZyA9IHN2ZztcblxuICAgICAgLy9BZGQgY29udGFpbmVyIGcgZWxlbWVudFxuICAgICAgY29uc3QgY2hhcnQgPSBzdmdcbiAgICAgICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgICAgICAgIHRhZzogJ2cnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2NoYXJ0J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjYWxjLmNoYXJ0TGVmdE1hcmdpbn0sJHtjYWxjLmNoYXJ0VG9wTWFyZ2lufSlgKTtcblxuICAgICAgLy8gQWRkIG9uZSBtb3JlIGNvbnRhaW5lciBnIGVsZW1lbnQsIGZvciBiZXR0ZXIgcG9zaXRpb25pbmcgY29udHJvbHNcbiAgICAgIGF0dHJzLmNlbnRlckcgPSBjaGFydC5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgICAgICAgdGFnOiAnZycsXG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnY2VudGVyLWdyb3VwJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjYWxjLmNlbnRlclh9LCR7Y2FsYy5ub2RlTWF4SGVpZ2h0LzJ9KSBzY2FsZSgke2F0dHJzLmluaXRpYWxab29tfSlgKTtcblxuICAgICAgYXR0cnMuY2hhcnQgPSBjaGFydDtcblxuICAgICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKiogUk9VTkRFRCBBTkQgU0hBRE9XIElNQUdFICBXT1JLIFVTSU5HIFNWRyBGSUxURVJTICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgICAgLy9BZGRpbmcgZGVmcyBlbGVtZW50IGZvciByb3VuZGVkIGltYWdlXG4gICAgICBhdHRycy5kZWZzID0gc3ZnLnBhdHRlcm5pZnkoe1xuICAgICAgICAgIHRhZzogJ2RlZnMnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnaW1hZ2UtZGVmcydcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGRpbmcgZGVmcyBlbGVtZW50IGZvciBpbWFnZSdzIHNoYWRvd1xuICAgICAgY29uc3QgZmlsdGVyRGVmcyA9IHN2Zy5wYXR0ZXJuaWZ5KHtcbiAgICAgICAgICB0YWc6ICdkZWZzJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ2ZpbHRlci1kZWZzJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERpc3BsYXkgdHJlZSBjb250ZW5yc1xuICAgICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdClcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgZHJvcCBzaGFkb3cgSUQgdG8gdGhlIHBhc3NlZCBvYmplY3RcbiAgc2V0RHJvcFNoYWRvd0lkKGQpIHtcblxuICAgICAgLy8gSWYgaXQncyBhbHJlYWR5IHNldCwgdGhlbiByZXR1cm4gXG4gICAgICBpZiAoZC5kcm9wU2hhZG93SWQpIHJldHVybjtcblxuICAgICAgLy8gR2VuZXJhdGUgZHJvcCBzaGFkb3cgSURcbiAgICAgIGxldCBpZCA9IGAke2QuaWR9LWRyb3Atc2hhZG93YDtcblxuICAgICAgLy8gSWYgRE9NIG9iamVjdCBpcyBhdmFpbGFibGUsIHRoZW4gdXNlIFVJRCBtZXRob2QgdG8gZ2VuZXJhdGVkIHNoYWRvdyBpZFxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICBpZiAodHlwZW9mIERPTSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIGlkID0gRE9NLnVpZChkLmlkKS5pZDtcbiAgICAgIH1cblxuICAgICAgLy8gRXh0ZW5kIHBhc3NlZCBvYmplY3Qgd2l0aCBkcm9wIHNoYWRvdyBJRFxuICAgICAgT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgICAgZHJvcFNoYWRvd0lkOiBpZFxuICAgICAgfSlcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gYmFzaWNhbGx5IHJlZHJhd3MgdmlzaWJsZSBncmFwaCwgYmFzZWQgb24gbm9kZXMgc3RhdGVcbiAgdXBkYXRlKHtcbiAgICAgIHgwLFxuICAgICAgeTAsXG4gICAgICB4LFxuICAgICAgeVxuICB9KSB7XG5cbiAgICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgICBjb25zdCBjYWxjID0gYXR0cnMuY2FsYztcblxuICAgICAgLy8gIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICAgICAgY29uc3QgdHJlZURhdGEgPSBhdHRycy5sYXlvdXRzLnRyZWVtYXAoYXR0cnMucm9vdCk7XG5cbiAgICAgIC8vIEdldCB0cmVlIG5vZGVzIGFuZCBsaW5rcyBhbmQgYXR0YWNoIHNvbWUgcHJvcGVydGllcyBcbiAgICAgIGNvbnN0IG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKVxuICAgICAgICAgIC5tYXAoZCA9PiB7XG4gICAgICAgICAgICAgIC8vIElmIGF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBpcyBhbHJlYWR5IHNldCwgdGhlbiB3ZSBkb24ndCB3YW50IHRvIHJlc2V0IG90aGVyIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgaWYgKGQud2lkdGgpIHJldHVybiBkO1xuXG4gICAgICAgICAgICAgIC8vIERlY2xhcmUgcHJvcGVydGllcyB3aXRoIGRlZmZhdWx0IHZhbHVlc1xuICAgICAgICAgICAgICBsZXQgYm9yZGVyQ29sb3IgPSAnc3RlZWxibHVlJztcbiAgICAgICAgICAgICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgICAgICAgXHRsZXQgdGV4dENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgbGV0IHdpZHRoID0gZC5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gZC5kYXRhLmhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoZC5kYXRhLmJvcmRlckNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLmJvcmRlckNvbG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZC5kYXRhLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihkLmRhdGEuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXHRpZiAoZC5kYXRhLnRleHRDb2xvcil7XG4gICAgICAgICAgICAgIFx0IHRleHRDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLnRleHRDb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gRXh0ZW5kIG5vZGUgb2JqZWN0IHdpdGggY2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGQsIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgIFx0dGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIFx0XG4gICAgXHQvLyBTYXZlIG5vZGVzIGZvciBjbGlja1xuICAgICBcdGF0dHJzLm5vZGVzID0gbm9kZXM7XG4gICAgXG4gICAgICAvLyBHZXQgYWxsIGxpbmtzXG4gICAgICBjb25zdCBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIC8vIFNldCBjb25zdGFudCBkZXB0aCBmb3IgZWFjaCBub2Rlc1xuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiBhdHRycy5kZXB0aCk7XG5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMSU5LUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZXQgbGlua3Mgc2VsZWN0aW9uXG4gICAgICBjb25zdCBsaW5rU2VsZWN0aW9uID0gYXR0cnMuY2VudGVyRy5zZWxlY3RBbGwoJ3BhdGgubGluaycpXG4gICAgICAgICAgLmRhdGEobGlua3MsICh7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgfSkgPT4gaWQpO1xuXG4gICAgICAvLyBFbnRlciBhbnkgbmV3IGxpbmtzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cbiAgICAgIGNvbnN0IGxpbmtFbnRlciA9IGxpbmtTZWxlY3Rpb24uZW50ZXIoKVxuICAgICAgICAgIC5pbnNlcnQoJ3BhdGgnLCBcImdcIilcbiAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGlua1wiKVxuICAgICAgICAgIC5hdHRyKCdkJywgZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG8gPSB7XG4gICAgICAgICAgICAgICAgICB4OiB4MCxcbiAgICAgICAgICAgICAgICAgIHk6IHkwXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpYWdvbmFsKG8sIFtvXSlcbiAgICAgICAgICB9KTtcdFxuICAgIFxuXG4gICAgICAvLyBHZXQgbGlua3MgdXBkYXRlIHNlbGVjdGlvblxuICAgICAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rU2VsZWN0aW9uKTtcblxuICAgICAgLy8gU3R5bGluZyBsaW5rc1xuICAgICAgbGlua1VwZGF0ZVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gZGF0YS5jb25uZWN0b3JMaW5lV2lkdGggfHwgMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEuY29ubmVjdG9yTGluZUNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZ2JhT2JqVG9Db2xvcihkYXRhLmNvbm5lY3RvckxpbmVDb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICdncmVlbic7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLWRhc2hhcnJheScsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLmRhc2hBcnJheSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZGFzaEFycmF5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9KVxuXG4gICAgICAvLyBUcmFuc2l0aW9uIGJhY2sgdG8gdGhlIHBhcmVudCBlbGVtZW50IHBvc2l0aW9uXG4gICAgICBsaW5rVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAuYXR0cignZCcsIGQgPT4ge1xuICAgICAgICBcdFx0Y29uc3QgcGFyZW50cyA9IGQuZGF0YS5wYXJlbnROb2RlSWRzLm1hcChwYXJlbnROb2RlSWQgPT4gbm9kZXMuZmluZChub2RlID0+IG5vZGUuaWQ9PT1wYXJlbnROb2RlSWQpKTtcbiAgICAgICAgXHRcdHJldHVybiB0aGlzLmRpYWdvbmFsKGQsIHBhcmVudHMpXG4gICAgICBcdFx0fSk7XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgIGxpbmtzIHdoaWNoIGlzIGV4aXRpbmcgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgICBjb25zdCBsaW5rRXhpdCA9IGxpbmtTZWxlY3Rpb24uZXhpdCgpLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAuYXR0cignZCcsIGQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvID0ge1xuICAgICAgICAgICAgICAgICAgeDogeCA/IHggOiAwLFxuICAgICAgICAgICAgICAgICAgeTogeSA/IHkgOiAwXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcdGxldCBkaWFnID0gdGhpcy5kaWFnb25hbChvLCBbb10pXG4gICAgICAgICAgICAgIHJldHVybiBkaWFnXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBOT0RFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZXQgbm9kZXMgc2VsZWN0aW9uXG4gICAgICBjb25zdCBub2Rlc1NlbGVjdGlvbiA9IGF0dHJzLmNlbnRlckcuc2VsZWN0QWxsKCdnLm5vZGUnKVxuICAgICAgICAgIC5kYXRhKG5vZGVzLCAoe1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgIH0pID0+IGlkKVxuXG4gICAgICBsZXQgaHQgPSB0aGlzO1xuICAgICAgLy8gRW50ZXIgYW55IG5ldyBub2RlcyBhdCB0aGUgcGFyZW50J3MgcHJldmlvdXMgcG9zaXRpb24uXG4gICAgICBjb25zdCBub2RlRW50ZXIgPSBub2Rlc1NlbGVjdGlvbi5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGUnKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgke3gwfSwke3kwfSlgKVxuICAgICAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgICAgLm9uKCdjbGljaycsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChbLi4uZDMuZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3RdLmluY2x1ZGVzKCdub2RlLWJ1dHRvbi1jaXJjbGUnKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcdC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBcdGlmIChkYXRhLmNsaWNrYWJsZSl7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJzLmRpdmVyc2l0eVZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dKXtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmRpdmVyc2l0eVZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLmluZGV4T2YoZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJvcmRlcldpZHRoID0gMjtcbiAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5wdXNoKGRhdGEubm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAxMDtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dKXtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5pbmRleE9mKGRhdGEubm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLmxlbmd0aCA9PSAwKXsgLy9pZiBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW2RhdGEucGFyZW50Tm9kZUlkc1swXV0ucHVzaCgnVG90YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbZGF0YS5wYXJlbnROb2RlSWRzWzBdXS5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dWzBdID09ICdUb3RhbCcpeyAvL2lmICdUb3RhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1tkYXRhLnBhcmVudE5vZGVJZHNbMF1dLnB1c2goZGF0YS5ub2RlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYm9yZGVyV2lkdGggPSAxMDtcbiAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGF0YS5ib3JkZXJXaWR0aCA9IChkYXRhLmJvcmRlcldpZHRoID09IDIpID8gMTAgOiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXHRcdFxuICAgICAgICAgICAgXHRpZiAoZGF0YS5leHBhbmRhYmxlKXtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUNsaWNrZWQgPSBub2Rlcy5maW5kKG5vZGUgPT4gbm9kZS5pZCA9PT0gZGF0YS5ub2RlSWQpXG4gICAgICAgICAgICBcdFx0aHQub25CdXR0b25DbGljayhub2RlQ2xpY2tlZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFx0XG5cdFx0XHRcdFx0XHRcdGh0LnVwZGF0ZShkYXRhKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgLy8gQWRkIGJhY2tncm91bmQgcmVjdGFuZ2xlIGZvciB0aGUgbm9kZXMgXG4gICAgICBub2RlRW50ZXJcbiAgICAgICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgICAgICAgIHRhZzogJ3JlY3QnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ25vZGUtcmVjdCcsXG4gICAgICAgICAgICAgIGRhdGE6IGQgPT4gW2RdXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsICh7XG4gICAgICAgICAgICAgIF9jaGlsZHJlblxuICAgICAgICAgIH0pID0+IF9jaGlsZHJlbiA/IFwibGlnaHRzdGVlbGJsdWVcIiA6IFwiI2ZmZlwiKVxuXG5cbiAgICAgIC8vIE5vZGUgdXBkYXRlIHN0eWxlc1xuICAgICAgY29uc3Qgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2Rlc1NlbGVjdGlvbilcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQnLCAnMTJweCBzYW5zLXNlcmlmJyk7XG5cblxuICAgICAgLy8gQWRkIGZvcmVpZ25PYmplY3QgZWxlbWVudCBpbnNpZGUgcmVjdGFuZ2xlXG4gICAgICBjb25zdCBmbyA9IG5vZGVVcGRhdGVcbiAgICAgICAgICAucGF0dGVybmlmeSh7XG4gICAgICAgICAgICAgIHRhZzogJ2ZvcmVpZ25PYmplY3QnLFxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ25vZGUtZm9yZWlnbi1vYmplY3QnLFxuICAgICAgICAgICAgICBkYXRhOiBkID0+IFtkXVxuICAgICAgICAgIH0pXG5cblxuICAgICAgLy8gQWRkIGZvcmVpZ24gb2JqZWN0IFxuICAgICAgZm8ucGF0dGVybmlmeSh7XG4gICAgICAgICAgdGFnOiAneGh0bWw6ZGl2JyxcbiAgICAgICAgICBzZWxlY3RvcjogJ25vZGUtZm9yZWlnbi1vYmplY3QtZGl2JyxcbiAgICAgICAgICBkYXRhOiBkID0+IFtkXVxuICAgICAgfSlcblxuICAgICAgdGhpcy5yZXN0eWxlRm9yZWlnbk9iamVjdEVsZW1lbnRzKCk7XG5cbiAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIHByb3BlciBwb3NpdGlvbiBmb3IgdGhlIG5vZGVcbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxuICAgICAgICAgIC5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoe1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICB5XG4gICAgICAgICAgfSkgPT4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYClcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXG5cbiAgICAgIC8vIFN0eWxlIG5vZGUgcmVjdGFuZ2xlc1xuICAgICAgbm9kZVVwZGF0ZS5zZWxlY3QoJy5ub2RlLXJlY3QnKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiBkYXRhLndpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gZGF0YS5oZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gLWRhdGEud2lkdGggLyAyKVxuICAgICAgICAgIC5hdHRyKCd5JywgKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IC1kYXRhLmhlaWdodCAvIDIpXG4gICAgICAgICAgLmF0dHIoJ3J4JywgKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IGRhdGEuYm9yZGVyUmFkaXVzIHx8IDApXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICh7XG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiBkYXRhLmJvcmRlcldpZHRoIHx8IGF0dHJzLnN0cm9rZVdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICh7XG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yXG4gICAgICAgICAgfSkgPT4gYm9yZGVyQ29sb3IpXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCAoe1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9KSA9PiBiYWNrZ3JvdW5kQ29sb3IpXG5cbiAgICBcblxuICAgICAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzIGFmdGVyIHRyYW5zaXRpb25cbiAgICAgIGNvbnN0IG5vZGVFeGl0VHJhbnNpdGlvbiA9IG5vZGVzU2VsZWN0aW9uLmV4aXQoKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMSlcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsIDApO1xuXG4gICAgICAvLyBPbiBleGl0IHJlZHVjZSB0aGUgbm9kZSByZWN0cyBzaXplIHRvIDBcbiAgICAgIG5vZGVFeGl0VHJhbnNpdGlvbi5zZWxlY3RBbGwoJy5ub2RlLXJlY3QnKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMClcbiAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgLmF0dHIoJ3knLCAwKTtcblxuICAgICAgLy8gU3RvcmUgdGhlIG9sZCBwb3NpdGlvbnMgZm9yIHRyYW5zaXRpb24uXG4gICAgICBub2Rlcy5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkZXRlY3RzIHdoZXRoZXIgY3VycmVudCBicm93c2VyIGlzIGVkZ2VcbiAgaXNFZGdlKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKFwiRWRnZVwiKTtcbiAgfVxuXG4gIC8qIEZ1bmN0aW9uIGNvbnZlcnRzIHJnYmEgb2JqZWN0cyB0byByZ2JhIGNvbG9yIHN0cmluZyBcbiAgICB7cmVkOjExMCxncmVlbjoxNTAsYmx1ZToyNTUsYWxwaGE6MX0gID0+IHJnYmEoMTEwLDE1MCwyNTUsMSlcbiAgKi9cbiAgcmdiYU9ialRvQ29sb3Ioe1xuICAgICAgcmVkLFxuICAgICAgZ3JlZW4sXG4gICAgICBibHVlLFxuICAgICAgYWxwaGFcbiAgfSkge1xuICAgICAgcmV0dXJuIGByZ2JhKCR7cmVkfSwke2dyZWVufSwke2JsdWV9LCR7YWxwaGF9KWA7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBjdXN0b20gZGlhZ29uYWwgLSBwbGF5IHdpdGggaXQgaGVyZSAtIGh0dHBzOi8vdG8ubHkvMXpoVEtcbiAgZGlhZ29uYWwocywgcGFyZW50cykge1xuICAgIFx0Y29uc3QgZ3JvdXAgPSB0aGlzLmdldENoYXJ0U3RhdGUoKS5jZW50ZXJHXG4gICAgICBcdFx0XHRcdFx0LmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiZ3JvdXBPZlBhdGhzXCIpOyBcbiAgICBcdGxldCBoZWlnaHRNdWx0aXBsaWVyID0gcGFyZW50cy5sZW5ndGggPT0gMiA/IDAuNTc1IDogMC40MjVcbiAgICBcdGZvciAoY29uc3QgdCBvZiBwYXJlbnRzKXtcbiAgICAgICAgXHRsZXQgaGVpZ2h0ID0gcy55IC0gdC55O1xuICAgICAgICBcbiAgICAgICAgICAvLyBDYWxjdWxhdGUgc29tZSB2YXJpYWJsZXMgYmFzZWQgb24gc291cmNlIGFuZCB0YXJnZXQgKHMsdCkgY29vcmRpbmF0ZXNcbiAgICAgICAgICBsZXQgeCA9IHMueDtcbiAgICAgICAgICBsZXQgeSA9IHMueTtcbiAgICAgICAgICBsZXQgZXggPSB0Lng7XG4gICAgICAgICAgbGV0IGV5ID0gdC55O1xuICAgICAgICAgIGxldCB4cnZzID0gZXggLSB4IDwgMCA/IC0xIDogMTtcbiAgICAgICAgICBsZXQgeXJ2cyA9IC0xO1xuICAgICAgICAgIGxldCByZGVmID0gMzU7XG4gICAgICAgICAgbGV0IHJJbml0aWFsID0gTWF0aC5hYnMoZXggLSB4KSAvIDIgPCByZGVmID8gTWF0aC5hYnMoZXggLSB4KSAvIDIgOiByZGVmO1xuICAgICAgICAgIGxldCByID0gTWF0aC5hYnMoZXkgLSB5KSAvIDIgPCBySW5pdGlhbCA/IE1hdGguYWJzKGV5IC0geSkgLyAyIDogckluaXRpYWw7XG4gICAgICAgICAgbGV0IGggPSBNYXRoLmFicyhleSAtIHkpICogaGVpZ2h0TXVsdGlwbGllciAtIHI7XG4gICAgICAgICAgbGV0IHcgPSBNYXRoLmFicyhleCAtIHgpIC0gciAqIDI7XG4gICAgICAgIFxuICAgICAgICAgIGxldCBwYXRoID0gYFxuICAgICAgICAgICAgIE0gJHt4fSAke3l9XG4gICAgICAgICAgICAgTCAke3h9ICR7eStoKnlydnN9XG4gICAgICAgICAgICAgQyAke3h9ICR7eStoKnlydnMrcip5cnZzfSAke3h9ICR7eStoKnlydnMrcip5cnZzfSAke3grcip4cnZzfSAke3kraCp5cnZzK3IqeXJ2c31cbiAgICAgICAgICAgICBMICR7eCt3KnhydnMrcip4cnZzfSAke3kraCp5cnZzK3IqeXJ2c31cbiAgICAgICAgICAgICBDICR7ZXh9ICR7eStoKnlydnMrcip5cnZzfSAke2V4fSAke3kraCp5cnZzK3IqeXJ2c30gJHtleH0gJHtleS1oKnlydnN9XG4gICAgICAgICAgICAgTCAke2V4fSAke2V5fVxuICAgICAgICAgICBgO1xuICAgICAgICBcdGdyb3VwLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgXHRcdFx0LmF0dHIoXCJkXCIsIHBhdGgpXG4gICAgICAgIFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgICB9XG5cbiAgICBcdGxldCBjb21iaW5lZEQgPSBcIlwiO1xuICAgIFx0Z3JvdXAuc2VsZWN0QWxsKFwicGF0aFwiKS5lYWNoKGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgaWYgKGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwiZFwiKSlcbiAgICAgICAgXHRjb21iaW5lZEQgKz0gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJkXCIpOyBcbiAgICAgIH0pO1xuICAgIFx0Z3JvdXAucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gY29tYmluZWREO1xuICB9XG5cbiAgcmVzdHlsZUZvcmVpZ25PYmplY3RFbGVtZW50cygpIHtcbiAgICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAgIGF0dHJzLnN2Zy5zZWxlY3RBbGwoJy5ub2RlLWZvcmVpZ24tb2JqZWN0JylcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAoe1xuICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0pID0+IHdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAoe1xuICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9KSA9PiBoZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAoe1xuICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0pID0+IC13aWR0aCAvIDIpXG4gICAgICAgICAgLmF0dHIoJ3knLCAoe1xuICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB9KSA9PiAtaGVpZ2h0IC8gMilcbiAgICAgIGF0dHJzLnN2Zy5zZWxlY3RBbGwoJy5ub2RlLWZvcmVpZ24tb2JqZWN0LWRpdicpXG4gICAgICAgICAgLnN0eWxlKCd3aWR0aCcsICh7XG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgfSkgPT4gYCR7d2lkdGh9cHhgKVxuICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgKHtcbiAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgfSkgPT4gYCR7aGVpZ2h0fXB4YClcbiAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgKHtcbiAgICAgICAgXHRcdHRleHRDb2xvclxuICAgICAgXHRcdH0pID0+IHRleHRDb2xvcj8gdGV4dENvbG9yOiAnYmxhY2snKVxuICAgIFx0XHRcdC5zdHlsZSgndGV4dC1hbGlnbicsICdjZW50ZXInKVxuICAgIFx0XHRcdC5zdHlsZSgnbWFyZ2luLXRvcCcsICc1MHB4JylcbiAgICBcdFx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsICc0MHB4JylcbiAgICAgICAgICAuaHRtbCgoe1xuICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgfSkgPT4gZGF0YS5ub2RlSWQpXG4gIH1cblxuICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gIG9uQnV0dG9uQ2xpY2soZCkge1xuXG4gICAgICAvLyBJZiBjaGlsZHJlbnMgYXJlIGV4cGFuZGVkXG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChkLmlkID09PSAnQ29udm9jYXRpb24nKXtcbiAgICAgICAgICAgIGNvbnN0IGRlbW9ncmFwaGljTm9kZSA9IGQucGFyZW50LmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgaWYgKGRlbW9ncmFwaGljTm9kZS5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdCByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vQ29sbGFwc2UgdGhlbVxuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcblxuICAgICAgICAgIC8vIFNldCBkZXNjZW5kYW50cyBleHBhbmRlZCBwcm9wZXJ0eSB0byBmYWxzZVxuICAgICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXHRpZiAoZC5pZCA9PT0nRGVtb2dyYXBoaWNzJyl7XG4gICAgICAgICAgXHRjb25zdCBjb252b2NhdGlvbk5vZGUgPSBkLnBhcmVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbnZvY2F0aW9uTm9kZS5jaGlsZHJlbiA9PSBudWxsKXtcbiAgICAgICAgICAgIFx0dGhpcy5vbkJ1dHRvbkNsaWNrKGNvbnZvY2F0aW9uTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAvLyBFeHBhbmQgY2hpbGRyZW5cbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgICAgICAgLy8gU2V0IGVhY2ggY2hpbGRyZW4gYXMgZXhwYW5kZWRcbiAgICAgICAgICBkLmNoaWxkcmVuLmZvckVhY2goKHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgIH0pID0+IGRhdGEuZXhwYW5kZWQgPSB0cnVlKVxuICAgICAgfVxuXG4gICAgICAvLyBSZWRyYXcgR3JhcGggXG4gICAgICB0aGlzLnVwZGF0ZShkKTtcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gY2hhbmdlcyBgZXhwYW5kZWRgIHByb3BlcnR5IHRvIGRlc2NlbmRhbnRzXG4gIHNldEV4cGFuc2lvbkZsYWdUb0NoaWxkcmVuKHtcbiAgICAgIGRhdGEsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIF9jaGlsZHJlblxuICB9LCBmbGFnKSB7XG5cbiAgICAgIC8vIFNldCBmbGFnIHRvIHRoZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICBkYXRhLmV4cGFuZGVkID0gZmxhZztcblxuICAgICAgLy8gTG9vcCBvdmVyIGFuZCByZWN1cnNpdmVseSB1cGRhdGUgZXhwYW5kZWQgY2hpbGRyZW4ncyBkZXNjZW5kYW50c1xuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFeHBhbnNpb25GbGFnVG9DaGlsZHJlbihkLCBmbGFnKVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIExvb3Agb3ZlciBhbmQgcmVjdXJzaXZlbHkgdXBkYXRlIGNvbGxhcHNlZCBjaGlsZHJlbidzIGRlc2NlbmRhbnRzXG4gICAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICAgICAgX2NoaWxkcmVuLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0RXhwYW5zaW9uRmxhZ1RvQ2hpbGRyZW4oZCwgZmxhZylcbiAgICAgICAgICB9KVxuICAgICAgfVxuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgaW52b2tlZCB2aWEgY2hhcnQuc2V0RXhwYW5kZWQgQVBJLCBpdCBleHBhbmRzIG9yIGNvbGxhcHNlcyBwYXJ0aWN1bGFyIG5vZGVcbiAgc2V0RXhwYW5kZWQoaWQsIGV4cGFuZGVkRmxhZykge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIC8vIFJldHJpZXZlIG5vZGUgYnkgbm9kZSBJZFxuICAgICAgY29uc3Qgbm9kZSA9IGF0dHJzLmFsbE5vZGVzLmZpbHRlcigoe1xuICAgICAgICAgIGRhdGFcbiAgICAgIH0pID0+IGRhdGEubm9kZUlkID09IGlkKVswXVxuXG4gICAgICAvLyBJZiBub2RlIGV4aXN0cywgc2V0IGV4cGFuc2lvbiBmbGFnXG4gICAgICBpZiAobm9kZSkgbm9kZS5kYXRhLmV4cGFuZGVkID0gZXhwYW5kZWRGbGFnO1xuXG4gICAgICAvLyBGaXJzdCBleHBhbmQgYWxsIG5vZGVzXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmV4cGFuZChkKSk7XG5cbiAgICAgIC8vIFRoZW4gY29sbGFwc2UgYWxsIG5vZGVzXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgICAgLy8gVGhlbiBleHBhbmQgb25seSB0aGUgbm9kZXMsIHdoaWNoIHdlcmUgcHJldmlvdXNseSBleHBhbmRlZCwgb3IgaGF2ZSBhbiBleHBhbmQgZmxhZyBzZXRcbiAgICAgIGF0dHJzLnJvb3QuY2hpbGRyZW4uZm9yRWFjaChkID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGQpKTtcblxuICAgICAgLy8gUmVkcmF3IGdyYXBoXG4gICAgICB0aGlzLnVwZGF0ZShhdHRycy5yb290KTtcbiAgfVxuXG4gIC8vIE1ldGhvZCB3aGljaCBvbmx5IGV4cGFuZHMgbm9kZXMsIHdoaWNoIGhhdmUgcHJvcGVydHkgc2V0IFwiZXhwYW5kZWQ9dHJ1ZVwiXG4gIGV4cGFuZFNvbWVOb2RlcyhkKSB7XG5cbiAgICAgIC8vIElmIG5vZGUgaGFzIGV4cGFuZGVkIHByb3BlcnR5IHNldFxuICAgICAgaWYgKGQuZGF0YS5leHBhbmRlZCkge1xuXG4gICAgICAgICAgLy8gUmV0cmlldmUgbm9kZSdzIHBhcmVudFxuICAgICAgICAgIGxldCBwYXJlbnQgPSBkLnBhcmVudDtcblxuICAgICAgICAgIC8vIFdoaWxlIHdlIGNhbiBnbyB1cCBcbiAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG5cbiAgICAgICAgICAgICAgLy8gRXhwYW5kIGFsbCBjdXJyZW50IHBhcmVudCdzIGNoaWxkcmVuXG4gICAgICAgICAgICAgIGlmIChwYXJlbnQuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4gPSBwYXJlbnQuX2NoaWxkcmVuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUmVwbGFjZSBjdXJyZW50IHBhcmVudCBob2xkaW5nIG9iamVjdFxuICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBjb2xsYXBzZWQgbm9kZXNcbiAgICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVjdXJzaXZlbGx5IGRvIHRoZSBzYW1lIGZvciBleHBhbmRlZCBub2RlcyBcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5jaGlsZHJlbi5mb3JFYWNoKGNoID0+IHRoaXMuZXhwYW5kU29tZU5vZGVzKGNoKSk7XG4gICAgICB9XG4gIH1cblxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyBub2RlcyBzdGF0ZSBhbmQgcmVkcmF3cyBncmFwaCwgdXN1YWxseSBhZnRlciBkYXRhIGNoYW5nZVxuICB1cGRhdGVOb2Rlc1N0YXRlKCkge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIC8vIFN0b3JlIG5ldyByb290IGJ5IGNvbnZlcnRpbmcgZmxhdCBkYXRhIHRvIGhpZXJhcmNoeVxuICAgICAgYXR0cnMucm9vdCA9IGQzLnN0cmF0aWZ5KClcbiAgICAgICAgICAuaWQoKHtcbiAgICAgICAgICAgICAgbm9kZUlkXG4gICAgICAgICAgfSkgPT4gbm9kZUlkKVxuICAgICAgICAgIC5wYXJlbnRJZCgoe1xuICAgICAgICAgICAgICBwYXJlbnROb2RlSWRzXG4gICAgICAgICAgfSkgPT4gcGFyZW50Tm9kZUlkc1swXSlcbiAgICAgICAgICAoYXR0cnMuZGF0YSlcblxuICAgICAgLy8gU3RvcmUgcG9zaXRpb25zLCB3aGVyZSBjaGlsZHJlbiBhcHBlYXIgZHVyaW5nIHRoZWlyIGVudGVyIGFuaW1hdGlvblxuICAgICAgYXR0cnMucm9vdC54MCA9IDA7XG4gICAgICBhdHRycy5yb290LnkwID0gMDtcblxuICAgICAgLy8gU3RvcmUgYWxsIG5vZGVzIGluIGZsYXQgZm9ybWF0IChhbHRob3VnaCwgbm93IHdlIGNhbiBicm93c2UgcGFyZW50LCBzZWUgZGVwdGggZS50LmMuIClcbiAgICAgIGF0dHJzLmFsbE5vZGVzID0gYXR0cnMubGF5b3V0cy50cmVlbWFwKGF0dHJzLnJvb3QpLmRlc2NlbmRhbnRzKClcblxuICAgICAgLy8gU3RvcmUgZGlyZWN0IGFuZCB0b3RhbCBkZXNjZW5kYW50cyBjb3VudFxuICAgICAgYXR0cnMuYWxsTm9kZXMuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGQuZGF0YSwge1xuICAgICAgICAgICAgICBkaXJlY3RTdWJvcmRpbmF0ZXM6IGQuY2hpbGRyZW4gPyBkLmNoaWxkcmVuLmxlbmd0aCA6IDAsXG4gICAgICAgICAgICAgIHRvdGFsU3Vib3JkaW5hdGVzOiBkLmRlc2NlbmRhbnRzKCkubGVuZ3RoIC0gMVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICAvLyBFeHBhbmQgYWxsIG5vZGVzIGZpcnN0XG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2godGhpcy5leHBhbmQpO1xuXG4gICAgICAvLyBUaGVuIGNvbGxhcHNlIHRoZW0gYWxsXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goZCA9PiB0aGlzLmNvbGxhcHNlKGQpKTtcblxuICAgICAgLy8gVGhlbiBvbmx5IGV4cGFuZCBub2Rlcywgd2hpY2ggaGF2ZSBleHBhbmRlZCBwcm9wcnR5IHNldCB0byB0cnVlXG4gICAgICBhdHRycy5yb290LmNoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5leHBhbmRTb21lTm9kZXMoY2gpKTtcblxuICAgICAgLy8gUmVkcmF3IEdyYXBoc1xuICAgICAgdGhpcy51cGRhdGUoYXR0cnMucm9vdClcbiAgfVxuXG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggY29sbGFwc2VzIHBhc3NlZCBub2RlIGFuZCBpdCdzIGRlc2NlbmRhbnRzXG4gIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5jb2xsYXBzZShjaCkpO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gd2hpY2ggZXhwYW5kcyBwYXNzZWQgbm9kZSBhbmQgaXQncyBkZXNjZW5kYW50cyBcbiAgZXhwYW5kKGQpIHtcbiAgICAgIGlmIChkLl9jaGlsZHJlbikge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuLmZvckVhY2goY2ggPT4gdGhpcy5leHBhbmQoY2gpKTtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gIH1cblxuICAvLyBab29tIGhhbmRsZXIgZnVuY3Rpb25cbiAgem9vbWVkKCkge1xuICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICAgIGNvbnN0IGNoYXJ0ID0gYXR0cnMuY2hhcnQ7XG5cbiAgICAgIC8vIEdldCBkMyBldmVudCdzIHRyYW5zZm9ybSBvYmplY3RcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGQzLmV2ZW50LnRyYW5zZm9ybTtcblxuICAgICAgLy8gU3RvcmUgaXRcbiAgICAgIGF0dHJzLmxhc3RUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAgIC8vIFJlcG9zaXRpb24gYW5kIHJlc2NhbGUgY2hhcnQgYWNjb3JkaW5nbHlcbiAgICAgIGNoYXJ0LmF0dHIoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG5cbiAgICAgIC8vIEFwcGx5IG5ldyBzdHlsZXMgdG8gdGhlIGZvcmVpZ24gb2JqZWN0IGVsZW1lbnRcbiAgICAgIGlmICh0aGlzLmlzRWRnZSgpKSB7XG4gICAgICAgICAgdGhpcy5yZXN0eWxlRm9yZWlnbk9iamVjdEVsZW1lbnRzKCk7XG4gICAgICB9XG5cbiAgfVxuXG59XG5cbiIsImV4cG9ydCBjbGFzcyBTdW5idXJzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiAzMDAwLFxuICAgICAgc3ZnSGVpZ2h0OiAzMDAwLFxuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoOiA0MCxcbiAgICAgIHRleHREaXN0YW5jZTogMTUsXG4gICAgICBvdXRlclRleHRTaXplOiBcIjIwcHhcIixcbiAgICAgIGF0dHJpYnV0ZUluZGV4OiBudWxsLFxuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBkaXNwbGF5Tm9kZXM6IG51bGwsXG4gICAgICB2YWx1ZXM6IG51bGwsXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgIH0sXG4gICAgICB0ZXh0Q2lyY2xlc0NvdW50OiBbXSxcbiAgICAgIHRleHRDaXJjbGVzUGVyY2VudDogW10sXG4gICAgICBjZW50ZXJUZXh0OiBudWxsLFxuICAgICAgY2VudGVyVGV4dFNpemU6IFwiNDBweFwiLFxuICAgICAgY2VudGVyVGV4dEhlaWdodDogNjAsXG4gICAgICBjb21wYXJlTW9kZTogZmFsc2UsXG4gICAgICBsZWdlbmRXaWR0aDogMTUwXG4gICAgfTtcblxuICAgIC8vZ2V0IGF0dHJpYnV0ZXMgbWV0aG9kXG4gICAgdGhpcy5nZXRDaGFydFN0YXRlID0gKCkgPT4gYXR0cnM7XG5cbiAgICAvL2dldHRlciAmIHNldHRlclxuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdGhpc1trZXldID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IGBhdHRyc1snJHtrZXl9J10gPSBfYDtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWwoYGF0dHJzWycke2tleX0nXTtgKTtcbiAgICAgICAgfVxuICAgICAgICBldmFsKHN0cmluZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBcbiAgLyogUmVtb3ZlcyBhbGwgZWxlbWVudHMgaW4gc3ZnICovXG4gIHJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUoKS5zdmcuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gIH1cbiAgXG4gIC8qIENvbnZlcnRzIG9iamVjdHMgdG8gc2xpY2VzIHdpdGggcXVlcmllcyAqL1xuICBnZXRWYWx1ZXMoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy9wcmVwYXJpbmcgc2xpY2VzXG4gICAgY29uc3QgY2FydGVzaWFuID0gKC4uLmEpID0+XG4gICAgICBhLnJlZHVjZSgoYSwgYikgPT5cbiAgICAgICAgYS5mbGF0TWFwKChkKSA9PiBiLm1hcCgoZSkgPT4gW2QsIGVdLmZsYXQoKSkpXG4gICAgICApO1xuICAgIGxldCBzbGljZXMgPSBjYXJ0ZXNpYW4oXG4gICAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRGVncmVlLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRmFjdWx0eSxcbiAgICAgIGFjYWRlbWljVmFsdWVzWydTdHVkeSBTdGF0dXMnXVxuICAgICk7XG5cbiAgICBjb25zdCBtYWtlUXVlcnkgPSAoc2xpY2UsIGRpdmVyc2l0eUF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgcXVlcnkgPSBbLi4uc2xpY2VdO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAocHJvcCAhPT0gZGl2ZXJzaXR5QXR0cikge1xuICAgICAgICAgIHF1ZXJ5LnB1c2goJ1RvdGFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnkucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9O1xuXG4gICAgLy9jb252ZXJ0IHNsaWNlcyB0byBrZXkgZm9ybWF0XG4gICAgbGV0IHZhbHVlcyA9IHt9O1xuICAgIGZvciAobGV0IHNsaWNlIG9mIHNsaWNlcykge1xuICAgICAgdmFsdWVzW3NsaWNlLnRvU3RyaW5nKCldID0ge307XG4gICAgICBmb3IgKGxldCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA9PSAxKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWVzW3NsaWNlLnRvU3RyaW5nKCldW2F0dHJdID0ge307XG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIGRpdmVyc2l0eVZhbHVlc1thdHRyXSkge1xuICAgICAgICAgIHZhbHVlc1tzbGljZS50b1N0cmluZygpXVthdHRyXVt2YWx1ZV0gPSBtYWtlUXVlcnkoXG4gICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuICBcbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBhcmNzLCByZXR1cm4gYXJjIHdpZHRoLCBpbm5lcnJhZGl1cyBhbmQgdGV4dCBzaXplKi9cbiAgY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyh4LCB5LCBudW1BcmNzKXtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblx0XHRcbiAgICBsZXQgdGV4dEhlaWdodE9mZnNldCA9IDUwO1xuICAgIFxuICAgIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5LXRleHRIZWlnaHRPZmZzZXQpOyBcbiAgICBsZXQgYXJjV2lkdGggPSAobWluLygyKm51bUFyY3MgKyA3KSk7IC8vbWluID0gMipudW1BcmNzKmFyY1dpZHRoICsgMippbm5lclJhZGl1cywgaW5uZXJSYWRpdXMgPSAzKmFyY1dpZHRoXG4gICAgbGV0IGlubmVyUmFkaXVzID0gMyphcmNXaWR0aDtcbiAgICBcbiAgICBsZXQgbXVsdGlwbGllciA9IDEuNTtcbiAgICBsZXQgbiA9IDEzOyAvLydpbnRlcm5hdGlvbmFsJyB3aXRoIDEzIGxldHRlcnMgaXMgbG9uZ2VzdCB3b3JkIGluIGRpdmVyc2l0eSBhdHRyaWJ1dGVzIFxuICAgIGxldCBpbm5lclRleHRTaXplID0gbXVsdGlwbGllciooMippbm5lclJhZGl1cykvbiArIFwicHhcIjtcbiAgICByZXR1cm4ge2FyY1dpZHRoOiBhcmNXaWR0aCwgaW5uZXJSYWRpdXM6IGlubmVyUmFkaXVzLCBpbm5lclRleHRTaXplOiBpbm5lclRleHRTaXplfTtcbiAgfVxuICBcbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBzcXVhcmVzLCByZXR1cm4gcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemUgKi9cbiAgY29tcHV0ZUNvbXBhcmVEaW1lbnNpb25zKHgsIHksIG4pe1xuICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMsIGFuZCBjZWxsIHNpemVcbiAgICBsZXQgcmF0aW8gPSB4IC8geTtcbiAgICBsZXQgbmNvbHNfZmxvYXQgPSBNYXRoLnNxcnQobiAqIHJhdGlvKTtcbiAgICBsZXQgbnJvd3NfZmxvYXQgPSBuIC8gbmNvbHNfZmxvYXQ7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIGhlaWdodFxuICAgIGxldCBucm93czEgPSBNYXRoLmNlaWwobnJvd3NfZmxvYXQpO1xuICAgIGxldCBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgd2hpbGUgKG5yb3dzMSAqIHJhdGlvIDwgbmNvbHMxKSB7XG4gICAgICAgIG5yb3dzMSsrO1xuICAgICAgICBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUxID0geSAvIG5yb3dzMTtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgd2lkdGhcbiAgICBsZXQgbmNvbHMyID0gTWF0aC5jZWlsKG5jb2xzX2Zsb2F0KTtcbiAgICBsZXQgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIHdoaWxlIChuY29sczIgPCBucm93czIgKiByYXRpbykge1xuICAgICAgICBuY29sczIrKztcbiAgICAgICAgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMiA9IHggLyBuY29sczI7XG5cbiAgICAvLyBGaW5kIHRoZSBiZXN0IHZhbHVlc1xuICAgIGxldCBucm93cywgbmNvbHMsIGNlbGxfc2l6ZTtcbiAgICBpZiAoY2VsbF9zaXplMSA8IGNlbGxfc2l6ZTIpIHtcbiAgICAgICAgbnJvd3MgPSBucm93czI7XG4gICAgICAgIG5jb2xzID0gbmNvbHMyO1xuICAgICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5yb3dzID0gbnJvd3MxO1xuICAgICAgICBuY29scyA9IG5jb2xzMTtcbiAgICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtzaXplOiBjZWxsX3NpemUsIHJvd3M6IG5yb3dzLCBjb2xzOiBuY29sc307XG4gIH1cbiAgXG4gIC8qIEZldGNoaW5nIGRhdGEgYW5kIHNldHRpbmcgdXAgc3ZnIGNvbnRhaW5lciAqL1xuICBhc3luYyBzZXR1cCh1cmwpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblx0XHRsZXQgc2IgPSB0aGlzO1xuICAgIFxuICAgIC8vbG9hZCBkYXRhIHN5bmNocm9ub3VzbHlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZDMuY3N2KHVybCk7XG5cbiAgICBhdHRycy5hdHRyaWJ1dGVJbmRleCA9IGRhdGEuY29sdW1ucztcblxuICAgIC8vY29udmVydCBkYXRhIHRvIG9iamVjdCBmb3JtYXRcbiAgICBhdHRycy5kYXRhID0gZGF0YS5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgb2JqLCBpKSB7XG4gICAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmopO1xuXG4gICAgICB2YWx1ZXMucG9wKCk7XG5cbiAgICAgIG1hcFsnJy5jb25jYXQodmFsdWVzKV0gPSBvYmouQ291bnQ7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcblxuICAgIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KGF0dHJzLmNvbnRhaW5lcik7XG5cbiAgICAvLyBzZXR0aW5nIHVwIGNvbXBhcmUgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQ29tcGFyZSA9ICgpID0+IHtcbiAgICAgIGF0dHJzLmNvbXBhcmVNb2RlID0gIWF0dHJzLmNvbXBhcmVNb2RlO1xuICAgICAgc2IucmVuZGVyKGF0dHJzLnZhbHVlcyk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5vbmNsaWNrID0gdG9nZ2xlQ29tcGFyZTtcbiAgICBcbiAgICBhdHRycy5zdmcgPSBzdmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBcbiAgIC8qIENvbnZlcnRpbmcgaW5wdXQgb2JqZWN0cyB0byB2YWx1ZXMgZm9yIGRpc3BsYXkgKi9cbiAgaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoXG4gICAgICBhY2FkZW1pY1ZhbHVlcyxcbiAgICAgIGRpdmVyc2l0eVZhbHVlc1xuICAgICk7XG5cbiAgICB0aGlzLnJlbmRlcih2YWx1ZXMpO1xuICB9XG4gIFxuICBcbiAgLyogUmVjdXJyaW5nIHJlbmRlciAqL1xuICByZW5kZXIodmFsdWVzKXtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblx0XHRsZXQgc2IgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgLy8gU2V0dGluZyB2YWx1ZXMgc28gdmFsdWVzIGlzIHN0aWxsIGFjY2Vzc2libGUgd2hlbiBjb21wYXJlIGlzIHRvZ2dsZWQgXG4gICAgYXR0cnMudmFsdWVzID0gdmFsdWVzOyBcbiAgICBcbiAgICAvLyByZXB1cnBvc2luZyBiYWNrIGJ1dHRvbiBpZiBuZWNlc3NhcnlcbiAgICBpZiAoYXR0cnMuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBiYWNrID0gKCkgPT4gc2IucmVuZGVyKGF0dHJzLmhpc3RvcnkucG9wKCkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBhdHRycy5kaXNwbGF5Tm9kZXM7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBlbGVtZW50cyBpbiBzdmdcblx0XHR0aGlzLnJlbW92ZUFsbCgpO1xuICAgIFxuICAgIC8vIHJlLWNyZWF0ZSB0aGUgbmV3IGVsZW1lbnRzXG4gICAgaWYgKCFhdHRycy5jb21wYXJlTW9kZSl7XG4gICAgICAgdGhpcy5yZW5kZXJTdW5idXJzdCh2YWx1ZXMpO1xuICAgIH1lbHNle1xuICAgICAgIHRoaXMucmVuZGVyQ29tcGFyZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckxlZ2VuZCh2YWx1ZXMpO1xuICB9XG4gIFxuICAvLyByZW5kZXIgdGhlIHN1bmJ1cnN0XG4gcmVuZGVyU3VuYnVyc3QodmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgbGV0IHNiID0gdGhpcztcblxuICAgIC8vSGVscGVyIHZhbHVlc1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuICAgIGNvbnN0IGFyY0xlbmd0aCA9ICgyICogTWF0aC5QSSkgLyBudW1TbGljZXM7XG4gICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkMy5zZWxlY3QoXCIjc3VuYnVyc3RcIikubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcbiAgIFxuICAgXHRjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQ7XG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoO1xuICAgXG4gIFx0Y29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHdpZHRoLCBoZWlnaHQsIG51bUFyY3MpO1xuICAgIGNvbnN0IGFyY1dpZHRoID0gcGFyYW1zLmFyY1dpZHRoO1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcGFyYW1zLmlubmVyUmFkaXVzO1xuICAgXHRjb25zdCBpbm5lclRleHRTaXplID0gcGFyYW1zLmlubmVyVGV4dFNpemU7XG4gICBcbiAgICBsZXQgc3ZnID0gYXR0cnMuc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGF0dHJzLnN2Z1dpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGF0dHJzLnN2Z0hlaWdodClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7d2lkdGgvMn0sJHtoZWlnaHQvMn0pYCk7XG5cbiAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NlbnRlci1ncm91cCcpO1xuICAgIGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ2lkJywgJ2NlbnRlci1jaXJjbGUnKVxuICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAuYXR0cigncicsIGlubmVyUmFkaXVzKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJy0wLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCcnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcwLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCcnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMyA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcxLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCcnKTtcblxuICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAvL0hlbHBlciBtZXRob2RzXG4gICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBjb25zdCBnZXRDaXJjbGVZID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuXG4gICAgY29uc3QgZ2V0VGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHdvcmRzLmZpbHRlcihcbiAgICAgICAgKHdvcmQpID0+IHdvcmQgIT09ICdUb3RhbCdcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgXG4gIFxuICBcbiAgICAvL2xpbmUgYnVpbGRlclxuICAgIGNvbnN0IGxpbmVCdWlsZGVyID0gKHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXM7XG4gICAgICBpZiAobnVtU2xpY2VzICUgMiA9PSAxKSByYWRpYW5zICs9IE1hdGguUEk7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ3gxJywgZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKCd5MScsIGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneDInLFxuICAgICAgICAgIGdldENpcmNsZVgoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3kyJyxcbiAgICAgICAgICBnZXRDaXJjbGVZKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHNsaWNlLCBzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeCA9IGdldENpcmNsZVgocmFkaWFucywgcmFkaXVzKTtcbiAgICAgIGxldCB5ID0gLWdldENpcmNsZVkocmFkaWFucywgcmFkaXVzKTtcblxuICAgICAgaWYgKHggPCAtMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDk7IC8vbGVmdCBzaWRlIGFkanVzdFxuICAgICAgZWxzZSBpZiAoeCA8IDEpIHggLT0gdGV4dC5sZW5ndGggKiA1OyAvL21pZGRsZSB0ZXh0IGFkanVzdFxuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIGF0dHJzLm91dGVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICAvL2J1aWxkIGFyY3NcbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG5cbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gc2xpY2VDb3VudCAqIGFyY0xlbmd0aDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtKz1OdW1iZXIoYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV0pO1xuICAgICAgICB9XG5cdFx0XHRcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXSk7XG4gICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBhcmNMZW5ndGggKiBwZXJjZW50LFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuXG4gICAgICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKTtcblxuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dChcbiAgICAgICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoY291bnQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuXG4gICAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQoJycpO1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KCcnKTtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTMudGV4dCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICBbc2xpY2VdOiBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzW3NsaWNlXSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcdGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoYXR0cilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXHRmb3IgKGNvbnN0IGF0dHIxIGluIG5ld1ZhbHVlc1tzbGljZV0pe1xuICAgICAgICAgICAgICBcdCBmb3IgKGNvbnN0IHZhbHVlMSBpbiBuZXdWYWx1ZXNbc2xpY2VdW2F0dHIxXSl7XG4gICAgICAgICAgICAgICAgICBcdGlmIChhdHRyMSA9PT0gYXR0ciAmJiB2YWx1ZTEhPXZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgXHRkZWxldGUgbmV3VmFsdWVzW3NsaWNlXVthdHRyMV1bdmFsdWUxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbc2xpY2VdW2F0dHIxXVt2YWx1ZTFdW2luZGV4XSA9IHZhbHVlOyBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGF0dHJzLmhpc3RvcnkucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChudW1TbGljZXMgPT0gMSkgdGV4dEJ1aWxkZXIoc2xpY2UsIDAuNSk7XG4gICAgICBlbHNlIHRleHRCdWlsZGVyKHNsaWNlLCBzbGljZUNvdW50KTtcbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG5cbiAgICAvL2J1aWxkIGxpbmVzIGFmdGVyIHNvIHRoZXkgYXJlIG9uIHRvcFxuICAgIGZvciAoXG4gICAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgICBzbGljZUNvdW50IDwgbnVtU2xpY2VzICYmIG51bVNsaWNlcyA+IDE7XG4gICAgICBzbGljZUNvdW50KytcbiAgICApIHtcbiAgICAgIGxpbmVCdWlsZGVyKHNsaWNlQ291bnQpO1xuICAgIH1cbiAgfVxuICBcbiAgXG5cdGRpc3BsYXlWYWx1ZXModmFsdWVzLCBzZWxlY3RlZFZhbHVlKXtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcbiAgICBcbiAgICBhdHRycy5jZW50ZXJUZXh0LnRleHQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgXG4gIFx0bGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSs9TnVtYmVyKGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pe1xuICAgICAgICBcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IE51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV1dKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KGNvdW50KTtcbiAgICBcdFx0YXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoTnVtYmVyKChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDEpKSArICclJyk7XG4gICAgICB9XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICAgIC8vZDMuc2VsZWN0KFwidGV4dFtpZD0nZWxlbWVudC5pZC53aXRoLmRvdHMnXVwiKTtcbiAgICBjb25zdCBpZCA9IHNlbGVjdGVkVmFsdWUgKyAncmVjdCc7XG4gICAgZDMuc2VsZWN0KFwiW2lkPVxcJ1wiICsgaWQgKyBcIlxcJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICAgIFxuICB9XG4gICAgXG4gIHJlbW92ZVZhbHVlcyh2YWx1ZSl7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBhdHRycy5jZW50ZXJUZXh0LnRleHQoJycpO1xuICBcdGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc0NvdW50KXtcbiAgICBcdHRleHRDaXJjbGUudGV4dCgnJyk7IFxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50KXtcbiAgICBcdHRleHRDaXJjbGUudGV4dCgnJyk7IFxuICAgIH1cbiAgICBjb25zdCBpZCA9IHZhbHVlICsgJ3JlY3QnO1xuICAgICBkMy5zZWxlY3QoXCJbaWQ9XFwnXCIgKyBpZCArIFwiXFwnXVwiKS5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gIH1cbiAgICBcbiBcbiAgcmVuZGVyQ29tcGFyZSh2YWx1ZXMpe1xuICAgIC8vSGVscGVyIHZhbHVlc1xuICBcdGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3Qgc2IgPSB0aGlzO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZDMuc2VsZWN0KFwiI3N1bmJ1cnN0XCIpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSArY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICtjb250YWluZXIud2lkdGg7XG4gICAgXG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoOyAvL21pbnVzIGJlY2F1c2Ugb2YgbGVnZW5kXG4gICAgY29uc3QgaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0IC0gYXR0cnMuY2VudGVyVGV4dEhlaWdodDtcbiAgICBjb25zdCBudW1TbGljZXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aDtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gc2IuY29tcHV0ZUNvbXBhcmVEaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQsIG51bVNsaWNlcyk7IC8vcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemVcblx0XHRjb25zdCBhcmNMZW5ndGggPSAyICogTWF0aC5QSTtcbiAgICBcbiAgICBjb25zdCByb3dzID0gZGltZW5zaW9ucy5yb3dzO1xuICAgIGNvbnN0IGNvbHMgPSBkaW1lbnNpb25zLmNvbHM7XG4gICAgY29uc3Qgc2l6ZSA9IGRpbWVuc2lvbnMuc2l6ZTtcbiAgXHRjb25zdCB3aGl0ZXNwYWNlV2lkdGggPSB3aWR0aCAtIGNvbHMgKiBzaXplO1xuICAgIGNvbnN0IHdoaXRlc3BhY2VIZWlnaHQgPSBoZWlnaHQgLSByb3dzICogc2l6ZTtcbiAgICBcbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKS5sZW5ndGg7XG4gICAgY29uc3QgZXh0ZW5kZWRMaW5lTGVuZ3RoID0gYXR0cnMuZXh0ZW5kZWRMaW5lTGVuZ3RoO1xuICAgIGNvbnN0IGhhbGZTbGljZVJhZGlhbnMgPSBNYXRoLlBJIC8gbnVtU2xpY2VzO1xuICAgIGNvbnN0IHRleHREaXN0YW5jZSA9IGF0dHJzLnRleHREaXN0YW5jZTtcblxuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhzaXplLCBzaXplLCBudW1BcmNzKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgIFx0Y29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgLyogSGVscGVyIG1ldGhvZHMgKi9cbiAgICAvLyBHZXR0aW5nIHggdmFsdWUgZ2l2ZW4gcmFkaWFucyBhbmQgcmFkaXVzXG4gICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBcbiAgICAvLyBHZXR0aW5nIHkgdmFsdWUgZ2l2ZW4gcmFkaWFucyBhbmQgcmFkaXVzXG4gICAgY29uc3QgZ2V0Q2lyY2xlWSA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBcbiAgICAvLyBDb252ZXJ0aW5nIHNsaWNlIG5hbWUgdG8gdGV4dFxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgXG4gICAgLy90ZXh0IGJ1aWxkZXJcbiAgICBjb25zdCB0ZXh0QnVpbGRlciA9IChzbGljZSwgc2xpY2VDb3VudCwgc3VuYnVyc3RHcm91cCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPVxuICAgICAgICAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcyArXG4gICAgICAgIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHQoc2xpY2UpO1xuICAgICAgbGV0IHJhZGl1cyA9XG4gICAgICAgIGlubmVyUmFkaXVzICsgbnVtQXJjcyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHggPSBnZXRDaXJjbGVYKHJhZGlhbnMsIHJhZGl1cyk7XG4gICAgICBsZXQgeSA9IC1nZXRDaXJjbGVZKHJhZGlhbnMsIHJhZGl1cyk7XG5cbiAgICAgIGxldCBtdWx0aXBsaWVyID0gMS44O1xuICAgIFx0bGV0IG91dGVyVGV4dFNpemUgPSBtdWx0aXBsaWVyKigyKnJhZGl1cykvdGV4dC5sZW5ndGg7XG4gICAgXG4gICAgICAvL2NvbnNvbGUubG9nKHRleHQgKyBcIiBcIiArIG91dGVyVGV4dFNpemUgKyBcIiBcIiArIHRleHQubGVuZ3RoKTtcbiAgICAgIFxuICAgICAgeC09IChyYWRpdXMtdGV4dERpc3RhbmNlKTtcbiAgICAgIC8veCAtPSB0ZXh0Lmxlbmd0aCoobXVsdGlwbGllciswLjUpOyAvL21pZGRsZSB0ZXh0IGFkanVzdFxuICAgICAgXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgIFx0LnN0eWxlKFwiZm9udC1zaXplXCIsIG91dGVyVGV4dFNpemUgKyBcInB4XCIpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG4gICAgXG4gICAgLy8gQ2xlYXIgdGV4dENpcmNsZSBsaXN0c1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblxuICAgIGF0dHJzLmNlbnRlclRleHQgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aC8yKVxuICAgICAgLmF0dHIoJ3knLCBhdHRycy5jZW50ZXJUZXh0SGVpZ2h0LzIpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgXHQuc3R5bGUoXCJmb250LXNpemVcIiwgYXR0cnMuY2VudGVyVGV4dFNpemUpXG4gICAgICAudGV4dCgnJyk7XG4gICAgXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoc2xpY2VDb3VudC9jb2xzKTtcbiAgICAgIGxldCBjb2wgPSBzbGljZUNvdW50JWNvbHM7XG4gICAgICBcbiAgICAgIGxldCB0cmFuc2xhdGVYID0gc2l6ZS8yICsgY29sKnNpemUrKGNvbCsxKSp3aGl0ZXNwYWNlV2lkdGgvKGNvbHMrMSk7XG4gICAgICBsZXQgdHJhbnNsYXRlWSA9IGF0dHJzLmNlbnRlclRleHRIZWlnaHQgKyBzaXplLzIgKyByb3cqc2l6ZSsocm93KzEpKndoaXRlc3BhY2VIZWlnaHQvKHJvd3MrMSk7XG5cbiAgICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNpemUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzaXplKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pYCk7XG4gICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcbiAgICAgIFxuICAgICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMGVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuXG4gICAgXHRsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCdkeScsICcxZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG4gICAgICBcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQucHVzaCh0ZXh0Q2lyY2xlMSk7XG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQucHVzaCh0ZXh0Q2lyY2xlMik7XG4gICAgICBcbiAgICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgYXJjID0gZDNcbiAgICAgICAgICAuYXJjKClcbiAgICAgICAgICAuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIGFyY0NvdW50KVxuICAgICAgICAgIC5vdXRlclJhZGl1cyhcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiAoYXJjQ291bnQgKyAxKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgbGV0IHNsaWNlU3RhcnRBbmdsZSA9IDA7XG5cbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSs9TnVtYmVyKGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dKTtcbiAgICAgICAgfVxuXHRcdFx0XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXSk7XG4gICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBhcmNMZW5ndGggKiBwZXJjZW50LFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuXG4gICAgICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKTtcblx0XHRcdFx0XHRcdFx0c2IuZGlzcGxheVZhbHVlcyh2YWx1ZXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgICAgICBzYi5yZW1vdmVWYWx1ZXModmFsdWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuXHRcdFx0dGV4dEJ1aWxkZXIoc2xpY2UsIC0wLjUsIHN1bmJ1cnN0R3JvdXApXG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICB9XG5cblxuXG4gIHJlbmRlckxlZ2VuZCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBsZXQgbGVnZW5kID0gZDMuc2VsZWN0KCcjc3VuYnVyc3QtbGVnZW5kJykuYXR0cignd2lkdGgnLCBhdHRycy5sZWdlbmRXaWR0aCk7XG4gICAgbGVnZW5kLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIGxldCB5ID0gMjQ7XG4gICAgbGV0IHggPSAyMDtcblxuICAgIGxldCBmaXJzdFNsaWNlID0gT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdO1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBmaXJzdFNsaWNlKSB7XG4gICAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKGZpcnN0U2xpY2VbYXR0cl0pO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgXHQuYXR0cihcImlkXCIsIHZhbHVlICsgXCJyZWN0XCIpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAgIFx0LmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgXHQuYXR0cihcImlkXCIsIHZhbHVlICsgXCJ0ZXh0XCIpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4ICsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgICAudGV4dCh2YWx1ZSlcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgICAgICB5ICs9IDMwO1xuICAgICAgfVxuICAgICAgeSArPSAxMDtcbiAgICB9XG4gIH1cblxuIFxuIFxuXG59XG4iLCJpbXBvcnQgeyBDaGFydCB9IGZyb20gJy4vY2hhcnRzLWNsYXNzJztcbmltcG9ydCB7IFN1bmJ1cnN0IH0gZnJvbSAnLi9zdW5idXJzdC1jbGFzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcblx0Ly9zdW5idXJzdCBcbiAgbGV0IHNiOyBcblxuXHQvL1NldCBub2RlIGFuZCBNYWluIHZpeiBTUEEgdXBzXG4gIGRpc3BsYXlOb2RlcygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Vml6O1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheU5vZGVzO1xuIFx0XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Tm9kZXMoKXtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Vml6KCl7XG4gIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIFxuICAgIC8qXG4gICAgXHRsZXQgYWNhZGVtaWNWYWx1ZXMgPSB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICAgICAgIEZhY3VsdHk6IFsnQnVzaW5lc3MnLCAnU2NpZW5jZScsICdQdWJsaWMgQWZmYWlycyddLFxuICAgICAgICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ11cbiAgICAgICAgICB9O1xuICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXMgPSB7ICAgICBcbiAgICAgICAgICAgICAgQWdlOiBbJzw9MTcnLCAnMTgtMjAnLCAnMjYtMzAnLCAnNTUrJ10sXG4gICAgICAgICAgICAgIFNleDogIFsnTWFsZScsICdGZW1hbGUnXSxcbiAgICAgICAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFsnSW50ZXJuYXRpb25hbCcsICdEb21lc3RpYyddXG4gICAgICAgICAgfSovXG4gICAgXHRpZiAoc2Ipe1xuICAgICAgICAgLy9zYi5pbml0aWFsUmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgXHQgc2IuaW5pdGlhbFJlbmRlcihodC5hY2FkZW1pY1ZhbHVlcygpLCBodC5kaXZlcnNpdHlWYWx1ZXMoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWxlcnQoJ1BsZWFzZSB3YWl0IGZvciB0aGUgZGF0YSB0byBmaW5pc2ggbG9hZGluZycpO1xuICAgICAgfVxuICB9XG4gIFxuICBsZXQgaHQgPSBuZXcgQ2hhcnQoKVxuICAgICAuY29udGFpbmVyKCcjY2hhcnQnKVxuICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5pbml0aWFsWm9vbSgwLjMpXG4gICAgIC5yZW5kZXIoKVxuXG4gIG5ldyBTdW5idXJzdCgpXG4gICAgICAgICAuY29udGFpbmVyKCcjc3VuYnVyc3QnKVxuICAgICAgICAgLnN2Z1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgXHRcdFx0IC5kaXNwbGF5Tm9kZXMoZGlzcGxheU5vZGVzKVxuICAgIFx0XHQgLnNldHVwKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZWw1NTgvN2QyY2I1MjU4OTIxMTE5ZGY1ODg0Y2M5MDkwMmU4NGQvcmF3LzAwODI3YjlkNTMyODgzMzQzMTkxZjYxNDRkNDFkMGEwYmJhZDVkZjgvZmFsbC5jc3YnKVxuXHRcdFx0XHQgLnRoZW4odmFsdWUgPT4gc2IgPSB2YWx1ZSk7XG59KTtcblxuXG5cblxuXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUFBLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQztFQUN6QixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDN0I7RUFDQSxNQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztFQUMzQyxNQUFNLHVCQUF1QixHQUFHLGlCQUFpQixDQUFDO0VBQ2xELE1BQU0sMEJBQTBCLEdBQUcsdUJBQXVCLENBQUM7QUFDM0Q7RUFDQSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7RUFDM0IsTUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQztBQUNuRDtBQUNBO0FBQ0E7RUFDQSxNQUFNLFlBQVksR0FBRztFQUNyQixFQUFFLFdBQVcsRUFBRTtFQUNmLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsR0FBRztFQUNILEVBQUUsWUFBWSxFQUFFO0VBQ2hCLElBQUksSUFBSSxFQUFFLFdBQVc7RUFDckIsR0FBRztFQUNILEVBQUUsT0FBTyxFQUFFO0VBQ1gsSUFBSSxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQzNDLElBQUksZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixDQUFDO0VBQ3BJLEdBQUcsaUJBQWlCLEVBQUUsRUFBRTtFQUN4QixJQUFJLElBQUksRUFBRSx1QkFBdUI7RUFDakMsR0FBRztFQUNILEVBQUUsZUFBZSxFQUFFO0VBQ25CLElBQUksT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUMzQyxJQUFJLGVBQWUsRUFBRSxDQUFDLFNBQVM7RUFDL0IsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFBTSxTQUFTO0VBQ2YsTUFB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QUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUM7RUFDdEksTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQztFQUNySSxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUM7RUFDdkksTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFDO0VBQ3JJLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FB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QUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0QixVQUFVLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdkIsVUFBVSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3ZCLFVBQVUsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3pDLFVBQVUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDeEIsVUFBVSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7RUFDeEIsVUFBVSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDbkYsVUFBVSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7RUFDcEYsVUFBVSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7RUFDMUQsVUFBVSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQzNDO0VBQ0EsVUFBVSxJQUFJLElBQUksR0FBRyxDQUFDO0FBQ3RCLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QixlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FB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