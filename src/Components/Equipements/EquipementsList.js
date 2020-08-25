import React from 'react';
import EquipementsCard from './EquipementsCard';
import { useSelector } from 'react-redux';

const EquipementsList = () => {

const equipements = useSelector((state) => state.equipements)
console.log(equipements);

  const displayEquipements = () => {
    return Object.keys(equipements).map(key => (
      Object.keys(equipements[key]).map(key2 => (
      <EquipementsCard equipements={equipements[key][key2]} />
    ))));
  }
  // console.log(equipements[key][key2]),

    return (
      <div className='row'>
        {displayEquipements()}
      </div>
    );
  }

export default EquipementsList;
