import React from 'react';
import Design from './Design';
import Media from './Media';
import Confort from './Confort';
import Conduite from './Conduite';
import Securité from './Securité';
import Exterieur from './Exterieur';
import Interieur from './Interieur';

import { useSelector } from 'react-redux';


const EquipementsList = () => (
<>
  <Design/>
  <Media/>
  <Confort/>
  <Conduite/>
  <Securité/>
  <Exterieur/>
  <Interieur/>
</>
  );


export default EquipementsList;
