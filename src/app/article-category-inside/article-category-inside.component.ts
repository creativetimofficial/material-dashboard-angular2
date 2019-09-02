import { Component, OnInit } from '@angular/core';
import {ArticleDto} from '../dto/article-dto';
import {HttpClientService} from '../service/httpclient.service';
import { ArticlePaging } from 'app/dto/paging';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-category-inside',
  templateUrl: './article-category-inside.component.html',
  styleUrls: ['./article-category-inside.component.scss']
})
export class ArticleCategoryInsideComponent implements OnInit {
  articlePaging: ArticlePaging;
  categoryId : number;
  categoryName: string;
  constructor(private httpClientService: HttpClientService, private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.categoryId = this.route.params['value'].id;
    this.activeRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
      this.categoryName = queryParams.name;
    });
    this.activeRoute.params.subscribe(routeParams => {
      this.categoryId = routeParams.id;
      this.httpClientService.getArticles(0, 10, this.categoryId, undefined).subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
        });
    });
  }

  handleSuccessfulResponse(response) {
    this.articlePaging = response;
  }
  pageChanged(event){
    console.log(event);
    this.httpClientService.getArticles(event-1, 10, undefined, undefined).subscribe(
      (response) => {
        this.handleSuccessfulResponse(response);
        this.scrollTop();
      });
  }
  scrollTop(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 5);
  }
}
