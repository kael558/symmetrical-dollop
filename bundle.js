(function () {
  'use strict';

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


  const nodes = {
             "name": "",
             "color": colors.Transparent,
    				 "borderWidth": "0px",
             "children": [
              {
               "name": "Faculty",
               "color": colors.Academic_Node_Fill,
              	description: 'Groups of university departments concerned with a major division of knowledge. The faculty of a student maps from their major or majors.',
               "children": [
                  {"name": "STEM", "size": 12},
                  {"name": "Non-STEM", "size": 12},
                  {"name": "Engineering & Design", "size": 12},
                  {"name": "Science", "size": 12},
                  {"name": "Public Affairs", "size": 12},
                  {"name": "Business", "size": 12},
                 	{"name": "Arts & Social Sciences", "size": 12}
               ]  
              }, 
              {
               "name": "Academic Year",
               "color": colors.Academic_Node_Fill,
                description: 'The period of the year which students attend an educational institution. The academic year consists of three terms (Summer, Fall and Winter). The academic year of a student maps from the year that they are studying.',
               "children": [
                  {"name": "2013/14", "size": 10.5},
                  {"name": "2014/15", "size": 10.5},
                  {"name": "2015/16", "size": 10.5},
                  {"name": "2016/17", "size": 10.5},
                  {"name": "2017/18", "size": 10.5},
                  {"name": "2018/19", "size": 10.5},
                  {"name": "2019/20", "size": 10.5},
                  {"name": "2020/21", "size": 10.5},
               ]  
              },
  						{
               "name": "Degree",
               "color": colors.Academic_Node_Fill,
                description: 'The levels of qualification offered by academic instituitions. The degree of a student maps from their level of study.',
               "children": [
                  {"name": "Bachelors", "size": 28},
                  {"name": "Masters", "size": 28},
                  {"name": "Ph.D.", "size": 28},
               ]  
              },
              {
               "name": "Study Status",
               "color": colors.Academic_Node_Fill,
                description: 'The classification of the amount of courses that a student is taking. Students enrolling in 3 or more credits across the Fall and Winter are full-time students. Whereas students enrolling in less than 3 credits are part-time students.',
                "children": [
                  {"name": "Part-time", "size": 42},
                  {"name": "Full-time", "size": 42},
               ]  
              },
              {
               "name": "Citizenship Status",
               "color": colors.Diversity_Node_Fill,
               description: 'The classification of tuition fee that a student pays. The students university tuition fee amount determines their citizenship status.',
               "children": [
                  {"name": "Domestic", "size": 42},
                  {"name": "International", "size": 42},
               ]  
              },
              {
               "name": "Age",
               "color": colors.Diversity_Node_Fill,
                description: 'The length of time that a student has lived. The age of a student maps to their respective age interval. The registration application records a student\'s date of birth and determines their age.',
               "children": [
                  {"name": "<=17", "size": 6},
                  {"name": "18-20", "size": 6},
                  {"name": "21-25", "size": 6},
                  {"name": "26-30", "size": 6},
                  {"name": "31-35", "size": 6},
                  {"name": "36-45", "size": 6},
                  {"name": "46-55", "size": 6},
                  {"name": "55+", "size": 6},
                  {"name": "55-59", "color":colors.Uncollected_Node_Fill, "size": 6},
                  {"name": "60-64", "color": colors.Uncollected_Node_Fill, "size": 6},
                  {"name": "65-69", "color": colors.Uncollected_Node_Fill, "size": 6},
                  {"name": "70-74", "color": colors.Uncollected_Node_Fill, "size": 6},
                  {"name": "75-79", "color": colors.Uncollected_Node_Fill, "size": 6},
                  {"name": "80+", "color": colors.Uncollected_Node_Fill, "size": 6}
               ]  
              },
              {
               "name": "Sex",
               "color": colors.Diversity_Node_Fill,
                description: 'The physical differences between students based on anatomical and physiological characteristics. The registration application records a student\'s sex (labelled as gender on the application). A student may file a form to request a \"Gender Change Assignment\" to change this field. This field contains a mixture of gender and sex. A growing population of students choose not to disclose their gender/sex with a \'Prefer not to report\' option. We are uncertain how this maps to the two available categories of \'male\' and \'female\'.',
                "children": [
                  {"name": "Male", "size": 28},
                  {"name": "Female", "size": 28},
                  {"name": "Non-binary", "color":colors.Uncollected_Node_Fill, "size": 28}
               ]  
              },
              {
               "name": "Race",
               "color":colors.Uncollected_Node_Fill,
                description: 'University does not collect this category of information.',
               "size": 84
              },
              {
               "name": "Religion/Spirituality",
               "color":colors.Uncollected_Node_Fill,
                description: 'University does not collect this category of information.',
                "size":  84
              },
              {
               "name": "Dis/ability",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect this category of information.',
                "size":  84
              },
              {
               "name": "Indigeneity",
               "color": colors.Uncollected_Node_Fill,
                 description: 'University does not collect this category of information.',
                "size":  84
              },
              {
               "name": "Languages Spoken",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect this category of information.',
                "size":  84
              },
              {
               "name": "Ethnicity",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect this category of information.',
                "size":  84
              },
              {
               "name": "Nation/Regional Identity",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect this category of information.',
                "size":  84
              },
             ]
  };

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
        titleTextSize: '40px',
        centerTextSize: '25px',
        sliceTextSize: '25px',
        splitSize: '0.5em',
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
      this.renderSelectedAttributes();
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
    
    render(){
      	const nc = this;
      	const attrs = this.getChartState();
        
      	const width = attrs.svgWidth,
              height = attrs.svgHeight ,
              maxRadius = (Math.min(width, height) / 2) - 5;

          const x = d3.scaleLinear()
              .range([0, 2 * Math.PI])
              .clamp(true);

          const y = d3.scaleLinear()
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
            	if (d.split && (d.children!=null || d.data.color == colors.Uncollected_Node_Fill))
                return true
            
              const CHAR_SPACE = 6;

              const deltaAngle = x(d.x1) - x(d.x0);
              const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
              const perimeter = r * deltaAngle;

              return d.data.name.length * CHAR_SPACE < perimeter;
          };

      		d3.select("#node-div").style('background-color', attrs.backgroundColor);

      
          const svg = d3.select('#chart-container')
  						.style('background-color', attrs.backgroundColor)
              .attr('viewBox', `${(-width+275) / 2} ${(-height-120) / 2} ${width} ${height}`)
              .on('click', () => focusOn()); // Reset zoom on canvas click

      
  			 	let textCircle;

      		let root = nodes;
          root = d3.hierarchy(root);
          root.sum(d => d.size);

      		root.descendants().map(d =>{
              let selected = false;
              let split = d.data.name.includes(" ") || d.data.name.includes("/");
              return Object.assign(d, {
                selected,
                split
              });
            });
      		
      		const sortedNodes = partition(root).descendants().sort((d1, d2) => {
          	 if (d1.children && !d2.children){
              	return 1; 
             } 
             if (!d1.children && d2.children){
              	return -1; 
             }
            	return 0;
          });

          const slice = svg.selectAll('g.slice')
              .data(sortedNodes);
  			
          slice.exit().remove();

  				/* GET/SET SLICES */
          const newSlice = slice.enter()
              .append('g').attr('class', 'slice')
          		.on('mouseover', d => {
                if (d.data.name == 'Sex'){
                	textCircle.style('font-size', '12px');
                }
                
                textCircle.text(d.data.description);       
              }).on('mouseout', d => {
                 textCircle.text(attrs.placeholderInnerText).style('font-size', attrs.centerTextSize);
              })
              .on('click', d => {
                	if ([...d3.event.srcElement.classList].includes('select-all-circles')){
                    return;
                  }
      
                  d3.event.stopPropagation();
                		console.log("clciked arc");
                	if (d.children){
                    focusOn(d);
                  } else {
                    select(d);
                  }
                this.renderSelectedAttributes();
              });


          newSlice.append('path')
              .attr('class', 'main-arc')
              .style('fill',  d => this.rgbaObjToColor(d.data.color || d.parent.data.color))
       				.style('stroke', 'white')
              .style('stroke-width', (d) => d.data.name == '' ? '0px' : attrs.unclickedWidth)
              .attr('d', arc);

      	
      		newSlice.append('path')
                  .attr('class', 'hidden-arc')
                  .attr('id', (_, i) => `hiddenArc${i}`)
                  .attr('d', middleArcLine);
  				
   
      		/* APPEND TEXT */
          const text = newSlice
            .append('text')
            .attr('class', 'arc-text')
            .style('font-size', attrs.sliceTextSize)
            .attr('display', (d) => {
              if (d.parent && d.parent.parent == null)
                  return null
              return textFits(d) ? null : 'none'
            }).attr('dy', (d) => {
              if (d.split){
               return (d.inverted ? "-" : "+") + attrs.splitSize;
              } 
              return "0em"
            });

          text
            .append('textPath')
            .attr('startOffset', '50%')
            .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
            .text((d) => {
              if (d.split && (d.children!=null || d.data.color == colors.Uncollected_Node_Fill)){
                if (d.data.name.includes("/")){
                  return d.data.name.split("/")[d.inverted ? 0 : 1]
                } else {
                   return d.data.name.split(" ")[d.inverted ? 0 : 1]
                }
              }
              return d.data.name
            });

              const text1 = newSlice
                .append('text')
                .attr('class', 'arc-text1')
                .style('font-size', attrs.sliceTextSize)
                .attr('dy', (d) => {
                    if (d.split){
                      return (d.inverted ? "+" : "-") +attrs.splitSize;
                    } 
                  return "0em"
                });

              text1
                .append('textPath')
                .attr('startOffset', '50%')
                .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
                .text((d) => {
                  if (d.split && (d.children!=null || d.data.color == colors.Uncollected_Node_Fill)){
                    if (d.data.name.includes("/")){
                      return d.data.name.split("/")[d.inverted ? 1 : 0]
                    } else {
                       return d.data.name.split(" ")[d.inverted ? 1 : 0]
                    }
                  }
                  return ""
                });
  				



      
      		/* HANDLE SELECT ALL */
      		document.getElementById('select-all-button').onclick = selectAll;
      		function selectAll() {
              const allSelected = attrs.focussed.children.every(d => d.selected || d.data.color == colors.Uncollected_Node_Fill);
              for (let child of attrs.focussed.children) {
                if (allSelected){
                  select(child);  
                } else {
                  if (!child.selected){
                    select(child);
                  }
                }
              }
            }
      		
      		function select(d){
            		if (d.data.color == colors.Uncollected_Node_Fill) 
                  return;
            		
            		d.selected = !d.selected;
            		if (d.selected == false){
                  document.getElementById('select-all-button').checked = false;
                  svg.select("#" + d.parent.data.name.split(' ').join('-') + "-circle").attr('fill', nc.rgbaObjToColor(colors.White));
                } else {
                 	if (attrs.focussed){
                     const allSelected = attrs.focussed.children.every(d => d.selected || d.data.color == colors.Uncollected_Node_Fill);
                     if (allSelected){
                      	document.getElementById('select-all-button').checked = true;
                       	svg.select( "#" + d.parent.data.name.split(' ').join('-') + "-circle").attr('fill', nc.rgbaObjToColor(colors.Blue));
                     }
                  } else {
                     const allSelected = d.parent.children.every(d => d.selected || d.data.color == colors.Uncollected_Node_Fill);
                     if (allSelected){
                      	document.getElementById('select-all-button').checked = true;
                       	svg.select( "#" + d.parent.data.name.split(' ').join('-') + "-circle").attr('fill', nc.rgbaObjToColor(colors.Blue));
                     }
                  }
                }
            		
            
                    const parent = d.parent.data;
                    if (attrs.diversityValues[parent.name]) {
                      const index = attrs.diversityValues[parent.name].indexOf(d.data.name);
                      if (index > -1) {
                          attrs.diversityValues[parent.name].splice(index, 1);
                      } else {
                          attrs.diversityValues[parent.name].push(d.data.name);
                      }
                    } else if (attrs.academicValues[parent.name]) {
                      const index = attrs.academicValues[parent.name].indexOf(d.data.name);
                      if (index > -1) {
                          attrs.academicValues[parent.name].splice(index, 1);

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
                    
                  d3.selectAll('path.main-arc').style('opacity',(d) => d.selected ? 0.5 : 1.0);
          }

      
      		    		/* APPEND SELECT ALL CIRCLES */
      		//Helper methods
          const getCircleX = (radians, radius) =>
            Math.sin(radians) * radius;
      		const getCircleY = (radians, radius) =>
        		Math.cos(radians) * radius;
      
      		const attributeSlices = newSlice.filter((d) => d.parent && d.parent.parent == null && d.children!=null);
      		attributeSlices
            			.append('circle')
      						.attr('class', 'select-all-circles')
      						.attr('id', d => d.data.name.split(' ').join('-') + "-circle")
      						.attr('r', '8px')
      						.attr('cx', d => {
            				let radians = x(d.x0) + (x(d.x1) - x(d.x0))/2;
            				let cx =  getCircleX(radians, y(d.y1));
            				return cx;
          				})
      						.attr('cy', d => {

            					let radians = x(d.x0) + (x(d.x1) - x(d.x0))/2;
            					let cy =  -getCircleY(radians, y(d.y1));
            					return cy;
          				})
      						.attr('stroke', 'white')
      						.style('stroke-width',1)
      						.attr('fill', this.rgbaObjToColor(colors.White))
      						.on('click', d => {
            							console.log("clciked select all");
            							attrs.focussed = d;
            							selectAll();
            							attrs.focussed = null;
                        	this.renderSelectedAttributes();
                    });
      
      
      	
      		/* CREATE CENTER CIRCLE */
         let innerRadius = y(0.3333333); 
         let centerGroup = svg
              .append('g')
             .attr('id', 'center-group-nodes');

          centerGroup.append('circle')
              .attr('id', 'center-circle-nodes')
              .attr('cx', 0)
              .attr('cy', 0)
              .attr('r', innerRadius)
              .attr('stroke', 'black')
              .style('stroke-width',0)
              .attr('fill', this.rgbaObjToColor(colors.Slate_Grey));
          
          textCircle = centerGroup
              .append('foreignObject')
              .attr('x', -innerRadius)
              .attr('y', -innerRadius/2)
          		.attr('dy', -1)
          		.attr('width',  innerRadius*2)
    					.attr('height',  innerRadius*2)
              .style('font-size', attrs.centerTextSize)
          		.append('xhtml:p')
                .text(attrs.placeholderInnerText);
      					
      		document.getElementById('back-button-nodes').onclick = () => focusOn();
  				document.getElementById('back-button-nodes').disabled = true;
           document.getElementById('back-button-nodes').style.backgroundColor = nc.rgbaObjToColor(colors.Disabled);
           document.getElementById('back-button-nodes').style.color = nc.rgbaObjToColor(colors.Disabled_Text);
           document.getElementById('center-group-nodes').style.display= 'block';
           document.getElementById('select-all-group').style.display= 'none';

          function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
              // Reset to top-level if no data point specified

            	if (d.x0==0 && d.x1==1 && d.y0 == 0 && d.y1==1){
                attrs.focussed = null;
                document.getElementById('back-button-nodes').disabled = true;
                 document.getElementById('back-button-nodes').style.backgroundColor = nc.rgbaObjToColor(colors.Disabled);
         				 document.getElementById('back-button-nodes').style.color = nc.rgbaObjToColor(colors.Disabled_Text);
                 document.getElementById('center-group-nodes').style.display= 'block';
                 document.getElementById('select-all-group').style.display= 'none';
                 for (const elem of document.getElementsByClassName('select-all-circles')){
                 	elem.style.display= 'block';
                }
              } else {
                attrs.focussed = d;
                  document.getElementById('back-button-nodes').disabled = false;
                	document.getElementById('back-button-nodes').style.backgroundColor = nc.rgbaObjToColor(colors.Button);
                	document.getElementById('back-button-nodes').style.color ='white';
                  document.getElementById('center-group-nodes').style.display= 'none';
                  document.getElementById('select-all-group').style.display= 'block';
                	for (const elem of document.getElementsByClassName('select-all-circles')){
                 		elem.style.display= 'none';
                	}
              }

              const transition = svg.transition()
                  .duration(750)
                  .tween('scale', () => {
                      const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                          yd = d3.interpolate(y.domain(), [d.y0, 1]);
                      return t => { x.domain(xd(t)); y.domain(yd(t)); };
                  });

            	if (attrs.focussed){
                	let center = transition.selectAll('g.slice')
            					.filter((n) => n.data.name == d.data.name);
                  center.select('path.main-arc')
                    .style('fill', nc.rgbaObjToColor(colors.Slate_Grey))
              			.style('stroke-width', '0px');
                	center.select('.arc-text')
                		.attr('fill',  nc.rgbaObjToColor(colors.White));
                	center.select('.arc-text1')
                		.attr('fill',  nc.rgbaObjToColor(colors.White));
              } else {
                let slices = transition.selectAll('g.slice');
                  slices.select('path.main-arc')
                    .style('fill',  n => nc.rgbaObjToColor(n.data.color || n.parent.data.color))
                		.style('stroke-width', (d) => d.data.name == '' ? '0px' : attrs.unclickedWidth);
                	slices.select('.arc-text')
                		.attr('fill',  nc.rgbaObjToColor(colors.Black));
                	slices.select('.arc-text1')
                		.attr('fill',  nc.rgbaObjToColor(colors.Black));
              }
            	
            
              transition.selectAll('path.main-arc')
                  .attrTween('d', d => () => arc(d));

              transition.selectAll('path.hidden-arc')
                  .attrTween('d', d => () => middleArcLine(d));

              transition.selectAll('.arc-text')
                  .attrTween('display', d => () => textFits(d) ? null : 'none');
           		
            	transition.selectAll('.arc-text1')
                  .attrTween('display', d => () => textFits(d) ? null : 'none');

              moveStackToFront(d);

              function moveStackToFront(elD) {
                  svg.selectAll('.slice').filter(d => d === elD)
                      .each(function(d) {
                          this.parentNode.appendChild(this);
                          if (d.parent) { moveStackToFront(d.parent); }
                      });
              }
          }
      
    
      


      
      
       	return this;
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
        .select('#sunburst-container')
        .node()
        .getBoundingClientRect().width - attrs.legendWidth;
      
      let title = d3
        .select('#viz-title-text')
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
        document.getElementById('back-button').onclick = attrs.displayNodes;
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
        .select('#sunburst-container')
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
              
  						console.log(slice);
            	console.log(percent + ": " + count + " : " + sum);
              
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
        .select('#sunburst-container')
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
        	 		 //sb.render(academicValues, diversityValues);
             	sb.initialRender(academicValues, diversityValues);
           }
        } else {
           alert('Please wait for the data to finish loading');
        }
    }
    
    function displayInfo(){
      console.log("open");
      document.getElementById('info-div').style.display = 'block';
    }
    
    function hideInfo(){
       document.getElementById('info-div').style.display = 'none';
    }
    
    let ht = new Chart()
       .container('#chart-container')
       .svgWidth(window.innerWidth-200)
       .svgHeight(window.innerWidth)
       .initialZoom(0.3)
       .render();

    new Sunburst()
           .container('#sunburst-container')
    			 .displayNodes(displayNodes)
      		 .setup('https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/00827b9d532883343191f6144d41d0a0bbad5df8/fall.csv')
  				 .then(value => sb = value);
  });

}());

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwibmF2aS1jbGFzcy5qcyIsInN1bmJ1cnN0LWNsYXNzLmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSU5WSVNJQkxFX05PREUgPSAnSU5WSVNJQkxFJztcbmNvbnN0IFJFUE9SVF9OT0RFID0gJ1JFUE9SVCc7XG5cbmNvbnN0IEVESV9BVFRSSUJVVEVfTk9ERSA9ICdFRElfQVRUUklCVVRFJztcbmNvbnN0IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFID0gJ09USEVSX0FUVFJJQlVURSc7XG5jb25zdCBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSA9ICdVTkNPTExFQ1RFRF9BVFRSSUJVVEUnO1xuXG5jb25zdCBWQUxVRV9OT0RFID0gJ1ZBTFVFJztcbmNvbnN0IFVOQ09MTEVDVEVEX1ZBTFVFX05PREUgPSAnVU5DT0xMRUNURURfVkFMVUUnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgUmVwb3J0X05vZGVfRmlsbDoge1wicmVkXCI6MzEsXCJncmVlblwiOjEyMCxcImJsdWVcIjoxODAsXCJhbHBoYVwiOjF9LFxuICBEaXZlcnNpdHlfTm9kZV9GaWxsOiB7XCJyZWRcIjo1MSxcImdyZWVuXCI6MTYwLFwiYmx1ZVwiOjQ0LFwiYWxwaGFcIjoxfSxcbiAgQWNhZGVtaWNfTm9kZV9GaWxsOiB7XCJyZWRcIjoxNjYsXCJncmVlblwiOjIwNixcImJsdWVcIjoyMjcsXCJhbHBoYVwiOjF9LFxuICBVbmNvbGxlY3RlZF9Ob2RlX0ZpbGw6IHtcInJlZFwiOjEyOCxcImdyZWVuXCI6MTI4LFwiYmx1ZVwiOjEyOCxcImFscGhhXCI6MX0sXG4gIFRyYW5zcGFyZW50OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjB9LFxuICBXaGl0ZToge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjoxfSxcbiAgQmx1ZToge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbGFjazoge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjowLFwiYWxwaGFcIjoxfSxcbiAgR3JleToge1wicmVkXCI6MTQxLFwiZ3JlZW5cIjoxNjAsXCJibHVlXCI6MjAzLFwiYWxwaGFcIjoxfSxcblx0R3JlZW46IHtcInJlZFwiOjEwMixcImdyZWVuXCI6MTk0LFwiYmx1ZVwiOjE2NSxcImFscGhhXCI6MX0sXG4gIE9yYW5nZToge1wicmVkXCI6MjUyLFwiZ3JlZW5cIjoxNDEsXCJibHVlXCI6OTgsXCJhbHBoYVwiOiAxfSxcbiAgU2xhdGVfR3JleSA6IHtcInJlZFwiOjYxLFwiZ3JlZW5cIjo3MixcImJsdWVcIjo3MyxcImFscGhhXCI6MX0sXG4gIEJ1dHRvbjoge1wicmVkXCI6MTAwLFwiZ3JlZW5cIjoxMDAsXCJibHVlXCI6MTAwLFwiYWxwaGFcIjoxfSxcbiAgRGlzYWJsZWQ6IHtcInJlZFwiOjEwMCxcImdyZWVuXCI6MTAwLFwiYmx1ZVwiOjEwMCxcImFscGhhXCI6MC4yfSxcbiAgRGlzYWJsZWRfVGV4dDoge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjowLjJ9LFxufVxuXG4gICAgIGV4cG9ydCBjb25zdCBpbml0aWFsTm9kZXMgPSB7XG4gIEVucm9sbGVkOiB7XG4gICAgdHlwZTogUkVQT1JUX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgbnVtYmVyIG9mIHN0dWRlbnRzIHRoYXQgYXJlIGVucm9sbGVkLidcbiAgfSxcbiAgRmFjdWx0eToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnU1RFTScsICdOb24tU1RFTScsICdFbmdpbmVlcmluZyAmIERlc2lnbicsICdTY2llbmNlJywgJ1B1YmxpYyBBZmZhaXJzJywgJ0J1c2luZXNzJywgJ0FydHMgJiBTb2NpYWwgU2NpZW5jZXMnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdHcm91cHMgb2YgdW5pdmVyc2l0eSBkZXBhcnRtZW50cyBjb25jZXJuZWQgd2l0aCBhIG1ham9yIGRpdmlzaW9uIG9mIGtub3dsZWRnZS4gVGhlIGZhY3VsdHkgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGVpciBtYWpvciBvciBtYWpvcnMuJ1xuICB9LFxuICAnQWNhZGVtaWMgWWVhcic6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJzIwMTMvMTQnLFxuICAgICAgJzIwMTQvMTUnLFxuICAgICAgJzIwMTUvMTYnLFxuICAgICAgJzIwMTYvMTcnLFxuICAgICAgJzIwMTcvMTgnLFxuICAgICAgJzIwMTgvMTknLFxuICAgICAgJzIwMTkvMjAnLFxuICAgICAgJzIwMjAvMjEnLF0sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBlcmlvZCBvZiB0aGUgeWVhciB3aGljaCBzdHVkZW50cyBhdHRlbmQgYW4gZWR1Y2F0aW9uYWwgaW5zdGl0dXRpb24uIFRoZSBhY2FkZW1pYyB5ZWFyIGNvbnNpc3RzIG9mIHRocmVlIHRlcm1zIChTdW1tZXIsIEZhbGwgYW5kIFdpbnRlcikuIFRoZSBhY2FkZW1pYyB5ZWFyIG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlIHllYXIgdGhhdCB0aGV5IGFyZSBzdHVkeWluZy4nLFxuICAgIG9yZGVyZWQ6IHRydWVcbiAgfSxcbiAgRGVncmVlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydCYWNoZWxvcnMnLFxuICAgICAgJ01hc3RlcnMnLFxuICAgICAgJ1BoLkQuJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxldmVscyBvZiBxdWFsaWZpY2F0aW9uIG9mZmVyZWQgYnkgYWNhZGVtaWMgaW5zdGl0dWl0aW9ucy4gVGhlIGRlZ3JlZSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIGxldmVsIG9mIHN0dWR5LicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuIFxuICAnU3R1ZHkgU3RhdHVzJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHRoZSBhbW91bnQgb2YgY291cnNlcyB0aGF0IGEgc3R1ZGVudCBpcyB0YWtpbmcuIFN0dWRlbnRzIGVucm9sbGluZyBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciBhcmUgZnVsbC10aW1lIHN0dWRlbnRzLiBXaGVyZWFzIHN0dWRlbnRzIGVucm9sbGluZyBpbiBsZXNzIHRoYW4gMyBjcmVkaXRzIGFyZSBwYXJ0LXRpbWUgc3R1ZGVudHMuJ1xuICB9LFxuICAnQ2l0aXplbnNoaXAgU3RhdHVzJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnRG9tZXN0aWMnLFxuICAgICAgJ0ludGVybmF0aW9uYWwnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHR1aXRpb24gZmVlIHRoYXQgYSBzdHVkZW50IHBheXMuIFRoZSBzdHVkZW50cyB1bml2ZXJzaXR5IHR1aXRpb24gZmVlIGFtb3VudCBkZXRlcm1pbmVzIHRoZWlyIGNpdGl6ZW5zaGlwIHN0YXR1cy4nXG4gIH0sXG4gIEFnZToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFtcbiAgICAgICc8PTE3JyxcbiAgICAgICcxOC0yMCcsXG4gICAgICAnMjEtMjUnLFxuICAgICAgJzI2LTMwJyxcbiAgICAgICczMS0zNScsXG4gICAgICAnMzYtNDUnLFxuICAgICAgJzQ2LTU1JyxcbiAgICAgICc1NSsnLFxuICAgIF0sXG4gICAgdW5jb2xsZWN0ZWRWYWx1ZXM6IFsnNTUtNTknLCc2MC02NCcsJzY1LTY5JywgJzcwLTc0JywgJzc1LTc5JywgJzgwKyddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBsZW5ndGggb2YgdGltZSB0aGF0IGEgc3R1ZGVudCBoYXMgbGl2ZWQuIFRoZSBhZ2Ugb2YgYSBzdHVkZW50IG1hcHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBhZ2UgaW50ZXJ2YWwuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIGRhdGUgb2YgYmlydGggYW5kIGRldGVybWluZXMgdGhlaXIgYWdlLicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0ZlbWFsZScsICdNYWxlJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnTm9uLWJpbmFyeSddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBwaHlzaWNhbCBkaWZmZXJlbmNlcyBiZXR3ZWVuIHN0dWRlbnRzIGJhc2VkIG9uIGFuYXRvbWljYWwgYW5kIHBoeXNpb2xvZ2ljYWwgY2hhcmFjdGVyaXN0aWNzLiBUaGUgcmVnaXN0cmF0aW9uIGFwcGxpY2F0aW9uIHJlY29yZHMgYSBzdHVkZW50XFwncyBzZXggKGxhYmVsbGVkIGFzIGdlbmRlciBvbiB0aGUgYXBwbGljYXRpb24pLiBBIHN0dWRlbnQgbWF5IGZpbGUgYSBmb3JtIHRvIHJlcXVlc3QgYSBcXFwiR2VuZGVyIENoYW5nZSBBc3NpZ25tZW50XFxcIiB0byBjaGFuZ2UgdGhpcyBmaWVsZC4gVGhpcyBmaWVsZCBjb250YWlucyBhIG1peHR1cmUgb2YgZ2VuZGVyIGFuZCBzZXguIEEgZ3Jvd2luZyBwb3B1bGF0aW9uIG9mIHN0dWRlbnRzIGNob29zZSBub3QgdG8gZGlzY2xvc2UgdGhlaXIgZ2VuZGVyL3NleCB3aXRoIGEgXFwnUHJlZmVyIG5vdCB0byByZXBvcnRcXCcgb3B0aW9uLiBXZSBhcmUgdW5zdXJlIGhvdyB0aGlzIG1hcHMgdG8gdGhlIHR3byBhdmFpbGFibGUgY2F0ZWdvcmllcyBvZiBcXCdtYWxlXFwnIGFuZCBcXCdmZW1hbGVcXCcuJ1xuXHR9LFxuICBSYWNlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuXHR9LFxuICAnUmVsaWdpb24vU3Bpcml0dWFsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ1JlZ2lvbmFsIElkZW50aXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ0Rpcy9hYmlsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgSW5kaWdlbmVpdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydGaXJzdCBOYXRpb25zJywgJ01ldGlzJywgJ0ludWl0J10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGluZGlnZW5laXR5IG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdGaXJzdCBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdPdGhlciBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdFdGhuaWNpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnTmF0aW9uJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbn1cblxuXG5leHBvcnQgY29uc3Qgbm9kZXMgPSB7XG4gICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgXHRcdFx0XHQgXCJib3JkZXJXaWR0aFwiOiBcIjBweFwiLFxuICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJGYWN1bHR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgICAgICAgICAgXHRkZXNjcmlwdGlvbjogJ0dyb3VwcyBvZiB1bml2ZXJzaXR5IGRlcGFydG1lbnRzIGNvbmNlcm5lZCB3aXRoIGEgbWFqb3IgZGl2aXNpb24gb2Yga25vd2xlZGdlLiBUaGUgZmFjdWx0eSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIG1ham9yIG9yIG1ham9ycy4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJTVEVNXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIk5vbi1TVEVNXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkVuZ2luZWVyaW5nICYgRGVzaWduXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlNjaWVuY2VcIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiUHVibGljIEFmZmFpcnNcIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiQnVzaW5lc3NcIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgIFx0e1wibmFtZVwiOiBcIkFydHMgJiBTb2NpYWwgU2NpZW5jZXNcIiwgXCJzaXplXCI6IDEyfVxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWNhZGVtaWMgWWVhclwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgcGVyaW9kIG9mIHRoZSB5ZWFyIHdoaWNoIHN0dWRlbnRzIGF0dGVuZCBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGlvbi4gVGhlIGFjYWRlbWljIHllYXIgY29uc2lzdHMgb2YgdGhyZWUgdGVybXMgKFN1bW1lciwgRmFsbCBhbmQgV2ludGVyKS4gVGhlIGFjYWRlbWljIHllYXIgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGUgeWVhciB0aGF0IHRoZXkgYXJlIHN0dWR5aW5nLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTMvMTRcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE0LzE1XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxNS8xNlwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTYvMTdcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE3LzE4XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxOC8xOVwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTkvMjBcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDIwLzIxXCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG5cdFx0XHRcdFx0XHR7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGVncmVlXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBsZXZlbHMgb2YgcXVhbGlmaWNhdGlvbiBvZmZlcmVkIGJ5IGFjYWRlbWljIGluc3RpdHVpdGlvbnMuIFRoZSBkZWdyZWUgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGVpciBsZXZlbCBvZiBzdHVkeS4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJCYWNoZWxvcnNcIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTWFzdGVyc1wiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJQaC5ELlwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJTdHVkeSBTdGF0dXNcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHRoZSBhbW91bnQgb2YgY291cnNlcyB0aGF0IGEgc3R1ZGVudCBpcyB0YWtpbmcuIFN0dWRlbnRzIGVucm9sbGluZyBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciBhcmUgZnVsbC10aW1lIHN0dWRlbnRzLiBXaGVyZWFzIHN0dWRlbnRzIGVucm9sbGluZyBpbiBsZXNzIHRoYW4gMyBjcmVkaXRzIGFyZSBwYXJ0LXRpbWUgc3R1ZGVudHMuJyxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlBhcnQtdGltZVwiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJGdWxsLXRpbWVcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2l0aXplbnNoaXAgU3RhdHVzXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjbGFzc2lmaWNhdGlvbiBvZiB0dWl0aW9uIGZlZSB0aGF0IGEgc3R1ZGVudCBwYXlzLiBUaGUgc3R1ZGVudHMgdW5pdmVyc2l0eSB0dWl0aW9uIGZlZSBhbW91bnQgZGV0ZXJtaW5lcyB0aGVpciBjaXRpemVuc2hpcCBzdGF0dXMuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiRG9tZXN0aWNcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiSW50ZXJuYXRpb25hbFwiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJBZ2VcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBsZW5ndGggb2YgdGltZSB0aGF0IGEgc3R1ZGVudCBoYXMgbGl2ZWQuIFRoZSBhZ2Ugb2YgYSBzdHVkZW50IG1hcHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBhZ2UgaW50ZXJ2YWwuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIGRhdGUgb2YgYmlydGggYW5kIGRldGVybWluZXMgdGhlaXIgYWdlLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjw9MTdcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIxOC0yMFwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIxLTI1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjYtMzBcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIzMS0zNVwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjM2LTQ1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNDYtNTVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI1NStcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI1NS01OVwiLCBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI2MC02NFwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNjUtNjlcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjcwLTc0XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI3NS03OVwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiODArXCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9XG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNleFwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBoeXNpY2FsIGRpZmZlcmVuY2VzIGJldHdlZW4gc3R1ZGVudHMgYmFzZWQgb24gYW5hdG9taWNhbCBhbmQgcGh5c2lvbG9naWNhbCBjaGFyYWN0ZXJpc3RpY3MuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIHNleCAobGFiZWxsZWQgYXMgZ2VuZGVyIG9uIHRoZSBhcHBsaWNhdGlvbikuIEEgc3R1ZGVudCBtYXkgZmlsZSBhIGZvcm0gdG8gcmVxdWVzdCBhIFxcXCJHZW5kZXIgQ2hhbmdlIEFzc2lnbm1lbnRcXFwiIHRvIGNoYW5nZSB0aGlzIGZpZWxkLiBUaGlzIGZpZWxkIGNvbnRhaW5zIGEgbWl4dHVyZSBvZiBnZW5kZXIgYW5kIHNleC4gQSBncm93aW5nIHBvcHVsYXRpb24gb2Ygc3R1ZGVudHMgY2hvb3NlIG5vdCB0byBkaXNjbG9zZSB0aGVpciBnZW5kZXIvc2V4IHdpdGggYSBcXCdQcmVmZXIgbm90IHRvIHJlcG9ydFxcJyBvcHRpb24uIFdlIGFyZSB1bmNlcnRhaW4gaG93IHRoaXMgbWFwcyB0byB0aGUgdHdvIGF2YWlsYWJsZSBjYXRlZ29yaWVzIG9mIFxcJ21hbGVcXCcgYW5kIFxcJ2ZlbWFsZVxcJy4nLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTWFsZVwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJGZW1hbGVcIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTm9uLWJpbmFyeVwiLCBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDI4fVxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJSYWNlXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOmNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICBcInNpemVcIjogODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVsaWdpb24vU3Bpcml0dWFsaXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOmNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJEaXMvYWJpbGl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkluZGlnZW5laXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxhbmd1YWdlcyBTcG9rZW5cIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJFdGhuaWNpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXRpb24vUmVnaW9uYWwgSWRlbnRpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgXVxufVxuXG5cblxuXG5cbiIsImltcG9ydCB7IG5vZGVzLCBjb2xvcnMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiA4MDAsXG4gICAgICBzdmdIZWlnaHQ6IDYwMCxcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGVmYXVsdFRleHRGaWxsOiAnIzJDM0U1MCcsXG4gICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICBkZWZhdWx0Rm9udDogJ0hlbHZldGljYScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgZGF0YTogbm9kZXMsXG4gICAgICBub2RlczogbnVsbCxcbiAgICAgIGNvbm5lY3RvckxldmVsczogMixcbiAgICAgIGRlcHRoOiAxODAsXG4gICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgc3Ryb2tlV2lkdGg6IDMsXG4gICAgICBpbml0aWFsWm9vbTogMSxcbiAgICAgIHRpdGxlVGV4dFNpemU6ICc0MHB4JyxcbiAgICAgIGNlbnRlclRleHRTaXplOiAnMjVweCcsXG4gICAgICBzbGljZVRleHRTaXplOiAnMjVweCcsXG4gICAgICBzcGxpdFNpemU6ICcwLjVlbScsXG4gICAgICAgY29sb3I6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIGFjYWRlbWljVmFsdWVzOiB7XG4gICAgICAgICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICBEZWdyZWU6IFsnVG90YWwnXSxcbiAgICAgICAgRmFjdWx0eTogWydUb3RhbCddLFxuICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydUb3RhbCddLFxuICAgICAgfSxcbiAgICAgIGRpdmVyc2l0eVZhbHVlczoge1xuICAgICAgICBBZ2U6IFtdLFxuICAgICAgICBTZXg6IFtdLFxuICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogW10sXG4gICAgICB9LFxuICAgICAgb25Ob2RlQ2xpY2s6IG51bGwsXG4gICAgICB0b29sdGlwRGl2OiBudWxsLFxuICAgICAgbnVtRXhwYW5kZWQ6IDAsXG4gICAgICB1bmNsaWNrZWRXaWR0aDogJzJweCcsXG4gICAgICBjbGlja2VkV2lkdGg6ICcxMHB4JyxcbiAgICAgIGZvY3Vzc2VkOiBudWxsLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQ6ICdFbnJvbGxlZCBTdHVkZW50cycsXG4gICAgICBjZW50ZXJYOiAwLFxuICAgICAgY2VudGVyWTogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDaGFydFN0YXRlID0gKCkgPT4gYXR0cnM7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIER5bmFtaWNhbGx5IHNldCBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMgZm9yIENoYXJ0IGNsYXNzXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIFxuICAgIC8vRGVmaW5lIHRpdGxlXG4gICAgZDMuc2VsZWN0KCcjbmF2LXRpdGxlLXRleHQnKVxuICAgIFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMudGl0bGVUZXh0U2l6ZSlcbiAgICBcdFx0XHQudGV4dCgnQ2FybGV0b24gVW5pdmVyc2l0eSBTdHVkZW50cyBDb2xsZWN0ZWQgXFwmIE1pc3NpbmcgRGVtb2dyYXBoaWNzIERhdGEnKTtcbiAgICBcbiAgXG5cdFx0dGhpcy5yZW5kZXJMZWdlbmQoKTtcbiAgICB0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgLy90aGlzLmluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCk7XG4gIH1cbiAgXG4gICAgIC8qIEZ1bmN0aW9uIGNvbnZlcnRzIHJnYmEgb2JqZWN0cyB0byByZ2JhIGNvbG9yIHN0cmluZyBcbiAgICB7cmVkOjExMCxncmVlbjoxNTAsYmx1ZToyNTUsYWxwaGE6MX0gID0+IHJnYmEoMTEwLDE1MCwyNTUsMSlcbiAgKi9cbiAgcmdiYU9ialRvQ29sb3IoeyByZWQsIGdyZWVuLCBibHVlLCBhbHBoYSB9KSB7XG4gICAgcmV0dXJuIGByZ2JhKCR7cmVkfSwke2dyZWVufSwke2JsdWV9LCR7YWxwaGF9KWA7XG4gIH1cbiAgXG4gICByZW5kZXJMZWdlbmQoKXtcbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgY29uc3QgbGVnZW5kID0gZDMuc2VsZWN0KCcjbm9kZS1sZWdlbmQnKTtcbiAgICBjb25zdCB3aWR0aCA9IDEyLCBoZWlnaHQgPSAxMjtcbiAgICBjb25zdCByZWN0QnVpbGRlciA9ICh4LCB5LCBjb2xvcikgPT4ge1xuICAgIFx0ICBsZWdlbmQgXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3IpKVxuICAgICAgXHRcdC5zdHlsZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHgsIHksIHRleHQsIHNpemUpID0+IHtcbiAgICAgICAgICBsZWdlbmRcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc2l6ZSlcbiAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB0ZXh0QnVpbGRlcig2MCwgMTAsICdMRUdFTkQnLCAnMjBweCcpO1xuICAgIHJlY3RCdWlsZGVyKDIwLCAzNCwgY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDY0LCBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDk0LCBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNDAsICdVbmNvbGxlY3RlZCBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNzAsICdEaXZlcnNpdHkgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gXHRcdHRleHRCdWlsZGVyKDQwLCAxMDAsICdBY2FkZW1pYyBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgfVxuICBcbiAgcmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKCl7XG4gICAgXHRjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gIFx0ICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KCcjc2VsZWN0ZWQtYXR0cmlidXRlcycpO1xuICAgIFx0IHNlbC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICBcbiAgXHRcdCBjb25zdCB0ZXh0QnVpbGRlciA9ICh4LCB5LCB0ZXh0LCBzaXplKSA9PiB7XG4gICAgICAgICAgc2VsXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAgIC50ZXh0KHRleHQpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHNpemUpXG4gICAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcdH1cbiAgICAgICBcbiAgICAgIGxldCB5ID0gMTA7XG4gICAgXHRsZXQgeCA9IDUwO1xuICAgICAgdGV4dEJ1aWxkZXIoeC00MCwgeSwgJ1NFTEVDVEVEIENBVEVHT1JJRVMnLCAnMTVweCcpO1xuICAgIFx0eSs9MzA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuYWNhZGVtaWNWYWx1ZXMpe1xuICAgICAgXHRpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMSB8fCAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAxICYmIGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdWzBdICE9PSAnVG90YWwnKSl7XG4gICAgICAgIFx0dGV4dEJ1aWxkZXIoeCwgeSwgJy0gJyArIGF0dHIsICcxNXB4Jyk7XG4gICAgICAgICAgeSs9MzA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICBcdGlmIChhdHRycy5kaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICB0ZXh0QnVpbGRlcih4LCB5LCAnLSAnICsgYXR0ciwgJzE1cHgnKTtcbiAgICAgICAgICB5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICBcdGNvbnN0IG5jID0gdGhpcztcbiAgICBcdGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKClcbiAgICAgIFxuICAgIFx0Y29uc3Qgd2lkdGggPSBhdHRycy5zdmdXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodCA9IGF0dHJzLnN2Z0hlaWdodCAsXG4gICAgICAgICAgICBtYXhSYWRpdXMgPSAoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyKSAtIDU7XG5cbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5yYW5nZShbMCwgMiAqIE1hdGguUEldKVxuICAgICAgICAgICAgLmNsYW1wKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAucmFuZ2UoW21heFJhZGl1cyouMSwgbWF4UmFkaXVzXSk7XG5cbiAgICAgICAgY29uc3QgcGFydGl0aW9uID0gZDMucGFydGl0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAgICAgICAgIC5zdGFydEFuZ2xlKGQgPT4geChkLngwKSlcbiAgICAgICAgICAgIC5lbmRBbmdsZShkID0+IHgoZC54MSkpXG4gICAgICAgICAgICAuaW5uZXJSYWRpdXMoZCA9PiBNYXRoLm1heCgwLCB5KGQueTApKSlcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyhkID0+IE1hdGgubWF4KDAsIHkoZC55MSkpKTtcblxuICAgICAgICBjb25zdCBtaWRkbGVBcmNMaW5lID0gZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYWxmUGkgPSBNYXRoLlBJLzI7XG4gICAgICAgICAgICBjb25zdCBhbmdsZXMgPSBbeChkLngwKSAtIGhhbGZQaSwgeChkLngxKSAtIGhhbGZQaV07XG4gICAgICAgICAgICBjb25zdCByID0gTWF0aC5tYXgoMCwgKHkoZC55MCkgKyB5KGQueTEpKSAvIDIpO1xuXHRcdFx0XHRcdFxuICAgICAgICAgICAgY29uc3QgbWlkZGxlQW5nbGUgPSAoYW5nbGVzWzFdICsgYW5nbGVzWzBdKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBpbnZlcnREaXJlY3Rpb24gPSBtaWRkbGVBbmdsZSA+IDAgJiYgbWlkZGxlQW5nbGUgPCBNYXRoLlBJOyAvLyBPbiBsb3dlciBxdWFkcmFudHMgd3JpdGUgdGV4dCBjY3dcbiAgICAgICAgICAgIGlmIChpbnZlcnREaXJlY3Rpb24pIHsgYW5nbGVzLnJldmVyc2UoKTsgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZDMucGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5hcmMoMCwgMCwgciwgYW5nbGVzWzBdLCBhbmdsZXNbMV0sIGludmVydERpcmVjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC50b1N0cmluZygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHRGaXRzID0gZCA9PiB7XG4gICAgICAgICAgXHRpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBDSEFSX1NQQUNFID0gNjtcblxuICAgICAgICAgICAgY29uc3QgZGVsdGFBbmdsZSA9IHgoZC54MSkgLSB4KGQueDApO1xuICAgICAgICAgICAgY29uc3QgciA9IE1hdGgubWF4KDAsICh5KGQueTApICsgeShkLnkxKSkgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHBlcmltZXRlciA9IHIgKiBkZWx0YUFuZ2xlO1xuXG4gICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUubGVuZ3RoICogQ0hBUl9TUEFDRSA8IHBlcmltZXRlcjtcbiAgICAgICAgfTtcblxuICAgIFx0XHRkMy5zZWxlY3QoXCIjbm9kZS1kaXZcIikuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpXG5cbiAgICBcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjY2hhcnQtY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcilcbiAgICAgICAgICAgIC5hdHRyKCd2aWV3Qm94JywgYCR7KC13aWR0aCsyNzUpIC8gMn0gJHsoLWhlaWdodC0xMjApIC8gMn0gJHt3aWR0aH0gJHtoZWlnaHR9YClcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoKSA9PiBmb2N1c09uKCkpOyAvLyBSZXNldCB6b29tIG9uIGNhbnZhcyBjbGlja1xuXG4gICAgXG5cdFx0XHQgXHRsZXQgdGV4dENpcmNsZTtcblxuICAgIFx0XHRsZXQgcm9vdCA9IG5vZGVzXG4gICAgICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkocm9vdCk7XG4gICAgICAgIHJvb3Quc3VtKGQgPT4gZC5zaXplKTtcblxuICAgIFx0XHRyb290LmRlc2NlbmRhbnRzKCkubWFwKGQgPT57XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBzcGxpdCA9IGQuZGF0YS5uYW1lLmluY2x1ZGVzKFwiIFwiKSB8fCBkLmRhdGEubmFtZS5pbmNsdWRlcyhcIi9cIik7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICBzcGxpdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgXHRcdFxuICAgIFx0XHRjb25zdCBzb3J0ZWROb2RlcyA9IHBhcnRpdGlvbihyb290KS5kZXNjZW5kYW50cygpLnNvcnQoKGQxLCBkMikgPT4ge1xuICAgICAgICBcdCBpZiAoZDEuY2hpbGRyZW4gJiYgIWQyLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIFx0cmV0dXJuIDE7IFxuICAgICAgICAgICB9IFxuICAgICAgICAgICBpZiAoIWQxLmNoaWxkcmVuICYmIGQyLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIFx0cmV0dXJuIC0xOyBcbiAgICAgICAgICAgfVxuICAgICAgICAgIFx0cmV0dXJuIDA7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc2xpY2UgPSBzdmcuc2VsZWN0QWxsKCdnLnNsaWNlJylcbiAgICAgICAgICAgIC5kYXRhKHNvcnRlZE5vZGVzKTtcblx0XHRcdFxuICAgICAgICBzbGljZS5leGl0KCkucmVtb3ZlKCk7XG5cblx0XHRcdFx0LyogR0VUL1NFVCBTTElDRVMgKi9cbiAgICAgICAgY29uc3QgbmV3U2xpY2UgPSBzbGljZS5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnc2xpY2UnKVxuICAgICAgICBcdFx0Lm9uKCdtb3VzZW92ZXInLCBkID0+IHtcbiAgICAgICAgICAgICAgaWYgKGQuZGF0YS5uYW1lID09ICdTZXgnKXtcbiAgICAgICAgICAgICAgXHR0ZXh0Q2lyY2xlLnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRleHRDaXJjbGUudGV4dChkLmRhdGEuZGVzY3JpcHRpb24pICAgICAgIFxuICAgICAgICAgICAgfSkub24oJ21vdXNlb3V0JywgZCA9PiB7XG4gICAgICAgICAgICAgICB0ZXh0Q2lyY2xlLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQpLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5jZW50ZXJUZXh0U2l6ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZCA9PiB7XG4gICAgICAgICAgICAgIFx0aWYgKFsuLi5kMy5ldmVudC5zcmNFbGVtZW50LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ3NlbGVjdC1hbGwtY2lyY2xlcycpKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIFx0XHRjb25zb2xlLmxvZyhcImNsY2lrZWQgYXJjXCIpO1xuICAgICAgICAgICAgICBcdGlmIChkLmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgICAgIGZvY3VzT24oZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdChkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKClcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgbmV3U2xpY2UuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdtYWluLWFyYycpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAgZCA9PiB0aGlzLnJnYmFPYmpUb0NvbG9yKGQuZGF0YS5jb2xvciB8fCBkLnBhcmVudC5kYXRhLmNvbG9yKSlcbiAgICAgXHRcdFx0XHQuc3R5bGUoJ3N0cm9rZScsICd3aGl0ZScpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIChkKSA9PiBkLmRhdGEubmFtZSA9PSAnJyA/ICcwcHgnIDogYXR0cnMudW5jbGlja2VkV2lkdGgpXG4gICAgICAgICAgICAuYXR0cignZCcsIGFyYyk7XG5cbiAgICBcdFxuICAgIFx0XHRuZXdTbGljZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdoaWRkZW4tYXJjJylcbiAgICAgICAgICAgICAgICAuYXR0cignaWQnLCAoXywgaSkgPT4gYGhpZGRlbkFyYyR7aX1gKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgbWlkZGxlQXJjTGluZSk7XG5cdFx0XHRcdFxuIFxuICAgIFx0XHQvKiBBUFBFTkQgVEVYVCAqL1xuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3U2xpY2VcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJjLXRleHQnKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMuc2xpY2VUZXh0U2l6ZSlcbiAgICAgICAgICAuYXR0cignZGlzcGxheScsIChkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZC5wYXJlbnQgJiYgZC5wYXJlbnQucGFyZW50ID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIHJldHVybiB0ZXh0Rml0cyhkKSA/IG51bGwgOiAnbm9uZSdcbiAgICAgICAgICB9KS5hdHRyKCdkeScsIChkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZC5zcGxpdCl7XG4gICAgICAgICAgICAgcmV0dXJuIChkLmludmVydGVkID8gXCItXCIgOiBcIitcIikgKyBhdHRycy5zcGxpdFNpemU7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmV0dXJuIFwiMGVtXCJcbiAgICAgICAgICB9KTtcblxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLmFwcGVuZCgndGV4dFBhdGgnKVxuICAgICAgICAgIC5hdHRyKCdzdGFydE9mZnNldCcsICc1MCUnKVxuICAgICAgICAgIC5hdHRyKCd4bGluazpocmVmJywgKF8sIGkpID0+IGAjaGlkZGVuQXJjJHtpfWApXG4gICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgIGlmIChkLnNwbGl0ICYmIChkLmNoaWxkcmVuIT1udWxsIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKSl7XG4gICAgICAgICAgICAgIGlmIChkLmRhdGEubmFtZS5pbmNsdWRlcyhcIi9cIikpe1xuICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIi9cIilbZC5pbnZlcnRlZCA/IDAgOiAxXVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUuc3BsaXQoXCIgXCIpW2QuaW52ZXJ0ZWQgPyAwIDogMV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHQxID0gbmV3U2xpY2VcbiAgICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdhcmMtdGV4dDEnKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLnNsaWNlVGV4dFNpemUpXG4gICAgICAgICAgICAgIC5hdHRyKCdkeScsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZC5zcGxpdCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZC5pbnZlcnRlZCA/IFwiK1wiIDogXCItXCIpICthdHRycy5zcGxpdFNpemU7XG4gICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIHJldHVybiBcIjBlbVwiXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0ZXh0MVxuICAgICAgICAgICAgICAuYXBwZW5kKCd0ZXh0UGF0aCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdzdGFydE9mZnNldCcsICc1MCUnKVxuICAgICAgICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIChfLCBpKSA9PiBgI2hpZGRlbkFyYyR7aX1gKVxuICAgICAgICAgICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkLnNwbGl0ICYmIChkLmNoaWxkcmVuIT1udWxsIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKSl7XG4gICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLnNwbGl0KFwiL1wiKVtkLmludmVydGVkID8gMSA6IDBdXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLnNwbGl0KFwiIFwiKVtkLmludmVydGVkID8gMSA6IDBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICAgIH0pO1xuXHRcdFx0XHRcblxuXG5cbiAgICBcbiAgICBcdFx0LyogSEFORExFIFNFTEVDVCBBTEwgKi9cbiAgICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtYnV0dG9uJykub25jbGljayA9IHNlbGVjdEFsbDtcbiAgICBcdFx0ZnVuY3Rpb24gc2VsZWN0QWxsKCkge1xuICAgICAgICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSBhdHRycy5mb2N1c3NlZC5jaGlsZHJlbi5ldmVyeShkID0+IGQuc2VsZWN0ZWQgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBhdHRycy5mb2N1c3NlZC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICBpZiAoYWxsU2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgIHNlbGVjdChjaGlsZCk7ICBcbiAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGQuc2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgICAgc2VsZWN0KGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgXHRcdFxuICAgIFx0XHRmdW5jdGlvbiBzZWxlY3QoZCl7XG4gICAgICAgICAgXHRcdGlmIChkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIFx0XHRcbiAgICAgICAgICBcdFx0ZC5zZWxlY3RlZCA9ICFkLnNlbGVjdGVkXG4gICAgICAgICAgXHRcdGlmIChkLnNlbGVjdGVkID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdmcuc2VsZWN0KFwiI1wiICsgZC5wYXJlbnQuZGF0YS5uYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgXCItY2lyY2xlXCIpLmF0dHIoJ2ZpbGwnLCBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuV2hpdGUpKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgXHRpZiAoYXR0cnMuZm9jdXNzZWQpe1xuICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gYXR0cnMuZm9jdXNzZWQuY2hpbGRyZW4uZXZlcnkoZCA9PiBkLnNlbGVjdGVkIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKVxuICAgICAgICAgICAgICAgICAgIGlmIChhbGxTZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtYnV0dG9uJykuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgIFx0c3ZnLnNlbGVjdCggXCIjXCIgKyBkLnBhcmVudC5kYXRhLm5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyBcIi1jaXJjbGVcIikuYXR0cignZmlsbCcsIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CbHVlKSlcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IGQucGFyZW50LmNoaWxkcmVuLmV2ZXJ5KGQgPT4gZC5zZWxlY3RlZCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbClcbiAgICAgICAgICAgICAgICAgICBpZiAoYWxsU2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICBcdHN2Zy5zZWxlY3QoIFwiI1wiICsgZC5wYXJlbnQuZGF0YS5uYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgXCItY2lyY2xlXCIpLmF0dHIoJ2ZpbGwnLCBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmx1ZSkpXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIFx0XHRcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGQucGFyZW50LmRhdGFcbiAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXS5pbmRleE9mKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnQubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnQubmFtZV0ucHVzaChkLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmluZGV4T2YoZC5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ubGVuZ3RoID09IDApIHsvL2lmIGVtcHR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5wdXNoKCdUb3RhbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ubGVuZ3RoID09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdWzBdID09ICdUb3RhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAnVG90YWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLnB1c2goZC5kYXRhLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmFjYWRlbWljVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwgKj0gYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV0FSTklORzogQWRkaW5nIG1vcmUgYWNhZGVtaWMgYXR0cmlidXRlcyBtYXkgcmVzdWx0IGluIGxvdyB2aXNpYmlsaXR5IGluIHRoZSB2aXN1YWxpemF0aW9uLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFx0IH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgncGF0aC5tYWluLWFyYycpLnN0eWxlKCdvcGFjaXR5JywoZCkgPT4gZC5zZWxlY3RlZCA/IDAuNSA6IDEuMCk7XG4gICAgICAgIH1cblxuICAgIFxuICAgIFx0XHQgICAgXHRcdC8qIEFQUEVORCBTRUxFQ1QgQUxMIENJUkNMRVMgKi9cbiAgICBcdFx0Ly9IZWxwZXIgbWV0aG9kc1xuICAgICAgICBjb25zdCBnZXRDaXJjbGVYID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgICAgICBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBcdFx0Y29uc3QgZ2V0Q2lyY2xlWSA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBcdFx0TWF0aC5jb3MocmFkaWFucykgKiByYWRpdXM7XG4gICAgXG4gICAgXHRcdGNvbnN0IGF0dHJpYnV0ZVNsaWNlcyA9IG5ld1NsaWNlLmZpbHRlcigoZCkgPT4gZC5wYXJlbnQgJiYgZC5wYXJlbnQucGFyZW50ID09IG51bGwgJiYgZC5jaGlsZHJlbiE9bnVsbCk7XG4gICAgXHRcdGF0dHJpYnV0ZVNsaWNlc1xuICAgICAgICAgIFx0XHRcdC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3NlbGVjdC1hbGwtY2lyY2xlcycpXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZCA9PiBkLmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdyJywgJzhweCcpXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ2N4JywgZCA9PiB7XG4gICAgICAgICAgXHRcdFx0XHRsZXQgcmFkaWFucyA9IHgoZC54MCkgKyAoeChkLngxKSAtIHgoZC54MCkpLzI7XG4gICAgICAgICAgXHRcdFx0XHRsZXQgY3ggPSAgZ2V0Q2lyY2xlWChyYWRpYW5zLCB5KGQueTEpKTtcbiAgICAgICAgICBcdFx0XHRcdHJldHVybiBjeDtcbiAgICAgICAgXHRcdFx0XHR9KVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdjeScsIGQgPT4ge1xuXG4gICAgICAgICAgXHRcdFx0XHRcdGxldCByYWRpYW5zID0geChkLngwKSArICh4KGQueDEpIC0geChkLngwKSkvMjtcbiAgICAgICAgICBcdFx0XHRcdFx0bGV0IGN5ID0gIC1nZXRDaXJjbGVZKHJhZGlhbnMsIHkoZC55MSkpO1xuICAgICAgICAgIFx0XHRcdFx0XHRyZXR1cm4gY3k7XG4gICAgICAgIFx0XHRcdFx0fSlcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcbiAgICBcdFx0XHRcdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsMSlcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICBcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZCA9PiB7XG4gICAgICAgICAgXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNsY2lrZWQgc2VsZWN0IGFsbFwiKTtcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdGF0dHJzLmZvY3Vzc2VkID0gZDtcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdHNlbGVjdEFsbCgpO1xuICAgICAgICAgIFx0XHRcdFx0XHRcdFx0YXR0cnMuZm9jdXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5yZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgXG4gICAgXHRcbiAgICBcdFx0LyogQ1JFQVRFIENFTlRFUiBDSVJDTEUgKi9cbiAgICAgICBsZXQgaW5uZXJSYWRpdXMgPSB5KDAuMzMzMzMzMykgXG4gICAgICAgbGV0IGNlbnRlckdyb3VwID0gc3ZnXG4gICAgICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2NlbnRlci1ncm91cC1ub2RlcycpXG5cbiAgICAgICAgY2VudGVyR3JvdXAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2NlbnRlci1jaXJjbGUtbm9kZXMnKVxuICAgICAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAgICAgICAuYXR0cigncicsIGlubmVyUmFkaXVzKVxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsMClcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSkpO1xuICAgICAgICBcbiAgICAgICAgdGV4dENpcmNsZSA9IGNlbnRlckdyb3VwXG4gICAgICAgICAgICAuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgLWlubmVyUmFkaXVzKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCAtaW5uZXJSYWRpdXMvMilcbiAgICAgICAgXHRcdC5hdHRyKCdkeScsIC0xKVxuICAgICAgICBcdFx0LmF0dHIoJ3dpZHRoJywgIGlubmVyUmFkaXVzKjIpXG4gIFx0XHRcdFx0XHQuYXR0cignaGVpZ2h0JywgIGlubmVyUmFkaXVzKjIpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLmNlbnRlclRleHRTaXplKVxuICAgICAgICBcdFx0LmFwcGVuZCgneGh0bWw6cCcpXG4gICAgICAgICAgICAgIC50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0KVxuICAgIFx0XHRcdFx0XHRcbiAgICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykub25jbGljayA9ICgpID0+IGZvY3VzT24oKTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkKTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmNvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkX1RleHQpO1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlbnRlci1ncm91cC1ub2RlcycpLnN0eWxlLmRpc3BsYXk9ICdibG9jayc7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1ncm91cCcpLnN0eWxlLmRpc3BsYXk9ICdub25lJztcblxuICAgICAgICBmdW5jdGlvbiBmb2N1c09uKGQgPSB7IHgwOiAwLCB4MTogMSwgeTA6IDAsIHkxOiAxIH0pIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRvIHRvcC1sZXZlbCBpZiBubyBkYXRhIHBvaW50IHNwZWNpZmllZFxuXG4gICAgICAgICAgXHRpZiAoZC54MD09MCAmJiBkLngxPT0xICYmIGQueTAgPT0gMCAmJiBkLnkxPT0xKXtcbiAgICAgICAgICAgICAgYXR0cnMuZm9jdXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuRGlzYWJsZWQpO1xuICAgICAgIFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmNvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkX1RleHQpO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlbnRlci1ncm91cC1ub2RlcycpLnN0eWxlLmRpc3BsYXk9ICdibG9jayc7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1ncm91cCcpLnN0eWxlLmRpc3BsYXk9ICdub25lJztcbiAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QtYWxsLWNpcmNsZXMnKSl7XG4gICAgICAgICAgICAgICBcdGVsZW0uc3R5bGUuZGlzcGxheT0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXR0cnMuZm9jdXNzZWQgPSBkO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJ1dHRvbik7XG4gICAgICAgICAgICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuY29sb3IgPSd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlbnRlci1ncm91cC1ub2RlcycpLnN0eWxlLmRpc3BsYXk9ICdub25lJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1ncm91cCcpLnN0eWxlLmRpc3BsYXk9ICdibG9jayc7XG4gICAgICAgICAgICAgIFx0Zm9yIChjb25zdCBlbGVtIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdC1hbGwtY2lyY2xlcycpKXtcbiAgICAgICAgICAgICAgIFx0XHRlbGVtLnN0eWxlLmRpc3BsYXk9ICdub25lJztcbiAgICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBzdmcudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgICAgICAgICAudHdlZW4oJ3NjYWxlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ZCA9IGQzLmludGVycG9sYXRlKHguZG9tYWluKCksIFtkLngwLCBkLngxXSksXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZCA9IGQzLmludGVycG9sYXRlKHkuZG9tYWluKCksIFtkLnkwLCAxXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0+IHsgeC5kb21haW4oeGQodCkpOyB5LmRvbWFpbih5ZCh0KSk7IH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBcdGlmIChhdHRycy5mb2N1c3NlZCl7XG4gICAgICAgICAgICAgIFx0bGV0IGNlbnRlciA9IHRyYW5zaXRpb24uc2VsZWN0QWxsKCdnLnNsaWNlJylcbiAgICAgICAgICBcdFx0XHRcdFx0LmZpbHRlcigobikgPT4gbi5kYXRhLm5hbWUgPT0gZC5kYXRhLm5hbWUpXG4gICAgICAgICAgICAgICAgY2VudGVyLnNlbGVjdCgncGF0aC5tYWluLWFyYycpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSkpXG4gICAgICAgICAgICBcdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcwcHgnKVxuICAgICAgICAgICAgICBcdGNlbnRlci5zZWxlY3QoJy5hcmMtdGV4dCcpXG4gICAgICAgICAgICAgIFx0XHQuYXR0cignZmlsbCcsICBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuV2hpdGUpKVxuICAgICAgICAgICAgICBcdGNlbnRlci5zZWxlY3QoJy5hcmMtdGV4dDEnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBzbGljZXMgPSB0cmFuc2l0aW9uLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgICAgICAgc2xpY2VzLnNlbGVjdCgncGF0aC5tYWluLWFyYycpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAgbiA9PiBuYy5yZ2JhT2JqVG9Db2xvcihuLmRhdGEuY29sb3IgfHwgbi5wYXJlbnQuZGF0YS5jb2xvcikpXG4gICAgICAgICAgICAgIFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIChkKSA9PiBkLmRhdGEubmFtZSA9PSAnJyA/ICcwcHgnIDogYXR0cnMudW5jbGlja2VkV2lkdGgpXG4gICAgICAgICAgICAgIFx0c2xpY2VzLnNlbGVjdCgnLmFyYy10ZXh0JylcbiAgICAgICAgICAgICAgXHRcdC5hdHRyKCdmaWxsJywgIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CbGFjaykpXG4gICAgICAgICAgICAgIFx0c2xpY2VzLnNlbGVjdCgnLmFyYy10ZXh0MScpXG4gICAgICAgICAgICAgIFx0XHQuYXR0cignZmlsbCcsICBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmxhY2spKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIFx0XG4gICAgICAgICAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uLnNlbGVjdEFsbCgncGF0aC5tYWluLWFyYycpXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGQgPT4gKCkgPT4gYXJjKGQpKTtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ3BhdGguaGlkZGVuLWFyYycpXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGQgPT4gKCkgPT4gbWlkZGxlQXJjTGluZShkKSk7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb24uc2VsZWN0QWxsKCcuYXJjLXRleHQnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2Rpc3BsYXknLCBkID0+ICgpID0+IHRleHRGaXRzKGQpID8gbnVsbCA6ICdub25lJyk7XG4gICAgICAgICBcdFx0XG4gICAgICAgICAgXHR0cmFuc2l0aW9uLnNlbGVjdEFsbCgnLmFyYy10ZXh0MScpXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZGlzcGxheScsIGQgPT4gKCkgPT4gdGV4dEZpdHMoZCkgPyBudWxsIDogJ25vbmUnKTtcblxuICAgICAgICAgICAgbW92ZVN0YWNrVG9Gcm9udChkKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVN0YWNrVG9Gcm9udChlbEQpIHtcbiAgICAgICAgICAgICAgICBzdmcuc2VsZWN0QWxsKCcuc2xpY2UnKS5maWx0ZXIoZCA9PiBkID09PSBlbEQpXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnBhcmVudCkgeyBtb3ZlU3RhY2tUb0Zyb250KGQucGFyZW50KTsgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gIFxuICAgIFxuXG5cbiAgICBcbiAgICBcbiAgICAgXHRyZXR1cm4gdGhpcztcbiAgfVxuICBcbn0iLCJpbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIFN1bmJ1cnN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9FeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgc3ZnV2lkdGg6IDMwMDAsXG4gICAgICBzdmdIZWlnaHQ6IDMwMDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBleHRlbmRlZExpbmVMZW5ndGg6IDQwLFxuICAgICAgdGV4dERpc3RhbmNlOiAyNSxcbiAgICAgIG91dGVyVGV4dFNpemU6ICcyNXB4JyxcbiAgICAgIGF0dHJpYnV0ZUluZGV4OiBudWxsLFxuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBkaXNwbGF5Tm9kZXM6IG51bGwsXG4gICAgICB2YWx1ZXM6IG51bGwsXG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIHRleHRDaXJjbGVzQ2F0ZWdvcnk6IFtdLFxuICAgICAgdGV4dENpcmNsZXNDb3VudDogW10sXG4gICAgICB0ZXh0Q2lyY2xlc1BlcmNlbnQ6IFtdLFxuICAgICAgdGl0bGVUZXh0U2l6ZTogJzI1cHgnLFxuICAgICAgdGl0bGVUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGNvbXBhcmVNb2RlOiBmYWxzZSxcbiAgICAgIGxlZ2VuZFdpZHRoOiAxNTAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQxOiAnQ2F0ZWdvcnknLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQyOiAnIyBvZiBTdHVkZW50cycsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDM6ICclIGluIEdyb3VwJyxcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyogUmVtb3ZlcyBhbGwgZWxlbWVudHMgaW4gc3ZnICovXG4gIHJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUoKS5zdmcuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gIH1cblxuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgLyogQ29udmVydHMgb2JqZWN0cyB0byBzbGljZXMgd2l0aCBxdWVyaWVzICovXG4gIGdldFZhbHVlcyhhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAvLyBTb3J0aW5nIGFnZVxuICAgIGxldCBvcmRlciA9IHsnPD0xNyc6IDAsXG4gICAgICAgICcxOC0yMCc6IDEsXG4gICAgICAgICcyMS0yNSc6IDIsXG4gICAgICAgICcyNi0zMCc6IDMsXG4gICAgICAgICczMS0zNSc6IDQsXG4gICAgICAgICczNi00NSc6IDUsXG4gICAgICAgICc0Ni01NSc6IDYsXG4gICAgICAgICc1NSsnIDogN307XG4gICAgZGl2ZXJzaXR5VmFsdWVzLkFnZS5zb3J0KChlMSwgZTIpID0+IChvcmRlcltlMV0gLSBvcmRlcltlMl0pKTtcbiBcdFx0XG4gICAgLy9Tb3J0aW5nIHllYXJcbiAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLnNvcnQoKGUxLCBlMikgPT4gKE51bWJlcihlMS5zdWJzdHJpbmcoMCwgNCkpIC0gTnVtYmVyKGUyLnN1YnN0cmluZygwLCA0KSApKSk7XG4gICAgXG4gICAgLy9wcmVwYXJpbmcgc2xpY2VzXG4gICAgY29uc3QgY2FydGVzaWFuID0gKC4uLmEpID0+XG4gICAgICBhLnJlZHVjZSgoYSwgYikgPT5cbiAgICAgICAgYS5mbGF0TWFwKChkKSA9PiBiLm1hcCgoZSkgPT4gW2QsIGVdLmZsYXQoKSkpXG4gICAgICApO1xuICAgIGxldCBzbGljZXMgPSBjYXJ0ZXNpYW4oXG4gICAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRGVncmVlLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRmFjdWx0eSxcbiAgICAgIGFjYWRlbWljVmFsdWVzWydTdHVkeSBTdGF0dXMnXVxuICAgICk7XG5cbiAgICBjb25zdCBtYWtlUXVlcnkgPSAoc2xpY2UsIGRpdmVyc2l0eUF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgcXVlcnkgPSBbLi4uc2xpY2VdO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAocHJvcCAhPT0gZGl2ZXJzaXR5QXR0cikge1xuICAgICAgICAgIHF1ZXJ5LnB1c2goJ1RvdGFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnkucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9O1xuXG4gICAgLy9jb252ZXJ0IHNsaWNlcyB0byBrZXkgZm9ybWF0XG5cbiAgICBsZXQgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgc2xpY2Ugb2Ygc2xpY2VzKSB7XG4gICAgICBsZXQgc3RyID0gc2xpY2UudG9TdHJpbmcoKTtcbiAgICAgIHZhbHVlc1tzdHJdID0ge307XG4gICAgICBmb3IgKGxldCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl0gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgZGl2ZXJzaXR5VmFsdWVzW2F0dHJdKSB7XG4gICAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl1bdmFsdWVdID0gbWFrZVF1ZXJ5KFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIGFyY3MsIHJldHVybiBhcmMgd2lkdGgsIGlubmVycmFkaXVzIGFuZCB0ZXh0IHNpemUqL1xuICBjb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHgsIHksIG51bUFyY3MpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB0ZXh0SGVpZ2h0T2Zmc2V0ID0gNTA7XG5cbiAgICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSAtIHRleHRIZWlnaHRPZmZzZXQpO1xuICAgIGxldCBhcmNXaWR0aCA9IG1pbiAvICgyICogbnVtQXJjcyArIDcpOyAvL21pbiA9IDIqbnVtQXJjcyphcmNXaWR0aCArIDIqaW5uZXJSYWRpdXMsIGlubmVyUmFkaXVzID0gMyphcmNXaWR0aFxuICAgIGxldCBpbm5lclJhZGl1cyA9IDMgKiBhcmNXaWR0aDtcblxuICAgIGxldCBtdWx0aXBsaWVyID0gMS41O1xuICAgIGxldCBuID0gMTM7IC8vJ2ludGVybmF0aW9uYWwnIHdpdGggMTMgbGV0dGVycyBpcyBsb25nZXN0IHdvcmQgaW4gZGl2ZXJzaXR5IGF0dHJpYnV0ZXNcbiAgICBsZXQgaW5uZXJUZXh0U2l6ZSA9XG4gICAgICAobXVsdGlwbGllciAqICgyICogaW5uZXJSYWRpdXMpKSAvIG4gKyAncHgnO1xuICAgIHJldHVybiB7XG4gICAgICBhcmNXaWR0aDogYXJjV2lkdGgsXG4gICAgICBpbm5lclJhZGl1czogaW5uZXJSYWRpdXMsXG4gICAgICBpbm5lclRleHRTaXplOiBpbm5lclRleHRTaXplLFxuICAgIH07XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIHNxdWFyZXMsIHJldHVybiByb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZSAqL1xuICBjb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoeCwgeSwgbikge1xuICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMsIGFuZCBjZWxsIHNpemVcbiAgICBsZXQgcmF0aW8gPSB4IC8geTtcbiAgICBsZXQgbmNvbHNfZmxvYXQgPSBNYXRoLnNxcnQobiAqIHJhdGlvKTtcbiAgICBsZXQgbnJvd3NfZmxvYXQgPSBuIC8gbmNvbHNfZmxvYXQ7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIGhlaWdodFxuICAgIGxldCBucm93czEgPSBNYXRoLmNlaWwobnJvd3NfZmxvYXQpO1xuICAgIGxldCBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgd2hpbGUgKG5yb3dzMSAqIHJhdGlvIDwgbmNvbHMxKSB7XG4gICAgICBucm93czErKztcbiAgICAgIG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTEgPSB5IC8gbnJvd3MxO1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSB3aWR0aFxuICAgIGxldCBuY29sczIgPSBNYXRoLmNlaWwobmNvbHNfZmxvYXQpO1xuICAgIGxldCBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgd2hpbGUgKG5jb2xzMiA8IG5yb3dzMiAqIHJhdGlvKSB7XG4gICAgICBuY29sczIrKztcbiAgICAgIG5yb3dzMiA9IE1hdGguY2VpbChuIC8gbmNvbHMyKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTIgPSB4IC8gbmNvbHMyO1xuXG4gICAgLy8gRmluZCB0aGUgYmVzdCB2YWx1ZXNcbiAgICBsZXQgbnJvd3MsIG5jb2xzLCBjZWxsX3NpemU7XG4gICAgaWYgKGNlbGxfc2l6ZTEgPCBjZWxsX3NpemUyKSB7XG4gICAgICBucm93cyA9IG5yb3dzMjtcbiAgICAgIG5jb2xzID0gbmNvbHMyO1xuICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbnJvd3MgPSBucm93czE7XG4gICAgICBuY29scyA9IG5jb2xzMTtcbiAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2l6ZTogY2VsbF9zaXplLCByb3dzOiBucm93cywgY29sczogbmNvbHMgfTtcbiAgfVxuXG4gIC8qIEZldGNoaW5nIGRhdGEgYW5kIHNldHRpbmcgdXAgc3ZnIGNvbnRhaW5lciAqL1xuICBhc3luYyBzZXR1cCh1cmwpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy9sb2FkIGRhdGEgc3luY2hyb25vdXNseVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkMy5jc3YodXJsKTtcblxuICAgIGF0dHJzLmF0dHJpYnV0ZUluZGV4ID0gZGF0YS5jb2x1bW5zO1xuXG4gICAgLy9jb252ZXJ0IGRhdGEgdG8gb2JqZWN0IGZvcm1hdFxuICAgIGF0dHJzLmRhdGEgPSBkYXRhLnJlZHVjZShmdW5jdGlvbiAobWFwLCBvYmosIGkpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iaik7XG5cbiAgICAgIHZhbHVlcy5wb3AoKTtcblxuICAgICAgbWFwWycnLmNvbmNhdCh2YWx1ZXMpXSA9IG9iai5Db3VudDtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcik7XG4gICAgXG4gICAgLy8gc2V0dGluZyB1cCBjb21wYXJlIGJ1dHRvblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBhcmUgPSAoKSA9PiB7XG4gICAgICBhdHRycy5jb21wYXJlTW9kZSA9ICFhdHRycy5jb21wYXJlTW9kZTtcbiAgICAgIHNiLnJlbmRlcihhdHRycy52YWx1ZXMpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAnY29tcGFyZS1idXR0b24nXG4gICAgKS5vbmNsaWNrID0gdG9nZ2xlQ29tcGFyZTtcblxuICAgIGF0dHJzLnN2ZyA9IHN2ZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qIENvbnZlcnRpbmcgaW5wdXQgb2JqZWN0cyB0byB2YWx1ZXMgZm9yIGRpc3BsYXkgKi9cbiAgaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoXG4gICAgICBhY2FkZW1pY1ZhbHVlcyxcbiAgICAgIGRpdmVyc2l0eVZhbHVlc1xuICAgICk7XG5cbiAgICBcbiAgICBjb25zdCB0aXRsZUJ1aWxkZXIgPSAoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykgPT4ge1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIFxuICAgICAgY29uc3QgZ2V0QXR0ckFzVGl0bGUgPSAoYXR0cikgPT4ge1xuICAgICAgICAgaWYgKGF0dHIgPT09ICdBY2FkZW1pYyBZZWFyJyl7XG4gICAgICAgICAgIFx0cmV0dXJuICcgMjAxMy0yMDIxJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdEZWdyZWUnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBkZWdyZWVzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdGYWN1bHR5Jyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgZmFjdWx0aWVzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdTdHVkeSBTdGF0dXMnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBzdHVkeSBzdGF0dXNlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnQWdlJyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgYWdlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnU2V4Jyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgc2V4ZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0NpdGl6ZW5zaGlwIFN0YXR1cycpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIGNpdGl6ZW5zaGlwIHN0YXR1c2VzJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhY2FkZW1pY1ZhbHVlcyl7XG4gICAgICBcdGlmIChhY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPT09IDEgJiYgYWNhZGVtaWNWYWx1ZXNbYXR0cl1bMF0gPT09ICdUb3RhbCcpe1xuICAgICAgICBcdGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICBcdGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAwKXtcbiAgICAgICAgXHRsaXN0LnB1c2goZ2V0QXR0ckFzVGl0bGUoYXR0cikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICBcblx0XHRcdGlmIChsaXN0Lmxlbmd0aCA9PSAxKVxuICAgICAgIFx0cmV0dXJuICdTdHVkZW50cyBhY3Jvc3MgJyArIGxpc3QucG9wKCkgKyAnLic7IFxuICAgICAgXG5cdFx0XHRyZXR1cm4gJ1N0dWRlbnRzIGFjcm9zcyAnICsgbGlzdC5zbGljZSgwLCAtMSkuam9pbigpICsgJyBhbmQgJyArIGxpc3QucG9wKCkgKyAnLic7XG4gICAgfTtcbiAgICAgXG4gICAgY29uc3Qgd2lkdGggPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWNvbnRhaW5lcicpXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBkM1xuICAgICAgLnNlbGVjdCgnI3Zpei10aXRsZS10ZXh0JylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMudGl0bGVUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KHRpdGxlQnVpbGRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSk7XG4gICAgXG4gICAgdGhpcy5yZW5kZXIodmFsdWVzKTtcbiAgfVxuXG4gIC8qIFJlY3VycmluZyByZW5kZXIgKi9cbiAgcmVuZGVyKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvLyBTZXR0aW5nIHZhbHVlcyBzbyB2YWx1ZXMgaXMgc3RpbGwgYWNjZXNzaWJsZSB3aGVuIGNvbXBhcmUgaXMgdG9nZ2xlZFxuICAgIGF0dHJzLnZhbHVlcyA9IHZhbHVlcztcblxuICAgIFxuICAgIC8vIHJlcHVycG9zaW5nIGJhY2sgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgIGlmIChhdHRycy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJhY2sgPSAoKSA9PiBzYi5yZW5kZXIoYXR0cnMuaGlzdG9yeS5wb3AoKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGF0dHJzLmRpc3BsYXlOb2RlcztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGVsZW1lbnRzIGluIHN2Z1xuICAgIHRoaXMucmVtb3ZlQWxsKCk7XG5cbiAgICAvLyByZS1jcmVhdGUgdGhlIG5ldyBlbGVtZW50c1xuICAgIGlmICghYXR0cnMuY29tcGFyZU1vZGUpIHsgXG4gICAgICBcbiAgICAgIC8vIGRpc2FibGUgY29tcGFyZSBtb2RlIGlmIG9ubHkgMSBzbGljZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuaW5uZXJIVE1MID0gJ0NvbXBhcmUnO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID09PSAxKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPXRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuY29sb3IgPXRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkX1RleHQpO1xuICAgICAgfSBlbHNle1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5jb2xvciA9J3doaXRlJztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5yZW5kZXJTdW5idXJzdCh2YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQnV0dG9uKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmlubmVySFRNTCA9ICdDb25qb2luJztcbiAgICAgIHRoaXMucmVuZGVyQ29tcGFyZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckxlZ2VuZCh2YWx1ZXMpO1xuICB9XG5cbiAgLy8gcmVuZGVyIHRoZSBzdW5idXJzdFxuICByZW5kZXJTdW5idXJzdCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgXG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgbnVtQXJjcyA9IE9iamVjdC5rZXlzKE9iamVjdC52YWx1ZXModmFsdWVzKVswXSkubGVuZ3RoO1xuICAgIGNvbnN0IGV4dGVuZGVkTGluZUxlbmd0aCA9IGF0dHJzLmV4dGVuZGVkTGluZUxlbmd0aDtcbiAgICBjb25zdCBoYWxmU2xpY2VSYWRpYW5zID0gTWF0aC5QSSAvIG51bVNsaWNlcztcbiAgICBjb25zdCB0ZXh0RGlzdGFuY2UgPSBhdHRycy50ZXh0RGlzdGFuY2U7XG4gICAgY29uc3QgYXJjTGVuZ3RoID0gKDIgKiBNYXRoLlBJKSAvIG51bVNsaWNlcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QtY29udGFpbmVyJylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSArY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICtjb250YWluZXIud2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQtYXR0cnMudGl0bGVUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtQXJjc1xuICAgICk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICAgY29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgbGV0IHN2ZyA9IGF0dHJzLnN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCR7aGVpZ2h0LyAyICArIGF0dHJzLnRpdGxlVGV4dEhlaWdodH0pYFxuICAgICAgKTtcblxuICAgIGxldCBjZW50ZXJHcm91cCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2VudGVyLWdyb3VwJyk7XG4gICAgY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZScpXG4gICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTEgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnLTAuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDEpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUyID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJzAuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDIpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUzID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJzEuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MylcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgc3VuYnVyc3RHcm91cCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3VuYnVyc3QtZ3JvdXAnKTtcblxuICAgIC8vSGVscGVyIG1ldGhvZHNcbiAgICBjb25zdCBnZXRDaXJjbGVYID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIGNvbnN0IGdldENpcmNsZVkgPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXM7XG5cbiAgICBjb25zdCBnZXRUZXh0ID0gKHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKFxuICAgICAgICAod29yZCkgPT4gd29yZCAhPT0gJ1RvdGFsJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oJ1xcclxcbicpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLy9saW5lIGJ1aWxkZXJcbiAgICBjb25zdCBsaW5lQnVpbGRlciA9IChzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9ICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzO1xuICAgICAgaWYgKG51bVNsaWNlcyAlIDIgPT0gMSkgcmFkaWFucyArPSBNYXRoLlBJO1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAgIC5hdHRyKCd4MScsIGdldENpcmNsZVgocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cigneTEnLCBnZXRDaXJjbGVZKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3gyJyxcbiAgICAgICAgICBnZXRDaXJjbGVYKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICd5MicsXG4gICAgICAgICAgZ2V0Q2lyY2xlWShcbiAgICAgICAgICAgIHJhZGlhbnMsXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArXG4gICAgICAgICAgICAgIG51bUFyY3MgKiBhcmNXaWR0aCArXG4gICAgICAgICAgICAgIGV4dGVuZGVkTGluZUxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy90ZXh0IGJ1aWxkZXJcbiAgICBjb25zdCB0ZXh0QnVpbGRlciA9IChzbGljZSwgc2xpY2VDb3VudCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPVxuICAgICAgICAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcyArXG4gICAgICAgIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHQoc2xpY2UpO1xuICAgICAgbGV0IHJhZGl1cyA9XG4gICAgICAgIGlubmVyUmFkaXVzICsgbnVtQXJjcyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHggPSBnZXRDaXJjbGVYKHJhZGlhbnMsIHJhZGl1cyk7XG4gICAgICBsZXQgeSA9IC1nZXRDaXJjbGVZKHJhZGlhbnMsIHJhZGl1cyk7XG5cbiAgICAgIGlmICh4IDwgLTEpIHggLT0gdGV4dC5sZW5ndGggKiA5O1xuICAgICAgLy9sZWZ0IHNpZGUgYWRqdXN0XG4gICAgICBlbHNlIGlmICh4IDwgMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDU7IC8vbWlkZGxlIHRleHQgYWRqdXN0XG5cbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLm91dGVyVGV4dFNpemUpXG4gICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICAvL2FyYyBidWlsZGVyXG4gICAgY29uc3QgYXJjQnVpbGRlciA9IChcbiAgICAgIGFyYyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHNsaWNlLFxuICAgICAgYXR0cixcbiAgICAgIHZhbHVlLFxuICAgICAgY291bnQsXG4gICAgICBwZXJjZW50XG4gICAgKSA9PiB7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKTtcblxuICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyB2YWx1ZSArIFwicmVjdCddXCIpLnN0eWxlKFxuICAgICAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoYXR0ciA9PT0gJ0FnZScpIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTFcbiAgICAgICAgICAgICAgICAudGV4dChhdHRyICsgJzogJyArIHZhbHVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQodmFsdWUpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoJzw1JykuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KGNvdW50KS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGV4dENpcmNsZTNcbiAgICAgICAgICAgICAgLnRleHQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDEpKSArICclJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCgnJyk7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMlxuICAgICAgICAgICAgICAudGV4dCgnTm8gU3R1ZGVudHMnKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMy50ZXh0KCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG5cbiAgICAgICAgICB0ZXh0Q2lyY2xlMVxuICAgICAgICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MikuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQzKS5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIHZhbHVlICsgXCJyZWN0J11cIikuc3R5bGUoXG4gICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChudW1BcmNzID09IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gcHJvdmlkZSBhbnkgbW9yZSBkZXRhaWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1NsaWNlID0gc2xpY2UgKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICBbbmV3U2xpY2VdOiBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzW3NsaWNlXSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoXG4gICAgICAgICAgICAgICAgYXR0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cjEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyMSA9PT0gYXR0cikge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdW1xuICAgICAgICAgICAgICAgICAgICBhdHRyMVxuICAgICAgICAgICAgICAgICAgXSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXVt2YWx1ZTFdW1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZXMpO1xuXG4gICAgICAgICAgICAgIGF0dHJzLmhpc3RvcnkucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBcbiAgXG4gICAgLy9idWlsZCBhcmNzXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gc2xpY2VDb3VudCAqIGFyY0xlbmd0aDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPT0gMCkge1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlICsgYXJjTGVuZ3RoLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgJzAnLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gY291bnQgLyBzdW07XG4gICAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgYXJjTGVuZ3RoICogcGVyY2VudCxcbiAgICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcbiAgICAgICAgICAgIFxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coc2xpY2UpXG4gICAgICAgICAgXHRjb25zb2xlLmxvZyhwZXJjZW50ICsgXCI6IFwiICsgY291bnQgKyBcIiA6IFwiICsgc3VtKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICBwZXJjZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChudW1TbGljZXMgPT0gMSkgdGV4dEJ1aWxkZXIoc2xpY2UsIDAuNSk7XG4gICAgICBlbHNlIHRleHRCdWlsZGVyKHNsaWNlLCBzbGljZUNvdW50KTtcbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG5cbiAgICAvL2J1aWxkIGxpbmVzIGFmdGVyIHNvIHRoZXkgYXJlIG9uIHRvcFxuICAgIGZvciAoXG4gICAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgICBzbGljZUNvdW50IDwgbnVtU2xpY2VzICYmIG51bVNsaWNlcyA+IDE7XG4gICAgICBzbGljZUNvdW50KytcbiAgICApIHtcbiAgICAgIGxpbmVCdWlsZGVyKHNsaWNlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlWYWx1ZXModmFsdWVzLCBzZWxlY3RlZFZhbHVlLCBhdHRyKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBzYiA9IHRoaXM7XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3NlbGVjdGVkVmFsdWVdXVxuICAgICAgICApO1xuICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICBpZiAoYXR0ciA9PT0gJ0FnZScpXG4gICAgICAgICAgXHRhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5W3NsaWNlQ291bnRdLnRleHQoJ0FnZTogJyArIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ2F0ZWdvcnlbc2xpY2VDb3VudF0udGV4dChzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KCc8NScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoY291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnRbc2xpY2VDb3VudF0udGV4dChcbiAgICAgICAgICAgIE51bWJlcigocGVyY2VudCAqIDEwMCkudG9GaXhlZCgxKSkgKyAnJSdcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFxuICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dCgnTm8nKTtcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnRbc2xpY2VDb3VudF0udGV4dChcbiAgICAgICAgICAgICdTdHVkZW50cydcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICAgIC8vZDMuc2VsZWN0KFwidGV4dFtpZD0nZWxlbWVudC5pZC53aXRoLmRvdHMnXVwiKTtcbiAgICBjb25zdCBpZCA9IHNlbGVjdGVkVmFsdWUgKyAncmVjdCc7XG4gICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIGlkICsgXCInXVwiKS5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMyk7XG4gIH1cblxuICByZW1vdmVWYWx1ZXModmFsdWUpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNDb3VudCkge1xuICAgICAgdGV4dENpcmNsZS50ZXh0KCcnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0ZXh0Q2lyY2xlIG9mIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudCkge1xuICAgICAgdGV4dENpcmNsZS50ZXh0KCcnKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaWQgPSB2YWx1ZSArICdyZWN0JztcbiAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgaWQgKyBcIiddXCIpLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgfVxuXG4gIHJlbmRlckNvbXBhcmUodmFsdWVzKSB7XG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBzYiA9IHRoaXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWNvbnRhaW5lcicpXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gK2NvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSArY29udGFpbmVyLndpZHRoO1xuXG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoOyAvL21pbnVzIGJlY2F1c2Ugb2YgbGVnZW5kXG4gICAgY29uc3QgaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0IC0gYXR0cnMudGl0bGVUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBzYi5jb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG51bVNsaWNlc1xuICAgICk7IC8vcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemVcbiAgICBjb25zdCBhcmNMZW5ndGggPSAyICogTWF0aC5QSTtcblxuICAgIGNvbnN0IHJvd3MgPSBkaW1lbnNpb25zLnJvd3M7XG4gICAgY29uc3QgY29scyA9IGRpbWVuc2lvbnMuY29scztcbiAgICBjb25zdCBzaXplID0gZGltZW5zaW9ucy5zaXplO1xuICAgIGNvbnN0IHdoaXRlc3BhY2VXaWR0aCA9IHdpZHRoIC0gY29scyAqIHNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZUhlaWdodCA9IGhlaWdodCAtIHJvd3MgKiBzaXplO1xuXG4gICAgY29uc3QgbnVtQXJjcyA9IE9iamVjdC5rZXlzKE9iamVjdC52YWx1ZXModmFsdWVzKVswXSlcbiAgICAgIC5sZW5ndGg7XG4gICAgY29uc3QgZXh0ZW5kZWRMaW5lTGVuZ3RoID0gYXR0cnMuZXh0ZW5kZWRMaW5lTGVuZ3RoO1xuICAgIGNvbnN0IGhhbGZTbGljZVJhZGlhbnMgPSBNYXRoLlBJIC8gbnVtU2xpY2VzO1xuICAgIGNvbnN0IHRleHREaXN0YW5jZSA9IGF0dHJzLnRleHREaXN0YW5jZTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhcbiAgICAgIHNpemUsXG4gICAgICBzaXplLFxuICAgICAgbnVtQXJjc1xuICAgICk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICAgY29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgLyogSGVscGVyIG1ldGhvZHMgKi9cblxuICAgIC8vIENvbnZlcnRpbmcgc2xpY2UgbmFtZSB0byB0ZXh0XG4gICAgY29uc3QgZ2V0VGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHdvcmRzLmZpbHRlcihcbiAgICAgICAgKHdvcmQpID0+IHdvcmQgIT09ICdUb3RhbCdcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRMb25nZXN0U2xpY2UgPSAoYXJyYXkpID0+IHtcbiAgICAgIGxldCBsb25nZXN0V29yZCA9ICcnO1xuICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICBpZiAod29yZC5sZW5ndGggPiBsb25nZXN0V29yZC5sZW5ndGgpIHtcbiAgICAgICAgICBsb25nZXN0V29yZCA9IHdvcmQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxvbmdlc3RXb3JkO1xuICAgIH07XG4gICAgY29uc3QgbG9uZ2VzdFNsaWNlVGV4dExlbmd0aCA9IGdldFRleHQoXG4gICAgICBmaW5kTG9uZ2VzdFNsaWNlKE9iamVjdC5rZXlzKHZhbHVlcykpXG4gICAgKS5sZW5ndGg7XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKFxuICAgICAgc2xpY2UsXG4gICAgICBzbGljZUNvdW50LFxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPVxuICAgICAgICAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcyArXG4gICAgICAgIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHQoc2xpY2UpO1xuICAgICAgbGV0IHJhZGl1cyA9XG4gICAgICAgIGlubmVyUmFkaXVzICsgbnVtQXJjcyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHkgPSAtcmFkaXVzO1xuXG4gICAgICBsZXQgc2l6ZU11bHRpcGxpZXIgPSAxLjg7XG4gICAgICBsZXQgb3V0ZXJUZXh0U2l6ZSA9IE1hdGgubWluKFxuICAgICAgICAoc2l6ZU11bHRpcGxpZXIgKiAoMiAqIHJhZGl1cykpIC9cbiAgICAgICAgICBsb25nZXN0U2xpY2VUZXh0TGVuZ3RoLFxuICAgICAgICAzMFxuICAgICAgKTtcblxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgb3V0ZXJUZXh0U2l6ZSArICdweCcpXG4gICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICAvL2FyYyBidWlsZGVyXG4gICAgY29uc3QgYXJjQnVpbGRlciA9IChcbiAgICAgIHN1bmJ1cnN0R3JvdXAsXG4gICAgICBhcmMsXG4gICAgICBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUsXG4gICAgICBzbGljZSxcbiAgICAgIGF0dHIsXG4gICAgICB2YWx1ZVxuICAgICkgPT4ge1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKHtcbiAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSlcbiAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuXG4gICAgICAgICAgICBzYi5kaXNwbGF5VmFsdWVzKHZhbHVlcywgdmFsdWUsIGF0dHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG5cbiAgICAgICAgICAgIHNiLnJlbW92ZVZhbHVlcyh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChudW1BcmNzID09IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gcHJvdmlkZSBhbnkgbW9yZSBkZXRhaWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhdHRycy5hdHRyaWJ1dGVJbmRleC5pbmRleE9mKFxuICAgICAgICAgICAgICAgIGF0dHJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGljZTEgaW4gbmV3VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NsaWNlID0gc2xpY2UxICsgJywnICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE9iamVjdC5hc3NpZ24obmV3VmFsdWVzLCB7XG4gICAgICAgICAgICAgICAgICBbbmV3U2xpY2VdOiBuZXdWYWx1ZXNbc2xpY2UxXSxcbiAgICAgICAgICAgICAgICB9KVtzbGljZTFdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cjEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGF0dHIxID09PSBhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUxIGluIG5ld1ZhbHVlc1tcbiAgICAgICAgICAgICAgICAgICAgICBuZXdTbGljZVxuICAgICAgICAgICAgICAgICAgICBdW2F0dHIxXSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdW3ZhbHVlMV1bXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGF0dHJzLmhpc3RvcnkucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBDbGVhciB0ZXh0Q2lyY2xlIGxpc3RzXG4gICAgYXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeSA9IFtdO1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblx0XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChzbGljZUNvdW50IC8gY29scyk7XG4gICAgICBsZXQgY29sID0gc2xpY2VDb3VudCAlIGNvbHM7XG5cbiAgICAgIGxldCB0cmFuc2xhdGVYID1cbiAgICAgICAgc2l6ZSAvIDIgK1xuICAgICAgICBjb2wgKiBzaXplICtcbiAgICAgICAgKChjb2wgKyAxKSAqIHdoaXRlc3BhY2VXaWR0aCkgLyAoY29scyArIDEpO1xuICAgICAgbGV0IHRyYW5zbGF0ZVkgPVxuICAgICAgICBhdHRycy50aXRsZVRleHRIZWlnaHQgK1xuICAgICAgICBzaXplIC8gMiArXG4gICAgICAgIHJvdyAqIHNpemUgK1xuICAgICAgICAoKHJvdyArIDEpICogd2hpdGVzcGFjZUhlaWdodCkgLyAocm93cyArIDEpO1xuXG4gICAgICBsZXQgc3ZnID0gYXR0cnMuc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCBzaXplKVxuICAgICAgICAuYXR0cignaGVpZ2h0Jywgc2l6ZSlcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pYFxuICAgICAgICApO1xuICAgICAgbGV0IGNlbnRlckdyb3VwID0gc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2VudGVyLWdyb3VwJyk7XG4gICAgICBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZScpXG4gICAgICAgIC5hdHRyKCdjeCcsIDApXG4gICAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJyk7XG5cbiAgICAgIGxldCB0ZXh0Q2lyY2xlMSA9IGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgJy0wLjVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG4gICAgICBcbiAgICAgIGxldCB0ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgJzAuNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUzID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMS41ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuXG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5LnB1c2godGV4dENpcmNsZTEpO1xuICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudC5wdXNoKHRleHRDaXJjbGUyKTtcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudC5wdXNoKHRleHRDaXJjbGUzKTtcblxuICAgICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYgKHN1bSA9PSAwKSB7XG4gICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgKyBhcmNMZW5ndGgsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgIHN1bmJ1cnN0R3JvdXAsXG4gICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICcwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gJ1RvdGFsJykgY29udGludWU7XG4gICAgICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gc2xpY2VTdGFydEFuZ2xlO1xuICAgICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBhcmNMZW5ndGggKiBwZXJjZW50LFxuICAgICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgICAgICAgICAgYXJjLFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuICAgICAgdGV4dEJ1aWxkZXIoc2xpY2UsIC0wLjUsIHN1bmJ1cnN0R3JvdXApO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckxlZ2VuZCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBsZXQgbGVnZW5kID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdC1sZWdlbmQnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgYXR0cnMubGVnZW5kV2lkdGgpO1xuICAgIGxlZ2VuZC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICBcbiAgICBsZXQgeCA9IDIwO1xuICAgIGxldCB5ID0gMTA7XG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4ICsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgICAudGV4dCgnTEVHRU5EJylcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcyMHB4JylcbiAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgXG4gICAgIHkgKz0gMjA7XG4gICAgXG4gICAgbGV0IGZpcnN0U2xpY2UgPSBPYmplY3QudmFsdWVzKHZhbHVlcylbMF07XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGZpcnN0U2xpY2UpIHtcbiAgICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoZmlyc3RTbGljZVthdHRyXSk7XG4gICAgICBsZWdlbmRcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgLnRleHQoYXR0cilcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG5cdFx0XHQgeSArPSAyMDtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgbGVnZW5kXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2lkJywgdmFsdWUgKyAncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KHZhbHVlKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICAgICAgeSArPSAyMDtcbiAgICAgIH1cbiAgICAgIHkgKz0gMTA7XG4gICAgXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDaGFydCB9IGZyb20gJy4vbmF2aS1jbGFzcyc7XG5pbXBvcnQgeyBTdW5idXJzdCB9IGZyb20gJy4vc3VuYnVyc3QtY2xhc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG5cdC8vc3VuYnVyc3QgXG4gIGxldCBzYjsgXG5cblx0Ly9TZXQgbm9kZSBhbmQgTWFpbiB2aXogU1BBIHVwc1xuICBkaXNwbGF5Tm9kZXMoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpc3VhbGl6ZS1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheVZpejtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlOb2RlcztcbiBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLW9wZW4tYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlJbmZvO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5vbmNsaWNrID0gaGlkZUluZm87XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWNsb3NlLWJ1dHRvbicpLm9uY2xpY2sgPSBoaWRlSW5mbztcbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlOb2Rlcygpe1xuICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6LWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlWaXooKXtcbiAgICAgIGxldCB0ZXN0ID0gZmFsc2U7XG4gICAgXHRsZXQgYWNhZGVtaWNWYWx1ZXNUZXN0ID0ge1xuICAgICAgICAgICBcdCAnQWNhZGVtaWMgWWVhcic6IFsnVG90YWwnXSxcbiAgICAgICAgICAgICBEZWdyZWU6IFsnQmFjaGVsb3JzJywgJ01hc3RlcnMnXSxcbiAgICAgICAgICAgICBGYWN1bHR5OiBbJ1NjaWVuY2UnLCAnQnVzaW5lc3MnXSxcbiAgICAgICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydUb3RhbCddXG4gICAgICAgICAgfTtcbiAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzVGVzdCA9IHsgICAgIFxuICAgICAgICAgICAgICBBZ2U6IFtdLFxuICAgICAgICAgICAgICBTZXg6ICBbJ01hbGUnLCAnRmVtYWxlJ10sXG4gICAgICAgICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbJ0ludGVybmF0aW9uYWwnLCAnRG9tZXN0aWMnXVxuICAgICAgIH1cblxuICAgIFx0aWYgKHNiKXtcbiAgICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXMgPSB0ZXN0P2RpdmVyc2l0eVZhbHVlc1Rlc3Q6IGh0LmRpdmVyc2l0eVZhbHVlcygpO1xuICAgICAgICAgbGV0IGFjYWRlbWljVmFsdWVzID0gdGVzdD9hY2FkZW1pY1ZhbHVlc1Rlc3Q6IGh0LmFjYWRlbWljVmFsdWVzKCk7XG5cbiAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgICAgXHQgaWYgKGRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICBpZiAoIXZhbGlkKXtcbiAgICAgICAgICAgXHRjb25zb2xlLmxvZyhkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgICBcdFx0YWxlcnQoJ1BsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIGRpdmVyc2l0eSBhdHRyaWJ1dGUnKTsgIFxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgXHQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGUtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6LWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgXHQgXHRcdCAvL3NiLnJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgICAgXHRzYi5pbml0aWFsUmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugd2FpdCBmb3IgdGhlIGRhdGEgdG8gZmluaXNoIGxvYWRpbmcnKTtcbiAgICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24gZGlzcGxheUluZm8oKXtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGhpZGVJbmZvKCl7XG4gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgXG4gIGxldCBodCA9IG5ldyBDaGFydCgpXG4gICAgIC5jb250YWluZXIoJyNjaGFydC1jb250YWluZXInKVxuICAgICAuc3ZnV2lkdGgod2luZG93LmlubmVyV2lkdGgtMjAwKVxuICAgICAuc3ZnSGVpZ2h0KHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAuaW5pdGlhbFpvb20oMC4zKVxuICAgICAucmVuZGVyKClcblxuICBuZXcgU3VuYnVyc3QoKVxuICAgICAgICAgLmNvbnRhaW5lcignI3N1bmJ1cnN0LWNvbnRhaW5lcicpXG4gIFx0XHRcdCAuZGlzcGxheU5vZGVzKGRpc3BsYXlOb2RlcylcbiAgICBcdFx0IC5zZXR1cCgnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9rYWVsNTU4LzdkMmNiNTI1ODkyMTExOWRmNTg4NGNjOTA5MDJlODRkL3Jhdy8wMDgyN2I5ZDUzMjg4MzM0MzE5MWY2MTQ0ZDQxZDBhMGJiYWQ1ZGY4L2ZhbGwuY3N2Jylcblx0XHRcdFx0IC50aGVuKHZhbHVlID0+IHNiID0gdmFsdWUpO1xufSk7XG5cblxuXG5cblxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuICAgICAgIFxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7RUFZTyxNQUFNLE1BQU0sR0FBRztFQUN0QixFQUFFLGdCQUFnQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUMvRCxFQUFFLG1CQUFtQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqRSxFQUFFLGtCQUFrQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNsRSxFQUFFLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNyRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDM0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3JELEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNoRCxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3BELENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRCxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDdEQsRUFBRSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3hELEVBQUUsTUFBTSxFQUFFLENBQUMsS0FB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