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
               description: 'Department and faculty are mapped from student degree and major or majors.',
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
                description: 'Academic Year is made up of three terms (Summer, Fall, Winter).',
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
                description: 'Level of study of a student.',
               "children": [
                  {"name": "Bachelors", "size": 28},
                  {"name": "Masters", "size": 28},
                  {"name": "Ph.D.", "size": 28},
               ]  
              },
              {
               "name": "Study Status",
               "color": colors.Academic_Node_Fill,
                description: 'A full-time student is enrolled in 3 or more credits across the Fall and Winter terms whereas a part-time student is enrolled in less.',
               "children": [
                  {"name": "Part-time", "size": 42},
                  {"name": "Full-time", "size": 42},
               ]  
              },
              {
               "name": "Citizenship Status",
               "color": colors.Diversity_Node_Fill,
               description: 'Students are categorized based on whether they are charged domestic or international fees.',
               "children": [
                  {"name": "Domestic", "size": 42},
                  {"name": "International", "size": 42},
               ]  
              },
              {
               "name": "Age",
               "color": colors.Diversity_Node_Fill,
                description: 'The age ranges of students.',

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
                description: 'This is mislabeled by the university. Ideally, the label should be \'Gender\' and more genders should be collected.',
               "children": [
                  {"name": "Male", "size": 28},
                  {"name": "Female", "size": 28},
                  {"name": "Non-binary", "color":colors.Uncollected_Node_Fill, "size": 28}
               ]  
              },
              {
               "name": "Race",
               "color":colors.Uncollected_Node_Fill,
                description: 'University does not collect the race of a student.',
               "size": 84
              },
              {
               "name": "Religion/Spirituality",
               "color":colors.Uncollected_Node_Fill,
                description: 'University does not collect the religion/spirituality of a student.',
                "size":  84
              },
              {
               "name": "Dis/ability",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect the dis/ability of a student.',
                "size":  84
              },
              {
               "name": "Indigeneity",
               "color": colors.Uncollected_Node_Fill,
                 description: 'University does not collect the indigeneity of a student.',
                "size":  84
              },
              {
               "name": "Languages Spoken",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect the languages spoken by a student.',
                "size":  84
              },
              {
               "name": "Ethnicity",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect the other language of a student.',
                "size":  84
              },
              {
               "name": "Nation/Regional Identity",
               "color": colors.Uncollected_Node_Fill,
                description: 'University does not collect the nation of origin or regional identity of a student.',
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

      		d3.select("#node-div").style('background-color', attrs.backgroundColor);

      
          const svg = d3.select('#chart-container')
  						.style('background-color', attrs.backgroundColor)
              .attr('viewBox', `${(-width+275) / 2} ${(-height-120) / 2} ${width} ${height}`)
              .on('click', () => focusOn()); // Reset zoom on canvas click

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
              .attr('fill', 'white');
          
          let textCircle = centerGroup
              .append('foreignObject')
              .attr('x', -innerRadius)
              .attr('y', -innerRadius/3)
          		.attr('dy', -0.5)
          		.attr('width',  innerRadius*2)
    					.attr('height',  innerRadius*2)
              .style('font-size', "30px")
          		.append('xhtml:p')
                .text(attrs.placeholderInnerText);


      		let root = nodes;
          root = d3.hierarchy(root);
          root.sum(d => d.size);

          const slice = svg.selectAll('g.slice')
              .data(partition(root).descendants());

          slice.exit().remove();

          const newSlice = slice.enter()
              .append('g').attr('class', 'slice')
          		.on('mouseover', d => {
                textCircle.text(d.data.description);       
              }).on('mouseout', d => {
                 textCircle.text(attrs.placeholderInnerText);
              })
              .on('click', d => {
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
              .style('stroke-width', d=> d.data.borderWidth || attrs.unclickedWidth)
              .attr('d', arc);

      		
      		newSlice.append('path')
                  .attr('class', 'hidden-arc')
                  .attr('id', (_, i) => `hiddenArc${i}`)
                  .attr('d', middleArcLine);
  				
          const text = newSlice.append('text')
          				       	.attr('class', 'arc-text')
          							.style('font-size', "12px")
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
            
                    const parent = d.parent.data;
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
      		focusOn();
      
      
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIm5vZGVzLmpzIiwibmF2aS1jbGFzcy5qcyIsInN1bmJ1cnN0LWNsYXNzLmpzIiwiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSU5WSVNJQkxFX05PREUgPSAnSU5WSVNJQkxFJztcbmNvbnN0IFJFUE9SVF9OT0RFID0gJ1JFUE9SVCc7XG5cbmNvbnN0IEVESV9BVFRSSUJVVEVfTk9ERSA9ICdFRElfQVRUUklCVVRFJztcbmNvbnN0IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFID0gJ09USEVSX0FUVFJJQlVURSc7XG5jb25zdCBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSA9ICdVTkNPTExFQ1RFRF9BVFRSSUJVVEUnO1xuXG5jb25zdCBWQUxVRV9OT0RFID0gJ1ZBTFVFJztcbmNvbnN0IFVOQ09MTEVDVEVEX1ZBTFVFX05PREUgPSAnVU5DT0xMRUNURURfVkFMVUUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbE5vZGVzID0ge1xuICBFbnJvbGxlZDoge1xuICAgIHR5cGU6IFJFUE9SVF9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIG51bWJlciBvZiBzdHVkZW50cyB0aGF0IGFyZSBlbnJvbGxlZC4nXG4gIH0sXG4gIEZhY3VsdHk6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ1NURU0nLCAnTm9uLVNURU0nLCAnRW5naW5lZXJpbmcgJiBEZXNpZ24nLCAnU2NpZW5jZScsICdQdWJsaWMgQWZmYWlycycsICdCdXNpbmVzcycsICdBcnRzICYgU29jaWFsIFNjaWVuY2VzJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVwYXJ0bWVudCBhbmQgZmFjdWx0eSBhcmUgbWFwcGVkIGZyb20gc3R1ZGVudCBkZWdyZWUgYW5kIG1ham9yIG9yIG1ham9ycy4nXG4gIH0sXG4gICdBY2FkZW1pYyBZZWFyJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnMjAxMy8xNCcsXG4gICAgICAnMjAxNC8xNScsXG4gICAgICAnMjAxNS8xNicsXG4gICAgICAnMjAxNi8xNycsXG4gICAgICAnMjAxNy8xOCcsXG4gICAgICAnMjAxOC8xOScsXG4gICAgICAnMjAxOS8yMCcsXG4gICAgICAnMjAyMC8yMScsXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogQUNBREVNSUNfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdBY2FkZW1pYyBZZWFyIGlzIG1hZGUgdXAgb2YgdGhyZWUgdGVybXMgKFN1bW1lciwgRmFsbCwgV2ludGVyKS4nLFxuICAgIG9yZGVyZWQ6IHRydWVcbiAgfSxcbiAgRGVncmVlOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydCYWNoZWxvcnMnLFxuICAgICAgJ01hc3RlcnMnLFxuICAgICAgJ1BoLkQuJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnTGV2ZWwgb2Ygc3R1ZHkgb2YgYSBzdHVkZW50LicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuIFxuICAnU3R1ZHkgU3RhdHVzJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFsnUGFydC10aW1lJyxcbiAgICAgICdGdWxsLXRpbWUnLFxuICAgICAgJ0NvLW9wJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IEFDQURFTUlDX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBmdWxsLXRpbWUgc3R1ZGVudCBpcyBlbnJvbGxlZCBpbiAzIG9yIG1vcmUgY3JlZGl0cyBhY3Jvc3MgdGhlIEZhbGwgYW5kIFdpbnRlciB0ZXJtcyB3aGVyZWFzIGEgcGFydC10aW1lIHN0dWRlbnQgaXMgZW5yb2xsZWQgaW4gbGVzcy4nXG4gIH0sXG4gICdDaXRpemVuc2hpcCBTdGF0dXMnOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICAgIGNvbGxlY3RlZFZhbHVlczogWydEb21lc3RpYycsXG4gICAgICAnSW50ZXJuYXRpb25hbCddLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBFRElfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdTdHVkZW50cyBhcmUgY2F0ZWdvcml6ZWQgYmFzZWQgb24gd2hldGhlciB0aGV5IGFyZSBjaGFyZ2VkIGRvbWVzdGljIG9yIGludGVybmF0aW9uYWwgZmVlcy4nXG4gIH0sXG4gIEFnZToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgICBjb2xsZWN0ZWRWYWx1ZXM6IFtcbiAgICAgICc8PTE3JyxcbiAgICAgICcxOC0yMCcsXG4gICAgICAnMjEtMjUnLFxuICAgICAgJzI2LTMwJyxcbiAgICAgICczMS0zNScsXG4gICAgICAnMzYtNDUnLFxuICAgICAgJzQ2LTU1JyxcbiAgICAgICc1NSsnLFxuICAgIF0sXG4gICAgdW5jb2xsZWN0ZWRWYWx1ZXM6IFsnNTUtNTknLCc2MC02NCcsJzY1LTY5JywgJzcwLTc0JywgJzc1LTc5JywgJzgwKyddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBhZ2UgcmFuZ2VzIG9mIHN0dWRlbnRzLicsXG4gICAgb3JkZXJlZDogdHJ1ZVxuICB9LFxuICBTZXg6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gICAgY29sbGVjdGVkVmFsdWVzOiBbJ0ZlbWFsZScsICdNYWxlJ10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFsnTm9uLWJpbmFyeSddLFxuICAgIHR5cGU6IEVESV9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbWlzbGFiZWxlZCBieSB0aGUgdW5pdmVyc2l0eS4gVGhlIGNvcnJlY3QgbGFiZWwgc2hvdWxkIGJlIFxcJ0dlbmRlclxcJyBhbmQgYWxsIGdlbmRlcnMgc2hvdWxkIGJlIGNvbGxlY3RlZC4nXG5cdH0sXG4gIFJhY2U6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIHJhY2Ugb2YgYSBzdHVkZW50Lidcblx0fSxcbiAgJ1JlbGlnaW9uL1NwaXJpdHVhbGl0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIHJlbGlnaW9uL3NwaXJpdHVhbGl0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICAnUmVnaW9uYWwgSWRlbnRpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSByZWdpb25hbCBpZGVudGl0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICAnRGlzL2FiaWxpdHknOiB7XG4gICAgcGFyZW50czogWydFbnJvbGxlZCddLFxuICBcdGNvbGxlY3RlZFZhbHVlczogW10sXG4gIFx0dW5jb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICAgIHR5cGU6IFVOQ09MTEVDVEVEX0FUVFJJQlVURV9OT0RFLFxuICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSBkaXMvYWJpbGl0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICBJbmRpZ2VuZWl0eToge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbJ0ZpcnN0IE5hdGlvbnMnLCAnTWV0aXMnLCAnSW51aXQnXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgaW5kaWdlbmVpdHkgb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0ZpcnN0IExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgZmlyc3QgbGFuZ3VhZ2Ugb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ090aGVyIExhbmd1YWdlJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgb3RoZXIgbGFuZ3VhZ2Ugb2YgYSBzdHVkZW50LidcbiAgfSxcbiAgJ0V0aG5pY2l0eSc6IHtcbiAgICBwYXJlbnRzOiBbJ0Vucm9sbGVkJ10sXG4gIFx0Y29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgXHR1bmNvbGxlY3RlZFZhbHVlczogW10sXG4gICAgdHlwZTogVU5DT0xMRUNURURfQVRUUklCVVRFX05PREUsXG4gICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGV0aG5pY2l0eSBvZiBhIHN0dWRlbnQuJ1xuICB9LFxuICAnTmF0aW9uJzoge1xuICAgIHBhcmVudHM6IFsnRW5yb2xsZWQnXSxcbiAgXHRjb2xsZWN0ZWRWYWx1ZXM6IFtdLFxuICBcdHVuY29sbGVjdGVkVmFsdWVzOiBbXSxcbiAgICB0eXBlOiBVTkNPTExFQ1RFRF9BVFRSSUJVVEVfTk9ERSxcbiAgICBkZXNjcmlwdGlvbjogJ1VuaXZlcnNpdHkgZG9lcyBub3QgY29sbGVjdCB0aGUgbmF0aW9uIG9mIG9yaWdpbiBvZiBhIHN0dWRlbnQuJ1xuICB9LFxufVxuXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xuICBSZXBvcnRfTm9kZV9GaWxsOiB7XCJyZWRcIjozMSxcImdyZWVuXCI6MTIwLFwiYmx1ZVwiOjE4MCxcImFscGhhXCI6MX0sXG4gIERpdmVyc2l0eV9Ob2RlX0ZpbGw6IHtcInJlZFwiOjUxLFwiZ3JlZW5cIjoxNjAsXCJibHVlXCI6NDQsXCJhbHBoYVwiOjF9LFxuICBBY2FkZW1pY19Ob2RlX0ZpbGw6IHtcInJlZFwiOjE2NixcImdyZWVuXCI6MjA2LFwiYmx1ZVwiOjIyNyxcImFscGhhXCI6MX0sXG4gIFVuY29sbGVjdGVkX05vZGVfRmlsbDoge1wicmVkXCI6MTI4LFwiZ3JlZW5cIjoxMjgsXCJibHVlXCI6MTI4LFwiYWxwaGFcIjoxfSxcbiAgVHJhbnNwYXJlbnQ6IHtcInJlZFwiOjI1NSxcImdyZWVuXCI6MjU1LFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MH0sXG4gIFdoaXRlOiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjF9LFxuICBCbHVlOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjI1NSxcImFscGhhXCI6MX0sXG4gIEJsYWNrOiB7XCJyZWRcIjowLFwiZ3JlZW5cIjowLFwiYmx1ZVwiOjAsXCJhbHBoYVwiOjF9LFxuICBHcmV5OiB7XCJyZWRcIjoxNDEsXCJncmVlblwiOjE2MCxcImJsdWVcIjoyMDMsXCJhbHBoYVwiOjF9LFxuXHRHcmVlbjoge1wicmVkXCI6MTAyLFwiZ3JlZW5cIjoxOTQsXCJibHVlXCI6MTY1LFwiYWxwaGFcIjoxfSxcbiAgT3JhbmdlOiB7XCJyZWRcIjoyNTIsXCJncmVlblwiOjE0MSxcImJsdWVcIjo5OCxcImFscGhhXCI6IDF9LFxuICBTbGF0ZV9HcmV5IDoge1wicmVkXCI6NjEsXCJncmVlblwiOjcyLFwiYmx1ZVwiOjczLFwiYWxwaGFcIjoxfSxcbiAgQnV0dG9uOiB7XCJyZWRcIjoxMDAsXCJncmVlblwiOjEwMCxcImJsdWVcIjoxMDAsXCJhbHBoYVwiOjF9LFxuICBEaXNhYmxlZDoge1wicmVkXCI6MTAwLFwiZ3JlZW5cIjoxMDAsXCJibHVlXCI6MTAwLFwiYWxwaGFcIjowLjJ9LFxuICBEaXNhYmxlZF9UZXh0OiB7XCJyZWRcIjoyNTUsXCJncmVlblwiOjI1NSxcImJsdWVcIjoyNTUsXCJhbHBoYVwiOjAuMn0sXG59XG5cbiAgICAgXG5cblxuZXhwb3J0IGNvbnN0IG5vZGVzID0ge1xuICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVHJhbnNwYXJlbnQsXG4gIFx0XHRcdFx0IFwiYm9yZGVyV2lkdGhcIjogXCIwcHhcIixcbiAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmFjdWx0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RlcGFydG1lbnQgYW5kIGZhY3VsdHkgYXJlIG1hcHBlZCBmcm9tIHN0dWRlbnQgZGVncmVlIGFuZCBtYWpvciBvciBtYWpvcnMuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiU1RFTVwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJOb24tU1RFTVwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJFbmdpbmVlcmluZyAmIERlc2lnblwiLCBcInNpemVcIjogMTJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJTY2llbmNlXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlB1YmxpYyBBZmZhaXJzXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkJ1c2luZXNzXCIsIFwic2l6ZVwiOiAxMn0sXG4gICAgICAgICAgICAgICBcdHtcIm5hbWVcIjogXCJBcnRzICYgU29jaWFsIFNjaWVuY2VzXCIsIFwic2l6ZVwiOiAxMn1cbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFjYWRlbWljIFllYXJcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWNhZGVtaWMgWWVhciBpcyBtYWRlIHVwIG9mIHRocmVlIHRlcm1zIChTdW1tZXIsIEZhbGwsIFdpbnRlcikuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxMy8xNFwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTQvMTVcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE1LzE2XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxNi8xN1wiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMTcvMThcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIyMDE4LzE5XCIsIFwic2l6ZVwiOiAxMC41fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjAxOS8yMFwiLCBcInNpemVcIjogMTAuNX0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIwMjAvMjFcIiwgXCJzaXplXCI6IDEwLjV9LFxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcblx0XHRcdFx0XHRcdHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJEZWdyZWVcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTGV2ZWwgb2Ygc3R1ZHkgb2YgYSBzdHVkZW50LicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkJhY2hlbG9yc1wiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJNYXN0ZXJzXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlBoLkQuXCIsIFwic2l6ZVwiOiAyOH0sXG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN0dWR5IFN0YXR1c1wiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkFjYWRlbWljX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGZ1bGwtdGltZSBzdHVkZW50IGlzIGVucm9sbGVkIGluIDMgb3IgbW9yZSBjcmVkaXRzIGFjcm9zcyB0aGUgRmFsbCBhbmQgV2ludGVyIHRlcm1zIHdoZXJlYXMgYSBwYXJ0LXRpbWUgc3R1ZGVudCBpcyBlbnJvbGxlZCBpbiBsZXNzLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIlBhcnQtdGltZVwiLCBcInNpemVcIjogNDJ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJGdWxsLXRpbWVcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2l0aXplbnNoaXAgU3RhdHVzXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1N0dWRlbnRzIGFyZSBjYXRlZ29yaXplZCBiYXNlZCBvbiB3aGV0aGVyIHRoZXkgYXJlIGNoYXJnZWQgZG9tZXN0aWMgb3IgaW50ZXJuYXRpb25hbCBmZWVzLicsXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkRvbWVzdGljXCIsIFwic2l6ZVwiOiA0Mn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIkludGVybmF0aW9uYWxcIiwgXCJzaXplXCI6IDQyfSxcbiAgICAgICAgICAgICBdICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWdlXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuRGl2ZXJzaXR5X05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYWdlIHJhbmdlcyBvZiBzdHVkZW50cy4nLFxuXG4gICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjw9MTdcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIxOC0yMFwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjIxLTI1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiMjYtMzBcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCIzMS0zNVwiLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjM2LTQ1XCIsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNDYtNTVcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI1NStcIiwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI1NS01OVwiLCBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI2MC02NFwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiNjUtNjlcIiwgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLCBcInNpemVcIjogNn0sXG4gICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIjcwLTc0XCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCI3NS03OVwiLCBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsIFwic2l6ZVwiOiA2fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiODArXCIsIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDZ9XG4gICAgICAgICAgICAgXSAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNleFwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLkRpdmVyc2l0eV9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBtaXNsYWJlbGVkIGJ5IHRoZSB1bml2ZXJzaXR5LiBJZGVhbGx5LCB0aGUgbGFiZWwgc2hvdWxkIGJlIFxcJ0dlbmRlclxcJyBhbmQgbW9yZSBnZW5kZXJzIHNob3VsZCBiZSBjb2xsZWN0ZWQuJyxcbiAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTWFsZVwiLCBcInNpemVcIjogMjh9LFxuICAgICAgICAgICAgICAgIHtcIm5hbWVcIjogXCJGZW1hbGVcIiwgXCJzaXplXCI6IDI4fSxcbiAgICAgICAgICAgICAgICB7XCJuYW1lXCI6IFwiTm9uLWJpbmFyeVwiLCBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCwgXCJzaXplXCI6IDI4fVxuICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJSYWNlXCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOmNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSByYWNlIG9mIGEgc3R1ZGVudC4nLFxuICAgICAgICAgICAgIFwic2l6ZVwiOiA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWxpZ2lvbi9TcGlyaXR1YWxpdHlcIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6Y29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIHJlbGlnaW9uL3NwaXJpdHVhbGl0eSBvZiBhIHN0dWRlbnQuJyxcbiAgICAgICAgICAgICAgXCJzaXplXCI6ICA4NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICBcIm5hbWVcIjogXCJEaXMvYWJpbGl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGRpcy9hYmlsaXR5IG9mIGEgc3R1ZGVudC4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkluZGlnZW5laXR5XCIsXG4gICAgICAgICAgICAgXCJjb2xvclwiOiBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsLFxuICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIGluZGlnZW5laXR5IG9mIGEgc3R1ZGVudC4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxhbmd1YWdlcyBTcG9rZW5cIixcbiAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVW5pdmVyc2l0eSBkb2VzIG5vdCBjb2xsZWN0IHRoZSBsYW5ndWFnZXMgc3Bva2VuIGJ5IGEgc3R1ZGVudC4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIkV0aG5pY2l0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIG90aGVyIGxhbmd1YWdlIG9mIGEgc3R1ZGVudC4nLFxuICAgICAgICAgICAgICBcInNpemVcIjogIDg0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hdGlvbi9SZWdpb25hbCBJZGVudGl0eVwiLFxuICAgICAgICAgICAgIFwiY29sb3JcIjogY29sb3JzLlVuY29sbGVjdGVkX05vZGVfRmlsbCxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdVbml2ZXJzaXR5IGRvZXMgbm90IGNvbGxlY3QgdGhlIG5hdGlvbiBvZiBvcmlnaW4gb3IgcmVnaW9uYWwgaWRlbnRpdHkgb2YgYSBzdHVkZW50LicsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiAgODRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgIF1cbn1cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBub2RlcywgY29sb3JzIH0gZnJvbSAnLi9ub2Rlcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEV4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogODAwLFxuICAgICAgc3ZnSGVpZ2h0OiA2MDAsXG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIGRlZmF1bHRUZXh0RmlsbDogJyMyQzNFNTAnLFxuICAgICAgbm9kZVRleHRGaWxsOiAnd2hpdGUnLFxuICAgICAgZGVmYXVsdEZvbnQ6ICdIZWx2ZXRpY2EnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5TbGF0ZV9HcmV5KSxcbiAgICAgIGRhdGE6IG5vZGVzLFxuICAgICAgbm9kZXM6IG51bGwsXG4gICAgICBjb25uZWN0b3JMZXZlbHM6IDIsXG4gICAgICBkZXB0aDogMTgwLFxuICAgICAgZHVyYXRpb246IDYwMCxcbiAgICAgIHN0cm9rZVdpZHRoOiAzLFxuICAgICAgaW5pdGlhbFpvb206IDEsXG4gICAgICB0aXRsZVRleHRTaXplOiAnMjVweCcsXG4gICAgICAgY29sb3I6IHtcbiAgICAgICAgTWFsZTogJyNmYzhkNTknLFxuICAgICAgICBGZW1hbGU6ICcjOTFiZmRiJyxcbiAgICAgICAgSW50ZXJuYXRpb25hbDogJyM5OThlYzMnLFxuICAgICAgICBEb21lc3RpYzogJyNmMWEzNDAnLFxuICAgICAgICAnPD0xNyc6ICcjZjdmY2Y1JyxcbiAgICAgICAgJzE4LTIwJzogJyNlNWY1ZTAnLFxuICAgICAgICAnMjEtMjUnOiAnI2M3ZTljMCcsXG4gICAgICAgICcyNi0zMCc6ICcjYTFkOTliJyxcbiAgICAgICAgJzMxLTM1JzogJyM3NGM0NzYnLFxuICAgICAgICAnMzYtNDUnOiAnIzQxYWI1ZCcsXG4gICAgICAgICc0Ni01NSc6ICcjMjM4YjQ1JyxcbiAgICAgICAgJzU1Kyc6ICcjMDA2ZDJjJyxcbiAgICAgICAgMDogJyM5ODk4OTgnLFxuICAgICAgfSxcbiAgICAgIGFjYWRlbWljVmFsdWVzOiB7XG4gICAgICAgICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICBEZWdyZWU6IFsnVG90YWwnXSxcbiAgICAgICAgRmFjdWx0eTogWydUb3RhbCddLFxuICAgICAgICAnU3R1ZHkgU3RhdHVzJzogWydUb3RhbCddLFxuICAgICAgfSxcbiAgICAgIGRpdmVyc2l0eVZhbHVlczoge1xuICAgICAgICBBZ2U6IFtdLFxuICAgICAgICBTZXg6IFtdLFxuICAgICAgICAnQ2l0aXplbnNoaXAgU3RhdHVzJzogW10sXG4gICAgICB9LFxuICAgICAgb25Ob2RlQ2xpY2s6IG51bGwsXG4gICAgICB0b29sdGlwRGl2OiBudWxsLFxuICAgICAgbnVtRXhwYW5kZWQ6IDAsXG4gICAgICB1bmNsaWNrZWRXaWR0aDogJzJweCcsXG4gICAgICBjbGlja2VkV2lkdGg6ICcxMHB4JyxcbiAgICAgIGZvY3Vzc2VkOiBudWxsLFxuICAgICAgcGxhY2Vob2xkZXJJbm5lclRleHQ6ICdFbnJvbGxlZCBTdHVkZW50cycsXG4gICAgICBjZW50ZXJYOiAwLFxuICAgICAgY2VudGVyWTogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDaGFydFN0YXRlID0gKCkgPT4gYXR0cnM7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIER5bmFtaWNhbGx5IHNldCBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMgZm9yIENoYXJ0IGNsYXNzXG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoXykge1xuICAgICAgICB2YXIgc3RyaW5nID0gYGF0dHJzWycke2tleX0nXSA9IF9gO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbChgYXR0cnNbJyR7a2V5fSddO2ApO1xuICAgICAgICB9XG4gICAgICAgIGV2YWwoc3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIFxuICAgIC8vRGVmaW5lIHRpdGxlXG4gICAgZDMuc2VsZWN0KCcjbmF2LXRpdGxlLXRleHQnKVxuICAgIFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMudGl0bGVUZXh0U2l6ZSlcbiAgICBcdFx0XHQudGV4dCgnQ2FybGV0b24gVW5pdmVyc2l0eSBTdHVkZW50cyBDb2xsZWN0ZWQgXFwmIE1pc3NpbmcgRGVtb2dyYXBoaWNzIERhdGEnKTtcbiAgICBcblx0XHR0aGlzLnJlbmRlckxlZ2VuZCgpO1xuICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKClcbiAgICAvL3RoaXMuaW5pdGlhbGl6ZUVudGVyRXhpdFVwZGF0ZVBhdHRlcm4oKTtcbiAgfVxuICBcbiAgICAgLyogRnVuY3Rpb24gY29udmVydHMgcmdiYSBvYmplY3RzIHRvIHJnYmEgY29sb3Igc3RyaW5nIFxuICAgIHtyZWQ6MTEwLGdyZWVuOjE1MCxibHVlOjI1NSxhbHBoYToxfSAgPT4gcmdiYSgxMTAsMTUwLDI1NSwxKVxuICAqL1xuICByZ2JhT2JqVG9Db2xvcih7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhIH0pIHtcbiAgICByZXR1cm4gYHJnYmEoJHtyZWR9LCR7Z3JlZW59LCR7Ymx1ZX0sJHthbHBoYX0pYDtcbiAgfVxuICBcbiAgIHJlbmRlckxlZ2VuZCgpe1xuICAgIC8vaGllcmFyY2hpYWwgdHJlZSBsZWdlbmRcbiAgICBjb25zdCBsZWdlbmQgPSBkMy5zZWxlY3QoJyNub2RlLWxlZ2VuZCcpO1xuICAgIGNvbnN0IHdpZHRoID0gMTIsIGhlaWdodCA9IDEyO1xuICAgIGNvbnN0IHJlY3RCdWlsZGVyID0gKHgsIHksIGNvbG9yKSA9PiB7XG4gICAgXHQgIGxlZ2VuZCBcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcikpXG4gICAgICBcdFx0LnN0eWxlKCdzdHJva2UnLCAnYmxhY2snKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoeCwgeSwgdGV4dCwgc2l6ZSkgPT4ge1xuICAgICAgICAgIGxlZ2VuZFxuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgICAgICAudGV4dCh0ZXh0KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBzaXplKVxuICAgICAgXHRcdFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHRleHRCdWlsZGVyKDYwLCAxMCwgJ0xFR0VORCcsICcyMHB4Jyk7XG4gICAgcmVjdEJ1aWxkZXIoMjAsIDM0LCBjb2xvcnMuVW5jb2xsZWN0ZWRfTm9kZV9GaWxsKTtcbiAgICByZWN0QnVpbGRlcigyMCwgNjQsIGNvbG9ycy5EaXZlcnNpdHlfTm9kZV9GaWxsKTtcbiAgICByZWN0QnVpbGRlcigyMCwgOTQsIGNvbG9ycy5BY2FkZW1pY19Ob2RlX0ZpbGwpO1xuICAgIHRleHRCdWlsZGVyKDQwLCA0MCwgJ1VuY29sbGVjdGVkIEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuICAgIHRleHRCdWlsZGVyKDQwLCA3MCwgJ0RpdmVyc2l0eSBBdHRyaWJ1dGVzJywgJzE1cHgnKTtcbiBcdFx0dGV4dEJ1aWxkZXIoNDAsIDEwMCwgJ0FjYWRlbWljIEF0dHJpYnV0ZXMnLCAnMTVweCcpO1xuICB9XG4gIFxuICByZW5kZXJTZWxlY3RlZEF0dHJpYnV0ZXMoKXtcbiAgICBcdGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG5cbiAgXHQgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QoJyNzZWxlY3RlZC1hdHRyaWJ1dGVzJyk7XG4gICAgXHQgc2VsLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIFxuICBcdFx0IGNvbnN0IHRleHRCdWlsZGVyID0gKHgsIHksIHRleHQsIHNpemUpID0+IHtcbiAgICAgICAgICBzZWxcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgICAgLnRleHQodGV4dClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc2l6ZSlcbiAgICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgIFx0fVxuICAgICAgIFxuICAgICAgbGV0IHkgPSAxMDtcbiAgICBcdGxldCB4ID0gNTA7XG4gICAgICB0ZXh0QnVpbGRlcih4LTQwLCB5LCAnU0VMRUNURUQgQ0FURUdPUklFUycsICcxNXB4Jyk7XG4gICAgXHR5Kz0zMDtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcyl7XG4gICAgICBcdGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPiAxIHx8IChhdHRycy5hY2FkZW1pY1ZhbHVlc1thdHRyXS5sZW5ndGggPT09IDEgJiYgYXR0cnMuYWNhZGVtaWNWYWx1ZXNbYXR0cl1bMF0gIT09ICdUb3RhbCcpKXtcbiAgICAgICAgXHR0ZXh0QnVpbGRlcih4LCB5LCAnLSAnICsgYXR0ciwgJzE1cHgnKTtcbiAgICAgICAgICB5Kz0zMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgIFx0aWYgKGF0dHJzLmRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPiAwKXtcbiAgICAgICAgIHRleHRCdWlsZGVyKHgsIHksICctICcgKyBhdHRyLCAnMTVweCcpO1xuICAgICAgICAgIHkrPTMwO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpe1xuICAgIFx0Y29uc3QgbmMgPSB0aGlzO1xuICAgIFx0Y29uc3QgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKVxuICAgICAgXG4gICAgXHRjb25zdCB3aWR0aCA9IGF0dHJzLnN2Z1dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gYXR0cnMuc3ZnSGVpZ2h0ICxcbiAgICAgICAgICAgIG1heFJhZGl1cyA9IChNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIpIC0gNTtcblxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgLnJhbmdlKFswLCAyICogTWF0aC5QSV0pXG4gICAgICAgICAgICAuY2xhbXAodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlU3FydCgpXG4gICAgICAgICAgICAucmFuZ2UoW21heFJhZGl1cyouMSwgbWF4UmFkaXVzXSk7XG5cbiAgICAgICAgY29uc3QgcGFydGl0aW9uID0gZDMucGFydGl0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgYXJjID0gZDMuYXJjKClcbiAgICAgICAgICAgIC5zdGFydEFuZ2xlKGQgPT4geChkLngwKSlcbiAgICAgICAgICAgIC5lbmRBbmdsZShkID0+IHgoZC54MSkpXG4gICAgICAgICAgICAuaW5uZXJSYWRpdXMoZCA9PiBNYXRoLm1heCgwLCB5KGQueTApKSlcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyhkID0+IE1hdGgubWF4KDAsIHkoZC55MSkpKTtcblxuICAgICAgICBjb25zdCBtaWRkbGVBcmNMaW5lID0gZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYWxmUGkgPSBNYXRoLlBJLzI7XG4gICAgICAgICAgICBjb25zdCBhbmdsZXMgPSBbeChkLngwKSAtIGhhbGZQaSwgeChkLngxKSAtIGhhbGZQaV07XG4gICAgICAgICAgICBjb25zdCByID0gTWF0aC5tYXgoMCwgKHkoZC55MCkgKyB5KGQueTEpKSAvIDIpO1xuXHRcdFx0XHRcdFxuICAgICAgICAgICAgY29uc3QgbWlkZGxlQW5nbGUgPSAoYW5nbGVzWzFdICsgYW5nbGVzWzBdKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBpbnZlcnREaXJlY3Rpb24gPSBtaWRkbGVBbmdsZSA+IDAgJiYgbWlkZGxlQW5nbGUgPCBNYXRoLlBJOyAvLyBPbiBsb3dlciBxdWFkcmFudHMgd3JpdGUgdGV4dCBjY3dcbiAgICAgICAgICAgIGlmIChpbnZlcnREaXJlY3Rpb24pIHsgYW5nbGVzLnJldmVyc2UoKTsgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZDMucGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5hcmMoMCwgMCwgciwgYW5nbGVzWzBdLCBhbmdsZXNbMV0sIGludmVydERpcmVjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gcGF0aC50b1N0cmluZygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRleHRGaXRzID0gZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBDSEFSX1NQQUNFID0gMztcblxuICAgICAgICAgICAgY29uc3QgZGVsdGFBbmdsZSA9IHgoZC54MSkgLSB4KGQueDApO1xuICAgICAgICAgICAgY29uc3QgciA9IE1hdGgubWF4KDAsICh5KGQueTApICsgeShkLnkxKSkgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHBlcmltZXRlciA9IHIgKiBkZWx0YUFuZ2xlO1xuXG4gICAgICAgICAgICByZXR1cm4gZC5kYXRhLm5hbWUubGVuZ3RoICogQ0hBUl9TUEFDRSA8IHBlcmltZXRlcjtcbiAgICAgICAgfTtcblxuICAgIFx0XHRkMy5zZWxlY3QoXCIjbm9kZS1kaXZcIikuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBhdHRycy5iYWNrZ3JvdW5kQ29sb3IpXG5cbiAgICBcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjY2hhcnQtY29udGFpbmVyJylcblx0XHRcdFx0XHRcdC5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIGF0dHJzLmJhY2tncm91bmRDb2xvcilcbiAgICAgICAgICAgIC5hdHRyKCd2aWV3Qm94JywgYCR7KC13aWR0aCsyNzUpIC8gMn0gJHsoLWhlaWdodC0xMjApIC8gMn0gJHt3aWR0aH0gJHtoZWlnaHR9YClcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoKSA9PiBmb2N1c09uKCkpOyAvLyBSZXNldCB6b29tIG9uIGNhbnZhcyBjbGlja1xuXG5cdFx0XHQgbGV0IGlubmVyUmFkaXVzID0geSgwLjMzMzMzMzMpIFxuICAgICAgIGxldCBjZW50ZXJHcm91cCA9IHN2Z1xuICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItZ3JvdXAtbm9kZXMnKVxuXG4gICAgICAgIGNlbnRlckdyb3VwLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlLW5vZGVzJylcbiAgICAgICAgICAgIC5hdHRyKCdjeCcsIDApXG4gICAgICAgICAgICAuYXR0cignY3knLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLDApXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRleHRDaXJjbGUgPSBjZW50ZXJHcm91cFxuICAgICAgICAgICAgLmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIC1pbm5lclJhZGl1cylcbiAgICAgICAgICAgIC5hdHRyKCd5JywgLWlubmVyUmFkaXVzLzMpXG4gICAgICAgIFx0XHQuYXR0cignZHknLCAtMC41KVxuICAgICAgICBcdFx0LmF0dHIoJ3dpZHRoJywgIGlubmVyUmFkaXVzKjIpXG4gIFx0XHRcdFx0XHQuYXR0cignaGVpZ2h0JywgIGlubmVyUmFkaXVzKjIpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIFwiMzBweFwiKVxuICAgICAgICBcdFx0LmFwcGVuZCgneGh0bWw6cCcpXG4gICAgICAgICAgICAgIC50ZXh0KGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0KVxuXG5cbiAgICBcdFx0bGV0IHJvb3QgPSBub2Rlc1xuICAgICAgICByb290ID0gZDMuaGllcmFyY2h5KHJvb3QpO1xuICAgICAgICByb290LnN1bShkID0+IGQuc2l6ZSk7XG5cbiAgICAgICAgY29uc3Qgc2xpY2UgPSBzdmcuc2VsZWN0QWxsKCdnLnNsaWNlJylcbiAgICAgICAgICAgIC5kYXRhKHBhcnRpdGlvbihyb290KS5kZXNjZW5kYW50cygpKTtcblxuICAgICAgICBzbGljZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgbmV3U2xpY2UgPSBzbGljZS5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnc2xpY2UnKVxuICAgICAgICBcdFx0Lm9uKCdtb3VzZW92ZXInLCBkID0+IHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZS50ZXh0KGQuZGF0YS5kZXNjcmlwdGlvbikgICAgICAgXG4gICAgICAgICAgICB9KS5vbignbW91c2VvdXQnLCBkID0+IHtcbiAgICAgICAgICAgICAgIHRleHRDaXJjbGUudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIFx0IFxuICAgICAgICAgICAgICBcdGlmIChkLmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgICAgIGZvY3VzT24oZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdChkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyU2VsZWN0ZWRBdHRyaWJ1dGVzKClcbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICBuZXdTbGljZS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ21haW4tYXJjJylcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsICBkID0+IHRoaXMucmdiYU9ialRvQ29sb3IoZC5kYXRhLmNvbG9yIHx8IGQucGFyZW50LmRhdGEuY29sb3IpKVxuICAgICBcdFx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgJ3doaXRlJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZD0+IGQuZGF0YS5ib3JkZXJXaWR0aCB8fCBhdHRycy51bmNsaWNrZWRXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdkJywgYXJjKTtcblxuICAgIFx0XHRcbiAgICBcdFx0bmV3U2xpY2UuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnaGlkZGVuLWFyYycpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgKF8sIGkpID0+IGBoaWRkZW5BcmMke2l9YClcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIG1pZGRsZUFyY0xpbmUpO1xuXHRcdFx0XHRcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ld1NsaWNlLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIFx0XHRcdFx0ICAgICAgIFx0LmF0dHIoJ2NsYXNzJywgJ2FyYy10ZXh0JylcbiAgICAgICAgXHRcdFx0XHRcdFx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsIFwiMTJweFwiKVxuICAgICAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCBkID0+IHRleHRGaXRzKGQpID8gbnVsbCA6ICdub25lJyk7XG5cbiAgICAgICAgLy8gQWRkIHdoaXRlIGNvbnRvdXJcbiAgICAgICAgdGV4dC5hcHBlbmQoJ3RleHRQYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdzdGFydE9mZnNldCcsJzUwJScpXG4gICAgICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIChfLCBpKSA9PiBgI2hpZGRlbkFyYyR7aX1gIClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XG5cbiAgICAgICAgdGV4dC5hcHBlbmQoJ3RleHRQYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdzdGFydE9mZnNldCcsJzUwJScpXG4gICAgICAgICAgICAuYXR0cigneGxpbms6aHJlZicsIChfLCBpKSA9PiBgI2hpZGRlbkFyYyR7aX1gIClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLm5hbWUpO1xuXG5cdFx0XHRcdFxuICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5vbmNsaWNrID0gc2VsZWN0QWxsO1xuICAgIFx0XHRmdW5jdGlvbiBzZWxlY3RBbGwoKXtcbiAgICAgICAgICBcdGZvciAobGV0IGNoaWxkIG9mIGF0dHJzLmZvY3Vzc2VkLmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgc2VsZWN0KGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFx0XHRcbiAgICBcdFx0ZnVuY3Rpb24gc2VsZWN0KGQpe1xuICAgICAgICAgIFx0XHRpZiAoZC5kYXRhLmNvbG9yID09IGNvbG9ycy5VbmNvbGxlY3RlZF9Ob2RlX0ZpbGwpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGQucGFyZW50LmRhdGFcbiAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5kaXZlcnNpdHlWYWx1ZXNbcGFyZW50Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXS5pbmRleE9mKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmRpdmVyc2l0eVZhbHVlc1twYXJlbnQubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICBcdGQuZGF0YS5ib3JkZXJXaWR0aCA9IGF0dHJzLnVuY2xpY2tlZFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMuZGl2ZXJzaXR5VmFsdWVzW3BhcmVudC5uYW1lXS5wdXNoKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZGF0YS5ib3JkZXJXaWR0aCA9IGF0dHJzLmNsaWNrZWRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0uaW5kZXhPZihkLmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZGF0YS5ib3JkZXJXaWR0aCA9IGF0dHJzLnVuY2xpY2tlZFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAwKSB7Ly9pZiBlbXB0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucHVzaCgnVG90YWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYWNhZGVtaWNWYWx1ZXNbcGFyZW50Lm5hbWVdLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXVswXSA9PSAnVG90YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgJ1RvdGFsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRycy5hY2FkZW1pY1ZhbHVlc1twYXJlbnQubmFtZV0ucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzLmFjYWRlbWljVmFsdWVzW3BhcmVudC5uYW1lXS5wdXNoKGQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZGF0YS5ib3JkZXJXaWR0aCA9IGF0dHJzLmNsaWNrZWRXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycy5hY2FkZW1pY1ZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsICo9IGF0dHJzLmFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG90YWwgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1dBUk5JTkc6IEFkZGluZyBtb3JlIGFjYWRlbWljIGF0dHJpYnV0ZXMgbWF5IHJlc3VsdCBpbiBsb3cgdmlzaWJpbGl0eSBpbiB0aGUgdmlzdWFsaXphdGlvbi4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcdCB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoJ3BhdGgubWFpbi1hcmMnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBkPT4gZC5kYXRhLmJvcmRlcldpZHRoIHx8IGF0dHJzLnVuY2xpY2tlZFdpZHRoKTsgXG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stYnV0dG9uLW5vZGVzJykub25jbGljayA9ICgpID0+IGZvY3VzT24oKTtcbiAgICBcdFx0Zm9jdXNPbigpXG4gICAgXG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzT24oZCA9IHsgeDA6IDAsIHgxOiAxLCB5MDogMCwgeTE6IDEgfSkge1xuICAgICAgICAgICAgLy8gUmVzZXQgdG8gdG9wLWxldmVsIGlmIG5vIGRhdGEgcG9pbnQgc3BlY2lmaWVkXG5cbiAgICAgICAgICBcdGlmIChkLngwPT0wICYmIGQueDE9PTEgJiYgZC55MCA9PSAwICYmIGQueTE9PTEpe1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBuYy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuRGlzYWJsZWQpO1xuICAgICAgIFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmNvbG9yID0gbmMucmdiYU9ialRvQ29sb3IoY29sb3JzLkRpc2FibGVkX1RleHQpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VudGVyLWdyb3VwLW5vZGVzJykuc3R5bGUuZGlzcGxheT0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtYWxsLWJ1dHRvbicpLnN0eWxlLmRpc3BsYXk9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF0dHJzLmZvY3Vzc2VkID0gZDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24tbm9kZXMnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5jLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuICAgICAgICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbi1ub2RlcycpLnN0eWxlLmNvbG9yID0nd2hpdGUnO1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VudGVyLWdyb3VwLW5vZGVzJykuc3R5bGUuZGlzcGxheT0gJ25vbmUnO1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWFsbC1idXR0b24nKS5zdHlsZS5kaXNwbGF5PSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zaXRpb24gPSBzdmcudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgICAgICAgICAudHdlZW4oJ3NjYWxlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ZCA9IGQzLmludGVycG9sYXRlKHguZG9tYWluKCksIFtkLngwLCBkLngxXSksXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZCA9IGQzLmludGVycG9sYXRlKHkuZG9tYWluKCksIFtkLnkwLCAxXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0+IHsgeC5kb21haW4oeGQodCkpOyB5LmRvbWFpbih5ZCh0KSk7IH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb24uc2VsZWN0QWxsKCdwYXRoLm1haW4tYXJjJylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZCA9PiAoKSA9PiBhcmMoZCkpO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uLnNlbGVjdEFsbCgncGF0aC5oaWRkZW4tYXJjJylcbiAgICAgICAgICAgICAgICAuYXR0clR3ZWVuKCdkJywgZCA9PiAoKSA9PiBtaWRkbGVBcmNMaW5lKGQpKTtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbi5zZWxlY3RBbGwoJy5hcmMtdGV4dCcpXG4gICAgICAgICAgICAgICAgLmF0dHJUd2VlbignZGlzcGxheScsIGQgPT4gKCkgPT4gdGV4dEZpdHMoZCkgPyBudWxsIDogJ25vbmUnKTtcblxuICAgICAgICAgICAgbW92ZVN0YWNrVG9Gcm9udChkKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVN0YWNrVG9Gcm9udChlbEQpIHtcbiAgICAgICAgICAgICAgICBzdmcuc2VsZWN0QWxsKCcuc2xpY2UnKS5maWx0ZXIoZCA9PiBkID09PSBlbEQpXG4gICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnBhcmVudCkgeyBtb3ZlU3RhY2tUb0Zyb250KGQucGFyZW50KTsgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG5cblxuICAgIFxuICAgIFxuICAgICBcdHJldHVybiB0aGlzO1xuICB9XG4gIFxufSIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vbm9kZXMnO1xuXG5leHBvcnQgY2xhc3MgU3VuYnVyc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvL0V4cG9zZWQgdmFyaWFibGVzXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBpZDogYElEJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKX1gLCAvLyBJZCBmb3IgZXZlbnQgaGFuZGxpbmdzXG4gICAgICBzdmdXaWR0aDogMzAwMCxcbiAgICAgIHN2Z0hlaWdodDogMzAwMCxcbiAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGV4dGVuZGVkTGluZUxlbmd0aDogNDAsXG4gICAgICB0ZXh0RGlzdGFuY2U6IDI1LFxuICAgICAgb3V0ZXJUZXh0U2l6ZTogJzI1cHgnLFxuICAgICAgYXR0cmlidXRlSW5kZXg6IG51bGwsXG4gICAgICBoaXN0b3J5OiBbXSxcbiAgICAgIGRpc3BsYXlOb2RlczogbnVsbCxcbiAgICAgIHZhbHVlczogbnVsbCxcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBNYWxlOiAnI2ZjOGQ1OScsXG4gICAgICAgIEZlbWFsZTogJyM5MWJmZGInLFxuICAgICAgICBJbnRlcm5hdGlvbmFsOiAnIzk5OGVjMycsXG4gICAgICAgIERvbWVzdGljOiAnI2YxYTM0MCcsXG4gICAgICAgICc8PTE3JzogJyNmN2ZjZjUnLFxuICAgICAgICAnMTgtMjAnOiAnI2U1ZjVlMCcsXG4gICAgICAgICcyMS0yNSc6ICcjYzdlOWMwJyxcbiAgICAgICAgJzI2LTMwJzogJyNhMWQ5OWInLFxuICAgICAgICAnMzEtMzUnOiAnIzc0YzQ3NicsXG4gICAgICAgICczNi00NSc6ICcjNDFhYjVkJyxcbiAgICAgICAgJzQ2LTU1JzogJyMyMzhiNDUnLFxuICAgICAgICAnNTUrJzogJyMwMDZkMmMnLFxuICAgICAgICAwOiAnIzk4OTg5OCcsXG4gICAgICB9LFxuICAgICAgdGV4dENpcmNsZXNDYXRlZ29yeTogW10sXG4gICAgICB0ZXh0Q2lyY2xlc0NvdW50OiBbXSxcbiAgICAgIHRleHRDaXJjbGVzUGVyY2VudDogW10sXG4gICAgICB0aXRsZVRleHRTaXplOiAnMjVweCcsXG4gICAgICB0aXRsZVRleHRIZWlnaHQ6IDYwLFxuICAgICAgY29tcGFyZU1vZGU6IGZhbHNlLFxuICAgICAgbGVnZW5kV2lkdGg6IDE1MCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuU2xhdGVfR3JleSksXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDE6ICdDYXRlZ29yeScsXG4gICAgICBwbGFjZWhvbGRlcklubmVyVGV4dDI6ICcjIG9mIFN0dWRlbnRzJyxcbiAgICAgIHBsYWNlaG9sZGVySW5uZXJUZXh0MzogJyUgaW4gR3JvdXAnLFxuICAgIH07XG5cbiAgICAvL2dldCBhdHRyaWJ1dGVzIG1ldGhvZFxuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSA9ICgpID0+IGF0dHJzO1xuXG4gICAgLy9nZXR0ZXIgJiBzZXR0ZXJcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGZ1bmN0aW9uIChfKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBgYXR0cnNbJyR7a2V5fSddID0gX2A7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBldmFsKGBhdHRyc1snJHtrZXl9J107YCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZhbChzdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBpbiBzdmcgKi9cbiAgcmVtb3ZlQWxsKCkge1xuICAgIHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpLnN2Zy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgfVxuXG4gIHJnYmFPYmpUb0NvbG9yKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgfSkge1xuICAgIHJldHVybiBgcmdiYSgke3JlZH0sJHtncmVlbn0sJHtibHVlfSwke2FscGhhfSlgO1xuICB9XG4gIFxuICAvKiBDb252ZXJ0cyBvYmplY3RzIHRvIHNsaWNlcyB3aXRoIHF1ZXJpZXMgKi9cbiAgZ2V0VmFsdWVzKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIC8vIFNvcnRpbmcgYWdlXG4gICAgbGV0IG9yZGVyID0geyc8PTE3JzogMCxcbiAgICAgICAgJzE4LTIwJzogMSxcbiAgICAgICAgJzIxLTI1JzogMixcbiAgICAgICAgJzI2LTMwJzogMyxcbiAgICAgICAgJzMxLTM1JzogNCxcbiAgICAgICAgJzM2LTQ1JzogNSxcbiAgICAgICAgJzQ2LTU1JzogNixcbiAgICAgICAgJzU1KycgOiA3fTtcbiAgICBkaXZlcnNpdHlWYWx1ZXMuQWdlLnNvcnQoKGUxLCBlMikgPT4gKG9yZGVyW2UxXSAtIG9yZGVyW2UyXSkpO1xuIFx0XHRcbiAgICAvL1NvcnRpbmcgeWVhclxuICAgIGFjYWRlbWljVmFsdWVzWydBY2FkZW1pYyBZZWFyJ10uc29ydCgoZTEsIGUyKSA9PiAoTnVtYmVyKGUxLnN1YnN0cmluZygwLCA0KSkgLSBOdW1iZXIoZTIuc3Vic3RyaW5nKDAsIDQpICkpKTtcbiAgICBcbiAgICAvL3ByZXBhcmluZyBzbGljZXNcbiAgICBjb25zdCBjYXJ0ZXNpYW4gPSAoLi4uYSkgPT5cbiAgICAgIGEucmVkdWNlKChhLCBiKSA9PlxuICAgICAgICBhLmZsYXRNYXAoKGQpID0+IGIubWFwKChlKSA9PiBbZCwgZV0uZmxhdCgpKSlcbiAgICAgICk7XG4gICAgbGV0IHNsaWNlcyA9IGNhcnRlc2lhbihcbiAgICAgIGFjYWRlbWljVmFsdWVzWydBY2FkZW1pYyBZZWFyJ10sXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5EZWdyZWUsXG4gICAgICBhY2FkZW1pY1ZhbHVlcy5GYWN1bHR5LFxuICAgICAgYWNhZGVtaWNWYWx1ZXNbJ1N0dWR5IFN0YXR1cyddXG4gICAgKTtcblxuICAgIGNvbnN0IG1ha2VRdWVyeSA9IChzbGljZSwgZGl2ZXJzaXR5QXR0ciwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBxdWVyeSA9IFsuLi5zbGljZV07XG4gICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChwcm9wICE9PSBkaXZlcnNpdHlBdHRyKSB7XG4gICAgICAgICAgcXVlcnkucHVzaCgnVG90YWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH07XG5cbiAgICAvL2NvbnZlcnQgc2xpY2VzIHRvIGtleSBmb3JtYXRcblxuICAgIGxldCB2YWx1ZXMgPSB7fTtcbiAgICBmb3IgKGxldCBzbGljZSBvZiBzbGljZXMpIHtcbiAgICAgIGxldCBzdHIgPSBzbGljZS50b1N0cmluZygpO1xuICAgICAgdmFsdWVzW3N0cl0gPSB7fTtcbiAgICAgIGZvciAobGV0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKSB7XG4gICAgICAgIGlmIChkaXZlcnNpdHlWYWx1ZXNbYXR0cl0ubGVuZ3RoID09IDApIGNvbnRpbnVlO1xuICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXSA9IHt9O1xuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiBkaXZlcnNpdHlWYWx1ZXNbYXR0cl0pIHtcbiAgICAgICAgICB2YWx1ZXNbc3RyXVthdHRyXVt2YWx1ZV0gPSBtYWtlUXVlcnkoXG4gICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIC8qIEdpdmVuIHNjcmVlbiB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2YgYXJjcywgcmV0dXJuIGFyYyB3aWR0aCwgaW5uZXJyYWRpdXMgYW5kIHRleHQgc2l6ZSovXG4gIGNvbXB1dGVTdW5idXJzdFBhcmFtZXRlcnMoeCwgeSwgbnVtQXJjcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgbGV0IHRleHRIZWlnaHRPZmZzZXQgPSA1MDtcblxuICAgIGxldCBtaW4gPSBNYXRoLm1pbih4LCB5IC0gdGV4dEhlaWdodE9mZnNldCk7XG4gICAgbGV0IGFyY1dpZHRoID0gbWluIC8gKDIgKiBudW1BcmNzICsgNyk7IC8vbWluID0gMipudW1BcmNzKmFyY1dpZHRoICsgMippbm5lclJhZGl1cywgaW5uZXJSYWRpdXMgPSAzKmFyY1dpZHRoXG4gICAgbGV0IGlubmVyUmFkaXVzID0gMyAqIGFyY1dpZHRoO1xuXG4gICAgbGV0IG11bHRpcGxpZXIgPSAxLjU7XG4gICAgbGV0IG4gPSAxMzsgLy8naW50ZXJuYXRpb25hbCcgd2l0aCAxMyBsZXR0ZXJzIGlzIGxvbmdlc3Qgd29yZCBpbiBkaXZlcnNpdHkgYXR0cmlidXRlc1xuICAgIGxldCBpbm5lclRleHRTaXplID1cbiAgICAgIChtdWx0aXBsaWVyICogKDIgKiBpbm5lclJhZGl1cykpIC8gbiArICdweCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFyY1dpZHRoOiBhcmNXaWR0aCxcbiAgICAgIGlubmVyUmFkaXVzOiBpbm5lclJhZGl1cyxcbiAgICAgIGlubmVyVGV4dFNpemU6IGlubmVyVGV4dFNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qIEdpdmVuIHNjcmVlbiB3aWR0aCwgaGVpZ2h0IGFuZCBudW1iZXIgb2Ygc3F1YXJlcywgcmV0dXJuIHJvd3MsIGNvbHVtbnMgYW5kIHNxdWFyZSBzaXplICovXG4gIGNvbXB1dGVDb21wYXJlRGltZW5zaW9ucyh4LCB5LCBuKSB7XG4gICAgLy8gQ29tcHV0ZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucywgYW5kIGNlbGwgc2l6ZVxuICAgIGxldCByYXRpbyA9IHggLyB5O1xuICAgIGxldCBuY29sc19mbG9hdCA9IE1hdGguc3FydChuICogcmF0aW8pO1xuICAgIGxldCBucm93c19mbG9hdCA9IG4gLyBuY29sc19mbG9hdDtcblxuICAgIC8vIEZpbmQgYmVzdCBvcHRpb24gZmlsbGluZyB0aGUgd2hvbGUgaGVpZ2h0XG4gICAgbGV0IG5yb3dzMSA9IE1hdGguY2VpbChucm93c19mbG9hdCk7XG4gICAgbGV0IG5jb2xzMSA9IE1hdGguY2VpbChuIC8gbnJvd3MxKTtcbiAgICB3aGlsZSAobnJvd3MxICogcmF0aW8gPCBuY29sczEpIHtcbiAgICAgIG5yb3dzMSsrO1xuICAgICAgbmNvbHMxID0gTWF0aC5jZWlsKG4gLyBucm93czEpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMSA9IHkgLyBucm93czE7XG5cbiAgICAvLyBGaW5kIGJlc3Qgb3B0aW9uIGZpbGxpbmcgdGhlIHdob2xlIHdpZHRoXG4gICAgbGV0IG5jb2xzMiA9IE1hdGguY2VpbChuY29sc19mbG9hdCk7XG4gICAgbGV0IG5yb3dzMiA9IE1hdGguY2VpbChuIC8gbmNvbHMyKTtcbiAgICB3aGlsZSAobmNvbHMyIDwgbnJvd3MyICogcmF0aW8pIHtcbiAgICAgIG5jb2xzMisrO1xuICAgICAgbnJvd3MyID0gTWF0aC5jZWlsKG4gLyBuY29sczIpO1xuICAgIH1cbiAgICBsZXQgY2VsbF9zaXplMiA9IHggLyBuY29sczI7XG5cbiAgICAvLyBGaW5kIHRoZSBiZXN0IHZhbHVlc1xuICAgIGxldCBucm93cywgbmNvbHMsIGNlbGxfc2l6ZTtcbiAgICBpZiAoY2VsbF9zaXplMSA8IGNlbGxfc2l6ZTIpIHtcbiAgICAgIG5yb3dzID0gbnJvd3MyO1xuICAgICAgbmNvbHMgPSBuY29sczI7XG4gICAgICBjZWxsX3NpemUgPSBjZWxsX3NpemUyO1xuICAgIH0gZWxzZSB7XG4gICAgICBucm93cyA9IG5yb3dzMTtcbiAgICAgIG5jb2xzID0gbmNvbHMxO1xuICAgICAgY2VsbF9zaXplID0gY2VsbF9zaXplMTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzaXplOiBjZWxsX3NpemUsIHJvd3M6IG5yb3dzLCBjb2xzOiBuY29scyB9O1xuICB9XG5cbiAgLyogRmV0Y2hpbmcgZGF0YSBhbmQgc2V0dGluZyB1cCBzdmcgY29udGFpbmVyICovXG4gIGFzeW5jIHNldHVwKHVybCkge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICAvL2xvYWQgZGF0YSBzeW5jaHJvbm91c2x5XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGQzLmNzdih1cmwpO1xuXG4gICAgYXR0cnMuYXR0cmlidXRlSW5kZXggPSBkYXRhLmNvbHVtbnM7XG5cbiAgICAvL2NvbnZlcnQgZGF0YSB0byBvYmplY3QgZm9ybWF0XG4gICAgYXR0cnMuZGF0YSA9IGRhdGEucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG9iaiwgaSkge1xuICAgICAgbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMob2JqKTtcblxuICAgICAgdmFsdWVzLnBvcCgpO1xuXG4gICAgICBtYXBbJycuY29uY2F0KHZhbHVlcyldID0gb2JqLkNvdW50O1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG5cbiAgICAvLyBjcmVhdGUgY29udGFpbmVyXG4gICAgbGV0IHN2ZyA9IGQzLnNlbGVjdChhdHRycy5jb250YWluZXIpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgYXR0cnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICBcbiAgICAvLyBzZXR0aW5nIHVwIGNvbXBhcmUgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQ29tcGFyZSA9ICgpID0+IHtcbiAgICAgIGF0dHJzLmNvbXBhcmVNb2RlID0gIWF0dHJzLmNvbXBhcmVNb2RlO1xuICAgICAgc2IucmVuZGVyKGF0dHJzLnZhbHVlcyk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICdjb21wYXJlLWJ1dHRvbidcbiAgICApLm9uY2xpY2sgPSB0b2dnbGVDb21wYXJlO1xuXG4gICAgYXR0cnMuc3ZnID0gc3ZnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogQ29udmVydGluZyBpbnB1dCBvYmplY3RzIHRvIHZhbHVlcyBmb3IgZGlzcGxheSAqL1xuICBpbml0aWFsUmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpIHtcbiAgICBsZXQgYXR0cnMgPSB0aGlzLmdldENoYXJ0U3RhdGUoKTtcblxuICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcyhcbiAgICAgIGFjYWRlbWljVmFsdWVzLFxuICAgICAgZGl2ZXJzaXR5VmFsdWVzXG4gICAgKTtcblxuICAgIFxuICAgIGNvbnN0IHRpdGxlQnVpbGRlciA9IChhY2FkZW1pY1ZhbHVlcywgZGl2ZXJzaXR5VmFsdWVzKSA9PiB7XG4gICAgICBsZXQgbGlzdCA9IFtdO1xuICAgICAgXG4gICAgICBjb25zdCBnZXRBdHRyQXNUaXRsZSA9IChhdHRyKSA9PiB7XG4gICAgICAgICBpZiAoYXR0ciA9PT0gJ0FjYWRlbWljIFllYXInKXtcbiAgICAgICAgICAgXHRyZXR1cm4gJyAyMDEzLTIwMjEnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0RlZ3JlZScpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIGRlZ3JlZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ0ZhY3VsdHknKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBmYWN1bHRpZXMnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ1N0dWR5IFN0YXR1cycpe1xuICAgICAgICAgICBcdCAgcmV0dXJuICcgYWxsIHN0dWR5IHN0YXR1c2VzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdBZ2UnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBhZ2VzJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdTZXgnKXtcbiAgICAgICAgICAgXHQgIHJldHVybiAnIGFsbCBzZXhlcyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnQ2l0aXplbnNoaXAgU3RhdHVzJyl7XG4gICAgICAgICAgIFx0ICByZXR1cm4gJyBhbGwgY2l0aXplbnNoaXAgc3RhdHVzZXMnO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGFjYWRlbWljVmFsdWVzKXtcbiAgICAgIFx0aWYgKGFjYWRlbWljVmFsdWVzW2F0dHJdLmxlbmd0aCA9PT0gMSAmJiBhY2FkZW1pY1ZhbHVlc1thdHRyXVswXSA9PT0gJ1RvdGFsJyl7XG4gICAgICAgIFx0bGlzdC5wdXNoKGdldEF0dHJBc1RpdGxlKGF0dHIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZGl2ZXJzaXR5VmFsdWVzKXtcbiAgICAgIFx0aWYgKGRpdmVyc2l0eVZhbHVlc1thdHRyXS5sZW5ndGggPT09IDApe1xuICAgICAgICBcdGxpc3QucHVzaChnZXRBdHRyQXNUaXRsZShhdHRyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3QubGVuZ3RoID09IDApXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIFxuXHRcdFx0aWYgKGxpc3QubGVuZ3RoID09IDEpXG4gICAgICAgXHRyZXR1cm4gJ1N0dWRlbnRzIGFjcm9zcyAnICsgbGlzdC5wb3AoKSArICcuJzsgXG4gICAgICBcblx0XHRcdHJldHVybiAnU3R1ZGVudHMgYWNyb3NzICcgKyBsaXN0LnNsaWNlKDAsIC0xKS5qb2luKCkgKyAnIGFuZCAnICsgbGlzdC5wb3AoKSArICcuJztcbiAgICB9O1xuICAgICBcbiAgICBjb25zdCB3aWR0aCA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QtY29udGFpbmVyJylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoO1xuICAgIFxuICAgIGxldCB0aXRsZSA9IGQzXG4gICAgICAuc2VsZWN0KCcjdml6LXRpdGxlLXRleHQnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBhdHRycy50aXRsZVRleHRTaXplKVxuICAgICAgLnRleHQodGl0bGVCdWlsZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpKTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcih2YWx1ZXMpO1xuICB9XG5cbiAgLyogUmVjdXJyaW5nIHJlbmRlciAqL1xuICByZW5kZXIodmFsdWVzKSB7XG4gICAgbGV0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgbGV0IHNiID0gdGhpcztcblxuICAgIC8vIFNldHRpbmcgdmFsdWVzIHNvIHZhbHVlcyBpcyBzdGlsbCBhY2Nlc3NpYmxlIHdoZW4gY29tcGFyZSBpcyB0b2dnbGVkXG4gICAgYXR0cnMudmFsdWVzID0gdmFsdWVzO1xuXG4gICAgXG4gICAgLy8gcmVwdXJwb3NpbmcgYmFjayBidXR0b24gaWYgbmVjZXNzYXJ5XG4gICAgaWYgKGF0dHJzLmhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYmFjayA9ICgpID0+IHNiLnJlbmRlcihhdHRycy5oaXN0b3J5LnBvcCgpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLWJ1dHRvbicpLm9uY2xpY2sgPSBiYWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gYXR0cnMuZGlzcGxheU5vZGVzO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgZWxlbWVudHMgaW4gc3ZnXG4gICAgdGhpcy5yZW1vdmVBbGwoKTtcblxuICAgIC8vIHJlLWNyZWF0ZSB0aGUgbmV3IGVsZW1lbnRzXG4gICAgaWYgKCFhdHRycy5jb21wYXJlTW9kZSkgeyBcbiAgICAgIFxuICAgICAgLy8gZGlzYWJsZSBjb21wYXJlIG1vZGUgaWYgb25seSAxIHNsaWNlXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5pbm5lckhUTUwgPSAnQ29tcGFyZSc7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGggPT09IDEpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9dGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuRGlzYWJsZWQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFyZS1idXR0b24nKS5zdHlsZS5jb2xvciA9dGhpcy5yZ2JhT2JqVG9Db2xvcihjb2xvcnMuRGlzYWJsZWRfVGV4dCk7XG4gICAgICB9IGVsc2V7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMucmdiYU9ialRvQ29sb3IoY29sb3JzLkJ1dHRvbik7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmNvbG9yID0nd2hpdGUnO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLnJlbmRlclN1bmJ1cnN0KHZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYXJlLWJ1dHRvbicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICB0aGlzLnJnYmFPYmpUb0NvbG9yKGNvbG9ycy5CdXR0b24pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhcmUtYnV0dG9uJykuaW5uZXJIVE1MID0gJ0NvbmpvaW4nO1xuICAgICAgdGhpcy5yZW5kZXJDb21wYXJlKHZhbHVlcyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyTGVnZW5kKHZhbHVlcyk7XG4gIH1cblxuICAvLyByZW5kZXIgdGhlIHN1bmJ1cnN0XG4gIHJlbmRlclN1bmJ1cnN0KHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGxldCBzYiA9IHRoaXM7XG5cbiAgICBcbiAgICAvL0hlbHBlciB2YWx1ZXNcbiAgICBjb25zdCBudW1TbGljZXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aDtcbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKS5sZW5ndGg7XG4gICAgY29uc3QgZXh0ZW5kZWRMaW5lTGVuZ3RoID0gYXR0cnMuZXh0ZW5kZWRMaW5lTGVuZ3RoO1xuICAgIGNvbnN0IGhhbGZTbGljZVJhZGlhbnMgPSBNYXRoLlBJIC8gbnVtU2xpY2VzO1xuICAgIGNvbnN0IHRleHREaXN0YW5jZSA9IGF0dHJzLnRleHREaXN0YW5jZTtcbiAgICBjb25zdCBhcmNMZW5ndGggPSAoMiAqIE1hdGguUEkpIC8gbnVtU2xpY2VzO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZDNcbiAgICAgIC5zZWxlY3QoJyNzdW5idXJzdC1jb250YWluZXInKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICtjb250YWluZXIuaGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gK2NvbnRhaW5lci53aWR0aDtcblxuICAgIGNvbnN0IGhlaWdodCA9IGNvbnRhaW5lckhlaWdodC1hdHRycy50aXRsZVRleHRIZWlnaHQ7XG4gICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXaWR0aCAtIGF0dHJzLmxlZ2VuZFdpZHRoO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBudW1BcmNzXG4gICAgKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgICBjb25zdCBpbm5lclRleHRTaXplID0gcGFyYW1zLmlubmVyVGV4dFNpemU7XG5cbiAgICBsZXQgc3ZnID0gYXR0cnMuc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgIC5hdHRyKFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgYHRyYW5zbGF0ZSgke3dpZHRoIC8gMn0sJHtoZWlnaHQvIDIgICsgYXR0cnMudGl0bGVUZXh0SGVpZ2h0fSlgXG4gICAgICApO1xuXG4gICAgbGV0IGNlbnRlckdyb3VwID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgIC5hdHRyKCdjeCcsIDApXG4gICAgICAuYXR0cignY3knLCAwKVxuICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCA1KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcblxuICAgIGxldCB0ZXh0Q2lyY2xlMSA9IGNlbnRlckdyb3VwXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5hdHRyKCdkeScsICctMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoIGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MSlcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTIgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnMC41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoIGF0dHJzLnBsYWNlaG9sZGVySW5uZXJUZXh0MilcbiAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG5cbiAgICBsZXQgdGV4dENpcmNsZTMgPSBjZW50ZXJHcm91cFxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuYXR0cignZHknLCAnMS41ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQzKVxuICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcblxuICAgIGxldCBzdW5idXJzdEdyb3VwID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdzdW5idXJzdC1ncm91cCcpO1xuXG4gICAgLy9IZWxwZXIgbWV0aG9kc1xuICAgIGNvbnN0IGdldENpcmNsZVggPSAocmFkaWFucywgcmFkaXVzKSA9PlxuICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXM7XG4gICAgY29uc3QgZ2V0Q2lyY2xlWSA9IChyYWRpYW5zLCByYWRpdXMpID0+XG4gICAgICBNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cztcblxuICAgIGNvbnN0IGdldFRleHQgPSAoc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSB3b3Jkcy5maWx0ZXIoXG4gICAgICAgICh3b3JkKSA9PiB3b3JkICE9PSAnVG90YWwnXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsdGVyZWQuam9pbignXFxyXFxuJyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvL2xpbmUgYnVpbGRlclxuICAgIGNvbnN0IGxpbmVCdWlsZGVyID0gKHNsaWNlQ291bnQpID0+IHtcbiAgICAgIGxldCByYWRpYW5zID0gKDIgKiBNYXRoLlBJICogc2xpY2VDb3VudCkgLyBudW1TbGljZXM7XG4gICAgICBpZiAobnVtU2xpY2VzICUgMiA9PSAxKSByYWRpYW5zICs9IE1hdGguUEk7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ3gxJywgZ2V0Q2lyY2xlWChyYWRpYW5zLCBpbm5lclJhZGl1cykpXG4gICAgICAgIC5hdHRyKCd5MScsIGdldENpcmNsZVkocmFkaWFucywgaW5uZXJSYWRpdXMpKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAneDInLFxuICAgICAgICAgIGdldENpcmNsZVgoXG4gICAgICAgICAgICByYWRpYW5zLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgK1xuICAgICAgICAgICAgICBudW1BcmNzICogYXJjV2lkdGggK1xuICAgICAgICAgICAgICBleHRlbmRlZExpbmVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgJ3kyJyxcbiAgICAgICAgICBnZXRDaXJjbGVZKFxuICAgICAgICAgICAgcmFkaWFucyxcbiAgICAgICAgICAgIGlubmVyUmFkaXVzICtcbiAgICAgICAgICAgICAgbnVtQXJjcyAqIGFyY1dpZHRoICtcbiAgICAgICAgICAgICAgZXh0ZW5kZWRMaW5lTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAvL3RleHQgYnVpbGRlclxuICAgIGNvbnN0IHRleHRCdWlsZGVyID0gKHNsaWNlLCBzbGljZUNvdW50KSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeCA9IGdldENpcmNsZVgocmFkaWFucywgcmFkaXVzKTtcbiAgICAgIGxldCB5ID0gLWdldENpcmNsZVkocmFkaWFucywgcmFkaXVzKTtcblxuICAgICAgaWYgKHggPCAtMSkgeCAtPSB0ZXh0Lmxlbmd0aCAqIDk7XG4gICAgICAvL2xlZnQgc2lkZSBhZGp1c3RcbiAgICAgIGVsc2UgaWYgKHggPCAxKSB4IC09IHRleHQubGVuZ3RoICogNTsgLy9taWRkbGUgdGV4dCBhZGp1c3RcblxuICAgICAgc3VuYnVyc3RHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgYXR0cnMub3V0ZXJUZXh0U2l6ZSlcbiAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKFxuICAgICAgYXJjLFxuICAgICAgc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlLFxuICAgICAgc2xpY2UsXG4gICAgICBhdHRyLFxuICAgICAgdmFsdWUsXG4gICAgICBjb3VudCxcbiAgICAgIHBlcmNlbnRcbiAgICApID0+IHtcbiAgICAgIHN1bmJ1cnN0R3JvdXBcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5kYXR1bSh7XG4gICAgICAgICAgc3RhcnRBbmdsZTogc3RhcnRBbmdsZSxcbiAgICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAnYmxhY2snKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGF0dHJzLmNvbG9yc1t2YWx1ZV0pXG4gICAgICAgIC5hdHRyKCdkJywgYXJjKVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJy44NScpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KFwiW2lkPSdcIiArIHZhbHVlICsgXCJyZWN0J11cIikuc3R5bGUoXG4gICAgICAgICAgICAnc3Ryb2tlLXdpZHRoJyxcbiAgICAgICAgICAgIDNcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICAgIGlmIChhdHRyID09PSAnQWdlJykge1xuICAgICAgICAgICAgICB0ZXh0Q2lyY2xlMVxuICAgICAgICAgICAgICAgIC50ZXh0KGF0dHIgKyAnOiAnICsgdmFsdWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTEudGV4dCh2YWx1ZSkuYXR0cignb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgdGV4dENpcmNsZTIudGV4dCgnPDUnKS5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoY291bnQpLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXh0Q2lyY2xlM1xuICAgICAgICAgICAgICAudGV4dChcbiAgICAgICAgICAgICAgICBOdW1iZXIoKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSkpICsgJyUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0Q2lyY2xlMS50ZXh0KCcnKTtcbiAgICAgICAgICAgIHRleHRDaXJjbGUyXG4gICAgICAgICAgICAgIC50ZXh0KCdObyBTdHVkZW50cycpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIHRleHRDaXJjbGUzLnRleHQoJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgIHRleHRDaXJjbGUxXG4gICAgICAgICAgICAudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDEpXG4gICAgICAgICAgICAuYXR0cignb3BhY2l0eScsICcuNScpO1xuICAgICAgICAgIHRleHRDaXJjbGUyLnRleHQoYXR0cnMucGxhY2Vob2xkZXJJbm5lclRleHQyKS5hdHRyKCdvcGFjaXR5JywgJy41Jyk7XG4gICAgICAgICAgdGV4dENpcmNsZTMudGV4dChhdHRycy5wbGFjZWhvbGRlcklubmVyVGV4dDMpLmF0dHIoJ29wYWNpdHknLCAnLjUnKTtcbiAgICAgICAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgdmFsdWUgKyBcInJlY3QnXVwiKS5zdHlsZShcbiAgICAgICAgICAgICdzdHJva2Utd2lkdGgnLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG51bUFyY3MgPT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBwcm92aWRlIGFueSBtb3JlIGRldGFpbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY291bnQgIT0gMCkge1xuICAgICAgICAgICAgICBsZXQgbmV3U2xpY2UgPSBzbGljZSArICcsJyArIHZhbHVlO1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVzID0ge1xuICAgICAgICAgICAgICAgIFtuZXdTbGljZV06IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXNbc2xpY2VdKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYXR0cnMuYXR0cmlidXRlSW5kZXguaW5kZXhPZihcbiAgICAgICAgICAgICAgICBhdHRyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIxID09PSBhdHRyKSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUxIGluIG5ld1ZhbHVlc1tuZXdTbGljZV1bXG4gICAgICAgICAgICAgICAgICAgIGF0dHIxXG4gICAgICAgICAgICAgICAgICBdKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdW3ZhbHVlMV1bXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlcyk7XG5cbiAgICAgICAgICAgICAgYXR0cnMuaGlzdG9yeS5wdXNoKHZhbHVlcyk7XG4gICAgICAgICAgICAgIHNiLnJlbmRlcihuZXdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFxuICBcbiAgICAvL2J1aWxkIGFyY3NcbiAgICBsZXQgc2xpY2VDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBzbGljZSBpbiB2YWx1ZXMpIHtcbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBhdHRybG9vcDogZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IGFyYyA9IGQzXG4gICAgICAgICAgLmFyYygpXG4gICAgICAgICAgLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiBhcmNDb3VudClcbiAgICAgICAgICAub3V0ZXJSYWRpdXMoXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArIGFyY1dpZHRoICogKGFyY0NvdW50ICsgMSlcbiAgICAgICAgICApO1xuXG4gICAgICAgIGxldCBzbGljZVN0YXJ0QW5nbGUgPSBzbGljZUNvdW50ICogYXJjTGVuZ3RoO1xuXG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICBzdW0gKz0gTnVtYmVyKFxuICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1bSA9PSAwKSB7XG4gICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICBzbGljZVN0YXJ0QW5nbGUgKyBhcmNMZW5ndGgsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICk7XG4gICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgYXJjLFxuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlLFxuICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAnMCcsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBpbiB2YWx1ZXNbc2xpY2VdW2F0dHJdKSB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBjb3VudCAvIHN1bTtcbiAgICAgICAgICAgIGxldCBzdGFydEFuZ2xlID0gc2xpY2VTdGFydEFuZ2xlO1xuICAgICAgICAgICAgbGV0IGVuZEFuZ2xlID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUgKyBhcmNMZW5ndGggKiBwZXJjZW50LFxuICAgICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgICAgICAgICAgXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhzbGljZSlcbiAgICAgICAgICBcdGNvbnNvbGUubG9nKHBlcmNlbnQgKyBcIjogXCIgKyBjb3VudCArIFwiIDogXCIgKyBzdW0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFyY0J1aWxkZXIoXG4gICAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgIHNsaWNlLFxuICAgICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgIHBlcmNlbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXJjQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKG51bVNsaWNlcyA9PSAxKSB0ZXh0QnVpbGRlcihzbGljZSwgMC41KTtcbiAgICAgIGVsc2UgdGV4dEJ1aWxkZXIoc2xpY2UsIHNsaWNlQ291bnQpO1xuICAgICAgc2xpY2VDb3VudCsrO1xuICAgIH1cblxuICAgIC8vYnVpbGQgbGluZXMgYWZ0ZXIgc28gdGhleSBhcmUgb24gdG9wXG4gICAgZm9yIChcbiAgICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICAgIHNsaWNlQ291bnQgPCBudW1TbGljZXMgJiYgbnVtU2xpY2VzID4gMTtcbiAgICAgIHNsaWNlQ291bnQrK1xuICAgICkge1xuICAgICAgbGluZUJ1aWxkZXIoc2xpY2VDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVZhbHVlcyh2YWx1ZXMsIHNlbGVjdGVkVmFsdWUsIGF0dHIpIHtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IHNsaWNlIGluIHZhbHVlcykge1xuICAgICAgbGV0IGFyY0NvdW50ID0gMDtcbiAgICAgIGZvciAoY29uc3QgYXR0ciBpbiB2YWx1ZXNbc2xpY2VdKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICBzdW0gKz0gTnVtYmVyKFxuICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFsdWVzW3NsaWNlXVthdHRyXVtzZWxlY3RlZFZhbHVlXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICBhdHRycy5kYXRhW3ZhbHVlc1tzbGljZV1bYXR0cl1bc2VsZWN0ZWRWYWx1ZV1dXG4gICAgICAgICk7XG4gICAgICAgIGxldCBwZXJjZW50ID0gY291bnQgLyBzdW07XG4gICAgICAgIGlmIChhdHRyID09PSAnQWdlJylcbiAgICAgICAgICBcdGF0dHJzLnRleHRDaXJjbGVzQ2F0ZWdvcnlbc2xpY2VDb3VudF0udGV4dCgnQWdlOiAnICsgc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDYXRlZ29yeVtzbGljZUNvdW50XS50ZXh0KHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvdW50ICE9IDApIHtcbiAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50W3NsaWNlQ291bnRdLnRleHQoJzw1Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ291bnRbc2xpY2VDb3VudF0udGV4dChjb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudFtzbGljZUNvdW50XS50ZXh0KFxuICAgICAgICAgICAgTnVtYmVyKChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDEpKSArICclJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgXG4gICAgICAgICAgYXR0cnMudGV4dENpcmNsZXNDb3VudFtzbGljZUNvdW50XS50ZXh0KCdObycpO1xuICAgICAgICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudFtzbGljZUNvdW50XS50ZXh0KFxuICAgICAgICAgICAgJ1N0dWRlbnRzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNsaWNlQ291bnQrKztcbiAgICB9XG4gICAgLy9kMy5zZWxlY3QoXCJ0ZXh0W2lkPSdlbGVtZW50LmlkLndpdGguZG90cyddXCIpO1xuICAgIGNvbnN0IGlkID0gc2VsZWN0ZWRWYWx1ZSArICdyZWN0JztcbiAgICBkMy5zZWxlY3QoXCJbaWQ9J1wiICsgaWQgKyBcIiddXCIpLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAzKTtcbiAgfVxuXG4gIHJlbW92ZVZhbHVlcyh2YWx1ZSkge1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5nZXRDaGFydFN0YXRlKCk7XG4gICAgZm9yIChjb25zdCB0ZXh0Q2lyY2xlIG9mIGF0dHJzLnRleHRDaXJjbGVzQ2F0ZWdvcnkpIHtcbiAgICAgIHRleHRDaXJjbGUudGV4dCgnJyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdGV4dENpcmNsZSBvZiBhdHRycy50ZXh0Q2lyY2xlc0NvdW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRleHRDaXJjbGUgb2YgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50KSB7XG4gICAgICB0ZXh0Q2lyY2xlLnRleHQoJycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpZCA9IHZhbHVlICsgJ3JlY3QnO1xuICAgIGQzLnNlbGVjdChcIltpZD0nXCIgKyBpZCArIFwiJ11cIikuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xuICB9XG5cbiAgcmVuZGVyQ29tcGFyZSh2YWx1ZXMpIHtcbiAgICAvL0hlbHBlciB2YWx1ZXNcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuICAgIGNvbnN0IHNiID0gdGhpcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGQzXG4gICAgICAuc2VsZWN0KCcjc3VuYnVyc3QtY29udGFpbmVyJylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSArY29udGFpbmVyLmhlaWdodDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICtjb250YWluZXIud2lkdGg7XG5cbiAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lcldpZHRoIC0gYXR0cnMubGVnZW5kV2lkdGg7IC8vbWludXMgYmVjYXVzZSBvZiBsZWdlbmRcbiAgICBjb25zdCBoZWlnaHQgPSBjb250YWluZXJIZWlnaHQgLSBhdHRycy50aXRsZVRleHRIZWlnaHQ7XG4gICAgY29uc3QgbnVtU2xpY2VzID0gT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGg7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHNiLmNvbXB1dGVDb21wYXJlRGltZW5zaW9ucyhcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbnVtU2xpY2VzXG4gICAgKTsgLy9yb3dzLCBjb2x1bW5zIGFuZCBzcXVhcmUgc2l6ZVxuICAgIGNvbnN0IGFyY0xlbmd0aCA9IDIgKiBNYXRoLlBJO1xuXG4gICAgY29uc3Qgcm93cyA9IGRpbWVuc2lvbnMucm93cztcbiAgICBjb25zdCBjb2xzID0gZGltZW5zaW9ucy5jb2xzO1xuICAgIGNvbnN0IHNpemUgPSBkaW1lbnNpb25zLnNpemU7XG4gICAgY29uc3Qgd2hpdGVzcGFjZVdpZHRoID0gd2lkdGggLSBjb2xzICogc2l6ZTtcbiAgICBjb25zdCB3aGl0ZXNwYWNlSGVpZ2h0ID0gaGVpZ2h0IC0gcm93cyAqIHNpemU7XG5cbiAgICBjb25zdCBudW1BcmNzID0gT2JqZWN0LmtleXMoT2JqZWN0LnZhbHVlcyh2YWx1ZXMpWzBdKVxuICAgICAgLmxlbmd0aDtcbiAgICBjb25zdCBleHRlbmRlZExpbmVMZW5ndGggPSBhdHRycy5leHRlbmRlZExpbmVMZW5ndGg7XG4gICAgY29uc3QgaGFsZlNsaWNlUmFkaWFucyA9IE1hdGguUEkgLyBudW1TbGljZXM7XG4gICAgY29uc3QgdGV4dERpc3RhbmNlID0gYXR0cnMudGV4dERpc3RhbmNlO1xuXG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5jb21wdXRlU3VuYnVyc3RQYXJhbWV0ZXJzKFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemUsXG4gICAgICBudW1BcmNzXG4gICAgKTtcbiAgICBjb25zdCBhcmNXaWR0aCA9IHBhcmFtcy5hcmNXaWR0aDtcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHBhcmFtcy5pbm5lclJhZGl1cztcbiAgICBjb25zdCBpbm5lclRleHRTaXplID0gcGFyYW1zLmlubmVyVGV4dFNpemU7XG5cbiAgICAvKiBIZWxwZXIgbWV0aG9kcyAqL1xuXG4gICAgLy8gQ29udmVydGluZyBzbGljZSBuYW1lIHRvIHRleHRcbiAgICBjb25zdCBnZXRUZXh0ID0gKHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gd29yZHMuZmlsdGVyKFxuICAgICAgICAod29yZCkgPT4gd29yZCAhPT0gJ1RvdGFsJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbHRlcmVkLmpvaW4oJ1xcclxcbicpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZExvbmdlc3RTbGljZSA9IChhcnJheSkgPT4ge1xuICAgICAgbGV0IGxvbmdlc3RXb3JkID0gJyc7XG4gICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgIGlmICh3b3JkLmxlbmd0aCA+IGxvbmdlc3RXb3JkLmxlbmd0aCkge1xuICAgICAgICAgIGxvbmdlc3RXb3JkID0gd29yZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbG9uZ2VzdFdvcmQ7XG4gICAgfTtcbiAgICBjb25zdCBsb25nZXN0U2xpY2VUZXh0TGVuZ3RoID0gZ2V0VGV4dChcbiAgICAgIGZpbmRMb25nZXN0U2xpY2UoT2JqZWN0LmtleXModmFsdWVzKSlcbiAgICApLmxlbmd0aDtcblxuICAgIC8vdGV4dCBidWlsZGVyXG4gICAgY29uc3QgdGV4dEJ1aWxkZXIgPSAoXG4gICAgICBzbGljZSxcbiAgICAgIHNsaWNlQ291bnQsXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgKSA9PiB7XG4gICAgICBsZXQgcmFkaWFucyA9XG4gICAgICAgICgyICogTWF0aC5QSSAqIHNsaWNlQ291bnQpIC8gbnVtU2xpY2VzICtcbiAgICAgICAgaGFsZlNsaWNlUmFkaWFucztcbiAgICAgIGxldCB0ZXh0ID0gZ2V0VGV4dChzbGljZSk7XG4gICAgICBsZXQgcmFkaXVzID1cbiAgICAgICAgaW5uZXJSYWRpdXMgKyBudW1BcmNzICogYXJjV2lkdGggKyB0ZXh0RGlzdGFuY2U7XG4gICAgICBsZXQgeSA9IC1yYWRpdXM7XG5cbiAgICAgIGxldCBzaXplTXVsdGlwbGllciA9IDEuODtcbiAgICAgIGxldCBvdXRlclRleHRTaXplID0gTWF0aC5taW4oXG4gICAgICAgIChzaXplTXVsdGlwbGllciAqICgyICogcmFkaXVzKSkgL1xuICAgICAgICAgIGxvbmdlc3RTbGljZVRleHRMZW5ndGgsXG4gICAgICAgIDMwXG4gICAgICApO1xuXG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneScsIHkpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBvdXRlclRleHRTaXplICsgJ3B4JylcbiAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLnRleHQodGV4dCk7XG4gICAgfTtcblxuICAgIC8vYXJjIGJ1aWxkZXJcbiAgICBjb25zdCBhcmNCdWlsZGVyID0gKFxuICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgIGFyYyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHNsaWNlLFxuICAgICAgYXR0cixcbiAgICAgIHZhbHVlXG4gICAgKSA9PiB7XG4gICAgICBzdW5idXJzdEdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oe1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhdHRycy5jb2xvcnNbdmFsdWVdKVxuICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAuZHVyYXRpb24oJzUwJylcbiAgICAgICAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAnLjg1Jyk7XG5cbiAgICAgICAgICAgIHNiLmRpc3BsYXlWYWx1ZXModmFsdWVzLCB2YWx1ZSwgYXR0cik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgLmR1cmF0aW9uKCc1MCcpXG4gICAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgJzEnKTtcblxuICAgICAgICAgICAgc2IucmVtb3ZlVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG51bUFyY3MgPT0gMSkge1xuICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBwcm92aWRlIGFueSBtb3JlIGRldGFpbCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICcwJykge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGF0dHJzLmF0dHJpYnV0ZUluZGV4LmluZGV4T2YoXG4gICAgICAgICAgICAgICAgYXR0clxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNsaWNlMSBpbiBuZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2xpY2UgPSBzbGljZTEgKyAnLCcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgT2JqZWN0LmFzc2lnbihuZXdWYWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgIFtuZXdTbGljZV06IG5ld1ZhbHVlc1tzbGljZTFdLFxuICAgICAgICAgICAgICAgIH0pW3NsaWNlMV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdHRyMSBpbiBuZXdWYWx1ZXNbbmV3U2xpY2VdKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXR0cjEgPT09IGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5ld1ZhbHVlc1tuZXdTbGljZV1bYXR0cjFdO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZTEgaW4gbmV3VmFsdWVzW1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1NsaWNlXG4gICAgICAgICAgICAgICAgICAgIF1bYXR0cjFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVzW25ld1NsaWNlXVthdHRyMV1bdmFsdWUxXVtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYXR0cnMuaGlzdG9yeS5wdXNoKHZhbHVlcyk7XG4gICAgICAgICAgICAgIHNiLnJlbmRlcihuZXdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIENsZWFyIHRleHRDaXJjbGUgbGlzdHNcbiAgICBhdHRycy50ZXh0Q2lyY2xlc0NhdGVnb3J5ID0gW107XG4gICAgYXR0cnMudGV4dENpcmNsZXNDb3VudCA9IFtdO1xuICAgIGF0dHJzLnRleHRDaXJjbGVzUGVyY2VudCA9IFtdO1xuXHRcblxuICAgIGxldCBzbGljZUNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IHNsaWNlIGluIHZhbHVlcykge1xuICAgICAgbGV0IHJvdyA9IHBhcnNlSW50KHNsaWNlQ291bnQgLyBjb2xzKTtcbiAgICAgIGxldCBjb2wgPSBzbGljZUNvdW50ICUgY29scztcblxuICAgICAgbGV0IHRyYW5zbGF0ZVggPVxuICAgICAgICBzaXplIC8gMiArXG4gICAgICAgIGNvbCAqIHNpemUgK1xuICAgICAgICAoKGNvbCArIDEpICogd2hpdGVzcGFjZVdpZHRoKSAvIChjb2xzICsgMSk7XG4gICAgICBsZXQgdHJhbnNsYXRlWSA9XG4gICAgICAgIGF0dHJzLnRpdGxlVGV4dEhlaWdodCArXG4gICAgICAgIHNpemUgLyAyICtcbiAgICAgICAgcm93ICogc2l6ZSArXG4gICAgICAgICgocm93ICsgMSkgKiB3aGl0ZXNwYWNlSGVpZ2h0KSAvIChyb3dzICsgMSk7XG5cbiAgICAgIGxldCBzdmcgPSBhdHRycy5zdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHNpemUpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzaXplKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgICBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlgXG4gICAgICAgICk7XG4gICAgICBsZXQgY2VudGVyR3JvdXAgPSBzdmdcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjZW50ZXItZ3JvdXAnKTtcbiAgICAgIGNlbnRlckdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5hdHRyKCdpZCcsICdjZW50ZXItY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgMClcbiAgICAgICAgLmF0dHIoJ2N5JywgMClcbiAgICAgICAgLmF0dHIoJ3InLCBpbm5lclJhZGl1cylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdibGFjaycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgNSlcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnd2hpdGUnKTtcblxuICAgICAgbGV0IHRleHRDaXJjbGUxID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnLTAuNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGlubmVyVGV4dFNpemUpXG4gICAgICAgIC50ZXh0KCcnKTtcbiAgICAgIFxuICAgICAgbGV0IHRleHRDaXJjbGUyID0gY2VudGVyR3JvdXBcbiAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgICAuYXR0cignZHknLCAnMC41ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgaW5uZXJUZXh0U2l6ZSlcbiAgICAgICAgLnRleHQoJycpO1xuXG4gICAgICBsZXQgdGV4dENpcmNsZTMgPSBjZW50ZXJHcm91cFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAuYXR0cigneScsIDApXG4gICAgICAgIC5hdHRyKCdkeScsICcxLjVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBpbm5lclRleHRTaXplKVxuICAgICAgICAudGV4dCgnJyk7XG5cbiAgICAgIGF0dHJzLnRleHRDaXJjbGVzQ2F0ZWdvcnkucHVzaCh0ZXh0Q2lyY2xlMSk7XG4gICAgICBhdHRycy50ZXh0Q2lyY2xlc0NvdW50LnB1c2godGV4dENpcmNsZTIpO1xuICAgICAgYXR0cnMudGV4dENpcmNsZXNQZXJjZW50LnB1c2godGV4dENpcmNsZTMpO1xuXG4gICAgICBsZXQgc3VuYnVyc3RHcm91cCA9IHN2Z1xuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3N1bmJ1cnN0LWdyb3VwJyk7XG5cbiAgICAgIGxldCBhcmNDb3VudCA9IDA7XG4gICAgICBhdHRybG9vcDogZm9yIChjb25zdCBhdHRyIGluIHZhbHVlc1tzbGljZV0pIHtcbiAgICAgICAgbGV0IGFyYyA9IGQzXG4gICAgICAgICAgLmFyYygpXG4gICAgICAgICAgLmlubmVyUmFkaXVzKGlubmVyUmFkaXVzICsgYXJjV2lkdGggKiBhcmNDb3VudClcbiAgICAgICAgICAub3V0ZXJSYWRpdXMoXG4gICAgICAgICAgICBpbm5lclJhZGl1cyArIGFyY1dpZHRoICogKGFyY0NvdW50ICsgMSlcbiAgICAgICAgICApO1xuXG4gICAgICAgIGxldCBzbGljZVN0YXJ0QW5nbGUgPSAwO1xuXG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICBpZiAodmFsdWUgPT0gJ1RvdGFsJykgY29udGludWU7XG4gICAgICAgICAgc3VtICs9IE51bWJlcihcbiAgICAgICAgICAgIGF0dHJzLmRhdGFbdmFsdWVzW3NsaWNlXVthdHRyXVt2YWx1ZV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBpZiAoc3VtID09IDApIHtcbiAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSArIGFyY0xlbmd0aCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgc3VuYnVyc3RHcm91cCxcbiAgICAgICAgICAgIGFyYyxcbiAgICAgICAgICAgIHNsaWNlU3RhcnRBbmdsZSxcbiAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgc2xpY2UsXG4gICAgICAgICAgICBhdHRyLFxuICAgICAgICAgICAgJzAnXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIGluIHZhbHVlc1tzbGljZV1bYXR0cl0pIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnVG90YWwnKSBjb250aW51ZTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgYXR0cnMuZGF0YVt2YWx1ZXNbc2xpY2VdW2F0dHJdW3ZhbHVlXV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgcGVyY2VudCA9IGNvdW50IC8gc3VtO1xuICAgICAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSBzbGljZVN0YXJ0QW5nbGU7XG4gICAgICAgICAgICBsZXQgZW5kQW5nbGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRBbmdsZSArIGFyY0xlbmd0aCAqIHBlcmNlbnQsXG4gICAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2xpY2VTdGFydEFuZ2xlID0gZW5kQW5nbGU7XG4gICAgICAgICAgICBhcmNCdWlsZGVyKFxuICAgICAgICAgICAgICBzdW5idXJzdEdyb3VwLFxuICAgICAgICAgICAgICBhcmMsXG4gICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICBzbGljZSxcbiAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyY0NvdW50Kys7XG4gICAgICB9XG4gICAgICB0ZXh0QnVpbGRlcihzbGljZSwgLTAuNSwgc3VuYnVyc3RHcm91cCk7XG4gICAgICBzbGljZUNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTGVnZW5kKHZhbHVlcykge1xuICAgIGxldCBhdHRycyA9IHRoaXMuZ2V0Q2hhcnRTdGF0ZSgpO1xuXG4gICAgLy9oaWVyYXJjaGlhbCB0cmVlIGxlZ2VuZFxuICAgIGxldCBsZWdlbmQgPSBkM1xuICAgICAgLnNlbGVjdCgnI3N1bmJ1cnN0LWxlZ2VuZCcpXG4gICAgICAuYXR0cignd2lkdGgnLCBhdHRycy5sZWdlbmRXaWR0aCk7XG4gICAgbGVnZW5kLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIFxuICAgIGxldCB4ID0gMjA7XG4gICAgbGV0IHkgPSAxMDtcbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHggKyAyMClcbiAgICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAgIC50ZXh0KCdMRUdFTkQnKVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzIwcHgnKVxuICAgIFx0XHRcdC5zdHlsZSgnZmlsbCcsICd3aGl0ZScpXG4gICAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcbiAgICBcbiAgICAgeSArPSAyMDtcbiAgICBcbiAgICBsZXQgZmlyc3RTbGljZSA9IE9iamVjdC52YWx1ZXModmFsdWVzKVswXTtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZmlyc3RTbGljZSkge1xuICAgICAgY29uc3QgYXJyYXkgPSBPYmplY3Qua2V5cyhmaXJzdFNsaWNlW2F0dHJdKTtcbiAgICAgIGxlZ2VuZFxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB4KVxuICAgICAgICAuYXR0cigneScsIHkgKyA2KVxuICAgICAgICAudGV4dChhdHRyKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcblx0XHRcdCB5ICs9IDIwO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgICAgICBpZiAodmFsdWUgPT09ICdUb3RhbCcpIGNvbnRpbnVlO1xuICAgICAgICBsZWdlbmRcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignaWQnLCB2YWx1ZSArICdyZWN0JylcbiAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgLmF0dHIoJ3knLCB5KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDEyKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgYXR0cnMuY29sb3JzW3ZhbHVlXSk7XG4gICAgICAgIGxlZ2VuZFxuICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIHZhbHVlICsgJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCd4JywgeCArIDIwKVxuICAgICAgICAgIC5hdHRyKCd5JywgeSArIDYpXG4gICAgICAgICAgLnRleHQodmFsdWUpXG4gICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTRweCcpXG4gICAgICAgIFx0LnN0eWxlKCdmaWxsJywgJ3doaXRlJylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgICAgICB5ICs9IDIwO1xuICAgICAgfVxuICAgICAgeSArPSAxMDtcbiAgICBcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9uYXZpLWNsYXNzJztcbmltcG9ydCB7IFN1bmJ1cnN0IH0gZnJvbSAnLi9zdW5idXJzdC1jbGFzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcblx0Ly9zdW5idXJzdCBcbiAgbGV0IHNiOyBcblxuXHQvL1NldCBub2RlIGFuZCBNYWluIHZpeiBTUEEgdXBzXG4gIGRpc3BsYXlOb2RlcygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzdWFsaXplLWJ1dHRvbicpLm9uY2xpY2sgPSBkaXNwbGF5Vml6O1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheU5vZGVzO1xuIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tb3Blbi1idXR0b24nKS5vbmNsaWNrID0gZGlzcGxheUluZm87XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWRpdicpLm9uY2xpY2sgPSBoaWRlSW5mbztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tY2xvc2UtYnV0dG9uJykub25jbGljayA9IGhpZGVJbmZvO1xuICBcbiAgZnVuY3Rpb24gZGlzcGxheU5vZGVzKCl7XG4gICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gZGlzcGxheVZpeigpe1xuICAgICAgbGV0IHRlc3QgPSBmYWxzZTtcbiAgICBcdGxldCBhY2FkZW1pY1ZhbHVlc1Rlc3QgPSB7XG4gICAgICAgICAgIFx0ICdBY2FkZW1pYyBZZWFyJzogWydUb3RhbCddLFxuICAgICAgICAgICAgIERlZ3JlZTogWydCYWNoZWxvcnMnLCAnTWFzdGVycyddLFxuICAgICAgICAgICAgIEZhY3VsdHk6IFsnU2NpZW5jZScsICdCdXNpbmVzcyddLFxuICAgICAgICAgICAgICdTdHVkeSBTdGF0dXMnOiBbJ1RvdGFsJ11cbiAgICAgICAgICB9O1xuICAgICAgIGxldCBkaXZlcnNpdHlWYWx1ZXNUZXN0ID0geyAgICAgXG4gICAgICAgICAgICAgIEFnZTogW10sXG4gICAgICAgICAgICAgIFNleDogIFsnTWFsZScsICdGZW1hbGUnXSxcbiAgICAgICAgICAgICAgJ0NpdGl6ZW5zaGlwIFN0YXR1cyc6IFsnSW50ZXJuYXRpb25hbCcsICdEb21lc3RpYyddXG4gICAgICAgfVxuXG4gICAgXHRpZiAoc2Ipe1xuICAgICAgICAgbGV0IGRpdmVyc2l0eVZhbHVlcyA9IHRlc3Q/ZGl2ZXJzaXR5VmFsdWVzVGVzdDogaHQuZGl2ZXJzaXR5VmFsdWVzKCk7XG4gICAgICAgICBsZXQgYWNhZGVtaWNWYWx1ZXMgPSB0ZXN0P2FjYWRlbWljVmFsdWVzVGVzdDogaHQuYWNhZGVtaWNWYWx1ZXMoKTtcblxuICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBkaXZlcnNpdHlWYWx1ZXMpe1xuICAgICAgICBcdCBpZiAoZGl2ZXJzaXR5VmFsdWVzW2F0dHJdLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgIGlmICghdmFsaWQpe1xuICAgICAgICAgICBcdGNvbnNvbGUubG9nKGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgIFx0XHRhbGVydCgnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgZGl2ZXJzaXR5IGF0dHJpYnV0ZScpOyAgXG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBcdCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aXotZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBcdCBcdFx0IC8vc2IucmVuZGVyKGFjYWRlbWljVmFsdWVzLCBkaXZlcnNpdHlWYWx1ZXMpO1xuICAgICAgICAgICBcdHNiLmluaXRpYWxSZW5kZXIoYWNhZGVtaWNWYWx1ZXMsIGRpdmVyc2l0eVZhbHVlcyk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWxlcnQoJ1BsZWFzZSB3YWl0IGZvciB0aGUgZGF0YSB0byBmaW5pc2ggbG9hZGluZycpO1xuICAgICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBkaXNwbGF5SW5mbygpe1xuICAgIGNvbnNvbGUubG9nKFwib3BlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuICBcbiAgZnVuY3Rpb24gaGlkZUluZm8oKXtcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBcbiAgbGV0IGh0ID0gbmV3IENoYXJ0KClcbiAgICAgLmNvbnRhaW5lcignI2NoYXJ0LWNvbnRhaW5lcicpXG4gICAgIC5zdmdXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aC0yMDApXG4gICAgIC5zdmdIZWlnaHQod2luZG93LmlubmVyV2lkdGgpXG4gICAgIC5pbml0aWFsWm9vbSgwLjMpXG4gICAgIC5yZW5kZXIoKVxuXG4gIG5ldyBTdW5idXJzdCgpXG4gICAgICAgICAuY29udGFpbmVyKCcjc3VuYnVyc3QtY29udGFpbmVyJylcbiAgXHRcdFx0IC5kaXNwbGF5Tm9kZXMoZGlzcGxheU5vZGVzKVxuICAgIFx0XHQgLnNldHVwKCdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZWw1NTgvN2QyY2I1MjU4OTIxMTE5ZGY1ODg0Y2M5MDkwMmU4NGQvcmF3LzAwODI3YjlkNTMyODgzMzQzMTkxZjYxNDRkNDFkMGEwYmJhZDVkZjgvZmFsbC5jc3YnKVxuXHRcdFx0XHQgLnRoZW4odmFsdWUgPT4gc2IgPSB2YWx1ZSk7XG59KTtcblxuXG5cblxuXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztFQTBKTyxNQUFNLE1BQU0sR0FBRztFQUN0QixFQUFFLGdCQUFnQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUMvRCxFQUFFLG1CQUFtQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqRSxFQUFFLGtCQUFrQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNsRSxFQUFFLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNyRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDM0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3JELEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNoRCxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDL0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3BELENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztF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