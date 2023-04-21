import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren as PokemonContextProps,
} from 'react';

import { type ISavedPokemon, type SavedPokemonContext } from '@/lib/types';

export const PokemonContext = createContext<SavedPokemonContext | null>(null);

const PokemonContextProvider = ({ children }: PokemonContextProps) => {
  const [savedPokemon, setSavedPokemon] = useState<ISavedPokemon[]>([]);
  const providerValue = useMemo(
    () => ({ savedPokemon, setSavedPokemon }),
    [savedPokemon, setSavedPokemon],
  );

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
