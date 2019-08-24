import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestArticleComponent } from './newest-article.component';

describe('NewestArticleComponent', () => {
  let component: NewestArticleComponent;
  let fixture: ComponentFixture<NewestArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
