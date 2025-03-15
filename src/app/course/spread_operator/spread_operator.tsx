import { ComponentPropsWithoutRef } from "react";

// type ButtonProps = ComponentPropsWithoutRef<"button"> & {
//     dart?: boolean;
//     variant?: "primary";
//     children?: boolean;
// };

type MainProps = ComponentPropsWithoutRef<"button">;

type ButtonProps = MainProps & {
    dart?: boolean;
    variant?: "primary";
    children?: boolean;
};

export const SpreadOperator = ({ onClick, ...rest }: ButtonProps) => {
    // const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        if (onClick) alert(" Hola estimados");
    };
    return (
        <button onClick={handleClick} {...rest}>
            Hola{" "}
        </button>
    );
};
