import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const SocialComponent = ({ links }) => {
    return (
        <motion.div
            className="hidden md:block fixed bottom-0 left-7 lg:left-12 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 12 * 0.1 }}
        >
            <ul className="flex flex-col items-center space-y-7 after:w-[2px] after:h-28 after:bg-slate-400 after:mt-10">
                {links?.["GitHub"]?.url && (
                    <li>
                        <Link href={links?.["GitHub"]?.url} target="_blank">
                            <FiGithub className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                )}
                {links?.["Twitter"]?.url && (
                    <li>
                        <Link href={links?.["Twitter"]?.url} target="_blank">
                            <FiTwitter className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                )}
                {links?.["LinkedIn"]?.url && (
                    <li>
                        <Link href={links?.["LinkedIn"]?.url} target="_blank">
                            <FiLinkedin className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                )}
                {links?.["Instagram"]?.url && (
                    <li>
                        <Link href={links?.["Instagram"]?.url} target="_blank">
                            <FiInstagram className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                )}
                {links?.["Whatsapp"]?.url && (
                    <li>
                        <Link href={links?.["Whatsapp"]?.url} target="_blank">
                            <BsWhatsapp className="text-slate-400 text-xl cursor-pointer hover:text-primary hover:-translate-y-2 transition-all duration-500" />
                        </Link>
                    </li>
                )}
            </ul>
        </motion.div>
    );
};

export default SocialComponent;
