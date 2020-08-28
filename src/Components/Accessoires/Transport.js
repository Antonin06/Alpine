import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'



const Transport = () => {

  const transport = useSelector((state) => state.accessoires.transport)

  const displayTransport = () => {
    return Object.keys(transport).map(key => (
      <>
  <Col sm={6}>
  <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={transport[key].picture}/>
    <Card.Body>
    <Card.Title>{transport[key].name} {transport[key].prix}€</Card.Title>
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
    <>
    <Container>
      <Row>
      </Row>
      </Container>
      <Container>
        <Row>
     {displayTransport()}
    </Row>
    </Container>
    </>
  )

}
export default Transport;
