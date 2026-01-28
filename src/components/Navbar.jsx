import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-white text-xl font-bold">
                            Vaishnavi
                        </a>
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
                        <li><a href="#home" className="hover:text-purple-400">Home</a></li>
                        <li><a href="#about" className="hover:text-purple-400">About</a></li>
                        <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
                        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
                        <li><a href="#experience" className="hover:text-purple-400">Experience</a></li>
                        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
                    </ul>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setOpen(true)}
                    >
                        ☰
                    </button>

                </nav>
            </header>

            {/* OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* SIDEBAR */}
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-[#111] z-50
        transform ${open ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                    <span className="text-white text-lg font-semibold">Menu</span>
                    <button
                        className="text-white text-2xl"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-6 py-8 text-gray-300 font-medium">
                    <li><a onClick={() => setOpen(false)} href="#home" className="hover:text-purple-400">Home</a></li>
                    <li><a onClick={() => setOpen(false)} href="#about" className="hover:text-purple-400">About</a></li>
                    <li><a onClick={() => setOpen(false)} href="#skills" className="hover:text-purple-400">Skills</a></li>
                    <li><a onClick={() => setOpen(false)} href="#projects" className="hover:text-purple-400">Projects</a></li>
                    <li><a onClick={() => setOpen(false)} href="#experience" className="hover:text-purple-400">Experience</a></li>
                    <li><a onClick={() => setOpen(false)} href="#contact" className="hover:text-purple-400">Contact</a></li>
                </ul>
            </aside>
        </>
    );
};

export default Navbar;
