import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleDeleteBtn } from "./StyleDeleteBtn";
import { StyleLi } from "./StyleLi";
import { StyleList } from "./StyleList";
import { StyleUl } from "./StyleUl";

export const List = () => {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <StyleList>
            <StyleUl>
                {todos.map(todo => {
                    return (
                        <StyleLi >
                            {todo.text}
                            <StyleDeleteBtn onClick={() => dispatch({type: 'DELETE_TASK', payload: todo.id})}>Удалить</StyleDeleteBtn>
                        </StyleLi>
                    );
                })}

            </StyleUl>
        </StyleList>
    );

    
}