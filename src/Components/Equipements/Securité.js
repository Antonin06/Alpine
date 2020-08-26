import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Securité = () => {

  const securité = useSelector((state) => state.equipements.securité)

  const displaySecurité = () => {
    return Object.keys(securité).map(key => (
      <>
      <CardGroup style={{width: "20rem", margin: "20px"}} className="groupcards">
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
</>
    ));
  }

  return(
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
   {displaySecurité()}
   <Col></Col>
    </Row>
    </Container>
  )

}
export default Securité;
