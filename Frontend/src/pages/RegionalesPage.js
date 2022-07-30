import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import Card from "react-bootstrap/Card";

// import Accordion from "react-bootstrap/Accordion";
// import Dropdown from 'react-bootstrap/Dropdown'


const Regionales =(props) => {
    return( 
    
<section>
     <div className="regionales ">
       <div className='carusel'>

       <Carousel variant="dark">
  <Carousel.Item>
    <img 
      className="d-block w-100 imagenRegionales"
      src="imagenes/contenido/regionales1.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" imagenRegionales "
      src='imagenes/contenido/regionales4.jpg'
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    
     <img
      className="d-block w-100 imagenRegionales"
      src="imagenes/contenido/regionales3.jpg"
      alt="Third slide"
    /> 
  </Carousel.Item>
</Carousel>

</div>
{/*         FIN PRIMER CARUSEL */}

{/*        INICIO SEGUNDO CARUSEL */}



<div className='carusel'>

<Carousel variant="dark">
<Carousel.Item>
<img 
className="d-block w-100 imagenRegionales"
src="imagenes/contenido/regionales4.jpg"
alt="First slide"
/>
<Carousel.Caption>
<h5>First slide label</h5>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales "
src='imagenes/Descargas1.jpg'
alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales "
src="imagenes/Descargas5.jpg"
alt="Third slide"
/>
</Carousel.Item>
</Carousel>

</div>



{/*         FIN SEGUNDO CARUSEL */}


{/* <div className=''>

<Carousel variant="dark">
<Carousel.Item>
<img 
className="d-block w-100 "
src="imagenes/Descargas2.jpg"
alt="First slide"
/>
<Carousel.Caption>
<h5>First slide label</h5>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales"
src='imagenes/Descargas1.jpg'
alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales"
src="imagenes/Descargas5.jpg"
alt="Third slide"
/>
</Carousel.Item>
</Carousel>

</div>
<div className='regionales'>

<Carousel variant="dark">
<Carousel.Item>
<img 
className="d-block w-100 imagenRegionales"
src="imagenes/Descargas2.jpg"
alt="First slide"
/>
<Carousel.Caption>
<h5>First slide label</h5>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales"
src='imagenes/Descargas1.jpg'
alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales"
src="imagenes/Descargas5.jpg"
alt="Third slide"
/>
</Carousel.Item>
</Carousel>

</div>
<div className='imagenRegionales'>

<Carousel variant="dark">
<Carousel.Item>
<img 
className="d-block w-100 imagenRegionales"
src="imagenes/Descargas2.jpg"
alt="First slide"
/>
<Carousel.Caption>
<h5>First slide label</h5>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales"
src='imagenes/Descargas1.jpg'
alt="Second slide"
/>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 imagenRegionales"
src="imagenes/Descargas5.jpg"
alt="Third slide"
/>
</Carousel.Item>
</Carousel>

</div> */}


</div>
</section>

    );
}

export default Regionales;




