import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from "./productsSlice";
import { checkoutReducer } from "./checkoutSlice";


export const myStore =configureStore({ 
    reducer:{
        products:productsReducer,
        checkout:checkoutReducer
    }
})