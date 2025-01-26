import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import WhatsUpIcon from '@/assets/icons/Whatsapp.svg';
import grainImage from "@/assets/images/grain.jpg";
import {SectionHeader} from "@/components/SectionHeader";

export const ContactSection = () => {
    return (
        <div className={`py-12  lg:py-20`}>
            <SectionHeader  eyebrow={'contact '} />
            <div className={'container'}>
                <div className={`bg-gradient-to-r from-emerald-500 to-yellow text-background 
                py-8 px-10 rounded-3xl text-center md:text-left relative z-10 overflow-hidden`}>
                    <div
                        className={`absolute inset-0 opacity-5 -z-10`}
                        style={{backgroundImage: `url(${grainImage.src})`}}
                    ></div>
                    <div className={`flex flex-col md:flex-row gap-8 md:gap-1 items-center`}>
                        <div>
                            <h2 className={`text-2xl md:text-3xl font-serif`}>Let's work together</h2>
                            <p className={`text-sm md:text-base mt-2`}>Interested in discussing potential job opportunities or collaboration?<br/>
                                I'm always open to innovative projects and professional challenges.
                            </p>
                        </div>
                        <div className={`flex flex-col md:flex-row gap-4`}>
                            <a href={`mailto:yakir2062@gmail.com`}>
                                <button className={`text-text bg-background inline-flex items-center px-6 
                    h-12 rounded-full gap-2 w-max border border-background `}>
                                    <span className={`font-semibold`}>Contact me</span>
                                    <ArrowUpRightIcon className={`size-4`}/>
                                </button>
                            </a>
                            <a href={`https://wa.me/972504444543`}>
                                <button className={`text-[#25D366]  bg-[#ECE5DD] inline-flex items-center px-6 border border-[#075E54]   
                        h-12 rounded-full gap-2 w-max  `}>
                                    <WhatsUpIcon className={`size-6`}/>
                                        <span className={`font-semibold`}>Chat on WhatsApp</span>
                                    </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
