import React from 'react';

const PokemonFilter = ({ search, setSearch, setSelected }) => {
  function handleSearch(e) {
    setSearch(e.target.value);
    setSelected(null);
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
