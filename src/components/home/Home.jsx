import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FileDown, Linkedin, Github } from "lucide-react";

import TabsLayout from "../tabs/TabsLayout";
import Projects from "../projects/Projects";
import Certificates from "../certificate/Certificate";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#1B263B", marginTop : "0px"}}>
      <Grid container spacing={2}>
        
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6} sx={{ marginInline: "auto" }}>
          <Container sx={{ mt: 10 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#D4AF37",
                letterSpacing: "3px",
                mb: 2,
              }}
            >
              Rolly Octa
            </Typography>

            <Typography sx={{ color: "#F5F5F5", mb: 5 }}>
              <span style={{ fontWeight: 700 }}>
                Freelance Digital and Web Developer.
              </span>
              <br />
              from the Philippines.
            </Typography>

            <Stack spacing={1} direction="row">
              <Button variant="outlined">Resume <FileDown size={13} style={{ marginLeft: "8px" }} /> </Button>
              <a href="https://www.linkedin.com/in/rolly-octa/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button>
                  <Linkedin />
                </Button>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button>
                  <Github />
                </Button>
              </a>
            </Stack>
          </Container>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={6} sx={{ marginInline: "auto" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5F5F5",

            }}
          >
            <img
              src="/Protfolio-Profile-Picture.png"
              alt="Profile"
              style={{ height: "300px" }}
            />
          </Box>
        </Grid>

      </Grid>

      <div>
        <TabsLayout />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Certificates />
      </div>

      <div>
        <Contact />
      </div>
    </Box>
  );
};

export default Home;
