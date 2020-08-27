import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'

const SellerieCard = (props) => {
        return (
<Col sm={6}>
          <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={props.sellerie.picture}/>
    <Card.Body>
      <Card.Title>{props.sellerie.name} {props.sellerie.prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    {/*<Button variant="info" size="lg" className="btn">Choisir</Button>{' '}*/}
  </Card>
</CardGroup>
</Col>
        )
}
export default SellerieCard;
