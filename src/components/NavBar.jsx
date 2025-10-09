import { AppBar, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ sections }) {
  const [value, setValue] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "home") {
      navigate("/");
    } else {
      const element = document.getElementById(newValue);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={2} sx={{ top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab key="home" label="Home" value="home" />
        {sections.map((section) => (
          <Tab key={section.id} label={section.label} value={section.id} />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
