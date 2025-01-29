import portfolioWebsite from "@/assets/images/myWeb.png";
import KnowasteImage from "@/assets/images/Knowaste.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import {StaticImageData} from "next/image";


export interface PortfolioProject {
    company: string;
    year: string;
    title: string;
    results: { title: string }[];
    liveLink?: string;
    githubLink?: string;
    image: StaticImageData;

}
export const portfolioProjects = [
    {
        company: "Personal Project",
        year: "2025",
        title: "My Portfolio Website",
        results: [
            { title: "Developed with Next.js, TypeScript, and Tailwind CSS" },
            { title: "Implemented smooth animations using Framer Motion" },
            { title: "Designed a fully responsive UI for all devices" },
            { title: "Deployed seamlessly on Vercel with CI/CD pipeline" }
        ],
        githubLink: "https://github.com/yakir3160/MyWeb",
        image: portfolioWebsite,
    },


    {
        company: "Graduation Project",
        year: "2024",
        title: "Knowaste",
        results: [
            { title: "Developed a Full-Stack Web Application with React, Tailwind, Node.js & Firebase Admin" },
            { title: "Designed and Implemented a Restaurant Waste Management System" },
            { title: "Conducted Data Analysis and Optimized Database Performance" }
        ],
        // liveLink: "https://www.yakiralbilya.com",
        githubLink: "https://github.com/yakir3160/MyWeb",
        image: KnowasteImage,
        hasLiveLink: false, //not yet deployed
    },
    {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "#",
        image: aiStartupLandingPage,
    },
] as PortfolioProject[];