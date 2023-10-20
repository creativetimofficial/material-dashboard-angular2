export class Product {
    id?: string;
    name: string;
    description?: string;
    price: number;
    imageURL?: string;
    categoryId: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}