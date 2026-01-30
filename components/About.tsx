import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  const yearsOfExperience = Math.floor(
    (new Date().getTime() - new Date(2020, 5).getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-[1240px] w-full m-auto md:grid grid-cols-3 gap-16 px-6 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="space-y-2">
            <p className="uppercase text-sm tracking-[0.4em] text-primary font-bold">
              About Me
            </p>
            <h2 className="leading-tight">Architecting <span className="text-primary italic">Resilient Digital Solutions</span></h2>
          </div>

          <div className="glass-card leading-relaxed text-slate-400 space-y-4">
            <p>
              I am a highly motivated and adaptable Software Developer with{" "}
              <span className="text-white font-semibold">{yearsOfExperience}+ years</span> of experience
              designing and implementing high-performance systems.
            </p>
            <p>
              My expertise lies in building robust backend architectures using <span className="text-primary font-medium">Node.js, Nest.js, and Laravel</span>,
              complemented by state-of-the-art frontend development with <span className="text-primary font-medium">Next.js and React</span>.
            </p>
            <p>
              I believe in writing clean, maintainable code and building products that solve real-world
              problems while delivering a premium user experience.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/#projects">
              <span className="group flex items-center gap-2 text-primary font-bold cursor-pointer">
                View My Latest Projects
                <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all duration-300" />
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-2xl" />
            <div className="relative glass p-4 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={AboutImg}
                className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                alt="Zay Lin Htet"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(#2dd4bf_2px,transparent_2px)] [background-size:12px_12px] opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
