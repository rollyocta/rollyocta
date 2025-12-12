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
          <p>Dec 2025</p>

          <div className="cert-header">
            <img src="/design/alison.png" alt="BScCS Certificate" />
            <div>
              <h4>Laravel Advanced Topics</h4>
              <p>Alison</p>
            </div>
          </div>
          
          <span>
            I completed the Laravel Advanced Topics course, where I learned advanced features like middleware, service providers, events, queues, and testing to build scalable web applications.
          </span>

          <div className="credentials">
            <a href="https://alison.com/verify/e1302d08c5" target="_blank" >Show Credentials</a>
          </div>

        </div> 

        <div className="cert-card">
          <p>Nov 2025</p>

          <div className="cert-header">
            <img src="/design/alison.png" alt="BScCS Certificate" />
            <div>
              <h4>Laravel Framework for Beginner</h4>
              <p>Alison</p>
            </div>
          </div>
          
          <span>
            I completed the Laravel Framework for Beginners course, where I gained a solid foundation in Laravel-based web application development, including MVC architecture, routing, controllers, and database integration.
          </span>

          <div className="credentials">
            <a href="https://alison.com/verify/0c765f6805" target="_blank" >Show Credentials</a>
          </div>
        </div>

        <div className="cert-card">
          <p>Nov 2025</p>
          <div className="cert-header">
            <img src="/design/alison.png" alt="BScCS Certificate" />
            <div>
              <h4>React Javascript - Fundamentals to Coding</h4>
              <p>Alison</p>
            </div>
          </div>
          
          <span>
            I completed the React JavaScript – Fundamentals to Coding course, where I developed a strong understanding of core React concepts, component-based architecture, state management, and building interactive user interfaces.
          </span>

          <div className="credentials">
            <a href="https://alison.com/certification/check/b42e1f4bb8" target="_blank" >Show Credentials</a>
          </div>
        </div>
      </div>

      
    </Box>
  );
};

export default Certificate;
