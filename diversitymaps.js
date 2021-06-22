var margin = {top: 80, right: 25, bottom: 30, left: 200},
  width = 800 - margin.left - margin.right,
  height = 800 - margin.top - margin.bottom;

var side_svg = d3
  .select('#side')
    .attr('height', width + margin.left + margin.right)
    .attr('width', height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let groups = [
  '2013/14',
  '2014/15',
  '2015/16',
  '2016/17',
  '2017/18',
  '2018/19',
  '2019/20',
  '2020/21',
];

let selectedPrimary = 'Acadunit';
let vars = ['Total', 'Arts & Social Sciences', 'Public Affairs', 'Business', 'Science', 'Engineering & Design'];

let x = d3.scaleBand().range([0, width]).domain(groups).padding(0.05);

side_svg.append('g').style("font-size", 15)
    .attr("transform", "translate(0," + height + ")")
  	.call(d3.axisBottom(x).tickSize(0));

let y = d3.scaleBand().range([height, 0]).domain(vars).padding(0.05);

side_svg.append('g').style("font-size", 15).call(d3.axisLeft(y).tickSize(0));

let color = d3
  .scaleLinear()
  .range(['#FF0000', '#0000FF'])
  .domain([0, 1]);

d3.csv(
  'https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/82b3b8ccad5462269cce2d894f8fa6cd9619d149/fall.csv'
)
  .then((d) => {
    console.log(d);
  
    const filter = (entry) => {
      if (!vars.includes(entry[selectedPrimary])) return false;
      
      if (entry['Sex'] == 'Total') return false;
      
      for (const prop in entry) {
        	if (prop != 'Year' && prop != selectedPrimary && prop != 'Count' && prop != 'Sex') {
          		if (entry[prop] != 'Total') return false;
        	}
      }
      return true;
    };
    const filtered = d.filter(filter);
  	console.log(filtered)
  	const res = []
    for (let i = 0; i < filtered.length; i+=2){
      filtered[i].Count/= Number(filtered[i].Count) + Number(filtered[i+1].Count)
    	res.push(filtered[i])
    }
		console.log(res)
  	

    side_svg
      .selectAll()
      .data(res, (d) => d.Year + ':' + d[selectedPrimary])
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.Year))
      .attr('y', (d) => y(d[selectedPrimary]))
      .attr('width', x.bandwidth())
      .attr('height', y.bandwidth())
      .style('fill', (d) => color(d.Count));
  })
  .catch((err) => console.log(err));
