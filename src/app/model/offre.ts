import { Avis } from "./avis";
import { Visite } from "./visite";

export enum enumEtatOffre {
    RENOVE = "RENOVE",
    NEUF = "NEUF",
    BON_ETAT = "BON_ETAT",
    PASSABLE = "PASSABLE",
    A_RENOVE = "A_RENOVE"
}

export class Offre {
    idOffre!: number;
    adresseOffre!: string;
    ville!: string;
    prixOffre!: number;
    surfaceOffre!: number;
    description!: string;
    imageOffre!: File;
    disponibiliteOffre!: boolean;
    orientationOffre!: string;
    etatOffre!: enumEtatOffre;
    typeOffre!: string;
    visite!: Visite[];
    avis!: Avis[];
}
