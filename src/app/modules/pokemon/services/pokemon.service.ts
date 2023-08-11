import { Injectable } from '@angular/core';
import axios from 'axios';
import {
  AbilityWithDesc,
  Pokemon,
  PokemonAbilitiesQuery,
  PokemonDetailQuery,
  PokemonListQuery,
  PokemonListResult,
} from '../interface';
import { CapitalizePipe } from '~modules/shared/pipes/capitalize.pipe';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getPokemonList({ limit = 25, offset = 0 }: PokemonListQuery) {
    return axios
      .get<PokemonListResult>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      )
      .then(async ({ data }) => data);
  }

  getPokemonDetail({ name, id }: PokemonDetailQuery) {
    return axios
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name ?? id}`)
      .then(({ data }) => {
        return {
          ...data,
          name: new CapitalizePipe().transform(data.name),
        };
      });
  }

  getPokemonAbilities({ abilities }: PokemonAbilitiesQuery) {
    return Promise.all(
      abilities.map((ability) => {
        return axios
          .get<AbilityWithDesc>(`https://pokeapi.co/api/v2/ability/${ability}`)
          .then(({ data }) => {
            const shortDescription = data.flavor_text_entries.find(
              (effect) => effect.language.name === 'en'
            );

            const effect = data.effect_entries.find(
              (effect) => effect.language.name === 'en'
            );

            const descriptions = [];

            if (shortDescription)
              descriptions.push(shortDescription.flavor_text);

            if (effect) descriptions.push(effect.effect);

            return {
              ...data,
              name: new CapitalizePipe().transform(data.name),
              description: descriptions.join(' '),
            };
          });
      })
    );
  }
}
