import React from 'react';
import '../custom.css';
import { Navbar, Jumbotron, Container, Button } from 'react-bootstrap'
import logoBlue from '../logo.png'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import version1 from '../images/ALPINE-LEGENDE-1.png'
import version2 from '../images/ALPINE-PURE-1.png'
import blanc from '../images/blanc.jpg'
import bleu from '../images/bleu.jpg'
import noir from '../images/noir.jpg'
import jantestandard from '../images/jante-standard.jpg'
import janteserac from '../images/jante-serac.jpg'
import jantelegende from '../images/jante-legende.jpg'
import cuirbrun from '../images/cuir-brun.jpg'
import cuirnoir from '../images/cuir-noir.jpg'
import cuirnoirdinamica from '../images/cuir-noir_dinamica.jpg'
import cuirnoirperfore from '../images/cuir-noir_perfore.jpg'






const Configurator = () => (
<>
  <Navbar bg="white" className="d-flex justify-content-center">
      <Navbar.Brand href="#home">
        <img
          src={logoBlue}
          className="mt-3 mb-3 App-logo"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Navbar>

    <Jumbotron fluid className="p-4 mb-0 sticky-top bg-black text-white">
  <Container className="d-inline-flex">
    <p className="mb-0" id="prix">
      Alpine A110
    </p>
    <p className="mb-0 align-right" id="prix">
      €€€€€
    </p>
  </Container>
</Jumbotron>

<h1>1/ Choisissez votre modèle :</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={version1}/>
    <Card.Body>
      <Card.Title>Alpine LEGENDE 58 500€</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={version2} />
    <Card.Body>
      <Card.Title>Alpine PURE 54 700€</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1>2/ Choisissez vos Couleurs :</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={blanc}/>
    <Card.Body>
      <Card.Title>Blanc 0€</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={bleu} />
    <Card.Body>
      <Card.Title>Bleu 1800€</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={noir} />
    <Card.Body>
      <Card.Title>Noir 840€</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1>3/ Choisissez vos Jantes</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={jantelegende}/>
    <Card.Body>
      <Card.Title>Légende 0€ (Seulement dispo avec modèle Legende)</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={jantestandard} />
    <Card.Body>
      <Card.Title>Standard 0€</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={janteserac} />
    <Card.Body>
      <Card.Title>Serac 1000€</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1>4/ Choisissez votre scellerie :</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={cuirnoirdinamica}/>
    <Card.Body>
      <Card.Title>Sièges baquets en cuir noir & Dinamica 0€ (dispo version pure)</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={cuirnoirperfore} />
    <Card.Body>
      <Card.Title>Siège confort en cuir noir perforé 800€ (dispo version pure)</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={cuirnoir} />
    <Card.Body>
      <Card.Title>Sièges confort en cuir Noir 0€ (dispo version légende)</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card>
    <Card.Img variant="top" src={cuirbrun} />
    <Card.Body>
      <Card.Title>Sièges confort en cuir Brun 800€ (dispo version légende)</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1>Choisissez vos équipements</h1>
</>
)

export default Configurator;
