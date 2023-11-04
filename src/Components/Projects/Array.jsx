import React from "react";

const Array = ({imagen,link,titulo})=> {
  return (
    <div className="contenedor">
      <div className="cuadro">
        <picture>
          <img src={imagen} alt="proyectos"/>
          <a
            href={link}
            target="_blank noopener noreferrer"
          >
            {titulo}
          </a>
        </picture>
      </div>
    </div>
  );
}

export default Array