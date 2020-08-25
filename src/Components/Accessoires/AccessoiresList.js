import React from 'react';
import Transport from './Transport';
import Multimedia from './Multimedia';
import Interieur from './Interieur';
import Garage from './Garage';
import Exterieur from './Exterieur';

import { useSelector } from 'react-redux';


const AccessoiresList = () => (
<>
  <Transport/>
  <Multimedia/>
  <Interieur/>
  <Garage/>
  <Exterieur/>
</>
  );


export default AccessoiresList;
