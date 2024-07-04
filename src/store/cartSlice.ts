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

const cartInitial: IProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { value: cartInitial },
  reducers: {
    setCart: (state, action) => {
      console.log('Данные на входе ' + action.payload);

      state.value = action.payload;

      console.log('Данные на выходе ' + state.value);
    },
    addToCart: (state, action) => {
      if (
        state.value
          .map((product: IProduct) => product.id)
          .includes(action.payload.id)
      ) {
        return;
      }
      state.value.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter(
        (product: IProduct) => product.id != action.payload,
      );
    },
  },
});

export const { setCart } = cartSlice.actions;
export const { addToCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
