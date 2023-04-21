import { useContext } from 'react';

import { PokemonContext } from '@/contexts/PokemonContext';
import { type SavedPokemonContext } from '@/lib/types';
import SavedCard from '@/components/SavedCard';

const Saved = () => {
  const { savedPokemon, setSavedPokemon } = useContext(
    PokemonContext,
  ) as SavedPokemonContext;

  const handleDelete = (id: string) => {
    const newData = savedPokemon.filter((pokemon) => pokemon.id !== id);
    setSavedPokemon(newData);
  };

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
      {savedPokemon.map((pokemon) => (
        <SavedCard key={pokemon.id} {...pokemon} onDelete={handleDelete} />
      ))}
    </section>
  );
};

export default Saved;
