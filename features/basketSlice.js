import { createSlice } from '@reduxjs/toolkit'


const initialState = { items: [], }
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.items= [...state.items, action.payload]
    }, //keep what ever is in the backect then add payload
    removeFromBasket(state, action) {
      state.value--
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems =  (state) => state.basket.actions;


export default basketSlice.reducer;