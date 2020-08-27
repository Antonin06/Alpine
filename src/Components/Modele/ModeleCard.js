import React from 'react';
import Button from '../Button';
import { useDispatch } from "react-redux";


import { Card , CardGroup, Col } from 'react-bootstrap'

const ModeleCard = (props) => {

  const dispatch = useDispatch()

  const SelectModel = () => {
    // priceCar()
    dispatch({ type: 'MODEL' , payload : props.version.name});


    dispatch({ type: 'TOTAL'});

    var card = document.querySelector(`.card${props.version.id}`)
    
    card.classList.add('toto')
    console.log(card);
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
