import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import cloudinary from "@/utils/cloudinary";
import { ICloudinarySearchResult, IImage } from "@/utils/types";
import { MdArrowForward, MdArrowBack, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useDisplayedImage } from "@/utils/hooks";
import { useEffect } from "react";
import Modal from "@/components/Modal";
import Page from "@/components/Page";

interface Props {
    currentPhoto: IImage;
    lastId: number;
}

const DisplayedImage = ({ currentPhoto, lastId }: Props) => {
    const { handleBack, handleClose, handleForward, handleTouchEnd, handleTouchMove, handleTouchStart, lastViewedPhoto, nextPhoto } =
        useDisplayedImage(currentPhoto, lastId);

    return (
        <>
            {/* <Head>
                <title>Galeria - DJ Kuba</title>
                <meta name="description" content="Galeria zdjęć - imprezy, wesela i osiemnastki czyli DJ KUBA w akcji." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head> */}
            <Modal isOpen={true} onClose={handleClose}>
                <div
                    className="absolute aspect-[3/2] flex justify-center items-center max-h-screen max-w-[100vw]"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
                    <motion.div
                        className="aspect-[3/2] max-h-screen max-w-[100vw] h-auto w-full md:h-full md:w-auto"
                        key={`photo${currentPhoto.id}`}
                        initial={
                            lastViewedPhoto ? { x: lastViewedPhoto > currentPhoto.id ? -1000 : 1000, opacity: 0 } : { y: 400, scale: 1.1, opacity: 0 }
                        }
                        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                        exit={nextPhoto ? { x: nextPhoto < currentPhoto.id ? 1000 : -1000, opacity: 0 } : { y: 400, scale: 0.8, opacity: 0 }}>
                        <Image
                            src={currentPhoto.src}
                            alt={currentPhoto.alt}
                            width={currentPhoto.width}
                            height={currentPhoto.height}
                            priority={true}
                            className="aspect-[3/2] max-h-full max-w-full"
                        />
                    </motion.div>

                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ backgroundColor: "#00000080" }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-3 sm:left-4 top-3 sm:top-4 bg-black  w-12 h-12 rounded-full flex justify-center items-center "
                        onClick={handleClose}>
                        <MdClose className="text-white text-base sm:text-2xl" />
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ backgroundColor: "#00000080" }}
                        transition={{ duration: 0.3 }}
                        className="hidden sm:flex absolute left-4 bg-black  w-12 h-12 rounded-full justify-center items-center"
                        onClick={handleBack}>
                        <MdArrowBack className="text-white text-2xl" />
                    </motion.button>
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ backgroundColor: "#00000080" }}
                        transition={{ duration: 0.3 }}
                        className="hidden sm:flex absolute right-4 bg-black  w-12 h-12 rounded-full justify-center items-center"
                        onClick={handleForward}>
                        <MdArrowForward className="text-white text-2xl" />
                    </motion.button>
                </div>
            </Modal>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const results: ICloudinarySearchResult = await cloudinary.v2.search
        .expression("kubawarkocz/gallery")
        .sort_by("public_id", "asc")
        .max_results(400)
        .execute();

    const images: IImage[] = results.resources.map((image, index) => {
        return {
            src: image.secure_url,
            id: index + 1,
            alt: `Kuba Warkocz - zdjęcie ${image.filename}`,
            width: image.width,
            height: image.height
        };
    });

    const currentPhoto = images.find((img) => img.id === Number(context.params?.id));

    const lastId = images[images.length - 1].id;

    return {
        props: {
            currentPhoto,
            lastId
        }
    };
};

export async function getStaticPaths() {
    const results: ICloudinarySearchResult = await cloudinary.v2.search
        .expression("folder=kubawarkocz/gallery")
        .sort_by("public_id", "asc")
        .max_results(400)
        .execute();

    const paths = results.resources.map((image, index) => {
        const id = (index + 1).toString();
        return { params: { id } };
    });

    return {
        paths,
        fallback: false
    };
}

export default DisplayedImage;
