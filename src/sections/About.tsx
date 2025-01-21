import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import {TechIcon} from "@/components/TechIcon";
import Image from "next/image";

import StarIcon from "@/assets/icons/star.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/ts.svg";
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
    },
    {
        title : 'American Football',
        emoji : '🏈',
    },

    {
        title: 'Racing',
        emoji: '🏎️',
    },
    {
        title : 'Cooking',
        emoji : '🍳',
    },
    {
        title: 'Fitness',
        emoji: '🏋️‍♂️️',
    },
    {
        title : 'Meditation',
        emoji : '🧘',
    },
]
export const AboutSection = () => {
    return (
        <div className={`py-20`}>
            <div className={`container`}>
                <SectionHeader
                    title={"A Glimpse Into My World"}
                    eyebrow={"About Me"}
                    description={"Learn more about who I am, what I do, and what inspires me."}/>
                <div className={`mt-20`}>
                    <Card className={`h-[320px]`}>
                        <div>
                            <div className={`inline-flex items-center gap-2`}>
                                <StarIcon className={`size-9 text-emerald-500`}/>
                                <h3 className={`font-serif text-3xl`}>My Reads</h3>
                            </div>
                            <p className={`text-sm text-text/60`}>Explore the books shaping my perspectives</p>
                        </div>
                        <div className={`w-40 mx-auto mt-8`}>
                        <Image src={BookImage} alt={`Book Image`}/>
                        </div>
                    </Card>
                    <Card>
                        <div>
                        <StarIcon/>
                            <h3 className={`text-2xl font-bold mt-4`}>My Toolbox</h3>
                            <p>Explore the technologies and tools I use to craft exceptional digital experiences</p>
                        </div>
                        <div>
                            {
                                toolboxItems.map((item) => (
                                    <div key={item.title} className={`flex items-center space-x-4 mt-4`}>
                                        <TechIcon component={item.iconType}/>
                                        <span>{item.title}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <StarIcon/>
                            <h3 className={`text-2xl font-bold mt-4`}>Beyond the Code</h3>
                            <p>Explore my interests and hobbies beyond digital realm</p>
                        </div>
                    </Card>
                    <Card>
                        <Image src={MapImage} alt={'Map Image'}/>
                        <Image src={SmileMemoji} alt={'Smile Memoji'}/>
                    </Card>
                    <Card>
                        {hobbies.map((hobby) => (
                            <div key={hobby.title} className={`flex items-center space-x-4 mt-4`}>
                                <span>{hobby.title}</span>
                                <span>{hobby.emoji}</span>
                            </div>
                        ))}
                    </Card>
                </div>
            </div>
        </div>
    );

};
