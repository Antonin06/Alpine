import React, { version } from 'react';
import Button from '../Button';
import { useDispatch } from "react-redux";


import { Card , CardGroup, Col } from 'react-bootstrap'

const ModeleCard = (props) => {

  const dispatch = useDispatch()
  const SelectModel = () => {
    // priceCar()
    dispatch({ type: 'MODELE' , payload : props.version.name});

    var card1 = document.querySelector(`.card${props.version.id = 1}`)
    var card2 = document.querySelector(`.card${props.version.id = 2}`)
    card1.classList.toggle('selected')
    card2.classList.toggle('selected')
    if (card1.classList.contains('selected')) {
      card2.classList.remove('selected')
    }
    if (card2.classList.contains('selected')) {
      card1.classList.remove('selected')
    }
  }

  return (
  <Col>
   <CardGroup className="groupcards">
    <Card onClick={ () => (SelectModel()) } className ={`card card${props.version.id}`} >
      <Card.Img variant="top" src={props.version.initialPicture}/>
      <Card.Body>
        <Card.Title>Alpine {props.version.name} {props.version.prix}€</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      {/*<Button version={props.version} />*/}
    </Card>
    </CardGroup>
    </Col>
  )
}
export default ModeleCard;
