import React, { Component } from 'react'
import "../Section3/Contact.css"

class Contact extends Component{
    render(){
        return(
            <section className="formulario">
            <div className="formulario1" id="contacto">
              <h2>Vamos a trajar juntos</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime maiores qui, ipsam quibusdam eos, obcaecati nulla, vitae molestias neque inventore repellat veritatis iusto nemo aliquam aliquid possimus! Aut, officiis?</p>
            </div>
            <div className="redes">
              <a href="https://www.facebook.com/jhonatan.quiramapino/" target="_blank"
              ><i className="fab fa-facebook-f "></i
            >facebook</a>
            <a href="https://jhonatan-quirama-pino-289096179" target="_blank"
              ><i className="fab fa-linkedin "></i
            >linkedin</a>
            <a href="https://twitter.com/jhonatan0090" target="_blank"
            ><i className="fab fa-twitter "></i
          >twitter</a>
            <a href="https://github.com/kira4489" target="_blank"
              ><i className="fab fa-github  project-link"></i
            >github</a>
            </div>
          </section>
        )
    }
    
}

export default Contact