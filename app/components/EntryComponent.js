"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import EmailandSocials from "./EmailandSocials";
import Loading from "./Loading";

const EntryComponent = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <Header />
            {children}
            <EmailandSocials />
        </>
    );
};

export default EntryComponent;
