import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#42a5f5", 
    },
    background: {
      default: "#f4faff", 
      paper: "#ffffff",   
    },
    text: {
      primary: "#0d1b2a",   
      secondary: "#5c6f82",  
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
