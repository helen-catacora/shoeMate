import React from 'react';

const TarjetaRecomendacion = ({ title, imgUrl, precio }) => {
  return (
    <div className="tarjeta-recomendacion">
      <img src={imgUrl} alt={title} />
      <div className="textos-tarjeta-recomendacion">
        <p>{title}</p>
        <p>{precio}</p>
      </div>
    </div>
  );
};

export default TarjetaRecomendacion;
