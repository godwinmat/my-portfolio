import React from "react";
import { motion } from "framer-motion";
import { roboto } from "../utils/fonts";
import { useInView } from "react-intersection-observer";
import { TbExternalLink } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

function Projects({ projects }) {
    const { inView, ref } = useInView({ triggerOnce: true });

    return (
        <section
            id="projects"
            className="md:px-10 lg:px-28 container flex flex-col justify-center items-center my-40"
        >
            <motion.div
                ref={ref}
                className="w-full flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0 * 0.1 }}
            >
                <h1 className="text-2xl font-bold text-sub-resp text-slate-300 pr-5">
                    <span
                        className={`${roboto.className} text-primary font-medium text-num-resp pr-3`}
                    >
                        03.
                    </span>
                    Some Things I've Built
                </h1>
                <div className="flex-1 md:w-32  h-[1px] bg-white/20" />
            </motion.div>
            {projects?.map((project, index) => (
                <div className="md:flex md:relative md:items-center my-10 w-full">
                    <motion.div
                        className={`relative w-full h-72 cursor-pointer rounded-sm shadow-lg md:hidden`}
                    >
                        {urlForImage(project?.image)?.url() && (
                            <Image
                                fill
                                src={urlForImage(project?.image)?.url()}
                                className="object-cover"
                            />
                        )}
                        <div className="absolute w-full h-full rounded-sm bg-background/90 text-slate-400 p-5">
                            <h3
                                className={`${roboto.className} text-primary text-sm`}
                            >
                                Featured Project
                            </h3>
                            <h1 className="text-white font-semibold text-2xl pt-1">
                                {project?.name}
                            </h1>
                            <p className="py-6">{project?.description}</p>
                            <p className={`${roboto.className} text-sm`}>
                                {project?.technologies?.join(" ")}
                            </p>
                            <div className="flex space-x-5 my-6">
                                {project?.github && (
                                    <Link href={project?.github}>
                                        <FiGithub size={23} target="_blank" />
                                    </Link>
                                )}
                                {project?.url && (
                                    <Link href={project?.url} target="_blank">
                                        <TbExternalLink size={23} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                    <div className="hidden md:flex relative w-full h-72 items-center">
                        <motion.div
                            className={`hidden md:block text-slate-400 absolute ${
                                index % 2 === 0 ? "left" : "right"
                            }-0 text-${
                                index % 2 === 0 ? "left" : "right"
                            } w-[60%] z-[1]`}
                        >
                            <h3
                                className={`${roboto.className} text-primary text-sm`}
                            >
                                Featured Project
                            </h3>
                            <h1 className="text-white font-semibold text-2xl py-3">
                                {project?.name}
                            </h1>
                            <p className="p-4 bg-[#02041e] rounded-md text-[15px]">
                                {project?.description}
                            </p>
                            <p className={`${roboto.className} text-sm py-3`}>
                                {project?.technologies?.join(" ")}
                            </p>
                            <div
                                className={`flex space-x-5 my-6 float-${
                                    index % 2 === 0 ? "left" : "right"
                                }`}
                            >
                                {project?.github && (
                                    <Link href={project?.github}>
                                        <FiGithub size={23} target="_blank" />
                                    </Link>
                                )}
                                {project?.url && (
                                    <Link href={project?.url} target="_blank">
                                        <TbExternalLink size={23} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                        <div
                            className={`absolute ${
                                index % 2 === 0 ? "right" : "left"
                            }-0 rounded-[4px] max-w-[60%] h-auto`}
                        >
                            <div className="absolute w-full h-full bg-primary/40 rounded-md hover:bg-transparent transition-all duration-100 cursor-pointer" />
                            {urlForImage(project?.image)?.url() && (
                                <Image
                                    src={urlForImage(project?.image)?.url()}
                                    width={500}
                                    height={500}
                                    className="rounded-[4px] w-full h-full bg-cover bg-center"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Projects;
