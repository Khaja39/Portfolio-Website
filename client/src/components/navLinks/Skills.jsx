import React from 'react';

const SKILLS_DATA = [
  {
    id: 'frontend',
    category: "Frontend Development",
    items: [
      "React.js (Functional Components, Custom Hooks)",
      "React Router (SPA & Multipage Routing)",
      "State Management (useState, useEffect, Context API)",
      "JavaScript (ES6+, Async/Await, DOM Manipulation)",
      "HTML5 & Tailwind CSS (Flexbox, Grid, Responsive Design)",
      "Bootstrap (Responsive UI Framework)"
    ]
  },
  {
    id: 'backend',
    category: "Backend & Database",
    items: [
      "Node.js (Event Loop, File System)",
      "Express.js (RESTful API Architecture, Middleware)",
      "PostgreSQL (Relational Schema Design)",
      "MongoDB (Non-Relational Data Base Design)",
      "Authentication (JWT, bcrypt, Google OAuth Integration)",
      "SQL (Complex Queries, Joins)"
    ]
  },
  {
    id: 'tools',
    category: "Tools & DevOps",
    items: [
      "Git & GitHub (Branching, Merging, PRs)",
      "Postman (API Testing & Documentation)",
      "VS Code (Extensions & Debugging)",
      "Vite (Modern Build Tool)",
      "Deployment (Vercel, Render)"
    ]
  },
  {
    id: 'professional',
    category: "Professional Experience (Amazon)",
    items: [
      "Process Optimization & SOP Adherence",
      "Cross-Functional Team Collaboration",
      "Agile Adaptability & Time Management",
      "Root Cause Analysis & Problem Solving"
    ]
  }
];

function Skills() {
  return (
    <div className="">
      <div>
        <h2 className="side-hdng">Skills</h2>
      </div>
      
      <div className="content-box">
        {SKILLS_DATA.map((group) => (
          <div key={group.id} className="skill-category">
            
            {/* Category Title */}
            <h3 className='side-hdng2'>{group.category}</h3>
            
            {/* List of Skills */}
            <ul className='content-box lst-spc'>
              {group.items.map((skill, index) => (
                <li key={index}>
                  {skill}
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;