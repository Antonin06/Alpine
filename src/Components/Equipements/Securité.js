import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Securité = () => {

  const securité = useSelector((state) => state.equipements.securité)

  const displaySecurité = () => {
    return Object.keys(securité).map(key => (
      <>
    <Col lg sm={6}>
      <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={securité[key].picture}/>
    <Card.Body>
      <Card.Title>{securité[key].name} {securité[key].prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>
</Col>
</>
    ));
  }

  return(
    <Container>
      <Row>
   {displaySecurité()}
    </Row>
    </Container>
  )

}
export default Securité;
