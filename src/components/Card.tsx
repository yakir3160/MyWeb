import grainImage from "@/assets/images/grain.jpg";
import {twMerge} from "tailwind-merge";
import {PropsWithChildren} from "react";

export const Card = ({className,children} :
    PropsWithChildren<{className?: string}>) => {
       return (
        <div   className={twMerge("bg-gucci/20 rounded-3xl relative\n" +
            "            after:content-[''] after:absolute after:inset-0 z-0 after:z-10\n" +
            "            overflow-hidden after:outline-2\n" +
            "            after:outline after:outline-action/20 after:-outline-offset-2\n" +
            "             after:pointer-events-none after:rounded-3xl p-6",className)}
        >
            <div className={'absolute inset-0 -z-10 opacity-5  '}
                 style={{
                     backgroundImage: `url(${grainImage.src})`
                 }}>
            </div>
            {children}
        </div>
    );
}