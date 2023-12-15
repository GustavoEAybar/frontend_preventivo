import footer from "./footer.css";
import React from 'react'


$(document).ready(function() {
    $(".title").lettering();
  });

$(document).ready(function() {
    animation();
  }, 1000);


  function animation() {
    var title1 = new TimelineMax();
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05)
  }

const footer = () => {
  return (
    <div className="footer-container">
        
        <div className="col">
            <span>Información de contacto</span>
            <span>Dirección: Tucumán</span>
            <span>Tel.: 381-987-9874</span>
        </div>
        <div className="colM">
            <span className="title">Apex</span>
            <span className="title">🌟</span>
            <span className="title">Gym</span>
        </div>
        <div className="col">
            <span>Contactenos</span>
            <span>¿Cómo llegar?</span>
            <span>Reglamento de convivencia</span>
        </div>
        
    </div>
  )
}

export default footer;