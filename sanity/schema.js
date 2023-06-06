import { experience } from "./schemas/experience";
import { skills } from "./schemas/skills";
import { links } from "./schemas/links";
import { profile } from "./schemas/profile";
// import { work } from "./schemas/work";

export const schema = {
    types: [skills, experience, links, profile],
};
