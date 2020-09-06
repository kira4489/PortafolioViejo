import React, { Component } from "react";
import "./Header.css";
// import styled from 'styled-components'
//import "../css/Header.css";

// const Navbar = styled.nav`
// width: 100%;
// z-index: 999;
// `

// const Ul = styled.ul`
// list-style-type: none;
// overflow: hidden;
// text-align: center;
// background-color: black;
// font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
// `

// const Li = styled.li`
// display: inline-block;
// a {
//   display: inline-block;
//   color: white;
//   padding: 25px;
//   text-decoration: none;
// }
// `
class Header extends Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobremi">Sobremi</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
