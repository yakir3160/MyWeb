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
        <div className={twMerge(`flex flex-col`,className)}>
            <div className={`inline-flex items-center gap-2`}>
                <StarIcon className={`size-9 text-emerald-500`}/>
                <h3 className={`font-serif text-3xl`}>{title}</h3>
            </div>
            <p className={`text-sm text-text/60`}>{description}</p>
        </div>
    );
}