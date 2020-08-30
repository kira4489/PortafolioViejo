import React, { Component } from "react";
import "./Project.css";
import Proyecto1 from "../../images/tributo.jpg";
import Proyecto2 from "../../images/surveyform.jpg";
import Proyecto3 from "../../images/landinpage.jpg";
import Proyecto4 from "../../images/documentpage.jpg";
import Array from "./Array";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          titulo: "tribute page",
          imagen: Proyecto1,
          link: "https://blissful-murdock-638985.netlify.app/",
        },
        {
          titulo: "survey form",
          imagen: Proyecto2,
          link: "https://hardcore-goldberg-1a390b.netlify.app/",
        },
        {
          titulo: "landing page",
          imagen: Proyecto3,
          link: "https://vigorous-dijkstra-2c8cb5.netlify.app/",
        },
        {
          titulo: "document pages",
          imagen: Proyecto4,
          link: "https://cocky-allen-c1d816.netlify.app/",
        },
        {
          titulo: "document pages",
          imagen: Proyecto4,
          link: "https://cocky-allen-c1d816.netlify.app/",
        },
        {
          titulo: "document pages",
          imagen: Proyecto4,
          link: "https://cocky-allen-c1d816.netlify.app/",
        }
      ]
    } 
    }
  render() {
    return (
      <div className="proyectos" id="projects">
        <h2>Proyectos</h2>
        <div className="retos">
          {this.state.cards.map((card, index) => {
            return <Array key={index} titulo={card.titulo} imagen={card.imagen} link={card.link}/>;
          })}
        </div>
      </div>
    );
  }
}
