import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageComponent } from './garage.component';

describe('GarageComponent', () => {
  let component: GarageComponent;
  let fixture: ComponentFixture<GarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
