import React from 'react';
import { Button, Card , CardGroup, Col } from 'react-bootstrap'
import { useDispatch } from "react-redux";


const SellerieCard = (props) => {


  const dispatch = useDispatch()
  const SelectModel = () => {

  var selle = document.querySelector(`.sellerie${props.sellerie.id}`)

  

  selle.classList.toggle('selected')

}
   

        return (
<Col sm={6}>
          <CardGroup className="groupcards">
  <Card onClick={ () => (SelectModel()) } className ={`card sellerie${props.sellerie.id}`}>
    <Card.Img variant="top" src={props.sellerie.picture}/>
    <Card.Body>
      <Card.Title>{props.sellerie.name} {props.sellerie.prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    {/*<Button variant="info" size="lg" className="btn">Choisir</Button>{' '}*/}
  </Card>
</CardGroup>
</Col>
        )
}
export default SellerieCard;
