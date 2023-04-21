import { useState } from 'react';
import { type PokeAPI } from 'pokeapi-types';

interface UseSearch<T> {
  filteredList: T[];
  handleSearch: (query: string) => void;
}

function useSearch<T extends PokeAPI.NamedAPIResource>(
  initialData: T[],
  searchBy: keyof T,
): UseSearch<T> {
  const [filteredList, setFilteredList] = useState<T[]>(initialData);

  const handleSearch = (query = '') => {
    setFilteredList(
      initialData.filter((data) => {
        const searchValue = data[searchBy] as string;
        return searchValue?.toLowerCase().includes(query?.toLowerCase());
      }),
    );
  };

  return { filteredList, handleSearch };
}

export default useSearch;
