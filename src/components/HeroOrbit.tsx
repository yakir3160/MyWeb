
import { PropsWithChildren } from "react";
import {twMerge} from "tailwind-merge";

export  const HeroOrbit = ({
                               children
                               ,size,
                               rotation,
                               shouldOrbitSpin,
                               spinOrbitDuration,
                               shouldStarSpin,
                               spinStarDuration,
                           }: PropsWithChildren <{
    size: number;
    rotation: number;
    spinOrbitDuration?: string;
    shouldOrbitSpin?: boolean
    shouldStarSpin?: boolean
    spinStarDuration?: string
}>) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  " >
            <div className={twMerge(shouldOrbitSpin && `animate-spin`)} style={{animationDuration : spinOrbitDuration}}>
                <div className="flex items-start  justify-start  "
                     style={{
                         transform: `rotate(${rotation}deg)`,
                         width: `${size}px`,
                         height: `${size}px`,
                     }}
                >
                    <div className={twMerge(shouldStarSpin && `animate-spin`)} style={{animationDuration : spinStarDuration}}>
                        <div className="inline-flex "
                             style={{
                                 transform: `rotate(${rotation*-1}deg)`,
                             }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

