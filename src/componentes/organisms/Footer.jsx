import React from 'react'
import InfoFooter from '../moleculas/InfoFooter'
import Eprivacy from '../moleculas/Eprivacy'
import CopyRight from '../moleculas/CopyRight'

function Footer() {
  return (
    <div className='Footer'>
        <InfoFooter />
        <hr />
        <Eprivacy />
        <CopyRight />
    </div>
  )
}

export default Footer