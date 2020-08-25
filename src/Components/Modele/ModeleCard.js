import React from 'react';

import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'

const ModeleCard = (props) => {
        return (

 <CardGroup style={{width: '25rem', margin: '20px'}}  className="groupcards">
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
        )
}
export default ModeleCard;
