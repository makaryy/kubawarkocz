import Card from "@/components/Card";
import OfferItem from "@/components/OfferItem";
import Link from "next/link";
import data from "@/utils/data";
import Page from "@/components/Page";
import Head from "next/head";

const {
    offer: {
        offerItems,
        parties,
        footer: { link, text },
        seo,
    },
} = data;

const Offer = () => {
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
            <div className="relative flex flex-col justify-center items-center m-4 space-y-6">
                {offerItems.map((item) => (
                    <OfferItem key={item.title} {...item} />
                ))}
                <p className="text-center mb-4 text-2xl">IMPREZY</p>
                <div className="flex flex-wrap items-center justify-center">
                    {parties.map((party) => (
                        <Card key={party.title} {...party} />
                    ))}
                </div>
                <p className="m-6 text-center text-sm ">
                    {text}
                    <Link href={link.href}>{link.label}</Link>.
                </p>
            </div>
        </Page>
    );
};

export default Offer;
