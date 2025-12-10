import React from "react";
import { AppBar, Toolbar, Typography, Button} from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar 
      position="sticky"
      elevation={0}
      sx={{ 
        backgroundColor: "#1B263B",
        zIndex: "1000",
        height: "90px",
        paddingTop: "30px",
      }}>
      <Toolbar>
          <Button component={Link} to="/" sx={{ color: "#F5F5F5" }}>
            Home
          </Button>
          <Button component={Link} to="/projects" sx={{ color: "#F5F5F5" }}>
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: "#D4AF37",
              color: "#1B263B",
            }}
          >
            Contact
          </Button>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
