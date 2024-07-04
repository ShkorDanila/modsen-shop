import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterBurgerSvg } from '@/assets/FilterBurgerSvg';
import { SearchSvg } from '@/assets/SearchSvg';
import { setFilterOptions } from '@/store/filterOptionsSlice';
import { changeFilterState } from '@/store/isFilterOpenedSlice';

import * as styled from './styled';

interface IFilterContants {
  maxValueOfPrice: number;
  categoriesList: string[];
}

const FilterBar: React.FC<IFilterContants> = (constantProps) => {
  const dispatch = useDispatch();

  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(1000);
  const [minStoredVal, setMinStoredVal] = useState<number>(0);
  const [maxStoredVal, setMaxStoredVal] = useState<number>(1000);
  const [shopByOptions, setShopByOptions] = useState<any>([]);

  const maxOfPrice = constantProps.maxValueOfPrice;

  function handleFirstSlider(e: ChangeEvent<HTMLInputElement>) {
    setFirstValue(Number(e.currentTarget.value));
    if (firstValue > secondValue) {
      dispatch(setFilterOptions({ maxPrice: Math.floor(firstValue) }));
      setMaxStoredVal(Math.floor(firstValue));
      dispatch(setFilterOptions({ minPrice: Math.floor(secondValue) }));
      setMinStoredVal(Math.floor(secondValue));
      return;
    }
    dispatch(setFilterOptions({ minPrice: Math.floor(firstValue) }));
    setMinStoredVal(Math.floor(firstValue));
    dispatch(setFilterOptions({ maxPrice: Math.floor(secondValue) }));
    setMaxStoredVal(Math.floor(secondValue));
    return;
  }
  function handleSecondSlider(e: ChangeEvent<HTMLInputElement>) {
    setSecondValue(Number(e.currentTarget.value));
    if (firstValue > secondValue) {
      dispatch(setFilterOptions({ maxPrice: Math.floor(firstValue) }));
      setMaxStoredVal(Math.floor(firstValue));
      dispatch(setFilterOptions({ minPrice: Math.floor(secondValue) }));
      setMinStoredVal(Math.floor(secondValue));
      return;
    }
    dispatch(setFilterOptions({ minPrice: Math.floor(firstValue) }));
    setMinStoredVal(Math.floor(firstValue));
    dispatch(setFilterOptions({ maxPrice: Math.floor(secondValue) }));
    setMaxStoredVal(Math.floor(secondValue));
    return;
  }
  function handleShopByChange(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilterOptions({ shopBy: e.currentTarget.value }));
  }
  function handleSortByChange(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(setFilterOptions({ sortBy: e.currentTarget.value }));
  }

  useEffect(() => {
    dispatch(setFilterOptions({ minPrice: firstValue }));
    dispatch(setFilterOptions({ maxPrice: secondValue }));
  }, [maxOfPrice]);

  useEffect(() => {
    if (constantProps.categoriesList.length > 0) {
      setShopByOptions(
        constantProps.categoriesList.map((item, iterator) => {
          return (
            <styled.StyledOption key={iterator}>
              {item[0].toUpperCase() + item.slice(1)}
            </styled.StyledOption>
          );
        }),
      );
    }
  }, [constantProps]);

  return (
    <styled.FilterWrapper>
      <styled.FilterOpenContainer
        isOpened={useSelector((state: any) => state.isFilterOpened.value)}
        onClick={() => dispatch(changeFilterState(null))}
      >
        <FilterBurgerSvg />
        <styled.FilterOpenButton>Filter</styled.FilterOpenButton>
      </styled.FilterOpenContainer>
      <styled.FilterOptionsContainer
        isOpened={useSelector((state: any) => state.isFilterOpened.value)}
      >
        <styled.FilterInputContainer>
          <styled.FilterInput
            onChange={(e) => {
              dispatch(
                setFilterOptions({ searchInput: e.currentTarget.value }),
              );
            }}
            placeholder="Search..."
          ></styled.FilterInput>
          <styled.SearchIcon>
            <SearchSvg />
          </styled.SearchIcon>
        </styled.FilterInputContainer>

        <styled.Dropdown onChange={handleShopByChange}>
          <styled.StyledOption selected disabled value="" hidden>
            Shop By
          </styled.StyledOption>
          <styled.StyledOption>None</styled.StyledOption>
          {shopByOptions}
        </styled.Dropdown>

        <styled.Dropdown onChange={handleSortByChange}>
          <styled.StyledOption selected disabled value="" hidden>
            Sort By
          </styled.StyledOption>
          <styled.StyledOption>None</styled.StyledOption>
          <styled.StyledOption>Price</styled.StyledOption>
          <styled.StyledOption>Price {'(Desc)'}</styled.StyledOption>
          <styled.StyledOption>Rating</styled.StyledOption>
          <styled.StyledOption>Rating {'(Desc)'}</styled.StyledOption>
        </styled.Dropdown>

        <styled.DualRanger>
          <styled.ProgressBar
            highValue={useSelector(
              (state: any) => state.filterOptions.maxValue,
            )}
            lowValue={useSelector((state: any) => state.filterOptions.minValue)}
            maxValue={maxOfPrice}
          ></styled.ProgressBar>
          <styled.StyledInputRange
            type="range"
            value={firstValue}
            onChange={handleFirstSlider}
            step={0.1}
            min={0}
            max={1000}
          ></styled.StyledInputRange>
          <styled.StyledInputRange
            type="range"
            value={secondValue}
            onChange={handleSecondSlider}
            step={0.1}
            min={0}
            max={1000}
          ></styled.StyledInputRange>
        </styled.DualRanger>
        <styled.StyledPriceHeader>
          Price: {minStoredVal}$ - {maxStoredVal}$
        </styled.StyledPriceHeader>
        <styled.FilterCloseContainer
          onClick={() => {
            dispatch(changeFilterState(null));
          }}
        >
          <FilterBurgerSvg />
          <styled.FilterCloseButton>Filter</styled.FilterCloseButton>
        </styled.FilterCloseContainer>
      </styled.FilterOptionsContainer>
    </styled.FilterWrapper>
  );
};
export default FilterBar;
