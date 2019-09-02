import {Component, OnInit} from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hot-news-side',
  templateUrl: './hot-news-side.component.html',
  styleUrls: ['./hot-news-side.component.scss']
})
export class HotNewsSideComponent implements OnInit {


  articles: ArticleDto[];

  constructor(private httpClientService: HttpClientService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.httpClientService.getArticles(0, 5, undefined, true).subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
        });
  }

  resize(arr, newSize) {
    arr.length = newSize;
  }

  handleSuccessfulResponse(response) {
    this.articles = response.articles.content;
    this.resize(this.articles, 3);
    console.log(this.articles);
  }

  onClickArticle(article) {
    this.router.navigate(['/articles/' + article.id]);
  }
}
