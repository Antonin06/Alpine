import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'



const Garage = () => {

  const garage = useSelector((state) => state.accessoires.garage)

  const displayGarage = () => {
    return Object.keys(garage).map(key => (
      <>
    <CardGroup style={{width: "20rem", margin: "20px"}} className="groupcards">
    <Card className ="card">
    <Card.Img variant="top" src={garage[key].picture}/>
    <Card.Body>
    <Card.Title>{garage[key].name} {garage[key].prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>
</>
    ));
  }

  return(
    <Container>
      <Row>
        <Col></Col>
    {displayGarage()}
    <Col></Col>
    </Row>
    </Container>
  )

}
export default Garage;
