import { CardProps } from "@/utils/types";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Card = ({ title, desc, icon }: CardProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={() => setOpen((prev) => !prev)}
            className={`relative w-64 h-72 p-2 m-2 rounded-md border-2 bg-neutral-700/80 shadow-md hover:shadow-xl shadow-neutral-900 text-center cursor-pointer transition-all duration-300 overflow-hidden ${
                open ? "scale-100 border-rose-800" : "scale-90 border-transparent"
            } `}>
            <div
                className={`w-full transition-all duration-300 flex flex-col gap-12 text-lg justify-center items-center rounded-md ${
                    open ? "opacity-0 h-0" : "h-full opacity-100"
                }`}>
                <h2>{title}</h2>
                <span className="text-rose-800/70 text-6xl">{icon}</span>
                <MdExpandMore className="text-2xl " />
            </div>
            <div
                className={`w-full h-0 opacity-0 flex flex-col justify-center items-center rounded-md transition-all duration-300  ${
                    open && "opacity-100 h-full"
                }`}>
                <MdExpandLess className="text-2xl" />
                <span className="text-base">{desc}</span>
            </div>
        </div>
    );
};

export default Card;
