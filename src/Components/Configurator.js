import React from 'react';
import '../custom.css';
import { Navbar, Jumbotron, Container, Button } from 'react-bootstrap'
import logoBlue from '../logo.png'
// ici les import des images



//Ici les imports des Components
import ModeleList from './Modele/ModeleList'; //------------------------ <ModeleList/>
import CouleurList from './Couleur/CouleurList'; //--------------------- <CouleurList/>
import JantesList from './Jantes/JantesList'; //------------------------ <JantesList/>
import SellerieList from './Sellerie/SellerieList'; //------------------ <SellerieList/>
import EquipementsList from './Equipements/EquipementsList'; //--------- <EquipementsList/>
import AccessoiresList from './Accessoires/AccessoiresList'; //--------- <AccessoiresList/>
import Prix from './Prix';


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
      <Prix/>
    </p>
  </Container>
</Jumbotron>


<h1 className="title">1/ Choisissez votre modèle :</h1>
< br/>
<ModeleList/>
< br/>

<h1 className="title">2/ Choisissez vos Couleurs :</h1>
< br/>
<CouleurList/>
< br/>

<h1 className="title">3/ Choisissez vos Jantes</h1>
< br/>
<JantesList/>
< br/>

<h1 className="title">4/ Choisissez votre sellerie :</h1>
< br/>
<SellerieList/>
< br/>

<h1 className="title">5/ Choisissez vos équipements</h1>
< br/>

<EquipementsList/>
< br/>

<h1 className="title">6/ Accessoires</h1>
< br/>


<AccessoiresList/>
< br/>

<Button variant="info" size="lg" className="nextbtn">Valider ma customisation</Button>{' '}
<i className="fa fa-4x fa-check-circle"></i>
</>
)

export default Configurator;
