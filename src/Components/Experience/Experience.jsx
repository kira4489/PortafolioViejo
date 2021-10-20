import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container-experience">
      <div className="container-title" id="experience">
        <h2>Desarrollador front-end</h2>
        <ul>
          <li>Desarrollo de aplicaciones web React js</li>
          <li>Maquetacion de paginas web React,Vue js</li>
          <li>Responsive web</li>
          <li> Uso de la terminal git</li>
          <li>Software colaborativo Github y Gitlab</li>  
        </ul>
        <p className="paragraph-company">
          <strong>Empresa:</strong> Devip SAS
        </p>
        <p>
          <strong>Periodo:</strong> 3 de marzo 2021 - 4 de octubre 2021
        </p>
      </div>
    </div>
  );
};

export default Experience;
