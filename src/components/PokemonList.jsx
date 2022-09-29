import React, { useContext } from 'react';
import Pokemon from './Pokemon';
import PokemonSelected from './PokemonSelected';
import PokemonContext from '../context/PokemonContext';

function PokemonList() {
  const {
    state: { pokemon, search, modal },
  } = useContext(PokemonContext);

  return (
    <>
      {pokemon.length == 0 && <p>Loading...</p>}
      {modal && <PokemonSelected />}
      {pokemon
        .filter(({ name: { english } }) =>
          english.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .slice(0, 20)
        .map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
    </>
  );
}

export default PokemonList;
