import { BrowserRouter } from "react-router-dom";
import { Router } from "@/routes/Router";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { brown } from "@mui/material/colors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/routes/ScrollToTop";

export const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop />
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
    background: {
      default: '#F3EEEC',
    }
  },
  typography: {
    fontFamily: "\"Kiwi Maru\", serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080, // 900 から変更
      lg: 1200,
      xl: 1536,
    },
  }
});