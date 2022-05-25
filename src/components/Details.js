import React, { useState } from "react";
import { Paper, Typography, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Details = ({ title, description, icon }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const [showDescription, setShowDescription] = useState(false);
    return (
        <Paper
            elevation={5}
            sx={{
                margin: "2rem",
                padding: matches ? "2rem" : "0.5rem",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flexGrow: 1,
                height: "250px",
                minWidth: "200px"
            }}
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
            onClick={() => !matches && setShowDescription(!showDescription)}
            className="zoom-out">
            {showDescription ? (
                <Typography align="center" variant={matches ? "body1" : "body2"} className="zoom-in" sx={{ transform: "scale(90%)" }}>
                    {description}
                </Typography>
            ) : (
                <Box className="zoom-out">
                    {icon}
                    <Typography variant="h6" align="center">
                        {title}
                    </Typography>
                </Box>
            )}
        </Paper>
    );
};

export default Details;
