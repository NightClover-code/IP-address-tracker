import Search from '../Search';
import AddressDetails from '../AddressDetails';

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h1>IP Address Tracker</h1>
        <Search />
        <AddressDetails />
      </div>
    </header>
  );
};

export default Header;
