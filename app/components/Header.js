"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { roboto } from "../utils/fonts";
import { scrollIntoTheView } from "../utils/scrollIntoView";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [showShadow, setShowShadow] = useState(false);
    const navigation = ["About", "Experience", "Projects", "Contact"];

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (prevScrollPos > currentScrollPos) {
                // Scrolling up, show the header
                document.getElementById("header").style.transform =
                    "translateY(0)";
            } else {
                // Scrolling down, hide the header
                document.getElementById("header").style.transform =
                    "translateY(-100%)";
            }

            if (currentScrollPos === 0) {
                setShowShadow(false);
            } else {
                setShowShadow(true);
            }

            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function onClick() {
        setOpenMenu(!openMenu);
    }

    return (
        <header
            id="header"
            className={`${roboto.className} ${
                showShadow ? "header-shadow" : ""
            } bg-background h-[70px] w-full fixed top-0 flex items-center px-9 sm:px-12 justify-between transition-all duration-500 z-[2]`}
        >
            <Image
                src="/assets/logo2.png"
                width={100}
                height={100}
                className=" -m-8 hover:-translate-x-1 hover:-translate-y-1 duration-200 cursor-pointer"
            />
            <div
                className="flex md:hidden w-8 h-6 relative justify-center items-center cursor-pointer z-10"
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

            <ol className="hidden md:flex items-center text-slate-300 space-x-8 font-normal drawer-items-small transition-all duration-500">
                {navigation.map((item, index) => (
                    <motion.li
                        key={index}
                        className="text-center cursor-pointer hover:text-primary "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 * 0.1 }}
                        onClick={() => scrollIntoTheView(item.toLowerCase())}
                    >
                        <p>
                            <span className="text-primary">{`0${
                                index + 1
                            }. `}</span>
                            {item}
                        </p>
                    </motion.li>
                ))}

                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 4 * 0.1 }}
                >
                    <Link
                        href="https://docs.google.com/document/d/1b-vQpI4ZysCIC9drfdGRJiey6_QOCTXX/edit?usp=drivesdk&ouid=102200615451025195571&rtpof=true&sd=true"
                        target="_blank"
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
                            {navigation.map((item, index) => (
                                <li
                                    className="text-center cursor-pointer hover:text-primary transition-all duration-300 hover:-translate-y-1"
                                    onClick={() => {
                                        setOpenMenu(false);
                                        scrollIntoTheView(item.toLowerCase());
                                    }}
                                >
                                    <div className="text-primary">{`0${
                                        index + 1
                                    }.`}</div>
                                    {item}
                                </li>
                            ))}
                            <li>
                                <CustomButton href="https://docs.google.com/document/d/1b-vQpI4ZysCIC9drfdGRJiey6_QOCTXX/edit?usp=drivesdk&ouid=102200615451025195571&rtpof=true&sd=true">
                                    Resume
                                </CustomButton>
                            </li>
                        </ol>
                    </nav>
                </motion.aside>
            )}
        </header>
    );
};

export default Header;
