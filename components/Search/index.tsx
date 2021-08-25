import Image from 'next/image';

const Search = () => {
  return (
    <div className="search__container">
      <input type="text" placeholder="Search for any IP address or domain" />
      <button className="button__primary">
        <Image
          src="/images/icon-arrow.svg"
          width="11"
          height="14"
          alt="arrow-right"
        />
      </button>
    </div>
  );
};

export default Search;
