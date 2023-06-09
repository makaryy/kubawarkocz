import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Page = ({ children }: Props) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut" }}>
            {children}
        </motion.div>
    );
};

export default Page;
