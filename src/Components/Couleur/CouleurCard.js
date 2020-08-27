import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


const CouleurCard = (props) => {


        return (
<Col lg sm={6}>
<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={props.couleurs.picture}/>
    <Card.Body>
      <Card.Title>{props.couleurs.name} {props.couleurs.prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>
</Col>
        )
}
export default CouleurCard;
