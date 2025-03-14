type ColorType = "red" | "black" | "blue";
type UnionTypeProps = {
    title: string;
    subTitle?: string;
    color?: ColorType;
    backgroundColor?: ColorType;
};

export const UnionTypes = (props: UnionTypeProps) => {
    const { title, color } = props;
    return (
        <>
            <button>{title}</button>
        </>
    );
};
