"use client";

import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { roboto } from "../utils/fonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsWhatsapp } from "react-icons/bs";

const GetInTouch = ({ description, email, links, fullname }) => {
    const [ref, inView] = useInView();

    return (
        <section
            id="contact"
            className="relative px-10 sm:px-12 md:px-24 lg:px-36 xl:px-56 py-20 flex flex-col items-center container justify-center"
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
                className="text-2xl py-2 font-bold text-sub-resp text-slate-300 pr-5 text-getintouch-resp"
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
                {description}
            </motion.p>
            <CustomButton href={`mailto:${email}`}>Say Hello</CustomButton>
            <motion.div
                className="mt-20 flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 3 * 0.2 }}
            >
                <ul className="flex md:hidden items-center space-x-10 pb-5">
                    {links?.["GitHub"]?.url && (
                        <li>
                            <Link href={links?.["GitHub"]?.url} target="_blank">
                                <FiGithub className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                            </Link>
                        </li>
                    )}
                    {links?.["Twitter"]?.url && (
                        <li>
                            <Link
                                href={links?.["Twitter"]?.url}
                                target="_blank"
                            >
                                <FiTwitter className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                            </Link>
                        </li>
                    )}
                    {links?.["LinkedIn"]?.url && (
                        <li>
                            <Link
                                href={links?.["LinkedIn"]?.url}
                                target="_blank"
                            >
                                <FiLinkedin className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                            </Link>
                        </li>
                    )}
                    {links?.["Instagram"]?.url && (
                        <li>
                            <Link
                                href={links?.["Instagram"]?.url}
                                target="_blank"
                            >
                                <FiInstagram className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                            </Link>
                        </li>
                    )}
                    {links?.["Whatsapp"]?.url && (
                        <li>
                            <Link
                                href={links?.["Whatsapp"]?.url}
                                target="_blank"
                            >
                                <BsWhatsapp className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                            </Link>
                        </li>
                    )}
                </ul>
                <motion.p
                    className={`${roboto.className} text-slate-400 hover:text-primary cursor-pointer text-sm`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.7, delay: 4 * 0.2 }}
                >
                    Built by {fullname} using Next.js
                </motion.p>
                <motion.p
                    className={`${roboto.className} text-slate-400 hover:text-[#64ffda] cursor-pointer text-sm`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.7, delay: 4 * 0.2 }}
                >
                    <Link href="https://v4.brittanychiang.com" target="_blank">
                        Inspired by Brittany Chiang
                    </Link>
                </motion.p>
            </motion.div>
        </section>
    );
};
export default GetInTouch;
