import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '~modules/pokemon/services/pokemon.service';
import { Pokemon, PokemonListResult } from '~modules/pokemon/interface';
import { CardComponent } from '~modules/pokemon/components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class PokemonListComponent {
  queryOffset: number = 0;
  pokemons: PokemonListResult['results'] = [];
  isLoading: boolean = true;
  error: any;

  constructor(private pokemonService: PokemonService) {}

  fetchPokemon() {
    this.pokemonService
      .getPokemonList({ limit: 25, offset: this.queryOffset })
      .then((result) => {
        if (result.next) {
          const offset = new URL(result.next).searchParams.get('offset') ?? 0;
          this.queryOffset = +offset;
        }
        this.pokemons = this.pokemons.concat(result.results);
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.fetchPokemon();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.isLoading &&
      !this.error
    ) {
      this.fetchPokemon();
    }
  }
}
