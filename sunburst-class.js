export class Sunburst {
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
        '0': '#989898'
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
   
    // Setting values so values is still accessible when compare is toggled 
    attrs.values = values; 
    
    // repurposing back button if necessary
    if (attrs.history.length > 0) {
      document.getElementById('compare-button').disabled = true;
      const back = () => sb.render(attrs.history.pop());
      document.getElementById('back-button').onclick = back;
    } else {
      document.getElementById('compare-button').disabled = false;
      document.getElementById('back-button').onclick = attrs.displayNodes;
    }

    // remove all elements in svg
		this.removeAll();
    
    // re-create the new elements
    if (!attrs.compareMode){
       document.getElementById('compare-button').style.backgroundColor = "white";
       this.renderSunburst(values);
       // disable compare mode if only 1 slice
       if (Object.keys(values).length === 1)
         document.getElementById('compare-button').disabled = true;
    }else{
       document.getElementById('compare-button').style.backgroundColor = "red";
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
      .text('Category')
    	.attr('opacity', '.5');

    let textCircle2 = centerGroup
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('dy', '0.5em')
      .style('text-anchor', 'middle')
    	.style("font-size", innerTextSize)
      .text('Count')
    	.attr('opacity', '.5');

    let textCircle3 = centerGroup
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('dy', '1.5em')
      .style('text-anchor', 'middle')
    	.style("font-size", innerTextSize)
      .text('Percent')
    	.attr('opacity', '.5');

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
      if (text === ''){
      	text = 'Total'; 
      }
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



   	//arc builder
    const arcBuilder = (arc, startAngle, endAngle, slice, attr, value, count, percent) => {	

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

    					d3.select("[id=\'" +  value + "rect\']").style('stroke-width', 3);
         
							if (count!=0){
                if (attr === 'Age'){
                   textCircle1.text(attr + ": " + value).attr('opacity', '1');
                } else {
                    textCircle1.text(value).attr('opacity', '1');
                }
               
                if (count < 5){
                  textCircle2.text('<5').attr('opacity', '1');
                } else {
                  textCircle2.text(count).attr('opacity', '1');
                }
                
                
                textCircle3.text(
                  Number((percent * 100).toFixed(1)) + '%'
                ).attr('opacity', '1');
              } else {
                 textCircle1.text('');
                	textCircle2.text('No Students').attr('opacity', '1');
                	textCircle3.text('');
              }
            })
            .on('mouseout', function (d, i) {
              d3.select(this)
                .transition()
                .duration('50')
                .attr('opacity', '1');

              textCircle1.text('Category').attr('opacity', '.5');
              textCircle2.text('Count').attr('opacity', '.5');
              textCircle3.text('Percent').attr('opacity', '.5');
         			d3.select("[id=\'" +  value + "rect\']").style('stroke-width', 1);
            })
            .on('click', function () {
         			if (count!=0){
                let newValues = {
                  [slice]: JSON.parse(
                    JSON.stringify(values[slice])
                  ),
                };

                let index = attrs.attributeIndex.indexOf(attr)

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
              }
            });
    }
   
    //build arcs
    let sliceCount = 0;
    for (const slice in values) {
      let arcCount = 0;
      attrloop:
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

        if (sum == 0){
          console.log(slice + " : " + attr);
          let endAngle = Math.min(
            sliceStartAngle + arcLength,
            2 * Math.PI
          );
          arcBuilder(arc, sliceStartAngle, endAngle, slice, attr, '0', 0, 0);
        } else {
          for (const value in values[slice][attr]) {
            let count = Number(attrs.data[values[slice][attr][value]]);
            let percent = count / sum;
            let startAngle = sliceStartAngle;
            let endAngle = Math.min(
              startAngle + arcLength * percent,
              2 * Math.PI
            );
            sliceStartAngle = endAngle;

            arcBuilder(arc, startAngle, endAngle, slice, attr, value, count, percent);
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
  
	displayValues(values, selectedValue, attr){
    const attrs = this.getChartState();
    const sb = this;
    
    if (attr === 'Age')
    	attrs.centerText.text('Age: ' + selectedValue);
    else 
      attrs.centerText.text(selectedValue);
      
  	let sliceCount = 0;
    for (const slice in values) {
      let arcCount = 0;
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
        if (count != 0){
          if (count < 5){
            attrs.textCirclesCount[sliceCount].text('<5');
          } else {
            attrs.textCirclesCount[sliceCount].text(count);
          }
    			attrs.textCirclesPercent[sliceCount].text(Number((percent * 100).toFixed(1)) + '%');
        } else {
          attrs.textCirclesCount[sliceCount].text('No');
    			attrs.textCirclesPercent[sliceCount].text('Students');
        }
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
      let longestWord = "";
      array.forEach(function(word) {
        if(word.length > longestWord.length) {
          longestWord = word;
        }
      });
      return longestWord;
    }
    const longestSliceTextLength = getText(findLongestSlice(Object.keys(values))).length;
    
    //text builder
    const textBuilder = (slice, sliceCount, sunburstGroup) => {
      let radians =
        (2 * Math.PI * sliceCount) / numSlices +
        halfSliceRadians;
      let text = getText(slice);
      let radius = innerRadius + numArcs * arcWidth + textDistance;
      let y = -radius;

      let sizeMultiplier = 1.8;
    	let outerTextSize = Math.min(sizeMultiplier*(2*radius)/longestSliceTextLength, 50);

      sunburstGroup
        .append('text')
        .attr('y', y)
      	.style("text-anchor", "middle")
      	.style('font-size', outerTextSize + "px")
        .text(text);
    };
    
    
    //arc builder
    const arcBuilder = (sunburstGroup, arc, startAngle, endAngle, value, attr) => {
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
              if (value !== '0'){
                d3.select(this)
                  .transition()
                  .duration('50')
                  .attr('opacity', '.85');

                sb.displayValues(values, value, attr);
              }
            })
            .on('mouseout', function (d, i) {
            	if (value !== '0'){
                d3.select(this)
                  .transition()
                  .duration('50')
                  .attr('opacity', '1');

                sb.removeValues(value);
              }
            })
    }
    
    // Clear textCircle lists
    attrs.textCirclesCount = [];
    attrs.textCirclesPercent = [];

    attrs.centerText = attrs.svg
      .append('text')
      .attr('x', width/2)
      .attr('y', 15+attrs.centerTextHeight/2)
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
      attrloop:
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
          sum+=Number(attrs.data[values[slice][attr][value]]);
        }
        
        if (sum == 0){
          let endAngle = Math.min(
            sliceStartAngle + arcLength,
            2 * Math.PI
          );
          arcBuilder(sunburstGroup, arc, sliceStartAngle, endAngle, '0', attr);
        } else {
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
              arcBuilder(sunburstGroup, arc, startAngle, endAngle, value, attr);
            }
        }
        arcCount++;
      }
			textBuilder(slice, -0.5, sunburstGroup)
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
