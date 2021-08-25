import Search from '../Search';

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h1>IP Address Tracker</h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
