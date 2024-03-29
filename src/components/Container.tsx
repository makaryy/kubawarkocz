import { ReactNode } from "react";
import Nav from "./Nav";

interface Props {
    children: ReactNode;
}

const Container = ({ children }: Props) => {
    return <div className="max-w-screen-lg w-full m-auto bg-bg min-h-screen block relative">{children}</div>;
};

export default Container;
