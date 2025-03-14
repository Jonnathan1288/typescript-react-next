import React from "react";

type ButtonProps = {
    title: string;
    style: React.CSSProperties;
};

export const CssProperties = ({ style, title }: ButtonProps) => {
    return (
        <>
            <button style={style}>{title}</button>
        </>
    );
};

// type ButtonProps = {
//     title: string;
//     backgroundColor?: string;
//     color: "red" | "black" | "blue";
// };

// export const CssProperties = ({ title, backgroundColor, color }: ButtonProps) => {
//     return (
//         <>
//             <button style={{ backgroundColor, color }}>{title}</button>
//         </>
//     );
// };
