import { MouseEvent, useEffect, useRef, useState } from "react";

type ButtonProps = {};

export type User = {
    name: string;
    age: number;
};

export const EventHook = ({}: ButtonProps) => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Block code
    }, [user]);

    const myButtonRef = useRef<HTMLButtonElement>(null);
    console.log(user?.name);

    myButtonRef.current?.onclick;

    const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
        alert("hola como esta ");

    return (
        <>
            <button onClick={handleClick} ref={myButtonRef}>
                Handle hook
            </button>
        </>
    );
};
