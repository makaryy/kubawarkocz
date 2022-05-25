import React from "react";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
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
                <Link onClick={() => navigate("/")} sx={{ color: "#000", fontSize: "0.75rem", cursor: "pointer" }}>
                    Strona Główna
                </Link>
                <Link onClick={() => navigate("/about")} sx={{ color: "#000", fontSize: "0.75rem", cursor: "pointer" }}>
                    O mnie
                </Link>
                <Link onClick={() => navigate("/offer")} sx={{ color: "#000", fontSize: "0.75rem", cursor: "pointer" }}>
                    Oferta
                </Link>
                <Link onClick={() => navigate("/events")} sx={{ color: "#000", fontSize: "0.75rem", cursor: "pointer" }}>
                    Wydarzenia
                </Link>
                <Link onClick={() => navigate("/contact")} sx={{ color: "#000", fontSize: "0.75rem", cursor: "pointer" }}>
                    Kontakt
                </Link>
            </Box>
        </footer>
    );
};

export default Footer;
