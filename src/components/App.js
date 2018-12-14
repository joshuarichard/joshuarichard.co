import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom';
import '../css/components/App.css'

import '../css/components/App.css'

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app-container'>
          <div className='center-box'>
              <div className='josh-text'>
                  <text> joshua richard </text>
              </div>
              <div>
                <div className='menu-text'>
                  <a className='resume-text' href='https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf'>
                      resume
                  </a>
                  <div className='github-text'>
                    <a href='https://github.com/joshuarichard' target="_blank">github</a>
                  </div>
                  <div className='linkedin-text'>
                    <a href='https://linkedin.com/in/joshuajrichard' target="_blank">linkedin</a>
                  </div>
                </div>
                <div className='contact-text'>
                  <div className='name-text'>
                    <a href="mailto:me@joshuarichard.co"> me@joshuarichard.co </a>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

/*
<Route path='/github' component={() => window.location = 'https://github.com/joshuarichard'}/>
<Route path='/linkedin' component={() => window.location = 'https://linkedin.com/in/joshuajrichard'}/>
*/

export default App
