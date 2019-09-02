import { Component, OnInit } from '@angular/core';
import { ArticleDto } from 'app/dto/article-dto';
import { HttpClientService } from 'app/service/httpclient.service';
import { ArticlePaging } from 'app/dto/paging';

@Component({
  selector: 'app-newest-article',
  templateUrl: './newest-article.component.html',
  styleUrls: ['./newest-article.component.scss']
})
export class NewestArticleComponent implements OnInit {
  articlePaging: ArticlePaging;
  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService.getArticles(0, 9, undefined, undefined).subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
        });
  }

  handleSuccessfulResponse(response) {
    this.articlePaging = response.articles;
  }
  pageChanged(event) {
    this.httpClientService.getArticles(event - 1, 9, undefined, undefined).subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
          this.scrollTop();
        });
  }

  scrollTop() {
    let el = document.getElementById('newest-article');
    el.scrollIntoView({behavior:"smooth"});
    // const scrollToTop = window.setInterval(() => {
    //   const pos = window.pageYOffset;
    //   if (pos > 0) {
    //     window.scrollTo(0, pos - 20); // how far to scroll on each step
    //   } else {
    //     window.clearInterval(scrollToTop);
    //   }
    // }, 5);
  }
}
