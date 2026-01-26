import Image from "next/image";
import React from "react";
import YunHomeImg from "../public/assets/projects/YunHome.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const yunhome = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={YunHomeImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Yun Home Renovation</h2>
                    <h3>Next.js / TypeScript / Tailwind CSS</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Yun Home Renovation is a high-performance platform dedicated to home
                        improvement and renovation services. I developed this application
                        from scratch using Next.js, TypeScript, and Tailwind CSS for both
                        the frontend and backend. The project focuses on speed, SEO, and
                        a premium user experience to showcase renovation services effectively.
                    </p>
                    <a
                        href="https://yunhomerenovation.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a>
                </div>
                <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
                    <div className="p-2">
                        <p className="pb-2 font-bold text-center">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" /> Next.js
                            </p>
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" /> TypeScript
                            </p>
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
                            </p>
                            <p className="flex items-center py-2 text-gray-600">
                                <RiRadioButtonFill className="pr-1" />
                                AWS / Ubuntu
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default yunhome;
