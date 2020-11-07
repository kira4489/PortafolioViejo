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
                placeholder="Escriba tu nombre"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail2">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Escriba tu email"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Mensaje</label>
              <textarea
                type="text"
                className="form-control"
                id="exampleInputPassword1"
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
