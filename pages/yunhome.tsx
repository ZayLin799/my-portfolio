import Image from "next/image";
import React from "react";
import YunHomeImg from "../public/assets/projects/YunHome.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const yunhome = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-dark/80 z-10 backdrop-blur-[2px]" />
                <Image
                    className="absolute z-1"
                    src={YunHomeImg}
                    alt="Yun Home Renovation"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-6">
                    <h2 className="py-2 text-5xl md:text-6xl font-black tracking-tight">Yun Home Renovation</h2>
                    <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Next.js / TypeScript / Tailwind CSS</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-12 py-16">
                <div className="col-span-4 space-y-6">
                    <div className="space-y-2">
                        <p className="uppercase text-sm tracking-[0.4em] text-primary font-bold">Project</p>
                        <h2 className="text-3xl font-bold text-white">Overview</h2>
                    </div>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                        Yun Home Renovation is a high-performance platform dedicated to home
                        improvement and renovation services. I developed this application
                        from scratch using Next.js, TypeScript, and Tailwind CSS for both
                        the frontend and backend. The project focuses on speed, SEO, and
                        a premium user experience to showcase renovation services effectively.
                    </p>
                    <div className="pt-4">
                        <a
                            href="https://yunhomerenovation.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="px-10">Live Demo</button>
                        </a>
                    </div>
                </div>

                <div className="col-span-4 md:col-span-1">
                    <div className="glass-card bg-white/[0.03] space-y-6">
                        <p className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase">Technologies</p>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                            {[
                                "Next.js",
                                "TypeScript",
                                "Tailwind CSS",
                                "AWS / Ubuntu"
                            ].map((tech, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                    <RiRadioButtonFill className="text-primary" /> {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    <Link href="/#projects">
                        <span className="group flex items-center gap-2 text-slate-500 hover:text-primary transition-colors cursor-pointer font-bold">
                            <div className="w-8 h-[1px] bg-slate-700 group-hover:bg-primary transition-all" />
                            Back to Projects
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default yunhome;
