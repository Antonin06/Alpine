import React from 'react';
import { useSelector } from 'react-redux';


const Confort = () => {

  const confort = useSelector((state) => state.equipements.confort)

  const displayConfort = () => {
    return Object.keys(confort).map(key => (
      <p>{confort[key].name}</p>

    ));
  }

  return(
    <div>
    {displayConfort()}
    </div>
  )

}
export default Confort;
