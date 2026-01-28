import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
// import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#1a2f3a');
  const [linkColor, setLinkColor] = useState('#f8fafc');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  return (
    <>
      <header
        className={`fixed w-full h-24 z-[100] transition-all duration-500 ${shadow ? 'glass h-20 shadow-primary/10' : ''
          }`}
      >
        <nav className='flex justify-between items-center w-full h-full px-6 2xl:px-24 max-w-[1920px] mx-auto'>
          <Link href='/'>
            <div className='group flex items-center gap-2 cursor-pointer'>
              <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform'>
                Z
              </div>
              <span className='text-white font-bold text-xl tracking-tight hidden sm:block'>Zay <span className='text-primary'>Lin</span></span>
            </div>
          </Link>
          <div className='flex items-center gap-8'>
            <ul className='hidden md:flex items-center gap-10 font-medium tracking-wide'>
              <li className='nav-link'><Link href='/'>Home</Link></li>
              <li className='nav-link'><Link href='/#about'>About</Link></li>
              <li className='nav-link'><Link href='/#skills'>Skills</Link></li>
              <li className='nav-link'><Link href='/#experience'>Experience</Link></li>
              <li className='nav-link'><Link href='/#projects'>Projects</Link></li>
              <li className='nav-link'><Link href='/#contact'>Contact</Link></li>
            </ul>
            {/* Hamburger Icon */}
            <button
              onClick={handleNav}
              className='md:hidden p-3 bg-white/5 border border-white/10 rounded-xl text-primary flex items-center justify-center'
            >
              <AiOutlineMenu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <div
        onClick={() => setNav(false)}
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-blur-md z-[200] transition-all duration-500 opacity-100 visible'
            : 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/0 backdrop-blur-none z-[-1] transition-all duration-500 opacity-0 invisible'
        }
      />
      <div
        className={
          nav
            ? ' fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen glass border-r border-white/10 p-6 sm:p-10 ease-in-out duration-500 z-[201] flex flex-col overflow-y-auto no-scrollbar shadow-2xl'
            : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500 invisible h-screen'
        }
      >
        {/* Top Section: Logo & Tagline */}
        <div className='shrink-0'>
          <div className='flex w-full items-center justify-between'>
            <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg shadow-primary/20'>
              Z
            </div>
            <button
              onClick={handleNav}
              className='rounded-xl glass p-3 text-primary hover:scale-110 duration-300'
            >
              <AiOutlineClose size={18} />
            </button>
          </div>
          <div className='border-b border-white/10 my-4 sm:my-6'>
            <p className='w-[85%] md:w-[90%] py-2 sm:py-4 text-slate-300 font-medium text-sm sm:text-md'>
              Let&#39;s build something legendary together
            </p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className='flex-grow py-4'>
          <ul className='flex flex-col gap-2 sm:gap-4 uppercase font-semibold tracking-widest'>
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}>
                <li onClick={() => setNav(false)} className='py-3 sm:py-4 text-sm hover:text-primary transition-colors'>
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Bottom Section: Socials */}
        <div className='shrink-0 pt-10 pb-4'>
          <p className='uppercase tracking-[0.2em] text-primary font-bold text-xs'>
            Let&#39;s Connect
          </p>
          <div className='flex items-center justify-start gap-4 sm:gap-6 my-4 w-full'>
            <a href='https://www.linkedin.com/in/zay-lin-htet/' target='_blank' rel='noreferrer' className='hover:scale-110 duration-300'>
              <div className='glass p-3 rounded-xl text-primary'>
                <FaLinkedinIn size={18} />
              </div>
            </a>
            <a href='https://github.com/ZayLin799' target='_blank' rel='noreferrer' className='hover:scale-110 duration-300'>
              <div className='glass p-3 rounded-xl text-primary'>
                <FaGithub size={18} />
              </div>
            </a>
            <Link href='/#contact'>
              <div onClick={() => setNav(false)} className='glass p-3 rounded-xl text-primary hover:scale-110 duration-300 cursor-pointer'>
                <AiOutlineMail size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
