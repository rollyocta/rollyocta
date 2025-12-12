import React from "react";
import { Box } from "@mui/material";
import "./Timeline.css";

// Add image/icon URLs for each skill
const skillSet = [
  {
    category: "Programming & Scripting Languages",
    skills: [
      { name: "JavaScript", icon: "/icons/js.png" },,
      { name: "PHP", icon: "/icons/php.jpg" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "HTML5", icon: "/icons/html.png" },
      { name: "CSS3", icon: "/icons/css.png" },
      { name: "SCSS", icon: "/icons/scss.png" },
    ],
  },
  {
    category: "Frameworks / Frontend Libraries",
    skills: [
      { name: "React.js", icon: "/icons/React.png" },
      { name: "Express.js", icon: "/icons/express.png" },
      { name: "Node.js", icon: "/icons/node.png" },
      { name: "Laravel", icon: "/icons/Laravel.png" },
      { name: "Bootstrap", icon: "/icons/bootstrap.png" },
      { name: "Material UI", icon: "/icons/matui.png" }
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
    ],
  },
  {
    category: "Version Control & Project Management",
    skills: [
      { name: "Git/GitHub", icon: "/icons/github.png" },
      { name: "Git", icon: "/icons/git.png" },
    ],
  },
  {
    category: "Deployment & Web Hosting",
    skills: [
      { name: "InfinityFree", icon: "/icons/infinityfree.png" },
      { name: "Hostinger", icon: "/icons/hostinger.png" },
      { name: "Vercel", icon: "/icons/vercel.png" },
    ],
  },
  {
    category: "Tools / Software",
    skills: [
      { name: "VS Code", icon: "/icons/vscode.png" },
      { name: "Adobe Photoshop", icon: "/icons/adobe.png" },
      { name: "Canva", icon: "/icons/canva.jpg" },
      { name: "Postman (API Testing)", icon: "/icons/postman.png" },
    ],
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
                  <li key={i}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    {skill.name}
                  </li>
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
