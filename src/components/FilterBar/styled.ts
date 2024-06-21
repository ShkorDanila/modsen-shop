import styled from 'styled-components';

import theme from '@/utils/static_theme';

export const FilterWrapper = styled.section``;

interface IFilterMenuState {
  isOpened: boolean;
}

export const FilterOptionsContainer = styled.div<IFilterMenuState>`
  display: grid;
  grid-auto-flow: row;
  gap: 0.4rem;
  width: 20%;
  @media (width <= ${theme.device_sizing.size.tablet}) {
    width: 90%;
  }

  ${(props) => !props.isOpened && 'display:none;'}
`;

export const FilterInput = styled.input`
  all: unset;
  border-bottom: solid ${(props) => props.theme.neutral_colours.grey} 1px;
  width: 100%;
  padding: 0.6rem;
  padding-right: 0;
  font-family: ${theme.typefaces.font_primary};

  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
  }

  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.body.small.size};
    font-weight: ${theme.typefaces.mobile.body.small.weight};
  }
`;

export const FilterInputContainer = styled.div`
  position: relative;
  width: 100%;
  @media (width <= ${theme.device_sizing.size.tablet}) {
    min-width: 100px;
  }
  @media (width > ${theme.device_sizing.size.tablet}) {
    min-width: 200px;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0;
  top: 35%;
`;

export const Dropdown = styled.select`
  all: unset;
  width: 100%;
  margin-top: 1rem;
  padding: 0.8rem;
  padding-right: 0;
  border: solid ${(props) => props.theme.neutral_colours.grey} 1px;
  border-radius: 0.3rem;

  font-family: ${theme.typefaces.font_primary};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
  }

  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.body.small.size};
    font-weight: ${theme.typefaces.mobile.body.small.weight};
  }

  color: ${(props) => props.theme.main_colours.black};
`;

export const StyledOption = styled.option`
  font-family: ${theme.typefaces.font_primary};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
  }

  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.body.small.size};
    font-weight: ${theme.typefaces.mobile.body.small.weight};
  }

  color: ${(props) => props.theme.main_colours.black};
`;

export const DualRanger = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 0.6rem;
  margin-bottom: 0.7rem;
  border-radius: 20px;
  position: relative;
  background-color: gray;
  user-select: none;
`;

export const StyledInputRange = styled.input`
  all: unset;
  top: 50%;
  bottom: 50%;
  position: absolute;
  width: 100%;
  user-select: none;
  pointer-events: none;
  z-index: 1;
  &::-webkit-slider-thumb {
    appearance: none;
    pointer-events: auto;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.main_colours.black};
  }
  &::-moz-slider-thumb {
    appearance: none;
    pointer-events: auto;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.main_colours.black};
  }
  margin: 0;
`;

interface IProgressBarValues {
  maxValue: number;
  highValue: number;
  lowValue: number;
}

export const ProgressBar = styled.span<IProgressBarValues>`
  pointer-events: none;
  user-select: none;
  position: absolute;
  background-color: ${(props) => props.theme.main_colours.black};
  left: ${(props) => (props.lowValue / props.maxValue) * 100}%;
  right: calc(100% - ${(props) => (props.highValue / props.maxValue) * 100}%);
  height: 3px;
`;

export const BottomSection = styled.div`
  display: grid;

  width: 100%;
  grid-template-columns: 1fr 1fr;
`;

export const StyledPriceHeader = styled.div`
  font-family: ${theme.typefaces.font_primary};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
  }

  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.body.small.size};
    font-weight: ${theme.typefaces.mobile.body.small.weight};
  }

  color: ${(props) => props.theme.main_colours.black};
`;

export const FilterCloseButton = styled.button`
  all: unset;
  font-family: ${theme.typefaces.font_primary};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
  }

  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.body.small.size};
    font-weight: ${theme.typefaces.mobile.body.small.weight};
  }
  display: flex;
  flex-direction: row-reverse;
  color: ${(props) => props.theme.main_colours.accent};
`;

export const FilterOpenButton = styled.button`
  all: unset;
  margin-left: 0.6rem;
  font-family: ${theme.typefaces.font_primary};
  @media (width > ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.pc.heading[5].size};
    font-weight: ${theme.typefaces.pc.heading[5].weight};
  }

  @media (width <= ${theme.device_sizing.size.tablet}) {
    font-size: ${theme.typefaces.mobile.body.small.size};
    font-weight: ${theme.typefaces.mobile.body.small.weight};
  }

  color: ${(props) => props.theme.main_colours.accent};
`;

export const FilterOpenContainer = styled.div<IFilterMenuState>`
  display: grid;
  place-items: center;
  width: fit-content;
  grid-auto-flow: column;

  ${(props) => props.isOpened && 'display: none;'}
`;

export const FilterCloseContainer = styled.div`
  display: grid;
  gap: 0.4rem;
  place-items: center;
  width: fit-content;
  grid-auto-flow: column;
`;
