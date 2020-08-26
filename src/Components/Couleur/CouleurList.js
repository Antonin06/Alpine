import React from 'react';
import CouleurCard from './CouleurCard';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap'


const CouleurList = () => {

const couleur = useSelector((state) => state.couleurs)

  const displayCouleur = () => {
    return Object.keys(couleur).map(key => (
      <CouleurCard couleurs={couleur[key]} />
    ));
  }

    return (
      <Container>
        <Row>
        {displayCouleur()}
        </Row>
      </Container>
    );
  }

export default CouleurList;
