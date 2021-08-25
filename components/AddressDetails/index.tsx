import Item from './Item';

const AddressDetails = () => {
  return (
    <div className="address__details">
      <Item headline="IP Address" data="192.212.174.101" />
      <Item headline="Location" data="Brooklyn, NY, 10001" />
      <Item headline="TimeZone" data="UTC-05:00" />
      <Item headline="ISP" data="SpaceX Starlink" />
    </div>
  );
};

export default AddressDetails;
