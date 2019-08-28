import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEthComponent } from './chart-eth.component';

describe('ChartEthComponent', () => {
  let component: ChartEthComponent;
  let fixture: ComponentFixture<ChartEthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartEthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartEthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
