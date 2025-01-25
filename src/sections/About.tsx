"use client";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import {CardHeader} from "@/components/CardHeader";
import Image from "next/image";

import StarIcon from "@/assets/icons/star.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript-svgrepo-com.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJsIcon from "@/assets/icons/nextjs-icon.svg";
import TailwindIcon from "@/assets/icons/tailwind-css.svg";
import ChromeDevToolsIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import VercelIcon from "@/assets/icons/logo-vercel.svg"

import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import BookImage from "@/assets/images/book-cover.png";
import {ToolboxItem} from "@/components/ToolboxItem";

import {motion} from "framer-motion";
import {useRef} from "react";


const toolboxItems = [
    {
        title : 'JavaScript',
        iconType
            : JavascriptIcon,
    },
    {
        title: 'TypeScript',
        iconType
            : TypescriptIcon,
    },
    {
        title : 'HTML5',
        iconType
            : HtmlIcon,
    },
    {
        title : 'CSS3',
        iconType
            : CssIcon,
    },
    {
        title : 'React',
        iconType
            : ReactIcon,
    },
    {
        title : 'Next.js',
        iconType
            : NextJsIcon,
    },
    {
        title : 'Tailwind CSS',
        iconType
            : TailwindIcon,
    },
    {
        title : 'GitHub',
        iconType
            : GitHubIcon,
    },
    {
        title : 'Vercel',
        iconType
            : VercelIcon,
    },
    {
        title : 'Chrome DevTools',
        iconType
            : ChromeDevToolsIcon,
    },
];
const hobbies = [
    {
        title : 'Travel',
        emoji : '🌍',
        left:'5%',
        top:'5%',
    },
    {
        title : 'American Football',
        emoji : '🏈',
        left:'50%',
        top:'5%',
    },

    {
        title: 'Racing',
        emoji: '🏎️',
        left:'10%',
        top:'35%',
    },
    {
        title : 'Cooking',
        emoji : '🍳',
        left:'5%',
        top:'65%',
    },
    {
        title: 'Fitness',
        emoji: '🏋️‍♂️️',
        left:'60%',
        top:'45%',
    },
    {
        title : 'Meditation',
        emoji : '🧘',
        left:'45%',
        top:'70%',
    },
    {
        title : 'Music',
        emoji : '🎵',
        left:'25%',
        top:'50%',
    },

]
export const AboutSection = () => {
    const constraintRef  = useRef(null)
    return (
        <div className={`py-20 lg:py-[116px]`}>
            <div className={`container`}>
                <SectionHeader
                    title={"A Glimpse Into My World"}
                    eyebrow={"About Me"}
                    description={"Learn more about who I am, what I do, and what inspires me."}/>
                <div className={`mt-[85px] flex flex-col gap-8`}>
                    <div className={`grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3`}>
                        <Card className={`h-[320px] md:col-span-2 lg:col-span-1`}>
                            <CardHeader
                                title={"My Reads"}
                                description={"Explore the books shaping my perspectives"}/>
                            <div className={`w-40 mx-auto mt-2 md:mt-0`}>
                                <Image src={BookImage} alt={`Book Image`}/>
                            </div>
                        </Card>
                        <Card className={`h-[320px] md:col-span-3 lg:col-span-2`}>
                            <CardHeader
                                title={"My Toolbox"}
                                description={"Explore the technologies and tools I use to" +
                                    " craft exceptional digital experiences"}
                            />
                            <ToolboxItem items={toolboxItems} itemsWrapperClassName={'animate-move-left [animation-duration:30s]'}/>
                            <ToolboxItem items={toolboxItems} className={`mt-4`}  itemsWrapperClassName={'animate-move-right [animation-duration:25s]'}/>
                        </Card>
                    </div>
                    <div className={`grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3`}>
                        <Card className={`h-[320px] flex flex-col md:col-span-3 lg:col-span-2`}>
                            <CardHeader
                                title={"Beyond the Code"}
                                description={"Explore my interests and hobbies beyond the digital realm"}
                            />
                            <div className={`relative flex-1`} ref={constraintRef}>
                                {hobbies.map((hobby) => (
                                    <motion.div key={hobby.title} className={` absolute inline-flex gap-2 px-6 
                            bg-gradient-to-r from-emerald-500 to-yellow rounded-full py-2
                            items-center
                            `}
                                         style={{
                                             left: hobby.left,
                                             top: hobby.top,
                                         }}
                                                drag
                                                dragConstraints={constraintRef}
                                    >
                                        <span className={`font-medium  text-background`}>{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className={`h-[320px] relative md:col-span-2 lg:col-span-1`}>
                            <Image
                                src={MapImage}
                                alt={'Map Image'}
                                className={`h-full w-full object-cover object-left-top `}
                            />
                            <div className={`absolute top-28 left-1/2
                        -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:absolute after:contain-['']
                        after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gucci/60    
                        `}>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r from-emerald-300 to-yellow rounded-full -z-20 
                                    animate-ping [animation-duration:2s] `}></div>
                                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-300 to-yellow rounded-full -z-10 `}></div>
                                <Image
                                    src={SmileMemoji}
                                    alt={'Smile Memoji'}
                                    className={`size-20`}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );

};
