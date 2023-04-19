import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <main>
    <Header />

    <main className='mt-10 px-12 sm:px-24 md:px-32 lg:px-44 xl:px-48'>
      {children}
    </main>
  </main>
);

export default Layout;
