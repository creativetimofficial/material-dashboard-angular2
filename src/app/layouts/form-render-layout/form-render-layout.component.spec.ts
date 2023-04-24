import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRenderLayoutComponent } from './form-render-layout.component';

describe('FormRenderLayoutComponent', () => {
  let component: FormRenderLayoutComponent;
  let fixture: ComponentFixture<FormRenderLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRenderLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRenderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
