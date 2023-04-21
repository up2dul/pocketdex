import { type Dispatch, type SetStateAction } from 'react';
import { type PokeAPI } from 'pokeapi-types';

export interface ISavedPokemon {
  id: string;
  nameAlias: string;
  name: string;
  imageSrc: string;
  height: number;
  weight: number;
  types: PokeAPI.PokemonType[] | undefined;
}

export type SavedPokemonContext = {
  savedPokemon: ISavedPokemon[];
  setSavedPokemon: Dispatch<SetStateAction<ISavedPokemon[]>>;
};
