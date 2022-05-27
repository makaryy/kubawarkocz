import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Paper, Typography, useTheme, useMediaQuery, Fade } from "@mui/material";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import Details from "../components/Details";
import "../index.css";

const Offer = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <article>
            <Fade in={true} timeout={1000}>
                <Box
                    sx={{
                        minHeight: matches ? "calc(100vh - 6rem)" : "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                    <Paper
                        elevation={5}
                        sx={{ margin: "2rem", padding: "1rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            STAND UP
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom sx={{ fontSize: "1.25rem" }}>
                            Pokaz sceniczny, który przeplata dużą dawkę humoru z niesamowitymi efektami magicznymi. Występ angażuje całą publikę,
                            kontakt z widownią jest nieprzerwany, dzięki czemu każdy z osobna może doświadczyć niezapomnianych wrażeń i emocji. Pokaz
                            trwa 25 minut i jest dostosowany zarówno do kameralnej grupy jaki i do większego grona odbiorców (pokaz idealnie sprawdzi
                            się w grupie do 200 widzów). Stand up to niepowtarzalna okazja do świetnej zabawy i doznania magii w najbardziej
                            spektakularnym wydaniu.
                        </Typography>
                        <img
                            src="/assets/kuba7.jpg"
                            alt="STAND UP + CLOSE UP"
                            className={matches ? "description-img shadow-img" : "description-img-mobile shadow-img"}
                        />
                    </Paper>
                    <Paper
                        elevation={5}
                        sx={{ margin: "2rem", padding: "1rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            CLOSE UP
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom sx={{ fontSize: "1.25rem" }}>
                            Indywidualne podejście do klienta i bezpośredni kontakt z magią to czynniki wyróżniające close up. Sztuczki prezentowane
                            są dla każdego stolika gości z osobna, co zapewnia najbliższy możliwy kontakt z magią oraz niezapomniane emocja dla
                            każdego uczestnika. Iluzjonista przy każdym, stoliku może spędzić od 5 do 15 minut co sprawia że długość występu można
                            dostosować do imprezy mając pewność że każdy z gości doświadczy iluzji z bliska w swoich rękach. Występ angażujący osoby z
                            widowni idealnie wzmacnia więzi międzyludzkie, co jest niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie
                            będzie to standardowa impreza firmowa, a coś zintegruje waszych pracowników i zostanie w ich pamięci na długi czas.
                        </Typography>
                        <img
                            src="/assets/kuba1.png"
                            alt="CLOSE UP"
                            className={matches ? "description-img shadow-img" : "description-img-mobile shadow-img"}
                        />
                    </Paper>
                    <Paper
                        elevation={5}
                        sx={{ margin: "2rem", padding: "1rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Typography variant="h4" align="center" gutterBottom>
                            STAND UP + CLOSE UP
                        </Typography>
                        <Typography variant="body1" align="center" gutterBottom sx={{ fontSize: "1.25rem" }}>
                            Perfekcyjna kombinacja dwóch świetnych form występów magicznych. Połączenie spektakularnego występu scenicznego z
                            indywidualnym dostarczeniem rozrywki stolikowej zapewni gościom niesamowite przeżycia i świetną rozrywkę. Każdy z widowni
                            zostanie oczarowany w pełnej skali i z pewnością nie zapomni tego do końca życia.
                        </Typography>
                        <img
                            src="/assets/kuba11.jpg"
                            alt="STAND UP + CLOSE UP"
                            className={matches ? "description-img shadow-img" : "description-img-mobile shadow-img"}
                        />
                    </Paper>
                    <Paper
                        elevation={5}
                        sx={{ margin: "2rem", padding: "1rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Typography variant="h5" align="center" gutterBottom>
                            IMPREZY
                        </Typography>
                        {matches ? (
                            <Box sx={{ width: "100%" }}>
                                <Grid container alignItems="center" justifyContent="center">
                                    <Grid item md={6}>
                                        <Details
                                            description="W tym wyjątkowym dniu pokaz dostarczy zarówno gościom, jak i państwu młodym
                                    wielu powodów do śmiechu. Występ dostosowany pod indywidualne preferencje
                                klienta tak,aby po weselu zostało tylko zadowolenie i miłe wspomnienia."
                                            title="WESELA"
                                            icon={<LiquorOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Details
                                            description="Świetna okazja na urozmaicenie imprezy urodzinowej. Pokaz iluzji pozostawi
                                    solenizanta z uśmiechem na twarzy,a jego gościom dostarczy niecodziennej formy
                                    rozrywki.
                                    "
                                            title="URODZINY"
                                            icon={<CakeOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Details
                                            description="Występ angażujący osoby z widowni idealnie wzmacnia więzi międzyludzkie, co jest
                                niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to
                                standardowa impreza firmowa,a coś znacznie lepszego i bardziej magicznego.
                                "
                                            title="POKAZ FIRMOWY"
                                            icon={<BusinessCenterOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Details
                                            description="Dostosowany idealnie pod młodą publikę występ magiczny. Sztuczki zawierające w sobie motywy z popularnych bajek i
                                    komiksów szczególnie takich,które dana publika lubi najbardziej. Wszystko po to aby każdy wyszedł z pokazu
                                    zadowolony."
                                            title="DLA DZIECI"
                                            icon={<CelebrationOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        ) : (
                            <Box sx={{ width: "100%" }}>
                                <Details
                                    description="W tym wyjątkowym dniu pokaz dostarczy zarówno gościom, jak i państwu młodym
                                    wielu powodów do śmiechu. Występ dostosowany pod indywidualne preferencje
                                klienta tak,aby po weselu zostało tylko zadowolenie i miłe wspomnienia."
                                    title="WESELA"
                                    icon={<LiquorOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                />
                                <Details
                                    description="Świetna okazja na urozmaicenie imprezy urodzinowej. Pokaz iluzji pozostawi
                                    solenizanta z uśmiechem na twarzy,a jego gościom dostarczy niecodziennej formy
                                    rozrywki.
                                    "
                                    title="URODZINY"
                                    icon={<CakeOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                />
                                <Details
                                    description="Występ angażujący osoby z widowni idealnie wzmacnia więzi międzyludzkie, co jest
                                niewątpliwie ważne dla współpracowników. Dzięki pokazowi iluzji nie będzie to
                                standardowa impreza firmowa,a coś znacznie lepszego i bardziej magicznego.
                                "
                                    title="POKAZ FIRMOWY"
                                    icon={<BusinessCenterOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                />
                                <Details
                                    description="Dostosowany idealnie pod młodą publikę występ magiczny. Sztuczki zawierające w sobie motywy z popularnych bajek i
                                    komiksów szczególnie takich,które dana publika lubi najbardziej. Wszystko po to aby każdy wyszedł z pokazu
                                    zadowolony."
                                    title="DLA DZIECI"
                                    icon={<CelebrationOutlinedIcon sx={{ width: "150px", height: "150px" }} />}
                                />
                            </Box>
                        )}
                    </Paper>
                    <Typography variant="body1" align="center" sx={{ margin: "2rem" }}>
                        *Wymienione w ofercie wydarzenia to podstawowe propozycje do wyboru. Istnieje możliwość występu również na innych imprezach,
                        takich jak na przykład wieczór kawalerski czy festyn. W celu ustalenia szczegółów zapraszam do{" "}
                        <Link to="/contact" style={{ color: matches ? theme.palette.secondary.main : theme.palette.secondary.dark }}>
                            kontaktu
                        </Link>
                        .
                    </Typography>
                </Box>
            </Fade>
        </article>
    );
};

export default Offer;
