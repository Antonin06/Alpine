import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'
import { useDispatch } from "react-redux";



const JantesCard = (props) => {

  const dispatch = useDispatch()
  const SelectModel = () => {

  var jantes1 = document.querySelector(`.jantes${props.jantes.id = 1}`)
  var jantes2 = document.querySelector(`.jantes${props.jantes.id = 2}`)
  // var jantes3 = document.querySelector(`.jantes${props.jantes.id = 3}`)
  jantes1.classList.toggle('selected')
  jantes2.classList.toggle('selected')
  // jantes3.classList.toggle('selected')

  if (jantes1.classList.contains('selected')) {
    jantes2.classList.remove('selected')

  }
  if (jantes2.classList.contains('selected')) {
    jantes1.classList.remove('selected')
  }
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
