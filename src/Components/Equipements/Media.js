import React from 'react';
import { useSelector } from 'react-redux';


const Media = () => {

  const medias = useSelector((state) => state.equipements.media)

  const displayMedia = () => {
    return Object.keys(medias).map(key => (
      <p>{medias[key].name}</p>

    ));
  }

  return(
    <div>
    {displayMedia()}
    </div>
  )

}
export default Media;
