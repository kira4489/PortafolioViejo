import React, { Component } from 'react'
import "./About.css"
import foto from "../../images/me.jpg"
import jhonatan from "../../pdf/jhonatan.pdf";

class About extends Component{
    render(){
        return(
            <section className="perfil" id="sobremi">
            <img src={foto} className="imagen"/>
            <p className="texto3">Jhonatan Quirama Pino</p>
            <div className="texto">
              <p className="texto2">
                Mi nombre es Jhonatan Quirama Pino tengo 27 años soy Tecnologo en
                gestion de redes de datos y Tecnico laboral en desarrollo de
                software apasionado con la informatica y la programacion, Mi otra
                pasion es jugar videojuegos. Tengo 3 meses de experiencia en
                desarrollo de paginas web y espero volver a comenzar hacer proyectos
                me encanta mucho...
              </p>
              <br />
              <br />
              <p className="texto2">
                En mi tiempo libre me gusta jugar videojuegos,hacer ejercicio,
                salir con amigos,leer,estudiar y compartir con mi familia.
              </p>
              <a className="link" href={jhonatan} target="_blank">Descargue mi hoja de vida</a
              >
            </div>
          </section>
        )
    }
}

export default About