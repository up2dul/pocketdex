import { type AppType } from 'next/app';

import Layout from '@/components/Layout';
import '@/styles/globals.css';
import PokemonContextProvider from '@/contexts/PokemonContext';

const MyApp: AppType = ({ Component, pageProps }) => (
  <Layout>
    <PokemonContextProvider>
      <Component {...pageProps} />
    </PokemonContextProvider>
  </Layout>
);

export default MyApp;
