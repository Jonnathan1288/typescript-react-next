import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const ComponentCProps = ({ onClick, title }: ButtonProps) => {
    // const [count, setCount] = useState<number>(0);
    return <button onClick={onClick}>{title} </button>;
};
