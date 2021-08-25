import { createContext, useState } from 'react';

import { LocationDataState, LocationData } from '../interfaces';

const initialState = {
  ip: '',
  location: {
    city: '',
    country: '',
    postalCode: '',
    timezone: '',
    lat: 0,
    lng: 0,
  },
  isp: '',
};

export const LocationContext = createContext<LocationDataState>({
  locationData: initialState,
  setLocationData: () => '',
});

export const LocationProvider: React.FC = ({ children }) => {
  const [locationData, setLocationData] = useState<LocationData>(initialState);

  return (
    <LocationContext.Provider value={{ locationData, setLocationData }}>
      {children}
    </LocationContext.Provider>
  );
};
