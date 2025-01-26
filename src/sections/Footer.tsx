'use client'
import ArrowRightUp from '@/assets/icons/arrow-up-right.svg';
import LinkedinIcon from '@/assets/icons/linkedin-svgrepo-com.svg';
import InstagramIcon from '@/assets/icons/instagram-svgrepo-com.svg';

import {TechIcon} from '@/components/TechIcon';

const footerLinks = [
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/yakiralbilya/',
        icon: InstagramIcon,
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yakir-albilya/',
        icon: LinkedinIcon,
    },
];
export const Footer = () => {

    return (
        <footer className={`relative z-0 overflow-x-clip`}>
            <div className={`absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2
             bg-emerald-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]`}></div>
            <div className={`container`}>
                <div className={`border-t border-text/40 py-4 text-sm  flex flex-col md:flex-row md:justify-between items-center gap-8 z-0 `}>
                    <div className={`text-text/70`}>&copy; 2025. All right reserved.</div>
                    <nav className={`flex flex-col md:flex-row items-center gap-8`}>
                        {footerLinks.map(link => (
                            <a
                                key={link.title}
                                className={`inline-flex items-center gap-1.5 z-20 cursor-pointer hover:opacity-70 transition-opacity`}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TechIcon component={link.icon}/>
                                <span className={`font-semibold`}>{link.title}</span>
                                <ArrowRightUp className={`size-4`}/>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
};
