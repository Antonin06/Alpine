import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'


const JantesCard = (props) => {
        return (
<Col lg sm={6}>
  <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={props.jantes.picture}/>
    <Card.Body>
      <Card.Title>Jantes {props.jantes.name} {props.jantes.prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</Col>
        )
}
export default JantesCard;
