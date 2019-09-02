import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotNewsSideComponent } from './hot-news-side.component';

describe('HotNewsSideComponent', () => {
  let component: HotNewsSideComponent;
  let fixture: ComponentFixture<HotNewsSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotNewsSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotNewsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
