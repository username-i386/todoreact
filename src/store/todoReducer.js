import { createAction, createReducer } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export class Task {
    id;
    date;
    text;
    isDone;
    constructor(date, text, isDone) {
        this.id = nanoid();
        this.date = date;
        this.text = text;
        this.isDone = isDone;
    }
}

const initialState = {
    todos: [],
}
const addTask = createAction('ADD_TASK');
const deleteTask = createAction('DELETE_TASK');
export const todoReducer = createReducer(initialState, {
    [addTask]: (state, action) => {
        state.todos = state.todos.concat(action.payload);
    },
    [deleteTask]: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
});