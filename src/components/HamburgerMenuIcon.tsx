import { MouseEventHandler } from "react";

interface Props {
    open?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    className?: string;
}

const HamburgerMenuIcon = ({ open = false, onClick, className }: Props) => {
    return (
        <div className={`group self-end ${className ? className : ""}`} onClick={onClick}>
            <span className={`bg-dark block w-8 h-1 rounded my-2 duration-500 ${open ? "translate-y-3 rotate-[135deg]" : ""}`}></span>
            <span className={`bg-dark block w-8 h-1 rounded my-2 duration-500 ${open ? "scale-0" : ""}`}></span>
            <span className={`bg-dark block w-8 h-1 rounded my-2 duration-500 ${open ? "-translate-y-3 rotate-[-135deg]" : ""}`}></span>
        </div>
    );
};

export default HamburgerMenuIcon;
