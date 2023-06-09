"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { roboto } from "../utils/fonts";
import { useInView } from "react-intersection-observer";

const Hero = ({ fullname = "", resume = "", heroDescription = "" }) => {
    const [ref, inView] = useInView();

    return (
        <section className="h-screen flex items-center md:px-20 container">
            <div>
                <motion.p
                    className={`${roboto.className} text-primary text-small-resp py-2`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 6 * 0.1 }}
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    className="text-slate-300 font-extrabold text-head-resp"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 7 * 0.1 }}
                >
                    {fullname}.
                </motion.h1>
                <motion.h1
                    className="text-gray-400 font-bold text-head-resp leading-[1]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 8 * 0.1 }}
                >
                    I build things for the web.
                </motion.h1>
                <motion.p
                    ref={ref}
                    className="text-[14px] sm:text-base font-normal text-gray-400 py-6 max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 9 * 0.1 }}
                >
                    {heroDescription}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 10 * 0.1 }}
                >
                    <CustomButton href={resume}>
                        Check out my resume!
                    </CustomButton>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
