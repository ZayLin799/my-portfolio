import React, { useState } from "react";
import { MdWork, MdSchool, MdCardMembership } from "react-icons/md";
import { RiPlayFill } from "react-icons/ri";

const Experience = () => {
    const experiences = [
        {
            date: "02/2025 – present",
            location: "Remote",
            title: "Full-stack Developer (Fulltime)",
            company: "XynoTech",
            description: [
                "<strong>Streaming Architecture</strong>: Deployed a high-speed <strong>Movie Streaming Platform</strong> using <strong>NestJS, Next.js, and R2 Cloud Storage</strong> to optimize delivery and storage costs.",
                "<strong>Platform Development</strong>: Built an <strong>LMS and E-commerce platform</strong> with <strong>Laravel</strong>, improving system efficiency and user transaction rates.",
                "<strong>HealthTech</strong>: Engineered a <strong>Tele-Doctor platform</strong> with <strong>Express.js and Next.js</strong>, enabling real-time consultations and high user retention.",
            ],
        },
        {
            date: "02/2023 – 02/2025",
            location: "Singapore, Remote",
            title: "Full-stack Software Developer (Fulltime)",
            company: "VIABELLS PTE. LTD",
            description: [
                "<strong>System Migration</strong>: Contributed the transition of the <strong>SDAX investment platform</strong> from <strong>Java Spring WebFlux to Express.js/Next.js</strong>.",
                "<strong>Reliability</strong>: Integrated <strong>Datadog</strong> for real-time monitoring and proactive error tracking to ensure 24/7 system availability.",
                "<strong>Custom Solutions</strong>: Developed a high-performance portfolio for <strong>Viabells</strong> and a custom <strong>WordPress/PHP</strong> ecosystem for <strong>A.M Skincare</strong>.",
            ],
        },
        {
            date: "01/2022 – 02/2023",
            location: "Yangon, Myanmar",
            title: "Software Developer (Fulltime)",
            company: "AGGA.IO Co., Ltd",
            description: [
                "<strong>Data Collection System</strong>: Built a high-security data collection platform for the <strong>Ministry of Union Government</strong> using <strong>Laravel and React Native</strong>, enabling synchronized web and mobile data entry.",
                "<strong>Disabilities Information System</strong>: Developed a centralized web and mobile management system to improve accessibility and data accuracy for national disability records.",
                "<strong>Healthcare Solutions</strong>: Engineered <strong>Clinic and Lab Management Systems</strong> using <strong>Laravel and Vue.js</strong>, streamlining patient tracking and diagnostic reporting for medical facilities.",
                "<strong>Telecom Infrastructure</strong>: Optimized the <strong>IQnet ISP Billing System</strong> by implementing new features and offline mobile support via <strong>Cordova</strong> to ensure service continuity.",
            ],
        },
        {
            date: "12/2021 – 01/2022",
            location: "Myanmar, Remote",
            title: "Backend Developer (Volunteer)",
            company: "HeinLearn",
            description: [
                "<strong>Educational Infrastructure</strong>: Designed a <strong>School Management System</strong> backend using <strong>Laravel and PHP</strong>, delivering a scalable platform with a responsive <strong>Bootstrap</strong> interface.",
            ],
        },
        {
            date: "06/2021 – 10/2021",
            location: "Yangon, Myanmar",
            title: "Full-Stack Junior Developer (OJT)",
            company: "Marvellous Software Solution",
            description: [
                "<strong>Collaborative Development</strong>: Contributed to the development of scalable web applications while collaborating closely with cross-functional teams to meet project milestones.",
            ],
        },
        {
            date: "06/2019 – 01/2020",
            location: "Yangon, Myanmar",
            title: "WordPress Developer (Intern)",
            company: "I-See Media",
            description: [
                "<strong>Custom CMS Development</strong>: Architected and customized <strong>Content Management Systems</strong> for diverse clients, focusing on intuitive interfaces that allowed non-technical users to manage digital content efficiently.",
                "<strong>Front-End Integration</strong>: Translated client requirements into functional web interfaces, ensuring cross-browser compatibility and responsive performance for early-stage digital projects.",
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

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="section-padding relative overflow-hidden w-full">
            <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
                <div className="space-y-4 mb-12 sm:mb-16 text-center sm:text-left">
                    <p className="uppercase text-xs sm:text-sm tracking-[0.4em] text-primary font-bold">
                        Journey
                    </p>
                    <h2 className="leading-tight text-white text-3xl sm:text-4xl md:text-5xl">Experience & <span className="text-primary italic">Education</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16">
                    {/* Experience Section */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-2">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-6 md:mb-8">Professional <span className="text-primary italic">Experience</span></h3>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 min-h-[auto] md:min-h-[450px]">
                            {/* Tabs container with improved touch area and scrollbar */}
                            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-white/10 shrink-0 mb-6 md:mb-0 pb-4 md:pb-0 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-primary/30">
                                {experiences.map((exp, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`
                                            whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 text-[10px] sm:text-[11px] font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase transition-all duration-300 text-left border-b-2 md:border-b-0 md:border-l-2
                                            !bg-transparent !shadow-none !rounded-none !translate-y-0 !scale-100
                                            ${activeTab === index
                                                ? "text-primary border-primary"
                                                : "text-slate-500 border-white/5 hover:text-primary hover:bg-white/5"}
                                        `}
                                        style={{
                                            background: activeTab === index ? 'rgba(45, 212, 191, 0.05)' : 'transparent',
                                            borderImage: 'none',
                                            outline: 'none'
                                        }}
                                    >
                                        {exp.company}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div key={activeTab} className="flex-1 space-y-6 animate-fadeIn pl-2">
                                <div className="space-y-2">
                                    <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                                        {experiences[activeTab].title} <span className="block sm:inline text-primary italic sm:before:content-['@_']">@ {experiences[activeTab].company}</span>
                                    </h4>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase">
                                            {experiences[activeTab].date}
                                        </p>
                                        <p className="text-xs text-primary/70 font-bold tracking-widest uppercase">
                                            {experiences[activeTab].location}
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-4 sm:space-y-5">
                                    {experiences[activeTab].description.map((item, i) => (
                                        <li key={i} className="text-slate-400 text-sm sm:text-[15px] leading-relaxed flex gap-3 sm:gap-4 cursor-default">
                                            <RiPlayFill className="text-primary mt-1.5 shrink-0" size={10} />
                                            <span dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-16 lg:col-span-1">
                        {/* Education */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary">
                                    <MdSchool size={24} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white">Education</h3>
                            </div>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="glass-card">
                                        <span className="text-[10px] sm:text-xs font-black tracking-widest text-primary uppercase">{edu.date}</span>
                                        <h4 className="text-md sm:text-lg font-bold text-white mt-1 sm:mt-2 tracking-tight">{edu.degree}</h4>
                                        <p className="text-xs sm:text-sm text-slate-400 font-medium italic">{edu.school}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certificates */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary">
                                    <MdCardMembership size={24} />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white">Certifications</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {certificates.map((cert, index) => (
                                    <div key={index} className="glass-card flex flex-col justify-between hover:bg-white/10 transition-colors">
                                        <div>
                                            <span className="text-[10px] sm:text-xs font-black tracking-widest text-primary uppercase">{cert.date}</span>
                                            <h4 className="text-sm sm:text-md font-bold text-white mt-1 sm:mt-2 leading-snug">{cert.title}</h4>
                                        </div>
                                        <p className="text-[10px] sm:text-xs text-slate-500 mt-3 sm:mt-4 font-medium italic">{cert.issuer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
