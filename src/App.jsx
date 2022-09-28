import { useEffect, useState } from 'react';
import PokemonFilter from './components/PokemonFilter';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);

  const getComments = async () => {
    const response = await fetch('./src/pokemon.json');
    const data = await response.json();
    setPokemon(data);
  };

  console.log(search);

  useEffect(() => {
    getComments();
  }, []);

  console.log(selected);

  return (
    <>
      <h2>Pokemon list - React hooks</h2>
      <PokemonFilter pokemon={pokemon} search={search} setSearch={setSearch} />
      <PokemonList
        pokemon={pokemon}
        search={search}
        selected={selected}
        setSelected={setSelected}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
}

export default App;
