import { Avis } from "./avis";
import { Offre } from "./offre";
import { Question } from "./question";
import { Role } from "./role";

export class Utilisateur {
    idUtilisateur!: number;
    nomUtilisateur!: string;
    prenomUtilisateur!: string;
    emailUtilisateur!: string;
    dateNaissanceUtilisateur!: Date;
    numTelUtilisateur!: number;
    username!: string;
    password!: string;
    roles!: Role[];
    questions!: Question[];
    avis!: Avis[];
    offres!: Offre[];

}
