import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ContactsIcon from "@mui/icons-material/Contacts";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 4rem)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
            <img src="/assets/logo.png" alt="" style={{ maxWidth: "100%", transform: "scale(90%)" }} />
            <Paper
                elevation={5}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "2rem",
                    padding: "2rem",
                    width: "100%"
                }}>
                <Typography variant="h6" align="center" gutterBottom sx={{ width: "70%", marginBottom: "2rem" }}>
                    Cześć, na imię mam Kuba i zajmuję się iluzją. Cieszę się, że znalazłeś się w tym miejscu. Serdecznie zapraszam do zapoznania się z
                    moją działalnością z magią.
                </Typography>

                <Grid container alignItems="center" justifyContent="center" gap={2}>
                    <Grid item md={4} xs={12}>
                        <Paper
                            elevation={5}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: "2rem",
                                gap: 2,
                                cursor: "pointer",
                                transitionDuration: "200ms",
                                transitionProperty: "transform",
                                ":hover": {
                                    transform: "scale(95%)"
                                }
                            }}
                            onClick={() => navigate("/about")}>
                            <PersonOutlineIcon sx={{ fontSize: "4rem" }} />
                            <Typography>Informacje o mnie</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper
                            elevation={5}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: "2rem",
                                gap: 2,
                                cursor: "pointer",
                                transitionDuration: "200ms",
                                transitionProperty: "transform",

                                ":hover": {
                                    transform: "scale(95%)"
                                }
                            }}
                            onClick={() => navigate("/offer")}>
                            <PlaylistAddCheckIcon sx={{ fontSize: "4rem" }} />
                            <Typography>Moja oferta</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper
                            elevation={5}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: "2rem",
                                gap: 2,
                                cursor: "pointer",
                                transitionDuration: "200ms",
                                transitionProperty: "transform",
                                ":hover": {
                                    transform: "scale(95%)"
                                }
                            }}
                            onClick={() => navigate("/contact")}>
                            <ContactsIcon sx={{ fontSize: "4rem" }} />
                            <Typography>Skontaktuj się ze mną</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default Home;
