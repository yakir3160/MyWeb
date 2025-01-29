import {Card} from "@/components/Card/Card";
import {CardHeader} from "@/components/Card/CardHeader";
import {hobbies} from "@/constants/hobbies";
import {motion} from "framer-motion";
import {useRef} from "react";


export const HobbiesCard = () => {
    const constraintRef  = useRef(null)
    return (
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
    );
}