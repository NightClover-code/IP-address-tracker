import axios from 'axios';

const geolocationAPI = axios.create({
  baseURL: 'https://geo.ipify.org/api/v1',
});

export const getGeolocation = async (ipAddress: string) => {
  try {
    const { data } = await geolocationAPI.get('', {
      params: {
        apiKey: process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY,
        ipAddress,
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
