// import logo from './logo.svg';
import './App.css';
import './styles/nav.css'
import WebFont from 'webfontloader'; // Fuentes de google
import 'bootstrap/dist/css/bootstrap.min.css'; //Boostrap
import 'bootstrap-icons/font/bootstrap-icons.css';


// import axios from 'axios';


import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";

import { Accordion, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';


import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import IndumentariaPage from './pages/IndumentariaPage';
import RegionalesPage from './pages/RegionalesPage';
import ContactoPage from './pages/ContactoPage';
import RegaleriaPage from './pages/RegaleriaPage';




function App() {
  return (
    
    <div className="App">
      <Router>
         <Header/>
         <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/nosotros" exact component={NosotrosPage} />
            <Route path="/regionales" exact component={RegionalesPage} />
            <Route path="/novedades" exact component={NovedadesPage} />
            <Route path="/indumentaria" exact component={IndumentariaPage} /> 
            <Route path="/contacto" exact component={ContactoPage} /> 
            <Route path="/regaleria" exact component={RegaleriaPage} /> 
             
          </Switch>
        <Footer/>
      </Router>
   </div>
  );
}
WebFont.load({//fuentes de google
  google: {
    families: [ 'Smooch','Alegreya Sans SC', 'Gloria Hallelujah','Staatliches','cursive']
  }
});

export default App;

