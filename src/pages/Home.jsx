import { Typography, Container, Box, Grid, Card, CardContent, Avatar, Link, CardMedia } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import { Link as RouterLink } from "react-router-dom";

import theme from "../theme";
import Navbar from "../components/NavBar";

const sections = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const projects = [
  { id: 1, title: "6 DOF Robotic Arm", image: "https://i.gifer.com/origin/92/925ba5768833520f46fdf1046b195d4d_w200.gif" },
  { id: 2, title: "Project 2", image: "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyMnRxYzkyeWZvMnZxZzhkMG02dWVjajNvbnRhMmFhbXpmbmthcmQwNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HB6FPMDtaPKzolaMBk/200w.gif" },
  { id: 3, title: "Project 3", image: "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2021/12/Iyr_1640280771.gif" },
  { id: 4, title: "Project 4", image: "https://i.giphy.com/kraG1J5HIvU88.gif" },
];

function Home() {

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

        <Box className="header" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, flexDirection: 'column', py: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <BuildIcon sx={{ fontSize: 25, color: 'white' }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'white' }}>
              Fernando García Reig
            </Typography>
            <SettingsIcon sx={{ fontSize: 25, color: 'white' }} />
          </Box>

          <Typography variant="subtitle1" sx={{ color: 'white'}}>
            Industrial Engineer
          </Typography>
        </Box>

         <Navbar sections={sections} />
 
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
            <Grid container spacing={3} justifyContent="center">
              {projects.map((project) => (
                <Grid item xs={12} sm={6} md={5} lg={4} key={project.id}>
                  <Card
                    component={RouterLink}
                    to={`/project/${project.id}`}
                    className="project-card"
                    sx={{ mx: "auto" }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{ height: 200, objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography variant="h6" textAlign="center">
                        {project.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
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
           Fernando García Reig | © 2025 
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
