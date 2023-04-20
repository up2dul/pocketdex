import { type NextPage } from 'next';
import Head from 'next/head';

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
  </>
);

export default Home;
