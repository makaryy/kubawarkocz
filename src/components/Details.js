import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

const Details = ({ title, description, icon }) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <Paper
            elevation={5}
            sx={{
                margin: "2rem",
                padding: "2rem",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flexGrow: 1,
                height: "250px"
            }}
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}>
            {showDescription ? (
                <Typography align="center" variant="body1">
                    {description}
                </Typography>
            ) : (
                // <Box sx={{}}>
                <>
                    {icon}
                    <Typography variant="h6" align="center">
                        DLA DZIECI
                    </Typography>
                </>
                // </Box>
            )}
        </Paper>
    );
};

export default Details;
