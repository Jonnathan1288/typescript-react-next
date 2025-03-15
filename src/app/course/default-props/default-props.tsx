type ButtonProps = {
    title?: string;
};

export const DefaultProps = ({ title = "mmmm" }: ButtonProps) => {
    // const [count, setCount] = useState<number>(0);
    return <button onClick={() => {}}>{title} </button>;
};
