import styled from 'styled-components';

interface IProductImage {
  image: string;
}

export const StyledCard = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0.5rem;
  width: 100%;
  display: grid;
  border-radius: 15px;
  grid-auto-flow: row;
  background-color: white;
  @media (width > ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 25rem;
    height: 30rem;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 8rem;
    height: 14rem;
  }
`;

export const ProductImage = styled.div<IProductImage>`
  -webkit-tap-highlight-color: transparent;
  cursor: help;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (width > ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 100%;
    height: 25rem;
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptopL}) {
    width: 100%;
    height: 10rem;
  }
`;

export const TitleHeader = styled.h3`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-family: ${(props) => props.theme.typefaces.font_primary};
  @media (width > ${(props) => props.theme.device_sizing.size.laptopL}) {
    font-weight: ${(props) => props.theme.typefaces.pc.heading[3].weight};
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.laptopL}) {
    font-weight: ${(props) => props.theme.typefaces.mobile.heading[3].weight};
    font-size: ${(props) => props.theme.typefaces.mobile.heading[3].size};
  }

  color: black;
`;

export const PriceHeader = styled.h3`
  margin: 0;
  font-family: ${(props) => props.theme.typefaces.font_primary};
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    line-height: ${(props) => props.theme.typefaces.pc.heading[3].line_height};
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    line-height: ${(props) =>
      props.theme.typefaces.mobile.body.small.line_height};
  }

  color: ${(props) => props.theme.main_colours.accent};
`;

export const HoverEffectDiv = styled.button`
  all: unset;
  top: 0.5rem;
  cursor: pointer;
  right: 0.5rem;
  background-color: ${(props) => props.theme.main_colours.black};
  color: ${(props) => props.theme.main_colours.white};
  position: absolute;
  padding: 0.3rem;
  border: black solid 1px;
  border-radius: 3px;

  font-family: ${(props) => props.theme.typefaces.font_primary};
  @media (width > ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.pc.heading[1].weight};
    font-size: ${(props) => props.theme.typefaces.pc.heading[3].size};
    line-height: ${(props) => props.theme.typefaces.pc.heading[3].line_height};

    translate: 200%;
    ${StyledCard}:hover && {
      translate: none;
      transition: translate 0.3s ease-in-out;
    }
    :hover {
      background-color: ${(props) => props.theme.main_colours.white};
      color: ${(props) => props.theme.main_colours.black};
      transition: 0.3s ease-in-out;
    }
  }
  @media (width <= ${(props) => props.theme.device_sizing.size.tablet}) {
    font-weight: ${(props) => props.theme.typefaces.mobile.body.small.weight};
    font-size: ${(props) => props.theme.typefaces.mobile.body.small.size};
    line-height: ${(props) =>
      props.theme.typefaces.mobile.body.small.line_height};

    :active {
      background-color: ${(props) => props.theme.main_colours.white};
      color: ${(props) => props.theme.main_colours.black};
      transition: 0.01s ease-in-out;
    }
  }
`;
