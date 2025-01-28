import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import {StaticImageData} from "next/image";

interface Testimonial {
    name: string;
    position: string;
    text: string;
    avatar: StaticImageData;
}
export const testimonials = [
    {
        name: "Coming Soon",
        position: "Coming Soon",
        text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
        avatar: memojiAvatar1,
    },
    {
        name: "Coming Soon",
        position: "Coming Soon",
        text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
        avatar: memojiAvatar2,
    },
    {
        name: "Coming Soon",
        position: "Coming Soon",
        text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
        avatar: memojiAvatar3,
    },
    {
        name: "Coming Soon",
        position: "Coming Soon",
        text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
        avatar: memojiAvatar4,
    },
    {
        name: "Coming Soon",
        position: "Coming Soon",
        text: "Testimonial details coming soon. Stay tuned for professional endorsements.",
        avatar: memojiAvatar5,
    },
]as Testimonial[];
