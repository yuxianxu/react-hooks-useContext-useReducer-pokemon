import React, { useEffect } from 'react';
import PokemonFilter from './components/PokemonFilter';
import PokemonList from './components/PokemonList';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import logo from './assets/redux.svg';

const initialState = {
  pokemon: [],
  search: '',
  selected: null,
  modal: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_SELECTED':
      return {
        ...state,
        selected: action.payload,
      };
    case 'SET_MODAL':
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({ reducer: pokemonReducer });

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const getComments = async () => {
    const response = await fetch('./src/pokemon.json');
    const data = await response.json();
    dispatch({ type: 'SET_POKEMON', payload: data });
  };

  useEffect(() => {
    getComments();
  }, []);

  if (pokemon === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Pokemon list - React - Redux toolkit</h2>
      <img
        className="logo"
        src={logo}
        alt="Redux logo"
        width={50}
        height={50}
      />
      <PokemonFilter />
      <PokemonList />
    </>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
