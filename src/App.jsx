import React, { useEffect, useState } from 'react';
import PokemonFilter from './components/PokemonFilter';
import PokemonList from './components/PokemonList';
import PokemonContext from './context/PokemonContext';

function App() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const getComments = async () => {
    const response = await fetch('./src/pokemon.json');
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  if (pokemon === null) {
    return <p>Loading...</p>;
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        search,
        setSearch,
        selected,
        setSelected,
        modal,
        setModal,
      }}
    >
      <h2>Pokemon list - React hooks</h2>
      <PokemonFilter />
      <PokemonList />
    </PokemonContext.Provider>
  );
}

export default App;
