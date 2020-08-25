import React from 'react';
import ModeleCard from './ModeleCard';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'



const ModeleList = () => {

const version = useSelector((state) => state.version)
console.log(version);

  const displayModele = () => {
    return Object.keys(version).map(key => (
      <ModeleCard version={version[key]} />
    ));
  }

    return (
      <Container>
        <Row>
          <Col></Col>
        {displayModele()}
          <Col></Col>
        </Row>
      </Container>
    );
  }

export default ModeleList;
