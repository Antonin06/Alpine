import React from 'react';

const EquipementsCard = (props) => {
        return (
          <>
            <p>{props.equipements.name}</p>
            <p>{props.equipements.prix}</p>
          </>
        )
}
export default EquipementsCard;
