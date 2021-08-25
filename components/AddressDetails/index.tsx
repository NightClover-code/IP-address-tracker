import { useRef, useContext } from 'react';
import { LocationContext } from '../../context';
import { useWidth } from '../../hooks';
import Item from './Item';

const AddressDetails = () => {
  const addressDetailsRef = useRef<HTMLDivElement | null>(null);
  const width = useWidth(addressDetailsRef);

  const { locationData } = useContext(LocationContext);

  const { city, country, postalCode, timezone } = locationData.location;

  return (
    <div
      className="address__details"
      ref={addressDetailsRef}
      style={{
        width: '90%',
        marginLeft: `-${width! / 2}px`,
      }}
    >
      <Item headline="IP Address" data={locationData.ip} />
      <div className="vertical__line"></div>
      <Item headline="Location" data={`${country}, ${city}, ${postalCode}`} />
      <div className="vertical__line"></div>
      <Item headline="TimeZone" data={`UTC ${timezone}`} />
      <div className="vertical__line"></div>
      <Item headline="ISP" data={locationData.isp} />
    </div>
  );
};

export default AddressDetails;
