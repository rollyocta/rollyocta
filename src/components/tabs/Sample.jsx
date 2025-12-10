import React from "react";
import "./WorkTimeline.css"; // we'll create this file

const workExperience = [
  {
    title: "Freelance Developer",
    company: "Renly Web Solutions",
    period: "May 2023 - Present",
    description: "Developed React.js websites and UI components.",
  },
  {
    title: "BU Planner",
    company: "San Miguel Integrated Logistics Services",
    period: "Jun 2021 - Dec 2022",
    description: "Managed business operations and logistics planning.",
  },
  {
    title: "Intern",
    company: "Some IT Company",
    period: "Jan 2021 - May 2021",
    description: "Assisted in web development projects and testing.",
  },
];

export default function WorkTimeline() {
  return (
    <div className="timeline">
      {workExperience.map((job, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>{job.title}</h3>
            <h5>{job.company} | {job.period}</h5>
            <p>{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
