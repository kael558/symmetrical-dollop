import { nodes } from './nodes'

export class Chart {
  constructor() {
      // Exposed variables
      const attrs = {
          id: `ID${Math.floor(Math.random() * 1000000)}`, // Id for event handlings
          svgWidth: 1200,
          svgHeight: 1200,
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
      let svg = d3.select("#node-legend")
      svg.append("rect").attr("x",20).attr("y",24).attr("width", 12).attr("height", 12).style("fill", "grey")
      svg.append("rect").attr("x",20).attr("y",54).attr("width", 12).attr("height", 12).style("fill", "none").style("stroke", "green")
      svg.append("rect").attr("x",20).attr("y",84).attr("width", 12).attr("height", 12).style("fill", "none").style("stroke", "blue")
      svg.append("text").attr("x", 40).attr("y", 30).text("Uncollected").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 40).attr("y", 60).text("Diversity").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 40).attr("y", 90).text("Academic").style("font-size", "15px").attr("alignment-baseline","middle")

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
              this.getNodeChildrenIds(d, nodeIdsStore)
          })
      }

      // Loop over _children and recursively store descendants id (collapsed nodes)
      if (_children) {
          _children.forEach(d => {
              this.getNodeChildrenIds(d, nodeIdsStore)
          })
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
      attrs.centerG.attr('transform', ` translate(${calc.centerX}, ${calc.nodeMaxHeight/2}) scale(${attrs.initialZoom})`)
  }

  render() {
      //InnerFunctions which will update visuals

      const attrs = this.getChartState();
      const thisObjRef = this;

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
      }
      attrs.layouts = layouts;

      // Generate tree layout function
      layouts.treemap = d3.tree().size([calc.chartWidth, calc.chartHeight])
          .nodeSize([calc.nodeMaxWidth + 100, calc.nodeMaxHeight + attrs.depth])

      // ******************* BEHAVIORS . **********************
      const behaviors = {
          zoom: null
      }

      // Get zooming function 
      behaviors.zoom = d3.zoom().on("zoom", d => this.zoomed(d))

      //****************** ROOT node work ************************

      // Convert flat data to hierarchical
      attrs.root = d3.stratify()
          .id(({
              nodeId
          }) => nodeId)
          .parentId(({
              parentNodeIds
          }) => parentNodeIds[0])
          (attrs.data)

      // Set child nodes enter appearance positions
      attrs.root.x0 = 0;
      attrs.root.y0 = 0;

      /** Get all nodes as array (with extended parent & children properties set)
          This way we can access any node's parent directly using node.parent - pretty cool, huh?
      */
      attrs.allNodes = attrs.layouts.treemap(attrs.root).descendants()

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
      this.update(attrs.root)

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
      })
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
          })

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
            	let diag = this.diagonal(o, [o])
              return diag
          })
          .remove();

      // --------------------------  NODES ----------------------
      // Get nodes selection
      const nodesSelection = attrs.centerG.selectAll('g.node')
          .data(nodes, ({
              id
          }) => id)

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
                let nodeClicked = nodes.find(node => node.id === data.nodeId)
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
          }) => _children ? "lightsteelblue" : "#fff")


      // Node update styles
      const nodeUpdate = nodeEnter.merge(nodesSelection)
          .style('font', '12px sans-serif');


      // Add foreignObject element inside rectangle
      const fo = nodeUpdate
          .patternify({
              tag: 'foreignObject',
              selector: 'node-foreign-object',
              data: d => [d]
          })


      // Add foreign object 
      fo.patternify({
          tag: 'xhtml:div',
          selector: 'node-foreign-object-div',
          data: d => [d]
      })

      this.restyleForeignObjectElements();

      // Transition to the proper position for the node
      nodeUpdate.transition()
          .attr('opacity', 0)
          .duration(attrs.duration)
          .attr("transform", ({
              x,
              y
          }) => `translate(${x},${y})`)
          .attr('opacity', 1)

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
          }) => backgroundColor)

    

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
    	let heightMultiplier = parents.length == 2 ? 0.575 : 0.425
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
          }) => -height / 2)
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
          }) => data.nodeId)
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
          }) => data.expanded = true)
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
              this.setExpansionFlagToChildren(d, flag)
          })
      }

      // Loop over and recursively update collapsed children's descendants
      if (_children) {
          _children.forEach(d => {
              this.setExpansionFlagToChildren(d, flag)
          })
      }
  }

  // This function can be invoked via chart.setExpanded API, it expands or collapses particular node
  setExpanded(id, expandedFlag) {
      const attrs = this.getChartState();
      // Retrieve node by node Id
      const node = attrs.allNodes.filter(({
          data
      }) => data.nodeId == id)[0]

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
          (attrs.data)

      // Store positions, where children appear during their enter animation
      attrs.root.x0 = 0;
      attrs.root.y0 = 0;

      // Store all nodes in flat format (although, now we can browse parent, see depth e.t.c. )
      attrs.allNodes = attrs.layouts.treemap(attrs.root).descendants()

      // Store direct and total descendants count
      attrs.allNodes.forEach(d => {
          Object.assign(d.data, {
              directSubordinates: d.children ? d.children.length : 0,
              totalSubordinates: d.descendants().length - 1
          })
      })

      // Expand all nodes first
      attrs.root.children.forEach(this.expand);

      // Then collapse them all
      attrs.root.children.forEach(d => this.collapse(d));

      // Then only expand nodes, which have expanded proprty set to true
      attrs.root.children.forEach(ch => this.expandSomeNodes(ch));

      // Redraw Graphs
      this.update(attrs.root)
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

