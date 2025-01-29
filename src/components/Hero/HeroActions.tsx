import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroActions = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="#projects">
                <button className="inline-flex z-0 items-center gap-2 relative bg-background transition-transform duration-300 ease-out hover:scale-95 rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-yellow rounded-full"/>
                    <div className="absolute inset-[1px] bg-background rounded-full"/>
                    <span className="relative inline-flex items-center gap-2 px-6 h-12">
                        <span className="font-semibold">Explore My Work</span>
                        <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1"/>
                    </span>
                </button>
            </a>
            <a href="#contact" className="z-0">
                <button className="inline-flex z-0 items-center gap-2 border border-text bg-text text-background px-6 h-12 rounded-full transition-all duration-300 ease-out hover:scale-95 hover:shadow-lg">
                    <span>👋</span>
                    <span className="font-semibold">Let's Connect</span>
                </button>
            </a>
        </div>
    );
};
