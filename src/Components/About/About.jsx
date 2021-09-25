import React from "react";
import "./About.css";
import Me from "../../images/me.jpg";
import jhonatan from "../../pdf/Jhonatan.pdf";

const About = () =>{
    return (
      <section className="perfil" id="sobremi">
      <div className="container">
      <img src={Me} className="imagen" alt="jhonatan"/>
      <div className="texto">
      <p className="title1">Jhonatan Quirama Pino</p>
        <p className="description">
          Mi nombre es Jhonatan Quirama Pino, tengo 29 años. Egresado
          de academia geek con enfasis en React/Node js. Soy tecnólogo
          en gestión de redes de datos y técnico en Desarrollo de Software, me
          apasiona la informática y la programación, me encantan los
          videojuegos y aprender nuevas cosas todos los días.
          <a href={jhonatan} target="_blank" rel="noopener noreferrer">
         Ver mi hoja de vida
        </a>
        </p>
        <br />
        <br />
       </div>
       </div>
    </section>
    );
}

export default About;
