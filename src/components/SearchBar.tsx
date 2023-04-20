import Button from './Button';

const SearchBar = () => (
  <form className='flex justify-center'>
    <input
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

export default SearchBar;
