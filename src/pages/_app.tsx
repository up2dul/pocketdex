import { type AppType } from 'next/app';

import Layout from '@/components/Layout';
import '@/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
