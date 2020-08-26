import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Exterieur = () => {

  const exterieur = useSelector((state) => state.equipements.exterieur)

  const displayExterieur = () => {
    return Object.keys(exterieur).map(key => (
      <>
      <CardGroup style={{width: "20rem", margin: "20px"}} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={exterieur[key].picture}/>
    <Card.Body>
      <Card.Title>{exterieur[key].name} {exterieur[key].prix}€</Card.Title>
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
