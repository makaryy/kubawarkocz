import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Link, useMediaQuery, useTheme } from "@mui/material";
import BigImage from "../components/BigImage";

const Home = () => {
    const [bigImage, setBigImage] = useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    const handleClose = () => {
        setOpen(false);
        setBigImage(null);
    };

    const handleOpen = (src) => {
        if (matches) {
            setOpen(true);
            setBigImage(src);
        }
    };
    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 6rem)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: matches ? "row" : "column-reverse"
            }}>
            {open && <BigImage src={bigImage} onClick={handleClose} open={open} />}
            <Box
                elevation={5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: matches ? "2rem" : "1rem",
                    padding: matches ? "2rem" : "1rem",
                    width: matches ? "50%" : "100%"
                }}>
                <>
                    <header>
                        <Typography variant="h5" align="center" gutterBottom sx={{ width: "100%", marginBottom: "2rem" }}>
                            Cześć nazywam się Kuba Warkocz i jestem iluzjonistą z ponad 5 letnim doświadczeniem. Z przyjemnością uświetnie twoje
                            wydarzenie profesjonalnym pokazem iluzji. Zapoznaj się z{" "}
                            <Link onClick={() => navigate("/offer")} sx={{ color: (theme) => theme.palette.secondary.main }}>
                                ofertą
                            </Link>{" "}
                            oraz koniecznie sprawdź reakcje gości na zdjęciach poniżej.
                        </Typography>
                    </header>
                    <Box sx={{ display: "flex", flexDirection: matches ? "row" : "column", justifyContent: "space-between", alignItems: "center" }}>
                        <img
                            src="/assets/kuba9.jpg"
                            alt="Kuba w Akcji 1"
                            className={matches ? "home-description-img shadow-img" : "description-img-mobile shadow-img"}
                            onClick={(e) => {
                                handleOpen(e.currentTarget.src);
                            }}
                        />
                        <img
                            src="/assets/kuba8.jpg"
                            alt="Kuba w Akcji 2"
                            className={matches ? "home-description-img shadow-img" : "description-img-mobile shadow-img"}
                            onClick={(e) => {
                                handleOpen(e.currentTarget.src);
                            }}
                        />
                        <img
                            src="/assets/kuba10.jpg"
                            alt="Kuba w Akcji 3"
                            className={matches ? "home-description-img shadow-img" : "description-img-mobile shadow-img"}
                            onClick={(e) => {
                                handleOpen(e.currentTarget.src);
                            }}
                        />
                    </Box>
                </>
            </Box>
            <img
                src="/assets/kuba5.jpg"
                alt="Kuba Warkocz - Iluzjonista"
                className={matches ? "home-img shadow-img" : "home-img-mobile shadow-img"}
            />
        </Box>
    );
};

export default Home;
