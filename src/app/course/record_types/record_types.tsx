import React from "react";

type ButtonProps = {
    // userAges: Record<string, number>;
    userAges: Record<"pepe" | "lucho" | "moreno", number>;
    style: React.CSSProperties;
};

export const RecordTypes = ({ userAges, style }: ButtonProps) => {
    return (
        <>
            <button style={style}>name : </button>
        </>
    );
};
