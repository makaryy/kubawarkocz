import { Paper, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
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
            onClick={() => !matches && setShowDescription(!showDescription)}>
            {showDescription ? (
                matches ? (
                    <Typography align="center" variant="body1">
                        {description}
                    </Typography>
                ) : (
                    <Typography align="center" variant="body2">
                        {description}
                    </Typography>
                )
            ) : (
                <>
                    {icon}
                    <Typography variant="h6" align="center">
                        {title}
                    </Typography>
                </>
            )}
        </Paper>
    );
};

export default Details;
