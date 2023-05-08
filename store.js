import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice";
import restaurantReducer from "./features/restaurantSlice";

export const store = configureStore({ reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
}, 
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on