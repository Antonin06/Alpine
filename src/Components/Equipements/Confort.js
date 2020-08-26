import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Confort = () => {

  const confort = useSelector((state) => state.equipements.confort)

  const displayConfort = () => {
    return Object.keys(confort).map(key => (
      <>
    <Col sm={6}>
      <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={confort[key].picture}/>
    <Card.Body>
      <Card.Title>{confort[key].name} {confort[key].prix}€</Card.Title>
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
    {displayConfort()}
    </Row>
    </Container>
  )

}
export default Confort;
