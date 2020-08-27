import React from 'react';
import Design from './Design';
import Media from './Media';
import Confort from './Confort';
import Conduite from './Conduite';
import Securité from './Securité';
import Exterieur from './Exterieur';
import Interieur from './Interieur';


const EquipementsList = () => (
<>
<h1 className="text-center">Design</h1>
< br/>
  <Design/>
< br/>
<h1 className="text-center">Média et navigation</h1>
< br/>
  <Media/>
  < br/>
<h1 className="text-center">Confort</h1>
< br/>
  <Confort/>
  < br/>
<h1 className="text-center">Conduite</h1>
< br/>
  <Conduite/>
  < br/>
<h1 className="text-center">Sécurité</h1>
< br/>
  <Securité/>
  < br/>
<h1 className="text-center">Personnalisation extérieure</h1>
< br/>
  <Exterieur/>
  < br/>
<h1 className="text-center">Personnalisation intérieure</h1>
< br/>
  <Interieur/>
  < br/>

</>
  );


export default EquipementsList;
