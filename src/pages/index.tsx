import axios from 'axios';
import { type PokeAPI } from 'pokeapi-types';

import useInfiniteScroll from '@/hooks/use-infinite-scroll';
import useSearch from '@/hooks/use-search';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import SearchBar from '@/components/common/SearchBar';

const Home = ({ pokemonList }: { pokemonList: PokeAPI.NamedAPIResource[] }) => {
  const { filteredList: searchedList, handleSearch } = useSearch(
    pokemonList,
    'name',
  );
  const { list: reducedList, increaseLimit } = useInfiniteScroll({
    initialList: searchedList,
    initialOffset: 30,
    limit: 300,
  });

  return (
    <>
      <section>
        <SearchBar onSubmit={handleSearch} />
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
        {reducedList?.map(({ name, url }) => (
          <Card key={`${url}-${name}`} pokemonName={name} url={url} />
        ))}
      </section>

      <section className='flex justify-center mt-10'>
        <Button onClick={increaseLimit}>Load more</Button>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  const response = await axios.get<PokeAPI.NamedAPIResourceList>(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=300',
  );
  const pokemonList = response.data.results;

  return { props: { pokemonList } };
}

export default Home;
