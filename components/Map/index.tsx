import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = () => {
  const myIcon = L.icon({
    iconUrl: './images/marker.png',
    iconSize: [35, 50],
  });

  return (
    <MapContainer
      center={[33.971588, -6.849813]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[33.971588, -6.849813]} icon={myIcon}></Marker>
    </MapContainer>
  );
};

export default Map;
