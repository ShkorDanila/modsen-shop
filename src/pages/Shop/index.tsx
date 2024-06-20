import React from 'react';
import { HeaderShop, ProductsSection, ShopPageWrapper } from './styled';
import FilterBar from '@/components/FilterBar';
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
