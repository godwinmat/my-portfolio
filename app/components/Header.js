"use client";

import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const openMenuStyle = "before";

    function onClick() {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className="bg-transparent h-[100px] sticky top-0 flex items-center px-9 sm:px-12 z-50 justify-between">
            <Image
                src="/assets/logo2.png"
                width={100}
                height={100}
                className=" -m-8 hover:-translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer z-50"
            />
            <div
                className="flex md:hidden w-8 h-6 relative justify-center items-center cursor-pointer z-50"
                onClick={onClick}
            >
                <div
                    className={`absolute right-0 bg-primary h-[2px] w-8 rounded-sm duration-1000 before:absolute before:right-0 before:h-[3px] before:rounded-sm before:bg-primary after:absolute after:right-0 after:h-[2px]  after:bg-primary  after:rounded-sm ${
                        openMenu
                            ? "bg-transparent before:w-[100%] after:w-[100%] before:absolute after:absolute  after:rotate-[135deg] before:rotate-45"
                            : "before:my-[10px] after:w-[120%]  after:-my-[10px] before:w-[80%] "
                    }  before:transition-all after:transition-all `}
                />
            </div>

            <ol className="hidden md:flex items-center text-slate-300 space-x-8 font-medium drawer-items-small transition-all duration-500">
                <motion.li
                    className="text-center cursor-pointer hover:text-primary "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 * 0.1 }}
                >
                    <span className="text-primary">01. </span>
                    About
                </motion.li>
                <motion.li
                    className="text-center cursor-pointer hover:text-primary "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 * 0.1 }}
                >
                    <span className="text-primary">02. </span>
                    Experience
                </motion.li>
                <motion.li
                    className="text-center cursor-pointer hover:text-primary "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 * 0.1 }}
                >
                    <span className="text-primary">03. </span>
                    Work
                </motion.li>
                <motion.li
                    className="text-center cursor-pointer hover:text-primary "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3 * 0.1 }}
                >
                    <span className="text-primary">04. </span>
                    Contact
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 4 * 0.1 }}
                >
                    <Link
                        href={""}
                        className="my-4 inline-block bg-primary rounded-[4px]"
                    >
                        <button className="border border-primary text-primary text-sm py-2 px-3 rounded-[4px] hover:-translate-x-[6px] hover:-translate-y-[6px] bg-background duration-300">
                            Resume
                        </button>
                    </Link>
                </motion.li>
            </ol>

            {openMenu && (
                <motion.aside
                    className="flex md:hidden absolute w-full h-screen bg-transparent backdrop-blur-sm right-0 left-0 top-0 bottom-0 shadow-2xl shadow-background overflow-hidden"
                    initial={{ opacity: 0, x: "50%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-[30%] h-screen self-end bg-transparent" />
                    <nav className="w-[70%] h-screen bg-background flex justify-center items-center">
                        <ol className="text-slate-300 space-y-6 font-medium drawer-items">
                            <li className="text-center cursor-pointer hover:text-primary transition-all duration-300 hover:-translate-y-1">
                                <div className="text-primary">01.</div>
                                About
                            </li>
                            <li className="text-center cursor-pointer hover:text-primary transition-all duration-300 hover:-translate-y-1">
                                <div className="text-primary">02.</div>
                                Experience
                            </li>
                            <li className="text-center cursor-pointer hover:text-primary transition-all duration-300 hover:-translate-y-1">
                                <div className="text-primary">03.</div>
                                Work
                            </li>
                            <li className="text-center cursor-pointer hover:text-primary transition-all duration-300 hover:-translate-y-1">
                                <div className="text-primary">04.</div>
                                Contact
                            </li>
                            <li>
                                <CustomButton buttonText="Resume" />
                            </li>
                        </ol>
                    </nav>
                </motion.aside>
            )}
        </nav>
    );
};

export default Header;
