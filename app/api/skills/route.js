import { sanityClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "skills"]
`;

export async function GET() {
    try {
        const skills = await sanityClient.fetch(query);

        return NextResponse.json({
            skills: skills?.map((skill) => ({
                id: skill?._id,
                title: skill?.title,
            })),
        });
    } catch (error) {
        return NextResponse.json({
            error: error?.message,
        });
    }
}
