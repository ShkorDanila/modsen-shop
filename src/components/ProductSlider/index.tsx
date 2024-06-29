import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IProductList } from '@/store/productListSlice';

import * as styled from './styled';
import { ChosenMenuDotSvg } from '@/assets/ChosenMenuDotSvg';
import { MenuDotSvg } from '@/assets/MenuDotSvg';
import { Link } from 'react-router-dom';
import { StyledLink } from '@/utils/StyledLink';

const ProductSlider: React.FC<any> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderProducts, setSliderProducts] = useState<IProductList[]>([]);
  const productList = useSelector((state: any) => state.productList.value);

  useEffect(() => {
    if (productList.length > 0) {
      setSliderProducts(productList.slice(0, 5));
    }
  }, [productList]);

  return (
    <>
      {sliderProducts.length > 0 && (
        <styled.ProductSliderWrapper aria-label="Image Slider">
          <styled.Carousel>
            {sliderProducts.map((product, iterator) => (
              <styled.SliderImage
                key={iterator}
                currentIndex={currentIndex}
                image={product.image}
              >
                <styled.InfoSection>
                  <styled.ProductName>{product.title}</styled.ProductName>
                  <styled.ProductCost>{product.price}$</styled.ProductCost>
                  <StyledLink to={`/product/${product.id}`}>
                  <styled.ViewProductButton>
                    View Product
                  </styled.ViewProductButton>
                  </StyledLink>
                </styled.InfoSection>
              </styled.SliderImage>
            ))}
          </styled.Carousel>

          <styled.ButtonsCarousel>
            {sliderProducts.map((_, iterator) => (
              <styled.CarouselButton onClick={() => setCurrentIndex(iterator)}>
                {iterator === currentIndex ? (
                  <ChosenMenuDotSvg></ChosenMenuDotSvg>
                ) : (
                  <MenuDotSvg></MenuDotSvg>
                )}
              </styled.CarouselButton>
            ))}
          </styled.ButtonsCarousel>
        </styled.ProductSliderWrapper>
      )}
    </>
  );
};
export default ProductSlider;
