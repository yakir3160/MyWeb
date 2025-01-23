import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
    return (
        <div className={`py-16 pt-12 lg:py-20`}>
            <div className={'container'}>

                <div className={`bg-gradient-to-r from-emerald-500 to-yellow text-background 
                py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden`}>
                    <div
                        className={`absolute inset-0 opacity-5 -z-10`}
                        style={{backgroundImage: `url(${grainImage.src})`}}
                    ></div>
                    <div className={`flex flex-col md:flex-row gap-8 md:gap-1 items-center`}>
                        <div>
                            <h2 className={`text-2xl md:text-3xl font-serif`}>Let's work together</h2>
                            <p className={`text-sm md:text-base mt-2`}>Interested in discussing potential job opportunities or collaboration?
                                I'm always open to innovative projects and professional challenges.
                            </p>
                        </div>
                        <div>
                        <button className={`text-text bg-background inline-flex items-center px-6 
                    h-12 rounded-full gap-2 w-max border border-background `}>
                            <span className={`font-semibold`}>Contact me</span>
                            <ArrowUpRightIcon className={`size-4`}/>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
