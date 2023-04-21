import { useRef, type FormEvent } from 'react';

import Button from './Button';

const SearchBar = ({ onSubmit }: { onSubmit: (q: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    onSubmit(query || '');
  };

  return (
    <form className='flex justify-center' onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Search pokemon by name . . .'
        autoComplete='off'
        maxLength={20}
        className='rounded-l-md bg-gray/10 w-full sm:w-1/2 lg:w-1/3 p-2'
      />
      <Button type='submit' className='rounded-l-none'>
        Go!
      </Button>
    </form>
  );
};

export default SearchBar;
