import React from 'react';
import CouleurCard from './CouleurCard';
import { useSelector } from 'react-redux';

const CouleurList = () => {

const couleur = useSelector((state) => state.couleurs)
console.log(couleur);

  const displayCouleur = () => {
    return Object.keys(couleur).map(key => (
      <CouleurCard couleur={couleur[key]} />
    ));
  }

    return (
      <div className='row'>
        {displayCouleur()}
      </div>
    );
  }

export default CouleurList;
