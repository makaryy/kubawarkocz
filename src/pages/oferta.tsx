import Card from "@/components/Card";
import OfferItem from "@/components/OfferItem";
import Link from "next/link";
import data from "@/utils/data";
import Page from "@/components/Page";

const {
    offerItems,
    parties,
    offerFooter: { link, text }
} = data;

const Offer = () => {
    return (
        <Page>
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
