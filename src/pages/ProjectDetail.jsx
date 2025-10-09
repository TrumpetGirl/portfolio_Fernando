import { useParams, Link } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";

import Navbar from "../components/NavBar";

const sections = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const projects = [
  { 
    id: 1, 
    title: "6 DOF Robotic Arm", 
    image: "https://i.gifer.com/origin/92/925ba5768833520f46fdf1046b195d4d_w200.gif", 
    description: "This is my end-of-degree project. It's a low-cost 6 DOF robotic arm based on Arduino, in which I took part in the design, modeling, manufacturing and programming. It was a fun and exciting experience and I learned a lot! Looking forward to take my next step in this field" 
  },
  { id: 2, title: "Project 2", image: "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyMnRxYzkyeWZvMnZxZzhkMG02dWVjajNvbnRhMmFhbXpmbmthcmQwNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HB6FPMDtaPKzolaMBk/200w.gif", description: "Descripción del proyecto 2..." },
  { id: 3, title: "Project 3", image: "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2021/12/Iyr_1640280771.gif", description: "Descripción del proyecto 3..." },
  { id: 4, title: "Project 4", image: "https://i.giphy.com/kraG1J5HIvU88.gif", description: "Descripción del proyecto 4..." },
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <Typography>Proyecto no encontrado</Typography>;

  return (
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

    <Box sx={{ maxWidth: 600, mx: "auto", py: 5, textAlign: "center" }}>
      <Card>
        <CardMedia component="img" height="300" image={project.image} alt={project.title} />
        <CardContent>
          <Typography variant="h5" gutterBottom>{project.title}</Typography>
          <Typography variant="body1">{project.description}</Typography>
        </CardContent>
      </Card>
    </Box>
    </Box>
  );
}

export default ProjectDetail;
