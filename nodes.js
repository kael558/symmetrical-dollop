const INVISIBLE_NODE = 'INVISIBLE';
const REPORT_NODE = 'REPORT';

const EDI_ATTRIBUTE_NODE = 'EDI_ATTRIBUTE';
const ACADEMIC_ATTRIBUTE_NODE = 'OTHER_ATTRIBUTE';
const UNCOLLECTED_ATTRIBUTE_NODE = 'UNCOLLECTED_ATTRIBUTE';

const VALUE_NODE = 'VALUE';
const UNCOLLECTED_VALUE_NODE = 'UNCOLLECTED_VALUE';



const initialNodes = {
  Convocated: {
    type: REPORT_NODE,
    description: 'The number of students that have convocated.'
  },
  Enrolled: {
    type: REPORT_NODE,
    description: 'The number of students that are enrolled.'
  },
  Faculty: {
    parents: ['Convocated','Enrolled'],
    collectedValues: ['STEM', 'Non-STEM', 'Engineering & Design', 'Science', 'Public Affairs', 'Business', 'Arts & Social Sciences'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE,
    description: 'Department and faculty are mapped from student degree and major or majors.'
  },
  'Academic Year': {
    parents: ['Convocated','Enrolled'],
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
    description: 'Academic Year is made up of three terms (Summer, Fall, Winter).'
  },
  Degree: {
    parents: ['Convocated','Enrolled'],
    collectedValues: ['Bachelors',
      'Masters',
      'Ph.D.'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE,
    description: 'Level of study of a student.'
  },
 
  'Study Status': {
    parents: ['Enrolled'],
    collectedValues: ['Part-time',
      'Full-time',
      'Co-op'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE,
    description: 'A full-time student is enrolled in 3 or more credits across the Fall and Winter terms whereas a part-time student is enrolled in less.'
  },
  'Citizenship Status': {
    parents: ['Enrolled'],
    collectedValues: ['Domestic',
      'International'],
  	uncollectedValues: [],
    type: EDI_ATTRIBUTE_NODE,
    description: 'Students are categorized based on whether they are charged domestic or international fees.'
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
    description: 'The age ranges of students.'
  },
  Sex: {
    parents: ['Convocated','Enrolled'],
    collectedValues: ['Female', 'Male'],
  	uncollectedValues: ['Non-binary'],
    type: EDI_ATTRIBUTE_NODE,
    description: 'This is mislabeled by the university. The correct label should be \'Gender\' and all genders should be collected.'
	},
  Race: {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect the race of a student.'
	},
  'Religion/Spirituality': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect the religion/spirituality of a student.'
  },
  'Regional Identity': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect the regional identity of a student.'
  },
  'Dis/ability': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect the dis/ability of a student.'
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
    description: 'University does not collect the first language of a student.'
  },
  'Other Language': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect the other language of a student.'
  },
  'Ethnicity': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect the ethnicity of a student.'
  },
  'Nation': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect the nation of origin of a student.'
  },
}

export const colors = {
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
}

const sizes = {
	Large: {width: 270, height: 70},
  Medium: {width: 280, height: 70},
	Small: {width: 330, height: 70}
}

const borderWidth = 5
const borderRadius = 5
const connectorLineWidth = 5

const nodeDimensions = {
  [INVISIBLE_NODE] : {
    width: sizes.Large.width,
    height: sizes.Large.height,
    borderColor: colors.Transparent,
    backgroundColor: colors.Transparent,
    textColor: colors.Transparent,
    connectorLineColor: colors.Black,
    expandable: false,
    clickable: false
  },
	[REPORT_NODE] : {
  	width: sizes.Large.width,
    height: sizes.Large.height,
    borderColor: colors.Black,
    backgroundColor: colors.Report_Node_Fill,
    textColor: colors.Black,
    connectorLineColor: colors.Transparent,
    expandable: true,
    clickable: true
  },
  [UNCOLLECTED_ATTRIBUTE_NODE] : {
    width: sizes.Medium.width,
    height: sizes.Medium.height,
    borderColor: colors.Black,
    backgroundColor: colors.Uncollected_Node_Fill,
    textColor: colors.Black,
    connectorLineColor: colors.Transparent,
    expandable: true,
    clickable: false
  },
  [ACADEMIC_ATTRIBUTE_NODE]: {
    width: sizes.Medium.width,
    height: sizes.Medium.height,
    borderColor: colors.Black,
    backgroundColor: colors.Academic_Node_Fill,
    textColor: colors.Black,
    connectorLineColor: colors.Black,
    expandable: true,
    clickable: true
  },
  [EDI_ATTRIBUTE_NODE]: {
    width: sizes.Medium.width,
    height: sizes.Medium.height,
    backgroundColor: colors.Diversity_Node_Fill,
    borderColor: colors.Black,
    textColor: colors.Black,
    connectorLineColor: colors.Black,
    expandable: true,
    clickable: true
  },
  [VALUE_NODE]: {
  	width: sizes.Small.width,
    height: sizes.Small.height,
    borderColor: colors.Black,
    textColor: colors.Black,
    backgroundColor: colors.White,
    expandable: false,
    clickable: true
  },
  [UNCOLLECTED_VALUE_NODE]: {
  	width: sizes.Small.width,
    height: sizes.Small.height,
    borderColor: colors.Black,
    backgroundColor: colors.Uncollected_Node_Fill,
    textColor: colors.Black,
		connectorLineColor: colors.Uncollected_Node_Fill,
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
 	if (initialNodes[nodeId])
    	node.description = "" || initialNodes[nodeId].description;
  
  if (nodeType == VALUE_NODE){
    node.backgroundColor = nodeDimensions[parentNodeType].backgroundColor; 
  	//node.borderColor = nodeDimensions[parentNodeType].borderColor; 
    node.connectorLineColor = nodeDimensions[parentNodeType].backgroundColor; 
    if (nodeId === 'STEM'){
    	node.description = 'Aggregation of faculty of Science, Engineering & Design and Mathematics'
    } else if (nodeId === 'Non-STEM'){
      node.description = 'Aggregation of all non-STEM faculties'
    } 
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
      	//let invisibleID = 'invisible'+key;
      	//nodes.push(makeNode(invisibleID, [key], INVISIBLE_NODE, node.type));
        for (const link of node.collectedValues)
          nodes.push(makeNode(link, [key], VALUE_NODE, node.type));
        for (const link of node.uncollectedValues)
          nodes.push(makeNode(link, [key], UNCOLLECTED_VALUE_NODE, node.type));
    }
	}
}

export const nodes = [makeNode('Root', [null], INVISIBLE_NODE)];
populateNodes(nodes, initialNodes);





