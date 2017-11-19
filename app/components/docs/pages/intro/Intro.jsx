import React from 'react'


require('./Skills.css')

const current = [
  {
    name: 'Swift',
    type: 'PropTypes.string',
    icon: 'devicon-swift-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'Android',
    type: 'PropTypes.string',
    icon: 'devicon-android-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'Titanium',
    type: 'PropTypes.string',
    icon: 'devicon-appcelerator-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
]

const devSkills = [
  {
    name: 'react',
    type: 'PropTypes.string',
    icon: 'devicon-react-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'PHP',
    type: 'PropTypes.string',
    icon: 'devicon-php-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'html5',
    type: 'PropTypes.string',
    icon: 'devicon-html5-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'javascript',
    type: 'PropTypes.string',
    icon: 'devicon-javascript-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'nodejs',
    type: 'PropTypes.string',
    icon: 'devicon-nodejs-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'heroku',
    type: 'PropTypes.string',
    icon: 'devicon-heroku-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  }
]

const designSkills = [
{
  name: 'mongoDB',
  type: 'PropTypes.string',
  icon: 'devicon-mongodb-plain colored',
  href: '',
  defaultValue: '',
  description: ''
},
{
  name: 'mySQL',
  type: 'PropTypes.string',
  icon: 'devicon-mysql-plain colored',
  href: '',
  defaultValue: '',
  description: ''
},
{
  name: 'postgreSQL',
  type: 'PropTypes.string',
  icon: 'devicon-postgresql-plain colored',
  href: '',
  defaultValue: '',
  description: ''
},
]

const About = () => (
  <div className='docs-installation'>
    <p>
      Hello! I'm Kassem Itani, An	ambitious developer	with	a	real	passion	for	mobile	app	development.	Embracing	cutting	edge	technology,
I	have	gained	an	in-depth	understanding	of the	different mobile	platforms.
    </p>
    <p>
    Having	helped	develop	successful	mobile apps	on	cross platforms including IOS,	Android,
    Blackberry	10,	feature phones (J2ME).
    </p>
    <div className='skills-container'>
      <div className='skills-current'>
        <h3 className="description">Mobile Development:</h3>
        <ul className='horizontal-list'>
          {
            current.map((prop) => {
              const { name, type, icon, href, defaultValue, description } = prop
              return (
                <li key={prop.name}>
                  <div className='blocks'>
                    <a href={href}>
                      { {icon}.length > 1 ? <div className='current-image-container'><i className={`${icon} float`} /></div> : <div className='current-image-container'><i className={`${icon} `} /></div> }
                      <div className='shadow'></div>
                      <div className='header'>
                        <p>{name}</p>
                      </div>
                    </a>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='skills-dev'>
        <h3 className="description">Web Development</h3>
        <ul className='horizontal-list'>
          {
            devSkills.map((prop) => {
              const { name, type, icon, href, defaultValue, description } = prop
              return (
                <li key={prop.name}>
                  <div>
                    <a href={href}>
                      <i className={icon} />
                      <p>{name}</p>
                    </a>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='skills-design'>
        <h3 className="description">Database </h3>
        <ul className='horizontal-list'>
          {
            designSkills.map((prop) => {
              const { name, type, icon, href, defaultValue, description } = prop
              return (
                <li key={prop.name}>
                  <div>
                    <i className={icon} />
                    <p>{name}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>

      </div>
    </div>
  </div>

)

export default About
