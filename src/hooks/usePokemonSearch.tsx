import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPaginationResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const formatToSimplePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, name, picture};
    });

    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginationResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );
    formatToSimplePokemon(resp.data.results);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {simplePokemonList, isFetching};
};
