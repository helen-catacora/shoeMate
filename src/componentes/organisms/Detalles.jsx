import React from "react";
import "./Detalles.css";

function detalles() {
  return (
    <article className="contenedor">
      <div className="prod_cont">
        <h3 className="nom_prod">BASAS BUMPER GUM NE - MULE</h3>
        <p className="mod_prod">OFFWHITE/GUM</p>
        <div className="series">
          <p>series:23011</p>
          <p>Condition: Limited Edition</p>
        </div>
      </div>
      <div>
        <h3>Colores:</h3>
        <div className="colores">
          <div className="color1">
            <div className="bot_color1">
              <button className="blanco"></button>
              <button className="negro"></button>
              <button className="naranja"></button>
              <button className="gris"></button>
            </div>
            <div className="nom_color1">
              <p>Blanco</p>
              <p>Negro</p>
              <p>Naranja</p>
              <p>Gris</p>
            </div>
          </div>
          <div className="color2">
            <div className="bot_color2">
              <button className="Amarillo"></button>
              <button className="Marron"></button>
              <button className="Azul"></button>
              <button className="Rojo"></button>
            </div>
            <div className="nom_color2">
              <p>Amarillo</p>
              <p>Marron</p>
              <p>Azul</p>
              <p>Rojo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tallas">
        <h3>Tallas</h3>
        <div className="bts_talls">
          <div>
            <button className="btn_talla">36</button>
            <button className="btn_talla">36.5</button>
            <button className="btn_talla">37</button>
            <button className="btn_talla">37.5</button>
          </div>
          <div>
            <button className="btn_talla">38</button>
            <button className="btn_talla">38.5</button>
            <button className="btn_talla">39</button>
            <button className="btn_talla">39.5</button>
          </div>
          <div>
            <button className="btn_talla">40</button>
            <button className="btn_talla">40.5</button>
            <button className="btn_talla">41</button>
            <button className="btn_talla">41.5</button>
          </div>
          <div>
            <button className="btn_talla">42</button>
            <button className="btn_talla">42.5</button>
            <button className="btn_talla">43</button>
            <button className="btn_talla">44</button>
          </div>
        </div>
      </div>
      <div>
        <button>+ VER EL PRODUCTO</button>
        <button><img src="/Vector (1).svg" alt="" /></button>
      </div>
      <div>
        <p>Genero: Unisex</p>
        <p>Size run: 36 - 44</p>
        <p>Parte superior: cuero/ante</p>
        <p>Suela: Goma ICY</p>
      </div>
      <div>
        Materiales
      </div>
      <div>
        <h3>Tamaño de carta</h3>
        <img src="/Frame 3594.svg" alt="" />
      </div>
    </article>
  );
}

export default detalles;
