import React from 'react';

import LatestCards from '@/components/LatestCards';
import ProductSlider from '@/components/ProductSlider';

import { HomePageWrapper } from './styled';

const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <ProductSlider></ProductSlider>
      <LatestCards></LatestCards>
    </HomePageWrapper>
  );
};
export default HomePage;
