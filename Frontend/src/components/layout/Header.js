import '../../styles/header.css'

import React from 'react';
const Header =(props) => {
    return( 
        <header>
		<div class="marca">
			<a href=" "> <img  className="imagenLogo" src="imagenes/logo.png" alt="" height="200px" width="300px"/></a>
		</div>
	</header>
    );
}

export default Header;