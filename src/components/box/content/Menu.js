import React from 'react'

import '../../../css/components/Menu.css'

let ru = 'https://s3.amazonaws.com/joshuarichard-site/joshua_richard_resume.pdf'
let gu = 'https://github.com/joshuarichard'
let lu = 'https://linkedin.com/in/joshuajrichard'

const Menu = () => (
  <div className='menu-container'>
    <a className='resume-text'
       href={ru}
       target="_blank"
       rel='noreferrer noopener'
    >
      resume
    </a>
    <div className='github-text'>
      <a href={gu}
         target="_blank"
         rel='noreferrer noopener'
      >
        github
      </a>
    </div>
    <div className='linkedin-text'>
      <a href={lu}
         target="_blank"
         rel='noreferrer noopener'
      >
        linkedin
      </a>
    </div>
  </div>
)

export default Menu
