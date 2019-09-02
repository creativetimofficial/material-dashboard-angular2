import { ArticleSummaryDTO } from "./article-dto";

export class ArticlePaging {
    public content: ArticleSummaryDTO;
    public last: boolean;
    public totalPages: number;
    public totalElements: number;
    public number: number;
    public sort: Sort;
    public size: number;
    public first: boolean;
    public numberOfElements: number;
    public empty: boolean;
}
export class Sort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}