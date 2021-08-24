import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Image
        src="./images/pattern-bg.png"
        layout="fill"
        alt="blueish background"
      />
      <h1>IP Address Tracker</h1>
    </header>
  );
};

export default Header;
