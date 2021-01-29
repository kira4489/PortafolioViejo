import React, { useState } from "react";
import "./Header.css";

function Header (){
  const [openMenu, setOpenMenu] = useState(false)

  const openMenuMobile = () => {
    setOpenMenu(!openMenu)
  }

    return (<>
      <header>
        <nav className="navbar container12">
        <div className="logo">
          <i className="fas fa-code"></i>
          </div>
          <div>
          <ul className='links'>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobremi">Sobre mi</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul> 
          </div>
          <span className="icon-bar" id="menu-icon" onClick={openMenuMobile}>
              <i className="fas fa-bars"></i>
          </span>
        </nav>
      </header>
      {openMenu && <div>
        <ul className='links-mobile'>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#sobremi">Sobre mi</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
      </ul> 
        </div>}
     </>
    );
  }


export default Header;