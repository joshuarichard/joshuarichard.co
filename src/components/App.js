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
                      joshua richard
                  </text>
              </div>
              <div className='menu-text'>
                  <a className='resume-text' href={'https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf'}>
                      resume
                  </a>
                  <div className='github-text'>
                    <a href={'https://www.github.com/joshuarichard'}>
                      github
                    </a>
                  </div>
                  <div className='linkedin-text'>
                    <a href={'https://www.linkedin.com/in/joshuajrichard/'}>
                      linkedIn
                    </a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default App
