import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import "./Projects.css";

// Development Projects
const devProjects = [
  {
    title: "Renly Web Solutions",
    image: "/projects/renly-web.png",
    description:
      "Renly Web Solutions develops modern, responsive, and user-friendly websites for small businesses and personal brands.",
    tech: ["React", "CSS", "Vite"],
  },
  {
    title: "Cavite State University CCAT Website",
    image: "/projects/mappinternships.png",
    description:
      "A modern and responsive website developed to present university information and content.",
    tech: ["React", "CSS", "Vite"],
  },
  {
    title: "Money Track Expenses",
    image: "/projects/moneytrack.png",
    description:
      "A PHP–MySQL web application using OOP and PDO with CRUD operations, authentication, and a responsive dashboard.",
    tech: ["HTML", "CSS", "Bootstrap", "JS", "MySQL"],
  },
];

// Design Images
const designGallery = [
  "/design/matchday.jpg",
  "/design/stephen-curry.jpg",
  "/design/coffee-banner.png",
  "/design/pizza-banner.png",
  "/design/search-and-rescue-final.png",
];

// Mockup Design Projects
const mockupProjects = [
  {
    title: "CVSU CCAT OJT Finder",
    image: "/mockup/ccat.png",
    description:
      "A detailed visual mockup design for a client website, showcasing layout, color scheme, and typography before development.",
    tech: ["Canva"],
    gdriveLink: "https://drive.google.com/file/d/1RbzSTeP102nQ30iZ7aAse4dE4VbEPjHM/view?usp=drive_link"
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <Box className="section">
      <h2 className="section-title">Projects</h2>

      {/* Development Projects */}
      <h3 className="sub-title">Development</h3>
      <div className="projects-grid">
        {devProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => handleOpen(project.image)}
            />

            <h4>{project.title}</h4>
            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Graphic Design */}
      <h3 className="sub-title">Graphic Design</h3>
      <div className="design-grid">
        {designGallery.map((img, i) => (
          <div className="design-item" key={i} onClick={() => handleOpen(img)}>
            <img src={img} alt={`Design ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Mockup Design Projects */}
      <h3 className="sub-title">Website Mockup Design</h3>
      <div className="projects-grid">
        {mockupProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => handleOpen(project.image)}
            />

            <h4>{project.title}</h4>
            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <Box mt={1}>
              <Button
                // variant="contained"
                color="primary"
                href={project.gdriveLink}
                target="_blank"
              >
                View Full Mockup
              </Button>
            </Box>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box className="image-modal">
          <img src={selectedImage} alt="Selected Design" />
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;