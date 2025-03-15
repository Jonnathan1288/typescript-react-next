let someValue: unknown = "Hello";

let stringLength = (someValue as string).length;

let user = { id: 1, name: "juan" };

type User = {
    id: number;
    name: string;
};

const newUser = user as User;

// create a tuple
const colors = ["red", "green", "blue"] as const;

export const AsComponent = () => {
    const inputElement = document.getElementById("username") as HTMLInputElement;

    return (
        <>
            <input type="text" id="username" />
            <div>As Course</div>
            <div>{newUser.id}</div>
            <button>{stringLength}</button>
        </>
    );
};
// ZOD --> TO VALIDATE DATA NPM
