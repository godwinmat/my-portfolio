import Link from "next/link";
import React from "react";

const CustomButton = ({ href = "", buttonText }) => {
    return (
        <Link
            href={href}
            className="my-4 inline-block bg-primary rounded-[4px]"
        >
            <button className="border border-primary text-primary text-sm py-[18px] px-12 rounded-[4px] hover:-translate-x-[6px] hover:-translate-y-[6px] bg-background duration-300">
                {buttonText}
            </button>
        </Link>
    );
};

export default CustomButton;
