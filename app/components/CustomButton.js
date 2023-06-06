import Link from "next/link";
import React from "react";
import { roboto } from "../utils/fonts";

const CustomButton = ({ href = "", children }) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="my-4 inline-block bg-primary rounded-[4px]"
        >
            <button
                className={`${roboto.className} border border-primary text-primary text-sm py-[18px] px-12 rounded-[4px] hover:-translate-x-[6px] hover:-translate-y-[6px] bg-background duration-300`}
            >
                {children}
            </button>
        </Link>
    );
};

export default CustomButton;
