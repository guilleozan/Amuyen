import '../../styles/nav.css'
import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
 import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Nav =(props) => {
    return( 
        <nav className="logo-nav-contiene botonera">
			
				<ul> 
					<li><NavLink activeClassName='activo' exact to= "/"> {/*<img  className= 'imagenLogo2' src='imagenes/logo.png' /> */}<i class="bi bi-house-fill tamano"></i> </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/nosotros"> Nosotros </NavLink> </li>				
					<li> 
						<NavDropdown  title="Productos" id="collasible-nav-dropdown">
							<NavDropdown.Item href='/indumentaria'>Indumentaria </NavDropdown.Item>
							<NavDropdown.Item href='/regionales'>Regionales </NavDropdown.Item>		
							<NavDropdown.Item href="/regaleria">Regaleria</NavDropdown.Item>						
						</NavDropdown>
					</li>
					<li><NavLink activeClassName='activo' exact to= "/novedades"> Novedades </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/contacto"> Contacto </NavLink> </li>
					 
					
					
				</ul>
				
			
		</nav>
    );
}

export default Nav;

// Por las dudas quiera poner la pagina de producto esta seria la ruta

{/* <li><NavLink activeClassName='activo' exact to= "/productos"> Productos </NavLink>	</li> */}