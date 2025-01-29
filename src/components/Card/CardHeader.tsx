import StarIcon from "@/assets/icons/star.svg";
import {twMerge} from "tailwind-merge";
export const CardHeader = (
    {
        title,
        description,
        className,
    }:
    {
        title:string;
        description:string;
        className?:string;
    }) => {

    return (
        <div className={twMerge(`flex flex-col p-6 md:py-8 md:px-10 lg:space-y-2`,className)}>
            <div className={`inline-flex items-center gap-2`}>
                <StarIcon className={`size-9 text-emerald-500`}/>
                <h3 className={`font-serif text-3xl`}>{title}</h3>
            </div>
            <p className={`text-sm lg:text-base max-w-xs text-text/60`}>{description}</p>
        </div>
    );
}