import React from 'react';
import { useSelector } from 'react-redux';




const Prix = () => {
  const price = useSelector((state) => state.price)



  return (
    <p> {price} </p>
  );
}

export default Prix;
