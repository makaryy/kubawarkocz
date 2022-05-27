import React from "react";
import { useTheme, useMediaQuery, Box, Paper, Typography, Fade } from "@mui/material";
import { Link } from "react-router-dom";

const Events = () => {
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
                    <Paper elevation={5} sx={{ padding: matches ? "3rem" : "1rem", margin: "1rem", width: "100%" }}>
                        <Typography variant={matches ? "h6" : "body1"} align="center">
                            Regularnie występuje na Starym Mieście w Krakowie, a konkretnie w lokalu Single Scena przy ulicy Świętego Marka. Na scenie
                            towarzyszy mi fenomenalny iluzjonista Michał Skubida. Są to biletowane występy w języku angielskim, na których każdy z nas
                            zaprasza widza do swojego świata magii. Jeśli zdecydujesz się przyjść czeka Cię godzinna mieszanka iluzji, stand-upu,
                            czytania w myślach i niewytłumaczalnych numerów. Dokładne daty występów będą regularnie publikowane na moim instagramie,
                            do którego odnośnik znajduje się w zakładce{" "}
                            <Link
                                to="/contact"
                                style={{ cursor: "pointer", color: matches ? theme.palette.secondary.main : theme.palette.secondary.dark }}>
                                kontakt
                            </Link>
                            . Serdecznie zapraszamy!
                        </Typography>
                    </Paper>
                    <img src="/assets/kuba6.jpg" alt="" style={{ width: "100%", margin: "1rem" }} />
                </Box>
            </Fade>
        </article>
    );
};

export default Events;
