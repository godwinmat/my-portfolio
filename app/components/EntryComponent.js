"use client";

import React, { useEffect, useState, createContext } from "react";
import Header from "./Header";
import Loading from "./Loading";
import EmailComponent from "./EmailComponent";
import SocialComponent from "./SocialComponent";

export const ProfileContext = createContext();

const EntryComponent = ({ children }) => {
    const [data, setData] = useState(null);

    async function getData() {
        const response = await fetch("/api/data", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: { tags: ["portfolio"] },
        });

        const data = await response.json();

        setData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <Loading />;

    return (
        <ProfileContext.Provider value={data}>
            <Header />
            {children}

            <EmailComponent email={data?.profile?.email} />
            <SocialComponent links={data?.links} />
        </ProfileContext.Provider>
    );
};

export default EntryComponent;
