export const MAIN_NODE = 'MAIN';
export const VALUE_NODE = 'VALUE';
export const EDI_ATTRIBUTE_NODE = 'EDI_ATTRIBUTE';
export const OTHER_ATTRIBUTE_NODE = 'OTHER_ATTRIBUTE';
export const UNCOLLECTED_ATTRIBUTE_NODE = 'UNCOLLECTED_ATTRIBUTE';

export const colors = {
  White: '#FFFFFF',
  Black : '#000000',
	Selected: '#39FF14',
  Unselected: '#FF3131',
  Unavailable: '#808080'
}

const MAIN_NODE_DISTANCE = 80;
const MAIN_NODE_SIZE = 100;
const MAIN_NODE_SHAPE = 'rect';

const ATTRIBUTE_NODE_DISTANCE = 40;
const ATTRIBUTE_NODE_SIZE = 20;
const ATTRIBUTE_NODE_SHAPE = 'circle';

const VALUE_NODE_DISTANCE = 10;
const VALUE_NODE_SIZE = 20;
const VALUE_NODE_SHAPE = 'rect';

export const properties = {
  [MAIN_NODE]: {
    size: MAIN_NODE_SIZE,
    distance: MAIN_NODE_DISTANCE,
    shape: MAIN_NODE_SHAPE
  },
  [EDI_ATTRIBUTE_NODE]: {
    size: ATTRIBUTE_NODE_SIZE,
    distance: ATTRIBUTE_NODE_DISTANCE,
    shape: ATTRIBUTE_NODE_SHAPE
  },
  [OTHER_ATTRIBUTE_NODE]: {
    size: ATTRIBUTE_NODE_SIZE,
    distance: ATTRIBUTE_NODE_DISTANCE,
    shape: ATTRIBUTE_NODE_SHAPE
  },
  [UNCOLLECTED_ATTRIBUTE_NODE]: {
    size: ATTRIBUTE_NODE_SIZE,
    distance: ATTRIBUTE_NODE_DISTANCE,
    shape: ATTRIBUTE_NODE_SHAPE
  },
  [VALUE_NODE]: {
    size: VALUE_NODE_SIZE,
    distance: VALUE_NODE_DISTANCE,
    shape: VALUE_NODE_SHAPE
  },
};

export const initialNodes = {
  Demographics: {
    links: [
      'Feestat',
      'Age',
      'Sex',
      'Degree',
      'Acadyear',
      'Acadunit',
      'FtpStat',
      'Race',
      'Religion/Spirituality',
      'Geographic Identity',
      'Dis/ability',
      'Indigenous',
      'First Language',
      'Other Language',
    ],
    group: MAIN_NODE,
  },
  Convocations: {
    links: ['Sex', 'Degree', 'Acadyear', 'Acadunit'],
    group: MAIN_NODE,
  },
  Courses: {
    links: ['Acadyear', 'Acadunit'],
    group: MAIN_NODE,
  },
  Feestat: {
    links: ['Domestic', 'International'],
    group: EDI_ATTRIBUTE_NODE,
  },
  Age: {
    links: [
      '17-22',
      '23-29',
      '30-34',
      '35-39',
      '40-44',
      '45-49',
      '50+',
    ],
    group: EDI_ATTRIBUTE_NODE,
  },
  Sex: {
    links: ['Male', 'Female'],
    group: EDI_ATTRIBUTE_NODE,
  },
  Degree: {
    links: ['Undergraduate', 'Graduate'],
    group: OTHER_ATTRIBUTE_NODE,
  },
  Undergraduate: {
    links: ['Bachelors'],
    group: OTHER_ATTRIBUTE_NODE,
  },
  Graduate: {
    links: ['Masters', 'Ph.D'],
    group: OTHER_ATTRIBUTE_NODE,
  },
  Acadunit: {
    links: [
      'Arts & Social Sciences',
      'Public Affairs',
      'Business',
      'STEM',
    ],
    group: OTHER_ATTRIBUTE_NODE,
  },
  STEM: {
    links: ['Science', 'Engineering & Design'],
    group: OTHER_ATTRIBUTE_NODE,
  },
  Acadyear: {
    links: [
      '2013/14',
      '2014/15',
      '2015/16',
      '2016/17',
      '2017/18',
      '2018/19',
      '2019/20',
      '2020/21',
    ],
    group: OTHER_ATTRIBUTE_NODE,
  },
  FtpStat: {
    links: ['Full time', 'Part time'],
    group: OTHER_ATTRIBUTE_NODE,
  },
  Race: {
    links: [],
    group: UNCOLLECTED_ATTRIBUTE_NODE,
  },
  'Religion/Spirituality': {
    links: [],
    group: UNCOLLECTED_ATTRIBUTE_NODE,
  },
  'Geographic Identity': {
    links: [],
    group: UNCOLLECTED_ATTRIBUTE_NODE,
  },
  'Dis/ability': {
    links: [],
    group: UNCOLLECTED_ATTRIBUTE_NODE,
  },
  Indigenous: {
    links: [],
    group: UNCOLLECTED_ATTRIBUTE_NODE,
  },
  'First Language': {
    links: [],
    group: UNCOLLECTED_ATTRIBUTE_NODE,
  },
  'Other Language': {
    links: [],
    group: UNCOLLECTED_ATTRIBUTE_NODE,
  },
};
