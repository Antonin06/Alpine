import React from 'react';
import JantesCard from './JantesCard';
import { useSelector } from 'react-redux';

const JantesList = () => {

const jantes = useSelector((state) => state.jantes)
console.log(jantes);

  const displayJantes = () => {
    return Object.keys(jantes).map(key => (
      <JantesCard jantes={jantes[key]} />
    ));
  }

    return (
      <div className='row'>
        {displayJantes()}
      </div>
    );
  }

export default JantesList;
