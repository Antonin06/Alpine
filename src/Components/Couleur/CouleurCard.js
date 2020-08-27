import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';


const CouleurCard = (props) => {

  const dispatch = useDispatch()
  const SelectModel = () => {

  var couleur1 = document.querySelector(`.couleur${props.couleurs.id = 1}`)
  var couleur2 = document.querySelector(`.couleur${props.couleurs.id = 2}`)
  var couleur3 = document.querySelector(`.couleur${props.couleurs.id = 3}`)
  couleur1.classList.toggle('selected')
  couleur2.classList.toggle('selected')
  couleur3.classList.toggle('selected')
  if (couleur1.classList.contains('selected')) {
    couleur2.classList.remove('selected')
    couleur3.classList.remove('selected')
  }
  if (couleur2.classList.contains('selected')) {
    couleur3.classList.remove('selected')
    couleur1.classList.remove('selected')
  }
  if (couleur3.classList.contains('selected')) {
    couleur2.classList.remove('selected')
    couleur1.classList.remove('selected')
  }
}
        return (
<Col lg sm={6}>
<CardGroup className="groupcards">
  <Card onClick={ () => (SelectModel()) } className ={`card couleur${props.couleurs.id}`}>
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
