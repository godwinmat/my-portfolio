"use client";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import Experience from "./components/Experience";
import { useContext } from "react";
import { ProfileContext } from "./components/EntryComponent";

export default function Home() {
    const data = useContext(ProfileContext);
    const profile = data?.profile;
    const links = data?.links;
    const skills = data?.skills;
    const experiences = data?.experiences;

    return (
        <main className="absolute top-0 flex flex-col items-center w-full">
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
            <GetInTouch
                links={links}
                email={profile?.email}
                fullname={profile?.fullname}
                description={profile?.contact_description}
            />
        </main>
    );
}
