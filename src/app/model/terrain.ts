import { Offre } from "./offre";

export enum enumTypeTerrain {
    TERRAIN_VAGUE = "TERRAIN_VAGUE",
    TERRAIN_FORESTIER = "TERRAIN_FORESTIER",
    TERRAIN_AGRICOLE = "TERRAIN_AGRICOLE",
    TERRAIN_RESIDENTIEL = "TERRAIN_RESIDENTIEL",
    TERRAIN_EN_FRICHE = "TERRAIN_EN_FRICHE"

}

export class Terrain extends Offre {
    constructibilite!: boolean;
    typeTerrain!: enumTypeTerrain;

}
