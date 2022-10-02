import React, { useContext } from 'react';
import Pokemon from './Pokemon';
import PokemonSelected from './PokemonSelected';
import PokemonContext from '../context/PokemonContext';

function PokemonList() {
  const {
    state: { pokemon, search, modal },
  } = useContext(PokemonContext);

  const filteredPokemon = pokemon.filter(({ name: { english } }) =>
    english.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      {pokemon.length == 0 && <p className="empty">Loading...</p>}
      {filteredPokemon.length > 0 && <p className="filterResults">{filteredPokemon.length} result{filteredPokemon.length > 1 ? 's' : ''} found</p>}
      {modal && <PokemonSelected />}
      {filteredPokemon.slice(0, 20).map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
      {filteredPokemon.length < 1 && (
        <p className="empty">Ohh, no pokemon found</p>
      )}
    </>
  );
}

export default PokemonList;
