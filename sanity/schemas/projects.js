export const projects = {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                },
            ],
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.unique(),
        },
        {
            name: "url",
            title: "URL",
            type: "string",
        },
        {
            name: "github",
            title: "Github",
            type: "string",
        },
    ],
};
