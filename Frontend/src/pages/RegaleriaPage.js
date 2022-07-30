import './../App.css'
import React from 'react';


const RegaleriaPage =(props) => {
    return( 
       <section className='contenedorRegaleria'>
        
       <div className='container1'>
            <div className='imagenesRegaleria'>
            <img className=" cuadrado"
                 src="imagenes/contenido/regalerias1.jpg"
                 alt="Foto"
            />
            <img className=" cuadrado"
                 src="imagenes/contenido/regalerias2.jpg"
                 alt="Foto"
            />
            <img className=" cuadrado1"
                 src="imagenes/contenido/regalerias3.jpg"
                 alt="Foto"
            />
            <img className=" cuadrado1"
                 src="imagenes/contenido/regalerias4.jpg"
                 alt="Foto"
            />
            <img className=" cuadrado"
                 src="imagenes/contenido/regalerias5.jpg"
                 alt="Foto"
            />
            <img className=" cuadrado"
                 src="imagenes/contenido/regalerias6.jpg"
                 alt="Foto"
            />
            </div>
            
            <div className='TextoRegaleria'>
                
                <p>Quickly get a project started with any of 
                    our examples ranging from using parts of the framework
                    to custom components and layouts.
                 </p>
                 <p>Quickly get a project started with any of 
                    our examples ranging from using parts of the framework
                    to custom components and layouts.
                 </p>

            </div>
            
        </div> 
        </section>
		
    );
}

export default RegaleriaPage;
