import { BrowserRouter } from "react-router-dom";
import { Router } from "../routes/Router";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { brown } from "@mui/material/colors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const App = () => {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
};

const theme = createTheme({
  palette: {
    primary: {
      main: brown[200],
    },
  },
  typography: {
    fontFamily: "\"Kiwi Maru\", serif",
  }
});