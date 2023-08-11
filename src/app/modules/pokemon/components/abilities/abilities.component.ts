import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityWithDesc, Pokemon } from '~modules/pokemon/interface';
import { PokemonService } from '~modules/pokemon/services/pokemon.service';
import { CapitalizePipe } from '~modules/shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
})
export class AbilitiesComponent implements OnInit {
  detailAbilities: AbilityWithDesc[];
  isLoading: boolean = true;
  error: any;
  @Input() abilities: Pokemon['abilities'];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const abilitiesName = this.abilities.map((ability) => ability.ability.name);
    this.pokemonService
      .getPokemonAbilities({ abilities: abilitiesName })
      .then((results) => {
        this.detailAbilities = results;
        this.isLoading = false;
      });
  }
}
