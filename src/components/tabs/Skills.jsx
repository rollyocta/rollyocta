import React from "react";
import { Box } from "@mui/material";
import "./Timeline.css"; // same CSS style as timeline

const skillSet = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "HTML5", "CSS3", "PHP", "Python"],
  },
  {
    category: "Frameworks / Libraries",
    skills: ["React.js", "Express.js", "Node.js", "Laravel"],
  },
  {
    category: "Databases",
    skills: ["Firebase Firestore", "MongoDB", "MySQL"],
  },
  {
    category: "Tools / Software",
    skills: ["VS Code", "Git/GitHub", "Adobe Photoshop", "Canva"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Collaboration", "Time Management"],
  },
];

const Skills = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        marginTop: "20px",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <div className="timeline">
        {skillSet.map((category, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{category.category}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Skills;
