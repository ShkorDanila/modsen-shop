import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IProductList } from '@/store/store';

import { Svg } from '../ControlsMenu/styled';
import * as styled from './styled';

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
                  <styled.ViewProductButton>View Product</styled.ViewProductButton>
                </styled.InfoSection>
              </styled.SliderImage>
            ))}
          </styled.Carousel>

          <styled.ButtonsCarousel>
            {sliderProducts.map((_, iterator) => (
              <styled.CarouselButton onClick={() => setCurrentIndex(iterator)}>
                {iterator === currentIndex ? (
                  <Svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <styled.CircleFill cx="9" cy="9" r="5" />
                  </Svg>
                ) : (
                  <Svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <styled.CircleStroke cx="9" cy="9" r="4" stroke="white" />
                  </Svg>
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
