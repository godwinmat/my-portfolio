"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { roboto } from "../utils/fonts";

const Experience = ({ experiences = [] }) => {
    const { inView, ref } = useInView({ triggerOnce: true });

    const [active, setActive] = useState(0);
    let activeExperience = experiences[active];

    return (
        <section
            id="experience"
            className="md:px-10 container flex flex-col justify-center items-center my-20"
        >
            <motion.div
                ref={ref}
                className="w-full flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0 * 0.1 }}
            >
                <h1 className="text-2xl font-bold text-sub-resp text-slate-300 pr-5">
                    <span
                        className={`${roboto.className} text-primary font-medium text-num-resp pr-3`}
                    >
                        02.
                    </span>
                    Where I've Worked
                </h1>
                <div className="flex-1 md:w-32  h-[1px] bg-white/20" />
            </motion.div>
            <motion.div className="w-full flex flex-col sm:flex-row space-x-5 text-slate-400 my-10">
                <div className="overflow-x-scroll sm:overflow-x-visible scrollbar-hide hover:scrollbar-default transition-all duration-300">
                    <ul className="flex flex-row sm:flex-col">
                        {experiences?.map((exp, index) => (
                            <li
                                key={index}
                                className={`${
                                    roboto.className
                                } flex-1 cursor-pointer hover:bg-slate-900 hover:text-primary  transition-all duration-300 ${
                                    active === index ? "text-primary" : ""
                                }
                                        ${
                                            active === index
                                                ? "border-primary"
                                                : "border-slate-600"
                                        }
                                        ${
                                            active === index
                                                ? "border-b-[3px] sm:border-l-[3px] sm:border-b-0"
                                                : "border-b-2 sm:border-l-2 sm:border-b-0"
                                        }
                                    `}
                                onClick={() => setActive(index)}
                            >
                                <p className="text-[13px] px-4 py-3 whitespace-nowrap">
                                    {exp.company}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <div className="flex flex-col space-y-4">
                        <div className="p-2">
                            <h2 className="text-lg font-semibold">
                                {activeExperience?.title}{" "}
                                <span className="text-primary ">
                                    @{" "}
                                    <span className="hover:underline cursor-pointer">
                                        {activeExperience?.company}
                                    </span>
                                </span>
                            </h2>
                            <p
                                className={`${roboto.className} text-xs text-gray-500 pb-4 pt-2`}
                            >
                                {activeExperience?.date} |{" "}
                                {activeExperience?.location}
                            </p>
                            <ul className="">
                                {activeExperience?.roles.map((role, index) => (
                                    <li key={index} className="flex mb-3">
                                        <span className="text-primary pr-3">
                                            ▹
                                        </span>
                                        <p className="text-sm font-normal">
                                            {role}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
