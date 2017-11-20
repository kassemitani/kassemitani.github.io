import React from 'react';
// Intro
import Intro from './components/docs/pages/intro/Intro';
import About from './components/docs/pages/intro/About';



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
