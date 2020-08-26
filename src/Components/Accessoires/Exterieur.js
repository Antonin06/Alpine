import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'



const Exterieur = () => {

  const exterieur = useSelector((state) => state.accessoires.exterieur)

  const displayExterieur = () => {
    return Object.keys(exterieur).map(key => (
      <>
      <CardGroup style={{width: "20rem", margin: "20px"}} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top"/>
    <Card.Body>
      <Card.Title>Cabochons Alpine-métalisés 24€</Card.Title>
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
        <Col></Col>
    {displayExterieur()}
    <Col></Col>
    </Row>
    </Container>
  )

}
export default Exterieur;
