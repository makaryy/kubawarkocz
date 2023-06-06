import Page from "@/components/Page";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import data from "@/utils/data";

const {
    homepage: {
        links,
        name,
        subtitle,
        title,
        image: { alt, src },
        seo,
    },
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

                <div className="border-2 border-rose-800 rounded-lg">
                    <Image width={400} height={600} alt={alt} src={src} priority className="rounded-lg" />
                </div>
            </main>
        </Page>
    );
}
