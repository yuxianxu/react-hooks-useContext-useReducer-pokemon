import React, { useEffect, useReducer } from 'react';
import PokemonFilter from './components/PokemonFilter';
import PokemonList from './components/PokemonList';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import logo from './assets/redux.svg';

const pokemonReducer = (
  state = {
    pokemon: [],
    search: '',
    selected: null,
    modal: false,
  },
  { type, payload }
) => {
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
      return state;
  }
};

const store = createStore(pokemonReducer);

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
      <h2>Pokemon list - React - Redux</h2>
      <img
        className='logo'
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
