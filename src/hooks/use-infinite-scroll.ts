import { useEffect, useState } from 'react';
import { type PokeAPI } from 'pokeapi-types';

function useInfiniteScroll({
  initialList,
  initialOffset,
  limit,
}: {
  initialList: PokeAPI.NamedAPIResource[];
  initialOffset: number;
  limit: number;
}) {
  const [list, setList] = useState<PokeAPI.NamedAPIResource[]>([]);
  const [offset, setOffset] = useState<number>(initialOffset);

  useEffect(() => {
    const newList = initialList.slice(0, offset);
    setList(newList);
  }, [initialList, offset]);

  useEffect(() => {
    setOffset(initialOffset);
  }, [initialList]);

  const increaseLimit = () => {
    if (offset >= limit) return;
    setOffset((prev) => prev + 30);
  };

  return {
    list,
    increaseLimit,
  };
}

export default useInfiniteScroll;
