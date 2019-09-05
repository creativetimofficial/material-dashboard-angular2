import { Component, OnInit } from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

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
      private meta: Meta) {}

  ngOnInit() {
    const id = this.route.params['value'].id;
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

    this.meta.updateTag({ 'name': 'keywords', 'content': data.keywords });
    this.meta.updateTag({ 'name': 'description', 'content': data.title });
    this.meta.updateTag({ 'name': 'twitter:card', 'content': 'summary_large_image' });
    this.meta.updateTag({ 'name': 'twitter:title', 'content': data.title });
    this.meta.updateTag({ 'name': 'twitter:text:title', 'content': data.title });
    this.meta.updateTag({ 'name': 'twitter:description', 'content': data.title });
    this.meta.updateTag({ 'name': 'twitter:image', 'content': data.image });
    this.meta.updateTag({ 'name': 'twitter:image:alt', 'content': data.title });
    this.meta.updateTag({ 'property': 'og:title', 'content' : data.title });
    this.meta.updateTag({ 'property': 'og:url', 'content': 'https://vietnam-trader.com/test' });
    this.meta.updateTag({ 'property': 'og:image', 'content': data.image });
    this.meta.updateTag({ 'property': 'og:image:alt', 'content': data.title });
    this.meta.updateTag({ 'property': 'og:description', 'content': data.title });
  }
}
