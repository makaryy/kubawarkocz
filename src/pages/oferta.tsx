import Card, { CardProps } from "@/components/Card";
import OfferItem from "@/components/OfferItem";
import Paper from "@/components/Paper";
import Link from "next/link";
import { MdArrowLeft, MdOutlineBusiness, MdOutlineCake, MdOutlineCelebration, MdOutlineLiquor } from "react-icons/md";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const parties: CardProps[] = [
    {
        title: "WESELA",
        icon: <MdOutlineLiquor className="w-12 h-12" />,
        desc: "W tym wyjątkowym dniu pokaz dostarczy zarówno gościom, jak i państwu młodym wielu powodów do śmiechu. Występ dostosowany pod indywidualne preferencje klienta tak,aby po weselu zostało tylko zadowolenie i miłe wspomnienia."
    },
    {
        title: "URODZINY",
        icon: <MdOutlineCake className="w-12 h-12" />,
        desc: "Świetna okazja na urozmaicenie imprezy urodzinowej. Pokaz iluzji pozostawi solenizanta z uśmiechem na twarzy,a jego gościom dostarczy niecodziennej formy rozrywki."
    },
    {
        title: "POKAZ FIRMOWY",
        icon: <MdOutlineBusiness className="w-12 h-12" />,
        desc: "Występ angażujący osoby z widowni idealnie wzmacnia więzi międzyludzkie, co jest niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to standardowa impreza firmowa,a coś znacznie lepszego i bardziej magicznego."
    },
    {
        title: "DLA DZIECI",
        icon: <MdOutlineCelebration className="w-12 h-12" />,
        desc: "Dostosowany idealnie pod młodą publikę występ magiczny. Sztuczki zawierające w sobie motywy z popularnych bajek i komiksów szczególnie takich,które dana publika lubi najbardziej. Wszystko po to aby każdy wyszedł z pokazu zadowolony."
    }
];

const Offer = () => {
    return (
        <article>
            <div className="flex flex-col justify-center items-center m-4">
                {/* <OfferItem
                    position="center"
                    title="STAND UP"
                    main="Pokaz sceniczny, który przeplata dużą dawkę humoru z niesamowitymi efektami magicznymi. Występ angażuje całą publikę, kontakt
                        z widownią jest nieprzerwany, dzięki czemu każdy z osobna może doświadczyć niezapomnianych wrażeń i emocji. Pokaz trwa 25
                        minut i jest dostosowany zarówno do kameralnej grupy jaki i do większego grona odbiorców (pokaz idealnie sprawdzi się w grupie
                        do 200 widzów). Stand up to niepowtarzalna okazja do świetnej zabawy i doznania magii w najbardziej spektakularnym wydaniu."
                />
                <div className="w-full ">
                    <p className="text-center mb-4">STAND UP</p>
                    <p className="text-lg text-center mb-4">
                        Pokaz sceniczny, który przeplata dużą dawkę humoru z niesamowitymi efektami magicznymi. Występ angażuje całą publikę, kontakt
                        z widownią jest nieprzerwany, dzięki czemu każdy z osobna może doświadczyć niezapomnianych wrażeń i emocji. Pokaz trwa 25
                        minut i jest dostosowany zarówno do kameralnej grupy jaki i do większego grona odbiorców (pokaz idealnie sprawdzi się w grupie
                        do 200 widzów). Stand up to niepowtarzalna okazja do świetnej zabawy i doznania magii w najbardziej spektakularnym wydaniu.
                    </p>
                    <img
                            src="/assets/kuba7.jpg"
                            alt="STAND UP + CLOSE UP"
                            className={matches ? "description-img shadow-img" : "description-img-mobile shadow-img"}
                        />
                </div>
                <Paper className="w-full">
                    <p className="text-center mb-4">CLOSE UP</p>
                    <p className="text-lg text-center mb-4">
                        Indywidualne podejście do klienta i bezpośredni kontakt z magią to czynniki wyróżniające close up. Sztuczki prezentowane są
                        dla każdego stolika gości z osobna, co zapewnia najbliższy możliwy kontakt z magią oraz niezapomniane emocja dla każdego
                        uczestnika. Iluzjonista przy każdym, stoliku może spędzić od 5 do 15 minut co sprawia że długość występu można dostosować do
                        imprezy mając pewność że każdy z gości doświadczy iluzji z bliska w swoich rękach. Występ angażujący osoby z widowni idealnie
                        wzmacnia więzi międzyludzkie, co jest niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to
                        standardowa impreza firmowa, a coś zintegruje waszych pracowników i zostanie w ich pamięci na długi czas.
                    </p>
                    <img
                            src="/assets/kuba1.png"
                            alt="CLOSE UP"
                            className={matches ? "description-img shadow-img" : "description-img-mobile shadow-img"}
                        />
                </Paper>
                <Paper className="w-full">
                    <p className="text-center mb-4">STAND UP + CLOSE UP</p>
                    <p className="text-lg text-center mb-4">
                        Perfekcyjna kombinacja dwóch świetnych form występów magicznych. Połączenie spektakularnego występu scenicznego z
                        indywidualnym dostarczeniem rozrywki stolikowej zapewni gościom niesamowite przeżycia i świetną rozrywkę. Każdy z widowni
                        zostanie oczarowany w pełnej skali i z pewnością nie zapomni tego do końca życia.
                    </p>
                    <img
                            src="/assets/kuba11.jpg"
                            alt="STAND UP + CLOSE UP"
                            className={matches ? "description-img shadow-img" : "description-img-mobile shadow-img"}
                        />
                </Paper>*/}
                <div className="w-full relative h-64">
                    {/* <button className="absolute left-0 h-full bg-black bg-opacity-20 flex items-center justify-center hover:bg-opacity-10 z-50 transition-all duration-200 cursor-pointer">
                        <MdArrowLeft className="" />
                    </button> */}
                    <Carousel
                        centerMode
                        swipeable
                        showThumbs={false}
                        emulateTouch
                        infiniteLoop
                        showStatus={false}
                        showIndicators={false}
                        className="overflow-visible">
                        <div className="bg-emerald-400 h-48 m-4 mb-12 shadow-xl shadow-main">
                            <h3>1</h3>
                        </div>
                        <div className="bg-indigo-400 h-48 m-4 mb-12 shadow-xl shadow-main">
                            <h3>2</h3>
                        </div>
                        <div className="bg-rose-400 h-48 m-4 mb-12 shadow-xl shadow-main">
                            <h3>3</h3>
                        </div>
                    </Carousel>
                </div>
                <Paper className="w-full">
                    <p className="text-center mb-4 text-2xl">IMPREZY</p>
                    <div className="flex flex-wrap items-center justify-center">
                        {parties.map(({ desc, icon, title }) => (
                            <Card key={title} title={title} icon={icon} desc={desc} />
                        ))}
                    </div>
                </Paper>

                <p className="m-6 text-center text-sm ">
                    *Wymienione w ofercie wydarzenia to podstawowe propozycje do wyboru. Istnieje możliwość występu również na innych imprezach,
                    takich jak na przykład wieczór kawalerski czy festyn. W celu ustalenia szczegółów zapraszam do{" "}
                    <Link href="/contact">kontaktu</Link>.
                </p>
            </div>
        </article>
    );
};

export default Offer;
