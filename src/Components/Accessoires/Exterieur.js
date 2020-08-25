import React from 'react';
import { useSelector } from 'react-redux';


const Exterieur = () => {

  const exterieur = useSelector((state) => state.accessoires.exterieur)

  const displayExterieur = () => {
    return Object.keys(exterieur).map(key => (
      <p>{exterieur[key].name}</p>

    ));
  }

  return(
    <div>
    {displayExterieur()}
    </div>
  )

}
export default Exterieur;
