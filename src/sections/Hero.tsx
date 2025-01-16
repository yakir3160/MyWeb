import memoji from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={memoji}
            alt="person behind computer"
            className="size-[100px] rounded-full"
          />

          <div className="bg-gray-800  text-text rounded-full px-3 py-1.5 inline-flex items-center gap-4 ">
            <div className="bg-action rounded-full size-2.5 animate-pulse"></div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
          
        </div>
        <h1 className="text-3xl font-serif text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="text-center mt-4  text-text/60">
          Specializing in crafting seamless web applications, I turn complex
          challenges into elegant solutions that perform beautifully. Ready to
          discuss your next project?
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋🏻</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
