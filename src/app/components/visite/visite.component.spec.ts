import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteComponent } from './visite.component';

describe('VisiteComponent', () => {
  let component: VisiteComponent;
  let fixture: ComponentFixture<VisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
