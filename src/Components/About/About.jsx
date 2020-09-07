import React, { Component } from "react";
import "./About.css";
import foto from "../../images/me.jpg";
import jhonatan from "../../pdf/jhonatan.pdf";

class About extends Component {
  render() {
    return (
      <section className="perfil" id="sobremi">
        <img src={foto} className="imagen" />
        <p className="texto3">Jhonatan Quirama Pino</p>
        <div className="texto">
          <p className="texto2">
            Mi nombre es Jhonatan Quirama Pino tengo 28 años,Actualmente estoy
            realizando un bootcamp de 9 semanas en academia geek,Soy Tambien
            Tecnologo en gestion de redes de datos apasionado con la informatica
            y la programacion, Mi otra pasion es jugar videojuegos y aprender nuevos lenguajes de programacion.
          </p>
          <br />
          <br />
          <p className="texto2">
            En mi tiempo libre me gusta jugar videojuegos,hacer ejercicio, salir
            con amigos,leer,estudiar y compartir con mi familia.
          </p>
          <a href={jhonatan} target="_blank">
            Descargue mi hoja de vida
          </a>
        </div>
      </section>
    );
  }
}

export default About;
