import React from 'react';
import Pokemon from './Pokemon';
import PokemonSelected from './PokemonSelected';

const PokemonList = ({
  pokemon,
  search,
  selected,
  setSelected,
  modal,
  setModal,
}) => {
  return (
    <>
      {pokemon.length == 0 && <p>Loading...</p>}
      {modal && <PokemonSelected selected={selected} />}
      {pokemon
        .filter(({ name: { english } }) =>
          english.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .slice(0, 20)
        .map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            setSelected={setSelected}
            key={pokemon.id}
            modal={modal}
            setModal={setModal}
          />
        ))}
    </>
  );
};

export default PokemonList;
