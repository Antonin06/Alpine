import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Design = () => {

  const designs = useSelector((state) => state.equipements.design)

  const displayDesign = () => {
    return Object.keys(designs).map(key => (
      <>
      <Col>
      <CardGroup  key={key} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={designs[key].picture}/>
    <Card.Body>
      <Card.Title>{designs[key].name} {designs[key].prix}€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button key={key} variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>
</Col>
</>

    ));
  }

  return(
    <Container>
      <Row>
    {displayDesign()}
    </Row>
    </Container>
  )

}
export default Design;
