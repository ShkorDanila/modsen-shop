import { useEffect, useState } from 'react';

import { IPhotosProps } from '../ProductPhotoOverview';
import * as styled from './styled';

const MobileSlider = ({ urls }: IPhotosProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [urls]);

  function handleLeftClickArrow() {
    setCurrentIndex((current) =>
      current <= 0 ? urls.length - 1 : current - 1,
    );
  }
  function handleRightClickArrow() {
    setCurrentIndex((current) =>
      current >= urls.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <styled.ProductSliderWrapper aria-label="Image Slider">
      <styled.ArrowLeft onClick={handleLeftClickArrow} />
      <styled.Carousel>
        {urls.map((url, iterator) => (
          <styled.SliderImage
            key={iterator}
            currentIndex={currentIndex}
            image={url}
          ></styled.SliderImage>
        ))}
      </styled.Carousel>
      <styled.ArrowRight onClick={handleRightClickArrow} />
    </styled.ProductSliderWrapper>
  );
};

export default MobileSlider;
