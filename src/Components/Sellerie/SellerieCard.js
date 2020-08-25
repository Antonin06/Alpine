import React from 'react';

const SellerieCard = (props) => {
        return (
          <>
            <p>{props.sellerie.name}</p>
            <p>{props.sellerie.prix}</p>
          </>
        )
}
export default SellerieCard;
