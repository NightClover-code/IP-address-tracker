import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { getGeolocation } from '../../utils';

const Search = () => {
  const [ipAddress, setIpAddress] = useState<string>('');

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await getGeolocation(ipAddress);

    console.log(data);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="search__container">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={e => setIpAddress(e.target.value)}
        />
        <button className="button__primary" type="submit">
          <Image
            src="/images/icon-arrow.svg"
            width="11"
            height="14"
            alt="arrow-right"
          />
        </button>
      </div>
    </form>
  );
};

export default Search;
