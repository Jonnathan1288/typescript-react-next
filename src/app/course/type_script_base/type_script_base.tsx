"use client";

import { useState } from "react";

export const Button = () => {
    const [fun, setFun] = useState<number>(0);

    const handleIncrement = () => setFun((f) => f + 1);
    const handleDecrement = () => setFun((f) => validate(f - 1));

    return (
        <>
            <button onClick={handleIncrement}>Increment </button>
            <button onClick={handleDecrement}>Decrement </button>

            <h2>{fun}</h2>
        </>
    );
};

function validate(value: number) {
    return value <= 0 ? 0 : value;
}
