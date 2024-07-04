import { createSlice } from '@reduxjs/toolkit';

interface IFilterOptions {
    sortBy?: string;
    shopBy?: string;
    maxPrice?: number;
    minPrice?: number;
    searchInput?: string;
}

const filterOptionsInitial: IFilterOptions =  {minPrice: 0, maxPrice: 1000};

export const filterOptionsSlice = createSlice({
  name: 'filterOptions',
  initialState: {value: filterOptionsInitial},
  reducers: {
    setFilterOptions: (state, action) => {
        

        if(action.payload.sortBy ){
            state.value.sortBy = action.payload.sortBy == "None" ? undefined : action.payload.sortBy
        }

        if(action.payload.shopBy){
            state.value.shopBy = action.payload.shopBy == "None" ? undefined : action.payload.shopBy
        }
        
        if(action.payload.maxPrice){
            state.value.maxPrice = action.payload.maxPrice
        }

        if(action.payload.minPrice){
            state.value.minPrice = action.payload.minPrice
        }

        if(action.payload.searchInput && action.payload.searchInput != ""){
            state.value.searchInput = action.payload.searchInput
        }
        
        },
        
  },
});

export const { setFilterOptions } = filterOptionsSlice.actions;
