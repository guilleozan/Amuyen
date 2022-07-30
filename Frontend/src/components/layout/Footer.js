import "../../styles/footer.css";

import React from "react";
const Footer = (props) => {
  return (
    <section >
      <div className="contPie">
        <div className="contHorarios">
        <br></br>
        <h5 className="contHorarios">Horarios de Apertura </h5> 
           <h6 className="contHorarios">Lunes a Viernes </h6>         
            9:00 a 13:00    <br></br>      
            16:30 a 21:00    <br></br>  <br></br>   
            <h6 className="contHorarios"> Sabados y Domingos</h6>        
             9:30 a 12:30       <br></br>  
            17:00 a 21:00        <br></br> 
            <br></br>
        </div>
        <div className="contHorarios">
        <br></br>
           <h5 className="contHorarios "> Direccion </h5>   
              Avenida san MArtin 22222    <br></br> <br></br>
              <h5 className="contHorarios">   Telefono  </h5>     
             +(54) 9 3548 444555    <br></br>  
             
        </div>
        </div>

      
        <div className="iconos"> 
          <button className="btn btn-lg iconos">
            <i class="bi bi-facebook iconos"></i>
          </button>
         <button className="btn btn-lg iconos">
            <i className="bi bi-instagram iconos"></i>
          </button>      
          <button className="btn btn-lg iconos">
            <i className="bi bi-envelope iconos"></i>
          </button>
          <button className="btn btn-lg iconos">
            <i className="bi bi-whatsapp iconos"></i>
          </button>
        </div> 
        <br></br>
     
    </section>
  );
};

export default Footer;
