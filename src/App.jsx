import { AppBar, Toolbar, Typography, Container, Box, Grid, Card, CardContent, Avatar, Paper, Link, CardMedia } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        }}
      >

        <AppBar position="static" elevation={3} className="header">
          <Toolbar sx={{ justifyContent: "center" }}>
            <Box textAlign="center">
              <Typography variant="h5">Fernando García Reig</Typography>
              <Typography variant="subtitle1">
                Industrial engineer
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="md"
          sx={{ py: 6, flex: 1, textAlign: "center" }}
        >

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
              Vestibulum a viverra lorem. Sed eget ex ante. Nulla quam lorem, convallis ac ultrices non, dictum vitae dui. Sed dignissim lacus risus, ac elementum neque convallis nec. Quisque scelerisque, augue ut condimentum pretium, mi est consectetur turpis, quis laoreet leo ipsum non nunc. Suspendisse vitae gravida risus.
            </Typography>
          </Box>

          <Box id="projects" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom color="primary">
              Projects
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card elevation={4} className="project-card">
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://i.gifer.com/origin/92/925ba5768833520f46fdf1046b195d4d_w200.gif"
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
                <Card elevation={4} className="project-card">
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Project 2
                    </Typography>
                    <Typography color="text.secondary">
                      Cras eu laoreet lorem, vel luctus orci. Pellentesque rutrum imperdiet felis, et luctus ipsum malesuada sed. Phasellus at egestas nisi. Donec laoreet quis justo a gravida. Praesent vel ullamcorper mauris. Cras ut nulla felis. Sed id ligula id ipsum eleifend feugiat. Mauris facilisis sem ac tellus euismod faucibus. Nullam finibus felis quis mauris placerat, id tempor massa pharetra. Nullam at libero ac ligula suscipit luctus quis ac nunc. Sed varius justo nisi, eget tempor justo pulvinar id
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card elevation={4} className="project-card">
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Project 3
                    </Typography>
                    <Typography color="text.secondary">
                      Ut ante sapien, luctus ac erat nec, commodo suscipit felis. Phasellus malesuada lacus dui, sit amet vehicula ex aliquet vitae. Donec cursus lacus leo, ac cursus ipsum imperdiet nec. Maecenas molestie tempus ex, consectetur laoreet metus sodales at. Curabitur congue commodo elit eget tristique. Vestibulum ex dolor, faucibus nec sagittis at, scelerisque quis lacus. Vestibulum sit amet gravida arcu, et pulvinar velit. Morbi commodo quam in erat ullamcorper consequat non ut augue.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card elevation={4} className="project-card">
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      Project 4
                    </Typography>
                    <Typography color="text.secondary">
                      Praesent nunc nibh, blandit a euismod a, sodales vel libero. Nam eu ultricies lorem, vitae interdum leo. Curabitur fringilla vehicula nisi. Ut a ante fermentum, venenatis neque vitae, consequat arcu. Etiam accumsan, tellus vel euismod tempor, nisl magna fermentum diam, a feugiat nisi ex sit amet diam. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box id="contact" sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom color="primary">
              Contact
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,           
                flexWrap: "wrap", 
                mt: 2,
              }}
            >
              <Box display="flex" alignItems="center">
                <EmailIcon className="contact-icon" />
                <Link
                  href="mailto:fernando@gmail.com"
                  className="contact-link"
                  target="_blank"
                  rel="noopener"
                >
                  fernando@gmail.com
                </Link>
              </Box>

              <Box display="flex" alignItems="center">
                <LaptopChromebookIcon className="contact-icon" />
                <Link
                  href="https://github.com/Fergrrobotics8"
                  className="contact-link"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </Link>
              </Box>

              <Box display="flex" alignItems="center">
                <LinkedInIcon className="contact-icon" />
                <Link
                  href="https://www.linkedin.com/in/fernando-garcia-reig/?originalSubdomain=es"
                  className="contact-link"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </Link>
              </Box>
            </Box>
          </Box>


        </Container>

        <Box
          square
          className="footer"
        >
          <Typography variant="body2">
            © 2025 
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
