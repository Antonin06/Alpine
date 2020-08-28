import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Interieur = () => {

  const interieur = useSelector((state) => state.equipements.interieur)

  const displayInterieur = () => {
    return Object.keys(interieur).map(key => (
      <>
      <Col sm={6}>
      <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={interieur[key].picture}/>
    <Card.Body>
      <Card.Title>{interieur[key].name} {interieur[key].prix}€</Card.Title>
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
    {displayInterieur()}
    </Row>
    </Container>
  )

}
export default Interieur;
