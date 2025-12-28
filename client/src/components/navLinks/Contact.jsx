import React from "react";
import gitHubIcon from "../../assets/icons8-github-32.png";
import linkedInIcon from "../../assets/icons8-linkedin-48.png";

function Contact() {
  return (
    <div>
      <div>
        <h2 className="side-hdng">Contact</h2>
      </div>
      <div className="content-box">
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center ">
          <a href="https://www.linkedin.com/in/khaja-developer/">
            <img src={linkedInIcon} alt="Description" className="w-24 h-auto"/>
          </a>
          <a href="https://github.com/Khaja39">
            <img src={gitHubIcon} alt="Description" className="w-24 h-auto"/>
          </a>
        </div>
        <div className="lst-spc">
          <div>
            <p><span className="font-bold">mail: </span>shaikkhaja193@gmail.com</p>
            
          </div>
          <div>
            <p><span className="font-bold">Ph.No: </span>+91-8374156552</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
