//import React, { useState } from "react";
import { StyleForm } from "./StyleForm";
import { StyleInput } from "./StyleInput";
import { StyleBtn } from "./StyleBtn";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../../store/todoReducer";

export const Form = () => {

    const text = useSelector(state => state.text.text);
    const dispatch = useDispatch();

    const clickHandler = (e) => {
        e.preventDefault();
        if (text !== '') {
            dispatch({
                type: 'ADD_TASK',
                payload: new Task(new Date(), text, false),
            });
            dispatch({
                type: 'UPDATE_TEXT',
                payload: '',
            })
        }
        

    }

    const inputHandler = (e) => {
        dispatch({
            type: 'UPDATE_TEXT',
            payload: e.target.value,
        })
    }

    return (
        <StyleForm class="create-item" onSubmit={clickHandler}>
            <StyleInput type="text" class="item-name"
                placeholder="Что вы хотите сделать?"
                onChange={inputHandler}
                value={text}
            />
            <StyleBtn class="create-item-btn"
                type="submit">Создать</StyleBtn>
        </StyleForm>
    );
}
