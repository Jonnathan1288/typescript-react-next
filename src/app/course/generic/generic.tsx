// function identity(value: string) {
//     return value;
// }

// function identity(value: string | boolean) {
//     return value;
// }

// function identity<T>(value: T) {
//     return value;
// }

const identity = <T,>(value: T): T => value;

interface Box<T> {
    content: T;
}

const box1: Box<string> = { content: "hello" };
const box2: Box<boolean> = { content: true };

const getFirstElement = <T,>(arr: T[]): T => {
    return arr[0];
};

type ApiResponse<T> = {
    status: number;
    data: T;
};

const response1: ApiResponse<{ name: string; age: number }> = {
    status: 200,
    data: {
        name: "Javier",
        age: 22,
    },
};

const response2: ApiResponse<string> = {
    status: 200,
    data: "Javier",
};

export const GenericComponent = () => {
    identity<string>("hola");
    identity<boolean>(true);
    return (
        <>
            <div>GenericComponent</div>
            <span>{getFirstElement(["HII", "TEST"])}</span>
            <span>{getFirstElement([7, 3, 8])}</span>
        </>
    );
};

//https://www.ashbyhq.com/blog/engineering/generic-arrow-function-in-tsx
