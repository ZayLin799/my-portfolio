import Image from 'next/image';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import PHP from '../public/assets/skills/php.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Laravel from '../public/assets/skills/laravel.png';
import MySQL from '../public/assets/skills/MySQL.png';
import Mongo from '../public/assets/skills/mongo.png';
import Node from '../public/assets/skills/node.png';
import AWS from '../public/assets/skills/aws.png';
import Ubuntu from '../public/assets/skills/ubuntu.png';
import Linux from '../public/assets/skills/linux.png';
import Postgre from '../public/assets/skills/postgre.png';
import NestJSImg from '../public/assets/skills/nestjs.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Firebase from '../public/assets/skills/firebase.png';
import Docker from '../public/assets/skills/docker.png';
import Nginx from '../public/assets/skills/nginx.png';
import Datadog from '../public/assets/skills/datadog.png';
import CICD from '../public/assets/skills/cicd.png';

const SkillCard = ({ skill }: { skill: { img: any; name: string } }) => (
  <div className='glass-card group flex flex-col items-center justify-center p-6 gap-4 border-white/5 hover:-translate-y-2 transition-all duration-300'>
    <div className='relative w-16 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500'>
      {skill.img ? (
        <Image src={skill.img} width={64} height={64} alt={skill.name} style={{ objectFit: 'contain' }} />
      ) : (
        <div className="w-full h-full rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
          <span className="text-[10px] font-black text-slate-500 group-hover:text-primary tracking-tighter">{skill.name.split(' ')[0]}</span>
        </div>
      )}
    </div>
    <h3 className='text-xs font-bold tracking-widest text-slate-400 group-hover:text-primary uppercase transition-colors text-center'>
      {skill.name}
    </h3>
  </div>
);

const Skills = () => {
  return (
    <section id='skills' className='section-padding min-h-screen relative'>
      <div className='max-w-[1240px] w-full mx-auto px-6 h-full flex flex-col justify-center gap-12 relative z-10'>
        <div className='space-y-4'>
          <p className='uppercase text-sm tracking-[0.4em] text-primary font-bold'>
            Technical Stack
          </p>
          <h2 className='leading-tight tracking-tight'>Technologies I <span className='text-primary'>Master</span></h2>
        </div>

        <div className='space-y-16'>
          {/* Core Technical Stack */}
          <div className='space-y-8'>
            <div className='flex items-center gap-4'>
              <span className='w-12 h-[1px] bg-primary/30' />
              <h3 className='text-xl font-bold tracking-widest uppercase text-slate-500'>Core Technical Stack</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
              {[
                { img: Node, name: 'Node.js' },
                { img: NestJSImg, name: 'Nest.js' },
                { img: Laravel, name: 'Laravel' },
                { img: PHP, name: 'PHP' },
                { img: NextJS, name: 'Next.js' },
                { img: ReactImg, name: 'React' },
                { img: Javascript, name: 'JavaScript' },
                { img: Tailwind, name: 'Tailwind CSS' },
                { img: Postgre, name: 'PostgreSQL' },
                { img: MySQL, name: 'MySQL' },
                { img: Mongo, name: 'MongoDB' },
                { img: Firebase, name: 'Firebase' },
              ].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* DevOps & Infrastructure */}
          <div className='space-y-8'>
            <div className='flex items-center gap-4'>
              <span className='w-12 h-[1px] bg-primary/30' />
              <h3 className='text-xl font-bold tracking-widest uppercase text-slate-500'>DevOps & Infrastructure</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
              {[
                { img: AWS, name: 'AWS' },
                { img: Linux, name: 'Linux' },
                { img: Ubuntu, name: 'Ubuntu' },
                { img: Github, name: 'GitHub' },
                { img: Docker, name: 'Docker' },
                { img: Nginx, name: 'Nginx' },
                { img: Datadog, name: 'Datadog' },
                { img: CICD, name: 'CI/CD' },
              ].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
