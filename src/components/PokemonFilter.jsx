import React from 'react';

const PokemonFilter = ({ search, setSearch }) => {
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className='search'>
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
