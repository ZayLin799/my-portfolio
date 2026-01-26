import React from "react";
import { MdWork, MdSchool, MdCardMembership } from "react-icons/md";

const Experience = () => {
    const experiences = [
        {
            date: "02/2025 – present",
            location: "Remote",
            title: "Full Stack Developer (Fulltime)",
            company: "XynoTech",
            description: [
                "Developed a Learning Management System (LMS) with Laravel, improving course management and user engagement",
                "Built an e-commerce platform with Laravel, delivering a seamless shopping experience and boosting conversions",
                "Created a Tele-Doctor platform using Express.js and Next.js, enabling smooth virtual consultations and enhancing user retention",
                "Developed a Movie Streaming Platform with NestJS, Next.js, and R2 Cloud Storage, ensuring secure, high-speed video streaming with a modern UI",
            ],
        },
        {
            date: "02/2023 – 02/2025",
            location: "Singapore, Remote",
            title: "Full-stack Software Developer (Fulltime)",
            company: "VIABELLS PTE. LTD",
            description: [
                "Developed a custom WordPress website for AM-Skincare with tailored themes and plugins — am-skincare.com",
                "Built a modern portfolio site for Viabells using React and Next.js — viabells.com",
                "Maintained and migrated the SDAX investment platform from Java Spring WebFlux to Express.js and Next.js, integrating Datadog for monitoring — sdax.co",
            ],
        },
        {
            date: "01/2022 – 02/2023",
            location: "Yangon, Myanmar",
            title: "Software Developer (Fulltime)",
            company: "AGGA.IO Co., Ltd",
            description: [
                "Developed a Clinic Management System for Pyit Tine Htaung Clinic with Laravel, MySQL, and Cordova, enhancing core features and enabling mobile access.",
                "Built a Lab Management System for the same clinic using Laravel APIs and Vue.js frontend for efficient test tracking and reporting.",
                "Enhanced an ISP Billing System (IQnet) with new features and offline mobile support using Laravel, MySQL, and Cordova.",
                "Created a Data Collection System for the Ministry of Union Government using Laravel, React Native, and MySQL, enabling both web and mobile data entry.",
                "Developed a Disabilities Information System (web + mobile) using Laravel, React Native, and MySQL, improving accessibility and centralized data management.",
            ],
        },
        {
            date: "12/2021 – 01/2022",
            location: "Myanmar, Remote",
            title: "Backend Developer (Volunteer)",
            company: "HeinLearn",
            description: [
                "Developed a School Management System as a Backend Developer using Laravel, PHP, and MySQL, delivering a robust, scalable platform with a responsive HTML5/CSS/Bootstrap interface.",
            ],
        },
        {
            date: "06/2021 – 10/2021",
            location: "Yangon, Myanmar",
            title: "Full-Stack Junior Developer (OJT)",
            company: "Marvellous Software Solution",
            description: [
                "Developed scalable web applications, collaborating closely with cross-functional teams.",
            ],
        },
        {
            date: "06/2019 – 01/2020",
            location: "Yangon, Myanmar",
            title: "WordPress Developer (Intern)",
            company: "I-See Media",
            description: [
                "Created powerful Content Management Systems to serve as interface for client.",
            ],
        },
    ];

    const education = [
        {
            date: "07/2020",
            degree: "BSc in Business Information Technology",
            school: "University of Greenwich (UK)",
        },
        {
            date: "03/2019",
            degree: "HND in Software Development",
            school: "Scottish Qualifications Authority (Scotland)",
        },
    ];

    const certificates = [
        {
            date: "Jun 2019",
            title: "Professional Web Developer",
            issuer: "Fairway Technology",
        },
        {
            date: "Feb 2023",
            title: "Rockstar Developer",
            issuer: "Fairway Technology",
        },
        {
            date: "Feb 2024",
            title: "DevOps Delivery",
            issuer: "Dev KT Ops",
        },
    ];

    return (
        <div id="experience" className="w-full p-2 py-16">
            <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Experience & Education
                </p>
                <h2 className="py-4">Professional Path</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Experience Section */}
                    <div className="col-span-1">
                        <div className="flex items-center py-4">
                            <MdWork className="text-[#5651e5] mr-2" size={30} />
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                                        <span className="text-sm font-semibold text-[#5651e5]">{exp.date}</span>
                                        <span className="text-sm text-gray-500 italic">{exp.location}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800">{exp.title}</h4>
                                    <p className="text-md font-medium text-gray-600 mb-4">{exp.company}</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certificates Section */}
                    <div className="col-span-1 space-y-8">
                        {/* Education */}
                        <div>
                            <div className="flex items-center py-4">
                                <MdSchool className="text-[#5651e5] mr-2" size={30} />
                                <h3 className="text-2xl font-bold">Education</h3>
                            </div>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                                        <span className="text-sm font-semibold text-[#5651e5]">{edu.date}</span>
                                        <h4 className="text-lg font-bold text-gray-800 mt-1">{edu.degree}</h4>
                                        <p className="text-gray-600 italic">{edu.school}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certificates */}
                        <div>
                            <div className="flex items-center py-4">
                                <MdCardMembership className="text-[#5651e5] mr-2" size={30} />
                                <h3 className="text-2xl font-bold">Certificates</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certificates.map((cert, index) => (
                                    <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                                        <span className="text-sm font-semibold text-[#5651e5]">{cert.date}</span>
                                        <h4 className="text-md font-bold text-gray-800 mt-1">{cert.title}</h4>
                                        <p className="text-xs text-gray-600 italic">{cert.issuer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
