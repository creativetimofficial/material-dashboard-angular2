import { Offre } from "./offre";

export class Appartement extends Offre {
    etageAppartement!: number;
    nbrPieceAppartement!: number;
    exterieurAppartement!: boolean;
}
