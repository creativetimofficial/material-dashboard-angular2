import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserDTO} from '../dto/user-dto';
import { ArticleDto } from 'app/dto/article-dto';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient
  ) {
  }


  getArticles() {
    console.log(environment.articleUrl);
    return this.httpClient.get<ArticleDto[]>(environment.articleUrl);
  }

  getArticleById(id) {
    console.log(environment.articleUrl);
    return this.httpClient.get<ArticleDto>(environment.articleUrl + '/' + id);
  }

  public deleteArticle(article) {
    return this.httpClient.delete<ArticleDto>(environment.articleUrl + '/' + article.empId);
  }

  public createArticle(article) {
    return this.httpClient.post<ArticleDto>(environment.articleUrl, article);
  }
}
