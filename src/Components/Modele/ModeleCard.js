import React from 'react';
import Button from '../Button';

import { Card , CardGroup } from 'react-bootstrap';

const ModeleCard = (props) => {
        return (

 <CardGroup style={{width: '25rem', margin: '20px'}} key={props.version.id} id={`version${props.version.id}`} className="groupcards">
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
        )
}
export default ModeleCard;
