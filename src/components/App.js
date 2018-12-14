import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import '../css/components/App.css'

import '../css/components/App.css'

class App extends Component {

  constructor(props ) {
    super(props)
  }

  render() {
    return (
      <div className='app-container'>
          <div className='center-box'>
              <div className='josh-text'>
                  <text>
                      Joshua Richard,
                  </text>
              </div>
              <div className='menu-text'>
                  <a className='resume-text' href={'https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf'}>
                      Resume,
                  </a>
                  <a className='github-text' href={'https://github.com/joshuarichard'}>
                      GitHub,
                  </a>
                  <a className='linkedin-text' href={'https://www.linkedin.com/in/joshuajrichard/'}>
                      LinkedIn.
                  </a>
              </div>
          </div>
      </div>
    )
  }
}

export default App
