interface OfferItemProps {
    title: string;
    main: string;
    footer?: string;
    position: "start" | "end" | "center";
}

const OfferItem = ({ main, title, footer, position }: OfferItemProps) => {
    return (
        <div
            className={`relative my-4 w-full lg:w-1/2 ${
                position === "center" ? "lg:self-center" : position === "start" ? "lg:self-start" : "lg:self-end"
            }`}>
            {/* <span className="absolute bg-gradient-to-r from-indigo-500 to-rose-600 w-full h-full -z-10 blur-sm scale-y-90"></span> */}
            <span className="absolute bg-gradient-to-r from-[#944242] to-[#2F4858] w-full h-full -z-10 blur-sm scale-y-90"></span>
            <article className=" bg-white bg-opacity-50 p-4 ">
                <h1 className="text-2xl m-4 text-center">{title}</h1>
                <main className="m-12 text-center text-lg">{main}</main>
                {footer && <footer>{footer}</footer>}
            </article>
        </div>
    );
};

export default OfferItem;
