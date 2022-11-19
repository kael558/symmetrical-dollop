(function () {
  'use strict';

  const REPORT_NODE = 'REPORT';

  const EDI_ATTRIBUTE_NODE = 'EDI_ATTRIBUTE';
  const ACADEMIC_ATTRIBUTE_NODE = 'OTHER_ATTRIBUTE';
  const UNCOLLECTED_ATTRIBUTE_NODE = 'UNCOLLECTED_ATTRIBUTE';



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

       const initialNodes = {
    Enrolled: {
      type: REPORT_NODE,
      description: 'The number of students that are enrolled.'
    },
    Faculty: {
      parents: ['Enrolled'],
      collectedValues: ['STEM', 'Non-STEM', 'Engineering & Design', 'Science', 'Public Affairs', 'Business', 'Arts & Social Sciences'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'Groups of university departments concerned with a major division of knowledge. The faculty of a student maps from their major or majors.'
    },
    'Academic Year': {
      parents: ['Enrolled'],
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
      description: 'The period of the year which students attend an educational institution. The academic year consists of three terms (Summer, Fall and Winter). The academic year of a student maps from the year that they are studying.',
      ordered: true
    },
    Degree: {
      parents: ['Enrolled'],
      collectedValues: ['Bachelors',
        'Masters',
        'Ph.D.'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'The levels of qualification offered by academic instituitions. The degree of a student maps from their level of study.',
      ordered: true
    },
   
    'Study Status': {
      parents: ['Enrolled'],
      collectedValues: ['Part-time',
        'Full-time',
        'Co-op'],
    	uncollectedValues: [],
      type: ACADEMIC_ATTRIBUTE_NODE,
      description: 'The classification of the amount of courses that a student is taking. Students enrolling in 3 or more credits across the Fall and Winter are full-time students. Whereas students enrolling in less than 3 credits are part-time students.'
    },
    'Citizenship Status': {
      parents: ['Enrolled'],
      collectedValues: ['Domestic',
        'International'],
    	uncollectedValues: [],
      type: EDI_ATTRIBUTE_NODE,
      description: 'The classification of tuition fee that a student pays. The students university tuition fee amount determines their citizenship status.'
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
      description: 'The length of time that a student has lived. The age of a student maps to their respective age interval. The registration application records a student\'s date of birth and determines their age.',
      ordered: true
    },
    Sex: {
      parents: ['Enrolled'],
      collectedValues: ['Female', 'Male'],
    	uncollectedValues: ['Non-binary'],
      type: EDI_ATTRIBUTE_NODE,
      description: 'The physical differences between students based on anatomical and physiological characteristics. The registration application records a student\'s sex (labelled as gender on the application). A student may file a form to request a \"Gender Change Assignment\" to change this field. This field contains a mixture of gender and sex. A growing population of students choose not to disclose their gender/sex with a \'Prefer not to report\' option. We are unsure how this maps to the two available categories of \'male\' and \'female\'.'
  	},
    Race: {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect this category of information.'
  	},
    'Religion/Spirituality': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect this category of information.'
    },
    'Regional Identity': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect this category of information.'
    },
    'Dis/ability': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect this category of information.'
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
      description: 'University does not collect this category of information.'
    },
    'Other Language': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect this category of information.'
    },
    'Ethnicity': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect this category of information.'
    },
    'Nation': {
      parents: ['Enrolled'],
    	collectedValues: [],
    	uncollectedValues: [],
      type: UNCOLLECTED_ATTRIBUTE_NODE,
      description: 'University does not collect this category of information.'
    },
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
      
      
  			 	let textCircle, fo, innerRadius;

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

                 let h = textCircle.node().getBoundingClientRect().height;
                 fo.attr('y', -h);
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
         innerRadius = y(0.3333333); 
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
          
      		fo = centerGroup
              .append('foreignObject')
              .attr('x', -innerRadius)
          		.attr('width',  innerRadius*2)
    					.attr('height',  innerRadius*2);
      
          textCircle = fo
          		.append('xhtml:p')
      					.attr('id', 'c-text')
                .text(attrs.placeholderInnerText)
      					.style('font-size', attrs.centerTextSize);
      
          fo.attr('y', -textCircle.node().getBoundingClientRect().height);
      
      
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
        width: 3000,
        height: 3000,
        container: 'body',
        data: null,
        extendedLineLength: 40,
        textDistance: 15,
        outerTextSize: '25px',
        attributeIndex: null,
        history: [],
        displayNodes: null,
        values: null,
        circleArray: [],
        lineArray: [],
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
        duration: 1000,
        arcs: null,
        textCirclesCategory: [],
        textCirclesCount: [],
        textCirclesPercent: [],
        titleTextSize: '25px',
        titleTextHeight: 60,
        isCompareMode: false,
        legendWidth: 150,
        backgroundColor: this.rgbaObjToColor(colors.Slate_Grey),
        placeholderInnerText1: 'Category',
        placeholderInnerText2: '# of Students',
        placeholderInnerText3: '% in Group',
        changeScale: false,
        firstRender: true
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

    
    rgbaObjToColor({ red, green, blue, alpha }) {
      return `rgba(${red},${green},${blue},${alpha})`;
    }


    /* Return width and height of svg element */
    computeScreenDimensions(){
       const attrs = this.getChartState(); 
    	 const container = attrs.container
        .node()
        .getBoundingClientRect();
      const containerHeight = +container.height;
      const containerWidth = +container.width;
      const width = containerWidth - attrs.legendWidth; //minus because of legend
      const height = containerHeight - attrs.titleTextHeight;
      return [width, height];
    }
    
    /* Given screen width, height and number of arcs, return arc width, innerradius and text size*/
    computeSunburstParameters(x, y, numArcs) { 
      const attrs = this.getChartState();

      let textHeightOffset = 50;

      let min = Math.min(x, y - textHeightOffset);
      let arcWidth = min / (2 * numArcs + 7); //min = 2*numArcs*arcWidth + 2*innerRadius, innerRadius = 3*arcWidth
      let innerRadius = 3 * arcWidth;

      let multiplier = 1.5;
      let n = 13; //'international' with 13 letters is longest word in diversity attributes
      let innerTextSize = (multiplier * (2 * innerRadius)) / n + 'px';
      return [arcWidth, innerRadius, innerTextSize];
    }

    /* Given screen width, height and number of squares, return rows, columns and square size */
    computeCellDimensions(x, y, n) {
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

      return [cell_size, nrows, ncols];
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

      // set up container
      attrs.container = d3.select(attrs.container)
  								.style('background-color', attrs.backgroundColor);
  		
      // setting up compare button
      const toggleCompare = () => {
        attrs.isCompareMode = !attrs.isCompareMode;
        sb.update();
      };
      
      document.getElementById('compare-button').onclick = toggleCompare;
      return this;
    }
    

    render(academicValues, diversityValues){
    		let attrs = this.getChartState();

      	/* Preparing data */
      	attrs.isCompareMode = false;
      	const [width, height] = this.computeScreenDimensions();
      	const [cellSize, rows, cols] = this.computeCellDimensions(width, height, 1);
      	attrs.previousCellSize = cellSize;
      
     	 	// Sorting ordered attributes
        const sortValues = (values) => {
        	Object.keys(values).forEach(dv => {
            if (initialNodes[dv].ordered){
              values[dv].sort((e1, e2) => (
                initialNodes[dv]['collectedValues'].indexOf(e1) - 
                initialNodes[dv]['collectedValues'].indexOf(e2)
                ));
            }
        	});
        };
        sortValues(academicValues);
      	sortValues(diversityValues);
        
      
        // Preparing slices
       const cartesian = (...a) => a.reduce((a, b) =>a.flatMap((d) => b.map((e) => [d, e].flat())));
        let slices = cartesian(
          academicValues['Academic Year'],
          academicValues.Degree,
          academicValues.Faculty,
          academicValues['Study Status']
        );
        
         const makeQuery = (slice, diversityAttr, value) => {
            let query = [...slice];
            for (const prop in diversityValues)
              query.push(prop !== diversityAttr ? 'Total' : value);
            return query;
          };
        
         attrs.pies = [];
      
      		const makeLabel = (words) => {
            const filtered = words.filter((word) => word !== 'Total');
            const result = filtered.join('\r\n');
            return result;
          };

      	 attrs.slices = slices.map(makeLabel);
      	 attrs.rings = diversityValues;
      	 attrs.totalSlices = slices.length;
      	 attrs.totalRings = Object.values(diversityValues).filter(arr => arr.length > 0).length;
  				
          let ringCount = 0;
          Object.keys(diversityValues).forEach((dv) => {
            	slices.forEach((slice, sliceCount) => {
            		let values = [...diversityValues[dv]];
               	values = values.map(v => {
                    return {
                      "visible": true,
                      "group" : dv,
                      "category": v,
                      "query": makeQuery(slice, dv, v),
                      "sliceNumber": sliceCount,
                      "ringNumber": ringCount
                    };
                  });
                if (values.length > 0){
                	attrs.pies.push(values);
                }
             });
             if (diversityValues[dv].length > 0){
                ringCount++;
             }
         });
    
      	// Render title
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
          if (list.length == 0) return '';
          if (list.length == 1) return 'Students across ' + list.pop() + '.'; 
          return 'Students across ' + list.slice(0, -1).join() + ' and ' + list.pop() + '.';
      	};
      
      	d3.select('#viz-title-text')
          .style('font-size', attrs.titleTextSize)
          .text(titleBuilder(academicValues, diversityValues));
      	this.update();
    }
    
    update(){
      	const attrs = this.getChartState();
  			const sb = this;
      
      	// repurposing back button if necessary
      	if (attrs.history.length > 0) {
          const back = () => {attrs.pies = attrs.history.pop(); sb.update();};
          document.getElementById('back-button').onclick = back;
        } else {
          document.getElementById('back-button').onclick = attrs.displayNodes;
        }
      
      	const totalSlices = attrs.totalSlices;
      	const totalRings = attrs.totalRings;
      	const isCompareMode = attrs.isCompareMode;
  			
        const [width, height] = this.computeScreenDimensions();
      	const [cellSize, rows, cols] = this.computeCellDimensions(width, height, (isCompareMode) ? totalSlices : 1);
      	const [arcWidth, innerRadius, innerTextSize] = this.computeSunburstParameters(width, height, totalRings);
      	
      	const whitespaceWidth = width - cols * cellSize;
        const whitespaceHeight = height - rows * cellSize;
      
      	const pie = d3.pie().value(d => attrs.data[d.query]).sort(null);
      
        const generatePie = (d, type) => {
          let totalSlicesLocal = isCompareMode ? 1 : totalSlices;
          let sliceNumber = isCompareMode? 0 : d[0].sliceNumber;
          
          return pie
            .startAngle(sliceNumber * 2 * Math.PI / totalSlicesLocal)
            .endAngle((sliceNumber + 1) * 2 * Math.PI / totalSlicesLocal)(d);
        };

  			function getArc(d){
        	return d3.arc()
            .innerRadius(innerRadius + arcWidth * d.data.ringNumber)
            .outerRadius(innerRadius + arcWidth * (d.data.ringNumber + 1))
        }
        
        function generateArc(d){
        	return getArc(d)(d);
        }
      

        function arcTween(a) {
          this._current = this._current || a;
          let i = d3.interpolate(this._current, a);
          this._current = i(0);
  				let arcT = getArc(a);
          return function(t) {
            return arcT(i(t));
          };
        }

      	const getTransformation = (sliceNumber) => {
          let row = Math.min(parseInt(sliceNumber /cols), rows-1);// Accounting for conjoined case
          let col = sliceNumber%cols;

          let translateX =
            cellSize / 2 +
            col *  cellSize +
            ((col + 1) * whitespaceWidth) / (cols + 1);
          let translateY =
            attrs.titleTextHeight +
              cellSize / 2 +
              row * cellSize +
              ((row + 1) * whitespaceHeight) / (rows + 1);
          
          let scale = Math.min(1, cellSize/attrs.previousCellSize);

  				return [translateX, translateY, scale];
        };
        
      	// Make pie groups
      	let pieGroups = attrs.container
        								.selectAll('g.pie')
        								.data(attrs.pies)
        								.join(
                          enter => enter.append('g')
                          	.attr("class", "pie")
            								.attr("transform", d => {
                              		const [tx, ty, s] = getTransformation(d[0].sliceNumber);
                            			return `translate(${tx},${ty}) scale(${s})`;
                              }),
                          update => update
                          	.transition("pieUpdateTr").duration(attrs.duration)
            								.attr("transform", d => {
                              		const [tx, ty, s] = getTransformation(d[0].sliceNumber);
                            			return `translate(${tx},${ty}) scale(${s})`;
                              }),
                          exit => exit.remove()
                        );
      
      	const fixCategory = (category) => {
          let result = category.replace(/[+=<]/g, "-");
      		if (!result[0].match(/[a-zA-Z]/))
           	result= "_"+result; 
          return result;
        };

        // Make arcs
        pieGroups.selectAll("path")
          .data(generatePie)
          .join(
            enter => enter
                    .append('path')
          					.attr('class', d => fixCategory(d.data.category))
                    .attr('stroke', 'white')
                    .attr('stroke-width', '2px')
                    .attr('opacity', 1)
                    .attr('fill', d => attrs.color[d.data.category])
                    .attr('d', generateArc)
                    .each(function(d){ this._current = d; })
          					.on('mouseover', function (d, i) {

                      	//highlight arc
                    		d3.select(this)
                          .transition().duration('50')
                          .attr('opacity', '.85');
                      
                      	//highlight legend 
                      	d3.select("[id='" + d.data.category + "rect']")
                          .style('stroke-width', 3);
          
                      	const updateCircleText = (d, sliceNumber) => {
                        	 		let count = d.value;
                            	let centerGroup = "#center"+sliceNumber;
                            	if (count==0){
                                d3.select(centerGroup+"> .category").text('').attr('opacity', '1');
                                d3.select(centerGroup+"> .num_students").text('No Students').attr('opacity', '1');
                                d3.select(centerGroup+"> .percent_in_group").text('0%').attr('opacity', '1');
                              } else {
                                let sliceArcLength = (Math.PI*2) / (attrs.isCompareMode ? 1 : totalSlices); 
                                let percent = (d.endAngle-d.startAngle)/sliceArcLength;
                                d3.select(centerGroup+"> .category").text((d.data.group === 'Age' ? 'Age: ' : '') + d.data.category).attr('opacity', '1');
                                d3.select(centerGroup+"> .num_students").text((d.value < 5) ? '<5' : d.value).attr('opacity', '1');
                                d3.select(centerGroup+"> .percent_in_group").text(Number((percent * 100).toFixed(1)) + '%').attr('opacity', '1');
                              }
                        };
                      
                      	//update circle text
                      	if (attrs.isCompareMode){
                        	d3.selectAll("path." + fixCategory(d.data.category))
                            .each(d => {
                            	updateCircleText(d, d.data.sliceNumber);
                          	});
                        } else {
                          updateCircleText(d, circleArray.length-1);
                        }
                    	})
                    .on('mouseout', function (d, i) {
                        //unhighlight arc
                        d3.select(this)
                          .transition().duration('50')
                          .attr('opacity', '1');

                        //unhighlight legend
                        d3.select("[id='" + d.data.category + "rect']")
                          .style('stroke-width', 1);

                        //reset circle text
                        d3.selectAll(".center > .category").text(attrs.placeholderInnerText1).attr('opacity', '0.5');
                        d3.selectAll(".center > .num_students").text(attrs.placeholderInnerText2).attr('opacity', '0.5');
                        d3.selectAll(".center > .percent_in_group").text(attrs.placeholderInnerText3).attr('opacity', '0.5');
                    }).on('click', function(d, i) {
  											if (totalRings <= 1){
                        	alert("Cannot display more detail");
                          return;
                        }
                      
                      	attrs.history.push(attrs.pies);
                      
                      	let newPies = JSON.parse(JSON.stringify(attrs.pies));
                      	newPies = newPies.filter(p => p[0].group != d.data.group);

                      	let ringNumber = d.data.ringNumber;
                      	const index = attrs.attributeIndex.indexOf(d.data.group);
                      	newPies.forEach(p => { 
                          p.forEach(s=> {
                          	s.query[index] = d.data.category; 
                          	if (s.ringNumber > ringNumber) s.ringNumber-=1;
                          });
                        });
                      
                      	d3.select(this).remove();
                      	attrs.pies = newPies;
                      	sb.update();
                    }),
                    update => update
          									.attr('class', d => fixCategory(d.data.category))
          									.attr('fill', d => attrs.color[d.data.category])
          									.attr('d', generateArc)
                            .transition("arcIntTr").duration(attrs.duration)
                            .attrTween('d', arcTween),
                    exit => exit
                            .transition().duration(attrs.duration)
                            .style('opacity', 0)
                            .on('end', function() {
                              d3.select(this).remove();
                          })
            );
      	// Make lines
      	const getCircleX = (radians, radius) => Math.sin(radians) * radius;
        const getCircleY = (radians, radius) => Math.cos(radians) * radius;
      	if (totalSlices > 1){
          const getRadians = (sliceCount) => {
            let radians = (2 * Math.PI * sliceCount) / totalSlices;
            if (totalSlices % 2 == 1) radians += Math.PI;
            return radians;
          };

          const lines = attrs.container
                            .selectAll('g.lines')
                            .data([0])
                            .join(
                                enter => enter.append('g')
                                    .attr('class', 'lines')
                                    .attr('transform', d => {
                                        let initialSize = Math.min(width, height);
                                        let tx = initialSize / 2  + whitespaceWidth / 2; 
                                        let ty = attrs.titleTextHeight + initialSize / 2  + whitespaceHeight/ 2; 
                                        return `translate(${tx},${ty})`;
                                    }),
                                update => update.transition().duration(attrs.duration)
                                            .style('opacity', isCompareMode ? 0 : 1),
                                exit => exit
                            );

          lines.raise();
          const lineLength = totalRings * arcWidth + attrs.extendedLineLength;
          const lineArray = Array.from(Array(attrs.totalSlices).keys()).map(getRadians);

          lines.selectAll('line')
                .data(lineArray)
                .join(
                  enter => 
                    enter
                      .append('line')
                      .style('stroke', 'black')
                      .style('stroke-width', 3)
                      .attr('x1', radians => getCircleX(radians, innerRadius))
                      .attr('y1', radians => getCircleY(radians, innerRadius))
                      .attr('x2', radians => getCircleX(radians, innerRadius + lineLength))
                      .attr('y2', radians => getCircleY(radians, innerRadius + lineLength)),
                  update => update
            					.attr('x1', radians => getCircleX(radians, innerRadius))
                      .attr('y1', radians => getCircleY(radians, innerRadius))
                      .attr('x2', radians => getCircleX(radians, innerRadius + lineLength))
                      .attr('y2', radians => getCircleY(radians, innerRadius + lineLength)),
                  exit => exit.remove()
                );
        }
   
   			// Add labels
        const halfSliceRadians = Math.PI / totalSlices;
      	const textDistance = attrs.textDistance;
      
      	const labelAnchor = (slice, sliceNumber) => {
          	if (isCompareMode) return "middle";
          
          	let radians = (2 * Math.PI * sliceNumber) / totalSlices + halfSliceRadians;
            let radius = innerRadius + totalRings * arcWidth + textDistance;
            let offset_tx = getCircleX(radians, radius);

          	if (offset_tx < -1) return "end"
          	else if (offset_tx < 1) return "middle"

          	return "start";
        };
      
      	const labelTransform = (slice,sliceNumber) => {
          	let row = Math.min(parseInt(sliceNumber /cols), rows-1);// Accounting for conjoined case
            let col = sliceNumber%cols;

            let mid_tx =
              cellSize / 2 +
              col *  cellSize +
              ((col + 1) * whitespaceWidth) / (cols + 1);
            let mid_ty =
              attrs.titleTextHeight +
                cellSize / 2 +
                row * cellSize +
                ((row + 1) * whitespaceHeight) / (rows + 1);


          	let radians = (2 * Math.PI * sliceNumber) / totalSlices + halfSliceRadians;
            let radius = innerRadius + totalRings * arcWidth + textDistance;
            let offset_tx = isCompareMode ? 0 : getCircleX(radians, radius);
            let offset_ty = isCompareMode ? radius + 1.5*textDistance: -getCircleY(radians, radius);
          	
          	
          	let scale = Math.min(1, cellSize/attrs.previousCellSize);
    
  					let tx = mid_tx+offset_tx*scale;
          	let ty = mid_ty+offset_ty*scale;

            return `translate(${tx},${ty})`;
        };

      	let labels = attrs.container
        								.selectAll('text.labels')
        								.data(attrs.slices, slice=>slice)
        								.join(
                          enter => enter.append('text')
                          			.attr("class", "labels")
                          			.style("text-anchor", (slice,sliceCount) => labelAnchor(slice,sliceCount))
                          			.style('fill', "white")
                          			.text(slice => slice)
                          			.attr("transform", (slice,sliceCount) => labelTransform(slice,sliceCount)),
                          update => update
                          	.transition("pieUpdateTr").duration(attrs.duration)
                          	.style("text-anchor", (slice,sliceCount) =>  labelAnchor(slice,sliceCount))
            								.attr("transform", (slice,sliceCount) => labelTransform(slice,sliceCount)),
                          exit => exit.remove()
                        );
      
      	// Add circles
        const circleArray = Array.from(Array(totalSlices).keys());
        let circleGroups = attrs.container
        												.selectAll('g.center')
        												.data(circleArray)
        												.join(
                                	enter => {
                                    const centerGroup = enter
                                    			.append('g')
                                    			.attr("class", "center")
                                    			.attr("id", d => "center" + d)
                                    			.attr("transform", d => {
                                                let initialSize = Math.min(width, height);
                                                let tx = initialSize / 2  + whitespaceWidth / 2; 
                                                let ty = attrs.titleTextHeight + initialSize / 2  + whitespaceHeight/ 2; 
                                                return `translate(${tx},${ty})`;
                                            });
                                  	let circleGroup = centerGroup
                                          .append('circle')
                                          .attr('cx', 0)
                                          .attr('cy', 0)
                                          .attr('r', innerRadius)
                                          .attr('stroke', 'black')
                                          .style('stroke-width', 2)
                                          .attr('fill', 'white');
                                    const appendTextElement = (dy, name, text) => {
                                        centerGroup
                                            .append('text')
                                            .attr('class', name)
                                            .attr('opacity', 0.5)
                                            .attr('x', 0)
                                            .attr('y', 0)
                                            .attr('dy', dy)
                                            .style('text-anchor', 'middle')
                                            .style('font-size', innerTextSize)
                                            .text(text);
                                    }; 
                                    appendTextElement('-0.5em', 'category', attrs.placeholderInnerText1);
                                    appendTextElement('0.5em', 'num_students', attrs.placeholderInnerText2);
                                    appendTextElement('1.5em', 'percent_in_group', attrs.placeholderInnerText3);
                                    return centerGroup;
                                 	},
                                	update => {
                                    update.transition("circleUpdateTr").duration(attrs.duration)
                    .attr("transform", d => {
                          const [tx, ty, s] = getTransformation(d);
                          return `translate(${tx},${ty}) scale(${s})`;
                    });
                                             update.select('circle').attr('r', innerRadius);
                                    return update;
                                            },
                                	exit => exit.remove()
                              );
        //circleGroups
      	circleGroups.raise();
      	this.renderLegend();
    }
    

    renderLegend() {
      let attrs = this.getChartState();

      console.log(attrs.rings);

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
      
      for (const category in attrs.rings){
    		if ( attrs.rings[category].length == 0){
          continue;  
        }
        legend
          .append('text')
          .attr('x', x)
          .attr('y', y + 6)
          .text(category)
          .style('font-size', '15px')
          .style('fill', 'white')
          .attr('alignment-baseline', 'middle');
  			 y += 20;
        
        for (const value of attrs.rings[category]){
          legend
            .append('rect')
            .attr('id', value + 'rect')
            .attr('x', x)
            .attr('y', y)
            .attr('width', 12)
            .attr('height', 12)
            .attr('stroke', 'black')
            .style('stroke-width', 1)
            .style('fill', attrs.color[value]);
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
        y+=10;
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
        	 		 rd.render(academicValues, diversityValues); //For ring-diagram1.js
             	 //rd.initialRender(academicValues, diversityValues);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwibmF2aS1jbGFzcy5qcyIsInJpbmctZGlhZ3JhbTEuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTlZJU0lCTEVfTk9ERSA9ICdJTlZJU0lCTEUnO1xuY29uc3QgUkVQT1JUX05PREUgPSAnUkVQT1JUJztcblxuY29uc3QgRURJX0FUVFJJQlVURV9OT0RFID0gJ0VESV9BVFRSSUJVVEUnO1xuY29uc3QgQUNBREVNSUNfQVRUUklCVVRFX05PREUgPSAnT1RIRVJfQVRUUklCVVRFJztcbmNvbnN0IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFID0gJ1VOQ09MTEVDVEVEX0FUVFJJQlVURSc7XG5cbmNvbnN0IFZBTFVFX05PREUgPSAnVkFMVUUnO1xuY29uc3QgVU5DT0xMRUNURURfVkFMVUVfTk9ERSA9ICdVTkNPTExFQ1RFRF9WQUxVRSc7XG5cblxuXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xuICBSZXBvcnRfTm9kZV9GaWxsOiB7XCJyZWRcIjozMSxcImdyZWVuXCI6MTIwLFwiYmx1ZVwiOjE4MCxcImFscGhhXCI6MX0sXG4gIERpdmVyc2l0eV9Ob2RlX0ZpbGw6IHtcInJlZFwiOjUxLFwiZ3JlZW5cIjoxNjAsXCJibHVlXCI6NDQsXCJhbHBoYVwiOjF9LFxuICBBY2FkZW1pY19Ob2RlX0ZpbGw6IHtcInJlZFwiOjE2NixcImdyZWVuXCI6MjA2LFwiYmx1ZVwiOjIyNyxcImFscGhhXCI6MX0sXG4gIFVuY29sbGVjdGVkX05vZGVfRmlsbDoge1wicmVkXCI6MTI4LFwiZ3JlZW5cIjoxMjgsXCJibHVlXCI6MTI4LFwiYWxwaGFcIjoxfSxcbiAgVHJhbnNwYXJlbnQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MH0sXG4gIFdoaXRlOiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbHVlOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsYWNrOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9LFxuICBHcmV5OiB7XCJyZWRcIjoxNDEsXCJncmVlblwiOjE2MCxcImJsdWVcIjoyMDMsXCJhbHBoYVwiOjF9LFxuXHRHcmVlbjoge1wicmVkXCI6MTAyLFwiZ3JlZW5cIjoxOTQsXCJibHVlXCI6MTY1LFwiYWxwaGFcIjoxfSxcbiAgT3JhbmdlOiB7XCJyZWRcIjoyNTIsXCJncmVlblwiOjE0MSxcImJsdWVcIjo5OCxcImFscGhhXCI6IDF9LFxuICBTbGF0ZV9HcmV5IDoge1wicmVkXCI6NjEsXCJncmVlblwiOjcyLFwiYmx1ZVwiOjczLFwiYWxwaGFcIjoxfSxcbiAgQnV0dG9uOiB7XCJyZWRcIjoxMDAsXCJncmVlblwiOjEwMCxcImJsdWVcIjoxMDAsXCJhbHBoYVwiOjF9LFxuICBEaXNhYmxlZDoge1wicmVkXCI6MTAwLFwiZ3JlZW5cIjoxMDAsXCJibHVlXCI6MTAwLFwiYWxwaGFcIjowLjJ9LFxuICBEaXNhYmxlZF9UZXh0OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjAuMn0sXG59XG5cbiAgICAgZXhwb3J0IGNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgRW5yb2xsZWQ6IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBudW1iZXIgb2Ygc3R1ZGVudHMgdGhhdCBhcmUgZW5yb2xsZWQuJ1xuICB9LFxuICBGYWN1bHR5OiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydTVEVNJywgJ05vbi1TVEVNJywgJ0VuZ2luZWVyaW5nICYgRGVzaWduJywgJ1NjaWVuY2UnLCAnUHVibGljIEFmZmFpcnMnLCAnQnVzaW5lc3MnLCAnQXJ0cyAmIFNvY2lhbCBTY2llbmNlcyddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0dyb3VwcyBvZiB1bml2ZXJzaXR5IGRlcGFydG1lbnRzIGNvbmNlcm5lZCB3aXRoIGEgbWFqb3IgZGl2aXNpb24gb2Yga25vd2xlZGdlLiBUaGUgZmFjdWx0eSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIG1ham9yIG9yIG1ham9ycy4nXG4gIH0sXG4gICdBY2FkZW1pYyBZZWFyJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnMjAxMy8xNCcsXG4gICAgICAnMjAxNC8xNScsXG4gICAgICAnMjAxNS8xNicsXG4gICAgICAnMjAxNi8xNycsXG4gICAgICAnMjAxNy8xOCcsXG4gICAgICAnMjAxOC8xOScsXG4gICAgICAnMjAxOS8yMCcsXG4gICAgICAnMjAyMC8yMScsXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgcGVyaW9kIG9mIHRoZSB5ZWFyIHdoaWNoIHN0dWRlbnRzIGF0dGVuZCBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGlvbi4gVGhlIGFjYWRlbWljIHllYXIgY29uc2lzdHMgb2YgdGhyZWUgdGVybXMgKFN1bW1lciwgRmFsbCBhbmQgV2ludGVyKS4gVGhlIGFjYWRlbWljIHllYXIgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGUgeWVhciB0aGF0IHRoZXkgYXJlIHN0dWR5aW5nLicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuICBEZWdyZWU6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0JhY2hlbG9ycycsXG4gICAgICAnTWFzdGVycycsXG4gICAgICAnUGguRC4nXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgbGV2ZWxzIG9mIHF1YWxpZmljYXRpb24gb2ZmZXJlZCBieSBhY2FkZW1pYyBpbnN0aXR1aXRpb25zLiBUaGUgZGVncmVlIG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlaXIgbGV2ZWwgb2Ygc3R1ZHkuJyxcbiAgICBvcmRlcmVkOiB0cnVlXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydQYXJ0LXRpbWUnLFxuICAgICAgJ0Z1bGwtdGltZScsXG4gICAgICAnQ28tb3AnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgY2xhc3NpZmljYXRpb24gb2YgdGhlIGFtb3VudCBvZiBjb3Vyc2VzIHRoYXQgYSBzdHVkZW50IGlzIHRha2luZy4gU3R1ZGVudHMgZW5yb2xsaW5nIGluIDMgb3IgbW9yZSBjcmVkaXRzIGFjcm9zcyB0aGUgRmFsbCBhbmQgV2ludGVyIGFyZSBmdWxsLXRpbWUgc3R1ZGVudHMuIFdoZXJlYXMgc3R1ZGVudHMgZW5yb2xsaW5nIGluIGxlc3MgdGhhbiAzIGNyZWRpdHMgYXJlIHBhcnQtdGltZSBzdHVkZW50cy4nXG4gIH0sXG4gICdDaXRpemVuc2hpcCBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydEb21lc3RpYycsXG4gICAgICAnSW50ZXJuYXRpb25hbCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgY2xhc3NpZmljYXRpb24gb2YgdHVpdGlvbiBmZWUgdGhhdCBhIHN0dWRlbnQgcGF5cy4gVGhlIHN0dWRlbnRzIHVuaXZlcnNpdHkgdHVpdGlvbiBmZWUgYW1vdW50IGRldGVybWluZXMgdGhlaXIgY2l0aXplbnNoaXAgc3RhdHVzLidcbiAgfSxcbiAgQWdlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogW1xuICAgICAgJzw9MTcnLFxuICAgICAgJzE4LTIwJyxcbiAgICAgICcyMS0yNScsXG4gICAgICAnMjYtMzAnLFxuICAgICAgJzMxLTM1JyxcbiAgICAgICczNi00NScsXG4gICAgICAnNDYtNTUnLFxuICAgICAgJzU1KycsXG4gICAgXSxcbiAgICB1bmNvbGxlY3RlZFZhbHVlczogWyc1NS01OScsJzYwLTY0JywnNjUtNjknLCAnNzAtNzQnLCAnNzUtNzknLCAnODArJ10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxlbmd0aCBvZiB0aW1lIHRoYXQgYSBzdHVkZW50IGhhcyBsaXZlZC4gVGhlIGFnZSBvZiBhIHN0dWRlbnQgbWFwcyB0byB0aGVpciByZXNwZWN0aXZlIGFnZSBpbnRlcnZhbC4gVGhlIHJlZ2lzdHJhdGlvbiBhcHBsaWNhdGlvbiByZWNvcmRzIGEgc3R1ZGVudFxcJ3MgZGF0ZSBvZiBiaXJ0aCBhbmQgZGV0ZXJtaW5lcyB0aGVpciBhZ2UuJyxcbiAgICBvcmRlcmVkOiB0cnVlXG4gIH0sXG4gIFNleDoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnRmVtYWxlJywgJ01hbGUnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydOb24tYmluYXJ5J10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBoeXNpY2FsIGRpZmZlcmVuY2VzIGJldHdlZW4gc3R1ZGVudHMgYmFzZWQgb24gYW5hdG9taWNhbCBhbmQgcGh5c2lvbG9naWNhbCBjaGFyYWN0ZXJpc3RpY3MuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIHNleCAobGFiZWxsZWQgYXMgZ2VuZGVyIG9uIHRoZSBhcHBsaWNhdGlvbikuIEEgc3R1ZGVudCBtYXkgZmlsZSBhIGZvcm0gdG8gcmVxdWVzdCBhIFxcXCJHZW5kZXIgQ2hhbmdlIEFzc2lnbm1lbnRcXFwiIHRvIGNoYW5nZSB0aGlzIGZpZWxkLiBUaGlzIGZpZWxkIGNvbnRhaW5zIGEgbWl4dHVyZSBvZiBnZW5kZXIgYW5kIHNleC4gQSBncm93aW5nIHBvcHVsYXRpb24gb2Ygc3R1ZGVudHMgY2hvb3NlIG5vdCB0byBkaXNjbG9zZSB0aGVpciBnZW5kZXIvc2V4IHdpdGggYSBcXCdQcmVmZXIgbm90IHRvIHJlcG9ydFxcJyBvcHRpb24uIFdlIGFyZSB1bnN1cmUgaG93IHRoaXMgbWFwcyB0byB0aGUgdHdvIGF2YWlsYWJsZSBjYXRlZ29yaWVzIG9mIFxcJ21hbGVcXCcgYW5kIFxcJ2ZlbWFsZVxcJy4nXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG5cdH0sXG4gICdSZWxpZ2lvbi9TcGlyaXR1YWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnUmVnaW9uYWwgSWRlbnRpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnRGlzL2FiaWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICBJbmRpZ2VuZWl0eToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ0ZpcnN0IE5hdGlvbnMnLCAnTWV0aXMnLCAnSW51aXQnXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgaW5kaWdlbmVpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0ZpcnN0IExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ090aGVyIExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ0V0aG5pY2l0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdOYXRpb24nOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxufVxuXG5cbmV4cG9ydCBjb25zdCBub2RlcyA9IHtcbiAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlRyYW5zcGFyZW50LFxuICBcdFx0XHRcdCBcImJvcmRlcldpZHRoXCI6IFwiMHB4XCIsXG4gICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZhY3VsdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICBcdGRlc2NyaXB0aW9uOiAnR3JvdXBzIG9mIHVuaXZlcnNpdHkgZGVwYXJ0bWVudHMgY29uY2VybmVkIHdpdGggYSBtYWpvciBkaXZpc2lvbiBvZiBrbm93bGVkZ2UuIFRoZSBmYWN1bHR5IG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlaXIgbWFqb3Igb3IgbWFqb3JzLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlNURU1cIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTm9uLVNURU1cIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiRW5naW5lZXJpbmcgJiBEZXNpZ25cIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiU2NpZW5jZVwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJQdWJsaWMgQWZmYWlyc1wiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJCdXNpbmVzc1wiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgXHR7XCJuYW1lXCI6IFwiQXJ0cyAmIFNvY2lhbCBTY2llbmNlc1wiLCBcInNpemVcIjogMTJ9XG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJBY2FkZW1pYyBZZWFyXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBwZXJpb2Qgb2YgdGhlIHllYXIgd2hpY2ggc3R1ZGVudHMgYXR0ZW5kIGFuIGVkdWNhdGlvbmFsIGluc3RpdHV0aW9uLiBUaGUgYWNhZGVtaWMgeWVhciBjb25zaXN0cyBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsIGFuZCBXaW50ZXIpLiBUaGUgYWNhZGVtaWMgeWVhciBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZSB5ZWFyIHRoYXQgdGhleSBhcmUgc3R1ZHlpbmcuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxMy8xNFwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTQvMTVcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE1LzE2XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxNi8xN1wiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTcvMThcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE4LzE5XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxOS8yMFwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMjAvMjFcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcblx0XHRcdFx0XHRcdHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJEZWdyZWVcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxldmVscyBvZiBxdWFsaWZpY2F0aW9uIG9mZmVyZWQgYnkgYWNhZGVtaWMgaW5zdGl0dWl0aW9ucy4gVGhlIGRlZ3JlZSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIGxldmVsIG9mIHN0dWR5LicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkJhY2hlbG9yc1wiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJNYXN0ZXJzXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlBoLkQuXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN0dWR5IFN0YXR1c1wiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY2xhc3NpZmljYXRpb24gb2YgdGhlIGFtb3VudCBvZiBjb3Vyc2VzIHRoYXQgYSBzdHVkZW50IGlzIHRha2luZy4gU3R1ZGVudHMgZW5yb2xsaW5nIGluIDMgb3IgbW9yZSBjcmVkaXRzIGFjcm9zcyB0aGUgRmFsbCBhbmQgV2ludGVyIGFyZSBmdWxsLXRpbWUgc3R1ZGVudHMuIFdoZXJlYXMgc3R1ZGVudHMgZW5yb2xsaW5nIGluIGxlc3MgdGhhbiAzIGNyZWRpdHMgYXJlIHBhcnQtdGltZSBzdHVkZW50cy4nLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiUGFydC10aW1lXCIsIFwic2l6ZVwiOiA0Mn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkZ1bGwtdGltZVwiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaXRpemVuc2hpcCBTdGF0dXNcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsLFxuICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHR1aXRpb24gZmVlIHRoYXQgYSBzdHVkZW50IHBheXMuIFRoZSBzdHVkZW50cyB1bml2ZXJzaXR5IHR1aXRpb24gZmVlIGFtb3VudCBkZXRlcm1pbmVzIHRoZWlyIGNpdGl6ZW5zaGlwIHN0YXR1cy4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJEb21lc3RpY1wiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJJbnRlcm5hdGlvbmFsXCIsIFwic2l6ZVwiOiA0Mn0sXG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFnZVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxlbmd0aCBvZiB0aW1lIHRoYXQgYSBzdHVkZW50IGhhcyBsaXZlZC4gVGhlIGFnZSBvZiBhIHN0dWRlbnQgbWFwcyB0byB0aGVpciByZXNwZWN0aXZlIGFnZSBpbnRlcnZhbC4gVGhlIHJlZ2lzdHJhdGlvbiBhcHBsaWNhdGlvbiByZWNvcmRzIGEgc3R1ZGVudFxcJ3MgZGF0ZSBvZiBiaXJ0aCBhbmQgZGV0ZXJtaW5lcyB0aGVpciBhZ2UuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiPD0xN1wiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjE4LTIwXCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjEtMjVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyNi0zMFwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjMxLTM1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMzYtNDVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI0Ni01NVwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjU1K1wiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjU1LTU5XCIsIFwiY29sb3JcIjpjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjYwLTY0XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI2NS02OVwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNzAtNzRcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjc1LTc5XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI4MCtcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn1cbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2V4XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgcGh5c2ljYWwgZGlmZmVyZW5jZXMgYmV0d2VlbiBzdHVkZW50cyBiYXNlZCBvbiBhbmF0b21pY2FsIGFuZCBwaHlzaW9sb2dpY2FsIGNoYXJhY3RlcmlzdGljcy4gVGhlIHJlZ2lzdHJhdGlvbiBhcHBsaWNhdGlvbiByZWNvcmRzIGEgc3R1ZGVudFxcJ3Mgc2V4IChsYWJlbGxlZCBhcyBnZW5kZXIgb24gdGhlIGFwcGxpY2F0aW9uKS4gQSBzdHVkZW50IG1heSBmaWxlIGEgZm9ybSB0byByZXF1ZXN0IGEgXFxcIkdlbmRlciBDaGFuZ2UgQXNzaWdubWVudFxcXCIgdG8gY2hhbmdlIHRoaXMgZmllbGQuIFRoaXMgZmllbGQgY29udGFpbnMgYSBtaXh0dXJlIG9mIGdlbmRlciBhbmQgc2V4LiBBIGdyb3dpbmcgcG9wdWxhdGlvbiBvZiBzdHVkZW50cyBjaG9vc2Ugbm90IHRvIGRpc2Nsb3NlIHRoZWlyIGdlbmRlci9zZXggd2l0aCBhIFxcJ1ByZWZlciBub3QgdG8gcmVwb3J0XFwnIG9wdGlvbi4gV2UgYXJlIHVuY2VydGFpbiBob3cgdGhpcyBtYXBzIHRvIHRoZSB0d28gYXZhaWxhYmxlIGNhdGVnb3JpZXMgb2YgXFwnbWFsZVxcJyBhbmQgXFwnZmVtYWxlXFwnLicsXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJNYWxlXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkZlbWFsZVwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJOb24tYmluYXJ5XCIsIFwiY29sb3JcIjpjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogMjh9XG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJhY2VcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgIFwic2l6ZVwiOiA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWxpZ2lvbi9TcGlyaXR1YWxpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpcy9hYmlsaXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiSW5kaWdlbmVpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGFuZ3VhZ2VzIFNwb2tlblwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkV0aG5pY2l0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hdGlvbi9SZWdpb25hbCBJZGVudGl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICBdXG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbm9kZXMsIGNvbG9ycyB9IGZyb20gJy4vbm9kZXMnO1xuXG5leHBvcnQgY2xhc3MgU3VuYnVyc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBFeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgc3ZnV2lkdGg6IDgwMCxcbiAgICAgIHN2Z0hlaWdodDogNjAwLFxuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBkZWZhdWx0VGV4dEZpbGw6ICcjMkMzRTUwJyxcbiAgICAgIG5vZGVUZXh0RmlsbDogJ3doaXRlJyxcbiAgICAgIGRlZmF1bHRGb250OiAnSGVsdmV0aWNhJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSksXG4gICAgICBkYXRhOiBub2RlcyxcbiAgICAgIG5vZGVzOiBudWxsLFxuICAgICAgY29ubmVjdG9yTGV2ZWxzOiAyLFxuICAgICAgZGVwdGg6IDE4MCxcbiAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgdGl0bGVUZXh0U2l6ZTogJzIuNXZ3JyxcbiAgICAgIGNlbnRlclRleHRTaXplOiAnMS41dncnLFxuICAgICAgc2xpY2VUZXh0U2l6ZTogJzEuNXZ3JyxcbiAgICAgIHNwbGl0U2l6ZTogJzAuNWVtJyxcbiAgICAgICBjb2xvcjoge1xuICAgICAgICBNYWxlOiAnI2ZjOGQ1OScsXG4gICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICBJbnRlcm5hdGlvbmFsOiAnIzk5OGVjMycsXG4gICAgICAgIERvbWVzdGljOiAnI2YxYTM0MCcsXG4gICAgICAgICc8PTE3JzogJyNmN2ZjZjUnLFxuICAgICAgICAnMTgtMjAnOiAnI2U1ZjVlMCcsXG4gICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgJzI2LTMwJzogJyNhMWQ5OWInLFxuICAgICAgICAnMzEtMzUnOiAnIzc0YzQ3NicsXG4gICAgICAgICczNi00NSc6ICcjNDFhYjVkJyxcbiAgICAgICAgJzQ2LTU1JzogJyMyMzhiNDUnLFxuICAgICAgICAnNTUrJzogJyMwMDZkMmMnLFxuICAgICAgICAwOiAnIzk4OTg5OCcsXG4gICAgICB9LFxuICAgICAgYWNhZGVtaWNWYWx1ZXM6IHtcbiAgICAgICAgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICBGYWN1bHR5OiBbJ1RvdGFsJ10sXG4gICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ10sXG4gICAgICB9LFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzOiB7XG4gICAgICAgIEFnZTogW10sXG4gICAgICAgIFNleDogW10sXG4gICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbXSxcbiAgICAgIH0sXG4gICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIHRvb2x0aXBEaXY6IG51bGwsXG4gICAgICBudW1FeHBhbmRlZDogMCxcbiAgICAgIHVuY2xpY2tlZFdpZHRoOiAnMnB4JyxcbiAgICAgIGNsaWNrZWRXaWR0aDogJzEwcHgnLFxuICAgICAgZm9jdXNzZWQ6IG51bGwsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDogJ0Vucm9sbGVkIFN0dWRlbnRzJyxcbiAgICAgIGNlbnRlclg6IDAsXG4gICAgICBjZW50ZXJZOiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gRHluYW1pY2FsbHkgc2V0IGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgQ2hhcnQgY2xhc3NcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gICAgXG4gICAgLy9EZWZpbmUgdGl0bGVcbiAgICBkMy5zZWxlY3QoJyNuYXYtdGl0bGUtdGV4dCcpXG4gICAgXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCBhdHRycy50aXRsZVRleHRTaXplKVxuICAgIFx0XHRcdC50ZXh0KCdDYXJsZXRvbiBVbml2ZXJzaXR5IFN0dWRlbnRzIENvbGxlY3RlZCBcXCYgTWlzc2luZyBEZW1vZ3JhcGhpY3MgRGF0YScpO1xuICAgIFxuICBcblx0XHR0aGlzLnJlbmRlckxlZ2VuZCgpO1xuICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKClcbiAgICAvL3RoaXMuaW5pdGlhbGl6ZUVudGVyRXhpdFVwZGF0ZVBhdHRlcm4oKTtcbiAgfVxuICBcbiAgICAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgIHJlbmRlckxlZ2VuZCgpe1xuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBjb25zdCBsZWdlbmQgPSBkMy5zZWxlY3QoJyNub2RlLWxlZ2VuZCcpO1xuICAgIGNvbnN0IHdpZHRoID0gMTIsIGhlaWdodCA9IDEyO1xuICAgIGNvbnN0IHJlY3RCdWlsZGVyID0gKHgsIHksIGNvbG9yKSA9PiB7XG4gICAgXHQgIGxlZ2VuZCBcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcikpXG4gICAgICBcdFx0LnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoeCwgeSwgdGV4dCwgc2l6ZSkgPT4ge1xuICAgICAgICAgIGxlZ2VuZFxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgICAudGV4dCh0ZXh0KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBzaXplKVxuICAgICAgXHRcdFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHRleHRCdWlsZGVyKDYwLCAxMCwgJ0xFR0VORCcsICcyMHB4Jyk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDM0LCBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKTtcbiAgICByZWN0QnVpbGRlcigyMCwgNjQsIGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsKTtcbiAgICByZWN0QnVpbGRlcigyMCwgOTQsIGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwpO1xuICAgIHRleHRCdWlsZGVyKDQwLCA0MCwgJ1VuY29sbGVjdGVkIEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuICAgIHRleHRCdWlsZGVyKDQwLCA3MCwgJ0RpdmVyc2l0eSBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiBcdFx0dGV4dEJ1aWxkZXIoNDAsIDEwMCwgJ0FjYWRlbWljIEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuICB9XG4gIFxuICByZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKXtcbiAgICBcdGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgXHQgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QoJyNzZWxlY3RlZC1hdHRyaWJ1dGVzJyk7XG4gICAgXHQgc2VsLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIFxuICBcdFx0IGNvbnN0IHRleHRCdWlsZGVyID0gKHgsIHksIHRleHQsIHNpemUpID0+IHtcbiAgICAgICAgICBzZWxcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc2l6ZSlcbiAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIFx0fVxuICAgICAgIFxuICAgICAgbGV0IHkgPSAxMDtcbiAgICBcdGxldCB4ID0gNTA7XG4gICAgICB0ZXh0QnVpbGRlcih4LTQwLCB5LCAnU0VMRUNURUQgQ0FURUdPUklFUycsICcxNXB4Jyk7XG4gICAgXHR5Kz0zMDtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcyl7XG4gICAgICBcdGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPiAxIHx8IChhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPT09IDEgJiYgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl1bMF0gIT09ICdUb3RhbCcpKXtcbiAgICAgICAgXHR0ZXh0QnVpbGRlcih4LCB5LCAnLSAnICsgYXR0ciwgJzE1cHgnKTtcbiAgICAgICAgICB5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgIFx0aWYgKGF0dHJzLmRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPiAwKXtcbiAgICAgICAgIHRleHRCdWlsZGVyKHgsIHksICctICcgKyBhdHRyLCAnMTVweCcpO1xuICAgICAgICAgIHkrPTMwO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpe1xuICAgIFx0Y29uc3QgbmMgPSB0aGlzO1xuICAgIFx0Y29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgXG4gICAgXHRjb25zdCB3aWR0aCA9IGF0dHJzLnN2Z1dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gYXR0cnMuc3ZnSGVpZ2h0ICxcbiAgICAgICAgICAgIG1heFJhZGl1cyA9IChNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIpIC0gNTtcblxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLnJhbmdlKFswLCAyICogTWF0aC5QSV0pXG4gICAgICAgICAgICAuY2xhbXAodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5yYW5nZShbbWF4UmFkaXVzKi4xLCBtYXhSYWRpdXNdKTtcblxuICAgICAgICBjb25zdCBwYXJ0aXRpb24gPSBkMy5wYXJ0aXRpb24oKTtcblxuICAgICAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAgICAgLnN0YXJ0QW5nbGUoZCA9PiB4KGQueDApKVxuICAgICAgICAgICAgLmVuZEFuZ2xlKGQgPT4geChkLngxKSlcbiAgICAgICAgICAgIC5pbm5lclJhZGl1cyhkID0+IE1hdGgubWF4KDAsIHkoZC55MCkpKVxuICAgICAgICAgICAgLm91dGVyUmFkaXVzKGQgPT4gTWF0aC5tYXgoMCwgeShkLnkxKSkpO1xuXG4gICAgICAgIGNvbnN0IG1pZGRsZUFyY0xpbmUgPSBkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbGZQaSA9IE1hdGguUEkvMjtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlcyA9IFt4KGQueDApIC0gaGFsZlBpLCB4KGQueDEpIC0gaGFsZlBpXTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBNYXRoLm1heCgwLCAoeShkLnkwKSArIHkoZC55MSkpIC8gMik7XG5cdFx0XHRcdFx0XG4gICAgICAgICAgICBjb25zdCBtaWRkbGVBbmdsZSA9IChhbmdsZXNbMV0gKyBhbmdsZXNbMF0pIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGludmVydERpcmVjdGlvbiA9IG1pZGRsZUFuZ2xlID4gMCAmJiBtaWRkbGVBbmdsZSA8IE1hdGguUEk7IC8vIE9uIGxvd2VyIHF1YWRyYW50cyB3cml0ZSB0ZXh0IGNjd1xuICAgICAgICAgICAgaWYgKGludmVydERpcmVjdGlvbikgeyBhbmdsZXMucmV2ZXJzZSgpOyB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkMy5wYXRoKCk7XG4gICAgICAgICAgICBwYXRoLmFyYygwLCAwLCByLCBhbmdsZXNbMF0sIGFuZ2xlc1sxXSwgaW52ZXJ0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnRvU3RyaW5nKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGV4dEZpdHMgPSBkID0+IHtcbiAgICAgICAgICBcdGlmIChkLnNwbGl0ICYmIChkLmNoaWxkcmVuIT1udWxsIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKSlcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IENIQVJfU1BBQ0UgPSA4O1xuXG4gICAgICAgICAgICBjb25zdCBkZWx0YUFuZ2xlID0geChkLngxKSAtIHgoZC54MCk7XG4gICAgICAgICAgICBjb25zdCByID0gTWF0aC5tYXgoMCwgKHkoZC55MCkgKyB5KGQueTEpKSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgcGVyaW1ldGVyID0gciAqIGRlbHRhQW5nbGU7XG5cbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5sZW5ndGggKiBDSEFSX1NQQUNFIDwgcGVyaW1ldGVyO1xuICAgICAgICB9O1xuXG4gICAgXHRcdGQzLnNlbGVjdChcIiNub2RlLWRpdlwiKS5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcilcblxuICAgIFxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNjaGFydC1jb250YWluZXInKVxuXHRcdFx0XHRcdFx0LnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBgJHsoLXdpZHRoKzI3NSkgLyAyfSAkeygtaGVpZ2h0LTEyMCkgLyAyfSAke3dpZHRofSAke2hlaWdodH1gKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICgpID0+IGZvY3VzT24oKSk7IC8vIFJlc2V0IHpvb20gb24gY2FudmFzIGNsaWNrXG5cblxuICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1ncm91cCcpLnN0eWxlLmxlZnQgPSAod2luZG93LmlubmVyV2lkdGgtMjc1KS8yICArIFwicHhcIlxuICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1ncm91cCcpLnN0eWxlLnRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQrMzApLzIgKyBcInB4XCJcbiAgICBcbiAgICBcblx0XHRcdCBcdGxldCB0ZXh0Q2lyY2xlLCBmbywgaW5uZXJSYWRpdXM7XG5cbiAgICBcdFx0bGV0IHJvb3QgPSBub2Rlc1xuICAgICAgICByb290ID0gZDMuaGllcmFyY2h5KHJvb3QpO1xuICAgICAgICByb290LnN1bShkID0+IGQuc2l6ZSk7XG5cbiAgICBcdFx0cm9vdC5kZXNjZW5kYW50cygpLm1hcChkID0+e1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBkLmRhdGEubmFtZS5pbmNsdWRlcyhcIiBcIikgfHwgZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIFx0XHRcbiAgICBcdFx0Y29uc3Qgc29ydGVkTm9kZXMgPSBwYXJ0aXRpb24ocm9vdCkuZGVzY2VuZGFudHMoKS5zb3J0KChkMSwgZDIpID0+IHtcbiAgICAgICAgXHQgaWYgKGQxLmNoaWxkcmVuICYmICFkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAxOyBcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgaWYgKCFkMS5jaGlsZHJlbiAmJiBkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAtMTsgXG4gICAgICAgICAgIH1cbiAgICAgICAgICBcdHJldHVybiAwO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNsaWNlID0gc3ZnLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgICAuZGF0YShzb3J0ZWROb2Rlcyk7XG5cdFx0XHRcbiAgICAgICAgc2xpY2UuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0LyogR0VUL1NFVCBTTElDRVMgKi9cbiAgICAgICAgY29uc3QgbmV3U2xpY2UgPSBzbGljZS5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnc2xpY2UnKVxuICAgICAgICBcdFx0Lm9uKCdtb3VzZW92ZXInLCBkID0+IHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZS50ZXh0KGQuZGF0YS5kZXNjcmlwdGlvbikgXG5cbiAgICAgICAgICAgICAgIGxldCBoID0gdGV4dENpcmNsZS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgZm8uYXR0cigneScsIC1oKTtcbiAgICAgICAgICAgIH0pLm9uKCdtb3VzZW91dCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgdGV4dENpcmNsZS50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBkID0+IHtcbiAgICAgICAgICAgICAgXHRpZiAoWy4uLmQzLmV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0XS5pbmNsdWRlcygnc2VsZWN0LWFsbC1jaXJjbGVzJykpe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgXHRcdGNvbnNvbGUubG9nKFwiY2xjaWtlZCBhcmNcIik7XG4gICAgICAgICAgICAgIFx0aWYgKGQuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgICAgZm9jdXNPbihkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0KGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICBuZXdTbGljZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21haW4tYXJjJylcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsICBkID0+IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLmNvbG9yIHx8IGQucGFyZW50LmRhdGEuY29sb3IpKVxuICAgICBcdFx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgKGQpID0+IGQuZGF0YS5uYW1lID09ICcnID8gJzBweCcgOiBhdHRycy51bmNsaWNrZWRXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdkJywgYXJjKTtcblxuICAgIFx0XG4gICAgXHRcdG5ld1NsaWNlLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2hpZGRlbi1hcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsIChfLCBpKSA9PiBgaGlkZGVuQXJjJHtpfWApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCBtaWRkbGVBcmNMaW5lKTtcblx0XHRcdFx0XG4gXG4gICAgXHRcdC8qIEFQUEVORCBURVhUICovXG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXdTbGljZVxuICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdhcmMtdGV4dCcpXG4gICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5zbGljZVRleHRTaXplKVxuICAgICAgICAgIC5hdHRyKCdkaXNwbGF5JywgKGQpID0+IHtcbiAgICAgICAgICAgIGlmIChkLnBhcmVudCAmJiBkLnBhcmVudC5wYXJlbnQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuIHRleHRGaXRzKGQpID8gbnVsbCA6ICdub25lJ1xuICAgICAgICAgIH0pLmF0dHIoJ2R5JywgKGQpID0+IHtcbiAgICAgICAgICAgIGlmIChkLnNwbGl0KXtcbiAgICAgICAgICAgICByZXR1cm4gKGQuaW52ZXJ0ZWQgPyBcIi1cIiA6IFwiK1wiKSArIGF0dHJzLnNwbGl0U2l6ZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICByZXR1cm4gXCIwZW1cIlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRleHRcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0UGF0aCcpXG4gICAgICAgICAgLmF0dHIoJ3N0YXJ0T2Zmc2V0JywgJzUwJScpXG4gICAgICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAoXywgaSkgPT4gYCNoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGQuc3BsaXQgJiYgKGQuY2hpbGRyZW4hPW51bGwgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpKXtcbiAgICAgICAgICAgICAgaWYgKGQuZGF0YS5uYW1lLmluY2x1ZGVzKFwiL1wiKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLnNwbGl0KFwiL1wiKVtkLmludmVydGVkID8gMCA6IDFdXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIiBcIilbZC5pbnZlcnRlZCA/IDAgOiAxXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dDEgPSBuZXdTbGljZVxuICAgICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2FyYy10ZXh0MScpXG4gICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMuc2xpY2VUZXh0U2l6ZSlcbiAgICAgICAgICAgICAgLmF0dHIoJ2R5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChkLnNwbGl0KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChkLmludmVydGVkID8gXCIrXCIgOiBcIi1cIikgK2F0dHJzLnNwbGl0U2l6ZTtcbiAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMGVtXCJcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRleHQxXG4gICAgICAgICAgICAgIC5hcHBlbmQoJ3RleHRQYXRoJylcbiAgICAgICAgICAgICAgLmF0dHIoJ3N0YXJ0T2Zmc2V0JywgJzUwJScpXG4gICAgICAgICAgICAgIC5hdHRyKCd4bGluazpocmVmJywgKF8sIGkpID0+IGAjaGlkZGVuQXJjJHtpfWApXG4gICAgICAgICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQuc3BsaXQgJiYgKGQuY2hpbGRyZW4hPW51bGwgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpKXtcbiAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEubmFtZS5pbmNsdWRlcyhcIi9cIikpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUuc3BsaXQoXCIvXCIpW2QuaW52ZXJ0ZWQgPyAxIDogMF1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUuc3BsaXQoXCIgXCIpW2QuaW52ZXJ0ZWQgPyAxIDogMF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgICAgICAgfSk7XG5cdFx0XHRcdFxuXG5cblxuICAgIFxuICAgIFx0XHQvKiBIQU5ETEUgU0VMRUNUIEFMTCAqL1xuICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5vbmNsaWNrID0gc2VsZWN0QWxsO1xuICAgIFx0XHRmdW5jdGlvbiBzZWxlY3RBbGwoKSB7XG4gICAgICAgICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IGF0dHJzLmZvY3Vzc2VkLmNoaWxkcmVuLmV2ZXJ5KGQgPT4gZC5zZWxlY3RlZCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbClcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGF0dHJzLmZvY3Vzc2VkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgIGlmIChhbGxTZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgc2VsZWN0KGNoaWxkKTsgIFxuICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZC5zZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgICBzZWxlY3QoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICBcdFx0XG4gICAgXHRcdGZ1bmN0aW9uIHNlbGVjdChkKXtcbiAgICAgICAgICBcdFx0aWYgKGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgXHRcdFxuICAgICAgICAgIFx0XHRkLnNlbGVjdGVkID0gIWQuc2VsZWN0ZWRcbiAgICAgICAgICBcdFx0aWYgKGQuc2VsZWN0ZWQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3QoXCIjXCIgKyBkLnBhcmVudC5kYXRhLm5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyBcIi1jaXJjbGVcIikuYXR0cignZmlsbCcsIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5XaGl0ZSkpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICBcdGlmIChhdHRycy5mb2N1c3NlZCl7XG4gICAgICAgICAgICAgICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSBhdHRycy5mb2N1c3NlZC5jaGlsZHJlbi5ldmVyeShkID0+IGQuc2VsZWN0ZWQgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpXG4gICAgICAgICAgICAgICAgICAgaWYgKGFsbFNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgXHRzdmcuc2VsZWN0KCBcIiNcIiArIGQucGFyZW50LmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKS5hdHRyKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsdWUpKVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gZC5wYXJlbnQuY2hpbGRyZW4uZXZlcnkoZCA9PiBkLnNlbGVjdGVkIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKVxuICAgICAgICAgICAgICAgICAgIGlmIChhbGxTZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgICAgIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtYnV0dG9uJykuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgIFx0c3ZnLnNlbGVjdCggXCIjXCIgKyBkLnBhcmVudC5kYXRhLm5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyBcIi1jaXJjbGVcIikuYXR0cignZmlsbCcsIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CbHVlKSlcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXHRcdFxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZC5wYXJlbnQuZGF0YVxuICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdLmluZGV4T2YoZC5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXS5wdXNoKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0uaW5kZXhPZihkLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5sZW5ndGggPT0gMCkgey8vaWYgZW1wdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLnB1c2goJ1RvdGFsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV1bMF0gPT0gJ1RvdGFsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmICdUb3RhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucHVzaChkLmRhdGEubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuYWNhZGVtaWNWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbCAqPSBhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsID4gMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdXQVJOSU5HOiBBZGRpbmcgbW9yZSBhY2FkZW1pYyBhdHRyaWJ1dGVzIG1heSByZXN1bHQgaW4gbG93IHZpc2liaWxpdHkgaW4gdGhlIHZpc3VhbGl6YXRpb24uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXHQgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCdwYXRoLm1haW4tYXJjJykuc3R5bGUoJ29wYWNpdHknLChkKSA9PiBkLnNlbGVjdGVkID8gMC41IDogMS4wKTtcbiAgICAgICAgfVxuXG4gICAgXG4gICAgXHRcdCAgICBcdFx0LyogQVBQRU5EIFNFTEVDVCBBTEwgQ0lSQ0xFUyAqL1xuICAgIFx0XHQvL0hlbHBlciBtZXRob2RzXG4gICAgICAgIGNvbnN0IGdldENpcmNsZVggPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgICAgIE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIFx0XHRjb25zdCBnZXRDaXJjbGVZID0gKHJhZGlhbnMsIHJhZGl1cykgPT5cbiAgICAgIFx0XHRNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cztcbiAgICBcbiAgICBcdFx0Y29uc3QgYXR0cmlidXRlU2xpY2VzID0gbmV3U2xpY2UuZmlsdGVyKChkKSA9PiBkLnBhcmVudCAmJiBkLnBhcmVudC5wYXJlbnQgPT0gbnVsbCAmJiBkLmNoaWxkcmVuIT1udWxsKTtcbiAgICBcdFx0YXR0cmlidXRlU2xpY2VzXG4gICAgICAgICAgXHRcdFx0LmFwcGVuZCgnY2lyY2xlJylcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignY2xhc3MnLCAnc2VsZWN0LWFsbC1jaXJjbGVzJylcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignaWQnLCBkID0+IGQuZGF0YS5uYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgXCItY2lyY2xlXCIpXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ3InLCAnMTVweCcpXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ2N4JywgZCA9PiB7XG4gICAgICAgICAgXHRcdFx0XHRsZXQgcmFkaWFucyA9IHgoZC54MCkgKyAoeChkLngxKSAtIHgoZC54MCkpLzI7XG4gICAgICAgICAgXHRcdFx0XHRsZXQgY3ggPSAgZ2V0Q2lyY2xlWChyYWRpYW5zLCB5KGQueTEpKTtcbiAgICAgICAgICBcdFx0XHRcdHJldHVybiBjeDtcbiAgICAgICAgXHRcdFx0XHR9KVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdjeScsIGQgPT4ge1xuXG4gICAgICAgICAgXHRcdFx0XHRcdGxldCByYWRpYW5zID0geChkLngwKSArICh4KGQueDEpIC0geChkLngwKSkvMjtcbiAgICAgICAgICBcdFx0XHRcdFx0bGV0IGN5ID0gIC1nZXRDaXJjbGVZKHJhZGlhbnMsIHkoZC55MSkpO1xuICAgICAgICAgIFx0XHRcdFx0XHRyZXR1cm4gY3k7XG4gICAgICAgIFx0XHRcdFx0fSlcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignc3Ryb2tlJywgJ3doaXRlJylcbiAgICBcdFx0XHRcdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsMSlcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsIHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICBcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZCA9PiB7XG4gICAgICAgICAgXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNsY2lrZWQgc2VsZWN0IGFsbFwiKTtcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdGF0dHJzLmZvY3Vzc2VkID0gZDtcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdHNlbGVjdEFsbCgpO1xuICAgICAgICAgIFx0XHRcdFx0XHRcdFx0YXR0cnMuZm9jdXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5yZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgXG4gICAgXHRcbiAgICBcdFx0LyogQ1JFQVRFIENFTlRFUiBDSVJDTEUgKi9cbiAgICAgICBpbm5lclJhZGl1cyA9IHkoMC4zMzMzMzMzKSBcbiAgICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWdyb3VwLW5vZGVzJylcblxuICAgICAgICBjZW50ZXJHcm91cC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZS1ub2RlcycpXG4gICAgICAgICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSk7XG4gICAgICAgIFxuICAgIFx0XHRmbyA9IGNlbnRlckdyb3VwXG4gICAgICAgICAgICAuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgLWlubmVyUmFkaXVzKVxuICAgICAgICBcdFx0LmF0dHIoJ3dpZHRoJywgIGlubmVyUmFkaXVzKjIpXG4gIFx0XHRcdFx0XHQuYXR0cignaGVpZ2h0JywgIGlubmVyUmFkaXVzKjIpO1xuICAgIFxuICAgICAgICB0ZXh0Q2lyY2xlID0gZm9cbiAgICAgICAgXHRcdC5hcHBlbmQoJ3hodG1sOnAnKVxuICAgIFx0XHRcdFx0XHQuYXR0cignaWQnLCAnYy10ZXh0JylcbiAgICAgICAgICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQpXG4gICAgXHRcdFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMuY2VudGVyVGV4dFNpemUpO1xuICAgIFxuICAgICAgICBmby5hdHRyKCd5JywgLXRleHRDaXJjbGUubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gICAgXG4gICAgXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLm9uY2xpY2sgPSAoKSA9PiBmb2N1c09uKCk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZCk7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5jb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9jdXNPbihkID0geyB4MDogMCwgeDE6IDEsIHkwOiAwLCB5MTogMSB9KSB7XG4gICAgICAgICAgICAvLyBSZXNldCB0byB0b3AtbGV2ZWwgaWYgbm8gZGF0YSBwb2ludCBzcGVjaWZpZWRcblxuICAgICAgICAgIFx0aWYgKGQueDA9PTAgJiYgZC54MT09MSAmJiBkLnkwID09IDAgJiYgZC55MT09MSl7XG4gICAgICAgICAgICAgIGF0dHJzLmZvY3Vzc2VkID0gbnVsbDtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkKTtcbiAgICAgICBcdFx0XHRcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5jb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0LWFsbC1jaXJjbGVzJykpe1xuICAgICAgICAgICAgICAgXHRlbGVtLnN0eWxlLmRpc3BsYXk9ICdibG9jayc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF0dHJzLmZvY3Vzc2VkID0gZDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmNvbG9yID0nd2hpdGUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgICBcdGZvciAoY29uc3QgZWxlbSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QtYWxsLWNpcmNsZXMnKSl7XG4gICAgICAgICAgICAgICBcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gc3ZnLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAgICAgLnR3ZWVuKCdzY2FsZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeGQgPSBkMy5pbnRlcnBvbGF0ZSh4LmRvbWFpbigpLCBbZC54MCwgZC54MV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWQgPSBkMy5pbnRlcnBvbGF0ZSh5LmRvbWFpbigpLCBbZC55MCwgMV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9PiB7IHguZG9tYWluKHhkKHQpKTsgeS5kb21haW4oeWQodCkpOyB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgXHRpZiAoYXR0cnMuZm9jdXNzZWQpe1xuICAgICAgICAgICAgICBcdGxldCBjZW50ZXIgPSB0cmFuc2l0aW9uLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgXHRcdFx0XHRcdC5maWx0ZXIoKG4pID0+IG4uZGF0YS5uYW1lID09IGQuZGF0YS5uYW1lKVxuICAgICAgICAgICAgICAgIGNlbnRlci5zZWxlY3QoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpKVxuICAgICAgICAgICAgXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMHB4JylcbiAgICAgICAgICAgICAgXHRjZW50ZXIuc2VsZWN0KCcuYXJjLXRleHQnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICAgICAgICAgICAgXHRjZW50ZXIuc2VsZWN0KCcuYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgXHRcdC5hdHRyKCdmaWxsJywgIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5XaGl0ZSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgc2xpY2VzID0gdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ2cuc2xpY2UnKVxuICAgICAgICAgICAgICAgIHNsaWNlcy5zZWxlY3QoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgIG4gPT4gbmMucmdiYU9ialRvQ29sb3Iobi5kYXRhLmNvbG9yIHx8IG4ucGFyZW50LmRhdGEuY29sb3IpKVxuICAgICAgICAgICAgICBcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4gZC5kYXRhLm5hbWUgPT0gJycgPyAnMHB4JyA6IGF0dHJzLnVuY2xpY2tlZFdpZHRoKVxuICAgICAgICAgICAgICBcdHNsaWNlcy5zZWxlY3QoJy5hcmMtdGV4dCcpXG4gICAgICAgICAgICAgIFx0XHQuYXR0cignZmlsbCcsICBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmxhY2spKVxuICAgICAgICAgICAgICBcdHNsaWNlcy5zZWxlY3QoJy5hcmMtdGV4dDEnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsYWNrKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcdFxuICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBkID0+ICgpID0+IGFyYyhkKSk7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb24uc2VsZWN0QWxsKCdwYXRoLmhpZGRlbi1hcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBkID0+ICgpID0+IG1pZGRsZUFyY0xpbmUoZCkpO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uLnNlbGVjdEFsbCgnLmFyYy10ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkaXNwbGF5JywgZCA9PiAoKSA9PiB0ZXh0Rml0cyhkKSA/IG51bGwgOiAnbm9uZScpO1xuICAgICAgICAgXHRcdFxuICAgICAgICAgIFx0dHJhbnNpdGlvbi5zZWxlY3RBbGwoJy5hcmMtdGV4dDEnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2Rpc3BsYXknLCBkID0+ICgpID0+IHRleHRGaXRzKGQpID8gbnVsbCA6ICdub25lJyk7XG5cbiAgICAgICAgICAgIG1vdmVTdGFja1RvRnJvbnQoZCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVTdGFja1RvRnJvbnQoZWxEKSB7XG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbCgnLnNsaWNlJykuZmlsdGVyKGQgPT4gZCA9PT0gZWxEKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5wYXJlbnQpIHsgbW92ZVN0YWNrVG9Gcm9udChkLnBhcmVudCk7IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICBcbiAgICBcblxuXG4gICAgXG4gICAgXG4gICAgIFx0cmV0dXJuIHRoaXM7XG4gIH1cbiAgXG59IiwiaW1wb3J0IHsgaW5pdGlhbE5vZGVzLCBjb2xvcnMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIFJpbmdEaWFncmFtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9FeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgd2lkdGg6IDMwMDAsXG4gICAgICBoZWlnaHQ6IDMwMDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBleHRlbmRlZExpbmVMZW5ndGg6IDQwLFxuICAgICAgdGV4dERpc3RhbmNlOiAxNSxcbiAgICAgIG91dGVyVGV4dFNpemU6ICcyNXB4JyxcbiAgICAgIGF0dHJpYnV0ZUluZGV4OiBudWxsLFxuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBkaXNwbGF5Tm9kZXM6IG51bGwsXG4gICAgICB2YWx1ZXM6IG51bGwsXG4gICAgICBjaXJjbGVBcnJheTogW10sXG4gICAgICBsaW5lQXJyYXk6IFtdLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgYXJjczogbnVsbCxcbiAgICAgIHRleHRDaXJjbGVzQ2F0ZWdvcnk6IFtdLFxuICAgICAgdGV4dENpcmNsZXNDb3VudDogW10sXG4gICAgICB0ZXh0Q2lyY2xlc1BlcmNlbnQ6IFtdLFxuICAgICAgdGl0bGVUZXh0U2l6ZTogJzI1cHgnLFxuICAgICAgdGl0bGVUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGlzQ29tcGFyZU1vZGU6IGZhbHNlLFxuICAgICAgbGVnZW5kV2lkdGg6IDE1MCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSksXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDE6ICdDYXRlZ29yeScsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDI6ICcjIG9mIFN0dWRlbnRzJyxcbiAgICAgIHBsYWNlaG9sZGVySW5uZXJUZXh0MzogJyUgaW4gR3JvdXAnLFxuICAgICAgY2hhbmdlU2NhbGU6IGZhbHNlLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgXG4gIHJnYmFPYmpUb0NvbG9yKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgfSkge1xuICAgIHJldHVybiBgcmdiYSgke3JlZH0sJHtncmVlbn0sJHtibHVlfSwke2FscGhhfSlgO1xuICB9XG5cblxuICAvKiBSZXR1cm4gd2lkdGggYW5kIGhlaWdodCBvZiBzdmcgZWxlbWVudCAqL1xuICBjb21wdXRlU2NyZWVuRGltZW5zaW9ucygpe1xuICAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpOyBcbiAgXHQgY29uc3QgY29udGFpbmVyID0gYXR0cnMuY29udGFpbmVyXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gK2NvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSArY29udGFpbmVyLndpZHRoO1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDsgLy9taW51cyBiZWNhdXNlIG9mIGxlZ2VuZFxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodCAtIGF0dHJzLnRpdGxlVGV4dEhlaWdodDtcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICB9XG4gIFxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIGFyY3MsIHJldHVybiBhcmMgd2lkdGgsIGlubmVycmFkaXVzIGFuZCB0ZXh0IHNpemUqL1xuICBjb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHgsIHksIG51bUFyY3MpIHsgXG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB0ZXh0SGVpZ2h0T2Zmc2V0ID0gNTA7XG5cbiAgICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSAtIHRleHRIZWlnaHRPZmZzZXQpO1xuICAgIGxldCBhcmNXaWR0aCA9IG1pbiAvICgyICogbnVtQXJjcyArIDcpOyAvL21pbiA9IDIqbnVtQXJjcyphcmNXaWR0aCArIDIqaW5uZXJSYWRpdXMsIGlubmVyUmFkaXVzID0gMyphcmNXaWR0aFxuICAgIGxldCBpbm5lclJhZGl1cyA9IDMgKiBhcmNXaWR0aDtcblxuICAgIGxldCBtdWx0aXBsaWVyID0gMS41O1xuICAgIGxldCBuID0gMTM7IC8vJ2ludGVybmF0aW9uYWwnIHdpdGggMTMgbGV0dGVycyBpcyBsb25nZXN0IHdvcmQgaW4gZGl2ZXJzaXR5IGF0dHJpYnV0ZXNcbiAgICBsZXQgaW5uZXJUZXh0U2l6ZSA9IChtdWx0aXBsaWVyICogKDIgKiBpbm5lclJhZGl1cykpIC8gbiArICdweCc7XG4gICAgcmV0dXJuIFthcmNXaWR0aCwgaW5uZXJSYWRpdXMsIGlubmVyVGV4dFNpemVdO1xuICB9XG5cbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBzcXVhcmVzLCByZXR1cm4gcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemUgKi9cbiAgY29tcHV0ZUNlbGxEaW1lbnNpb25zKHgsIHksIG4pIHtcbiAgICAvLyBDb21wdXRlIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zLCBhbmQgY2VsbCBzaXplXG4gICAgbGV0IHJhdGlvID0geCAvIHk7XG4gICAgbGV0IG5jb2xzX2Zsb2F0ID0gTWF0aC5zcXJ0KG4gKiByYXRpbyk7XG4gICAgbGV0IG5yb3dzX2Zsb2F0ID0gbiAvIG5jb2xzX2Zsb2F0O1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSBoZWlnaHRcbiAgICBsZXQgbnJvd3MxID0gTWF0aC5jZWlsKG5yb3dzX2Zsb2F0KTtcbiAgICBsZXQgbmNvbHMxID0gTWF0aC5jZWlsKG4gLyBucm93czEpO1xuICAgIHdoaWxlIChucm93czEgKiByYXRpbyA8IG5jb2xzMSkge1xuICAgICAgbnJvd3MxKys7XG4gICAgICBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUxID0geSAvIG5yb3dzMTtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgd2lkdGhcbiAgICBsZXQgbmNvbHMyID0gTWF0aC5jZWlsKG5jb2xzX2Zsb2F0KTtcbiAgICBsZXQgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIHdoaWxlIChuY29sczIgPCBucm93czIgKiByYXRpbykge1xuICAgICAgbmNvbHMyKys7XG4gICAgICBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUyID0geCAvIG5jb2xzMjtcblxuICAgIC8vIEZpbmQgdGhlIGJlc3QgdmFsdWVzXG4gICAgbGV0IG5yb3dzLCBuY29scywgY2VsbF9zaXplO1xuICAgIGlmIChjZWxsX3NpemUxIDwgY2VsbF9zaXplMikge1xuICAgICAgbnJvd3MgPSBucm93czI7XG4gICAgICBuY29scyA9IG5jb2xzMjtcbiAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5yb3dzID0gbnJvd3MxO1xuICAgICAgbmNvbHMgPSBuY29sczE7XG4gICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUxO1xuICAgIH1cblxuICAgIHJldHVybiBbY2VsbF9zaXplLCBucm93cywgbmNvbHNdO1xuICB9XG5cbiAgLyogRmV0Y2hpbmcgZGF0YSBhbmQgc2V0dGluZyB1cCBzdmcgY29udGFpbmVyICovXG4gIGFzeW5jIHNldHVwKHVybCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvL2xvYWQgZGF0YSBzeW5jaHJvbm91c2x5XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGQzLmNzdih1cmwpO1xuXG4gICAgYXR0cnMuYXR0cmlidXRlSW5kZXggPSBkYXRhLmNvbHVtbnM7XG5cbiAgICAvL2NvbnZlcnQgZGF0YSB0byBvYmplY3QgZm9ybWF0XG4gICAgYXR0cnMuZGF0YSA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG9iaiwgaSkge1xuICAgICAgbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcblxuICAgICAgdmFsdWVzLnBvcCgpO1xuXG4gICAgICBtYXBbJycuY29uY2F0KHZhbHVlcyldID0gb2JqLkNvdW50O1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG5cbiAgICAvLyBzZXQgdXAgY29udGFpbmVyXG4gICAgYXR0cnMuY29udGFpbmVyID0gZDMuc2VsZWN0KGF0dHJzLmNvbnRhaW5lcilcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdFxuICAgIC8vIHNldHRpbmcgdXAgY29tcGFyZSBidXR0b25cbiAgICBjb25zdCB0b2dnbGVDb21wYXJlID0gKCkgPT4ge1xuICAgICAgYXR0cnMuaXNDb21wYXJlTW9kZSA9ICFhdHRycy5pc0NvbXBhcmVNb2RlO1xuICAgICAgc2IudXBkYXRlKCk7XG4gICAgfTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5vbmNsaWNrID0gdG9nZ2xlQ29tcGFyZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcblxuICByZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyl7XG4gIFx0XHRsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBcdGxldCBzYiA9IHRoaXM7XG5cbiAgICBcdC8qIFByZXBhcmluZyBkYXRhICovXG4gICAgXHRhdHRycy5pc0NvbXBhcmVNb2RlID0gZmFsc2U7XG4gICAgXHRjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB0aGlzLmNvbXB1dGVTY3JlZW5EaW1lbnNpb25zKCk7XG4gICAgXHRjb25zdCBbY2VsbFNpemUsIHJvd3MsIGNvbHNdID0gdGhpcy5jb21wdXRlQ2VsbERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCwgMSk7XG4gICAgXHRhdHRycy5wcmV2aW91c0NlbGxTaXplID0gY2VsbFNpemU7XG4gICAgXG4gICBcdCBcdC8vIFNvcnRpbmcgb3JkZXJlZCBhdHRyaWJ1dGVzXG4gICAgICBjb25zdCBzb3J0VmFsdWVzID0gKHZhbHVlcykgPT4ge1xuICAgICAgXHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goZHYgPT4ge1xuICAgICAgICAgIGlmIChpbml0aWFsTm9kZXNbZHZdLm9yZGVyZWQpe1xuICAgICAgICAgICAgdmFsdWVzW2R2XS5zb3J0KChlMSwgZTIpID0+IChcbiAgICAgICAgICAgICAgaW5pdGlhbE5vZGVzW2R2XVsnY29sbGVjdGVkVmFsdWVzJ10uaW5kZXhPZihlMSkgLSBcbiAgICAgICAgICAgICAgaW5pdGlhbE5vZGVzW2R2XVsnY29sbGVjdGVkVmFsdWVzJ10uaW5kZXhPZihlMilcbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuICAgICAgXHR9KTtcbiAgICAgIH1cbiAgICAgIHNvcnRWYWx1ZXMoYWNhZGVtaWNWYWx1ZXMpO1xuICAgIFx0c29ydFZhbHVlcyhkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgXG4gICAgXG4gICAgICAvLyBQcmVwYXJpbmcgc2xpY2VzXG4gICAgIGNvbnN0IGNhcnRlc2lhbiA9ICguLi5hKSA9PiBhLnJlZHVjZSgoYSwgYikgPT5hLmZsYXRNYXAoKGQpID0+IGIubWFwKChlKSA9PiBbZCwgZV0uZmxhdCgpKSkpO1xuICAgICAgbGV0IHNsaWNlcyA9IGNhcnRlc2lhbihcbiAgICAgICAgYWNhZGVtaWNWYWx1ZXNbJ0FjYWRlbWljIFllYXInXSxcbiAgICAgICAgYWNhZGVtaWNWYWx1ZXMuRGVncmVlLFxuICAgICAgICBhY2FkZW1pY1ZhbHVlcy5GYWN1bHR5LFxuICAgICAgICBhY2FkZW1pY1ZhbHVlc1snU3R1ZHkgU3RhdHVzJ11cbiAgICAgICk7XG4gICAgICBcbiAgICAgICBjb25zdCBtYWtlUXVlcnkgPSAoc2xpY2UsIGRpdmVyc2l0eUF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgbGV0IHF1ZXJ5ID0gWy4uLnNsaWNlXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGl2ZXJzaXR5VmFsdWVzKVxuICAgICAgICAgICAgcXVlcnkucHVzaChwcm9wICE9PSBkaXZlcnNpdHlBdHRyID8gJ1RvdGFsJyA6IHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH07XG4gICAgICBcbiAgICAgICBhdHRycy5waWVzID0gW107XG4gICAgXG4gICAgXHRcdGNvbnN0IG1ha2VMYWJlbCA9ICh3b3JkcykgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKCh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgXHQgYXR0cnMuc2xpY2VzID0gc2xpY2VzLm1hcChtYWtlTGFiZWwpO1xuICAgIFx0IGF0dHJzLnJpbmdzID0gZGl2ZXJzaXR5VmFsdWVzO1xuICAgIFx0IGF0dHJzLnRvdGFsU2xpY2VzID0gc2xpY2VzLmxlbmd0aDtcbiAgICBcdCBhdHRycy50b3RhbFJpbmdzID0gT2JqZWN0LnZhbHVlcyhkaXZlcnNpdHlWYWx1ZXMpLmZpbHRlcihhcnIgPT4gYXJyLmxlbmd0aCA+IDApLmxlbmd0aDtcblx0XHRcdFx0XG4gICAgICAgIGxldCByaW5nQ291bnQgPSAwO1xuICAgICAgICBPYmplY3Qua2V5cyhkaXZlcnNpdHlWYWx1ZXMpLmZvckVhY2goKGR2KSA9PiB7XG4gICAgICAgICAgXHRzbGljZXMuZm9yRWFjaCgoc2xpY2UsIHNsaWNlQ291bnQpID0+IHtcbiAgICAgICAgICBcdFx0bGV0IHZhbHVlcyA9IFsuLi5kaXZlcnNpdHlWYWx1ZXNbZHZdXTtcbiAgICAgICAgICAgICBcdHZhbHVlcyA9IHZhbHVlcy5tYXAodiA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cFwiIDogZHYsXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogdixcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBtYWtlUXVlcnkoc2xpY2UsIGR2LCB2KSxcbiAgICAgICAgICAgICAgICAgICAgXCJzbGljZU51bWJlclwiOiBzbGljZUNvdW50LFxuICAgICAgICAgICAgICAgICAgICBcInJpbmdOdW1iZXJcIjogcmluZ0NvdW50XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICBcdGF0dHJzLnBpZXMucHVzaCh2YWx1ZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICBpZiAoZGl2ZXJzaXR5VmFsdWVzW2R2XS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgcmluZ0NvdW50Kys7XG4gICAgICAgICAgIH1cbiAgICAgICB9KTtcbiAgXG4gICAgXHQvLyBSZW5kZXIgdGl0bGVcbiAgICBcdGNvbnN0IHRpdGxlQnVpbGRlciA9IChhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGNvbnN0IGdldEF0dHJBc1RpdGxlID0gKGF0dHIpID0+IHtcbiAgICAgICAgICAgaWYgKGF0dHIgPT09ICdBY2FkZW1pYyBZZWFyJyl7XG4gICAgICAgICAgICAgIHJldHVybiAnIDIwMTMtMjAyMSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdEZWdyZWUnKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyBhbGwgZGVncmVlcyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdGYWN1bHR5Jyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgYWxsIGZhY3VsdGllcyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdTdHVkeSBTdGF0dXMnKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyBhbGwgc3R1ZHkgc3RhdHVzZXMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnQWdlJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgYWxsIGFnZXMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnU2V4Jyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgYWxsIHNleGVzJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0NpdGl6ZW5zaGlwIFN0YXR1cycpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnIGFsbCBjaXRpemVuc2hpcCBzdGF0dXNlcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGFjYWRlbWljVmFsdWVzKXtcbiAgICAgICAgICBpZiAoYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAxICYmIGFjYWRlbWljVmFsdWVzW2F0dHJdWzBdID09PSAnVG90YWwnKXtcbiAgICAgICAgICAgIGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICAgIGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKSByZXR1cm4gJyc7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxKSByZXR1cm4gJ1N0dWRlbnRzIGFjcm9zcyAnICsgbGlzdC5wb3AoKSArICcuJzsgXG4gICAgICAgIHJldHVybiAnU3R1ZGVudHMgYWNyb3NzICcgKyBsaXN0LnNsaWNlKDAsIC0xKS5qb2luKCkgKyAnIGFuZCAnICsgbGlzdC5wb3AoKSArICcuJztcbiAgICBcdH07XG4gICAgXG4gICAgXHRkMy5zZWxlY3QoJyN2aXotdGl0bGUtdGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMudGl0bGVUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQodGl0bGVCdWlsZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpKTtcbiAgICBcdHRoaXMudXBkYXRlKCk7XG4gIH1cbiAgXG4gIHVwZGF0ZSgpe1xuICAgIFx0Y29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblx0XHRcdGNvbnN0IHNiID0gdGhpcztcbiAgICBcbiAgICBcdC8vIHJlcHVycG9zaW5nIGJhY2sgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgIFx0aWYgKGF0dHJzLmhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBiYWNrID0gKCkgPT4ge2F0dHJzLnBpZXMgPSBhdHRycy5oaXN0b3J5LnBvcCgpOyBzYi51cGRhdGUoKX07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBiYWNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGF0dHJzLmRpc3BsYXlOb2RlcztcbiAgICAgIH1cbiAgICBcbiAgICBcdGNvbnN0IHRvdGFsU2xpY2VzID0gYXR0cnMudG90YWxTbGljZXM7XG4gICAgXHRjb25zdCB0b3RhbFJpbmdzID0gYXR0cnMudG90YWxSaW5ncztcbiAgICBcdGNvbnN0IGlzQ29tcGFyZU1vZGUgPSBhdHRycy5pc0NvbXBhcmVNb2RlO1xuXHRcdFx0XG4gICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB0aGlzLmNvbXB1dGVTY3JlZW5EaW1lbnNpb25zKCk7XG4gICAgXHRjb25zdCBbY2VsbFNpemUsIHJvd3MsIGNvbHNdID0gdGhpcy5jb21wdXRlQ2VsbERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCwgKGlzQ29tcGFyZU1vZGUpID8gdG90YWxTbGljZXMgOiAxKTtcbiAgICBcdGNvbnN0IFthcmNXaWR0aCwgaW5uZXJSYWRpdXMsIGlubmVyVGV4dFNpemVdID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHdpZHRoLCBoZWlnaHQsIHRvdGFsUmluZ3MpO1xuICAgIFx0XG4gICAgXHRjb25zdCB3aGl0ZXNwYWNlV2lkdGggPSB3aWR0aCAtIGNvbHMgKiBjZWxsU2l6ZTtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2VIZWlnaHQgPSBoZWlnaHQgLSByb3dzICogY2VsbFNpemU7XG4gICAgXG4gICAgXHRjb25zdCBwaWUgPSBkMy5waWUoKS52YWx1ZShkID0+IGF0dHJzLmRhdGFbZC5xdWVyeV0pLnNvcnQobnVsbCk7XG4gICAgXG4gICAgICBjb25zdCBnZW5lcmF0ZVBpZSA9IChkLCB0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0b3RhbFNsaWNlc0xvY2FsID0gaXNDb21wYXJlTW9kZSA/IDEgOiB0b3RhbFNsaWNlcztcbiAgICAgICAgbGV0IHNsaWNlTnVtYmVyID0gaXNDb21wYXJlTW9kZT8gMCA6IGRbMF0uc2xpY2VOdW1iZXI7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcGllXG4gICAgICAgICAgLnN0YXJ0QW5nbGUoc2xpY2VOdW1iZXIgKiAyICogTWF0aC5QSSAvIHRvdGFsU2xpY2VzTG9jYWwpXG4gICAgICAgICAgLmVuZEFuZ2xlKChzbGljZU51bWJlciArIDEpICogMiAqIE1hdGguUEkgLyB0b3RhbFNsaWNlc0xvY2FsKShkKTtcbiAgICAgIH1cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0QXJjKGQpe1xuICAgICAgXHRyZXR1cm4gZDMuYXJjKClcbiAgICAgICAgICAuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIGQuZGF0YS5yaW5nTnVtYmVyKVxuICAgICAgICAgIC5vdXRlclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogKGQuZGF0YS5yaW5nTnVtYmVyICsgMSkpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQXJjKGQpe1xuICAgICAgXHRyZXR1cm4gZ2V0QXJjKGQpKGQpO1xuICAgICAgfVxuICAgIFxuXG4gICAgICBmdW5jdGlvbiBhcmNUd2VlbihhKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aGlzLl9jdXJyZW50IHx8IGE7XG4gICAgICAgIGxldCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgYSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDApO1xuXHRcdFx0XHRsZXQgYXJjVCA9IGdldEFyYyhhKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICByZXR1cm4gYXJjVChpKHQpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIFx0Y29uc3QgZ2V0VHJhbnNmb3JtYXRpb24gPSAoc2xpY2VOdW1iZXIpID0+IHtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGgubWluKHBhcnNlSW50KHNsaWNlTnVtYmVyIC9jb2xzKSwgcm93cy0xKTsvLyBBY2NvdW50aW5nIGZvciBjb25qb2luZWQgY2FzZVxuICAgICAgICBsZXQgY29sID0gc2xpY2VOdW1iZXIlY29scztcblxuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9XG4gICAgICAgICAgY2VsbFNpemUgLyAyICtcbiAgICAgICAgICBjb2wgKiAgY2VsbFNpemUgK1xuICAgICAgICAgICgoY29sICsgMSkgKiB3aGl0ZXNwYWNlV2lkdGgpIC8gKGNvbHMgKyAxKTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVkgPVxuICAgICAgICAgIGF0dHJzLnRpdGxlVGV4dEhlaWdodCArXG4gICAgICAgICAgICBjZWxsU2l6ZSAvIDIgK1xuICAgICAgICAgICAgcm93ICogY2VsbFNpemUgK1xuICAgICAgICAgICAgKChyb3cgKyAxKSAqIHdoaXRlc3BhY2VIZWlnaHQpIC8gKHJvd3MgKyAxKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzY2FsZSA9IE1hdGgubWluKDEsIGNlbGxTaXplL2F0dHJzLnByZXZpb3VzQ2VsbFNpemUpO1xuXG5cdFx0XHRcdHJldHVybiBbdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGVdO1xuICAgICAgfVxuICAgICAgXG4gICAgXHQvLyBNYWtlIHBpZSBncm91cHNcbiAgICBcdGxldCBwaWVHcm91cHMgPSBhdHRycy5jb250YWluZXJcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHQuc2VsZWN0QWxsKCdnLnBpZScpXG4gICAgICBcdFx0XHRcdFx0XHRcdFx0LmRhdGEoYXR0cnMucGllcylcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHQuam9pbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyID0+IGVudGVyLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBcdC5hdHRyKFwiY2xhc3NcIiwgXCJwaWVcIilcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdGNvbnN0IFt0eCwgdHksIHNdID0gZ2V0VHJhbnNmb3JtYXRpb24oZFswXS5zbGljZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdHJldHVybiBgdHJhbnNsYXRlKCR7dHh9LCR7dHl9KSBzY2FsZSgke3N9KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgPT4gdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBcdC50cmFuc2l0aW9uKFwicGllVXBkYXRlVHJcIikuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRjb25zdCBbdHgsIHR5LCBzXSA9IGdldFRyYW5zZm9ybWF0aW9uKGRbMF0uc2xpY2VOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gYHRyYW5zbGF0ZSgke3R4fSwke3R5fSkgc2NhbGUoJHtzfSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCA9PiBleGl0LnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICBcbiAgICBcdGNvbnN0IGZpeENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBjYXRlZ29yeS5yZXBsYWNlKC9bKz08XS9nLCBcIi1cIik7XG4gICAgXHRcdGlmICghcmVzdWx0WzBdLm1hdGNoKC9bYS16QS1aXS8pKVxuICAgICAgICAgXHRyZXN1bHQ9IFwiX1wiK3Jlc3VsdDsgXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYXJjc1xuICAgICAgcGllR3JvdXBzLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgLmRhdGEoZ2VuZXJhdGVQaWUpXG4gICAgICAgIC5qb2luKFxuICAgICAgICAgIGVudGVyID0+IGVudGVyXG4gICAgICAgICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgXHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsIGQgPT4gZml4Q2F0ZWdvcnkoZC5kYXRhLmNhdGVnb3J5KSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICcycHgnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAxKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBkID0+IGF0dHJzLmNvbG9yW2QuZGF0YS5jYXRlZ29yeV0pXG4gICAgICAgICAgICAgICAgICAuYXR0cignZCcsIGdlbmVyYXRlQXJjKVxuICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oZCl7IHRoaXMuX2N1cnJlbnQgPSBkOyB9KVxuICAgICAgICBcdFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuXG4gICAgICAgICAgICAgICAgICAgIFx0Ly9oaWdobGlnaHQgYXJjXG4gICAgICAgICAgICAgICAgICBcdFx0ZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuODUnKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXHQvL2hpZ2hsaWdodCBsZWdlbmQgXG4gICAgICAgICAgICAgICAgICAgIFx0ZDMuc2VsZWN0KFwiW2lkPSdcIiArIGQuZGF0YS5jYXRlZ29yeSArIFwicmVjdCddXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXHRjb25zdCB1cGRhdGVDaXJjbGVUZXh0ID0gKGQsIHNsaWNlTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgXHQgXHRcdGxldCBjb3VudCA9IGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFx0bGV0IGNlbnRlckdyb3VwID0gXCIjY2VudGVyXCIrc2xpY2VOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHRpZiAoY291bnQ9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KGNlbnRlckdyb3VwK1wiPiAuY2F0ZWdvcnlcIikudGV4dCgnJykuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5udW1fc3R1ZGVudHNcIikudGV4dCgnTm8gU3R1ZGVudHMnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChjZW50ZXJHcm91cCtcIj4gLnBlcmNlbnRfaW5fZ3JvdXBcIikudGV4dCgnMCUnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNsaWNlQXJjTGVuZ3RoID0gKE1hdGguUEkqMikgLyAoYXR0cnMuaXNDb21wYXJlTW9kZSA/IDEgOiB0b3RhbFNsaWNlcyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSAoZC5lbmRBbmdsZS1kLnN0YXJ0QW5nbGUpL3NsaWNlQXJjTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KGNlbnRlckdyb3VwK1wiPiAuY2F0ZWdvcnlcIikudGV4dCgoZC5kYXRhLmdyb3VwID09PSAnQWdlJyA/ICdBZ2U6ICcgOiAnJykgKyBkLmRhdGEuY2F0ZWdvcnkpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KGNlbnRlckdyb3VwK1wiPiAubnVtX3N0dWRlbnRzXCIpLnRleHQoKGQudmFsdWUgPCA1KSA/ICc8NScgOiBkLnZhbHVlKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChjZW50ZXJHcm91cCtcIj4gLnBlcmNlbnRfaW5fZ3JvdXBcIikudGV4dChOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXHQvL3VwZGF0ZSBjaXJjbGUgdGV4dFxuICAgICAgICAgICAgICAgICAgICBcdGlmIChhdHRycy5pc0NvbXBhcmVNb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgICBcdGQzLnNlbGVjdEFsbChcInBhdGguXCIgKyBmaXhDYXRlZ29yeShkLmRhdGEuY2F0ZWdvcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZWFjaChkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHR1cGRhdGVDaXJjbGVUZXh0KGQsIGQuZGF0YS5zbGljZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDaXJjbGVUZXh0KGQsIGNpcmNsZUFycmF5Lmxlbmd0aC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcdH0pXG4gICAgICAgICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvL3VuaGlnaGxpZ2h0IGFyY1xuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpXG5cbiAgICAgICAgICAgICAgICAgICAgICAvL3VuaGlnaGxpZ2h0IGxlZ2VuZFxuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBkLmRhdGEuY2F0ZWdvcnkgKyBcInJlY3QnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vcmVzZXQgY2lyY2xlIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuY2VudGVyID4gLmNhdGVnb3J5XCIpLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKS5hdHRyKCdvcGFjaXR5JywgJzAuNScpO1xuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5jZW50ZXIgPiAubnVtX3N0dWRlbnRzXCIpLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQyKS5hdHRyKCdvcGFjaXR5JywgJzAuNScpO1xuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5jZW50ZXIgPiAucGVyY2VudF9pbl9ncm91cFwiKS50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MykuYXR0cignb3BhY2l0eScsICcwLjUnKTtcbiAgICAgICAgICAgICAgICAgIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodG90YWxSaW5ncyA8PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICBcdGFsZXJ0KFwiQ2Fubm90IGRpc3BsYXkgbW9yZSBkZXRhaWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXHRhdHRycy5oaXN0b3J5LnB1c2goYXR0cnMucGllcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcdGxldCBuZXdQaWVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhdHRycy5waWVzKSk7XG4gICAgICAgICAgICAgICAgICAgIFx0bmV3UGllcyA9IG5ld1BpZXMuZmlsdGVyKHAgPT4gcFswXS5ncm91cCAhPSBkLmRhdGEuZ3JvdXApO1xuXG4gICAgICAgICAgICAgICAgICAgIFx0bGV0IHJpbmdOdW1iZXIgPSBkLmRhdGEucmluZ051bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgXHRjb25zdCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoZC5kYXRhLmdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgXHRuZXdQaWVzLmZvckVhY2gocCA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgcC5mb3JFYWNoKHM9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdHMucXVlcnlbaW5kZXhdID0gZC5kYXRhLmNhdGVnb3J5OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0aWYgKHMucmluZ051bWJlciA+IHJpbmdOdW1iZXIpIHMucmluZ051bWJlci09MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcdGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgXHRhdHRycy5waWVzID0gbmV3UGllcztcbiAgICAgICAgICAgICAgICAgICAgXHRzYi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgdXBkYXRlID0+IHVwZGF0ZVxuICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignY2xhc3MnLCBkID0+IGZpeENhdGVnb3J5KGQuZGF0YS5jYXRlZ29yeSkpXG4gICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgZCA9PiBhdHRycy5jb2xvcltkLmRhdGEuY2F0ZWdvcnldKVxuICAgICAgICBcdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignZCcsIGdlbmVyYXRlQXJjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihcImFyY0ludFRyXCIpLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgYXJjVHdlZW4pLFxuICAgICAgICAgICAgICAgICAgZXhpdCA9PiBleGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgXHQvLyBNYWtlIGxpbmVzXG4gICAgXHRjb25zdCBnZXRDaXJjbGVYID0gKHJhZGlhbnMsIHJhZGl1cykgPT4gTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgICBjb25zdCBnZXRDaXJjbGVZID0gKHJhZGlhbnMsIHJhZGl1cykgPT4gTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXM7XG4gICAgXHRpZiAodG90YWxTbGljZXMgPiAxKXtcbiAgICAgICAgY29uc3QgZ2V0UmFkaWFucyA9IChzbGljZUNvdW50KSA9PiB7XG4gICAgICAgICAgbGV0IHJhZGlhbnMgPSAoMiAqIE1hdGguUEkgKiBzbGljZUNvdW50KSAvIHRvdGFsU2xpY2VzXG4gICAgICAgICAgaWYgKHRvdGFsU2xpY2VzICUgMiA9PSAxKSByYWRpYW5zICs9IE1hdGguUEk7XG4gICAgICAgICAgcmV0dXJuIHJhZGlhbnM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5lcyA9IGF0dHJzLmNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCdnLmxpbmVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyID0+IGVudGVyLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0aWFsU2l6ZSA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHggPSBpbml0aWFsU2l6ZSAvIDIgICsgd2hpdGVzcGFjZVdpZHRoIC8gMjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eSA9IGF0dHJzLnRpdGxlVGV4dEhlaWdodCArIGluaXRpYWxTaXplIC8gMiAgKyB3aGl0ZXNwYWNlSGVpZ2h0LyAyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt0eH0sJHt0eX0pYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9PiB1cGRhdGUudHJhbnNpdGlvbigpLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgaXNDb21wYXJlTW9kZSA/IDAgOiAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQgPT4gZXhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgbGluZXMucmFpc2UoKTtcbiAgICAgICAgY29uc3QgbGluZUxlbmd0aCA9IHRvdGFsUmluZ3MgKiBhcmNXaWR0aCArIGF0dHJzLmV4dGVuZGVkTGluZUxlbmd0aDtcbiAgICAgICAgY29uc3QgbGluZUFycmF5ID0gQXJyYXkuZnJvbShBcnJheShhdHRycy50b3RhbFNsaWNlcykua2V5cygpKS5tYXAoZ2V0UmFkaWFucyk7XG5cbiAgICAgICAgbGluZXMuc2VsZWN0QWxsKCdsaW5lJylcbiAgICAgICAgICAgICAgLmRhdGEobGluZUFycmF5KVxuICAgICAgICAgICAgICAuam9pbihcbiAgICAgICAgICAgICAgICBlbnRlciA9PiBcbiAgICAgICAgICAgICAgICAgIGVudGVyXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgcmFkaWFucyA9PiBnZXRDaXJjbGVYKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgcmFkaWFucyA9PiBnZXRDaXJjbGVZKHJhZGlhbnMsIGlubmVyUmFkaXVzKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgcmFkaWFucyA9PiBnZXRDaXJjbGVYKHJhZGlhbnMsIGlubmVyUmFkaXVzICsgbGluZUxlbmd0aCkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIHJhZGlhbnMgPT4gZ2V0Q2lyY2xlWShyYWRpYW5zLCBpbm5lclJhZGl1cyArIGxpbmVMZW5ndGgpKSxcbiAgICAgICAgICAgICAgICB1cGRhdGUgPT4gdXBkYXRlXG4gICAgICAgICAgXHRcdFx0XHRcdC5hdHRyKCd4MScsIHJhZGlhbnMgPT4gZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHJhZGlhbnMgPT4gZ2V0Q2lyY2xlWShyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIHJhZGlhbnMgPT4gZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cyArIGxpbmVMZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCByYWRpYW5zID0+IGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMgKyBsaW5lTGVuZ3RoKSksXG4gICAgICAgICAgICAgICAgZXhpdCA9PiBleGl0LnJlbW92ZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICB9XG4gXG4gXHRcdFx0Ly8gQWRkIGxhYmVsc1xuICAgICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyB0b3RhbFNsaWNlcztcbiAgICBcdGNvbnN0IHRleHREaXN0YW5jZSA9IGF0dHJzLnRleHREaXN0YW5jZTtcbiAgICBcbiAgICBcdGNvbnN0IGxhYmVsQW5jaG9yID0gKHNsaWNlLCBzbGljZU51bWJlcikgPT4ge1xuICAgICAgICBcdGlmIChpc0NvbXBhcmVNb2RlKSByZXR1cm4gXCJtaWRkbGVcIjtcbiAgICAgICAgXG4gICAgICAgIFx0bGV0IHJhZGlhbnMgPSAoMiAqIE1hdGguUEkgKiBzbGljZU51bWJlcikgLyB0b3RhbFNsaWNlcyArIGhhbGZTbGljZVJhZGlhbnM7XG4gICAgICAgICAgbGV0IHJhZGl1cyA9IGlubmVyUmFkaXVzICsgdG90YWxSaW5ncyAqIGFyY1dpZHRoICsgdGV4dERpc3RhbmNlO1xuICAgICAgICAgIGxldCBvZmZzZXRfdHggPSBnZXRDaXJjbGVYKHJhZGlhbnMsIHJhZGl1cyk7XG4gICAgICAgICAgbGV0IG9mZnNldF90eSA9IC1nZXRDaXJjbGVZKHJhZGlhbnMsIHJhZGl1cyk7XG5cbiAgICAgICAgXHRpZiAob2Zmc2V0X3R4IDwgLTEpIHJldHVybiBcImVuZFwiXG4gICAgICAgIFx0ZWxzZSBpZiAob2Zmc2V0X3R4IDwgMSkgcmV0dXJuIFwibWlkZGxlXCJcblxuICAgICAgICBcdHJldHVybiBcInN0YXJ0XCI7XG4gICAgICB9XG4gICAgXG4gICAgXHRjb25zdCBsYWJlbFRyYW5zZm9ybSA9IChzbGljZSxzbGljZU51bWJlcikgPT4ge1xuICAgICAgICBcdGxldCByb3cgPSBNYXRoLm1pbihwYXJzZUludChzbGljZU51bWJlciAvY29scyksIHJvd3MtMSk7Ly8gQWNjb3VudGluZyBmb3IgY29uam9pbmVkIGNhc2VcbiAgICAgICAgICBsZXQgY29sID0gc2xpY2VOdW1iZXIlY29scztcblxuICAgICAgICAgIGxldCBtaWRfdHggPVxuICAgICAgICAgICAgY2VsbFNpemUgLyAyICtcbiAgICAgICAgICAgIGNvbCAqICBjZWxsU2l6ZSArXG4gICAgICAgICAgICAoKGNvbCArIDEpICogd2hpdGVzcGFjZVdpZHRoKSAvIChjb2xzICsgMSk7XG4gICAgICAgICAgbGV0IG1pZF90eSA9XG4gICAgICAgICAgICBhdHRycy50aXRsZVRleHRIZWlnaHQgK1xuICAgICAgICAgICAgICBjZWxsU2l6ZSAvIDIgK1xuICAgICAgICAgICAgICByb3cgKiBjZWxsU2l6ZSArXG4gICAgICAgICAgICAgICgocm93ICsgMSkgKiB3aGl0ZXNwYWNlSGVpZ2h0KSAvIChyb3dzICsgMSk7XG5cblxuICAgICAgICBcdGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VOdW1iZXIpIC8gdG90YWxTbGljZXMgKyBoYWxmU2xpY2VSYWRpYW5zO1xuICAgICAgICAgIGxldCByYWRpdXMgPSBpbm5lclJhZGl1cyArIHRvdGFsUmluZ3MgKiBhcmNXaWR0aCArIHRleHREaXN0YW5jZTtcbiAgICAgICAgICBsZXQgb2Zmc2V0X3R4ID0gaXNDb21wYXJlTW9kZSA/IDAgOiBnZXRDaXJjbGVYKHJhZGlhbnMsIHJhZGl1cyk7XG4gICAgICAgICAgbGV0IG9mZnNldF90eSA9IGlzQ29tcGFyZU1vZGUgPyByYWRpdXMgKyAxLjUqdGV4dERpc3RhbmNlOiAtZ2V0Q2lyY2xlWShyYWRpYW5zLCByYWRpdXMpO1xuICAgICAgICBcdFxuICAgICAgICBcdFxuICAgICAgICBcdGxldCBzY2FsZSA9IE1hdGgubWluKDEsIGNlbGxTaXplL2F0dHJzLnByZXZpb3VzQ2VsbFNpemUpO1xuICBcblx0XHRcdFx0XHRsZXQgdHggPSBtaWRfdHgrb2Zmc2V0X3R4KnNjYWxlO1xuICAgICAgICBcdGxldCB0eSA9IG1pZF90eStvZmZzZXRfdHkqc2NhbGU7XG5cbiAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3R4fSwke3R5fSlgO1xuICAgICAgfVxuXG4gICAgXHRsZXQgbGFiZWxzID0gYXR0cnMuY29udGFpbmVyXG4gICAgICBcdFx0XHRcdFx0XHRcdFx0LnNlbGVjdEFsbCgndGV4dC5sYWJlbHMnKVxuICAgICAgXHRcdFx0XHRcdFx0XHRcdC5kYXRhKGF0dHJzLnNsaWNlcywgc2xpY2U9PnNsaWNlKVxuICAgICAgXHRcdFx0XHRcdFx0XHRcdC5qb2luKFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXIgPT4gZW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdC5zdHlsZShcInRleHQtYW5jaG9yXCIsIChzbGljZSxzbGljZUNvdW50KSA9PiBsYWJlbEFuY2hvcihzbGljZSxzbGljZUNvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsIFwid2hpdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdC50ZXh0KHNsaWNlID0+IHNsaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKHNsaWNlLHNsaWNlQ291bnQpID0+IGxhYmVsVHJhbnNmb3JtKHNsaWNlLHNsaWNlQ291bnQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9PiB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0LnRyYW5zaXRpb24oXCJwaWVVcGRhdGVUclwiKS5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0LnN0eWxlKFwidGV4dC1hbmNob3JcIiwgKHNsaWNlLHNsaWNlQ291bnQpID0+ICBsYWJlbEFuY2hvcihzbGljZSxzbGljZUNvdW50KSlcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKHNsaWNlLHNsaWNlQ291bnQpID0+IGxhYmVsVHJhbnNmb3JtKHNsaWNlLHNsaWNlQ291bnQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQgPT4gZXhpdC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgXG4gICAgXHQvLyBBZGQgY2lyY2xlc1xuICAgICAgY29uc3QgY2lyY2xlQXJyYXkgPSBBcnJheS5mcm9tKEFycmF5KHRvdGFsU2xpY2VzKS5rZXlzKCkpO1xuICAgICAgbGV0IGNpcmNsZUdyb3VwcyA9IGF0dHJzLmNvbnRhaW5lclxuICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnNlbGVjdEFsbCgnZy5jZW50ZXInKVxuICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmRhdGEoY2lyY2xlQXJyYXkpXG4gICAgICBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0ZW50ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlckdyb3VwID0gZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiY2VudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0LmF0dHIoXCJpZFwiLCBkID0+IFwiY2VudGVyXCIgKyBkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0aWFsU2l6ZSA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eCA9IGluaXRpYWxTaXplIC8gMiAgKyB3aGl0ZXNwYWNlV2lkdGggLyAyOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHkgPSBhdHRycy50aXRsZVRleHRIZWlnaHQgKyBpbml0aWFsU2l6ZSAvIDIgICsgd2hpdGVzcGFjZUhlaWdodC8gMjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt0eH0sJHt0eX0pYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdGxldCBjaXJjbGVHcm91cCA9IGNlbnRlckdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeScsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcGVuZFRleHRFbGVtZW50ID0gKGR5LCBuYW1lLCB0ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIG5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkeScsIGR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRleHRFbGVtZW50KCctMC41ZW0nLCAnY2F0ZWdvcnknLCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRleHRFbGVtZW50KCcwLjVlbScsICdudW1fc3R1ZGVudHMnLCBhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRleHRFbGVtZW50KCcxLjVlbScsICdwZXJjZW50X2luX2dyb3VwJywgYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2VudGVyR3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR1cGRhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZS50cmFuc2l0aW9uKFwiY2lyY2xlVXBkYXRlVHJcIikuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFt0eCwgdHksIHNdID0gZ2V0VHJhbnNmb3JtYXRpb24oZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3R4fSwke3R5fSkgc2NhbGUoJHtzfSlgO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlLnNlbGVjdCgnY2lyY2xlJykuYXR0cigncicsIGlubmVyUmFkaXVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0ZXhpdCA9PiBleGl0LnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgIC8vY2lyY2xlR3JvdXBzXG4gICAgXHRjaXJjbGVHcm91cHMucmFpc2UoKTtcbiAgICBcdHRoaXMucmVuZGVyTGVnZW5kKCk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyTGVnZW5kKCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgY29uc29sZS5sb2coYXR0cnMucmluZ3MpO1xuXG4gICAgLy9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgIGxldCBsZWdlbmQgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWxlZ2VuZCcpXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5sZWdlbmRXaWR0aCk7XG4gICAgbGVnZW5kLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIFxuICAgIGxldCB4ID0gMjA7XG4gICAgbGV0IHkgPSAxMDtcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KCdMRUdFTkQnKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzIwcHgnKVxuICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcbiAgICAgeSArPSAyMDtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IGluIGF0dHJzLnJpbmdzKXtcbiAgXHRcdGlmICggYXR0cnMucmluZ3NbY2F0ZWdvcnldLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgY29udGludWU7ICBcbiAgICAgIH1cbiAgICAgIGxlZ2VuZFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAudGV4dChjYXRlZ29yeSlcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTVweCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG5cdFx0XHQgeSArPSAyMDtcbiAgICAgIFxuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhdHRycy5yaW5nc1tjYXRlZ29yeV0pe1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JbdmFsdWVdKTtcbiAgICAgICAgbGVnZW5kXG4gICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ2lkJywgdmFsdWUgKyAndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ3gnLCB4ICsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCB5ICsgNilcbiAgICAgICAgICAudGV4dCh2YWx1ZSlcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNHB4JylcbiAgICAgICAgXHQuc3R5bGUoJ2ZpbGwnLCAnd2hpdGUnKVxuICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgICAgIHkgKz0gMjA7XG4gICAgICB9XG4gICAgICB5Kz0xMDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFN1bmJ1cnN0IH0gZnJvbSAnLi9uYXZpLWNsYXNzJztcbmltcG9ydCB7IFJpbmdEaWFncmFtIH0gZnJvbSAnLi9yaW5nLWRpYWdyYW0xJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuXHQvL1JpbmcgZGlhZ3JhbSBvYmplY3RcbiAgbGV0IHJkOyBcblxuXHQvL1NldCBub2RlIGFuZCBNYWluIHZpeiBTUEEgdXBzXG4gIGRpc3BsYXlOb2RlcygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Vml6O1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheU5vZGVzO1xuIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tb3Blbi1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheUluZm87XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLm9uY2xpY2sgPSBoaWRlSW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tY2xvc2UtYnV0dG9uJykub25jbGljayA9IGhpZGVJbmZvO1xuICBcbiAgZnVuY3Rpb24gZGlzcGxheU5vZGVzKCl7XG4gICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gZGlzcGxheVZpeigpe1xuICAgICAgbGV0IHRlc3QgPSBmYWxzZTtcbiAgICBcdGxldCBhY2FkZW1pY1ZhbHVlc1Rlc3QgPSB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICAgICAgIERlZ3JlZTogWydCYWNoZWxvcnMnLCAnTWFzdGVycyddLFxuICAgICAgICAgICAgIEZhY3VsdHk6IFsnU2NpZW5jZScsICdCdXNpbmVzcyddLFxuICAgICAgICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ11cbiAgICAgICAgICB9O1xuICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXNUZXN0ID0geyAgICAgXG4gICAgICAgICAgICAgIEFnZTogW10sXG4gICAgICAgICAgICAgIFNleDogIFsnTWFsZScsICdGZW1hbGUnXSxcbiAgICAgICAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFsnSW50ZXJuYXRpb25hbCcsICdEb21lc3RpYyddXG4gICAgICAgfVxuXG4gICAgXHRpZiAocmQpe1xuICAgICAgICAgbGV0IGRpdmVyc2l0eVZhbHVlcyA9IHRlc3Q/ZGl2ZXJzaXR5VmFsdWVzVGVzdDogc2IuZGl2ZXJzaXR5VmFsdWVzKCk7XG4gICAgICAgICBsZXQgYWNhZGVtaWNWYWx1ZXMgPSB0ZXN0P2FjYWRlbWljVmFsdWVzVGVzdDogc2IuYWNhZGVtaWNWYWx1ZXMoKTtcblxuICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICBcdCBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIGlmICghdmFsaWQpe1xuICAgICAgICAgICBcdGNvbnNvbGUubG9nKGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgIFx0XHRhbGVydCgnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgZGl2ZXJzaXR5IGF0dHJpYnV0ZScpOyAgXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBcdCBcdFx0IHJkLnJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKTsgLy9Gb3IgcmluZy1kaWFncmFtMS5qc1xuICAgICAgICAgICBcdCAvL3JkLmluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWxlcnQoJ1BsZWFzZSB3YWl0IGZvciB0aGUgZGF0YSB0byBmaW5pc2ggbG9hZGluZycpO1xuICAgICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5SW5mbygpe1xuICAgIGNvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gaGlkZUluZm8oKXtcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBcbiAgbGV0IHNiID0gbmV3IFN1bmJ1cnN0KClcbiAgICAgLmNvbnRhaW5lcignI2NoYXJ0LWNvbnRhaW5lcicpXG4gICAgIC5zdmdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aC0yMDApXG4gICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5pbml0aWFsWm9vbSgwLjMpXG4gICAgIC5yZW5kZXIoKVxuXG4gIG5ldyBSaW5nRGlhZ3JhbSgpXG4gICAgICAgICAuY29udGFpbmVyKCcjc3VuYnVyc3QtY29udGFpbmVyJylcbiAgXHRcdFx0IC5kaXNwbGF5Tm9kZXMoZGlzcGxheU5vZGVzKVxuICAgIFx0XHQgLnNldHVwKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZWw1NTgvN2QyY2I1MjU4OTIxMTE5ZGY1ODg0Y2M5MDkwMmU4NGQvcmF3LzAwODI3YjlkNTMyODgzMzQzMTkxZjYxNDRkNDFkMGEwYmJhZDVkZjgvZmFsbC5jc3YnKVxuXHRcdFx0XHQgLnRoZW4odmFsdWUgPT4gcmQgPSB2YWx1ZSk7XG59KTtcblxuXG5cblxuXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQUNBLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUM3QjtFQUNBLE1BQU0sa0JBQWtCLEdBQUcsZUFBZSxDQUFDO0VBQzNDLE1BQU0sdUJBQXVCLEdBQUcsaUJBQWlCLENBQUM7RUFDbEQsTUFBTSwwQkFBMEIsR0FBRyx1QkFBdUIsQ0FBQztBQUkzRDtBQUNBO0FBQ0E7RUFDTyxNQUFNLE1BQU0sR0FBRztFQUN0QixFQUFFLGdCQUFnQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUMvRCxFQUFFLG1CQUFtQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqRSxFQUFFLGtCQUFrQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNsRSxFQUFFLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNyRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDM0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3JELEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNoRCxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3BELENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwRCxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7RUFDdEQsRUFBRSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3hELEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUN0RCxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7RUFDMUQsRUFBRSxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0VBQy9ELEVBQUM7QUFDRDtFQUNBLEtBQVksTUFBTSxZQUFZLEdBQUc7RUFD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ckMsYUFBYSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDbkMsYUFBYSxXQUFXLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNuRCxhQUFhLFdBQVcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEQ7RUFDQSxRQUFRLE1BQU0sYUFBYSxHQUFHLENBQUMsSUFBSTtFQUNuQyxZQUFZLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ3JDLFlBQVksTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ2hFLFlBQVksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDM0Q7RUFDQSxZQUFZLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUQsWUFBWSxNQUFNLGVBQWUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0VBQzdFLFlBQVksSUFBSSxlQUFlLEVBQUUsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtBQUN0RDtFQUNBLFlBQVksTUFBTSxJQUFJLEdB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