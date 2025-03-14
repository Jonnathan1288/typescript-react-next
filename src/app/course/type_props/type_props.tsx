// 2
type ButtonProps = {
    text: string;
    subTitle?: string;
    color?: string;
};
export const ButtonProp: React.FC<ButtonProps> = ({ text, subTitle, color }) => {
    return (
        <>
            <button>{text}</button>
            {subTitle} - {color}
        </>
    );
};

// 4
// export const ButtonProp = ({ text, subTitle, color }: ButtonProps) => {
//     return (
//         <>
//             <button>{text}</button>
//             {subTitle} - {color}
//         </>
//     );
// };

//3
// export const ButtonProp = (props: ButtonProps) => {
//     const { text, subTitle, color } = props;
//     return (
//         <>
//             <button>{text}</button>
//             {subTitle} - {color}
//         </>
//     );
// };

// //2
// export const ButtonProp = (props: { value: string }) => {
//     return (
//         <>
//             <button>{props.value}</button>
//         </>
//     );
// };

// // 1
// export const ButtonProp = (props) => {
//     return (
//         <>
//             <button>{props.value}</button>
//         </>
//     );
// };
