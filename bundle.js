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
            
              const CHAR_SPACE = 8;

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

      		console.log(width);
      		console.log(height);
      		document.getElementById('select-all-group').style.left = (window.innerWidth-275)/2  + "px";
      		document.getElementById('select-all-group').style.top = (window.innerHeight+30)/2 + "px";
      
      
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
                textCircle.text(d.data.description);       
              }).on('mouseout', d => {
                 textCircle.text(attrs.placeholderInnerText);
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
      						.attr('r', '15px')
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
          		.append('xhtml:p')
                .text(attrs.placeholderInnerText)
      					.style('font-size', attrs.centerTextSize);
      					
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwibmF2aS1jbGFzcy5qcyIsInN1bmJ1cnN0LWNsYXNzLmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSU5WSVNJQkxFX05PREUgPSAnSU5WSVNJQkxFJztcbmNvbnN0IFJFUE9SVF9OT0RFID0gJ1JFUE9SVCc7XG5cbmNvbnN0IEVESV9BVFRSSUJVVEVfTk9ERSA9ICdFRElfQVRUUklCVVRFJztcbmNvbnN0IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFID0gJ09USEVSX0FUVFJJQlVURSc7XG5jb25zdCBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSA9ICdVTkNPTExFQ1RFRF9BVFRSSUJVVEUnO1xuXG5jb25zdCBWQUxVRV9OT0RFID0gJ1ZBTFVFJztcbmNvbnN0IFVOQ09MTEVDVEVEX1ZBTFVFX05PREUgPSAnVU5DT0xMRUNURURfVkFMVUUnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcbiAgUmVwb3J0X05vZGVfRmlsbDoge1wicmVkXCI6MzEsXCJncmVlblwiOjEyMCxcImJsdWVcIjoxODAsXCJhbHBoYVwiOjF9LFxuICBEaXZlcnNpdHlfTm9kZV9GaWxsOiB7XCJyZWRcIjo1MSxcImdyZWVuXCI6MTYwLFwiYmx1ZVwiOjQ0LFwiYWxwaGFcIjoxfSxcbiAgQWNhZGVtaWNfTm9kZV9GaWxsOiB7XCJyZWRcIjoxNjYsXCJncmVlblwiOjIwNixcImJsdWVcIjoyMjcsXCJhbHBoYVwiOjF9LFxuICBVbmNvbGxlY3RlZF9Ob2RlX0ZpbGw6IHtcInJlZFwiOjEyOCxcImdyZWVuXCI6MTI4LFwiYmx1ZVwiOjEyOCxcImFscGhhXCI6MX0sXG4gIFRyYW5zcGFyZW50OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjB9LFxuICBXaGl0ZToge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjoxfSxcbiAgQmx1ZToge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbGFjazoge1wicmVkXCI6MCxcImdyZWVuXCI6MCxcImJsdWVcIjowLFwiYWxwaGFcIjoxfSxcbiAgR3JleToge1wicmVkXCI6MTQxLFwiZ3JlZW5cIjoxNjAsXCJibHVlXCI6MjAzLFwiYWxwaGFcIjoxfSxcblx0R3JlZW46IHtcInJlZFwiOjEwMixcImdyZWVuXCI6MTk0LFwiYmx1ZVwiOjE2NSxcImFscGhhXCI6MX0sXG4gIE9yYW5nZToge1wicmVkXCI6MjUyLFwiZ3JlZW5cIjoxNDEsXCJibHVlXCI6OTgsXCJhbHBoYVwiOiAxfSxcbiAgU2xhdGVfR3JleSA6IHtcInJlZFwiOjYxLFwiZ3JlZW5cIjo3MixcImJsdWVcIjo3MyxcImFscGhhXCI6MX0sXG4gIEJ1dHRvbjoge1wicmVkXCI6MTAwLFwiZ3JlZW5cIjoxMDAsXCJibHVlXCI6MTAwLFwiYWxwaGFcIjoxfSxcbiAgRGlzYWJsZWQ6IHtcInJlZFwiOjEwMCxcImdyZWVuXCI6MTAwLFwiYmx1ZVwiOjEwMCxcImFscGhhXCI6MC4yfSxcbiAgRGlzYWJsZWRfVGV4dDoge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjowLjJ9LFxufVxuXG4gICAgIGV4cG9ydCBjb25zdCBpbml0aWFsTm9kZXMgPSB7XG4gIEVucm9sbGVkOiB7XG4gICAgdHlwZTogUkVQT1JUX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgbnVtYmVyIG9mIHN0dWRlbnRzIHRoYXQgYXJlIGVucm9sbGVkLidcbiAgfSxcbiAgRmFjdWx0eToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnU1RFTScsICdOb24tU1RFTScsICdFbmdpbmVlcmluZyAmIERlc2lnbicsICdTY2llbmNlJywgJ1B1YmxpYyBBZmZhaXJzJywgJ0J1c2luZXNzJywgJ0FydHMgJiBTb2NpYWwgU2NpZW5jZXMnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdHcm91cHMgb2YgdW5pdmVyc2l0eSBkZXBhcnRtZW50cyBjb25jZXJuZWQgd2l0aCBhIG1ham9yIGRpdmlzaW9uIG9mIGtub3dsZWRnZS4gVGhlIGZhY3VsdHkgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGVpciBtYWpvciBvciBtYWpvcnMuJ1xuICB9LFxuICAnQWNhZGVtaWMgWWVhcic6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJzIwMTMvMTQnLFxuICAgICAgJzIwMTQvMTUnLFxuICAgICAgJzIwMTUvMTYnLFxuICAgICAgJzIwMTYvMTcnLFxuICAgICAgJzIwMTcvMTgnLFxuICAgICAgJzIwMTgvMTknLFxuICAgICAgJzIwMTkvMjAnLFxuICAgICAgJzIwMjAvMjEnLF0sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBlcmlvZCBvZiB0aGUgeWVhciB3aGljaCBzdHVkZW50cyBhdHRlbmQgYW4gZWR1Y2F0aW9uYWwgaW5zdGl0dXRpb24uIFRoZSBhY2FkZW1pYyB5ZWFyIGNvbnNpc3RzIG9mIHRocmVlIHRlcm1zIChTdW1tZXIsIEZhbGwgYW5kIFdpbnRlcikuIFRoZSBhY2FkZW1pYyB5ZWFyIG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlIHllYXIgdGhhdCB0aGV5IGFyZSBzdHVkeWluZy4nLFxuICAgIG9yZGVyZWQ6IHRydWVcbiAgfSxcbiAgRGVncmVlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydCYWNoZWxvcnMnLFxuICAgICAgJ01hc3RlcnMnLFxuICAgICAgJ1BoLkQuJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxldmVscyBvZiBxdWFsaWZpY2F0aW9uIG9mZmVyZWQgYnkgYWNhZGVtaWMgaW5zdGl0dWl0aW9ucy4gVGhlIGRlZ3JlZSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIGxldmVsIG9mIHN0dWR5LicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuIFxuICAnU3R1ZHkgU3RhdHVzJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHRoZSBhbW91bnQgb2YgY291cnNlcyB0aGF0IGEgc3R1ZGVudCBpcyB0YWtpbmcuIFN0dWRlbnRzIGVucm9sbGluZyBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciBhcmUgZnVsbC10aW1lIHN0dWRlbnRzLiBXaGVyZWFzIHN0dWRlbnRzIGVucm9sbGluZyBpbiBsZXNzIHRoYW4gMyBjcmVkaXRzIGFyZSBwYXJ0LXRpbWUgc3R1ZGVudHMuJ1xuICB9LFxuICAnQ2l0aXplbnNoaXAgU3RhdHVzJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnRG9tZXN0aWMnLFxuICAgICAgJ0ludGVybmF0aW9uYWwnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHR1aXRpb24gZmVlIHRoYXQgYSBzdHVkZW50IHBheXMuIFRoZSBzdHVkZW50cyB1bml2ZXJzaXR5IHR1aXRpb24gZmVlIGFtb3VudCBkZXRlcm1pbmVzIHRoZWlyIGNpdGl6ZW5zaGlwIHN0YXR1cy4nXG4gIH0sXG4gIEFnZToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFtcbiAgICAgICc8PTE3JyxcbiAgICAgICcxOC0yMCcsXG4gICAgICAnMjEtMjUnLFxuICAgICAgJzI2LTMwJyxcbiAgICAgICczMS0zNScsXG4gICAgICAnMzYtNDUnLFxuICAgICAgJzQ2LTU1JyxcbiAgICAgICc1NSsnLFxuICAgIF0sXG4gICAgdW5jb2xsZWN0ZWRWYWx1ZXM6IFsnNTUtNTknLCc2MC02NCcsJzY1LTY5JywgJzcwLTc0JywgJzc1LTc5JywgJzgwKyddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBsZW5ndGggb2YgdGltZSB0aGF0IGEgc3R1ZGVudCBoYXMgbGl2ZWQuIFRoZSBhZ2Ugb2YgYSBzdHVkZW50IG1hcHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBhZ2UgaW50ZXJ2YWwuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIGRhdGUgb2YgYmlydGggYW5kIGRldGVybWluZXMgdGhlaXIgYWdlLicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0ZlbWFsZScsICdNYWxlJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnTm9uLWJpbmFyeSddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBwaHlzaWNhbCBkaWZmZXJlbmNlcyBiZXR3ZWVuIHN0dWRlbnRzIGJhc2VkIG9uIGFuYXRvbWljYWwgYW5kIHBoeXNpb2xvZ2ljYWwgY2hhcmFjdGVyaXN0aWNzLiBUaGUgcmVnaXN0cmF0aW9uIGFwcGxpY2F0aW9uIHJlY29yZHMgYSBzdHVkZW50XFwncyBzZXggKGxhYmVsbGVkIGFzIGdlbmRlciBvbiB0aGUgYXBwbGljYXRpb24pLiBBIHN0dWRlbnQgbWF5IGZpbGUgYSBmb3JtIHRvIHJlcXVlc3QgYSBcXFwiR2VuZGVyIENoYW5nZSBBc3NpZ25tZW50XFxcIiB0byBjaGFuZ2UgdGhpcyBmaWVsZC4gVGhpcyBmaWVsZCBjb250YWlucyBhIG1peHR1cmUgb2YgZ2VuZGVyIGFuZCBzZXguIEEgZ3Jvd2luZyBwb3B1bGF0aW9uIG9mIHN0dWRlbnRzIGNob29zZSBub3QgdG8gZGlzY2xvc2UgdGhlaXIgZ2VuZGVyL3NleCB3aXRoIGEgXFwnUHJlZmVyIG5vdCB0byByZXBvcnRcXCcgb3B0aW9uLiBXZSBhcmUgdW5zdXJlIGhvdyB0aGlzIG1hcHMgdG8gdGhlIHR3byBhdmFpbGFibGUgY2F0ZWdvcmllcyBvZiBcXCdtYWxlXFwnIGFuZCBcXCdmZW1hbGVcXCcuJ1xuXHR9LFxuICBSYWNlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuXHR9LFxuICAnUmVsaWdpb24vU3Bpcml0dWFsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ1JlZ2lvbmFsIElkZW50aXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ0Rpcy9hYmlsaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgSW5kaWdlbmVpdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydGaXJzdCBOYXRpb25zJywgJ01ldGlzJywgJ0ludWl0J10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGluZGlnZW5laXR5IG9mIGEgc3R1ZGVudC4nXG4gIH0sXG4gICdGaXJzdCBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdPdGhlciBMYW5ndWFnZSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdFdGhuaWNpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnTmF0aW9uJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbn1cblxuXG5leHBvcnQgY29uc3Qgbm9kZXMgPSB7XG4gICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxuICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5UcmFuc3BhcmVudCxcbiAgXHRcdFx0XHQgXCJib3JkZXJXaWR0aFwiOiBcIjBweFwiLFxuICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJGYWN1bHR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgICAgICAgICAgXHRkZXNjcmlwdGlvbjogJ0dyb3VwcyBvZiB1bml2ZXJzaXR5IGRlcGFydG1lbnRzIGNvbmNlcm5lZCB3aXRoIGEgbWFqb3IgZGl2aXNpb24gb2Yga25vd2xlZGdlLiBUaGUgZmFjdWx0eSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIG1ham9yIG9yIG1ham9ycy4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJTVEVNXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIk5vbi1TVEVNXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkVuZ2luZWVyaW5nICYgRGVzaWduXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlNjaWVuY2VcIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiUHVibGljIEFmZmFpcnNcIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiQnVzaW5lc3NcIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgIFx0e1wibmFtZVwiOiBcIkFydHMgJiBTb2NpYWwgU2NpZW5jZXNcIiwgXCJzaXplXCI6IDEyfVxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWNhZGVtaWMgWWVhclwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgcGVyaW9kIG9mIHRoZSB5ZWFyIHdoaWNoIHN0dWRlbnRzIGF0dGVuZCBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGlvbi4gVGhlIGFjYWRlbWljIHllYXIgY29uc2lzdHMgb2YgdGhyZWUgdGVybXMgKFN1bW1lciwgRmFsbCBhbmQgV2ludGVyKS4gVGhlIGFjYWRlbWljIHllYXIgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGUgeWVhciB0aGF0IHRoZXkgYXJlIHN0dWR5aW5nLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTMvMTRcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE0LzE1XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxNS8xNlwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTYvMTdcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE3LzE4XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxOC8xOVwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTkvMjBcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDIwLzIxXCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG5cdFx0XHRcdFx0XHR7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGVncmVlXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBsZXZlbHMgb2YgcXVhbGlmaWNhdGlvbiBvZmZlcmVkIGJ5IGFjYWRlbWljIGluc3RpdHVpdGlvbnMuIFRoZSBkZWdyZWUgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGVpciBsZXZlbCBvZiBzdHVkeS4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJCYWNoZWxvcnNcIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTWFzdGVyc1wiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJQaC5ELlwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJTdHVkeSBTdGF0dXNcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHRoZSBhbW91bnQgb2YgY291cnNlcyB0aGF0IGEgc3R1ZGVudCBpcyB0YWtpbmcuIFN0dWRlbnRzIGVucm9sbGluZyBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciBhcmUgZnVsbC10aW1lIHN0dWRlbnRzLiBXaGVyZWFzIHN0dWRlbnRzIGVucm9sbGluZyBpbiBsZXNzIHRoYW4gMyBjcmVkaXRzIGFyZSBwYXJ0LXRpbWUgc3R1ZGVudHMuJyxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlBhcnQtdGltZVwiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJGdWxsLXRpbWVcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2l0aXplbnNoaXAgU3RhdHVzXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjbGFzc2lmaWNhdGlvbiBvZiB0dWl0aW9uIGZlZSB0aGF0IGEgc3R1ZGVudCBwYXlzLiBUaGUgc3R1ZGVudHMgdW5pdmVyc2l0eSB0dWl0aW9uIGZlZSBhbW91bnQgZGV0ZXJtaW5lcyB0aGVpciBjaXRpemVuc2hpcCBzdGF0dXMuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiRG9tZXN0aWNcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiSW50ZXJuYXRpb25hbFwiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJBZ2VcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBsZW5ndGggb2YgdGltZSB0aGF0IGEgc3R1ZGVudCBoYXMgbGl2ZWQuIFRoZSBhZ2Ugb2YgYSBzdHVkZW50IG1hcHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBhZ2UgaW50ZXJ2YWwuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIGRhdGUgb2YgYmlydGggYW5kIGRldGVybWluZXMgdGhlaXIgYWdlLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjw9MTdcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIxOC0yMFwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIxLTI1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjYtMzBcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIzMS0zNVwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjM2LTQ1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNDYtNTVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI1NStcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI1NS01OVwiLCBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI2MC02NFwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNjUtNjlcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjcwLTc0XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI3NS03OVwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiODArXCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9XG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNleFwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBoeXNpY2FsIGRpZmZlcmVuY2VzIGJldHdlZW4gc3R1ZGVudHMgYmFzZWQgb24gYW5hdG9taWNhbCBhbmQgcGh5c2lvbG9naWNhbCBjaGFyYWN0ZXJpc3RpY3MuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIHNleCAobGFiZWxsZWQgYXMgZ2VuZGVyIG9uIHRoZSBhcHBsaWNhdGlvbikuIEEgc3R1ZGVudCBtYXkgZmlsZSBhIGZvcm0gdG8gcmVxdWVzdCBhIFxcXCJHZW5kZXIgQ2hhbmdlIEFzc2lnbm1lbnRcXFwiIHRvIGNoYW5nZSB0aGlzIGZpZWxkLiBUaGlzIGZpZWxkIGNvbnRhaW5zIGEgbWl4dHVyZSBvZiBnZW5kZXIgYW5kIHNleC4gQSBncm93aW5nIHBvcHVsYXRpb24gb2Ygc3R1ZGVudHMgY2hvb3NlIG5vdCB0byBkaXNjbG9zZSB0aGVpciBnZW5kZXIvc2V4IHdpdGggYSBcXCdQcmVmZXIgbm90IHRvIHJlcG9ydFxcJyBvcHRpb24uIFdlIGFyZSB1bmNlcnRhaW4gaG93IHRoaXMgbWFwcyB0byB0aGUgdHdvIGF2YWlsYWJsZSBjYXRlZ29yaWVzIG9mIFxcJ21hbGVcXCcgYW5kIFxcJ2ZlbWFsZVxcJy4nLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTWFsZVwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJGZW1hbGVcIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTm9uLWJpbmFyeVwiLCBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDI4fVxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJSYWNlXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOmNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICBcInNpemVcIjogODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVsaWdpb24vU3Bpcml0dWFsaXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOmNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJEaXMvYWJpbGl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkluZGlnZW5laXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxhbmd1YWdlcyBTcG9rZW5cIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJFdGhuaWNpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXRpb24vUmVnaW9uYWwgSWRlbnRpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgXVxufVxuXG5cblxuXG5cbiIsImltcG9ydCB7IG5vZGVzLCBjb2xvcnMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiA4MDAsXG4gICAgICBzdmdIZWlnaHQ6IDYwMCxcbiAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgbWFyZ2luTGVmdDogMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGVmYXVsdFRleHRGaWxsOiAnIzJDM0U1MCcsXG4gICAgICBub2RlVGV4dEZpbGw6ICd3aGl0ZScsXG4gICAgICBkZWZhdWx0Rm9udDogJ0hlbHZldGljYScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgZGF0YTogbm9kZXMsXG4gICAgICBub2RlczogbnVsbCxcbiAgICAgIGNvbm5lY3RvckxldmVsczogMixcbiAgICAgIGRlcHRoOiAxODAsXG4gICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgc3Ryb2tlV2lkdGg6IDMsXG4gICAgICBpbml0aWFsWm9vbTogMSxcbiAgICAgIHRpdGxlVGV4dFNpemU6ICc0MHB4JyxcbiAgICAgIGNlbnRlclRleHRTaXplOiAnMjVweCcsXG4gICAgICBzbGljZVRleHRTaXplOiAnMjVweCcsXG4gICAgICBzcGxpdFNpemU6ICcwLjVlbScsXG4gICAgICAgY29sb3I6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIGFjYWRlbWljVmFsdWVzOiB7XG4gICAgICAgICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICBEZWdyZWU6IFsnVG90YWwnXSxcbiAgICAgICAgRmFjdWx0eTogWydUb3RhbCddLFxuICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydUb3RhbCddLFxuICAgICAgfSxcbiAgICAgIGRpdmVyc2l0eVZhbHVlczoge1xuICAgICAgICBBZ2U6IFtdLFxuICAgICAgICBTZXg6IFtdLFxuICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogW10sXG4gICAgICB9LFxuICAgICAgb25Ob2RlQ2xpY2s6IG51bGwsXG4gICAgICB0b29sdGlwRGl2OiBudWxsLFxuICAgICAgbnVtRXhwYW5kZWQ6IDAsXG4gICAgICB1bmNsaWNrZWRXaWR0aDogJzJweCcsXG4gICAgICBjbGlja2VkV2lkdGg6ICcxMHB4JyxcbiAgICAgIGZvY3Vzc2VkOiBudWxsLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQ6ICdFbnJvbGxlZCBTdHVkZW50cycsXG4gICAgICBjZW50ZXJYOiAwLFxuICAgICAgY2VudGVyWTogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDaGFydFN0YXRlID0gKCkgPT4gYXR0cnM7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIER5bmFtaWNhbGx5IHNldCBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMgZm9yIENoYXJ0IGNsYXNzXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIFxuICAgIC8vRGVmaW5lIHRpdGxlXG4gICAgZDMuc2VsZWN0KCcjbmF2LXRpdGxlLXRleHQnKVxuICAgIFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMudGl0bGVUZXh0U2l6ZSlcbiAgICBcdFx0XHQudGV4dCgnQ2FybGV0b24gVW5pdmVyc2l0eSBTdHVkZW50cyBDb2xsZWN0ZWQgXFwmIE1pc3NpbmcgRGVtb2dyYXBoaWNzIERhdGEnKTtcbiAgICBcbiAgXG5cdFx0dGhpcy5yZW5kZXJMZWdlbmQoKTtcbiAgICB0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgLy90aGlzLmluaXRpYWxpemVFbnRlckV4aXRVcGRhdGVQYXR0ZXJuKCk7XG4gIH1cbiAgXG4gICAgIC8qIEZ1bmN0aW9uIGNvbnZlcnRzIHJnYmEgb2JqZWN0cyB0byByZ2JhIGNvbG9yIHN0cmluZyBcbiAgICB7cmVkOjExMCxncmVlbjoxNTAsYmx1ZToyNTUsYWxwaGE6MX0gID0+IHJnYmEoMTEwLDE1MCwyNTUsMSlcbiAgKi9cbiAgcmdiYU9ialRvQ29sb3IoeyByZWQsIGdyZWVuLCBibHVlLCBhbHBoYSB9KSB7XG4gICAgcmV0dXJuIGByZ2JhKCR7cmVkfSwke2dyZWVufSwke2JsdWV9LCR7YWxwaGF9KWA7XG4gIH1cbiAgXG4gICByZW5kZXJMZWdlbmQoKXtcbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgY29uc3QgbGVnZW5kID0gZDMuc2VsZWN0KCcjbm9kZS1sZWdlbmQnKTtcbiAgICBjb25zdCB3aWR0aCA9IDEyLCBoZWlnaHQgPSAxMjtcbiAgICBjb25zdCByZWN0QnVpbGRlciA9ICh4LCB5LCBjb2xvcikgPT4ge1xuICAgIFx0ICBsZWdlbmQgXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3IpKVxuICAgICAgXHRcdC5zdHlsZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHgsIHksIHRleHQsIHNpemUpID0+IHtcbiAgICAgICAgICBsZWdlbmRcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc2l6ZSlcbiAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICB0ZXh0QnVpbGRlcig2MCwgMTAsICdMRUdFTkQnLCAnMjBweCcpO1xuICAgIHJlY3RCdWlsZGVyKDIwLCAzNCwgY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDY0LCBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDk0LCBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNDAsICdVbmNvbGxlY3RlZCBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgICB0ZXh0QnVpbGRlcig0MCwgNzAsICdEaXZlcnNpdHkgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gXHRcdHRleHRCdWlsZGVyKDQwLCAxMDAsICdBY2FkZW1pYyBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiAgfVxuICBcbiAgcmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKCl7XG4gICAgXHRjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gIFx0ICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KCcjc2VsZWN0ZWQtYXR0cmlidXRlcycpO1xuICAgIFx0IHNlbC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICBcbiAgXHRcdCBjb25zdCB0ZXh0QnVpbGRlciA9ICh4LCB5LCB0ZXh0LCBzaXplKSA9PiB7XG4gICAgICAgICAgc2VsXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAgIC50ZXh0KHRleHQpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHNpemUpXG4gICAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcdH1cbiAgICAgICBcbiAgICAgIGxldCB5ID0gMTA7XG4gICAgXHRsZXQgeCA9IDUwO1xuICAgICAgdGV4dEJ1aWxkZXIoeC00MCwgeSwgJ1NFTEVDVEVEIENBVEVHT1JJRVMnLCAnMTVweCcpO1xuICAgIFx0eSs9MzA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuYWNhZGVtaWNWYWx1ZXMpe1xuICAgICAgXHRpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMSB8fCAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAxICYmIGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdWzBdICE9PSAnVG90YWwnKSl7XG4gICAgICAgIFx0dGV4dEJ1aWxkZXIoeCwgeSwgJy0gJyArIGF0dHIsICcxNXB4Jyk7XG4gICAgICAgICAgeSs9MzA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICBcdGlmIChhdHRycy5kaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICB0ZXh0QnVpbGRlcih4LCB5LCAnLSAnICsgYXR0ciwgJzE1cHgnKTtcbiAgICAgICAgICB5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICBcdGNvbnN0IG5jID0gdGhpcztcbiAgICBcdGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKClcbiAgICAgIFxuICAgIFx0Y29uc3Qgd2lkdGggPSBhdHRycy5zdmdXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodCA9IGF0dHJzLnN2Z0hlaWdodCAsXG4gICAgICAgICAgICBtYXhSYWRpdXMgPSAoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyKSAtIDU7XG5cbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5yYW5nZShbMCwgMiAqIE1hdGguUEldKVxuICAgICAgICAgICAgLmNsYW1wKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAucmFuZ2UoW21heFJhZGl1cyouMSwgbWF4UmFkaXVzXSk7XG5cbiAgICAgICAgY29uc3QgcGFydGl0aW9uID0gZDMucGFydGl0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAgICAgICAgIC5zdGFydEFuZ2xlKGQgPT4geChkLngwKSlcbiAgICAgICAgICAgIC5lbmRBbmdsZShkID0+IHgoZC54MSkpXG4gICAgICAgICAgICAuaW5uZXJSYWRpdXMoZCA9PiBNYXRoLm1heCgwLCB5KGQueTApKSlcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyhkID0+IE1hdGgubWF4KDAsIHkoZC55MSkpKTtcblxuICAgICAgICBjb25zdCBtaWRkbGVBcmNMaW5lID0gZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYWxmUGkgPSBNYXRoLlBJLzI7XG4gICAgICAgICAgICBjb25zdCBhbmdsZXMgPSBbeChkLngwKSAtIGhhbGZQaSwgeChkLngxKSAtIGhhbGZQaV07XG4gICAgICAgICAgICBjb25zdCByID0gTWF0aC5tYXgoMCwgKHkoZC55MCkgKyB5KGQueTEpKSAvIDIpO1xuXHRcdFx0XHRcdFxuICAgICAgICAgICAgY29uc3QgbWlkZGxlQW5nbGUgPSAoYW5nbGVzWzFdICsgYW5nbGVzWzBdKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBpbnZlcnREaXJlY3Rpb24gPSBtaWRkbGVBbmdsZSA+IDAgJiYgbWlkZGxlQW5nbGUgPCBNYXRoLlBJOyAvLyBPbiBsb3dlciBxdWFkcmFudHMgd3JpdGUgdGV4dCBjY3dcbiAgICAgICAgICAgIGlmIChpbnZlcnREaXJlY3Rpb24pIHsgYW5nbGVzLnJldmVyc2UoKTsgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZDMucGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5hcmMoMCwgMCwgciwgYW5nbGVzWzBdLCBhbmdsZXNbMV0sIGludmVydERpcmVjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC50b1N0cmluZygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHRGaXRzID0gZCA9PiB7XG4gICAgICAgICAgXHRpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBDSEFSX1NQQUNFID0gODtcblxuICAgICAgICAgICAgY29uc3QgZGVsdGFBbmdsZSA9IHgoZC54MSkgLSB4KGQueDApO1xuICAgICAgICAgICAgY29uc3QgciA9IE1hdGgubWF4KDAsICh5KGQueTApICsgeShkLnkxKSkgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHBlcmltZXRlciA9IHIgKiBkZWx0YUFuZ2xlO1xuXG4gICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUubGVuZ3RoICogQ0hBUl9TUEFDRSA8IHBlcmltZXRlcjtcbiAgICAgICAgfTtcblxuICAgIFx0XHRkMy5zZWxlY3QoXCIjbm9kZS1kaXZcIikuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpXG5cbiAgICBcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjY2hhcnQtY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcilcbiAgICAgICAgICAgIC5hdHRyKCd2aWV3Qm94JywgYCR7KC13aWR0aCsyNzUpIC8gMn0gJHsoLWhlaWdodC0xMjApIC8gMn0gJHt3aWR0aH0gJHtoZWlnaHR9YClcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoKSA9PiBmb2N1c09uKCkpOyAvLyBSZXNldCB6b29tIG9uIGNhbnZhcyBjbGlja1xuXG4gICAgXHRcdGNvbnNvbGUubG9nKHdpZHRoKVxuICAgIFx0XHRjb25zb2xlLmxvZyhoZWlnaHQpXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWdyb3VwJykuc3R5bGUubGVmdCA9ICh3aW5kb3cuaW5uZXJXaWR0aC0yNzUpLzIgICsgXCJweFwiXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWdyb3VwJykuc3R5bGUudG9wID0gKHdpbmRvdy5pbm5lckhlaWdodCszMCkvMiArIFwicHhcIlxuICAgIFxuICAgIFxuXHRcdFx0IFx0bGV0IHRleHRDaXJjbGU7XG5cbiAgICBcdFx0bGV0IHJvb3QgPSBub2Rlc1xuICAgICAgICByb290ID0gZDMuaGllcmFyY2h5KHJvb3QpO1xuICAgICAgICByb290LnN1bShkID0+IGQuc2l6ZSk7XG5cbiAgICBcdFx0cm9vdC5kZXNjZW5kYW50cygpLm1hcChkID0+e1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBkLmRhdGEubmFtZS5pbmNsdWRlcyhcIiBcIikgfHwgZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIFx0XHRcbiAgICBcdFx0Y29uc3Qgc29ydGVkTm9kZXMgPSBwYXJ0aXRpb24ocm9vdCkuZGVzY2VuZGFudHMoKS5zb3J0KChkMSwgZDIpID0+IHtcbiAgICAgICAgXHQgaWYgKGQxLmNoaWxkcmVuICYmICFkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAxOyBcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgaWYgKCFkMS5jaGlsZHJlbiAmJiBkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAtMTsgXG4gICAgICAgICAgIH1cbiAgICAgICAgICBcdHJldHVybiAwO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNsaWNlID0gc3ZnLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgICAuZGF0YShzb3J0ZWROb2Rlcyk7XG5cdFx0XHRcbiAgICAgICAgc2xpY2UuZXhpdCgpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdC8qIEdFVC9TRVQgU0xJQ0VTICovXG4gICAgICAgIGNvbnN0IG5ld1NsaWNlID0gc2xpY2UuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3NsaWNlJylcbiAgICAgICAgXHRcdC5vbignbW91c2VvdmVyJywgZCA9PiB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUudGV4dChkLmRhdGEuZGVzY3JpcHRpb24pICAgICAgIFxuICAgICAgICAgICAgfSkub24oJ21vdXNlb3V0JywgZCA9PiB7XG4gICAgICAgICAgICAgICB0ZXh0Q2lyY2xlLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGQgPT4ge1xuICAgICAgICAgICAgICBcdGlmIChbLi4uZDMuZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3RdLmluY2x1ZGVzKCdzZWxlY3QtYWxsLWNpcmNsZXMnKSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICBcdFx0Y29uc29sZS5sb2coXCJjbGNpa2VkIGFyY1wiKTtcbiAgICAgICAgICAgICAgXHRpZiAoZC5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgICBmb2N1c09uKGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3QoZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIG5ld1NsaWNlLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbWFpbi1hcmMnKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgIGQgPT4gdGhpcy5yZ2JhT2JqVG9Db2xvcihkLmRhdGEuY29sb3IgfHwgZC5wYXJlbnQuZGF0YS5jb2xvcikpXG4gICAgIFx0XHRcdFx0LnN0eWxlKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4gZC5kYXRhLm5hbWUgPT0gJycgPyAnMHB4JyA6IGF0dHJzLnVuY2xpY2tlZFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpO1xuXG4gICAgXHRcbiAgICBcdFx0bmV3U2xpY2UuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnaGlkZGVuLWFyYycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgKF8sIGkpID0+IGBoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIG1pZGRsZUFyY0xpbmUpO1xuXHRcdFx0XHRcbiBcbiAgICBcdFx0LyogQVBQRU5EIFRFWFQgKi9cbiAgICAgICAgY29uc3QgdGV4dCA9IG5ld1NsaWNlXG4gICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2FyYy10ZXh0JylcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLnNsaWNlVGV4dFNpemUpXG4gICAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCAoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGQucGFyZW50ICYmIGQucGFyZW50LnBhcmVudCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gdGV4dEZpdHMoZCkgPyBudWxsIDogJ25vbmUnXG4gICAgICAgICAgfSkuYXR0cignZHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGQuc3BsaXQpe1xuICAgICAgICAgICAgIHJldHVybiAoZC5pbnZlcnRlZCA/IFwiLVwiIDogXCIrXCIpICsgYXR0cnMuc3BsaXRTaXplO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiBcIjBlbVwiXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHRQYXRoJylcbiAgICAgICAgICAuYXR0cignc3RhcnRPZmZzZXQnLCAnNTAlJylcbiAgICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIChfLCBpKSA9PiBgI2hpZGRlbkFyYyR7aX1gKVxuICAgICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpe1xuICAgICAgICAgICAgICBpZiAoZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUuc3BsaXQoXCIvXCIpW2QuaW52ZXJ0ZWQgPyAwIDogMV1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLnNwbGl0KFwiIFwiKVtkLmludmVydGVkID8gMCA6IDFdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0MSA9IG5ld1NsaWNlXG4gICAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5zbGljZVRleHRTaXplKVxuICAgICAgICAgICAgICAuYXR0cignZHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGQuc3BsaXQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGQuaW52ZXJ0ZWQgPyBcIitcIiA6IFwiLVwiKSArYXR0cnMuc3BsaXRTaXplO1xuICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIwZW1cIlxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGV4dDFcbiAgICAgICAgICAgICAgLmFwcGVuZCgndGV4dFBhdGgnKVxuICAgICAgICAgICAgICAuYXR0cignc3RhcnRPZmZzZXQnLCAnNTAlJylcbiAgICAgICAgICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAoXywgaSkgPT4gYCNoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpe1xuICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS5uYW1lLmluY2x1ZGVzKFwiL1wiKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIi9cIilbZC5pbnZlcnRlZCA/IDEgOiAwXVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIiBcIilbZC5pbnZlcnRlZCA/IDEgOiAwXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICB9KTtcblx0XHRcdFx0XG5cblxuXG4gICAgXG4gICAgXHRcdC8qIEhBTkRMRSBTRUxFQ1QgQUxMICovXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLm9uY2xpY2sgPSBzZWxlY3RBbGw7XG4gICAgXHRcdGZ1bmN0aW9uIHNlbGVjdEFsbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gYXR0cnMuZm9jdXNzZWQuY2hpbGRyZW4uZXZlcnkoZCA9PiBkLnNlbGVjdGVkIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKVxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgYXR0cnMuZm9jdXNzZWQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgaWYgKGFsbFNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICBzZWxlY3QoY2hpbGQpOyAgXG4gICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLnNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIFx0XHRcbiAgICBcdFx0ZnVuY3Rpb24gc2VsZWN0KGQpe1xuICAgICAgICAgIFx0XHRpZiAoZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBcdFx0XG4gICAgICAgICAgXHRcdGQuc2VsZWN0ZWQgPSAhZC5zZWxlY3RlZFxuICAgICAgICAgIFx0XHRpZiAoZC5zZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtYnV0dG9uJykuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdChcIiNcIiArIGQucGFyZW50LmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKS5hdHRyKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIFx0aWYgKGF0dHJzLmZvY3Vzc2VkKXtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IGF0dHJzLmZvY3Vzc2VkLmNoaWxkcmVuLmV2ZXJ5KGQgPT4gZC5zZWxlY3RlZCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbClcbiAgICAgICAgICAgICAgICAgICBpZiAoYWxsU2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICBcdHN2Zy5zZWxlY3QoIFwiI1wiICsgZC5wYXJlbnQuZGF0YS5uYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgXCItY2lyY2xlXCIpLmF0dHIoJ2ZpbGwnLCBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmx1ZSkpXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSBkLnBhcmVudC5jaGlsZHJlbi5ldmVyeShkID0+IGQuc2VsZWN0ZWQgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpXG4gICAgICAgICAgICAgICAgICAgaWYgKGFsbFNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgXHRzdmcuc2VsZWN0KCBcIiNcIiArIGQucGFyZW50LmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKS5hdHRyKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsdWUpKVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBcdFx0XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkLnBhcmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnQubmFtZV0uaW5kZXhPZihkLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdLnB1c2goZC5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5pbmRleE9mKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAwKSB7Ly9pZiBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucHVzaCgnVG90YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXVswXSA9PSAnVG90YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgJ1RvdGFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5wdXNoKGQuZGF0YS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsICo9IGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWwgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1dBUk5JTkc6IEFkZGluZyBtb3JlIGFjYWRlbWljIGF0dHJpYnV0ZXMgbWF5IHJlc3VsdCBpbiBsb3cgdmlzaWJpbGl0eSBpbiB0aGUgdmlzdWFsaXphdGlvbi4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcdCB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoJ3BhdGgubWFpbi1hcmMnKS5zdHlsZSgnb3BhY2l0eScsKGQpID0+IGQuc2VsZWN0ZWQgPyAwLjUgOiAxLjApO1xuICAgICAgICB9XG5cbiAgICBcbiAgICBcdFx0ICAgIFx0XHQvKiBBUFBFTkQgU0VMRUNUIEFMTCBDSVJDTEVTICovXG4gICAgXHRcdC8vSGVscGVyIG1ldGhvZHNcbiAgICAgICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgXHRcdGNvbnN0IGdldENpcmNsZVkgPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgXHRcdE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIFxuICAgIFx0XHRjb25zdCBhdHRyaWJ1dGVTbGljZXMgPSBuZXdTbGljZS5maWx0ZXIoKGQpID0+IGQucGFyZW50ICYmIGQucGFyZW50LnBhcmVudCA9PSBudWxsICYmIGQuY2hpbGRyZW4hPW51bGwpO1xuICAgIFx0XHRhdHRyaWJ1dGVTbGljZXNcbiAgICAgICAgICBcdFx0XHQuYXBwZW5kKCdjaXJjbGUnKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsICdzZWxlY3QtYWxsLWNpcmNsZXMnKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGQgPT4gZC5kYXRhLm5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyBcIi1jaXJjbGVcIilcbiAgICBcdFx0XHRcdFx0XHQuYXR0cigncicsICcxNXB4JylcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignY3gnLCBkID0+IHtcbiAgICAgICAgICBcdFx0XHRcdGxldCByYWRpYW5zID0geChkLngwKSArICh4KGQueDEpIC0geChkLngwKSkvMjtcbiAgICAgICAgICBcdFx0XHRcdGxldCBjeCA9ICBnZXRDaXJjbGVYKHJhZGlhbnMsIHkoZC55MSkpO1xuICAgICAgICAgIFx0XHRcdFx0cmV0dXJuIGN4O1xuICAgICAgICBcdFx0XHRcdH0pXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ2N5JywgZCA9PiB7XG5cbiAgICAgICAgICBcdFx0XHRcdFx0bGV0IHJhZGlhbnMgPSB4KGQueDApICsgKHgoZC54MSkgLSB4KGQueDApKS8yO1xuICAgICAgICAgIFx0XHRcdFx0XHRsZXQgY3kgPSAgLWdldENpcmNsZVkocmFkaWFucywgeShkLnkxKSk7XG4gICAgICAgICAgXHRcdFx0XHRcdHJldHVybiBjeTtcbiAgICAgICAgXHRcdFx0XHR9KVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgIFx0XHRcdFx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywxKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuV2hpdGUpKVxuICAgIFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBkID0+IHtcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2xjaWtlZCBzZWxlY3QgYWxsXCIpO1xuICAgICAgICAgIFx0XHRcdFx0XHRcdFx0YXR0cnMuZm9jdXNzZWQgPSBkO1xuICAgICAgICAgIFx0XHRcdFx0XHRcdFx0c2VsZWN0QWxsKCk7XG4gICAgICAgICAgXHRcdFx0XHRcdFx0XHRhdHRycy5mb2N1c3NlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcbiAgICBcdFxuICAgIFx0XHQvKiBDUkVBVEUgQ0VOVEVSIENJUkNMRSAqL1xuICAgICAgIGxldCBpbm5lclJhZGl1cyA9IHkoMC4zMzMzMzMzKSBcbiAgICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWdyb3VwLW5vZGVzJylcblxuICAgICAgICBjZW50ZXJHcm91cC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZS1ub2RlcycpXG4gICAgICAgICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSk7XG4gICAgICAgIFxuICAgICAgICB0ZXh0Q2lyY2xlID0gY2VudGVyR3JvdXBcbiAgICAgICAgICAgIC5hcHBlbmQoJ2ZvcmVpZ25PYmplY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtaW5uZXJSYWRpdXMpXG4gICAgICAgICAgICAuYXR0cigneScsIC1pbm5lclJhZGl1cy8yKVxuICAgICAgICBcdFx0LmF0dHIoJ2R5JywgLTEpXG4gICAgICAgIFx0XHQuYXR0cignd2lkdGgnLCAgaW5uZXJSYWRpdXMqMilcbiAgXHRcdFx0XHRcdC5hdHRyKCdoZWlnaHQnLCAgaW5uZXJSYWRpdXMqMilcbiAgICAgICAgXHRcdC5hcHBlbmQoJ3hodG1sOnAnKVxuICAgICAgICAgICAgICAudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dClcbiAgICBcdFx0XHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5jZW50ZXJUZXh0U2l6ZSlcbiAgICBcdFx0XHRcdFx0XG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLm9uY2xpY2sgPSAoKSA9PiBmb2N1c09uKCk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZCk7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5jb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9jdXNPbihkID0geyB4MDogMCwgeDE6IDEsIHkwOiAwLCB5MTogMSB9KSB7XG4gICAgICAgICAgICAvLyBSZXNldCB0byB0b3AtbGV2ZWwgaWYgbm8gZGF0YSBwb2ludCBzcGVjaWZpZWRcblxuICAgICAgICAgIFx0aWYgKGQueDA9PTAgJiYgZC54MT09MSAmJiBkLnkwID09IDAgJiYgZC55MT09MSl7XG4gICAgICAgICAgICAgIGF0dHJzLmZvY3Vzc2VkID0gbnVsbDtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkKTtcbiAgICAgICBcdFx0XHRcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5jb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0LWFsbC1jaXJjbGVzJykpe1xuICAgICAgICAgICAgICAgXHRlbGVtLnN0eWxlLmRpc3BsYXk9ICdibG9jayc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF0dHJzLmZvY3Vzc2VkID0gZDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmNvbG9yID0nd2hpdGUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgICBcdGZvciAoY29uc3QgZWxlbSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QtYWxsLWNpcmNsZXMnKSl7XG4gICAgICAgICAgICAgICBcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gc3ZnLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAgICAgLnR3ZWVuKCdzY2FsZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeGQgPSBkMy5pbnRlcnBvbGF0ZSh4LmRvbWFpbigpLCBbZC54MCwgZC54MV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWQgPSBkMy5pbnRlcnBvbGF0ZSh5LmRvbWFpbigpLCBbZC55MCwgMV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9PiB7IHguZG9tYWluKHhkKHQpKTsgeS5kb21haW4oeWQodCkpOyB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgXHRpZiAoYXR0cnMuZm9jdXNzZWQpe1xuICAgICAgICAgICAgICBcdGxldCBjZW50ZXIgPSB0cmFuc2l0aW9uLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgXHRcdFx0XHRcdC5maWx0ZXIoKG4pID0+IG4uZGF0YS5uYW1lID09IGQuZGF0YS5uYW1lKVxuICAgICAgICAgICAgICAgIGNlbnRlci5zZWxlY3QoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpKVxuICAgICAgICAgICAgXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMHB4JylcbiAgICAgICAgICAgICAgXHRjZW50ZXIuc2VsZWN0KCcuYXJjLXRleHQnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICAgICAgICAgICAgXHRjZW50ZXIuc2VsZWN0KCcuYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgXHRcdC5hdHRyKCdmaWxsJywgIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5XaGl0ZSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgc2xpY2VzID0gdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ2cuc2xpY2UnKVxuICAgICAgICAgICAgICAgIHNsaWNlcy5zZWxlY3QoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgIG4gPT4gbmMucmdiYU9ialRvQ29sb3Iobi5kYXRhLmNvbG9yIHx8IG4ucGFyZW50LmRhdGEuY29sb3IpKVxuICAgICAgICAgICAgICBcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4gZC5kYXRhLm5hbWUgPT0gJycgPyAnMHB4JyA6IGF0dHJzLnVuY2xpY2tlZFdpZHRoKVxuICAgICAgICAgICAgICBcdHNsaWNlcy5zZWxlY3QoJy5hcmMtdGV4dCcpXG4gICAgICAgICAgICAgIFx0XHQuYXR0cignZmlsbCcsICBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmxhY2spKVxuICAgICAgICAgICAgICBcdHNsaWNlcy5zZWxlY3QoJy5hcmMtdGV4dDEnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsYWNrKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcdFxuICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBkID0+ICgpID0+IGFyYyhkKSk7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb24uc2VsZWN0QWxsKCdwYXRoLmhpZGRlbi1hcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBkID0+ICgpID0+IG1pZGRsZUFyY0xpbmUoZCkpO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uLnNlbGVjdEFsbCgnLmFyYy10ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkaXNwbGF5JywgZCA9PiAoKSA9PiB0ZXh0Rml0cyhkKSA/IG51bGwgOiAnbm9uZScpO1xuICAgICAgICAgXHRcdFxuICAgICAgICAgIFx0dHJhbnNpdGlvbi5zZWxlY3RBbGwoJy5hcmMtdGV4dDEnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2Rpc3BsYXknLCBkID0+ICgpID0+IHRleHRGaXRzKGQpID8gbnVsbCA6ICdub25lJyk7XG5cbiAgICAgICAgICAgIG1vdmVTdGFja1RvRnJvbnQoZCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVTdGFja1RvRnJvbnQoZWxEKSB7XG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbCgnLnNsaWNlJykuZmlsdGVyKGQgPT4gZCA9PT0gZWxEKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5wYXJlbnQpIHsgbW92ZVN0YWNrVG9Gcm9udChkLnBhcmVudCk7IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICBcbiAgICBcblxuXG4gICAgXG4gICAgXG4gICAgIFx0cmV0dXJuIHRoaXM7XG4gIH1cbiAgXG59IiwiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9ub2Rlcyc7XG5cbmV4cG9ydCBjbGFzcyBTdW5idXJzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vRXhwb3NlZCB2YXJpYWJsZXNcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGlkOiBgSUQke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsIC8vIElkIGZvciBldmVudCBoYW5kbGluZ3NcbiAgICAgIHN2Z1dpZHRoOiAzMDAwLFxuICAgICAgc3ZnSGVpZ2h0OiAzMDAwLFxuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoOiA0MCxcbiAgICAgIHRleHREaXN0YW5jZTogMjUsXG4gICAgICBvdXRlclRleHRTaXplOiAnMjVweCcsXG4gICAgICBhdHRyaWJ1dGVJbmRleDogbnVsbCxcbiAgICAgIGhpc3Rvcnk6IFtdLFxuICAgICAgZGlzcGxheU5vZGVzOiBudWxsLFxuICAgICAgdmFsdWVzOiBudWxsLFxuICAgICAgY29sb3JzOiB7XG4gICAgICAgIE1hbGU6ICcjZmM4ZDU5JyxcbiAgICAgICAgRmVtYWxlOiAnIzkxYmZkYicsXG4gICAgICAgIEludGVybmF0aW9uYWw6ICcjOTk4ZWMzJyxcbiAgICAgICAgRG9tZXN0aWM6ICcjZjFhMzQwJyxcbiAgICAgICAgJzw9MTcnOiAnI2Y3ZmNmNScsXG4gICAgICAgICcxOC0yMCc6ICcjZTVmNWUwJyxcbiAgICAgICAgJzIxLTI1JzogJyNjN2U5YzAnLFxuICAgICAgICAnMjYtMzAnOiAnI2ExZDk5YicsXG4gICAgICAgICczMS0zNSc6ICcjNzRjNDc2JyxcbiAgICAgICAgJzM2LTQ1JzogJyM0MWFiNWQnLFxuICAgICAgICAnNDYtNTUnOiAnIzIzOGI0NScsXG4gICAgICAgICc1NSsnOiAnIzAwNmQyYycsXG4gICAgICAgIDA6ICcjOTg5ODk4JyxcbiAgICAgIH0sXG4gICAgICB0ZXh0Q2lyY2xlc0NhdGVnb3J5OiBbXSxcbiAgICAgIHRleHRDaXJjbGVzQ291bnQ6IFtdLFxuICAgICAgdGV4dENpcmNsZXNQZXJjZW50OiBbXSxcbiAgICAgIHRpdGxlVGV4dFNpemU6ICcyNXB4JyxcbiAgICAgIHRpdGxlVGV4dEhlaWdodDogNjAsXG4gICAgICBjb21wYXJlTW9kZTogZmFsc2UsXG4gICAgICBsZWdlbmRXaWR0aDogMTUwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSxcbiAgICAgIHBsYWNlaG9sZGVySW5uZXJUZXh0MTogJ0NhdGVnb3J5JyxcbiAgICAgIHBsYWNlaG9sZGVySW5uZXJUZXh0MjogJyMgb2YgU3R1ZGVudHMnLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQzOiAnJSBpbiBHcm91cCcsXG4gICAgfTtcblxuICAgIC8vZ2V0IGF0dHJpYnV0ZXMgbWV0aG9kXG4gICAgdGhpcy5nZXRDaGFydFN0YXRlID0gKCkgPT4gYXR0cnM7XG5cbiAgICAvL2dldHRlciAmIHNldHRlclxuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdGhpc1trZXldID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IGBhdHRyc1snJHtrZXl9J10gPSBfYDtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWwoYGF0dHJzWycke2tleX0nXTtgKTtcbiAgICAgICAgfVxuICAgICAgICBldmFsKHN0cmluZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qIFJlbW92ZXMgYWxsIGVsZW1lbnRzIGluIHN2ZyAqL1xuICByZW1vdmVBbGwoKSB7XG4gICAgdGhpcy5nZXRDaGFydFN0YXRlKCkuc3ZnLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICB9XG5cbiAgcmdiYU9ialRvQ29sb3IoeyByZWQsIGdyZWVuLCBibHVlLCBhbHBoYSB9KSB7XG4gICAgcmV0dXJuIGByZ2JhKCR7cmVkfSwke2dyZWVufSwke2JsdWV9LCR7YWxwaGF9KWA7XG4gIH1cbiAgXG4gIC8qIENvbnZlcnRzIG9iamVjdHMgdG8gc2xpY2VzIHdpdGggcXVlcmllcyAqL1xuICBnZXRWYWx1ZXMoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy8gU29ydGluZyBhZ2VcbiAgICBsZXQgb3JkZXIgPSB7Jzw9MTcnOiAwLFxuICAgICAgICAnMTgtMjAnOiAxLFxuICAgICAgICAnMjEtMjUnOiAyLFxuICAgICAgICAnMjYtMzAnOiAzLFxuICAgICAgICAnMzEtMzUnOiA0LFxuICAgICAgICAnMzYtNDUnOiA1LFxuICAgICAgICAnNDYtNTUnOiA2LFxuICAgICAgICAnNTUrJyA6IDd9O1xuICAgIGRpdmVyc2l0eVZhbHVlcy5BZ2Uuc29ydCgoZTEsIGUyKSA9PiAob3JkZXJbZTFdIC0gb3JkZXJbZTJdKSk7XG4gXHRcdFxuICAgIC8vU29ydGluZyB5ZWFyXG4gICAgYWNhZGVtaWNWYWx1ZXNbJ0FjYWRlbWljIFllYXInXS5zb3J0KChlMSwgZTIpID0+IChOdW1iZXIoZTEuc3Vic3RyaW5nKDAsIDQpKSAtIE51bWJlcihlMi5zdWJzdHJpbmcoMCwgNCkgKSkpO1xuICAgIFxuICAgIC8vcHJlcGFyaW5nIHNsaWNlc1xuICAgIGNvbnN0IGNhcnRlc2lhbiA9ICguLi5hKSA9PlxuICAgICAgYS5yZWR1Y2UoKGEsIGIpID0+XG4gICAgICAgIGEuZmxhdE1hcCgoZCkgPT4gYi5tYXAoKGUpID0+IFtkLCBlXS5mbGF0KCkpKVxuICAgICAgKTtcbiAgICBsZXQgc2xpY2VzID0gY2FydGVzaWFuKFxuICAgICAgYWNhZGVtaWNWYWx1ZXNbJ0FjYWRlbWljIFllYXInXSxcbiAgICAgIGFjYWRlbWljVmFsdWVzLkRlZ3JlZSxcbiAgICAgIGFjYWRlbWljVmFsdWVzLkZhY3VsdHksXG4gICAgICBhY2FkZW1pY1ZhbHVlc1snU3R1ZHkgU3RhdHVzJ11cbiAgICApO1xuXG4gICAgY29uc3QgbWFrZVF1ZXJ5ID0gKHNsaWNlLCBkaXZlcnNpdHlBdHRyLCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IHF1ZXJ5ID0gWy4uLnNsaWNlXTtcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICAgICAgaWYgKHByb3AgIT09IGRpdmVyc2l0eUF0dHIpIHtcbiAgICAgICAgICBxdWVyeS5wdXNoKCdUb3RhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfTtcblxuICAgIC8vY29udmVydCBzbGljZXMgdG8ga2V5IGZvcm1hdFxuXG4gICAgbGV0IHZhbHVlcyA9IHt9O1xuICAgIGZvciAobGV0IHNsaWNlIG9mIHNsaWNlcykge1xuICAgICAgbGV0IHN0ciA9IHNsaWNlLnRvU3RyaW5nKCk7XG4gICAgICB2YWx1ZXNbc3RyXSA9IHt9O1xuICAgICAgZm9yIChsZXQgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICAgICAgaWYgKGRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPT0gMCkgY29udGludWU7XG4gICAgICAgIHZhbHVlc1tzdHJdW2F0dHJdID0ge307XG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIGRpdmVyc2l0eVZhbHVlc1thdHRyXSkge1xuICAgICAgICAgIHZhbHVlc1tzdHJdW2F0dHJdW3ZhbHVlXSA9IG1ha2VRdWVyeShcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBhcmNzLCByZXR1cm4gYXJjIHdpZHRoLCBpbm5lcnJhZGl1cyBhbmQgdGV4dCBzaXplKi9cbiAgY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyh4LCB5LCBudW1BcmNzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICBsZXQgdGV4dEhlaWdodE9mZnNldCA9IDUwO1xuXG4gICAgbGV0IG1pbiA9IE1hdGgubWluKHgsIHkgLSB0ZXh0SGVpZ2h0T2Zmc2V0KTtcbiAgICBsZXQgYXJjV2lkdGggPSBtaW4gLyAoMiAqIG51bUFyY3MgKyA3KTsgLy9taW4gPSAyKm51bUFyY3MqYXJjV2lkdGggKyAyKmlubmVyUmFkaXVzLCBpbm5lclJhZGl1cyA9IDMqYXJjV2lkdGhcbiAgICBsZXQgaW5uZXJSYWRpdXMgPSAzICogYXJjV2lkdGg7XG5cbiAgICBsZXQgbXVsdGlwbGllciA9IDEuNTtcbiAgICBsZXQgbiA9IDEzOyAvLydpbnRlcm5hdGlvbmFsJyB3aXRoIDEzIGxldHRlcnMgaXMgbG9uZ2VzdCB3b3JkIGluIGRpdmVyc2l0eSBhdHRyaWJ1dGVzXG4gICAgbGV0IGlubmVyVGV4dFNpemUgPVxuICAgICAgKG11bHRpcGxpZXIgKiAoMiAqIGlubmVyUmFkaXVzKSkgLyBuICsgJ3B4JztcbiAgICByZXR1cm4ge1xuICAgICAgYXJjV2lkdGg6IGFyY1dpZHRoLFxuICAgICAgaW5uZXJSYWRpdXM6IGlubmVyUmFkaXVzLFxuICAgICAgaW5uZXJUZXh0U2l6ZTogaW5uZXJUZXh0U2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBzcXVhcmVzLCByZXR1cm4gcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemUgKi9cbiAgY29tcHV0ZUNvbXBhcmVEaW1lbnNpb25zKHgsIHksIG4pIHtcbiAgICAvLyBDb21wdXRlIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zLCBhbmQgY2VsbCBzaXplXG4gICAgbGV0IHJhdGlvID0geCAvIHk7XG4gICAgbGV0IG5jb2xzX2Zsb2F0ID0gTWF0aC5zcXJ0KG4gKiByYXRpbyk7XG4gICAgbGV0IG5yb3dzX2Zsb2F0ID0gbiAvIG5jb2xzX2Zsb2F0O1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSBoZWlnaHRcbiAgICBsZXQgbnJvd3MxID0gTWF0aC5jZWlsKG5yb3dzX2Zsb2F0KTtcbiAgICBsZXQgbmNvbHMxID0gTWF0aC5jZWlsKG4gLyBucm93czEpO1xuICAgIHdoaWxlIChucm93czEgKiByYXRpbyA8IG5jb2xzMSkge1xuICAgICAgbnJvd3MxKys7XG4gICAgICBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUxID0geSAvIG5yb3dzMTtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgd2lkdGhcbiAgICBsZXQgbmNvbHMyID0gTWF0aC5jZWlsKG5jb2xzX2Zsb2F0KTtcbiAgICBsZXQgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIHdoaWxlIChuY29sczIgPCBucm93czIgKiByYXRpbykge1xuICAgICAgbmNvbHMyKys7XG4gICAgICBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUyID0geCAvIG5jb2xzMjtcblxuICAgIC8vIEZpbmQgdGhlIGJlc3QgdmFsdWVzXG4gICAgbGV0IG5yb3dzLCBuY29scywgY2VsbF9zaXplO1xuICAgIGlmIChjZWxsX3NpemUxIDwgY2VsbF9zaXplMikge1xuICAgICAgbnJvd3MgPSBucm93czI7XG4gICAgICBuY29scyA9IG5jb2xzMjtcbiAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5yb3dzID0gbnJvd3MxO1xuICAgICAgbmNvbHMgPSBuY29sczE7XG4gICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUxO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNpemU6IGNlbGxfc2l6ZSwgcm93czogbnJvd3MsIGNvbHM6IG5jb2xzIH07XG4gIH1cblxuICAvKiBGZXRjaGluZyBkYXRhIGFuZCBzZXR0aW5nIHVwIHN2ZyBjb250YWluZXIgKi9cbiAgYXN5bmMgc2V0dXAodXJsKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgbGV0IHNiID0gdGhpcztcblxuICAgIC8vbG9hZCBkYXRhIHN5bmNocm9ub3VzbHlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZDMuY3N2KHVybCk7XG5cbiAgICBhdHRycy5hdHRyaWJ1dGVJbmRleCA9IGRhdGEuY29sdW1ucztcblxuICAgIC8vY29udmVydCBkYXRhIHRvIG9iamVjdCBmb3JtYXRcbiAgICBhdHRycy5kYXRhID0gZGF0YS5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgb2JqLCBpKSB7XG4gICAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmopO1xuXG4gICAgICB2YWx1ZXMucG9wKCk7XG5cbiAgICAgIG1hcFsnJy5jb25jYXQodmFsdWVzKV0gPSBvYmouQ291bnQ7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcblxuICAgIC8vIGNyZWF0ZSBjb250YWluZXJcbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KGF0dHJzLmNvbnRhaW5lcilcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgIFxuICAgIC8vIHNldHRpbmcgdXAgY29tcGFyZSBidXR0b25cbiAgICBjb25zdCB0b2dnbGVDb21wYXJlID0gKCkgPT4ge1xuICAgICAgYXR0cnMuY29tcGFyZU1vZGUgPSAhYXR0cnMuY29tcGFyZU1vZGU7XG4gICAgICBzYi5yZW5kZXIoYXR0cnMudmFsdWVzKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgJ2NvbXBhcmUtYnV0dG9uJ1xuICAgICkub25jbGljayA9IHRvZ2dsZUNvbXBhcmU7XG5cbiAgICBhdHRycy5zdmcgPSBzdmc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiBDb252ZXJ0aW5nIGlucHV0IG9iamVjdHMgdG8gdmFsdWVzIGZvciBkaXNwbGF5ICovXG4gIGluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKFxuICAgICAgYWNhZGVtaWNWYWx1ZXMsXG4gICAgICBkaXZlcnNpdHlWYWx1ZXNcbiAgICApO1xuXG4gICAgXG4gICAgY29uc3QgdGl0bGVCdWlsZGVyID0gKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpID0+IHtcbiAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICBcbiAgICAgIGNvbnN0IGdldEF0dHJBc1RpdGxlID0gKGF0dHIpID0+IHtcbiAgICAgICAgIGlmIChhdHRyID09PSAnQWNhZGVtaWMgWWVhcicpe1xuICAgICAgICAgICBcdHJldHVybiAnIDIwMTMtMjAyMSc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnRGVncmVlJyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgZGVncmVlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnRmFjdWx0eScpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIGZhY3VsdGllcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnU3R1ZHkgU3RhdHVzJyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgc3R1ZHkgc3RhdHVzZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0FnZScpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIGFnZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ1NleCcpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIHNleGVzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdDaXRpemVuc2hpcCBTdGF0dXMnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBjaXRpemVuc2hpcCBzdGF0dXNlcyc7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYWNhZGVtaWNWYWx1ZXMpe1xuICAgICAgXHRpZiAoYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAxICYmIGFjYWRlbWljVmFsdWVzW2F0dHJdWzBdID09PSAnVG90YWwnKXtcbiAgICAgICAgXHRsaXN0LnB1c2goZ2V0QXR0ckFzVGl0bGUoYXR0cikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgXHRpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIFx0bGlzdC5wdXNoKGdldEF0dHJBc1RpdGxlKGF0dHIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGlzdC5sZW5ndGggPT0gMClcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgXG5cdFx0XHRpZiAobGlzdC5sZW5ndGggPT0gMSlcbiAgICAgICBcdHJldHVybiAnU3R1ZGVudHMgYWNyb3NzICcgKyBsaXN0LnBvcCgpICsgJy4nOyBcbiAgICAgIFxuXHRcdFx0cmV0dXJuICdTdHVkZW50cyBhY3Jvc3MgJyArIGxpc3Quc2xpY2UoMCwgLTEpLmpvaW4oKSArICcgYW5kICcgKyBsaXN0LnBvcCgpICsgJy4nO1xuICAgIH07XG4gICAgIFxuICAgIGNvbnN0IHdpZHRoID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdC1jb250YWluZXInKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYXR0cnMubGVnZW5kV2lkdGg7XG4gICAgXG4gICAgbGV0IHRpdGxlID0gZDNcbiAgICAgIC5zZWxlY3QoJyN2aXotdGl0bGUtdGV4dCcpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLnRpdGxlVGV4dFNpemUpXG4gICAgICAudGV4dCh0aXRsZUJ1aWxkZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykpO1xuICAgIFxuICAgIHRoaXMucmVuZGVyKHZhbHVlcyk7XG4gIH1cblxuICAvKiBSZWN1cnJpbmcgcmVuZGVyICovXG4gIHJlbmRlcih2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy8gU2V0dGluZyB2YWx1ZXMgc28gdmFsdWVzIGlzIHN0aWxsIGFjY2Vzc2libGUgd2hlbiBjb21wYXJlIGlzIHRvZ2dsZWRcbiAgICBhdHRycy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgICBcbiAgICAvLyByZXB1cnBvc2luZyBiYWNrIGJ1dHRvbiBpZiBuZWNlc3NhcnlcbiAgICBpZiAoYXR0cnMuaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBiYWNrID0gKCkgPT4gc2IucmVuZGVyKGF0dHJzLmhpc3RvcnkucG9wKCkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBhdHRycy5kaXNwbGF5Tm9kZXM7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGFsbCBlbGVtZW50cyBpbiBzdmdcbiAgICB0aGlzLnJlbW92ZUFsbCgpO1xuXG4gICAgLy8gcmUtY3JlYXRlIHRoZSBuZXcgZWxlbWVudHNcbiAgICBpZiAoIWF0dHJzLmNvbXBhcmVNb2RlKSB7IFxuICAgICAgXG4gICAgICAvLyBkaXNhYmxlIGNvbXBhcmUgbW9kZSBpZiBvbmx5IDEgc2xpY2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmlubmVySFRNTCA9ICdDb21wYXJlJztcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID10aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmNvbG9yID10aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQnV0dG9uKTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuY29sb3IgPSd3aGl0ZSc7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMucmVuZGVyU3VuYnVyc3QodmFsdWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJ1dHRvbik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5pbm5lckhUTUwgPSAnQ29uam9pbic7XG4gICAgICB0aGlzLnJlbmRlckNvbXBhcmUodmFsdWVzKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJMZWdlbmQodmFsdWVzKTtcbiAgfVxuXG4gIC8vIHJlbmRlciB0aGUgc3VuYnVyc3RcbiAgcmVuZGVyU3VuYnVyc3QodmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgbGV0IHNiID0gdGhpcztcblxuICAgIFxuICAgIC8vSGVscGVyIHZhbHVlc1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuICAgIGNvbnN0IGFyY0xlbmd0aCA9ICgyICogTWF0aC5QSSkgLyBudW1TbGljZXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWNvbnRhaW5lcicpXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gK2NvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSArY29udGFpbmVyLndpZHRoO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0LWF0dHJzLnRpdGxlVGV4dEhlaWdodDtcbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gYXR0cnMubGVnZW5kV2lkdGg7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG51bUFyY3NcbiAgICApO1xuICAgIGNvbnN0IGFyY1dpZHRoID0gcGFyYW1zLmFyY1dpZHRoO1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcGFyYW1zLmlubmVyUmFkaXVzO1xuICAgIGNvbnN0IGlubmVyVGV4dFNpemUgPSBwYXJhbXMuaW5uZXJUZXh0U2l6ZTtcblxuICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgLmF0dHIoXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlKCR7d2lkdGggLyAyfSwke2hlaWdodC8gMiAgKyBhdHRycy50aXRsZVRleHRIZWlnaHR9KWBcbiAgICAgICk7XG5cbiAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NlbnRlci1ncm91cCcpO1xuICAgIGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ2lkJywgJ2NlbnRlci1jaXJjbGUnKVxuICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAuYXR0cigncicsIGlubmVyUmFkaXVzKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJy0wLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dCggYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcwLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dCggYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQyKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMyA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICcxLjVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDMpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAvL0hlbHBlciBtZXRob2RzXG4gICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBjb25zdCBnZXRDaXJjbGVZID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuXG4gICAgY29uc3QgZ2V0VGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHdvcmRzLmZpbHRlcihcbiAgICAgICAgKHdvcmQpID0+IHdvcmQgIT09ICdUb3RhbCdcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8vbGluZSBidWlsZGVyXG4gICAgY29uc3QgbGluZUJ1aWxkZXIgPSAoc2xpY2VDb3VudCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPSAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcztcbiAgICAgIGlmIChudW1TbGljZXMgJSAyID09IDEpIHJhZGlhbnMgKz0gTWF0aC5QSTtcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgnbGluZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCA1KVxuICAgICAgICAuYXR0cigneDEnLCBnZXRDaXJjbGVYKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgLmF0dHIoJ3kxJywgZ2V0Q2lyY2xlWShyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICd4MicsXG4gICAgICAgICAgZ2V0Q2lyY2xlWChcbiAgICAgICAgICAgIHJhZGlhbnMsXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArXG4gICAgICAgICAgICAgIG51bUFyY3MgKiBhcmNXaWR0aCArXG4gICAgICAgICAgICAgIGV4dGVuZGVkTGluZUxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneTInLFxuICAgICAgICAgIGdldENpcmNsZVkoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vdGV4dCBidWlsZGVyXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoc2xpY2UsIHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID1cbiAgICAgICAgKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXMgK1xuICAgICAgICBoYWxmU2xpY2VSYWRpYW5zO1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0KHNsaWNlKTtcbiAgICAgIGxldCByYWRpdXMgPVxuICAgICAgICBpbm5lclJhZGl1cyArIG51bUFyY3MgKiBhcmNXaWR0aCArIHRleHREaXN0YW5jZTtcbiAgICAgIGxldCB4ID0gZ2V0Q2lyY2xlWChyYWRpYW5zLCByYWRpdXMpO1xuICAgICAgbGV0IHkgPSAtZ2V0Q2lyY2xlWShyYWRpYW5zLCByYWRpdXMpO1xuXG4gICAgICBpZiAoeCA8IC0xKSB4IC09IHRleHQubGVuZ3RoICogOTtcbiAgICAgIC8vbGVmdCBzaWRlIGFkanVzdFxuICAgICAgZWxzZSBpZiAoeCA8IDEpIHggLT0gdGV4dC5sZW5ndGggKiA1OyAvL21pZGRsZSB0ZXh0IGFkanVzdFxuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5vdXRlclRleHRTaXplKVxuICAgICAgXHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAudGV4dCh0ZXh0KTtcbiAgICB9O1xuXG4gICAgLy9hcmMgYnVpbGRlclxuICAgIGNvbnN0IGFyY0J1aWxkZXIgPSAoXG4gICAgICBhcmMsXG4gICAgICBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUsXG4gICAgICBzbGljZSxcbiAgICAgIGF0dHIsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNvdW50LFxuICAgICAgcGVyY2VudFxuICAgICkgPT4ge1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKHtcbiAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSlcbiAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgdmFsdWUgKyBcInJlY3QnXVwiKS5zdHlsZShcbiAgICAgICAgICAgICdzdHJva2Utd2lkdGgnLFxuICAgICAgICAgICAgM1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdBZ2UnKSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUxXG4gICAgICAgICAgICAgICAgLnRleHQoYXR0ciArICc6ICcgKyB2YWx1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KHZhbHVlKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KCc8NScpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dChjb3VudCkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRleHRDaXJjbGUzXG4gICAgICAgICAgICAgIC50ZXh0KFxuICAgICAgICAgICAgICAgIE51bWJlcigocGVyY2VudCAqIDEwMCkudG9GaXhlZCgxKSkgKyAnJSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQoJycpO1xuICAgICAgICAgICAgdGV4dENpcmNsZTJcbiAgICAgICAgICAgICAgLnRleHQoJ05vIFN0dWRlbnRzJylcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgdGV4dENpcmNsZTMudGV4dCgnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuXG4gICAgICAgICAgdGV4dENpcmNsZTFcbiAgICAgICAgICAgIC50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MSlcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgdGV4dENpcmNsZTIudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDIpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICB0ZXh0Q2lyY2xlMy50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MykuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyB2YWx1ZSArIFwicmVjdCddXCIpLnN0eWxlKFxuICAgICAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobnVtQXJjcyA9PSAxKSB7XG4gICAgICAgICAgICBhbGVydCgnVW5hYmxlIHRvIHByb3ZpZGUgYW55IG1vcmUgZGV0YWlsJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdTbGljZSA9IHNsaWNlICsgJywnICsgdmFsdWU7XG4gICAgICAgICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgW25ld1NsaWNlXTogSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlc1tzbGljZV0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhdHRycy5hdHRyaWJ1dGVJbmRleC5pbmRleE9mKFxuICAgICAgICAgICAgICAgIGF0dHJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIxIGluIG5ld1ZhbHVlc1tuZXdTbGljZV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cjEgPT09IGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXVtcbiAgICAgICAgICAgICAgICAgICAgYXR0cjFcbiAgICAgICAgICAgICAgICAgIF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV1bdmFsdWUxXVtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICBdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWVzKTtcblxuICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgXG4gIFxuICAgIC8vYnVpbGQgYXJjc1xuICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IHNsaWNlIGluIHZhbHVlcykge1xuICAgICAgbGV0IGFyY0NvdW50ID0gMDtcbiAgICAgIGF0dHJsb29wOiBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgYXJjID0gZDNcbiAgICAgICAgICAuYXJjKClcbiAgICAgICAgICAuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIGFyY0NvdW50KVxuICAgICAgICAgIC5vdXRlclJhZGl1cyhcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiAoYXJjQ291bnQgKyAxKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgbGV0IHNsaWNlU3RhcnRBbmdsZSA9IHNsaWNlQ291bnQgKiBhcmNMZW5ndGg7XG5cbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VtID09IDApIHtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSArIGFyY0xlbmd0aCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgKTtcbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICcwJyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG4gICAgICAgICAgICBcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHNsaWNlKVxuICAgICAgICAgIFx0Y29uc29sZS5sb2cocGVyY2VudCArIFwiOiBcIiArIGNvdW50ICsgXCIgOiBcIiArIHN1bSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgICAgYXJjLFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgcGVyY2VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAobnVtU2xpY2VzID09IDEpIHRleHRCdWlsZGVyKHNsaWNlLCAwLjUpO1xuICAgICAgZWxzZSB0ZXh0QnVpbGRlcihzbGljZSwgc2xpY2VDb3VudCk7XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuXG4gICAgLy9idWlsZCBsaW5lcyBhZnRlciBzbyB0aGV5IGFyZSBvbiB0b3BcbiAgICBmb3IgKFxuICAgICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgICAgc2xpY2VDb3VudCA8IG51bVNsaWNlcyAmJiBudW1TbGljZXMgPiAxO1xuICAgICAgc2xpY2VDb3VudCsrXG4gICAgKSB7XG4gICAgICBsaW5lQnVpbGRlcihzbGljZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5VmFsdWVzKHZhbHVlcywgc2VsZWN0ZWRWYWx1ZSwgYXR0cikge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3Qgc2IgPSB0aGlzO1xuXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZXNbc2xpY2VdW2F0dHJdW3NlbGVjdGVkVmFsdWVdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKFxuICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVtzZWxlY3RlZFZhbHVlXV1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgaWYgKGF0dHIgPT09ICdBZ2UnKVxuICAgICAgICAgIFx0YXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeVtzbGljZUNvdW50XS50ZXh0KCdBZ2U6ICcgKyBzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5W3NsaWNlQ291bnRdLnRleHQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dCgnPDUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KGNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJ05vJyk7XG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50W3NsaWNlQ291bnRdLnRleHQoXG4gICAgICAgICAgICAnU3R1ZGVudHMnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgICAvL2QzLnNlbGVjdChcInRleHRbaWQ9J2VsZW1lbnQuaWQud2l0aC5kb3RzJ11cIik7XG4gICAgY29uc3QgaWQgPSBzZWxlY3RlZFZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWVzKHZhbHVlKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeSkge1xuICAgICAgdGV4dENpcmNsZS50ZXh0KCcnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0ZXh0Q2lyY2xlIG9mIGF0dHJzLnRleHRDaXJjbGVzQ291bnQpIHtcbiAgICAgIHRleHRDaXJjbGUudGV4dCgnJyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQpIHtcbiAgICAgIHRleHRDaXJjbGUudGV4dCgnJyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGlkID0gdmFsdWUgKyAncmVjdCc7XG4gICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIGlkICsgXCInXVwiKS5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gIH1cblxuICByZW5kZXJDb21wYXJlKHZhbHVlcykge1xuICAgIC8vSGVscGVyIHZhbHVlc1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgY29uc3Qgc2IgPSB0aGlzO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdC1jb250YWluZXInKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcblxuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDsgLy9taW51cyBiZWNhdXNlIG9mIGxlZ2VuZFxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodCAtIGF0dHJzLnRpdGxlVGV4dEhlaWdodDtcbiAgICBjb25zdCBudW1TbGljZXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aDtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gc2IuY29tcHV0ZUNvbXBhcmVEaW1lbnNpb25zKFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBudW1TbGljZXNcbiAgICApOyAvL3Jvd3MsIGNvbHVtbnMgYW5kIHNxdWFyZSBzaXplXG4gICAgY29uc3QgYXJjTGVuZ3RoID0gMiAqIE1hdGguUEk7XG5cbiAgICBjb25zdCByb3dzID0gZGltZW5zaW9ucy5yb3dzO1xuICAgIGNvbnN0IGNvbHMgPSBkaW1lbnNpb25zLmNvbHM7XG4gICAgY29uc3Qgc2l6ZSA9IGRpbWVuc2lvbnMuc2l6ZTtcbiAgICBjb25zdCB3aGl0ZXNwYWNlV2lkdGggPSB3aWR0aCAtIGNvbHMgKiBzaXplO1xuICAgIGNvbnN0IHdoaXRlc3BhY2VIZWlnaHQgPSBoZWlnaHQgLSByb3dzICogc2l6ZTtcblxuICAgIGNvbnN0IG51bUFyY3MgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKHZhbHVlcylbMF0pXG4gICAgICAubGVuZ3RoO1xuICAgIGNvbnN0IGV4dGVuZGVkTGluZUxlbmd0aCA9IGF0dHJzLmV4dGVuZGVkTGluZUxlbmd0aDtcbiAgICBjb25zdCBoYWxmU2xpY2VSYWRpYW5zID0gTWF0aC5QSSAvIG51bVNsaWNlcztcbiAgICBjb25zdCB0ZXh0RGlzdGFuY2UgPSBhdHRycy50ZXh0RGlzdGFuY2U7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoXG4gICAgICBzaXplLFxuICAgICAgc2l6ZSxcbiAgICAgIG51bUFyY3NcbiAgICApO1xuICAgIGNvbnN0IGFyY1dpZHRoID0gcGFyYW1zLmFyY1dpZHRoO1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcGFyYW1zLmlubmVyUmFkaXVzO1xuICAgIGNvbnN0IGlubmVyVGV4dFNpemUgPSBwYXJhbXMuaW5uZXJUZXh0U2l6ZTtcblxuICAgIC8qIEhlbHBlciBtZXRob2RzICovXG5cbiAgICAvLyBDb252ZXJ0aW5nIHNsaWNlIG5hbWUgdG8gdGV4dFxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kTG9uZ2VzdFNsaWNlID0gKGFycmF5KSA9PiB7XG4gICAgICBsZXQgbG9uZ2VzdFdvcmQgPSAnJztcbiAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgaWYgKHdvcmQubGVuZ3RoID4gbG9uZ2VzdFdvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgbG9uZ2VzdFdvcmQgPSB3b3JkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBsb25nZXN0V29yZDtcbiAgICB9O1xuICAgIGNvbnN0IGxvbmdlc3RTbGljZVRleHRMZW5ndGggPSBnZXRUZXh0KFxuICAgICAgZmluZExvbmdlc3RTbGljZShPYmplY3Qua2V5cyh2YWx1ZXMpKVxuICAgICkubGVuZ3RoO1xuXG4gICAgLy90ZXh0IGJ1aWxkZXJcbiAgICBjb25zdCB0ZXh0QnVpbGRlciA9IChcbiAgICAgIHNsaWNlLFxuICAgICAgc2xpY2VDb3VudCxcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICApID0+IHtcbiAgICAgIGxldCByYWRpYW5zID1cbiAgICAgICAgKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXMgK1xuICAgICAgICBoYWxmU2xpY2VSYWRpYW5zO1xuICAgICAgbGV0IHRleHQgPSBnZXRUZXh0KHNsaWNlKTtcbiAgICAgIGxldCByYWRpdXMgPVxuICAgICAgICBpbm5lclJhZGl1cyArIG51bUFyY3MgKiBhcmNXaWR0aCArIHRleHREaXN0YW5jZTtcbiAgICAgIGxldCB5ID0gLXJhZGl1cztcblxuICAgICAgbGV0IHNpemVNdWx0aXBsaWVyID0gMS44O1xuICAgICAgbGV0IG91dGVyVGV4dFNpemUgPSBNYXRoLm1pbihcbiAgICAgICAgKHNpemVNdWx0aXBsaWVyICogKDIgKiByYWRpdXMpKSAvXG4gICAgICAgICAgbG9uZ2VzdFNsaWNlVGV4dExlbmd0aCxcbiAgICAgICAgMzBcbiAgICAgICk7XG5cbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIG91dGVyVGV4dFNpemUgKyAncHgnKVxuICAgICAgXHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAudGV4dCh0ZXh0KTtcbiAgICB9O1xuXG4gICAgLy9hcmMgYnVpbGRlclxuICAgIGNvbnN0IGFyY0J1aWxkZXIgPSAoXG4gICAgICBzdW5idXJzdEdyb3VwLFxuICAgICAgYXJjLFxuICAgICAgc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlLFxuICAgICAgc2xpY2UsXG4gICAgICBhdHRyLFxuICAgICAgdmFsdWVcbiAgICApID0+IHtcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bSh7XG4gICAgICAgICAgc3RhcnRBbmdsZTogc3RhcnRBbmdsZSxcbiAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pXG4gICAgICAgIC5hdHRyKCdkJywgYXJjKVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKTtcblxuICAgICAgICAgICAgc2IuZGlzcGxheVZhbHVlcyh2YWx1ZXMsIHZhbHVlLCBhdHRyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuXG4gICAgICAgICAgICBzYi5yZW1vdmVWYWx1ZXModmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobnVtQXJjcyA9PSAxKSB7XG4gICAgICAgICAgICBhbGVydCgnVW5hYmxlIHRvIHByb3ZpZGUgYW55IG1vcmUgZGV0YWlsJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdWYWx1ZXMgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlcylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYXR0cnMuYXR0cmlidXRlSW5kZXguaW5kZXhPZihcbiAgICAgICAgICAgICAgICBhdHRyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgc2xpY2UxIGluIG5ld1ZhbHVlcykge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTbGljZSA9IHNsaWNlMSArICcsJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBPYmplY3QuYXNzaWduKG5ld1ZhbHVlcywge1xuICAgICAgICAgICAgICAgICAgW25ld1NsaWNlXTogbmV3VmFsdWVzW3NsaWNlMV0sXG4gICAgICAgICAgICAgICAgfSlbc2xpY2UxXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIxIGluIG5ld1ZhbHVlc1tuZXdTbGljZV0pIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhdHRyMSA9PT0gYXR0cikge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlMSBpbiBuZXdWYWx1ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgbmV3U2xpY2VcbiAgICAgICAgICAgICAgICAgICAgXVthdHRyMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXVt2YWx1ZTFdW1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICBdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgc2IucmVuZGVyKG5ld1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ2xlYXIgdGV4dENpcmNsZSBsaXN0c1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ2F0ZWdvcnkgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50ID0gW107XG4gICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50ID0gW107XG5cdFxuXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgcm93ID0gcGFyc2VJbnQoc2xpY2VDb3VudCAvIGNvbHMpO1xuICAgICAgbGV0IGNvbCA9IHNsaWNlQ291bnQgJSBjb2xzO1xuXG4gICAgICBsZXQgdHJhbnNsYXRlWCA9XG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgY29sICogc2l6ZSArXG4gICAgICAgICgoY29sICsgMSkgKiB3aGl0ZXNwYWNlV2lkdGgpIC8gKGNvbHMgKyAxKTtcbiAgICAgIGxldCB0cmFuc2xhdGVZID1cbiAgICAgICAgYXR0cnMudGl0bGVUZXh0SGVpZ2h0ICtcbiAgICAgICAgc2l6ZSAvIDIgK1xuICAgICAgICByb3cgKiBzaXplICtcbiAgICAgICAgKChyb3cgKyAxKSAqIHdoaXRlc3BhY2VIZWlnaHQpIC8gKHJvd3MgKyAxKTtcblxuICAgICAgbGV0IHN2ZyA9IGF0dHJzLnN2Z1xuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2l6ZSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHNpemUpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KWBcbiAgICAgICAgKTtcbiAgICAgIGxldCBjZW50ZXJHcm91cCA9IHN2Z1xuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NlbnRlci1ncm91cCcpO1xuICAgICAgY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2lkJywgJ2NlbnRlci1jaXJjbGUnKVxuICAgICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgICAuYXR0cignY3knLCAwKVxuICAgICAgICAuYXR0cigncicsIGlubmVyUmFkaXVzKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCA1KVxuICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuXG4gICAgICBsZXQgdGV4dENpcmNsZTEgPSBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCdkeScsICctMC41ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuICAgICAgXG4gICAgICBsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCdkeScsICcwLjVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG5cbiAgICAgIGxldCB0ZXh0Q2lyY2xlMyA9IGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgJzEuNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgYXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeS5wdXNoKHRleHRDaXJjbGUxKTtcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQucHVzaCh0ZXh0Q2lyY2xlMik7XG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQucHVzaCh0ZXh0Q2lyY2xlMyk7XG5cbiAgICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnc3VuYnVyc3QtZ3JvdXAnKTtcblxuICAgICAgbGV0IGFyY0NvdW50ID0gMDtcbiAgICAgIGF0dHJsb29wOiBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgYXJjID0gZDNcbiAgICAgICAgICAuYXJjKClcbiAgICAgICAgICAuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIGFyY0NvdW50KVxuICAgICAgICAgIC5vdXRlclJhZGl1cyhcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiAoYXJjQ291bnQgKyAxKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgbGV0IHNsaWNlU3RhcnRBbmdsZSA9IDA7XG5cbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgICBzdW0gKz0gTnVtYmVyKFxuICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGlmIChzdW0gPT0gMCkge1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlICsgYXJjTGVuZ3RoLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICBzdW5idXJzdEdyb3VwLFxuICAgICAgICAgICAgYXJjLFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlLFxuICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAnMCdcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gY291bnQgLyBzdW07XG4gICAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgYXJjTGVuZ3RoICogcGVyY2VudCxcbiAgICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcbiAgICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICAgIHN1bmJ1cnN0R3JvdXAsXG4gICAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJjQ291bnQrKztcbiAgICAgIH1cbiAgICAgIHRleHRCdWlsZGVyKHNsaWNlLCAtMC41LCBzdW5idXJzdEdyb3VwKTtcbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG4gIH1cblxuICByZW5kZXJMZWdlbmQodmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgbGV0IGxlZ2VuZCA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QtbGVnZW5kJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGF0dHJzLmxlZ2VuZFdpZHRoKTtcbiAgICBsZWdlbmQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgXG4gICAgbGV0IHggPSAyMDtcbiAgICBsZXQgeSA9IDEwO1xuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeCArIDIwKVxuICAgICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgICAgLnRleHQoJ0xFR0VORCcpXG4gICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMjBweCcpXG4gICAgXHRcdFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIFxuICAgICB5ICs9IDIwO1xuICAgIFxuICAgIGxldCBmaXJzdFNsaWNlID0gT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdO1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBmaXJzdFNsaWNlKSB7XG4gICAgICBjb25zdCBhcnJheSA9IE9iamVjdC5rZXlzKGZpcnN0U2xpY2VbYXR0cl0pO1xuICAgICAgbGVnZW5kXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgIC50ZXh0KGF0dHIpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE1cHgnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuXHRcdFx0IHkgKz0gMjA7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFycmF5KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ1RvdGFsJykgY29udGludWU7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIHZhbHVlICsgJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTIpXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKTtcbiAgICAgICAgbGVnZW5kXG4gICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ2lkJywgdmFsdWUgKyAndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4ICsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgICAudGV4dCh2YWx1ZSlcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNHB4JylcbiAgICAgICAgXHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgICAgIHkgKz0gMjA7XG4gICAgICB9XG4gICAgICB5ICs9IDEwO1xuICAgIFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICcuL25hdmktY2xhc3MnO1xuaW1wb3J0IHsgU3VuYnVyc3QgfSBmcm9tICcuL3N1bmJ1cnN0LWNsYXNzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXHQvL3N1bmJ1cnN0IFxuICBsZXQgc2I7IFxuXG5cdC8vU2V0IG5vZGUgYW5kIE1haW4gdml6IFNQQSB1cHNcbiAgZGlzcGxheU5vZGVzKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUtYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlWaXo7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Tm9kZXM7XG4gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1vcGVuLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5SW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykub25jbGljayA9IGhpZGVJbmZvO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1jbG9zZS1idXR0b24nKS5vbmNsaWNrID0gaGlkZUluZm87XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Tm9kZXMoKXtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Vml6KCl7XG4gICAgICBsZXQgdGVzdCA9IGZhbHNlO1xuICAgIFx0bGV0IGFjYWRlbWljVmFsdWVzVGVzdCA9IHtcbiAgICAgICAgICAgXHQgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgICAgICAgRGVncmVlOiBbJ0JhY2hlbG9ycycsICdNYXN0ZXJzJ10sXG4gICAgICAgICAgICAgRmFjdWx0eTogWydTY2llbmNlJywgJ0J1c2luZXNzJ10sXG4gICAgICAgICAgICAgJ1N0dWR5IFN0YXR1cyc6IFsnVG90YWwnXVxuICAgICAgICAgIH07XG4gICAgICAgbGV0IGRpdmVyc2l0eVZhbHVlc1Rlc3QgPSB7ICAgICBcbiAgICAgICAgICAgICAgQWdlOiBbXSxcbiAgICAgICAgICAgICAgU2V4OiAgWydNYWxlJywgJ0ZlbWFsZSddLFxuICAgICAgICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogWydJbnRlcm5hdGlvbmFsJywgJ0RvbWVzdGljJ11cbiAgICAgICB9XG5cbiAgICBcdGlmIChzYil7XG4gICAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzID0gdGVzdD9kaXZlcnNpdHlWYWx1ZXNUZXN0OiBodC5kaXZlcnNpdHlWYWx1ZXMoKTtcbiAgICAgICAgIGxldCBhY2FkZW1pY1ZhbHVlcyA9IHRlc3Q/YWNhZGVtaWNWYWx1ZXNUZXN0OiBodC5hY2FkZW1pY1ZhbHVlcygpO1xuXG4gICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICAgIFx0IGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgaWYgKCF2YWxpZCl7XG4gICAgICAgICAgIFx0Y29uc29sZS5sb2coZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgXHRcdGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBkaXZlcnNpdHkgYXR0cmlidXRlJyk7ICBcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIFx0IFx0XHQgLy9zYi5yZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICAgIFx0c2IuaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBhbGVydCgnUGxlYXNlIHdhaXQgZm9yIHRoZSBkYXRhIHRvIGZpbmlzaCBsb2FkaW5nJyk7XG4gICAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlJbmZvKCl7XG4gICAgY29uc29sZS5sb2coXCJvcGVuXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG4gIFxuICBmdW5jdGlvbiBoaWRlSW5mbygpe1xuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBsZXQgaHQgPSBuZXcgQ2hhcnQoKVxuICAgICAuY29udGFpbmVyKCcjY2hhcnQtY29udGFpbmVyJylcbiAgICAgLnN2Z1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoLTIwMClcbiAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLmluaXRpYWxab29tKDAuMylcbiAgICAgLnJlbmRlcigpXG5cbiAgbmV3IFN1bmJ1cnN0KClcbiAgICAgICAgIC5jb250YWluZXIoJyNzdW5idXJzdC1jb250YWluZXInKVxuICBcdFx0XHQgLmRpc3BsYXlOb2RlcyhkaXNwbGF5Tm9kZXMpXG4gICAgXHRcdCAuc2V0dXAoJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20va2FlbDU1OC83ZDJjYjUyNTg5MjExMTlkZjU4ODRjYzkwOTAyZTg0ZC9yYXcvMDA4MjdiOWQ1MzI4ODMzNDMxOTFmNjE0NGQ0MWQwYTBiYmFkNWRmOC9mYWxsLmNzdicpXG5cdFx0XHRcdCAudGhlbih2YWx1ZSA9PiBzYiA9IHZhbHVlKTtcbn0pO1xuXG5cblxuXG5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBWU8sTUFBTSxNQUFNLEdBQUc7RUFDdEIsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0QsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakUsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDbEUsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDckUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQzNELEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNyRCxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDaEQsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQy9DLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRCxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDcEQsRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ3RELEVBQUUsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLEVB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TSxFQUFFLENBQUMsQ0FBQztFQUMzQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDNUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQzVDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUM1QyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDNUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQzVDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUM1QyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDMUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDbEYsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDbkYsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDbkYsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDbkYsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDbkYsZ0JBQWdCLENBQUMsTUFBTSxFQUFF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