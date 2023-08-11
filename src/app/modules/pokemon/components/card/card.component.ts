import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '~modules/pokemon/services/pokemon.service';
import { Pokemon } from '~modules/pokemon/interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  pokemon: Pokemon;
  isLoading: boolean = true;
  error: any;
  @Input() pokemonName: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetail({ name: this.pokemonName })
      .then((result) => {
        this.pokemon = result;
        this.isLoading = false;
      });
  }
}
