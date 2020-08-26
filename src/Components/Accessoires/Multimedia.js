import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Multimedia = () => {

  const multimedia = useSelector((state) => state.accessoires.multimedia)

  const displayMultimedia = () => {
    return Object.keys(multimedia).map(key => (
      <>
      <CardGroup style={{width: "20rem", margin: "20px"}} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top"/>
    <Card.Body>
      <Card.Title>{multimedia[key].name} {multimedia[key].prix}€</Card.Title>
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
    {displayMultimedia()}
    <Col></Col>
    </Row>
    </Container>
  )

}
export default Multimedia;
