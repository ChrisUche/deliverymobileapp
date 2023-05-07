import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice";

export const store = configureStore({ reducer: {
    basket: basketReducer,
}, 
});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on