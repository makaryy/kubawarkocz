import Page from "@/components/Page";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import data from "@/utils/data";
import Carousel from "@/components/Carousel";
import { MdStarRate } from "react-icons/md";

const {
    homepage: {
        links,
        name,
        subtitle,
        title,
        image: { alt, src },
        iframe,
        seo
    },
    reviews
} = data;

export default function Home() {
    return (
        <Page>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className="flex flex-col lg:flex-row justify-around items-center bg-transparent lg:min-h-[calc(100vh-128px)] p-8">
                <div className="relative max-w-xl m-8 mb-16">
                    <h2 className="text-4xl lg:text-6xl w-fit mb-4 relative text-rose-800">
                        {title}
                        <span className="absolute right-full top-1/2 -translate-x-2 h-[1px] w-screen bg-rose-800"></span>
                    </h2>
                    <h1 className="text-4xl lg:text-6xl mb-8">{name}</h1>
                    <p className="text-xl lg:text-2xl mb-16 lg:mb-24">{subtitle}</p>
                    <ul className="space-y-4">
                        {links.map(({ href, label, icon }) => (
                            <li key={href}>
                                <Link href={"/galeria"} className="flex items-center gap-4 text-xl group relative w-fit cursor-pointer">
                                    <span className="absolute -bottom-2 right-0 h-[1px] w-[calc(100%-40px)] scale-x-0 group-hover:scale-x-100 bg-rose-800 transition-transform origin-left duration-300 "></span>
                                    <span className="text-rose-800 text-xl lg:text-2xl ">{icon}</span>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <iframe
                        className="hidden 2xl:block"
                        width="800"
                        height="540"
                        src={iframe.src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    <iframe
                        className="hidden lg:block 2xl:hidden"
                        width="560"
                        height="315"
                        src={iframe.src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    <iframe
                        className="hidden sm:block lg:hidden"
                        width="440"
                        height="248"
                        src={iframe.src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    <iframe
                        className="block aspect-video sm:hidden"
                        width="320"
                        height="180"
                        src={iframe.src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </main>
            <div className="flex flex-col border-t border-rose-800 mx-8">
                <h3 className="text-4xl my-8 text-center">{reviews.title}</h3>
                <Carousel
                    dots
                    className="rounded-lg w-full max-w-3xl mt-4 mx-auto h-max"
                    items={reviews.reviewList.map(({ rating, review, user }) => (
                        <div key={`${user} - ${review}`} className="w-full max-w-3xl h-full bg-neutral-700 text-left py-8 px-12">
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
                />
                <Link href={reviews.link.href} target="_blank" className="w-full max-w-3xl mx-auto text-sm underline text-right mb-4">
                    {reviews.link.label}
                </Link>
            </div>
        </Page>
    );
}
