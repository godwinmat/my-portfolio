"use client";

import React, { useEffect, useState, createContext } from "react";
import Loading from "./Loading";
import EmailComponent from "./EmailComponent";
import SocialComponent from "./SocialComponent";

export const ProfileContext = createContext();

const EntryComponent = ({ children }) => {
    const [data, setData] = useState(null);

    async function getData() {
        try {
            const response = await fetch("/api/data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            setData(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <Loading />;

    return (
        <ProfileContext.Provider value={data}>
            {children}

            <EmailComponent email={data?.profile?.email} />
            <SocialComponent links={data?.links} />
        </ProfileContext.Provider>
    );
};

export default EntryComponent;
