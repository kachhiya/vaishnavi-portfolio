import React from "react";
import profile from "../assets/img/profile.jpeg";

// import code from "../assets/icons/code.png";

const AboutUs = () => {
    return (
        <section
            id="about"
            className="py-20 bg-[#111] text-white w-full flex items-center justify-center"
        >
            <div className="w-[80%] grid md:grid-cols-2 gap-12 items-center justify-between">

                {/* Left Image */}
                <div>
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-2xl w-full object-cover object-top h-[90vh]"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">
                        My <span className="text-purple-500">Journey</span>
                    </h2>

                    <div className="flex flex-col gap-[10px]">
                        <p className="text-gray-300 leading-relaxed">
                            My name is Vaishnavi. I have completed my B.Tech in Information Technology in Charotar University of science and technology.
                            Currently, I am working at Param Group of Companies as a Software Developer.
                            I have around 1 year of experience, including 6 months of internship as a MERN stack developer in same company.
                        </p>
                        <p>I have hands-on experience in frontend development using React.js and backend development using Knex.js as a query builder.
                            I have worked with PostgreSQL and MySQL databases and have experience in API integration, CRUD operations, and bug fixing.</p>

                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I enjoy solving real-world problems, learning new tools, and writing
                            clean, maintainable code that delivers real value.
                        </p>
                   </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* Innovative */}
                        <div className="bg-[#1c1c1c] p-6 rounded-xl">
                            {/* <img
                                src={lightbulb}
                                alt="Innovative"
                                className="w-8 h-8 mb-4"
                            /> */}
                            <h3 className="text-lg font-semibold mb-2">Innovative</h3>
                            <p className="text-gray-400 text-sm">
                                I enjoy creating smart solutions for complex problems.
                            </p>
                        </div>

                        {/* Design */}
                        <div className="bg-[#1c1c1c] p-6 rounded-xl">
                            {/* <img
                                src={paintbrush}
                                alt="Design Oriented"
                                className="w-8 h-8 mb-4"
                            /> */}
                            <h3 className="text-lg font-semibold mb-2">
                                Design Oriented
                            </h3>
                            <p className="text-gray-400 text-sm">
                                I focus on clean UI and smooth user experience.
                            </p>
                        </div>

                        {/* Clean Code */}
                        <div className="bg-[#1c1c1c] p-6 rounded-xl">
                            {/* <img
                                src={code}
                                alt="Clean Code"
                                className="w-8 h-8 mb-4"
                            /> */}
                            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
                            <p className="text-gray-400 text-sm">
                                I write readable, reusable, and scalable code.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
