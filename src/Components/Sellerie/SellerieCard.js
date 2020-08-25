import React from 'react';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'

const SellerieCard = (props) => {
        return (
          <CardGroup style={{width:"15rem", margin: "10px"}} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={props.sellerie.picture}/>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      {props.sellerie.name} {props.sellerie.prix}€
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>
        )
}
export default SellerieCard;
