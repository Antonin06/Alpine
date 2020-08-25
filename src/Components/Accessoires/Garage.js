import React from 'react';
import { useSelector } from 'react-redux';


const Garage = () => {

  const garage = useSelector((state) => state.accessoires.garage)

  const displayGarage = () => {
    return Object.keys(garage).map(key => (
      <p>{garage[key].name}</p>

    ));
  }

  return(
    <div>
    {displayGarage()}
    </div>
  )

}
export default Garage;
