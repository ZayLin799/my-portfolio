import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            A highly motivated and adaptable Sofware Developer with 4+ years of
            experience designing and implementing reliable, scalable, and secure
            web applications. Proficient in backend technologies including
            Node.js, Nest.js, Laravel (PHP) , and database design, with
            expertise in RESTful APIs, authentication/authorization, and cloud
            deployment . Adept at building high-performance backend systems that
            drive user-centric solutions across diverse industries. Additionally
            skilled in Next.js and React for developing modern, responsive
            front-end interfaces when needed. Experienced working in fast-paced,
            multicultural teams, applying agile best practices, and writing
            clean, maintainable code. Strong problem-solving mindset with a
            proven ability to optimize performance, ensure system reliability,
            and deliver high-quality results across all stages of the software
            development lifecycle.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
