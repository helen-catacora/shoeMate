import React from 'react'
import { informaciones } from '../../assets/noticiasApi'
import './Noticias.css'

function Noticias(props) {
    const informaciones = props.informaciones
  return (
    <article className='font'>
        <div className='cuerpo'>
            <img src= {informaciones[0].imgFond} alt="" />
            <div className='info'>
                <h3>
                    {informaciones[0].title}
                </h3>
            </div>
            <div className='info2'>
                <p>
                    {informaciones[0].description}
                </p>
            </div>
            <div className='bord'>
                <a href="" className='butt'>
                    Mas informaciones
                </a>
            </div>
        </div>
        <div className='cuerpo'>
            <img src= {informaciones[1].imgFond} alt="" />
            <div className='info'>
                <h3>
                    {informaciones[1].title}
                </h3>
            </div>
            <div className='info2'>
                <p>
                    {informaciones[1].description}
                </p>
            </div>
            <div className='bord'>
                <a href="" className='butt'>
                    Mas informaciones
                </a>
            </div>
        </div>
    </article>
        
        
  )
}

export default Noticias