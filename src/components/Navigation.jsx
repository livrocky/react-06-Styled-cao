import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <div className='container'>
        <nav className='main-nav'>
          <Link className='nav-link' to='/home'>
            Home
          </Link>
          <Link className='nav-link' to='/add'>
            Add
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
