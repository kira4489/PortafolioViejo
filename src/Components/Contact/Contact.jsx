import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section className="formulario">
        <div className="formulario1" id="contacto">
          <h2>Vamos a trabajar juntos</h2>
          <form action="https://formspree.io/f/mgenavrv" method="POST">
            <div className="form-group">
              <label for="exampleInputEmail1">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Ingrese su nombre"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Ingrese su email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword3">Mensaje</label>
              <textarea
              name="message"
                type="text"
                placeholder="Ingrese su mensaje"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
