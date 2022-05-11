import { configureStore } from "@reduxjs/toolkit";
import cloReducer from "./slices/clothes";

export const store = configureStore({
    reducer:{
        clo:cloReducer,
    },
});