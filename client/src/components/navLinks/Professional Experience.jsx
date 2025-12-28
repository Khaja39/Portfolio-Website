import React from 'react';

const EXPERIENCE_DATA = [
  {
    id: 'amazon',
    role: "Process Associate",
    company: "Amazon",
    duration: "Sep 2022 - Present", 
    description: [
      
      "Executing complex operational workflows with high precision, consistently maintaining 99.9% accuracy in data processing.",
      "Collaborating in a fast-paced, Agile-like environment to meet strict Service Level Agreements (SLAs) and production targets.",
      "Performing root cause analysis on operational discrepancies and providing actionable feedback for process improvement.",
      "Demonstrating adaptability by quickly learning new proprietary software tools and adhering to evolving Standard Operating Procedures (SOPs)."
    ]
  }
];

function ProfessionalExperience() {
  return (
    <div >
      <div>
        <h2 className="side-hdng">Professional Experience</h2>
      </div>
      
      
      <div className="content-box">
        {EXPERIENCE_DATA.map((job) => (
          <div key={job.id} className="job-entry">
            
            <div className="job-header">
              <h3 className='side-hdng2'>{job.role}</h3>
              <h4 className='side-hdng2'>{job.company} | <span>{job.duration}</span></h4>
            </div>

            <ul className='lst-spc'>
              {job.description.map((point, index) => (
                <li key={index}>
                  {point}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalExperience;