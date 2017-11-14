import React from 'react';
// Intro
import Intro from './components/docs/pages/intro/Intro';
import About from './components/docs/pages/intro/About';
import Causes from './components/docs/pages/intro/Causes';
// Examples
import Project1 from './components/docs/pages/examples/Project1';
import Project2 from './components/docs/pages/examples/Project2';
import Project3 from './components/docs/pages/examples/Project3';
import Project4 from './components/docs/pages/examples/Project4';

// API Referece
import Skills from './components/docs/pages/reference/Skills';
// Others
import Contact from './components/docs/pages/others/Contact';



const menu = {
  title: 'Hello! I\'m Kassem',
  description: 'A Mobile App developer....',
  homeLink: '/intro',
  docsLink: '/intro',
  github: {
    user: 'Kassemitani',
    repository: 'kassemitani.github.io',
  },
  sections: [
    {
      title: 'About Me',
      icon: 'fa fa-asterisk',
      links: [
        {
          href: '/intro',
          title: 'Introduction',
          description: '',
          component: <Intro />,
        },
        {
          href: '/about',
          title: 'My Story',
          description: '',
          component: <About />,
        },
        {
          href: '/causes',
          title: 'Causes I Love',
          component: <Causes />,
        },
      ],
    },
    {
      title: 'Portfolio',
      icon: 'fa fa-code',
      links: [
        // {
        //   href: '/portfolio/project1',
        //   title: 'Save the Pangolin',
        //   component: <Project1 />,
        // },
        {
          href: '/portfolio/project2',
          title: 'Thingies',
          description: 'where RFID meets IoT',
          component: <Project2 />,
        },
        {
          href: '/portfolio/project3',
          title: 'Food Delivery',
          component: <Project3 />,
        },
        {
          href: '/portfolio/project4',
          title: 'Sentiment Chatbot',
          description: 'Chatbots that can empathise',
          component: <Project4 />,
        },
      ],
    },
    {
      title: 'Skills',
      icon: 'fa fa-rocket',
      links: [
        {
          href: '/skills',
          title: 'Coding & Creative',
          description: '',
          component: <Skills />,
        },
      ],
    },
    {
      title: 'Contact Me',
      icon: 'fa fa-envelope',
      links: [
        // {
        //   href: '/engage',
        //   title: 'How to Contribute',
        //   component: <Contribute />,
        // },
        {
          href: '/contact',
          title: 'Social',
          component: <Contact />,
        },
      ],
    },
  ],
  ctas: [
    {
      title: 'Linkedin',
      icon: 'fa fa-linkedin-square',
      href: 'https://www.linkedin.com/in/kassemitani/'
    },
    {
      title: 'GitHub',
      icon: 'fa fa-github-square',
      href: 'https://github.com/kassemitani'
    },
    {
      title: 'facebook',
      icon: 'fa fa-facebook-square',
      href: 'https://www.facebook.com/kassemitani'
    },
    {
      title: 'mail',
      icon: 'fa fa-envelope',
      href: 'mailto:kassem.itani@gmail.com?Subject=Hello%20Kassem'
    },
  ],
};

export default menu;
