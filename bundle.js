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

  class Sunburst {
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
        titleTextSize: '2.5vw',
        centerTextSize: '1.5vw',
        sliceTextSize: '1.5vw',
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
              .attr('y', -innerRadius/4)
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

  class RingDiagram {
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
        titleTextSize: '1.5vw',
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
  	//Ring diagram object
    let rd; 

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

      	if (rd){
           let diversityValues =  sb.diversityValues();
           let academicValues =  sb.academicValues();

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
        	 		 //rd.render(academicValues, diversityValues); //For ring-diagram1.js
             	 rd.initialRender(academicValues, diversityValues);
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
    
    let sb = new Sunburst()
       .container('#chart-container')
       .svgWidth(window.innerWidth-200)
       .svgHeight(window.innerWidth)
       .initialZoom(0.3)
       .render();

    new RingDiagram()
           .container('#sunburst-container')
    			 .displayNodes(displayNodes)
      		 .setup('https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/00827b9d532883343191f6144d41d0a0bbad5df8/fall.csv')
  				 .then(value => rd = value);
  });

}());

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwibmF2aS1jbGFzcy5qcyIsInJpbmctZGlhZ3JhbS5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElOVklTSUJMRV9OT0RFID0gJ0lOVklTSUJMRSc7XG5jb25zdCBSRVBPUlRfTk9ERSA9ICdSRVBPUlQnO1xuXG5jb25zdCBFRElfQVRUUklCVVRFX05PREUgPSAnRURJX0FUVFJJQlVURSc7XG5jb25zdCBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSA9ICdPVEhFUl9BVFRSSUJVVEUnO1xuY29uc3QgVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUgPSAnVU5DT0xMRUNURURfQVRUUklCVVRFJztcblxuY29uc3QgVkFMVUVfTk9ERSA9ICdWQUxVRSc7XG5jb25zdCBVTkNPTExFQ1RFRF9WQUxVRV9OT0RFID0gJ1VOQ09MTEVDVEVEX1ZBTFVFJztcblxuXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIFJlcG9ydF9Ob2RlX0ZpbGw6IHtcInJlZFwiOjMxLFwiZ3JlZW5cIjoxMjAsXCJibHVlXCI6MTgwLFwiYWxwaGFcIjoxfSxcbiAgRGl2ZXJzaXR5X05vZGVfRmlsbDoge1wicmVkXCI6NTEsXCJncmVlblwiOjE2MCxcImJsdWVcIjo0NCxcImFscGhhXCI6MX0sXG4gIEFjYWRlbWljX05vZGVfRmlsbDoge1wicmVkXCI6MTY2LFwiZ3JlZW5cIjoyMDYsXCJibHVlXCI6MjI3LFwiYWxwaGFcIjoxfSxcbiAgVW5jb2xsZWN0ZWRfTm9kZV9GaWxsOiB7XCJyZWRcIjoxMjgsXCJncmVlblwiOjEyOCxcImJsdWVcIjoxMjgsXCJhbHBoYVwiOjF9LFxuICBUcmFuc3BhcmVudDoge1wicmVkXCI6MjU1LFwiZ3JlZW5cIjoyNTUsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjowfSxcbiAgV2hpdGU6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsdWU6IHtcInJlZFwiOjAsXCJncmVlblwiOjAsXCJibHVlXCI6MjU1LFwiYWxwaGFcIjoxfSxcbiAgQmxhY2s6IHtcInJlZFwiOjAsXCJncmVlblwiOjAsXCJibHVlXCI6MCxcImFscGhhXCI6MX0sXG4gIEdyZXk6IHtcInJlZFwiOjE0MSxcImdyZWVuXCI6MTYwLFwiYmx1ZVwiOjIwMyxcImFscGhhXCI6MX0sXG5cdEdyZWVuOiB7XCJyZWRcIjoxMDIsXCJncmVlblwiOjE5NCxcImJsdWVcIjoxNjUsXCJhbHBoYVwiOjF9LFxuICBPcmFuZ2U6IHtcInJlZFwiOjI1MixcImdyZWVuXCI6MTQxLFwiYmx1ZVwiOjk4LFwiYWxwaGFcIjogMX0sXG4gIFNsYXRlX0dyZXkgOiB7XCJyZWRcIjo2MSxcImdyZWVuXCI6NzIsXCJibHVlXCI6NzMsXCJhbHBoYVwiOjF9LFxuICBCdXR0b246IHtcInJlZFwiOjEwMCxcImdyZWVuXCI6MTAwLFwiYmx1ZVwiOjEwMCxcImFscGhhXCI6MX0sXG4gIERpc2FibGVkOiB7XCJyZWRcIjoxMDAsXCJncmVlblwiOjEwMCxcImJsdWVcIjoxMDAsXCJhbHBoYVwiOjAuMn0sXG4gIERpc2FibGVkX1RleHQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MC4yfSxcbn1cblxuICAgICBleHBvcnQgY29uc3QgaW5pdGlhbE5vZGVzID0ge1xuICBFbnJvbGxlZDoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGFyZSBlbnJvbGxlZC4nXG4gIH0sXG4gIEZhY3VsdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ1NURU0nLCAnTm9uLVNURU0nLCAnRW5naW5lZXJpbmcgJiBEZXNpZ24nLCAnU2NpZW5jZScsICdQdWJsaWMgQWZmYWlycycsICdCdXNpbmVzcycsICdBcnRzICYgU29jaWFsIFNjaWVuY2VzJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnR3JvdXBzIG9mIHVuaXZlcnNpdHkgZGVwYXJ0bWVudHMgY29uY2VybmVkIHdpdGggYSBtYWpvciBkaXZpc2lvbiBvZiBrbm93bGVkZ2UuIFRoZSBmYWN1bHR5IG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlaXIgbWFqb3Igb3IgbWFqb3JzLidcbiAgfSxcbiAgJ0FjYWRlbWljIFllYXInOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWycyMDEzLzE0JyxcbiAgICAgICcyMDE0LzE1JyxcbiAgICAgICcyMDE1LzE2JyxcbiAgICAgICcyMDE2LzE3JyxcbiAgICAgICcyMDE3LzE4JyxcbiAgICAgICcyMDE4LzE5JyxcbiAgICAgICcyMDE5LzIwJyxcbiAgICAgICcyMDIwLzIxJyxdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBwZXJpb2Qgb2YgdGhlIHllYXIgd2hpY2ggc3R1ZGVudHMgYXR0ZW5kIGFuIGVkdWNhdGlvbmFsIGluc3RpdHV0aW9uLiBUaGUgYWNhZGVtaWMgeWVhciBjb25zaXN0cyBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsIGFuZCBXaW50ZXIpLiBUaGUgYWNhZGVtaWMgeWVhciBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZSB5ZWFyIHRoYXQgdGhleSBhcmUgc3R1ZHlpbmcuJyxcbiAgICBvcmRlcmVkOiB0cnVlXG4gIH0sXG4gIERlZ3JlZToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnQmFjaGVsb3JzJyxcbiAgICAgICdNYXN0ZXJzJyxcbiAgICAgICdQaC5ELiddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBsZXZlbHMgb2YgcXVhbGlmaWNhdGlvbiBvZmZlcmVkIGJ5IGFjYWRlbWljIGluc3RpdHVpdGlvbnMuIFRoZSBkZWdyZWUgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGVpciBsZXZlbCBvZiBzdHVkeS4nLFxuICAgIG9yZGVyZWQ6IHRydWVcbiAgfSxcbiBcbiAgJ1N0dWR5IFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ1BhcnQtdGltZScsXG4gICAgICAnRnVsbC10aW1lJyxcbiAgICAgICdDby1vcCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBjbGFzc2lmaWNhdGlvbiBvZiB0aGUgYW1vdW50IG9mIGNvdXJzZXMgdGhhdCBhIHN0dWRlbnQgaXMgdGFraW5nLiBTdHVkZW50cyBlbnJvbGxpbmcgaW4gMyBvciBtb3JlIGNyZWRpdHMgYWNyb3NzIHRoZSBGYWxsIGFuZCBXaW50ZXIgYXJlIGZ1bGwtdGltZSBzdHVkZW50cy4gV2hlcmVhcyBzdHVkZW50cyBlbnJvbGxpbmcgaW4gbGVzcyB0aGFuIDMgY3JlZGl0cyBhcmUgcGFydC10aW1lIHN0dWRlbnRzLidcbiAgfSxcbiAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0RvbWVzdGljJyxcbiAgICAgICdJbnRlcm5hdGlvbmFsJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBjbGFzc2lmaWNhdGlvbiBvZiB0dWl0aW9uIGZlZSB0aGF0IGEgc3R1ZGVudCBwYXlzLiBUaGUgc3R1ZGVudHMgdW5pdmVyc2l0eSB0dWl0aW9uIGZlZSBhbW91bnQgZGV0ZXJtaW5lcyB0aGVpciBjaXRpemVuc2hpcCBzdGF0dXMuJ1xuICB9LFxuICBBZ2U6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbXG4gICAgICAnPD0xNycsXG4gICAgICAnMTgtMjAnLFxuICAgICAgJzIxLTI1JyxcbiAgICAgICcyNi0zMCcsXG4gICAgICAnMzEtMzUnLFxuICAgICAgJzM2LTQ1JyxcbiAgICAgICc0Ni01NScsXG4gICAgICAnNTUrJyxcbiAgICBdLFxuICAgIHVuY29sbGVjdGVkVmFsdWVzOiBbJzU1LTU5JywnNjAtNjQnLCc2NS02OScsICc3MC03NCcsICc3NS03OScsICc4MCsnXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgbGVuZ3RoIG9mIHRpbWUgdGhhdCBhIHN0dWRlbnQgaGFzIGxpdmVkLiBUaGUgYWdlIG9mIGEgc3R1ZGVudCBtYXBzIHRvIHRoZWlyIHJlc3BlY3RpdmUgYWdlIGludGVydmFsLiBUaGUgcmVnaXN0cmF0aW9uIGFwcGxpY2F0aW9uIHJlY29yZHMgYSBzdHVkZW50XFwncyBkYXRlIG9mIGJpcnRoIGFuZCBkZXRlcm1pbmVzIHRoZWlyIGFnZS4nLFxuICAgIG9yZGVyZWQ6IHRydWVcbiAgfSxcbiAgU2V4OiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydGZW1hbGUnLCAnTWFsZSddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ05vbi1iaW5hcnknXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgcGh5c2ljYWwgZGlmZmVyZW5jZXMgYmV0d2VlbiBzdHVkZW50cyBiYXNlZCBvbiBhbmF0b21pY2FsIGFuZCBwaHlzaW9sb2dpY2FsIGNoYXJhY3RlcmlzdGljcy4gVGhlIHJlZ2lzdHJhdGlvbiBhcHBsaWNhdGlvbiByZWNvcmRzIGEgc3R1ZGVudFxcJ3Mgc2V4IChsYWJlbGxlZCBhcyBnZW5kZXIgb24gdGhlIGFwcGxpY2F0aW9uKS4gQSBzdHVkZW50IG1heSBmaWxlIGEgZm9ybSB0byByZXF1ZXN0IGEgXFxcIkdlbmRlciBDaGFuZ2UgQXNzaWdubWVudFxcXCIgdG8gY2hhbmdlIHRoaXMgZmllbGQuIFRoaXMgZmllbGQgY29udGFpbnMgYSBtaXh0dXJlIG9mIGdlbmRlciBhbmQgc2V4LiBBIGdyb3dpbmcgcG9wdWxhdGlvbiBvZiBzdHVkZW50cyBjaG9vc2Ugbm90IHRvIGRpc2Nsb3NlIHRoZWlyIGdlbmRlci9zZXggd2l0aCBhIFxcJ1ByZWZlciBub3QgdG8gcmVwb3J0XFwnIG9wdGlvbi4gV2UgYXJlIHVuc3VyZSBob3cgdGhpcyBtYXBzIHRvIHRoZSB0d28gYXZhaWxhYmxlIGNhdGVnb3JpZXMgb2YgXFwnbWFsZVxcJyBhbmQgXFwnZmVtYWxlXFwnLidcblx0fSxcbiAgUmFjZToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcblx0fSxcbiAgJ1JlbGlnaW9uL1NwaXJpdHVhbGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdSZWdpb25hbCBJZGVudGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdEaXMvYWJpbGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gIEluZGlnZW5laXR5OiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnRmlyc3QgTmF0aW9ucycsICdNZXRpcycsICdJbnVpdCddLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSBpbmRpZ2VuZWl0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICAnRmlyc3QgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnT3RoZXIgTGFuZ3VhZ2UnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnRXRobmljaXR5Jzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ05hdGlvbic6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG59XG5cblxuZXhwb3J0IGNvbnN0IG5vZGVzID0ge1xuICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gIFx0XHRcdFx0IFwiYm9yZGVyV2lkdGhcIjogXCIwcHhcIixcbiAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmFjdWx0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgIFx0ZGVzY3JpcHRpb246ICdHcm91cHMgb2YgdW5pdmVyc2l0eSBkZXBhcnRtZW50cyBjb25jZXJuZWQgd2l0aCBhIG1ham9yIGRpdmlzaW9uIG9mIGtub3dsZWRnZS4gVGhlIGZhY3VsdHkgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGVpciBtYWpvciBvciBtYWpvcnMuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiU1RFTVwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJOb24tU1RFTVwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJFbmdpbmVlcmluZyAmIERlc2lnblwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJTY2llbmNlXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlB1YmxpYyBBZmZhaXJzXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkJ1c2luZXNzXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICBcdHtcIm5hbWVcIjogXCJBcnRzICYgU29jaWFsIFNjaWVuY2VzXCIsIFwic2l6ZVwiOiAxMn1cbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFjYWRlbWljIFllYXJcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBlcmlvZCBvZiB0aGUgeWVhciB3aGljaCBzdHVkZW50cyBhdHRlbmQgYW4gZWR1Y2F0aW9uYWwgaW5zdGl0dXRpb24uIFRoZSBhY2FkZW1pYyB5ZWFyIGNvbnNpc3RzIG9mIHRocmVlIHRlcm1zIChTdW1tZXIsIEZhbGwgYW5kIFdpbnRlcikuIFRoZSBhY2FkZW1pYyB5ZWFyIG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlIHllYXIgdGhhdCB0aGV5IGFyZSBzdHVkeWluZy4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDEzLzE0XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxNC8xNVwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTUvMTZcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE2LzE3XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxNy8xOFwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTgvMTlcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE5LzIwXCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAyMC8yMVwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuXHRcdFx0XHRcdFx0e1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlZ3JlZVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbGV2ZWxzIG9mIHF1YWxpZmljYXRpb24gb2ZmZXJlZCBieSBhY2FkZW1pYyBpbnN0aXR1aXRpb25zLiBUaGUgZGVncmVlIG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlaXIgbGV2ZWwgb2Ygc3R1ZHkuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiQmFjaGVsb3JzXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIk1hc3RlcnNcIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiUGguRC5cIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3R1ZHkgU3RhdHVzXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBjbGFzc2lmaWNhdGlvbiBvZiB0aGUgYW1vdW50IG9mIGNvdXJzZXMgdGhhdCBhIHN0dWRlbnQgaXMgdGFraW5nLiBTdHVkZW50cyBlbnJvbGxpbmcgaW4gMyBvciBtb3JlIGNyZWRpdHMgYWNyb3NzIHRoZSBGYWxsIGFuZCBXaW50ZXIgYXJlIGZ1bGwtdGltZSBzdHVkZW50cy4gV2hlcmVhcyBzdHVkZW50cyBlbnJvbGxpbmcgaW4gbGVzcyB0aGFuIDMgY3JlZGl0cyBhcmUgcGFydC10aW1lIHN0dWRlbnRzLicsXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJQYXJ0LXRpbWVcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiRnVsbC10aW1lXCIsIFwic2l6ZVwiOiA0Mn0sXG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNpdGl6ZW5zaGlwIFN0YXR1c1wiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY2xhc3NpZmljYXRpb24gb2YgdHVpdGlvbiBmZWUgdGhhdCBhIHN0dWRlbnQgcGF5cy4gVGhlIHN0dWRlbnRzIHVuaXZlcnNpdHkgdHVpdGlvbiBmZWUgYW1vdW50IGRldGVybWluZXMgdGhlaXIgY2l0aXplbnNoaXAgc3RhdHVzLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkRvbWVzdGljXCIsIFwic2l6ZVwiOiA0Mn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkludGVybmF0aW9uYWxcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWdlXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbGVuZ3RoIG9mIHRpbWUgdGhhdCBhIHN0dWRlbnQgaGFzIGxpdmVkLiBUaGUgYWdlIG9mIGEgc3R1ZGVudCBtYXBzIHRvIHRoZWlyIHJlc3BlY3RpdmUgYWdlIGludGVydmFsLiBUaGUgcmVnaXN0cmF0aW9uIGFwcGxpY2F0aW9uIHJlY29yZHMgYSBzdHVkZW50XFwncyBkYXRlIG9mIGJpcnRoIGFuZCBkZXRlcm1pbmVzIHRoZWlyIGFnZS4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI8PTE3XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMTgtMjBcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMS0yNVwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjI2LTMwXCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMzEtMzVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIzNi00NVwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjQ2LTU1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNTUrXCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNTUtNTlcIiwgXCJjb2xvclwiOmNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNjAtNjRcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjY1LTY5XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI3MC03NFwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNzUtNzlcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjgwK1wiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fVxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJTZXhcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBwaHlzaWNhbCBkaWZmZXJlbmNlcyBiZXR3ZWVuIHN0dWRlbnRzIGJhc2VkIG9uIGFuYXRvbWljYWwgYW5kIHBoeXNpb2xvZ2ljYWwgY2hhcmFjdGVyaXN0aWNzLiBUaGUgcmVnaXN0cmF0aW9uIGFwcGxpY2F0aW9uIHJlY29yZHMgYSBzdHVkZW50XFwncyBzZXggKGxhYmVsbGVkIGFzIGdlbmRlciBvbiB0aGUgYXBwbGljYXRpb24pLiBBIHN0dWRlbnQgbWF5IGZpbGUgYSBmb3JtIHRvIHJlcXVlc3QgYSBcXFwiR2VuZGVyIENoYW5nZSBBc3NpZ25tZW50XFxcIiB0byBjaGFuZ2UgdGhpcyBmaWVsZC4gVGhpcyBmaWVsZCBjb250YWlucyBhIG1peHR1cmUgb2YgZ2VuZGVyIGFuZCBzZXguIEEgZ3Jvd2luZyBwb3B1bGF0aW9uIG9mIHN0dWRlbnRzIGNob29zZSBub3QgdG8gZGlzY2xvc2UgdGhlaXIgZ2VuZGVyL3NleCB3aXRoIGEgXFwnUHJlZmVyIG5vdCB0byByZXBvcnRcXCcgb3B0aW9uLiBXZSBhcmUgdW5jZXJ0YWluIGhvdyB0aGlzIG1hcHMgdG8gdGhlIHR3byBhdmFpbGFibGUgY2F0ZWdvcmllcyBvZiBcXCdtYWxlXFwnIGFuZCBcXCdmZW1hbGVcXCcuJyxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIk1hbGVcIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiRmVtYWxlXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIk5vbi1iaW5hcnlcIiwgXCJjb2xvclwiOmNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiAyOH1cbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmFjZVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjpjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgXCJzaXplXCI6IDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlbGlnaW9uL1NwaXJpdHVhbGl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjpjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlzL2FiaWxpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJJbmRpZ2VuZWl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJMYW5ndWFnZXMgU3Bva2VuXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXRobmljaXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmF0aW9uL1JlZ2lvbmFsIElkZW50aXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgIF1cbn1cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBub2RlcywgY29sb3JzIH0gZnJvbSAnLi9ub2Rlcyc7XG5cbmV4cG9ydCBjbGFzcyBTdW5idXJzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEV4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogODAwLFxuICAgICAgc3ZnSGVpZ2h0OiA2MDAsXG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRlZmF1bHRUZXh0RmlsbDogJyMyQzNFNTAnLFxuICAgICAgbm9kZVRleHRGaWxsOiAnd2hpdGUnLFxuICAgICAgZGVmYXVsdEZvbnQ6ICdIZWx2ZXRpY2EnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSxcbiAgICAgIGRhdGE6IG5vZGVzLFxuICAgICAgbm9kZXM6IG51bGwsXG4gICAgICBjb25uZWN0b3JMZXZlbHM6IDIsXG4gICAgICBkZXB0aDogMTgwLFxuICAgICAgZHVyYXRpb246IDYwMCxcbiAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgaW5pdGlhbFpvb206IDEsXG4gICAgICB0aXRsZVRleHRTaXplOiAnMi41dncnLFxuICAgICAgY2VudGVyVGV4dFNpemU6ICcxLjV2dycsXG4gICAgICBzbGljZVRleHRTaXplOiAnMS41dncnLFxuICAgICAgc3BsaXRTaXplOiAnMC41ZW0nLFxuICAgICAgIGNvbG9yOiB7XG4gICAgICAgIE1hbGU6ICcjZmM4ZDU5JyxcbiAgICAgICAgRmVtYWxlOiAnIzkxYmZkYicsXG4gICAgICAgIEludGVybmF0aW9uYWw6ICcjOTk4ZWMzJyxcbiAgICAgICAgRG9tZXN0aWM6ICcjZjFhMzQwJyxcbiAgICAgICAgJzw9MTcnOiAnI2Y3ZmNmNScsXG4gICAgICAgICcxOC0yMCc6ICcjZTVmNWUwJyxcbiAgICAgICAgJzIxLTI1JzogJyNjN2U5YzAnLFxuICAgICAgICAnMjYtMzAnOiAnI2ExZDk5YicsXG4gICAgICAgICczMS0zNSc6ICcjNzRjNDc2JyxcbiAgICAgICAgJzM2LTQ1JzogJyM0MWFiNWQnLFxuICAgICAgICAnNDYtNTUnOiAnIzIzOGI0NScsXG4gICAgICAgICc1NSsnOiAnIzAwNmQyYycsXG4gICAgICAgIDA6ICcjOTg5ODk4JyxcbiAgICAgIH0sXG4gICAgICBhY2FkZW1pY1ZhbHVlczoge1xuICAgICAgICAnQWNhZGVtaWMgWWVhcic6IFsnVG90YWwnXSxcbiAgICAgICAgRGVncmVlOiBbJ1RvdGFsJ10sXG4gICAgICAgIEZhY3VsdHk6IFsnVG90YWwnXSxcbiAgICAgICAgJ1N0dWR5IFN0YXR1cyc6IFsnVG90YWwnXSxcbiAgICAgIH0sXG4gICAgICBkaXZlcnNpdHlWYWx1ZXM6IHtcbiAgICAgICAgQWdlOiBbXSxcbiAgICAgICAgU2V4OiBbXSxcbiAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFtdLFxuICAgICAgfSxcbiAgICAgIG9uTm9kZUNsaWNrOiBudWxsLFxuICAgICAgdG9vbHRpcERpdjogbnVsbCxcbiAgICAgIG51bUV4cGFuZGVkOiAwLFxuICAgICAgdW5jbGlja2VkV2lkdGg6ICcycHgnLFxuICAgICAgY2xpY2tlZFdpZHRoOiAnMTBweCcsXG4gICAgICBmb2N1c3NlZDogbnVsbCxcbiAgICAgIHBsYWNlaG9sZGVySW5uZXJUZXh0OiAnRW5yb2xsZWQgU3R1ZGVudHMnLFxuICAgICAgY2VudGVyWDogMCxcbiAgICAgIGNlbnRlclk6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyBEeW5hbWljYWxseSBzZXQgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zIGZvciBDaGFydCBjbGFzc1xuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgdGhpc1trZXldID0gZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgdmFyIHN0cmluZyA9IGBhdHRyc1snJHtrZXl9J10gPSBfYDtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWwoYGF0dHJzWycke2tleX0nXTtgKTtcbiAgICAgICAgfVxuICAgICAgICBldmFsKHN0cmluZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBcbiAgICAvL0RlZmluZSB0aXRsZVxuICAgIGQzLnNlbGVjdCgnI25hdi10aXRsZS10ZXh0JylcbiAgICBcdFx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLnRpdGxlVGV4dFNpemUpXG4gICAgXHRcdFx0LnRleHQoJ0NhcmxldG9uIFVuaXZlcnNpdHkgU3R1ZGVudHMgQ29sbGVjdGVkIFxcJiBNaXNzaW5nIERlbW9ncmFwaGljcyBEYXRhJyk7XG4gICAgXG4gIFxuXHRcdHRoaXMucmVuZGVyTGVnZW5kKCk7XG4gICAgdGhpcy5yZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKVxuICAgIC8vdGhpcy5pbml0aWFsaXplRW50ZXJFeGl0VXBkYXRlUGF0dGVybigpO1xuICB9XG4gIFxuICAgICAvKiBGdW5jdGlvbiBjb252ZXJ0cyByZ2JhIG9iamVjdHMgdG8gcmdiYSBjb2xvciBzdHJpbmcgXG4gICAge3JlZDoxMTAsZ3JlZW46MTUwLGJsdWU6MjU1LGFscGhhOjF9ICA9PiByZ2JhKDExMCwxNTAsMjU1LDEpXG4gICovXG4gIHJnYmFPYmpUb0NvbG9yKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgfSkge1xuICAgIHJldHVybiBgcmdiYSgke3JlZH0sJHtncmVlbn0sJHtibHVlfSwke2FscGhhfSlgO1xuICB9XG4gIFxuICAgcmVuZGVyTGVnZW5kKCl7XG4gICAgLy9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgIGNvbnN0IGxlZ2VuZCA9IGQzLnNlbGVjdCgnI25vZGUtbGVnZW5kJyk7XG4gICAgY29uc3Qgd2lkdGggPSAxMiwgaGVpZ2h0ID0gMTI7XG4gICAgY29uc3QgcmVjdEJ1aWxkZXIgPSAoeCwgeSwgY29sb3IpID0+IHtcbiAgICBcdCAgbGVnZW5kIFxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9yKSlcbiAgICAgIFx0XHQuc3R5bGUoJ3N0cm9rZScsICdibGFjaycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0ZXh0QnVpbGRlciA9ICh4LCB5LCB0ZXh0LCBzaXplKSA9PiB7XG4gICAgICAgICAgbGVnZW5kXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAgIC50ZXh0KHRleHQpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHNpemUpXG4gICAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgdGV4dEJ1aWxkZXIoNjAsIDEwLCAnTEVHRU5EJywgJzIwcHgnKTtcbiAgICByZWN0QnVpbGRlcigyMCwgMzQsIGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpO1xuICAgIHJlY3RCdWlsZGVyKDIwLCA2NCwgY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwpO1xuICAgIHJlY3RCdWlsZGVyKDIwLCA5NCwgY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCk7XG4gICAgdGV4dEJ1aWxkZXIoNDAsIDQwLCAnVW5jb2xsZWN0ZWQgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gICAgdGV4dEJ1aWxkZXIoNDAsIDcwLCAnRGl2ZXJzaXR5IEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuIFx0XHR0ZXh0QnVpbGRlcig0MCwgMTAwLCAnQWNhZGVtaWMgQXR0cmlidXRlcycsICcxNXB4Jyk7XG4gIH1cbiAgXG4gIHJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpe1xuICAgIFx0Y29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICBcdCAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdCgnI3NlbGVjdGVkLWF0dHJpYnV0ZXMnKTtcbiAgICBcdCBzZWwuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgXG4gIFx0XHQgY29uc3QgdGV4dEJ1aWxkZXIgPSAoeCwgeSwgdGV4dCwgc2l6ZSkgPT4ge1xuICAgICAgICAgIHNlbFxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgICAudGV4dCh0ZXh0KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBzaXplKVxuICAgICAgXHRcdFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgXHR9XG4gICAgICAgXG4gICAgICBsZXQgeSA9IDEwO1xuICAgIFx0bGV0IHggPSA1MDtcbiAgICAgIHRleHRCdWlsZGVyKHgtNDAsIHksICdTRUxFQ1RFRCBDQVRFR09SSUVTJywgJzE1cHgnKTtcbiAgICBcdHkrPTMwO1xuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzLmFjYWRlbWljVmFsdWVzKXtcbiAgICAgIFx0aWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aCA+IDEgfHwgKGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aCA9PT0gMSAmJiBhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXVswXSAhPT0gJ1RvdGFsJykpe1xuICAgICAgICBcdHRleHRCdWlsZGVyKHgsIHksICctICcgKyBhdHRyLCAnMTVweCcpO1xuICAgICAgICAgIHkrPTMwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5kaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgXHRpZiAoYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA+IDApe1xuICAgICAgICAgdGV4dEJ1aWxkZXIoeCwgeSwgJy0gJyArIGF0dHIsICcxNXB4Jyk7XG4gICAgICAgICAgeSs9MzA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgcmVuZGVyKCl7XG4gICAgXHRjb25zdCBuYyA9IHRoaXM7XG4gICAgXHRjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpXG4gICAgICBcbiAgICBcdGNvbnN0IHdpZHRoID0gYXR0cnMuc3ZnV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBhdHRycy5zdmdIZWlnaHQgLFxuICAgICAgICAgICAgbWF4UmFkaXVzID0gKE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMikgLSA1O1xuXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAucmFuZ2UoWzAsIDIgKiBNYXRoLlBJXSlcbiAgICAgICAgICAgIC5jbGFtcCh0cnVlKTtcblxuICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLnJhbmdlKFttYXhSYWRpdXMqLjEsIG1heFJhZGl1c10pO1xuXG4gICAgICAgIGNvbnN0IHBhcnRpdGlvbiA9IGQzLnBhcnRpdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGFyYyA9IGQzLmFyYygpXG4gICAgICAgICAgICAuc3RhcnRBbmdsZShkID0+IHgoZC54MCkpXG4gICAgICAgICAgICAuZW5kQW5nbGUoZCA9PiB4KGQueDEpKVxuICAgICAgICAgICAgLmlubmVyUmFkaXVzKGQgPT4gTWF0aC5tYXgoMCwgeShkLnkwKSkpXG4gICAgICAgICAgICAub3V0ZXJSYWRpdXMoZCA9PiBNYXRoLm1heCgwLCB5KGQueTEpKSk7XG5cbiAgICAgICAgY29uc3QgbWlkZGxlQXJjTGluZSA9IGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFsZlBpID0gTWF0aC5QSS8yO1xuICAgICAgICAgICAgY29uc3QgYW5nbGVzID0gW3goZC54MCkgLSBoYWxmUGksIHgoZC54MSkgLSBoYWxmUGldO1xuICAgICAgICAgICAgY29uc3QgciA9IE1hdGgubWF4KDAsICh5KGQueTApICsgeShkLnkxKSkgLyAyKTtcblx0XHRcdFx0XHRcbiAgICAgICAgICAgIGNvbnN0IG1pZGRsZUFuZ2xlID0gKGFuZ2xlc1sxXSArIGFuZ2xlc1swXSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgaW52ZXJ0RGlyZWN0aW9uID0gbWlkZGxlQW5nbGUgPiAwICYmIG1pZGRsZUFuZ2xlIDwgTWF0aC5QSTsgLy8gT24gbG93ZXIgcXVhZHJhbnRzIHdyaXRlIHRleHQgY2N3XG4gICAgICAgICAgICBpZiAoaW52ZXJ0RGlyZWN0aW9uKSB7IGFuZ2xlcy5yZXZlcnNlKCk7IH1cblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGQzLnBhdGgoKTtcbiAgICAgICAgICAgIHBhdGguYXJjKDAsIDAsIHIsIGFuZ2xlc1swXSwgYW5nbGVzWzFdLCBpbnZlcnREaXJlY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGgudG9TdHJpbmcoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0ZXh0Rml0cyA9IGQgPT4ge1xuICAgICAgICAgIFx0aWYgKGQuc3BsaXQgJiYgKGQuY2hpbGRyZW4hPW51bGwgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpKVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgQ0hBUl9TUEFDRSA9IDg7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbHRhQW5nbGUgPSB4KGQueDEpIC0geChkLngwKTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBNYXRoLm1heCgwLCAoeShkLnkwKSArIHkoZC55MSkpIC8gMik7XG4gICAgICAgICAgICBjb25zdCBwZXJpbWV0ZXIgPSByICogZGVsdGFBbmdsZTtcblxuICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLmxlbmd0aCAqIENIQVJfU1BBQ0UgPCBwZXJpbWV0ZXI7XG4gICAgICAgIH07XG5cbiAgICBcdFx0ZDMuc2VsZWN0KFwiI25vZGUtZGl2XCIpLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKVxuXG4gICAgXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2NoYXJ0LWNvbnRhaW5lcicpXG5cdFx0XHRcdFx0XHQuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICAuYXR0cigndmlld0JveCcsIGAkeygtd2lkdGgrMjc1KSAvIDJ9ICR7KC1oZWlnaHQtMTIwKSAvIDJ9ICR7d2lkdGh9ICR7aGVpZ2h0fWApXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKCkgPT4gZm9jdXNPbigpKTsgLy8gUmVzZXQgem9vbSBvbiBjYW52YXMgY2xpY2tcblxuXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWdyb3VwJykuc3R5bGUubGVmdCA9ICh3aW5kb3cuaW5uZXJXaWR0aC0yNzUpLzIgICsgXCJweFwiXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWdyb3VwJykuc3R5bGUudG9wID0gKHdpbmRvdy5pbm5lckhlaWdodCszMCkvMiArIFwicHhcIlxuICAgIFxuICAgIFxuXHRcdFx0IFx0bGV0IHRleHRDaXJjbGU7XG5cbiAgICBcdFx0bGV0IHJvb3QgPSBub2Rlc1xuICAgICAgICByb290ID0gZDMuaGllcmFyY2h5KHJvb3QpO1xuICAgICAgICByb290LnN1bShkID0+IGQuc2l6ZSk7XG5cbiAgICBcdFx0cm9vdC5kZXNjZW5kYW50cygpLm1hcChkID0+e1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBkLmRhdGEubmFtZS5pbmNsdWRlcyhcIiBcIikgfHwgZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIFx0XHRcbiAgICBcdFx0Y29uc3Qgc29ydGVkTm9kZXMgPSBwYXJ0aXRpb24ocm9vdCkuZGVzY2VuZGFudHMoKS5zb3J0KChkMSwgZDIpID0+IHtcbiAgICAgICAgXHQgaWYgKGQxLmNoaWxkcmVuICYmICFkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAxOyBcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgaWYgKCFkMS5jaGlsZHJlbiAmJiBkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAtMTsgXG4gICAgICAgICAgIH1cbiAgICAgICAgICBcdHJldHVybiAwO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNsaWNlID0gc3ZnLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgICAuZGF0YShzb3J0ZWROb2Rlcyk7XG5cdFx0XHRcbiAgICAgICAgc2xpY2UuZXhpdCgpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdC8qIEdFVC9TRVQgU0xJQ0VTICovXG4gICAgICAgIGNvbnN0IG5ld1NsaWNlID0gc2xpY2UuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3NsaWNlJylcbiAgICAgICAgXHRcdC5vbignbW91c2VvdmVyJywgZCA9PiB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUudGV4dChkLmRhdGEuZGVzY3JpcHRpb24pICAgICAgIFxuICAgICAgICAgICAgfSkub24oJ21vdXNlb3V0JywgZCA9PiB7XG4gICAgICAgICAgICAgICB0ZXh0Q2lyY2xlLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGQgPT4ge1xuICAgICAgICAgICAgICBcdGlmIChbLi4uZDMuZXZlbnQuc3JjRWxlbWVudC5jbGFzc0xpc3RdLmluY2x1ZGVzKCdzZWxlY3QtYWxsLWNpcmNsZXMnKSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICBcdFx0Y29uc29sZS5sb2coXCJjbGNpa2VkIGFyY1wiKTtcbiAgICAgICAgICAgICAgXHRpZiAoZC5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgICBmb2N1c09uKGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3QoZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIG5ld1NsaWNlLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbWFpbi1hcmMnKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgIGQgPT4gdGhpcy5yZ2JhT2JqVG9Db2xvcihkLmRhdGEuY29sb3IgfHwgZC5wYXJlbnQuZGF0YS5jb2xvcikpXG4gICAgIFx0XHRcdFx0LnN0eWxlKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4gZC5kYXRhLm5hbWUgPT0gJycgPyAnMHB4JyA6IGF0dHJzLnVuY2xpY2tlZFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpO1xuXG4gICAgXHRcbiAgICBcdFx0bmV3U2xpY2UuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnaGlkZGVuLWFyYycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgKF8sIGkpID0+IGBoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIG1pZGRsZUFyY0xpbmUpO1xuXHRcdFx0XHRcbiBcbiAgICBcdFx0LyogQVBQRU5EIFRFWFQgKi9cbiAgICAgICAgY29uc3QgdGV4dCA9IG5ld1NsaWNlXG4gICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2FyYy10ZXh0JylcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLnNsaWNlVGV4dFNpemUpXG4gICAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCAoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGQucGFyZW50ICYmIGQucGFyZW50LnBhcmVudCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gdGV4dEZpdHMoZCkgPyBudWxsIDogJ25vbmUnXG4gICAgICAgICAgfSkuYXR0cignZHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGQuc3BsaXQpe1xuICAgICAgICAgICAgIHJldHVybiAoZC5pbnZlcnRlZCA/IFwiLVwiIDogXCIrXCIpICsgYXR0cnMuc3BsaXRTaXplO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiBcIjBlbVwiXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHRQYXRoJylcbiAgICAgICAgICAuYXR0cignc3RhcnRPZmZzZXQnLCAnNTAlJylcbiAgICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIChfLCBpKSA9PiBgI2hpZGRlbkFyYyR7aX1gKVxuICAgICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpe1xuICAgICAgICAgICAgICBpZiAoZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUuc3BsaXQoXCIvXCIpW2QuaW52ZXJ0ZWQgPyAwIDogMV1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLnNwbGl0KFwiIFwiKVtkLmludmVydGVkID8gMCA6IDFdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0MSA9IG5ld1NsaWNlXG4gICAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5zbGljZVRleHRTaXplKVxuICAgICAgICAgICAgICAuYXR0cignZHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGQuc3BsaXQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGQuaW52ZXJ0ZWQgPyBcIitcIiA6IFwiLVwiKSArYXR0cnMuc3BsaXRTaXplO1xuICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIwZW1cIlxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGV4dDFcbiAgICAgICAgICAgICAgLmFwcGVuZCgndGV4dFBhdGgnKVxuICAgICAgICAgICAgICAuYXR0cignc3RhcnRPZmZzZXQnLCAnNTAlJylcbiAgICAgICAgICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAoXywgaSkgPT4gYCNoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpe1xuICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS5uYW1lLmluY2x1ZGVzKFwiL1wiKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIi9cIilbZC5pbnZlcnRlZCA/IDEgOiAwXVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIiBcIilbZC5pbnZlcnRlZCA/IDEgOiAwXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICB9KTtcblx0XHRcdFx0XG5cblxuXG4gICAgXG4gICAgXHRcdC8qIEhBTkRMRSBTRUxFQ1QgQUxMICovXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLm9uY2xpY2sgPSBzZWxlY3RBbGw7XG4gICAgXHRcdGZ1bmN0aW9uIHNlbGVjdEFsbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gYXR0cnMuZm9jdXNzZWQuY2hpbGRyZW4uZXZlcnkoZCA9PiBkLnNlbGVjdGVkIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKVxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgYXR0cnMuZm9jdXNzZWQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgaWYgKGFsbFNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICBzZWxlY3QoY2hpbGQpOyAgXG4gICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLnNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIFx0XHRcbiAgICBcdFx0ZnVuY3Rpb24gc2VsZWN0KGQpe1xuICAgICAgICAgIFx0XHRpZiAoZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBcdFx0XG4gICAgICAgICAgXHRcdGQuc2VsZWN0ZWQgPSAhZC5zZWxlY3RlZFxuICAgICAgICAgIFx0XHRpZiAoZC5zZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtYnV0dG9uJykuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdChcIiNcIiArIGQucGFyZW50LmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKS5hdHRyKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIFx0aWYgKGF0dHJzLmZvY3Vzc2VkKXtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IGF0dHJzLmZvY3Vzc2VkLmNoaWxkcmVuLmV2ZXJ5KGQgPT4gZC5zZWxlY3RlZCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbClcbiAgICAgICAgICAgICAgICAgICBpZiAoYWxsU2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICBcdHN2Zy5zZWxlY3QoIFwiI1wiICsgZC5wYXJlbnQuZGF0YS5uYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgXCItY2lyY2xlXCIpLmF0dHIoJ2ZpbGwnLCBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmx1ZSkpXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSBkLnBhcmVudC5jaGlsZHJlbi5ldmVyeShkID0+IGQuc2VsZWN0ZWQgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpXG4gICAgICAgICAgICAgICAgICAgaWYgKGFsbFNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgXHRzdmcuc2VsZWN0KCBcIiNcIiArIGQucGFyZW50LmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKS5hdHRyKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsdWUpKVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBcdFx0XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkLnBhcmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnQubmFtZV0uaW5kZXhPZihkLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdLnB1c2goZC5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5pbmRleE9mKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAwKSB7Ly9pZiBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucHVzaCgnVG90YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXVswXSA9PSAnVG90YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgJ1RvdGFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5wdXNoKGQuZGF0YS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsICo9IGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWwgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1dBUk5JTkc6IEFkZGluZyBtb3JlIGFjYWRlbWljIGF0dHJpYnV0ZXMgbWF5IHJlc3VsdCBpbiBsb3cgdmlzaWJpbGl0eSBpbiB0aGUgdmlzdWFsaXphdGlvbi4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcdCB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoJ3BhdGgubWFpbi1hcmMnKS5zdHlsZSgnb3BhY2l0eScsKGQpID0+IGQuc2VsZWN0ZWQgPyAwLjUgOiAxLjApO1xuICAgICAgICB9XG5cbiAgICBcbiAgICBcdFx0ICAgIFx0XHQvKiBBUFBFTkQgU0VMRUNUIEFMTCBDSVJDTEVTICovXG4gICAgXHRcdC8vSGVscGVyIG1ldGhvZHNcbiAgICAgICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgXHRcdGNvbnN0IGdldENpcmNsZVkgPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgXHRcdE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIFxuICAgIFx0XHRjb25zdCBhdHRyaWJ1dGVTbGljZXMgPSBuZXdTbGljZS5maWx0ZXIoKGQpID0+IGQucGFyZW50ICYmIGQucGFyZW50LnBhcmVudCA9PSBudWxsICYmIGQuY2hpbGRyZW4hPW51bGwpO1xuICAgIFx0XHRhdHRyaWJ1dGVTbGljZXNcbiAgICAgICAgICBcdFx0XHQuYXBwZW5kKCdjaXJjbGUnKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsICdzZWxlY3QtYWxsLWNpcmNsZXMnKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGQgPT4gZC5kYXRhLm5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyBcIi1jaXJjbGVcIilcbiAgICBcdFx0XHRcdFx0XHQuYXR0cigncicsICcxNXB4JylcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignY3gnLCBkID0+IHtcbiAgICAgICAgICBcdFx0XHRcdGxldCByYWRpYW5zID0geChkLngwKSArICh4KGQueDEpIC0geChkLngwKSkvMjtcbiAgICAgICAgICBcdFx0XHRcdGxldCBjeCA9ICBnZXRDaXJjbGVYKHJhZGlhbnMsIHkoZC55MSkpO1xuICAgICAgICAgIFx0XHRcdFx0cmV0dXJuIGN4O1xuICAgICAgICBcdFx0XHRcdH0pXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ2N5JywgZCA9PiB7XG5cbiAgICAgICAgICBcdFx0XHRcdFx0bGV0IHJhZGlhbnMgPSB4KGQueDApICsgKHgoZC54MSkgLSB4KGQueDApKS8yO1xuICAgICAgICAgIFx0XHRcdFx0XHRsZXQgY3kgPSAgLWdldENpcmNsZVkocmFkaWFucywgeShkLnkxKSk7XG4gICAgICAgICAgXHRcdFx0XHRcdHJldHVybiBjeTtcbiAgICAgICAgXHRcdFx0XHR9KVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgIFx0XHRcdFx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywxKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuV2hpdGUpKVxuICAgIFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBkID0+IHtcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2xjaWtlZCBzZWxlY3QgYWxsXCIpO1xuICAgICAgICAgIFx0XHRcdFx0XHRcdFx0YXR0cnMuZm9jdXNzZWQgPSBkO1xuICAgICAgICAgIFx0XHRcdFx0XHRcdFx0c2VsZWN0QWxsKCk7XG4gICAgICAgICAgXHRcdFx0XHRcdFx0XHRhdHRycy5mb2N1c3NlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICBcbiAgICBcdFxuICAgIFx0XHQvKiBDUkVBVEUgQ0VOVEVSIENJUkNMRSAqL1xuICAgICAgIGxldCBpbm5lclJhZGl1cyA9IHkoMC4zMzMzMzMzKSBcbiAgICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWdyb3VwLW5vZGVzJylcblxuICAgICAgICBjZW50ZXJHcm91cC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZS1ub2RlcycpXG4gICAgICAgICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSk7XG4gICAgICAgIFxuICAgICAgICB0ZXh0Q2lyY2xlID0gY2VudGVyR3JvdXBcbiAgICAgICAgICAgIC5hcHBlbmQoJ2ZvcmVpZ25PYmplY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAtaW5uZXJSYWRpdXMpXG4gICAgICAgICAgICAuYXR0cigneScsIC1pbm5lclJhZGl1cy80KVxuICAgICAgICBcdFx0LmF0dHIoJ3dpZHRoJywgIGlubmVyUmFkaXVzKjIpXG4gIFx0XHRcdFx0XHQuYXR0cignaGVpZ2h0JywgIGlubmVyUmFkaXVzKjIpXG4gICAgICAgIFx0XHQuYXBwZW5kKCd4aHRtbDpwJylcbiAgICAgICAgICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQpXG4gICAgXHRcdFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMuY2VudGVyVGV4dFNpemUpXG4gICAgXHRcdFx0XHRcdFxuICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5vbmNsaWNrID0gKCkgPT4gZm9jdXNPbigpO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuRGlzYWJsZWQpO1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuY29sb3IgPSBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuRGlzYWJsZWRfVGV4dCk7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VudGVyLWdyb3VwLW5vZGVzJykuc3R5bGUuZGlzcGxheT0gJ2Jsb2NrJztcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWdyb3VwJykuc3R5bGUuZGlzcGxheT0gJ25vbmUnO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzT24oZCA9IHsgeDA6IDAsIHgxOiAxLCB5MDogMCwgeTE6IDEgfSkge1xuICAgICAgICAgICAgLy8gUmVzZXQgdG8gdG9wLWxldmVsIGlmIG5vIGRhdGEgcG9pbnQgc3BlY2lmaWVkXG5cbiAgICAgICAgICBcdGlmIChkLngwPT0wICYmIGQueDE9PTEgJiYgZC55MCA9PSAwICYmIGQueTE9PTEpe1xuICAgICAgICAgICAgICBhdHRycy5mb2N1c3NlZCA9IG51bGw7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZCk7XG4gICAgICAgXHRcdFx0XHQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuY29sb3IgPSBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuRGlzYWJsZWRfVGV4dCk7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VudGVyLWdyb3VwLW5vZGVzJykuc3R5bGUuZGlzcGxheT0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWdyb3VwJykuc3R5bGUuZGlzcGxheT0gJ25vbmUnO1xuICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdC1hbGwtY2lyY2xlcycpKXtcbiAgICAgICAgICAgICAgIFx0ZWxlbS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhdHRycy5mb2N1c3NlZCA9IGQ7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQnV0dG9uKTtcbiAgICAgICAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5jb2xvciA9J3doaXRlJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VudGVyLWdyb3VwLW5vZGVzJykuc3R5bGUuZGlzcGxheT0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWdyb3VwJykuc3R5bGUuZGlzcGxheT0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgXHRmb3IgKGNvbnN0IGVsZW0gb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0LWFsbC1jaXJjbGVzJykpe1xuICAgICAgICAgICAgICAgXHRcdGVsZW0uc3R5bGUuZGlzcGxheT0gJ25vbmUnO1xuICAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IHN2Zy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgICAgIC50d2Vlbignc2NhbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhkID0gZDMuaW50ZXJwb2xhdGUoeC5kb21haW4oKSwgW2QueDAsIGQueDFdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlkID0gZDMuaW50ZXJwb2xhdGUoeS5kb21haW4oKSwgW2QueTAsIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPT4geyB4LmRvbWFpbih4ZCh0KSk7IHkuZG9tYWluKHlkKHQpKTsgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgIFx0aWYgKGF0dHJzLmZvY3Vzc2VkKXtcbiAgICAgICAgICAgICAgXHRsZXQgY2VudGVyID0gdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ2cuc2xpY2UnKVxuICAgICAgICAgIFx0XHRcdFx0XHQuZmlsdGVyKChuKSA9PiBuLmRhdGEubmFtZSA9PSBkLmRhdGEubmFtZSlcbiAgICAgICAgICAgICAgICBjZW50ZXIuc2VsZWN0KCdwYXRoLm1haW4tYXJjJylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSlcbiAgICAgICAgICAgIFx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzBweCcpXG4gICAgICAgICAgICAgIFx0Y2VudGVyLnNlbGVjdCgnLmFyYy10ZXh0JylcbiAgICAgICAgICAgICAgXHRcdC5hdHRyKCdmaWxsJywgIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5XaGl0ZSkpXG4gICAgICAgICAgICAgIFx0Y2VudGVyLnNlbGVjdCgnLmFyYy10ZXh0MScpXG4gICAgICAgICAgICAgIFx0XHQuYXR0cignZmlsbCcsICBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuV2hpdGUpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IHNsaWNlcyA9IHRyYW5zaXRpb24uc2VsZWN0QWxsKCdnLnNsaWNlJylcbiAgICAgICAgICAgICAgICBzbGljZXMuc2VsZWN0KCdwYXRoLm1haW4tYXJjJylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsICBuID0+IG5jLnJnYmFPYmpUb0NvbG9yKG4uZGF0YS5jb2xvciB8fCBuLnBhcmVudC5kYXRhLmNvbG9yKSlcbiAgICAgICAgICAgICAgXHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgKGQpID0+IGQuZGF0YS5uYW1lID09ICcnID8gJzBweCcgOiBhdHRycy51bmNsaWNrZWRXaWR0aClcbiAgICAgICAgICAgICAgXHRzbGljZXMuc2VsZWN0KCcuYXJjLXRleHQnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsYWNrKSlcbiAgICAgICAgICAgICAgXHRzbGljZXMuc2VsZWN0KCcuYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgXHRcdC5hdHRyKCdmaWxsJywgIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CbGFjaykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXHRcbiAgICAgICAgICBcbiAgICAgICAgICAgIHRyYW5zaXRpb24uc2VsZWN0QWxsKCdwYXRoLm1haW4tYXJjJylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZCA9PiAoKSA9PiBhcmMoZCkpO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uLnNlbGVjdEFsbCgncGF0aC5oaWRkZW4tYXJjJylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZCA9PiAoKSA9PiBtaWRkbGVBcmNMaW5lKGQpKTtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJy5hcmMtdGV4dCcpXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZGlzcGxheScsIGQgPT4gKCkgPT4gdGV4dEZpdHMoZCkgPyBudWxsIDogJ25vbmUnKTtcbiAgICAgICAgIFx0XHRcbiAgICAgICAgICBcdHRyYW5zaXRpb24uc2VsZWN0QWxsKCcuYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkaXNwbGF5JywgZCA9PiAoKSA9PiB0ZXh0Rml0cyhkKSA/IG51bGwgOiAnbm9uZScpO1xuXG4gICAgICAgICAgICBtb3ZlU3RhY2tUb0Zyb250KGQpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3ZlU3RhY2tUb0Zyb250KGVsRCkge1xuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoJy5zbGljZScpLmZpbHRlcihkID0+IGQgPT09IGVsRClcbiAgICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50KSB7IG1vdmVTdGFja1RvRnJvbnQoZC5wYXJlbnQpOyB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgXG4gICAgXG5cblxuICAgIFxuICAgIFxuICAgICBcdHJldHVybiB0aGlzO1xuICB9XG4gIFxufSIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vbm9kZXMnO1xuXG5leHBvcnQgY2xhc3MgUmluZ0RpYWdyYW0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL0V4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogMzAwMCxcbiAgICAgIHN2Z0hlaWdodDogMzAwMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGV4dGVuZGVkTGluZUxlbmd0aDogNDAsXG4gICAgICB0ZXh0RGlzdGFuY2U6IDI1LFxuICAgICAgb3V0ZXJUZXh0U2l6ZTogJzI1cHgnLFxuICAgICAgYXR0cmlidXRlSW5kZXg6IG51bGwsXG4gICAgICBoaXN0b3J5OiBbXSxcbiAgICAgIGRpc3BsYXlOb2RlczogbnVsbCxcbiAgICAgIHZhbHVlczogbnVsbCxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBNYWxlOiAnI2ZjOGQ1OScsXG4gICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICBJbnRlcm5hdGlvbmFsOiAnIzk5OGVjMycsXG4gICAgICAgIERvbWVzdGljOiAnI2YxYTM0MCcsXG4gICAgICAgICc8PTE3JzogJyNmN2ZjZjUnLFxuICAgICAgICAnMTgtMjAnOiAnI2U1ZjVlMCcsXG4gICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgJzI2LTMwJzogJyNhMWQ5OWInLFxuICAgICAgICAnMzEtMzUnOiAnIzc0YzQ3NicsXG4gICAgICAgICczNi00NSc6ICcjNDFhYjVkJyxcbiAgICAgICAgJzQ2LTU1JzogJyMyMzhiNDUnLFxuICAgICAgICAnNTUrJzogJyMwMDZkMmMnLFxuICAgICAgICAwOiAnIzk4OTg5OCcsXG4gICAgICB9LFxuICAgICAgdGV4dENpcmNsZXNDYXRlZ29yeTogW10sXG4gICAgICB0ZXh0Q2lyY2xlc0NvdW50OiBbXSxcbiAgICAgIHRleHRDaXJjbGVzUGVyY2VudDogW10sXG4gICAgICB0aXRsZVRleHRTaXplOiAnMS41dncnLFxuICAgICAgdGl0bGVUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGNvbXBhcmVNb2RlOiBmYWxzZSxcbiAgICAgIGxlZ2VuZFdpZHRoOiAxNTAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQxOiAnQ2F0ZWdvcnknLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQyOiAnIyBvZiBTdHVkZW50cycsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDM6ICclIGluIEdyb3VwJyxcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyogUmVtb3ZlcyBhbGwgZWxlbWVudHMgaW4gc3ZnICovXG4gIHJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUoKS5zdmcuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gIH1cblxuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgLyogQ29udmVydHMgb2JqZWN0cyB0byBzbGljZXMgd2l0aCBxdWVyaWVzICovXG4gIGdldFZhbHVlcyhhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICAvLyBTb3J0aW5nIGFnZVxuICAgIGxldCBvcmRlciA9IHsnPD0xNyc6IDAsXG4gICAgICAgICcxOC0yMCc6IDEsXG4gICAgICAgICcyMS0yNSc6IDIsXG4gICAgICAgICcyNi0zMCc6IDMsXG4gICAgICAgICczMS0zNSc6IDQsXG4gICAgICAgICczNi00NSc6IDUsXG4gICAgICAgICc0Ni01NSc6IDYsXG4gICAgICAgICc1NSsnIDogN307XG4gICAgZGl2ZXJzaXR5VmFsdWVzLkFnZS5zb3J0KChlMSwgZTIpID0+IChvcmRlcltlMV0gLSBvcmRlcltlMl0pKTtcbiBcdFx0XG4gICAgLy9Tb3J0aW5nIHllYXJcbiAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLnNvcnQoKGUxLCBlMikgPT4gKE51bWJlcihlMS5zdWJzdHJpbmcoMCwgNCkpIC0gTnVtYmVyKGUyLnN1YnN0cmluZygwLCA0KSApKSk7XG4gICAgXG4gICAgLy9wcmVwYXJpbmcgc2xpY2VzXG4gICAgY29uc3QgY2FydGVzaWFuID0gKC4uLmEpID0+XG4gICAgICBhLnJlZHVjZSgoYSwgYikgPT5cbiAgICAgICAgYS5mbGF0TWFwKChkKSA9PiBiLm1hcCgoZSkgPT4gW2QsIGVdLmZsYXQoKSkpXG4gICAgICApO1xuICAgIGxldCBzbGljZXMgPSBjYXJ0ZXNpYW4oXG4gICAgICBhY2FkZW1pY1ZhbHVlc1snQWNhZGVtaWMgWWVhciddLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRGVncmVlLFxuICAgICAgYWNhZGVtaWNWYWx1ZXMuRmFjdWx0eSxcbiAgICAgIGFjYWRlbWljVmFsdWVzWydTdHVkeSBTdGF0dXMnXVxuICAgICk7XG5cbiAgICBjb25zdCBtYWtlUXVlcnkgPSAoc2xpY2UsIGRpdmVyc2l0eUF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgcXVlcnkgPSBbLi4uc2xpY2VdO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAocHJvcCAhPT0gZGl2ZXJzaXR5QXR0cikge1xuICAgICAgICAgIHF1ZXJ5LnB1c2goJ1RvdGFsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnkucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9O1xuXG4gICAgLy9jb252ZXJ0IHNsaWNlcyB0byBrZXkgZm9ybWF0XG5cbiAgICBsZXQgdmFsdWVzID0ge307XG4gICAgZm9yIChsZXQgc2xpY2Ugb2Ygc2xpY2VzKSB7XG4gICAgICBsZXQgc3RyID0gc2xpY2UudG9TdHJpbmcoKTtcbiAgICAgIHZhbHVlc1tzdHJdID0ge307XG4gICAgICBmb3IgKGxldCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcykge1xuICAgICAgICBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl0gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgZGl2ZXJzaXR5VmFsdWVzW2F0dHJdKSB7XG4gICAgICAgICAgdmFsdWVzW3N0cl1bYXR0cl1bdmFsdWVdID0gbWFrZVF1ZXJ5KFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIGFyY3MsIHJldHVybiBhcmMgd2lkdGgsIGlubmVycmFkaXVzIGFuZCB0ZXh0IHNpemUqL1xuICBjb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHgsIHksIG51bUFyY3MpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB0ZXh0SGVpZ2h0T2Zmc2V0ID0gNTA7XG5cbiAgICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSAtIHRleHRIZWlnaHRPZmZzZXQpO1xuICAgIGxldCBhcmNXaWR0aCA9IG1pbiAvICgyICogbnVtQXJjcyArIDcpOyAvL21pbiA9IDIqbnVtQXJjcyphcmNXaWR0aCArIDIqaW5uZXJSYWRpdXMsIGlubmVyUmFkaXVzID0gMyphcmNXaWR0aFxuICAgIGxldCBpbm5lclJhZGl1cyA9IDMgKiBhcmNXaWR0aDtcblxuICAgIGxldCBtdWx0aXBsaWVyID0gMS41O1xuICAgIGxldCBuID0gMTM7IC8vJ2ludGVybmF0aW9uYWwnIHdpdGggMTMgbGV0dGVycyBpcyBsb25nZXN0IHdvcmQgaW4gZGl2ZXJzaXR5IGF0dHJpYnV0ZXNcbiAgICBsZXQgaW5uZXJUZXh0U2l6ZSA9XG4gICAgICAobXVsdGlwbGllciAqICgyICogaW5uZXJSYWRpdXMpKSAvIG4gKyAncHgnO1xuICAgIHJldHVybiB7XG4gICAgICBhcmNXaWR0aDogYXJjV2lkdGgsXG4gICAgICBpbm5lclJhZGl1czogaW5uZXJSYWRpdXMsXG4gICAgICBpbm5lclRleHRTaXplOiBpbm5lclRleHRTaXplLFxuICAgIH07XG4gIH1cblxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIHNxdWFyZXMsIHJldHVybiByb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZSAqL1xuICBjb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoeCwgeSwgbikge1xuICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIHJvd3MgYW5kIGNvbHVtbnMsIGFuZCBjZWxsIHNpemVcbiAgICBsZXQgcmF0aW8gPSB4IC8geTtcbiAgICBsZXQgbmNvbHNfZmxvYXQgPSBNYXRoLnNxcnQobiAqIHJhdGlvKTtcbiAgICBsZXQgbnJvd3NfZmxvYXQgPSBuIC8gbmNvbHNfZmxvYXQ7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIGhlaWdodFxuICAgIGxldCBucm93czEgPSBNYXRoLmNlaWwobnJvd3NfZmxvYXQpO1xuICAgIGxldCBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgd2hpbGUgKG5yb3dzMSAqIHJhdGlvIDwgbmNvbHMxKSB7XG4gICAgICBucm93czErKztcbiAgICAgIG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTEgPSB5IC8gbnJvd3MxO1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSB3aWR0aFxuICAgIGxldCBuY29sczIgPSBNYXRoLmNlaWwobmNvbHNfZmxvYXQpO1xuICAgIGxldCBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgd2hpbGUgKG5jb2xzMiA8IG5yb3dzMiAqIHJhdGlvKSB7XG4gICAgICBuY29sczIrKztcbiAgICAgIG5yb3dzMiA9IE1hdGguY2VpbChuIC8gbmNvbHMyKTtcbiAgICB9XG4gICAgbGV0IGNlbGxfc2l6ZTIgPSB4IC8gbmNvbHMyO1xuXG4gICAgLy8gRmluZCB0aGUgYmVzdCB2YWx1ZXNcbiAgICBsZXQgbnJvd3MsIG5jb2xzLCBjZWxsX3NpemU7XG4gICAgaWYgKGNlbGxfc2l6ZTEgPCBjZWxsX3NpemUyKSB7XG4gICAgICBucm93cyA9IG5yb3dzMjtcbiAgICAgIG5jb2xzID0gbmNvbHMyO1xuICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbnJvd3MgPSBucm93czE7XG4gICAgICBuY29scyA9IG5jb2xzMTtcbiAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2l6ZTogY2VsbF9zaXplLCByb3dzOiBucm93cywgY29sczogbmNvbHMgfTtcbiAgfVxuXG4gIC8qIEZldGNoaW5nIGRhdGEgYW5kIHNldHRpbmcgdXAgc3ZnIGNvbnRhaW5lciAqL1xuICBhc3luYyBzZXR1cCh1cmwpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgLy9sb2FkIGRhdGEgc3luY2hyb25vdXNseVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkMy5jc3YodXJsKTtcblxuICAgIGF0dHJzLmF0dHJpYnV0ZUluZGV4ID0gZGF0YS5jb2x1bW5zO1xuXG4gICAgLy9jb252ZXJ0IGRhdGEgdG8gb2JqZWN0IGZvcm1hdFxuICAgIGF0dHJzLmRhdGEgPSBkYXRhLnJlZHVjZShmdW5jdGlvbiAobWFwLCBvYmosIGkpIHtcbiAgICAgIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKG9iaik7XG5cbiAgICAgIHZhbHVlcy5wb3AoKTtcblxuICAgICAgbWFwWycnLmNvbmNhdCh2YWx1ZXMpXSA9IG9iai5Db3VudDtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lclxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoYXR0cnMuY29udGFpbmVyKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcik7XG4gICAgXG4gICAgLy8gc2V0dGluZyB1cCBjb21wYXJlIGJ1dHRvblxuICAgIGNvbnN0IHRvZ2dsZUNvbXBhcmUgPSAoKSA9PiB7XG4gICAgICBhdHRycy5jb21wYXJlTW9kZSA9ICFhdHRycy5jb21wYXJlTW9kZTtcbiAgICAgIHNiLnJlbmRlcihhdHRycy52YWx1ZXMpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAnY29tcGFyZS1idXR0b24nXG4gICAgKS5vbmNsaWNrID0gdG9nZ2xlQ29tcGFyZTtcblxuICAgIGF0dHJzLnN2ZyA9IHN2ZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qIENvbnZlcnRpbmcgaW5wdXQgb2JqZWN0cyB0byB2YWx1ZXMgZm9yIGRpc3BsYXkgKi9cbiAgaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoXG4gICAgICBhY2FkZW1pY1ZhbHVlcyxcbiAgICAgIGRpdmVyc2l0eVZhbHVlc1xuICAgICk7XG5cbiAgICBcbiAgICBjb25zdCB0aXRsZUJ1aWxkZXIgPSAoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykgPT4ge1xuICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgIFxuICAgICAgY29uc3QgZ2V0QXR0ckFzVGl0bGUgPSAoYXR0cikgPT4ge1xuICAgICAgICAgaWYgKGF0dHIgPT09ICdBY2FkZW1pYyBZZWFyJyl7XG4gICAgICAgICAgIFx0cmV0dXJuICcgMjAxMy0yMDIxJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdEZWdyZWUnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBkZWdyZWVzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdGYWN1bHR5Jyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgZmFjdWx0aWVzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdTdHVkeSBTdGF0dXMnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBzdHVkeSBzdGF0dXNlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnQWdlJyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgYWdlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnU2V4Jyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgc2V4ZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0NpdGl6ZW5zaGlwIFN0YXR1cycpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIGNpdGl6ZW5zaGlwIHN0YXR1c2VzJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhY2FkZW1pY1ZhbHVlcyl7XG4gICAgICBcdGlmIChhY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPT09IDEgJiYgYWNhZGVtaWNWYWx1ZXNbYXR0cl1bMF0gPT09ICdUb3RhbCcpe1xuICAgICAgICBcdGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICBcdGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAwKXtcbiAgICAgICAgXHRsaXN0LnB1c2goZ2V0QXR0ckFzVGl0bGUoYXR0cikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICBcblx0XHRcdGlmIChsaXN0Lmxlbmd0aCA9PSAxKVxuICAgICAgIFx0cmV0dXJuICdTdHVkZW50cyBhY3Jvc3MgJyArIGxpc3QucG9wKCkgKyAnLic7IFxuICAgICAgXG5cdFx0XHRyZXR1cm4gJ1N0dWRlbnRzIGFjcm9zcyAnICsgbGlzdC5zbGljZSgwLCAtMSkuam9pbigpICsgJyBhbmQgJyArIGxpc3QucG9wKCkgKyAnLic7XG4gICAgfTtcbiAgICAgXG4gICAgY29uc3Qgd2lkdGggPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWNvbnRhaW5lcicpXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcbiAgICBcbiAgICBsZXQgdGl0bGUgPSBkM1xuICAgICAgLnNlbGVjdCgnI3Zpei10aXRsZS10ZXh0JylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMudGl0bGVUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KHRpdGxlQnVpbGRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSk7XG4gICAgXG4gICAgdGhpcy5yZW5kZXIodmFsdWVzKTtcbiAgfVxuXG4gIC8qIFJlY3VycmluZyByZW5kZXIgKi9cbiAgcmVuZGVyKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvLyBTZXR0aW5nIHZhbHVlcyBzbyB2YWx1ZXMgaXMgc3RpbGwgYWNjZXNzaWJsZSB3aGVuIGNvbXBhcmUgaXMgdG9nZ2xlZFxuICAgIGF0dHJzLnZhbHVlcyA9IHZhbHVlcztcblxuICAgIFxuICAgIC8vIHJlcHVycG9zaW5nIGJhY2sgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgIGlmIChhdHRycy5oaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJhY2sgPSAoKSA9PiBzYi5yZW5kZXIoYXR0cnMuaGlzdG9yeS5wb3AoKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGF0dHJzLmRpc3BsYXlOb2RlcztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIGVsZW1lbnRzIGluIHN2Z1xuICAgIHRoaXMucmVtb3ZlQWxsKCk7XG5cbiAgICAvLyByZS1jcmVhdGUgdGhlIG5ldyBlbGVtZW50c1xuICAgIGlmICghYXR0cnMuY29tcGFyZU1vZGUpIHsgXG4gICAgICBcbiAgICAgIC8vIGRpc2FibGUgY29tcGFyZSBtb2RlIGlmIG9ubHkgMSBzbGljZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuaW5uZXJIVE1MID0gJ0NvbXBhcmUnO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID09PSAxKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPXRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuc3R5bGUuY29sb3IgPXRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkX1RleHQpO1xuICAgICAgfSBlbHNle1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5jb2xvciA9J3doaXRlJztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5yZW5kZXJTdW5idXJzdCh2YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQnV0dG9uKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmlubmVySFRNTCA9ICdDb25qb2luJztcbiAgICAgIHRoaXMucmVuZGVyQ29tcGFyZSh2YWx1ZXMpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckxlZ2VuZCh2YWx1ZXMpO1xuICB9XG5cbiAgLy8gcmVuZGVyIHRoZSBzdW5idXJzdFxuICByZW5kZXJTdW5idXJzdCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBsZXQgc2IgPSB0aGlzO1xuXG4gICAgXG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgbnVtQXJjcyA9IE9iamVjdC5rZXlzKE9iamVjdC52YWx1ZXModmFsdWVzKVswXSkubGVuZ3RoO1xuICAgIGNvbnN0IGV4dGVuZGVkTGluZUxlbmd0aCA9IGF0dHJzLmV4dGVuZGVkTGluZUxlbmd0aDtcbiAgICBjb25zdCBoYWxmU2xpY2VSYWRpYW5zID0gTWF0aC5QSSAvIG51bVNsaWNlcztcbiAgICBjb25zdCB0ZXh0RGlzdGFuY2UgPSBhdHRycy50ZXh0RGlzdGFuY2U7XG4gICAgY29uc3QgYXJjTGVuZ3RoID0gKDIgKiBNYXRoLlBJKSAvIG51bVNsaWNlcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QtY29udGFpbmVyJylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSArY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICtjb250YWluZXIud2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQtYXR0cnMudGl0bGVUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtQXJjc1xuICAgICk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICAgY29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgbGV0IHN2ZyA9IGF0dHJzLnN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXR0cihcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCR7aGVpZ2h0LyAyICArIGF0dHJzLnRpdGxlVGV4dEhlaWdodH0pYFxuICAgICAgKTtcblxuICAgIGxldCBjZW50ZXJHcm91cCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnY2VudGVyLWdyb3VwJyk7XG4gICAgY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZScpXG4gICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTEgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnLTAuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDEpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUyID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJzAuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDIpXG4gICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuXG4gICAgbGV0IHRleHRDaXJjbGUzID0gY2VudGVyR3JvdXBcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLmF0dHIoJ2R5JywgJzEuNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgIC50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MylcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgc3VuYnVyc3RHcm91cCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnc3VuYnVyc3QtZ3JvdXAnKTtcblxuICAgIC8vSGVscGVyIG1ldGhvZHNcbiAgICBjb25zdCBnZXRDaXJjbGVYID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIGNvbnN0IGdldENpcmNsZVkgPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXM7XG5cbiAgICBjb25zdCBnZXRUZXh0ID0gKHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKFxuICAgICAgICAod29yZCkgPT4gd29yZCAhPT0gJ1RvdGFsJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oJ1xcclxcbicpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLy9saW5lIGJ1aWxkZXJcbiAgICBjb25zdCBsaW5lQnVpbGRlciA9IChzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9ICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzO1xuICAgICAgaWYgKG51bVNsaWNlcyAlIDIgPT0gMSkgcmFkaWFucyArPSBNYXRoLlBJO1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAgIC5hdHRyKCd4MScsIGdldENpcmNsZVgocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cigneTEnLCBnZXRDaXJjbGVZKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3gyJyxcbiAgICAgICAgICBnZXRDaXJjbGVYKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICd5MicsXG4gICAgICAgICAgZ2V0Q2lyY2xlWShcbiAgICAgICAgICAgIHJhZGlhbnMsXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArXG4gICAgICAgICAgICAgIG51bUFyY3MgKiBhcmNXaWR0aCArXG4gICAgICAgICAgICAgIGV4dGVuZGVkTGluZUxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy90ZXh0IGJ1aWxkZXJcbiAgICBjb25zdCB0ZXh0QnVpbGRlciA9IChzbGljZSwgc2xpY2VDb3VudCkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPVxuICAgICAgICAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcyArXG4gICAgICAgIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHQoc2xpY2UpO1xuICAgICAgbGV0IHJhZGl1cyA9XG4gICAgICAgIGlubmVyUmFkaXVzICsgbnVtQXJjcyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHggPSBnZXRDaXJjbGVYKHJhZGlhbnMsIHJhZGl1cyk7XG4gICAgICBsZXQgeSA9IC1nZXRDaXJjbGVZKHJhZGlhbnMsIHJhZGl1cyk7XG5cbiAgICAgIGlmICh4IDwgLTEpIHggLT0gdGV4dC5sZW5ndGggKiA5O1xuICAgICAgLy9sZWZ0IHNpZGUgYWRqdXN0XG4gICAgICBlbHNlIGlmICh4IDwgMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDU7IC8vbWlkZGxlIHRleHQgYWRqdXN0XG5cbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLm91dGVyVGV4dFNpemUpXG4gICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICAvL2FyYyBidWlsZGVyXG4gICAgY29uc3QgYXJjQnVpbGRlciA9IChcbiAgICAgIGFyYyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHNsaWNlLFxuICAgICAgYXR0cixcbiAgICAgIHZhbHVlLFxuICAgICAgY291bnQsXG4gICAgICBwZXJjZW50XG4gICAgKSA9PiB7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKTtcblxuICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyB2YWx1ZSArIFwicmVjdCddXCIpLnN0eWxlKFxuICAgICAgICAgICAgJ3N0cm9rZS13aWR0aCcsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoYXR0ciA9PT0gJ0FnZScpIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTFcbiAgICAgICAgICAgICAgICAudGV4dChhdHRyICsgJzogJyArIHZhbHVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUxLnRleHQodmFsdWUpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoJzw1JykuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KGNvdW50KS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGV4dENpcmNsZTNcbiAgICAgICAgICAgICAgLnRleHQoXG4gICAgICAgICAgICAgICAgTnVtYmVyKChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDEpKSArICclJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCgnJyk7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMlxuICAgICAgICAgICAgICAudGV4dCgnTm8gU3R1ZGVudHMnKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMy50ZXh0KCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG5cbiAgICAgICAgICB0ZXh0Q2lyY2xlMVxuICAgICAgICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKVxuICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICB0ZXh0Q2lyY2xlMi50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MikuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQzKS5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIHZhbHVlICsgXCJyZWN0J11cIikuc3R5bGUoXG4gICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChudW1BcmNzID09IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gcHJvdmlkZSBhbnkgbW9yZSBkZXRhaWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1NsaWNlID0gc2xpY2UgKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICBbbmV3U2xpY2VdOiBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzW3NsaWNlXSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoXG4gICAgICAgICAgICAgICAgYXR0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cjEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyMSA9PT0gYXR0cikge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdW1xuICAgICAgICAgICAgICAgICAgICBhdHRyMVxuICAgICAgICAgICAgICAgICAgXSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXVt2YWx1ZTFdW1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZXMpO1xuXG4gICAgICAgICAgICAgIGF0dHJzLmhpc3RvcnkucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBcbiAgXG4gICAgLy9idWlsZCBhcmNzXG4gICAgbGV0IHNsaWNlQ291bnQgPSAwO1xuICAgIGZvciAoY29uc3Qgc2xpY2UgaW4gdmFsdWVzKSB7XG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gc2xpY2VDb3VudCAqIGFyY0xlbmd0aDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW0gPT0gMCkge1xuICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlICsgYXJjTGVuZ3RoLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICApO1xuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgJzAnLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgaW4gdmFsdWVzW3NsaWNlXVthdHRyXSkge1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gY291bnQgLyBzdW07XG4gICAgICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IHNsaWNlU3RhcnRBbmdsZTtcbiAgICAgICAgICAgIGxldCBlbmRBbmdsZSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlICsgYXJjTGVuZ3RoICogcGVyY2VudCxcbiAgICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcbiAgICAgICAgICAgIFxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coc2xpY2UpXG4gICAgICAgICAgXHRjb25zb2xlLmxvZyhwZXJjZW50ICsgXCI6IFwiICsgY291bnQgKyBcIiA6IFwiICsgc3VtKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICBwZXJjZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChudW1TbGljZXMgPT0gMSkgdGV4dEJ1aWxkZXIoc2xpY2UsIDAuNSk7XG4gICAgICBlbHNlIHRleHRCdWlsZGVyKHNsaWNlLCBzbGljZUNvdW50KTtcbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG5cbiAgICAvL2J1aWxkIGxpbmVzIGFmdGVyIHNvIHRoZXkgYXJlIG9uIHRvcFxuICAgIGZvciAoXG4gICAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgICBzbGljZUNvdW50IDwgbnVtU2xpY2VzICYmIG51bVNsaWNlcyA+IDE7XG4gICAgICBzbGljZUNvdW50KytcbiAgICApIHtcbiAgICAgIGxpbmVCdWlsZGVyKHNsaWNlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlWYWx1ZXModmFsdWVzLCBzZWxlY3RlZFZhbHVlLCBhdHRyKSB7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBzYiA9IHRoaXM7XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdmFsdWVzW3NsaWNlXSkge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3NlbGVjdGVkVmFsdWVdXVxuICAgICAgICApO1xuICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICBpZiAoYXR0ciA9PT0gJ0FnZScpXG4gICAgICAgICAgXHRhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5W3NsaWNlQ291bnRdLnRleHQoJ0FnZTogJyArIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ2F0ZWdvcnlbc2xpY2VDb3VudF0udGV4dChzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KCc8NScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoY291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnRbc2xpY2VDb3VudF0udGV4dChcbiAgICAgICAgICAgIE51bWJlcigocGVyY2VudCAqIDEwMCkudG9GaXhlZCgxKSkgKyAnJSdcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFxuICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dCgnTm8nKTtcbiAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnRbc2xpY2VDb3VudF0udGV4dChcbiAgICAgICAgICAgICdTdHVkZW50cydcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICAgIC8vZDMuc2VsZWN0KFwidGV4dFtpZD0nZWxlbWVudC5pZC53aXRoLmRvdHMnXVwiKTtcbiAgICBjb25zdCBpZCA9IHNlbGVjdGVkVmFsdWUgKyAncmVjdCc7XG4gICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIGlkICsgXCInXVwiKS5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMyk7XG4gIH1cblxuICByZW1vdmVWYWx1ZXModmFsdWUpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNDb3VudCkge1xuICAgICAgdGV4dENpcmNsZS50ZXh0KCcnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0ZXh0Q2lyY2xlIG9mIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudCkge1xuICAgICAgdGV4dENpcmNsZS50ZXh0KCcnKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaWQgPSB2YWx1ZSArICdyZWN0JztcbiAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgaWQgKyBcIiddXCIpLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKTtcbiAgfVxuXG4gIHJlbmRlckNvbXBhcmUodmFsdWVzKSB7XG4gICAgLy9IZWxwZXIgdmFsdWVzXG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBjb25zdCBzYiA9IHRoaXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWNvbnRhaW5lcicpXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gK2NvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSArY29udGFpbmVyLndpZHRoO1xuXG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoOyAvL21pbnVzIGJlY2F1c2Ugb2YgbGVnZW5kXG4gICAgY29uc3QgaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0IC0gYXR0cnMudGl0bGVUZXh0SGVpZ2h0O1xuICAgIGNvbnN0IG51bVNsaWNlcyA9IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBzYi5jb21wdXRlQ29tcGFyZURpbWVuc2lvbnMoXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG51bVNsaWNlc1xuICAgICk7IC8vcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemVcbiAgICBjb25zdCBhcmNMZW5ndGggPSAyICogTWF0aC5QSTtcblxuICAgIGNvbnN0IHJvd3MgPSBkaW1lbnNpb25zLnJvd3M7XG4gICAgY29uc3QgY29scyA9IGRpbWVuc2lvbnMuY29scztcbiAgICBjb25zdCBzaXplID0gZGltZW5zaW9ucy5zaXplO1xuICAgIGNvbnN0IHdoaXRlc3BhY2VXaWR0aCA9IHdpZHRoIC0gY29scyAqIHNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZUhlaWdodCA9IGhlaWdodCAtIHJvd3MgKiBzaXplO1xuXG4gICAgY29uc3QgbnVtQXJjcyA9IE9iamVjdC5rZXlzKE9iamVjdC52YWx1ZXModmFsdWVzKVswXSlcbiAgICAgIC5sZW5ndGg7XG4gICAgY29uc3QgZXh0ZW5kZWRMaW5lTGVuZ3RoID0gYXR0cnMuZXh0ZW5kZWRMaW5lTGVuZ3RoO1xuICAgIGNvbnN0IGhhbGZTbGljZVJhZGlhbnMgPSBNYXRoLlBJIC8gbnVtU2xpY2VzO1xuICAgIGNvbnN0IHRleHREaXN0YW5jZSA9IGF0dHJzLnRleHREaXN0YW5jZTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuY29tcHV0ZVN1bmJ1cnN0UGFyYW1ldGVycyhcbiAgICAgIHNpemUsXG4gICAgICBzaXplLFxuICAgICAgbnVtQXJjc1xuICAgICk7XG4gICAgY29uc3QgYXJjV2lkdGggPSBwYXJhbXMuYXJjV2lkdGg7XG4gICAgY29uc3QgaW5uZXJSYWRpdXMgPSBwYXJhbXMuaW5uZXJSYWRpdXM7XG4gICAgY29uc3QgaW5uZXJUZXh0U2l6ZSA9IHBhcmFtcy5pbm5lclRleHRTaXplO1xuXG4gICAgLyogSGVscGVyIG1ldGhvZHMgKi9cblxuICAgIC8vIENvbnZlcnRpbmcgc2xpY2UgbmFtZSB0byB0ZXh0XG4gICAgY29uc3QgZ2V0VGV4dCA9IChzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHdvcmRzLmZpbHRlcihcbiAgICAgICAgKHdvcmQpID0+IHdvcmQgIT09ICdUb3RhbCdcbiAgICAgICk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbmRMb25nZXN0U2xpY2UgPSAoYXJyYXkpID0+IHtcbiAgICAgIGxldCBsb25nZXN0V29yZCA9ICcnO1xuICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICBpZiAod29yZC5sZW5ndGggPiBsb25nZXN0V29yZC5sZW5ndGgpIHtcbiAgICAgICAgICBsb25nZXN0V29yZCA9IHdvcmQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxvbmdlc3RXb3JkO1xuICAgIH07XG4gICAgY29uc3QgbG9uZ2VzdFNsaWNlVGV4dExlbmd0aCA9IGdldFRleHQoXG4gICAgICBmaW5kTG9uZ2VzdFNsaWNlKE9iamVjdC5rZXlzKHZhbHVlcykpXG4gICAgKS5sZW5ndGg7XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKFxuICAgICAgc2xpY2UsXG4gICAgICBzbGljZUNvdW50LFxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICkgPT4ge1xuICAgICAgbGV0IHJhZGlhbnMgPVxuICAgICAgICAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIG51bVNsaWNlcyArXG4gICAgICAgIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICBsZXQgdGV4dCA9IGdldFRleHQoc2xpY2UpO1xuICAgICAgbGV0IHJhZGl1cyA9XG4gICAgICAgIGlubmVyUmFkaXVzICsgbnVtQXJjcyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgbGV0IHkgPSAtcmFkaXVzO1xuXG4gICAgICBsZXQgc2l6ZU11bHRpcGxpZXIgPSAxLjg7XG4gICAgICBsZXQgb3V0ZXJUZXh0U2l6ZSA9IE1hdGgubWluKFxuICAgICAgICAoc2l6ZU11bHRpcGxpZXIgKiAoMiAqIHJhZGl1cykpIC9cbiAgICAgICAgICBsb25nZXN0U2xpY2VUZXh0TGVuZ3RoLFxuICAgICAgICAzMFxuICAgICAgKTtcblxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgb3V0ZXJUZXh0U2l6ZSArICdweCcpXG4gICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC50ZXh0KHRleHQpO1xuICAgIH07XG5cbiAgICAvL2FyYyBidWlsZGVyXG4gICAgY29uc3QgYXJjQnVpbGRlciA9IChcbiAgICAgIHN1bmJ1cnN0R3JvdXAsXG4gICAgICBhcmMsXG4gICAgICBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUsXG4gICAgICBzbGljZSxcbiAgICAgIGF0dHIsXG4gICAgICB2YWx1ZVxuICAgICkgPT4ge1xuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmRhdHVtKHtcbiAgICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSlcbiAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuXG4gICAgICAgICAgICBzYi5kaXNwbGF5VmFsdWVzKHZhbHVlcywgdmFsdWUsIGF0dHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgIC5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcxJyk7XG5cbiAgICAgICAgICAgIHNiLnJlbW92ZVZhbHVlcyh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChudW1BcmNzID09IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gcHJvdmlkZSBhbnkgbW9yZSBkZXRhaWwnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnMCcpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhdHRycy5hdHRyaWJ1dGVJbmRleC5pbmRleE9mKFxuICAgICAgICAgICAgICAgIGF0dHJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBzbGljZTEgaW4gbmV3VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NsaWNlID0gc2xpY2UxICsgJywnICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE9iamVjdC5hc3NpZ24obmV3VmFsdWVzLCB7XG4gICAgICAgICAgICAgICAgICBbbmV3U2xpY2VdOiBuZXdWYWx1ZXNbc2xpY2UxXSxcbiAgICAgICAgICAgICAgICB9KVtzbGljZTFdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0cjEgaW4gbmV3VmFsdWVzW25ld1NsaWNlXSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGF0dHIxID09PSBhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNbbmV3U2xpY2VdW2F0dHIxXTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUxIGluIG5ld1ZhbHVlc1tcbiAgICAgICAgICAgICAgICAgICAgICBuZXdTbGljZVxuICAgICAgICAgICAgICAgICAgICBdW2F0dHIxXSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdW3ZhbHVlMV1bXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGF0dHJzLmhpc3RvcnkucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICBzYi5yZW5kZXIobmV3VmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBDbGVhciB0ZXh0Q2lyY2xlIGxpc3RzXG4gICAgYXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeSA9IFtdO1xuICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnQgPSBbXTtcbiAgICBhdHRycy50ZXh0Q2lyY2xlc1BlcmNlbnQgPSBbXTtcblx0XG5cbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCByb3cgPSBwYXJzZUludChzbGljZUNvdW50IC8gY29scyk7XG4gICAgICBsZXQgY29sID0gc2xpY2VDb3VudCAlIGNvbHM7XG5cbiAgICAgIGxldCB0cmFuc2xhdGVYID1cbiAgICAgICAgc2l6ZSAvIDIgK1xuICAgICAgICBjb2wgKiBzaXplICtcbiAgICAgICAgKChjb2wgKyAxKSAqIHdoaXRlc3BhY2VXaWR0aCkgLyAoY29scyArIDEpO1xuICAgICAgbGV0IHRyYW5zbGF0ZVkgPVxuICAgICAgICBhdHRycy50aXRsZVRleHRIZWlnaHQgK1xuICAgICAgICBzaXplIC8gMiArXG4gICAgICAgIHJvdyAqIHNpemUgK1xuICAgICAgICAoKHJvdyArIDEpICogd2hpdGVzcGFjZUhlaWdodCkgLyAocm93cyArIDEpO1xuXG4gICAgICBsZXQgc3ZnID0gYXR0cnMuc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCBzaXplKVxuICAgICAgICAuYXR0cignaGVpZ2h0Jywgc2l6ZSlcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pYFxuICAgICAgICApO1xuICAgICAgbGV0IGNlbnRlckdyb3VwID0gc3ZnXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2VudGVyLWdyb3VwJyk7XG4gICAgICBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZScpXG4gICAgICAgIC5hdHRyKCdjeCcsIDApXG4gICAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDUpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJyk7XG5cbiAgICAgIGxldCB0ZXh0Q2lyY2xlMSA9IGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgJy0wLjVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG4gICAgICBcbiAgICAgIGxldCB0ZXh0Q2lyY2xlMiA9IGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgJzAuNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUzID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMS41ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuXG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5LnB1c2godGV4dENpcmNsZTEpO1xuICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudC5wdXNoKHRleHRDaXJjbGUyKTtcbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudC5wdXNoKHRleHRDaXJjbGUzKTtcblxuICAgICAgbGV0IHN1bmJ1cnN0R3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgICBsZXQgYXJjQ291bnQgPSAwO1xuICAgICAgYXR0cmxvb3A6IGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBhcmMgPSBkM1xuICAgICAgICAgIC5hcmMoKVxuICAgICAgICAgIC5pbm5lclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogYXJjQ291bnQpXG4gICAgICAgICAgLm91dGVyUmFkaXVzKFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIChhcmNDb3VudCArIDEpXG4gICAgICAgICAgKTtcblxuICAgICAgICBsZXQgc2xpY2VTdGFydEFuZ2xlID0gMDtcblxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICAgIHN1bSArPSBOdW1iZXIoXG4gICAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bdmFsdWVdXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYgKHN1bSA9PSAwKSB7XG4gICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgKyBhcmNMZW5ndGgsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICk7XG4gICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgIHN1bmJ1cnN0R3JvdXAsXG4gICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUsXG4gICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICcwJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gJ1RvdGFsJykgY29udGludWU7XG4gICAgICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gc2xpY2VTdGFydEFuZ2xlO1xuICAgICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBhcmNMZW5ndGggKiBwZXJjZW50LFxuICAgICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgICAgICAgICAgYXJjQnVpbGRlcihcbiAgICAgICAgICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgICAgICAgICAgYXJjLFxuICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcmNDb3VudCsrO1xuICAgICAgfVxuICAgICAgdGV4dEJ1aWxkZXIoc2xpY2UsIC0wLjUsIHN1bmJ1cnN0R3JvdXApO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckxlZ2VuZCh2YWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBsZXQgbGVnZW5kID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdC1sZWdlbmQnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgYXR0cnMubGVnZW5kV2lkdGgpO1xuICAgIGxlZ2VuZC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICBcbiAgICBsZXQgeCA9IDIwO1xuICAgIGxldCB5ID0gMTA7XG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4ICsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgICAudGV4dCgnTEVHRU5EJylcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcyMHB4JylcbiAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgXG4gICAgIHkgKz0gMjA7XG4gICAgXG4gICAgbGV0IGZpcnN0U2xpY2UgPSBPYmplY3QudmFsdWVzKHZhbHVlcylbMF07XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGZpcnN0U2xpY2UpIHtcbiAgICAgIGNvbnN0IGFycmF5ID0gT2JqZWN0LmtleXMoZmlyc3RTbGljZVthdHRyXSk7XG4gICAgICBsZWdlbmRcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgLnRleHQoYXR0cilcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG5cdFx0XHQgeSArPSAyMDtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgbGVnZW5kXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2lkJywgdmFsdWUgKyAncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAxMilcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMTIpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KHZhbHVlKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICAgICAgeSArPSAyMDtcbiAgICAgIH1cbiAgICAgIHkgKz0gMTA7XG4gICAgXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTdW5idXJzdCB9IGZyb20gJy4vbmF2aS1jbGFzcyc7XG5pbXBvcnQgeyBSaW5nRGlhZ3JhbSB9IGZyb20gJy4vcmluZy1kaWFncmFtJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXHQvL1JpbmcgZGlhZ3JhbSBvYmplY3RcbiAgbGV0IHJkOyBcblxuXHQvL1NldCBub2RlIGFuZCBNYWluIHZpeiBTUEEgdXBzXG4gIGRpc3BsYXlOb2RlcygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Vml6O1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheU5vZGVzO1xuIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tb3Blbi1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheUluZm87XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLm9uY2xpY2sgPSBoaWRlSW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tY2xvc2UtYnV0dG9uJykub25jbGljayA9IGhpZGVJbmZvO1xuICBcbiAgZnVuY3Rpb24gZGlzcGxheU5vZGVzKCl7XG4gICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gZGlzcGxheVZpeigpe1xuICAgICAgbGV0IHRlc3QgPSBmYWxzZTtcbiAgICBcdGxldCBhY2FkZW1pY1ZhbHVlc1Rlc3QgPSB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICAgICAgIERlZ3JlZTogWydCYWNoZWxvcnMnLCAnTWFzdGVycyddLFxuICAgICAgICAgICAgIEZhY3VsdHk6IFsnU2NpZW5jZScsICdCdXNpbmVzcyddLFxuICAgICAgICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ11cbiAgICAgICAgICB9O1xuICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXNUZXN0ID0geyAgICAgXG4gICAgICAgICAgICAgIEFnZTogW10sXG4gICAgICAgICAgICAgIFNleDogIFsnTWFsZScsICdGZW1hbGUnXSxcbiAgICAgICAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFsnSW50ZXJuYXRpb25hbCcsICdEb21lc3RpYyddXG4gICAgICAgfVxuXG4gICAgXHRpZiAocmQpe1xuICAgICAgICAgbGV0IGRpdmVyc2l0eVZhbHVlcyA9IHRlc3Q/ZGl2ZXJzaXR5VmFsdWVzVGVzdDogc2IuZGl2ZXJzaXR5VmFsdWVzKCk7XG4gICAgICAgICBsZXQgYWNhZGVtaWNWYWx1ZXMgPSB0ZXN0P2FjYWRlbWljVmFsdWVzVGVzdDogc2IuYWNhZGVtaWNWYWx1ZXMoKTtcblxuICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICBcdCBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIGlmICghdmFsaWQpe1xuICAgICAgICAgICBcdGNvbnNvbGUubG9nKGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgIFx0XHRhbGVydCgnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgZGl2ZXJzaXR5IGF0dHJpYnV0ZScpOyAgXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBcdCBcdFx0IC8vcmQucmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpOyAvL0ZvciByaW5nLWRpYWdyYW0xLmpzXG4gICAgICAgICAgIFx0IHJkLmluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWxlcnQoJ1BsZWFzZSB3YWl0IGZvciB0aGUgZGF0YSB0byBmaW5pc2ggbG9hZGluZycpO1xuICAgICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5SW5mbygpe1xuICAgIGNvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gaGlkZUluZm8oKXtcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBcbiAgbGV0IHNiID0gbmV3IFN1bmJ1cnN0KClcbiAgICAgLmNvbnRhaW5lcignI2NoYXJ0LWNvbnRhaW5lcicpXG4gICAgIC5zdmdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aC0yMDApXG4gICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5pbml0aWFsWm9vbSgwLjMpXG4gICAgIC5yZW5kZXIoKVxuXG4gIG5ldyBSaW5nRGlhZ3JhbSgpXG4gICAgICAgICAuY29udGFpbmVyKCcjc3VuYnVyc3QtY29udGFpbmVyJylcbiAgXHRcdFx0IC5kaXNwbGF5Tm9kZXMoZGlzcGxheU5vZGVzKVxuICAgIFx0XHQgLnNldHVwKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZWw1NTgvN2QyY2I1MjU4OTIxMTE5ZGY1ODg0Y2M5MDkwMmU4NGQvcmF3LzAwODI3YjlkNTMyODgzMzQzMTkxZjYxNDRkNDFkMGEwYmJhZDVkZjgvZmFsbC5jc3YnKVxuXHRcdFx0XHQgLnRoZW4odmFsdWUgPT4gcmQgPSB2YWx1ZSk7XG59KTtcblxuXG5cblxuXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQVlPLE1BQU0sTUFBTSxHQUFHO0VBQ3RCLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQy9ELEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2pFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2xFLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3JFLEVBQUUsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUMzRCxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDckQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2hELEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUMvQyxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDcEQsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3BELEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztFQUN0RCxFQUFFLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFN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QUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQzVDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUM1QyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDNUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQzVDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztFQUM1QyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDNUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQzFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ2xGLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ25GLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ25GLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ25GLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ25GLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxx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