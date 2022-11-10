import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaneditorComponent } from './haneditor.component';

describe('HaneditorComponent', () => {
  let component: HaneditorComponent;
  let fixture: ComponentFixture<HaneditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaneditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
