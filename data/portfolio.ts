import type { StaticImageData } from "next/image";

import AboutImage from "../public/assets/about.jpg";
import AmSkinImage from "../public/assets/projects/am-skin.png";
import AutoVinHubImage from "../public/assets/projects/AutoVinHub.png";
import JPAuctionSheetImage from "../public/assets/projects/jpauctionsheet.png";
import LittleMyanmarImage from "../public/assets/projects/little-myanmar.jpg";
import SdaxImage from "../public/assets/projects/sdax.png";
import ViabellsImage from "../public/assets/projects/viabells.png";
import YunHomeImage from "../public/assets/projects/YunHome.png";

export interface RecruiterStat {
  label: string;
  value: string;
}

export interface CapabilityGroup {
  title: string;
  summary: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
}

export interface CredentialItem {
  year: string;
  title: string;
  subtitle: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  heroLabel: string;
  tagline: string;
  summary: string;
  role: string;
  engagement: string;
  company: string;
  liveUrl: string;
  stack: string[];
  outcomes: string[];
  responsibilities: string[];
  image: StaticImageData;
}

export const personalProfile = {
  name: "Zay Lin Htet",
  title: "Senior Full-Stack Software Developer",
  email: "zaylin13.dev@gmail.com",
  phone: "+66 889131528 / +95 9795927748",
  location: "Onsite / Remote / Hybrid",
  nationality: "Myanmar",
  website: "https://www.zaylinhtet.online/",
  resumeUrl: "/ZayLinHtet_FullStackDeveloper_Resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/zay-lin-htet",
  githubUrl: "https://github.com/ZayLin799",
  heroEyebrow: "Senior full-stack developer based in Thailand",
  heroTitle: "I design, modernize, and ship secure web and mobile platforms.",
  heroSummary:
    "5+ years building high-availability systems with Node.js, NestJS, Laravel, Next.js, React, cloud infrastructure, payments, monitoring, and production support.",
  aboutSummary:
    "I specialize in secure distributed backends, fast user-centric frontends, and practical architecture for products that need to scale without becoming hard to operate.",
  aboutImage: AboutImage,
};

export const recruiterStats: RecruiterStat[] = [
  { value: "5+ years", label: "Full-stack software delivery" },
  {
    value: "7 roles",
    label: "Full-time, contract, volunteer, and intern work",
  },
  {
    value: "6 sectors",
    label: "Automotive, fintech, govtech, healthtech, education, media",
  },
  { value: "7 projects", label: "Production examples across this portfolio" },
];

export const recruiterSignals = [
  "Built Laravel, NestJS, Express.js, Next.js, and React systems in production",
  "Handled payment flows, OTP auth, report generation, monitoring, and deployment",
  "Experienced with legacy modernization, dashboards, mobile support, and cloud storage",
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Backend and secure platform delivery",
    summary:
      "Designing APIs, authentication flows, payment integrations, report generation, and maintainable service layers for production systems.",
    items: [
      "Node.js, NestJS, Express.js, Laravel, PHP",
      "OTP authentication, Stripe, PayPal, KBZ Pay, email delivery",
      "PostgreSQL, MySQL, MongoDB, Firebase",
    ],
  },
  {
    title: "Frontend, dashboards, and mobile workflows",
    summary:
      "Building fast interfaces that match business workflows, reduce friction, and stay maintainable after launch.",
    items: [
      "Next.js, React, TypeScript, Tailwind CSS",
      "User/admin dashboards, report history, CMS interfaces",
      "React Native and Cordova support for mobile data entry and offline access",
    ],
  },
  {
    title: "Cloud, operations, and reliability",
    summary:
      "Shipping features is only half the job. I also care about uptime, observability, and practical deployment workflows.",
    items: [
      "AWS, DigitalOcean, R2 Cloud Storage, Ubuntu, Linux",
      "Docker, CI/CD, Nginx, Apache, Git",
      "Datadog monitoring, error tracking, legacy migrations, infrastructure handoff",
    ],
  },
];

export const toolbelt = [
  "Node.js",
  "NestJS",
  "Laravel",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "AWS",
  "DigitalOcean",
  "R2 Cloud Storage",
  "Docker",
  "Nginx",
  "Datadog",
];

export const experiences: ExperienceItem[] = [
  {
    period: "Nov 2024 - Present",
    company: "Siam Mandalar International",
    role: "Full-stack Developer (Contract / Freelance)",
    location: "Thailand / Remote",
    highlights: [
      "Built jpauctionsheet.com, a Laravel-based vehicle history platform with VIN checking, user and admin dashboards, OTP authentication, credit packages, Stripe, PayPal, and KBZ Pay payments.",
      "Implemented PDF report generation, email delivery, blogs, feedback workflows, and transaction tracking for paid vehicle history services.",
      "Developed autovinhub.com, a Next.js and TypeScript VIN report platform connected to Laravel APIs for VIN image scanning, report credit purchases, Carfax and AutoCheck availability checks, and report history management.",
    ],
  },
  {
    period: "Feb 2025 - May 2026",
    company: "XynoTech",
    role: "Full Stack Developer",
    location: "Thailand /Remote",
    highlights: [
      "Deployed a high-speed movie streaming platform using NestJS, Next.js, and R2 Cloud Storage to improve delivery performance and storage cost efficiency.",
    ],
  },
  {
    period: "Feb 2023 - Feb 2025",
    company: "VIABELLS PTE. LTD.",
    role: "Full-stack Software Developer",
    location: "Singapore / Remote",
    highlights: [
      "Contributed to the SDAX investment platform migration from Java Spring WebFlux to Express.js and Next.js across user-facing and admin systems.",
      "Integrated Datadog for real-time monitoring and proactive error tracking to support 24/7 system availability.",
      "Developed a high-performance portfolio for Viabells and a custom WordPress/PHP ecosystem for A.M Skincare.",
    ],
  },
  {
    period: "Jan 2022 - Feb 2023",
    company: "AGGA.IO Co., Ltd",
    role: "Software Developer",
    location: "Yangon, Myanmar",
    highlights: [
      "Built a high-security Laravel and React Native data collection platform for the Ministry of Union Government, enabling synchronized web and mobile data entry.",
      "Developed centralized web and mobile systems to improve accessibility and data accuracy for national disability records.",
      "Engineered clinic and lab management systems with Laravel and Vue.js, streamlining patient tracking and diagnostic reporting.",
      "Optimized the IQnet ISP billing system with new features and offline mobile support via Cordova to maintain service continuity.",
    ],
  },
  {
    period: "Dec 2021 - Jan 2022",
    company: "HeinLearn",
    role: "Backend Developer (Volunteer)",
    location: "Myanmar / Remote",
    highlights: [
      "Designed a school management system backend using Laravel and PHP, delivering a scalable platform with a responsive Bootstrap interface.",
    ],
  },
  {
    period: "Jun 2021 - Oct 2021",
    company: "Marvellous Software Solution",
    role: "Full-Stack Junior Developer (OJT)",
    location: "Yangon, Myanmar",
    highlights: [
      "Contributed to scalable web application development while collaborating with cross-functional teams to meet project milestones.",
    ],
  },
  {
    period: "Jun 2019 - Jan 2020",
    company: "I-See Media",
    role: "WordPress Developer Intern",
    location: "Yangon, Myanmar",
    highlights: [
      "Architected and customized content management systems for diverse clients, focusing on intuitive interfaces for non-technical content management.",
    ],
  },
];

export const education: CredentialItem[] = [
  {
    year: "Jul 2020",
    title: "BSc in Business Information Technology",
    subtitle: "University of Greenwich (UK)",
  },
  {
    year: "Mar 2019",
    title: "HND in Software Development",
    subtitle: "Scottish Qualifications Authority (Scotland)",
  },
];

export const certifications: CredentialItem[] = [
  {
    year: "Feb 2024",
    title: "DevOps Delivery",
    subtitle: "Dev KT Ops",
  },
  {
    year: "Feb 2023",
    title: "Rockstar Developer",
    subtitle: "Fairway Technology",
  },
  {
    year: "Jun 2019",
    title: "Professional Web Developer",
    subtitle: "Fairway Technology",
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    slug: "sdax",
    title: "SDAX",
    category: "Full-time work",
    heroLabel: "Fintech platform migration",
    tagline:
      "Supported a regulated digital assets platform during its move from Java Spring WebFlux to an Express.js and Next.js stack.",
    summary:
      "This work required product delivery inside an existing investment platform, not just greenfield coding. I contributed across admin tools, user experience, and production reliability while the platform modernized core services.",
    role: "Full-stack Software Developer",
    engagement: "Feb 2023 - Feb 2025",
    company: "VIABELLS PTE. LTD.",
    liveUrl: "https://www.sdax.co/",
    stack: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "Java Spring",
      "Datadog",
      "Docker",
    ],
    outcomes: [
      "Helped move platform functionality toward a modern Node.js and Next.js stack.",
      "Maintained mission-critical admin and user-facing surfaces in a production fintech environment.",
      "Improved production visibility with Datadog monitoring and error tracking.",
    ],
    responsibilities: [
      "Worked across multiple repositories and services while keeping product delivery moving during migration.",
      "Handled both feature work and day-two reliability concerns in a platform that needed continuous uptime.",
      "Adapted quickly to a new stack and contributed in a regulated domain with higher operational expectations.",
    ],
    image: SdaxImage,
  },
  {
    slug: "autovinhub",
    title: "AutoVinHub",
    category: "Client project",
    heroLabel: "Vehicle data and report commerce",
    tagline:
      "Developed a Next.js and TypeScript VIN report platform connected to Laravel APIs for paid vehicle history workflows.",
    summary:
      "AutoVinHub combines VIN image scanning, report availability checks, credit purchasing, and report history management. The implementation needed to feel fast for users while keeping the backend structured around payments, data retrieval, and account workflows.",
    role: "Full-stack Developer",
    engagement: "Nov 2024 - Present",
    company: "Siam Mandalar International",
    liveUrl: "https://autovinhub.com/",
    stack: [
      "Next.js",
      "TypeScript",
      "Laravel APIs",
      "Stripe",
      "VIN scanning",
      "Tailwind CSS",
    ],
    outcomes: [
      "Enabled users to scan VIN images, check Carfax and AutoCheck availability, and manage purchased reports.",
      "Connected a fast frontend experience to Laravel APIs suited for payments, report credits, and account workflows.",
      "Shipped a production-ready platform focused on trust, speed, and clear conversion paths.",
    ],
    responsibilities: [
      "Built the end-to-end application architecture across frontend, backend, and deployment.",
      "Implemented authenticated user flows, Stripe report credit purchases, report history, and VIN-focused search experiences.",
      "Optimized the product around practical performance and reliability for public traffic.",
    ],
    image: AutoVinHubImage,
  },
  {
    slug: "littleMyanmar",
    title: "Little Myanmar",
    category: "Client project",
    heroLabel: "Restaurant ordering platform",
    tagline:
      "Built a Laravel-based restaurant platform that supports flexible menus, guest checkout, and Stripe payments.",
    summary:
      "The project needed more than a brochure site. It had to support real transactions, varying menu structures, and a smoother path to checkout for both new and returning customers.",
    role: "Full-stack Developer",
    engagement: "Consulting build",
    company: "Little Myanmar",
    liveUrl: "https://littlemyanmar.org/",
    stack: ["Laravel", "PHP", "jQuery", "Stripe", "AWS", "Ubuntu"],
    outcomes: [
      "Handled restaurant and catering menu logic inside one coherent ordering experience.",
      "Supported guest and member checkout with secure Stripe payment integration.",
      "Delivered a stable production setup on customized Ubuntu infrastructure.",
    ],
    responsibilities: [
      "Built the order and checkout workflows around practical business requirements instead of generic templates.",
      "Balanced backend complexity with a customer experience simple enough for direct online ordering.",
      "Handled deployment concerns so the product remained dependable after launch.",
    ],
    image: LittleMyanmarImage,
  },
  {
    slug: "JPAuctionSheet",
    title: "JP Auction Sheet",
    category: "Client project",
    heroLabel: "Vehicle history checking and payment workflow",
    tagline:
      "Built a Laravel-based vehicle history platform with VIN checking, dashboards, OTP authentication, report generation, and multiple payment methods.",
    summary:
      "Users needed a trustworthy way to check VIN records, purchase report credits, and receive vehicle history reports. The system was built around a Laravel backend with user and admin dashboards, payment integrations, PDF generation, email delivery, and transaction tracking.",
    role: "Full-stack Developer",
    engagement: "Nov 2024 - Present",
    company: "Siam Mandalar International",
    liveUrl: "https://jpauctionsheet.com/",
    stack: [
      "Laravel",
      "PHP",
      "OTP auth",
      "Stripe",
      "PayPal",
      "KBZ Pay",
      "PDF reports",
    ],
    outcomes: [
      "Built VIN checking and report-credit workflows for car buyers and dealers.",
      "Integrated global and local payment options including Stripe, PayPal, and KBZ Pay.",
      "Delivered admin tooling for transactions, blogs, feedback, PDF reports, and email delivery.",
    ],
    responsibilities: [
      "Translated a niche automotive workflow into a product that non-technical customers could use confidently.",
      "Managed payment integrations, OTP authentication, backend logic, and report generation for paid access to records.",
      "Delivered the platform with production hosting and operational reliability in mind.",
    ],
    image: JPAuctionSheetImage,
  },
  {
    slug: "yunhome",
    title: "Yun Home Renovation",
    category: "Client project",
    heroLabel: "High-performance service website",
    tagline:
      "Built a renovation company website in Next.js and TypeScript with an emphasis on speed, SEO, and premium presentation.",
    summary:
      "The goal was to make a service business feel credible immediately. The site focuses on clear service presentation, visual quality, and a polished experience that supports lead generation.",
    role: "Frontend and full-stack delivery",
    engagement: "Consulting build",
    company: "Yun Home Renovation",
    liveUrl: "https://yunhomerenovation.com/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "AWS"],
    outcomes: [
      "Delivered a clean lead-generation website with strong visual presentation.",
      "Optimized for performance and SEO to support discoverability and trust.",
      "Built a maintainable codebase that can evolve with the business.",
    ],
    responsibilities: [
      "Shaped the frontend experience and technical implementation from the ground up.",
      "Focused on performance, responsive behavior, and content clarity for prospective clients.",
      "Handled the deployment path needed for a stable public launch.",
    ],
    image: YunHomeImage,
  },
  {
    slug: "viabell",
    title: "Viabells",
    category: "Full-time work",
    heroLabel: "Corporate brand platform",
    tagline:
      "Built a professional corporate website in Next.js with a presentation style suited to a Singapore-based business.",
    summary:
      "Corporate sites still need engineering discipline. The Viabells site was built for strong presentation, solid performance, and a maintainable frontend that supports the company brand.",
    role: "Full-stack Software Developer",
    engagement: "Part of full-time role",
    company: "VIABELLS PTE. LTD.",
    liveUrl: "https://www.viabells.com/",
    stack: ["Next.js", "Material UI", "React", "SSR", "Vercel"],
    outcomes: [
      "Delivered a polished, brand-aligned corporate web presence.",
      "Used server-rendered delivery patterns to support performance and SEO.",
      "Maintained a frontend implementation that remained easy to extend.",
    ],
    responsibilities: [
      "Built and refined the frontend experience for a company-facing website.",
      "Applied a design system approach rather than one-off page styling.",
      "Delivered production-ready behavior with attention to maintainability.",
    ],
    image: ViabellsImage,
  },
  {
    slug: "amSkin",
    title: "A.M Skincare",
    category: "Full-time work",
    heroLabel: "Custom WordPress commerce experience",
    tagline:
      "Developed a bespoke WordPress and PHP implementation with custom theme and plugin work for a skincare brand.",
    summary:
      "This project combined a brand-heavy marketing experience with commerce needs. The implementation required custom PHP work rather than relying entirely on off-the-shelf WordPress behavior.",
    role: "Full-stack Software Developer",
    engagement: "Part of full-time role",
    company: "A.M Skincare",
    liveUrl: "https://am-skincare.com/",
    stack: ["WordPress", "PHP", "Custom plugins", "JavaScript", "CSS"],
    outcomes: [
      "Delivered a custom storefront and brand experience tailored to the client.",
      "Implemented theme and plugin work to support features beyond a default setup.",
      "Improved mobile responsiveness and overall usability for a consumer audience.",
    ],
    responsibilities: [
      "Worked on both frontend presentation and backend customization inside WordPress.",
      "Used custom development rather than shallow theme configuration to meet business needs.",
      "Balanced brand design requirements with practical performance considerations.",
    ],
    image: AmSkinImage,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
