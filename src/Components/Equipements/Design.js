import React from 'react';
import { useSelector } from 'react-redux';


const Design = () => {

  const designs = useSelector((state) => state.equipements.design)

  const displayDesign = () => {
    return Object.keys(designs).map(key => (
      <p>{designs[key].name}</p>

    ));
  }

  return(
    <div>
    {displayDesign()}
    </div>
  )

}
export default Design;
