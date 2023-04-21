import Link from 'next/link';

const Header = () => (
  <header className='py-6 px-12 md:px-20 lg:px-32 shadow-md'>
    <nav className='flex flex-wrap justify-center gap-5 sm:justify-between items-center'>
      <h1 className='text-2xl text-primary underline-offset-4 underline decoration-wavy text-center font-medium'>
        Pocket<span className='text-dark'>dex</span>
      </h1>

      <ul className='flex justify-center gap-10'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/saved'>Saved pokemon</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
