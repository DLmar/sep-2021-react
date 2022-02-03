import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./car.slice";

export const store = configureStore({
    reducer:{
        cars: carReducer
    }
});