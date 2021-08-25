import '../styles/css/default.css';
import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app';
import { LocationProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocationProvider>
      <Component {...pageProps} />
    </LocationProvider>
  );
}
export default MyApp;
