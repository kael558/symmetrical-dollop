export class Sunburst {
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
      let legend = d3.select("#sunburst-legend")
   		legend.selectAll("*").remove();
      let y = 24;
    	let x = 20;
      for (const array of Object.values(diversityValues)){
      	for (const value of array){
        	if (value === 'Total')
            continue;
          legend.append("rect").attr("x",x).attr("y",y).attr("width", 12).attr("height", 12).style("fill", attrs.colors[value])
          legend.append("text").attr("x", x+20).attr("y", y+6).text(value).style("font-size", "15px").attr("alignment-baseline","middle")
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
        }
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
      }
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
      const result = filtered.join("\r\n")
      return result;
    }
    
    //Helper values
    const numSlices = Object.keys(values).length;
    const numArcs = Object.keys(Object.values(values)[0]).length;
    const extendedLineLength = attrs.extendedLineLength;
    const halfSliceRadians = Math.PI/numSlices
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
    }

    //text builder
    const textBuilder = (slice, sliceCount) => {
      let radians = 2*Math.PI*sliceCount/numSlices + halfSliceRadians;
      let text = getText(slice);
      let radius = innerRadius+numArcs*arcWidth+	textDistance;
      let x = getCircleX(radians, radius )
      let y = -getCircleY(radians, radius);

      if (x < -1)
        x-= text.length * 7;
			else if (x < 1)
        x-=text.length * 3.5

      svg.append('text')
        .attr("x", x)
        .attr("y", y)
      	.text(text); 
    }
 
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
        textBuilder(slice, 0.5)
      else 
        textBuilder(slice, sliceCount)
      sliceCount++;
    }
    
    //build lines after so they are on top
    for (let sliceCount = 0; sliceCount <  numSlices && numSlices > 1; sliceCount++){
    	lineBuilder(sliceCount);
    }
  }
}