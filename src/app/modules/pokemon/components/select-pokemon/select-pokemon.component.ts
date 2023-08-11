import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '~modules/pokemon/services/pokemon.service';
import { Pokemon, SelectPokemonArgs } from '~modules/pokemon/interface';

@Component({
  selector: 'app-select-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.scss'],
})
export class SelectPokemonComponent implements OnInit {
  queryOffset: number = 0;
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;
  error: any;
  @Input() no: number;
  @Output() selectPokemonChange = new EventEmitter<SelectPokemonArgs>();
  @Input() selectedPokemon: Pokemon | undefined;

  constructor(private pokemonService: PokemonService) {}

  fetchPokemon() {
    this.pokemonService
      .getPokemonList({ limit: 25, offset: this.queryOffset })
      .then(async (result) => {
        const fetchedDetail = await Promise.all(
          result.results.map((pokemon) => {
            return this.pokemonService.getPokemonDetail({ name: pokemon.name });
          })
        );
        if (result.next) {
          const offset = new URL(result.next).searchParams.get('offset') ?? 0;
          this.queryOffset = +offset;
        }
        this.pokemons = this.pokemons.concat(fetchedDetail);
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.fetchPokemon();
  }

  onScroll(event: any) {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.fetchPokemon();
    }
  }

  selectPokemon(pokemon: Pokemon): void {
    this.selectPokemonChange.emit({
      no: this.no,
      pokemon: pokemon.id === this.selectedPokemon?.id ? undefined : pokemon,
    });
  }
}
