import { type NextPage } from 'next';
import Head from 'next/head';

import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Pocketdex</title>
      <meta name='description' content='Pocketdex' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <section>
      <SearchBar />
    </section>

    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
      <Card pokemonName='bulbasaur' url='https://pokeapi.co/api/v2/pokemon/1' />
      <Card pokemonName='ivysaur' url='https://pokeapi.co/api/v2/pokemon/2' />
    </section>
  </>
);

export default Home;
