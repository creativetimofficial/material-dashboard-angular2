import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCropperComponent } from './image-cropper.component';

describe('ImageCropperComponent', () => {
  let component: ImageCropperComponent;
  let fixture: ComponentFixture<ImageCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCropperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
