import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTabCardComponent } from './dashboard-tab-card.component';

describe('DashboardCardComponent', () => {
  let component: DashboardTabCardComponent;
  let fixture: ComponentFixture<DashboardTabCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTabCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTabCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
