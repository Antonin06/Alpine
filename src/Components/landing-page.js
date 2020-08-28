import React from 'react';
import logo from '../logo.png';
import img from '../images/A110_PURE_4.jpg';
import img2 from '../images/A110_LEGENDE_1.jpg';
import img3 from '../images/A110_PE_7.jpg';
import '../App.css';
import { Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Configurator from './Configurator';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'

const Landing = () => (
      <>
        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Configurator" exact component={Configurator} />
        </Switch>
        </Router>
        </>
)

    const Home = () => (
<>
            <img src={logo} className="App-logo" alt="logo" />
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Customisez votre véhicule</h2>
      <p>Votre voiture sur mesure, en deux clics !</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Avec ou sans options, vous faites toujours le bon choix</h2>
      <p>Nos produits sont certifiés Alpine et répondent parfaitement à vos besoins</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Le futur de demain, c'est maintenant</h2>
      <p>Notre gamme de véhicules allie qualité, modernité, et sécurité</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     <Button variant="info" size="lg" className="bouton"><Link className="link" to="/Configurator">Commencer</Link></Button>{' '}
</>

  );


export default Landing;
