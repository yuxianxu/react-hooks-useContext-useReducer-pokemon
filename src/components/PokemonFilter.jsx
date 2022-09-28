import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonFilter = () => {
  const { setSelected, search, setSearch } = useContext(PokemonContext);

  function handleSearch(e) {
    setSelected(null);
    setSearch(e.target.value);
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
