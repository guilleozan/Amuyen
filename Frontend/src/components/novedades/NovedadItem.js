import React from 'react';
import Card from "react-bootstrap/Card";

const NovedadItem = (props) => {
    const {title, subtitle ,imagen ,body } = props;

    return(
     <section className='sectionNovedades'>
        <div className='tituloNovedades'>
            <li>{title}</li>
            <li> {subtitle}</li>
            <li   dangerouslySetInnerHTML= {{ __html:body }} hr/>
        </div>
    
        
         <div className='imagenCont'><img className='imagen' src= {imagen} /> </div>
   
        {/* <div className='novedades'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
            <Card.Title className='cardTitle'>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text>
            <div dangerouslySetInnerHTML= {{ __html:body }} />
            <hr />
            </Card.Text>
            
            </Card.Body>
            </Card>
        </div> */}
        
        </section> 
      
    );
}

export default NovedadItem;


// import { useState,useEffect } from "react";
// import axios from "axios";
// import NovedadItem from '/components/novedades/NovedadItem';