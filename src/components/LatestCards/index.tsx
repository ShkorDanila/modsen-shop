import React, { useEffect, useState } from 'react';
import { CardsWrapper, HeaderSection, HeaderShopLatest, LatestCardsWrapper, ViewAllButton, ViewAllWrapper } from './styled';
import Card from '../Card';
import { useSelector } from 'react-redux';

export interface ISmallProduct {
    image: string;
    title: string;
    price: number;
}

const LatestCards:React.FC = () => {

    const [latestProducts, setLatestProducts] = useState<ISmallProduct[]>([])
    const productList = useSelector((state: any) => state.productList.value);

    useEffect(() => {
        if (productList.length > 0) {
            setLatestProducts(productList.slice(0, 7));
        }
      }, [productList]);

    return (
        <>
      {latestProducts.length > 0 && (
        <LatestCardsWrapper>
            <HeaderSection>
                <HeaderShopLatest>Shop The Latest</HeaderShopLatest>
                <ViewAllWrapper>
                    <ViewAllButton>View All</ViewAllButton>
                </ViewAllWrapper>
            </HeaderSection>
            <CardsWrapper>
                { latestProducts.map((product) => <Card {...product}></Card>)}
            </CardsWrapper>
        </LatestCardsWrapper>
      )
    }
    </>
    )
}
export default LatestCards;