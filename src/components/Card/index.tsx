import React from 'react';
import { ISmallProduct } from '../LatestCards';
import { HoverEffectDiv, PriceHeader, ProductImage, StyledCard, TitleHeader } from './styled';


const Card:React.FC<ISmallProduct> = (product) => {

    return (
        <StyledCard>
            <ProductImage image={product.image}>
                <HoverEffectDiv>Add to cart</HoverEffectDiv>
            </ProductImage>
            <TitleHeader>{product.title}</TitleHeader>
            <PriceHeader>{product.price}$</PriceHeader>
        </StyledCard>
    );
};
export default Card;