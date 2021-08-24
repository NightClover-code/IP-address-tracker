import { NextPage } from 'next';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { seoConfig } from '../utils';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfig} />
      <div className="app__container">
        <Header />
      </div>
    </>
  );
};

export default HomePage;
