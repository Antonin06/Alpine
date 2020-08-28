import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'
import { useDispatch } from "react-redux";



const JantesCard = (props) => {

  const dispatch = useDispatch()
  const SelectModel = () => {

  var jantes = document.querySelector(`.jantes${props.jantes.id}`)
  jantes.classList.toggle('selected')
}

        return (
<Col lg sm={6}>
  <CardGroup className="groupcards">
  <Card onClick={ () => (SelectModel()) } className ={`card jantes${props.jantes.id}`}>
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
