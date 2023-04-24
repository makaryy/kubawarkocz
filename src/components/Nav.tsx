import Link from "next/link";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import { useState } from "react";
import { useRouter } from "next/router";
import { routes } from "@/utils/routes";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useRouter();
    return (
        <nav className="text-center flex flex-col items-center bg-white border-b border-main mb-4 shadow-md shadow-main ">
            <HamburgerMenuIcon
                open={open}
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
                className="lg:hidden m-2"
            />
            <div className="w-full lg:w-fit relative m-auto">
                <ul
                    className={`${
                        open ? "max-h-screen" : "max-h-0"
                    } absolute top-0 z-50 lg:static bg-white w-full transition-all duration-500 overflow-hidden flex flex-col lg:flex-row lg:max-h-max lg:p-2 lg:m-2 mb-4 shadow-md shadow-main lg:shadow-none `}>
                    {routes.map(({ href, title }) => (
                        <li
                            key={href}
                            className={`p-4 mx-4 text-center  rounded-md  ${
                                pathname === href ? "shadow-md shadow-main text-main" : "text-dark hover:shadow-md hover:shadow-light"
                            } transition-all duration-300`}>
                            <Link href={href} scroll={false} className="uppercase" onClick={() => setOpen(false)}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
