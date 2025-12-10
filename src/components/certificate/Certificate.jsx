import React from "react";
import { Box } from "@mui/material";
import "./Certificate.css";

const Certificate = () => {
  return (
    <Box className="cert-section">
      <h2 className="cert-title">Certificates, Courses & Training</h2>

      <div className="cert-group">
        <h3>Academic Background</h3>
        <div className="cert-card">
          <h4>Bachelor of Science in Information Technology</h4>
          <p>Cavite State University – CCAT</p>
          <span>
            Completed with hands-on academic and project-based training
          </span>
        </div>
      </div>

      <div className="cert-group">
        <h3>Technical & Professional Training</h3>
        <div className="cert-card">
          <h4>Web Development Fundamentals</h4>
          <ul>
            <li>HTML, CSS, JavaScript fundamentals</li>
            <li>Responsive web design principles</li>
            <li>Front-end development using React.js</li>
          </ul>
        </div>

        <div className="cert-card">
          <h4>Back-End & Database Basics</h4>
          <ul>
            <li>PHP (OOP concepts) and MySQL</li>
            <li>CRUD operations using PDO</li>
            <li>Basic authentication and data handling</li>
          </ul>
        </div>
      </div>

      <div className="cert-group">
        <h3>Virtual Assistant & Administrative Skills</h3>
        <div className="cert-card">
          <h4>Virtual Assistant Fundamentals</h4>
          <ul>
            <li>Email management and professional communication</li>
            <li>Task and calendar organization</li>
            <li>Data entry and reporting (Google Sheets / Excel)</li>
            <li>Productivity & collaboration tools familiarity</li>
          </ul>
        </div>
      </div>

      <div className="cert-group">
        <h3>Design & Content Creation</h3>
        <div className="cert-card">
          <h4>Graphic Design & Social Media Content</h4>
          <ul>
            <li>Canva-based visual content creation</li>
            <li>Social media post layouts & branding</li>
            <li>Caption writing with call-to-action</li>
            <li>Content planning using calendars</li>
          </ul>
        </div>
      </div>

      <div className="cert-group">
        <h3>Tools & Software</h3>
        <div className="cert-card">
          <ul className="tools-list">
            <li>Google Workspace</li>
            <li>Microsoft Word & Excel</li>
            <li>Canva</li>
            <li>Trello / Notion</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Certificate;
