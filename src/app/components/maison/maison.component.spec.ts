import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonComponent } from './maison.component';

describe('MaisonComponent', () => {
  let component: MaisonComponent;
  let fixture: ComponentFixture<MaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
