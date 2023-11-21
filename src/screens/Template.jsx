import React from 'react'
import { informaciones } from '../assets/noticiasApi'
import Noticias from '../componentes/Noticias'

function Template(props) {
  const informaciones =props.informaciones
  return (
    <>
    <section>
      {
        informaciones.map(info => {
          return (
            <Noticias informaciones = {info}/>
          )
        })
      }
    </section>
    </>
  )
}

export default Template