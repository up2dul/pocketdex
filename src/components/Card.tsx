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
  const fixedHeight = (pokemon?.height || 0) / 10;
  const fixedWeight = (pokemon?.weight || 0) / 10;

  useEffect(() => {
    void getPokemonData();
  }, []);

  const getPokemonData = async () => {
    try {
      const response = await axios.get<IPokemon>(url);
      const pokemonData = response.data;
      setPokemon(pokemonData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <article className='rounded-md shadow-lg p-4 flex flex-col justify-between'>
      <Image
        src={`https://img.pokemondb.net/artwork/large/${
          pokemonName || 'bulbasaur'
        }.jpg`}
        alt={pokemonName}
        width={130}
        height={130}
        className='mx-auto'
      />

      <div className='flex flex-col gap-2 mt-3'>
        <h1 className='text-xl font-medium text-center'>{pokemonName}</h1>

        <div>
          <p>
            Height: <span className='font-medium'>{fixedHeight} m</span>
          </p>
          <p>
            Weight: <span className='font-medium'>{fixedWeight} kg</span>
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
      </div>
    </article>
  );
};

export default Card;
