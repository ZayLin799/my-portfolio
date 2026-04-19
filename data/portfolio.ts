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
  title: "Full-stack software developer",
  email: "zaylin13.dev@gmail.com",
  phone: "+959 795927748 / +66 889131528",
  location: "Remote / Anywhere",
  nationality: "Myanmar",
  website: "https://www.zaylinhtet.online/",
  resumeUrl: "/Zay-Lin-Htet-CV.pdf",
  linkedinUrl: "https://www.linkedin.com/in/zay-lin-htet",
  githubUrl: "https://github.com/ZayLin799",
  heroEyebrow: "Available for full-time opportunities",
  heroTitle:
    "I build reliable products across fintech, govtech, healthtech, and commerce.",
  heroSummary:
    "5+ years shipping production systems with Node.js, NestJS, Laravel, Next.js, AWS, and observability tooling. I work comfortably across architecture, APIs, frontend delivery, and day-two operations.",
  aboutSummary:
    "I am strongest in roles where a team needs both execution and ownership: modernizing legacy systems, shipping features against real deadlines, and keeping product quality high while infrastructure scales.",
  aboutImage: AboutImage,
};

export const recruiterStats: RecruiterStat[] = [
  { value: "5+ years", label: "Professional software delivery" },
  { value: "6 teams", label: "Full-time, contract, and volunteer roles" },
  { value: "4 sectors", label: "Fintech, govtech, healthtech, commerce" },
  { value: "7 case studies", label: "Live portfolio examples in this site" },
];

export const recruiterSignals = [
  "Strong in full-stack product delivery, not only frontend polish",
  "Comfortable owning APIs, databases, cloud infrastructure, and monitoring",
  "Experienced with legacy modernization and cross-team collaboration",
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Backend and platform delivery",
    summary:
      "Designing APIs, authentication flows, payment integrations, and maintainable service layers for production systems.",
    items: [
      "Node.js, NestJS, Express.js, Laravel, PHP",
      "REST APIs, admin systems, integrations, data workflows",
      "PostgreSQL, MySQL, MongoDB, Firebase",
    ],
  },
  {
    title: "Frontend and product UX",
    summary:
      "Building fast interfaces that match business workflows, reduce friction, and stay maintainable after launch.",
    items: [
      "Next.js, React, TypeScript, Tailwind CSS",
      "Responsive UI systems, dashboards, marketing sites",
      "SEO-aware delivery and performance-focused rendering",
    ],
  },
  {
    title: "Cloud, operations, and reliability",
    summary:
      "Shipping features is only half the job. I also care about uptime, observability, and practical deployment workflows.",
    items: [
      "AWS, Ubuntu, Linux, Docker, Nginx",
      "Datadog, CI/CD, incident visibility, production support",
      "Legacy migrations and infrastructure handoff",
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
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Datadog",
];

export const experiences: ExperienceItem[] = [
  {
    period: "Feb 2025 - Present",
    company: "XynoTech",
    role: "Full-stack Developer",
    location: "Remote",
    highlights: [
      "Delivered a movie streaming platform with NestJS, Next.js, and cloud storage optimized for throughput and storage cost.",
      "Built LMS and e-commerce product flows in Laravel to support operational efficiency and online transactions.",
      "Shipped a tele-doctor platform with Express.js and Next.js focused on real-time consultations and retention.",
    ],
  },
  {
    period: "Feb 2023 - Feb 2025",
    company: "VIABELLS PTE. LTD.",
    role: "Full-stack Software Developer",
    location: "Singapore / Remote",
    highlights: [
      "Worked on the SDAX platform migration from Java Spring WebFlux to Express.js and Next.js across user-facing and admin systems.",
      "Integrated Datadog for proactive monitoring, production visibility, and faster issue response.",
      "Built brand and commerce platforms for Viabells and A.M Skincare with a focus on performance and maintainability.",
    ],
  },
  {
    period: "Jan 2022 - Feb 2023",
    company: "AGGA.IO Co., Ltd",
    role: "Software Developer",
    location: "Yangon, Myanmar",
    highlights: [
      "Built government-focused data collection systems with Laravel and mobile support for synchronized field operations.",
      "Delivered healthcare systems for clinics and labs covering patient workflows, reporting, and operational management.",
      "Extended ISP billing software and offline mobile support for continuity in constrained environments.",
    ],
  },
  {
    period: "Dec 2021 - Jan 2022",
    company: "HeinLearn",
    role: "Backend Developer (Volunteer)",
    location: "Remote",
    highlights: [
      "Designed backend services for a school management platform in Laravel and PHP.",
    ],
  },
  {
    period: "Jun 2021 - Oct 2021",
    company: "Marvellous Software Solution",
    role: "Full-stack Junior Developer",
    location: "Yangon, Myanmar",
    highlights: [
      "Contributed to web application delivery in a team environment and learned fast-paced production workflows.",
    ],
  },
  {
    period: "Jun 2019 - Jan 2020",
    company: "I-See Media",
    role: "WordPress Developer Intern",
    location: "Yangon, Myanmar",
    highlights: [
      "Built and customized CMS experiences for clients who needed simple content operations and reliable responsive sites.",
    ],
  },
];

export const education: CredentialItem[] = [
  {
    year: "2020",
    title: "BSc in Business Information Technology",
    subtitle: "University of Greenwich (UK)",
  },
  {
    year: "2019",
    title: "HND in Software Development",
    subtitle: "Scottish Qualifications Authority",
  },
];

export const certifications: CredentialItem[] = [
  {
    year: "2024",
    title: "DevOps Delivery",
    subtitle: "Dev KT Ops",
  },
  {
    year: "2023",
    title: "Rockstar Developer",
    subtitle: "Fairway Technology",
  },
  {
    year: "2019",
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
    stack: ["Next.js", "Express.js", "TypeScript", "Java Spring", "Datadog", "Docker"],
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
      "Built a VIN decoding and vehicle history platform with a conversion-focused frontend and a Laravel API backend.",
    summary:
      "AutoVinHub combines high-intent search behavior, report purchasing, and secure account workflows. The implementation needed to feel fast for users while keeping the backend structured around payments and data retrieval.",
    role: "Full-stack Developer",
    engagement: "Consulting build",
    company: "AutoVinHub",
    liveUrl: "https://autovinhub.com/",
    stack: ["Next.js", "Laravel", "Tailwind CSS", "Payment flows", "AWS", "Ubuntu"],
    outcomes: [
      "Delivered a search-first vehicle platform with secure report purchasing flows.",
      "Combined a fast frontend experience with a Laravel backend suited for integrations and account workflows.",
      "Shipped a production-ready site with a focus on speed, trust, and clear conversion paths.",
    ],
    responsibilities: [
      "Built the end-to-end application architecture across frontend, backend, and deployment.",
      "Implemented authenticated user flows, payments, and search experiences tailored to vehicle report buyers.",
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
    heroLabel: "Search and payment workflow for automotive buyers",
    tagline:
      "Created a specialized platform for reviewing Japanese vehicle auction sheets with image-heavy search and multiple payment methods.",
    summary:
      "Users needed a trustworthy way to search, inspect, and purchase access to auction sheet data. The system was built to make that process straightforward while handling high-resolution assets and payment integration.",
    role: "Full-stack Developer",
    engagement: "Consulting build",
    company: "JP Auction Sheet",
    liveUrl: "https://jpauctionsheet.com/",
    stack: ["Laravel", "PHP", "jQuery", "Stripe", "KBZ Pay", "AWS"],
    outcomes: [
      "Built a domain-specific search experience for car buyers and dealers.",
      "Integrated global and local payment options to match the target market.",
      "Handled image processing and delivery for data that users needed to inspect carefully.",
    ],
    responsibilities: [
      "Translated a niche automotive workflow into a product that non-technical customers could use confidently.",
      "Managed payment integrations and backend logic for paid access to records.",
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
