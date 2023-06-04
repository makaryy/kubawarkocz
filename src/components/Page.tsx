import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Page = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0, originY: 0 }}
            animate={{ scale: 1, opacity: 1, originY: 0 }}
            exit={{ scale: 0.8, opacity: 0, originY: 0 }}
            transition={{ ease: "easeOut" }}>
            {children}
        </motion.div>
    );
};

export default Page;
