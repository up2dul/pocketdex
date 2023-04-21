import Head from 'next/head';

import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Head>
      <title>Pocketdex</title>
      <meta name='description' content='Pocketdex' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />

    <main className='mt-10 px-12 sm:px-24 md:px-32 lg:px-44 xl:px-48'>
      {children}
    </main>
  </>
);

export default Layout;
