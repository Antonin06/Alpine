import React from 'react';
import ModeleCard from './ModeleCard';
import { useSelector } from 'react-redux';

const ModeleList = () => {

const version = useSelector((state) => state.version)
console.log(version);

  const displayModele = () => {
    return Object.keys(version).map(key => (
      <ModeleCard version={version[key]} />
    ));
  }

    return (
      <div className='row'>
        {displayModele()}
      </div>
    );
  }

export default ModeleList;
