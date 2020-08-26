import React from 'react';
import Button from '../Button';

import { Card , CardGroup, Col } from 'react-bootstrap'

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
    <Button version={props.version} />
  </Card>
  </CardGroup>
  </Col>
        )
}
export default ModeleCard;
