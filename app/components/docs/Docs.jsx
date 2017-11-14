import React from 'react'
import PropTypes from 'prop-types'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import ChatBot from '../chatbot/ChatBot'
import menu from '../../menu'

// custom chatbot components
import AboutRoute from '../../components/redirect/AboutRoute'
import SkillsRoute from '../../components/redirect/SkillsRoute'
import CausesRoute from '../../components/redirect/CausesRoute'
import ContactRoute from '../../components/redirect/ContactRoute'
import ProjectRoute from '../../components/redirect/ProjectRoute'

import TourAbout from '../../components/redirect/TourAbout'
import TourSkills from '../../components/redirect/TourSkills'
import TourCauses from '../../components/redirect/TourCauses'
import TourProject2 from '../../components/redirect/TourProject2'
import TourProject3 from '../../components/redirect/TourProject3'
import TourProject4 from '../../components/redirect/TourProject4'
import TourContact from '../../components/redirect/TourContact'

require('./Docs.css')
require('../home/Home.css');

const { docsLink } = menu;

const routes = []
for (let i = 0, len = menu.sections.length; i < len; i += 1) {
  for (let j = 0, jlen = menu.sections[i].links.length; j < jlen; j += 1) {
    const link = menu.sections[i].links[j]
    routes[link.href] = link
  }
}


const Docs = (props) => {
  var linke = props.link
  if (props.link == '') {
   linke = docsLink
  }
  const link = routes[linke]

  return (
    <div className='docs'>
      <Sidebar
        handleLink={props.handleLink}
        float={props.opened}
      />

      <main className={`${props.opened ? 'opened' : ''}`}>
        {
          link ? (
            <div className='main-container'>
              <Header
                title={link.title}
                description={link.description}
              />
              { link.component }
              
            </div>
          ) : (
            <Header
              title='404 - Not Found'
              description='Page not found'
            />
          )
        }
      </main>
    </div>
  )
}

Docs.propTypes = {
  link: PropTypes.string.isRequired,
  handleLink: PropTypes.func.isRequired,
  toggleFloating: PropTypes.func,
  opened: PropTypes.bool
}

export default Docs
