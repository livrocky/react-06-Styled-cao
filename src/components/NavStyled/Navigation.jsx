// import { Link } from 'react-router-dom';

import { Header, Link, MainNav } from './NavStyled';

const Navigation = () => {
  return (
    <Header>
      <MainNav>
        <Link href='/home'>Home</Link>
        <Link href='/add'>Add</Link>
      </MainNav>
    </Header>
  );
};

export default Navigation;
