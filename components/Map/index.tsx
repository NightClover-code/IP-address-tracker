import L from 'leaflet';
import { useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LocationContext } from '../../context';

const Map = () => {
  const myIcon = L.icon({
    iconUrl: './images/marker.png',
    iconSize: [35, 50],
  });

  const {
    locationData: {
      location: { lat, lng },
    },
  } = useContext(LocationContext);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={myIcon}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
