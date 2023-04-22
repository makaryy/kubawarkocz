import Link from "next/link";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import { useState, useContext } from "react";
import VisibleContext from "@/utils/VisibleContext";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const { visibleSection } = useContext(VisibleContext);
    return (
        <nav className="w-full lg:w-fit lg:min-w-max text-center flex flex-col lg:sticky lg:top-0 lg:self-start">
            <HamburgerMenuIcon
                open={open}
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
                className="lg:hidden m-2"
            />
            <ul className={`${open ? "max-h-screen" : "max-h-0"} duration-500 overflow-hidden lg:max-h-max lg:p-4 lg:m-4`}>
                <li className={`text-red p-1 m-1 text-center ${visibleSection === "home" ? "text-red-500" : ""}`}>
                    <Link href="#home" scroll={false}>
                        Strona Główna
                    </Link>
                </li>
                <li className="text-red p-1 m-1 text-center">
                    <Link href="/">Strona Główna</Link>
                </li>
                <li className="text-red p-1 m-1 text-center">
                    <Link href="/">Strona Główna</Link>
                </li>
                <li className="text-red p-1 m-1 text-center">
                    <Link href="/">Strona Główna</Link>
                </li>
                <li className="text-red p-1 m-1 text-center">
                    <Link href="#tak" scroll={false}>
                        Strona Główna
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
