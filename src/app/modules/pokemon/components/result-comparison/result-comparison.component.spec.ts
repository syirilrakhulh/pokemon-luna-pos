import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComparisonComponent } from './result-comparison.component';

describe('ResultComparisonComponent', () => {
  let component: ResultComparisonComponent;
  let fixture: ComponentFixture<ResultComparisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResultComparisonComponent]
    });
    fixture = TestBed.createComponent(ResultComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
