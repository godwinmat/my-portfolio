"use client";

import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import GetInTouch from "../components/GetInTouch";
import Experience from "../components/Experience";
import { useContext } from "react";
import { ProfileContext } from "../components/EntryComponent";
import Header from "../components/Header";
import Projects from "../components/Projects";

export const revalidate = 10;

export default function Home() {
    const data = useContext(ProfileContext);
    const profile = data?.profile;
    const links = data?.links;
    const skills = data?.skills;
    const experiences = data?.experiences;
    const projects = data?.projects;

    return (
        <main className="absolute top-0 flex flex-col items-center w-full px-5 md:px-10">
            <Header />
            <Hero
                fullname={profile?.fullname}
                resume={profile?.resume}
                heroDescription={profile?.hero_description}
            />
            <AboutMe
                technologies={skills}
                paragraph1={profile?.about_me_paragraph1}
                paragraph2={profile?.about_me_paragraph2}
                image={profile?.image}
            />
            <Experience experiences={experiences} />
            <Projects projects={projects} />
            <GetInTouch
                links={links}
                email={profile?.email}
                fullname={profile?.fullname}
                description={profile?.contact_description}
            />
        </main>
    );
}
