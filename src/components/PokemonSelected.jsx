import React from 'react';
import { useSelector } from 'react-redux';

const PokemonSelected = () => {

  const selected = useSelector((state) => state.selected);

  if (!selected) return null;

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
