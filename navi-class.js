import { nodes, colors } from './nodes';

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
      titleTextSize: '25px',
       color: {
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
      unclickedWidth: '2px',
      clickedWidth: '10px',
      focussed: null,
      placeholderInnerText: 'Enrolled Students',
      centerX: 0,
      centerY: 0,
    };

    this.getChartState = () => attrs;
		document.getElementById('back-button-nodes').disabled = true;
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
    
    //Define title
    d3.select('#nav-title-text')
    			.style('font-size', attrs.titleTextSize)
    			.text('Carleton University Students Collected \& Missing Demographics Data');
    
		this.renderLegend();
    this.renderSelectedAttributes()
    //this.initializeEnterExitUpdatePattern();
  }
  
     /* Function converts rgba objects to rgba color string 
    {red:110,green:150,blue:255,alpha:1}  => rgba(110,150,255,1)
  */
  rgbaObjToColor({ red, green, blue, alpha }) {
    return `rgba(${red},${green},${blue},${alpha})`;
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
    }
    
    const textBuilder = (x, y, text, size) => {
          legend
            .append('text')
            .attr('x', x)
            .attr('y', y)
            .text(text)
            .style('font-size', size)
      			.style('fill', 'white')
            .attr('alignment-baseline', 'middle');
    }
    
    
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
    	}
       
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
  
  render(){
    	const nc = this;
    	const attrs = this.getChartState()
      
    	const width = attrs.svgWidth,
            height = attrs.svgHeight ,
            maxRadius = (Math.min(width, height) / 2) - 5;

        const x = d3.scaleLinear()
            .range([0, 2 * Math.PI])
            .clamp(true);

        const y = d3.scaleSqrt()
            .range([maxRadius*.1, maxRadius]);

        const partition = d3.partition();

        const arc = d3.arc()
            .startAngle(d => x(d.x0))
            .endAngle(d => x(d.x1))
            .innerRadius(d => Math.max(0, y(d.y0)))
            .outerRadius(d => Math.max(0, y(d.y1)));

        const middleArcLine = d => {
            const halfPi = Math.PI/2;
            const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
            const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
					
            const middleAngle = (angles[1] + angles[0]) / 2;
            const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
            if (invertDirection) { angles.reverse(); }

            const path = d3.path();
            path.arc(0, 0, r, angles[0], angles[1], invertDirection);
            return path.toString();
        };

        const textFits = d => {
            const CHAR_SPACE = 3;

            const deltaAngle = x(d.x1) - x(d.x0);
            const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
            const perimeter = r * deltaAngle;

            return d.data.name.length * CHAR_SPACE < perimeter;
        };

    		d3.select("#node-div").style('background-color', attrs.backgroundColor)

    
        const svg = d3.select('#chart-container')
						.style('background-color', attrs.backgroundColor)
            .attr('viewBox', `${(-width+275) / 2} ${(-height-120) / 2} ${width} ${height}`)
            .on('click', () => focusOn()); // Reset zoom on canvas click

			 let innerRadius = y(0.3333333) 
       let centerGroup = svg
            .append('g')
           .attr('id', 'center-group-nodes')

        centerGroup.append('circle')
            .attr('id', 'center-circle-nodes')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', innerRadius)
            .attr('stroke', 'black')
            .style('stroke-width',0)
            .attr('fill', 'white');
        
        let textCircle = centerGroup
            .append('foreignObject')
            .attr('x', -innerRadius)
            .attr('y', -innerRadius/3)
        		.attr('dy', -0.5)
        		.attr('width',  innerRadius*2)
  					.attr('height',  innerRadius*2)
            .style('font-size', "60px")
        		.append('xhtml:p')
              .text(attrs.placeholderInnerText)


    		let root = nodes
        root = d3.hierarchy(root);
        root.sum(d => d.size);

        const slice = svg.selectAll('g.slice')
            .data(partition(root).descendants());

        slice.exit().remove();

        const newSlice = slice.enter()
            .append('g').attr('class', 'slice')
        		.on('mouseover', d => {
              textCircle.text(d.data.description)       
            }).on('mouseout', d => {
               textCircle.text(attrs.placeholderInnerText)
            })
            .on('click', d => {
                d3.event.stopPropagation();
              	 
              	if (d.children){
                  focusOn(d);
                } else {
                  select(d);
                }
              this.renderSelectedAttributes()
            });



        newSlice.append('path')
            .attr('class', 'main-arc')
            .style('fill',  d => this.rgbaObjToColor(d.data.color || d.parent.data.color))
     				.style('stroke', 'white')
            .style('stroke-width', d=> d.data.borderWidth || attrs.unclickedWidth)
            .attr('d', arc);

    		
    		newSlice.append('path')
                .attr('class', 'hidden-arc')
                .attr('id', (_, i) => `hiddenArc${i}`)
                .attr('d', middleArcLine);
				
        const text = newSlice.append('text')
        			.attr('class', 'arc-text')
        			.style('font-size', "30px")
            			.attr('display', d => textFits(d) ? null : 'none');

        // Add white contour
        text.append('textPath')
            .attr('startOffset','50%')
            .attr('xlink:href', (_, i) => `#hiddenArc${i}` )
            .style('fill', 'none')
            .style('stroke-linejoin', 'round');

        text.append('textPath')
            .attr('startOffset','50%')
            .attr('xlink:href', (_, i) => `#hiddenArc${i}` )
            .text(d => d.data.name);

				
    		document.getElementById('select-all-button').onclick = selectAll;
    		function selectAll(){
          	for (let child of attrs.focussed.children){
              select(child);
            }
        }
    		
    		function select(d){
          		if (d.data.color == colors.Uncollected_Node_Fill) 
                return;
          
                  const parent = d.parent.data
                  if (attrs.diversityValues[parent.name]) {
                    const index = attrs.diversityValues[parent.name].indexOf(d.data.name);
                    if (index > -1) {
                        attrs.diversityValues[parent.name].splice(index, 1);
                      	d.data.borderWidth = attrs.unclickedWidth;
                    } else {
                        attrs.diversityValues[parent.name].push(d.data.name);
                        d.data.borderWidth = attrs.clickedWidth;
                    }
                  } else if (attrs.academicValues[parent.name]) {
                    const index = attrs.academicValues[parent.name].indexOf(d.data.name);
                    if (index > -1) {
                        attrs.academicValues[parent.name].splice(index, 1);
                        d.data.borderWidth = attrs.unclickedWidth;

                        if (attrs.academicValues[parent.name].length == 0) {//if empty
                          attrs.academicValues[parent.name].push('Total');
                        }
                    } else {
                         if (attrs.academicValues[parent.name].length == 1 &&
                          attrs.academicValues[parent.name][0] == 'Total') {
                          //if 'Total'
                          attrs.academicValues[parent.name].pop();
                        }

                        attrs.academicValues[parent.name].push(d.data.name);
                        d.data.borderWidth = attrs.clickedWidth;

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
                  
                d3.selectAll('path.main-arc')
                  .style('stroke-width', d=> d.data.borderWidth || attrs.unclickedWidth); 
        }
    
    
    
    		document.getElementById('back-button-nodes').onclick = () => focusOn();
    		focusOn()
    
    
        function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
            // Reset to top-level if no data point specified

          	if (d.x0==0 && d.x1==1 && d.y0 == 0 && d.y1==1){
              document.getElementById('back-button-nodes').disabled = true;
               document.getElementById('back-button-nodes').style.backgroundColor = nc.rgbaObjToColor(colors.Disabled);
       				 document.getElementById('back-button-nodes').style.color = nc.rgbaObjToColor(colors.Disabled_Text);
              document.getElementById('center-group-nodes').style.display= 'block';
               document.getElementById('select-all-button').style.display= 'none';
            } else {
              attrs.focussed = d;
                document.getElementById('back-button-nodes').disabled = false;
              	document.getElementById('back-button-nodes').style.backgroundColor = nc.rgbaObjToColor(colors.Button);
              	document.getElementById('back-button-nodes').style.color ='white';
              document.getElementById('center-group-nodes').style.display= 'none';
              document.getElementById('select-all-button').style.display= 'block';
            }


            const transition = svg.transition()
                .duration(750)
                .tween('scale', () => {
                    const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                        yd = d3.interpolate(y.domain(), [d.y0, 1]);
                    return t => { x.domain(xd(t)); y.domain(yd(t)); };
                });

            transition.selectAll('path.main-arc')
                .attrTween('d', d => () => arc(d));

            transition.selectAll('path.hidden-arc')
                .attrTween('d', d => () => middleArcLine(d));

            transition.selectAll('.arc-text')
                .attrTween('display', d => () => textFits(d) ? null : 'none');

            moveStackToFront(d);

            function moveStackToFront(elD) {
                svg.selectAll('.slice').filter(d => d === elD)
                    .each(function(d) {
                        this.parentNode.appendChild(this);
                        if (d.parent) { moveStackToFront(d.parent); }
                    })
            }
        }
    


    
    
     	return this;
  }
  
}