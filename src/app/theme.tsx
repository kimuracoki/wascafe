import { createTheme } from "@mui/material";
import { brown } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: brown[200],
    },
    background: {
      default: "#F3EEEC",
    },
  },
  typography: {
    fontFamily: '"Kiwi Maru", serif',
    allVariants: {
      lineHeight: '2rem'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1080, // 900 から変更
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
