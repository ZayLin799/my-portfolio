import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectItemProps {
  title: string;
  backgroundImg: any; // Image is often 'any' or StaticImageData in Next.js
  tech: string;
  projectUrl: string;
}

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }: ProjectItemProps) => {
  return (
    <div className='relative group h-auto w-full glass-card overflow-hidden p-0 border-white/5'>
      <div className='relative h-full w-full overflow-hidden rounded-2xl'>
        <Image
          className='transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 w-full h-auto'
          src={backgroundImg}
          alt={title}
          width={700}
          height={400}
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-dark/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center'>
          <div className='translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-4'>
            <h3 className='text-2xl font-black text-white tracking-tight'>{title}</h3>
            <p className='text-primary font-bold text-xs tracking-widest uppercase'>{tech}</p>
            <div className='pt-4'>
              <Link href={projectUrl}>
                <button className='px-6 py-2.5 rounded-full text-sm font-bold bg-white text-dark hover:bg-primary hover:text-white transition-colors'>
                  View Case Study
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem