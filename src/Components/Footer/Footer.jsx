import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css"
class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="titulo1">
              <p>© 2020 - Hecho por Jhonatan Quirama Pino </p>
              <div className="redes-footer">
                <a
                  href="https://www.facebook.com/jhonatan.quiramapino"
                  target="_blank noopener noreferrer"
                >
                  <i className='icon-redes-footer' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook']} /></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jhonatan-quirama-pino-289096179/"
                  target="blank noopener noreferrer"
                >
                   <i className='icon-redes-footer' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} /></i>
                </a>
                <a href="https://github.com/kira4489"
                target="_blank noopener noreferrer">
                  <i className='icon-redes-footer' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} /></i>
                </a>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer