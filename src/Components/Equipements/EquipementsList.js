import React from 'react';
import EquipementsCard from './EquipementsCard';
import { useSelector } from 'react-redux';

const EquipementsList = () => {

  const designs = useSelector((state) => state.equipements.design)

  const displayDesign = () => {
    return Object.keys(designs).map(key => (
      console.log(designs),
        <EquipementsCard design={designs[key]} />
      ));
  }

  return (
    <div className='row'>
    {displayDesign()}

    </div>
  );
}

export default EquipementsList;
