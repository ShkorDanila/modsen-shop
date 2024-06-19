import React from 'react';
import { HomePageWrapper } from './styled';
import ProductSlider from '@/components/ProductSlider';
import { Footer } from '../Layout/styled';
import LatestCards from '@/components/LatestCards';

const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
        <ProductSlider></ProductSlider>
        <LatestCards></LatestCards>
    </HomePageWrapper>
  );
};
export default HomePage;
