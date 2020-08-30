import React from "react";

export default function Array(props) {
  return (
    <div className="contenedor">
      <div className="cuadro">
        <picture>
          <img src={props.imagen}/>
          <a
            href={props.link}
            target="_blank"
          >
            {props.titulo}
          </a>
        </picture>
      </div>
    </div>
  );
}
