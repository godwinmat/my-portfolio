import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const EmailComponent = () => {
    return (
        <motion.div
            className="hidden md:block fixed bottom-0 right-7 lg:right-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 12 * 0.1 }}
        >
            <div className="flex flex-col items-center after:w-[2px] after:h-28 after:bg-slate-400 after:mt-10">
                <Link
                    href="mailto:gem3954@gmail.com"
                    className="text-slate-400 text-sm writing-rtl inline-block hover:text-primary hover:-translate-y-2 transition-all duration-500"
                >
                    gem3954@gmail.com
                </Link>
            </div>
        </motion.div>
    );
};

export default EmailComponent;
