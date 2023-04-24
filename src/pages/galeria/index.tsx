import Paper from "@/components/Paper";
import Link from "next/link";

const Gallery = () => {
    return (
        <article>
            <div className="flex flex-col justify-center items-center ">
                <Paper className="w-full">
                    <p>
                        Regularnie występuje na Starym Mieście w Krakowie, a konkretnie w lokalu Single Scena przy ulicy Świętego Marka. Na scenie
                        towarzyszy mi fenomenalny iluzjonista Michał Skubida. Są to biletowane występy w języku angielskim, na których każdy z nas
                        zaprasza widza do swojego świata magii. Jeśli zdecydujesz się przyjść czeka Cię godzinna mieszanka iluzji, stand-upu, czytania
                        w myślach i niewytłumaczalnych numerów. Dokładne daty występów będą regularnie publikowane na moim instagramie, do którego
                        odnośnik znajduje się w zakładce <Link href="/contact">kontakt</Link>. Serdecznie zapraszamy!
                    </p>
                </Paper>
                {/* <img src="/assets/kuba6.jpg" alt="" style={{ width: "100%", margin: "1rem" }} /> */}
            </div>
        </article>
    );
};

export default Gallery;
