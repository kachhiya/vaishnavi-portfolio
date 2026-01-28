import React from "react";
import paramCare from "../assets/img/e.png";
import restaurant from "../assets/img/restaurant.png";
import leaveApp from "../assets/img/leave.png";
import social from "../assets/img/work5.jpg";
// import restaurant from "../assets/projects/restaurant.jpg";
// import leaveApp from "../assets/projects/leave-app.jpg";

const Projects = () => {
    const projects = [
        {
            title: "Param Care – E-Commerce Platform",
            image: paramCare,
            desc: "An e-commerce web application for health, beauty, and wellness products with blogs and admin panel.",
            tech: ["React.js","Tailwind CSS", "Redux Saga", "Knex.js", "PostgreSQL"],
            demo: "#",
            code: "#",
        },
        {
            title: "Restaurant Management System",
            image: restaurant,
            desc: "A role-based system for managing orders, menu items, and operations across admin, chef, and front desk.",
            tech: ["React.js", "Tailwind CSS", "Knex.js", "REST APIs", "PostgreSQL"],
            demo: "#",
            code: "#",
        },
        {
            title: "Leave Management System",
            image: leaveApp,
            desc: "A web application to manage employee leave requests with employee, admin, and super-admin roles.",
            tech: ["React.js", "Tailwind CSS", "Vitest", "Knex.js", "MySQL"],
            demo: "#",
            code: "#",
        },
        {
            title: "Social Media Plateform",
            image: social,
            desc: "A social media web application that allows users to create profiles, post content, like and comment on posts, and interact in real time with a modern, responsive UI.",
            tech: ["React.js", "Tailwind CSS", "Vitest"],
            demo: "#",
            code: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="pt-16 sm:pt-20 bg-[#111] text-white flex items-center justify-center w-full"
        >
            <div className="w-[85%]">
                <h2 className="text-2xl sm:text-4xl font-bold text-center">
                    My <span className="text-purple-500">Projects</span>
                </h2>
                <p className="text-gray-400 text-center mt-3 mb-14">
                    A selection of my recent work
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-[#262626] px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        className="px-4 py-2 text-sm rounded-md bg-purple-600 hover:bg-purple-700 transition"
                                    >
                                        View Demo
                                    </a>
                                    <a
                                        href={project.code}
                                        className="px-4 py-2 text-sm rounded-md border border-gray-500 hover:border-purple-500 transition"
                                    >
                                        Code
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
