import React from "react";
// import frontendIcon from "../assets/icons/frontend.png";
// import backendIcon from "../assets/icons/backend.png";
// import databaseIcon from "../assets/icons/database.png";
// import toolsIcon from "../assets/icons/tools.png";

const Skills = () => {
    const skillsData = [
        {
            title: "Frontend Development",
            // icon: frontendIcon,
            desc: "Building responsive and interactive user interfaces.",
            tech: ["React.js", "Tailwind CSS", "TanStack Query", "Redux Saga"],
        },
        {
            title: "Backend Development",
            // icon: backendIcon,
            desc: "Developing scalable REST APIs and business logic.",
            tech: ["Knex.js", "Node.js", "REST APIs"],
        },
        {
            title: "Database Management",
            // icon: databaseIcon,
            desc: "Designing and managing relational databases.",
            tech: ["PostgreSQL", "MySQL"],
        },
        {
            title: "Tools & Workflow",
            // icon: toolsIcon,
            desc: "Tools used for development and collaboration.",
            tech: ["Git & GitHub", "Postman", "Swagger"],
        },
    ];

    return (
        <section
            id="skills"
            className="pt-16 sm:pt-20 bg-[#111] text-white flex items-center justify-center w-full"
        >
            <div className="w-[85%] ">
                <h2 className="text-2xl sm:text-4xl font-bold text-center">
                    My <span className="text-purple-500">Skills</span>
                </h2>
                <p className="text-gray-400 text-center mt-3 mb-14">
                    Technologies I work with to build scalable applications
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                        >
                            {/* <img
                                src={item.icon}
                                alt={item.title}
                                className="w-10 h-10 mb-4"
                            /> */}

                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm sm:text-base mb-4">
                                {item.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-sm bg-[#262626] px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
