import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import "./Projects.css";

// Development Projects
const devProjects = [
  {
    title: "Cavite State University CCAT Website",
    description:
      "A modern and responsive website developed to present university information and content.",
    tech: ["React", "CSS", "Vite"],
  },
  {
    title: "Money Track Expenses",
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

      {/* Design Gallery */}
      <h3 className="sub-title">Graphic Design</h3>
      <div className="design-grid">
        {designGallery.map((img, i) => (
          <div
            className="design-item"
            key={i}
            onClick={() => handleOpen(img)}
          >
            <img src={img} alt={`Design ${i + 1}`} />
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
