import React from 'react'

import '../../css/components/Menu.css'

const Menu = () => (
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
)

export default Menu
