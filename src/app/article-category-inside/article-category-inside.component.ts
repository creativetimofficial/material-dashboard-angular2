import { Component, OnInit } from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';

@Component({
  selector: 'app-article-category-inside',
  templateUrl: './article-category-inside.component.html',
  styleUrls: ['./article-category-inside.component.scss']
})
export class ArticleCategoryInsideComponent implements OnInit {

  articles: ArticleDto[];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService.getArticles().subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
        });
  }

  handleSuccessfulResponse(response) {
    this.articles = response;
    console.log(this.articles);
  }
}
