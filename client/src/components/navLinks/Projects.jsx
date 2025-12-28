import React from "react";
import myImage from "../../assets/image.png";
// import projectImage from '../assets/attendance-tracker.png'; // Uncomment when you have the image

const PROJECTS_DATA = [
  {
    id: "attendance-tracker",
    title: "Employee Attendance Tracker",
    description:
      "A full-stack PERN application designed to streamline employee attendance management. Features secure role-based authentication (Admin vs. Employee), real-time check-in/out logging, and an administrative dashboard to view daily records and monthly history.",
    tech: ["PostgreSQL,", "Express.js, ", "React.js, ", "Node.js, ", "JWT Auth"],
    githubLink: "https://github.com/Khaja39/Attendance-App",
    liveLink: "https://attendance-app-seven-mu.vercel.app/",
    imageUrl: myImage,
  }
];

function Projects() {
  return (
    <div className="">
      <div>
        <h2 className="side-hdng">Projects</h2>
      </div>

      <div className="content-box ">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="project-card">
            {/* 1. THE TILE (Clickable Preview Image) */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <div className="justify-center">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} Preview`}
                  className="w-full max-w-sm h-auto rounded-lg shadow-md mx-auto block"
                />
              </div>
            </a>

            <div className="project-details">
              {/* Title */}
              <h3 className="side-hdng2">{project.title}</h3>

              {/* Tech Stack Tags */}
              <div className="content-box">
                <div className="tech-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="flex-row side-hdng2 inline-block my-8 mx-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Description */}
                <p>{project.description}</p>
                {/* 2. ACTION BUTTONS */}
                <div className="project-actions my-6">
                  {/* GitHub Button */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github btn-pjt"
                  >
                    View Code (GitHub)
                  </a>
                  {/* Live Demo Button */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-live mx-4 btn-pjt"
                  >
                    Visit Website &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
