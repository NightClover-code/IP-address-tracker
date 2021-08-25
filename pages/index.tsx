import { NextPage } from 'next';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { seoConfig } from '../utils';
import dynamic from 'next/dynamic';

const HomePage: NextPage = () => {
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

export default HomePage;
