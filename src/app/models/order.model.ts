export class Order {
    id?: string;
    numero: number;
    type: string;
    price?: number;
    etat: string;
    date: Date;
    dateFin: Date;
    uid: string;
    uidPro: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}