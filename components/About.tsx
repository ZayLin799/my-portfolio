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
            <p className="uppercase text-[10px] sm:text-xs tracking-[0.6em] text-primary font-bold">
              ABOUT ME
            </p>
            <h2 className="leading-tight">Architecting <span className="text-primary font-bold">Resilient Digital Solutions</span></h2>
          </div>

          <div className="glass-card leading-relaxed text-slate-400 space-y-4">
            <p>
              I am a <span className="text-white font-semibold">Senior Full-Stack Software Developer</span> with over{" "}
              <span className="text-white font-semibold">{yearsOfExperience}+ years</span> of experience
              designing and deploying high-availability, mission-critical systems for web and mobile.
            </p>
            <p>
              I specialize in architecting secure, distributed backend systems using <span className="text-primary font-medium">Node.js, Nest.js and Laravel</span>,
              complemented by high-performance, user-centric interfaces built with <span className="text-primary font-medium">Next.js and React</span>.
            </p>
            <p>
              My expertise centers on <span className="text-white font-medium">legacy system modernization</span> and
              optimizing cloud-native infrastructures to improve system observability, resilience, and operational efficiency.
            </p>
            <p>
              With a track record ranging from national government platforms to complex fintech migrations, I prioritize
              <span className="text-white font-medium"> clean architecture and scalable design</span> to ensure
              long-term maintainability and business growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-12 md:mt-0">
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
