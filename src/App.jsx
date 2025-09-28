import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        {/* Header */}
        <AppBar position="static" color="primary" elevation={3}>
          <Toolbar sx={{ justifyContent: "center" }}>
            <Box textAlign="center">
              <Typography variant="h5">Fernando García Reig</Typography>
              <Typography variant="subtitle1">
                Ingeniero Industrial
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Contenido */}
        <Container
          maxWidth="md"
          sx={{ py: 6, flex: 1, textAlign: "center" }}
        >
          {/* About */}
          <Box id="about" sx={{ mb: 8 }}>
            <Avatar
              alt="Fernando García Reig"
              src="https://via.placeholder.com/150"
              sx={{
                width: 130,
                height: 130,
                mx: "auto",
                mb: 2,
                border: "3px solid",
                borderColor: "primary.main",
              }}
            />
            <Typography variant="h4" gutterBottom color="primary">
              Sobre mí
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis vulputate risus quis tempor. 
              Cras sed dictum nisl. In aliquam rhoncus risus, vitae venenatis nibh rhoncus vehicula. Vivamus vitae feugiat odio. 
              Quisque congue dui fringilla ligula euismod, eget dictum nisl fermentum. Nulla vehicula sapien a faucibus laoreet.</Typography>
          </Box>

          {/* Projects */}
          <Box id="projects" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom color="primary">
              Proyectos
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card elevation={4}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Proyecto 1
                    </Typography>
                    <Typography color="text.secondary">
                      Brazo robótico
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card elevation={4}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Proyecto 2
                    </Typography>
                    <Typography color="text.secondary">Otro</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Contact */}
          <Box id="contact" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom color="primary">
              Contacto
            </Typography>
            <Typography variant="body1">
              📧{" "}
              <Link
                href="mailto:fernando@gmail.com"
                underline="hover"
                color="secondary"
              >
                fernando@gmail.com
              </Link>
            </Typography>
          </Box>
        </Container>

        {/* Footer */}
        <Paper
          component="footer"
          square
          sx={{
            py: 2,
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white",
            mt: "auto",
          }}
        >
          <Typography variant="body2">
            © 2025 Fernando García Reig
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
