import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { type IPokemon } from '@/lib/types';
import Button from './Button';

type CardProps = {
  pokemonName: string;
  url: string;
};

const Card = ({ pokemonName, url }: CardProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    void getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const response = await axios.get<IPokemon>(url);
    const pokemonData = response.data;
    setPokemon(pokemonData);
  };

  return (
    <article className='rounded-md shadow-lg p-4 flex flex-col gap-3'>
      <Image
        src={`https://img.pokemondb.net/artwork/large/${
          pokemonName || 'bulbasaur'
        }.jpg`}
        alt={pokemonName}
        width={130}
        height={130}
        className='mx-auto'
      />

      <h1 className='text-xl font-medium text-center'>{pokemonName}</h1>

      <div>
        <p>
          Height:{' '}
          <span className='font-medium'>{(pokemon?.height || 0) / 10} m</span>
        </p>
        <p>
          Weight: <span className='font-medium'>{pokemon?.weight} kg</span>
        </p>
      </div>

      <div className='flex gap-1 flex-wrap'>
        {pokemon?.types.map(({ slot, type }) => (
          <p key={slot} className={`py-0.5 px-1 rounded-sm ${type.name}`}>
            {type.name}
          </p>
        ))}
      </div>

      <Button isWFull>Save</Button>
    </article>
  );
};

export default Card;
