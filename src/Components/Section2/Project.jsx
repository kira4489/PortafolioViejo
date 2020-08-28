import React, { Component } from 'react'
import "../Section2/Project.css"
import Proyecto1 from "../../images/tributo.jpg";
import Proyecto2 from "../../images/surveyform.jpg";
import Proyecto3 from "../../images/landinpage.jpg";
import Proyecto4 from "../../images/documentpage.jpg";

export default class Project extends Component{
    render(){
        return(
            <div className="proyectos" id="projects">
            <h2>Proyectos</h2>
            <div className="retos">
             <div className="contenedor">
                <div className="cuadro">
                  <picture>
                    <img src={Proyecto1}/>
                    <a href="https://blissful-murdock-638985.netlify.app/" target="_blank"
                      >tribute page</a
                    >
                  </picture>
                </div>
              </div>
              <div className="contenedor">
                <div className="cuadro">
                  <picture>
                    <img src={Proyecto2}/>
                    <a href="https://hardcore-goldberg-1a390b.netlify.app/" target="_blank"
                      >survey form</a
                    >
                  </picture>
                </div>
              </div>
              <div className="contenedor">
                <div className="cuadro">
                  <picture>
                    <img src={Proyecto3} />
                    <a href="https://vigorous-dijkstra-2c8cb5.netlify.app/" target="_blank"
                      >landing page</a
                    >
                  </picture>
                </div>
              </div>
              <div className="contenedor">
                <div className="cuadro">
                  <picture>
                    <img src={Proyecto4}/>
                    <a href="https://cocky-allen-c1d816.netlify.app/" target="_blank"
                      >document pages</a
                    >
                  </picture>
                </div>
              </div>
             </div>
          </div>
        )
    }
}

