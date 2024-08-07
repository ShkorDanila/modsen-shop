import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { StyledLink } from '@/utils/StyledLink';

import Card from '../Card';
import {
  CardsWrapper,
  HeaderSection,
  HeaderShopLatest,
  LatestCardsWrapper,
  ViewAllButton,
  ViewAllWrapper,
} from './styled';

export interface ISmallProduct {
  image: string;
  title: string;
  price: number;
  id: number;
}

const LatestCards: React.FC = () => {
  const [latestProducts, setLatestProducts] = useState<ISmallProduct[]>([]);
  const productList = useSelector((state: any) => state.productList.value);

  useEffect(() => {
    if (productList.length > 0) {
      setLatestProducts(productList.slice(0, 6));
    }
  }, [productList]);

  return (
    <>
      {latestProducts.length > 0 && (
        <LatestCardsWrapper>
          <HeaderSection>
            <HeaderShopLatest>Shop The Latest</HeaderShopLatest>
            <ViewAllWrapper>
              <StyledLink to={'../shop'}>
                <ViewAllButton>View All</ViewAllButton>
              </StyledLink>
            </ViewAllWrapper>
          </HeaderSection>
          <CardsWrapper>
            {latestProducts.map((product) => (
              <Card {...product}></Card>
            ))}
          </CardsWrapper>
        </LatestCardsWrapper>
      )}
    </>
  );
};
export default LatestCards;
