import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '~modules/pokemon/services/pokemon.service';
import { Pokemon } from '~modules/pokemon/interface';
import { ActivatedRoute } from '@angular/router';
import { StatsComponent } from '~modules/pokemon/components/stats/stats.component';
import { BasicInformationComponent } from '~modules/pokemon/components/basic-information/basic-information.component';
import { AbilitiesComponent } from '~modules/pokemon/components/abilities/abilities.component';
import { PreviewImagesComponent } from '~modules/pokemon/components/preview-images/preview-images.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    PreviewImagesComponent,
    BasicInformationComponent,
    StatsComponent,
    AbilitiesComponent,
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class PokemonDetailComponent {
  pokemon: Pokemon;
  isLoading: boolean = true;
  error: any;
  images: string[] = [];

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokemonService.getPokemonDetail({ id }).then((result) => {
      this.pokemon = result;
      if (result.sprites.other?.['official-artwork']?.front_default) {
        this.images.push(
          result.sprites.other['official-artwork'].front_default
        );
      }
      if (result.sprites.other?.dream_world) {
        const dreamWorldImages = Object.values(
          result.sprites.other.dream_world
        ).filter((url) => typeof url === 'string');
        this.images = this.images.concat(dreamWorldImages);
      }
      if (result.sprites.other?.home) {
        const homeImages = Object.values(result.sprites.other.home).filter(
          (url) => typeof url === 'string'
        );
        this.images = this.images.concat(homeImages);
      }
      if (result.sprites) {
        const images = Object.values(result.sprites).filter(
          (url) => typeof url === 'string'
        );
        this.images = this.images.concat(images);
      }
      this.isLoading = false;
    });
  }
}
