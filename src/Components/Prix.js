import React from 'react';
import { useSelector } from 'react-redux';




const Prix = () => {
  const version = useSelector((state) => state.version)

const displayModele = () => (
    <>
    <p> - {version[1].prix}€</p>
    <p> - {version[2].prix}€</p>
    </>
)

return (
    displayModele()
);
}

export default Prix;
