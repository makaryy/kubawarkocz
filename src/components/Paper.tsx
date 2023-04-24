import { HTMLProps, ReactNode, forwardRef } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
}

const Paper = ({ children, className, ...props }: Props) => {
    return (
        <div
            {...props}
            className={`bg-transparent flex items-center justify-center flex-col rounded-2xl shadow-xl p-4 m-4 ${className ? className : ""}`}>
            {children}
        </div>
    );
};

export default Paper;
