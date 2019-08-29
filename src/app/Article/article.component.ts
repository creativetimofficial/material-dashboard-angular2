import { Component, OnInit } from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor(private httpClientService: HttpClientService, private route: ActivatedRoute, private router: Router) {
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
  }

}
