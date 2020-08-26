import React from 'react';
import '../custom.css';
import { Navbar, Jumbotron, Container, Button } from 'react-bootstrap'
import logoBlue from '../logo.png'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
// ici les import des images
import packheritage from '../images/pack-heritage.jpg'
import reposepied from '../images/repose-pied-alu.jpg'
import alpinemetrics from '../images/alpine-metrics.jpg'
import audiofocal from '../images/audio-focal.jpg'
import audiopremium from '../images/audio-premium.jpg'
import audiostandard from '../images/audio-standard.jpg'
import packrangement from '../images/pack-rangement.jpg'
import regulvitesse from '../images/regul-limit-vitesse.jpg'
import retroext from '../images/retro-ext-chaffant.jpg'
import retroint from '../images/retro-int-electrochrome.jpg'
import stationnementAR from '../images/aide-stationnement-ar.jpg'
import stationnementARAV from '../images/aide-stationnement-av-ar.jpg'
import camerarecul from '../images/camera-recul.jpg'
import echappementsport from '../images/echappement-sport.jpg'
import freinageurgence from '../images/aide-freinage-durgence.jpg'
import airbag from '../images/airbag.jpg'
import freinagehauteperf from '../images/freinage-haute-perf.jpg'
import etrierbleu from '../images/etrier-bleu.jpg'
import etriergris from '../images/etrier-gris.jpg'
import logoalpine from '../images/logo-alpine.jpg'
import logovolant from '../images/logo-volant.jpg'
import packcarbone from '../images/pack-carbone.jpg'
import pedalalu from '../images/pedal-alu.jpg'
import siegechauffant from '../images/siege-chauffant.jpg'
import alarme from '../images/alarme.jpg'
import chaineneige from '../images/chaaine-neige.jpg'
import extincteur from '../images/extincteur.jpg'
import fixationextincteur from '../images/fixation-extincteur.jpg'
import kitsecurite from '../images/kit-securite.jpg'
import protection from '../images/protection-obd.jpg'
import supportcamera from '../images/support-camera.jpg'
import supportsmartphone from '../images/support-smartphone.jpg'
import filetrangement from '../images/filet-rangement.jpg'
import tapiscoffre from '../images/tapis-coffre.jpg'
import chargeurbatterie from '../images/chargeur-batterie.jpg'
import kitoutils from '../images/kit-outils.jpg'
import antivoljante from '../images/antivol-jantes.jpg'
import cabochons from '../images/cabochons-metal.jpg'
import housse from '../images/housse.jpg'


//Ici les imports des Components
import ModeleList from './Modele/ModeleList'; //------------------------ <ModeleList/>
import CouleurList from './Couleur/CouleurList'; //--------------------- <CouleurList/>
import JantesList from './Jantes/JantesList'; //------------------------ <JantesList/>
import SellerieList from './Sellerie/SellerieList'; //------------------ <SellerieList/>
import EquipementsList from './Equipements/EquipementsList'; //--------- <EquipementsList/>
import AccessoiresList from './Accessoires/AccessoiresList';


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

<h1 className="title">1/ Choisissez votre modèle :</h1>

<ModeleList/>

<h1 className="title">2/ Choisissez vos Couleurs :</h1>

<CouleurList/>

<h1 className="title">3/ Choisissez vos Jantes</h1>

<JantesList/>

<h1 className="title">4/ Choisissez votre sellerie :</h1>

<SellerieList/>

<h1 className="title">5/ Choisissez vos équipements</h1>
<h1 className="text-center">Design</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={packheritage}/>
    <Card.Body>
      <Card.Title>Pack Heritage 180€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={reposepied} />
    <Card.Body>
      <Card.Title>Repose-pieds passager en aluminium 96€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1 className="text-center">Média et navigation</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={alpinemetrics}/>
    <Card.Body>
      <Card.Title>Alpine Télémetrics 204€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={audiofocal} />
    <Card.Body>
      <Card.Title>Système audio Focal 600€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={audiopremium} />
    <Card.Body>
      <Card.Title>Système audio Focal Premium 1200€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={audiostandard} />
    <Card.Body>
      <Card.Title>Système audio standard 0€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1 className="text-center">Confort</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={retroint}/>
    <Card.Body>
      <Card.Title>Rétroviseur intérieur électrochrome 0€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={retroext} />
    <Card.Body>
      <Card.Title>rétroviseurs ext. chauf. rabattables élec. 504€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={packrangement} />
    <Card.Body>
      <Card.Title>Pack de rangement 504 €</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={regulvitesse} />
    <Card.Body>
      <Card.Title>Régulateur/Limiteur de vitesse 0 €</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1 className="text-center">Conduite</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={stationnementAR}/>
    <Card.Body>
      <Card.Title>Aide au stationnement AR 420€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={stationnementARAV} />
    <Card.Body>
      <Card.Title>Aide au stationnement AV et AR 750€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={camerarecul} />
    <Card.Body>
      <Card.Title>Aide au stationnement AV et AR et caméra de recul 1200€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={echappementsport} />
    <Card.Body>
      <Card.Title>échappement sport actif 1500€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1 className="text-center">Sécurité</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={freinagehauteperf}/>
    <Card.Body>
      <Card.Title>Freinage haute-perf 320mm 1000€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={freinageurgence} />
    <Card.Body>
      <Card.Title>Assistance freinage d'urgence 0€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={airbag} />
    <Card.Body>
      <Card.Title>Airbags frontaux conducteur et passager 0€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1 className="text-center">Personnalisation extérieure</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={etrierbleu}/>
    <Card.Body>
      <Card.Title>Etriers de frein Bleu Alpine 384€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={logoalpine} />
    <Card.Body>
      <Card.Title>Logo Alpine Ailes de devant 120€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={etriergris} />
    <Card.Body>
      <Card.Title>Etriers de frein gris anthracite 0€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1 className="text-center">Personnalisation intérieure</h1>

<CardGroup className="groupcards">
  <Card className ="card">
    <Card.Img variant="top" src={pedalalu}/>
    <Card.Body>
      <Card.Title>Pédalier en aluminium 120€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={packcarbone} />
    <Card.Body>
      <Card.Title>Harmonie carbone mat 0€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={logovolant} />
    <Card.Body>
      <Card.Title>Logo volant Bleu Alpine 84€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
  <Card className ="card">
    <Card.Img variant="top" src={siegechauffant} />
    <Card.Body>
      <Card.Title>Sièges chauffants 400€</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <Button variant="info" size="lg" className="btn">Choisir</Button>{' '}
  </Card>
</CardGroup>

<h1 className="title">6/ Accessoires</h1>


<AccessoiresList/>
<i class="fa fa-4x fa-check-circle"></i>
</>
)

export default Configurator;
