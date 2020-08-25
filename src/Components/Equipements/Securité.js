import React from 'react';
import { useSelector } from 'react-redux';


const Securité = () => {

  const securité = useSelector((state) => state.equipements.securité)

  const displaySecurité = () => {
    return Object.keys(securité).map(key => (
      <p>{securité[key].name}</p>

    ));
  }

  return(
    <div>
    {displaySecurité()}
    </div>
  )

}
export default Securité;
