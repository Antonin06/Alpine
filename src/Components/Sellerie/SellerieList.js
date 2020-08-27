import React from 'react';
import SellerieCard from './SellerieCard';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap'


const SellerieList = () => {

const sellerie = useSelector((state) => state.sellerie)
const selectSellerie = useSelector((state) => state.selectSellerie)

  const displaySellerie = () => {
    return Object.keys(sellerie).map(key => {

      if (sellerie[key].model === selectSellerie ) {
      return (<SellerieCard key={key} sellerie={sellerie[key]} />)
    }
  });
  }

    return (
      <Container>
        <Row>
        {displaySellerie()}
        </Row>
        </Container>
    );
  }

export default SellerieList;
