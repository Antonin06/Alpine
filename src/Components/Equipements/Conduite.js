import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Conduite = () => {

  const conduite = useSelector((state) => state.equipements.conduite)

  const displayConduite = () => {
    return Object.keys(conduite).map(key => (
      <>
      <Col sm={6}>
      <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={conduite[key].picture}/>
    <Card.Body>
      <Card.Title>{conduite[key].name} {conduite[key].prix}€</Card.Title>
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
    {displayConduite()}
     </Row>
    </Container>
  )

}
export default Conduite;
