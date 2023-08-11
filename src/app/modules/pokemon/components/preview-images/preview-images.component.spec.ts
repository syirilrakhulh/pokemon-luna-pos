import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewImagesComponent } from './preview-images.component';

describe('PreviewImagesComponent', () => {
  let component: PreviewImagesComponent;
  let fixture: ComponentFixture<PreviewImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PreviewImagesComponent]
    });
    fixture = TestBed.createComponent(PreviewImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
