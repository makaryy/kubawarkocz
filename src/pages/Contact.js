import React, { useState } from "react";
import { Box, TextField, Button, Paper, Typography, Link, useTheme, useMediaQuery } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import axios from "axios";

const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://mail-sender-kubawarkocz.herokuapp.com/send", { email, message });
        setEmail("");
        setMessage("");
    };

    return (
        <Box
            sx={{
                minHeight: matches ? "calc(100vh - 6rem)" : "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
            <Typography variant="h4" sx={{ marginBottom: "2rem" }} align="center">
                {" "}
                Zapraszam do kontaktu
            </Typography>
            <form action="" onSubmit={handleSubmit}>
                <Paper
                    elevation={5}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "2rem" }}>
                    <Box
                        elevation={5}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            alignItems: "center",
                            padding: "1rem",
                            flexWrap: "wrap"
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                width: "100%",
                                flexWrap: "wrap",
                                gap: "1rem"
                            }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Link
                                    href="https://www.instagram.com/kubamagic/"
                                    target="_blank"
                                    sx={{ cursor: "pointer", textDecoration: "none" }}
                                    color="inherit">
                                    <InstagramIcon sx={{ fontSize: "2rem", color: (theme) => theme.palette.primary.main }} />
                                    <Typography variant="body1" gutterBottom>
                                        @kubamagic
                                    </Typography>
                                </Link>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <PhoneAndroidIcon sx={{ fontSize: "2rem", color: (theme) => theme.palette.primary.main }} />
                                <Typography variant="body1" gutterBottom>
                                    603 521 429
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <MailOutlineIcon sx={{ fontSize: "2rem", color: (theme) => theme.palette.primary.main }} />
                            <Typography variant="body1" gutterBottom>
                                kubaw.iluzja@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                    <TextField
                        name="email"
                        type="email"
                        variant="outlined"
                        label="E-mail"
                        required
                        sx={{ minWidth: "250px", width: "50vw", margin: "1rem" }}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <TextField
                        name="message"
                        type="text"
                        variant="outlined"
                        label="Treść Wiadomości"
                        required
                        multiline
                        rows={5}
                        sx={{ minWidth: "250px", width: "50vw", margin: "1rem" }}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <Button type="submit" variant="outlined" sx={{ margin: "1rem" }} color="secondary">
                        Wyślij
                    </Button>
                </Paper>
            </form>
        </Box>
    );
};

export default Contact;
