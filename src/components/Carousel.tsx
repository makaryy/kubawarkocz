import { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { cls } from "@/utils/utils";

interface CarouselProps {
    items: ReactNode[];
    arrows?: boolean;
    className?: string;
    dots?: boolean;
    loop?: boolean;
    delay?: number;
    autoplay?: boolean;
}

const Carousel = ({ items, arrows = true, className, dots = false, loop = false, delay = 3000, autoplay = false }: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop }, [Autoplay({ delay })]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", (api) => {
                setCurrentSlide(api.selectedScrollSnap());
            });
            if (!autoplay) {
                if (emblaApi) emblaApi.plugins().autoplay?.destroy();
            }
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );
    const stop = useCallback(() => {
        if (emblaApi) emblaApi.plugins().autoplay?.stop();
    }, [emblaApi]);
    const play = useCallback(() => {
        if (emblaApi) emblaApi.plugins().autoplay?.play();
    }, [emblaApi]);

    return (
        <div className={cls("relative overflow-hidden", className)} onMouseEnter={stop} onMouseLeave={play}>
            {arrows && (
                <>
                    <button
                        onClick={scrollPrev}
                        className="absolute z-20 left-0 flex items-center justify-center w-8 h-full text-white bg-transparent hover:bg-gradient-to-r hover:to-transparent hover:from-black/30"
                    >
                        <MdArrowBackIosNew />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute z-20 right-0 flex items-center justify-center w-8 h-full text-white bg-transparent hover:bg-gradient-to-r hover:from-transparent hover:to-black/30"
                    >
                        <MdArrowForwardIos />
                    </button>
                </>
            )}
            {dots && (
                <div className="absolute mx-auto bottom-2 z-20 flex justify-center items-center gap-4 h-4 w-full">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={cls("rounded-full w-2 h-2 shadow-sm", index === currentSlide ? "bg-rose-800" : "bg-white/70")}
                        ></button>
                    ))}
                </div>
            )}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {items.map((item, index) => (
                        <div key={`carousel-slide-${index}`} className="min-w-0 flex-[0_0_100%]">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
