import React from 'react'
import { informaciones } from '../assets/noticiasApi'
import Noticias from '../componentes/moleculas/Noticias'
import News from '../componentes/News'

function Template(props) {
  const informaciones =props.informaciones
  return (
    <>
      <News informaciones = {informaciones} />
    </>
  )
}

export default Template