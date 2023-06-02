import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const SocialComponent = () => {
    return (
        <motion.div
            className="hidden md:block fixed bottom-0 left-7 lg:left-12 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 12 * 0.1 }}
        >
            <ul className="flex flex-col items-center space-y-7 after:w-[2px] after:h-28 after:bg-slate-400 after:mt-10">
                <li>
                    <Link href="https://github.com/godwinmat" target="_blank">
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
                <li>
                    <Link href="https://wa.me/+2349061868349" target="_blank">
                        <BsWhatsapp className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
};

export default SocialComponent;
