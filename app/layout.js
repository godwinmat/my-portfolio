import EmailandSocials from "./components/EmailandSocials";
import EntryComponent from "./components/EntryComponent";
import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export const metadata = {
    title: "Matthew Godwin",
    description: "Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} relative bg-background`}>
                <EntryComponent>{children}</EntryComponent>
            </body>
        </html>
    );
}
