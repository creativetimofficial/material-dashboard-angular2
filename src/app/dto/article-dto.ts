import {UserDTO} from './user-dto';
import { CategoryDto } from './category-dto';

export class ArticleDto {
  public id: string;
  public title: string;
  public image: string;
  public owner: UserDTO;
  public views: number;
  public publishDate: string;
  public likes: string;
  public unlikes: string;
  public tags: string;
  public content: string;
  public createdDate: Date;
  public category: CategoryDto;
}
