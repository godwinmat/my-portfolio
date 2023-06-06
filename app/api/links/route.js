import { sanityClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "links"]
`;

export async function GET() {
    try {
        const links = await sanityClient.fetch(query);

        return NextResponse.json({
            links: links?.map((link) => ({
                id: link?._id,
                title: link?.title,
                url: link?.url,
            })),
        });
    } catch (error) {
        return NextResponse.json({
            error: error?.message,
        });
    }
}
