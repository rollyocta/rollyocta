import React from "react";
import { Typography, Container, Box } from "@mui/material";

import "./Timeline.css"; // we'll create this file


const workExperience = [
  {
    title: "Freelance Developer",
    company: "Renly Web Solutions",
    period: "May 2023 - Present",
    description: [
      "Developed React.js websites and UI components",
      "Implemented CRUD functionality using Firebase and MongoDB",
      "Designed UI/UX mockups and prototypes for clients",
    ],
  },
  {
    title: "Business Unit Planner",
    company: "SanMiguel Integrated Logistics Services Incorporated | General Trias Cavite ",
    period: "Oct 2023 - March 2024 ",
    description: [
      "Develop and manage demand and supply plans to meet customer service levels and business goals. ",
      "Perform daily transactions using SAP (e.g., goods receipt, stock transfers, invoice processing, purchase order creation, etc.) ",
      "Generate and analyze reports from SAP for operational and management use",
      "Collaborate with cross-functional teams (purchasing, warehouse, finance, etc.) to ensure smooth workflow and resolve SAP-related issues ",
    ],
  },
  {
    title: "IT Support Intern",
    company: "Macro Wiring Technologies Co. Inc | Rosario, Cavite",
    period: "Oct 2023 - Feb 2024",
    description: [
      "Assisted in troubleshooting hardware, software, and network-related issues across departments",
      "Provided technical support to employees and ensured proper documentation of resolved issues",
      "Participated in system maintenance tasks, including software updates and backups",
      "Contributed to data entry, documentation, and updating IT manuals or user guides",
      "Designed marketing and internal materials such as banners and digital posters for company events or announcements",
      "Utilized design tools (e.g., Adobe Photoshop, Canva, or similar software) to create visually engaging content aligned with branding guidelines",
      "Collaborated with teams to understand design requirements and deliver outputs on time",
    ],
  },
  {
    title: "Independent / Freelance Experience (Lead Programmer  )",
    company: "AG Software Solutions",
    period: "Feb 2023 – April 2024",
    description: [
      "Developed responsive and user-focused web pages using modern tools like HTML, CSS, JavaScript, and Bootstrap  ",
      "Took design concepts from idea to execution, ensuring the interface was both clean and functional ",
      "Tested and refined front-end code to work smoothly across various browsers and device sizes",
      "Managed time effectively to meet deadlines without compromising the quality of the final output ",
      "Offered clients easy-to-follow guidance and support for navigating and maintaining their web solutions ",
    ],
  },
];

const Work = () => {
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
        {workExperience.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <h5>
                {job.company} | {job.period}
              </h5>
              <ul>
                {job.description.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};


export default Work;