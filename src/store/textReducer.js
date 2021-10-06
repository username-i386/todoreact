import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    text: '',
}

const updateText = createAction('UPDATE_TEXT');
export const textReducer = createReducer(initialState, {
    [updateText]: (state, action) => {
        state.text = action.payload;
    }
});