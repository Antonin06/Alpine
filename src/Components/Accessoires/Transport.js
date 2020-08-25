import React from 'react';
import { useSelector } from 'react-redux';


const Transport = () => {

  const transport = useSelector((state) => state.accessoires.transport)

  const displayTransport = () => {
    return Object.keys(transport).map(key => (
      <p>{transport[key].name}</p>

    ));
  }

  return(
    <div>
    {displayTransport()}
    </div>
  )

}
export default Transport;
