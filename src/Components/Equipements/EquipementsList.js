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
  <Design/>
<h1 className="text-center">Média et navigation</h1>
  <Media/>
<h1 className="text-center">Confort</h1>
  <Confort/>
<h1 className="text-center">Conduite</h1>
  <Conduite/>
<h1 className="text-center">Sécurité</h1>
  <Securité/>
<h1 className="text-center">Personnalisation extérieure</h1>
  <Exterieur/>
<h1 className="text-center">Personnalisation intérieure</h1>
  <Interieur/>
</>
  );


export default EquipementsList;
