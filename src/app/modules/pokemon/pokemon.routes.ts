import { Route } from '@angular/router';
import { appPaths } from '../../app-routes';
import { pokemonPaths } from './shared/pokemon-routes';
import { PokemonListComponent } from './page/list/list.component';
import { PokemonDetailComponent } from './page/detail/detail.component';
import { PokemonCompareComponent } from './page/compare/compare.component';

export const POKEMON_ROUTES: Route[] = [
  {
    path: pokemonPaths.list,
    component: PokemonListComponent,
  },
  {
    path: pokemonPaths.compare,
    component: PokemonCompareComponent,
  },
  {
    path: pokemonPaths.detail,
    component: PokemonDetailComponent,
  },
  { path: '**', redirectTo: `/${appPaths.error404}` },
];
