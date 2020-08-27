import React from 'react';
import JantesCard from './JantesCard';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap'


const JantesList = () => {

const jantes = useSelector((state) => state.jantes)
const model = useSelector((state) => state.modele)

  const displayJantes = () => {
    return Object.keys(jantes).map(key => {

      if (jantes[key].model === model ) {
        return (<JantesCard key={key} jantes={jantes[key]} /> )
      }
    });
  }

    return (
      <Container>
        <Row>
        {displayJantes()}
        </Row>
        </Container>
    );
  }

export default JantesList;
