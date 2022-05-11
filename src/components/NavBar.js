import React, { useState, useEffect } from "react";
import { Tabs, Tab, Toolbar, useTheme, useMediaQuery, Menu, MenuItem, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    //Desktop view state handlers
    const [value, setValue] = useState("/");
    const navigate = useNavigate();
    const handleDesktopClick = (option) => {
        navigate(option);
        setValue(option);
    };

    useEffect(() => {
        //Refresh Handler
        value !== location && setValue(location.pathname);
    }, [value, location]);

    //Mobile view state handlers
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMobileClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleMobileClose = (option) => {
        navigate(option);
        setAnchorEl(null);
    };

    return matches ? (
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
                indicatorColor="secondary">
                <Tab
                    value={"/"}
                    label="Strona Główna"
                    onClick={() => handleDesktopClick("/")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
                <Tab
                    value={"/about"}
                    label="O Mnie"
                    onClick={() => handleDesktopClick("/about")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
                <Tab
                    value={"/offer"}
                    label="Oferta"
                    onClick={() => handleDesktopClick("/offer")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
                <Tab
                    value={"/contact"}
                    label="Kontakt"
                    onClick={() => handleDesktopClick("/contact")}
                    sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                    disableRipple
                />
            </Tabs>
        </Toolbar>
    ) : (
        <Toolbar
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0)",
                height: "4rem"
            }}>
            <img src="/assets/logo.png" alt="" className="navbar-img" onClick={() => navigate("/")} />
            <MenuIcon sx={{ fontSize: "3rem" }} onClick={handleMobileClick} />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMobileClose}
                MenuListProps={{
                    sx: { backgroundColor: (theme) => theme.palette.secondary.light, width: "calc(100vw - 32px)" }
                }}>
                <MenuItem
                    sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid white" }}
                    onClick={() => handleMobileClose("/")}>
                    Strona Główna
                </MenuItem>
                <MenuItem
                    sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid white" }}
                    onClick={() => handleMobileClose("/about")}>
                    O mnie
                </MenuItem>
                <MenuItem
                    sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid white" }}
                    onClick={() => handleMobileClose("/offer")}>
                    Oferta
                </MenuItem>
                <MenuItem sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleMobileClose("/contact")}>
                    Kontakt
                </MenuItem>
            </Menu>
        </Toolbar>
    );
};

export default NavBar;
