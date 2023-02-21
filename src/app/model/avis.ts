import { Utilisateur } from "./utilisateur";

export class Avis {
    idAvis!: number;
    titre!: string;
    descriptionAvis!: string;
    utilisateur!: Utilisateur;
}
