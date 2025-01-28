import portfolioWebsite from "@/assets/images/myWeb.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import {StaticImageData} from "next/image";


interface PortfolioProject {
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
            { title: "Built with Next.js, TypeScript, and Tailwind CSS" },
            { title: "Fully responsive design for all devices" },
            { title: "Deployed seamlessly on Vercel" },
        ],
        liveLink: "https://www.yakiralbilya.com",
        githubLink: "https://github.com/yakir3160/MyWeb",
        image: portfolioWebsite,
    },


    {
        company: "Innovative Co",
        year: "2021",
        title: "Light Saas Landing Page",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expanded customer reach by 35%" },
            { title: "Increased brand awareness by 15%" },
        ],
        link: "#",
        image: lightSaasLandingPage,
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