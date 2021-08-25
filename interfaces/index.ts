import { SetStateAction, Dispatch } from 'react';

export interface LocationData {
  ip: string;
  location: {
    city: string;
    country: string;
    postalCode: string;
    timezone: string;
    lat: string;
    lng: string;
  };
  isp: string;
}

export interface LocationDataState {
  locationData: LocationData;
  setLocationData: Dispatch<SetStateAction<LocationData>>;
}
