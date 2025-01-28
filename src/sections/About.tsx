"use client";
import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import {CardHeader} from "@/components/CardHeader";
import Image from "next/image";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import BookImage from "@/assets/images/books/atomicHabits.png";
import {ToolboxItem} from "@/components/ToolboxItem";
import {toolbox} from "@/constants/toolbox";
import {hobbies} from "@/constants/hobbies";
import {motion} from "framer-motion";
import {useRef} from "react";
import {BookCarousel} from "@/components/BookCarousel";



export const AboutSection = () => {
    const constraintRef  = useRef(null)
    return (
        <div className={`py-20 lg:py-[116px]`}>
            <div className={`container`}>
                <SectionHeader
                    title={"A Glimpse Into My World"}
                    eyebrow={"About Me"}
                    description={"Learn more about who I am, what I do, and what inspires me."}/>
                <div className={`mt-10 md:mt-20 flex flex-col gap-8`}>
                    <div className={`grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3`}>
                        <BookCarousel/>
                        <Card className={`h-[320px] md:col-span-3 lg:col-span-2`}>
                            <CardHeader
                                title={"My Toolbox"}
                                description={"Explore the technologies and tools I use to" +
                                    " craft exceptional digital experiences"}
                            />
                            <ToolboxItem items={toolbox} itemsWrapperClassName={'animate-move-left [animation-duration:30s]'}/>
                            <ToolboxItem items={toolbox} className={`mt-4`}  itemsWrapperClassName={'animate-move-right [animation-duration:25s]'}/>
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
