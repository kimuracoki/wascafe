import { BrowserRouter } from "react-router-dom";
import { Router } from "@/routes/Router";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/routes/ScrollToTop";
import theme from "./theme";

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