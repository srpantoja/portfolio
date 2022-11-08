export type Experiences = {
    experiences: Experience[];
}

export type Experience = {
    title: string;
    modality: string;
    workingtime: string;
    activities: Activities[];
    skills: string;
}

export type Activities = {
    title: string;
}

