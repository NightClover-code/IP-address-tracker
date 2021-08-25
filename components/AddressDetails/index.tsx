import { useRef } from 'react';
import { useWidth } from '../../hooks';
import Item from './Item';

const AddressDetails = () => {
  const addressDetailsRef = useRef<HTMLDivElement | null>(null);
  const width = useWidth(addressDetailsRef);

  return (
    <div
      className="address__details"
      ref={addressDetailsRef}
      style={{
        width: '90%',
        marginLeft: `-${width! / 2}px`,
      }}
    >
      <Item headline="IP Address" data="192.212.174.101" />
      <div className="vertical__line"></div>
      <Item headline="Location" data="Brooklyn, NY, 10001" />
      <div className="vertical__line"></div>
      <Item headline="TimeZone" data="UTC-05:00" />
      <div className="vertical__line"></div>
      <Item headline="ISP" data="SpaceX Starlink" />
    </div>
  );
};

export default AddressDetails;
