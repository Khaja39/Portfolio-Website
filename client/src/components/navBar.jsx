import React from "react";

const NAV_LINKS = [
    { label: 'Profile Overview', id: 'profile-overview'},
    { label: 'Skills', id: 'skills'},
    { label: 'Professional Experience', id: 'professional-experience'},
    { label: 'Projects', id: 'projects'},
    { label: 'Education', id: 'education'},
    { label: 'Contact', id: 'contact'},
]

function Navbar({ activeTab, onTabClick}) {

    const handleScroll = (id) => {
        // 1. Update the active state (so the tab turns purple)
        onTabClick(id);

        // 2. Find the element and scroll to it
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="navbar">
            <ul className="flex gap-8 overflow-x-auto items-center">
               {NAV_LINKS.map((link) => (
                <li
                        key={link.id}
                        className={`cursor-pointer whitespace-nowrap pb-2 border-b-2 transition-colors duration-300 
                            ${activeTab === link.id 
                                ? 'border-purple-700 text-purple-700 font-bold' // Active Style
                                : 'border-transparent text-slate-600 hover:text-purple-700' // Inactive Style
                            }`}
                        
                        // FIX IS HERE: Call handleScroll instead of onTabClick directly
                        onClick={() => handleScroll(link.id)}
                    >
                        {link.label} 
                    </li>
               ))}
            </ul>
        </nav>
    );
}
export default Navbar;