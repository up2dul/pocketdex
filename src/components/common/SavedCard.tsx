import Image from 'next/image';

import { type ISavedPokemon } from '@/lib/types';
import Button from './Button';

type SavedCardProps = ISavedPokemon & {
  onDelete: (id: string) => void;
};

const SavedCard = ({
  id,
  imageSrc,
  nameAlias,
  height,
  weight,
  types,
  onDelete,
}: SavedCardProps) => (
  <article className='rounded-md shadow-lg p-4 flex flex-col justify-between'>
    <Image
      src={imageSrc}
      alt={nameAlias}
      width={130}
      height={130}
      className='mx-auto'
    />

    <div className='flex flex-col gap-2 mt-3'>
      <h1 className='text-xl font-medium text-center'>{nameAlias}</h1>

      <div>
        <p>
          Height: <span className='font-medium'>{height} m</span>
        </p>
        <p>
          Weight: <span className='font-medium'>{weight} kg</span>
        </p>
      </div>

      <div className='flex gap-1 flex-wrap'>
        {types?.map(({ slot, type }) => (
          <p key={slot} className={`py-0.5 px-1 rounded-sm ${type.name}`}>
            {type.name}
          </p>
        ))}
      </div>

      <Button onClick={() => onDelete(id)}>Delete</Button>
    </div>
  </article>
);

export default SavedCard;
