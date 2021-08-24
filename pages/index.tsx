import type { NextPage } from 'next';
import SEO from '../components/SEO';
import { seoConfig } from '../utils';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfig} />
    </>
  );
};

export default HomePage;
