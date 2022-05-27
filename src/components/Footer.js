import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginLeft: "10%",
                    marginRight: "10%",
                    height: "2rem",
                    flexWrap: "wrap"
                }}>
                <Link to="/" className="footer-link">
                    Strona Główna
                </Link>
                <Link to="/about" className="footer-link">
                    O mnie
                </Link>
                <Link to="/offer" className="footer-link">
                    Oferta
                </Link>
                <Link to="/events" className="footer-link">
                    Wydarzenia
                </Link>
                <Link to="/contact" className="footer-link">
                    Kontakt
                </Link>
            </Box>
        </footer>
    );
};

export default Footer;
