import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestArticleSideComponent } from './newest-article-side.component';

describe('NewestArticleSideComponent', () => {
  let component: NewestArticleSideComponent;
  let fixture: ComponentFixture<NewestArticleSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestArticleSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestArticleSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
