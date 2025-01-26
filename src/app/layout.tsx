import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Yakir Albilya",
    description: "My personal portfolio",
    icons: {
        icon: "/Y.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className={twMerge(
                inter.variable,
                calistoga.variable,
                `bg-background text-text antialiased font-sans`
            )}
        >
        {children}
        </body>
        </html>
    );
}
