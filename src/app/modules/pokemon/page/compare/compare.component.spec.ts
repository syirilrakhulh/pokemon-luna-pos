import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCompareComponent } from './compare.component';

describe('PokemonCompareComponent', () => {
  let component: PokemonCompareComponent;
  let fixture: ComponentFixture<PokemonCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonCompareComponent],
    });
    fixture = TestBed.createComponent(PokemonCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
