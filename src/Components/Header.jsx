import React, { Component } from 'react';
import styled from 'styled-components'
//import "../css/Header.css";

const Navbar = styled.nav`
width: 100%;
z-index: 999;
`

const Ul = styled.ul`
list-style-type: none;
overflow: hidden;
text-align: center;
background-color: black;
font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`

const Li = styled.li`
display: inline-block;
a {
  display: inline-block;
  color: white;
  padding: 25px;
  text-decoration: none;
}
`
class Header extends Component{
    render(){
        return(
            <header>
            <Navbar>
              <Ul>
                <Li><a href="#inicio">Inicio</a></Li>
                <Li><a href="#sobremi">Sobremi</a></Li>
                <Li><a href="#projects">Proyectos</a></Li>
                <Li><a href="#contacto">Contacto</a></Li>
              </Ul>
            </Navbar>
          </header>
        )
    }
    
}

export default Header