import React from 'react'
import InfoFooter from '../componentes/moleculas/InfoFooter'
import Eprivacy from '../componentes/moleculas/Eprivacy'
import CopyRight from '../componentes/moleculas/CopyRight'

function Template() {
  return (
    <>
      <div className='Footer'>
        <InfoFooter />
        <hr />
        <Eprivacy />
        <CopyRight />
      </div>
    </>
  )
}

export default Template