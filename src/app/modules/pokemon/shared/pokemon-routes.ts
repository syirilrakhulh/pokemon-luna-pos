export const pokemonPaths = {
  base: 'pokemon',
  list: '',
  detail: ':id',
  compare: 'compare',
};

export const pokemonRoutes = {
  list: `/${pokemonPaths.base}/${pokemonPaths.list}`,
  detail: `/${pokemonPaths.base}/${pokemonPaths.detail}`,
  compare: `/${pokemonPaths.base}/${pokemonPaths.compare}`,
};
