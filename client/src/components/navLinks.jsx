import React from "react";
import Contact from "./navLinks/Contact.jsx";
import Education from "./navLinks/Education.jsx";
import ProfessionalExperience from "./navLinks/Professional Experience.jsx";
import Profileoverview from "./navLinks/Profileoverview.jsx";
import Projects from "./navLinks/Projects.jsx";
import Skills from "./navLinks/Skills.jsx";

function NavLinks() {
    const offsetClass = "scroll-mt-[350px]";
  return (
    <div className="flex flex-col gap-16 pb-20 container mx-auto">
      <section id="profile-overview" className={offsetClass}>
        <Profileoverview />
      </section>
      <section id="skills" className={offsetClass}>
        <Skills />
      </section>
      <section id="professional-experience" className={offsetClass}>
        <ProfessionalExperience />
      </section>
      <section id="projects" className={offsetClass}>
        <Projects />
      </section>
      <section id="education" className={offsetClass}>
        <Education />
      </section>
      <section id="contact" className={offsetClass}>
        <Contact />
      </section>
    </div>
  );
}

export default NavLinks;
