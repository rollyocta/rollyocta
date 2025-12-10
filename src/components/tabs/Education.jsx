import React from "react";
import { Box } from "@mui/material";
import "./Timeline.css";

const educationHistory = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Cavite State University - CCAT",
    description: [
      "Relevant Coursework: Web Development, Database Management, Network Security",
    ],
  },
  {
    degree: "Technical Vocational Livelihood - Information and Communication Technology Strand",
    school: "Tanza National Trade School (Main Campus)",
    description: [
      "Relevant Coursework: Computer Systems, Networking, Basic Programming",
    ],
  },
];

const Education = () => {
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
      {educationHistory.map((edu, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>{edu.degree}</h3>
            <h5>{edu.school}</h5>
            <ul>
              {edu.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </Box>
  );
}

export default Education;
