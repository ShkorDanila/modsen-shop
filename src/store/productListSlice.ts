import { createSlice } from '@reduxjs/toolkit';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const productListInitial: IProduct[] = [];

export const productListSlice = createSlice({
  name: 'productList',
  initialState: { value: productListInitial },
  reducers: {
    setProductList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProductList } = productListSlice.actions;
