const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Design', 'Web Development'],
  },
  {
    title: 'Microsoft Azure',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },

  {
    title: 'Git',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },

  {
    title: 'Jira',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },

  {
    title: 'Azure DevOps',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },

  {
    title: ' C#.Net',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },

  {
    title: 'SQL',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },

  {
    title: 'Adobe XD',
    competency: 3,
    category: ['Tools'],
  },

  {
    title: 'Illustrator',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'InDesign',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'InVision',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Figma',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Tableau',
    competency: 4,
    category: ['Tools'],
  },

  {
    title: 'Client Interviewing',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Requirements Gathering',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Presentation',
    competency: 3,
    category: ['Soft Skills'],
  },
  {
    title: 'Project Management',
    competency: 3,
    category: ['Soft Skills'],
  },
  {
    title: 'Resource management',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Marketing Research',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Social Media Marketing',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'User Experience Design',
    competency: 3,
    category: ['Design'],
  },

  {
    title: 'Wireframing',
    competency: 4,
    category: ['Design'],
  },
  {
    title: 'Interaction Design',
    competency: 3,
    category: ['Design'],
  },
  {
    title: 'User Interface Design',
    competency: 3,
    category: ['Design'],
  },
  {
    title: 'Usability Research',
    competency: 4,
    category: ['Design'],
  },
  {
    title: 'Prototyping',
    competency: 3,
    category: ['Design'],
  },
  {
    title: 'User Testing',
    competency: 4,
    category: ['Design'],
  },
  {
    title: 'Web Designs',
    competency: 3,
    category: ['Design'],
  }, {
    title: 'Design System',
    competency: 4,
    category: ['Design'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#515dd4',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#e47272',
  '#40494e',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
