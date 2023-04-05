export interface Job {
    _id: string;
    title: string;
    seniority: string;
    mandatory_knowledge: string[];
    optional_knowledge: string[];
}

export function getNewJob(): Job {
    return {
        _id: "",
        title: "",
        seniority: "",
        mandatory_knowledge: [],
        optional_knowledge: []
    }
}