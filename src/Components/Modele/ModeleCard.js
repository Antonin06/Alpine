import React, { version } from 'react';
import Button from '../Button';
import { useDispatch } from "react-redux";


import { Card , CardGroup, Col } from 'react-bootstrap'

const ModeleCard = (props) => {

  const dispatch = useDispatch()
  const SelectModel = () => {
    // priceCar()
    dispatch({ type: 'MODELE' , payload : props.version.name});

    var modele1 = document.querySelector(`.modele${props.version.id = 1}`)
    var modele2 = document.querySelector(`.modele${props.version.id = 2}`)
    modele1.classList.toggle('selected')
    modele2.classList.toggle('selected')
    if (modele1.classList.contains('selected')) {
      modele2.classList.remove('selected')
    }
    if (modele2.classList.contains('selected')) {
      modele1.classList.remove('selected')
    }
  }

  return (
  <Col>
   <CardGroup className="groupcards">
    <Card onClick={ () => (SelectModel()) } className ={`card modele${props.version.id}`} >
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
