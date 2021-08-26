//importing hooks & context
import { useRef, useContext } from 'react';
import { useWidth } from '../../hooks';
import { LocationContext } from '../../context';
//importing components & random id's
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const AddressDetails = () => {
  const addressDetailsRef = useRef<HTMLDivElement | null>(null);
  const width = useWidth(addressDetailsRef);

  const { locationData } = useContext(LocationContext);

  //destructuring
  const { city, country, postalCode, timezone } = locationData.location;

  //location info
  const data = [
    {
      headline: 'IP Address',
      info: locationData.ip,
    },
    {
      headline: 'Location',
      info: postalCode
        ? `${country}, ${city}, ${postalCode}`
        : `${country}, ${city}`,
    },
    {
      headline: 'Timezone',
      info: `UTC ${timezone}`,
    },
    {
      headline: 'Isp',
      info: locationData.isp,
    },
  ];

  return (
    <div
      className="address__details"
      ref={addressDetailsRef}
      style={{
        width: '90%',
        marginLeft: `-${width! / 2}px`,
      }}
    >
      {data.map(({ headline, info }, index) => {
        return (
          <>
            <Item headline={headline} data={info} key={uuidv4()} />
            {index !== data.length - 1 ? (
              <div className="vertical__line"></div>
            ) : (
              ''
            )}
          </>
        );
      })}
    </div>
  );
};

export default AddressDetails;
