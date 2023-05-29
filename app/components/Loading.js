import Image from "next/image";
import React from "react";

const Loading = () => {
    return (
        <div
            className="flex justify-center items-center w-full
        h-screen  animate-pulse duration-75"
        >
            <Image src="/assets/logo2.png" width={200} height={200} />
        </div>
    );
};

export default Loading;
