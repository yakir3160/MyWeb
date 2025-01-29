import {Card} from "@/components/Card/Card";
import {CardHeader} from "@/components//Card/CardHeader";
import {ToolboxItem} from "@/components/About/ToolboxItem";
import {toolbox} from "@/constants/toolbox";


export const ToolboxCard = () => {
    return(
        <Card className={`h-[320px] md:col-span-3 lg:col-span-2`}>
            <CardHeader
                title={"My Toolbox"}
                description={"Explore the technologies and tools I use to" +
                    " craft exceptional digital experiences"}
            />
            <ToolboxItem items={toolbox} itemsWrapperClassName={'animate-move-left [animation-duration:30s]'}/>
            <ToolboxItem items={toolbox} className={`mt-4`}  itemsWrapperClassName={'animate-move-right [animation-duration:25s]'}/>
        </Card>
    )
}