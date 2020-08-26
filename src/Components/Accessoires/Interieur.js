import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'



const Interieur = () => {

  const interieur = useSelector((state) => state.accessoires.interieur)

  const displayInterieur = () => {
    return Object.keys(interieur).map(key => (
      <>
      <CardGroup style={{width: "20rem", margin: "20px"}} className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={interieur[key].picture}/>
    <Card.Body>
      <Card.Title>{interieur[key].name} {interieur[key].prix}€</Card.Title>
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
    {displayInterieur()}
    <Col></Col>
    </Row>
    </Container>
  )

}
export default Interieur;
