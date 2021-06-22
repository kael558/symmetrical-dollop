import {
  select,
  selectAll,
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
  forceCollide,
  drag,
} from 'd3';

import {
  nodes, links
} from './nodeSetup'

import {
  properties, colors, UNCOLLECTED_ATTRIBUTE_NODE
} from './nodeData';

const w = 960;
const h = 960;

export const selected_nodes = {};
export const nodes_svg = select('#nodes')
				.attr('height', h)
				.attr('width', w)

const width = +nodes_svg.attr('width');
const height = +nodes_svg.attr('height');
const centerX = width / 2;
const centerY = height / 2;

const MANY_BODY_STRENGTH = -200;

const simulation = forceSimulation(nodes)
  .force('charge',forceManyBody().strength(MANY_BODY_STRENGTH))
  .force('link',forceLink(links).distance((link) => properties[link.group].distance))
  .force('center', forceCenter(centerX, centerY))
	.force('collide', forceCollide().radius(20));


const dragInteraction = drag().on('drag', (event, node) => {
  node.fx = event.x;
  node.fy = event.y;
  simulation.alpha(1);
});

const lines = nodes_svg
  .selectAll('g.lines')
  .data(links)
  .enter()
  .append('line')
  .attr('stroke', 'black');

const allNodes = nodes_svg
	.selectAll('g.nodes')
	.data(nodes)
	.enter()
	.append('svg:g')
 	.attr('fill', (node) => node.group === UNCOLLECTED_ATTRIBUTE_NODE ? colors.Unavailable: colors.Unselected)
	.attr('class', (node) => node.group + ' node')
	.call(dragInteraction);




let toggleNode = (function(){
  let currentColor = colors.Unselected;
  return function(){
      currentColor = currentColor == colors.Unselected ? colors.Selected : colors.Unselected;
			d3.select(this).style("fill", currentColor);
  }
})();


for (const node_type in properties){
  const selector = selectAll('g.' + node_type)
  		.append(properties[node_type].shape);

  if (properties[node_type].shape === 'rect'){
       selector.attr('width', (node) => properties[node_type].size);
    	 selector.attr('height', (node) => properties[node_type].size);
  } else {
    selector.attr('r', (node) => properties[node_type].size);
  }
  
  if (node_type !== UNCOLLECTED_ATTRIBUTE_NODE)
    selector.on('click', toggleNode);
}

allNodes.append('text')
	.attr('fill', 'black')
  .text((node) => node.id);

simulation.on('tick', () => {
	allNodes.attr("transform", (node) => "translate(" + node.x + "," + node.y + ")");

  lines
    .attr('x1', (link) => link.source.x)
    .attr('y1', (link) => link.source.y)
    .attr('x2', (link) => link.target.x)
    .attr('y2', (link) => link.target.y);
});
