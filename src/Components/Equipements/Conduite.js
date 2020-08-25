import React from 'react';
import { useSelector } from 'react-redux';


const Conduite = () => {

  const conduite = useSelector((state) => state.equipements.conduite)

  const displayConduite = () => {
    return Object.keys(conduite).map(key => (
      <p>{conduite[key].name}</p>

    ));
  }

  return(
    <div>
    {displayConduite()}
    </div>
  )

}
export default Conduite;
