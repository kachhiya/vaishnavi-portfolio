import React, { useEffect, useState } from "react";
import profile from "../assets/img/profile.jpeg";
import resume from "../assets/img/vaishnavi-resume.pdf";

const Hero = () => {
    const titles = ["MERN Stack Developer", "Software Developer"];

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
            className="min-h-screen w-full bg-[#111] flex items-center justify-center
                 pt-28 md:pt-32"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center
                       w-[85%]">

                {/* TEXT */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm <span className="text-purple-500">Vaishnavi</span>
                    </h1>

                    <h2 className="mt-4 text-xl sm:text-2xl text-gray-300 font-semibold min-h-[32px]">
                        {text}
                        <span className="text-purple-500 animate-pulse"> |</span>
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0">
                        I create scalable web applications using modern frontend and backend
                        technologies with clean UI and performance focus.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
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
                            download="Vaishnavi_Resume.pdf"
                            className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center order-1 md:order-2">
                    <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96
                          rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
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
