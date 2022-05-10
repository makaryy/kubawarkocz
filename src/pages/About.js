import React from "react";
import { Box, Typography, Paper, useMediaQuery } from "@mui/material";
import "../index.css";
import { useTheme } from "@mui/material/styles";

const About = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box
            sx={{
                minHeight: matches ? "calc(100vh - 4rem)" : "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem"
            }}>
            <Paper elevation={5} sx={{ padding: matches ? "3rem" : "1rem", margin: "1rem", width: "100%" }}>
                <img src={matches ? "/assets/kuba2.jpg" : "/assets/kuba3.jpg"} alt="" className="about-img" loading="lazy" />
                <Typography variant={matches ? "h6" : "body1"} align="center">
                    Moja historia z iluzją rozpoczęła się 6 lat temu. Od tego czasu występowałem niejednokrotnie przed różnoraką widownią. Dzisiaj,
                    iluzja jest dla mnie największą pasją i możliwość czarowania dla ludzi jest niesamowita. Zjeździłem całą Polskę z talią kart w
                    kieszeni, czarowałem w największych miastach w kraju. Od roku regularnie występuje w Krakowie, gdzie łatwo mnie spotkać.
                    Dostarczałem rozrywki osobom w każdym wieku i z każdej możliwej okazji. Z przyjemnością wystąpię również przed Tobą. Zapraszam!
                </Typography>
            </Paper>
        </Box>
    );
};

export default About;
