import { useContext, useRef, useState, type FormEvent } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { type PokeAPI } from 'pokeapi-types';

import { PokemonContext } from '@/contexts/PokemonContext';
import { type SavedPokemonContext } from '@/lib/types';
import { generateId } from '@/lib/utils';
import Button from './Button';

type SaveDialogProps = {
  name: string;
  imageSrc: string;
  height: number;
  weight: number;
  types: PokeAPI.PokemonType[] | undefined;
};

const SaveDialog = (props: SaveDialogProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { setSavedPokemon } = useContext(PokemonContext) as SavedPokemonContext;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameAlias = inputRef.current?.value || '';
    const newData = {
      id: generateId(),
      nameAlias,
      ...props,
    };
    setSavedPokemon((prev) => [...prev, newData]);
    setOpenDialog(false);
  };

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Dialog.Trigger asChild>
        <Button isWFull>Save</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-20 flex items-center justify-center backdrop-blur-sm'>
          <Dialog.Content className='rounded-md bg-light px-8 pt-5 pb-6 outline-none'>
            <form onSubmit={handleSubmit}>
              <p>Input name alias for the Pokemon.</p>
              <input
                ref={inputRef}
                type='text'
                placeholder='e.g. Maiki salamun'
                autoComplete='off'
                maxLength={32}
                required
                className='rounded-md bg-gray/10 w-full p-2 mt-3'
              />
              <Button type='submit' isWFull className='mt-5'>
                Save it!
              </Button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SaveDialog;
