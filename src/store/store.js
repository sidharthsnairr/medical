import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import React from "react";

var store = configureStore({
    reducer:{
        todos: todoReducer
    }
});
export default store;