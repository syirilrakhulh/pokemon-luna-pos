import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComparisonComponent } from '~modules/pokemon/components/result-comparison/result-comparison.component';
import { SelectedPokemonComponent } from '~modules/pokemon/components/selected-pokemon/selected-pokemon.component';
import { SelectPokemonComponent } from '~modules/pokemon/components/select-pokemon/select-pokemon.component';
import { Pokemon, SelectPokemonArgs } from '~modules/pokemon/interface';

@Component({
  selector: 'app-pokemon-compare',
  standalone: true,
  imports: [
    CommonModule,
    ResultComparisonComponent,
    SelectedPokemonComponent,
    SelectPokemonComponent,
  ],
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
})
export class PokemonCompareComponent {
  selectedPokemon1: Pokemon | undefined;
  selectedPokemon2: Pokemon | undefined;

  constructor() {}

  selectPokemon({ no, pokemon }: SelectPokemonArgs): void {
    if (no === 1) this.selectedPokemon1 = pokemon;
    if (no === 2) this.selectedPokemon2 = pokemon;
  }
}
