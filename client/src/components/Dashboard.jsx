import React, { useState } from "react";
import myImage from "../assets/pic.jpg";
import Navbar from "./navBar.jsx";
import NavLinks from "./navLinks.jsx";
import downLoad from "../assets/download.png";
import resume from "../assets/resume.png";
import phone from "../assets/phone-call.png";
import mail from "../assets/gmail.png";

function Dashboard() {
  const name = "Shaik Khaja Moinuddin";
  const skill = "Full Stack [PERN & MERN] Web Developer";
  const phNo = +918374156552;
  const gmail = "shaikkhaja193@gmail.com";
  const [activeTab, setActiveTab] = useState("profile-overview");
  return (
    <div className="bg-white px-8 pt-8 pb-4 sticky top-0 z-50">
      {/* --- Top Row: Name & Action Buttons --- */}
      <div className="flex justify-between items-start">
        {/* Left: Name and Title */}
        <div>
          <h1 className="text-xl font-bold text-slate-900">{name}</h1>
          <p className="text-slate-600 mt-1 text-sm font-medium">{skill}</p>
        </div>
        {/* Right: Resume Actions */}



        <div className="flex items-center gap-4">
          {/* View Resume Link */}

          <a
            href={myResumePdf} // Link to the same PDF import
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for new tabs
            className="group flex items-center gap-2 
      text-purple-700 text-sm font-bold 
      hover:text-purple-800 transition-colors"
          >
            <img src="/resume.pdf" alt="View" className="w-4 h-4" />
            View Resume
          </a>



            <a 
    href={myResumePdf2} // Assuming this is the file you want to download
    download="Shaik_Khaja_Resume"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-purple-800 transition-colors shadow-sm cursor-pointer"
  >
              <img src="/resume.pdf" alt="View" className="w-4 h-4 brightness-0 invert" />Download Resume</a>
        </div>
      </div>
      {/* --- Middle Row: Photo & Contact Info --- */}
      <div className="flex items-center gap-6 mt-8">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={myImage}
            alt="Profile"
            className="w-32 h-40 rounded-lg object-tap border-2 border-gray-100 shadow-sm"
          />
        </div>
        {/* Contact Details */}
        <div className="flex flex-col gap-2">
          {/* Phone */}
          <div className="flex items-center gap-3 text-slate-800 font-bold text-sm">
            {/* Optional: Add phone icon img here if you want */}
            <img src={phone} alt="Phone" className="w-4 h-4" />
            <h3>{phNo}</h3>
          </div>
          {/* Email */}
          <div className="flex items-center gap-3 text-slate-800 font-bold text-sm">
            {/* Optional: Add email icon img here if you want */}
            <img src={mail} alt="Phone" className="w-4 h-4" />
            <h3>{gmail}</h3>
          </div>
          <div>
            <Navbar activeTab={activeTab} onTabClick={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
