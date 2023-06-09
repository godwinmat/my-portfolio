import { sanityClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const profileQuery = groq`
    *[_type == "profile"][0]
{ _id,
  email, 
  fullname,
  resume, 
  image, 
  about_me_paragraph1,
  about_me_paragraph2, 
  hero_description, 
  contact_description
}
`;

const experienceQuery = groq`
    *[_type == "experience"]
{ _id,
  title, 
  company, 
  location, 
  date, 
  roles, 
}
`;

const skillsQuery = groq`
    *[_type == "skills"]
`;

const linksQuery = groq`
    *[_type == "links"]
`;

export async function GET() {
    try {
        const profile = await sanityClient.fetch(profileQuery);
        const skills = await sanityClient.fetch(skillsQuery);
        const links = await sanityClient.fetch(linksQuery);
        const experiences = await sanityClient.fetch(experienceQuery);

        let newLinks = {};

        links?.forEach((link) => {
            newLinks[link.title] = { id: link._id, url: link.url };
        });

        const data = {
            links: newLinks,
            skills: skills?.map((skill) => ({
                id: skill?._id,
                title: skill?.title,
            })),
            profile,
            experiences,
        };

        revalidatePath("/data");
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            error: error?.message,
        });
    }
}
