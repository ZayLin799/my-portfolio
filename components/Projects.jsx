import Image from "next/image";
import Link from "next/link";
import React from "react";
import Viabells from "../public/assets/projects/viabells.png";
import LilImg from "../public/assets/projects/little-myanmar.jpg";
import Sdax from "../public/assets/projects/sdax.png";
import AmSKin from "../public/assets/projects/am-skin.png";
import JPauctionsheet from "../public/assets/projects/jp-auctionsheet.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          OutSource Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Fulltime job Projects
        </p>
        <h2 className="py-4">What I&apos;ve Paticipated</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
  );
};

export default Projects;
