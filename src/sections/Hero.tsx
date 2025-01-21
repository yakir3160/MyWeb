import memoji from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
      <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip ">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
              className="absolute inset-0 -z-30 opacity-5"
              style={{ backgroundImage: `url(${grainImage.src})` }}
          > </div>

          <div className="size-[640px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          <HeroOrbit size={800} rotation={-72}>
            <StarIcon className="size-28 text-emerald-500" />
          </HeroOrbit>

          <HeroOrbit size={550} rotation={20}>
            <StarIcon className="size-12 text-emerald-500" />
          </HeroOrbit>

          <HeroOrbit size={590} rotation={98}>
            <StarIcon className="size-8 text-emerald-500" />
          </HeroOrbit>

          <HeroOrbit size={430} rotation={-14}>
            <SparkleIcon className="size-8 text-emerald-500/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79}>
            <SparkleIcon className="size-5 text-emerald-500/20" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178}>
            <SparkleIcon className="size-10 text-emerald-500/20" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144}>
            <SparkleIcon className="size-14 text-emerald-500/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85}>
            <div className="size-3 rounded-full bg-emerald-500/20"></div>
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41}>
            <div className="size-2 rounded-full bg-emerald-500/20"></div>
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5}>
            <div className="size-2 rounded-full bg-emerald-500/20"></div>
          </HeroOrbit>
        </div>

        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <Image
                src={memoji}
                alt="person behind computer"
                className="size-[100px] rounded-full"
            />
            <div className="bg-gray-800 text-text rounded-full px-3 py-1.5 inline-flex items-center gap-4">
              <div className="bg-green-500 rounded-full size-2.5 animate-pulse"></div>
              <div className="text-sm font-medium">
                Available for collaborations
              </div>
            </div>
          </div>
          <div className="max-w-lg pb-1 lg:pb-3 mx-auto">
            <h1 className="text-3xl md:text-5xl font-serif text-center mt-8 tracking-wide">
              Hi, I'm Yakir Albilya <br />
            </h1>
            <h2 className="text-lg md:text-4=2xl  text-text/80  font-serif text-center mt-1">
              Full Stack Developer
            </h2>
            <p className="text-center mt-4  text-text/60 md:text-lg">
              I specialize in transforming designs into functional,
              high-performing web applications.Let's discuss your next project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-4">
            <button className="inline-flex items-center gap-2 relative bg-background rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-yellow rounded-full"/>
              <div className="absolute inset-[1px] bg-background rounded-full"/>
              <span className="relative inline-flex items-center gap-2 px-6 h-12">
                  <span className="font-semibold">Explore My Work</span>
                  <ArrowDown className="size-4"/>
              </span>
            </button>
            <button
                className=" inline-flex items-center gap-2 border border-text bg-text text-background px-6 h-12 rounded-full">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
  );
};
