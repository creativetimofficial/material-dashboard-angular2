import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/httpclient.service';
import {ArticlePaging} from 'app/dto/paging';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryDto} from '../dto/category-dto';

@Component({
  selector: 'app-article-category-inside',
  templateUrl: './article-category-inside.component.html',
  styleUrls: ['./article-category-inside.component.scss']
})
export class ArticleCategoryInsideComponent implements OnInit {
  articlePaging: ArticlePaging;
  categoryId: number;
  catgory: CategoryDto;

  constructor(private httpClientService: HttpClientService, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // this.categoryId = this.route.params['value'].id;
    this.activeRoute.params.subscribe(routeParams => {
      this.categoryId = routeParams.id;
      this.httpClientService.getArticles(0, 10, this.categoryId, undefined).subscribe(
          (response) => {
            this.handleSuccessfulResponse(response);
          });
    });
  }

  handleSuccessfulResponse(response) {
    this.articlePaging = response.articles;
    this.catgory = response.category;
  }

  pageChanged(event) {
    this.httpClientService.getArticles(event - 1, 10, undefined, undefined).subscribe(
        (response) => {
          this.handleSuccessfulResponse(response);
          this.scrollTop();
        });
  }

  scrollTop() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 5);
  }
}
