import React from 'react';
import { useSelector } from 'react-redux';


const Interieur = () => {

  const interieur = useSelector((state) => state.accessoires.interieur)

  const displayInterieur = () => {
    return Object.keys(interieur).map(key => (
      <p>{interieur[key].name}</p>

    ));
  }

  return(
    <div>
    {displayInterieur()}
    </div>
  )

}
export default Interieur;
