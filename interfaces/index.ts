export interface LocationData {
  ip: string;
  location: {
    city: string;
    country: string;
    postalCode: string;
    timezone: string;
  };
  isp: string;
}
