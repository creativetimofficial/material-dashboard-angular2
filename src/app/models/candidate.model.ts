import {Answer} from "./answer.model";

export interface Candidate {
    name: string;
    job_id: string;
    _id: string;
    answers: Record<string, Answer>;
}
