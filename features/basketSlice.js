import { createSlice } from '@reduxjs/toolkit'


const initialState = { items: [], }
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      //keep what ever is in the backect then add payload
      state.items= [...state.items, action.payload]
    }, 

    removeFromBasket(state, action) {
      //find if the item im trying to remove is in there (is ithe "id" matching the payload id )
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      //create a copy of the basket
      let newBasket =[...state.items];

      //if its greater the 0 remove 1 otherwise give the warining
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in basket`
        );
      }

      //replace the existing basket the the new modified one
      state.items = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems =  (state) => state.basket.items;


//this is used to filter items with "id" so only the food in the menu you are interacting with "adds" of "removes"
export const selectBasketItemsWithId =  (state, id) => state.basket.items.filter((item) => item.id === id)  ;



export default basketSlice.reducer;