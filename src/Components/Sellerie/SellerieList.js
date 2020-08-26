import React from 'react';
import SellerieCard from './SellerieCard';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap'


const SellerieList = () => {

const sellerie = useSelector((state) => state.sellerie)

  const displaySellerie = () => {
    return Object.keys(sellerie).map(key => (
      <SellerieCard sellerie={sellerie[key]} />
    ));
  }

    return (
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        {displaySellerie()}
        <Col></Col>
        <Col></Col>
        </Row>
        </Container>
    );
  }

export default SellerieList;
