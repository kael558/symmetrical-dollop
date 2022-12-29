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
                  {"name": "Part-time", "size": 28},
                  {"name": "Full-time", "size": 28},
                  {"name": "Co-op", "size": 28},
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

      let multiplier = 1.2;
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
  			 attrs.academicValues = academicValues;
      
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
        document.getElementById('compare-button').innerHTML = isCompareMode ? 'Conjoin' : 'Compare'; 
      
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
          .data(generatePie, d=>{console.log(d); return d.data.ringNumber + d.data.sliceNumber;})
          .join(
            enter => {
          				let arcs = enter
                    .append('path')
          					.attr('stroke', 'white')
          					.attr('stroke-width', '1px')
                    .attr('opacity', 0)
          					.attr('class', d => fixCategory(d.data.category))
            				.attr('fill', d => attrs.color[d.data.category])
            				.attr('d', generateArc)
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
                  });
                  
                  arcs.transition().duration(200)
                            .style('opacity', 1);
              		return arcs;
                  },
                update => update.attr('class', d => fixCategory(d.data.category))
                      .attr('fill', d => attrs.color[d.data.category])
                      .attr('d', generateArc)
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
                    })
                    .transition("arcIntTr").duration(attrs.duration)
                    .attrTween('d', arcTween),
                    exit => exit
                            .transition().duration(attrs.duration)
                            .style('opacity', 0)
                            .on('end', function() {
                              d3.select(this).remove();
                          })
            );
            //.each(function(d){ this._current = d; })
            
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
                      .style('stroke-width', 2)
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
            let offset_ty = isCompareMode ? -radius - textDistance: -getCircleY(radians, radius);
          	
          	
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
      	circleGroups.raise();

      	this.renderTitle();	
      	this.renderLegend();
    }
    
    renderTitle(){
      let attrs = this.getChartState();

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
          for (const attr of diversityValues){
            list.push(getAttrAsTitle(attr));
          }
        	
          if (list.length == 0) return '';
          if (list.length == 1) return 'Students across ' + list.pop() + '.'; 
          return 'Students across ' + list.slice(0, -1).join() + ' and ' + list.pop() + '.';
      	};
      
      	let diversityValues = new Set(["Age","Sex","Citizenship Status"]);
      	for (let arc in attrs.pies){
        	diversityValues.delete(attrs.pies[arc][0].group);
        }
      	
      	
      	d3.select('#viz-title-text')
          .style('font-size', attrs.titleTextSize)
          .text(titleBuilder(attrs.academicValues, diversityValues));
    }

    renderLegend() {
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
      
       y += 25;
      
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwibmF2aS1jbGFzcy5qcyIsInJpbmctZGlhZ3JhbTEuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTlZJU0lCTEVfTk9ERSA9ICdJTlZJU0lCTEUnO1xuY29uc3QgUkVQT1JUX05PREUgPSAnUkVQT1JUJztcblxuY29uc3QgRURJX0FUVFJJQlVURV9OT0RFID0gJ0VESV9BVFRSSUJVVEUnO1xuY29uc3QgQUNBREVNSUNfQVRUUklCVVRFX05PREUgPSAnT1RIRVJfQVRUUklCVVRFJztcbmNvbnN0IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFID0gJ1VOQ09MTEVDVEVEX0FUVFJJQlVURSc7XG5cbmNvbnN0IFZBTFVFX05PREUgPSAnVkFMVUUnO1xuY29uc3QgVU5DT0xMRUNURURfVkFMVUVfTk9ERSA9ICdVTkNPTExFQ1RFRF9WQUxVRSc7XG5cblxuXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xuICBSZXBvcnRfTm9kZV9GaWxsOiB7XCJyZWRcIjozMSxcImdyZWVuXCI6MTIwLFwiYmx1ZVwiOjE4MCxcImFscGhhXCI6MX0sXG4gIERpdmVyc2l0eV9Ob2RlX0ZpbGw6IHtcInJlZFwiOjUxLFwiZ3JlZW5cIjoxNjAsXCJibHVlXCI6NDQsXCJhbHBoYVwiOjF9LFxuICBBY2FkZW1pY19Ob2RlX0ZpbGw6IHtcInJlZFwiOjE2NixcImdyZWVuXCI6MjA2LFwiYmx1ZVwiOjIyNyxcImFscGhhXCI6MX0sXG4gIFVuY29sbGVjdGVkX05vZGVfRmlsbDoge1wicmVkXCI6MTI4LFwiZ3JlZW5cIjoxMjgsXCJibHVlXCI6MTI4LFwiYWxwaGFcIjoxfSxcbiAgVHJhbnNwYXJlbnQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MH0sXG4gIFdoaXRlOiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbHVlOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsYWNrOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9LFxuICBHcmV5OiB7XCJyZWRcIjoxNDEsXCJncmVlblwiOjE2MCxcImJsdWVcIjoyMDMsXCJhbHBoYVwiOjF9LFxuXHRHcmVlbjoge1wicmVkXCI6MTAyLFwiZ3JlZW5cIjoxOTQsXCJibHVlXCI6MTY1LFwiYWxwaGFcIjoxfSxcbiAgT3JhbmdlOiB7XCJyZWRcIjoyNTIsXCJncmVlblwiOjE0MSxcImJsdWVcIjo5OCxcImFscGhhXCI6IDF9LFxuICBTbGF0ZV9HcmV5IDoge1wicmVkXCI6NjEsXCJncmVlblwiOjcyLFwiYmx1ZVwiOjczLFwiYWxwaGFcIjoxfSxcbiAgQnV0dG9uOiB7XCJyZWRcIjoxMDAsXCJncmVlblwiOjEwMCxcImJsdWVcIjoxMDAsXCJhbHBoYVwiOjF9LFxuICBEaXNhYmxlZDoge1wicmVkXCI6MTAwLFwiZ3JlZW5cIjoxMDAsXCJibHVlXCI6MTAwLFwiYWxwaGFcIjowLjJ9LFxuICBEaXNhYmxlZF9UZXh0OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjAuMn0sXG59XG5cbiAgICAgZXhwb3J0IGNvbnN0IGluaXRpYWxOb2RlcyA9IHtcbiAgRW5yb2xsZWQ6IHtcbiAgICB0eXBlOiBSRVBPUlRfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBudW1iZXIgb2Ygc3R1ZGVudHMgdGhhdCBhcmUgZW5yb2xsZWQuJ1xuICB9LFxuICBGYWN1bHR5OiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydTVEVNJywgJ05vbi1TVEVNJywgJ0VuZ2luZWVyaW5nICYgRGVzaWduJywgJ1NjaWVuY2UnLCAnUHVibGljIEFmZmFpcnMnLCAnQnVzaW5lc3MnLCAnQXJ0cyAmIFNvY2lhbCBTY2llbmNlcyddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBBQ0FERU1JQ19BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ0dyb3VwcyBvZiB1bml2ZXJzaXR5IGRlcGFydG1lbnRzIGNvbmNlcm5lZCB3aXRoIGEgbWFqb3IgZGl2aXNpb24gb2Yga25vd2xlZGdlLiBUaGUgZmFjdWx0eSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIG1ham9yIG9yIG1ham9ycy4nXG4gIH0sXG4gICdBY2FkZW1pYyBZZWFyJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnMjAxMy8xNCcsXG4gICAgICAnMjAxNC8xNScsXG4gICAgICAnMjAxNS8xNicsXG4gICAgICAnMjAxNi8xNycsXG4gICAgICAnMjAxNy8xOCcsXG4gICAgICAnMjAxOC8xOScsXG4gICAgICAnMjAxOS8yMCcsXG4gICAgICAnMjAyMC8yMScsXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgcGVyaW9kIG9mIHRoZSB5ZWFyIHdoaWNoIHN0dWRlbnRzIGF0dGVuZCBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGlvbi4gVGhlIGFjYWRlbWljIHllYXIgY29uc2lzdHMgb2YgdGhyZWUgdGVybXMgKFN1bW1lciwgRmFsbCBhbmQgV2ludGVyKS4gVGhlIGFjYWRlbWljIHllYXIgb2YgYSBzdHVkZW50IG1hcHMgZnJvbSB0aGUgeWVhciB0aGF0IHRoZXkgYXJlIHN0dWR5aW5nLicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuICBEZWdyZWU6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0JhY2hlbG9ycycsXG4gICAgICAnTWFzdGVycycsXG4gICAgICAnUGguRC4nXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgbGV2ZWxzIG9mIHF1YWxpZmljYXRpb24gb2ZmZXJlZCBieSBhY2FkZW1pYyBpbnN0aXR1aXRpb25zLiBUaGUgZGVncmVlIG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlaXIgbGV2ZWwgb2Ygc3R1ZHkuJyxcbiAgICBvcmRlcmVkOiB0cnVlXG4gIH0sXG4gXG4gICdTdHVkeSBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydQYXJ0LXRpbWUnLFxuICAgICAgJ0Z1bGwtdGltZScsXG4gICAgICAnQ28tb3AnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgY2xhc3NpZmljYXRpb24gb2YgdGhlIGFtb3VudCBvZiBjb3Vyc2VzIHRoYXQgYSBzdHVkZW50IGlzIHRha2luZy4gU3R1ZGVudHMgZW5yb2xsaW5nIGluIDMgb3IgbW9yZSBjcmVkaXRzIGFjcm9zcyB0aGUgRmFsbCBhbmQgV2ludGVyIGFyZSBmdWxsLXRpbWUgc3R1ZGVudHMuIFdoZXJlYXMgc3R1ZGVudHMgZW5yb2xsaW5nIGluIGxlc3MgdGhhbiAzIGNyZWRpdHMgYXJlIHBhcnQtdGltZSBzdHVkZW50cy4nXG4gIH0sXG4gICdDaXRpemVuc2hpcCBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydEb21lc3RpYycsXG4gICAgICAnSW50ZXJuYXRpb25hbCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgY2xhc3NpZmljYXRpb24gb2YgdHVpdGlvbiBmZWUgdGhhdCBhIHN0dWRlbnQgcGF5cy4gVGhlIHN0dWRlbnRzIHVuaXZlcnNpdHkgdHVpdGlvbiBmZWUgYW1vdW50IGRldGVybWluZXMgdGhlaXIgY2l0aXplbnNoaXAgc3RhdHVzLidcbiAgfSxcbiAgQWdlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogW1xuICAgICAgJzw9MTcnLFxuICAgICAgJzE4LTIwJyxcbiAgICAgICcyMS0yNScsXG4gICAgICAnMjYtMzAnLFxuICAgICAgJzMxLTM1JyxcbiAgICAgICczNi00NScsXG4gICAgICAnNDYtNTUnLFxuICAgICAgJzU1KycsXG4gICAgXSxcbiAgICB1bmNvbGxlY3RlZFZhbHVlczogWyc1NS01OScsJzYwLTY0JywnNjUtNjknLCAnNzAtNzQnLCAnNzUtNzknLCAnODArJ10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxlbmd0aCBvZiB0aW1lIHRoYXQgYSBzdHVkZW50IGhhcyBsaXZlZC4gVGhlIGFnZSBvZiBhIHN0dWRlbnQgbWFwcyB0byB0aGVpciByZXNwZWN0aXZlIGFnZSBpbnRlcnZhbC4gVGhlIHJlZ2lzdHJhdGlvbiBhcHBsaWNhdGlvbiByZWNvcmRzIGEgc3R1ZGVudFxcJ3MgZGF0ZSBvZiBiaXJ0aCBhbmQgZGV0ZXJtaW5lcyB0aGVpciBhZ2UuJyxcbiAgICBvcmRlcmVkOiB0cnVlXG4gIH0sXG4gIFNleDoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnRmVtYWxlJywgJ01hbGUnXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogWydOb24tYmluYXJ5J10sXG4gICAgdHlwZTogRURJX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBoeXNpY2FsIGRpZmZlcmVuY2VzIGJldHdlZW4gc3R1ZGVudHMgYmFzZWQgb24gYW5hdG9taWNhbCBhbmQgcGh5c2lvbG9naWNhbCBjaGFyYWN0ZXJpc3RpY3MuIFRoZSByZWdpc3RyYXRpb24gYXBwbGljYXRpb24gcmVjb3JkcyBhIHN0dWRlbnRcXCdzIHNleCAobGFiZWxsZWQgYXMgZ2VuZGVyIG9uIHRoZSBhcHBsaWNhdGlvbikuIEEgc3R1ZGVudCBtYXkgZmlsZSBhIGZvcm0gdG8gcmVxdWVzdCBhIFxcXCJHZW5kZXIgQ2hhbmdlIEFzc2lnbm1lbnRcXFwiIHRvIGNoYW5nZSB0aGlzIGZpZWxkLiBUaGlzIGZpZWxkIGNvbnRhaW5zIGEgbWl4dHVyZSBvZiBnZW5kZXIgYW5kIHNleC4gQSBncm93aW5nIHBvcHVsYXRpb24gb2Ygc3R1ZGVudHMgY2hvb3NlIG5vdCB0byBkaXNjbG9zZSB0aGVpciBnZW5kZXIvc2V4IHdpdGggYSBcXCdQcmVmZXIgbm90IHRvIHJlcG9ydFxcJyBvcHRpb24uIFdlIGFyZSB1bnN1cmUgaG93IHRoaXMgbWFwcyB0byB0aGUgdHdvIGF2YWlsYWJsZSBjYXRlZ29yaWVzIG9mIFxcJ21hbGVcXCcgYW5kIFxcJ2ZlbWFsZVxcJy4nXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG5cdH0sXG4gICdSZWxpZ2lvbi9TcGlyaXR1YWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnUmVnaW9uYWwgSWRlbnRpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICAnRGlzL2FiaWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxuICBJbmRpZ2VuZWl0eToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ0ZpcnN0IE5hdGlvbnMnLCAnTWV0aXMnLCAnSW51aXQnXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgaW5kaWdlbmVpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0ZpcnN0IExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ090aGVyIExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLidcbiAgfSxcbiAgJ0V0aG5pY2l0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nXG4gIH0sXG4gICdOYXRpb24nOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoaXMgY2F0ZWdvcnkgb2YgaW5mb3JtYXRpb24uJ1xuICB9LFxufVxuXG5cbmV4cG9ydCBjb25zdCBub2RlcyA9IHtcbiAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlRyYW5zcGFyZW50LFxuICBcdFx0XHRcdCBcImJvcmRlcldpZHRoXCI6IFwiMHB4XCIsXG4gICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZhY3VsdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICBcdGRlc2NyaXB0aW9uOiAnR3JvdXBzIG9mIHVuaXZlcnNpdHkgZGVwYXJ0bWVudHMgY29uY2VybmVkIHdpdGggYSBtYWpvciBkaXZpc2lvbiBvZiBrbm93bGVkZ2UuIFRoZSBmYWN1bHR5IG9mIGEgc3R1ZGVudCBtYXBzIGZyb20gdGhlaXIgbWFqb3Igb3IgbWFqb3JzLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlNURU1cIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTm9uLVNURU1cIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiRW5naW5lZXJpbmcgJiBEZXNpZ25cIiwgXCJzaXplXCI6IDEyfSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiU2NpZW5jZVwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJQdWJsaWMgQWZmYWlyc1wiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJCdXNpbmVzc1wiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgXHR7XCJuYW1lXCI6IFwiQXJ0cyAmIFNvY2lhbCBTY2llbmNlc1wiLCBcInNpemVcIjogMTJ9XG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJBY2FkZW1pYyBZZWFyXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuQWNhZGVtaWNfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBwZXJpb2Qgb2YgdGhlIHllYXIgd2hpY2ggc3R1ZGVudHMgYXR0ZW5kIGFuIGVkdWNhdGlvbmFsIGluc3RpdHV0aW9uLiBUaGUgYWNhZGVtaWMgeWVhciBjb25zaXN0cyBvZiB0aHJlZSB0ZXJtcyAoU3VtbWVyLCBGYWxsIGFuZCBXaW50ZXIpLiBUaGUgYWNhZGVtaWMgeWVhciBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZSB5ZWFyIHRoYXQgdGhleSBhcmUgc3R1ZHlpbmcuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxMy8xNFwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTQvMTVcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE1LzE2XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxNi8xN1wiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTcvMThcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE4LzE5XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxOS8yMFwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMjAvMjFcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcblx0XHRcdFx0XHRcdHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJEZWdyZWVcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxldmVscyBvZiBxdWFsaWZpY2F0aW9uIG9mZmVyZWQgYnkgYWNhZGVtaWMgaW5zdGl0dWl0aW9ucy4gVGhlIGRlZ3JlZSBvZiBhIHN0dWRlbnQgbWFwcyBmcm9tIHRoZWlyIGxldmVsIG9mIHN0dWR5LicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkJhY2hlbG9yc1wiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJNYXN0ZXJzXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlBoLkQuXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN0dWR5IFN0YXR1c1wiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgY2xhc3NpZmljYXRpb24gb2YgdGhlIGFtb3VudCBvZiBjb3Vyc2VzIHRoYXQgYSBzdHVkZW50IGlzIHRha2luZy4gU3R1ZGVudHMgZW5yb2xsaW5nIGluIDMgb3IgbW9yZSBjcmVkaXRzIGFjcm9zcyB0aGUgRmFsbCBhbmQgV2ludGVyIGFyZSBmdWxsLXRpbWUgc3R1ZGVudHMuIFdoZXJlYXMgc3R1ZGVudHMgZW5yb2xsaW5nIGluIGxlc3MgdGhhbiAzIGNyZWRpdHMgYXJlIHBhcnQtdGltZSBzdHVkZW50cy4nLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiUGFydC10aW1lXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkZ1bGwtdGltZVwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJDby1vcFwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaXRpemVuc2hpcCBTdGF0dXNcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsLFxuICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWZpY2F0aW9uIG9mIHR1aXRpb24gZmVlIHRoYXQgYSBzdHVkZW50IHBheXMuIFRoZSBzdHVkZW50cyB1bml2ZXJzaXR5IHR1aXRpb24gZmVlIGFtb3VudCBkZXRlcm1pbmVzIHRoZWlyIGNpdGl6ZW5zaGlwIHN0YXR1cy4nLFxuICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJEb21lc3RpY1wiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJJbnRlcm5hdGlvbmFsXCIsIFwic2l6ZVwiOiA0Mn0sXG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFnZVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGxlbmd0aCBvZiB0aW1lIHRoYXQgYSBzdHVkZW50IGhhcyBsaXZlZC4gVGhlIGFnZSBvZiBhIHN0dWRlbnQgbWFwcyB0byB0aGVpciByZXNwZWN0aXZlIGFnZSBpbnRlcnZhbC4gVGhlIHJlZ2lzdHJhdGlvbiBhcHBsaWNhdGlvbiByZWNvcmRzIGEgc3R1ZGVudFxcJ3MgZGF0ZSBvZiBiaXJ0aCBhbmQgZGV0ZXJtaW5lcyB0aGVpciBhZ2UuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiPD0xN1wiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjE4LTIwXCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjEtMjVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyNi0zMFwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjMxLTM1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMzYtNDVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI0Ni01NVwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjU1K1wiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjU1LTU5XCIsIFwiY29sb3JcIjpjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjYwLTY0XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI2NS02OVwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNzAtNzRcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjc1LTc5XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI4MCtcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn1cbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2V4XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgcGh5c2ljYWwgZGlmZmVyZW5jZXMgYmV0d2VlbiBzdHVkZW50cyBiYXNlZCBvbiBhbmF0b21pY2FsIGFuZCBwaHlzaW9sb2dpY2FsIGNoYXJhY3RlcmlzdGljcy4gVGhlIHJlZ2lzdHJhdGlvbiBhcHBsaWNhdGlvbiByZWNvcmRzIGEgc3R1ZGVudFxcJ3Mgc2V4IChsYWJlbGxlZCBhcyBnZW5kZXIgb24gdGhlIGFwcGxpY2F0aW9uKS4gQSBzdHVkZW50IG1heSBmaWxlIGEgZm9ybSB0byByZXF1ZXN0IGEgXFxcIkdlbmRlciBDaGFuZ2UgQXNzaWdubWVudFxcXCIgdG8gY2hhbmdlIHRoaXMgZmllbGQuIFRoaXMgZmllbGQgY29udGFpbnMgYSBtaXh0dXJlIG9mIGdlbmRlciBhbmQgc2V4LiBBIGdyb3dpbmcgcG9wdWxhdGlvbiBvZiBzdHVkZW50cyBjaG9vc2Ugbm90IHRvIGRpc2Nsb3NlIHRoZWlyIGdlbmRlci9zZXggd2l0aCBhIFxcJ1ByZWZlciBub3QgdG8gcmVwb3J0XFwnIG9wdGlvbi4gV2UgYXJlIHVuY2VydGFpbiBob3cgdGhpcyBtYXBzIHRvIHRoZSB0d28gYXZhaWxhYmxlIGNhdGVnb3JpZXMgb2YgXFwnbWFsZVxcJyBhbmQgXFwnZmVtYWxlXFwnLicsXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJNYWxlXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkZlbWFsZVwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJOb24tYmluYXJ5XCIsIFwiY29sb3JcIjpjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogMjh9XG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJhY2VcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgIFwic2l6ZVwiOiA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWxpZ2lvbi9TcGlyaXR1YWxpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpcy9hYmlsaXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiSW5kaWdlbmVpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGlzIGNhdGVnb3J5IG9mIGluZm9ybWF0aW9uLicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGFuZ3VhZ2VzIFNwb2tlblwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkV0aG5pY2l0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hdGlvbi9SZWdpb25hbCBJZGVudGl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhpcyBjYXRlZ29yeSBvZiBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICBdXG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbm9kZXMsIGNvbG9ycyB9IGZyb20gJy4vbm9kZXMnO1xuXG5leHBvcnQgY2xhc3MgU3VuYnVyc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBFeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgc3ZnV2lkdGg6IDgwMCxcbiAgICAgIHN2Z0hlaWdodDogNjAwLFxuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICBkZWZhdWx0VGV4dEZpbGw6ICcjMkMzRTUwJyxcbiAgICAgIG5vZGVUZXh0RmlsbDogJ3doaXRlJyxcbiAgICAgIGRlZmF1bHRGb250OiAnSGVsdmV0aWNhJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSksXG4gICAgICBkYXRhOiBub2RlcyxcbiAgICAgIG5vZGVzOiBudWxsLFxuICAgICAgY29ubmVjdG9yTGV2ZWxzOiAyLFxuICAgICAgZGVwdGg6IDE4MCxcbiAgICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgICBzdHJva2VXaWR0aDogMyxcbiAgICAgIGluaXRpYWxab29tOiAxLFxuICAgICAgdGl0bGVUZXh0U2l6ZTogJzIuNXZ3JyxcbiAgICAgIGNlbnRlclRleHRTaXplOiAnMS41dncnLFxuICAgICAgc2xpY2VUZXh0U2l6ZTogJzEuNXZ3JyxcbiAgICAgIHNwbGl0U2l6ZTogJzAuNWVtJyxcbiAgICAgICBjb2xvcjoge1xuICAgICAgICBNYWxlOiAnI2ZjOGQ1OScsXG4gICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICBJbnRlcm5hdGlvbmFsOiAnIzk5OGVjMycsXG4gICAgICAgIERvbWVzdGljOiAnI2YxYTM0MCcsXG4gICAgICAgICc8PTE3JzogJyNmN2ZjZjUnLFxuICAgICAgICAnMTgtMjAnOiAnI2U1ZjVlMCcsXG4gICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgJzI2LTMwJzogJyNhMWQ5OWInLFxuICAgICAgICAnMzEtMzUnOiAnIzc0YzQ3NicsXG4gICAgICAgICczNi00NSc6ICcjNDFhYjVkJyxcbiAgICAgICAgJzQ2LTU1JzogJyMyMzhiNDUnLFxuICAgICAgICAnNTUrJzogJyMwMDZkMmMnLFxuICAgICAgICAwOiAnIzk4OTg5OCcsXG4gICAgICB9LFxuICAgICAgYWNhZGVtaWNWYWx1ZXM6IHtcbiAgICAgICAgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgIERlZ3JlZTogWydUb3RhbCddLFxuICAgICAgICBGYWN1bHR5OiBbJ1RvdGFsJ10sXG4gICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ10sXG4gICAgICB9LFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzOiB7XG4gICAgICAgIEFnZTogW10sXG4gICAgICAgIFNleDogW10sXG4gICAgICAgICdDaXRpemVuc2hpcCBTdGF0dXMnOiBbXSxcbiAgICAgIH0sXG4gICAgICBvbk5vZGVDbGljazogbnVsbCxcbiAgICAgIHRvb2x0aXBEaXY6IG51bGwsXG4gICAgICBudW1FeHBhbmRlZDogMCxcbiAgICAgIHVuY2xpY2tlZFdpZHRoOiAnMnB4JyxcbiAgICAgIGNsaWNrZWRXaWR0aDogJzEwcHgnLFxuICAgICAgZm9jdXNzZWQ6IG51bGwsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDogJ0Vucm9sbGVkIFN0dWRlbnRzJyxcbiAgICAgIGNlbnRlclg6IDAsXG4gICAgICBjZW50ZXJZOiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gRHluYW1pY2FsbHkgc2V0IGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgQ2hhcnQgY2xhc3NcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gICAgXG4gICAgLy9EZWZpbmUgdGl0bGVcbiAgICBkMy5zZWxlY3QoJyNuYXYtdGl0bGUtdGV4dCcpXG4gICAgXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCBhdHRycy50aXRsZVRleHRTaXplKVxuICAgIFx0XHRcdC50ZXh0KCdDYXJsZXRvbiBVbml2ZXJzaXR5IFN0dWRlbnRzIENvbGxlY3RlZCBcXCYgTWlzc2luZyBEZW1vZ3JhcGhpY3MgRGF0YScpO1xuICAgIFxuICBcblx0XHR0aGlzLnJlbmRlckxlZ2VuZCgpO1xuICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKClcbiAgICAvL3RoaXMuaW5pdGlhbGl6ZUVudGVyRXhpdFVwZGF0ZVBhdHRlcm4oKTtcbiAgfVxuICBcbiAgICAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgIHJlbmRlckxlZ2VuZCgpe1xuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBjb25zdCBsZWdlbmQgPSBkMy5zZWxlY3QoJyNub2RlLWxlZ2VuZCcpO1xuICAgIGNvbnN0IHdpZHRoID0gMTIsIGhlaWdodCA9IDEyO1xuICAgIGNvbnN0IHJlY3RCdWlsZGVyID0gKHgsIHksIGNvbG9yKSA9PiB7XG4gICAgXHQgIGxlZ2VuZCBcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcikpXG4gICAgICBcdFx0LnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoeCwgeSwgdGV4dCwgc2l6ZSkgPT4ge1xuICAgICAgICAgIGxlZ2VuZFxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgICAudGV4dCh0ZXh0KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBzaXplKVxuICAgICAgXHRcdFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHRleHRCdWlsZGVyKDYwLCAxMCwgJ0xFR0VORCcsICcyMHB4Jyk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDM0LCBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKTtcbiAgICByZWN0QnVpbGRlcigyMCwgNjQsIGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsKTtcbiAgICByZWN0QnVpbGRlcigyMCwgOTQsIGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwpO1xuICAgIHRleHRCdWlsZGVyKDQwLCA0MCwgJ1VuY29sbGVjdGVkIEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuICAgIHRleHRCdWlsZGVyKDQwLCA3MCwgJ0RpdmVyc2l0eSBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiBcdFx0dGV4dEJ1aWxkZXIoNDAsIDEwMCwgJ0FjYWRlbWljIEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuICB9XG4gIFxuICByZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKXtcbiAgICBcdGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgXHQgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QoJyNzZWxlY3RlZC1hdHRyaWJ1dGVzJyk7XG4gICAgXHQgc2VsLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIFxuICBcdFx0IGNvbnN0IHRleHRCdWlsZGVyID0gKHgsIHksIHRleHQsIHNpemUpID0+IHtcbiAgICAgICAgICBzZWxcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc2l6ZSlcbiAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIFx0fVxuICAgICAgIFxuICAgICAgbGV0IHkgPSAxMDtcbiAgICBcdGxldCB4ID0gNTA7XG4gICAgICB0ZXh0QnVpbGRlcih4LTQwLCB5LCAnU0VMRUNURUQgQ0FURUdPUklFUycsICcxNXB4Jyk7XG4gICAgXHR5Kz0zMDtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcyl7XG4gICAgICBcdGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPiAxIHx8IChhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPT09IDEgJiYgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl1bMF0gIT09ICdUb3RhbCcpKXtcbiAgICAgICAgXHR0ZXh0QnVpbGRlcih4LCB5LCAnLSAnICsgYXR0ciwgJzE1cHgnKTtcbiAgICAgICAgICB5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgIFx0aWYgKGF0dHJzLmRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPiAwKXtcbiAgICAgICAgIHRleHRCdWlsZGVyKHgsIHksICctICcgKyBhdHRyLCAnMTVweCcpO1xuICAgICAgICAgIHkrPTMwO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpe1xuICAgIFx0Y29uc3QgbmMgPSB0aGlzO1xuICAgIFx0Y29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgXG4gICAgXHRjb25zdCB3aWR0aCA9IGF0dHJzLnN2Z1dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gYXR0cnMuc3ZnSGVpZ2h0ICxcbiAgICAgICAgICAgIG1heFJhZGl1cyA9IChNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIpIC0gNTtcblxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLnJhbmdlKFswLCAyICogTWF0aC5QSV0pXG4gICAgICAgICAgICAuY2xhbXAodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgIC5yYW5nZShbbWF4UmFkaXVzKi4xLCBtYXhSYWRpdXNdKTtcblxuICAgICAgICBjb25zdCBwYXJ0aXRpb24gPSBkMy5wYXJ0aXRpb24oKTtcblxuICAgICAgICBjb25zdCBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAgICAgLnN0YXJ0QW5nbGUoZCA9PiB4KGQueDApKVxuICAgICAgICAgICAgLmVuZEFuZ2xlKGQgPT4geChkLngxKSlcbiAgICAgICAgICAgIC5pbm5lclJhZGl1cyhkID0+IE1hdGgubWF4KDAsIHkoZC55MCkpKVxuICAgICAgICAgICAgLm91dGVyUmFkaXVzKGQgPT4gTWF0aC5tYXgoMCwgeShkLnkxKSkpO1xuXG4gICAgICAgIGNvbnN0IG1pZGRsZUFyY0xpbmUgPSBkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbGZQaSA9IE1hdGguUEkvMjtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlcyA9IFt4KGQueDApIC0gaGFsZlBpLCB4KGQueDEpIC0gaGFsZlBpXTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBNYXRoLm1heCgwLCAoeShkLnkwKSArIHkoZC55MSkpIC8gMik7XG5cdFx0XHRcdFx0XG4gICAgICAgICAgICBjb25zdCBtaWRkbGVBbmdsZSA9IChhbmdsZXNbMV0gKyBhbmdsZXNbMF0pIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGludmVydERpcmVjdGlvbiA9IG1pZGRsZUFuZ2xlID4gMCAmJiBtaWRkbGVBbmdsZSA8IE1hdGguUEk7IC8vIE9uIGxvd2VyIHF1YWRyYW50cyB3cml0ZSB0ZXh0IGNjd1xuICAgICAgICAgICAgaWYgKGludmVydERpcmVjdGlvbikgeyBhbmdsZXMucmV2ZXJzZSgpOyB9XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkMy5wYXRoKCk7XG4gICAgICAgICAgICBwYXRoLmFyYygwLCAwLCByLCBhbmdsZXNbMF0sIGFuZ2xlc1sxXSwgaW52ZXJ0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnRvU3RyaW5nKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGV4dEZpdHMgPSBkID0+IHtcbiAgICAgICAgICBcdGlmIChkLnNwbGl0ICYmIChkLmNoaWxkcmVuIT1udWxsIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKSlcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IENIQVJfU1BBQ0UgPSA4O1xuXG4gICAgICAgICAgICBjb25zdCBkZWx0YUFuZ2xlID0geChkLngxKSAtIHgoZC54MCk7XG4gICAgICAgICAgICBjb25zdCByID0gTWF0aC5tYXgoMCwgKHkoZC55MCkgKyB5KGQueTEpKSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgcGVyaW1ldGVyID0gciAqIGRlbHRhQW5nbGU7XG5cbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5sZW5ndGggKiBDSEFSX1NQQUNFIDwgcGVyaW1ldGVyO1xuICAgICAgICB9O1xuXG4gICAgXHRcdGQzLnNlbGVjdChcIiNub2RlLWRpdlwiKS5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcilcblxuICAgIFxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNjaGFydC1jb250YWluZXInKVxuXHRcdFx0XHRcdFx0LnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBgJHsoLXdpZHRoKzI3NSkgLyAyfSAkeygtaGVpZ2h0LTEyMCkgLyAyfSAke3dpZHRofSAke2hlaWdodH1gKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICgpID0+IGZvY3VzT24oKSk7IC8vIFJlc2V0IHpvb20gb24gY2FudmFzIGNsaWNrXG5cblxuICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1ncm91cCcpLnN0eWxlLmxlZnQgPSAod2luZG93LmlubmVyV2lkdGgtMjc1KS8yICArIFwicHhcIlxuICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1ncm91cCcpLnN0eWxlLnRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQrMzApLzIgKyBcInB4XCJcbiAgICBcbiAgICBcblx0XHRcdCBcdGxldCB0ZXh0Q2lyY2xlLCBmbywgaW5uZXJSYWRpdXM7XG5cbiAgICBcdFx0bGV0IHJvb3QgPSBub2Rlc1xuICAgICAgICByb290ID0gZDMuaGllcmFyY2h5KHJvb3QpO1xuICAgICAgICByb290LnN1bShkID0+IGQuc2l6ZSk7XG5cbiAgICBcdFx0cm9vdC5kZXNjZW5kYW50cygpLm1hcChkID0+e1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBkLmRhdGEubmFtZS5pbmNsdWRlcyhcIiBcIikgfHwgZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgc3BsaXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgIFx0XHRcbiAgICBcdFx0Y29uc3Qgc29ydGVkTm9kZXMgPSBwYXJ0aXRpb24ocm9vdCkuZGVzY2VuZGFudHMoKS5zb3J0KChkMSwgZDIpID0+IHtcbiAgICAgICAgXHQgaWYgKGQxLmNoaWxkcmVuICYmICFkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAxOyBcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgaWYgKCFkMS5jaGlsZHJlbiAmJiBkMi5jaGlsZHJlbil7XG4gICAgICAgICAgICBcdHJldHVybiAtMTsgXG4gICAgICAgICAgIH1cbiAgICAgICAgICBcdHJldHVybiAwO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNsaWNlID0gc3ZnLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgICAuZGF0YShzb3J0ZWROb2Rlcyk7XG5cdFx0XHRcbiAgICAgICAgc2xpY2UuZXhpdCgpLnJlbW92ZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0LyogR0VUL1NFVCBTTElDRVMgKi9cbiAgICAgICAgY29uc3QgbmV3U2xpY2UgPSBzbGljZS5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnc2xpY2UnKVxuICAgICAgICBcdFx0Lm9uKCdtb3VzZW92ZXInLCBkID0+IHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZS50ZXh0KGQuZGF0YS5kZXNjcmlwdGlvbikgXG5cbiAgICAgICAgICAgICAgIGxldCBoID0gdGV4dENpcmNsZS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgZm8uYXR0cigneScsIC1oKTtcbiAgICAgICAgICAgIH0pLm9uKCdtb3VzZW91dCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgdGV4dENpcmNsZS50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBkID0+IHtcbiAgICAgICAgICAgICAgXHRpZiAoWy4uLmQzLmV2ZW50LnNyY0VsZW1lbnQuY2xhc3NMaXN0XS5pbmNsdWRlcygnc2VsZWN0LWFsbC1jaXJjbGVzJykpe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgXHRcbiAgICAgICAgICAgICAgXHRpZiAoZC5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgICBmb2N1c09uKGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3QoZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkQXR0cmlidXRlcygpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIG5ld1NsaWNlLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbWFpbi1hcmMnKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgIGQgPT4gdGhpcy5yZ2JhT2JqVG9Db2xvcihkLmRhdGEuY29sb3IgfHwgZC5wYXJlbnQuZGF0YS5jb2xvcikpXG4gICAgIFx0XHRcdFx0LnN0eWxlKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4gZC5kYXRhLm5hbWUgPT0gJycgPyAnMHB4JyA6IGF0dHJzLnVuY2xpY2tlZFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpO1xuXG4gICAgXHRcbiAgICBcdFx0bmV3U2xpY2UuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnaGlkZGVuLWFyYycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgKF8sIGkpID0+IGBoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIG1pZGRsZUFyY0xpbmUpO1xuXHRcdFx0XHRcbiBcbiAgICBcdFx0LyogQVBQRU5EIFRFWFQgKi9cbiAgICAgICAgY29uc3QgdGV4dCA9IG5ld1NsaWNlXG4gICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2FyYy10ZXh0JylcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGF0dHJzLnNsaWNlVGV4dFNpemUpXG4gICAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCAoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGQucGFyZW50ICYmIGQucGFyZW50LnBhcmVudCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gdGV4dEZpdHMoZCkgPyBudWxsIDogJ25vbmUnXG4gICAgICAgICAgfSkuYXR0cignZHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGQuc3BsaXQpe1xuICAgICAgICAgICAgIHJldHVybiAoZC5pbnZlcnRlZCA/IFwiLVwiIDogXCIrXCIpICsgYXR0cnMuc3BsaXRTaXplO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiBcIjBlbVwiXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHRQYXRoJylcbiAgICAgICAgICAuYXR0cignc3RhcnRPZmZzZXQnLCAnNTAlJylcbiAgICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIChfLCBpKSA9PiBgI2hpZGRlbkFyYyR7aX1gKVxuICAgICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpe1xuICAgICAgICAgICAgICBpZiAoZC5kYXRhLm5hbWUuaW5jbHVkZXMoXCIvXCIpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUuc3BsaXQoXCIvXCIpW2QuaW52ZXJ0ZWQgPyAwIDogMV1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lLnNwbGl0KFwiIFwiKVtkLmludmVydGVkID8gMCA6IDFdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0MSA9IG5ld1NsaWNlXG4gICAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy5zbGljZVRleHRTaXplKVxuICAgICAgICAgICAgICAuYXR0cignZHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGQuc3BsaXQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGQuaW52ZXJ0ZWQgPyBcIitcIiA6IFwiLVwiKSArYXR0cnMuc3BsaXRTaXplO1xuICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIwZW1cIlxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGV4dDFcbiAgICAgICAgICAgICAgLmFwcGVuZCgndGV4dFBhdGgnKVxuICAgICAgICAgICAgICAuYXR0cignc3RhcnRPZmZzZXQnLCAnNTAlJylcbiAgICAgICAgICAgICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAoXywgaSkgPT4gYCNoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zcGxpdCAmJiAoZC5jaGlsZHJlbiE9bnVsbCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCkpe1xuICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS5uYW1lLmluY2x1ZGVzKFwiL1wiKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIi9cIilbZC5pbnZlcnRlZCA/IDEgOiAwXVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmRhdGEubmFtZS5zcGxpdChcIiBcIilbZC5pbnZlcnRlZCA/IDEgOiAwXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICB9KTtcblx0XHRcdFx0XG5cblxuXG4gICAgXG4gICAgXHRcdC8qIEhBTkRMRSBTRUxFQ1QgQUxMICovXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLm9uY2xpY2sgPSBzZWxlY3RBbGw7XG4gICAgXHRcdGZ1bmN0aW9uIHNlbGVjdEFsbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFNlbGVjdGVkID0gYXR0cnMuZm9jdXNzZWQuY2hpbGRyZW4uZXZlcnkoZCA9PiBkLnNlbGVjdGVkIHx8IGQuZGF0YS5jb2xvciA9PSBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKVxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgYXR0cnMuZm9jdXNzZWQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgaWYgKGFsbFNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICBzZWxlY3QoY2hpbGQpOyAgXG4gICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLnNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIFx0XHRcbiAgICBcdFx0ZnVuY3Rpb24gc2VsZWN0KGQpe1xuICAgICAgICAgIFx0XHRpZiAoZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBcdFx0XG4gICAgICAgICAgXHRcdGQuc2VsZWN0ZWQgPSAhZC5zZWxlY3RlZFxuICAgICAgICAgIFx0XHRpZiAoZC5zZWxlY3RlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtYnV0dG9uJykuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdChcIiNcIiArIGQucGFyZW50LmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKS5hdHRyKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIFx0aWYgKGF0dHJzLmZvY3Vzc2VkKXtcbiAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxTZWxlY3RlZCA9IGF0dHJzLmZvY3Vzc2VkLmNoaWxkcmVuLmV2ZXJ5KGQgPT4gZC5zZWxlY3RlZCB8fCBkLmRhdGEuY29sb3IgPT0gY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbClcbiAgICAgICAgICAgICAgICAgICBpZiAoYWxsU2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICBcdHN2Zy5zZWxlY3QoIFwiI1wiICsgZC5wYXJlbnQuZGF0YS5uYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgXCItY2lyY2xlXCIpLmF0dHIoJ2ZpbGwnLCBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmx1ZSkpXG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgY29uc3QgYWxsU2VsZWN0ZWQgPSBkLnBhcmVudC5jaGlsZHJlbi5ldmVyeShkID0+IGQuc2VsZWN0ZWQgfHwgZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpXG4gICAgICAgICAgICAgICAgICAgaWYgKGFsbFNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgXHRzdmcuc2VsZWN0KCBcIiNcIiArIGQucGFyZW50LmRhdGEubmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArIFwiLWNpcmNsZVwiKS5hdHRyKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsdWUpKVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBcdFx0XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkLnBhcmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnQubmFtZV0uaW5kZXhPZihkLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdLnB1c2goZC5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5pbmRleE9mKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAwKSB7Ly9pZiBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucHVzaCgnVG90YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXVswXSA9PSAnVG90YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgJ1RvdGFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5wdXNoKGQuZGF0YS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsICo9IGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWwgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1dBUk5JTkc6IEFkZGluZyBtb3JlIGFjYWRlbWljIGF0dHJpYnV0ZXMgbWF5IHJlc3VsdCBpbiBsb3cgdmlzaWJpbGl0eSBpbiB0aGUgdmlzdWFsaXphdGlvbi4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcdCB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoJ3BhdGgubWFpbi1hcmMnKS5zdHlsZSgnb3BhY2l0eScsKGQpID0+IGQuc2VsZWN0ZWQgPyAwLjUgOiAxLjApO1xuICAgICAgICB9XG5cbiAgICBcbiAgICBcdFx0ICAgIFx0XHQvKiBBUFBFTkQgU0VMRUNUIEFMTCBDSVJDTEVTICovXG4gICAgXHRcdC8vSGVscGVyIG1ldGhvZHNcbiAgICAgICAgY29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgXHRcdGNvbnN0IGdldENpcmNsZVkgPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgXHRcdE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIFxuICAgIFx0XHRjb25zdCBhdHRyaWJ1dGVTbGljZXMgPSBuZXdTbGljZS5maWx0ZXIoKGQpID0+IGQucGFyZW50ICYmIGQucGFyZW50LnBhcmVudCA9PSBudWxsICYmIGQuY2hpbGRyZW4hPW51bGwpO1xuICAgIFx0XHRhdHRyaWJ1dGVTbGljZXNcbiAgICAgICAgICBcdFx0XHQuYXBwZW5kKCdjaXJjbGUnKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsICdzZWxlY3QtYWxsLWNpcmNsZXMnKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGQgPT4gZC5kYXRhLm5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyBcIi1jaXJjbGVcIilcbiAgICBcdFx0XHRcdFx0XHQuYXR0cigncicsICcxNXB4JylcbiAgICBcdFx0XHRcdFx0XHQuYXR0cignY3gnLCBkID0+IHtcbiAgICAgICAgICBcdFx0XHRcdGxldCByYWRpYW5zID0geChkLngwKSArICh4KGQueDEpIC0geChkLngwKSkvMjtcbiAgICAgICAgICBcdFx0XHRcdGxldCBjeCA9ICBnZXRDaXJjbGVYKHJhZGlhbnMsIHkoZC55MSkpO1xuICAgICAgICAgIFx0XHRcdFx0cmV0dXJuIGN4O1xuICAgICAgICBcdFx0XHRcdH0pXG4gICAgXHRcdFx0XHRcdFx0LmF0dHIoJ2N5JywgZCA9PiB7XG5cbiAgICAgICAgICBcdFx0XHRcdFx0bGV0IHJhZGlhbnMgPSB4KGQueDApICsgKHgoZC54MSkgLSB4KGQueDApKS8yO1xuICAgICAgICAgIFx0XHRcdFx0XHRsZXQgY3kgPSAgLWdldENpcmNsZVkocmFkaWFucywgeShkLnkxKSk7XG4gICAgICAgICAgXHRcdFx0XHRcdHJldHVybiBjeTtcbiAgICAgICAgXHRcdFx0XHR9KVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgIFx0XHRcdFx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywxKVxuICAgIFx0XHRcdFx0XHRcdC5hdHRyKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuV2hpdGUpKVxuICAgIFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBkID0+IHtcbiAgICAgICAgICBcdFx0XHRcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdGF0dHJzLmZvY3Vzc2VkID0gZDtcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdHNlbGVjdEFsbCgpO1xuICAgICAgICAgIFx0XHRcdFx0XHRcdFx0YXR0cnMuZm9jdXNzZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIFx0dGhpcy5yZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgXG4gICAgXHRcbiAgICBcdFx0LyogQ1JFQVRFIENFTlRFUiBDSVJDTEUgKi9cbiAgICAgICBpbm5lclJhZGl1cyA9IHkoMC4zMzMzMzMzKSBcbiAgICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWdyb3VwLW5vZGVzJylcblxuICAgICAgICBjZW50ZXJHcm91cC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnY2VudGVyLWNpcmNsZS1ub2RlcycpXG4gICAgICAgICAgICAuYXR0cignY3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywwKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSk7XG4gICAgICAgIFxuICAgIFx0XHRmbyA9IGNlbnRlckdyb3VwXG4gICAgICAgICAgICAuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgLWlubmVyUmFkaXVzKVxuICAgICAgICBcdFx0LmF0dHIoJ3dpZHRoJywgIGlubmVyUmFkaXVzKjIpXG4gIFx0XHRcdFx0XHQuYXR0cignaGVpZ2h0JywgIGlubmVyUmFkaXVzKjIpO1xuICAgIFxuICAgICAgICB0ZXh0Q2lyY2xlID0gZm9cbiAgICAgICAgXHRcdC5hcHBlbmQoJ3hodG1sOnAnKVxuICAgIFx0XHRcdFx0XHQuYXR0cignaWQnLCAnYy10ZXh0JylcbiAgICAgICAgICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQpXG4gICAgXHRcdFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMuY2VudGVyVGV4dFNpemUpO1xuICAgIFxuICAgICAgICBmby5hdHRyKCd5JywgLXRleHRDaXJjbGUubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gICAgXG4gICAgXG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLm9uY2xpY2sgPSAoKSA9PiBmb2N1c09uKCk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZCk7XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5jb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9jdXNPbihkID0geyB4MDogMCwgeDE6IDEsIHkwOiAwLCB5MTogMSB9KSB7XG4gICAgICAgICAgICAvLyBSZXNldCB0byB0b3AtbGV2ZWwgaWYgbm8gZGF0YSBwb2ludCBzcGVjaWZpZWRcblxuICAgICAgICAgIFx0aWYgKGQueDA9PTAgJiYgZC54MT09MSAmJiBkLnkwID09IDAgJiYgZC55MT09MSl7XG4gICAgICAgICAgICAgIGF0dHJzLmZvY3Vzc2VkID0gbnVsbDtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkKTtcbiAgICAgICBcdFx0XHRcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5jb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5EaXNhYmxlZF9UZXh0KTtcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0LWFsbC1jaXJjbGVzJykpe1xuICAgICAgICAgICAgICAgXHRlbGVtLnN0eWxlLmRpc3BsYXk9ICdibG9jayc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF0dHJzLmZvY3Vzc2VkID0gZDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmNvbG9yID0nd2hpdGUnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZW50ZXItZ3JvdXAtbm9kZXMnKS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtZ3JvdXAnKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgICBcdGZvciAoY29uc3QgZWxlbSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QtYWxsLWNpcmNsZXMnKSl7XG4gICAgICAgICAgICAgICBcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5PSAnbm9uZSc7XG4gICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2l0aW9uID0gc3ZnLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAgICAgLnR3ZWVuKCdzY2FsZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeGQgPSBkMy5pbnRlcnBvbGF0ZSh4LmRvbWFpbigpLCBbZC54MCwgZC54MV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWQgPSBkMy5pbnRlcnBvbGF0ZSh5LmRvbWFpbigpLCBbZC55MCwgMV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9PiB7IHguZG9tYWluKHhkKHQpKTsgeS5kb21haW4oeWQodCkpOyB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgXHRpZiAoYXR0cnMuZm9jdXNzZWQpe1xuICAgICAgICAgICAgICBcdGxldCBjZW50ZXIgPSB0cmFuc2l0aW9uLnNlbGVjdEFsbCgnZy5zbGljZScpXG4gICAgICAgICAgXHRcdFx0XHRcdC5maWx0ZXIoKG4pID0+IG4uZGF0YS5uYW1lID09IGQuZGF0YS5uYW1lKVxuICAgICAgICAgICAgICAgIGNlbnRlci5zZWxlY3QoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLlNsYXRlX0dyZXkpKVxuICAgICAgICAgICAgXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMHB4JylcbiAgICAgICAgICAgICAgXHRjZW50ZXIuc2VsZWN0KCcuYXJjLXRleHQnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLldoaXRlKSlcbiAgICAgICAgICAgICAgXHRjZW50ZXIuc2VsZWN0KCcuYXJjLXRleHQxJylcbiAgICAgICAgICAgICAgXHRcdC5hdHRyKCdmaWxsJywgIG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5XaGl0ZSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgc2xpY2VzID0gdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ2cuc2xpY2UnKVxuICAgICAgICAgICAgICAgIHNsaWNlcy5zZWxlY3QoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgIG4gPT4gbmMucmdiYU9ialRvQ29sb3Iobi5kYXRhLmNvbG9yIHx8IG4ucGFyZW50LmRhdGEuY29sb3IpKVxuICAgICAgICAgICAgICBcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4gZC5kYXRhLm5hbWUgPT0gJycgPyAnMHB4JyA6IGF0dHJzLnVuY2xpY2tlZFdpZHRoKVxuICAgICAgICAgICAgICBcdHNsaWNlcy5zZWxlY3QoJy5hcmMtdGV4dCcpXG4gICAgICAgICAgICAgIFx0XHQuYXR0cignZmlsbCcsICBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuQmxhY2spKVxuICAgICAgICAgICAgICBcdHNsaWNlcy5zZWxlY3QoJy5hcmMtdGV4dDEnKVxuICAgICAgICAgICAgICBcdFx0LmF0dHIoJ2ZpbGwnLCAgbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJsYWNrKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcdFxuICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBkID0+ICgpID0+IGFyYyhkKSk7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb24uc2VsZWN0QWxsKCdwYXRoLmhpZGRlbi1hcmMnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2QnLCBkID0+ICgpID0+IG1pZGRsZUFyY0xpbmUoZCkpO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uLnNlbGVjdEFsbCgnLmFyYy10ZXh0JylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkaXNwbGF5JywgZCA9PiAoKSA9PiB0ZXh0Rml0cyhkKSA/IG51bGwgOiAnbm9uZScpO1xuICAgICAgICAgXHRcdFxuICAgICAgICAgIFx0dHJhbnNpdGlvbi5zZWxlY3RBbGwoJy5hcmMtdGV4dDEnKVxuICAgICAgICAgICAgICAgIC5hdHRyVHdlZW4oJ2Rpc3BsYXknLCBkID0+ICgpID0+IHRleHRGaXRzKGQpID8gbnVsbCA6ICdub25lJyk7XG5cbiAgICAgICAgICAgIG1vdmVTdGFja1RvRnJvbnQoZCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVTdGFja1RvRnJvbnQoZWxEKSB7XG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbCgnLnNsaWNlJykuZmlsdGVyKGQgPT4gZCA9PT0gZWxEKVxuICAgICAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5wYXJlbnQpIHsgbW92ZVN0YWNrVG9Gcm9udChkLnBhcmVudCk7IH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICBcbiAgICBcblxuXG4gICAgXG4gICAgXG4gICAgIFx0cmV0dXJuIHRoaXM7XG4gIH1cbiAgXG59IiwiaW1wb3J0IHsgaW5pdGlhbE5vZGVzLCBjb2xvcnMgfSBmcm9tICcuL25vZGVzJztcblxuZXhwb3J0IGNsYXNzIFJpbmdEaWFncmFtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9FeHBvc2VkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgaWQ6IGBJRCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCwgLy8gSWQgZm9yIGV2ZW50IGhhbmRsaW5nc1xuICAgICAgd2lkdGg6IDMwMDAsXG4gICAgICBoZWlnaHQ6IDMwMDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBleHRlbmRlZExpbmVMZW5ndGg6IDQwLFxuICAgICAgdGV4dERpc3RhbmNlOiAxNSxcbiAgICAgIG91dGVyVGV4dFNpemU6ICcyNXB4JyxcbiAgICAgIGF0dHJpYnV0ZUluZGV4OiBudWxsLFxuICAgICAgaGlzdG9yeTogW10sXG4gICAgICBkaXNwbGF5Tm9kZXM6IG51bGwsXG4gICAgICB2YWx1ZXM6IG51bGwsXG4gICAgICBjaXJjbGVBcnJheTogW10sXG4gICAgICBsaW5lQXJyYXk6IFtdLFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgYXJjczogbnVsbCxcbiAgICAgIHRleHRDaXJjbGVzQ2F0ZWdvcnk6IFtdLFxuICAgICAgdGV4dENpcmNsZXNDb3VudDogW10sXG4gICAgICB0ZXh0Q2lyY2xlc1BlcmNlbnQ6IFtdLFxuICAgICAgdGl0bGVUZXh0U2l6ZTogJzI1cHgnLFxuICAgICAgdGl0bGVUZXh0SGVpZ2h0OiA2MCxcbiAgICAgIGlzQ29tcGFyZU1vZGU6IGZhbHNlLFxuICAgICAgbGVnZW5kV2lkdGg6IDE1MCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSksXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDE6ICdDYXRlZ29yeScsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDI6ICcjIG9mIFN0dWRlbnRzJyxcbiAgICAgIHBsYWNlaG9sZGVySW5uZXJUZXh0MzogJyUgaW4gR3JvdXAnLFxuICAgICAgY2hhbmdlU2NhbGU6IGZhbHNlLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuXG4gICAgLy9nZXQgYXR0cmlidXRlcyBtZXRob2RcbiAgICB0aGlzLmdldENoYXJ0U3RhdGUgPSAoKSA9PiBhdHRycztcblxuICAgIC8vZ2V0dGVyICYgc2V0dGVyXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgXG4gIHJnYmFPYmpUb0NvbG9yKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgfSkge1xuICAgIHJldHVybiBgcmdiYSgke3JlZH0sJHtncmVlbn0sJHtibHVlfSwke2FscGhhfSlgO1xuICB9XG5cblxuICAvKiBSZXR1cm4gd2lkdGggYW5kIGhlaWdodCBvZiBzdmcgZWxlbWVudCAqL1xuICBjb21wdXRlU2NyZWVuRGltZW5zaW9ucygpe1xuICAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpOyBcbiAgXHQgY29uc3QgY29udGFpbmVyID0gYXR0cnMuY29udGFpbmVyXG4gICAgICAubm9kZSgpXG4gICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gK2NvbnRhaW5lci5oZWlnaHQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSArY29udGFpbmVyLndpZHRoO1xuICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyV2lkdGggLSBhdHRycy5sZWdlbmRXaWR0aDsgLy9taW51cyBiZWNhdXNlIG9mIGxlZ2VuZFxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodCAtIGF0dHJzLnRpdGxlVGV4dEhlaWdodDtcbiAgICByZXR1cm4gW3dpZHRoLCBoZWlnaHRdO1xuICB9XG4gIFxuICAvKiBHaXZlbiBzY3JlZW4gd2lkdGgsIGhlaWdodCBhbmQgbnVtYmVyIG9mIGFyY3MsIHJldHVybiBhcmMgd2lkdGgsIGlubmVycmFkaXVzIGFuZCB0ZXh0IHNpemUqL1xuICBjb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHgsIHksIG51bUFyY3MpIHsgXG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB0ZXh0SGVpZ2h0T2Zmc2V0ID0gNTA7XG5cbiAgICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSAtIHRleHRIZWlnaHRPZmZzZXQpO1xuICAgIGxldCBhcmNXaWR0aCA9IG1pbiAvICgyICogbnVtQXJjcyArIDcpOyAvL21pbiA9IDIqbnVtQXJjcyphcmNXaWR0aCArIDIqaW5uZXJSYWRpdXMsIGlubmVyUmFkaXVzID0gMyphcmNXaWR0aFxuICAgIGxldCBpbm5lclJhZGl1cyA9IDMgKiBhcmNXaWR0aDtcblxuICAgIGxldCBtdWx0aXBsaWVyID0gMS4yO1xuICAgIGxldCBuID0gMTM7IC8vJ2ludGVybmF0aW9uYWwnIHdpdGggMTMgbGV0dGVycyBpcyBsb25nZXN0IHdvcmQgaW4gZGl2ZXJzaXR5IGF0dHJpYnV0ZXNcbiAgICBsZXQgaW5uZXJUZXh0U2l6ZSA9IChtdWx0aXBsaWVyICogKDIgKiBpbm5lclJhZGl1cykpIC8gbiArICdweCc7XG4gICAgcmV0dXJuIFthcmNXaWR0aCwgaW5uZXJSYWRpdXMsIGlubmVyVGV4dFNpemVdO1xuICB9XG5cbiAgLyogR2l2ZW4gc2NyZWVuIHdpZHRoLCBoZWlnaHQgYW5kIG51bWJlciBvZiBzcXVhcmVzLCByZXR1cm4gcm93cywgY29sdW1ucyBhbmQgc3F1YXJlIHNpemUgKi9cbiAgY29tcHV0ZUNlbGxEaW1lbnNpb25zKHgsIHksIG4pIHtcbiAgICAvLyBDb21wdXRlIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zLCBhbmQgY2VsbCBzaXplXG4gICAgbGV0IHJhdGlvID0geCAvIHk7XG4gICAgbGV0IG5jb2xzX2Zsb2F0ID0gTWF0aC5zcXJ0KG4gKiByYXRpbyk7XG4gICAgbGV0IG5yb3dzX2Zsb2F0ID0gbiAvIG5jb2xzX2Zsb2F0O1xuXG4gICAgLy8gRmluZCBiZXN0IG9wdGlvbiBmaWxsaW5nIHRoZSB3aG9sZSBoZWlnaHRcbiAgICBsZXQgbnJvd3MxID0gTWF0aC5jZWlsKG5yb3dzX2Zsb2F0KTtcbiAgICBsZXQgbmNvbHMxID0gTWF0aC5jZWlsKG4gLyBucm93czEpO1xuICAgIHdoaWxlIChucm93czEgKiByYXRpbyA8IG5jb2xzMSkge1xuICAgICAgbnJvd3MxKys7XG4gICAgICBuY29sczEgPSBNYXRoLmNlaWwobiAvIG5yb3dzMSk7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUxID0geSAvIG5yb3dzMTtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgd2lkdGhcbiAgICBsZXQgbmNvbHMyID0gTWF0aC5jZWlsKG5jb2xzX2Zsb2F0KTtcbiAgICBsZXQgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIHdoaWxlIChuY29sczIgPCBucm93czIgKiByYXRpbykge1xuICAgICAgbmNvbHMyKys7XG4gICAgICBucm93czIgPSBNYXRoLmNlaWwobiAvIG5jb2xzMik7XG4gICAgfVxuICAgIGxldCBjZWxsX3NpemUyID0geCAvIG5jb2xzMjtcblxuICAgIC8vIEZpbmQgdGhlIGJlc3QgdmFsdWVzXG4gICAgbGV0IG5yb3dzLCBuY29scywgY2VsbF9zaXplO1xuICAgIGlmIChjZWxsX3NpemUxIDwgY2VsbF9zaXplMikge1xuICAgICAgbnJvd3MgPSBucm93czI7XG4gICAgICBuY29scyA9IG5jb2xzMjtcbiAgICAgIGNlbGxfc2l6ZSA9IGNlbGxfc2l6ZTI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5yb3dzID0gbnJvd3MxO1xuICAgICAgbmNvbHMgPSBuY29sczE7XG4gICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUxO1xuICAgIH1cblxuICAgIHJldHVybiBbY2VsbF9zaXplLCBucm93cywgbmNvbHNdO1xuICB9XG5cbiAgLyogRmV0Y2hpbmcgZGF0YSBhbmQgc2V0dGluZyB1cCBzdmcgY29udGFpbmVyICovXG4gIGFzeW5jIHNldHVwKHVybCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvL2xvYWQgZGF0YSBzeW5jaHJvbm91c2x5XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGQzLmNzdih1cmwpO1xuXG4gICAgYXR0cnMuYXR0cmlidXRlSW5kZXggPSBkYXRhLmNvbHVtbnM7XG5cbiAgICAvL2NvbnZlcnQgZGF0YSB0byBvYmplY3QgZm9ybWF0XG4gICAgYXR0cnMuZGF0YSA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG9iaiwgaSkge1xuICAgICAgbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcblxuICAgICAgdmFsdWVzLnBvcCgpO1xuXG4gICAgICBtYXBbJycuY29uY2F0KHZhbHVlcyldID0gb2JqLkNvdW50O1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG5cbiAgICAvLyBzZXQgdXAgY29udGFpbmVyXG4gICAgYXR0cnMuY29udGFpbmVyID0gZDMuc2VsZWN0KGF0dHJzLmNvbnRhaW5lcilcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpO1xuXHRcdFxuICAgIC8vIHNldHRpbmcgdXAgY29tcGFyZSBidXR0b25cbiAgICBjb25zdCB0b2dnbGVDb21wYXJlID0gKCkgPT4ge1xuICAgICAgYXR0cnMuaXNDb21wYXJlTW9kZSA9ICFhdHRycy5pc0NvbXBhcmVNb2RlO1xuICAgICAgc2IudXBkYXRlKCk7XG4gICAgfTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5vbmNsaWNrID0gdG9nZ2xlQ29tcGFyZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcblxuICByZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyl7XG4gIFx0XHRsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcbiAgICBcdGxldCBzYiA9IHRoaXM7XG5cbiAgICBcdC8qIFByZXBhcmluZyBkYXRhICovXG4gICAgXHRhdHRycy5pc0NvbXBhcmVNb2RlID0gZmFsc2U7XG4gICAgXHRjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB0aGlzLmNvbXB1dGVTY3JlZW5EaW1lbnNpb25zKCk7XG4gICAgXHRjb25zdCBbY2VsbFNpemUsIHJvd3MsIGNvbHNdID0gdGhpcy5jb21wdXRlQ2VsbERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCwgMSk7XG4gICAgXHRhdHRycy5wcmV2aW91c0NlbGxTaXplID0gY2VsbFNpemU7XG4gICAgXG4gICBcdCBcdC8vIFNvcnRpbmcgb3JkZXJlZCBhdHRyaWJ1dGVzXG4gICAgICBjb25zdCBzb3J0VmFsdWVzID0gKHZhbHVlcykgPT4ge1xuICAgICAgXHRPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goZHYgPT4ge1xuICAgICAgICAgIGlmIChpbml0aWFsTm9kZXNbZHZdLm9yZGVyZWQpe1xuICAgICAgICAgICAgdmFsdWVzW2R2XS5zb3J0KChlMSwgZTIpID0+IChcbiAgICAgICAgICAgICAgaW5pdGlhbE5vZGVzW2R2XVsnY29sbGVjdGVkVmFsdWVzJ10uaW5kZXhPZihlMSkgLSBcbiAgICAgICAgICAgICAgaW5pdGlhbE5vZGVzW2R2XVsnY29sbGVjdGVkVmFsdWVzJ10uaW5kZXhPZihlMilcbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuICAgICAgXHR9KTtcbiAgICAgIH1cbiAgICAgIHNvcnRWYWx1ZXMoYWNhZGVtaWNWYWx1ZXMpO1xuICAgIFx0c29ydFZhbHVlcyhkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgXG4gICAgXG4gICAgICAvLyBQcmVwYXJpbmcgc2xpY2VzXG4gICAgIGNvbnN0IGNhcnRlc2lhbiA9ICguLi5hKSA9PiBhLnJlZHVjZSgoYSwgYikgPT5hLmZsYXRNYXAoKGQpID0+IGIubWFwKChlKSA9PiBbZCwgZV0uZmxhdCgpKSkpO1xuICAgICAgbGV0IHNsaWNlcyA9IGNhcnRlc2lhbihcbiAgICAgICAgYWNhZGVtaWNWYWx1ZXNbJ0FjYWRlbWljIFllYXInXSxcbiAgICAgICAgYWNhZGVtaWNWYWx1ZXMuRGVncmVlLFxuICAgICAgICBhY2FkZW1pY1ZhbHVlcy5GYWN1bHR5LFxuICAgICAgICBhY2FkZW1pY1ZhbHVlc1snU3R1ZHkgU3RhdHVzJ11cbiAgICAgICk7XG4gICAgICBcbiAgICAgICBjb25zdCBtYWtlUXVlcnkgPSAoc2xpY2UsIGRpdmVyc2l0eUF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgbGV0IHF1ZXJ5ID0gWy4uLnNsaWNlXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGl2ZXJzaXR5VmFsdWVzKVxuICAgICAgICAgICAgcXVlcnkucHVzaChwcm9wICE9PSBkaXZlcnNpdHlBdHRyID8gJ1RvdGFsJyA6IHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH07XG4gICAgICBcbiAgICAgICBhdHRycy5waWVzID0gW107XG4gICAgXG4gICAgXHRcdGNvbnN0IG1ha2VMYWJlbCA9ICh3b3JkcykgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKCh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaWx0ZXJlZC5qb2luKCdcXHJcXG4nKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgXHQgYXR0cnMuc2xpY2VzID0gc2xpY2VzLm1hcChtYWtlTGFiZWwpO1xuICAgIFx0IGF0dHJzLnJpbmdzID0gZGl2ZXJzaXR5VmFsdWVzO1xuICAgIFx0IGF0dHJzLnRvdGFsU2xpY2VzID0gc2xpY2VzLmxlbmd0aDtcbiAgICBcdCBhdHRycy50b3RhbFJpbmdzID0gT2JqZWN0LnZhbHVlcyhkaXZlcnNpdHlWYWx1ZXMpLmZpbHRlcihhcnIgPT4gYXJyLmxlbmd0aCA+IDApLmxlbmd0aDtcblx0XHRcdCBhdHRycy5hY2FkZW1pY1ZhbHVlcyA9IGFjYWRlbWljVmFsdWVzO1xuICAgIFxuICAgICAgICBsZXQgcmluZ0NvdW50ID0gMDtcbiAgICAgICAgT2JqZWN0LmtleXMoZGl2ZXJzaXR5VmFsdWVzKS5mb3JFYWNoKChkdikgPT4ge1xuICAgICAgICAgIFx0c2xpY2VzLmZvckVhY2goKHNsaWNlLCBzbGljZUNvdW50KSA9PiB7XG4gICAgICAgICAgXHRcdGxldCB2YWx1ZXMgPSBbLi4uZGl2ZXJzaXR5VmFsdWVzW2R2XV07XG4gICAgICAgICAgICAgXHR2YWx1ZXMgPSB2YWx1ZXMubWFwKHYgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXBcIiA6IGR2LFxuICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IHYsXG4gICAgICAgICAgICAgICAgICAgIFwicXVlcnlcIjogbWFrZVF1ZXJ5KHNsaWNlLCBkdiwgdiksXG4gICAgICAgICAgICAgICAgICAgIFwic2xpY2VOdW1iZXJcIjogc2xpY2VDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgXCJyaW5nTnVtYmVyXCI6IHJpbmdDb3VudFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgXHRhdHRycy5waWVzLnB1c2godmFsdWVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgaWYgKGRpdmVyc2l0eVZhbHVlc1tkdl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgIHJpbmdDb3VudCsrO1xuICAgICAgICAgICB9XG4gICAgICAgfSk7XG4gIFxuXG4gICAgXG4gICAgXHR0aGlzLnVwZGF0ZSgpO1xuICB9XG4gIFxuICB1cGRhdGUoKXtcbiAgICBcdGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cblx0XHRcdGNvbnN0IHNiID0gdGhpcztcbiAgICBcbiAgICBcdC8vIHJlcHVycG9zaW5nIGJhY2sgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgIFx0aWYgKGF0dHJzLmhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBiYWNrID0gKCkgPT4ge2F0dHJzLnBpZXMgPSBhdHRycy5oaXN0b3J5LnBvcCgpOyBzYi51cGRhdGUoKX07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBiYWNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uJykub25jbGljayA9IGF0dHJzLmRpc3BsYXlOb2RlcztcbiAgICAgIH1cbiAgICBcbiAgICBcdGNvbnN0IHRvdGFsU2xpY2VzID0gYXR0cnMudG90YWxTbGljZXM7XG4gICAgXHRjb25zdCB0b3RhbFJpbmdzID0gYXR0cnMudG90YWxSaW5ncztcbiAgICBcdGNvbnN0IGlzQ29tcGFyZU1vZGUgPSBhdHRycy5pc0NvbXBhcmVNb2RlO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuaW5uZXJIVE1MID0gaXNDb21wYXJlTW9kZSA/ICdDb25qb2luJyA6ICdDb21wYXJlJzsgXG4gICAgXG4gICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB0aGlzLmNvbXB1dGVTY3JlZW5EaW1lbnNpb25zKCk7XG4gICAgXHRjb25zdCBbY2VsbFNpemUsIHJvd3MsIGNvbHNdID0gdGhpcy5jb21wdXRlQ2VsbERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCwgKGlzQ29tcGFyZU1vZGUpID8gdG90YWxTbGljZXMgOiAxKTtcbiAgICBcdGNvbnN0IFthcmNXaWR0aCwgaW5uZXJSYWRpdXMsIGlubmVyVGV4dFNpemVdID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKHdpZHRoLCBoZWlnaHQsIHRvdGFsUmluZ3MpO1xuICAgIFx0XG4gICAgXHRjb25zdCB3aGl0ZXNwYWNlV2lkdGggPSB3aWR0aCAtIGNvbHMgKiBjZWxsU2l6ZTtcbiAgICAgIGNvbnN0IHdoaXRlc3BhY2VIZWlnaHQgPSBoZWlnaHQgLSByb3dzICogY2VsbFNpemU7XG4gICAgXG4gICAgXHRjb25zdCBwaWUgPSBkMy5waWUoKS52YWx1ZShkID0+IGF0dHJzLmRhdGFbZC5xdWVyeV0pLnNvcnQobnVsbCk7XG4gICAgXG4gICAgICBjb25zdCBnZW5lcmF0ZVBpZSA9IChkLCB0eXBlKSA9PiB7XG4gICAgICAgIGxldCB0b3RhbFNsaWNlc0xvY2FsID0gaXNDb21wYXJlTW9kZSA/IDEgOiB0b3RhbFNsaWNlcztcbiAgICAgICAgbGV0IHNsaWNlTnVtYmVyID0gaXNDb21wYXJlTW9kZT8gMCA6IGRbMF0uc2xpY2VOdW1iZXI7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcGllXG4gICAgICAgICAgLnN0YXJ0QW5nbGUoc2xpY2VOdW1iZXIgKiAyICogTWF0aC5QSSAvIHRvdGFsU2xpY2VzTG9jYWwpXG4gICAgICAgICAgLmVuZEFuZ2xlKChzbGljZU51bWJlciArIDEpICogMiAqIE1hdGguUEkgLyB0b3RhbFNsaWNlc0xvY2FsKShkKTtcbiAgICAgIH1cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0QXJjKGQpe1xuICAgICAgXHRyZXR1cm4gZDMuYXJjKClcbiAgICAgICAgICAuaW5uZXJSYWRpdXMoaW5uZXJSYWRpdXMgKyBhcmNXaWR0aCAqIGQuZGF0YS5yaW5nTnVtYmVyKVxuICAgICAgICAgIC5vdXRlclJhZGl1cyhpbm5lclJhZGl1cyArIGFyY1dpZHRoICogKGQuZGF0YS5yaW5nTnVtYmVyICsgMSkpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQXJjKGQpe1xuICAgICAgXHRyZXR1cm4gZ2V0QXJjKGQpKGQpO1xuICAgICAgfVxuICAgIFxuXG4gICAgICBmdW5jdGlvbiBhcmNUd2VlbihhKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aGlzLl9jdXJyZW50IHx8IGE7XG4gICAgICAgIGxldCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgYSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDApO1xuXHRcdFx0XHRsZXQgYXJjVCA9IGdldEFyYyhhKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICByZXR1cm4gYXJjVChpKHQpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIFx0Y29uc3QgZ2V0VHJhbnNmb3JtYXRpb24gPSAoc2xpY2VOdW1iZXIpID0+IHtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGgubWluKHBhcnNlSW50KHNsaWNlTnVtYmVyIC9jb2xzKSwgcm93cy0xKTsvLyBBY2NvdW50aW5nIGZvciBjb25qb2luZWQgY2FzZVxuICAgICAgICBsZXQgY29sID0gc2xpY2VOdW1iZXIlY29scztcblxuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9XG4gICAgICAgICAgY2VsbFNpemUgLyAyICtcbiAgICAgICAgICBjb2wgKiAgY2VsbFNpemUgK1xuICAgICAgICAgICgoY29sICsgMSkgKiB3aGl0ZXNwYWNlV2lkdGgpIC8gKGNvbHMgKyAxKTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVkgPVxuICAgICAgICAgIGF0dHJzLnRpdGxlVGV4dEhlaWdodCArXG4gICAgICAgICAgICBjZWxsU2l6ZSAvIDIgK1xuICAgICAgICAgICAgcm93ICogY2VsbFNpemUgK1xuICAgICAgICAgICAgKChyb3cgKyAxKSAqIHdoaXRlc3BhY2VIZWlnaHQpIC8gKHJvd3MgKyAxKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzY2FsZSA9IE1hdGgubWluKDEsIGNlbGxTaXplL2F0dHJzLnByZXZpb3VzQ2VsbFNpemUpO1xuXG5cdFx0XHRcdHJldHVybiBbdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGVdO1xuICAgICAgfVxuICAgICAgXG4gICAgXHQvLyBNYWtlIHBpZSBncm91cHNcbiAgICBcdGxldCBwaWVHcm91cHMgPSBhdHRycy5jb250YWluZXJcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHQuc2VsZWN0QWxsKCdnLnBpZScpXG4gICAgICBcdFx0XHRcdFx0XHRcdFx0LmRhdGEoYXR0cnMucGllcylcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHQuam9pbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyID0+IGVudGVyLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBcdC5hdHRyKFwiY2xhc3NcIiwgXCJwaWVcIilcbiAgICAgICAgICBcdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdGNvbnN0IFt0eCwgdHksIHNdID0gZ2V0VHJhbnNmb3JtYXRpb24oZFswXS5zbGljZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdHJldHVybiBgdHJhbnNsYXRlKCR7dHh9LCR7dHl9KSBzY2FsZSgke3N9KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgPT4gdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBcdC50cmFuc2l0aW9uKFwicGllVXBkYXRlVHJcIikuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRjb25zdCBbdHgsIHR5LCBzXSA9IGdldFRyYW5zZm9ybWF0aW9uKGRbMF0uc2xpY2VOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gYHRyYW5zbGF0ZSgke3R4fSwke3R5fSkgc2NhbGUoJHtzfSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCA9PiBleGl0LnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICBcbiAgICBcdGNvbnN0IGZpeENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBjYXRlZ29yeS5yZXBsYWNlKC9bKz08XS9nLCBcIi1cIik7XG4gICAgXHRcdGlmICghcmVzdWx0WzBdLm1hdGNoKC9bYS16QS1aXS8pKVxuICAgICAgICAgXHRyZXN1bHQ9IFwiX1wiK3Jlc3VsdDsgXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYXJjc1xuICAgICAgcGllR3JvdXBzLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgLmRhdGEoZ2VuZXJhdGVQaWUsIGQ9Pntjb25zb2xlLmxvZyhkKTsgcmV0dXJuIGQuZGF0YS5yaW5nTnVtYmVyICsgZC5kYXRhLnNsaWNlTnVtYmVyO30pXG4gICAgICAgIC5qb2luKFxuICAgICAgICAgIGVudGVyID0+IHtcbiAgICAgICAgXHRcdFx0XHRsZXQgYXJjcyA9IGVudGVyXG4gICAgICAgICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgXHRcdFx0XHRcdC5hdHRyKCdzdHJva2UnLCAnd2hpdGUnKVxuICAgICAgICBcdFx0XHRcdFx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsICcxcHgnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKVxuICAgICAgICBcdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgZCA9PiBmaXhDYXRlZ29yeShkLmRhdGEuY2F0ZWdvcnkpKVxuICAgICAgICAgIFx0XHRcdFx0LmF0dHIoJ2ZpbGwnLCBkID0+IGF0dHJzLmNvbG9yW2QuZGF0YS5jYXRlZ29yeV0pXG4gICAgICAgICAgXHRcdFx0XHQuYXR0cignZCcsIGdlbmVyYXRlQXJjKVxuICAgICAgICBcdFx0XHRcdFx0Lm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAvL2hpZ2hsaWdodCBhcmNcbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpXG5cbiAgICAgICAgICAgICAgICAgICAgLy9oaWdobGlnaHQgbGVnZW5kIFxuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgZC5kYXRhLmNhdGVnb3J5ICsgXCJyZWN0J11cIilcbiAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUNpcmNsZVRleHQgPSAoZCwgc2xpY2VOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNlbnRlckdyb3VwID0gXCIjY2VudGVyXCIrc2xpY2VOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5jYXRlZ29yeVwiKS50ZXh0KCcnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5udW1fc3R1ZGVudHNcIikudGV4dCgnTm8gU3R1ZGVudHMnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5wZXJjZW50X2luX2dyb3VwXCIpLnRleHQoJzAlJykuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNsaWNlQXJjTGVuZ3RoID0gKE1hdGguUEkqMikgLyAoYXR0cnMuaXNDb21wYXJlTW9kZSA/IDEgOiB0b3RhbFNsaWNlcyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwZXJjZW50ID0gKGQuZW5kQW5nbGUtZC5zdGFydEFuZ2xlKS9zbGljZUFyY0xlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5jYXRlZ29yeVwiKS50ZXh0KChkLmRhdGEuZ3JvdXAgPT09ICdBZ2UnID8gJ0FnZTogJyA6ICcnKSArIGQuZGF0YS5jYXRlZ29yeSkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KGNlbnRlckdyb3VwK1wiPiAubnVtX3N0dWRlbnRzXCIpLnRleHQoKGQudmFsdWUgPCA1KSA/ICc8NScgOiBkLnZhbHVlKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5wZXJjZW50X2luX2dyb3VwXCIpLnRleHQoTnVtYmVyKChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDEpKSArICclJykuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vdXBkYXRlIGNpcmNsZSB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5pc0NvbXBhcmVNb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCJwYXRoLlwiICsgZml4Q2F0ZWdvcnkoZC5kYXRhLmNhdGVnb3J5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDaXJjbGVUZXh0KGQsIGQuZGF0YS5zbGljZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDaXJjbGVUZXh0KGQsIGNpcmNsZUFycmF5Lmxlbmd0aC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy91bmhpZ2hsaWdodCBhcmNcbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vdW5oaWdobGlnaHQgbGVnZW5kXG4gICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBkLmRhdGEuY2F0ZWdvcnkgKyBcInJlY3QnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9yZXNldCBjaXJjbGUgdGV4dFxuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuY2VudGVyID4gLmNhdGVnb3J5XCIpLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKS5hdHRyKCdvcGFjaXR5JywgJzAuNScpO1xuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuY2VudGVyID4gLm51bV9zdHVkZW50c1wiKS50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MikuYXR0cignb3BhY2l0eScsICcwLjUnKTtcbiAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmNlbnRlciA+IC5wZXJjZW50X2luX2dyb3VwXCIpLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQzKS5hdHRyKCdvcGFjaXR5JywgJzAuNScpO1xuICAgICAgICAgICAgICAgIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsUmluZ3MgPD0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDYW5ub3QgZGlzcGxheSBtb3JlIGRldGFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhdHRycy5oaXN0b3J5LnB1c2goYXR0cnMucGllcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1BpZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGF0dHJzLnBpZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3UGllcyA9IG5ld1BpZXMuZmlsdGVyKHAgPT4gcFswXS5ncm91cCAhPSBkLmRhdGEuZ3JvdXApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByaW5nTnVtYmVyID0gZC5kYXRhLnJpbmdOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuYXR0cmlidXRlSW5kZXguaW5kZXhPZihkLmRhdGEuZ3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBuZXdQaWVzLmZvckVhY2gocCA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgIHAuZm9yRWFjaChzPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy5xdWVyeVtpbmRleF0gPSBkLmRhdGEuY2F0ZWdvcnk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMucmluZ051bWJlciA+IHJpbmdOdW1iZXIpIHMucmluZ051bWJlci09MTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnBpZXMgPSBuZXdQaWVzO1xuICAgICAgICAgICAgICAgICAgICBzYi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFyY3MudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMSlcbiAgICAgICAgICAgIFx0XHRyZXR1cm4gYXJjcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB1cGRhdGUgPT4gdXBkYXRlLmF0dHIoJ2NsYXNzJywgZCA9PiBmaXhDYXRlZ29yeShkLmRhdGEuY2F0ZWdvcnkpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsIGQgPT4gYXR0cnMuY29sb3JbZC5kYXRhLmNhdGVnb3J5XSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCBnZW5lcmF0ZUFyYylcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IGFyY1xuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1JylcblxuICAgICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IGxlZ2VuZCBcbiAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgZC5kYXRhLmNhdGVnb3J5ICsgXCJyZWN0J11cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVDaXJjbGVUZXh0ID0gKGQsIHNsaWNlTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VudGVyR3JvdXAgPSBcIiNjZW50ZXJcIitzbGljZU51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudD09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5jYXRlZ29yeVwiKS50ZXh0KCcnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChjZW50ZXJHcm91cCtcIj4gLm51bV9zdHVkZW50c1wiKS50ZXh0KCdObyBTdHVkZW50cycpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KGNlbnRlckdyb3VwK1wiPiAucGVyY2VudF9pbl9ncm91cFwiKS50ZXh0KCcwJScpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2xpY2VBcmNMZW5ndGggPSAoTWF0aC5QSSoyKSAvIChhdHRycy5pc0NvbXBhcmVNb2RlID8gMSA6IHRvdGFsU2xpY2VzKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGVyY2VudCA9IChkLmVuZEFuZ2xlLWQuc3RhcnRBbmdsZSkvc2xpY2VBcmNMZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5jYXRlZ29yeVwiKS50ZXh0KChkLmRhdGEuZ3JvdXAgPT09ICdBZ2UnID8gJ0FnZTogJyA6ICcnKSArIGQuZGF0YS5jYXRlZ29yeSkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QoY2VudGVyR3JvdXArXCI+IC5udW1fc3R1ZGVudHNcIikudGV4dCgoZC52YWx1ZSA8IDUpID8gJzw1JyA6IGQudmFsdWUpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2VsZWN0KGNlbnRlckdyb3VwK1wiPiAucGVyY2VudF9pbl9ncm91cFwiKS50ZXh0KE51bWJlcigocGVyY2VudCAqIDEwMCkudG9GaXhlZCgxKSkgKyAnJScpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBjaXJjbGUgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5pc0NvbXBhcmVNb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcInBhdGguXCIgKyBmaXhDYXRlZ29yeShkLmRhdGEuY2F0ZWdvcnkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZWFjaChkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDaXJjbGVUZXh0KGQsIGQuZGF0YS5zbGljZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDaXJjbGVUZXh0KGQsIGNpcmNsZUFycmF5Lmxlbmd0aC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvL3VuaGlnaGxpZ2h0IGFyY1xuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbignNTAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpXG5cbiAgICAgICAgICAgICAgICAgICAgICAvL3VuaGlnaGxpZ2h0IGxlZ2VuZFxuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBkLmRhdGEuY2F0ZWdvcnkgKyBcInJlY3QnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vcmVzZXQgY2lyY2xlIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuY2VudGVyID4gLmNhdGVnb3J5XCIpLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKS5hdHRyKCdvcGFjaXR5JywgJzAuNScpO1xuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5jZW50ZXIgPiAubnVtX3N0dWRlbnRzXCIpLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQyKS5hdHRyKCdvcGFjaXR5JywgJzAuNScpO1xuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5jZW50ZXIgPiAucGVyY2VudF9pbl9ncm91cFwiKS50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MykuYXR0cignb3BhY2l0eScsICcwLjUnKTtcbiAgICAgICAgICAgICAgICAgIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxSaW5ncyA8PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ2Fubm90IGRpc3BsYXkgbW9yZSBkZXRhaWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnMuaGlzdG9yeS5wdXNoKGF0dHJzLnBpZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1BpZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGF0dHJzLnBpZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdQaWVzID0gbmV3UGllcy5maWx0ZXIocCA9PiBwWzBdLmdyb3VwICE9IGQuZGF0YS5ncm91cCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBsZXQgcmluZ051bWJlciA9IGQuZGF0YS5yaW5nTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuYXR0cmlidXRlSW5kZXguaW5kZXhPZihkLmRhdGEuZ3JvdXApO1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1BpZXMuZm9yRWFjaChwID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBwLmZvckVhY2gocz0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcy5xdWVyeVtpbmRleF0gPSBkLmRhdGEuY2F0ZWdvcnk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocy5yaW5nTnVtYmVyID4gcmluZ051bWJlcikgcy5yaW5nTnVtYmVyLT0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRycy5waWVzID0gbmV3UGllcztcbiAgICAgICAgICAgICAgICAgICAgICBzYi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbihcImFyY0ludFRyXCIpLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZCcsIGFyY1R3ZWVuKSxcbiAgICAgICAgICAgICAgICAgIGV4aXQgPT4gZXhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKGF0dHJzLmR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vLmVhY2goZnVuY3Rpb24oZCl7IHRoaXMuX2N1cnJlbnQgPSBkOyB9KVxuICAgICAgICAgIFxuICAgIFx0Ly8gTWFrZSBsaW5lc1xuICAgIFx0Y29uc3QgZ2V0Q2lyY2xlWCA9IChyYWRpYW5zLCByYWRpdXMpID0+IE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzO1xuICAgICAgY29uc3QgZ2V0Q2lyY2xlWSA9IChyYWRpYW5zLCByYWRpdXMpID0+IE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzO1xuICAgIFx0aWYgKHRvdGFsU2xpY2VzID4gMSl7XG4gICAgICAgIGNvbnN0IGdldFJhZGlhbnMgPSAoc2xpY2VDb3VudCkgPT4ge1xuICAgICAgICAgIGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyB0b3RhbFNsaWNlc1xuICAgICAgICAgIGlmICh0b3RhbFNsaWNlcyAlIDIgPT0gMSkgcmFkaWFucyArPSBNYXRoLlBJO1xuICAgICAgICAgIHJldHVybiByYWRpYW5zO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluZXMgPSBhdHRycy5jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbCgnZy5saW5lcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKFswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlciA9PiBlbnRlci5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5lcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdGlhbFNpemUgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR4ID0gaW5pdGlhbFNpemUgLyAyICArIHdoaXRlc3BhY2VXaWR0aCAvIDI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHkgPSBhdHRycy50aXRsZVRleHRIZWlnaHQgKyBpbml0aWFsU2l6ZSAvIDIgICsgd2hpdGVzcGFjZUhlaWdodC8gMjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7dHh9LCR7dHl9KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgPT4gdXBkYXRlLnRyYW5zaXRpb24oKS5kdXJhdGlvbihhdHRycy5kdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGlzQ29tcGFyZU1vZGUgPyAwIDogMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0ID0+IGV4aXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgIGxpbmVzLnJhaXNlKCk7XG4gICAgICAgIGNvbnN0IGxpbmVMZW5ndGggPSB0b3RhbFJpbmdzICogYXJjV2lkdGggKyBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgICAgIGNvbnN0IGxpbmVBcnJheSA9IEFycmF5LmZyb20oQXJyYXkoYXR0cnMudG90YWxTbGljZXMpLmtleXMoKSkubWFwKGdldFJhZGlhbnMpO1xuXG4gICAgICAgIGxpbmVzLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAgICAgICAgIC5kYXRhKGxpbmVBcnJheSlcbiAgICAgICAgICAgICAgLmpvaW4oXG4gICAgICAgICAgICAgICAgZW50ZXIgPT4gXG4gICAgICAgICAgICAgICAgICBlbnRlclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCdsaW5lJylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIHJhZGlhbnMgPT4gZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHJhZGlhbnMgPT4gZ2V0Q2lyY2xlWShyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIHJhZGlhbnMgPT4gZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cyArIGxpbmVMZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTInLCByYWRpYW5zID0+IGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMgKyBsaW5lTGVuZ3RoKSksXG4gICAgICAgICAgICAgICAgdXBkYXRlID0+IHVwZGF0ZVxuICAgICAgICAgIFx0XHRcdFx0XHQuYXR0cigneDEnLCByYWRpYW5zID0+IGdldENpcmNsZVgocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCByYWRpYW5zID0+IGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneDInLCByYWRpYW5zID0+IGdldENpcmNsZVgocmFkaWFucywgaW5uZXJSYWRpdXMgKyBsaW5lTGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgcmFkaWFucyA9PiBnZXRDaXJjbGVZKHJhZGlhbnMsIGlubmVyUmFkaXVzICsgbGluZUxlbmd0aCkpLFxuICAgICAgICAgICAgICAgIGV4aXQgPT4gZXhpdC5yZW1vdmUoKVxuICAgICAgICAgICAgICApO1xuICAgICAgfVxuIFxuIFx0XHRcdC8vIEFkZCBsYWJlbHNcbiAgICAgIGNvbnN0IGhhbGZTbGljZVJhZGlhbnMgPSBNYXRoLlBJIC8gdG90YWxTbGljZXM7XG4gICAgXHRjb25zdCB0ZXh0RGlzdGFuY2UgPSBhdHRycy50ZXh0RGlzdGFuY2U7XG4gICAgXG4gICAgXHRjb25zdCBsYWJlbEFuY2hvciA9IChzbGljZSwgc2xpY2VOdW1iZXIpID0+IHtcbiAgICAgICAgXHRpZiAoaXNDb21wYXJlTW9kZSkgcmV0dXJuIFwibWlkZGxlXCI7XG4gICAgICAgIFxuICAgICAgICBcdGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VOdW1iZXIpIC8gdG90YWxTbGljZXMgKyBoYWxmU2xpY2VSYWRpYW5zO1xuICAgICAgICAgIGxldCByYWRpdXMgPSBpbm5lclJhZGl1cyArIHRvdGFsUmluZ3MgKiBhcmNXaWR0aCArIHRleHREaXN0YW5jZTtcbiAgICAgICAgICBsZXQgb2Zmc2V0X3R4ID0gZ2V0Q2lyY2xlWChyYWRpYW5zLCByYWRpdXMpO1xuICAgICAgICAgIGxldCBvZmZzZXRfdHkgPSAtZ2V0Q2lyY2xlWShyYWRpYW5zLCByYWRpdXMpO1xuXG4gICAgICAgIFx0aWYgKG9mZnNldF90eCA8IC0xKSByZXR1cm4gXCJlbmRcIlxuICAgICAgICBcdGVsc2UgaWYgKG9mZnNldF90eCA8IDEpIHJldHVybiBcIm1pZGRsZVwiXG5cbiAgICAgICAgXHRyZXR1cm4gXCJzdGFydFwiO1xuICAgICAgfVxuICAgIFxuICAgIFx0Y29uc3QgbGFiZWxUcmFuc2Zvcm0gPSAoc2xpY2Usc2xpY2VOdW1iZXIpID0+IHtcbiAgICAgICAgXHRsZXQgcm93ID0gTWF0aC5taW4ocGFyc2VJbnQoc2xpY2VOdW1iZXIgL2NvbHMpLCByb3dzLTEpOy8vIEFjY291bnRpbmcgZm9yIGNvbmpvaW5lZCBjYXNlXG4gICAgICAgICAgbGV0IGNvbCA9IHNsaWNlTnVtYmVyJWNvbHM7XG5cbiAgICAgICAgICBsZXQgbWlkX3R4ID1cbiAgICAgICAgICAgIGNlbGxTaXplIC8gMiArXG4gICAgICAgICAgICBjb2wgKiAgY2VsbFNpemUgK1xuICAgICAgICAgICAgKChjb2wgKyAxKSAqIHdoaXRlc3BhY2VXaWR0aCkgLyAoY29scyArIDEpO1xuICAgICAgICAgIGxldCBtaWRfdHkgPVxuICAgICAgICAgICAgYXR0cnMudGl0bGVUZXh0SGVpZ2h0ICtcbiAgICAgICAgICAgICAgY2VsbFNpemUgLyAyICtcbiAgICAgICAgICAgICAgcm93ICogY2VsbFNpemUgK1xuICAgICAgICAgICAgICAoKHJvdyArIDEpICogd2hpdGVzcGFjZUhlaWdodCkgLyAocm93cyArIDEpO1xuXG5cbiAgICAgICAgXHRsZXQgcmFkaWFucyA9ICgyICogTWF0aC5QSSAqIHNsaWNlTnVtYmVyKSAvIHRvdGFsU2xpY2VzICsgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgICAgICBsZXQgcmFkaXVzID0gaW5uZXJSYWRpdXMgKyB0b3RhbFJpbmdzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICAgICAgbGV0IG9mZnNldF90eCA9IGlzQ29tcGFyZU1vZGUgPyAwIDogZ2V0Q2lyY2xlWChyYWRpYW5zLCByYWRpdXMpO1xuICAgICAgICAgIGxldCBvZmZzZXRfdHkgPSBpc0NvbXBhcmVNb2RlID8gLXJhZGl1cyAtIHRleHREaXN0YW5jZTogLWdldENpcmNsZVkocmFkaWFucywgcmFkaXVzKTtcbiAgICAgICAgXHRcbiAgICAgICAgXHRcbiAgICAgICAgXHRsZXQgc2NhbGUgPSBNYXRoLm1pbigxLCBjZWxsU2l6ZS9hdHRycy5wcmV2aW91c0NlbGxTaXplKTtcbiAgXG5cdFx0XHRcdFx0bGV0IHR4ID0gbWlkX3R4K29mZnNldF90eCpzY2FsZTtcbiAgICAgICAgXHRsZXQgdHkgPSBtaWRfdHkrb2Zmc2V0X3R5KnNjYWxlO1xuXG4gICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt0eH0sJHt0eX0pYDtcbiAgICAgIH1cblxuICAgIFx0bGV0IGxhYmVscyA9IGF0dHJzLmNvbnRhaW5lclxuICAgICAgXHRcdFx0XHRcdFx0XHRcdC5zZWxlY3RBbGwoJ3RleHQubGFiZWxzJylcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHQuZGF0YShhdHRycy5zbGljZXMsIHNsaWNlPT5zbGljZSlcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHQuam9pbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyID0+IGVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGFiZWxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCAoc2xpY2Usc2xpY2VDb3VudCkgPT4gbGFiZWxBbmNob3Ioc2xpY2Usc2xpY2VDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQuc3R5bGUoJ2ZpbGwnLCBcIndoaXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQudGV4dChzbGljZSA9PiBzbGljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIChzbGljZSxzbGljZUNvdW50KSA9PiBsYWJlbFRyYW5zZm9ybShzbGljZSxzbGljZUNvdW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgPT4gdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBcdC50cmFuc2l0aW9uKFwicGllVXBkYXRlVHJcIikuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBcdC5zdHlsZShcInRleHQtYW5jaG9yXCIsIChzbGljZSxzbGljZUNvdW50KSA9PiAgbGFiZWxBbmNob3Ioc2xpY2Usc2xpY2VDb3VudCkpXG4gICAgICAgICAgXHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIChzbGljZSxzbGljZUNvdW50KSA9PiBsYWJlbFRyYW5zZm9ybShzbGljZSxzbGljZUNvdW50KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0ID0+IGV4aXQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgIFxuICAgIFx0Ly8gQWRkIGNpcmNsZXNcbiAgICAgIGNvbnN0IGNpcmNsZUFycmF5ID0gQXJyYXkuZnJvbShBcnJheSh0b3RhbFNsaWNlcykua2V5cygpKTtcbiAgICAgIGxldCBjaXJjbGVHcm91cHMgPSBhdHRycy5jb250YWluZXJcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5zZWxlY3RBbGwoJ2cuY2VudGVyJylcbiAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5kYXRhKGNpcmNsZUFycmF5KVxuICAgICAgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdGVudGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJHcm91cCA9IGVudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImNlbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRcdC5hdHRyKFwiaWRcIiwgZCA9PiBcImNlbnRlclwiICsgZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5pdGlhbFNpemUgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHggPSBpbml0aWFsU2l6ZSAvIDIgICsgd2hpdGVzcGFjZVdpZHRoIC8gMjsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5ID0gYXR0cnMudGl0bGVUZXh0SGVpZ2h0ICsgaW5pdGlhbFNpemUgLyAyICArIHdoaXRlc3BhY2VIZWlnaHQvIDI7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7dHh9LCR7dHl9KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRsZXQgY2lyY2xlR3JvdXAgPSBjZW50ZXJHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignY3knLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgaW5uZXJSYWRpdXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBlbmRUZXh0RWxlbWVudCA9IChkeSwgbmFtZSwgdGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCBuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZHknLCBkeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUZXh0RWxlbWVudCgnLTAuNWVtJywgJ2NhdGVnb3J5JywgYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUZXh0RWxlbWVudCgnMC41ZW0nLCAnbnVtX3N0dWRlbnRzJywgYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUZXh0RWxlbWVudCgnMS41ZW0nLCAncGVyY2VudF9pbl9ncm91cCcsIGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0Myk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNlbnRlckdyb3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0dXBkYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZS50cmFuc2l0aW9uKFwiY2lyY2xlVXBkYXRlVHJcIikuZHVyYXRpb24oYXR0cnMuZHVyYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbdHgsIHR5LCBzXSA9IGdldFRyYW5zZm9ybWF0aW9uKGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3R4fSwke3R5fSkgc2NhbGUoJHtzfSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUuc2VsZWN0KCdjaXJjbGUnKS5hdHRyKCdyJywgaW5uZXJSYWRpdXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRleGl0ID0+IGV4aXQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgIFx0Y2lyY2xlR3JvdXBzLnJhaXNlKCk7XG5cbiAgICBcdHRoaXMucmVuZGVyVGl0bGUoKTtcdFxuICAgIFx0dGhpcy5yZW5kZXJMZWdlbmQoKTtcbiAgfVxuICBcbiAgcmVuZGVyVGl0bGUoKXtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGNvbnN0IHRpdGxlQnVpbGRlciA9IChhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGNvbnN0IGdldEF0dHJBc1RpdGxlID0gKGF0dHIpID0+IHtcbiAgICAgICAgICAgaWYgKGF0dHIgPT09ICdBY2FkZW1pYyBZZWFyJyl7XG4gICAgICAgICAgICAgIHJldHVybiAnIDIwMTMtMjAyMSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdEZWdyZWUnKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyBhbGwgZGVncmVlcyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdGYWN1bHR5Jyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgYWxsIGZhY3VsdGllcyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdTdHVkeSBTdGF0dXMnKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyBhbGwgc3R1ZHkgc3RhdHVzZXMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnQWdlJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgYWxsIGFnZXMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnU2V4Jyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcgYWxsIHNleGVzJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0NpdGl6ZW5zaGlwIFN0YXR1cycpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnIGFsbCBjaXRpemVuc2hpcCBzdGF0dXNlcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGFjYWRlbWljVmFsdWVzKXtcbiAgICAgICAgICBpZiAoYWNhZGVtaWNWYWx1ZXNbYXR0cl0ubGVuZ3RoID09PSAxICYmIGFjYWRlbWljVmFsdWVzW2F0dHJdWzBdID09PSAnVG90YWwnKXtcbiAgICAgICAgICAgIGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBvZiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICAgIGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgIH1cbiAgICAgIFx0XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAwKSByZXR1cm4gJyc7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxKSByZXR1cm4gJ1N0dWRlbnRzIGFjcm9zcyAnICsgbGlzdC5wb3AoKSArICcuJzsgXG4gICAgICAgIHJldHVybiAnU3R1ZGVudHMgYWNyb3NzICcgKyBsaXN0LnNsaWNlKDAsIC0xKS5qb2luKCkgKyAnIGFuZCAnICsgbGlzdC5wb3AoKSArICcuJztcbiAgICBcdH07XG4gICAgXG4gICAgXHRsZXQgZGl2ZXJzaXR5VmFsdWVzID0gbmV3IFNldChbXCJBZ2VcIixcIlNleFwiLFwiQ2l0aXplbnNoaXAgU3RhdHVzXCJdKTtcbiAgICBcdGZvciAobGV0IGFyYyBpbiBhdHRycy5waWVzKXtcbiAgICAgIFx0ZGl2ZXJzaXR5VmFsdWVzLmRlbGV0ZShhdHRycy5waWVzW2FyY11bMF0uZ3JvdXApO1xuICAgICAgfVxuICAgIFx0XG4gICAgXHRcbiAgICBcdGQzLnNlbGVjdCgnI3Zpei10aXRsZS10ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy50aXRsZVRleHRTaXplKVxuICAgICAgICAudGV4dCh0aXRsZUJ1aWxkZXIoYXR0cnMuYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcykpO1xuICB9XG5cbiAgcmVuZGVyTGVnZW5kKCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG5cbiAgICAvL2hpZXJhcmNoaWFsIHRyZWUgbGVnZW5kXG4gICAgbGV0IGxlZ2VuZCA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QtbGVnZW5kJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGF0dHJzLmxlZ2VuZFdpZHRoKTtcbiAgICBsZWdlbmQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgXG4gICAgbGV0IHggPSAyMDtcbiAgICBsZXQgeSA9IDEwO1xuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeCArIDIwKVxuICAgICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgICAgLnRleHQoJ0xFR0VORCcpXG4gICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMjBweCcpXG4gICAgXHRcdFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIFxuICAgICB5ICs9IDI1O1xuICAgIFxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgaW4gYXR0cnMucmluZ3Mpe1xuICBcdFx0aWYgKCBhdHRycy5yaW5nc1tjYXRlZ29yeV0ubGVuZ3RoID09IDApe1xuICAgICAgICBjb250aW51ZTsgIFxuICAgICAgfVxuICAgICAgbGVnZW5kXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgIC50ZXh0KGNhdGVnb3J5KVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcblx0XHRcdCB5ICs9IDIwO1xuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGF0dHJzLnJpbmdzW2NhdGVnb3J5XSl7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIHZhbHVlICsgJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeClcbiAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTIpXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvclt2YWx1ZV0pO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KHZhbHVlKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgICBcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICAgICAgeSArPSAyMDtcbiAgICAgIH1cbiAgICAgIHkrPTEwO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU3VuYnVyc3QgfSBmcm9tICcuL25hdmktY2xhc3MnO1xuaW1wb3J0IHsgUmluZ0RpYWdyYW0gfSBmcm9tICcuL3JpbmctZGlhZ3JhbTEnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG5cdC8vUmluZyBkaWFncmFtIG9iamVjdFxuICBsZXQgcmQ7IFxuXG5cdC8vU2V0IG5vZGUgYW5kIE1haW4gdml6IFNQQSB1cHNcbiAgZGlzcGxheU5vZGVzKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXN1YWxpemUtYnV0dG9uJykub25jbGljayA9IGRpc3BsYXlWaXo7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Tm9kZXM7XG4gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1vcGVuLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5SW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykub25jbGljayA9IGhpZGVJbmZvO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1jbG9zZS1idXR0b24nKS5vbmNsaWNrID0gaGlkZUluZm87XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Tm9kZXMoKXtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5Vml6KCl7XG4gICAgICBsZXQgdGVzdCA9IGZhbHNlO1xuICAgIFx0bGV0IGFjYWRlbWljVmFsdWVzVGVzdCA9IHtcbiAgICAgICAgICAgXHQgJ0FjYWRlbWljIFllYXInOiBbJ1RvdGFsJ10sXG4gICAgICAgICAgICAgRGVncmVlOiBbJ0JhY2hlbG9ycycsICdNYXN0ZXJzJ10sXG4gICAgICAgICAgICAgRmFjdWx0eTogWydTY2llbmNlJywgJ0J1c2luZXNzJ10sXG4gICAgICAgICAgICAgJ1N0dWR5IFN0YXR1cyc6IFsnVG90YWwnXVxuICAgICAgICAgIH07XG4gICAgICAgbGV0IGRpdmVyc2l0eVZhbHVlc1Rlc3QgPSB7ICAgICBcbiAgICAgICAgICAgICAgQWdlOiBbXSxcbiAgICAgICAgICAgICAgU2V4OiAgWydNYWxlJywgJ0ZlbWFsZSddLFxuICAgICAgICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogWydJbnRlcm5hdGlvbmFsJywgJ0RvbWVzdGljJ11cbiAgICAgICB9XG5cbiAgICBcdGlmIChyZCl7XG4gICAgICAgICBsZXQgZGl2ZXJzaXR5VmFsdWVzID0gdGVzdD9kaXZlcnNpdHlWYWx1ZXNUZXN0OiBzYi5kaXZlcnNpdHlWYWx1ZXMoKTtcbiAgICAgICAgIGxldCBhY2FkZW1pY1ZhbHVlcyA9IHRlc3Q/YWNhZGVtaWNWYWx1ZXNUZXN0OiBzYi5hY2FkZW1pY1ZhbHVlcygpO1xuXG4gICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGRpdmVyc2l0eVZhbHVlcyl7XG4gICAgICAgIFx0IGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgaWYgKCF2YWxpZCl7XG4gICAgICAgICAgIFx0Y29uc29sZS5sb2coZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgXHRcdGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBkaXZlcnNpdHkgYXR0cmlidXRlJyk7ICBcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHQgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Zpei1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIFx0IFx0XHQgcmQucmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpOyAvL0ZvciByaW5nLWRpYWdyYW0xLmpzXG4gICAgICAgICAgIFx0IC8vcmQuaW5pdGlhbFJlbmRlcihhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKTtcbiAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBhbGVydCgnUGxlYXNlIHdhaXQgZm9yIHRoZSBkYXRhIHRvIGZpbmlzaCBsb2FkaW5nJyk7XG4gICAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGRpc3BsYXlJbmZvKCl7XG4gICAgY29uc29sZS5sb2coXCJvcGVuXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG4gIFxuICBmdW5jdGlvbiBoaWRlSW5mbygpe1xuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIFxuICBsZXQgc2IgPSBuZXcgU3VuYnVyc3QoKVxuICAgICAuY29udGFpbmVyKCcjY2hhcnQtY29udGFpbmVyJylcbiAgICAgLnN2Z1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoLTIwMClcbiAgICAgLnN2Z0hlaWdodCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgLmluaXRpYWxab29tKDAuMylcbiAgICAgLnJlbmRlcigpXG5cbiAgbmV3IFJpbmdEaWFncmFtKClcbiAgICAgICAgIC5jb250YWluZXIoJyNzdW5idXJzdC1jb250YWluZXInKVxuICBcdFx0XHQgLmRpc3BsYXlOb2RlcyhkaXNwbGF5Tm9kZXMpXG4gICAgXHRcdCAuc2V0dXAoJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20va2FlbDU1OC83ZDJjYjUyNTg5MjExMTlkZjU4ODRjYzkwOTAyZTg0ZC9yYXcvMDA4MjdiOWQ1MzI4ODMzNDMxOTFmNjE0NGQ0MWQwYTBiYmFkNWRmOC9mYWxsLmNzdicpXG5cdFx0XHRcdCAudGhlbih2YWx1ZSA9PiByZCA9IHZhbHVlKTtcbn0pO1xuXG5cblxuXG5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcbiAgICAgICBcblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBQ0EsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQzdCO0VBQ0EsTUFBTSxrQkFBa0IsR0FBRyxlQUFlLENBQUM7RUFDM0MsTUFBTSx1QkFBdUIsR0FBRyxpQkFBaUIsQ0FBQztFQUNs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