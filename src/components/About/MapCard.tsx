import Image from "next/image";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import {Card} from "@/components/Card/Card";

export const MapCard = () => {
    return (
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
    );
};