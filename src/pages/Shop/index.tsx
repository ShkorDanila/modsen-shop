import React from 'react';

import FilterBar from '@/components/FilterBar';

import { HeaderShop, ProductsSection, ShopPageWrapper } from './styled';
const ShopPage: React.FC = () => {
  return (
    <ShopPageWrapper>
      <HeaderShop>Shop</HeaderShop>
      <ProductsSection>
        <FilterBar></FilterBar>
      </ProductsSection>
    </ShopPageWrapper>
  );
};
export default ShopPage;
