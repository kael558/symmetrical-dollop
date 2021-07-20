const ROOT_NODE = 'ROOT';
const REPORT_NODE = 'REPORT';

const EDI_ATTRIBUTE_NODE = 'EDI_ATTRIBUTE';
const ACADEMIC_ATTRIBUTE_NODE = 'OTHER_ATTRIBUTE';
const UNCOLLECTED_ATTRIBUTE_NODE = 'UNCOLLECTED_ATTRIBUTE';

const VALUE_NODE = 'VALUE';
const UNCOLLECTED_VALUE_NODE = 'UNCOLLECTED_VALUE';



const initialNodes = {
  Convocation: {
    type: REPORT_NODE,
  },
  Demographics: {
    type: REPORT_NODE,
  },
  Faculty: {
    parents: ['Convocation','Demographics'],
    collectedValues: ['STEM', 'Non-STEM', 'Engineering & Design', 'Science', 'Public Affairs', 'Business', 'Arts & Social Sciences'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE
  },
  'Academic Year': {
    parents: ['Convocation','Demographics'],
    collectedValues: ['2013/14',
      '2014/15',
      '2015/16',
      '2016/17',
      '2017/18',
      '2018/19',
      '2019/20',
      '2020/21',],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE
  },
  Degree: {
    parents: ['Convocation','Demographics'],
    collectedValues: ['Bachelors',
      'Masters',
      'Ph.D.'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE
  },
 
  'Study Status': {
    parents: ['Demographics'],
    collectedValues: ['Part-time',
      'Full-time',
      'Co-op'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE
  },
  'Citizenship Status': {
    parents: ['Demographics'],
    collectedValues: ['Domestic',
      'International'],
  	uncollectedValues: [],
    type: EDI_ATTRIBUTE_NODE
  },
  Age: {
    parents: ['Demographics'],
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
  },
  Sex: {
    parents: ['Convocation','Demographics'],
    collectedValues: ['Male', 'Female'],
  	uncollectedValues: ['Non-binary'],
    type: EDI_ATTRIBUTE_NODE
	},
  Race: {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
	},
  'Religion/Spirituality': {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
  'Geographic Identity': {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
  'Dis/ability': {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
  Indigenuity: {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: ['First Nations', 'Metis', 'Inuit'],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
  'First Language': {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
  'Other Language': {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
  'Ethnicity': {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
  'Nation': {
    parents: ['Demographics'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE
  },
}



const colors = {
  Transparent: {"red":255,"green":255,"blue":255,"alpha":0},
  White: {"red":255,"green":255,"blue":255,"alpha":1},
  Grey: {"red":128,"green":128,"blue":128,"alpha":1},
	Green: {"red":0,"green":255,"blue":0,"alpha":1},
  Blue: {"red":0,"green":0,"blue":255,"alpha":1},
  Black: {"red":0,"green":0,"blue":0,"alpha":1}
}

const sizes = {
	Large: {width: 342, height: 146},
  Medium: {width: 331, height: 146},
	Small: {width: 310, height: 146}
}

const borderWidth = 2
const borderRadius = 5
const connectorLineWidth = 5

const nodeDimensions = {
  [ROOT_NODE] : {
    width: sizes.Large.width,
    height: sizes.Large.height,
    borderColor: colors.Transparent,
    backgroundColor: colors.Transparent,
    textColor: colors.Transparent,
    connectorLineColor: colors.Transparent,
    expandable: false,
    clickable: false
  },
	[REPORT_NODE] : {
  	width: sizes.Large.width,
    height: sizes.Large.height,
    borderColor: colors.Black,
    backgroundColor: colors.White,
    connectorLineColor: colors.Transparent,
    expandable: true,
    clickable: true
  },
  [UNCOLLECTED_ATTRIBUTE_NODE] : {
    width: sizes.Medium.width,
    height: sizes.Medium.height,
    borderColor: colors.Green,
    backgroundColor: colors.Grey,
    connectorLineColor: colors.Transparent,
    expandable: true,
    clickable: true
  },
  [ACADEMIC_ATTRIBUTE_NODE]: {
    width: sizes.Medium.width,
    height: sizes.Medium.height,
    borderColor: colors.Blue,
    backgroundColor: colors.White,
    connectorLineColor: colors.Black,
    expandable: true,
    clickable: true
  },
  [EDI_ATTRIBUTE_NODE]: {
    width: sizes.Medium.width,
    height: sizes.Medium.height,
    borderColor: colors.Green,
    backgroundColor: colors.White,
    connectorLineColor: colors.Black,
    expandable: true,
    clickable: true
  },
  [VALUE_NODE]: {
  	width: sizes.Small.width,
    height: sizes.Small.height,
    backgroundColor: colors.White,
    expandable: false,
    clickable: true
  },
  [UNCOLLECTED_VALUE_NODE]: {
  	width: sizes.Small.width,
    height: sizes.Small.height,
    backgroundColor: colors.Grey,
		connectorLineColor: colors.Grey,
    expandable: false,
    clickable: false
  }
}

const makeNode = (nodeId, parentNodeIds, nodeType, parentNodeType) => {
	let node = JSON.parse(JSON.stringify(nodeDimensions[nodeType]));
  node.nodeId = nodeId;
  node.parentNodeIds = parentNodeIds;
	node.expanded = false;
  node.borderWidth = borderWidth;
  node.borderRadius = borderRadius;
  node.connectorLineWidth = connectorLineWidth;

  if (nodeType == VALUE_NODE){
  	node.borderColor = nodeDimensions[parentNodeType].borderColor; 
    node.connectorLineColor = nodeDimensions[parentNodeType].borderColor; 
  } else if (nodeType === UNCOLLECTED_VALUE_NODE){
   	node.borderColor = nodeDimensions[parentNodeType].borderColor;  
  }
  return node;
}

const populateNodes = (nodes, initialNodes) => {
	for (const key in initialNodes) {
    const node = initialNodes[key];

    if (node.type === REPORT_NODE){
    		nodes.push(makeNode(key, ['Root'], REPORT_NODE));
    } else {
        nodes.push(makeNode(key, node.parents, node.type)); //link to first parent
        for (const link of node.collectedValues)
          nodes.push(makeNode(link, [key], VALUE_NODE, node.type));
        for (const link of node.uncollectedValues)
          nodes.push(makeNode(link, [key], UNCOLLECTED_VALUE_NODE, node.type));
    }
	}
}

export const nodes = [makeNode('Root', [null], ROOT_NODE)];
populateNodes(nodes, initialNodes);





