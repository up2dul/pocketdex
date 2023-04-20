const SearchBar = () => (
  <form className='flex justify-center'>
    <input
      type='text'
      placeholder='Search pokemon by name . . .'
      autoComplete='off'
      maxLength={20}
      className='rounded-l-md bg-gray/10 w-full sm:w-1/2 lg:w-1/3 py-1 px-2'
    />
    <button
      type='submit'
      className='py-1 px-3 bg-primary text-light font-medium rounded-r-md'
    >
      Go!
    </button>
  </form>
);

export default SearchBar;
