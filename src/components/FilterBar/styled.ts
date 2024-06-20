import theme from '@/utils/static_theme';
import styled from 'styled-components';

export const FilterWrapper = styled.section``;

export const FilterOptionsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 0.4rem;
  width: 20%;
  @media (width <= ${theme.device_sizing.size.tablet}) {
    width: 100%;
  }
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

export const SortByDropdown = styled.select`
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
    background-color: black;
  }
  &::-moz-slider-thumb {
    appearance: none;
    pointer-events: auto;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: black;
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
  background-color: black;
  right: 60%;
  left: 30%;
  left: ${(props) => props.lowValue / props.maxValue * 100}%;
  right: calc(100% - ${(props) => props.highValue / props.maxValue * 100}% );
  height: 3px;
`;

export const BottomSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
`

export const StyledPriceHeader = styled.div`
`