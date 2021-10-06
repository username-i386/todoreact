import { configureStore } from "@reduxjs/toolkit";
import { textReducer } from "./textReducer";
import { todoReducer } from "./todoReducer";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        text: textReducer,
    },
});