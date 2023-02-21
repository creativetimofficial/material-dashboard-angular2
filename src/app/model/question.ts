import { Utilisateur } from "./utilisateur";

export class Question {
    idQuestion!: number;
    objetQuestion!: string;
    descriptionQuestion!: string;
    utilisateur!: Utilisateur;

}
