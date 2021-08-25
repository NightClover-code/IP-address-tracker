import { GetStaticProps, NextPage } from 'next';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { getGeolocation, seoConfig } from '../utils';
import dynamic from 'next/dynamic';
import { LocationData } from '../interfaces';
import { useContext, useEffect } from 'react';
import { LocationContext } from '../context';

interface HomePageProps {
  locationData: LocationData;
}

const HomePage: NextPage<HomePageProps> = ({ locationData }) => {
  const Map = dynamic(() => import('../components/Map'), { ssr: false });
  const { setLocationData } = useContext(LocationContext);

  useEffect(() => {
    setLocationData(locationData);
  }, [setLocationData, locationData]);

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

export const getStaticProps: GetStaticProps = async () => {
  const locationData = await getGeolocation('');

  return {
    props: {
      locationData,
    },
  };
};

export default HomePage;
