import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  
  render() {
    return (
      <header>
        <nav className="navbar contenedor12">
        <div className="logo">
          <i className="fas fa-code"></i>
          </div>
          <div className="enlaces">
          <ul>
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
        </nav>
      </header>
    );
  }
}

export default Header;