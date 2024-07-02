import React from 'react';

import { ISmallProduct } from '../LatestCards';
import {
  HoverEffectDiv,
  PriceHeader,
  ProductImage,
  StyledCard,
  TitleHeader,
} from './styled';
import { Link } from 'react-router-dom';
import { StyledLink } from '@/utils/StyledLink';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

const Card: React.FC<ISmallProduct> = (product) => {

  const dispatch = useDispatch()

  return (
    <StyledLink to={`/product/${product.id}`}>
    <StyledCard>
      <ProductImage image={product.image}>
        <HoverEffectDiv onClick={() => dispatch(addToCart(product))}>Add to cart</HoverEffectDiv>
      </ProductImage>
      <TitleHeader>{product.title}</TitleHeader>
      <PriceHeader>{product.price}$</PriceHeader>
    </StyledCard>
    </StyledLink>
  );
};
export default Card;
