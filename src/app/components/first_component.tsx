import { useState } from "react";

export const FirstComponent = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => setCount((c) => c + 1);

    const handleDecrement = () => setCount((c) => c - 1);

    return (
        <>
            <span>value: {count}</span>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
};
