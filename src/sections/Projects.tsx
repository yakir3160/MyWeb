import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
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
    link: "https://youtu.be/7hi5zwO75yc",
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
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return(
      <section className={`pb-16 lg:py-24`}>
        <div className="container ">
          <div className={`flex flex-col justify-center`}>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-yellow  bg-clip-text text-transparent text-center ">
              Real-World-Results
            </p>
          </div>
          <h2 className={`text-3xl md:text-5xl font-serif text-center mt-6`}>
            Featured Projects
          </h2>
          <p className={`text-center text-text/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto`}>
            See how I transformed concepts into engaging digital experiences.
          </p>
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project) => (
                <div key={project.title} className="bg-gucci/20 rounded-3xl relative
            after:content-[''] after:absolute after:inset-0 z-0 after:z-10
            overflow-hidden after:outline-2 
            after:outline after:outline-action/20 after:-outline-offset-2 after:rounded-3xl
            px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none "
                >

                  <div className={'absolute inset-0 -z-10 opacity-5  '}
                       style={{
                         backgroundImage: `url(${grainImage.src})`
                       }}>
                  </div>

                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16`}>
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
                      <div className={`flex flex-col md:flex-row md:gap-4 mt-2`}>
                        <a href={project.link}>
                          <button className={`inline-flex justify-center items-center gap-2  bg-background border border-action/60 
                     rounded-3xl h-12 px-6 py-5 w-full md:w-auto text-nowrap mt-6  md:mt-8 font-semibold text-text`}>
                            <span>View on GitHub</span>
                            <GithubIcon className={`size-4`}/>
                          </button>
                        </a>
                        <a href={project.link}>
                          <button className={`inline-flex justify-center items-center  gap-2 bg-text 
                       rounded-3xl h-12 px-6 w-full  md:w-auto mt-8 text-nowrap  font-semibold text-background`}>
                            <span>Visit Live Site</span>
                            <ArrowRight className={`size-4`}/>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className={`relative`}>
                      <Image src={project.image}
                             alt={project.title}
                             className={`mt-8 -mb-4 lg:mt-0 md:mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none`}/>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};
