import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PokemonFilter = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

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
