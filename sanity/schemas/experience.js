export const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "company",
            title: "Company",
            type: "string",
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: "date",
            title: "Date",
            type: "string",
        },
        {
            name: "roles",
            title: "Roles",
            type: "array",
            of: [{ type: "text" }],
            validation: (Rule) => Rule.unique(),
        },
    ],
};
