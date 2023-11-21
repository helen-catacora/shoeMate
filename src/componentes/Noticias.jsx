import React from 'react'
import { informaciones } from '../assets/noticiasApi'
import './Styles/Noticias.css'

function Noticias(props) {
    const informaciones = props.informaciones
  return (
    <article>
        <h2>
            Noticias
        </h2>
        <div>
            <div>
                <h3>
                    {informaciones[0].title}
                </h3>
            </div>
            <div>
                <p>
                    {informaciones[0].description}
                </p>
            </div>
        </div>
    </article>
  )
}

export default Noticias