"use client";
import {SectionHeader} from "@/components/SectionHeader";
import {BookCarousel} from "@/components/About/BookCarousel";
import {MapCard} from "@/components/About/MapCard";
import {HobbiesCard} from "@/components/About/HobbiesCard";
import {ToolboxCard} from "@/components/About/ToolboxCard";



export const AboutSection = () => {
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
                        <ToolboxCard/>
                    </div>
                    <div className={`grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3`}>
                        <HobbiesCard/>
                        <MapCard/>
                    </div>
                </div>
            </div>
        </div>
    );

};
