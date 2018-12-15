import React from 'react'
import Menu from './Menu'
import Contact from './Contact'
import Joshua from './Joshua'

import '../../../css/components/box/content/Content.css'

const Content = () => (
  <div className='content-container'>
    <Joshua/>
    <div>
      <Menu/>
      <Contact/>
    </div>
  </div>
)

export default Content
