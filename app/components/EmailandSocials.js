"use client";

import Link from "next/link";
import React from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const EmailandSocials = () => {
    return (
        <div className="hidden md:block absolute bottom-0 left-0 right-0 top-0 h-screen">
            <motion.div
                className="absolute bottom-0 left-7 lg:left-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 12 * 0.1 }}
            >
                <ul className="flex flex-col items-center space-y-7 after:w-[2px] after:h-28 after:bg-slate-400 after:mt-10">
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
            </motion.div>
            <motion.div
                className="absolute bottom-0 right-7 lg:right-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 12 * 0.1 }}
            >
                <div className="flex flex-col items-center after:w-[2px] after:h-28 after:bg-slate-400 after:mt-10">
                    <Link
                        href="mailto:gem3954@gmail.com"
                        className="text-slate-400 text-sm writing-rtl inline-block hover:text-primary hover:-translate-y-2 transition-all duration-500"
                    >
                        gem3954@gmail.com
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default EmailandSocials;
