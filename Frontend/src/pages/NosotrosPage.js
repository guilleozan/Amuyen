
import React from "react";
const Nosotros = (props) => {
  return (
    <section>
      <div className=" contenedor contNos">
        <div className="nosotros">
          <h2 class="textoNosotros">
            <p> Nosotros </p>
            <p>
              {" "}
              Misión: Creemos que sos unico valorandote , cuidando tu identidad
              con productos acordes a vos.
            </p>
            <p>
              {" "}
              Valores: Transparencia: ser francos y sinceros con nuestros
              clientes en todo momento, priorizando la satisfacción total.{" "}
            </p>
            <p>
              {" "}
              Lealtad: Reconocer y valorar a las personas, apreciando siempre su
              vinculación con la marca.{" "}
            </p>
            <p>
              {" "}
              Compromiso: nos comprometemos con la palabra dada y la obligación
              contraída para lograr la satisfacción total del cliente.{" "}
            </p>
            <p>
              {" "}
              Servicio: nos esforzamos en comprender y escuchar a nuestros
              clientes para brindarle siempre experiencias y productos acordes a
              sus expectativas.{" "}
            </p>
          </h2>
        </div>
         <div id= "nosotrosVideo">
                  <video className="video"  loop autoPlay preloaded muted> <source src="imagenes/foto4.mp4" type="video/mp4"  />
                    </video>
    
    
            </div> 
      </div>
    </section>
  );
};

export default Nosotros;
