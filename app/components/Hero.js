"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { roboto } from "../utils/fonts";

const Hero = () => {
    return (
        <div className="h-screen flex items-center px-10 sm:px-12 md:px-24 lg:px-36 container">
            <div>
                <motion.p
                    className={`${roboto.className} text-primary text-small-resp py-2`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 6 * 0.1 }}
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    className="text-slate-300 font-extrabold text-head-resp"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 7 * 0.1 }}
                >
                    Matthew Godwin.
                </motion.h1>
                <motion.h1
                    className="text-gray-400 font-bold text-head-resp leading-[1]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 8 * 0.1 }}
                >
                    I build things for the web.
                </motion.h1>
                <motion.p
                    className="text-[14px] sm:text-base font-normal text-gray-400 py-6 max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 9 * 0.1 }}
                >
                    I'm a skilled software engineer with a passion for crafting
                    outstanding digital solutions. From web development to
                    application design, I bring creativity and technical
                    expertise to every project.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 10 * 0.1 }}
                >
                    <CustomButton>Check out my resume!</CustomButton>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
