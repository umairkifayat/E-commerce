import { configureStore } from "@reduxjs/toolkit";
import productSlicereducer from "../reducers/productSlice";




export const store = configureStore({
reducer :productSlicereducer
})