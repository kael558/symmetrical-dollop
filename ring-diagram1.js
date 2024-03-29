import { initialNodes, colors } from './nodes';

export class RingDiagram {
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
    	let sb = this;

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
      }
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
        const back = () => {attrs.pies = attrs.history.pop(); sb.update()};
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
      }

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
      }
      
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
      }

      // Make arcs
      pieGroups.selectAll("path")
        .data(generatePie, d=> d.data.ringNumber + d.data.sliceNumber)
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
                      .attr('opacity', '.85')

                    //highlight legend 
                    d3.select("[id='" + d.data.category + "rect']")
                      .style('stroke-width', 3);

                    const updateCircleText = (d, sliceNumber) => {
                          let count = d.value;
                          let centerGroup = "#center"+sliceNumber
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
                    }

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
                      .attr('opacity', '1')

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
                      })
                    });

                    d3.select(this).remove();
                    attrs.pies = newPies;
                    sb.update();
                })
                
                arcs.transition().duration(200)
                          .style('opacity', 1)
            		return arcs;
                },
              update => update.attr('class', d => fixCategory(d.data.category))
                    .attr('fill', d => attrs.color[d.data.category])
                    .attr('d', generateArc)
                    .on('mouseover', function (d, i) {
                      //highlight arc
                      d3.select(this)
                        .transition().duration('50')
                        .attr('opacity', '.85')

                      //highlight legend 
                      d3.select("[id='" + d.data.category + "rect']")
                        .style('stroke-width', 3);

                      const updateCircleText = (d, sliceNumber) => {
                            let count = d.value;
                            let centerGroup = "#center"+sliceNumber
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
                      }

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
                        .attr('opacity', '1')

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
                        })
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
          )
          //.each(function(d){ this._current = d; }) //overrides transitions
          
    	// Make lines
    	const getCircleX = (radians, radius) => Math.sin(radians) * radius;
      const getCircleY = (radians, radius) => Math.cos(radians) * radius;
    	if (totalSlices > 1){
        const getRadians = (sliceCount) => {
          let radians = (2 * Math.PI * sliceCount) / totalSlices
          if (totalSlices % 2 == 1) radians += Math.PI;
          return radians;
        }

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
                          )

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
          let offset_ty = -getCircleY(radians, radius);

        	if (offset_tx < -1) return "end"
        	else if (offset_tx < 1) return "middle"

        	return "start";
      }
    
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
      }

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
                                        .attr('fill', 'white')
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
                                          .text(text)
                                  } 
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
        }
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
