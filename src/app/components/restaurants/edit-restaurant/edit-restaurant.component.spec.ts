import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantComponent } from './edit-restaurant.component';

describe('EditRestaurantComponent', () => {
  let component: EditRestaurantComponent;
  let fixture: ComponentFixture<EditRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
