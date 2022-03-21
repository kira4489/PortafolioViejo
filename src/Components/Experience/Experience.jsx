import React from "react";
import "./Experience.css";
import Experience2 from "./Experience2";

const Experience = () => {
  return (
    <>
      <Experience2 />
      <div className="container-experience">
        <div className="container-title" id="experience">
          <h2>Desarrollador Frontend</h2>
          <ul>
            <li>Desarrollo de aplicaciones web React js</li>
            <li>Desarrollo de aplicaciones web Vue js</li>
            <li>Maquetacion de paginas web React</li>
            <li>Maquetacion de paginas web Vue js</li>
            <li>Responsive web</li>
            <li>Uso de la terminal git</li>
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
    </>
  );
};

export default Experience;
