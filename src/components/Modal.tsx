import { ReactNode, useState, MouseEvent } from "react";

interface Props {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
}
const Modal = ({ isOpen, children, onClose }: Props) => {
    const [open, setOpen] = useState(isOpen);

    const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
            setOpen(false);
        }
    };

    if (!open) return <></>;
    return (
        <div
            className="flex justify-center items-center top-0 left-0 fixed h-screen w-screen bg-black bg-opacity-90 backdrop-blur-sm z-50"
            onClick={handleClickOutside}>
            {children}
        </div>
    );
};

export default Modal;
