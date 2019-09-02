import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserDTO} from '../dto/user-dto';
import { ArticleDto } from 'app/dto/article-dto';
import { ArticlePaging } from 'app/dto/paging';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getArticles(page: number, size:number, categoryId: number, hot: boolean) {
    let url = environment.apiUrl + 'articles?page=' + page + '&size=' + size;
    if (hot != undefined) {
      url = url + '&hot=' + hot;
    }
    if (categoryId != undefined) {
      url = url + '&categoryId=' + categoryId;
    }
    return this.httpClient.get<ArticlePaging[]>(url);
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
