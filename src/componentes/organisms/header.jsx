import React from "react";
import "../styles/header.css";
function Header() {
  return (
    <header>
      <div className="botones_log">
        <button>Log in</button>
        <button>Sign in</button>
      </div>
      <div className="nav">
        <div className="navbar">
          <button>Para ti</button>
          <button>Marcas</button>
          <button>Ayuda</button>
          <button>Tendencias</button>
          <button>Acerca de nosotros</button>
        </div>
        <div className="buscar">
          <input className="inp" type="text" />
          <button>
            <img src="/favorite.svg" alt="fav" />
          </button>
          <button>
            <img src="/local_mall.svg" alt="shop" />
          </button>
        </div>
      </div>
      <div className="marcas">
        <button>
          <img src="/image 10.svg" alt="Nike" />
        </button>
        <button>
          <img src="/image 11.svg" alt="Puma" />
        </button>
        <button>
          <img src="/image 12.svg" alt="Adidas" />
        </button>
      </div>
      <img
        className="logo"
        src="/WhatsApp Image 2023-11-06 at 20.54 5.svg"
        alt="logo"
      />
    </header>
  );
}

export default Header;
