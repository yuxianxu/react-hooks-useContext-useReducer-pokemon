import React, { useEffect, useReducer } from 'react';
import PokemonFilter from './components/PokemonFilter';
import PokemonList from './components/PokemonList';
import PokemonContext from './context/PokemonContext';

const pokemonReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: payload,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: payload,
      };
    case 'SET_SELECTED':
      return {
        ...state,
        selected: payload,
      };
    case 'SET_MODAL':
      return {
        ...state,
        modal: payload,
      };
    default:
      throw new Error('No action type found');
  }
};

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemon: [],
    search: '',
    selected: null,
    modal: false,
  });

  const getComments = async () => {
    const response = await fetch('./src/pokemon.json');
    const data = await response.json();
    dispatch({ type: 'SET_POKEMON', payload: data });
  };

  useEffect(() => {
    getComments();
  }, []);

  if (state.pokemon === null) {
    return <p>Loading...</p>;
  }

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <h2>Pokemon list - React hooks</h2>
      <PokemonFilter />
      <PokemonList />
    </PokemonContext.Provider>
  );
}

export default App;
