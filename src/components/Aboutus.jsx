import React from "react";
import profile from "../assets/img/profile.jpeg";

const AboutUs = () => {
    return (
        <section
            id="about"
            className="pt-16 sm:pt-20 bg-[#111] text-white w-full flex items-center justify-center "
        >
            <div className="max-w-6xl w-[85%] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                {/* Left Image */}
                <div className="hidden md:flex justify-center md:justify-start">
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-2xl w-full max-w-md 
               object-cover object-top 
               h-80 md:h-[90vh]"
                    />
                </div>


                {/* Right Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        My <span className="text-purple-500">Journey</span>
                    </h2>

                    <div className="flex flex-col gap-4">
                        <p className="text-gray-300 leading-relaxed">
                            My name is Vaishnavi. I have completed my B.Tech in Information
                            Technology from Charotar University of Science and Technology.
                            Currently, I am working at Param Group of Companies as a Software
                            Developer. I have around 1 year of experience, including 6 months
                            of internship as a MERN stack developer in the same company.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            I have hands-on experience in frontend development using React.js
                            and backend development using Knex.js as a query builder. I have
                            worked with PostgreSQL and MySQL databases and have experience in
                            API integration, CRUD operations, and bug fixing.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            I enjoy solving real-world problems, learning new tools, and
                            writing clean, maintainable code that delivers real value.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

                        <div className="bg-[#1c1c1c] p-6 rounded-xl text-left">
                            <h3 className="text-lg font-semibold mb-2">Innovative</h3>
                            <p className="text-gray-400 text-sm">
                                I enjoy creating smart solutions for complex problems.
                            </p>
                        </div>

                        <div className="bg-[#1c1c1c] p-6 rounded-xl text-left">
                            <h3 className="text-lg font-semibold mb-2">
                                Design Oriented
                            </h3>
                            <p className="text-gray-400 text-sm">
                                I focus on clean UI and smooth user experience.
                            </p>
                        </div>

                        <div className="bg-[#1c1c1c] p-6 rounded-xl text-left sm:col-span-2">
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
