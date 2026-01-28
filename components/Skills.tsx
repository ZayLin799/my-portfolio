import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import PHP from '../public/assets/skills/php.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Laravel from '../public/assets/skills/laravel.png';
import MySQL from '../public/assets/skills/MySQL.png';
import Mongo from '../public/assets/skills/mongo.png';
import Java from '../public/assets/skills/java.png';
import Node from '../public/assets/skills/node.png';
import Express from '../public/assets/skills/express.png';
import AWS from '../public/assets/skills/aws.png';
import Ubuntu from '../public/assets/skills/ubuntu.png';
import Linux from '../public/assets/skills/linux.png';
import Postgre from '../public/assets/skills/postgre.png';


const Skills = () => {
  return (
    <section id='skills' className='section-padding min-h-screen relative'>
      <div className='max-w-[1240px] mx-auto px-6 h-full flex flex-col justify-center gap-12 relative z-10'>
        <div className='space-y-4'>
          <p className='uppercase text-sm tracking-[0.4em] text-primary font-bold'>
            Technical Stack
          </p>
          <h2 className='leading-tight tracking-tight'>Technologies I <span className='text-primary'>Master</span></h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {[
            { img: Html, name: 'HTML' },
            { img: Css, name: 'CSS' },
            { img: Javascript, name: 'JavaScript' },
            { img: ReactImg, name: 'React' },
            { img: PHP, name: 'PHP' },
            { img: Laravel, name: 'Laravel' },
            { img: NextJS, name: 'Next.js' },
            { img: Node, name: 'Node.js' },
            { img: Express, name: 'Express' },
            { img: MySQL, name: 'MySQL' },
            { img: Postgre, name: 'PostgreSQL' },
            { img: Mongo, name: 'MongoDB' },
            { img: Java, name: 'Java' },
            { img: AWS, name: 'AWS' },
            { img: Ubuntu, name: 'Ubuntu' },
            { img: Linux, name: 'Linux' },
            { img: Github, name: 'GitHub' },
          ].map((skill, index) => (
            <div
              key={index}
              className='glass-card group flex flex-col items-center justify-center p-6 gap-4 border-white/5 hover:-translate-y-2'
            >
              <div className='relative w-16 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500'>
                <Image src={skill.img} width={64} height={64} alt={skill.name} style={{ objectFit: 'contain' }} />
              </div>
              <h3 className='text-xs font-bold tracking-widest text-slate-400 group-hover:text-primary uppercase transition-colors'>
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
