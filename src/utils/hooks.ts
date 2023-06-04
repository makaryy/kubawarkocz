import { useRouter } from "next/router";
import { useContext, useState, TouchEvent, useEffect } from "react";
import { LastPhotoContext } from "./context";
import { IImage } from "./types";

export const useDisplayedImage = (currentPhoto: IImage, lastId: number) => {
    const { lastViewedPhoto, setLastViewedPhoto } = useContext(LastPhotoContext);
    const [nextPhoto, setNextPhoto] = useState<null | number>(null);
    const [touchStartPoint, setTouchStartPoint] = useState<number | null>(null);
    const [touchMovePoint, setTouchMovePoint] = useState<number | null>(null);

    const { push } = useRouter();

    const backId = (id: number, lastId: number) => (id - 1 <= 0 ? lastId : id - 1);

    const forwardId = (id: number, lastId: number) => (id + 1 > lastId ? 1 : id + 1);

    const handleBack = () => {
        setLastViewedPhoto(currentPhoto.id);
        setNextPhoto(backId(currentPhoto.id, lastId));
        push(`/galeria/${backId(currentPhoto.id, lastId)}`);
    };

    const handleForward = () => {
        setLastViewedPhoto(currentPhoto.id);
        setNextPhoto(forwardId(currentPhoto.id, lastId));
        push(`/galeria/${forwardId(currentPhoto.id, lastId)}`);
    };

    const handleClose = () => {
        setLastViewedPhoto(currentPhoto.id);
        setNextPhoto(null);
        push(`/galeria`);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setTouchStartPoint(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setTouchMovePoint(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if (touchStartPoint && touchMovePoint) {
            if (touchStartPoint > touchMovePoint) handleForward();
            if (touchStartPoint < touchMovePoint) handleBack();
        }
    };

    return {
        lastViewedPhoto,
        nextPhoto,
        handleBack,
        handleForward,
        handleClose,
        handleTouchEnd,
        handleTouchMove,
        handleTouchStart
    };
};

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};
