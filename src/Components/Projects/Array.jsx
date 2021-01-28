import React from "react";

export default function Array({imagen,link,titulo}) {
  return (
    <div className="contenedor">
      <div className="cuadro">
        <picture>
          <img src={imagen}/>
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
