import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <a href="#" className="text-white text-xl font-bold">
                        Vaishnavi
                    </a>
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                </div>

                {/* Menu */}
                <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
                    <li><a href="#" className="hover:text-purple-400">Home</a></li>
                    <li><a href="#about" className="hover:text-purple-400">About</a></li>
                    <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
                    <li><a href="#experience" className="hover:text-purple-400">Experience</a></li>
                    <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
                </ul>

            </nav>
        </header>
    );
};

export default Navbar;
