import {useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {FullPokemon} from '../interfaces/pokemonInterfaces';
import {useEffect} from 'react';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setpokemon] = useState<FullPokemon>({} as FullPokemon);

  useEffect(() => {
    const loadPokemon = async () => {
      const resp = await pokemonApi.get<FullPokemon>(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      setpokemon(resp.data);
      setIsLoading(false);
    };

    loadPokemon();
  }, []);

  return {isLoading, pokemon};
};
