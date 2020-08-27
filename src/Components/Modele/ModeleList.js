import React from 'react';
import ModeleCard from './ModeleCard';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap'

const ModeleList = () => {

const version = useSelector((state) => state.version)
const sellerie = useSelector((state) => state.sellerie)

  const displayModele = () => {
    return Object.keys(version).map(key => (
      <ModeleCard version={version[key]} sellerie={sellerie[key]} />
    ));
  }

    return (
      <Container>
        <Row>
        {displayModele()}
      </Row>
      </Container>
    );
  }

export default ModeleList;
