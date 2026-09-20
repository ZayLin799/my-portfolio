import type { StaticImageData } from "next/image";

import AboutImage from "../public/assets/about.jpg";
import AmSkinImage from "../public/assets/projects/am-skin.png";
import AutoVinHubImage from "../public/assets/projects/AutoVinHub.png";
import JPAuctionSheetImage from "../public/assets/projects/jpauctionsheet.png";
import LittleMyanmarImage from "../public/assets/projects/little-myanmar.jpg";
import PinkpopPosImage from "../public/assets/projects/pinkpop-pos.png";
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
  title: "Senior Full-Stack Developer",
  email: "zaylin13.dev@gmail.com",
  phone: "+95 9795927748",
  location: "Yangon, Myanmar",
  nationality: "Myanmar",
  website: "https://www.zaylinhtet.online/",
  resumeUrl: "/ZayLinHtet_FullStackDeveloper_Resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/zay-lin-htet",
  githubUrl: "https://github.com/ZayLin799",
  heroEyebrow: "Senior full-stack developer",
  heroTitle: "I design, modernize, and ship secure web and mobile platforms.",
  heroSummary:
    "Senior Full-Stack Developer with 5+ years of experience delivering business applications across Myanmar, Singapore, and Thailand, from requirements and planning to system design and end-user release. Hands-on with Laravel/PHP, React, Next.js, Node.js, NestJS, and TypeScript across fintech, automotive, healthcare, government, and telecom.",
  aboutSummary:
    "Experienced in local and international payment integrations, AI-assisted development with code review and testing, and production reliability through monitoring and troubleshooting.",
  aboutImage: AboutImage,
};

export const recruiterStats: RecruiterStat[] = [
  { value: "5+ years", label: "Full-stack software delivery" },
  {
    value: "6 roles",
    label: "Full-time, contract, volunteer, and intern work",
  },
  {
    value: "5 sectors",
    label: "Fintech, automotive, healthcare, government, and telecom",
  },
  { value: "3 countries", label: "Delivery across Myanmar, Singapore, and Thailand" },
];

export const recruiterSignals = [
  "Owns delivery from business requirement mapping and task estimation through release",
  "Experienced with secure APIs, local and international payments, code reviews, and risk checks",
  "Supports seamless releases and production reliability with monitoring, error tracking, and troubleshooting",
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Core technologies",
    summary:
      "Building full-stack business applications across backend, frontend, databases, mobile, and CMS platforms.",
    items: [
      "Backend: Node.js, NestJS, Laravel (PHP), REST APIs, GraphQL",
      "Frontend: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap",
      "Databases: MySQL, PostgreSQL, MongoDB",
      "Mobile and CMS: React Native, Cordova, WordPress",
    ],
  },
  {
    title: "DevOps and infrastructure",
    summary:
      "Designing distributed systems and supporting dependable cloud delivery and production operations.",
    items: [
      "Architecture: Microservices and distributed systems",
      "Tools: Docker, CI/CD, Nginx, Apache, Git",
      "Cloud: AWS, DigitalOcean, R2 Cloud Storage",
      "Monitoring: Datadog",
    ],
  },
  {
    title: "Development practices and delivery",
    summary:
      "Taking products from business requirements to release while protecting technical quality and reliability.",
    items: [
      "End-to-end ownership: Requirements, estimation, and full-cycle delivery",
      "Technical quality: System design, secure APIs, code reviews, and risk checks",
      "AI-assisted coding, automated review, test generation, and rapid prototyping",
      "Seamless releases, error tracking, and production support",
    ],
  },
];

export const toolbelt = [
  "Node.js",
  "NestJS",
  "Laravel",
  "REST APIs",
  "GraphQL",
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
  "CI/CD",
];

export const experiences: ExperienceItem[] = [
  {
    period: "Feb 2025 - Aug 2026",
    company: "Siam Mandalar International",
    role: "Full-stack Developer (Contract)",
    location: "Thailand / Remote",
    highlights: [
      "Built jpauctionsheet.com with Laravel and Blade end-to-end from initial business plan to release for 1,550+ registered users, integrating third-party vehicle report reseller APIs, credit management, and KBZPay, Stripe, and PayPal payments.",
      "Delivered autovinhub.com with Next.js, NestJS, and TypeScript from product concept to launch, including OCR-based VIN image scanning, third-party report reseller APIs, Stripe and PayPal payments, and automated report delivery.",
      "Architected multi-currency credit purchasing, refunds, promotional pricing, audit logs, and secure report delivery across both platforms.",
      "Used AI-assisted workflows from planning to deployment and implemented AI translation and support-draft tools with human review and prompt-injection safeguards.",
      "Worked with stakeholders to define requirements, prioritize features, estimate tasks, and deliver releases through testing, deployment, and user feedback.",
    ],
  },
  {
    period: "Feb 2023 - Feb 2025",
    company: "VIABELLS PTE. LTD.",
    role: "Full-Stack Software Developer (Full-Time)",
    location: "Singapore / Remote",
    highlights: [
      "Contributed to migrating SDAX investment workflows from Java Spring WebFlux to Express.js and Next.js while maintaining investor and issuer functionality.",
      "Separated investor and issuer domains into independently maintained repositories and built supporting email and Web3 microservices.",
      "Implemented Datadog monitoring and proactive error tracking for production visibility and 24/7 operations.",
      "Built a high-performance Viabells portfolio and a custom WordPress/PHP platform for A.M Skincare.",
    ],
  },
  {
    period: "Jan 2022 - Feb 2023",
    company: "AGGA.IO Co., Ltd",
    role: "Software Developer (Full-Time)",
    location: "Yangon, Myanmar",
    highlights: [
      "Built secure national data-collection and disability information systems with Laravel and React Native, enabling synchronized web and mobile operations.",
      "Delivered clinic and laboratory management platforms with Laravel and Vue.js for patient tracking and diagnostic reporting.",
      "Extended the IQnet ISP billing platform and added offline Cordova mobile workflows to support field operations with unreliable connectivity.",
    ],
  },
  {
    period: "Dec 2021 - Jan 2022",
    company: "HeinLearn",
    role: "Backend Developer (Volunteer)",
    location: "Myanmar / Remote",
    highlights: [
      "Designed a Laravel backend and responsive Bootstrap workflows for a scalable education management system.",
    ],
  },
  {
    period: "Jun 2021 - Oct 2021",
    company: "Marvellous Software Solution",
    role: "Junior Full-Stack Developer (OJT)",
    location: "Yangon, Myanmar",
    highlights: [
      "Built maintainable web features in a cross-functional team, translating requirements into releases and meeting project milestones.",
    ],
  },
  {
    period: "Jun 2019 - Jan 2020",
    company: "I-See Media",
    role: "WordPress Developer (Intern)",
    location: "Yangon, Myanmar",
    highlights: [
      "Built and customized WordPress content-management systems for multiple clients, giving non-technical teams intuitive control over website content.",
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
      "Developed a Next.js and TypeScript VIN report platform connected to NestJS APIs for paid vehicle history workflows.",
    summary:
      "AutoVinHub combines VIN image scanning, report availability checks, credit purchasing, and report history management. The implementation needed to feel fast for users while keeping the NestJS backend structured around payments, data retrieval, and account workflows.",
    role: "Full-stack Developer",
    engagement: "Feb 2025 - Aug 2026",
    company: "Siam Mandalar International",
    liveUrl: "https://autovinhub.com/",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Stripe",
      "VIN scanning",
      "Tailwind CSS",
    ],
    outcomes: [
      "Enabled OCR-based VIN image scanning, third-party report reseller access, Stripe and PayPal payments, and automated report delivery.",
      "Connected the Next.js frontend to NestJS APIs for credit purchasing, refunds, promotional pricing, and account workflows.",
      "Took the platform from product concept to public launch.",
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
    engagement: "Feb 2025 - Aug 2026",
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
      "Released the platform to more than 1,550 registered users.",
      "Integrated global and local payment options including Stripe, PayPal, and KBZ Pay.",
      "Integrated third-party vehicle report reseller APIs, multi-currency credit purchasing, refunds, promotional pricing, audit logs, and secure report delivery.",
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
  {
    slug: "pinkpop-pos",
    title: "Pinkpop POS",
    category: "Freelance project",
    heroLabel: "Custom retail point of sale (POS) and inventory platform",
    tagline:
      "Engineered a fully customized, real-time POS and inventory management ecosystem to streamline daily retail operations.",
    summary:
      "Pinkpop POS is a tailor-made retail management system. Built using Laravel 12, Inertia.js, and React 19 with Tailwind CSS, the platform connects cashiers, store managers, and administrators through a unified, high-performance interface. It provides comprehensive control over master data (products, categories, units, payments), sales registration (new sales, logs, calendar views), procurement, expense tracking, customer/supplier credit systems, and multi-dimensional financial and stock reports.",
    role: "Full-stack Developer",
    engagement: "Freelance Build",
    company: "Pinkpop POS",
    liveUrl: "",
    stack: [
      "Laravel",
      "React",
      "Inertia.js",
      "Tailwind CSS",
      "MySQL",
      "TypeScript",
    ],
    outcomes: [
      "Delivered a real-time cashier checkout terminal with barcode integration and custom discount logic.",
      "Built a complete inventory lifecycle tracking system with low-stock alerts, transfers, and adjustments.",
      "Implemented a secure admin dashboard with granular permissions and automated financial/profit reporting.",
    ],
    responsibilities: [
      "Designed database architecture, seeders, and RESTful endpoints using Laravel 12.",
      "Created a modern, high-speed SPA frontend utilizing React 19, Inertia.js, and Radix UI components.",
      "Integrated custom PDF generation for transaction invoices, credit summaries, and sales logs.",
    ],
    image: PinkpopPosImage,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
