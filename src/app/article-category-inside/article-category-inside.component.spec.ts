import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCategoryInsideComponent } from './article-category-inside.component';

describe('ArticleCategoryInsideComponent', () => {
  let component: ArticleCategoryInsideComponent;
  let fixture: ComponentFixture<ArticleCategoryInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCategoryInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCategoryInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
