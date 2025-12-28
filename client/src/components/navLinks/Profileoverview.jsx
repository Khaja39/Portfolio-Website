import React from "react";

const PROFILE_HIGHLIGHTS = [
  {
    id: "intro",
    text: "Aspiring <b>Full Stack Web Developer</b> with a strong foundation in both <b>MERN & PERN stacks</b>, combining technical expertise with 3 years of professional corporate experience at <b>Amazon</b>.",
  },
  {
    id: "frontend",
    text: "Specialized in building responsive, <b>single-page applications (SPA)</b> & multi-page applications (MPA) using <b>React.js and Hooks</b>, translating complex requirements into user-friendly interfaces.",
  },
  {
    id: "backend",
    text: "Extensive work on Backend Development using <b>Node.js and Express</b>, architecting secure RESTful APIs. Skilled in designing normalized schemas for <b>PostgreSQL</b> and flexible document structures for <b>MongoDB</b>.",
  },
  {
    id: "security",
    text: "Implemented robust authentication systems featuring <b>Google OAuth integration</b> alongside secure local login strategies (using <b>bcrypt</b> for hashing and <b>JWT</b> for session management).",
  },
  {
    id: "sdlc",
    text: "Strong understanding of the <b>software development lifecycle (SDLC)</b> and version control using <b>Git/GitHub</b>, with hands-on experience deploying applications to cloud platforms.",
  },
  {
    id: "amazon",
    text: "Leveraging 3 years of <b>operational excellence</b> as a Process Associate, bringing high attention to detail, adaptability in fast-paced <b>Agile environments</b>, and problem-solving skills.",
  },
  {
    id: "closing",
    text: "Proven ability to handle <b>end-to-end development</b>: from database modeling (SQL & NoSQL) and API integration to frontend implementation and system optimization.",
  },
];

function ProfileOverview() {
  return (
    <div>
      <h2 className="side-hdng">Profile Overview</h2>
      <div className="content-box">
        <ul className="lst-spc">
          {PROFILE_HIGHLIGHTS.map((item) => (
            <li
              key={item.id}
              dangerouslySetInnerHTML={{ __html: item.text }}
              className="inline-html"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileOverview;
