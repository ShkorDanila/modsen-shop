import React from 'react';
import { HomePageWrapper } from './styled';
import ProductSlider from '@/components/ProductSlider';
import { Footer } from '../Layout/styled';

const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <ProductSlider></ProductSlider>
    </HomePageWrapper>
  );
};
export default HomePage;
