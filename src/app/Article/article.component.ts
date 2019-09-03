import { Component, OnInit } from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: ArticleDto;
  //
  //
  // constructor(private httpClientService: HttpClientService, private route: ActivatedRoute, private router: Router) {
  // }
  constructor(private titleService: Title, private httpClientService: HttpClientService, private route: ActivatedRoute, private router: Router, private meta: Meta) {
    route.params.subscribe(val => {
      const id = this.route.params['value'].id;
      this.httpClientService.getArticleById(id).subscribe(
          (response) => {
            console.log(response);
            this.handleSuccessfulResponse(response);
          });
    });
  }

  ngOnInit() {
    const id = this.route.params['value'].id;
    this.httpClientService.getArticleById(id).subscribe(
        (response) => {
          console.log(response);
          this.handleSuccessfulResponse(response);
        });
  }

  handleSuccessfulResponse(response) {
    this.article = response;
    const re = /<img/gi;
    this.article.content = this.article.content.replace(re, '<img class="img-fluid"');
    this.setTitle(this.article.title);
    this.createMetaTag();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  createMetaTag() {
    // const meta = document.createElement('meta');
    // meta.setAttribute('property','og:image'); //this line is the issue
    // meta.content = '' + this.article.image;
    // document.getElementsByTagName('head')[0].appendChild(meta);
    this.meta.updateTag({name: 'description', content: this.article.title});
    this.meta.updateTag({name: 'og:image', content: this.article.image});
  }
}
