"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { roboto } from "../utils/fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { urlForImage } from "@/sanity/lib/image";

const AboutMe = ({
    technologies = [],
    paragraph1 = "",
    paragraph2 = "",
    image = "",
}) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const imageURL = urlForImage(image);
    // const technologies = [
    //     "Python",
    //     "JavaScript",
    //     "Node.js",
    //     "Express",
    //     "HTML & CSS",
    //     "React",
    //     "Next.js",
    //     "TailwindCSS",
    //     "React Native",
    //     "Firebase",
    //     "MongoDB",
    //     "Redux Toolkit",
    //     "Whatsapp Cloud API Integration",
    //     "OpenAI API Integration",
    //     "Discord.js",
    // ];

    return (
        <section
            id="about"
            className="px-10 sm:px-12 md:px-24 lg:px-36 xl:px-56 min-h-screen container flex flex-col justify-center items-center"
        >
            <motion.div
                className="w-full flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0 * 0.1 }}
            >
                <h1 className="text-2xl font-bold text-sub-resp text-slate-300 pr-5">
                    <span
                        className={`${roboto.className} text-primary font-medium text-num-resp pr-3`}
                    >
                        01.
                    </span>
                    About Me
                </h1>
                <div className="flex-1 md:w-32  h-[1px] bg-white/20" />
            </motion.div>
            <motion.div className="flex flex-col md:flex-row space-y-9 md:space-y-0 md:space-x-9 items-start my-5">
                <div className="text-slate-400 text-base w-full md:w-[60%] flex-shrink-0">
                    <motion.p
                        className="py-3"
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 1 * 0.1 }}
                    >
                        {paragraph1}
                    </motion.p>
                    <motion.p
                        className="py-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 2 * 0.1 }}
                    >
                        {paragraph2}
                    </motion.p>
                    <motion.p
                        className="py-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5, delay: 3 * 0.1 }}
                    >
                        Here are a few technologies I've been working with
                        recently:
                    </motion.p>
                    <motion.ul
                        className={`${roboto.className} grid grid-cols-2`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 4 * 0.1 }}
                    >
                        {technologies?.map((technology, index) => (
                            <li
                                key={technology.id}
                                className="text-[13px] before:content-['▹'] before:pr-2 before:text-primary"
                            >
                                {technology.title}
                            </li>
                        ))}
                    </motion.ul>
                </div>
                <motion.div
                    className="w-full md:w-[40%] flex justify-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 5 * 0.1 }}
                >
                    <div className="border-2 border-primary rounded-[4px] max-w-[280px] h-auto">
                        <div className="w-full h-full cursor-pointer relative -translate-x-3 -translate-y-3 hover:-translate-x-5 hover:-translate-y-5 transition-all duration-200">
                            <div className="absolute w-full h-full bg-primary/70 rounded-md hover:bg-transparent transition-all duration-100 cursor-pointer" />
                            <Image
                                src={
                                    imageURL?.url()
                                        ? imageURL?.url()
                                        : "/assets/my-pic.jpg"
                                }
                                // src={"/assets/my-pic.jpg"}
                                width={300}
                                height={300}
                                className="rounded-[4px] w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
