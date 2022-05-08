import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [value, setValue] = useState("/");
    const navigate = useNavigate();
    const handleClick = (option) => {
        navigate(option);
        setValue(option);
    };
    return (
        <Toolbar
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0)",
                height: "4rem",
                columnGap: "2rem"
            }}>
            <Tabs
                value={value}
                sx={{
                    minWidth: "fit-content",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                }}
                textColor="secondary"
                indicatorColor="secondary"
                // TabIndicatorProps={{ sx: { color: (theme) => theme.palette.primary.dark } }}
            >
                <Tab
                    value={"/"}
                    label="Strona Główna"
                    onClick={() => handleClick("/")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
                <Tab
                    value={"/about"}
                    label="O Mnie"
                    onClick={() => handleClick("/about")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
                <Tab
                    value={"/offer"}
                    label="Oferta"
                    onClick={() => handleClick("/offer")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
                <Tab
                    value={"/contact"}
                    label="Kontakt"
                    onClick={() => handleClick("/contact")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
            </Tabs>
        </Toolbar>
    );
};

export default NavBar;
