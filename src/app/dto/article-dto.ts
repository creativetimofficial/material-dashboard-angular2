export class ArticleDto {
  public id: string;
  public title: string;
  public image: string;
  public username: string;
  public views: number;
  public likes: number;
  public unlikes: number;
  public tags: string;
  public content: string;
  public publishDate: string;
  public createdDate: Date;
}
export class ArticleSummaryDTO {
  public id: string;
  public title: string;
  public image: string;
  public username: string;
  public level: number;
  public type: string;
  public views: number;
  public likes: number;
  public unlikes: number;
  public tags: string;
  public createdDate: Date;
  public publishDate: string;
}