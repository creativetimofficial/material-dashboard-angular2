import {Component, OnInit} from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: ArticleDto;

  constructor(
      private httpClientService: HttpClientService,
      private title: Title,
      private route: ActivatedRoute,
      private router: Router,
      private meta: Meta) {
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
    const id = this.route.params['value'].url;
    this.httpClientService.getArticleById(id).subscribe(
        (response) => {
          this.setMetaData(response);
          this.handleSuccessfulResponse(response);
        });
  }

  handleSuccessfulResponse(response) {
    this.article = response;
    const re = /<img/gi;
    this.article.content = this.article.content.replace(re, '<img class="img-fluid"');
  }

  setMetaData(data) {
    this.title.setTitle(data.title);
    this.meta.updateTag({'name': 'description', 'content': data.title});
    this.meta.updateTag({'property': 'og:title', 'content': data.title});
    this.meta.updateTag({'property': 'og:url', 'content': 'https://vietnam-trader.com/articles/' + data.url});
    this.meta.updateTag({'property': 'og:image', 'content': data.image});
    this.meta.updateTag({'property': 'og:image:alt', 'content': data.title});
    this.meta.updateTag({'property': 'og:description', 'content': data.title});
  }
}
