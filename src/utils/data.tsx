import { GiFairyWand, GiMagicHat, GiCardKingClubs } from "react-icons/gi";
import { MdOutlineBusiness, MdOutlineCake, MdOutlineCelebration, MdOutlineLiquor } from "react-icons/md";

const data = {
    offer: {
        seo: {
            title: "Oferta - Iluzjonista Kuba Warkocz",
            description: "Iluzjonista na wesele? Magik na urodziny? Pokaz dla dzieci? Te i wiele więcej atrakcji znajdziesz w ofercie."
        },
        parties: [
            {
                title: "WESELA",
                icon: <MdOutlineLiquor />,
                desc: "W tym wyjątkowym dniu pokaz dostarczy zarówno gościom, jak i państwu młodym wielu powodów do śmiechu. Występ dostosowany pod indywidualne preferencje klienta tak,aby po weselu zostało tylko zadowolenie i miłe wspomnienia."
            },
            {
                title: "URODZINY",
                icon: <MdOutlineCake />,
                desc: "Świetna okazja na urozmaicenie imprezy urodzinowej. Pokaz iluzji pozostawi solenizanta z uśmiechem na twarzy,a jego gościom dostarczy niecodziennej formy rozrywki."
            },
            {
                title: "POKAZ FIRMOWY",
                icon: <MdOutlineBusiness />,
                desc: "Występ angażujący osoby z widowni idealnie wzmacnia więzi międzyludzkie, co jest niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to standardowa impreza firmowa,a coś znacznie lepszego i bardziej magicznego."
            },
            {
                title: "DLA DZIECI",
                icon: <MdOutlineCelebration />,
                desc: "Dostosowany idealnie pod młodą publikę występ magiczny. Sztuczki zawierające w sobie motywy z popularnych bajek i komiksów szczególnie takich,które dana publika lubi najbardziej. Wszystko po to aby każdy wyszedł z pokazu zadowolony."
            }
        ],
        offerItems: [
            {
                title: "STAND UP",
                main: "Pokaz sceniczny, który przeplata dużą dawkę humoru z niesamowitymi efektami magicznymi. Występ angażuje całą publikę, kontakt z widownią jest nieprzerwany, dzięki czemu każdy z osobna może doświadczyć niezapomnianych wrażeń i emocji. Pokaz trwa 25 minut i jest dostosowany zarówno do kameralnej grupy jaki i do większego grona odbiorców (pokaz idealnie sprawdzi się w grupie do 200 widzów). Stand up to niepowtarzalna okazja do świetnej zabawy i doznania magii w najbardziej spektakularnym wydaniu.",
                image: {
                    src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_340/v1684352879/kubawarkocz/gallery/06_cpfhqf.webp",
                    alt: "STAND UP IMAGE"
                }
            },
            {
                title: "CLOSE UP",
                main: "Indywidualne podejście do klienta i bezpośredni kontakt z magią to czynniki wyróżniające close up. Sztuczki prezentowane są dla każdego stolika gości z osobna, co zapewnia najbliższy możliwy kontakt z magią oraz niezapomniane emocja dla każdego uczestnika. Iluzjonista przy każdym, stoliku może spędzić od 5 do 15 minut co sprawia że długość występu można dostosować do imprezy mając pewność że każdy z gości doświadczy iluzji z bliska w swoich rękach. Występ angażujący osoby z widowni idealnie wzmacnia więzi międzyludzkie, co jest niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to standardowa impreza firmowa, a coś zintegruje waszych pracowników i zostanie w ich pamięci na długi czas.",
                imgOnLeft: true,
                image: {
                    src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_340/v1684352882/kubawarkocz/gallery/12_rxyp56.webp",
                    alt: "CLOSE UP IMAGE"
                }
            },
            {
                title: "STAND UP + CLOSE UP",
                main: "Perfekcyjna kombinacja dwóch świetnych form występów magicznych. Połączenie spektakularnego występu scenicznego z indywidualnym dostarczeniem rozrywki stolikowej zapewni gościom niesamowite przeżycia i świetną rozrywkę. Każdy z widowni zostanie oczarowany w pełnej skali i z pewnością nie zapomni tego do końca życia.",
                image: {
                    src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_340/v1684352872/kubawarkocz/gallery/22_hzfkyj.webp",
                    alt: "STAND UP + CLOSE UP IMAGE"
                }
            }
        ],
        footer: {
            text: "*Wymienione w ofercie wydarzenia to podstawowe propozycje do wyboru. Istnieje możliwość występu również na innych imprezach, takich jak na przykład wieczór kawalerski czy impreza plenerowa. W celu ustalenia szczegółów zapraszam do",
            link: { label: "kontaktu", href: "/contact" }
        }
    },

    homepage: {
        title: "Zwycięzca II Ogólnopolskiego Turnieju Iluzjonistów",
        name: "KUBA WARKOCZ",
        subtitle: "Iluzjonista z ponad 7-letnim doświadczeniem, który profesjonalnie uświetnia wszelkiego rodzaju wydarzenia swoimi występami. ",
        links: [
            {
                href: "/galeria",
                label: "Galeria",
                icon: <GiFairyWand />
            },
            {
                href: "/oferta",
                label: "Oferta",
                icon: <GiMagicHat />
            },
            {
                href: "/omnie",
                label: "Informacje",
                icon: <GiCardKingClubs />
            }
        ],
        image: {
            alt: "Kuba Warkocz - iluzjonista",
            src: "/homepage-image.webp"
        },
        iframe: {
            src: "https://www.youtube.com/embed/Oi7s45DaPnw?si=KwRO9BFHli-K8qmt",
            title: "FILM PROMO KUBA WARKOCZ ILUZJONISTA"
        },
        seo: {
            title: "Iluzjonista Kuba Warkocz",
            description:
                "Kuba Warkocz - iluzjonista oraz magik z Krakowa. Stand up, close up, urodziny, wesela, imprezy firmowe, występy dla dzieci i więcej."
        }
    },
    about: {
        title: "O MNIE",
        textPreLink:
            "Jestem Iluzjonistą z ponad 7-letnim doświadczeniem, wyróżniony na Międzynarodowym Festiwalu Artystów Ulicznych i Precyzji w Radomiu zajmując 1 miejsce na Festiwalu Iluzjonistów. Bez względu na okazję - od wesela po komunię czy wiele innych - dostarczę niezapomniane chwile pełne fascynacji i zdumienia. Moje umiejętności sprawią, że Wasi goście będą pod wrażeniem i poruszeni niesamowitą magią, którą tworzę. Moje występy są dynamiczne, interaktywne i dostosowane do Waszych potrzeb, aby każde wydarzenie było niepowtarzalne. Specjalizuję się zarówno w magii scenicznej jak i close-upowej, dlatego moja obecność sprawdzi się na wszelkiego rodzaju wydarzeniach,po szczegóły zapraszam do zakładki ",
        textPostLink: ". Zaproście mnie na swoje wydarzenie, a razem stworzymy magię, o której nie da się zapomnieć.",
        link: {
            href: "/oferta",
            label: "oferta"
        },
        images: [
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906565/kubawarkocz/about/about01.webp",
                alt: "Kuba Warkocz - Zdjęcie 01"
            },
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906565/kubawarkocz/about/about02.webp",
                alt: "Kuba Warkocz - Zdjęcie 02"
            },
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906565/kubawarkocz/about/about03.webp",
                alt: "Kuba Warkocz - Zdjęcie 03"
            },
            {
                src: "https://res.cloudinary.com/dqyhe8ogi/image/upload/c_scale,h_900/v1685906546/kubawarkocz/about/about04.webp",
                alt: "Kuba Warkocz - Zdjęcie 04"
            }
        ],
        seo: {
            title: "O mnie - Iluzjonista Kuba Warkocz",
            description:
                "Kuba Warkocz - iluzjonista oraz magik dostarczający wiele rozrywki. Kraków, Wrocław, Katowice i nie tylko. Atrakcja na wesele, urodziny oraz imprezę firmową"
        }
    },
    contact: {
        title: "Zapraszam do kontaktu",
        instagram: {
            href: "https://www.instagram.com/csimagic/",
            label: "@csimagic"
        },
        facebook: {
            href: "https://www.facebook.com/profile.php?id=100090441453870",
            label: "Iluzjonista Kuba Warkocz"
        },
        phoneNumber: "603 521 429",
        email: "kubaw.iluzja@gmail.com",
        labels: {
            email: "E-mail:",
            message: "Wiadomość:",
            send: "Wyślij"
        },
        messagePlaceholder: "Czy jesteś dostępny za 2 miesiące?",
        seo: {
            title: "Kontakt - Iluzjonista Kuba Warkocz",
            description: "Zamów występ na urodziny, wesele czy imprezę firmową. Skontaktuj się - zadzwoń lub napisz. Dobra zabawa gwarantowana."
        }
    },
    reviews: {
        title: "Opinie Google",
        link: {
            label: "Zobacz wszystkie opinie",
            href: "https://www.google.pl/search?q=kuba%20warkocz&sxsrf=APwXEdc3K7PiZGtM0zac0TLdpOHdzIJxlg%3A1685902977538&source=hp&ei=gdZ8ZMr9HcXx6AOtqqDgBg&iflsig=AOEireoAAAAAZHzkkb_CPFrQBUd4fKz2X8R5DZv98Z1w&ved=0ahUKEwiKwuWAnqr_AhXFOHoKHS0VCGwQ4dUDCAk&uact=5&oq=kuba%20warkocz&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyBwgjEOoCECcyDQguEMcBENEDEOoCECcyBwgjEOoCECc6BwgjEIoFECc6EQguEIMBEMcBELEDENEDEIAEOgsIABCABBCxAxCDAToICAAQgAQQsQNQAFjbGmDeGmgBcAB4AYABoAKIAcsDkgEFMC4xLjGYAQCgAQGwAQo&sclient=gws-wiz&fbclid=IwAR3SVf4jV0NfPpKB8O7JtYovee85Fz96BTMk_C37Q8lS5W1KwuZyIg84jQE#lrd=0xaf961c725eca6777:0x743b7019af79a8c1,1,,,,"
        },
        reviewList: [
            {
                rating: 5,
                user: "Eugen Fret",

                review: "Kuba występował na naszym weselu, występ bardzo nam się spodobał a szczególnie numer z kostką rubika. Kuba bardzo profesjonalnie podchodzi do swojego zawodu i sprawił że znów mogliśmy poczuć sie jak dzieci. polecam"
            },
            {
                rating: 5,
                user: "Hubert Palewski",

                review: "Kuba posiada wyjątkowe zdolności we wprowadzaniu publiczności w osłupienie. Sam pokaz bardzo ciekawy i wciągający, zbudowany na autorkiej opowieści, okraszonej błyskotliwym żartem i nieoczekiwanym plot-twistem. Świetny kontakt z widownią w każdym wieku i tworzenie osobliwej atmosfery tajemniczości i zaskoczenia to cechy dobrego przewdonika po świecie iluzji, przez które zdecydowanie nikt nie spojarzy na zegarek w trakcie występu.\n \n Z pewnością wybiorę się jeszcze raz przy najbliższej okazji."
            },
            {
                rating: 5,
                user: "Kamila Iskrzyńska",

                review: "Niesamowite przeżycie. Pokaz na najwyższym poziomie, trzymający przez cały wieczór w napięciu. Pokazane sztuczki były nietuzinkowe, angażowały publiczność i z każdą chwilą zaskakiwały coraz bardziej. Jestem pod ogromnym wrażeniem, długo zapamiętam to widowisko."
            },
            {
                rating: 5,
                user: "Piotr Ficek",

                review: "Występ iluzjonistyczny Kuby to niezapomniane doświadczenie. Jego umiejętności są imponujące, a występ pełen jest nieoczekiwanych zwrotów akcji. Polecam go każdemu, kto chce zobaczyć prawdziwie profesjonalne show."
            },
            {
                rating: 5,
                user: "Protyp",

                review: "Pan występował na imprezie urodzinowej mojej narzeczonej. Wszyscy bawili się świetnie. Kupa śmiechu i dobrej zabawy :D."
            }
        ]
    },
    gallery: {
        seo: {
            title: "Galeria - Iluzjonista Kuba Warkocz",
            description:
                "Niezapomniane wspomnienia oraz wieczna pamiątka z twojej imprezy. Zobacz jak w akcji wygląda Iluzjonista Kuba Warkocz z Krakowa."
        }
    }
};

export default data;
