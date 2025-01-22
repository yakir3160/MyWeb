import {TechIcon} from "@/components/TechIcon";
import {twMerge} from "tailwind-merge";

export const ToolboxItem = (
    {
        items,
        className,
        itemsWrapperClassName,

    }:{
    items :
        {
            title : string;
            iconType : React.ElementType;
        }[];
    className?:string;
    itemsWrapperClassName?:string;
}) =>{
    return (
        <div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',className)}>
            <div  className={twMerge(`flex flex-none py-0.5 gap-8 pr-6 `,itemsWrapperClassName)}>
                {
                    items.map((item) => (
                        <div key={item.title} className={`inline-flex items-center gap-1  p-3
                                    outline outline-2 outline-gucci/40  rounded-full`}>
                            <TechIcon component={item.iconType}/>
                            <span className={`font-semibold`}>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
