import Page from "@/components/Page";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Head from "next/head";

const {
    about: {
        title,
        images,
        link: { href, label },
        textPostLink,
        textPreLink,
        seo,
    },
} = data;

const About = () => {
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
                    loop
                    className="w-80 h-[480px]
                    sm:w-[480px] sm:h-[720px] rounded-lg"
                    items={images.map(({ alt, src }) => (
                        <Image src={src} alt={alt} width={480} height={720} key={src} />
                    ))}
                />
                <h2 className="lg:hidden text-4xl pb-6">{title}</h2>
            </div>
        </Page>
    );
};

export default About;
