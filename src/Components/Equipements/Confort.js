import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Confort = () => {

  const confort = useSelector((state) => state.equipements.confort)

  const displayConfort = () => {
    return Object.keys(confort).map(key => (
      <>
      <CardGroup style={{width: "15rem", margin: "15px"}} className="groupcards">
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
</>
    ));
  }

  return(
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
    {displayConfort()}
    <Col></Col>
    <Col></Col>
    </Row>
    </Container>
  )

}
export default Confort;
