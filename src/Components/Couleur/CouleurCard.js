import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


const CouleurCard = (props) => {

  const dispatch = useDispatch()
  const SelectCouleur = () => {

    dispatch({ type: 'MODELE' , payload : props.couleurs.name});

  var couleur = document.querySelector(`.couleur${props.couleurs.id}`)
  couleur.classList.toggle('selected')


}
        return (
<Col lg sm={6}>
<CardGroup className="groupcards">
  <Card onClick={ () => (SelectCouleur()) } className ={`card couleur${props.couleurs.id}`}>
    <Card.Img variant="top" src={props.couleurs.picture}/>
    <Card.Body>
      <Card.Title>{props.couleurs.name} {props.couleurs.prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</Col>
        )
}
export default CouleurCard;
