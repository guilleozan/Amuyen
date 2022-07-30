import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './../styles/home.css';
import {NavLink} from 'react-router-dom';

const HomePage =(props) => {
    return( 
    <main>
 
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 imagen1" 
      src ="imagenes/Descargas3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>

      <a className='textoCarusel' href='/regionales'> Mas Informacion </a>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 imagen1"
      src="imagenes/contenido/regionales1.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <a className='textoCarusel' href='/indumentaria'> Mas Informacion </a>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imagen1"
      src="imagenes/contenido/foto.JPG"
      alt="Third slide"
    />
    <Carousel.Caption>
    <a className='textoCarusel' href='/regaleria'> Mas Informacion </a>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <section>
      <div className="texto-inicio">
                <div className="texto-nosotros">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla, nemo at porro ducimus optio delectus eos perferendis magnam ullam voluptate quos sed commodi molestias sapiente aperiam a qui similique!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ipsam reiciendis corrupti voluptatibus quas sapiente cupiditate consequuntur ullam illo culpa in sint molestias natus quisquam, deserunt ad earum impedit. Odio.
                    </p>
                </div>
                <div className="texto-nosotros">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla, nemo at porro ducimus optio delectus eos perferendis magnam ullam voluptate quos sed commodi molestias sapiente aperiam a qui similique!</p>
                </div>
            </div>   
  </section>


     </main>
		
    );
}

export default HomePage;
