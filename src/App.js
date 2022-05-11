import { Box, Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent"
                }
            }
        }
    },
    palette: {
        primary: {
            light: "#ffdd71",
            main: "#ffab40",
            dark: "#c77c02"
        },
        secondary: {
            light: "#ffa06d",
            main: "#ff6e40",
            dark: "#c53d13"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    backgroundImage: `linear-gradient(15deg,#f78239, white, white, white, #f78239)`,
                    backgroundSize: "150%",
                    backgroundPosition: "center"
                }}>
                <Container maxWidth="lg">
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/offer" element={<Offer />} />
                            <Route path="/events" element={<Events />} />
                        </Routes>
                    </BrowserRouter>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
