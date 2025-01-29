
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";

import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card/Card";
import {portfolioProjects} from "@/constants/projects";
import {ProjectCard} from "@/components/ProjectCard";



export const ProjectsSection = () => {
    return (
        <section className="pb-16 py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Real-World-Results"
                    title="Featured Projects"
                    description="See how I transformed concepts into engaging digital experiences."
                />
                <div className="flex flex-col mt-10 md:mt-20 gap-20">
                    {portfolioProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
