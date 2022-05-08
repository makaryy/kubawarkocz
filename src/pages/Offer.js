import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import Details from "../components/Details";

const Offer = () => {
    const [details, setDetails] = useState(null);

    return (
        <Box sx={{ minHeight: "calc(100vh - 4rem)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Paper elevation={5} sx={{ margin: "2rem", padding: "1rem" }}>
                <Typography variant="h5" align="center">
                    STAND UP
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Pokaz sceniczny, który przeplata dużą dawkę humoru z niesamowitymi sztuczkami magicznymi. Występ angażuje całą publikę, kontakt z
                    widownią jest nieprzerwany, dzięki czemu każdy z osobna może doświadczyć niezapomnianych doznań. Pokaz trwa średnio 20 minut i
                    jest dostosowany zarówno dla kameralnej publiczności, jak i występu przed dużą publiką. Stand up to niepowtarzalna okazja do
                    świetnej zabawy i doznania magii w najbardziej spektakularnym wydaniu.
                </Typography>
            </Paper>
            <Paper elevation={5} sx={{ margin: "2rem", padding: "1rem" }}>
                <Typography variant="h5" align="center" gutterBottom>
                    CLOSE UP
                </Typography>
                <Typography variant="body1" align="center">
                    Indywidualne podejście do klienta i bezpośredni kontakt z magią to czynniki wyróżniające close up. Sztuczki prezentowane są dla
                    każdego stolika gości z osobna, co zapewnia najbliższy możliwy kontakt z pokazem. Każdemu z uczestników wydarzenia zostanie
                    zaprezentowany parominutowy występ z bliska, przez co magia będzie na wyciągnięcie ręki.
                </Typography>
            </Paper>
            <Paper elevation={5} sx={{ margin: "2rem", padding: "1rem" }}>
                <Typography variant="h5" align="center" gutterBottom>
                    STAND UP + CLOSE UP
                </Typography>
                <Typography variant="body1" align="center">
                    Perfekcyjna kombinacja dwóch świetnych form występów magicznych. Połączenie spektakularnego występu scenicznego z indywidualnym
                    dostarczeniem rozrywki stolikowej zapewni gościom niesamowite przeżycia i świetną rozrywkę. Każdy z widowni zostanie oczarowany w
                    pełnej skali i z pewnością nie zapomni tego do końca życia.
                </Typography>
            </Paper>
            <Paper elevation={5} sx={{ margin: "2rem", padding: "1rem" }}>
                <Typography variant="h5" align="center" gutterBottom>
                    IMPREZY
                </Typography>
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
            </Paper>
        </Box>
    );
};

export default Offer;
