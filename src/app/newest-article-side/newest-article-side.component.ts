import { Component, OnInit } from '@angular/core';
import { ArticleDto } from 'app/dto/article-dto';
import { HttpClientService } from 'app/service/httpclient.service';

@Component({
  selector: 'app-newest-article-side',
  templateUrl: './newest-article-side.component.html',
  styleUrls: ['./newest-article-side.component.scss']
})
export class NewestArticleSideComponent implements OnInit {
articles: ArticleDto[];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
      this.httpClientService.getArticles(0, 10, undefined, undefined).subscribe(
      (response) => {
        this.handleSuccessfulResponse(response);
      });
  }

  handleSuccessfulResponse(response) {
    this.articles = response.articles.content;
    console.log(this.articles);
  }
}
