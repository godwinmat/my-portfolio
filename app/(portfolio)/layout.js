import EntryComponent from "../components/EntryComponent";
import "../globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata = {
    title: "Matthew Godwin",
    description: "Portfolio",
    themeColor: "#020c1b",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} bg-background overflow-x-hidden transition-all duration-500`}
            >
                <EntryComponent>{children}</EntryComponent>
            </body>
        </html>
    );
}
