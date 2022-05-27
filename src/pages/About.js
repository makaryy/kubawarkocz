import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, useMediaQuery, Fade } from "@mui/material";
import "../index.css";
import { useTheme } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const About = () => {
    // const [checked, setChecked] = useState(false)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <article>
            <Fade in={true} timeout={1000}>
                <Box
                    sx={{
                        minHeight: matches ? "calc(100vh - 6rem)" : "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2rem"
                    }}>
                    <Paper elevation={5} sx={{ padding: matches ? "3rem" : "1rem", margin: "1rem", width: "100%" }}>
                        <Typography variant={matches ? "h6" : "body1"} align="center">
                            Z wykształcenia kryminolog, z zawodu iluzjonista. Wiedzę na temat ludzkiego umysłu wykorzystuje jednak podczas swoich
                            pokazów- co w połączeniu z magicznymi umiejętnościami daje nam jedyne w swoim rodzaju show ! Od ponad 5 lat występuje
                            zarówno dla dzieci i dorosłych, z talią kart zjeździł całą Polskę, występował w największych miastach w kraju. Na
                            najbliższej imprezie chętnie dostarczy rozrywki Tobie i Twoim gościa !
                        </Typography>
                    </Paper>
                    <Carousel showThumbs={false} showStatus={false} swipeable infiniteLoop showArrows={matches ? true : false}>
                        <Box>
                            <img
                                src="/assets/kuba2.JPG"
                                alt="Kuba Warkocz 2"
                                style={{
                                    height: matches ? "730px" : "450px",
                                    objectFit: matches ? "cover" : "contain",
                                    backgroundColor: "rgba(0,0,0,0.1)"
                                }}
                            />
                        </Box>
                        <Box>
                            <img
                                src="/assets/kuba3.JPG"
                                alt="Kuba Warkocz 3"
                                style={{
                                    height: matches ? "730px" : "450px",
                                    objectFit: matches ? "contain" : "cover",
                                    backgroundColor: "rgba(0,0,0,0.1)"
                                }}
                            />
                        </Box>
                        <Box>
                            <img
                                src="/assets/kuba4.JPG"
                                alt="Kuba Warkocz 4"
                                style={{
                                    height: matches ? "730px" : "450px",
                                    objectFit: matches ? "cover" : "contain",
                                    backgroundColor: "rgba(0,0,0,0.1)"
                                }}
                            />
                        </Box>
                    </Carousel>
                </Box>
            </Fade>
        </article>
    );
};

export default About;
