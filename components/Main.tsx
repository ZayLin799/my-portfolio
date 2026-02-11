import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <section id="home" className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary/20 rounded-full blur-[80px] sm:blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-secondary/10 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-[1240px] w-full mx-auto px-6 z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="animate-float w-full max-w-full overflow-hidden">
            <p className="px-4 py-1.5 rounded-full glass border border-primary/20 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] text-primary uppercase inline-block max-w-full truncate sm:whitespace-normal">
              LET&#39;S BUILD SOMETHING LEGENDARY
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="leading-tight">
              Hi, I&#39;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Zay Lin Htet</span>
            </h1>
            <h2 className="text-slate-400 font-medium tracking-tight">
              A <span className="text-white italic">Full-stack</span> Software Developer
            </h2>
          </div>

          <p className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed">
            I specialize in crafting high-performance, scalable, and visually stunning digital experiences.
            Blending solid backend engineering with modern frontend aesthetics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <Link href="/#projects">
              <button className="sm:scale-110">
                Explore Projects
              </button>
            </Link>
            <div className="flex items-center gap-4">
              {[
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/zay-lin-htet/" },
                { Icon: FaGithub, href: "https://github.com/ZayLin799" },
                { Icon: AiOutlineMail, href: "/#contact", isLink: true },
                { Icon: BsFillPersonLinesFill, href: "/Zay-Lin-Htet-CV.pdf" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.isLink ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                    <item.Icon size={22} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Main;
