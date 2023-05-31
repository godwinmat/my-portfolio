"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Loading from "./Loading";
import EmailComponent from "./EmailComponent";
import SocialComponent from "./SocialComponent";

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

            <EmailComponent />
            <SocialComponent />
        </>
    );
};

export default EntryComponent;
