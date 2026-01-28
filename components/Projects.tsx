import Image from "next/image";
import Link from "next/link";
import React from "react";
import Viabells from "../public/assets/projects/viabells.png";
import LilImg from "../public/assets/projects/little-myanmar.jpg";
import Sdax from "../public/assets/projects/sdax.png";
import AmSKin from "../public/assets/projects/am-skin.png";
import JPauctionsheet from "../public/assets/projects/jpauctionsheet.png";
import YunHome from "../public/assets/projects/YunHome.png";
import AutoVinHub from "../public/assets/projects/AutoVinHub.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10 text-center sm:text-left">
        <div className="space-y-4 mb-16">
          <p className="uppercase text-sm tracking-[0.4em] text-primary font-bold">
            Portfolio
          </p>
          <h2 className="leading-tight text-white">Featured <span className="text-primary italic">Projects</span></h2>
        </div>

        <div className="space-y-32">
          {/* Outsource Projects */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/30" />
              <h3 className="text-xl font-bold tracking-widest uppercase text-slate-500">OutSource Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <ProjectItem
                title="AutoVinHub"
                backgroundImg={AutoVinHub}
                projectUrl="/autovinhub"
                tech="Next.js / Laravel"
              />
              <ProjectItem
                title="Little Myanmar"
                backgroundImg={LilImg}
                projectUrl="/littleMyanmar"
                tech="Laravel"
              />
              <ProjectItem
                title="JP Auction Sheet"
                backgroundImg={JPauctionsheet}
                projectUrl="/JPAuctionSheet"
                tech="Laravel"
              />
              <ProjectItem
                title="Yun Home Renovation"
                backgroundImg={YunHome}
                projectUrl="/yunhome"
                tech="Next.js / TypeScript / Tailwind"
              />
            </div>
          </div>

          {/* Fulltime Projects */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary/30" />
              <h3 className="text-xl font-bold tracking-widest uppercase text-slate-500">Fulltime job Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <ProjectItem
                title="Sdax"
                backgroundImg={Sdax}
                projectUrl="/sdax"
                tech="React / Java (Spring WebFlux)"
              />
              <ProjectItem
                title="Viabells"
                backgroundImg={Viabells}
                projectUrl="/viabell"
                tech="Next.js"
              />
              <ProjectItem
                title="A.M Skincare"
                backgroundImg={AmSKin}
                projectUrl="/amSkin"
                tech="Wordpress / PHP"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
