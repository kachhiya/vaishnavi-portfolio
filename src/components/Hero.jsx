import React, { useEffect, useState } from "react";
import profile from "../assets/img/profile.jpeg"; 
import resume from "../assets/img/vaishnavi-resume.pdf"; 

const Hero = () => {

    const titles = [
        "MERN Stack Developer",
        "Software Developer"
    ];
      
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = titles[index];

        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentText.charAt(charIndex));
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const delay = setTimeout(() => {
                setText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % titles.length);
            }, 1500);
            return () => clearTimeout(delay);
        }
    }, [charIndex, index]);
    return (
        <section
            id="home"
            className="min-h-screen w-full bg-[#111] flex items-center justify-center"
        >
            <div className=" grid md:grid-cols-2 justify-between items-center w-[80%]">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm {" "}
                        <span className="text-purple-500">Vaishnavi</span>
                    </h1>

                    <h2 className="mt-4 text-2xl text-gray-300 font-semibold">
                        {text}
                        <span className="text-purple-500 animate-pulse"> |</span>
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-md">
                        I create scalable web applications using modern frontend
                        and backend technologies with clean UI and performance focus.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <a
                            href="#projects"
                            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition"
                        >
                            View Work
                        </a>

                        <a
                            href="#contact"
                            className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                        >
                            Contact Me
                        </a>
                        <a
                            href={resume}
                            download=" /Vaishnavi_Resume.pdf"
                            className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                        >
                            Download Resume
                        </a>



                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                        <img
                            src={profile}
                            alt="Vaishnavi"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
