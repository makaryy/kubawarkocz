import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import "../index.css";

const About = () => {
    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 4rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem"
            }}>
            <Paper elevation={5} sx={{ padding: "3rem", margin: "1rem", width: "85%" }}>
                <img src="/assets/kuba2.jpg" alt="" className="about-img" loading="lazy" />
                <Typography variant="h6" align="center">
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
