"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="h-screen flex items-center p-10 sm:p-12 md:p-24 lg:p-36 xl:p-56">
            <div className="">
                <motion.p
                    className="text-primary text-small-resp"
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
                    className="text-[14px] sm:text-base font-medium text-gray-400 py-6 max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 9 * 0.1 }}
                >
                    I'm a skilled software engineer with a passion for crafting
                    outstanding digital solutions. From web development to
                    application design, I bring creativity and technical
                    expertise to every project.
                </motion.p>
                {/* <Link href="" className="border border-primary">
                Check out my resume!
            </Link> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 10 * 0.1 }}
                >
                    <CustomButton buttonText="Check out my resume!" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
