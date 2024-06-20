import theme from '@/utils/static_theme';
import styled from 'styled-components';

export const ShopPageWrapper = styled.div`
  @media (width > ${theme.device_sizing.size.tablet}) {
    margin-top: 4rem;
  }

  width: 100%;
  height: 100%;
  background-color: transparent;
  display: grid;
  gap: 20px;
  grid-auto-flow: row;
`;

export const HeaderShop = styled.h1`
  font-family: ${theme.typefaces.font_primary};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-weight: ${theme.typefaces.pc.heading[1].weight};
    font-size: ${theme.typefaces.pc.heading[1].size};
  }
  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-weight: ${theme.typefaces.mobile.heading[2].weight};
    font-size: ${theme.typefaces.mobile.heading[2].size};
    line-height: ${theme.typefaces.mobile.heading[2].line_height};
  }
  color: ${(props) => props.theme.main_colours.black};
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  column-gap: 3rem;
  row-gap: 2rem;
  @media (width > ${theme.device_sizing.size.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (width <= ${theme.device_sizing.size.tablet}) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProductsSection = styled.section`
  display: grid;
  @media (width > ${theme.device_sizing.size.tablet}) {
    grid-auto-flow: column;
  }
  @media (width <= ${theme.device_sizing.size.tablet}) {
    grid-auto-flow: row;
  }
`;
