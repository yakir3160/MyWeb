import AtomicImg from "@/assets/images/books/atomicHabits.png";
import SubtleImg from "@/assets/images/books/theSubtleArt.png";
import DynastyImg from "@/assets/images/books/theDynasty.png";
import HowToBACImg from "@/assets/images/books/howToBAC.png";
import HowToGDImg from "@/assets/images/books/howToGD.png";
import {StaticImageData} from "next/image";

interface Book {
    title: string;
    author: string;
    image: StaticImageData;
    url?: string;
}


export const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        image:AtomicImg ,
        url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    },
    {
        title: 'the subtle art of not giving a f*ck',
        author: 'Mark Manson',
        image: SubtleImg,
        url: "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713",
    },
    {
        title: 'The Dynasty',
        author: 'Jeff Benedict',
        image: DynastyImg,
        url: "https://www.amazon.com/The-Dynasty/dp/B088MLFXKF?sr=8-1",
    },
    {
        title: 'How to Build a Car',
        author: 'Adrian Newey',
        image: HowToBACImg ,
        url : "https://www.amazon.com/How-Build-Car-Autobiography-Greatest/dp/000819680X",
    },
    {
        title: 'How to use graphic design to sell...',
        author: 'Michael Bierut',
        image: HowToGDImg,
        url: "https://www.amazon.com/How-Use-Graphic-Design-Things/dp/0062413902",
    },

] as Book[];


