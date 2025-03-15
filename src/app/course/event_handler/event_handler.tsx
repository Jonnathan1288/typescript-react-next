import { MouseEvent } from "react";

type ButtonProps = {};

export const EventHandler = ({}: ButtonProps) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
        alert("hola como esta ");

    return (
        <>
            <button onClick={handleClick}>Handle</button>
        </>
    );
};
