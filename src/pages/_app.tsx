import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { LastPhotoContext } from "@/utils/context";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const { asPath } = useRouter();
    const [lastViewedPhoto, setLastViewedPhoto] = useState<null | number>(null);
    return (
        <>
            <Nav />
            <LastPhotoContext.Provider value={{ lastViewedPhoto, setLastViewedPhoto }}>
                <AnimatePresence mode="wait" initial={false}>
                    <Component {...pageProps} key={asPath} />;
                </AnimatePresence>
            </LastPhotoContext.Provider>
        </>
    );
}
