import React from "react";
// import locationIcon from "../assets/location.png";
// import emailIcon from "../assets/email.png";
// import phoneIcon from "../assets/phone.png";
// import github from "../assets/github.png";
// import linkedin from "../assets/linkedin.png";
// import twitter from "../assets/twitter.png";
// import  from "../assets/dribbble.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";

const Contactus = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-[#111] text-white w-full flex items-center justify-center"
        >
            <div className="w-[85%]">
                <h2 className="text-4xl font-bold text-center">
                    Get In <span className="text-purple-500">Touch</span>
                </h2>
                <p className="text-gray-400 text-center mt-3 mb-14">
                    Have a project in mind or want to collaborate? Let's talk!
                </p>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* LEFT FORM */}
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="space-y-5"
                    >
                        {/* ACCESS KEY */}
                        <input
                            type="hidden"
                            name="access_key"
                            value="ad4ba8fe-9acb-4688-a29f-2f2cf1310eb9"
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-lg"
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            className="w-full bg-[#1a1a1a] border border-gray-700 px-4 py-3 rounded-lg"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* RIGHT INFO */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-gray-400 text-sm">Rajpipla, Gujarat</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-gray-400 text-sm">
                                   vaishnavikachhiya2824@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p className="text-gray-400 text-sm">
                                    +91 91066 10148
                                </p>
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div>
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                    
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/vaishnavi-kachhiya-5523b1238/" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition">
                                  <img src={linkedin} alt="instagram" className="w-5 h-5" /></a>
                                <a href="https://www.instagram.com/vaishnavi_28024/?hl=en" target="_blank" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition">
                                    <img src={instagram} alt="instagram" className="w-5 h-5" /></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactus;
