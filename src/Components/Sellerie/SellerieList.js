import React from 'react';
import SellerieCard from './SellerieCard';
import { useSelector } from 'react-redux';

const SellerieList = () => {

const sellerie = useSelector((state) => state.sellerie)
console.log(sellerie);

  const displaySellerie = () => {
    return Object.keys(sellerie).map(key => (
      <SellerieCard sellerie={sellerie[key]} />
    ));
  }

    return (
      <div className='row'>
        {displaySellerie()}
      </div>
    );
  }

export default SellerieList;
