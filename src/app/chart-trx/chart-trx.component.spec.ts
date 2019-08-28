import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTrxComponent } from './chart-trx.component';

describe('ChartTrxComponent', () => {
  let component: ChartTrxComponent;
  let fixture: ComponentFixture<ChartTrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
