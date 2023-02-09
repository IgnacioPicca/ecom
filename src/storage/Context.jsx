import { createContext } from "react";

export const context = createContext();

export function context(props) {
    return (
        <>
            {props.childen}
        </>
    )
}