import React from 'react';

import IntroSection from '../../components/home/IntroSection';
import NewsSection from '../../components/home/NewsSection';
import PerformanceSection from '../../components/home/PerformanceSection';
import FossSection from '../../components/home/FossSection';
import FaqSection from '../../components/home/FaqSection';
import SponsorsSection from '../../components/home/SponsorSection';

const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <NewsSection />
      <PerformanceSection />
      <FossSection />
      <FaqSection />
      <SponsorsSection />
    </div>
  );
};

export default Home;
