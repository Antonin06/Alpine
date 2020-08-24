import React from 'react';
import logo from '../logo-white.png';
import img from '../A110_PURE_4.jpg';
import img2 from '../A110_LEGENDE_1.jpg';
import img3 from '../A110_PE_7.jpg';
import '../App.css';
import { Jumbotron, Container, Button } from 'react-bootstrap';
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
      <Container>
            <img src={logo} className="App-logo" alt="logo" />
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Link className="" to="/Configurator">Configurez votre Alpine!</Link>
      </Container>
  );


export default Landing;