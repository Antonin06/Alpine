import React from 'react';
import '../custom.css';
import { Navbar, Breadcrumb, Jumbotron, Container, Image, Form, CardDeck, Card } from 'react-bootstrap'
import logoBlue from '../logo.png'
import selectionPure from '../pure.png'




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
    <p className="mb-0">
      Alpine A110
    </p>
    <p className="mb-0">
      €€€€€
    </p>
  </Container>
</Jumbotron>

// <Image src={selectionPure} fluid  />
//
// <Form>
// <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Pure" />
//     <Form.Check type="checkbox" label="Legend" />
//   </Form.Group>
// </Form>

<Breadcrumb className="">
  <Breadcrumb.Item href="#">Version</Breadcrumb.Item>
  <Breadcrumb.Item href="">Couleurs</Breadcrumb.Item>
  <Breadcrumb.Item >Jantes</Breadcrumb.Item>
  <Breadcrumb.Item >Sellerie</Breadcrumb.Item>
  <Breadcrumb.Item >Equipements</Breadcrumb.Item>
  <Breadcrumb.Item >Accessoires</Breadcrumb.Item>
</Breadcrumb>

</>
)

export default Configurator;
