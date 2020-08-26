import React from 'react';

import { Button, Card , CardGroup, Col } from 'react-bootstrap'

const ModeleCard = (props) => {
        return (
<Col>
 <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={props.version.initialPicture}/>
    <Card.Body>
      <Card.Title>Alpine {props.version.name} {props.version.prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  </CardGroup>
  </Col>
        )
}
export default ModeleCard;
