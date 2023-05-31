"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { roboto } from "../utils/fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GetInTouch = () => {
    const [ref, inView] = useInView();
    console.log(inView);

    return (
        <div
            id="contact"
            className="relative px-10 sm:px-12 md:px-24 lg:px-36 xl:px-56 min-h-screen flex flex-col items-center container justify-center"
        >
            <motion.span
                className={`${roboto.className} 
                text-primary font-medium text-base pr-3 py-3`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0 * 0.2 }}
            >
                04. What's Next?
            </motion.span>
            <motion.h1
                className="text-2xl font-bold text-sub-resp text-slate-300 pr-5 text-getintouch-resp"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 1 * 0.2 }}
            >
                Get In Touch
            </motion.h1>
            <motion.p
                ref={ref}
                className="py-5 text-center text-slate-500"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 2 * 0.2 }}
            >
                Although I'm not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I'll try my best to get back to you!
            </motion.p>
            <CustomButton href="mailto:gem3954@gmail.com">
                Say Hello
            </CustomButton>
            <motion.div
                className="absolute bottom-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 3 * 0.2 }}
            >
                <ul className="flex md:hidden items-center space-x-10 pb-5">
                    <li>
                        <Link
                            href="https://github.com/godwinmat"
                            target="_blank"
                        >
                            <FiGithub className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://twitter.com/matthewgodwin39"
                            target="_blank"
                        >
                            <FiTwitter className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/matthew-godwin-479554209/"
                            target="_blank"
                        >
                            <FiLinkedin className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://instagram.com/_godwinmat_"
                            target="_blank"
                        >
                            <FiInstagram className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                </ul>
                <motion.p
                    className={`${roboto.className} text-slate-400 hover:text-primary cursor-pointer text-sm`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.7, delay: 4 * 0.2 }}
                >
                    Built by Matthew Godwin
                </motion.p>
                <motion.p
                    className={`${roboto.className} text-slate-400 hover:text-[#64ffda] cursor-pointer text-sm`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.7, delay: 4 * 0.2 }}
                >
                    <Link href="https://v4.brittanychiang.com">
                        Inspired by Brittany Chiang
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
};
export default GetInTouch;
