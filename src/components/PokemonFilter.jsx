import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonFilter = () => {
  const {
    state: { search },
    dispatch,
  } = useContext(PokemonContext);

  function handleSearch(e) {
    dispatch({
      type: 'SET_SELECTED',
      payload: null,
    });

    dispatch({
      type: 'SET_SEARCH',
      payload: e.target.value,
    });
  }

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search pokemon"
      />
    </div>
  );
};

export default PokemonFilter;
