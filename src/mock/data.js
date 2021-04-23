import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amanda White | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Amanda White',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Capture.PNG',
  paragraphOne: `Hello, I'm Amanda. A Feelance Full Stack Developer based in the Denver Area. I specialize in creating interactive experiences and 
  functional interfaces.`,
  paragraphTwo: 'Check out my projects, GitHub, Linkedin, Resume and get in touch!',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1XbCP5D3OTsb1ES_Az-tppa4afCo8D_tTQxsqehZ4qiU/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tempsnip.png',
    title: 'Moodful',
    info: `An app built with a group of developers targeted towards teams and the workplace. With Moodful you can log, track and view mood changes over time. As a team lead you can view your
    team members' moods over time and contact them through the built in chat functionality.`,
    info2: 'Built using React, PostgreSQL, Node.JS, Context, ChartJS, Socket.IO, JWT, and SCSS among other technologies. ',
    url: 'https://moodful.us',
    repo: 'https://github.com/Bradon88/mood-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bjjtracker.PNG',
    title: 'My BJJ Tracker',
    info: 'A workout and training tracking app for Brazilian Jiu-Jitsu practicioners to track and log training, techniques and the dates trained. This data is displayed in multiple easy to read formats to help inspire users to continue training based on seeing their daily progress.',
    info2: 'Built using React, Redux, PostgreSQL, Node.JS, Express, Massive, ChartJS along with other technologies.',
    url: '',
    repo: 'https://github.com/amanda-rene/my-personal-project', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'wamanda90@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amanda-white-a9343562/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/amanda-rene',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false // set to false to disable the GitHub stars/fork buttons
};
