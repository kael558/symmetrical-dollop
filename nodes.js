const INVISIBLE_NODE = 'INVISIBLE';
const REPORT_NODE = 'REPORT';

const EDI_ATTRIBUTE_NODE = 'EDI_ATTRIBUTE';
const ACADEMIC_ATTRIBUTE_NODE = 'OTHER_ATTRIBUTE';
const UNCOLLECTED_ATTRIBUTE_NODE = 'UNCOLLECTED_ATTRIBUTE';

const VALUE_NODE = 'VALUE';
const UNCOLLECTED_VALUE_NODE = 'UNCOLLECTED_VALUE';



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

     export const initialNodes = {
  Enrolled: {
    type: REPORT_NODE,
    description: 'The number of students that are enrolled.'
  },
  Faculty: {
    parents: ['Enrolled'],
    collectedValues: ['STEM', 'Non-STEM', 'Engineering & Design', 'Science', 'Public Affairs', 'Business', 'Arts & Social Sciences'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE,
    description: 'Groups of university departments concerned with a major division of knowledge. The faculty of a student maps from their major or majors.'
  },
  'Academic Year': {
    parents: ['Enrolled'],
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
    description: 'The period of the year which students attend an educational institution. The academic year consists of three terms (Summer, Fall and Winter). The academic year of a student maps from the year that they are studying.',
    ordered: true
  },
  Degree: {
    parents: ['Enrolled'],
    collectedValues: ['Bachelors',
      'Masters',
      'Ph.D.'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE,
    description: 'The levels of qualification offered by academic instituitions. The degree of a student maps from their level of study.',
    ordered: true
  },
 
  'Study Status': {
    parents: ['Enrolled'],
    collectedValues: ['Part-time',
      'Full-time',
      'Co-op'],
  	uncollectedValues: [],
    type: ACADEMIC_ATTRIBUTE_NODE,
    description: 'The classification of the amount of courses that a student is taking. Students enrolling in 3 or more credits across the Fall and Winter are full-time students. Whereas students enrolling in less than 3 credits are part-time students.'
  },
  'Citizenship Status': {
    parents: ['Enrolled'],
    collectedValues: ['Domestic',
      'International'],
  	uncollectedValues: [],
    type: EDI_ATTRIBUTE_NODE,
    description: 'The classification of tuition fee that a student pays. The students university tuition fee amount determines their citizenship status.'
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
    description: 'The length of time that a student has lived. The age of a student maps to their respective age interval. The registration application records a student\'s date of birth and determines their age.',
    ordered: true
  },
  Sex: {
    parents: ['Enrolled'],
    collectedValues: ['Female', 'Male'],
  	uncollectedValues: ['Non-binary'],
    type: EDI_ATTRIBUTE_NODE,
    description: 'The physical differences between students based on anatomical and physiological characteristics. The registration application records a student\'s sex (labelled as gender on the application). A student may file a form to request a \"Gender Change Assignment\" to change this field. This field contains a mixture of gender and sex. A growing population of students choose not to disclose their gender/sex with a \'Prefer not to report\' option. We are unsure how this maps to the two available categories of \'male\' and \'female\'.'
	},
  Race: {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect this category of information.'
	},
  'Religion/Spirituality': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect this category of information.'
  },
  'Regional Identity': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect this category of information.'
  },
  'Dis/ability': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect this category of information.'
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
    description: 'University does not collect this category of information.'
  },
  'Other Language': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect this category of information.'
  },
  'Ethnicity': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect this category of information.'
  },
  'Nation': {
    parents: ['Enrolled'],
  	collectedValues: [],
  	uncollectedValues: [],
    type: UNCOLLECTED_ATTRIBUTE_NODE,
    description: 'University does not collect this category of information.'
  },
}


export const nodes = {
           "name": "",
           "color": colors.Transparent,
  				 "borderWidth": "0px",
           "children": [
            {
             "name": "Faculty",
             "color": colors.Academic_Node_Fill,
            	description: 'Groups of university departments concerned with a major division of knowledge. The faculty of a student maps from their major or majors.',
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
              description: 'The period of the year which students attend an educational institution. The academic year consists of three terms (Summer, Fall and Winter). The academic year of a student maps from the year that they are studying.',
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
              description: 'The levels of qualification offered by academic instituitions. The degree of a student maps from their level of study.',
             "children": [
                {"name": "Bachelors", "size": 28},
                {"name": "Masters", "size": 28},
                {"name": "Ph.D.", "size": 28},
             ]  
            },
            {
             "name": "Study Status",
             "color": colors.Academic_Node_Fill,
              description: 'The classification of the amount of courses that a student is taking. Students enrolling in 3 or more credits across the Fall and Winter are full-time students. Whereas students enrolling in less than 3 credits are part-time students.',
              "children": [
                {"name": "Part-time", "size": 28},
                {"name": "Full-time", "size": 28},
                {"name": "Co-op", "size": 28},
             ]  
            },
            {
             "name": "Citizenship Status",
             "color": colors.Diversity_Node_Fill,
             description: 'The classification of tuition fee that a student pays. The students university tuition fee amount determines their citizenship status.',
             "children": [
                {"name": "Domestic", "size": 42},
                {"name": "International", "size": 42},
             ]  
            },
            {
             "name": "Age",
             "color": colors.Diversity_Node_Fill,
              description: 'The length of time that a student has lived. The age of a student maps to their respective age interval. The registration application records a student\'s date of birth and determines their age.',
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
              description: 'The physical differences between students based on anatomical and physiological characteristics. The registration application records a student\'s sex (labelled as gender on the application). A student may file a form to request a \"Gender Change Assignment\" to change this field. This field contains a mixture of gender and sex. A growing population of students choose not to disclose their gender/sex with a \'Prefer not to report\' option. We are uncertain how this maps to the two available categories of \'male\' and \'female\'.',
              "children": [
                {"name": "Male", "size": 28},
                {"name": "Female", "size": 28},
                {"name": "Non-binary", "color":colors.Uncollected_Node_Fill, "size": 28}
             ]  
            },
            {
             "name": "Race",
             "color":colors.Uncollected_Node_Fill,
              description: 'University does not collect this category of information.',
             "size": 84
            },
            {
             "name": "Religion/Spirituality",
             "color":colors.Uncollected_Node_Fill,
              description: 'University does not collect this category of information.',
              "size":  84
            },
            {
             "name": "Dis/ability",
             "color": colors.Uncollected_Node_Fill,
              description: 'University does not collect this category of information.',
              "size":  84
            },
            {
             "name": "Indigeneity",
             "color": colors.Uncollected_Node_Fill,
               description: 'University does not collect this category of information.',
              "size":  84
            },
            {
             "name": "Languages Spoken",
             "color": colors.Uncollected_Node_Fill,
              description: 'University does not collect this category of information.',
              "size":  84
            },
            {
             "name": "Ethnicity",
             "color": colors.Uncollected_Node_Fill,
              description: 'University does not collect this category of information.',
              "size":  84
            },
            {
             "name": "Nation/Regional Identity",
             "color": colors.Uncollected_Node_Fill,
              description: 'University does not collect this category of information.',
              "size":  84
            },
           ]
}





