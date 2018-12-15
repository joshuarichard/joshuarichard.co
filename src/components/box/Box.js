import React from 'react'
import Menu from './Menu'
import Contact from './Contact'
import Header from './Header'

import '../../css/components/Box.css'

const Box = () => (
  <div className='center-box'>
      <Header/>
      <div>
        <Menu/>
        <Contact/>
      </div>
  </div>
)

export default Box
