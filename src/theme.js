import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1565c0" },
    secondary: { main: "#42a5f5" },
    background: { default: "#f4faff", paper: "#ffffff" },
    text: { primary: "#0d1b2a", secondary: "#5c6f82" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: { fontWeight: 700, letterSpacing: "0.5px" },
    h6: { fontWeight: 600, letterSpacing: "0.3px" },
    body1: { lineHeight: 1.6 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: "3px solid #1565c0",
        },
      },
    },
  },
});

export default theme;
