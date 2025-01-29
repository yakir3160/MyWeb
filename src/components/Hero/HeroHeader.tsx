import Image from "next/image";
import memoji from "@/assets/images/memoji-computer.png";

export const HeroHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src={memoji}
                alt="person behind computer"
                className="size-[100px] rounded-lg"
            />
            <div className="bg-gray-800 text-text rounded-full px-3 py-1.5 inline-flex items-center gap-4">
                <div className="bg-green-500 rounded-full size-3 relative">
                    <div className="bg-green-500 rounded-full animate-ping-large absolute inset-0"/>
                </div>
                <div className="text-sm font-medium">
                    Available for collaborations
                </div>
            </div>
        </div>
    );
};
