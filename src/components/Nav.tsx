import Link from "next/link";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import { useState } from "react";
import { useRouter } from "next/router";
import { routes } from "@/utils/routes";
import Image from "next/image";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useRouter();
    return (
        <nav
            className={`relative text-center flex flex-col lg:flex-row lg:justify-end items-center lg:bg-nav pb-4 h-16 lg:h-32 transition-all duration-500 bg-transparent `}>
            <HamburgerMenuIcon
                open={open}
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
                className="lg:hidden mx-6 my-4 relative z-20"
            />
            <ul
                className={`${
                    open ? "max-h-screen bg-black bg-opacity-80 backdrop-blur-md pb-4" : "max-h-0 bg-transparent"
                } absolute pt-16  z-10 lg:static w-full transition-all duration-500 overflow-hidden flex flex-col lg:flex-row lg:justify-end lg:max-h-max lg:p-2 mb-4 lg:bg-transparent`}>
                {routes.map(({ href, title }) => (
                    <li
                        key={href}
                        className={`lg:mx-4 text-center  rounded-md hover:text-rose-600 ${
                            pathname === href ? "text-rose-900" : ""
                        } transition-all duration-300`}>
                        <Link href={href} scroll={false} className="block w-full h-full uppercase p-4" onClick={() => setOpen(false)}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
