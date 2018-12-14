import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
              <div>
                  <BrowserRouter>
                    <div className='menu-text'>
                      <a className='resume-text' href={'https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf'}>
                          resume
                      </a>
                      <div className='github-text'>
                        <Link to="/github">github</Link>
                      </div>
                      <div className='linkedin-text'>
                        <Link to="/linkedin">linkedin</Link>
                      </div>
                      <Route path='/github' component={() => window.location = 'https://www.github.com/joshuarichard'}/>
                      <Route path='/linkedin' component={() => window.location = 'https://www.linkedin.com/in/joshuajrichard'}/>
                    </div>
                  </BrowserRouter>
              </div>
          </div>
      </div>
    )
  }
}

export default App
