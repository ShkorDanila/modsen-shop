import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  BottomSection,
  DualRanger,
  FilterInput,
  FilterInputContainer,
  FilterOptionsContainer,
  FilterWrapper,
  ProgressBar,
  SearchIcon,
  SortByDropdown,
  StyledInputRange,
  StyledOption,
  StyledPriceHeader,
} from './styled';
import { Path, Svg } from '../ControlsMenu/styled';
const FilterBar: React.FC = () => {

  const [firstValue, setFirstValue] = useState<number>(0)
  const [secondValue, setSecondValue] = useState<number>(0)
  const [maxOfPrice, setMaxOfPrice] = useState<number>(100)
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)

  function handleFirstSlider (e: ChangeEvent<HTMLInputElement>) {
    setFirstValue(Number(e.currentTarget.value))
    if(firstValue > secondValue) {
        setMinValue(secondValue)
        setMaxValue(firstValue)
        return;
    }
        setMinValue(firstValue)
        setMaxValue(secondValue)
        return;
  }
  function handleSecondSlider (e: ChangeEvent<HTMLInputElement>) {
    setSecondValue(Number(e.currentTarget.value))
    if(firstValue > secondValue) {
        setMinValue(secondValue)
        setMaxValue(firstValue)
        return;
    }
        setMinValue(firstValue)
        setMaxValue(secondValue)
        return;
  }

  useEffect(() => {
    setFirstValue(maxOfPrice*0.25)
    setSecondValue(maxOfPrice*0.75)
    setMinValue(maxOfPrice*0.25)
    setMaxValue(maxOfPrice*0.75)
  }, [maxOfPrice])
  

  return (
    <FilterWrapper>
      <FilterOptionsContainer>
        <FilterInputContainer>
          <FilterInput placeholder="Search..."></FilterInput>
          <SearchIcon>
            <Svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.6431 13.9578L19.8645 18.1826C20.053 18.3922 20.0437 18.713 19.8434 18.9113L19.1047 19.6507C19.0056 19.7507 18.8707 19.8069 18.73 19.8069C18.5893 19.8069 18.4544 19.7507 18.3553 19.6507L14.1339 15.4259C14.0172 15.309 13.9112 15.1817 13.8173 15.0457L13.0258 13.9895C11.7162 15.0361 10.0898 15.606 8.41388 15.6055C4.96034 15.6175 1.95934 13.2333 1.18757 9.86439C0.415791 6.49551 2.07921 3.04106 5.19304 1.54616C8.30686 0.0512672 12.0401 0.914898 14.1825 3.62576C16.3249 6.33662 16.3047 10.1712 14.1339 12.8594L15.1893 13.5881C15.3541 13.6937 15.5063 13.8177 15.6431 13.9578ZM3.13727 8.2119C3.13727 11.1285 5.49976 13.4929 8.41405 13.4929C9.81354 13.4929 11.1557 12.9365 12.1453 11.9461C13.1349 10.9557 13.6908 9.6125 13.6908 8.2119C13.6908 5.29531 11.3283 2.93094 8.41405 2.93094C5.49976 2.93094 3.13727 5.29531 3.13727 8.2119Z"
                fill="black"
              />
              <path
                d="M19.8645 18.1826L20.1433 17.9318L20.1367 17.9245L20.1298 17.9175L19.8645 18.1826ZM15.6431 13.9578L15.3747 14.2198L15.3778 14.2229L15.6431 13.9578ZM19.8434 18.9113L19.5796 18.6448L19.5781 18.6463L19.8434 18.9113ZM19.1047 19.6507L18.8394 19.3856L18.8383 19.3867L19.1047 19.6507ZM18.3553 19.6507L18.6217 19.3867L18.6206 19.3856L18.3553 19.6507ZM14.1339 15.4259L13.8685 15.6909L13.8686 15.691L14.1339 15.4259ZM13.8173 15.0457L14.1259 14.8327L14.1218 14.8267L14.1174 14.8208L13.8173 15.0457ZM13.0258 13.9895L13.3259 13.7646L13.0939 13.455L12.7917 13.6966L13.0258 13.9895ZM8.41388 15.6055L8.41399 15.2305L8.41258 15.2305L8.41388 15.6055ZM1.18757 9.86439L1.5531 9.78065L1.18757 9.86439ZM5.19304 1.54616L5.03074 1.2081L5.19304 1.54616ZM14.1825 3.62576L13.8882 3.85828L14.1825 3.62576ZM14.1339 12.8594L13.8422 12.6238L13.5882 12.9383L13.9208 13.168L14.1339 12.8594ZM15.1893 13.5881L14.9761 13.8969L14.987 13.9039L15.1893 13.5881ZM20.1298 17.9175L15.9083 13.6928L15.3778 14.2229L19.5992 18.4476L20.1298 17.9175ZM20.1072 19.1779C20.4498 18.8387 20.4657 18.2902 20.1433 17.9318L19.5857 18.4334C19.6404 18.4942 19.6377 18.5873 19.5796 18.6448L20.1072 19.1779ZM19.3699 19.9157L20.1087 19.1764L19.5781 18.6463L18.8394 19.3856L19.3699 19.9157ZM18.73 20.1819C18.9708 20.1819 19.2015 20.0856 19.371 19.9146L18.8383 19.3867C18.8096 19.4157 18.7706 19.4319 18.73 19.4319V20.1819ZM18.089 19.9146C18.2585 20.0856 18.4892 20.1819 18.73 20.1819V19.4319C18.6894 19.4319 18.6504 19.4157 18.6217 19.3867L18.089 19.9146ZM13.8686 15.691L18.0901 19.9157L18.6206 19.3856L14.3992 15.1609L13.8686 15.691ZM13.5087 15.2587C13.6154 15.4133 13.7358 15.5579 13.8685 15.6909L14.3993 15.161C14.2985 15.06 14.207 14.9501 14.1259 14.8327L13.5087 15.2587ZM12.7257 14.2144L13.5172 15.2706L14.1174 14.8208L13.3259 13.7646L12.7257 14.2144ZM8.41377 15.9805C10.1749 15.981 11.8838 15.3822 13.2599 14.2824L12.7917 13.6966C11.5485 14.69 10.0048 15.2309 8.41399 15.2305L8.41377 15.9805ZM0.822036 9.94813C1.63292 13.4877 4.78612 15.9931 8.41518 15.9805L8.41258 15.2305C5.13456 15.2419 2.28576 12.9788 1.5531 9.78065L0.822036 9.94813ZM5.03074 1.2081C1.7588 2.77891 0.0111622 6.40859 0.822036 9.94813L1.5531 9.78065C0.820419 6.58244 2.39963 3.30321 5.35533 1.88422L5.03074 1.2081ZM14.4767 3.39324C12.2256 0.544832 8.30277 -0.362744 5.03074 1.2081L5.35533 1.88422C8.31095 0.465279 11.8545 1.28496 13.8882 3.85828L14.4767 3.39324ZM14.4257 13.095C16.7065 10.2705 16.7277 6.24156 14.4767 3.39324L13.8882 3.85828C15.922 6.43168 15.9029 10.0719 13.8422 12.6238L14.4257 13.095ZM15.4024 13.2796L14.347 12.5508L13.9208 13.168L14.9762 13.8967L15.4024 13.2796ZM15.9114 13.6959C15.7548 13.5354 15.5804 13.3933 15.3915 13.2724L14.987 13.9039C15.1278 13.9941 15.2579 14.1001 15.3747 14.2198L15.9114 13.6959ZM8.41405 13.1179C5.70715 13.1179 3.51227 10.9217 3.51227 8.2119H2.76227C2.76227 11.3353 5.29238 13.8679 8.41405 13.8679V13.1179ZM11.88 11.681C10.9607 12.6011 9.71398 13.1179 8.41405 13.1179V13.8679C9.91309 13.8679 11.3507 13.2719 12.4106 12.2112L11.88 11.681ZM13.3158 8.2119C13.3158 9.51314 12.7993 10.761 11.88 11.681L12.4106 12.2112C13.4704 11.1504 14.0658 9.71186 14.0658 8.2119H13.3158ZM8.41405 3.30594C11.1209 3.30594 13.3158 5.50213 13.3158 8.2119H14.0658C14.0658 5.08848 11.5357 2.55594 8.41405 2.55594V3.30594ZM3.51227 8.2119C3.51227 5.50213 5.70715 3.30594 8.41405 3.30594V2.55594C5.29238 2.55594 2.76227 5.08848 2.76227 8.2119H3.51227Z"
                fill="white"
              />
            </Svg>
          </SearchIcon>
        </FilterInputContainer>

        <SortByDropdown>
          <StyledOption selected disabled value="" hidden>
            Sort By
          </StyledOption>
          <StyledOption>None</StyledOption>
          <StyledOption>Price</StyledOption>
          <StyledOption>Price {'(Desc)'}</StyledOption>
        </SortByDropdown>

        <DualRanger>
          <ProgressBar highValue={maxValue} lowValue={minValue} maxValue={maxOfPrice}></ProgressBar>
          <StyledInputRange type="range" value={firstValue} onChange={handleFirstSlider} min={0} max={100}></StyledInputRange>
          <StyledInputRange type="range" value={secondValue} onChange={handleSecondSlider} min={0} max={100}></StyledInputRange>
        </DualRanger>
        <BottomSection>
            <StyledPriceHeader>Price: {minValue}$ - {maxValue}$</StyledPriceHeader>
        </BottomSection>
      </FilterOptionsContainer>
    </FilterWrapper>
  );
};
export default FilterBar;
