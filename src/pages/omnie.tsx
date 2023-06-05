import Page from "@/components/Page";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { MdStarRate } from "react-icons/md";

const {
    about: {
        title,
        images,
        link: { href, label },
        textPostLink,
        textPreLink,
    },
    reviews,
} = data;

const About = () => {
    return (
        <Page>
            <div className="flex flex-col-reverse lg:flex-row justify-around items-center p-8 mb-8 lg:min-h-[calc(100vh-128px)]">
                <div className="relative max-w-lg m-8">
                    <h2 className="hidden lg:block text-5xl pb-6 text-center">{title}</h2>
                    <p className="text-center text-lg md:text-xl">
                        {textPreLink}
                        <Link href={href} className="text-rose-800">
                            {label}
                        </Link>
                        {textPostLink}
                    </p>
                </div>
                <Carousel
                    centerMode={false}
                    swipeable
                    showThumbs={false}
                    emulateTouch
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators
                    autoPlay
                    interval={3000}
                    className=" w-[360px] sm:w-[480px] px-4"
                >
                    {images.map(({ alt, src }) => (
                        <Image src={src} alt={alt} width={480} height={640} key={src} className="rounded-lg border-2 border-rose-800 " />
                    ))}
                </Carousel>
                <h2 className="lg:hidden text-4xl pb-6">{title}</h2>
            </div>
            <div className="flex flex-col border-t border-rose-800 mx-8">
                <h3 className="text-4xl my-8 text-center">Opinie Google</h3>
                <Carousel
                    centerMode={false}
                    swipeable
                    showThumbs={false}
                    emulateTouch
                    showStatus={false}
                    showIndicators
                    className="w-full max-w-3xl mt-4 mx-auto h-max"
                >
                    {reviews.reviewList.map(({ rating, review, user }) => (
                        <div className="w-full max-w-3xl h-full bg-neutral-700 text-left py-8 px-12 rounded-lg">
                            <div>
                                <p className="text-lg">{user}</p>
                                <div className="flex gap-1 text-yellow-400 text-lg">
                                    {Array.from({ length: rating }, (_, i) => (
                                        <MdStarRate key={`star-${i}`} />
                                    ))}
                                </div>
                            </div>
                            <p className="my-4">{review}</p>
                        </div>
                    ))}
                </Carousel>
                <Link href={reviews.link.href} target="_blank" className="w-full max-w-3xl mx-auto text-sm underline text-right mb-4">
                    {reviews.link.label}
                </Link>
            </div>
        </Page>
    );
};

export default About;
