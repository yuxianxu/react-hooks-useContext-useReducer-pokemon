import React from 'react';

const Pokemon = ({ pokemon, setSelected, modal, setModal }) => {
  function handleSelect() {
    setSelected(pokemon);
    setModal(true);
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
