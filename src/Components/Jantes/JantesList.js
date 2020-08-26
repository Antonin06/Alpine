import React from 'react';
import JantesCard from './JantesCard';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap'


const JantesList = () => {

const jantes = useSelector((state) => state.jantes)

  const displayJantes = () => {
    return Object.keys(jantes).map(key => (
      <JantesCard jantes={jantes[key]} />
    ));
  }

    return (
      <Container>
        <Row>
        <Col></Col>
        {displayJantes()}
        <Col></Col>
        <Col></Col>
        </Row>
        </Container>
    );
  }

export default JantesList;
