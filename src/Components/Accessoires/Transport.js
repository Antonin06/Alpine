import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'



const Transport = () => {

  const transport = useSelector((state) => state.accessoires.transport)

  const displayTransport = () => {
    return Object.keys(transport).map(key => (
      <>
  <CardGroup style={{width: "20rem", margin: "20px"}} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={transport[key].picture}/>
    <Card.Body>
    <Card.Title>{transport[key].name} {transport[key].prix}€</Card.Title>
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
    <>
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      </Container>
      <Container>
        <Row>
     {displayTransport()}
     <Col></Col>
     <Col></Col>
     <Col></Col>
    </Row>
    </Container>
    </>
  )

}
export default Transport;
