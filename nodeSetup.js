import {
  initialNodes,
  properties,
  MAIN_NODE,
  VALUE_NODE,
  EDI_ATTRIBUTE_NODE,
  OTHER_ATTRIBUTE_NODE,
  UNCOLLECTED_ATTRIBUTE_NODE,
} from './nodeData';

export const nodes = [];
export const links = [];

//populating nodes
for (const key in initialNodes) {
  const node = initialNodes[key];
  
 	if (!nodes.some(e => e.id === key)){
    nodes.push({
      id: key,
      group: node.group 
    });
  }

  if (node.group == EDI_ATTRIBUTE_NODE || node.group == OTHER_ATTRIBUTE_NODE) {
    for (const link of node.links) {
      nodes.push({
        id: link,
     		group: VALUE_NODE
      });
    }
  }
}

//populating links
for (const node of nodes) {
  if (!initialNodes.hasOwnProperty(node.id)) continue; //value attribute has no links

  const dataNode = initialNodes[node.id];

  for (const link of dataNode.links) {
    links.push({
      source: node,
      target: nodes.find((n) => n.id == link),
      group: node.group
    });
  }
}
