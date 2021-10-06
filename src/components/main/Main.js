import React from "react";
import { Form } from "../form/Form";
import { List } from "../list/List";
import { StyleMain } from "./StyleMain";

export const Main = () => {
    return (
        <StyleMain>
            <Form />
            <List />
        </StyleMain>
    );
}