import React, { Component } from 'react';
import About from "../Section1/About";
import Project from "../Section2/Project";
import "../Main/Main.css"
// import styled from 'styled-components'
/**el ultimo elemnto la etiqueta de html */
// const Section1= styled.section`
// background-image: url(./portatil.jpg);
//     height: 100vh;
//     background-size: cover;
//     opacity: 0.8;
//     background-position: center;
//     position: relative;
//     ::before {
//         content: "";
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         background-color: #000000;
//         opacity: 0.4;
//       }
// `

// const Titulo= styled.section`
//  position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   h1 {
//   color: orange;
//   font-size: 70px;
//   text-align: center;
// }

// p {
//   text-align: center;
//   font-size: 50px;
//   color: white;
// }

// `

class Main extends Component{
    render(){
        return(
        <main>
        <section className="imagen" id="inicio">
        <div className="title">
        <h1>Desarrollador Frontend</h1>
        <p>Jhonatan Quirama Pino</p>
        
        </div>
        </section>
        <About/>
        <Project/>
        </main>
        )
    }
    
}

export default Main