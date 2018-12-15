import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Box from './box/Box.js'

import '../css/components/App.css'

ReactGA.initialize('UA-131070858-1')
ReactGA.pageview('/home')

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app-container'>
        <Box/>
      </div>
    )
  }

}

export default App
