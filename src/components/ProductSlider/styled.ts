import styled from 'styled-components';

interface ISliderImage {
  image: string;
  currentIndex: number;
}

export const ProductSliderWrapper = styled.section`
  width: 100%;
  height: 50vh;
  border-radius: 20px;
  position: relative;
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
`;

export const LeftArrow = styled.button`
  all: unset;
  -webkit-tap-highlight-color: transparent;
  width: 20%;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  position: absolute;
  cursor: pointer;
  z-index: 10;
`;

export const RightArrow = styled.button`
  all: unset;
  -webkit-tap-highlight-color: transparent;
  width: 20%;
  height: 100%;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  right: 0;
  position: absolute;
  cursor: pointer;
  z-index: 10;
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  z-index: 1;
`;

export const SliderImage = styled.div<ISliderImage>`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  background-position: center;
  cursor: pointer;
  background-image: url(${(props) => props.image});
  translate: -${(props) => props.currentIndex * 100}%;
  transition: translate 300ms ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  place-self: center;
`;

export const ButtonsCarousel = styled.div`
  position: absolute;
  translate: -50%;
  display: grid;
  grid-auto-flow: column;
  gap: 0.25rem;
  bottom: 0.5rem;
  left: 50%;
`;

export const CarouselButton = styled.button`
  all: unset;
  -webkit-tap-highlight-color: transparent;
`;

export const ProductName = styled.h1`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-weight: medium;
  font-size: ${(props) => props.theme.typefaces.mobile.heading[1].size};
  line-height: ${(props) =>
    props.theme.typefaces.mobile.heading[1].line_height};
  color: white;
  margin-left: 0.3rem;
`;

export const ProductCost = styled.h1`
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
  font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
  color: white;
  margin-left: 0.3rem;
`;

export const ViewProductButton = styled.button`
  all: unset;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
  font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
  line-height: ${(props) =>
    props.theme.typefaces.mobile.body.small.line_height};
  color: white;
  margin-left: 0.3rem;
  margin-bottom: 0.4rem;
  padding: 0.3rem;
  border: white solid 1px;
  border-radius: 3px;
  z-index: 10;
  :hover {
    background-color: white;
    color: black;
  }
  :active {
    background-color: white;
    color: black;
  }
`;

export const InfoSection = styled.section`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  z-index: 10;
  display: none;
  ${SliderImage}:hover && {
    display: block;
  }
`;
