import Paper from "@/components/Paper";
import { IClodinaryResource, ICloudinarySearchResult, IImage } from "@/utils/types";
import Link from "next/link";
import cloudinary from "@/utils/cloudinary";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { LastPhotoContext } from "@/utils/context";
import { useRouter } from "next/router";
import Page from "@/components/Page";

interface Props {
    images: IImage[];
}

const Gallery = ({ images }: Props) => {
    const { lastViewedPhoto, setLastViewedPhoto } = useContext(LastPhotoContext);
    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (lastViewedPhoto && !id) {
            lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
            setLastViewedPhoto(null);
        }
    }, [id, lastViewedPhoto, setLastViewedPhoto]);

    return (
        <Page>
            <div className="flex flex-wrap justify-center items-center gap-8 p-4">
                {images.map((image) => (
                    <Link
                        key={image.id}
                        as={`/galeria/${image.id}`}
                        shallow={true}
                        href={`/galeria/${image.id}`}
                        ref={image.id === lastViewedPhoto ? lastViewedPhotoRef : null}
                        className="w-[450px] transition-all duration-300 brightness-90 hover:scale-105 hover:brightness-100">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            width={450}
                            height={300}
                            className="w-full aspect-[3/2] h-auto object-cover rounded-md"
                        />
                    </Link>
                ))}
            </div>
        </Page>
    );
};

export async function getStaticProps() {
    const results: ICloudinarySearchResult = await cloudinary.v2.search
        .expression("folder=kubawarkocz/gallery")
        .sort_by("public_id", "asc")
        .max_results(400)
        .execute();

    const images: IImage[] = results.resources.map((image: IClodinaryResource, index: number) => {
        const src = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/${image.resource_type}/${image.type}/h_300/v${image.version}/${image.public_id}.${image.format}`;
        return { src, id: index + 1, alt: image.public_id };
    });

    return { props: { images } };
}

export default Gallery;
