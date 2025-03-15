import { Dispatch, SetStateAction } from "react";

type ButtonProps = {
    setCount: Dispatch<SetStateAction<number>>;
};

export const Setters = ({ setCount }: ButtonProps) => {
    // const [count, setCount] = useState<number>(0);
    return <button onClick={() => setCount(11)}>Hola Function</button>;
};
