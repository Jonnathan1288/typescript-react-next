type ButtonProps = {
    onClick: (text: string) => void;
};

export const TypeFunction = ({ onClick }: ButtonProps) => {
    return <button onClick={() => onClick("Hello world")}>Hola Function</button>;
};
