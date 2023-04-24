import { ReactNode, useState } from "react";

export interface CardProps {
    title: string;
    icon: ReactNode;
    desc: string;
}

const Card = ({ title, desc, icon }: CardProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={() => setOpen((prev) => !prev)}
            className={`relative w-64 h-72 p-2 m-2 rounded-md border-4  bg-white shadow-xl shadow-main hover:border-main text-center cursor-pointer transition-all duration-300 ${
                open ? "scale-100 border-main" : "scale-90 border-white"
            } `}>
            <div
                className={`w-full transition-all duration-300 flex flex-col gap-32 justify-center items-center rounded-md ${
                    open ? "opacity-0 h-0" : "h-full opacity-100"
                }`}>
                <span className="text-lg">
                    <div className="flex flex-col gap-12 items-center">
                        <h2>{title}</h2>
                        {icon}
                    </div>
                </span>
            </div>
            <div
                className={`w-full h-0 opacity-0 flex flex-col gap-32 justify-center items-center rounded-md transition-all duration-300 rotate-90  ${
                    open && "opacity-100 h-full -rotate-0"
                }`}>
                <span className="text-base">{desc}</span>
            </div>
            {/* {open && (
                <span
                    className={`absolute w-full h-full top-0 left-0 bg-gradient-to-br from-main via-light to-white -z-10 transition-all duration-300 ${
                        open ? "opacity-20" : "opacity-0"
                    }`}></span>
            )} */}
        </div>
    );
};

export default Card;
