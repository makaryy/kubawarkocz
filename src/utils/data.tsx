import { GiFairyWand, GiMagicHat, GiCardKingClubs } from "react-icons/gi";
import { MdOutlineBusiness, MdOutlineCake, MdOutlineCelebration, MdOutlineLiquor } from "react-icons/md";

const data = {
    parties: [
        {
            title: "WESELA",
            icon: <MdOutlineLiquor />,
            desc: "W tym wyjątkowym dniu pokaz dostarczy zarówno gościom, jak i państwu młodym wielu powodów do śmiechu. Występ dostosowany pod indywidualne preferencje klienta tak,aby po weselu zostało tylko zadowolenie i miłe wspomnienia.",
        },
        {
            title: "URODZINY",
            icon: <MdOutlineCake />,
            desc: "Świetna okazja na urozmaicenie imprezy urodzinowej. Pokaz iluzji pozostawi solenizanta z uśmiechem na twarzy,a jego gościom dostarczy niecodziennej formy rozrywki.",
        },
        {
            title: "POKAZ FIRMOWY",
            icon: <MdOutlineBusiness />,
            desc: "Występ angażujący osoby z widowni idealnie wzmacnia więzi międzyludzkie, co jest niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to standardowa impreza firmowa,a coś znacznie lepszego i bardziej magicznego.",
        },
        {
            title: "DLA DZIECI",
            icon: <MdOutlineCelebration />,
            desc: "Dostosowany idealnie pod młodą publikę występ magiczny. Sztuczki zawierające w sobie motywy z popularnych bajek i komiksów szczególnie takich,które dana publika lubi najbardziej. Wszystko po to aby każdy wyszedł z pokazu zadowolony.",
        },
    ],
    offerItems: [
        {
            title: "STAND UP",
            main: "Pokaz sceniczny, który przeplata dużą dawkę humoru z niesamowitymi efektami magicznymi. Występ angażuje całą publikę, kontakt z widownią jest nieprzerwany, dzięki czemu każdy z osobna może doświadczyć niezapomnianych wrażeń i emocji. Pokaz trwa 25 minut i jest dostosowany zarówno do kameralnej grupy jaki i do większego grona odbiorców (pokaz idealnie sprawdzi się w grupie do 200 widzów). Stand up to niepowtarzalna okazja do świetnej zabawy i doznania magii w najbardziej spektakularnym wydaniu.",
            image: {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_340/v1684352879/kubawarkocz/gallery/06_cpfhqf.webp",
                alt: "STAND UP IMAGE",
            },
        },
        {
            title: "CLOSE UP",
            main: "Indywidualne podejście do klienta i bezpośredni kontakt z magią to czynniki wyróżniające close up. Sztuczki prezentowane są dla każdego stolika gości z osobna, co zapewnia najbliższy możliwy kontakt z magią oraz niezapomniane emocja dla każdego uczestnika. Iluzjonista przy każdym, stoliku może spędzić od 5 do 15 minut co sprawia że długość występu można dostosować do imprezy mając pewność że każdy z gości doświadczy iluzji z bliska w swoich rękach. Występ angażujący osoby z widowni idealnie wzmacnia więzi międzyludzkie, co jest niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to standardowa impreza firmowa, a coś zintegruje waszych pracowników i zostanie w ich pamięci na długi czas.",
            imgOnLeft: true,
            image: {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_340/v1684352882/kubawarkocz/gallery/12_rxyp56.webp",
                alt: "CLOSE UP IMAGE",
            },
        },
        {
            title: "STAND UP + CLOSE UP",
            main: "Perfekcyjna kombinacja dwóch świetnych form występów magicznych. Połączenie spektakularnego występu scenicznego z indywidualnym dostarczeniem rozrywki stolikowej zapewni gościom niesamowite przeżycia i świetną rozrywkę. Każdy z widowni zostanie oczarowany w pełnej skali i z pewnością nie zapomni tego do końca życia.",
            image: {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_340/v1684352872/kubawarkocz/gallery/22_hzfkyj.webp",
                alt: "STAND UP + CLOSE UP IMAGE",
            },
        },
    ],
    offerFooter: {
        text: "*Wymienione w ofercie wydarzenia to podstawowe propozycje do wyboru. Istnieje możliwość występu również na innych imprezach, takich jak na przykład wieczór kawalerski czy festyn. W celu ustalenia szczegółów zapraszam do",
        link: { label: "kontaktu", href: "/contact" },
    },
    homepage: {
        title: "Zwycięzca II Ogólnopolskiego Turnieju Iluzjonistów",
        name: "KUBA WARKOCZ",
        subtitle:
            "Iluzjonista z ponad 7-letnim doświadczeniem, który profesjonalnie uświetnia wszelkiego rodzaju wydarzenia swoimi występami. ",
        links: [
            {
                href: "/galeria",
                label: "Galeria",
                icon: <GiFairyWand />,
            },
            {
                href: "/oferta",
                label: "Oferta",
                icon: <GiMagicHat />,
            },
            {
                href: "/omnie",
                label: "Informacje",
                icon: <GiCardKingClubs />,
            },
        ],
    },
    about: {
        title: "O MNIE",
        textPreLink:
            "Jestem Iluzjonistą z ponad 7-letnim doświadczeniem, wyróżniony na Międzynarodowym Festiwalu Artystów Ulicznych i Precyzji w Radomiu zajmując 1 miejsce na Festiwalu Iluzjonistów. Bez względu na okazję - od wesela po komunię czy wiele innych - dostarczę niezapomniane chwile pełne fascynacji i zdumienia. Moje umiejętności sprawią, że Wasi goście będą pod wrażeniem i poruszeni niesamowitą magią, którą tworzę. Moje występy są dynamiczne, interaktywne i dostosowane do Waszych potrzeb, aby każde wydarzenie było niepowtarzalne. Specjalizuję się zarówno w magii scenicznej jak i close-upowej, dlatego moja obecność sprawdzi się na wszelkiego rodzaju wydarzeniach,po szczegóły zapraszam do zakładki ",
        textPostLink: ". Zaproście mnie na swoje wydarzenie, a razem stworzymy magię, o której nie da się zapomnieć.",
        link: {
            href: "/oferta",
            label: "oferta",
        },
        images: [
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906565/kubawarkocz/about/about01.webp",
                alt: "Kuba Warkocz - Zdjęcie 01",
            },
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906565/kubawarkocz/about/about02.webp",
                alt: "Kuba Warkocz - Zdjęcie 02",
            },
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906565/kubawarkocz/about/about03.webp",
                alt: "Kuba Warkocz - Zdjęcie 03",
            },
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906546/kubawarkocz/about/about04.webp",
                alt: "Kuba Warkocz - Zdjęcie 04",
            },
        ],
    },
    contact: {
        title: "Zapraszam do kontaktu",
        instagram: {
            href: "https://www.instagram.com/csimagic/",
            label: "@csimagic",
        },
        facebook: {
            href: "https://www.facebook.com/profile.php?id=100090441453870",
            label: "Iluzjonista Kuba Warkocz",
        },
        phoneNumber: "603 521 429",
        email: "kubaw.iluzja@gmail.com",
        labels: {
            email: "E-mail:",
            message: "Wiadomość:",
            send: "Wyślij",
        },
        messagePlaceholder: "Czy jesteś dostępny za 2 miesiące?",
    },
};

export default data;
