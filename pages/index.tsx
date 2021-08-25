import { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { getGeolocation, seoConfig } from '../utils';
import dynamic from 'next/dynamic';
import { LocationData } from '../interfaces';

interface HomePageProps {
  locationData: LocationData;
}

const HomePage: NextPage<HomePageProps> = ({ locationData }) => {
  const Map = dynamic(() => import('../components/Map'), { ssr: false });

  return (
    <>
      <SEO {...seoConfig} />
      <div className="app__container">
        <Header />
        <Map />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const locationData = await getGeolocation('');

  return {
    props: {
      locationData,
    },
  };
};

export default HomePage;
