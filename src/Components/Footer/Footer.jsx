import React, { Component } from 'react';
import "../Footer/Footer.css"
class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="titulo1">
              <p>© Jhonatan Quirama Pino</p>
              <div className="redes-footer">
                <a
                  href="https://www.facebook.com/jhonatan.quiramapino"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f icon-redes-footer"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jhonatan-quirama-pino-289096179/"
                  target="blank"
                >
                  <i className="fab fa-linkedin icon-redes-footer"></i>
                </a>
                <a href="https://github.com/kira4489">
                  <i className="fab fa-github icon-redes-footer"></i>
                </a>
              </div>
            </div>
          </footer>
        )
    }
    
}

export default Footer