'use client'

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import { books } from "@/constants/books";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export const BookCarousel = () => {
    const [currentBookIndex, setCurrentBookIndex] = useState(0);

    const nextBook = () => {
        setCurrentBookIndex((currentBookIndex + 1) % books.length);
    };

    const prevBook = () => {
        setCurrentBookIndex((currentBookIndex - 1 + books.length) % books.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextBook();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentBookIndex]);

    return (
        <Card className={`h-[320px] md:col-span-2 lg:col-span-1`}>
            <CardHeader
                title={"My Reads"}
                description={"Explore the books shaping my perspectives"}
            />

            <div className={`w-20  mx-auto md:-mt-5 relative`}>
                       
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentBookIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className={`flex flex-col items-center gap-2  inset-0`}
                    >
                        <Image
                            src={books[currentBookIndex].image}
                            alt={books[currentBookIndex].title}
                        />
                   
                    </motion.div>
                </AnimatePresence>
               
            </div>
             <div className={`text-center text-nowrap`}>
                <a href={books[currentBookIndex].url} target="_blank" rel="noopener noreferrer" className={`text-primary underline`}>
                            <h4 className={`font-semibold`}>{books[currentBookIndex].title}</h4>
                            
                        </a>
                            <p className={`text-sm text-text/60`}>{books[currentBookIndex].author}</p>
                        </div>
        </Card>
    );
};