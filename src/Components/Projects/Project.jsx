import React from "react";
import "./Project.css";
import Proyecto1 from "../../images/burger.jpg";
import Proyecto2 from "../../images/superhero.jpg";
import Proyecto3 from "../../images/educationapp.jpg";
import Proyecto4 from "../../images/landing-podcast.jpg";
import Proyecto5 from "../../images/landingpage.jpg";
import Proyecto6 from "../../images/surveyform.jpg";
import Proyecto7 from "../../images/documentpage.jpg";
import Array from "./Array";

const Project = () => {
      const cards = [{
          titulo: "Burger Quiz",
          imagen: Proyecto1,
          link: "https://burger-quiz.vercel.app/",
        },
        {
          titulo: "Super Hero",
          imagen: Proyecto2,
          link: "https://superhero.kira4489.vercel.app/",
        },
        {
          titulo: "Education App",
          imagen: Proyecto3,
          link: "https://final-project-livid.vercel.app/",
        },
        {
          titulo: "Landing podcast",
          imagen: Proyecto4,
          link: "https://modest-blackwell-7529ee.netlify.app/",
        },
        {
          titulo: "Landing page",
          imagen: Proyecto5,
          link: "https://determined-boyd-d73ec1.netlify.app/",
        },
        {
          titulo: "Survey form",
          imagen: Proyecto6,
          link: "https://hardcore-goldberg-1a390b.netlify.app/",
        },
        {
          titulo: "Document pages",
          imagen: Proyecto7,
          link: "https://cocky-allen-c1d816.netlify.app/",
        },
      ]
    return (
      <div className="proyectos" id="projects">
        <h2>Proyectos</h2>
        <div className="retos">
          {cards.map((card, index) => {
            return <Array key={index} titulo={card.titulo} imagen={card.imagen} link={card.link}/>;
          })}
        </div>
      </div>
    );
  }

export default Project
