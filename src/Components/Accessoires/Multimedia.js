import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Multimedia = () => {

  const multimedia = useSelector((state) => state.accessoires.multimedia)

  const displayMultimedia = () => {
    return Object.keys(multimedia).map(key => (
      <>
      <Col>
      <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={multimedia[key].picture}/>
    <Card.Body>
      <Card.Title>{multimedia[key].name} {multimedia[key].prix}€</Card.Title>
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
    {displayMultimedia()}
 </Row>
    </Container>
  )

}
export default Multimedia;
