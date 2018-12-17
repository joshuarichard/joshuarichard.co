import React from 'react'

import '../../css/components/Face.css'

let fu = 'https://s3.amazonaws.com/joshuarichard-site/joshuarichard.jpeg'

const Face = () => (
  <div className='face-container'>
    <img className='josh-face'
         src={fu}
         alt='joshua richard face'>
    </img>
  </div>
)

export default Face
