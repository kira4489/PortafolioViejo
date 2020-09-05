import React, { Component } from 'react'
import "./Contact.css"

class Contact extends Component{
    render(){
        return(
      <section className="formulario">
      <div className="formulario1" id="contacto">
        <h2>Vamos a trajar juntos</h2>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</section>
        )
    }
    
}

export default Contact