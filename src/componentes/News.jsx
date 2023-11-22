import React from 'react'
import { informaciones } from '../assets/noticiasApi'
import Noticias from './moleculas/Noticias'

function News() {
    
  return (
    <section>
        <h2 className='title'>Noticias</h2>
        <Noticias informaciones={informaciones}/>
    </section>
    
  )
}

export default News