import React from 'react';
import { Button, Card , CardGroup } from 'react-bootstrap'


const CouleurCard = (props) => {
        return (
<CardGroup style={{width: '20rem', margin: '20px'}} className="groupcards">
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
        )
}
export default CouleurCard;
