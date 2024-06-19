import React, { useEffect, useState } from 'react';
import {
  ButtonsCarousel,
  Carousel,
  CarouselButton,
  CircleFill,
  CircleStroke,
  InfoSection,
  LeftArrow,
  ProductCost,
  ProductName,
  ProductSliderWrapper,
  RightArrow,
  SliderImage,
  ViewProductButton,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { IProductList } from '@/store/store';
import styled from 'styled-components';
import { Svg } from '../ControlsMenu/styled';

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
        <ProductSliderWrapper aria-label="Image Slider">
          <Carousel>
            {sliderProducts.map((product, iterator) => (
              <SliderImage
                key={iterator}
                currentIndex={currentIndex}
                image={product.image}
              >
                <InfoSection>
                  <ProductName>{product.title}</ProductName>
                  <ProductCost>{product.price}$</ProductCost>
                  <ViewProductButton>View Product</ViewProductButton>
                </InfoSection>
              </SliderImage>
            ))}
          </Carousel>

          <ButtonsCarousel>
            {sliderProducts.map((_, iterator) => (
              <CarouselButton onClick={() => setCurrentIndex(iterator)}>
                {iterator === currentIndex ? (
                  <Svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <CircleFill cx="9" cy="9" r="5" />
                  </Svg>
                ) : (
                  <Svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <CircleStroke cx="9" cy="9" r="4" stroke="white" />
                  </Svg>
                )}
              </CarouselButton>
            ))}
          </ButtonsCarousel>
        </ProductSliderWrapper>
      )}
    </>
  );
};
export default ProductSlider;
