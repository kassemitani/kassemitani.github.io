import React from 'react'

require('./Skills.css')

const current = [
  {
    name: 'tensorFlow',
    type: 'PropTypes.string',
    icon: '',
    href: 'https://www.tensorflow.org/',
    defaultValue: '',
    description: 'an open source software library for numerical computation using data flow graphs'
  },
  {
    name: 'keras',
    type: 'PropTypes.string',
    icon: '',
    href: 'https://www.keras.io/',
    defaultValue: '',
    description: 'Keras is a high-level neural networks API, written in Python and capable of running on top of either TensorFlow, CNTK or Theano'
  },
  {
    name: 'elixir',
    type: 'PropTypes.string',
    icon: '',
    href: 'https://elixir-lang.org',
    defaultValue: '',
    description: 'Elixir is a dynamic, functional language designed for building scalable and maintainable applications'
  },
  {
    name: 'phoenix',
    type: 'PropTypes.string',
    icon: '',
    href: 'http://www.phoenixframework.org/',
    defaultValue: '',
    description: 'Phoenix is a web development framework written in Elixir which implements the server-side MVC pattern'
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
    name: 'css3',
    type: 'PropTypes.string',
    icon: 'devicon-css3-plain colored',
    defaultValue: '',
    href: '',
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
    name: 'sass',
    type: 'PropTypes.string',
    icon: 'devicon-sass-plain colored',
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
    name: 'express',
    type: 'PropTypes.string',
    icon: 'devicon-express-original colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'python',
    type: 'PropTypes.string',
    icon: 'devicon-python-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'ruby',
    type: 'PropTypes.string',
    icon: 'devicon-ruby-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'babel',
    type: 'PropTypes.string',
    icon: 'devicon-babel-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'ruby on rails',
    type: 'PropTypes.string',
    icon: 'devicon-rails-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'redis',
    type: 'PropTypes.string',
    icon: 'devicon-redis-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'jQuery',
    type: 'PropTypes.string',
    icon: 'devicon-jquery-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'mongoDB',
    type: 'PropTypes.string',
    icon: 'devicon-mongodb-plain colored',
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
  {
    name: 'materialize',
    type: 'PropTypes.string',
    icon: 'devicon-google-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'bootstrap',
    type: 'PropTypes.string',
    icon: 'devicon-bootstrap-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'webpack',
    type: 'PropTypes.string',
    icon: 'devicon-webpack-plain colored',
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
    name: 'mocha',
    type: 'PropTypes.string',
    icon: 'devicon-mocha-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  }
]

const collabSkills = [
  {
    name: 'photoshop',
    type: 'PropTypes.string',
    icon: 'devicon-photoshop-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'illustrator',
    type: 'PropTypes.string',
    icon: 'devicon-illustrator-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'trello',
    type: 'PropTypes.string',
    icon: 'devicon-trello-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  }
]

const designSkills = [
  {
    name: 'photoshop',
    type: 'PropTypes.string',
    icon: 'devicon-photoshop-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'illustrator',
    type: 'PropTypes.string',
    icon: 'devicon-illustrator-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'trello',
    type: 'PropTypes.string',
    icon: 'devicon-trello-plain colored',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'fusion360',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'rhino',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'onShape',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: 'simplify3D',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  },
  {
    name: '3DSMax',
    type: 'PropTypes.string',
    icon: 'fa fa-cubes',
    href: '',
    defaultValue: '',
    description: ''
  }
]

const Skills = () => (
  <div className='skills-container'>
    <div className='skills-current'>
      <h3 className="description">I'm now learning</h3>
      <ul className='horizontal-list'>
        {
          current.map((prop) => {
            const { name, type, icon, href, defaultValue, description } = prop
            return (
              <li key={prop.name}>
                <div className='blocks'>
                  <a href={href}>
                    { {icon}.length > 1 ? <div className='current-image-container'><i className={`${icon} float`} /></div> : <div className='current-image-container'><img src={`${name}.png`} className='levitate' /></div> }
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
      <h3 className="description">Development</h3>
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
      <h3 className="description">Design</h3>
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
      <p className='skills-center'>
        You can find my CV
        <a href='http://bit.ly/hireseth'><strong><u> here</u></strong></a>
      </p>

    </div>
  </div>
)

export default Skills
