import React from 'react';
import Transport from './Transport';
import Multimedia from './Multimedia';
import Interieur from './Interieur';
import Garage from './Garage';
import Exterieur from './Exterieur';



const AccessoiresList = () => (
  <>
<h1 className="text-center">Transport et protection</h1>
<Transport/>
<h1 className="text-center">Multimedia</h1>
<Multimedia/>
<h1 className="text-center">Interieur</h1>
<Interieur/>
<h1 className="text-center">Matériel de garage</h1>
<Garage/>
<h1 className="text-center">Exterieur</h1>
<Exterieur/>
</>
  );


export default AccessoiresList;
