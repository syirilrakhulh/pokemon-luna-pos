import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '~modules/pokemon/interface';

@Component({
  selector: 'app-selected-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-pokemon.component.html',
  styleUrls: ['./selected-pokemon.component.scss'],
})
export class SelectedPokemonComponent {
  @Input() no: number;
  @Input() pokemon: Pokemon | undefined;

  constructor() {}
}
