import React, { Component } from "react";
import "./About.css";
import foto from "../../images/me.jpg";
import jhonatan from "../../pdf/Jhonatan.pdf";

class About extends Component {
  render() {
    return (
      <section class="perfil" id="sobremi">
      <div class="cajaimagen">
      <img src={foto} class="imagen" />
      </div>
      <div class="Pruebatexto">
      <p class="title1">Jhonatan Quirama Pino</p>
        <p class="description">
          Mi nombre es Jhonatan Quirama Pino, tengo 28 años. Egresado
          de academia geek con enfasis en React/Node js. Soy tecnólogo
          en gestión de redes de datos y técnico en Desarrollo de Software, me
          apasiona la informática y la programación, me encantan los
          videojuegos y aprender nuevas cosas todos los días.
          <a href={jhonatan} target="_blank">
         Ver mi hoja de vida
        </a>
        </p>
        <br />
        <br />
       </div>
    </section>
    );
  }
}

export default About;
