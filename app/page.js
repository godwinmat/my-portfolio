import Image from "next/image";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
    return (
        <main className="absolute top-0 flex flex-col items-center w-full">
            <Hero />
            <AboutMe />
            <GetInTouch />
        </main>
    );
}
