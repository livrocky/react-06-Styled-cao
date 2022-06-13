// import { Link } from 'react-router-dom';

import { Link } from './NavStyled';

const Navigation = () => {
  return (
    <header>
      <nav className='main-nav'>
        <Link href='/home'>Home</Link>
        <Link href='/add'>Add</Link>
      </nav>
    </header>
  );
};

export default Navigation;
