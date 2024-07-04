import styled from "styled-components";

export const MobileSliderWrapper = styled.div`

    @media(width > ${props => props.theme.device_sizing.size.tablet}) {
        display: none;
    }
    display: relative;
    width: 100%;
    margin-bottom: 20px;
`

export const ArrowLeft = styled.button`
    all: unset;
    position: absolute;
    cursor: pointer;
    z-index: 5;
    left: 0;
    width: 50%;
    height: 100%;
`

export const ArrowRight = styled.button`
    all: unset;
    position: absolute;
    cursor: pointer;
    z-index: 5;
    right: 0;
    width: 50%;
    height: 100%;
`
export const ProductSliderWrapper = styled.section`
  @media(width > ${props => props.theme.device_sizing.size.tablet}) {
        display: none;
  }
  width: 100%;
  height: 40vh;
  border-radius: 20px;
  position: relative;
  background-color: white;
  border-radius: 30px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
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
  background-image: url(${(props) => props.image});
  translate: -${(props) => props.currentIndex * 100}%;
  transition: translate 300ms ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  place-self: center;
`;

interface ISliderImage {
    image: string;
    currentIndex: number;
  }