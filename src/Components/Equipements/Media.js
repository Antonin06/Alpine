import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card , CardGroup, Container, Col, Row } from 'react-bootstrap'


const Media = () => {

  const medias = useSelector((state) => state.equipements.media)

  const displayMedia = () => {
    return Object.keys(medias).map(key => (
      <>
      <Col sm={6}>
      <CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={medias[key].picture}/>
    <Card.Body>
      <Card.Title>{medias[key].name} {medias[key].prix}€</Card.Title>
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
{displayMedia()}
    </Row>
    </Container>
  )

}
export default Media;
