import React from "react";

function header() {
  return (
    <header>
      <div>
        <button>Log in</button>
        <button>Sign in</button>
      </div>
      <div>
        <button>Para ti</button>
        <button>Marcas</button>
        <button>Ayuda</button>
        <button>Tendencias</button>
        <button>Acerca de Nosotros</button>
      </div>
      <div>
        <input type="Buscar" />
        <img src="public/favorite.svg" alt="fav" />
        <img src="public/local_mall.svg" alt="bag" />
      </div>
    </header>
  );
}

export default header;
