import React, { Component } from "react";
import "./About.css";
import foto from "../../images/me.jpg";
import jhonatan from "../../pdf/jhonatan1.pdf";

class About extends Component {
  render() {
    return (
      <section className="perfil" id="sobremi">
        <img src={foto} className="imagen" />
        <p className="texto3">Jhonatan Quirama Pino</p>
        <div className="texto">
          <p className="texto2">
            Mi nombre es Jhonatan Quirama Pino, tengo 28 años. Egresado
            de academia geek con enfasis en React/Node js. Soy tecnólogo
            en gestión de redes de datos y técnico en Desarrollo de Software, me
            apasiona la informática y la programación, me encantan los
            videojuegos y aprender nuevas cosas todos los días.
          </p>
          <br />
          <br />
          <a href={jhonatan} target="_blank">
            Descargue mi hoja de vida
          </a>
        </div>
      </section>
    );
  }
}

export default About;
