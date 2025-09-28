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
  CardMedia
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

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
              src="https://media.licdn.com/dms/image/v2/D4E03AQGNvd3dWPyZAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701253598519?e=1761782400&v=beta&t=NLACG7CnKa3TUd_9fq246D3g0pL0Vw4qBG2Ci4vKb2s"
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
              About me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Creative, quick-learner, teamworker, passionate about robotics and automation and, willing to improve and learn more day by day.
            </Typography>
          </Box>

          {/* Projects */}
          <Box id="projects" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom color="primary">
              Projects
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card elevation={4}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://media.licdn.com/dms/image/v2/C562DAQEZsSxHaKxIXA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1597638183705?e=1759698000&v=beta&t=zV3AiwHk86ElY-KBP-GEA_iG4woxuq2Q4wegcRFcK6c"
                    alt="Proyecto 1"
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Project 1
                    </Typography>
                    <Typography color="text.secondary">
                      This is my end-of-degree project. It's a low-cost 6 DOF
                      robotic arm based on Arduino, in which I took part in the
                      design, modeling, manufacturing and programming. It was a
                      fun and exciting experience and I learned a lot! Looking
                      forward to take my next step in this field.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card elevation={4}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Project 2
                    </Typography>
                    <Typography color="text.secondary">Otro</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card elevation={4}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Project 3
                    </Typography>
                    <Typography color="text.secondary">Otro</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card elevation={4}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Project 4
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
