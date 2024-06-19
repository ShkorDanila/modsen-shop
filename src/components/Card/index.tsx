import React from 'react';
import { HoverEffectDiv, PriceHeader, ProductImage, StyledCard, TitleHeader } from './styled';
import { ISmallProduct } from '../LatestCards';


const Card:React.FC<ISmallProduct> = (product) => {

    return (
        <StyledCard>
            <ProductImage image={product.image}>
                <HoverEffectDiv>Add to cart</HoverEffectDiv>
            </ProductImage>
            <TitleHeader>{product.title}</TitleHeader>
            <PriceHeader>{product.price}$</PriceHeader>
        </StyledCard>
    )
}
export default Card;