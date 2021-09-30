import { colors } from './nodes.js';

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
      }

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
      .select('#sunburst')
      .node()
      .getBoundingClientRect().width - attrs.legendWidth;
    
    let title = d3
      .select('#title-text')
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
      document.getElementById('back-button').onclick =
        attrs.displayNodes;
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
      } else{
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
      .select('#sunburst')
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
      attrloop: for (const attr in values[slice]) {
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
    const sb = this;

    let sliceCount = 0;
    for (const slice in values) {
      let arcCount = 0;
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
      .select('#sunburst')
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
    const halfSliceRadians = Math.PI / numSlices;
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
      let radians =
        (2 * Math.PI * sliceCount) / numSlices +
        halfSliceRadians;
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
      attrloop: for (const attr in values[slice]) {
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
