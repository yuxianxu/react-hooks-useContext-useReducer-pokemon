import React from 'react';

const PokemonSelected = ({ selected }) => {
  if (selected === null) {
    return null;
  }

  return (
    <div className="selected">
      <h3>{selected.name.english}</h3>
      <div>
        {Object.keys(selected.base).map((baseKey) => (
          <span key={baseKey}>
            {baseKey} : {selected.base[baseKey]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonSelected;
