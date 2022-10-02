import React from 'react';
import { useDispatch } from 'react-redux';

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch();

  function handleSelect() {
    dispatch({
      type: 'SET_SELECTED',
      payload: pokemon,
    });
    
    dispatch({
      type: 'SET_MODAL',
      payload: true,
    });
  }

  return (
    <>
      <div className="pokemonItem" onClick={handleSelect}>
        <div>
          <p>ID</p>
          <h4>{pokemon.id}</h4>
        </div>
        <div>
          <p>Name</p>
          <h4>{pokemon.name.english}</h4>
        </div>
        <div>
          <p>Type</p>
          <h4>{pokemon.type.join(', ')}</h4>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
