
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";

import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import {portfolioProjects} from "@/constants/projects";



export const ProjectsSection = () => {
  return(
      <section className={`pb-16 py-16 lg:py-24 `}>
        <div className="container ">
          <SectionHeader  eyebrow={"Real-World-Results"} title={"Featured Projects"} description={"See how I transformed concepts into engaging digital experiences."}/>
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project,projectIndex) => (

                <Card key={project.title} className={`pb-0 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16` }
                        style={{
                            top :`calc(64px + ${projectIndex * 38}px`
                        }}
                >
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-6`}>
                    <div className={`lg:pb-16`}>
                      <div
                          className={`uppercase gap-2  font-semibold inline-flex bg-gradient-to-r from-emerald-300 to-yellow tracking-widest text-sm text-transparent bg-clip-text `}>
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className={`font-serif text-2xl md:text-4xl mt-2 md:mt-5`}>{project.title}</h3>
                      <hr className={`border-t-2 border-action/20 mt-4 md:mt-5`}/>
                      <ul className={`flex flex-col gap-4 mt-4`}>
                        {project.results.map((result) => (
                            <li  className={`flex gap-2 text-sm md:text-base text-text/60 `}>
                              <CheckIcon className={`size-5 md:size-6`}/>
                              <span>{result.title} </span>
                            </li>
                        ))}
                      </ul>
                      <div className={`flex flex-col md:flex-row gap-4 md:gap-4  mt-6 md:mt-8 lg:mt-12 `}>
                        <a href={project.githubLink}  target={'_blank'}>
                          <button
                              className="inline-flex justify-center items-center gap-2 relative bg-background rounded-3xl w-full md:w-auto ">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-yellow rounded-3xl"/>
                            <div className="absolute inset-[1px] bg-background rounded-3xl"/>
                            <span className="relative inline-flex items-center gap-2 px-6 h-12">
                             <span className="font-semibold text-text text-nowrap">View on GitHub</span>
                            <GithubIcon className="size-4"/>
                            </span>
                          </button>
                        </a>
                        <a href={project.liveLink} target={'_blank'}>
                          <button className={`inline-flex justify-center items-center  gap-2 bg-text 
                       rounded-3xl h-12 px-6 w-full  md:w-auto text-nowrap   font-semibold text-background`}>
                            <span>Visit Live Site</span>
                            <ArrowRight className={`size-4`}/>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className={``}>
                      <Image src={project.image}
                             alt={project.title}
                             className={`mt-8 -mb-10 lg:mt-10 md:-mb-16 lg:absolute lg:h-full lg:w-auto lg:max-w-none`}/>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};
