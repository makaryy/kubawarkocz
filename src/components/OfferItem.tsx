import Image from "next/image";

interface OfferItemProps {
    title: string;
    main: string;
    image: {
        src: string;
        alt: string;
    };
    imgOnLeft?: boolean;
}

const OfferItem = ({ main, title, image: { src, alt }, imgOnLeft = false }: OfferItemProps) => {
    return (
        <article className="bg-opacity-50 p-4 border-b border-rose-800">
            <h1 className="text-2xl m-4 text-center">{title}</h1>
            <main className={`m-8 flex flex-col-reverse ${imgOnLeft ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-around`}>
                <p className="text-center text-lg max-w-lg m-3">{main}</p>
                <Image src={src} alt={alt} width={420} height={280} className="rounded-md m-3" />
            </main>
        </article>
    );
};

export default OfferItem;
