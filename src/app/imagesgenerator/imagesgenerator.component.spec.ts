import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesgeneratorComponent } from './imagesgenerator.component';

describe('ImagesgeneratorComponent', () => {
  let component: ImagesgeneratorComponent;
  let fixture: ComponentFixture<ImagesgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesgeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
