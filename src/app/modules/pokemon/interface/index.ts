export interface PokemonListQuery {
  limit: number;
  offset: number;
}

export interface PokemonListResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface PokemonDetailWithName {
  name: string;
  id?: undefined;
}

export interface PokemonDetailWithID {
  name?: undefined;
  id: string;
}

export type PokemonDetailQuery = PokemonDetailWithName | PokemonDetailWithID;

export interface PokemonAbilitiesQuery {
  abilities: string[];
}

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
  past_types: PokemonPastType[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}
export interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: OtherPokemonSprites;
  versions: VersionSprites;
}

export interface OtherPokemonSprites {
  dream_world: DreamWorld;
  'official-artwork': OfficialArtwork;
  home: Home;
}

export interface DreamWorld {
  front_default: string | null;
  front_female: string | null;
}

interface OfficialArtwork {
  front_default: string | null;
}

export interface Home {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface VersionSprites {
  'generation-i': GenerationISprites;
  'generation-ii': GenerationIISprites;
  'generation-iii': GenerationIIISprites;
  'generation-iv': GenerationIVSprites;
  'generation-v': GenerationVSprites;
  'generation-vi': GenerationVISprites;
  'generation-vii': GenerationVIISprites;
  'generation-viii': GenerationVIIISprites;
}

export interface GenerationISprites {
  'red-blue': RedBlue;
  yellow: Yellow;
}

export interface RedBlue {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface Yellow {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface GenerationIISprites {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Crystal {
  back_default: string | null;
  back_shiny: string | null;
  back_shiny_transparent: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_transparent: string | null;
  front_transparent: string | null;
}

export interface Gold {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

interface Silver {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

export interface GenerationIIISprites {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreen;
  'ruby-sapphire': RubySapphire;
}

export interface Emerald {
  front_default: string | null;
  front_shiny: string | null;
}

export interface FireredLeafgreen {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface RubySapphire {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface GenerationIVSprites {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface DiamondPearl {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface HeartgoldSoulsilver {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface Platinum {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVSprites {
  'black-white': BlackWhite;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface Animated {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  back_shiny_female: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVISprites {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  'x-y': XY;
}

export interface OmegarubyAlphasapphire {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface XY {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIISprites {
  icons: GenerationViiIcons;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

export interface GenerationViiIcons {
  front_default: string | null;
  front_female: string | null;
}

export interface UltraSunUltraMoon {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIIISprites {
  icons: GenerationViiiIcons;
}

export interface GenerationViiiIcons {
  front_default: string | null;
  front_female: string | null;
}

export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonPastType {
  generation: NamedAPIResource;
  types: PokemonType[];
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: Name[];
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: AbilityPokemon[];
}

export interface AbilityEffectChange {
  effect_entries: Effect[];
  version_group: NamedAPIResource;
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;
}

export interface Name {
  name: string;
  language: NamedAPIResource;
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

export interface Effect {
  effect: string;
  language: NamedAPIResource;
}

export interface AbilityWithDesc extends Ability {
  description: string;
}

export interface SelectPokemonArgs {
  no: number;
  pokemon: Pokemon | undefined;
}
