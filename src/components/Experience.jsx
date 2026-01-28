import React from "react";

const Experience = () => {
    const experiences = [
        {
            role: "Software Developer",
            company: "Param Group of Companies",
            duration: "Aug 2025 - Present",
            description:
                "Working on frontend development using React.js and backend development using Knex.js. Building scalable modules, integrating APIs, and working with PostgreSQL and MySQL databases.",
        },
        {
            role: "MERN Stack Developer Intern",
            company: "Param Group of Companies",
            duration: "Feb 2025 - July 2025",
            description:
                "Contributed to live production-level projects. Gained hands-on experience in React.js, backend query building with Knex.js, and database operations.",
        },
        {
            role: "Web Developer Intern",
            company: "Prodigy Infotech",
            duration: "May 2024 - July 2024",
            description:
                "Designed and developed a responsive portfolio website, interactive Tic-Tac-Toe game, and functional stopwatch application using HTML, CSS, and JavaScript",
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 bg-[#111] text-white w-full flex items-center justify-center"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">
                    Work <span className="text-purple-500">Experience</span>
                </h2>
                <p className="text-gray-400 text-center mt-3 mb-16">
                    My professional journey so far
                </p>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 h-full w-[2px] bg-purple-500/40"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex gap-10">
                                {/* Dot */}
                                <div className="relative z-10">
                                    <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                                </div>

                                {/* Card */}
                                <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full max-w-3xl">
                                    <div className="flex flex-wrap justify-between items-center mb-2">
                                        <h3 className="text-xl font-semibold">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                                            {exp.duration}
                                        </span>
                                    </div>

                                    <p className="text-purple-400 text-sm mb-3">
                                        {exp.company}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
