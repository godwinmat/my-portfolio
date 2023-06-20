import { experience } from "./schemas/experience";
import { skills } from "./schemas/skills";
import { socialLinks } from "./schemas/sociallinks";
import { profile } from "./schemas/profile";
import { projects } from "./schemas/projects";

export const schema = {
    types: [skills, experience, socialLinks, profile, projects],
};
