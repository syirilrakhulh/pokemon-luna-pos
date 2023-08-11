import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appPaths } from './app-routes';
import { pokemonPaths } from '~modules/pokemon/shared/pokemon-routes';
import { ErrorNotFoundComponent } from '~modules/shared/page/error-not-found/error-not-found.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: appPaths.home, redirectTo: pokemonPaths.base, pathMatch: 'full' },
      {
        path: pokemonPaths.base,
        loadChildren: () =>
          import('./modules/pokemon/pokemon.routes').then(
            (mod) => mod.POKEMON_ROUTES
          ),
      },
      { path: appPaths.error404, component: ErrorNotFoundComponent },
      { path: '**', redirectTo: appPaths.error404 },
    ]),
  ],
};
