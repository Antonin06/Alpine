import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'



const Exterieur = () => {

  const exterieur = useSelector((state) => state.accessoires.exterieur)

  const displayExterieur = () => {
    return Object.keys(exterieur).map(key => (
      <>
      <Col lg sm={6}>
      <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={exterieur[key].picture}/>
    <Card.Body>
    <Card.Title>{exterieur[key].name} {exterieur[key].prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</Col>
      </>
    ));
  }

  return(
    <Container>
      <Row>
    {displayExterieur()}
    </Row>
    </Container>
  )

}
export default Exterieur;
