import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Configurator from './Configurator';
import { Link } from "react-router-dom";


const Landing = () => (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Configurator" component={Configurator} />
        </Switch>
    </Router>
    </>
  );


const Home = () => (
  <Jumbotron className="bg-danger">
    <Container>
      <h1 className="text-center">Home</h1>
      <p className="text-center">First try Bootstrap w/ React</p>
      <Link className="" to="/Configurator">Configurez votre Alpine!</Link>
    </Container>
  </Jumbotron>
);

export default Landing;
