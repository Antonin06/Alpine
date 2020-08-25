import React from 'react';
import { useSelector } from 'react-redux';


const Multimedia = () => {

  const multimedia = useSelector((state) => state.accessoires.multimedia)

  const displayMultimedia = () => {
    return Object.keys(multimedia).map(key => (
      <p>{multimedia[key].name}</p>

    ));
  }

  return(
    <div>
    {displayMultimedia()}
    </div>
  )

}
export default Multimedia;
