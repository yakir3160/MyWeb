import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript-svgrepo-com.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJsIcon from "@/assets/icons/nextjs-icon.svg";
import TailwindIcon from "@/assets/icons/tailwind-css.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import VercelIcon from "@/assets/icons/logo-vercel.svg";
import ChromeDevToolsIcon from "@/assets/icons/chrome.svg";

interface ToolboxItem {
    title: string;
    iconType: React.ElementType;
}
export const toolbox = [
    {
        title : 'JavaScript',
        iconType
            : JavascriptIcon,
    },
    {
        title: 'TypeScript',
        iconType
            : TypescriptIcon,
    },
    {
        title : 'HTML5',
        iconType
            : HtmlIcon,
    },
    {
        title : 'CSS3',
        iconType
            : CssIcon,
    },
    {
        title : 'React',
        iconType
            : ReactIcon,
    },
    {
        title : 'Next.js',
        iconType
            : NextJsIcon,
    },
    {
        title : 'Tailwind CSS',
        iconType
            : TailwindIcon,
    },
    {
        title : 'GitHub',
        iconType
            : GitHubIcon,
    },
    {
        title : 'Vercel',
        iconType
            : VercelIcon,
    },
    {
        title : 'Chrome DevTools',
        iconType
            : ChromeDevToolsIcon,
    },
] as ToolboxItem[];
