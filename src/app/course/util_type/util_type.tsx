import { useRef, useState } from "react";

type ButtonProps = {};

// export type UserWithOutPassword = {
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };

export type User = {
    name: string;
    age: number;
    email: string;
    password: string;
};

type Status = "Active" | "Inactive" | "Pending";

type AllowedStatus = Exclude<Status, "Pending">;

// Use omite
type UserWithOutPassword = Omit<User, "password">;

// Became to optional
type UpdateUser = Partial<User>;

// Choose attributes
type UserPublicData = Pick<User, "password" | "email">;

type OptionalUserWithOutPassword = Partial<UserWithOutPassword>;

type OptionalUserWithOutPasswordAndEmail = Partial<Omit<User, "password" | "email">>;

export const UtilType = ({}: ButtonProps) => {
    const [user, setUser] = useState<User | null>(null);

    const myButtonRef = useRef<HTMLButtonElement>(null);

    function sendData() {}

    const sendData1 = () => {};

    return (
        <>
            <button ref={myButtonRef}>Handle hook1</button>
        </>
    );
};
