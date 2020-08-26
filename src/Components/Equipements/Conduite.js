import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Conduite = () => {

  const conduite = useSelector((state) => state.equipements.conduite)

  const displayConduite = () => {
    return Object.keys(conduite).map(key => (
      <>
      <CardGroup style={{width: "15rem", margin: "15px"}} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={conduite[key].picture}/>
    <Card.Body>
      <Card.Title>{conduite[key].name} {conduite[key].prix}€</Card.Title>
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
    {displayConduite()}
    <Col></Col>
    <Col></Col>
    </Row>
    </Container>
  )

}
export default Conduite;
