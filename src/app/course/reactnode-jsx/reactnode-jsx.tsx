import { JSX } from "react";

type ButtonProps = {
    // children: React.ReactNode;
    // children: JSX.Element;
    children: JSX.Element[];
};

export const ReactNodeJsx = ({}: ButtonProps) => {
    return <button>Hola Function</button>;
};
