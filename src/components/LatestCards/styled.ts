import styled from 'styled-components';
import theme from '@/utils/static_theme';

export const LatestCardsWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  gap: 15px;
  margin-bottom: 30px;
`;

export const HeaderSection = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
`;

export const HeaderShopLatest = styled.h1`
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

export const ViewAllButton = styled.button`
  all: unset;
  cursor: pointer;
  justify-content: end;
  font-family: ${theme.typefaces.font_primary};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-weight: ${theme.typefaces.pc.heading[3].weight};
    font-size: ${theme.typefaces.pc.heading[3].size};
    line-height: ${theme.typefaces.pc.heading[4].line_height};
  }
  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-weight: ${theme.typefaces.mobile.heading[3].weight};
    font-size: ${theme.typefaces.mobile.heading[3].size};
    line-height: 22px;
  }

  color: ${theme.light.main_colours.accent};
`;

export const ViewAllWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center end;
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  column-gap: 3rem;
  place-items: center;
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
