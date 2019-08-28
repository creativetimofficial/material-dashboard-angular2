import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPricingComponent } from './current-pricing.component';

describe('HotNewsComponent', () => {
  let component: CurrentPricingComponent;
  let fixture: ComponentFixture<CurrentPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
