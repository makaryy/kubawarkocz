import React, { useState, useEffect } from "react";
import { Tabs, Tab, Toolbar, useTheme, useMediaQuery, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
    const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

    //Desktop view state handlers
    const [value, setValue] = useState("/");
    const handleDesktopClick = (option) => {
        setValue(option);
    };

    useEffect(() => {
        //Refresh Handler
        value !== location.pathname && setValue(location.pathname);
    }, [value, location]);

    //Mobile view state handlers
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMobileClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleMobileClose = (option) => {
        setAnchorEl(null);
    };

    return matchesSm ? (
        <Toolbar
            sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0)",
                height: "4rem"
            }}>
            {matchesLg && (
                <Link to="/" className="nav-link">
                    <Typography
                        variant="body1"
                        align="center"
                        sx={{
                            cursor: "pointer",
                            fontSize: "1.25rem",
                            textShadow: "1px 1px 16px #222222",
                            marginTop: "8px",
                            textDecoration: "none"
                        }}>
                        Iluzjonista
                        <br />
                        Kuba Warkocz
                    </Typography>
                </Link>
            )}
            <nav>
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
                    onChange={handleDesktopClick}>
                    <Tab
                        value={"/"}
                        label="Strona Główna"
                        to="/"
                        component={Link}
                        sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                        disableRipple
                    />
                    <Tab
                        value={"/about"}
                        label="O Mnie"
                        to="about"
                        component={Link}
                        sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                        disableRipple
                    />
                    <Tab
                        value={"/events"}
                        label="Wydarzenia"
                        to="events"
                        component={Link}
                        sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                        disableRipple
                    />
                    <Tab
                        value={"/offer"}
                        label="Oferta"
                        to="offer"
                        component={Link}
                        sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                        disableRipple
                    />
                    <Tab
                        value={"/contact"}
                        label="Kontakt"
                        to="contact"
                        component={Link}
                        sx={{ borderRadius: "1rem", color: "black", margin: "0.5rem" }}
                        disableRipple
                    />
                </Tabs>
            </nav>
            {matchesLg && (
                <Typography variant="body1" align="center" sx={{ fontSize: "1.25rem", textShadow: "1px 1px 16px #222222", marginTop: "8px" }}>
                    Skontaktuj się
                    <br />
                    603 521 429
                </Typography>
            )}
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
            <Link to="/" className="navbar-link">
                <img src="/assets/logo.png" alt="" className="navbar-img" />
            </Link>
            <nav>
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
                        onClick={handleMobileClose}>
                        <Link to="/" className="nav-link">
                            Strona Główna
                        </Link>
                    </MenuItem>
                    <MenuItem
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid white" }}
                        onClick={handleMobileClose}>
                        <Link to="/about" className="nav-link">
                            O mnie
                        </Link>
                    </MenuItem>
                    <MenuItem
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid white" }}
                        onClick={handleMobileClose}>
                        <Link to="/events" className="nav-link">
                            Wydarzenia
                        </Link>
                    </MenuItem>
                    <MenuItem
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid white" }}
                        onClick={handleMobileClose}>
                        <Link to="/offer" className="nav-link">
                            Oferta
                        </Link>
                    </MenuItem>
                    <MenuItem sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={handleMobileClose}>
                        <Link to="/contact" className="nav-link">
                            Kontakt
                        </Link>
                    </MenuItem>
                </Menu>
            </nav>
        </Toolbar>
    );
};

export default NavBar;
