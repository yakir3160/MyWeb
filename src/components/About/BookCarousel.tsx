'use client'

import { Card } from "@/components/Card/Card";
import { CardHeader } from "@/components/Card/CardHeader";
import Image from "next/image";
import { books } from "@/constants/books";
import { useEffect, useState } from "react";
import { motion, AnimatePresence,Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react";

export const BookCarousel = () => {
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const [direction, setDirection] = useState(0);  // -1 for left, 1 for right

    const nextBook = () => {
        setDirection(1);
        setCurrentBookIndex((currentBookIndex + 1) % books.length);
    };

    const prevBook = () => {
        setDirection(-1);
        setCurrentBookIndex((currentBookIndex - 1 + books.length) % books.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextBook();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentBookIndex]);

    interface CustomVariants extends Variants {
        enter: (direction: number) => {
            x: number;
            opacity: number;
        };
        center: {
            zIndex: number;
            x: number;
            opacity: number;
        };
        exit: (direction: number) => {
            zIndex: number;
            x: number;
            opacity: number;
        };
    }

    const variants: CustomVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction > 0 ? -50 : 50,
            opacity: 0
        })
    };

    return (
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
            />

            <div className="w-24 md:w-20 mx-auto md:-mt-6 relative">
                <button 
                    onClick={prevBook} 
                    className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-8 p-1 rounded-full bg-background/50 hover:bg-background"
                >
                    <ChevronLeft className="size-6" />
                </button>
                
                <button 
                    onClick={nextBook} 
                    className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-8 p-1 rounded-full bg-background/50 hover:bg-background"
                >
                    <ChevronRight className="size-6" />
                </button>
                       
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentBookIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 120, damping: 20 },
                            opacity: { duration: 0.2 }
                        }}

                        className="flex flex-col items-center gap-2 inset-0"
                    >
                        <Image
                            src={books[currentBookIndex].image}
                            alt={books[currentBookIndex].title}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="text-center text-nowrap">
                <a 
                    href={books[currentBookIndex].url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary underline"
                >
                    <h4 className="font-semibold">{books[currentBookIndex].title}</h4>
                </a>
                <p className="text-sm text-text/60">{books[currentBookIndex].author}</p>
            </div>
        </Card>
    );
};