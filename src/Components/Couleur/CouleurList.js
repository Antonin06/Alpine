import React from 'react';
import CouleurCard from './CouleurCard';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const CouleurList = () => {

const couleur = useSelector((state) => state.couleurs)
console.log(couleur);

  const displayCouleur = () => {
    return Object.keys(couleur).map(key => (
      <CouleurCard couleurs={couleur[key]} />
    ));
  }

    return (
      <Container>
        <Row>
          <Col></Col>
        {displayCouleur()}
      <Col></Col>
      <Col></Col>
      </Row>
      </Container>
    );
  }

export default CouleurList;
